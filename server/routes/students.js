import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'
import { register, login, logout, requireStudent, serializeStudent } from '../studentAuth.js'
import { quotaFor, identityFor, getUsageCount } from '../quota.js'

export const studentsRouter = Router()

studentsRouter.post('/register', register)
studentsRouter.post('/login', login)
studentsRouter.post('/logout', logout)

// req.student is attached upstream by attachStudent middleware (mounted in index.js)
studentsRouter.get('/me', requireStudent, (req, res) => {
  const quota = quotaFor(req.student)
  const used = getUsageCount(identityFor(req))
  res.json({ student: serializeStudent(req.student), quota, used, remaining: Math.max(0, quota - used) })
})

// ---- Admin: list all student accounts ----
studentsRouter.get('/all', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT * FROM students ORDER BY created_at DESC').all()
  res.json(rows.map(serializeStudent))
})

// ---- Admin: approve / reject a student account ----
studentsRouter.put('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM students WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy tài khoản' })

  const status = req.body?.status ?? row.status
  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Trạng thái không hợp lệ' })
  }

  db.prepare('UPDATE students SET status = ? WHERE id = ?').run(status, req.params.id)
  res.json(serializeStudent(db.prepare('SELECT * FROM students WHERE id = ?').get(req.params.id)))
})

// ---- Admin: delete a student account ----
studentsRouter.delete('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT id FROM students WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy tài khoản' })
  db.prepare('DELETE FROM students WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})
