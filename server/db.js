import { DatabaseSync } from 'node:sqlite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// DATA_DIR lets a host mount a persistent disk at a custom path (e.g. Render);
// defaults to the local server/data folder for plain `npm run server` use.
const dataDir = process.env.DATA_DIR || path.join(__dirname, 'data')
const dbPath = path.join(dataDir, 'app.db')

fs.mkdirSync(dataDir, { recursive: true })

export const db = new DatabaseSync(dbPath)

db.exec(`
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS areas (
    id TEXT PRIMARY KEY,
    order_num INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    progress INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS topics (
    id TEXT PRIMARY KEY,
    area_id TEXT NOT NULL REFERENCES areas(id) ON DELETE CASCADE,
    sort_order INTEGER NOT NULL,
    name TEXT NOT NULL,
    progress INTEGER NOT NULL DEFAULT 0,
    has_lesson INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS hsg_topics (
    id TEXT PRIMARY KEY,
    sort_order INTEGER NOT NULL,
    name TEXT NOT NULL,
    progress INTEGER NOT NULL DEFAULT 0,
    has_lesson INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS lessons (
    topic_id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS tutors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    subjects TEXT NOT NULL DEFAULT '',
    area TEXT NOT NULL DEFAULT '',
    bio TEXT NOT NULL DEFAULT '',
    achievements TEXT NOT NULL DEFAULT '',
    price TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS contact_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tutor_id INTEGER NOT NULL REFERENCES tutors(id) ON DELETE CASCADE,
    student_name TEXT NOT NULL,
    student_phone TEXT NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'new',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS solve_usage (
    identity_key TEXT NOT NULL,
    usage_date TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (identity_key, usage_date)
  );
`)

// Migration: older databases may already have a "tutors" table without the
// "achievements" column added above (CREATE TABLE IF NOT EXISTS is a no-op then).
const tutorColumns = db.prepare('PRAGMA table_info(tutors)').all().map((c) => c.name)
if (!tutorColumns.includes('achievements')) {
  db.exec("ALTER TABLE tutors ADD COLUMN achievements TEXT NOT NULL DEFAULT ''")
}

// Migration: older databases may already have a "hsg_topics" table without
// the "has_lesson" column added above.
const hsgColumns = db.prepare('PRAGMA table_info(hsg_topics)').all().map((c) => c.name)
if (!hsgColumns.includes('has_lesson')) {
  db.exec('ALTER TABLE hsg_topics ADD COLUMN has_lesson INTEGER NOT NULL DEFAULT 0')
}

// Migration: older databases created "lessons" with a FK to topics(id) only,
// which blocks attaching lesson content to hsg_topics ids. Recreate without it.
const lessonsTableSql = db
  .prepare("SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'lessons'")
  .get()?.sql
if (lessonsTableSql?.includes('REFERENCES')) {
  db.exec(`
    ALTER TABLE lessons RENAME TO lessons_old;
    CREATE TABLE lessons (
      topic_id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL
    );
    INSERT INTO lessons SELECT * FROM lessons_old;
    DROP TABLE lessons_old;
  `)
}
