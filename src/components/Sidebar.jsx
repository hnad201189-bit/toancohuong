import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GRADES, GRADE_ICONS } from '../data/grades'

const BASE_MOCK_EXAMS = [
  { id: 'giua-ky-1', name: 'Thi giữa kì I' },
  { id: 'het-ky-1', name: 'Thi hết kì I' },
  { id: 'giua-ky-2', name: 'Thi giữa kì II' },
  { id: 'het-ky-2', name: 'Thi hết kì II' },
]

function getMockExams(grade) {
  const list = [...BASE_MOCK_EXAMS]
  if (grade === 9) list.push({ id: 'vao-10', name: 'Thi vào 10' })
  if (grade === 12) list.push({ id: 'dai-hoc', name: 'Thi Đại học' })
  return list
}

export default function Sidebar({
  grade,
  setGrade,
  areas,
  hsgTopics,
  view,
  hsgMode,
  setHsgMode,
  onGoDashboard,
  onGoArea,
  onGoHsgTopic,
  onGoMockExam,
  onGoOnLuyen,
  onGoGames,
  onGoMyResults,
  onGoTutorFinder,
  open,
  onClose,
}) {
  const [coBanOpen, setCoBanOpen] = useState(false)
  const [thiThuOpen, setThiThuOpen] = useState(false)
  const [hsgOpen, setHsgOpen] = useState(false)
  const mockExams = getMockExams(grade)
  // Lớp 1 không có thi giữa/cuối kì hay thi HSG như bậc phổ thông, nhưng vẫn
  // có tài liệu Ôn luyện riêng (vd. Học kĩ năng giải toán Singapore).
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

        <button
          type="button"
          className="sidebar__group-label sidebar__group-label--toggle"
          aria-expanded={coBanOpen}
          onClick={() => setCoBanOpen((v) => !v)}
        >
          KIẾN THỨC CƠ BẢN
          <span className="sidebar__group-caret">{coBanOpen ? '▾' : '▸'}</span>
        </button>
        {coBanOpen && (
          <ul className="sidebar__list">
            {areas.map((area) => (
              <li key={area.id}>
                <button
                  className={`sidebar__item ${view.screen !== 'dashboard' && view.areaId === area.id ? 'is-active' : ''}`}
                  onClick={() => go(onGoArea, area.id)}
                >
                  <span className="sidebar__item-order">{area.order}</span>
                  <span className="sidebar__item-name">{area.name}</span>
                  <span className="sidebar__item-pct">{area.progress}%</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {showThiThu && (
          <>
            <button
              type="button"
              className="sidebar__group-label sidebar__group-label--toggle"
              aria-expanded={thiThuOpen}
              onClick={() => setThiThuOpen((v) => !v)}
            >
              THI THỬ
              <span className="sidebar__group-caret">{thiThuOpen ? '▾' : '▸'}</span>
            </button>
            {thiThuOpen && (
              <ul className="sidebar__list">
                {mockExams.map((exam) => (
                  <li key={exam.id}>
                    <button
                      className={`sidebar__item ${view.screen === 'mock-exam' && view.examId === exam.id ? 'is-active' : ''}`}
                      onClick={() => go(onGoMockExam, exam)}
                    >
                      <span className="sidebar__item-name">{exam.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {hsgTopics.length > 0 && (
          <>
            <button
              type="button"
              className="sidebar__group-label sidebar__group-label--toggle sidebar__group-label--hsg"
              aria-expanded={hsgOpen}
              onClick={() => setHsgOpen((v) => !v)}
            >
              ▲ Ôn thi HSG / chuyên
              <span className="sidebar__group-caret">{hsgOpen ? '▾' : '▸'}</span>
            </button>
            {hsgOpen && (
              <div className={`sidebar__hsg-group ${!hsgMode ? 'is-locked' : ''}`}>
                <ul className="sidebar__list">
                  {hsgTopics.map((topic) => (
                    <li key={topic.id}>
                      <button
                        className={`sidebar__item sidebar__item--hsg ${view.screen === 'lesson' && view.topicId === topic.id ? 'is-active' : ''}`}
                        disabled={!hsgMode}
                        onClick={() => go(onGoHsgTopic, topic.id)}
                      >
                        <span className="sidebar__item-name">{topic.name}</span>
                        {!hsgMode && <span className="sidebar__lock">🔒</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </nav>

      <div className="sidebar__footer">
        {hsgTopics.length > 0 && (
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
        )}

        <Link to="/admin" className="sidebar__admin-link">
          ⚙ Trang quản trị
        </Link>
      </div>
    </aside>
  )
}
