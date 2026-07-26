import { db } from './db.js'
import { KNOWLEDGE_AREAS, HSG_TOPICS, SAMPLE_LESSON } from '../src/data/topics.js'
import { seedFullContent, backfillMissingExamBanks } from './seedFullContent.js'

export function seedIfEmpty() {
  const areaCount = db.prepare('SELECT COUNT(*) AS n FROM areas').get().n
  if (areaCount > 0) {
    // Database already has curriculum data (e.g. an existing deployment) —
    // still check for lessons stuck without an exam bank and patch those.
    backfillMissingExamBanks()
    return
  }

  const insertArea = db.prepare(
    'INSERT INTO areas (id, order_num, name, description, progress) VALUES (?, ?, ?, ?, ?)'
  )
  const insertTopic = db.prepare(
    'INSERT INTO topics (id, area_id, sort_order, name, progress, has_lesson) VALUES (?, ?, ?, ?, ?, ?)'
  )
  const insertHsg = db.prepare(
    'INSERT INTO hsg_topics (id, sort_order, name, progress) VALUES (?, ?, ?, ?)'
  )
  const insertLesson = db.prepare(
    'INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)'
  )

  for (const area of KNOWLEDGE_AREAS) {
    insertArea.run(area.id, area.order, area.name, area.description, area.progress)
    area.topics.forEach((topic, i) => {
      insertTopic.run(topic.id, area.id, i, topic.name, topic.progress, topic.hasLesson ? 1 : 0)
    })
  }

  HSG_TOPICS.forEach((topic, i) => {
    insertHsg.run(topic.id, i, topic.name, topic.progress)
  })

  const { id, areaId, title, ...lessonContent } = SAMPLE_LESSON
  insertLesson.run(id, title, JSON.stringify(lessonContent))

  console.log('Seeded database with default curriculum data.')
  seedFullContent()
}
