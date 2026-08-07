const GRADES = [1, 6, 7, 8, 9, 10, 11, 12]

// Grades that currently have real lesson content. Kept as a plain hardcoded
// list (mirroring Sidebar's own GRADES list) rather than derived from an API
// call, since the gate must render instantly before any data fetch starts.
const GRADES_WITH_CONTENT = new Set([6, 11, 12])

export default function GradeGate({ selectedGrade, onSelect }) {
  return (
    <div className="grade-gate">
      <div className="grade-gate__panel">
        <h1>Chọn lớp học của bạn</h1>
        <p className="grade-gate__subtitle">
          Chọn khối lớp để chỉ xem chuyên đề, đề luyện tập và đề kiểm tra đúng chương trình lớp đó.
        </p>

        <div className="grade-gate__grid">
          {GRADES.map((g) => {
            const hasContent = GRADES_WITH_CONTENT.has(g)
            return (
              <button
                key={g}
                className={`grade-gate__card ${g === selectedGrade ? 'is-active' : ''}`}
                onClick={() => onSelect(g)}
              >
                <span className="grade-gate__card-num">{g}</span>
                <span className="grade-gate__card-label">Lớp {g}</span>
                {!hasContent && <span className="grade-gate__card-badge">Đang biên soạn</span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
