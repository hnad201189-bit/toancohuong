import { Router } from 'express'
import multer from 'multer'
import Anthropic from '@anthropic-ai/sdk'
import { quotaFor, identityFor, getUsageCount, incrementUsage } from '../quota.js'

export const solveRouter = Router()

function quotaMessage(student, quota) {
  if (student?.status === 'approved') {
    return `Bạn đã dùng hết ${quota} lượt giải bài hôm nay. Vui lòng quay lại vào ngày mai.`
  }
  if (student) {
    return `Tài khoản của bạn đang chờ quản trị viên duyệt nên vẫn giới hạn ${quota} lượt/ngày như khách. Vui lòng chờ duyệt để được tăng lên 5 lượt/ngày, hoặc quay lại vào ngày mai.`
  }
  return `Bạn đã dùng hết ${quota} lượt giải bài miễn phí hôm nay. Đăng ký tài khoản và chờ quản trị viên duyệt để được 5 lượt/ngày, hoặc quay lại vào ngày mai.`
}

// GET /api/solve-image/quota — lets the frontend show remaining uses without spending one.
solveRouter.get('/quota', (req, res) => {
  const quota = quotaFor(req.student)
  const used = getUsageCount(identityFor(req))
  res.json({ quota, used, remaining: Math.max(0, quota - used) })
})

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
})

const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

const SYSTEM_PROMPT = `Bạn là giáo viên Toán 11 người Việt, chuyên giải bài từ ảnh chụp đề bài.
Đọc kỹ đề bài trong ảnh (có thể là ảnh chụp, ảnh chụp màn hình, hoặc ảnh vẽ tay), sau đó giải chi tiết.

Chỉ trả lời bằng JSON hợp lệ, không thêm văn bản nào khác, theo đúng cấu trúc:
{
  "problem": "đề bài đã đọc được, diễn đạt lại rõ ràng bằng tiếng Việt",
  "steps": ["bước giải 1", "bước giải 2", "..."],
  "answer": "đáp số / kết luận cuối cùng"
}

Quy tắc trình bày công thức toán trong các trường "problem", từng phần tử của "steps", và "answer":
- Công thức toán viết bằng LaTeX, đặt trong dấu $ cho công thức nằm trong dòng (VD: $x^2+1$) hoặc $$ cho công thức hiển thị riêng một dòng (VD: $$x = \\dfrac{-b}{2a}$$).
- Phần chữ (giải thích) viết bình thường bằng tiếng Việt, xen kẽ với công thức.
- Nếu ảnh không phải bài toán hoặc không đọc được, trả về "problem" mô tả điều đó và "steps": [], "answer": "".`

solveRouter.post('/', upload.single('image'), async (req, res) => {
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(503).json({
      error: 'Chưa cấu hình ANTHROPIC_API_KEY trên server. Xem README để thêm API key vào server/.env.',
    })
  }
  if (!req.file) {
    return res.status(400).json({ error: 'Thiếu ảnh bài toán' })
  }
  if (!ALLOWED_TYPES.has(req.file.mimetype)) {
    return res.status(400).json({ error: 'Chỉ hỗ trợ ảnh JPEG, PNG, WEBP hoặc GIF' })
  }

  const quota = quotaFor(req.student)
  const identity = identityFor(req)
  const used = getUsageCount(identity)
  if (used >= quota) {
    return res.status(429).json({ error: quotaMessage(req.student, quota), quota, used, remaining: 0 })
  }

  try {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: req.file.mimetype,
                data: req.file.buffer.toString('base64'),
              },
            },
            { type: 'text', text: 'Hãy đọc đề bài toán trong ảnh này và giải chi tiết theo đúng định dạng JSON đã hướng dẫn.' },
          ],
        },
      ],
    })

    const rawText = response.content.find((block) => block.type === 'text')?.text || ''
    const jsonText = rawText.replace(/^```json\s*|^```\s*|\s*```$/g, '').trim()

    let parsed
    try {
      parsed = JSON.parse(jsonText)
    } catch {
      return res.status(502).json({ error: 'AI trả về định dạng không đọc được, vui lòng thử lại.' })
    }

    incrementUsage(identity)
    res.json({
      problem: parsed.problem || '',
      steps: Array.isArray(parsed.steps) ? parsed.steps : [],
      answer: parsed.answer || '',
      quota,
      used: used + 1,
      remaining: Math.max(0, quota - used - 1),
    })
  } catch (err) {
    console.error('solve-image error:', err)
    res.status(502).json({ error: 'Gọi AI thất bại: ' + err.message })
  }
})
