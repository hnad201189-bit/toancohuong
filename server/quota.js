import { db } from './db.js'

const ANONYMOUS_DAILY_QUOTA = 1
const APPROVED_DAILY_QUOTA = 5

export function quotaFor(student) {
  return student?.status === 'approved' ? APPROVED_DAILY_QUOTA : ANONYMOUS_DAILY_QUOTA
}

export function identityFor(req) {
  return req.student ? `student:${req.student.id}` : `ip:${req.ip}`
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

export function getUsageCount(identityKey) {
  const row = db
    .prepare('SELECT count FROM solve_usage WHERE identity_key = ? AND usage_date = ?')
    .get(identityKey, today())
  return row?.count || 0
}

export function incrementUsage(identityKey) {
  db.prepare(
    `INSERT INTO solve_usage (identity_key, usage_date, count) VALUES (?, ?, 1)
     ON CONFLICT(identity_key, usage_date) DO UPDATE SET count = count + 1`
  ).run(identityKey, today())
}
