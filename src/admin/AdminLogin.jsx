import { useState } from 'react'

export default function AdminLogin({ onLogin, error }) {
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    await onLogin(password)
    setSubmitting(false)
  }

  return (
    <div className="admin-login">
      <form className="card admin-login__card" onSubmit={handleSubmit}>
        <div className="sidebar__logo admin-login__logo">11</div>
        <h1>Đăng nhập quản trị</h1>
        <p>Nhập mật khẩu quản trị để quản lý chuyên đề và bài học.</p>
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        {error && <p className="admin-login__error">{error}</p>}
        <button className="btn btn--primary" type="submit" disabled={submitting || !password}>
          {submitting ? 'Đang kiểm tra…' : 'Đăng nhập'}
        </button>
      </form>
    </div>
  )
}
