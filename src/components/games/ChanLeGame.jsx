import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8
const BEST_KEY = 'toan-l1-game-chan-le-best'

function makeRound(round) {
  // Vòng đầu số nhỏ (0-20), càng chơi số càng lớn (0-30) cho khó hơn.
  const n = randInt(0, round >= 3 ? 30 : 20)
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

export default function ChanLeGame({ onExit }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="chan-le"
      icon="🔵"
      title="Chẵn hay lẻ?"
      subtitle="Đoán xem số đó là số chẵn hay số lẻ."
      rounds={ROUNDS}
      bestKey={BEST_KEY}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
    />
  )
}
