import { Router } from 'express'
import { db } from '../db.js'
import { requireAuth } from '../auth.js'

export const tutorsRouter = Router()

function maskPhone(phone) {
  const digits = phone.replace(/\s/g, '')
  if (digits.length <= 3) return digits
  const visible = digits.slice(-3)
  return '*'.repeat(digits.length - 3) + visible
}

// Haversine distance between two lat/lng points, in kilometers.
function distanceKm(lat1, lng1, lat2, lng2) {
  const toRad = (deg) => (deg * Math.PI) / 180
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

function serializeBase(row) {
  return {
    id: row.id,
    name: row.name,
    subjects: row.subjects ? row.subjects.split(',').filter(Boolean) : [],
    area: row.area,
    bio: row.bio,
    achievements: row.achievements,
    price: row.price,
    status: row.status,
    createdAt: row.created_at,
    lat: row.lat ?? null,
    lng: row.lng ?? null,
  }
}

function serializePublic(row) {
  return { ...serializeBase(row), phoneMasked: maskPhone(row.phone) }
}

function serializeAdmin(row) {
  return { ...serializeBase(row), phone: row.phone }
}

// ---- Public: list approved tutors, optional filters (phone masked) ----
tutorsRouter.get('/', (req, res) => {
  const { area, subject, lat, lng, radius } = req.query
  let rows = db.prepare("SELECT * FROM tutors WHERE status = 'approved' ORDER BY created_at DESC").all()

  if (area) {
    const needle = String(area).toLowerCase()
    rows = rows.filter((r) => r.area.toLowerCase().includes(needle))
  }
  if (subject) {
    rows = rows.filter((r) => r.subjects.split(',').includes(subject))
  }

  let results = rows.map(serializePublic)

  const userLat = Number(lat)
  const userLng = Number(lng)
  if (Number.isFinite(userLat) && Number.isFinite(userLng)) {
    const radiusKm = Number.isFinite(Number(radius)) && Number(radius) > 0 ? Number(radius) : 15
    results = results
      .filter((t) => t.lat != null && t.lng != null)
      .map((t) => ({ ...t, distanceKm: Math.round(distanceKm(userLat, userLng, t.lat, t.lng) * 10) / 10 }))
      .filter((t) => t.distanceKm <= radiusKm)
      .sort((a, b) => a.distanceKm - b.distanceKm)
  }

  res.json(results)
})

// ---- Public: tutor self-registration (always starts as pending) ----
tutorsRouter.post('/', (req, res) => {
  const { name, phone, subjects, area, bio, achievements, price, lat, lng } = req.body || {}
  if (!name?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Thiếu tên hoặc số điện thoại' })
  }

  const subjectsStr = Array.isArray(subjects) ? subjects.join(',') : ''
  const latVal = Number.isFinite(Number(lat)) ? Number(lat) : null
  const lngVal = Number.isFinite(Number(lng)) ? Number(lng) : null
  const result = db
    .prepare(
      `INSERT INTO tutors (name, phone, subjects, area, bio, achievements, price, status, created_at, lat, lng)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)`
    )
    .run(
      name.trim(),
      phone.trim(),
      subjectsStr,
      (area || '').trim(),
      (bio || '').trim(),
      (achievements || '').trim(),
      (price || '').trim(),
      new Date().toISOString(),
      latVal,
      lngVal
    )

  res.status(201).json(serializeAdmin(db.prepare('SELECT * FROM tutors WHERE id = ?').get(result.lastInsertRowid)))
})

// ---- Public: student requests contact info for an approved tutor ----
tutorsRouter.post('/:id/contact-request', (req, res) => {
  const tutor = db.prepare("SELECT id FROM tutors WHERE id = ? AND status = 'approved'").get(req.params.id)
  if (!tutor) return res.status(404).json({ error: 'Không tìm thấy gia sư' })

  const { studentName, studentPhone, note } = req.body || {}
  if (!studentName?.trim() || !studentPhone?.trim()) {
    return res.status(400).json({ error: 'Thiếu tên hoặc số điện thoại của bạn' })
  }

  db.prepare(
    `INSERT INTO contact_requests (tutor_id, student_name, student_phone, note, status, created_at)
     VALUES (?, ?, ?, ?, 'new', ?)`
  ).run(req.params.id, studentName.trim(), studentPhone.trim(), (note || '').trim(), new Date().toISOString())

  res.status(201).json({ ok: true })
})

// ---- Admin: list all tutors regardless of status (full phone visible) ----
tutorsRouter.get('/all', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT * FROM tutors ORDER BY created_at DESC').all()
  res.json(rows.map(serializeAdmin))
})

// ---- Admin: update tutor info and/or status ----
tutorsRouter.put('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT * FROM tutors WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy gia sư' })

  const name = req.body?.name ?? row.name
  const phone = req.body?.phone ?? row.phone
  const subjects = Array.isArray(req.body?.subjects) ? req.body.subjects.join(',') : row.subjects
  const area = req.body?.area ?? row.area
  const bio = req.body?.bio ?? row.bio
  const achievements = req.body?.achievements ?? row.achievements
  const price = req.body?.price ?? row.price
  const status = req.body?.status ?? row.status
  // lat/lng support explicit clearing via `null` (distinct from an omitted key, which keeps the old value).
  const lat = 'lat' in (req.body || {}) ? (Number.isFinite(Number(req.body.lat)) ? Number(req.body.lat) : null) : row.lat
  const lng = 'lng' in (req.body || {}) ? (Number.isFinite(Number(req.body.lng)) ? Number(req.body.lng) : null) : row.lng

  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Trạng thái không hợp lệ' })
  }

  db.prepare(
    `UPDATE tutors SET name = ?, phone = ?, subjects = ?, area = ?, bio = ?, achievements = ?, price = ?, status = ?, lat = ?, lng = ? WHERE id = ?`
  ).run(name, phone, subjects, area, bio, achievements, price, status, lat, lng, req.params.id)

  res.json(serializeAdmin(db.prepare('SELECT * FROM tutors WHERE id = ?').get(req.params.id)))
})

// ---- Admin: delete a tutor listing ----
tutorsRouter.delete('/:id', requireAuth, (req, res) => {
  const row = db.prepare('SELECT id FROM tutors WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Không tìm thấy gia sư' })
  db.prepare('DELETE FROM tutors WHERE id = ?').run(req.params.id)
  res.json({ ok: true })
})
