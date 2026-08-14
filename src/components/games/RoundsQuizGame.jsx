import { useEffect, useState } from 'react'
import { recordSession } from './progress'
import { submitAttempt } from '../../api/client'

// Engine dùng chung cho các trò chơi trắc nghiệm nhiều vòng có số vòng cố
// định: mỗi vòng hỏi 1 câu, chọn xong hiện đúng/sai rồi bấm "Câu tiếp theo".
// Nội dung câu hỏi (đề bài + lựa chọn) do từng trò chơi tự sinh qua makeRound,
// nhận vào chỉ số vòng hiện tại để tự tăng độ khó theo tiến trình ván chơi.
export default function RoundsQuizGame({
  onExit,
  gameId,
  icon,
  title,
  subtitle,
  rounds,
  bestKey,
  makeRound,
  renderPrompt,
}) {
  const [round, setRound] = useState(0)
  const [current, setCurrent] = useState(() => makeRound(0))
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState(() => Number(localStorage.getItem(bestKey)) || 0)

  useEffect(() => {
    if (finished) {
      recordSession(gameId)
      submitAttempt({ kind: 'game', itemId: gameId, itemLabel: title, score, maxScore: rounds }).catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished, gameId])

  function pick(opt) {
    if (picked !== null) return
    setPicked(opt.value)
    const isCorrect = opt.value === current.answer
    const nextScore = isCorrect ? score + 1 : score
    if (isCorrect) setScore(nextScore)

    if (round + 1 >= rounds) {
      setTimeout(() => {
        setFinished(true)
        if (nextScore > best) {
          setBest(nextScore)
          localStorage.setItem(bestKey, String(nextScore))
        }
      }, 700)
    }
  }

  function next() {
    const nextRound = round + 1
    setRound(nextRound)
    setCurrent(makeRound(nextRound))
    setPicked(null)
  }

  function playAgain() {
    setRound(0)
    setCurrent(makeRound(0))
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
            Con trả lời đúng <strong>{score}</strong> / {rounds} câu
          </p>
          <p className="game-result__best">Điểm cao nhất: {best} / {rounds}</p>
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
        <h1>
          {icon} {title}
        </h1>
        <p className="screen__subtitle">{subtitle}</p>
      </header>

      <div className="game-hud">
        <span>
          Câu {round + 1} / {rounds}
        </span>
        <span>Điểm: {score}</span>
      </div>

      <div className="card qgame__stage">
        {renderPrompt(current)}
        <div className="qgame__options">
          {current.options.map((opt) => {
            let state = ''
            if (picked !== null) {
              if (opt.value === current.answer) state = 'is-correct'
              else if (opt.value === picked) state = 'is-wrong'
            }
            return (
              <button
                key={opt.value}
                className={`qgame__opt ${state}`}
                onClick={() => pick(opt)}
                disabled={picked !== null}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
        {picked !== null && round + 1 < rounds && (
          <button className="btn btn--primary game-next" onClick={next}>
            Câu tiếp theo →
          </button>
        )}
      </div>
    </div>
  )
}
