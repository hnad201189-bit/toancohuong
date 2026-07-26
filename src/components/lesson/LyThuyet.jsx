import Math from '../Math'
import MixedMath from '../MixedMath'

export default function LyThuyet({ theory }) {
  return (
    <div className="theory-grid">
      {theory.cards.map((card) => (
        <div className="card theory-card" key={card.title}>
          <h3>{card.title}</h3>
          {card.formulas.map((f) => (
            <Math key={f} tex={f} block />
          ))}
          {card.legend?.length > 0 && (
            <div className="theory-card__legend">
              <p className="theory-card__legend-title">Trong đó:</p>
              <ul>
                {card.legend.map((item) => (
                  <li key={item}>
                    <MixedMath text={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="theory-card__note">💡 {card.note}</p>
        </div>
      ))}
    </div>
  )
}
