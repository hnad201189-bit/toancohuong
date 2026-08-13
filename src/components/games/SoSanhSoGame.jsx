import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8
const BEST_KEY = 'toan-l1-game-so-sanh-best'

function makeRound(round) {
  // Vòng đầu số nhỏ (0-10), càng chơi số càng lớn (0-20) cho khó hơn.
  const max = round >= 3 ? 20 : 10
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

export default function SoSanhSoGame({ onExit }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="so-sanh-so"
      icon="⚖️"
      title="So sánh số"
      subtitle="Chọn đúng dấu >, < hoặc = giữa hai số."
      rounds={ROUNDS}
      bestKey={BEST_KEY}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
    />
  )
}
