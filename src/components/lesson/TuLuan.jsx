import { useState } from 'react'
import MixedMath from '../MixedMath'

export default function TuLuan({ essays }) {
  const [open, setOpen] = useState({})

  return (
    <div className="essay-tab">
      {essays.map((essay, i) => (
        <div className="card essay-card" key={essay.prompt}>
          <p className="essay-card__prompt">{essay.prompt}</p>
          <button
            className="btn btn--ghost"
            onClick={() => setOpen((prev) => ({ ...prev, [i]: !prev[i] }))}
          >
            {open[i] ? 'Ẩn lời giải' : 'Xem lời giải'}
          </button>
          {open[i] && (
            <div className="essay-card__solution">
              {essay.solution.map((line) => (
                <p className="essay-card__solution-line" key={line}>
                  <MixedMath text={line} />
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
