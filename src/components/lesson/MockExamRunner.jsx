import { useEffect, useState } from 'react'
import MixedMath from '../MixedMath'

// Thang điểm phần Đúng/Sai theo đúng cấu trúc đề thi mới của Bộ GD&ĐT
// (Quyết định 764/QĐ-BGDĐT): 1 ý đúng = 0,1đ; 2 ý = 0,25đ; 3 ý = 0,5đ; 4 ý = 1đ.
const PART_II_SCORE_BY_CORRECT_COUNT = [0, 0.1, 0.25, 0.5, 1]

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function normalizeAnswer(text) {
  return String(text ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(',', '.')
}

export default function MockExamRunner({ exam }) {
  const [phase, setPhase] = useState('idle') // idle | running | finished
  const [answersI, setAnswersI] = useState({})
  const [answersII, setAnswersII] = useState({}) // { [clusterIndex]: { [statementIndex]: boolean } }
  const [answersIII, setAnswersIII] = useState({})
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [showSpec, setShowSpec] = useState(false)

  const isEssayExam = exam.kind === 'tuluan'
  const [openSolutions, setOpenSolutions] = useState({})

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
    setAnswersI({})
    setAnswersII({})
    setAnswersIII({})
    setOpenSolutions({})
    setSecondsLeft((exam.duration || 90) * 60)
    setPhase('running')
  }

  function chooseI(qIndex, optIndex) {
    setAnswersI((prev) => ({ ...prev, [qIndex]: optIndex }))
  }

  function chooseII(clusterIndex, stIndex, value) {
    setAnswersII((prev) => ({
      ...prev,
      [clusterIndex]: { ...prev[clusterIndex], [stIndex]: value },
    }))
  }

  function changeIII(qIndex, value) {
    setAnswersIII((prev) => ({ ...prev, [qIndex]: value }))
  }

  const partI = exam.partI || []
  const partII = exam.partII || []
  const partIII = exam.partIII || []

  const scoreI = partI.reduce((sum, q, i) => sum + (answersI[i] === q.correctIndex ? 3 / (partI.length || 1) : 0), 0)

  const scoreII = partII.reduce((sum, cluster, ci) => {
    const chosen = answersII[ci] || {}
    const correctCount = cluster.statements.reduce(
      (n, st, si) => n + (chosen[si] === st.isTrue ? 1 : 0),
      0
    )
    return sum + PART_II_SCORE_BY_CORRECT_COUNT[correctCount]
  }, 0)

  const scoreIII = partIII.reduce(
    (sum, q, i) => sum + (normalizeAnswer(answersIII[i]) === normalizeAnswer(q.answer) ? 3 / (partIII.length || 1) : 0),
    0
  )

  const totalScore = Math.round((scoreI + scoreII + scoreIII) * 100) / 100

  if (isEssayExam) {
    const essays = exam.essays || []
    if (phase === 'idle') {
      return (
        <div className="exam-tab">
          <div className="card exam-card">
            <h3>{exam.title}</h3>
            <div className="exam-card__stats">
              <div className="exam-stat">
                <span className="exam-stat__value">{essays.length}</span>
                <span className="exam-stat__label">câu tự luận</span>
              </div>
              <div className="exam-stat">
                <span className="exam-stat__value">{exam.duration}'</span>
                <span className="exam-stat__label">thời gian làm bài</span>
              </div>
            </div>
            {exam.matrix?.length > 0 && <ExamMatrix matrix={exam.matrix} />}
            <button className="btn btn--primary exam-card__start" onClick={start} disabled={essays.length === 0}>
              Bắt đầu làm bài
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="exam-tab">
        <div className="exam-run__bar">
          <span className={`exam-run__timer ${secondsLeft <= 60 && phase === 'running' ? 'is-warning' : ''}`}>
            ⏱ {formatTime(secondsLeft)}
          </span>
          {phase === 'running' && (
            <button className="btn btn--primary" onClick={() => setPhase('finished')}>
              Nộp bài
            </button>
          )}
        </div>
        {essays.map((essay, i) => (
          <div className="card essay-card" key={i}>
            <p className="essay-card__prompt">
              Câu {i + 1} ({essay.points ?? ''} điểm). <MixedMath text={essay.prompt} />
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
                {essay.solution.map((line, li) => (
                  <p className="essay-card__solution-line" key={li}>
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

  if (phase === 'idle') {
    return (
      <div className="exam-tab">
        <div className="card exam-card">
          <h3>{exam.title}</h3>
          <div className="exam-card__stats">
            <div className="exam-stat">
              <span className="exam-stat__value">{partI.length}</span>
              <span className="exam-stat__label">câu TN nhiều lựa chọn</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat__value">{partII.length}</span>
              <span className="exam-stat__label">câu Đúng/Sai</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat__value">{partIII.length}</span>
              <span className="exam-stat__label">câu trả lời ngắn</span>
            </div>
            <div className="exam-stat">
              <span className="exam-stat__value">{exam.duration}'</span>
              <span className="exam-stat__label">thời gian làm bài</span>
            </div>
          </div>

          {exam.matrix?.length > 0 && <ExamMatrix matrix={exam.matrix} />}

          {exam.specification?.length > 0 && (
            <>
              <button className="btn btn--ghost" onClick={() => setShowSpec((v) => !v)}>
                {showSpec ? 'Ẩn bản đặc tả' : 'Xem bản đặc tả đề thi'}
              </button>
              {showSpec && <ExamSpecification specification={exam.specification} />}
            </>
          )}

          <button
            className="btn btn--primary exam-card__start"
            onClick={start}
            disabled={partI.length + partII.length + partIII.length === 0}
          >
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
            Điểm: <strong>{totalScore.toLocaleString('vi-VN')}/10</strong>
            {' '}(TN: {scoreI.toFixed(2)} · Đ/S: {scoreII.toFixed(2)} · TLN: {scoreIII.toFixed(2)})
          </span>
        )}
      </div>

      {partI.length > 0 && (
        <section>
          <h4 className="exam-part-title">Phần I. Trắc nghiệm nhiều phương án lựa chọn</h4>
          {partI.map((q, qIndex) => {
            const chosen = answersI[qIndex]
            return (
              <div className="card quiz-question" key={qIndex}>
                <p className="quiz-question__text">
                  Câu {qIndex + 1}. <MixedMath text={q.question} />
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
                        key={optIndex}
                        className={`quiz-option ${state}`}
                        onClick={() => chooseI(qIndex, optIndex)}
                        disabled={phase === 'finished'}
                      >
                        <span className="quiz-option__letter">{String.fromCharCode(65 + optIndex)}</span>
                        <span><MixedMath text={opt} /></span>
                        {state === 'is-correct' && <span className="quiz-option__mark">✓</span>}
                        {state === 'is-wrong' && <span className="quiz-option__mark">✕</span>}
                      </button>
                    )
                  })}
                </div>
                {phase === 'finished' && q.solution && (
                  <div className="essay-card__solution">
                    <MixedMath text={q.solution} />
                  </div>
                )}
              </div>
            )
          })}
        </section>
      )}

      {partII.length > 0 && (
        <section>
          <h4 className="exam-part-title">Phần II. Trắc nghiệm Đúng/Sai</h4>
          {partII.map((cluster, ci) => {
            const chosen = answersII[ci] || {}
            const correctCount = cluster.statements.reduce(
              (n, st, si) => n + (chosen[si] === st.isTrue ? 1 : 0),
              0
            )
            return (
              <div className="card quiz-question" key={ci}>
                <p className="quiz-question__text">
                  Câu {ci + 1}. <MixedMath text={cluster.stem} />
                </p>
                <div className="ds-statements">
                  {cluster.statements.map((st, si) => {
                    const value = chosen[si]
                    return (
                      <div className="ds-statement" key={si}>
                        <span className="ds-statement__text"><MixedMath text={st.text} /></span>
                        <div className="ds-statement__toggle">
                          <button
                            className={`ds-btn ${value === true ? 'is-selected' : ''} ${
                              phase === 'finished' && st.isTrue === true ? 'is-correct' : ''
                            } ${phase === 'finished' && value === true && st.isTrue !== true ? 'is-wrong' : ''}`}
                            onClick={() => chooseII(ci, si, true)}
                            disabled={phase === 'finished'}
                          >
                            Đúng
                          </button>
                          <button
                            className={`ds-btn ${value === false ? 'is-selected' : ''} ${
                              phase === 'finished' && st.isTrue === false ? 'is-correct' : ''
                            } ${phase === 'finished' && value === false && st.isTrue !== false ? 'is-wrong' : ''}`}
                            onClick={() => chooseII(ci, si, false)}
                            disabled={phase === 'finished'}
                          >
                            Sai
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {phase === 'finished' && (
                  <p className="quiz-score">
                    Đúng {correctCount}/4 ý → {PART_II_SCORE_BY_CORRECT_COUNT[correctCount].toFixed(2)} điểm
                  </p>
                )}
                {phase === 'finished' && cluster.solution && (
                  <div className="essay-card__solution">
                    <MixedMath text={cluster.solution} />
                  </div>
                )}
              </div>
            )
          })}
        </section>
      )}

      {partIII.length > 0 && (
        <section>
          <h4 className="exam-part-title">Phần III. Trắc nghiệm trả lời ngắn</h4>
          {partIII.map((q, qIndex) => {
            const value = answersIII[qIndex] ?? ''
            const isCorrect = normalizeAnswer(value) === normalizeAnswer(q.answer)
            return (
              <div className="card quiz-question" key={qIndex}>
                <p className="quiz-question__text">
                  Câu {qIndex + 1}. <MixedMath text={q.question} />
                </p>
                <input
                  className={`short-answer-input ${
                    phase === 'finished' ? (isCorrect ? 'is-correct' : 'is-wrong') : ''
                  }`}
                  placeholder="Nhập đáp số"
                  value={value}
                  onChange={(e) => changeIII(qIndex, e.target.value)}
                  disabled={phase === 'finished'}
                />
                {phase === 'finished' && !isCorrect && (
                  <p className="short-answer-key">Đáp số đúng: {q.answer}</p>
                )}
                {phase === 'finished' && q.solution && (
                  <div className="essay-card__solution">
                    <MixedMath text={q.solution} />
                  </div>
                )}
              </div>
            )
          })}
        </section>
      )}

      {phase === 'finished' && (
        <button className="btn btn--ghost exam-card__start" onClick={start}>
          Làm lại
        </button>
      )}
    </div>
  )
}

function ExamMatrix({ matrix }) {
  return (
    <>
      <h4 className="exam-card__matrix-title">Ma trận đề</h4>
      <table className="exam-matrix">
        <thead>
          <tr>
            <th>Chương / chủ đề</th>
            <th>Nhận biết</th>
            <th>Thông hiểu</th>
            <th>Vận dụng</th>
            <th>Vận dụng cao</th>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              <td>{row.chapter}</td>
              <td>{row.nb || 0}</td>
              <td>{row.th || 0}</td>
              <td>{row.vd || 0}</td>
              <td>{row.vdc || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function ExamSpecification({ specification }) {
  return (
    <table className="exam-matrix">
      <thead>
        <tr>
          <th>Chương / chủ đề</th>
          <th>Nội dung</th>
          <th>Mức độ</th>
          <th>Câu hỏi</th>
        </tr>
      </thead>
      <tbody>
        {specification.map((row, i) => (
          <tr key={i}>
            <td>{row.chapter}</td>
            <td>{row.content}</td>
            <td>{row.level}</td>
            <td>{row.questionNumbers}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
