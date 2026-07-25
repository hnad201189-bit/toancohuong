export default function DeKiemTra({ exam }) {
  return (
    <div className="exam-tab">
      <div className="card exam-card">
        <h3>Thông tin đề kiểm tra</h3>
        <div className="exam-card__stats">
          <div className="exam-stat">
            <span className="exam-stat__value">{exam.mcqCount}</span>
            <span className="exam-stat__label">câu trắc nghiệm</span>
          </div>
          <div className="exam-stat">
            <span className="exam-stat__value">{exam.essayCount}</span>
            <span className="exam-stat__label">câu tự luận</span>
          </div>
          <div className="exam-stat">
            <span className="exam-stat__value">{exam.minutes}'</span>
            <span className="exam-stat__label">thời gian làm bài</span>
          </div>
        </div>

        <h4 className="exam-card__matrix-title">Ma trận đề</h4>
        <table className="exam-matrix">
          <thead>
            <tr>
              <th>Mức độ</th>
              <th>Trắc nghiệm</th>
              <th>Tự luận</th>
            </tr>
          </thead>
          <tbody>
            {exam.matrix.map((row) => (
              <tr key={row.level}>
                <td>{row.level}</td>
                <td>{row.mcq}</td>
                <td>{row.essay}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn--primary exam-card__start">Bắt đầu làm bài</button>
      </div>
    </div>
  )
}
