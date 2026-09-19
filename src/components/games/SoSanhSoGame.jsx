import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8

function getMax(round, grade) {
  // Lớp 1: số nhỏ (0-10 rồi 0-20). Lớp 2: phạm vi 1000 (0-200 rồi 0-1000).
  // Lớp 3: phạm vi 100 000 (0-20000 rồi 0-100000). Lớp 4: phạm vi lớp triệu
  // (0-2 000 000 rồi 0-10 000 000).
  if (grade >= 4) return round >= 3 ? 10000000 : 2000000
  if (grade === 3) return round >= 3 ? 100000 : 20000
  if (grade === 2) return round >= 3 ? 1000 : 200
  return round >= 3 ? 20 : 10
}

function makeRound(round, grade = 1) {
  const max = getMax(round, grade)
  const a = randInt(0, max)
  // Cho ra dấu "=" khoảng 1/4 số vòng, còn lại so sánh 2 số khác nhau.
  const b = Math.random() < 0.25 ? a : randInt(0, max)
  const answer = a > b ? 'gt' : a < b ? 'lt' : 'eq'
  const options = shuffle([
    { label: '>', value: 'gt' },
    { label: '<', value: 'lt' },
    { label: '=', value: 'eq' },
  ])
  return { a, b, answer, options }
}

function renderPrompt(current) {
  return (
    <p className="qgame__prompt qgame__prompt--compare">
      {current.a} <span className="qgame__blank">?</span> {current.b}
    </p>
  )
}

export default function SoSanhSoGame({ onExit, grade = 1 }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="so-sanh-so"
      icon="⚖️"
      title="So sánh số"
      subtitle="Chọn đúng dấu >, < hoặc = giữa hai số."
      rounds={ROUNDS}
      bestKey={`toan-l${grade}-game-so-sanh-best`}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
      grade={grade}
    />
  )
}
