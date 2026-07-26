import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'

export default function AdminLayout({ onLogout }) {
  const [navOpen, setNavOpen] = useState(false)
  const close = () => setNavOpen(false)

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar sidebar ${navOpen ? 'is-open' : ''}`}>
        <div className="sidebar__brand">
          <div className="sidebar__logo">11</div>
          <div className="sidebar__brand-name">
            Quản trị
            <span>Toán 11</span>
          </div>
          <button className="sidebar__close" onClick={close} aria-label="Đóng menu">
            ✕
          </button>
        </div>

        <nav className="admin-sidebar__nav">
          <NavLink to="/admin" end onClick={close} className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Mảng kiến thức
          </NavLink>
          <NavLink to="/admin/hsg" onClick={close} className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Chuyên đề HSG
          </NavLink>
          <NavLink to="/admin/import" onClick={close} className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Nhập dữ liệu hàng loạt
          </NavLink>
          <NavLink to="/admin/tutors" onClick={close} className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Gia sư
          </NavLink>
          <NavLink
            to="/admin/contact-requests"
            onClick={close}
            className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}
          >
            Yêu cầu kết nối
          </NavLink>
          <NavLink to="/admin/students" onClick={close} className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Tài khoản học sinh
          </NavLink>
        </nav>

        <div className="sidebar__footer admin-sidebar__footer">
          <Link to="/" className="sidebar__admin-link">
            ← Về trang chính
          </Link>
          <button className="btn btn--ghost admin-sidebar__logout" onClick={onLogout}>
            Đăng xuất
          </button>
        </div>
      </aside>
      <div className={`sidebar-backdrop ${navOpen ? 'is-open' : ''}`} onClick={close} />

      <main className="content admin-content">
        <div className="mobile-topbar">
          <button className="mobile-topbar__btn" onClick={() => setNavOpen(true)} aria-label="Mở menu">
            ☰
          </button>
          <span className="mobile-topbar__title">Quản trị</span>
        </div>
        <Outlet />
      </main>
    </div>
  )
}
