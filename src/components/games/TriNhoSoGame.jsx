import { useEffect, useRef, useState } from 'react'
import { randInt, shuffle } from './gameUtils'
import { recordSession } from './progress'

const PAIR_COUNT = 6
const BEST_KEY = 'toan-l1-game-tri-nho-best-time'

function makeBoard() {
  const values = new Set()
  while (values.size < PAIR_COUNT) values.add(randInt(1, 10))
  const pairValues = [...values, ...values]
  return shuffle(pairValues.map((value, i) => ({ id: i, value, matched: false })))
}

export default function TriNhoSoGame({ onExit }) {
  const [cards, setCards] = useState(makeBoard)
  const [flippedIds, setFlippedIds] = useState([])
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)
  const [best, setBest] = useState(() => {
    const v = localStorage.getItem(BEST_KEY)
    return v ? Number(v) : null
  })
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [running])

  const matchedCount = cards.filter((c) => c.matched).length
  const finished = matchedCount === cards.length

  useEffect(() => {
    if (finished) {
      setRunning(false)
      recordSession('tri-nho-so')
      if (best === null || seconds < best) {
        setBest(seconds)
        localStorage.setItem(BEST_KEY, String(seconds))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  function click(card) {
    if (finished || card.matched || flippedIds.includes(card.id) || flippedIds.length >= 2) return
    const nextFlipped = [...flippedIds, card.id]
    setFlippedIds(nextFlipped)

    if (nextFlipped.length === 2) {
      setMoves((m) => m + 1)
      const [firstId, secondId] = nextFlipped
      const first = cards.find((c) => c.id === firstId)
      const second = cards.find((c) => c.id === secondId)
      if (first.value === second.value) {
        setTimeout(() => {
          setCards((prev) => prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, matched: true } : c)))
          setFlippedIds([])
        }, 400)
      } else {
        setTimeout(() => setFlippedIds([]), 700)
      }
    }
  }

  function playAgain() {
    setCards(makeBoard())
    setFlippedIds([])
    setMoves(0)
    setSeconds(0)
    setRunning(true)
  }

  if (finished) {
    return (
      <div className="screen game-screen">
        <button className="breadcrumb" onClick={onExit}>
          ← Trò chơi
        </button>
        <div className="card game-result">
          <h2>🎉 Nhớ giỏi quá!</h2>
          <p className="game-result__score">
            Thời gian: <strong>{seconds}s</strong> — {moves} lượt lật
          </p>
          {best !== null && <p className="game-result__best">Thời gian nhanh nhất: {best}s</p>}
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
        <h1>🧠 Trí nhớ số</h1>
        <p className="screen__subtitle">Lật 2 thẻ để tìm cặp số giống nhau.</p>
      </header>

      <div className="game-hud">
        <span>⏱ {seconds}s</span>
        <span>Lượt lật: {moves}</span>
        <span>Đã tìm: {matchedCount / 2} / {PAIR_COUNT}</span>
      </div>

      <div className="card tri-nho__stage">
        <div className="tri-nho__grid">
          {cards.map((card) => {
            const faceUp = card.matched || flippedIds.includes(card.id)
            const cls = card.matched ? 'is-matched' : flippedIds.includes(card.id) ? 'is-flipped' : ''
            return (
              <button
                key={card.id}
                className={`tri-nho__card ${cls}`}
                onClick={() => click(card)}
                disabled={faceUp}
              >
                {faceUp ? card.value : '❓'}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
