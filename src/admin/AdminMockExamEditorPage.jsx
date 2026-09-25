import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMockExam, saveMockExam } from '../api/client'

const BLANK = {
  title: '',
  kind: 'tracnghiem-3phan',
  duration: 90,
  matrix: [],
  specification: [],
  partI: [],
  partII: [],
  partIII: [],
  essays: [],
}

function updateAt(list, index, patch) {
  return list.map((item, i) => (i === index ? { ...item, ...patch } : item))
}

function removeAt(list, index) {
  return list.filter((_, i) => i !== index)
}

export default function AdminMockExamEditorPage() {
  const { examId } = useParams() // dạng "<grade>-<examType>", vd "11-giua-ky-1"
  const [exam, setExam] = useState(null)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMockExam(examId)
      .then(({ id: _id, grade: _grade, examType: _examType, ...content }) => setExam({ ...BLANK, ...content }))
      .catch(() => setExam(BLANK))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId])

  async function handleSave() {
    setError(null)
    setStatus('saving')
    try {
      await saveMockExam(examId, exam)
      setStatus('saved')
      setTimeout(() => setStatus(null), 2000)
    } catch (e) {
      setError(e.message)
      setStatus(null)
    }
  }

  if (!exam) return <p>Đang tải…</p>

  const isTuLuan = exam.kind === 'tuluan'

  return (
    <div className="admin-page admin-lesson-editor">
      <Link className="breadcrumb" to="/admin/mock-exams">
        ← Đề thi thử
      </Link>
      <h1>Soạn đề: {examId}</h1>
      {error && <p className="admin-error">{error}</p>}

      <div className="card admin-form">
        <h3>Thông tin chung</h3>
        <input
          placeholder="Tiêu đề đề thi, VD: Đề kiểm tra giữa học kì I — Toán 11"
          value={exam.title}
          onChange={(e) => setExam((v) => ({ ...v, title: e.target.value }))}
        />
        <div className="admin-form__row">
          <label>
            Hình thức
            <select value={exam.kind} onChange={(e) => setExam((v) => ({ ...v, kind: e.target.value }))}>
              <option value="tracnghiem-3phan">Trắc nghiệm 3 phần (chuẩn Bộ GD&ĐT 2025)</option>
              <option value="tuluan">Tự luận (dùng cho đề HSG)</option>
            </select>
          </label>
          <label>
            Thời gian (phút)
            <input
              type="number"
              value={exam.duration}
              onChange={(e) => setExam((v) => ({ ...v, duration: Number(e.target.value) }))}
            />
          </label>
        </div>
      </div>

      {/* ---- Ma trận đề ---- */}
      <div className="card admin-form">
        <h3>Ma trận đề</h3>
        {exam.matrix.map((row, i) => (
          <div className="admin-form__row admin-form__row--edit" key={i}>
            <input
              placeholder="Chương / chủ đề"
              value={row.chapter}
              onChange={(e) => setExam((v) => ({ ...v, matrix: updateAt(v.matrix, i, { chapter: e.target.value }) }))}
            />
            <input
              type="number"
              placeholder="Nhận biết"
              value={row.nb}
              onChange={(e) => setExam((v) => ({ ...v, matrix: updateAt(v.matrix, i, { nb: Number(e.target.value) }) }))}
            />
            <input
              type="number"
              placeholder="Thông hiểu"
              value={row.th}
              onChange={(e) => setExam((v) => ({ ...v, matrix: updateAt(v.matrix, i, { th: Number(e.target.value) }) }))}
            />
            <input
              type="number"
              placeholder="Vận dụng"
              value={row.vd}
              onChange={(e) => setExam((v) => ({ ...v, matrix: updateAt(v.matrix, i, { vd: Number(e.target.value) }) }))}
            />
            <input
              type="number"
              placeholder="Vận dụng cao"
              value={row.vdc}
              onChange={(e) => setExam((v) => ({ ...v, matrix: updateAt(v.matrix, i, { vdc: Number(e.target.value) }) }))}
            />
            <button
              className="btn btn--ghost admin-btn--danger"
              onClick={() => setExam((v) => ({ ...v, matrix: removeAt(v.matrix, i) }))}
            >
              Xoá
            </button>
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() =>
            setExam((v) => ({ ...v, matrix: [...v.matrix, { chapter: '', nb: 0, th: 0, vd: 0, vdc: 0 }] }))
          }
        >
          + Thêm dòng ma trận
        </button>
      </div>

      {/* ---- Bản đặc tả ---- */}
      <div className="card admin-form">
        <h3>Bản đặc tả</h3>
        {exam.specification.map((row, i) => (
          <div className="admin-form__row admin-form__row--edit" key={i}>
            <input
              placeholder="Chương / chủ đề"
              value={row.chapter}
              onChange={(e) =>
                setExam((v) => ({ ...v, specification: updateAt(v.specification, i, { chapter: e.target.value }) }))
              }
            />
            <input
              placeholder="Nội dung"
              value={row.content}
              onChange={(e) =>
                setExam((v) => ({ ...v, specification: updateAt(v.specification, i, { content: e.target.value }) }))
              }
            />
            <input
              placeholder="Mức độ"
              value={row.level}
              onChange={(e) =>
                setExam((v) => ({ ...v, specification: updateAt(v.specification, i, { level: e.target.value }) }))
              }
            />
            <input
              placeholder="Số câu"
              value={row.questionNumbers}
              onChange={(e) =>
                setExam((v) => ({
                  ...v,
                  specification: updateAt(v.specification, i, { questionNumbers: e.target.value }),
                }))
              }
            />
            <button
              className="btn btn--ghost admin-btn--danger"
              onClick={() => setExam((v) => ({ ...v, specification: removeAt(v.specification, i) }))}
            >
              Xoá
            </button>
          </div>
        ))}
        <button
          className="btn btn--ghost"
          onClick={() =>
            setExam((v) => ({
              ...v,
              specification: [...v.specification, { chapter: '', content: '', level: '', questionNumbers: '' }],
            }))
          }
        >
          + Thêm dòng đặc tả
        </button>
      </div>

      {!isTuLuan && (
        <>
          {/* ---- Phần I: TN nhiều lựa chọn ---- */}
          <div className="card admin-form">
            <h3>Phần I — Trắc nghiệm nhiều phương án lựa chọn</h3>
            {exam.partI.map((q, i) => (
              <div className="admin-subcard" key={i}>
                <div className="admin-subcard__head">
                  <span>Câu {i + 1}</span>
                  <button
                    className="btn btn--ghost admin-btn--danger"
                    onClick={() => setExam((v) => ({ ...v, partI: removeAt(v.partI, i) }))}
                  >
                    Xoá câu
                  </button>
                </div>
                <textarea
                  placeholder="Câu hỏi (KaTeX: $...$)"
                  rows={2}
                  value={q.question}
                  onChange={(e) => setExam((v) => ({ ...v, partI: updateAt(v.partI, i, { question: e.target.value }) }))}
                />
                {q.options.map((opt, oi) => (
                  <div className="admin-form__row admin-form__row--option" key={oi}>
                    <input
                      type="radio"
                      name={`partI-correct-${i}`}
                      checked={q.correctIndex === oi}
                      onChange={() => setExam((v) => ({ ...v, partI: updateAt(v.partI, i, { correctIndex: oi }) }))}
                      title="Đáp án đúng"
                    />
                    <input
                      placeholder={`Đáp án ${String.fromCharCode(65 + oi)}`}
                      value={opt}
                      onChange={(e) =>
                        setExam((v) => ({
                          ...v,
                          partI: updateAt(v.partI, i, {
                            options: q.options.map((o, k) => (k === oi ? e.target.value : o)),
                          }),
                        }))
                      }
                    />
                  </div>
                ))}
                <textarea
                  placeholder="Lời giải"
                  rows={2}
                  value={q.solution || ''}
                  onChange={(e) => setExam((v) => ({ ...v, partI: updateAt(v.partI, i, { solution: e.target.value }) }))}
                />
              </div>
            ))}
            <button
              className="btn btn--ghost"
              onClick={() =>
                setExam((v) => ({
                  ...v,
                  partI: [...v.partI, { question: '', options: ['', '', '', ''], correctIndex: 0, solution: '' }],
                }))
              }
            >
              + Thêm câu phần I
            </button>
          </div>

          {/* ---- Phần II: Đúng/Sai ---- */}
          <div className="card admin-form">
            <h3>Phần II — Trắc nghiệm Đúng/Sai (mỗi câu 4 ý)</h3>
            {exam.partII.map((cluster, ci) => (
              <div className="admin-subcard" key={ci}>
                <div className="admin-subcard__head">
                  <span>Câu {ci + 1}</span>
                  <button
                    className="btn btn--ghost admin-btn--danger"
                    onClick={() => setExam((v) => ({ ...v, partII: removeAt(v.partII, ci) }))}
                  >
                    Xoá câu
                  </button>
                </div>
                <textarea
                  placeholder="Đề dẫn (stem)"
                  rows={2}
                  value={cluster.stem}
                  onChange={(e) => setExam((v) => ({ ...v, partII: updateAt(v.partII, ci, { stem: e.target.value }) }))}
                />
                {cluster.statements.map((st, si) => (
                  <div className="admin-form__row admin-form__row--option" key={si}>
                    <select
                      value={st.isTrue ? 'true' : 'false'}
                      onChange={(e) =>
                        setExam((v) => ({
                          ...v,
                          partII: updateAt(v.partII, ci, {
                            statements: cluster.statements.map((s, k) =>
                              k === si ? { ...s, isTrue: e.target.value === 'true' } : s
                            ),
                          }),
                        }))
                      }
                    >
                      <option value="true">Đúng</option>
                      <option value="false">Sai</option>
                    </select>
                    <input
                      placeholder={`Ý ${String.fromCharCode(97 + si)})`}
                      value={st.text}
                      onChange={(e) =>
                        setExam((v) => ({
                          ...v,
                          partII: updateAt(v.partII, ci, {
                            statements: cluster.statements.map((s, k) =>
                              k === si ? { ...s, text: e.target.value } : s
                            ),
                          }),
                        }))
                      }
                    />
                  </div>
                ))}
                <textarea
                  placeholder="Lời giải cho cả 4 ý"
                  rows={2}
                  value={cluster.solution || ''}
                  onChange={(e) => setExam((v) => ({ ...v, partII: updateAt(v.partII, ci, { solution: e.target.value }) }))}
                />
              </div>
            ))}
            <button
              className="btn btn--ghost"
              onClick={() =>
                setExam((v) => ({
                  ...v,
                  partII: [
                    ...v.partII,
                    {
                      stem: '',
                      statements: [
                        { text: '', isTrue: true },
                        { text: '', isTrue: true },
                        { text: '', isTrue: true },
                        { text: '', isTrue: true },
                      ],
                      solution: '',
                    },
                  ],
                }))
              }
            >
              + Thêm câu phần II
            </button>
          </div>

          {/* ---- Phần III: Trả lời ngắn ---- */}
          <div className="card admin-form">
            <h3>Phần III — Trắc nghiệm trả lời ngắn</h3>
            {exam.partIII.map((q, i) => (
              <div className="admin-subcard" key={i}>
                <div className="admin-subcard__head">
                  <span>Câu {i + 1}</span>
                  <button
                    className="btn btn--ghost admin-btn--danger"
                    onClick={() => setExam((v) => ({ ...v, partIII: removeAt(v.partIII, i) }))}
                  >
                    Xoá câu
                  </button>
                </div>
                <textarea
                  placeholder="Câu hỏi"
                  rows={2}
                  value={q.question}
                  onChange={(e) => setExam((v) => ({ ...v, partIII: updateAt(v.partIII, i, { question: e.target.value }) }))}
                />
                <input
                  placeholder="Đáp số"
                  value={q.answer}
                  onChange={(e) => setExam((v) => ({ ...v, partIII: updateAt(v.partIII, i, { answer: e.target.value }) }))}
                />
                <textarea
                  placeholder="Lời giải"
                  rows={2}
                  value={q.solution || ''}
                  onChange={(e) => setExam((v) => ({ ...v, partIII: updateAt(v.partIII, i, { solution: e.target.value }) }))}
                />
              </div>
            ))}
            <button
              className="btn btn--ghost"
              onClick={() =>
                setExam((v) => ({ ...v, partIII: [...v.partIII, { question: '', answer: '', solution: '' }] }))
              }
            >
              + Thêm câu phần III
            </button>
          </div>
        </>
      )}

      {isTuLuan && (
        <div className="card admin-form">
          <h3>Đề tự luận</h3>
          {exam.essays.map((essay, i) => (
            <div className="admin-subcard" key={i}>
              <div className="admin-subcard__head">
                <span>Bài {i + 1}</span>
                <button
                  className="btn btn--ghost admin-btn--danger"
                  onClick={() => setExam((v) => ({ ...v, essays: removeAt(v.essays, i) }))}
                >
                  Xoá bài
                </button>
              </div>
              <textarea
                placeholder="Đề bài"
                rows={3}
                value={essay.prompt}
                onChange={(e) => setExam((v) => ({ ...v, essays: updateAt(v.essays, i, { prompt: e.target.value }) }))}
              />
              <input
                type="number"
                placeholder="Điểm"
                value={essay.points ?? 0}
                onChange={(e) => setExam((v) => ({ ...v, essays: updateAt(v.essays, i, { points: Number(e.target.value) }) }))}
              />
              <textarea
                placeholder="Lời giải (mỗi dòng một bước)"
                rows={3}
                value={(essay.solution || []).join('\n')}
                onChange={(e) =>
                  setExam((v) => ({ ...v, essays: updateAt(v.essays, i, { solution: e.target.value.split('\n') }) }))
                }
              />
            </div>
          ))}
          <button
            className="btn btn--ghost"
            onClick={() => setExam((v) => ({ ...v, essays: [...v.essays, { prompt: '', points: 0, solution: [''] }] }))}
          >
            + Thêm bài tự luận
          </button>
        </div>
      )}

      <div className="admin-lesson-editor__save">
        <button className="btn btn--primary" onClick={handleSave} disabled={status === 'saving'}>
          {status === 'saving' ? 'Đang lưu…' : status === 'saved' ? 'Đã lưu ✓' : 'Lưu đề thi'}
        </button>
      </div>
    </div>
  )
}
