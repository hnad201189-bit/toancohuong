import { useEffect, useRef, useState } from 'react'
import { recordSession } from './progress'

// Mỗi phép tính cho một kết quả khác nhau (1..10) để không bao giờ có 2 thẻ
// kết quả trùng nhau trong cùng một ván — tránh ghép nhầm cặp không mong muốn.
const FACT_POOL = [
  { expr: '5 − 4', result: 1 },
  { expr: '1 + 1', result: 2 },
  { expr: '6 − 3', result: 3 },
  { expr: '2 + 2', result: 4 },
  { expr: '2 + 3', result: 5 },
  { expr: '9 − 3', result: 6 },
  { expr: '3 + 4', result: 7 },
  { expr: '10 − 2', result: 8 },
  { expr: '4 + 5', result: 9 },
  { expr: '6 + 4', result: 10 },
]
const PAIR_COUNT = 6
const BEST_KEY = 'toan-l1-game-ghep-so-best-time'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeBoard() {
  const facts = shuffle(FACT_POOL).slice(0, PAIR_COUNT)
  const exprCards = shuffle(facts.map((f) => ({ id: `e${f.result}`, label: f.expr, result: f.result })))
  const resultCards = shuffle(facts.map((f) => ({ id: `r${f.result}`, label: String(f.result), result: f.result })))
  return { exprCards, resultCards }
}

export default function GhepSoGame({ onExit }) {
  const [board, setBoard] = useState(makeBoard)
  const [selectedExpr, setSelectedExpr] = useState(null)
  const [selectedResult, setSelectedResult] = useState(null)
  const [solved, setSolved] = useState(new Set())
  const [wrongFlash, setWrongFlash] = useState(null)
  const [wrongCount, setWrongCount] = useState(0)
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

  const finished = solved.size === PAIR_COUNT

  useEffect(() => {
    if (finished) {
      setRunning(false)
      recordSession('ghep-so')
      if (best === null || seconds < best) {
        setBest(seconds)
        localStorage.setItem(BEST_KEY, String(seconds))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  function pickExpr(card) {
    if (solved.has(card.result) || wrongFlash) return
    setSelectedExpr(card)
    if (selectedResult) checkMatch(card, selectedResult)
  }

  function pickResult(card) {
    if (solved.has(card.result) || wrongFlash) return
    setSelectedResult(card)
    if (selectedExpr) checkMatch(selectedExpr, card)
  }

  function checkMatch(exprCard, resultCard) {
    if (exprCard.result === resultCard.result) {
      setSolved((prev) => new Set(prev).add(exprCard.result))
      setSelectedExpr(null)
      setSelectedResult(null)
    } else {
      setWrongCount((c) => c + 1)
      setWrongFlash(true)
      setTimeout(() => {
        setWrongFlash(false)
        setSelectedExpr(null)
        setSelectedResult(null)
      }, 500)
    }
  }

  function playAgain() {
    setBoard(makeBoard())
    setSelectedExpr(null)
    setSelectedResult(null)
    setSolved(new Set())
    setWrongFlash(null)
    setWrongCount(0)
    setSeconds(0)
    setRunning(true)
  }

  function cardClass(card, selected) {
    if (solved.has(card.result)) return 'ghep-so__card is-solved'
    if (wrongFlash && selected?.result === card.result) return 'ghep-so__card is-wrong'
    if (selected?.id === card.id) return 'ghep-so__card is-selected'
    return 'ghep-so__card'
  }

  return (
    <div className="screen game-screen">
      <button className="breadcrumb" onClick={onExit}>
        ← Trò chơi
      </button>
      <header className="screen__header">
        <h1>🔗 Ghép số</h1>
        <p className="screen__subtitle">Chọn 1 phép tính và 1 kết quả đúng của phép tính đó để ghép cặp.</p>
      </header>

      <div className="game-hud">
        <span>⏱ {seconds}s</span>
        <span>Sai: {wrongCount}</span>
        <span>Ghép đúng: {solved.size} / {PAIR_COUNT}</span>
      </div>

      {finished ? (
        <div className="card game-result">
          <h2>🎉 Ghép xong hết rồi!</h2>
          <p className="game-result__score">
            Thời gian: <strong>{seconds}s</strong> — Sai {wrongCount} lần
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
      ) : (
        <div className="ghep-so__board">
          <div className="ghep-so__col">
            {board.exprCards.map((card) => (
              <button
                key={card.id}
                className={cardClass(card, selectedExpr)}
                onClick={() => pickExpr(card)}
                disabled={solved.has(card.result)}
              >
                {card.label}
              </button>
            ))}
          </div>
          <div className="ghep-so__col">
            {board.resultCards.map((card) => (
              <button
                key={card.id}
                className={cardClass(card, selectedResult)}
                onClick={() => pickResult(card)}
                disabled={solved.has(card.result)}
              >
                {card.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
