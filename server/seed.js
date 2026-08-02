import { db } from './db.js'
import { KNOWLEDGE_AREAS, GRADE6_AREAS, GRADE12_AREAS, HSG_TOPICS, SAMPLE_LESSON } from '../src/data/topics.js'
import { seedFullContent, backfillMissingExamBanks } from './seedFullContent.js'

const insertArea = db.prepare(
  'INSERT INTO areas (id, grade, order_num, name, description, progress) VALUES (?, ?, ?, ?, ?, ?)'
)
const insertTopic = db.prepare(
  'INSERT INTO topics (id, area_id, sort_order, name, progress, has_lesson) VALUES (?, ?, ?, ?, ?, ?)'
)

// Seeds one grade's areas/topics if that grade has no areas yet. Safe to call
// on every boot: a grade already present (checked independently of the
// other grades) is left completely untouched, so adding a new grade never
// re-runs or disturbs curricula that are already in the database.
function seedGradeIfMissing(grade, areas) {
  const existing = db.prepare('SELECT COUNT(*) AS n FROM areas WHERE grade = ?').get(grade).n
  if (existing > 0) return

  for (const area of areas) {
    insertArea.run(area.id, grade, area.order, area.name, area.description, area.progress)
    area.topics.forEach((topic, i) => {
      insertTopic.run(topic.id, area.id, i, topic.name, topic.progress, topic.hasLesson ? 1 : 0)
    })
  }
  console.log(`Seeded grade ${grade} curriculum (${areas.length} areas).`)
}

export function seedIfEmpty() {
  const isFirstBoot = db.prepare('SELECT COUNT(*) AS n FROM areas').get().n === 0

  if (isFirstBoot) {
    const insertHsg = db.prepare('INSERT INTO hsg_topics (id, sort_order, name, progress) VALUES (?, ?, ?, ?)')
    const insertLesson = db.prepare('INSERT INTO lessons (topic_id, title, content) VALUES (?, ?, ?)')

    HSG_TOPICS.forEach((topic, i) => {
      insertHsg.run(topic.id, i, topic.name, topic.progress)
    })

    const { id, areaId, title, ...lessonContent } = SAMPLE_LESSON
    insertLesson.run(id, title, JSON.stringify(lessonContent))

    console.log('Seeded database with default curriculum data.')
  }

  // Each grade is seeded independently (and idempotently) so this also
  // backfills a grade that didn't exist yet into an already-running database.
  seedGradeIfMissing(11, KNOWLEDGE_AREAS)
  seedGradeIfMissing(6, GRADE6_AREAS)
  seedGradeIfMissing(12, GRADE12_AREAS)

  if (isFirstBoot) seedFullContent()
  backfillMissingExamBanks()
}
