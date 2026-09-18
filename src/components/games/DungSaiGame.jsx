import { useEffect, useRef, useState } from 'react'
import { randInt, makeArithmeticQuestion } from './gameUtils'
import { recordSession } from './progress'
import { submitAttempt } from '../../api/client'

const GAME_SECONDS = 30

function makeQuestion(score, grade = 1) {
  // Điểm càng cao, độ khó (phạm vi số / tỉ lệ ra nhân-chia) càng tăng.
  const level = score >= 10 ? 2 : score >= 5 ? 1 : 0
  const { a, b, op, answer: correctAnswer } = makeArithmeticQuestion(level, grade)

  const optionCeiling = Math.max(correctAnswer + 10, 10)
  const showCorrect = Math.random() < 0.5
  let shown = correctAnswer
  if (!showCorrect) {
    let attempts = 0
    do {
      const delta = randInt(-3, 3) || 1
      shown = correctAnswer + delta
      attempts++
    } while ((shown === correctAnswer || shown < 0 || shown > optionCeiling) && attempts < 20)
  }

  return {
    text: `${a} ${op} ${b} = ${shown}`,
    answer: shown === correctAnswer ? 'dung' : 'sai',
  }
}

const OPTIONS = [
  { label: 'Đúng ✅', value: 'dung' },
  { label: 'Sai ❌', value: 'sai' },
]

export default function DungSaiGame({ onExit, grade = 1 }) {
  const bestKey = `toan-l${grade}-game-dung-sai-best`
  const [question, setQuestion] = useState(() => makeQuestion(0, grade))
  const [score, setScore] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(GAME_SECONDS)
  const [running, setRunning] = useState(true)
  const [flash, setFlash] = useState(null)
  const [pickedOpt, setPickedOpt] = useState(null)
  const [best, setBest] = useState(() => Number(localStorage.getItem(bestKey)) || 0)
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
    recordSession('dung-sai')
    submitAttempt({ kind: 'game', itemId: 'dung-sai', itemLabel: 'Đúng hay sai?', score, maxScore: null }).catch(() => {})
    if (score > best) {
      setBest(score)
      localStorage.setItem(bestKey, String(score))
    }
  }, [secondsLeft, running, score, best, bestKey])

  function answer(opt) {
    if (!running || flash) return
    const isCorrect = opt.value === question.answer
    const nextScore = isCorrect ? score + 1 : score
    setPickedOpt(opt.value)
    setFlash(isCorrect ? 'correct' : 'wrong')
    if (isCorrect) setScore(nextScore)
    setTimeout(() => {
      setFlash(null)
      setPickedOpt(null)
      setQuestion(makeQuestion(nextScore, grade))
    }, 500)
  }

  function playAgain() {
    setQuestion(makeQuestion(0, grade))
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
        <h1>✅ Đúng hay sai?</h1>
        <p className="screen__subtitle">
          {grade >= 2
            ? 'Phép cộng, trừ, nhân, chia đúng hay sai? Trả lời thật nhanh trong 30 giây!'
            : 'Phép tính đúng hay sai? Trả lời thật nhanh trong 30 giây!'}
        </p>
      </header>

      <div className="game-hud">
        <span className={secondsLeft <= 10 ? 'game-hud__timer is-warning' : 'game-hud__timer'}>
          ⏱ {secondsLeft}s
        </span>
        <span>Điểm: {score}</span>
      </div>

      <div className="card ai-nhanh__stage">
        <p className="ai-nhanh__question">{question.text}</p>
        <div className="ai-nhanh__options dung-sai__options">
          {OPTIONS.map((opt) => {
            let state = ''
            if (flash) {
              if (opt.value === pickedOpt) state = flash === 'correct' ? 'is-correct' : 'is-wrong'
              else if (flash === 'wrong' && opt.value === question.answer) state = 'is-correct'
            }
            return (
              <button
                key={opt.value}
                className={`ai-nhanh__opt ${state}`}
                onClick={() => answer(opt)}
                disabled={!!flash}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
