import ProgressBar from './ProgressBar'

export default function TopicDetail({ area, onBack, onOpenLesson }) {
  return (
    <div className="screen topic-detail">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>

      <header className="topic-detail__header">
        <span className="topic-detail__order">{area.order}</span>
        <div>
          <h1>{area.name}</h1>
          <p className="screen__subtitle">{area.description}</p>
        </div>
        <div className="topic-detail__progress">
          <ProgressBar value={area.progress} />
        </div>
      </header>

      <section className="topic-rows">
        {area.topics.map((topic) => (
          <button
            key={topic.id}
            className="topic-row"
            onClick={() => topic.hasLesson && onOpenLesson(topic.id)}
            disabled={!topic.hasLesson}
          >
            <span className="topic-row__name">
              {topic.name}
              {topic.hasLesson && <span className="badge badge--sample">BÀI HỌC MẪU</span>}
            </span>
            <span className="topic-row__progress">
              <ProgressBar value={topic.progress} size="sm" />
            </span>
          </button>
        ))}
      </section>
    </div>
  )
}
