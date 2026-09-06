import { Link } from 'react-router-dom'
import { GRADES, GRADE_ICONS } from '../data/grades'

export default function Sidebar({
  grade,
  setGrade,
  view,
  onGoDashboard,
  onGoOnLuyen,
  onGoThiThu,
  onGoGames,
  onGoMyResults,
  onGoTutorFinder,
  open,
  onClose,
}) {
  // Lớp 1 không có thi giữa/cuối kì như bậc phổ thông, nhưng vẫn có tài liệu
  // Ôn luyện riêng (vd. Học kĩ năng giải toán Singapore).
  const showThiThu = grade !== 1

  // On mobile the sidebar is a slide-in drawer — close it after any navigation.
  function go(fn, ...args) {
    fn(...args)
    onClose?.()
  }

  return (
    <aside className={`sidebar ${open ? 'is-open' : ''}`}>
      <div className="sidebar__brand">
        <div className="sidebar__logo">{grade}</div>
        <div className="sidebar__brand-name">
          Toán {grade}
          <span>Học theo chuyên đề</span>
        </div>
        <button className="sidebar__close" onClick={onClose} aria-label="Đóng menu">
          ✕
        </button>
      </div>

      <div className="sidebar__grade-switch">
        {GRADES.map((g) => (
          <button
            key={g}
            className={`sidebar__grade-btn ${grade === g ? 'is-active' : ''}`}
            onClick={() => go(setGrade, g)}
            title={`Lớp ${g}`}
          >
            <span className="sidebar__grade-btn-icon">{GRADE_ICONS[g]}</span>
            <span className="sidebar__grade-btn-num">{g}</span>
          </button>
        ))}
      </div>

      <nav className="sidebar__nav">
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'dashboard' ? 'is-active' : ''}`}
          onClick={() => go(onGoDashboard)}
        >
          Tổng quan
        </button>
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'on-luyen' ? 'is-active' : ''}`}
          onClick={() => go(onGoOnLuyen)}
        >
          📚 Ôn luyện
        </button>
        {showThiThu && (
          <button
            className={`sidebar__item sidebar__item--overview ${view.screen === 'thi-thu' || view.screen === 'mock-exam' ? 'is-active' : ''}`}
            onClick={() => go(onGoThiThu)}
          >
            📝 Thi thử
          </button>
        )}
        {grade === 1 && (
          <button
            className={`sidebar__item sidebar__item--overview ${view.screen === 'games' ? 'is-active' : ''}`}
            onClick={() => go(onGoGames)}
          >
            🎮 Trò chơi
          </button>
        )}
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'tutor-finder' ? 'is-active' : ''}`}
          onClick={() => go(onGoTutorFinder)}
        >
          🎓 Tìm gia sư
        </button>
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'my-results' ? 'is-active' : ''}`}
          onClick={() => go(onGoMyResults)}
        >
          📊 Kết quả của tôi
        </button>
      </nav>

      <div className="sidebar__footer">
        <Link to="/admin" className="sidebar__admin-link">
          ⚙ Trang quản trị
        </Link>
      </div>
    </aside>
  )
}
