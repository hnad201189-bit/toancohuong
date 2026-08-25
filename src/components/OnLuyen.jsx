export default function OnLuyen({ grade, topics, onBack, onSelectTopic }) {
  return (
    <div className="screen">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>
      <header className="screen__header">
        <h1>📚 Ôn luyện Toán {grade}</h1>
        <p className="screen__subtitle">Chọn một tài liệu ôn luyện để bắt đầu.</p>
      </header>

      {topics.length === 0 ? (
        <div className="card empty-state">
          <h2>Đang được biên soạn</h2>
          <p>Chuyên đề ôn luyện cho khối lớp {grade} đang được biên soạn, sẽ sớm được cập nhật.</p>
        </div>
      ) : (
        <div className="grid-areas">
          {topics.map((topic) =>
            topic.href ? (
              <a
                key={topic.id}
                className="area-card on-luyen-card"
                href={topic.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="on-luyen-card__external">↗</span>
                <span className="on-luyen-card__icon">{topic.icon}</span>
                <h3 className="area-card__name">{topic.name}</h3>
                <p className="area-card__desc">{topic.desc}</p>
              </a>
            ) : (
              <button key={topic.id} className="area-card on-luyen-card" onClick={() => onSelectTopic(topic)}>
                <span className="on-luyen-card__icon">{topic.icon}</span>
                <h3 className="area-card__name">{topic.name}</h3>
                <p className="area-card__desc">{topic.desc}</p>
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}
