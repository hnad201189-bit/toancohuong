---
name: book-to-chuyen-de
description: Use when the user uploads or references a math book/workbook/PDF (e.g. "500 bài toán...", "sách bài tập...", a scanned textbook) and asks to turn it into a new chuyên đề in this app. Triggers on phrases like "tạo chuyên đề từ file này", "đưa nội dung cuốn sách này vào", "úp sách lên làm chuyên đề".
---

# Book → chuyên đề (Toán N học theo chuyên đề)

Turns an uploaded math book/workbook into a new chuyên đề (topic) or a new
mảng kiến thức (area, several chuyên đề) in this app, matching the exact
depth/format already used for every other Lớp 6/11/12 area in this codebase.

## 0. Copyright — do this before anything else

The source is someone else's published book. **Never reproduce its problems,
wording, or numbers verbatim** — not even under a different chuyên đề title.
That applies whether or not the PDF's text is actually extractable.

- Tell the user plainly, up front: you can't copy the book's content
  wholesale, but you *can* look at its general scope (topics covered, and its
  cơ bản/nâng cao split) and then **author entirely original problems**
  yourself at that same depth, in the app's existing lesson format.
- Confirm this approach with the user (`AskUserQuestion` is fine) before
  spending effort — it's a real scope difference from "toàn bộ nội dung",
  and it's their call whether to proceed, narrow the ask, or stop.
- Do not attempt OCR or heavy text-mining of the PDF to work around this —
  the goal is never to extract the book's actual problems.

## 1. Look at the source, lightly

Try `Read` with a small `pages` range first. If that fails
(`pdftoppm is not installed` — common on Windows, poppler isn't bundled),
fall back to a quick Node check with `pdf-parse` (`npm install --no-save
pdf-parse`; import as `const { PDFParse } = await import('pdf-parse')`, not a
default export) to see if there's an extractable text layer at all:

```js
const { PDFParse } = await import('pdf-parse')
const buf = fs.readFileSync(pdfPath)
const parser = new PDFParse({ data: buf })
const result = await parser.getText({ first: 20 })
console.log(result.total, result.text.length) // near-zero text ⇒ scanned images
```

Many of these workbooks are scanned images with no usable text layer — that's
fine and expected. Either way, only look for **structure** (chapter names,
cơ bản vs nâng cao split, rough page count as a scope signal) — never read
enough to reproduce problems. If the PDF is scanned/unreadable, fall back
entirely on general curriculum knowledge for that grade/subject (this
codebase already has full Lớp 6/11/12 curricula authored the same way — reuse
that knowledge of standard chapter breakdowns).

## 2. Decide scope: new area vs. new topic

- A whole workbook (hundreds of problems, many chapters) → a **new area**
  (mảng kiến thức) with several topics (chuyên đề) inside, one per chapter/
  theme. 4–6 topics is a reasonable size (matches the existing areas).
- A single narrow theo topic → just **one new topic**, either inside an
  existing area or its own small area.
- Pick a name for the area/topic that is clearly different from the source
  book's title (the user will usually say this explicitly, or delegate
  naming to you — check their message).
- A good default flavor for "tổng hợp/luyện đề" workbooks: mix cơ bản and
  nâng cao difficulty *within* each topic (unlike the single-concept regular
  lessons or the pure-competition HSG track), and lean toward word-problem
  style (toán đố) since that's what these books usually emphasize.

## 3. Author content — exact existing format

Every topic is one entry in a `server/content/<newFile>.mjs` file, keyed by
topic id, following this exact shape (copy the pattern from any existing
file in `server/content/`, e.g. `lop6LuyenDeTongHop.mjs`):

```js
import { EXAM_DEFAULT } from './examDefault.mjs'

export const YOUR_EXPORT_NAME = {
  'topic-id': {
    title: 'Tên chuyên đề',
    theory: { cards: [ /* exactly 2: {title, formulas:[...LaTeX], legend:[...strings], note} */ ] },
    video: { caption: '00:00 / MM:SS — some_filename_baigiang.mp4' },
    quiz: [ /* exactly 5: {question, options:[4], correctIndex} */ ],
    essays: [ /* exactly 5: {prompt, solution:[...LaTeX lines]} */ ],
    flashcards: [ /* exactly 5: {front, back} */ ],
    exam: {
      ...EXAM_DEFAULT, // { mcqCount:15, essayCount:2, minutes:45, matrix:[NB 6/0, TH 6/1, VD 3/1] }
      mcq: [ /* exactly 15, in NB(6)/TH(6)/VD(3) order to match the matrix */ ],
      essays: [ /* exactly 2: prompts prefixed "Câu 1 (Thông hiểu)."/"Câu 2 (Vận dụng)." */ ],
    },
  },
  // ...more topics
}
```

