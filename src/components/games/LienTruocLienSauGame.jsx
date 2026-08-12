import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8
const BEST_KEY = 'toan-l1-game-lien-truoc-sau-best'

function makeRound() {
  const n = randInt(1, 19)
  const isBefore = Math.random() < 0.5
  const answer = isBefore ? n - 1 : n + 1
  const prompt = isBefore ? `Số liền trước của ${n} là số nào?` : `Số liền sau của ${n} là số nào?`

  const wrongPool = new Set()
  while (wrongPool.size < 3) {
    const candidate = answer + randInt(-3, 3)
    if (candidate !== answer && candidate >= 0 && candidate <= 20) wrongPool.add(candidate)
  }
  const options = shuffle([answer, ...wrongPool]).map((v) => ({ label: String(v), value: v }))
  return { prompt, answer, options }
}

function renderPrompt(current) {
  return <p className="qgame__prompt">{current.prompt}</p>
}

export default function LienTruocLienSauGame({ onExit }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      icon="🔁"
      title="Số liền trước – liền sau"
      subtitle="Tìm đúng số liền trước hoặc liền sau của một số cho trước."
      rounds={ROUNDS}
      bestKey={BEST_KEY}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
    />
  )
}
