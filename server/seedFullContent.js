import { db } from './db.js'
import { DAI_SO } from './content/daiSo.mjs'
import { LUONG_GIAC } from './content/luongGiac.mjs'
import { HAM_SO_GIOI_HAN } from './content/hamSoGioiHan.mjs'
import { HINH_HOC_KHONG_GIAN } from './content/hinhHocKhongGian.mjs'
import { THONG_KE_XAC_SUAT } from './content/thongKeXacSuat.mjs'
import { TOAN_UNG_DUNG } from './content/toanUngDung.mjs'
import { HSG } from './content/hsg.mjs'
import { LOP1_SO_PHAM_VI_10 } from './content/lop1SoPhamVi10.mjs'
import { LOP1_SO_PHAM_VI_100 } from './content/lop1SoPhamVi100.mjs'
import { LOP1_HINH_HOC_DO_LUONG } from './content/lop1HinhHocDoLuong.mjs'
import { LOP1_THONG_KE_XAC_SUAT } from './content/lop1ThongKeXacSuat.mjs'
import { LOP6_SO_TU_NHIEN } from './content/lop6SoTuNhien.mjs'
import { LOP6_SO_NGUYEN } from './content/lop6SoNguyen.mjs'
import { LOP6_PHAN_SO_THAP_PHAN } from './content/lop6PhanSoThapPhan.mjs'
import { LOP6_HINH_HOC_TRUC_QUAN } from './content/lop6HinhHocTrucQuan.mjs'
import { LOP6_HINH_HOC_CO_BAN } from './content/lop6HinhHocCoBan.mjs'
import { LOP6_DU_LIEU_XAC_SUAT } from './content/lop6DuLieuXacSuat.mjs'
import { LOP6_HSG } from './content/lop6Hsg.mjs'
import { LOP6_LUYEN_DE_TONG_HOP } from './content/lop6LuyenDeTongHop.mjs'
import { LOP12_DAO_HAM_KHAO_SAT } from './content/lop12DaoHamKhaoSat.mjs'
import { LOP12_NGUYEN_HAM_TICH_PHAN } from './content/lop12NguyenHamTichPhan.mjs'
import { LOP12_VECTO_TOA_DO_KHONG_GIAN } from './content/lop12VectoToaDoKhongGian.mjs'
import { LOP12_PT_MP_DT_MC } from './content/lop12PtMpDtMc.mjs'
import { LOP12_THONG_KE_NANG_CAO } from './content/lop12ThongKeNangCao.mjs'
import { LOP12_XAC_SUAT_CO_DIEU_KIEN } from './content/lop12XacSuatCoDieuKien.mjs'
import { SAMPLE_LESSON } from '../src/data/topics.js'

const { id: sampleId, areaId: _sampleAreaId, title: sampleTitle, ...sampleContent } = SAMPLE_LESSON

const ALL_REGULAR = {
  ...DAI_SO,
  ...LUONG_GIAC,
  ...HAM_SO_GIOI_HAN,
  ...HINH_HOC_KHONG_GIAN,
  ...THONG_KE_XAC_SUAT,
  ...TOAN_UNG_DUNG,
  ...LOP1_SO_PHAM_VI_10,
  ...LOP1_SO_PHAM_VI_100,
  ...LOP1_HINH_HOC_DO_LUONG,
  ...LOP1_THONG_KE_XAC_SUAT,
  ...LOP6_SO_TU_NHIEN,
  ...LOP6_SO_NGUYEN,
  ...LOP6_PHAN_SO_THAP_PHAN,
  ...LOP6_HINH_HOC_TRUC_QUAN,
  ...LOP6_HINH_HOC_CO_BAN,
  ...LOP6_DU_LIEU_XAC_SUAT,
  ...LOP6_LUYEN_DE_TONG_HOP,
  ...LOP12_DAO_HAM_KHAO_SAT,
  ...LOP12_NGUYEN_HAM_TICH_PHAN,
  ...LOP12_VECTO_TOA_DO_KHONG_GIAN,
  ...LOP12_PT_MP_DT_MC,
  ...LOP12_THONG_KE_NANG_CAO,
  ...LOP12_XAC_SUAT_CO_DIEU_KIEN,
  [sampleId]: { title: sampleTitle, ...sampleContent },
}

const ALL_HSG = {
  ...HSG,
  ...LOP6_HSG,
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
  for (const [topicId, lesson] of Object.entries(ALL_HSG)) {
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
    `Seeded lesson content: ${regularCount}/${Object.keys(ALL_REGULAR).length} regular, ${hsgCount}/${Object.keys(ALL_HSG).length} HSG`
  )
  if (missingTopics.length) console.log('Missing regular topic ids:', missingTopics)
  if (missingHsg.length) console.log('Missing HSG topic ids:', missingHsg)
}

