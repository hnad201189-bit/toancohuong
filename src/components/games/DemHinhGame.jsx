import { useState } from 'react'

const EMOJI_POOL = ['🍎', '🍌', '🐱', '🐶', '⭐', '🎈', '🍇', '🐟', '🌸', '🚗']
const ROUNDS = 8
const BEST_KEY = 'toan-l1-game-dem-hinh-best'

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeRound() {
  const emoji = EMOJI_POOL[randInt(0, EMOJI_POOL.length - 1)]
  const count = randInt(1, 10)
  const wrongPool = new Set()
  while (wrongPool.size < 3) {
    const candidate = randInt(1, 10)
    if (candidate !== count) wrongPool.add(candidate)
  }
  const options = shuffle([count, ...wrongPool])
  return { emoji, count, options }
}

export default function DemHinhGame({ onExit }) {
  const [round, setRound] = useState(0)
  const [current, setCurrent] = useState(makeRound)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState(() => Number(localStorage.getItem(BEST_KEY)) || 0)

  function pick(option) {
    if (picked !== null) return
    setPicked(option)
    const isCorrect = option === current.count
    const nextScore = isCorrect ? score + 1 : score
    if (isCorrect) setScore(nextScore)

    if (round + 1 >= ROUNDS) {
      setTimeout(() => {
        setFinished(true)
        if (nextScore > best) {
          setBest(nextScore)
          localStorage.setItem(BEST_KEY, String(nextScore))
        }
      }, 700)
    }
  }

  function next() {
    setRound((r) => r + 1)
    setCurrent(makeRound())
    setPicked(null)
  }

  function playAgain() {
    setRound(0)
    setCurrent(makeRound())
    setScore(0)
    setPicked(null)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="screen game-screen">
        <button className="breadcrumb" onClick={onExit}>
          ← Trò chơi
        </button>
        <div className="card game-result">
          <h2>🎉 Xong rồi!</h2>
          <p className="game-result__score">
            Con đếm đúng <strong>{score}</strong> / {ROUNDS} câu
          </p>
          <p className="game-result__best">Điểm cao nhất: {best} / {ROUNDS}</p>
          <div className="game-result__actions">
            <button className="btn btn--primary" onClick={playAgain}>
              🔁 Chơi lại
            </button>
            <button className="btn btn--ghost" onClick={onExit}>
              Về Trò chơi
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="screen game-screen">
      <button className="breadcrumb" onClick={onExit}>
        ← Trò chơi
      </button>
      <header className="screen__header">
        <h1>🔢 Đếm hình vui</h1>
        <p className="screen__subtitle">Đếm số hình rồi chọn đúng đáp số nhé!</p>
      </header>

      <div className="game-hud">
        <span>Câu {round + 1} / {ROUNDS}</span>
        <span>Điểm: {score}</span>
      </div>

      <div className="card dem-hinh__stage">
        <div className="dem-hinh__objects">
          {Array.from({ length: current.count }).map((_, i) => (
            <span key={i} className="dem-hinh__obj">
              {current.emoji}
            </span>
          ))}
        </div>
        <p className="dem-hinh__question">Có bao nhiêu hình?</p>
        <div className="dem-hinh__options">
          {current.options.map((opt) => {
            let state = ''
            if (picked !== null) {
              if (opt === current.count) state = 'is-correct'
              else if (opt === picked) state = 'is-wrong'
            }
            return (
              <button
                key={opt}
                className={`dem-hinh__opt ${state}`}
                onClick={() => pick(opt)}
                disabled={picked !== null}
              >
                {opt}
              </button>
            )
          })}
        </div>
        {picked !== null && round + 1 < ROUNDS && (
          <button className="btn btn--primary game-next" onClick={next}>
            Câu tiếp theo →
          </button>
        )}
      </div>
    </div>
  )
}
