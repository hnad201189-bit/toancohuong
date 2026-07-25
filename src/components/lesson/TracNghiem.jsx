import { useState } from 'react'

export default function TracNghiem({ quiz }) {
  const [answers, setAnswers] = useState({})

  const correctCount = quiz.reduce(
    (sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0),
    0
  )

  function choose(qIndex, optIndex) {
    setAnswers((prev) => (prev[qIndex] !== undefined ? prev : { ...prev, [qIndex]: optIndex }))
  }

  return (
    <div className="quiz-tab">
      <div className="quiz-score">
        Điểm: <strong>{correctCount}/{quiz.length}</strong> câu đúng
      </div>

      {quiz.map((q, qIndex) => {
        const chosen = answers[qIndex]
        const answered = chosen !== undefined
        return (
          <div className="card quiz-question" key={q.question}>
            <p className="quiz-question__text">
              Câu {qIndex + 1}. {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                let state = ''
                if (answered) {
                  if (optIndex === q.correctIndex) state = 'is-correct'
                  else if (optIndex === chosen) state = 'is-wrong'
                }
                return (
                  <button
                    key={opt}
                    className={`quiz-option ${state}`}
                    onClick={() => choose(qIndex, optIndex)}
                    disabled={answered}
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
    </div>
  )
}
