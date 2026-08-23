import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TopicDetail from './components/TopicDetail'
import Lesson from './components/lesson/Lesson'
import PhotoSolve from './components/PhotoSolve'
import MyResults from './components/MyResults'
import TutorFinder from './components/tutor/TutorFinder'
import GradeGate from './components/GradeGate'
import Games from './components/games/Games'
import { getAreas, getHsgTopics, getLesson } from './api/client'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function MainSite() {
  const [grade, setGradeRaw] = useLocalStorage('toan-grade', 11)
  const [hsgMode, setHsgMode] = useLocalStorage('toan11-hsg-mode', false)
  const [view, setView] = useState({ screen: 'dashboard' })
  const [areas, setAreas] = useState(null)
  const [hsgTopics, setHsgTopics] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [loadError, setLoadError] = useState(null)
  const [navOpen, setNavOpen] = useState(false)
  // Not persisted on purpose — the grade picker is meant to greet the user
  // on every visit, not just the first one.
  const [gateConfirmed, setGateConfirmed] = useState(false)

  function loadData() {
    setLoadError(null)
    Promise.all([getAreas(grade), getHsgTopics(grade)])
      .then(([a, h]) => {
        setAreas(a)
        setHsgTopics(h)
      })
      .catch((e) => setLoadError(e.message))
  }

  useEffect(loadData, [grade])

  // Mọi điều hướng trong app đi qua đây để đồng bộ với lịch sử trình duyệt —
  // nhờ đó nút "quay lại" trên điện thoại/PC chỉ lùi một bước trong app thay
  // vì thoát thẳng ra ngoài (không có pushState nào thì "back" nhảy khỏi SPA).
  function navigate(nextView, { replace = false } = {}) {
    // Nếu đích đến giống hệt màn hình hiện tại (vd. bấm lại "Tổng quan" khi
    // đang ở dashboard), ghi đè thay vì chồng thêm một bước lịch sử giống hệt
    // — tránh việc bấm "quay lại" một lần mà không thấy gì đổi. Chỉ so sánh
    // khi đã qua màn chọn lớp: lúc chưa xác nhận lớp, `view` vẫn giữ giá trị
    // mặc định {screen:'dashboard'} dù chưa hề hiển thị — nếu so cả lúc đó,
    // bước điều hướng xác nhận-lớp-đầu-tiên sẽ bị hiểu nhầm là trùng và ghi
    // đè mất bước lịch sử "chưa chọn lớp".
    const isSameView = gateConfirmed && JSON.stringify(nextView) === JSON.stringify(view)
    setView(nextView)
    const state = { gateConfirmed: true, view: nextView }
    window.history[replace || isSameView ? 'replaceState' : 'pushState'](state, '')
  }

  useEffect(() => {
    window.history.replaceState({ gateConfirmed: false, view: null }, '')
    function onPopState(e) {
      const state = e.state
      setGateConfirmed(!!state?.gateConfirmed)
      setView(state?.view ?? { screen: 'dashboard' })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Switching grade invalidates whatever area/topic was open — go back to
  // that grade's dashboard rather than showing a stale/mismatched screen.
  function setGrade(nextGrade) {
    if (nextGrade === grade) return
    setAreas(null)
    setGradeRaw(nextGrade)
    navigate({ screen: 'dashboard' })
  }

  function selectGradeFromGate(nextGrade) {
    setGateConfirmed(true)
    if (nextGrade === grade) {
      window.history.pushState({ gateConfirmed: true, view: { screen: 'dashboard' } }, '')
    } else {
      setGrade(nextGrade)
    }
  }

  function goDashboard() {
    loadData()
    navigate({ screen: 'dashboard' })
  }

  function goArea(areaId) {
    navigate({ screen: 'topic', areaId })
  }

  // back: { label, areaId } — where the lesson's breadcrumb should return to
  // (areaId undefined/null means "về Tổng quan"). Chỉ lưu dữ liệu thuần, vì
  // history.pushState không thể lưu function (back.onBack kiểu cũ).
  function resolveBack(back) {
    return back?.areaId != null ? () => goArea(back.areaId) : goDashboard
  }

  async function goLesson(topicId, back, areaId) {
    setView({ screen: 'lesson-loading', back, areaId })
    try {
      const data = await getLesson(topicId)
      setLesson(data)
      navigate({ screen: 'lesson', back, areaId, topicId })
    } catch {
      navigate({ screen: 'lesson-locked', back, areaId })
    }
  }

  function goPhotoSolve() {
    navigate({ screen: 'photo-solve' })
  }

  function goMyResults() {
    navigate({ screen: 'my-results' })
  }

  function goTutorFinder() {
    navigate({ screen: 'tutor-finder' })
  }

  function goHsgTopic(topicId) {
    if (!hsgMode) return
    goLesson(topicId, { label: 'Tổng quan' })
  }

  function goMockExam(exam) {
    navigate({ screen: 'mock-exam', examId: exam.id, examName: exam.name })
  }

  function goOnLuyenTopic(topic) {
    navigate({ screen: 'on-luyen', topicId: topic.id, topicName: topic.name })
  }

  function goGames() {
    navigate({ screen: 'games' })
  }

  if (!gateConfirmed) {
    return <GradeGate selectedGrade={grade} onSelect={selectGradeFromGate} />
  }

  if (loadError) {
    return (
      <div className="screen">
        <div className="card empty-state">
          <h2>Không tải được dữ liệu</h2>
          <p>{loadError}</p>
          <p style={{ marginTop: 12 }}>
            Kiểm tra máy chủ API đã chạy chưa (<code>npm run server</code> hoặc <code>npm run dev:all</code>).
          </p>
        </div>
      </div>
    )
  }

  if (!areas || !hsgTopics) {
    return (
      <div className="screen">
        <p>Đang tải dữ liệu…</p>
      </div>
    )
  }

  const activeArea = view.areaId ? areas.find((a) => a.id === view.areaId) : null
  const overallProgress = areas.length
    ? Math.round(areas.reduce((sum, a) => sum + a.progress, 0) / areas.length)
    : 0

  let continueTarget = null
  for (const area of areas) {
    const topic = area.topics.find((t) => t.hasLesson)
    if (topic) {
      continueTarget = { areaId: area.id, topicId: topic.id }
      break
    }
  }

  return (
    <div className="app-shell">
      <Sidebar
        grade={grade}
        setGrade={setGrade}
        areas={areas}
        hsgTopics={hsgTopics}
        view={view}
        hsgMode={hsgMode}
        setHsgMode={setHsgMode}
        onGoDashboard={goDashboard}
        onGoArea={goArea}
        onGoHsgTopic={goHsgTopic}
        onGoMockExam={goMockExam}
        onGoOnLuyenTopic={goOnLuyenTopic}
        onGoGames={goGames}
        onGoPhotoSolve={goPhotoSolve}
        onGoMyResults={goMyResults}
        onGoTutorFinder={goTutorFinder}
        open={navOpen}
        onClose={() => setNavOpen(false)}
      />
      <div className={`sidebar-backdrop ${navOpen ? 'is-open' : ''}`} onClick={() => setNavOpen(false)} />

      <main className="content">
        <div className="mobile-topbar">
          <button className="mobile-topbar__btn" onClick={() => setNavOpen(true)} aria-label="Mở menu">
            ☰
          </button>
          <span className="mobile-topbar__title">Toán {grade}</span>
        </div>

        {view.screen === 'dashboard' && (
          <Dashboard
            grade={grade}
            areas={areas}
            hsgTopics={hsgTopics}
            overallProgress={overallProgress}
            canContinue={!!continueTarget}
            hsgMode={hsgMode}
            setHsgMode={setHsgMode}
            onOpenArea={goArea}
            onContinueLesson={() =>
              continueTarget &&
              goLesson(
                continueTarget.topicId,
                {
                  label: areas.find((a) => a.id === continueTarget.areaId)?.name ?? 'Tổng quan',
                  areaId: continueTarget.areaId,
                },
                continueTarget.areaId
              )
            }
            onOpenHsgTopic={goHsgTopic}
          />
        )}

        {view.screen === 'topic' && activeArea && (
          <TopicDetail
            area={activeArea}
            onBack={goDashboard}
            onOpenLesson={(topicId) =>
              goLesson(topicId, { label: activeArea.name, areaId: activeArea.id }, activeArea.id)
            }
          />
        )}

        {view.screen === 'lesson-loading' && (
          <div className="screen">
            <p>Đang tải bài học…</p>
          </div>
        )}

        {view.screen === 'lesson' && lesson && (
          <Lesson
            lesson={lesson}
            topicId={view.topicId}
            areaName={view.back?.label ?? 'Tổng quan'}
            onBack={resolveBack(view.back)}
          />
        )}

        {view.screen === 'mock-exam' && (
          <div className="screen">
            <button className="breadcrumb" onClick={goDashboard}>
              ← Tổng quan
            </button>
            <div className="card empty-state">
              <h2>{view.examName}</h2>
              <p>Đề thi thử cho khối lớp {grade} đang được biên soạn, sẽ sớm được cập nhật.</p>
            </div>
          </div>
        )}

        {view.screen === 'on-luyen' && (
          <div className="screen">
            <button className="breadcrumb" onClick={goDashboard}>
              ← Tổng quan
            </button>
            <div className="card empty-state">
              <h2>{view.topicName}</h2>
              <p>Chuyên đề ôn luyện cho khối lớp {grade} đang được biên soạn, sẽ sớm được cập nhật.</p>
            </div>
          </div>
        )}

        {view.screen === 'games' && <Games onBack={goDashboard} />}

        {view.screen === 'photo-solve' && <PhotoSolve onBack={goDashboard} />}

        {view.screen === 'my-results' && <MyResults onBack={goDashboard} />}

        {view.screen === 'tutor-finder' && <TutorFinder onBack={goDashboard} />}

        {view.screen === 'lesson-locked' && (
          <div className="screen">
            <button className="breadcrumb" onClick={resolveBack(view.back)}>
              ← {view.back?.label ?? 'Tổng quan'}
            </button>
            <div className="card empty-state">
              <h2>Chuyên đề đang được biên soạn</h2>
              <p>Bài học mẫu chi tiết sẽ sớm được cập nhật cho chuyên đề này.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
