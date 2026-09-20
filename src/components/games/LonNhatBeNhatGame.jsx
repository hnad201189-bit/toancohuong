import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8

function getMax(harder, grade) {
  // Lớp 1: 0-40. Lớp 2: phạm vi 1000. Lớp 3: phạm vi 100 000.
  // Lớp 4: phạm vi lớp triệu. Lớp 5: ôn tập tổng hợp, rộng hơn lớp 4.
  if (grade >= 5) return harder ? 100000000 : 20000000
  if (grade === 4) return harder ? 10000000 : 2000000
  if (grade === 3) return harder ? 100000 : 20000
  if (grade === 2) return harder ? 1000 : 200
  return harder ? 40 : 20
}

function makeRound(round, grade = 1) {
  const harder = round >= 3
  const count = grade >= 2 ? (harder ? 6 : 4) : harder ? 5 : 4
  const max = getMax(harder, grade)
  const nums = new Set()
  while (nums.size < count) nums.add(randInt(0, max))
  const arr = [...nums]
  const findMax = Math.random() < 0.5
  const answer = findMax ? Math.max(...arr) : Math.min(...arr)
  const prompt = findMax ? 'Số nào lớn nhất?' : 'Số nào bé nhất?'
  const options = shuffle(arr).map((v) => ({ label: String(v), value: v }))
  return { prompt, answer, options }
}

function renderPrompt(current) {
  return <p className="qgame__prompt">{current.prompt}</p>
}

export default function LonNhatBeNhatGame({ onExit, grade = 1 }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="lon-be-nhat"
      icon="🏆"
      title="Số lớn nhất – số bé nhất"
      subtitle="Chọn đúng số lớn nhất hoặc bé nhất trong nhóm số."
      rounds={ROUNDS}
      bestKey={`toan-l${grade}-game-lon-be-nhat-best`}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
      grade={grade}
    />
  )
}
