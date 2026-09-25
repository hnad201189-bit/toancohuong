import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMockExamsList } from '../api/client'
import { getMockExams } from '../data/exams'

const GRADES = [10, 11, 12]

export default function AdminMockExamsPage() {
  const [grade, setGrade] = useState(11)
  const [authored, setAuthored] = useState(null)
  const [error, setError] = useState(null)

  function reload() {
    getMockExamsList(grade)
      .then((rows) => setAuthored(new Set(rows.map((r) => r.examType))))
      .catch((e) => setError(e.message))
  }

  useEffect(() => {
    setAuthored(null)
    reload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grade])

  const exams = getMockExams(grade).filter((e) => e.id !== 'vao-10' && e.id !== 'dai-hoc')

  return (
    <div className="admin-page">
      <h1>📝 Đề thi thử (Giữa kì / Hết kì / HSG / Khảo sát)</h1>
      <p className="admin-import-hint">
        Nội dung các đề này hiển thị ở màn "Thi thử" trên trang chính, theo đúng cấu trúc 3 phần (TN nhiều lựa
        chọn + Đúng/Sai + Trả lời ngắn) của Bộ GD&ĐT áp dụng từ 2025, trừ đề HSG dùng hình thức tự luận.
      </p>

      <div className="admin-tutor-filters">
        {GRADES.map((g) => (
          <button
            key={g}
            className={`admin-tutor-filter ${grade === g ? 'is-active' : ''}`}
            onClick={() => setGrade(g)}
          >
            Lớp {g}
          </button>
        ))}
      </div>

      {error && <p className="admin-error">{error}</p>}

      {!authored ? (
        <p>Đang tải…</p>
      ) : (
        <div className="admin-list">
          {exams.map((exam) => (
            <div className="card admin-row" key={exam.id}>
              <div className="admin-row__info">
                <strong>
                  {exam.name}
                  {authored.has(exam.id) && <span className="badge badge--sample">ĐÃ CÓ NỘI DUNG</span>}
                </strong>
              </div>
              <div className="admin-row__actions">
                <Link className="btn btn--ghost" to={`/admin/mock-exams/${grade}-${exam.id}`}>
                  {authored.has(exam.id) ? 'Sửa đề' : 'Soạn đề'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
