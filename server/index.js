import express from 'express'
import cors from 'cors'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import './db.js'
import { seedIfEmpty } from './seed.js'
import { areasRouter } from './routes/areas.js'
import { topicsRouter } from './routes/topics.js'
import { hsgTopicsRouter } from './routes/hsgTopics.js'
import { importRouter } from './routes/importRoutes.js'
import { solveRouter } from './routes/solve.js'
import { tutorsRouter } from './routes/tutors.js'
import { contactRequestsRouter } from './routes/contactRequests.js'
import { login, logout, checkAuth, requireAuth } from './auth.js'

seedIfEmpty()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, '..', 'dist')

const app = express()
app.use(cors())
app.use(express.json({ limit: '2mb' }))

app.post('/api/auth/login', login)
app.post('/api/auth/logout', logout)
app.get('/api/auth/check', requireAuth, checkAuth)

app.use('/api/areas', areasRouter)
app.use('/api/topics', topicsRouter)
app.use('/api/hsg-topics', hsgTopicsRouter)
app.use('/api/import', importRouter)
app.use('/api/solve-image', solveRouter)
app.use('/api/tutors', tutorsRouter)
app.use('/api/contact-requests', contactRequestsRouter)

// Serve the built frontend (production) — dist/ only exists after `npm run build`.
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api')) return next()
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})
