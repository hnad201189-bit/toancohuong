import { useEffect, useState } from 'react'
import { getContactRequests, updateContactRequest } from '../api/client'

export default function AdminContactRequestsPage() {
  const [requests, setRequests] = useState(null)
  const [error, setError] = useState(null)

  function reload() {
    getContactRequests()
      .then(setRequests)
      .catch((e) => setError(e.message))
  }

  useEffect(reload, [])

  async function markContacted(id) {
    setError(null)
    try {
      await updateContactRequest(id, { status: 'contacted' })
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  if (!requests) return <p>Đang tải…</p>

  const newRequests = requests.filter((r) => r.status === 'new')
  const doneRequests = requests.filter((r) => r.status === 'contacted')

  return (
    <div className="admin-page">
      <h1>Yêu cầu kết nối</h1>
      <p>Học sinh gửi yêu cầu tìm gia sư — kết nối hai bên rồi đánh dấu đã liên hệ.</p>
      {error && <p className="admin-error">{error}</p>}

      {requests.length === 0 ? (
        <p>Chưa có yêu cầu kết nối nào.</p>
      ) : (
        <>
          <h3 className="admin-contact-section-title">Chưa xử lý ({newRequests.length})</h3>
          {newRequests.length === 0 ? (
            <p>Không có yêu cầu nào đang chờ.</p>
          ) : (
            <div className="admin-list">
              {newRequests.map((r) => (
                <ContactRequestRow key={r.id} req={r} onMarkContacted={markContacted} />
              ))}
            </div>
          )}

          {doneRequests.length > 0 && (
            <>
              <h3 className="admin-contact-section-title">Đã liên hệ ({doneRequests.length})</h3>
              <div className="admin-list">
                {doneRequests.map((r) => (
                  <ContactRequestRow key={r.id} req={r} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

function ContactRequestRow({ req, onMarkContacted }) {
  return (
    <div className="card admin-row admin-contact-row">
      <div className="admin-row__info">
        <strong>
          {req.student.name} <span className="admin-row__arrow">→</span> {req.tutor.name}
        </strong>
        <span className="admin-row__meta">Học sinh: {req.student.phone}</span>
        <span className="admin-row__meta">Gia sư: {req.tutor.phone}</span>
        {req.note && <span className="admin-row__meta">Ghi chú: {req.note}</span>}
      </div>
      {onMarkContacted && (
        <div className="admin-row__actions">
          <button className="btn btn--ghost" onClick={() => onMarkContacted(req.id)}>
            Đánh dấu đã liên hệ
          </button>
        </div>
      )}
    </div>
  )
}
