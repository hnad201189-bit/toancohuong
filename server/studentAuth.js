import crypto from 'node:crypto'
import { db } from './db.js'

const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

const activeTokens = new Map() // token -> { studentId, expiresAt }

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const check = crypto.scryptSync(password, salt, 64).toString('hex')
  const a = Buffer.from(hash, 'hex')
  const b = Buffer.from(check, 'hex')
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

function issueToken(studentId) {
  const token = crypto.randomBytes(24).toString('hex')
  activeTokens.set(token, { studentId, expiresAt: Date.now() + TOKEN_TTL_MS })
  return token
}

function serialize(row) {
  return { id: row.id, name: row.name, phone: row.phone, status: row.status, createdAt: row.created_at }
}

export function register(req, res) {
  const { name, phone, password } = req.body || {}
  if (!name?.trim() || !phone?.trim() || !password) {
    return res.status(400).json({ error: 'Thiếu họ tên, số điện thoại hoặc mật khẩu' })
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Mật khẩu phải có ít nhất 6 ký tự' })
  }

  const existing = db.prepare('SELECT id FROM students WHERE phone = ?').get(phone.trim())
  if (existing) {
    return res.status(409).json({ error: 'Số điện thoại này đã được đăng ký' })
  }

  const result = db
    .prepare(
      `INSERT INTO students (name, phone, password_hash, status, created_at) VALUES (?, ?, ?, 'pending', ?)`
    )
    .run(name.trim(), phone.trim(), hashPassword(password), new Date().toISOString())

  const row = db.prepare('SELECT * FROM students WHERE id = ?').get(result.lastInsertRowid)
  res.status(201).json({ token: issueToken(row.id), student: serialize(row) })
}

export function login(req, res) {
  const { phone, password } = req.body || {}
  if (!phone?.trim() || !password) {
    return res.status(400).json({ error: 'Thiếu số điện thoại hoặc mật khẩu' })
  }

  const row = db.prepare('SELECT * FROM students WHERE phone = ?').get(phone.trim())
  if (!row || !verifyPassword(password, row.password_hash)) {
    return res.status(401).json({ error: 'Sai số điện thoại hoặc mật khẩu' })
  }

  res.json({ token: issueToken(row.id), student: serialize(row) })
}

export function logout(req, res) {
  const token = (req.headers.authorization || '').replace('Bearer ', '')
  activeTokens.delete(token)
  res.json({ ok: true })
}

// Attaches req.student when a valid student token is present; never blocks the request.
export function attachStudent(req, _res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '')
  const entry = token && activeTokens.get(token)
  if (!entry) return next()
  if (Date.now() > entry.expiresAt) {
    activeTokens.delete(token)
    return next()
  }
  const row = db.prepare('SELECT * FROM students WHERE id = ?').get(entry.studentId)
  if (row) req.student = row
  next()
}

export function requireStudent(req, res, next) {
  if (!req.student) return res.status(401).json({ error: 'Chưa đăng nhập hoặc phiên đã hết hạn' })
  next()
}

export const serializeStudent = serialize
