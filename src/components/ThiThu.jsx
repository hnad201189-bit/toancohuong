import { EXAM_ICONS } from '../data/exams'

export default function ThiThu({ grade, exams, hsgTopics, hsgMode, setHsgMode, onBack, onSelectExam, onSelectHsgTopic }) {
  return (
    <div className="screen">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>
      <header className="screen__header">
        <h1>📝 Thi thử Toán {grade}</h1>
        <p className="screen__subtitle">Chọn một kỳ thi để luyện đề theo đúng chương trình lớp {grade}.</p>
      </header>

      <h2 className="section-title">Các kỳ thi</h2>
      <div className="grid-areas">
        {exams.map((exam) => (
          <button key={exam.id} className="area-card on-luyen-card" onClick={() => onSelectExam(exam)}>
            <span className="on-luyen-card__icon">{EXAM_ICONS[exam.id] ?? '📝'}</span>
            <h3 className="area-card__name">{exam.name}</h3>
          </button>
        ))}
      </div>

      {hsgTopics.length > 0 && (
        <section className="hsg-section">
          <div className="hsg-section__header">
            <h2 className="section-title section-title--hsg">▲ Ôn thi HSG / chuyên</h2>
            <label className="hsg-toggle hsg-toggle--light">
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
          </div>

          <div className="grid-areas">
            {hsgTopics.map((topic) => (
              <button
                key={topic.id}
                className={`area-card on-luyen-card ${!hsgMode ? 'is-locked' : ''}`}
                disabled={!hsgMode}
                onClick={() => onSelectHsgTopic(topic.id)}
              >
                {!hsgMode && <span className="on-luyen-card__external">🔒</span>}
                <span className="on-luyen-card__icon">🏅</span>
                <h3 className="area-card__name">{topic.name}</h3>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
