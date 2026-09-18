import RoundsQuizGame from './RoundsQuizGame'
import { shuffle } from './gameUtils'

const ROUNDS = 6

const SHAPES = [
  { key: 'tron', name: 'Hình tròn' },
  { key: 'vuong', name: 'Hình vuông' },
  { key: 'tam-giac', name: 'Hình tam giác' },
  { key: 'chu-nhat', name: 'Hình chữ nhật' },
]
// Từ vòng 4 trở đi thêm hình thoi vào nhóm lựa chọn — nhiều phương án hơn, khó hơn.
const SHAPES_HARDER = [...SHAPES, { key: 'thoi', name: 'Hình thoi' }]

function makeRound(round, grade = 1) {
  // Lớp 2 trở lên: luôn dùng đủ 5 hình ngay từ vòng đầu (nhiều lựa chọn hơn = khó hơn).
  const pool = grade >= 2 || round >= 3 ? SHAPES_HARDER : SHAPES
  const answerShape = pool[Math.floor(Math.random() * pool.length)]
  const options = shuffle(pool).map((s) => ({ label: s.name, value: s.key }))
  return { shapeKey: answerShape.key, answer: answerShape.key, options }
}

function renderPrompt(current) {
  return (
    <div className="qgame__shape-wrap">
      <span className={`shape-icon shape-icon--${current.shapeKey}`} />
    </div>
  )
}

export default function NhanDienHinhGame({ onExit, grade = 1 }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="nhan-dien-hinh"
      icon="🔺"
      title="Nhận diện hình khối"
      subtitle="Nhìn hình và chọn đúng tên của hình đó."
      rounds={ROUNDS}
      bestKey={`toan-l${grade}-game-nhan-dien-hinh-best`}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
      grade={grade}
    />
  )
}
