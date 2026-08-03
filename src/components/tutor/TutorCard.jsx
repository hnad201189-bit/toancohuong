import { useState } from 'react'
import Avatar from '../Avatar'
import { requestTutorContact } from '../../api/client'

export default function TutorCard({ tutor }) {
  const [formOpen, setFormOpen] = useState(false)
  const [form, setForm] = useState({ studentName: '', studentPhone: '', note: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [done, setDone] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await requestTutorContact(tutor.id, form)
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="card tutor-card">
      <div className="tutor-card__head">
        <Avatar name={tutor.name} />
        <div className="tutor-card__head-info">
          <h3>{tutor.name}</h3>
          <span className="badge badge--verified">✓ Đã xác thực</span>
        </div>
      </div>

      {(tutor.area || tutor.distanceKm != null) && (
        <p className="tutor-card__area">
          📍 {tutor.area}
          {tutor.distanceKm != null && (
            <span className="tutor-card__distance">{tutor.area ? ' · ' : ''}cách bạn {tutor.distanceKm} km</span>
          )}
        </p>
      )}

      {tutor.subjects.length > 0 && (
        <div className="tutor-card__subjects">
          {tutor.subjects.map((s) => (
            <span className="tutor-tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      )}

      {tutor.bio && <p className="tutor-card__bio">{tutor.bio}</p>}

      {tutor.achievements && (
        <p className="tutor-card__achievements">🏆 {tutor.achievements}</p>
      )}

      {tutor.price && <p className="tutor-card__price">💰 {tutor.price}</p>}

      <p className="tutor-card__phone">🔒 {tutor.phoneMasked}</p>

      {done ? (
        <p className="tutor-card__request-done">
          Đã gửi yêu cầu ✓ Quản trị viên sẽ liên hệ để kết nối bạn với gia sư sớm nhất.
        </p>
      ) : formOpen ? (
        <form className="tutor-card__request-form" onSubmit={handleSubmit}>
          <input
            placeholder="Tên của bạn"
            value={form.studentName}
            onChange={(e) => setForm((v) => ({ ...v, studentName: e.target.value }))}
            required
          />
          <input
            placeholder="Số điện thoại của bạn"
            value={form.studentPhone}
            onChange={(e) => setForm((v) => ({ ...v, studentPhone: e.target.value }))}
            required
          />
          <textarea
            placeholder="Ghi chú (không bắt buộc)"
            rows={2}
            value={form.note}
            onChange={(e) => setForm((v) => ({ ...v, note: e.target.value }))}
          />
          {error && <p className="admin-error">{error}</p>}
          <div className="tutor-card__request-form-actions">
            <button className="btn btn--ghost" type="button" onClick={() => setFormOpen(false)}>
              Huỷ
            </button>
            <button className="btn btn--primary" type="submit" disabled={submitting}>
              {submitting ? 'Đang gửi…' : 'Gửi yêu cầu'}
            </button>
          </div>
        </form>
      ) : (
        <button className="btn btn--primary tutor-card__request-btn" onClick={() => setFormOpen(true)}>
          Yêu cầu kết nối
        </button>
      )}
    </div>
  )
}
