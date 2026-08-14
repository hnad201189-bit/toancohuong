import { Router } from 'express'
import { db } from '../db.js'
import { requireStudent } from '../studentAuth.js'

export const attemptsRouter = Router()

const KINDS = ['game', 'quiz']

function serialize(row) {
  return {
    id: row.id,
    kind: row.kind,
    itemId: row.item_id,
    itemLabel: row.item_label,
    isCorrect: row.is_correct === null ? null : !!row.is_correct,
    score: row.score,
    maxScore: row.max_score,
    createdAt: row.created_at,
  }
}

// Ghi lại 1 lượt làm bài (chơi xong 1 game, hoặc làm xong 1 bài trắc nghiệm)
// của học sinh đang đăng nhập — dùng cho trang "Kết quả của tôi".
attemptsRouter.post('/', requireStudent, (req, res) => {
  const { kind, itemId, itemLabel, isCorrect, score, maxScore } = req.body || {}
  if (!KINDS.includes(kind) || !itemId?.trim()) {
    return res.status(400).json({ error: 'Thiếu kind hoặc itemId hợp lệ' })
  }

  const result = db
    .prepare(
      `INSERT INTO attempts (student_id, kind, item_id, item_label, is_correct, score, max_score, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .run(
      req.student.id,
      kind,
      itemId.trim(),
      itemLabel?.trim() || '',
      isCorrect === undefined ? null : isCorrect ? 1 : 0,
      score === undefined ? null : score,
      maxScore === undefined ? null : maxScore,
      new Date().toISOString()
    )

  const row = db.prepare('SELECT * FROM attempts WHERE id = ?').get(result.lastInsertRowid)
  res.status(201).json(serialize(row))
})

// Lịch sử làm bài của chính học sinh đang đăng nhập, mới nhất trước.
attemptsRouter.get('/me', requireStudent, (req, res) => {
  const rows = db
    .prepare('SELECT * FROM attempts WHERE student_id = ? ORDER BY created_at DESC LIMIT 300')
    .all(req.student.id)
  res.json(rows.map(serialize))
})
