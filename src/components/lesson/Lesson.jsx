import { useState } from 'react'
import LyThuyet from './LyThuyet'
import Video from './Video'
import TracNghiem from './TracNghiem'
import TuLuan from './TuLuan'
import Flashcard from './Flashcard'
import DeKiemTra from './DeKiemTra'
import PracticeBank from './PracticeBank'

const TABS = [
  { id: 'ly-thuyet', label: 'Lý thuyết' },
  { id: 'video', label: 'Video' },
  { id: 'trac-nghiem', label: 'Trắc nghiệm' },
  { id: 'tu-luan', label: 'Tự luận' },
  { id: 'luyen-tap', label: 'Luyện tập' },
  { id: 'flashcard', label: 'Flashcard' },
  { id: 'de-kiem-tra', label: 'Đề kiểm tra' },
]

export default function Lesson({ lesson, areaName, onBack }) {
  const [tab, setTab] = useState('ly-thuyet')
  const hasPracticeBank = lesson.practiceBank?.length > 0
  const visibleTabs = TABS.filter((t) => t.id !== 'luyen-tap' || hasPracticeBank)

  return (
    <div className="screen lesson">
      <button className="breadcrumb" onClick={onBack}>
        ← {areaName}
      </button>

      <header className="lesson__header">
        <h1>{lesson.title}</h1>
        <span className="badge badge--sample">BÀI HỌC MẪU</span>
      </header>

      <div className="lesson__tabs">
        {visibleTabs.map((t) => (
          <button
            key={t.id}
            className={`lesson__tab ${tab === t.id ? 'is-active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="lesson__content">
        {tab === 'ly-thuyet' && <LyThuyet theory={lesson.theory} />}
        {tab === 'video' && <Video video={lesson.video} />}
        {tab === 'trac-nghiem' && <TracNghiem quiz={lesson.quiz} />}
        {tab === 'tu-luan' && <TuLuan essays={lesson.essays} />}
        {tab === 'luyen-tap' && hasPracticeBank && <PracticeBank items={lesson.practiceBank} />}
        {tab === 'flashcard' && <Flashcard cards={lesson.flashcards} />}
        {tab === 'de-kiem-tra' && <DeKiemTra exam={lesson.exam} />}
      </div>
    </div>
  )
}
