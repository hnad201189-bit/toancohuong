import { useState } from 'react'

// Engine dùng chung cho các trò chơi trắc nghiệm nhiều vòng có số vòng cố
// định: mỗi vòng hỏi 1 câu, chọn xong hiện đúng/sai rồi bấm "Câu tiếp theo".
// Nội dung câu hỏi (đề bài + lựa chọn) do từng trò chơi tự sinh qua makeRound.
export default function RoundsQuizGame({
  onExit,
  icon,
  title,
  subtitle,
  rounds,
  bestKey,
  makeRound,
  renderPrompt,
}) {
  const [round, setRound] = useState(0)
  const [current, setCurrent] = useState(makeRound)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState(() => Number(localStorage.getItem(bestKey)) || 0)

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