Rules that matter:
- **Compute every answer by hand before writing it down.** This is the
  actual authoring cost — get numbers/algebra right, don't guess.
- MCQ options need exactly 4 distinct entries; putting the correct one at
  `correctIndex: 0` is a convenience for later self-verification (not a hard
  requirement) — pick sensible plausible distractors (avoid two options that
  are secretly the same value).
- LaTeX goes inline as `$...$` (KaTeX renders it); use `\\dfrac`, `\\times`,
  Vietnamese math notation (ƯCLN/BCNN, dấu ngoặc, etc.) consistent with
  existing files.
- Theory cards are a compact "công thức + mẹo" recap relevant to the mixed
  problems in that topic, not a full new lesson — `note` should carry an
  actual technique/insight, not restate the formula.

## 4. Wire it in

1. Add the area/topics to `src/data/topics.js` — either append to an
   existing `GRADEN_AREAS` array (new area, next `order`) or add topics to an
   existing area's `topics` array. Match the exact shape used by sibling
   entries (`id`, `order`, `name`, `description`, `progress: 0`, `topics: [{id,
   name, progress: 0, hasLesson: false}]`).
2. Import the new content file into `server/seedFullContent.js` and spread it
   into `ALL_REGULAR` (or `ALL_HSG` for a competition-style advanced track).
3. Check `server/seed.js`'s `seedGradeIfMissing`/`seedHsgIfMissing`: they must
   check **per area/topic id**, not "does this grade have anything seeded at
   all" — otherwise a new area added to an already-seeded grade silently
   never backfills into a running database. (Already fixed this way as of
   the "Luyện đề tổng hợp Toán 6" rollout — if you find it reverted to a
   whole-grade check, fix it the same way again.)

## 5. Verify before calling it done

1. **Content shape**, per topic, via a throwaway node import script:
   `quiz.length===5, essays.length===5, flashcards.length===5,
   exam.mcq.length===15, exam.essays.length===2`, and every MCQ has exactly 4
   options with `correctIndex` in `[0,3]`.
2. **DB backfill**: check for stale server processes first — on Windows this
   project accumulates orphaned `node server/index.js` / `vite` processes
   across sessions that squat on ports 4000/5173 and silently serve *old*
   code while new `npm run server` calls fail to bind. Check with:
   `Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object
   { $_.CommandLine -match "server/index.js|vite" }` and kill anything old
   before trusting a curl/API result. Then run `seedIfEmpty()` against the
   dev DB directly (`node -e "import('./server/seed.js').then(({seedIfEmpty})
   => seedIfEmpty())"`), confirm it logs the new area/lessons, and run it a
   second time to confirm it's a no-op (idempotent).
3. **API spot-check**: `curl` the new topic's `/api/topics/:id/lesson` and
   confirm quiz/essays/exam counts server-side.
4. **Visual check**: start server + vite, use Playwright (install with
   `npm install --no-save playwright`, uninstall again after) to screenshot
   the new area on the dashboard, one lesson's theory tab (KaTeX renders),
   and its Đề kiểm tra tab (matrix table). Clean up screenshots and kill the
   dev processes afterward.
5. `npm run lint` and `npm run build` must both be clean (only pre-existing
   warnings allowed).

## 6. Commit

Follow the repo's existing commit message convention: explain *why* (what
book/request prompted this, and the copyright-driven original-content
decision if relevant), what got added (area/topic names, count), and what got
fixed if the seeding gap came up again. End with the `Co-Authored-By: Claude
Sonnet 5 <noreply@anthropic.com>` trailer. Push only if the user's established
pattern for this repo is to push automatically (it is, as of this project's
history) — otherwise ask.
