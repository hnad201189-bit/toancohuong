import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8
const BEST_KEY = 'toan-l1-game-dien-so-thieu-best'

function makeRound(round) {
  // Vòng đầu đếm cách 1 (0-19), càng chơi càng đếm cách quãng 2 cho khó hơn.
  const step = round >= 3 ? 2 : 1
  const maxStart = step === 2 ? 10 : 15
  const start = randInt(0, maxStart)
  const sequence = [start, start + step, start + 2 * step, start + 3 * step, start + 4 * step]
  const missingIndex = randInt(1, 3)
  const answer = sequence[missingIndex]
  const ceiling = start + 4 * step + 3

  const wrongPool = new Set()
  while (wrongPool.size < 3) {
    const candidate = answer + randInt(-3, 3)
    if (candidate !== answer && candidate >= 0 && candidate <= ceiling && !sequence.includes(candidate)) {
      wrongPool.add(candidate)
    }
  }
  const options = shuffle([answer, ...wrongPool]).map((v) => ({ label: String(v), value: v }))
  return { sequence, missingIndex, answer, options }
}

function renderPrompt(current) {
  return (
    <p className="qgame__prompt qgame__prompt--sequence">
      {current.sequence.map((v, i) => (
        <span key={i} className={i === current.missingIndex ? 'qgame__blank' : ''}>
          {i === current.missingIndex ? '?' : v}
          {i < current.sequence.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  )
}

export default function DienSoConThieuGame({ onExit }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="dien-so-thieu"
      icon="🧩"
      title="Điền số còn thiếu"
      subtitle="Tìm đúng số còn thiếu trong dãy số đếm."
      rounds={ROUNDS}
      bestKey={BEST_KEY}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
    />
  )
}
