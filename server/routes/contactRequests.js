import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'

export const contactRequestsRouter = Router()

// ---- Admin: list all contact requests, joined with tutor info ----
contactRequestsRouter.get('/', requireAuth, (req, res) => {
  const rows = db
    .prepare(
      `SELECT cr.*, t.name AS tutor_name, t.phone AS tutor_phone
       FROM contact_requests cr
       JOIN tutors t ON t.id = cr.tutor_id
       ORDER BY cr.created_at DESC`
    )
    .all()

  res.json(
    rows.map((r) => ({
      id: r.id,
      status: r.status,
      createdAt: r.created_at,
      note: r.note,
      student: { name: r.student_name, phone: r.student_phone },
      tutor: { id: r.tutor_id, name: r.tutor_name, phone: r.tutor_phone },
    }))
  )
})

// ---- Admin: mark a request as contacted / new ----
contactRequestsRouter.put('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT id FROM contact_requests WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy yêu cầu' })

  const status = req.body?.status
  if (!['new', 'contacted'].includes(status)) {
    return res.status(400).json({ error: 'Trạng thái không hợp lệ' })
  }

  db.prepare('UPDATE contact_requests SET status = ? WHERE id = ?').run(status, req.params.id)
  res.json({ ok: true })
})
