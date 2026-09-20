import { useState } from 'react'
import { getProgress, getEarnedBadgeIds, BADGES } from './progress'
import { useStudentAuth } from '../../hooks/useStudentAuth'
import AccountPanel from '../AccountPanel'
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

function getGameList(grade) {
  return [
    { id: 'dem-hinh', icon: '🔢', name: 'Đếm hình vui', desc: 'Đếm số hình rồi chọn đúng đáp số.' },
    { id: 'ghep-so', icon: '🔗', name: 'Ghép số', desc: 'Ghép phép tính với kết quả đúng của nó.' },
    {
      id: 'ai-nhanh',
      icon: '⏱',
      name: 'Ai nhanh ai đúng',
      desc:
        grade >= 2
          ? 'Trả lời thật nhanh phép cộng, trừ, nhân, chia trong 30 giây.'
          : 'Trả lời thật nhanh phép cộng, trừ trong 30 giây.',
    },
    { id: 'so-sanh-so', icon: '⚖️', name: 'So sánh số', desc: 'Chọn đúng dấu >, < hoặc = giữa hai số.' },
    { id: 'chan-le', icon: '🔵', name: 'Chẵn hay lẻ?', desc: 'Đoán xem số đó là số chẵn hay số lẻ.' },
    { id: 'lien-truoc-lien-sau', icon: '🔁', name: 'Số liền trước – liền sau', desc: 'Tìm đúng số liền trước hoặc liền sau.' },
    {
      id: 'lon-be-nhat',
      icon: '🏆',
      name: 'Số lớn nhất – số bé nhất',
      desc: `Chọn số lớn nhất hoặc bé nhất trong nhóm ${grade >= 2 ? '4-6' : '4'} số.`,
    },
    { id: 'nhan-dien-hinh', icon: '🔺', name: 'Nhận diện hình khối', desc: 'Nhìn hình và chọn đúng tên của hình đó.' },
    { id: 'dien-so-thieu', icon: '🧩', name: 'Điền số còn thiếu', desc: 'Tìm đúng số còn thiếu trong dãy số đếm.' },
    {
      id: 'dung-sai',
      icon: '✅',
      name: 'Đúng hay sai?',
      desc:
        grade >= 2
          ? 'Phép cộng, trừ, nhân, chia đúng hay sai? Trả lời thật nhanh trong 30 giây.'
          : 'Phép tính đúng hay sai? Trả lời thật nhanh trong 30 giây.',
    },
    { id: 'ghep-chu-so', icon: '🔤', name: 'Ghép số với chữ số', desc: 'Ghép chữ số với tên gọi bằng chữ của nó.' },
    { id: 'xep-so', icon: '🪜', name: 'Xếp số theo thứ tự', desc: 'Chạm vào các số theo thứ tự từ bé đến lớn.' },
    { id: 'tri-nho-so', icon: '🧠', name: 'Trí nhớ số', desc: 'Lật 2 thẻ để tìm cặp số giống nhau.' },
  ]
}

