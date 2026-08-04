import { useState } from 'react'
import MixedMath from '../MixedMath'

const BATCH_SIZE = 12

const FILTERS = [
  { id: 'tat-ca', label: 'Tất cả' },
  { id: 'nhan-biet', label: 'Nhận biết' },
  { id: 'thong-hieu', label: 'Thông hiểu' },
  { id: 'van-dung', label: 'Vận dụng' },
  { id: 'nang-cao', label: 'Nâng cao' },
]

export default function PracticeBank({ items }) {
  const [difficulty, setDifficulty] = useState('tat-ca')
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [open, setOpen] = useState({})

  function selectDifficulty(id) {
    setDifficulty(id)
    setVisibleCount(BATCH_SIZE)
  }

  const filtered = difficulty === 'tat-ca' ? items : items.filter((it) => it.difficulty === difficulty)
  const visible = filtered.slice(0, visibleCount)

  return (
    <div className="practice-bank">
      <div className="practice-bank__filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`practice-bank__filter ${difficulty === f.id ? 'is-active' : ''}`}
            onClick={() => selectDifficulty(f.id)}
          >
            {f.label} ({f.id === 'tat-ca' ? items.length : items.filter((it) => it.difficulty === f.id).length})
          </button>
        ))}
      </div>

      <p className="practice-bank__counter">
        Hiển thị {visible.length}/{filtered.length} bài
      </p>

      <div className="practice-bank__list">
        {visible.map((item) => (
          <div className="card practice-bank-card" key={item.id}>
            <span className={`practice-bank-card__badge practice-bank-card__badge--${item.difficulty}`}>
              {FILTERS.find((f) => f.id === item.difficulty)?.label}
            </span>
            <p className="practice-bank-card__prompt">
              <MixedMath text={item.prompt} />
            </p>
            <button
              className="btn btn--ghost"
              onClick={() => setOpen((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
            >
              {open[item.id] ? 'Ẩn lời giải' : 'Xem lời giải'}
            </button>
            {open[item.id] && (
              <div className="practice-bank-card__solution">
                {item.solution.map((line, i) => (
                  <p className="practice-bank-card__solution-line" key={i}>
                    <MixedMath text={line} />
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="practice-bank__load-more-wrap">
          <button className="btn btn--ghost" onClick={() => setVisibleCount((v) => v + BATCH_SIZE)}>
            Xem thêm ({filtered.length - visibleCount} bài)
          </button>
        </div>
      )}
    </div>
  )
}
