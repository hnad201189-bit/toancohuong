import { useEffect, useRef, useState } from 'react'
import { recordSession } from './progress'

const GAME_SECONDS = 30
const BEST_KEY = 'toan-l1-game-ai-nhanh-best'

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

function makeQuestion(score) {
  // Điểm càng cao, phạm vi số càng lớn — độ khó tự tăng theo tiến trình ván chơi.
  const max = score >= 10 ? 20 : score >= 5 ? 15 : 10
  const isAddition = Math.random() < 0.5
  let a, b, answer
  if (isAddition) {
    a = randInt(0, max)
    b = randInt(0, max - a)
    answer = a + b
  } else {
    a = randInt(0, max)
    b = randInt(0, a)
    answer = a - b
  }
  const wrongPool = new Set()
  while (wrongPool.size < 3) {
    const delta = randInt(-3, 3)
    const candidate = answer + delta
    if (candidate !== answer && candidate >= 0 && candidate <= max) wrongPool.add(candidate)
  }
  // Bù thêm nếu answer ở sát biên (0 hoặc max) khiến vòng lặp trên khó đủ 3 lựa chọn sai.
  let filler = 0
  while (wrongPool.size < 3 && filler <= max) {
    if (filler !== answer) wrongPool.add(filler)
    filler++
  }
  const options = shuffle([answer, ...[...wrongPool].slice(0, 3)])
  return { text: `${a} ${isAddition ? '+' : '−'} ${b} = ?`, answer, options }
}

export default function AiNhanhAiDungGame({ onExit }) {
  const [question, setQuestion] = useState(() => makeQuestion(0))
  const [score, setScore] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(GAME_SECONDS)
  const [running, setRunning] = useState(true)
  const [flash, setFlash] = useState(null) // 'correct' | 'wrong' | null
  const [pickedOpt, setPickedOpt] = useState(null)
  const [best, setBest] = useState(() => Number(localStorage.getItem(BEST_KEY)) || 0)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [running])

  useEffect(() => {
    if (secondsLeft !== 0 || !running) return
    setRunning(false)
    recordSession('ai-nhanh')
    if (score > best) {
      setBest(score)
      localStorage.setItem(BEST_KEY, String(score))
    }
  }, [secondsLeft, running, score, best])

  function answer(opt) {
    if (!running || flash) return
    const isCorrect = opt === question.answer
    const nextScore = isCorrect ? score + 1 : score
    setPickedOpt(opt)
    setFlash(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setScore(nextScore)
    setTimeout(() => {
      setFlash(null)
      setPickedOpt(null)
      setQuestion(makeQuestion(nextScore))
    }, 500)
  }

  function playAgain() {
    setQuestion(makeQuestion(0))
    setScore(0)
    setSecondsLeft(GAME_SECONDS)
    setRunning(true)
    setFlash(null)
    setPickedOpt(null)
  }

  if (secondsLeft === 0) {
    return (
      <div className="screen game-screen">
        <button className="breadcrumb" onClick={onExit}>
          ← Trò chơi
        </button>
        <div className="card game-result">
          <h2>⏰ Hết giờ!</h2>
          <p className="game-result__score">
            Con trả lời đúng <strong>{score}</strong> câu
          </p>
          <p className="game-result__best">Điểm cao nhất: {best}</p>
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
        <h1>⏱ Ai nhanh ai đúng</h1>
        <p className="screen__subtitle">Trả lời thật nhanh các phép cộng, trừ trong phạm vi 10!</p>
      </header>

      <div className="game-hud">
        <span className={secondsLeft <= 10 ? 'game-hud__timer is-warning' : 'game-hud__timer'}>
          ⏱ {secondsLeft}s
        </span>
        <span>Điểm: {score}</span>
      </div>

      <div className="card ai-nhanh__stage">
        <p className="ai-nhanh__question">{question.text}</p>
        <div className="ai-nhanh__options">
          {question.options.map((opt) => {
            let state = ''
            if (flash) {
              if (opt === pickedOpt) state = flash === 'correct' ? 'is-correct' : 'is-wrong'
              else if (flash === 'wrong' && opt === question.answer) state = 'is-correct'
            }
            return (
              <button
                key={opt}
                className={`ai-nhanh__opt ${state}`}
                onClick={() => answer(opt)}
                disabled={!!flash}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
