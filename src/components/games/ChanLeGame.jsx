import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8

function makeRound(round, grade = 1) {
  // Lớp 1: số nhỏ (0-20 rồi 0-30). Lớp 2: phạm vi 1000 (0-200 rồi 0-999).
  const n = grade >= 2 ? randInt(0, round >= 3 ? 999 : 200) : randInt(0, round >= 3 ? 30 : 20)
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
