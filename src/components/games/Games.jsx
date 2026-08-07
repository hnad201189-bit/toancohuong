import { useState } from 'react'
import DemHinhGame from './DemHinhGame'
import GhepSoGame from './GhepSoGame'
import AiNhanhAiDungGame from './AiNhanhAiDungGame'

const GAME_LIST = [
  { id: 'dem-hinh', icon: '🔢', name: 'Đếm hình vui', desc: 'Đếm số hình rồi chọn đúng đáp số.' },
  { id: 'ghep-so', icon: '🔗', name: 'Ghép số', desc: 'Ghép phép tính với kết quả đúng của nó.' },
  { id: 'ai-nhanh', icon: '⏱', name: 'Ai nhanh ai đúng', desc: 'Trả lời thật nhanh phép cộng, trừ trong 30 giây.' },
]

export default function Games({ onBack }) {
  const [active, setActive] = useState(null)

  if (active === 'dem-hinh') return <DemHinhGame onExit={() => setActive(null)} />
  if (active === 'ghep-so') return <GhepSoGame onExit={() => setActive(null)} />
  if (active === 'ai-nhanh') return <AiNhanhAiDungGame onExit={() => setActive(null)} />

  return (
    <div className="screen">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>
      <header className="screen__header">
        <h1>🎮 Trò chơi Toán lớp 1</h1>
        <p className="screen__subtitle">Vừa chơi vừa luyện đếm, cộng, trừ trong phạm vi 10.</p>
      </header>

      <div className="grid-areas">
        {GAME_LIST.map((g) => (
          <button key={g.id} className="area-card game-card" onClick={() => setActive(g.id)}>
            <span className="game-card__icon">{g.icon}</span>
            <h3 className="area-card__name">{g.name}</h3>
            <p className="area-card__desc">{g.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
