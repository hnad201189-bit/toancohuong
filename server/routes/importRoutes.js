import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'
import { slugify } from '../slugify.js'

export const importRouter = Router()

const BLANK_LESSON_CONTENT = {
  theory: { cards: [] },
  video: { caption: '' },
  quiz: [],
  essays: [],
  flashcards: [],
  exam: { mcqCount: 0, essayCount: 0, minutes: 0, matrix: [] },
}

function normalizeCorrectIndex(val) {
  const s = String(val ?? '').trim().toUpperCase()
  if (['A', 'B', 'C', 'D'].includes(s)) return s.charCodeAt(0) - 65
  const n = Number(s)
  if (!Number.isNaN(n)) {
    if (n >= 1 && n <= 4) return n - 1
    if (n >= 0 && n <= 3) return n
  }
  return 0
}

function loadOrInitLesson(topicId, title) {
  const row = db.prepare('SELECT * FROM lessons WHERE topic_id = ?').get(topicId)
  if (row) return { content: JSON.parse(row.content), title: row.title, isNew: false }
  if (!title) return null
  return { content: structuredClone(BLANK_LESSON_CONTENT), title, isNew: true }
}

function saveLesson(topicId, title, content) {
  db.prepare(
    `INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)
     ON CONFLICT(topic_id) DO UPDATE SET title = excluded.title, content = excluded.content`
  ).run(topicId, title, JSON.stringify(content))
  db.prepare('UPDATE topics SET has_lesson = 1 WHERE id = ?').run(topicId)
}

// ---- Bulk import: areas ----
importRouter.post('/areas', requireAuth, (req, res) => {
  const rows = req.body?.rows
  if (!Array.isArray(rows)) return res.status(400).json({ error: 'Thiếu danh sách dữ liệu' })

  let nextOrder = (db.prepare('SELECT MAX(order_num) AS m FROM areas').get().m || 0) + 1
  const upsert = db.prepare(
    `INSERT INTO areas (id, order_num, name, description, progress) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET name = excluded.name, description = excluded.description, progress = excluded.progress`
  )

  let count = 0
  for (const row of rows) {
    const name = (row.name || '').trim()
    if (!name) continue
    const id = slugify(name)
    const existing = db.prepare('SELECT order_num FROM areas WHERE id = ?').get(id)
    const orderNum = existing ? existing.order_num : nextOrder++
    upsert.run(id, orderNum, name, (row.description || '').trim(), Number(row.progress) || 0)
    count++
  }
  res.json({ imported: count })
})

// ---- Bulk import: topics under an area ----
importRouter.post('/areas/:areaId/topics', requireAuth, (req, res) => {
  const area = db.prepare('SELECT id FROM areas WHERE id = ?').get(req.params.areaId)
  if (!area) return res.status(404).json({ error: 'Không tìm thấy mảng kiến thức' })

  const rows = req.body?.rows
  if (!Array.isArray(rows)) return res.status(400).json({ error: 'Thiếu danh sách dữ liệu' })

  let maxOrder =
    db.prepare('SELECT MAX(sort_order) AS m FROM topics WHERE area_id = ?').get(req.params.areaId).m ?? -1
  const upsert = db.prepare(
    `INSERT INTO topics (id, area_id, sort_order, name, progress, has_lesson) VALUES (?, ?, ?, ?, ?, 0)
     ON CONFLICT(id) DO UPDATE SET name = excluded.name, progress = excluded.progress`
  )

  let count = 0
  for (const row of rows) {
    const name = (row.name || '').trim()
    if (!name) continue
    const id = `${req.params.areaId}--${slugify(name)}`
    const existing = db.prepare('SELECT sort_order FROM topics WHERE id = ?').get(id)
    const sortOrder = existing ? existing.sort_order : ++maxOrder
    upsert.run(id, req.params.areaId, sortOrder, name, Number(row.progress) || 0)
    count++
  }
  res.json({ imported: count })
})

// ---- Bulk import: HSG topics ----
importRouter.post('/hsg-topics', requireAuth, (req, res) => {
  const rows = req.body?.rows
  if (!Array.isArray(rows)) return res.status(400).json({ error: 'Thiếu danh sách dữ liệu' })

  let maxOrder = db.prepare('SELECT MAX(sort_order) AS m FROM hsg_topics').get().m ?? -1
  const upsert = db.prepare(
    `INSERT INTO hsg_topics (id, sort_order, name, progress) VALUES (?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET name = excluded.name, progress = excluded.progress`
  )

  let count = 0
  for (const row of rows) {
    const name = (row.name || '').trim()
    if (!name) continue
    const id = `hsg-${slugify(name)}`
    const existing = db.prepare('SELECT sort_order FROM hsg_topics WHERE id = ?').get(id)
    const sortOrder = existing ? existing.sort_order : ++maxOrder
    upsert.run(id, sortOrder, name, Number(row.progress) || 0)
    count++
  }
  res.json({ imported: count })
})

// ---- Bulk import: quiz questions into a topic's lesson ----
importRouter.post('/topics/:topicId/quiz', requireAuth, (req, res) => {
  const topic = db.prepare('SELECT id FROM topics WHERE id = ?').get(req.params.topicId)
  if (!topic) return res.status(404).json({ error: 'Không tìm thấy chuyên đề' })

  const { rows, title } = req.body || {}
  if (!Array.isArray(rows)) return res.status(400).json({ error: 'Thiếu danh sách câu hỏi' })

  const lesson = loadOrInitLesson(req.params.topicId, title)
  if (!lesson) {
    return res.status(400).json({ error: 'Chuyên đề chưa có bài học mẫu, vui lòng nhập tiêu đề bài học' })
  }

  const newQuestions = rows
    .map((r) => ({
      question: (r.question || '').trim(),
      options: [r.option_a, r.option_b, r.option_c, r.option_d].map((o) => (o ?? '').trim()),
      correctIndex: normalizeCorrectIndex(r.correct),
    }))
    .filter((q) => q.question && q.options.every((o) => o))

  lesson.content.quiz = [...(lesson.content.quiz || []), ...newQuestions]
  saveLesson(req.params.topicId, lesson.title, lesson.content)
  res.json({ imported: newQuestions.length })
})

// ---- Bulk import: flashcards into a topic's lesson ----
importRouter.post('/topics/:topicId/flashcards', requireAuth, (req, res) => {
  const topic = db.prepare('SELECT id FROM topics WHERE id = ?').get(req.params.topicId)
  if (!topic) return res.status(404).json({ error: 'Không tìm thấy chuyên đề' })

  const { rows, title } = req.body || {}
  if (!Array.isArray(rows)) return res.status(400).json({ error: 'Thiếu danh sách flashcard' })

  const lesson = loadOrInitLesson(req.params.topicId, title)
  if (!lesson) {
    return res.status(400).json({ error: 'Chuyên đề chưa có bài học mẫu, vui lòng nhập tiêu đề bài học' })
  }

  const newCards = rows
    .map((r) => ({ front: (r.front || '').trim(), back: (r.back || '').trim() }))
    .filter((c) => c.front && c.back)

  lesson.content.flashcards = [...(lesson.content.flashcards || []), ...newCards]
  saveLesson(req.params.topicId, lesson.title, lesson.content)
  res.json({ imported: newCards.length })
})
