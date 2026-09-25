import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'

export const mockExamsRouter = Router()

// GET /api/mock-exams?grade=11 — lightweight list (no content) for the admin
// panel: which of the fixed exam slots already have content authored.
mockExamsRouter.get('/', (req, res) => {
  const grade = Number(req.query.grade) || 11
  const rows = db.prepare('SELECT id, grade, exam_type, title FROM mock_exams WHERE grade = ?').all(grade)
  res.json(rows.map((row) => ({ id: row.id, grade: row.grade, examType: row.exam_type, title: row.title })))
})

// GET /api/mock-exams/:id — full content for taking/editing the exam.
// 404 when not yet authored so the public "Thi thử" screen can fall back to
// its "đang được biên soạn" placeholder.
mockExamsRouter.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM mock_exams WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Đề thi này chưa được biên soạn' })
  res.json({ id: row.id, grade: row.grade, examType: row.exam_type, title: row.title, ...JSON.parse(row.content) })
})

mockExamsRouter.put('/:id', requireAuth, (req, res) => {
  const [gradeStr, ...rest] = req.params.id.split('-')
  const grade = Number(gradeStr)
  const examType = rest.join('-')
  if (!grade || !examType) return res.status(400).json({ error: 'id đề thi không hợp lệ (cần dạng "<lớp>-<loại đề>")' })

  const { title, ...content } = req.body || {}
  if (!title) return res.status(400).json({ error: 'Thiếu tiêu đề đề thi' })

  db.prepare(
    `INSERT INTO mock_exams (id, grade, exam_type, title, content) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET title = excluded.title, content = excluded.content`
  ).run(req.params.id, grade, examType, title, JSON.stringify(content))

  res.json({ ok: true })
})

mockExamsRouter.delete('/:id', requireAuth, (req, res) => {
  db.prepare('DELETE FROM mock_exams WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})
