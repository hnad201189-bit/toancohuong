import { db } from './db.js'
import {
  KNOWLEDGE_AREAS,
  GRADE6_AREAS,
  GRADE12_AREAS,
  HSG_TOPICS,
  GRADE6_HSG_TOPICS,
  SAMPLE_LESSON,
} from '../src/data/topics.js'
import { seedFullContent, backfillMissingExamBanks, seedMissingLessons, backfillPracticeBanks } from './seedFullContent.js'

const insertArea = db.prepare(
  'INSERT INTO areas (id, grade, order_num, name, description, progress) VALUES (?, ?, ?, ?, ?, ?)'
)
const insertTopic = db.prepare(
  'INSERT INTO topics (id, area_id, sort_order, name, progress, has_lesson) VALUES (?, ?, ?, ?, ?, ?)'
)
const insertHsg = db.prepare(
  'INSERT INTO hsg_topics (id, grade, sort_order, name, progress) VALUES (?, ?, ?, ?, ?)'
)

// Seeds any area not yet present in the DB (checked per area id, not per
// grade). Safe to call on every boot: an area already present is left
// completely untouched, so this both bootstraps a brand new grade and
// backfills a single new area (e.g. a new chuyên đề collection) added later
// to a grade that was already seeded.
function seedGradeIfMissing(grade, areas) {
  for (const area of areas) {
    if (db.prepare('SELECT 1 FROM areas WHERE id = ?').get(area.id)) continue

    insertArea.run(area.id, grade, area.order, area.name, area.description, area.progress)
    area.topics.forEach((topic, i) => {
      insertTopic.run(topic.id, area.id, i, topic.name, topic.progress, topic.hasLesson ? 1 : 0)
    })
    console.log(`Seeded new area "${area.name}" (grade ${grade}, ${area.topics.length} topics).`)
  }
}

// Same idea as seedGradeIfMissing but for the separate hsg_topics list —
// checked per topic id so a single new HSG topic backfills cleanly too.
function seedHsgIfMissing(grade, topics) {
  const existingCount = db.prepare('SELECT COUNT(*) AS n FROM hsg_topics WHERE grade = ?').get(grade).n
  topics.forEach((topic, i) => {
    if (db.prepare('SELECT 1 FROM hsg_topics WHERE id = ?').get(topic.id)) return
    insertHsg.run(topic.id, grade, existingCount + i, topic.name, topic.progress)
    console.log(`Seeded new HSG topic "${topic.name}" (grade ${grade}).`)
  })
}

export function seedIfEmpty() {
  const isFirstBoot = db.prepare('SELECT COUNT(*) AS n FROM areas').get().n === 0

  if (isFirstBoot) {
    const insertLesson = db.prepare('INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)')
    const { id, areaId, title, ...lessonContent } = SAMPLE_LESSON
    insertLesson.run(id, title, JSON.stringify(lessonContent))
    console.log('Seeded database with default curriculum data.')
  }

  // Each grade is seeded independently (and idempotently) so this also
  // backfills a grade that didn't exist yet into an already-running database.
  seedGradeIfMissing(11, KNOWLEDGE_AREAS)
  seedGradeIfMissing(6, GRADE6_AREAS)
  seedGradeIfMissing(12, GRADE12_AREAS)
  seedHsgIfMissing(11, HSG_TOPICS)
  seedHsgIfMissing(6, GRADE6_HSG_TOPICS)

  if (isFirstBoot) seedFullContent()
  seedMissingLessons()
  backfillMissingExamBanks()
  backfillPracticeBanks()
}
