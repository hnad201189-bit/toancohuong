import crypto from 'node:crypto'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000 // 12 hours

const activeTokens = new Map() // token -> expiresAt

function issueToken() {
  const token = crypto.randomBytes(24).toString('hex')
  activeTokens.set(token, Date.now() + TOKEN_TTL_MS)
  return token
}

function isValidToken(token) {
  if (!token) return false
  const expiresAt = activeTokens.get(token)
  if (!expiresAt) return false
  if (Date.now() > expiresAt) {
    activeTokens.delete(token)
    return false
  }
  return true
}

export function login(req, res) {
  const { password } = req.body || {}
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Sai mật khẩu' })
  }
  res.json({ token: issueToken() })
}

export function logout(req, res) {
  const token = (req.headers.authorization || '').replace('Bearer ', '')
  activeTokens.delete(token)
  res.json({ ok: true })
}

export function checkAuth(req, res) {
  res.json({ ok: true })
}

export function requireAuth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '')
  if (!isValidToken(token)) {
    return res.status(401).json({ error: 'Chưa đăng nhập hoặc phiên đã hết hạn' })
  }
  next()
}
