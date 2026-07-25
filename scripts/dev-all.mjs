import { spawn } from 'node:child_process'

const children = [
  spawn('node', ['--env-file-if-exists=server/.env', 'server/index.js'], { stdio: 'inherit', shell: true }),
  spawn('npx', ['vite'], { stdio: 'inherit', shell: true }),
]

function shutdown() {
  for (const child of children) child.kill()
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

for (const child of children) {
  child.on('exit', (code) => {
    if (code !== 0 && code !== null) shutdown()
  })
}
