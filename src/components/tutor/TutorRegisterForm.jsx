import { useState } from 'react'
import { registerTutor } from '../../api/client'
import { SUBJECT_OPTIONS } from '../../data/subjects'
import { getCurrentPosition } from '../../lib/geolocation'
import LocationMap from './LocationMap'

const BLANK = { name: '', phone: '', area: '', bio: '', achievements: '', price: '', subjects: [], lat: null, lng: null }

export default function TutorRegisterForm({ onDone }) {
  const [form, setForm] = useState(BLANK)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [done, setDone] = useState(false)
  const [locating, setLocating] = useState(false)
  const [locationError, setLocationError] = useState(null)

  function handlePick(lat, lng) {
    setForm((v) => ({ ...v, lat, lng }))
  }

  async function handleUseMyLocation() {
    setLocating(true)
    setLocationError(null)
    try {
      const { lat, lng } = await getCurrentPosition()
      setForm((v) => ({ ...v, lat, lng }))
    } catch (err) {
      setLocationError(err.message)
    } finally {
      setLocating(false)
    }
  }

  function toggleSubject(s) {
    setForm((v) => ({
      ...v,
      subjects: v.subjects.includes(s) ? v.subjects.filter((x) => x !== s) : [...v.subjects, s],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await registerTutor(form)
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="card tutor-register__done">
        <h3>Đã gửi đăng ký thành công ✓</h3>
        <p>
          Hồ sơ của bạn đang chờ quản trị viên duyệt. Sau khi được duyệt, hồ sơ sẽ hiển thị công khai để học
          sinh tìm kiếm và liên hệ.
        </p>
        <button
          className="btn btn--ghost"
          onClick={() => {
            setForm(BLANK)
            setDone(false)
            onDone()
          }}
        >
          Quay lại tìm gia sư
        </button>
      </div>
    )
  }

  return (
    <form className="card admin-form tutor-register" onSubmit={handleSubmit}>
      <h3>Thông tin gia sư</h3>
      <div className="admin-form__row">
        <input
          placeholder="Họ tên"
          value={form.name}
          onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
          required
        />
        <input
          placeholder="Số điện thoại / Zalo"
          value={form.phone}
          onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
          required
        />
      </div>

      <input
        placeholder="Khu vực dạy (VD: Quận 1, TP.HCM)"
        value={form.area}
        onChange={(e) => setForm((v) => ({ ...v, area: e.target.value }))}
      />

      <div className="tutor-register__location">
        <div className="tutor-register__location-head">
          <span>
            📍 Ghim vị trí trên bản đồ (không bắt buộc) — giúp phụ huynh tìm thấy bạn qua tính năng "Tìm gần đây"
          </span>
          <button type="button" className="btn btn--ghost" onClick={handleUseMyLocation} disabled={locating}>
            {locating ? 'Đang định vị…' : 'Dùng vị trí hiện tại'}
          </button>
        </div>
        {locationError && <p className="admin-error">{locationError}</p>}
        <LocationMap lat={form.lat} lng={form.lng} onPick={handlePick} height={220} />
        <div className="tutor-register__location-foot">
          {form.lat != null && form.lng != null ? (
            <>
              <span>
                Đã chọn: {form.lat.toFixed(5)}, {form.lng.toFixed(5)}
              </span>
              <button type="button" className="btn btn--ghost" onClick={() => setForm((v) => ({ ...v, lat: null, lng: null }))}>
                Xoá vị trí
              </button>
            </>
          ) : (
            <span>Chưa chọn vị trí — bấm vào bản đồ để ghim, hoặc kéo thả ghim để chỉnh.</span>
          )}
        </div>
      </div>

      <div className="tutor-register__subjects">
        {SUBJECT_OPTIONS.map((s) => (
          <label key={s} className="tutor-register__subject-chip">
            <input type="checkbox" checked={form.subjects.includes(s)} onChange={() => toggleSubject(s)} />
            {s}
          </label>
        ))}
      </div>

      <textarea
        placeholder="Giới thiệu ngắn (phương pháp dạy, điểm mạnh, phong cách giảng dạy...)"
        rows={3}
        value={form.bio}
        onChange={(e) => setForm((v) => ({ ...v, bio: e.target.value }))}
      />

      <textarea
        placeholder="Kinh nghiệm / Thành tích đã đạt được (VD: 3 năm luyện thi HSG, giải Nhì HSG Toán tỉnh 2023...)"
        rows={3}
        value={form.achievements}
        onChange={(e) => setForm((v) => ({ ...v, achievements: e.target.value }))}
      />

      <input
        placeholder="Mức giá (VD: 150.000 - 250.000đ / buổi)"
        value={form.price}
        onChange={(e) => setForm((v) => ({ ...v, price: e.target.value }))}
      />

      {error && <p className="admin-error">{error}</p>}

      <button className="btn btn--primary" type="submit" disabled={submitting}>
        {submitting ? 'Đang gửi…' : 'Gửi đăng ký'}
      </button>
      <p className="tutor-register__note">Hồ sơ sẽ được quản trị viên duyệt trước khi hiển thị công khai.</p>
    </form>
  )
}
