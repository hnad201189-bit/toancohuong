import { useState } from 'react'
import MixedMath from '../MixedMath'

export default function Flashcard({ cards }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  function go(delta) {
    setFlipped(false)
    setIndex((i) => (i + delta + cards.length) % cards.length)
  }

  const card = cards[index]

  return (
    <div className="flashcard-tab">
      <div className="flashcard-scene" onClick={() => setFlipped((f) => !f)}>
        <div className={`flashcard ${flipped ? 'is-flipped' : ''}`}>
          <div className="flashcard__face flashcard__face--front">
            <span>{card.front}</span>
          </div>
          <div className="flashcard__face flashcard__face--back">
            <MixedMath text={card.back} />
          </div>
        </div>
      </div>

      <div className="flashcard-controls">
        <button className="btn btn--ghost" onClick={() => go(-1)} aria-label="Thẻ trước">
          ←
        </button>
        <span className="flashcard-controls__count">{index + 1} / {cards.length}</span>
        <button className="btn btn--ghost" onClick={() => go(1)} aria-label="Thẻ sau">
          →
        </button>
      </div>
      <p className="flashcard-hint">Nhấp vào thẻ để lật mặt</p>
    </div>
  )
}
