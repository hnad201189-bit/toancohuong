import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHsgTopics, createHsgTopic, updateHsgTopic, deleteHsgTopic, deleteLesson } from '../api/client'

const BLANK = { name: '', progress: 0 }
const GRADES = [6, 11, 12]

export default function AdminHsgPage() {
  const [grade, setGrade] = useState(11)
  const [topics, setTopics] = useState(null)
  const [error, setError] = useState(null)
  const [newTopic, setNewTopic] = useState(BLANK)
  const [editingId, setEditingId] = useState(null)
  const [editDraft, setEditDraft] = useState(BLANK)

  function reload() {
    getHsgTopics(grade)
      .then(setTopics)
      .catch((e) => setError(e.message))
  }

  useEffect(() => {
    setTopics(null)
    reload()
  }, [grade])

  async function handleCreate(e) {
    e.preventDefault()
    setError(null)
    try {
      await createHsgTopic({ ...newTopic, grade })
      setNewTopic(BLANK)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  function startEdit(topic) {
    setEditingId(topic.id)
    setEditDraft({ name: topic.name, progress: topic.progress })
  }

  async function saveEdit(id) {
    setError(null)
    try {
      await updateHsgTopic(id, editDraft)
      setEditingId(null)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Xoá chuyên đề HSG này?')) return
    setError(null)
    try {
      await deleteHsgTopic(id)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleRemoveLesson(id) {
    if (!window.confirm('Gỡ bài học mẫu khỏi chuyên đề này?')) return
    setError(null)
    try {
      await deleteLesson(id)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <div className="admin-page">
      <h1>▲ Chuyên đề Ôn thi HSG / chuyên</h1>

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

      {!topics ? (
        <p>Đang tải…</p>
      ) : (
        <>
          <form className="card admin-form" onSubmit={handleCreate}>
            <h3>Thêm chuyên đề HSG mới (Lớp {grade})</h3>
            <div className="admin-form__row">
              <input
                placeholder="Tên chuyên đề"
                value={newTopic.name}
                onChange={(e) => setNewTopic((v) => ({ ...v, name: e.target.value }))}
                required
              />
              <input
                type="number"
                min="0"
                max="100"
                placeholder="% tiến độ"
                value={newTopic.progress}
                onChange={(e) => setNewTopic((v) => ({ ...v, progress: Number(e.target.value) }))}
              />
            </div>
            <button className="btn btn--primary" type="submit">
              Thêm chuyên đề HSG
            </button>
          </form>

          <div className="admin-list">
            {topics.map((topic) => (
              <div className="card admin-row" key={topic.id}>
                {editingId === topic.id ? (
                  <div className="admin-form__row admin-form__row--edit">
                    <input
                      value={editDraft.name}
                      onChange={(e) => setEditDraft((v) => ({ ...v, name: e.target.value }))}
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={editDraft.progress}
                      onChange={(e) => setEditDraft((v) => ({ ...v, progress: Number(e.target.value) }))}
                    />
                    <button className="btn btn--primary" onClick={() => saveEdit(topic.id)}>
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
                        {topic.name}
                        {topic.hasLesson && <span className="badge badge--sample">BÀI HỌC MẪU</span>}
                      </strong>
                      <span className="admin-row__meta">{topic.progress}% tiến độ</span>
                    </div>
                    <div className="admin-row__actions">
                      <Link className="btn btn--ghost" to={`/admin/topics/${topic.id}/lesson`}>
                        {topic.hasLesson ? 'Sửa bài học' : 'Soạn bài học'}
                      </Link>
                      {topic.hasLesson && (
                        <button className="btn btn--ghost admin-btn--danger" onClick={() => handleRemoveLesson(topic.id)}>
                          Gỡ bài học
                        </button>
                      )}
                      <button className="btn btn--ghost" onClick={() => startEdit(topic)}>
                        Sửa
                      </button>
                      <button className="btn btn--ghost admin-btn--danger" onClick={() => handleDelete(topic.id)}>
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
