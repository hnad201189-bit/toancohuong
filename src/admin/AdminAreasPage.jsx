import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAreas, createArea, updateArea, deleteArea } from '../api/client'

const BLANK = { name: '', description: '', progress: 0 }
const GRADES = [6, 11, 12]

export default function AdminAreasPage() {
  const [grade, setGrade] = useState(11)
  const [areas, setAreas] = useState(null)
  const [error, setError] = useState(null)
  const [newArea, setNewArea] = useState(BLANK)
  const [editingId, setEditingId] = useState(null)
  const [editDraft, setEditDraft] = useState(BLANK)

  function reload() {
    getAreas(grade)
      .then(setAreas)
      .catch((e) => setError(e.message))
  }

  useEffect(() => {
    setAreas(null)
    reload()
  }, [grade])

  async function handleCreate(e) {
    e.preventDefault()
    setError(null)
    try {
      await createArea({ ...newArea, grade })
      setNewArea(BLANK)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  function startEdit(area) {
    setEditingId(area.id)
    setEditDraft({ name: area.name, description: area.description, progress: area.progress })
  }

  async function saveEdit(id) {
    setError(null)
    try {
      await updateArea(id, editDraft)
      setEditingId(null)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Xoá mảng kiến thức này? Toàn bộ chuyên đề và bài học bên trong sẽ bị xoá.')) return
    setError(null)
    try {
      await deleteArea(id)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="admin-page">
      <h1>Mảng kiến thức</h1>

      <div className="admin-tutor-filters">
        {GRADES.map((g) => (
          <button
            key={g}
            className={`admin-tutor-filter ${grade === g ? 'is-active' : ''}`}
            onClick={() => setGrade(g)}
          >
            Lớp {g}
          </button>
        ))}
      </div>

      {error && <p className="admin-error">{error}</p>}

      {!areas ? (
        <p>Đang tải…</p>
      ) : (
        <>
          <form className="card admin-form" onSubmit={handleCreate}>
            <h3>Thêm mảng kiến thức mới (Lớp {grade})</h3>
            <div className="admin-form__row">
              <input
                placeholder="Tên mảng kiến thức"
                value={newArea.name}
                onChange={(e) => setNewArea((v) => ({ ...v, name: e.target.value }))}
                required
              />
              <input
                type="number"
                min="0"
                max="100"
                placeholder="% tiến độ"
                value={newArea.progress}
                onChange={(e) => setNewArea((v) => ({ ...v, progress: Number(e.target.value) }))}
              />
            </div>
            <input
              placeholder="Mô tả ngắn"
              value={newArea.description}
              onChange={(e) => setNewArea((v) => ({ ...v, description: e.target.value }))}
            />
            <button className="btn btn--primary" type="submit">
              Thêm mảng kiến thức
            </button>
          </form>

          <div className="admin-list">
            {areas.map((area) => (
              <div className="card admin-row" key={area.id}>
                {editingId === area.id ? (
                  <div className="admin-form__row admin-form__row--edit">
                    <input
                      value={editDraft.name}
                      onChange={(e) => setEditDraft((v) => ({ ...v, name: e.target.value }))}
                    />
                    <input
                      value={editDraft.description}
                      onChange={(e) => setEditDraft((v) => ({ ...v, description: e.target.value }))}
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={editDraft.progress}
                      onChange={(e) => setEditDraft((v) => ({ ...v, progress: Number(e.target.value) }))}
                    />
                    <button className="btn btn--primary" onClick={() => saveEdit(area.id)}>
                      Lưu
                    </button>
                    <button className="btn btn--ghost" onClick={() => setEditingId(null)}>
                      Huỷ
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="admin-row__info">
                      <strong>
                        {area.order}. {area.name}
                      </strong>
                      <span>{area.description}</span>
                      <span className="admin-row__meta">
                        {area.topics.length} chuyên đề · {area.progress}% tiến độ
                      </span>
                    </div>
                    <div className="admin-row__actions">
                      <Link className="btn btn--ghost" to={`/admin/areas/${area.id}`}>
                        Quản lý chuyên đề
                      </Link>
                      <button className="btn btn--ghost" onClick={() => startEdit(area)}>
                        Sửa
                      </button>
                      <button className="btn btn--ghost admin-btn--danger" onClick={() => handleDelete(area.id)}>
                        Xoá
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
