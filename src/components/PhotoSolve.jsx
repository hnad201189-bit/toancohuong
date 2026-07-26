import { useEffect, useRef, useState } from 'react'
import { solveImage, getSolveQuota } from '../api/client'
import { useStudentAuth } from '../hooks/useStudentAuth'
import MixedMath from './MixedMath'
import AccountPanel from './AccountPanel'

const MAX_SIZE = 8 * 1024 * 1024

export default function PhotoSolve({ onBack }) {
  const { student, register, login, logout } = useStudentAuth()
  const [quota, setQuota] = useState(null)
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  function refreshQuota() {
    getSolveQuota()
      .then(setQuota)
      .catch(() => setQuota(null))
  }

  useEffect(refreshQuota, [student])

  function pickFile(selected) {
    if (!selected) return
    if (!selected.type.startsWith('image/')) {
      setError('Vui lòng chọn một file ảnh (JPEG, PNG, WEBP, GIF).')
      return
    }
    if (selected.size > MAX_SIZE) {
      setError('Ảnh quá lớn (tối đa 8MB). Vui lòng chọn ảnh nhỏ hơn.')
      return
    }
    setError(null)
    setResult(null)
    setFile(selected)
    setPreviewUrl(URL.createObjectURL(selected))
  }

  async function handleSolve() {
    if (!file) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const data = await solveImage(file)
      setResult(data)
      setQuota({ quota: data.quota, used: data.used, remaining: data.remaining })
    } catch (e) {
      setError(e.message)
      if (e.status === 429) refreshQuota()
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setFile(null)
    setPreviewUrl(null)
    setResult(null)
    setError(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="screen photo-solve">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>

      <header className="screen__header">
        <h1>📷 Chụp ảnh giải bài</h1>
        <p className="screen__subtitle">
          Chụp hoặc tải lên ảnh một bài toán, AI sẽ đọc đề và giải chi tiết từng bước.
        </p>
      </header>

      <AccountPanel student={student} quota={quota} onRegister={register} onLogin={login} onLogout={logout} />

      {quota && (
        <p className="photo-solve__quota-note">
          Còn <strong>{quota.remaining}</strong>/{quota.quota} lượt giải bài hôm nay
          {!student && ' (khách — đăng ký và chờ duyệt để có 5 lượt/ngày)'}.
        </p>
      )}

      <div className="card photo-solve__card">
        {!previewUrl && (
          <label className="photo-solve__dropzone">
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => pickFile(e.target.files[0])}
            />
            <span className="photo-solve__dropzone-icon">📷</span>
            <span>Chạm để chụp ảnh hoặc chọn ảnh từ thư viện</span>
            <span className="photo-solve__dropzone-hint">JPEG, PNG, WEBP, GIF · tối đa 8MB</span>
          </label>
        )}

        {previewUrl && (
          <div className="photo-solve__preview">
            <img src={previewUrl} alt="Ảnh bài toán" />
            <div className="photo-solve__preview-actions">
              <button className="btn btn--ghost" onClick={reset} disabled={loading}>
                Chọn ảnh khác
              </button>
              <button
                className="btn btn--primary"
                onClick={handleSolve}
                disabled={loading || (quota && quota.remaining <= 0)}
              >
                {loading ? 'Đang giải…' : 'Giải bài'}
              </button>
            </div>
          </div>
        )}

        {error && <p className="admin-error">{error}</p>}
      </div>

      {result && (
        <div className="card photo-solve__result">
          <h3>Đề bài</h3>
          <p className="photo-solve__problem">
            <MixedMath text={result.problem} />
          </p>

          {result.steps.length > 0 && (
            <>
              <h3>Lời giải</h3>
              <ol className="photo-solve__steps">
                {result.steps.map((step, i) => (
                  <li key={i}>
                    <MixedMath text={step} />
                  </li>
                ))}
              </ol>
            </>
          )}

          {result.answer && (
            <div className="photo-solve__answer">
              <strong>Đáp số:</strong> <MixedMath text={result.answer} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
