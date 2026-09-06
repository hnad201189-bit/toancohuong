import ProgressBar from './ProgressBar'
import { getAreaIcon } from '../data/areaIcons'

export default function Dashboard({ grade, areas, overallProgress, canContinue, onOpenArea, onContinueLesson }) {
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

      {areas.length > 0 ? (
        <section>
          <h2 className="section-title">{areas.length} mảng kiến thức</h2>
          <div className="grid-areas">
            {areas.map((area) => (
              <button key={area.id} className="area-card" onClick={() => onOpenArea(area.id)}>
                <div className="area-card__top">
                  <span className="area-card__icon">{getAreaIcon(area.name)}</span>
                  <span className="area-card__count">{area.topics.length} chuyên đề</span>
                </div>
                <h3 className="area-card__name">{area.name}</h3>
                <p className="area-card__desc">{area.description}</p>
                <ProgressBar value={area.progress} />
              </button>
            ))}
          </div>
        </section>
      ) : (
        <div className="card empty-state">
          <h2>Chương trình Toán {grade} đang được biên soạn</h2>
          <p>Nội dung chuyên đề cho khối lớp này sẽ sớm được cập nhật. Bạn có thể chọn lớp khác ở thanh bên.</p>
        </div>
      )}
    </div>
  )
}
