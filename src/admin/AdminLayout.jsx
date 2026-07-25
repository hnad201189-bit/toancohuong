import { NavLink, Link, Outlet } from 'react-router-dom'

export default function AdminLayout({ onLogout }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="sidebar__brand">
          <div className="sidebar__logo">11</div>
          <div className="sidebar__brand-name">
            Quản trị
            <span>Toán 11</span>
          </div>
        </div>

        <nav className="admin-sidebar__nav">
          <NavLink to="/admin" end className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Mảng kiến thức
          </NavLink>
          <NavLink to="/admin/hsg" className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Chuyên đề HSG
          </NavLink>
          <NavLink to="/admin/import" className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Nhập dữ liệu hàng loạt
          </NavLink>
          <NavLink to="/admin/tutors" className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}>
            Gia sư
          </NavLink>
          <NavLink
            to="/admin/contact-requests"
            className={({ isActive }) => `sidebar__item ${isActive ? 'is-active' : ''}`}
          >
            Yêu cầu kết nối
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

      <main className="content admin-content">
        <Outlet />
      </main>
    </div>
  )
}
