import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TopicDetail from './components/TopicDetail'
import Lesson from './components/lesson/Lesson'
import PhotoSolve from './components/PhotoSolve'
import TutorFinder from './components/tutor/TutorFinder'
import GradeGate from './components/GradeGate'
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

  // Switching grade invalidates whatever area/topic was open — go back to
  // that grade's dashboard rather than showing a stale/mismatched screen.
  function setGrade(nextGrade) {
    if (nextGrade === grade) return
    setAreas(null)
    setGradeRaw(nextGrade)
    setView({ screen: 'dashboard' })
  }

  function selectGradeFromGate(nextGrade) {
    setGrade(nextGrade)
    setGateConfirmed(true)
  }

  function goDashboard() {
    loadData()
    setView({ screen: 'dashboard' })
  }

  function goArea(areaId) {
    setView({ screen: 'topic', areaId })
  }

  // back: { label, onBack } — where the lesson's breadcrumb should return to
  async function goLesson(topicId, back, areaId) {
    setView({ screen: 'lesson-loading', back, areaId })
    try {
      const data = await getLesson(topicId)
      setLesson(data)
      setView({ screen: 'lesson', back, areaId, topicId })
    } catch {
      setView({ screen: 'lesson-locked', back, areaId })
    }
  }

  function goPhotoSolve() {
    setView({ screen: 'photo-solve' })
  }

  function goTutorFinder() {
    setView({ screen: 'tutor-finder' })
  }

  function goHsgTopic(topicId) {
    if (!hsgMode) return
    goLesson(topicId, { label: 'Tổng quan', onBack: goDashboard })
  }

  function goMockExam(exam) {
    setView({ screen: 'mock-exam', examId: exam.id, examName: exam.name })
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
        onGoPhotoSolve={goPhotoSolve}
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
                  onBack: () => goArea(continueTarget.areaId),
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
              goLesson(topicId, { label: activeArea.name, onBack: () => goArea(activeArea.id) }, activeArea.id)
            }
          />
        )}

        {view.screen === 'lesson-loading' && (
          <div className="screen">
            <p>Đang tải bài học…</p>
          </div>
        )}

        {view.screen === 'lesson' && lesson && (
          <Lesson lesson={lesson} areaName={view.back?.label ?? 'Tổng quan'} onBack={view.back?.onBack ?? goDashboard} />
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

        {view.screen === 'photo-solve' && <PhotoSolve onBack={goDashboard} />}

        {view.screen === 'tutor-finder' && <TutorFinder onBack={goDashboard} />}

        {view.screen === 'lesson-locked' && (
          <div className="screen">
            <button className="breadcrumb" onClick={view.back?.onBack ?? goDashboard}>
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
