import RoundsQuizGame from './RoundsQuizGame'
import { shuffle } from './gameUtils'

const ROUNDS = 6
const BEST_KEY = 'toan-l1-game-nhan-dien-hinh-best'

const SHAPES = [
  { key: 'tron', name: 'Hình tròn' },
  { key: 'vuong', name: 'Hình vuông' },
  { key: 'tam-giac', name: 'Hình tam giác' },
  { key: 'chu-nhat', name: 'Hình chữ nhật' },
]

function makeRound() {
  const answerShape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
  const options = shuffle(SHAPES).map((s) => ({ label: s.name, value: s.key }))
  return { shapeKey: answerShape.key, answer: answerShape.key, options }
}

function renderPrompt(current) {
  return (
    <div className="qgame__shape-wrap">
      <span className={`shape-icon shape-icon--${current.shapeKey}`} />
    </div>
  )
}

export default function NhanDienHinhGame({ onExit }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      icon="🔺"
      title="Nhận diện hình khối"
      subtitle="Nhìn hình và chọn đúng tên của hình đó."
      rounds={ROUNDS}
      bestKey={BEST_KEY}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
    />
  )
}
