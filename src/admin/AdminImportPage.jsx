import { useEffect, useState } from 'react'
import { getAreas } from '../api/client'
import * as api from '../api/client'
import ImportSection from './ImportSection'

export default function AdminImportPage() {
  const [areas, setAreas] = useState(null)
  const [error, setError] = useState(null)

  function reload() {
    getAreas()
      .then(setAreas)
      .catch((e) => setError(e.message))
  }

  useEffect(reload, [])

  if (error) return <p className="admin-error">{error}</p>
  if (!areas) return <p>Đang tải…</p>

  return (
    <div className="admin-page">
      <h1>Nhập dữ liệu hàng loạt</h1>
      <p>
        Tải lên file CSV hoặc JSON để thêm nhiều mảng kiến thức, chuyên đề, câu hỏi hoặc flashcard cùng lúc.
        Với file Excel, dùng <strong>Save As → CSV (UTF-8)</strong> rồi tải file .csv lên. Dòng đầu tiên của
        CSV phải là tên cột đúng như liệt kê bên dưới mỗi mục.
      </p>

      <ImportSection
        title="Mảng kiến thức"
        hint="Thêm hoặc cập nhật các mảng kiến thức lớn (VD: Đại số, Lượng giác...). Trùng tên sẽ được cập nhật thay vì tạo mới."
        columns={['name', 'description', 'progress']}
        areas={areas}
        onSubmit={(rows) => api.importAreas(rows)}
        onImported={reload}
      />

      <ImportSection
        title="Chuyên đề trong một mảng kiến thức"
        hint="Thêm nhiều chuyên đề cùng lúc vào một mảng kiến thức đã chọn."
        columns={['name', 'progress']}
        needsArea
        areas={areas}
        onSubmit={(rows, { areaId }) => api.importTopics(areaId, rows)}
        onImported={reload}
      />

      <ImportSection
        title="Chuyên đề Ôn thi HSG"
        hint="Thêm nhiều chuyên đề HSG / chuyên cùng lúc."
        columns={['name', 'progress']}
        areas={areas}
        onSubmit={(rows) => api.importHsgTopics(rows)}
        onImported={reload}
      />

      <ImportSection
        title="Câu hỏi trắc nghiệm"
        hint="Thêm nhiều câu trắc nghiệm vào bài học của một chuyên đề. Cột correct nhận A/B/C/D (đáp án đúng)."
        columns={['question', 'option_a', 'option_b', 'option_c', 'option_d', 'correct']}
        needsArea
        needsTopic
        needsTitle
        areas={areas}
        onSubmit={(rows, { topicId, title }) => api.importQuiz(topicId, rows, title)}
        onImported={reload}
      />

      <ImportSection
        title="Flashcard"
        hint="Thêm nhiều flashcard công thức vào bài học của một chuyên đề. Cột back có thể chứa công thức KaTeX."
        columns={['front', 'back']}
        needsArea
        needsTopic
        needsTitle
        areas={areas}
        onSubmit={(rows, { topicId, title }) => api.importFlashcards(topicId, rows, title)}
        onImported={reload}
      />
    </div>
  )
}
