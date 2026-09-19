import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8

function getMax(round, grade) {
  // Lớp 1: số nhỏ (1-19 rồi 1-39). Lớp 2: phạm vi 1000 (1-199 rồi 1-998).
  // Lớp 3: phạm vi 100 000 (1-19999 rồi 1-99998). Lớp 4: phạm vi lớp triệu.
  if (grade >= 4) return round >= 3 ? 9999998 : 1999999
  if (grade === 3) return round >= 3 ? 99998 : 19999
  if (grade === 2) return round >= 3 ? 998 : 199
  return round >= 3 ? 39 : 19
}

function makeRound(round, grade = 1) {
  const max = getMax(round, grade)
  const n = randInt(1, max)
  const isBefore = Math.random() < 0.5
  const answer = isBefore ? n - 1 : n + 1
  const prompt = isBefore ? `Số liền trước của ${n} là số nào?` : `Số liền sau của ${n} là số nào?`

  const wrongPool = new Set()
  while (wrongPool.size < 3) {
    const candidate = answer + randInt(-3, 3)
    if (candidate !== answer && candidate >= 0 && candidate <= max + 1) wrongPool.add(candidate)
  }
  const options = shuffle([answer, ...wrongPool]).map((v) => ({ label: String(v), value: v }))
  return { prompt, answer, options }
}

function renderPrompt(current) {
  return <p className="qgame__prompt">{current.prompt}</p>
}

export default function LienTruocLienSauGame({ onExit, grade = 1 }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="lien-truoc-lien-sau"
      icon="🔁"
      title="Số liền trước – liền sau"
      subtitle="Tìm đúng số liền trước hoặc liền sau của một số cho trước."
      rounds={ROUNDS}
      bestKey={`toan-l${grade}-game-lien-truoc-sau-best`}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
      grade={grade}
    />
  )
}
