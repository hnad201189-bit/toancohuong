import { useState } from 'react'
import { parseImportFile } from './importUtils'

export default function ImportSection({ title, hint, columns, needsArea, needsTopic, needsTitle, areas, onSubmit, onImported }) {
  const [areaId, setAreaId] = useState('')
  const [topicId, setTopicId] = useState('')
  const [lessonTitle, setLessonTitle] = useState('')
  const [rows, setRows] = useState(null)
  const [fileName, setFileName] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)

  const selectedArea = areas.find((a) => a.id === areaId)
  const topicOptions = !needsTopic
    ? []
    : needsArea
      ? (selectedArea?.topics ?? [])
      : areas.flatMap((a) => a.topics.map((t) => ({ ...t, areaName: a.name })))

  async function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    setFileName(file.name)
    setError(null)
    setResult(null)
    try {
      const parsed = await parseImportFile(file)
      setRows(parsed)
    } catch (err) {
      setError('Không đọc được file: ' + err.message)
      setRows(null)
    }
  }

  async function handleImport() {
    if (!rows || !rows.length) return
    setBusy(true)
    setError(null)
    try {
      const res = await onSubmit(rows, { areaId, topicId, title: lessonTitle })
      setResult(res.imported)
      setRows(null)
      setFileName('')
      onImported?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const ready = rows && rows.length > 0 && (!needsArea || areaId) && (!needsTopic || topicId)

  return (
    <div className="card admin-form admin-import-section">
      <h3>{title}</h3>
      <p className="admin-import-hint">{hint}</p>
      <p className="admin-import-columns">
        Cột cần có: <code>{columns.join(', ')}</code>
      </p>

      {needsArea && (
        <select
          value={areaId}
          onChange={(e) => {
            setAreaId(e.target.value)
            setTopicId('')
          }}
        >
          <option value="">— Chọn mảng kiến thức —</option>
          {areas.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
      )}

      {needsTopic && (
        <select value={topicId} onChange={(e) => setTopicId(e.target.value)} disabled={needsArea && !areaId}>
          <option value="">— Chọn chuyên đề —</option>
          {topicOptions.map((t) => (
            <option key={t.id} value={t.id}>
              {t.areaName ? `${t.areaName} — ${t.name}` : t.name}
            </option>
          ))}
        </select>
      )}

      {needsTitle && (
        <input
          placeholder="Tiêu đề bài học (chỉ cần nếu chuyên đề chưa có bài học mẫu)"
          value={lessonTitle}
          onChange={(e) => setLessonTitle(e.target.value)}
        />
      )}

      <input type="file" accept=".csv,.json" onChange={handleFile} />
      {fileName && rows && (
        <p className="admin-import-preview">
          Đã đọc <strong>{fileName}</strong>: {rows.length} dòng dữ liệu.
        </p>
      )}
      {error && <p className="admin-error">{error}</p>}
      {result !== null && <p className="admin-import-success">Đã nhập {result} mục thành công ✓</p>}

      <button className="btn btn--primary" disabled={!ready || busy} onClick={handleImport}>
        {busy ? 'Đang nhập…' : 'Nhập dữ liệu'}
      </button>
    </div>
  )
}
