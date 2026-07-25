import { Link } from 'react-router-dom'

export default function Sidebar({
  areas,
  hsgTopics,
  view,
  hsgMode,
  setHsgMode,
  onGoDashboard,
  onGoArea,
  onGoHsgTopic,
  onGoPhotoSolve,
  onGoTutorFinder,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">11</div>
        <div className="sidebar__brand-name">
          Toán 11
          <span>Học theo chuyên đề</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'dashboard' ? 'is-active' : ''}`}
          onClick={onGoDashboard}
        >
          Tổng quan
        </button>
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'photo-solve' ? 'is-active' : ''}`}
          onClick={onGoPhotoSolve}
        >
          📷 Chụp ảnh giải bài
        </button>
        <button
          className={`sidebar__item sidebar__item--overview ${view.screen === 'tutor-finder' ? 'is-active' : ''}`}
          onClick={onGoTutorFinder}
        >
          🎓 Tìm gia sư
        </button>

        <div className="sidebar__group-label">Mảng kiến thức</div>
        <ul className="sidebar__list">
          {areas.map((area) => (
            <li key={area.id}>
              <button
                className={`sidebar__item ${view.screen !== 'dashboard' && view.areaId === area.id ? 'is-active' : ''}`}
                onClick={() => onGoArea(area.id)}
              >
                <span className="sidebar__item-order">{area.order}</span>
                <span className="sidebar__item-name">{area.name}</span>
                <span className="sidebar__item-pct">{area.progress}%</span>
              </button>
            </li>
          ))}
        </ul>

        <div className={`sidebar__hsg-group ${!hsgMode ? 'is-locked' : ''}`}>
          <div className="sidebar__group-label sidebar__group-label--hsg">
            ▲ Ôn thi HSG / chuyên
          </div>
          <ul className="sidebar__list">
            {hsgTopics.map((topic) => (
              <li key={topic.id}>
                <button
                  className={`sidebar__item sidebar__item--hsg ${view.screen === 'lesson' && view.topicId === topic.id ? 'is-active' : ''}`}
                  disabled={!hsgMode}
                  onClick={() => onGoHsgTopic(topic.id)}
                >
                  <span className="sidebar__item-name">{topic.name}</span>
                  {!hsgMode && <span className="sidebar__lock">🔒</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar__footer">
        <label className="hsg-toggle">
          <span>Chế độ ôn thi HSG</span>
          <span
            className={`hsg-toggle__switch ${hsgMode ? 'is-on' : ''}`}
            role="switch"
            aria-checked={hsgMode}
            tabIndex={0}
            onClick={() => setHsgMode((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setHsgMode((v) => !v)
              }
            }}
          >
            <span className="hsg-toggle__knob" />
          </span>
        </label>

        <Link to="/admin" className="sidebar__admin-link">
          ⚙ Trang quản trị
        </Link>
      </div>
    </aside>
  )
}
