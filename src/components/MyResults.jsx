import { useEffect, useState } from 'react'
import { useStudentAuth } from '../hooks/useStudentAuth'
import { getMyAttempts } from '../api/client'
import AccountPanel from './AccountPanel'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function MyResults({ onBack }) {
  const { student, loading, register, login, logout } = useStudentAuth()
  const [attempts, setAttempts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!student) return
    setAttempts(null)
    setError(null)
    getMyAttempts()
      .then(setAttempts)
      .catch((e) => setError(e.message))
  }, [student])

  return (
    <div className="screen">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>
      <header className="screen__header">
        <h1>📊 Kết quả của tôi</h1>
        <p className="screen__subtitle">Lịch sử làm trắc nghiệm và chơi trò chơi đã được lưu lại.</p>
      </header>

      {loading && <p>Đang tải…</p>}

      {!loading && <AccountPanel student={student} onRegister={register} onLogin={login} onLogout={logout} />}

      {student && (
        <>
          {error && <p className="admin-error">{error}</p>}

          {attempts === null && !error && <p>Đang tải kết quả…</p>}

          {attempts && attempts.length === 0 && (
            <div className="card empty-state">
              <h2>Chưa có kết quả nào</h2>
              <p>Hãy thử làm trắc nghiệm trong một chuyên đề, hoặc chơi thử một trò chơi ở mục Trò chơi lớp 1.</p>
            </div>
          )}

          {attempts && attempts.length > 0 && (
            <div className="results-list">
              {attempts.map((a) => (
                <div key={a.id} className="card results-row">
                  <div className="results-row__main">
                    <span className="results-row__icon">{a.kind === 'game' ? '🎮' : '📝'}</span>
                    <div>
                      <div className="results-row__label">{a.itemLabel || a.itemId}</div>
                      <div className="results-row__date">{formatDate(a.createdAt)}</div>
                    </div>
                  </div>
                  {a.score !== null && (
                    <div className="results-row__score">
                      {a.score}
                      {a.maxScore !== null ? `/${a.maxScore}` : ''}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
