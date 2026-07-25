import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLesson, saveLesson } from '../api/client'

const BLANK_LESSON = {
  title: '',
  theory: { cards: [] },
  video: { url: '', caption: '' },
  quiz: [],
  essays: [],
  flashcards: [],
  exam: { mcqCount: 15, essayCount: 2, minutes: 45, matrix: [] },
}

function updateAt(list, index, patch) {
  return list.map((item, i) => (i === index ? { ...item, ...patch } : item))
}

function removeAt(list, index) {
  return list.filter((_, i) => i !== index)
}

export default function AdminLessonEditorPage() {
  const { topicId } = useParams()
  const [lesson, setLesson] = useState(null)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getLesson(topicId)
      .then(({ id, ...content }) => setLesson({ ...BLANK_LESSON, ...content }))
      .catch(() => setLesson(BLANK_LESSON))
  }, [topicId])

  async function handleSave() {
    setError(null)
    setStatus('saving')
    try {
      await saveLesson(topicId, lesson)
      setStatus('saved')
      setTimeout(() => setStatus(null), 2000)
    } catch (e) {
      setError(e.message)
      setStatus(null)
    }
  }

  if (!lesson) return <p>Đang tải…</p>

  return (
    <div className="admin-page admin-lesson-editor">
      <Link className="breadcrumb" to="/admin">
        ← Mảng kiến thức
      </Link>
      <h1>Soạn bài học: {topicId}</h1>
      {error && <p className="admin-error">{error}</p>}

      <div className="card admin-form">
        <h3>Tiêu đề bài học</h3>
        <input
          value={lesson.title}
          onChange={(e) => setLesson((v) => ({ ...v, title: e.target.value }))}
          placeholder="VD: Cấp số cộng, cấp số nhân"
        />
      </div>

      {/* ---- Lý thuyết ---- */}
      <div className="card admin-form">
        <h3>Lý thuyết</h3>
        {lesson.theory.cards.map((card, i) => (
          <div className="admin-subcard" key={i}>
            <div className="admin-subcard__head">
              <input
                placeholder="Tiêu đề thẻ (VD: Cấp số cộng (CSC))"
                value={card.title}
                onChange={(e) =>
                  setLesson((v) => ({
                    ...v,
                    theory: { cards: updateAt(v.theory.cards, i, { title: e.target.value }) },
                  }))
                }
              />
              <button
                className="btn btn--ghost admin-btn--danger"
                onClick={() =>
                  setLesson((v) => ({ ...v, theory: { cards: removeAt(v.theory.cards, i) } }))
                }
              >
                Xoá thẻ
              </button>
            </div>
            <textarea
              placeholder="Công thức KaTeX, mỗi dòng một công thức"
              rows={3}
              value={card.formulas.join('\n')}
              onChange={(e) =>
                setLesson((v) => ({
                  ...v,
                  theory: {
                    cards: updateAt(v.theory.cards, i, { formulas: e.target.value.split('\n') }),
                  },
                }))
              }
            />
            <input
              placeholder="Ghi chú (VD: 2b = a + c)"
              value={card.note}
              onChange={(e) =>
                setLesson((v) => ({
                  ...v,
                  theory: { cards: updateAt(v.theory.cards, i, { note: e.target.value }) },
                }))
              }
            />
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() =>
            setLesson((v) => ({
              ...v,
              theory: { cards: [...v.theory.cards, { title: '', formulas: [''], note: '' }] },
            }))
          }
        >
          + Thêm thẻ lý thuyết
        </button>
      </div>

      {/* ---- Video ---- */}
      <div className="card admin-form">
        <h3>Video</h3>
        <input
          placeholder="Link YouTube (không liệt kê) — VD: https://youtu.be/xxxxxxxxxxx"
          value={lesson.video.url || ''}
          onChange={(e) => setLesson((v) => ({ ...v, video: { ...v.video, url: e.target.value } }))}
        />
        <input
          placeholder="Chú thích (không bắt buộc, VD: Giảng viên: Nguyễn Văn A)"
          value={lesson.video.caption || ''}
          onChange={(e) => setLesson((v) => ({ ...v, video: { ...v.video, caption: e.target.value } }))}
        />
        <p className="admin-import-hint">
          Để trống nếu chưa có video — trang bài học sẽ hiện khung chờ. Video cần để chế độ{' '}
          <strong>"Không công khai" / "Không liệt kê"</strong> trên YouTube.
        </p>
      </div>

      {/* ---- Trắc nghiệm ---- */}
      <div className="card admin-form">
        <h3>Trắc nghiệm</h3>
        {lesson.quiz.map((q, i) => (
          <div className="admin-subcard" key={i}>
            <div className="admin-subcard__head">
              <input
                placeholder={`Câu hỏi ${i + 1}`}
                value={q.question}
                onChange={(e) => setLesson((v) => ({ ...v, quiz: updateAt(v.quiz, i, { question: e.target.value }) }))}
              />
              <button
                className="btn btn--ghost admin-btn--danger"
                onClick={() => setLesson((v) => ({ ...v, quiz: removeAt(v.quiz, i) }))}
              >
                Xoá câu
              </button>
            </div>
            {q.options.map((opt, optIndex) => (
              <div className="admin-form__row admin-form__row--option" key={optIndex}>
                <input
                  type="radio"
                  name={`correct-${i}`}
                  checked={q.correctIndex === optIndex}
                  onChange={() => setLesson((v) => ({ ...v, quiz: updateAt(v.quiz, i, { correctIndex: optIndex }) }))}
                  title="Đáp án đúng"
                />
                <input
                  placeholder={`Đáp án ${String.fromCharCode(65 + optIndex)}`}
                  value={opt}
                  onChange={(e) =>
                    setLesson((v) => ({
                      ...v,
                      quiz: updateAt(v.quiz, i, {
                        options: q.options.map((o, oi) => (oi === optIndex ? e.target.value : o)),
                      }),
                    }))
                  }
                />
              </div>
            ))}
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() =>
            setLesson((v) => ({
              ...v,
              quiz: [...v.quiz, { question: '', options: ['', '', '', ''], correctIndex: 0 }],
            }))
          }
        >
          + Thêm câu trắc nghiệm
        </button>
      </div>

      {/* ---- Tự luận ---- */}
      <div className="card admin-form">
        <h3>Tự luận</h3>
        {lesson.essays.map((essay, i) => (
          <div className="admin-subcard" key={i}>
            <div className="admin-subcard__head">
              <span>Bài {i + 1}</span>
              <button
                className="btn btn--ghost admin-btn--danger"
                onClick={() => setLesson((v) => ({ ...v, essays: removeAt(v.essays, i) }))}
              >
                Xoá bài
              </button>
            </div>
            <textarea
              placeholder="Đề bài"
              rows={2}
              value={essay.prompt}
              onChange={(e) => setLesson((v) => ({ ...v, essays: updateAt(v.essays, i, { prompt: e.target.value }) }))}
            />
            <textarea
              placeholder="Lời giải (KaTeX), mỗi dòng một bước"
              rows={3}
              value={essay.solution.join('\n')}
              onChange={(e) =>
                setLesson((v) => ({
                  ...v,
                  essays: updateAt(v.essays, i, { solution: e.target.value.split('\n') }),
                }))
              }
            />
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() => setLesson((v) => ({ ...v, essays: [...v.essays, { prompt: '', solution: [''] }] }))}
        >
          + Thêm bài tự luận
        </button>
      </div>

      {/* ---- Flashcard ---- */}
      <div className="card admin-form">
        <h3>Flashcard</h3>
        {lesson.flashcards.map((card, i) => (
          <div className="admin-form__row admin-form__row--edit" key={i}>
            <input
              placeholder="Mặt trước"
              value={card.front}
              onChange={(e) =>
                setLesson((v) => ({ ...v, flashcards: updateAt(v.flashcards, i, { front: e.target.value }) }))
              }
            />
            <input
              placeholder="Mặt sau (KaTeX)"
              value={card.back}
              onChange={(e) =>
                setLesson((v) => ({ ...v, flashcards: updateAt(v.flashcards, i, { back: e.target.value }) }))
              }
            />
            <button
              className="btn btn--ghost admin-btn--danger"
              onClick={() => setLesson((v) => ({ ...v, flashcards: removeAt(v.flashcards, i) }))}
            >
              Xoá
            </button>
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() => setLesson((v) => ({ ...v, flashcards: [...v.flashcards, { front: '', back: '' }] }))}
        >
          + Thêm flashcard
        </button>
      </div>

      {/* ---- Đề kiểm tra ---- */}
      <div className="card admin-form">
        <h3>Đề kiểm tra</h3>
        <div className="admin-form__row">
          <label>
            Số câu TN
            <input
              type="number"
              value={lesson.exam.mcqCount}
              onChange={(e) => setLesson((v) => ({ ...v, exam: { ...v.exam, mcqCount: Number(e.target.value) } }))}
            />
          </label>
          <label>
            Số câu tự luận
            <input
              type="number"
              value={lesson.exam.essayCount}
              onChange={(e) => setLesson((v) => ({ ...v, exam: { ...v.exam, essayCount: Number(e.target.value) } }))}
            />
          </label>
          <label>
            Thời gian (phút)
            <input
              type="number"
              value={lesson.exam.minutes}
              onChange={(e) => setLesson((v) => ({ ...v, exam: { ...v.exam, minutes: Number(e.target.value) } }))}
            />
          </label>
        </div>

        <h4>Ma trận đề</h4>
        {lesson.exam.matrix.map((row, i) => (
          <div className="admin-form__row admin-form__row--edit" key={i}>
            <input
              placeholder="Mức độ (VD: Nhận biết)"
              value={row.level}
              onChange={(e) =>
                setLesson((v) => ({
                  ...v,
                  exam: { ...v.exam, matrix: updateAt(v.exam.matrix, i, { level: e.target.value }) },
                }))
              }
            />
            <input
              type="number"
              placeholder="Số câu TN"
              value={row.mcq}
              onChange={(e) =>
                setLesson((v) => ({
                  ...v,
                  exam: { ...v.exam, matrix: updateAt(v.exam.matrix, i, { mcq: Number(e.target.value) }) },
                }))
              }
            />
            <input
              type="number"
              placeholder="Số câu tự luận"
              value={row.essay}
              onChange={(e) =>
                setLesson((v) => ({
                  ...v,
                  exam: { ...v.exam, matrix: updateAt(v.exam.matrix, i, { essay: Number(e.target.value) }) },
                }))
              }
            />
            <button
              className="btn btn--ghost admin-btn--danger"
              onClick={() => setLesson((v) => ({ ...v, exam: { ...v.exam, matrix: removeAt(v.exam.matrix, i) } }))}
            >
              Xoá
            </button>
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() =>
            setLesson((v) => ({
              ...v,
              exam: { ...v.exam, matrix: [...v.exam.matrix, { level: '', mcq: 0, essay: 0 }] },
            }))
          }
        >
          + Thêm mức độ
        </button>
      </div>

      <div className="admin-lesson-editor__save">
        <button className="btn btn--primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Đang lưu…' : status === 'saved' ? 'Đã lưu ✓' : 'Lưu bài học'}
        </button>
      </div>
    </div>
  )
}
