import { useEffect, useState } from 'react'
import { getTutors } from '../../api/client'
import { SUBJECT_OPTIONS } from '../../data/subjects'
import { getCurrentPosition } from '../../lib/geolocation'
import TutorCard from './TutorCard'
import LocationMap from './LocationMap'

const RADIUS_OPTIONS = [5, 10, 15, 30, 50]

export default function TutorBrowse() {
  const [tutors, setTutors] = useState(null)
  const [area, setArea] = useState('')
  const [subject, setSubject] = useState('')
  const [error, setError] = useState(null)
  const [myLocation, setMyLocation] = useState(null)
  const [radius, setRadius] = useState(15)
  const [locating, setLocating] = useState(false)
  const [locationError, setLocationError] = useState(null)

  function load(filters = {}) {
    setError(null)
    getTutors(filters)
      .then(setTutors)
      .catch((e) => setError(e.message))
  }

  useEffect(() => load(), [])

  function handleSearch(e) {
    e.preventDefault()
    const filters = { area, subject }
    if (myLocation) {
      filters.lat = myLocation.lat
      filters.lng = myLocation.lng
      filters.radius = radius
    }
    load(filters)
  }

  async function handleFindNearby() {
    setLocating(true)
    setLocationError(null)
    try {
      const loc = await getCurrentPosition()
      setMyLocation(loc)
      load({ area, subject, lat: loc.lat, lng: loc.lng, radius })
    } catch (err) {
      setLocationError(err.message)
    } finally {
      setLocating(false)
    }
  }

  function handleRadiusChange(e) {
    const next = Number(e.target.value)
    setRadius(next)
    if (myLocation) load({ area, subject, lat: myLocation.lat, lng: myLocation.lng, radius: next })
  }

  function clearNearby() {
    setMyLocation(null)
    load({ area, subject })
  }

  const mapMarkers = myLocation && tutors ? tutors.filter((t) => t.lat != null && t.lng != null).map((t) => ({ lat: t.lat, lng: t.lng, label: `${t.name}${t.distanceKm != null ? ` · ${t.distanceKm} km` : ''}` })) : null

  return (
    <div className="tutor-browse">
      <form className="tutor-browse__filters" onSubmit={handleSearch}>
        <input
          placeholder="Tìm theo khu vực (VD: Quận 1, TP.HCM)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Tất cả môn / chuyên đề</option>
          {SUBJECT_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button className="btn btn--primary" type="submit">
          Tìm kiếm
        </button>
      </form>

      <div className="tutor-browse__nearby">
        {!myLocation ? (
          <button className="btn btn--ghost" onClick={handleFindNearby} disabled={locating}>
            {locating ? 'Đang định vị…' : '📍 Tìm gần tôi'}
          </button>
        ) : (
          <>
            <span className="tutor-browse__nearby-active">📍 Đang tìm quanh vị trí của bạn</span>
            <label className="tutor-browse__radius">
              Bán kính:
              <select value={radius} onChange={handleRadiusChange}>
                {RADIUS_OPTIONS.map((r) => (
                  <option key={r} value={r}>
                    {r} km
                  </option>
                ))}
              </select>
            </label>
            <button className="btn btn--ghost" onClick={clearNearby}>
              Huỷ tìm gần tôi
            </button>
          </>
        )}
      </div>
      {locationError && <p className="admin-error">{locationError}</p>}

      {myLocation && (
        <LocationMap userLocation={myLocation} markers={mapMarkers} height={280} />
      )}

      {error && <p className="admin-error">{error}</p>}

      {!tutors ? (
        <p>Đang tải…</p>
      ) : tutors.length === 0 ? (
        <p className="tutor-browse__empty">
          {myLocation
            ? 'Chưa có gia sư nào trong bán kính này. Thử tăng bán kính tìm kiếm.'
            : 'Chưa có gia sư phù hợp. Thử bỏ bớt bộ lọc, hoặc quay lại sau khi có gia sư đăng ký mới.'}
        </p>
      ) : (
        <div className="tutor-grid">
          {tutors.map((t) => (
            <TutorCard key={t.id} tutor={t} />
          ))}
        </div>
      )}
    </div>
  )
}
