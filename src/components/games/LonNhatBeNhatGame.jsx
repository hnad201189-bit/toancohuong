import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8
const BEST_KEY = 'toan-l1-game-lon-be-nhat-best'

function makeRound(round) {
  // Vòng đầu 4 số trong 0-20, càng chơi càng nhiều số hơn và số lớn hơn (0-40).
  const harder = round >= 3
  const count = harder ? 5 : 4
  const max = harder ? 40 : 20
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

export default function LonNhatBeNhatGame({ onExit }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="lon-be-nhat"
      icon="🏆"
      title="Số lớn nhất – số bé nhất"
      subtitle="Chọn đúng số lớn nhất hoặc bé nhất trong nhóm 4 số."
      rounds={ROUNDS}
      bestKey={BEST_KEY}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
    />
  )
}
