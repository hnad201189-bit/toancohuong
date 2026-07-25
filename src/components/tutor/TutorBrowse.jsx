import { useEffect, useState } from 'react'
import { getTutors } from '../../api/client'
import { SUBJECT_OPTIONS } from '../../data/subjects'
import TutorCard from './TutorCard'

export default function TutorBrowse() {
  const [tutors, setTutors] = useState(null)
  const [area, setArea] = useState('')
  const [subject, setSubject] = useState('')
  const [error, setError] = useState(null)

  function load(filters = {}) {
    setError(null)
    getTutors(filters)
      .then(setTutors)
      .catch((e) => setError(e.message))
  }

  useEffect(() => load(), [])

  function handleSearch(e) {
    e.preventDefault()
    load({ area, subject })
  }

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

      {error && <p className="admin-error">{error}</p>}

      {!tutors ? (
        <p>Đang tải…</p>
      ) : tutors.length === 0 ? (
        <p className="tutor-browse__empty">
          Chưa có gia sư phù hợp. Thử bỏ bớt bộ lọc, hoặc quay lại sau khi có gia sư đăng ký mới.
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
