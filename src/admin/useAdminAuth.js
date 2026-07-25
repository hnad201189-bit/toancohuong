import { useEffect, useState } from 'react'
import { getToken, setToken, clearToken, login as apiLogin, logout as apiLogout, checkAuth } from '../api/client'

export function useAdminAuth() {
  const [status, setStatus] = useState('checking') // checking | authed | anon
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setStatus('anon')
      return
    }
    checkAuth()
      .then(() => setStatus('authed'))
      .catch(() => {
        clearToken()
        setStatus('anon')
      })
  }, [])

  async function login(password) {
    setError(null)
    try {
      const { token } = await apiLogin(password)
      setToken(token)
      setStatus('authed')
      return true
    } catch (e) {
      setError(e.message)
      return false
    }
  }

  async function logout() {
    try {
      await apiLogout()
    } catch {
      // ignore network errors on logout
    }
    clearToken()
    setStatus('anon')
  }

  return { status, error, login, logout }
}
