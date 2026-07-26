import { useState } from 'react'

const STATUS_LABEL = {
  pending: 'Chờ duyệt',
  approved: 'Đã duyệt',
  rejected: 'Bị từ chối',
}

export default function AccountPanel({ student, quota, onRegister, onLogin, onLogout }) {
  const [tab, setTab] = useState('login')
  const [form, setForm] = useState({ name: '', phone: '', password: '' })
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  if (student) {
    return (
      <div className="card account-panel account-panel--logged-in">
        <div className="account-panel__row">
          <div>
            <strong>{student.name}</strong>{' '}
            <span className={`badge admin-tutor-status admin-tutor-status--${student.status}`}>
              {STATUS_LABEL[student.status] || student.status}
            </span>
            <div className="account-panel__meta">{student.phone}</div>
          </div>
          <button className="btn btn--ghost" onClick={onLogout}>
            Đăng xuất
          </button>
        </div>
        {quota && (
          <p className="account-panel__quota">
            Đã dùng <strong>{quota.used}</strong>/<strong>{quota.quota}</strong> lượt giải bài hôm nay
            {student.status !== 'approved' && ' (giới hạn 1 lượt/ngày cho đến khi được duyệt)'}
          </p>
        )}
      </div>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      if (tab === 'register') {
        await onRegister(form)
      } else {
        await onLogin({ phone: form.phone, password: form.password })
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="card account-panel">
      <div className="account-panel__tabs">
        <button
          className={`account-panel__tab ${tab === 'login' ? 'is-active' : ''}`}
          onClick={() => { setTab('login'); setError(null) }}
          type="button"
        >
          Đăng nhập
        </button>
        <button
          className={`account-panel__tab ${tab === 'register' ? 'is-active' : ''}`}
          onClick={() => { setTab('register'); setError(null) }}
          type="button"
        >
          Đăng ký
        </button>
      </div>

      <form className="account-panel__form" onSubmit={handleSubmit}>
        {tab === 'register' && (
          <input
            placeholder="Họ tên"
            value={form.name}
            onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
            required
          />
        )}
        <input
          placeholder="Số điện thoại"
          value={form.phone}
          onChange={(e) => setForm((v) => ({ ...v, phone: e.target.value }))}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={(e) => setForm((v) => ({ ...v, password: e.target.value }))}
          required
        />
        {error && <p className="admin-error">{error}</p>}
        <button className="btn btn--primary" type="submit" disabled={submitting}>
          {submitting ? 'Đang xử lý…' : tab === 'register' ? 'Đăng ký' : 'Đăng nhập'}
        </button>
        {tab === 'register' && (
          <p className="account-panel__note">
            Sau khi đăng ký, tài khoản cần được quản trị viên duyệt để được tăng từ 1 lên 5 lượt giải bài/ngày.
          </p>
        )}
      </form>
    </div>
  )
}
