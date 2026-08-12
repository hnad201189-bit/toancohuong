import { useState } from 'react'
import DemHinhGame from './DemHinhGame'
import GhepSoGame from './GhepSoGame'
import AiNhanhAiDungGame from './AiNhanhAiDungGame'
import SoSanhSoGame from './SoSanhSoGame'
import ChanLeGame from './ChanLeGame'
import LienTruocLienSauGame from './LienTruocLienSauGame'
import LonNhatBeNhatGame from './LonNhatBeNhatGame'
import NhanDienHinhGame from './NhanDienHinhGame'
import DienSoConThieuGame from './DienSoConThieuGame'
import DungSaiGame from './DungSaiGame'
import GhepChuSoGame from './GhepChuSoGame'
import XepSoGame from './XepSoGame'
import TriNhoSoGame from './TriNhoSoGame'

const GAME_LIST = [
  { id: 'dem-hinh', icon: '🔢', name: 'Đếm hình vui', desc: 'Đếm số hình rồi chọn đúng đáp số.' },
  { id: 'ghep-so', icon: '🔗', name: 'Ghép số', desc: 'Ghép phép tính với kết quả đúng của nó.' },
  { id: 'ai-nhanh', icon: '⏱', name: 'Ai nhanh ai đúng', desc: 'Trả lời thật nhanh phép cộng, trừ trong 30 giây.' },
  { id: 'so-sanh-so', icon: '⚖️', name: 'So sánh số', desc: 'Chọn đúng dấu >, < hoặc = giữa hai số.' },
  { id: 'chan-le', icon: '🔵', name: 'Chẵn hay lẻ?', desc: 'Đoán xem số đó là số chẵn hay số lẻ.' },
  { id: 'lien-truoc-lien-sau', icon: '🔁', name: 'Số liền trước – liền sau', desc: 'Tìm đúng số liền trước hoặc liền sau.' },
  { id: 'lon-be-nhat', icon: '🏆', name: 'Số lớn nhất – số bé nhất', desc: 'Chọn số lớn nhất hoặc bé nhất trong nhóm 4 số.' },
  { id: 'nhan-dien-hinh', icon: '🔺', name: 'Nhận diện hình khối', desc: 'Nhìn hình và chọn đúng tên của hình đó.' },
  { id: 'dien-so-thieu', icon: '🧩', name: 'Điền số còn thiếu', desc: 'Tìm đúng số còn thiếu trong dãy số đếm.' },
  { id: 'dung-sai', icon: '✅', name: 'Đúng hay sai?', desc: 'Phép tính đúng hay sai? Trả lời thật nhanh trong 30 giây.' },
  { id: 'ghep-chu-so', icon: '🔤', name: 'Ghép số với chữ số', desc: 'Ghép chữ số với tên gọi bằng chữ của nó.' },
  { id: 'xep-so', icon: '🪜', name: 'Xếp số theo thứ tự', desc: 'Chạm vào các số theo thứ tự từ bé đến lớn.' },
  { id: 'tri-nho-so', icon: '🧠', name: 'Trí nhớ số', desc: 'Lật 2 thẻ để tìm cặp số giống nhau.' },
]

export default function Games({ onBack }) {
  const [active, setActive] = useState(null)

  if (active === 'dem-hinh') return <DemHinhGame onExit={() => setActive(null)} />
  if (active === 'ghep-so') return <GhepSoGame onExit={() => setActive(null)} />
  if (active === 'ai-nhanh') return <AiNhanhAiDungGame onExit={() => setActive(null)} />
  if (active === 'so-sanh-so') return <SoSanhSoGame onExit={() => setActive(null)} />
  if (active === 'chan-le') return <ChanLeGame onExit={() => setActive(null)} />
  if (active === 'lien-truoc-lien-sau') return <LienTruocLienSauGame onExit={() => setActive(null)} />
  if (active === 'lon-be-nhat') return <LonNhatBeNhatGame onExit={() => setActive(null)} />
  if (active === 'nhan-dien-hinh') return <NhanDienHinhGame onExit={() => setActive(null)} />
  if (active === 'dien-so-thieu') return <DienSoConThieuGame onExit={() => setActive(null)} />
  if (active === 'dung-sai') return <DungSaiGame onExit={() => setActive(null)} />
  if (active === 'ghep-chu-so') return <GhepChuSoGame onExit={() => setActive(null)} />
  if (active === 'xep-so') return <XepSoGame onExit={() => setActive(null)} />
  if (active === 'tri-nho-so') return <TriNhoSoGame onExit={() => setActive(null)} />

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
