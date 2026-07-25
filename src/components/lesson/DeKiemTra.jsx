import { useEffect, useState } from 'react'
import MixedMath from '../MixedMath'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function DeKiemTra({ exam, quiz = [], essays = [] }) {
  const [phase, setPhase] = useState('idle') // idle | running | finished
  const [answers, setAnswers] = useState({})
  const [openSolutions, setOpenSolutions] = useState({})
  const [secondsLeft, setSecondsLeft] = useState(0)

  const examQuiz = quiz.slice(0, exam.mcqCount)
  const examEssays = essays.slice(0, exam.essayCount)
  const hasQuestions = examQuiz.length > 0 || examEssays.length > 0

  useEffect(() => {
    if (phase !== 'running') return undefined
    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id)
          setPhase('finished')
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [phase])

  function start() {
    setAnswers({})
    setOpenSolutions({})
    setSecondsLeft(exam.minutes * 60)
    setPhase('running')
  }

  function choose(qIndex, optIndex) {
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }))
  }

  const correctCount = examQuiz.reduce(
    (sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0),
    0
  )

  if (phase === 'idle') {
    return (
      <div className="exam-tab">
        <div className="card exam-card">
          <h3>Thông tin đề kiểm tra</h3>
          <div className="exam-card__stats">
            <div className="exam-stat">
              <span className="exam-stat__value">{exam.mcqCount}</span>
              <span className="exam-stat__label">câu trắc nghiệm</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat__value">{exam.essayCount}</span>
              <span className="exam-stat__label">câu tự luận</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat__value">{exam.minutes}'</span>
              <span className="exam-stat__label">thời gian làm bài</span>
            </div>
          </div>

          <h4 className="exam-card__matrix-title">Ma trận đề</h4>
          <table className="exam-matrix">
            <thead>
              <tr>
                <th>Mức độ</th>
                <th>Trắc nghiệm</th>
                <th>Tự luận</th>
              </tr>
            </thead>
            <tbody>
              {exam.matrix.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.mcq}</td>
                  <td>{row.essay}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {!hasQuestions && (
            <p className="exam-card__empty-note">
              Bài học này chưa có câu hỏi trắc nghiệm/tự luận để tạo đề kiểm tra.
            </p>
          )}

          <button className="btn btn--primary exam-card__start" onClick={start} disabled={!hasQuestions}>
            Bắt đầu làm bài
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="exam-tab">
      <div className="exam-run__bar">
        <span className={`exam-run__timer ${phase === 'finished' ? '' : secondsLeft <= 60 ? 'is-warning' : ''}`}>
          ⏱ {formatTime(secondsLeft)}
        </span>
        {phase === 'running' && (
          <button className="btn btn--primary" onClick={() => setPhase('finished')}>
            Nộp bài
          </button>
        )}
        {phase === 'finished' && (
          <span className="quiz-score">
            Điểm trắc nghiệm: <strong>{correctCount}/{examQuiz.length}</strong> câu đúng
          </span>
        )}
      </div>

      {examQuiz.map((q, qIndex) => {
        const chosen = answers[qIndex]
        return (
          <div className="card quiz-question" key={q.question}>
            <p className="quiz-question__text">
              Câu {qIndex + 1}. {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                let state = ''
                if (phase === 'finished') {
                  if (optIndex === q.correctIndex) state = 'is-correct'
                  else if (optIndex === chosen) state = 'is-wrong'
                } else if (optIndex === chosen) {
                  state = 'is-selected'
                }
                return (
                  <button
                    key={opt}
                    className={`quiz-option ${state}`}
                    onClick={() => choose(qIndex, optIndex)}
                    disabled={phase === 'finished'}
                  >
                    <span className="quiz-option__letter">{String.fromCharCode(65 + optIndex)}</span>
                    <span>{opt}</span>
                    {state === 'is-correct' && <span className="quiz-option__mark">✓</span>}
                    {state === 'is-wrong' && <span className="quiz-option__mark">✕</span>}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      {examEssays.map((essay, i) => (
        <div className="card essay-card" key={essay.prompt}>
          <p className="essay-card__prompt">
            Câu tự luận {i + 1}. {essay.prompt}
          </p>
          {phase === 'finished' && (
            <button
              className="btn btn--ghost"
              onClick={() => setOpenSolutions((prev) => ({ ...prev, [i]: !prev[i] }))}
            >
              {openSolutions[i] ? 'Ẩn lời giải' : 'Xem lời giải'}
            </button>
          )}
          {phase === 'finished' && openSolutions[i] && (
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

      {phase === 'finished' && (
        <button className="btn btn--ghost exam-card__start" onClick={start}>
          Làm lại
        </button>
      )}
    </div>
  )
}