export default function Games({ onBack, grade = 1 }) {
  const { student, loading, register, login, logout } = useStudentAuth()
  const [active, setActive] = useState(null)
  const [progress, setProgress] = useState(() => getProgress())
  const [newBadges, setNewBadges] = useState([])

  // Mỗi khi thoát khỏi 1 trò (dù chơi xong hay bỏ giữa chừng), đọc lại tiến
  // trình từ localStorage — nếu vừa chơi xong, recordSession() trong trò con
  // đã ghi trước đó rồi, ở đây chỉ cần so sánh huy hiệu cũ/mới để báo mở khoá.
  function exitGame() {
    const prevEarned = new Set(getEarnedBadgeIds(progress))
    const fresh = getProgress()
    const freshEarned = getEarnedBadgeIds(fresh)
    const justUnlocked = BADGES.filter((b) => freshEarned.includes(b.id) && !prevEarned.has(b.id))
    setProgress(fresh)
    setActive(null)
    if (justUnlocked.length > 0) {
      setNewBadges(justUnlocked)
      setTimeout(() => setNewBadges([]), 4500)
    }
  }

  if (loading) {
    return (
      <div className="screen">
        <button className="breadcrumb" onClick={onBack}>
          ← Tổng quan
        </button>
        <p>Đang tải…</p>
      </div>
    )
  }

  if (!student) {
    return (
      <div className="screen">
        <button className="breadcrumb" onClick={onBack}>
          ← Tổng quan
        </button>
        <header className="screen__header">
          <h1>🎮 Trò chơi Toán lớp {grade}</h1>
          <p className="screen__subtitle">Đăng nhập để chơi và lưu lại kết quả, streak, huy hiệu của con.</p>
        </header>
        <AccountPanel student={student} onRegister={register} onLogin={login} onLogout={logout} />
      </div>
    )
  }

  if (active === 'dem-hinh') return <DemHinhGame onExit={exitGame} grade={grade} />
  if (active === 'ghep-so') return <GhepSoGame onExit={exitGame} grade={grade} />
  if (active === 'ai-nhanh') return <AiNhanhAiDungGame onExit={exitGame} grade={grade} />
  if (active === 'so-sanh-so') return <SoSanhSoGame onExit={exitGame} grade={grade} />
  if (active === 'chan-le') return <ChanLeGame onExit={exitGame} grade={grade} />
  if (active === 'lien-truoc-lien-sau') return <LienTruocLienSauGame onExit={exitGame} grade={grade} />
  if (active === 'lon-be-nhat') return <LonNhatBeNhatGame onExit={exitGame} grade={grade} />
  if (active === 'nhan-dien-hinh') return <NhanDienHinhGame onExit={exitGame} grade={grade} />
  if (active === 'dien-so-thieu') return <DienSoConThieuGame onExit={exitGame} grade={grade} />
  if (active === 'dung-sai') return <DungSaiGame onExit={exitGame} grade={grade} />
  if (active === 'ghep-chu-so') return <GhepChuSoGame onExit={exitGame} grade={grade} />
  if (active === 'xep-so') return <XepSoGame onExit={exitGame} grade={grade} />
  if (active === 'tri-nho-so') return <TriNhoSoGame onExit={exitGame} grade={grade} />

  const earnedIds = getEarnedBadgeIds(progress)

  return (
    <div className="screen">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>
      <header className="screen__header">
        <h1>🎮 Trò chơi Toán lớp {grade}</h1>
        <p className="screen__subtitle">
          {grade >= 5
            ? 'Vừa chơi vừa ôn tập tổng hợp cộng, trừ, nhân, chia với số tự nhiên lớn.'
            : grade === 4
              ? 'Vừa chơi vừa luyện cộng, trừ, nhân, chia với số tự nhiên lớn (lớp triệu).'
              : grade === 3
                ? 'Vừa chơi vừa luyện cộng, trừ, nhân, chia trong phạm vi 100 000.'
                : grade === 2
                  ? 'Vừa chơi vừa luyện cộng, trừ, nhân, chia trong phạm vi 1000.'
                  : 'Vừa chơi vừa luyện đếm, cộng, trừ trong phạm vi 10.'}
        </p>
      </header>

      {newBadges.length > 0 && (
        <div className="badge-toast">
          {newBadges.map((b) => (
            <span key={b.id}>
              {b.icon} Mở khoá huy hiệu mới: <strong>{b.name}</strong>!
            </span>
          ))}
        </div>
      )}

      <div className="progress-banner">
        <div className="progress-banner__streak">
          {progress.streak > 0 ? (
            <>
              🔥 <strong>{progress.streak}</strong> ngày chơi liên tiếp
            </>
          ) : (
            'Chơi hôm nay để bắt đầu chuỗi ngày liên tiếp nhé!'
          )}
        </div>
        <div className="progress-banner__badges">
          {BADGES.map((b) => (
            <div key={b.id} className={`badge ${earnedIds.includes(b.id) ? 'is-earned' : 'is-locked'}`} title={b.desc}>
              <span className="badge__icon">{b.icon}</span>
              <span className="badge__name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-areas">
        {getGameList(grade).map((g) => (
          <button key={g.id} className="area-card game-card" onClick={() => setActive(g.id)}>
            {progress.completedGames.includes(g.id) && <span className="game-card__check">✓</span>}
            <span className="game-card__icon">{g.icon}</span>
            <h3 className="area-card__name">{g.name}</h3>
            <p className="area-card__desc">{g.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
