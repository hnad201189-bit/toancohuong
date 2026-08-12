import { useEffect, useRef, useState } from 'react'
import { randInt, shuffle } from './gameUtils'

const ROUNDS = 6
const CHIPS_PER_ROUND = 5
const BEST_KEY = 'toan-l1-game-xep-so-best-time'

function makeRound() {
  const nums = new Set()
  while (nums.size < CHIPS_PER_ROUND) nums.add(randInt(0, 20))
  const arr = [...nums]
  const sorted = [...arr].sort((a, b) => a - b)
  const chips = shuffle(arr.map((v, i) => ({ id: i, value: v })))
  return { chips, sorted }
}

export default function XepSoGame({ onExit }) {
  const [roundNum, setRoundNum] = useState(0)
  const [roundData, setRoundData] = useState(makeRound)
  const [doneValues, setDoneValues] = useState(new Set())
  const [wrongFlashId, setWrongFlashId] = useState(null)
  const [mistakes, setMistakes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState(() => {
    const v = localStorage.getItem(BEST_KEY)
    return v ? Number(v) : null
  })
  const timerRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [running])

  function finishGame() {
    setRunning(false)
    setFinished(true)
    if (best === null || seconds < best) {
      setBest(seconds)
      localStorage.setItem(BEST_KEY, String(seconds))
    }
  }

  function click(chip) {
    if (finished || wrongFlashId !== null || doneValues.has(chip.value)) return
    const nextExpected = roundData.sorted[doneValues.size]
    if (chip.value === nextExpected) {
      const newDone = new Set(doneValues)
      newDone.add(chip.value)
      setDoneValues(newDone)
      if (newDone.size === roundData.chips.length) {
        if (roundNum + 1 >= ROUNDS) {
          setTimeout(finishGame, 500)
        } else {
          setTimeout(() => {
            setRoundNum((r) => r + 1)
            setRoundData(makeRound())
            setDoneValues(new Set())
          }, 500)
        }
      }
    } else {
      setMistakes((m) => m + 1)
      setWrongFlashId(chip.id)
      setTimeout(() => setWrongFlashId(null), 400)
    }
  }

  function playAgain() {
    setRoundNum(0)
    setRoundData(makeRound())
    setDoneValues(new Set())
    setWrongFlashId(null)
    setMistakes(0)
    setSeconds(0)
    setRunning(true)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="screen game-screen">
        <button className="breadcrumb" onClick={onExit}>
          ← Trò chơi
        </button>
        <div className="card game-result">
          <h2>🎉 Xếp xong hết rồi!</h2>
          <p className="game-result__score">
            Thời gian: <strong>{seconds}s</strong> — Sai {mistakes} lần
          </p>
          {best !== null && <p className="game-result__best">Thời gian nhanh nhất: {best}s</p>}
          <div className="game-result__actions">
            <button className="btn btn--primary" onClick={playAgain}>
              🔁 Chơi lại
            </button>
            <button className="btn btn--ghost" onClick={onExit}>
              Về Trò chơi
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="screen game-screen">
      <button className="breadcrumb" onClick={onExit}>
        ← Trò chơi
      </button>
      <header className="screen__header">
        <h1>🪜 Xếp số theo thứ tự</h1>
        <p className="screen__subtitle">Chạm vào các số theo thứ tự từ bé đến lớn.</p>
      </header>

      <div className="game-hud">
        <span>Vòng {roundNum + 1} / {ROUNDS}</span>
        <span>⏱ {seconds}s</span>
        <span>Sai: {mistakes}</span>
      </div>

      <div className="card xep-so__stage">
        <p className="xep-so__hint">
          Đã xếp {doneValues.size} / {roundData.chips.length}
        </p>
        <div className="xep-so__row">
          {roundData.chips.map((chip) => {
            let state = ''
            if (doneValues.has(chip.value)) state = 'is-done'
            else if (wrongFlashId === chip.id) state = 'is-wrong'
            return (
              <button
                key={chip.id}
                className={`xep-so__chip ${state}`}
                onClick={() => click(chip)}
                disabled={doneValues.has(chip.value)}
              >
                {chip.value}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
