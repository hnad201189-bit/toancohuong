import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'
import { slugify } from '../slugify.js'

export const areasRouter = Router()

function getTopicsForArea(areaId) {
  return db
    .prepare('SELECT * FROM topics WHERE area_id = ? ORDER BY sort_order')
    .all(areaId)
    .map((t) => ({
      id: t.id,
      name: t.name,
      progress: t.progress,
      hasLesson: !!t.has_lesson,
    }))
}

function serializeArea(row) {
  return {
    id: row.id,
    order: row.order_num,
    name: row.name,
    description: row.description,
    progress: row.progress,
    topics: getTopicsForArea(row.id),
  }
}

areasRouter.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM areas ORDER BY order_num').all()
  res.json(rows.map(serializeArea))
})

areasRouter.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM areas WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy mảng kiến thức' })
  res.json(serializeArea(row))
})

areasRouter.post('/', requireAuth, (req, res) => {
  const { name, description = '', progress = 0 } = req.body || {}
  if (!name) return res.status(400).json({ error: 'Thiếu tên mảng kiến thức' })

  const maxOrder = db.prepare('SELECT MAX(order_num) AS m FROM areas').get().m || 0
  const id = slugify(name)
  const existing = db.prepare('SELECT id FROM areas WHERE id = ?').get(id)
  if (existing) return res.status(409).json({ error: 'Mảng kiến thức này đã tồn tại' })

  db.prepare(
    'INSERT INTO areas (id, order_num, name, description, progress) VALUES (?, ?, ?, ?, ?)'
  ).run(id, maxOrder + 1, name, description, progress)

  res.status(201).json(serializeArea(db.prepare('SELECT * FROM areas WHERE id = ?').get(id)))
})

areasRouter.put('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM areas WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy mảng kiến thức' })

  const name = req.body?.name ?? row.name
  const description = req.body?.description ?? row.description
  const progress = req.body?.progress ?? row.progress

  db.prepare('UPDATE areas SET name = ?, description = ?, progress = ? WHERE id = ?').run(
    name,
    description,
    progress,
    req.params.id
  )
  res.json(serializeArea(db.prepare('SELECT * FROM areas WHERE id = ?').get(req.params.id)))
})

areasRouter.delete('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM areas WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy mảng kiến thức' })

  const topicIds = db.prepare('SELECT id FROM topics WHERE area_id = ?').all(req.params.id).map((t) => t.id)
  const deleteLesson = db.prepare('DELETE FROM lessons WHERE topic_id = ?')
  topicIds.forEach((id) => deleteLesson.run(id))
  db.prepare('DELETE FROM topics WHERE area_id = ?').run(req.params.id)
  db.prepare('DELETE FROM areas WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})

// ---- Topics nested under an area ----

areasRouter.post('/:areaId/topics', requireAuth, (req, res) => {
  const area = db.prepare('SELECT * FROM areas WHERE id = ?').get(req.params.areaId)
  if (!area) return res.status(404).json({ error: 'Không tìm thấy mảng kiến thức' })

  const { name, progress = 0 } = req.body || {}
  if (!name) return res.status(400).json({ error: 'Thiếu tên chuyên đề' })

  const id = `${req.params.areaId}--${slugify(name)}`
  const existing = db.prepare('SELECT id FROM topics WHERE id = ?').get(id)
  if (existing) return res.status(409).json({ error: 'Chuyên đề này đã tồn tại trong mảng' })

  const maxOrder =
    db.prepare('SELECT MAX(sort_order) AS m FROM topics WHERE area_id = ?').get(req.params.areaId).m ?? -1

  db.prepare(
    'INSERT INTO topics (id, area_id, sort_order, name, progress, has_lesson) VALUES (?, ?, ?, ?, ?, 0)'
  ).run(id, req.params.areaId, maxOrder + 1, name, progress)

  res.status(201).json(serializeArea(db.prepare('SELECT * FROM areas WHERE id = ?').get(req.params.areaId)))
})
