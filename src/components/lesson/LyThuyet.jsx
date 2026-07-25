import Math from '../Math'

export default function LyThuyet({ theory }) {
  return (
    <div className="theory-grid">
      {theory.cards.map((card) => (
        <div className="card theory-card" key={card.title}>
          <h3>{card.title}</h3>
          {card.formulas.map((f) => (
            <Math key={f} tex={f} block />
          ))}
          <p className="theory-card__note">💡 {card.note}</p>
        </div>
      ))}
    </div>
  )
}
