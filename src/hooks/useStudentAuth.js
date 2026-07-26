import { useCallback, useEffect, useState } from 'react'
import {
  getStudentToken,
  setStudentToken,
  clearStudentToken,
  registerStudent,
  loginStudent,
  logoutStudent,
  getStudentMe,
} from '../api/client'

export function useStudentAuth() {
  const [student, setStudent] = useState(null) // { id, name, phone, status, createdAt }
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(() => {
    if (!getStudentToken()) {
      setStudent(null)
      setLoading(false)
      return
    }
    getStudentMe()
      .then(({ student }) => setStudent(student))
      .catch(() => {
        clearStudentToken()
        setStudent(null)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(refresh, [refresh])

  async function register(data) {
    const { token, student } = await registerStudent(data)
    setStudentToken(token)
    setStudent(student)
  }

  async function login(data) {
    const { token, student } = await loginStudent(data)
    setStudentToken(token)
    setStudent(student)
  }

  async function logout() {
    try {
      await logoutStudent()
    } catch {
      // ignore network errors on logout
    }
    clearStudentToken()
    setStudent(null)
  }

  return { student, loading, register, login, logout, refresh }
}
