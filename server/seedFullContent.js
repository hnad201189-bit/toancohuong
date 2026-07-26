import { db } from './db.js'
import { DAI_SO } from './content/daiSo.mjs'
import { LUONG_GIAC } from './content/luongGiac.mjs'
import { HAM_SO_GIOI_HAN } from './content/hamSoGioiHan.mjs'
import { HINH_HOC_KHONG_GIAN } from './content/hinhHocKhongGian.mjs'
import { THONG_KE_XAC_SUAT } from './content/thongKeXacSuat.mjs'
import { TOAN_UNG_DUNG } from './content/toanUngDung.mjs'
import { HSG } from './content/hsg.mjs'
import { SAMPLE_LESSON } from '../src/data/topics.js'

const { id: sampleId, areaId: _sampleAreaId, title: sampleTitle, ...sampleContent } = SAMPLE_LESSON

const ALL_REGULAR = {
  ...DAI_SO,
  ...LUONG_GIAC,
  ...HAM_SO_GIOI_HAN,
  ...HINH_HOC_KHONG_GIAN,
  ...THONG_KE_XAC_SUAT,
  ...TOAN_UNG_DUNG,
  [sampleId]: { title: sampleTitle, ...sampleContent },
}

const upsertLesson = db.prepare(
  `INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)
   ON CONFLICT(topic_id) DO UPDATE SET title = excluded.title, content = excluded.content`
)

export function seedFullContent() {
  let regularCount = 0
  const missingTopics = []
  for (const [topicId, lesson] of Object.entries(ALL_REGULAR)) {
    const topic = db.prepare('SELECT id FROM topics WHERE id = ?').get(topicId)
    if (!topic) {
      missingTopics.push(topicId)
      continue
    }
    const { title, ...content } = lesson
    upsertLesson.run(topicId, title, JSON.stringify(content))
    db.prepare('UPDATE topics SET has_lesson = 1 WHERE id = ?').run(topicId)
    regularCount++
  }

  let hsgCount = 0
  const missingHsg = []
  for (const [topicId, lesson] of Object.entries(HSG)) {
    const topic = db.prepare('SELECT id FROM hsg_topics WHERE id = ?').get(topicId)
    if (!topic) {
      missingHsg.push(topicId)
      continue
    }
    const { title, ...content } = lesson
    upsertLesson.run(topicId, title, JSON.stringify(content))
    db.prepare('UPDATE hsg_topics SET has_lesson = 1 WHERE id = ?').run(topicId)
    hsgCount++
  }

  console.log(
    `Seeded lesson content: ${regularCount}/${Object.keys(ALL_REGULAR).length} regular, ${hsgCount}/${Object.keys(HSG).length} HSG`
  )
  if (missingTopics.length) console.log('Missing regular topic ids:', missingTopics)
  if (missingHsg.length) console.log('Missing HSG topic ids:', missingHsg)
}

// Runs on every server start (not just first boot). Lessons seeded before the
// exam-bank feature existed only have exam.mcqCount/essayCount (no actual
// exam.mcq/exam.essays question arrays), which left "Đề kiểm tra" empty on
// any deployment whose database predates that change — seedIfEmpty() only
// populates an empty database, so those older rows were never refreshed.
// This patches only lessons still missing exam.mcq, leaving anything that
// already has a populated exam bank untouched (e.g. future admin edits).
export function backfillMissingExamBanks() {
  const rows = db.prepare('SELECT topic_id, content FROM lessons').all()
  const updateLesson = db.prepare('UPDATE lessons SET title = ?, content = ? WHERE topic_id = ?')
  let patched = 0

  for (const row of rows) {
    let content
    try {
      content = JSON.parse(row.content)
    } catch {
      continue
    }
    if (content.exam?.mcq?.length > 0) continue

    const source = ALL_REGULAR[row.topic_id] || HSG[row.topic_id]
    if (!source) continue

    const { title, ...sourceContent } = source
    updateLesson.run(title, JSON.stringify(sourceContent), row.topic_id)
    patched++
  }

  if (patched > 0) {
    console.log(`Backfilled exam question banks for ${patched} lesson(s) that were missing exam.mcq.`)
  }
  return patched
}
