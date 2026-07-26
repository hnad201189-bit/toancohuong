import { useEffect, useState } from 'react'
import { getAllStudentsAdmin, updateStudent, deleteStudent } from '../api/client'

const STATUS_LABEL = {
  pending: 'Chờ duyệt',
  approved: 'Đã duyệt',
  rejected: 'Từ chối',
}

const FILTERS = [
  { id: 'pending', label: 'Chờ duyệt' },
  { id: 'approved', label: 'Đã duyệt' },
  { id: 'rejected', label: 'Từ chối' },
  { id: 'all', label: 'Tất cả' },
]

export default function AdminStudentsPage() {
  const [students, setStudents] = useState(null)
  const [filter, setFilter] = useState('pending')
  const [error, setError] = useState(null)

  function reload() {
    getAllStudentsAdmin()
      .then(setStudents)
      .catch((e) => setError(e.message))
  }

  useEffect(reload, [])

  async function setStatus(id, status) {
    setError(null)
    try {
      await updateStudent(id, { status })
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Xoá tài khoản học sinh này?')) return
    setError(null)
    try {
      await deleteStudent(id)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  if (!students) return <p>Đang tải…</p>

  const visible = filter === 'all' ? students : students.filter((s) => s.status === filter)

  return (
    <div className="admin-page">
      <h1>Tài khoản học sinh</h1>
      <p className="screen__subtitle">
        Tài khoản chưa được duyệt chỉ dùng được 1 lượt chụp ảnh giải bài/ngày, giống khách vãng lai. Duyệt để
        tăng lên 5 lượt/ngày.
      </p>
      {error && <p className="admin-error">{error}</p>}

      <div className="admin-tutor-filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`admin-tutor-filter ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            {f.id !== 'all' && ` (${students.filter((s) => s.status === f.id).length})`}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p>Không có tài khoản nào ở mục này.</p>
      ) : (
        <div className="admin-list">
          {visible.map((s) => (
            <div className="card admin-row admin-tutor-row" key={s.id}>
              <div className="admin-row__info">
                <strong>
                  {s.name}
                  <span className={`badge admin-tutor-status admin-tutor-status--${s.status}`}>
                    {STATUS_LABEL[s.status]}
                  </span>
                </strong>
                <span className="admin-row__meta">{s.phone}</span>
                <span className="admin-row__meta">Đăng ký lúc: {new Date(s.createdAt).toLocaleString('vi-VN')}</span>
              </div>
              <div className="admin-row__actions">
                {s.status !== 'approved' && (
                  <button className="btn btn--ghost" onClick={() => setStatus(s.id, 'approved')}>
                    Duyệt
                  </button>
                )}
                {s.status !== 'rejected' && (
                  <button className="btn btn--ghost" onClick={() => setStatus(s.id, 'rejected')}>
                    Từ chối
                  </button>
                )}
                <button className="btn btn--ghost admin-btn--danger" onClick={() => handleDelete(s.id)}>
                  Xoá
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
