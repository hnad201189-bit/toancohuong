import { Routes, Route } from 'react-router-dom'
import MainSite from './MainSite'
import AdminApp from './admin/AdminApp'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainSite />} />
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  )
}

export default App
