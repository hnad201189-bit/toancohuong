import { useEffect, useState } from 'react'
import { getAllTutorsAdmin, updateTutor, deleteTutor } from '../api/client'

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

export default function AdminTutorsPage() {
  const [tutors, setTutors] = useState(null)
  const [filter, setFilter] = useState('pending')
  const [error, setError] = useState(null)

  function reload() {
    getAllTutorsAdmin()
      .then(setTutors)
      .catch((e) => setError(e.message))
  }

  useEffect(reload, [])

  async function setStatus(id, status) {
    setError(null)
    try {
      await updateTutor(id, { status })
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Xoá hồ sơ gia sư này?')) return
    setError(null)
    try {
      await deleteTutor(id)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  if (!tutors) return <p>Đang tải…</p>

  const visible = filter === 'all' ? tutors : tutors.filter((t) => t.status === filter)

  return (
    <div className="admin-page">
      <h1>Quản lý gia sư</h1>
      {error && <p className="admin-error">{error}</p>}

      <div className="admin-tutor-filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`admin-tutor-filter ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            {f.id !== 'all' && ` (${tutors.filter((t) => t.status === f.id).length})`}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p>Không có hồ sơ nào ở mục này.</p>
      ) : (
        <div className="admin-list">
          {visible.map((t) => (
            <div className="card admin-row admin-tutor-row" key={t.id}>
              <div className="admin-row__info">
                <strong>
                  {t.name}
                  <span className={`badge admin-tutor-status admin-tutor-status--${t.status}`}>
                    {STATUS_LABEL[t.status]}
                  </span>
                </strong>
                <span className="admin-row__meta">
                  {t.phone}
                  {t.area && ` · ${t.area}`}
                  {t.price && ` · ${t.price}`}
                </span>
                {t.subjects.length > 0 && (
                  <span className="admin-row__meta">Môn: {t.subjects.join(', ')}</span>
                )}
                {t.bio && <span className="admin-row__meta">{t.bio}</span>}
                {t.achievements && <span className="admin-row__meta">🏆 {t.achievements}</span>}
              </div>
              <div className="admin-row__actions">
                {t.status !== 'approved' && (
                  <button className="btn btn--ghost" onClick={() => setStatus(t.id, 'approved')}>
                    Duyệt
                  </button>
                )}
                {t.status !== 'rejected' && (
                  <button className="btn btn--ghost" onClick={() => setStatus(t.id, 'rejected')}>
                    Từ chối
                  </button>
                )}
                <button className="btn btn--ghost admin-btn--danger" onClick={() => handleDelete(t.id)}>
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
