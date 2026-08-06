import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'

export const topicsRouter = Router()

topicsRouter.put('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM topics WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy chuyên đề' })

  const name = req.body?.name ?? row.name
  const progress = req.body?.progress ?? row.progress

  db.prepare('UPDATE topics SET name = ?, progress = ? WHERE id = ?').run(
    name,
    progress,
    req.params.id
  )
  res.json({ ok: true })
})

topicsRouter.delete('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM topics WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy chuyên đề' })

  db.prepare('DELETE FROM lessons WHERE topic_id = ?').run(req.params.id)
  db.prepare('DELETE FROM topics WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})

// ---- Lesson content for a topic (regular topic OR HSG topic id) ----

function findParentTable(id) {
  if (db.prepare('SELECT id FROM topics WHERE id = ?').get(id)) return 'topics'
  if (db.prepare('SELECT id FROM hsg_topics WHERE id = ?').get(id)) return 'hsg_topics'
  if (db.prepare('SELECT id FROM on_luyen_topics WHERE id = ?').get(id)) return 'on_luyen_topics'
  return null
}

topicsRouter.get('/:id/lesson', (req, res) => {
  const lesson = db.prepare('SELECT * FROM lessons WHERE topic_id = ?').get(req.params.id)
  if (!lesson) return res.status(404).json({ error: 'Chuyên đề này chưa có bài học mẫu' })
  res.json({ id: lesson.topic_id, title: lesson.title, ...JSON.parse(lesson.content) })
})

topicsRouter.put('/:id/lesson', requireAuth, (req, res) => {
  const table = findParentTable(req.params.id)
  if (!table) return res.status(404).json({ error: 'Không tìm thấy chuyên đề' })

  const { title, ...content } = req.body || {}
  if (!title) return res.status(400).json({ error: 'Thiếu tiêu đề bài học' })

  db.prepare(
    `INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)
     ON CONFLICT(topic_id) DO UPDATE SET title = excluded.title, content = excluded.content`
  ).run(req.params.id, title, JSON.stringify(content))

  db.prepare(`UPDATE ${table} SET has_lesson = 1 WHERE id = ?`).run(req.params.id)
  res.json({ ok: true })
})

topicsRouter.delete('/:id/lesson', requireAuth, (req, res) => {
  const table = findParentTable(req.params.id)
  db.prepare('DELETE FROM lessons WHERE topic_id = ?').run(req.params.id)
  if (table) db.prepare(`UPDATE ${table} SET has_lesson = 0 WHERE id = ?`).run(req.params.id)
  res.json({ ok: true })
})
