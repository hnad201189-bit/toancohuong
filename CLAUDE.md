# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vietnamese-language web app for studying Toán 11 (Vietnamese grade-11 math) by
chuyên đề (topic), plus an admin panel for managing content, and a "tìm gia
sư" (find a tutor) marketplace with an admin-mediated contact flow.

## Commands

```bash
npm install       # install deps
npm run dev:all   # run backend (:4000) + frontend (:5173) together
npm run server    # backend only — API at http://localhost:4000
npm run dev       # frontend only — Vite dev server at :5173, proxies /api to :4000
npm run build     # build frontend to dist/
npm run start     # production: node server/index.js (serves dist/ + /api)
npm run lint      # oxlint
npm run preview   # vite preview of the built frontend
```

There is no test suite configured. `npm run server` loads `server/.env` via
Node's `--env-file-if-exists` flag — no `dotenv` package needed.

## Architecture

- **Frontend**: React 19 + Vite (`src/`), React Router with two top-level
  areas: `/` (`MainSite.jsx`, public site) and `/admin` (`admin/AdminApp.jsx`,
  admin panel). KaTeX (`components/Math.jsx`, `components/MixedMath.jsx`)
  renders `$...$` / `$$...$$` LaTeX embedded in plain-text fields throughout
  lesson content.
- **Backend**: Node/Express (`server/`), single entrypoint `server/index.js`
  wiring routers under `/api/*`. Data layer is `node:sqlite`'s built-in
  `DatabaseSync` (`server/db.js`) — no external DB driver.
  - DB file path: `$DATA_DIR/app.db`, falling back to `server/data/app.db`.
    `DATA_DIR` lets a host (e.g. Render, see `render.yaml`) mount a persistent
    disk at a custom path. The DB file is never committed.
  - Schema is created with `CREATE TABLE IF NOT EXISTS` in `db.js`, followed
    by manual ad-hoc migrations (checking `PRAGMA table_info` for missing
    columns, rewriting tables when a stale FK is detected) — when adding a
    column to an existing table, follow this same "detect + ALTER" pattern
    rather than assuming a fresh schema.
  - First boot seeds an empty DB (`seed.js` inserts `KNOWLEDGE_AREAS` /
    `HSG_TOPICS` / `SAMPLE_LESSON` from `src/data/topics.js`, then
    `seedFullContent.js` bulk-inserts full lesson bodies from
    `server/content/*.mjs`, one file per subject area).
- **Auth**: `server/auth.js` is a minimal bearer-token scheme — login checks a
  single shared `ADMIN_PASSWORD` (default `admin123`, env-overridable) and
  issues a random token kept in an in-memory `Map` with a 12h TTL. No
  per-user accounts; restarting the backend invalidates all sessions.
  `requireAuth` middleware guards all admin write routes.
- **Domain model** (`server/db.js`): `areas` (mảng kiến thức) → `topics`
  (chuyên đề) is a two-level curriculum tree; `hsg_topics` (HSG chuyên đề) is
  a separate flat list. `lessons` holds content keyed by `topic_id`, which may
  reference either a `topics.id` or an `hsg_topics.id` (no FK — see the
  migration note in `db.js` for why). Lesson `content` is a JSON blob
  (`lý thuyết`, video, trắc nghiệm, tự luận, flashcard, đề kiểm tra sections)
  serialized into a single TEXT column and merged with `title` on read/write
  (`routes/topics.js`). `findParentTable(id)` resolves which parent table a
  lesson content id belongs to.
- **Bulk import** (`routes/importRoutes.js`, `admin/importUtils.js`,
  `admin/ImportSection.jsx`): admin can upload CSV/JSON to bulk-create areas,
  topics, HSG topics, quiz questions, or flashcards. Matching by name
  upserts existing rows instead of duplicating.
- **AI photo-solve** (`routes/solve.js`): uploads an image via multer
  (memory storage, 8MB limit, JPEG/PNG/WEBP/GIF only) to the Anthropic API
  (`ANTHROPIC_API_KEY`, model from `ANTHROPIC_MODEL` env, default
  `claude-sonnet-5`), with a Vietnamese system prompt requiring strict JSON
  output (`problem`/`steps`/`answer`, LaTeX in `$...$`/`$$...$$`). Feature
  degrades gracefully (503 with a clear message) when the key is unset.
- **Tutor marketplace** (`routes/tutors.js`, `routes/contactRequests.js`,
  `components/tutor/*`): tutors self-register (`status: pending`) and stay
  hidden from students until an admin approves them (`/admin/tutors`).
  Student phone numbers are never shown to tutors directly — a student submits
  a "Yêu cầu kết nối" (connect request) with their own name/phone, and only
  the admin (`/admin/contact-requests`) sees both sides' full phone numbers to
  broker the introduction manually.
- **Deployment**: `render.yaml` defines a single Render web service — build
  is `npm install && npm run build`, start is `npm start`
  (`server/index.js`), with a persistent disk mounted at `/var/data`
  (`DATA_DIR`) for the SQLite file. `ADMIN_PASSWORD` and `ANTHROPIC_API_KEY`
  are set as Render secrets (`sync: false`), not committed.

## Notes

- `DATA/` at the repo root is a folder of reference PDF study materials, not
  part of the application — do not treat it as source code.
- Comments in code are frequently in Vietnamese explaining non-obvious
  behavior (migrations, workarounds); keep this convention when adding
  comments to `server/`.
