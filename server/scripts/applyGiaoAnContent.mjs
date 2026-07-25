// Standalone CLI, one-off: add the new topics introduced while importing
// content from the "Giáo án DT 11" docx set (mau-so-lieu-ghep-nhom,
// phep-doi-hinh), then re-push server/content/*.mjs into lessons — safe to
// run against an already-seeded DB (INSERT OR IGNORE + the same upsert
// seedFullContent() already uses elsewhere).
import { db } from '../db.js'
import { seedFullContent } from '../seedFullContent.js'

const NEW_TOPICS = [
  { id: 'mau-so-lieu-ghep-nhom', areaId: 'thong-ke-xac-suat', name: 'Mẫu số liệu ghép nhóm' },
  { id: 'phep-doi-hinh', areaId: 'hinh-hoc-khong-gian', name: 'Phép dời hình' },
]

const insertTopic = db.prepare(
  `INSERT OR IGNORE INTO topics (id, area_id, sort_order, name, progress, has_lesson)
   VALUES (?, ?, ?, ?, 0, 0)`
)

for (const topic of NEW_TOPICS) {
  const area = db.prepare('SELECT id FROM areas WHERE id = ?').get(topic.areaId)
  if (!area) {
    console.log(`Bỏ qua topic "${topic.id}": area "${topic.areaId}" chưa tồn tại trong DB.`)
    continue
  }
  const maxOrder = db.prepare('SELECT MAX(sort_order) AS m FROM topics WHERE area_id = ?').get(topic.areaId).m ?? -1
  const result = insertTopic.run(topic.id, topic.areaId, maxOrder + 1, topic.name)
  console.log(result.changes ? `Đã thêm topic "${topic.id}".` : `Topic "${topic.id}" đã tồn tại, bỏ qua.`)
}

seedFullContent()
console.log('Đã áp dụng nội dung server/content/*.mjs vào DB.')
