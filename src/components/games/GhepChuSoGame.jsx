import { useEffect, useRef, useState } from 'react'
import { shuffle } from './gameUtils'
import { recordSession } from './progress'
import { submitAttempt } from '../../api/client'

const WORD_POOL = [
  { result: 1, word: 'Một' },
  { result: 2, word: 'Hai' },
  { result: 3, word: 'Ba' },
  { result: 4, word: 'Bốn' },
  { result: 5, word: 'Năm' },
  { result: 6, word: 'Sáu' },
  { result: 7, word: 'Bảy' },
  { result: 8, word: 'Tám' },
  { result: 9, word: 'Chín' },
  { result: 10, word: 'Mười' },
]
const PAIR_COUNT = 6
const BEST_KEY = 'toan-l1-game-ghep-chu-so-best-time'

function makeBoard() {
  const facts = shuffle(WORD_POOL).slice(0, PAIR_COUNT)
  const digitCards = shuffle(facts.map((f) => ({ id: `d${f.result}`, label: String(f.result), result: f.result })))
  const wordCards = shuffle(facts.map((f) => ({ id: `w${f.result}`, label: f.word, result: f.result })))
  return { digitCards, wordCards }
}

export default function GhepChuSoGame({ onExit }) {
  const [board, setBoard] = useState(makeBoard)
  const [selectedDigit, setSelectedDigit] = useState(null)
  const [selectedWord, setSelectedWord] = useState(null)
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
      recordSession('ghep-chu-so')
      submitAttempt({ kind: 'game', itemId: 'ghep-chu-so', itemLabel: 'Ghép số với chữ số', score: PAIR_COUNT, maxScore: PAIR_COUNT }).catch(() => {})
      if (best === null || seconds < best) {
        setBest(seconds)
        localStorage.setItem(BEST_KEY, String(seconds))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished])

  function pickDigit(card) {
    if (solved.has(card.result) || wrongFlash) return
    setSelectedDigit(card)
    if (selectedWord) checkMatch(card, selectedWord)
  }

  function pickWord(card) {
    if (solved.has(card.result) || wrongFlash) return
    setSelectedWord(card)
    if (selectedDigit) checkMatch(selectedDigit, card)
  }

  function checkMatch(digitCard, wordCard) {
    if (digitCard.result === wordCard.result) {
      setSolved((prev) => new Set(prev).add(digitCard.result))
      setSelectedDigit(null)
      setSelectedWord(null)
    } else {
      setWrongCount((c) => c + 1)
      setWrongFlash(true)
      setTimeout(() => {
        setWrongFlash(false)
        setSelectedDigit(null)
        setSelectedWord(null)
      }, 500)
    }
  }

  function playAgain() {
    setBoard(makeBoard())
    setSelectedDigit(null)
    setSelectedWord(null)
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
        <h1>🔤 Ghép số với chữ số</h1>
        <p className="screen__subtitle">Chọn 1 chữ số và 1 tên gọi bằng chữ đúng của số đó để ghép cặp.</p>
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
            {board.digitCards.map((card) => (
              <button
                key={card.id}
                className={cardClass(card, selectedDigit)}
                onClick={() => pickDigit(card)}
                disabled={solved.has(card.result)}
              >
                {card.label}
              </button>
            ))}
          </div>
          <div className="ghep-so__col">
            {board.wordCards.map((card) => (
              <button
                key={card.id}
                className={cardClass(card, selectedWord)}
                onClick={() => pickWord(card)}
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