// Runs on every server start (not just first boot). Lessons seeded before the
// exam-bank feature existed only have exam.mcqCount/essayCount (no actual
// exam.mcq/exam.essays question arrays), which left "Đề kiểm tra" empty on
// any deployment whose database predates that change — seedIfEmpty() only
// populates an empty database, so those older rows were never refreshed.
// This patches only lessons still missing exam.mcq, leaving anything that
// already has a populated exam bank untouched (e.g. future admin edits).
export function backfillMissingExamBanks() {
  const rows = db.prepare('SELECT topic_id, content FROM lessons').all()
  const updateLesson = db.prepare('UPDATE lessons SET title = ?, content = ? WHERE topic_id = ?')
  let patched = 0

  for (const row of rows) {
    let content
    try {
      content = JSON.parse(row.content)
    } catch {
      continue
    }
    if (content.exam?.mcq?.length > 0) continue

    const source = ALL_REGULAR[row.topic_id] || ALL_HSG[row.topic_id]
    if (!source) continue

    const { title, ...sourceContent } = source
    updateLesson.run(title, JSON.stringify(sourceContent), row.topic_id)
    patched++
  }

  if (patched > 0) {
    console.log(`Backfilled exam question banks for ${patched} lesson(s) that were missing exam.mcq.`)
  }
  return patched
}

// Runs on every server start. seedFullContent() only fires on first boot (an
// empty `areas` table), so a topic/hsg_topic row added later by a new grade
// rollout (e.g. Lớp 6) never gets its matching `lessons` row inserted on an
// already-seeded production database — it just sits with has_lesson = 0
// forever. This inserts a lesson row (and flips has_lesson = 1) for any
// topic/hsg_topic that already exists but has no lesson yet, using the same
// source maps as seedFullContent().
export function seedMissingLessons() {
  let inserted = 0

  for (const [topicId, lesson] of Object.entries(ALL_REGULAR)) {
    const topic = db.prepare('SELECT id FROM topics WHERE id = ?').get(topicId)
    if (!topic) continue
    const existing = db.prepare('SELECT topic_id FROM lessons WHERE topic_id = ?').get(topicId)
    if (existing) continue

    const { title, ...content } = lesson
    upsertLesson.run(topicId, title, JSON.stringify(content))
    db.prepare('UPDATE topics SET has_lesson = 1 WHERE id = ?').run(topicId)
    inserted++
  }

  for (const [topicId, lesson] of Object.entries(ALL_HSG)) {
    const topic = db.prepare('SELECT id FROM hsg_topics WHERE id = ?').get(topicId)
    if (!topic) continue
    const existing = db.prepare('SELECT topic_id FROM lessons WHERE topic_id = ?').get(topicId)
    if (existing) continue

    const { title, ...content } = lesson
    upsertLesson.run(topicId, title, JSON.stringify(content))
    db.prepare('UPDATE hsg_topics SET has_lesson = 1 WHERE id = ?').run(topicId)
    inserted++
  }

  if (inserted > 0) {
    console.log(`Inserted ${inserted} new lesson row(s) for topics that had no lesson yet.`)
  }
  return inserted
}

// Runs on every server start. Unlike backfillMissingExamBanks/seedMissingLessons,
// this targets a single field: `practiceBank`, added to some already-fully-seeded
// lessons (e.g. the "Luyện đề tổng hợp" topics) after their lesson rows already
// existed. Patches only lessons missing (or with an empty) practiceBank, and only
// ever touches that one key — title/theory/quiz/essays/flashcards/exam are spread
// through untouched, so any future admin edit to those fields survives.
export function backfillPracticeBanks() {
  const rows = db.prepare('SELECT topic_id, content FROM lessons').all()
  const updateContent = db.prepare('UPDATE lessons SET content = ? WHERE topic_id = ?')
  let patched = 0

  for (const row of rows) {
    let content
    try {
      content = JSON.parse(row.content)
    } catch {
      continue
    }
    if (content.practiceBank?.length > 0) continue

    const source = ALL_REGULAR[row.topic_id]
    if (!source?.practiceBank?.length) continue

    updateContent.run(JSON.stringify({ ...content, practiceBank: source.practiceBank }), row.topic_id)
    patched++
  }

  if (patched > 0) {
    console.log(`Backfilled practice banks for ${patched} lesson(s) that were missing practiceBank.`)
  }
  return patched
}
