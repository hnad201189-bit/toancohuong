import { db } from './db.js'
import { DAI_SO } from './content/daiSo.mjs'
import { LUONG_GIAC } from './content/luongGiac.mjs'
import { HAM_SO_GIOI_HAN } from './content/hamSoGioiHan.mjs'
import { HINH_HOC_KHONG_GIAN } from './content/hinhHocKhongGian.mjs'
import { THONG_KE_XAC_SUAT } from './content/thongKeXacSuat.mjs'
import { TOAN_UNG_DUNG } from './content/toanUngDung.mjs'
import { HSG } from './content/hsg.mjs'

const ALL_REGULAR = {
  ...DAI_SO,
  ...LUONG_GIAC,
  ...HAM_SO_GIOI_HAN,
  ...HINH_HOC_KHONG_GIAN,
  ...THONG_KE_XAC_SUAT,
  ...TOAN_UNG_DUNG,
}

const upsertLesson = db.prepare(
  `INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)
   ON CONFLICT(topic_id) DO UPDATE SET title = excluded.title, content = excluded.content`
)

export function seedFullContent() {
  let regularCount = 0
  const missingTopics = []
  for (const [topicId, lesson] of Object.entries(ALL_REGULAR)) {
    const topic = db.prepare('SELECT id FROM topics WHERE id = ?').get(topicId)
    if (!topic) {
      missingTopics.push(topicId)
      continue
    }
    const { title, ...content } = lesson
    upsertLesson.run(topicId, title, JSON.stringify(content))
    db.prepare('UPDATE topics SET has_lesson = 1 WHERE id = ?').run(topicId)
    regularCount++
  }

  let hsgCount = 0
  const missingHsg = []
  for (const [topicId, lesson] of Object.entries(HSG)) {
    const topic = db.prepare('SELECT id FROM hsg_topics WHERE id = ?').get(topicId)
    if (!topic) {
      missingHsg.push(topicId)
      continue
    }
    const { title, ...content } = lesson
    upsertLesson.run(topicId, title, JSON.stringify(content))
    db.prepare('UPDATE hsg_topics SET has_lesson = 1 WHERE id = ?').run(topicId)
    hsgCount++
  }

  console.log(
    `Seeded lesson content: ${regularCount}/${Object.keys(ALL_REGULAR).length} regular, ${hsgCount}/${Object.keys(HSG).length} HSG`
  )
  if (missingTopics.length) console.log('Missing regular topic ids:', missingTopics)
  if (missingHsg.length) console.log('Missing HSG topic ids:', missingHsg)
}
