import ProgressBar from './ProgressBar'

export default function Dashboard({
  grade,
  areas,
  hsgTopics,
  overallProgress,
  canContinue,
  hsgMode,
  setHsgMode,
  onOpenArea,
  onContinueLesson,
  onOpenHsgTopic,
}) {
  return (
    <div className="screen dashboard">
      <header className="screen__header">
        <h1>Tổng quan chương trình Toán {grade}</h1>
        <p className="screen__subtitle">Theo dõi tiến độ học tập theo từng mảng kiến thức và chuyên đề.</p>
      </header>

      <section className="card card--hero">
        <div className="card--hero__info">
          <h2>Tiến độ toàn khoá</h2>
          <ProgressBar value={overallProgress} size="lg" />
        </div>
        <button className="btn btn--primary" onClick={onContinueLesson} disabled={!canContinue}>
          Tiếp tục học →
        </button>
      </section>

      <section>
        <h2 className="section-title">{areas.length} mảng kiến thức</h2>
        <div className="grid-areas">
          {areas.map((area) => (
            <button key={area.id} className="area-card" onClick={() => onOpenArea(area.id)}>
              <div className="area-card__top">
                <span className="area-card__order">{area.order}</span>
                <span className="area-card__count">{area.topics.length} chuyên đề</span>
              </div>
              <h3 className="area-card__name">{area.name}</h3>
              <p className="area-card__desc">{area.description}</p>
              <ProgressBar value={area.progress} />
            </button>
          ))}
        </div>
      </section>

      {hsgTopics.length > 0 && (
        <section className="hsg-section">
          <div className="hsg-section__header">
            <h2 className="section-title section-title--hsg">▲ Ôn thi HSG / chuyên</h2>
            {!hsgMode && (
              <button className="btn btn--hsg" onClick={() => setHsgMode(true)}>
                🔒 Mở chế độ HSG
              </button>
            )}
          </div>

          {hsgMode ? (
            <div className="grid-areas">
              {hsgTopics.map((topic) => (
                <button key={topic.id} className="area-card area-card--hsg" onClick={() => onOpenHsgTopic(topic.id)}>
                  <h3 className="area-card__name">{topic.name}</h3>
                  <ProgressBar value={topic.progress} tone="hsg" size="sm" />
                </button>
              ))}
            </div>
          ) : (
            <p className="hsg-section__hint">
              Mở chế độ ôn thi HSG để truy cập {hsgTopics.length} chuyên đề nâng cao dành cho học sinh giỏi / chuyên.
            </p>
          )}
        </section>
      )}
    </div>
  )
}
