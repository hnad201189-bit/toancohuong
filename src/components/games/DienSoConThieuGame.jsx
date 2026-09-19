import RoundsQuizGame from './RoundsQuizGame'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 8

// Dựng 1 vòng chơi từ điểm bắt đầu + bước nhảy: sinh dãy 5 số, giấu 1 số ở
// giữa, rồi chọn 3 số nhiễu hợp lệ quanh đáp án (không trùng dãy, không âm).
function buildRound(start, step, wrongSpread) {
  const sequence = [start, start + step, start + 2 * step, start + 3 * step, start + 4 * step]
  const missingIndex = randInt(1, 3)
  const answer = sequence[missingIndex]

  const candidatePool = []
  for (let delta = -wrongSpread; delta <= wrongSpread; delta++) {
    if (delta === 0) continue
    const candidate = answer + delta
    if (candidate >= 0 && !sequence.includes(candidate)) candidatePool.push(candidate)
  }
  const wrongPool = shuffle(candidatePool).slice(0, 3)
  const options = shuffle([answer, ...wrongPool]).map((v) => ({ label: String(v), value: v }))
  return { sequence, missingIndex, answer, options }
}

function makeRoundL1(round) {
  // Vòng đầu đếm cách 1 (0-19), càng chơi càng đếm cách quãng 2 cho khó hơn.
  const step = round >= 3 ? 2 : 1
  const maxStart = step === 2 ? 10 : 15
  const start = randInt(0, maxStart)
  return buildRound(start, step, 8)
}

function makeRoundL2(round) {
  // Đếm cách theo các bước hay gặp ở lớp 2 (1, 2, 5, 10), phạm vi tới 1000 —
  // vòng đầu bước nhỏ/phạm vi nhỏ, càng chơi bước càng lớn/phạm vi càng rộng.
  const steps = round >= 5 ? [2, 5, 10] : round >= 2 ? [1, 2, 5] : [1, 2]
  const step = steps[randInt(0, steps.length - 1)]
  const maxStart = round >= 5 ? 900 : round >= 2 ? 300 : 50
  const start = randInt(0, maxStart)
  // Làm tròn điểm bắt đầu về bội số của step để dãy vẫn "đẹp" (ví dụ bước 10
  // luôn rơi vào các chục tròn: 120, 130, 140...).
  const roundedStart = start - (start % step)
  return buildRound(roundedStart, step, Math.max(8, step * 3))
}

function makeRoundL3(round) {
  // Lớp 3: bước nhảy lớn hơn (10, 100, 1000...) và phạm vi tới 100 000,
  // đúng mạch "làm tròn số, ước lượng" + đếm cách quãng của chương trình.
  const steps = round >= 5 ? [100, 1000] : round >= 2 ? [10, 100] : [5, 10]
  const step = steps[randInt(0, steps.length - 1)]
  const maxStart = round >= 5 ? 90000 : round >= 2 ? 9000 : 900
  const start = randInt(0, maxStart)
  const roundedStart = start - (start % step)
  return buildRound(roundedStart, step, Math.max(8, step * 3))
}

function makeRound(round, grade = 1) {
  if (grade >= 3) return makeRoundL3(round)
  return grade === 2 ? makeRoundL2(round) : makeRoundL1(round)
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

export default function DienSoConThieuGame({ onExit, grade = 1 }) {
  return (
    <RoundsQuizGame
      onExit={onExit}
      gameId="dien-so-thieu"
      icon="🧩"
      title="Điền số còn thiếu"
      subtitle="Tìm đúng số còn thiếu trong dãy số đếm."
      rounds={ROUNDS}
      bestKey={`toan-l${grade}-game-dien-so-thieu-best`}
      makeRound={makeRound}
      renderPrompt={renderPrompt}
      grade={grade}
    />
  )
}
