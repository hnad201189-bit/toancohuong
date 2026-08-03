import { useEffect, useState } from 'react'
import { getAllTutorsAdmin, updateTutor, deleteTutor } from '../api/client'
import { getCurrentPosition } from '../lib/geolocation'
import LocationMap from '../components/tutor/LocationMap'

const STATUS_LABEL = {
  pending: 'Chờ duyệt',
  approved: 'Đã duyệt',
  rejected: 'Từ chối',
}

const FILTERS = [
  { id: 'pending', label: 'Chờ duyệt' },
  { id: 'approved', label: 'Đã duyệt' },
  { id: 'rejected', label: 'Từ chối' },
  { id: 'all', label: 'Tất cả' },
]

export default function AdminTutorsPage() {
  const [tutors, setTutors] = useState(null)
  const [filter, setFilter] = useState('pending')
  const [error, setError] = useState(null)
  const [editingLocationId, setEditingLocationId] = useState(null)
  const [draftLoc, setDraftLoc] = useState({ lat: null, lng: null })
  const [locating, setLocating] = useState(false)
  const [savingLocation, setSavingLocation] = useState(false)

  function reload() {
    getAllTutorsAdmin()
      .then(setTutors)
      .catch((e) => setError(e.message))
  }

  useEffect(reload, [])

  async function setStatus(id, status) {
    setError(null)
    try {
      await updateTutor(id, { status })
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Xoá hồ sơ gia sư này?')) return
    setError(null)
    try {
      await deleteTutor(id)
      reload()
    } catch (e) {
      setError(e.message)
    }
  }

  function openLocationEditor(t) {
    setEditingLocationId(t.id)
    setDraftLoc({ lat: t.lat ?? null, lng: t.lng ?? null })
  }

  function closeLocationEditor() {
    setEditingLocationId(null)
    setDraftLoc({ lat: null, lng: null })
  }

  async function handleUseMyLocation() {
    setLocating(true)
    setError(null)
    try {
      const loc = await getCurrentPosition()
      setDraftLoc(loc)
    } catch (e) {
      setError(e.message)
    } finally {
      setLocating(false)
    }
  }

  async function saveLocation(id) {
    setSavingLocation(true)
    setError(null)
    try {
      await updateTutor(id, { lat: draftLoc.lat, lng: draftLoc.lng })
      closeLocationEditor()
      reload()
    } catch (e) {
      setError(e.message)
    } finally {
      setSavingLocation(false)
    }
  }

  if (!tutors) return <p>Đang tải…</p>

  const visible = filter === 'all' ? tutors : tutors.filter((t) => t.status === filter)

  return (
    <div className="admin-page">
      <h1>Quản lý gia sư</h1>
      {error && <p className="admin-error">{error}</p>}

      <div className="admin-tutor-filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`admin-tutor-filter ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
            {f.id !== 'all' && ` (${tutors.filter((t) => t.status === f.id).length})`}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p>Không có hồ sơ nào ở mục này.</p>
      ) : (
        <div className="admin-list">
          {visible.map((t) => (
            <div className="card admin-row admin-tutor-row" key={t.id}>
              <div className="admin-row__info">
                <strong>
                  {t.name}
                  <span className={`badge admin-tutor-status admin-tutor-status--${t.status}`}>
                    {STATUS_LABEL[t.status]}
                  </span>
                </strong>
                <span className="admin-row__meta">
                  {t.phone}
                  {t.area && ` · ${t.area}`}
                  {t.price && ` · ${t.price}`}
                </span>
                {t.subjects.length > 0 && (
                  <span className="admin-row__meta">Môn: {t.subjects.join(', ')}</span>
                )}
                {t.bio && <span className="admin-row__meta">{t.bio}</span>}
                {t.achievements && <span className="admin-row__meta">🏆 {t.achievements}</span>}
                <span className="admin-row__meta">
                  {t.lat != null && t.lng != null
                    ? `📍 Đã có vị trí (${t.lat.toFixed(4)}, ${t.lng.toFixed(4)})`
                    : '📍 Chưa có vị trí'}
                </span>
              </div>
              <div className="admin-row__actions">
                {t.status !== 'approved' && (
                  <button className="btn btn--ghost" onClick={() => setStatus(t.id, 'approved')}>
                    Duyệt
                  </button>
                )}
                {t.status !== 'rejected' && (
                  <button className="btn btn--ghost" onClick={() => setStatus(t.id, 'rejected')}>
                    Từ chối
                  </button>
                )}
                <button className="btn btn--ghost" onClick={() => openLocationEditor(t)}>
                  📍 Vị trí
                </button>
                <button className="btn btn--ghost admin-btn--danger" onClick={() => handleDelete(t.id)}>
                  Xoá
                </button>
              </div>

              {editingLocationId === t.id && (
                <div className="admin-tutor-location-editor">
                  <div className="admin-tutor-location-editor__head">
                    <span>Chọn vị trí cho {t.name} trên bản đồ</span>
                    <button className="btn btn--ghost" onClick={handleUseMyLocation} disabled={locating}>
                      {locating ? 'Đang định vị…' : 'Dùng vị trí hiện tại'}
                    </button>
                  </div>
                  <LocationMap
                    lat={draftLoc.lat}
                    lng={draftLoc.lng}
                    onPick={(lat, lng) => setDraftLoc({ lat, lng })}
                    height={220}
                  />
                  <div className="admin-tutor-location-editor__actions">
                    {draftLoc.lat != null && (
                      <button className="btn btn--ghost" onClick={() => setDraftLoc({ lat: null, lng: null })}>
                        Xoá vị trí
                      </button>
                    )}
                    <button className="btn btn--ghost" onClick={closeLocationEditor}>
                      Huỷ
                    </button>
                    <button className="btn btn--primary" onClick={() => saveLocation(t.id)} disabled={savingLocation}>
                      {savingLocation ? 'Đang lưu…' : 'Lưu vị trí'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
