import { useState } from 'react'
import TutorBrowse from './TutorBrowse'
import TutorRegisterForm from './TutorRegisterForm'

export default function TutorFinder({ onBack }) {
  const [tab, setTab] = useState('browse')

  return (
    <div className="screen tutor-finder">
      <button className="breadcrumb" onClick={onBack}>
        ← Tổng quan
      </button>

      <header className="screen__header">
        <h1>🎓 Tìm gia sư</h1>
        <p className="screen__subtitle">
          Kết nối với gia sư Toán phù hợp gần bạn, hoặc đăng ký trở thành gia sư.
        </p>
      </header>

      <div className="lesson__tabs">
        <button className={`lesson__tab ${tab === 'browse' ? 'is-active' : ''}`} onClick={() => setTab('browse')}>
          Tìm gia sư
        </button>
        <button
          className={`lesson__tab ${tab === 'register' ? 'is-active' : ''}`}
          onClick={() => setTab('register')}
        >
          Đăng ký làm gia sư
        </button>
      </div>

      {tab === 'browse' ? <TutorBrowse /> : <TutorRegisterForm onDone={() => setTab('browse')} />}
    </div>
  )
}
