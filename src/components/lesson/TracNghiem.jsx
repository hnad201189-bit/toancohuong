import { useEffect, useState } from 'react'
import { useStudentAuth } from '../../hooks/useStudentAuth'
import { submitAttempt } from '../../api/client'
import AccountPanel from '../AccountPanel'

export default function TracNghiem({ quiz, topicId, lessonTitle }) {
  const { student, loading, register, login, logout } = useStudentAuth()
  const [answers, setAnswers] = useState({})

  const correctCount = quiz.reduce(
    (sum, q, i) => sum + (answers[i] === q.correctIndex ? 1 : 0),
    0
  )
  const answeredCount = Object.keys(answers).length

  // Khi trả lời xong câu cuối cùng, ghi lại 1 lượt làm bài trắc nghiệm cho
  // chuyên đề này — dùng ở trang "Kết quả của tôi".
  useEffect(() => {
    if (quiz.length > 0 && answeredCount === quiz.length) {
      submitAttempt({
        kind: 'quiz',
        itemId: topicId || lessonTitle,
        itemLabel: lessonTitle,
        score: correctCount,
        maxScore: quiz.length,
      }).catch(() => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answeredCount])

  function choose(qIndex, optIndex) {
    setAnswers((prev) => (prev[qIndex] !== undefined ? prev : { ...prev, [qIndex]: optIndex }))
  }

  if (loading) return <p>Đang tải…</p>

  if (!student) {
    return (
      <div className="quiz-tab">
        <p className="screen__subtitle">Đăng nhập để làm trắc nghiệm và lưu lại kết quả của con.</p>
        <AccountPanel student={student} onRegister={register} onLogin={login} onLogout={logout} />
      </div>
    )
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
