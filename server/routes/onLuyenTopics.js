import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'
import { slugify } from '../slugify.js'

export const onLuyenTopicsRouter = Router()

function serialize(row) {
  return { id: row.id, grade: row.grade, name: row.name, progress: row.progress, hasLesson: !!row.has_lesson }
}

onLuyenTopicsRouter.get('/', (req, res) => {
  const grade = Number(req.query.grade) || 11
  const rows = db.prepare('SELECT * FROM on_luyen_topics WHERE grade = ? ORDER BY sort_order').all(grade)
  res.json(rows.map(serialize))
})

onLuyenTopicsRouter.post('/', requireAuth, (req, res) => {
  const { name, progress = 0 } = req.body || {}
  const grade = Number(req.body?.grade) || 11
  if (!name) return res.status(400).json({ error: 'Thiếu tên chuyên đề ôn luyện' })

  const id = `${grade === 11 ? '' : `l${grade}-`}on-luyen-${slugify(name)}`
  const existing = db.prepare('SELECT id FROM on_luyen_topics WHERE id = ?').get(id)
  if (existing) return res.status(409).json({ error: 'Chuyên đề ôn luyện này đã tồn tại' })

  const maxOrder = db.prepare('SELECT MAX(sort_order) AS m FROM on_luyen_topics WHERE grade = ?').get(grade).m ?? -1
  db.prepare('INSERT INTO on_luyen_topics (id, grade, sort_order, name, progress) VALUES (?, ?, ?, ?, ?)').run(
    id,
    grade,
    maxOrder + 1,
    name,
    progress
  )
  res.status(201).json(serialize(db.prepare('SELECT * FROM on_luyen_topics WHERE id = ?').get(id)))
})

onLuyenTopicsRouter.put('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM on_luyen_topics WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy chuyên đề ôn luyện' })

  const name = req.body?.name ?? row.name
  const progress = req.body?.progress ?? row.progress
  db.prepare('UPDATE on_luyen_topics SET name = ?, progress = ? WHERE id = ?').run(
    name,
    progress,
    req.params.id
  )
  res.json(serialize(db.prepare('SELECT * FROM on_luyen_topics WHERE id = ?').get(req.params.id)))
})

onLuyenTopicsRouter.delete('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM on_luyen_topics WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy chuyên đề ôn luyện' })
  db.prepare('DELETE FROM lessons WHERE topic_id = ?').run(req.params.id)
  db.prepare('DELETE FROM on_luyen_topics WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})
