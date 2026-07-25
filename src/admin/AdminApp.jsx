import { Routes, Route } from 'react-router-dom'
import { useAdminAuth } from './useAdminAuth'
import AdminLogin from './AdminLogin'
import AdminLayout from './AdminLayout'
import AdminAreasPage from './AdminAreasPage'
import AdminAreaTopicsPage from './AdminAreaTopicsPage'
import AdminHsgPage from './AdminHsgPage'
import AdminLessonEditorPage from './AdminLessonEditorPage'
import AdminImportPage from './AdminImportPage'
import AdminTutorsPage from './AdminTutorsPage'
import AdminContactRequestsPage from './AdminContactRequestsPage'

export default function AdminApp() {
  const { status, error, login, logout } = useAdminAuth()

  if (status === 'checking') {
    return (
      <div className="admin-login">
        <p>Đang kiểm tra phiên đăng nhập…</p>
      </div>
    )
  }

  if (status === 'anon') {
    return <AdminLogin onLogin={login} error={error} />
  }

  return (
    <Routes>
      <Route element={<AdminLayout onLogout={logout} />}>
        <Route index element={<AdminAreasPage />} />
        <Route path="areas/:areaId" element={<AdminAreaTopicsPage />} />
        <Route path="hsg" element={<AdminHsgPage />} />
        <Route path="import" element={<AdminImportPage />} />
        <Route path="tutors" element={<AdminTutorsPage />} />
        <Route path="contact-requests" element={<AdminContactRequestsPage />} />
        <Route path="topics/:topicId/lesson" element={<AdminLessonEditorPage />} />
      </Route>
    </Routes>
  )
}
