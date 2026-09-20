import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8

function getMax(round, grade) {
  // Lớp 1: số nhỏ (0-20 rồi 0-30). Lớp 2: phạm vi 1000 (0-200 rồi 0-999).
  // Lớp 3: phạm vi 100 000 (0-9999 rồi 0-99999). Lớp 4: phạm vi lớp triệu.
  // Lớp 5: ôn tập tổng hợp, phạm vi rộng hơn lớp 4.
  if (grade >= 5) return round >= 3 ? 99999999 : 9999999
  if (grade === 4) return round >= 3 ? 9999999 : 999999
  if (grade === 3) return round >= 3 ? 99999 : 9999
  if (grade === 2) return round >= 3 ? 999 : 200
  return round >= 3 ? 30 : 20
}

function makeRound(round, grade = 1) {
  const n = randInt(0, getMax(round, grade))
  const answer = n % 2 === 0 ? 'chan' : 'le'
  const options = shuffle([
    { label: 'Chẵn', value: 'chan' },
    { label: 'Lẻ', value: 'le' },
  ])
  return { n, answer, options }
}

function renderPrompt(current) {
  return <p className="qgame__prompt qgame__prompt--number">{current.n}</p>
}

export default function ChanLeGame({ onExit, grade = 1 }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="chan-le"
      icon="🔵"
      title="Chẵn hay lẻ?"
      subtitle="Đoán xem số đó là số chẵn hay số lẻ."
      rounds={ROUNDS}
      bestKey={`toan-l${grade}-game-chan-le-best`}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
      grade={grade}
    />
  )
}
