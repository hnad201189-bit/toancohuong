const TOKEN_KEY = 'toan11-admin-token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
}

async function request(path, { method = 'GET', body, auth = false } = {}) {
  const headers = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (auth) {
    const token = getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`/api${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  const data = await res.json().catch(() => null)
  if (!res.ok) {
    throw new Error(data?.error || `Lỗi máy chủ (${res.status})`)
  }
  return data
}

// ---- Photo solve (image upload, not JSON) ----
export async function solveImage(file) {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('/api/solve-image', { method: 'POST', body: formData })
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    throw new Error(data?.error || `Lỗi máy chủ (${res.status})`)
  }
  return data
}

// ---- Public reads ----
export const getAreas = () => request('/areas')
export const getArea = (id) => request(`/areas/${id}`)
export const getHsgTopics = () => request('/hsg-topics')
export const getLesson = (topicId) => request(`/topics/${topicId}/lesson`)

// ---- Tutors (gia sư) ----
export const getTutors = (filters = {}) => {
  const params = new URLSearchParams(Object.entries(filters).filter(([, v]) => v))
  const qs = params.toString()
  return request(`/tutors${qs ? `?${qs}` : ''}`)
}
export const registerTutor = (data) => request('/tutors', { method: 'POST', body: data })
export const getAllTutorsAdmin = () => request('/tutors/all', { auth: true })
export const updateTutor = (id, data) => request(`/tutors/${id}`, { method: 'PUT', body: data, auth: true })
export const deleteTutor = (id) => request(`/tutors/${id}`, { method: 'DELETE', auth: true })
export const requestTutorContact = (tutorId, data) =>
  request(`/tutors/${tutorId}/contact-request`, { method: 'POST', body: data })
export const getContactRequests = () => request('/contact-requests', { auth: true })
export const updateContactRequest = (id, data) =>
  request(`/contact-requests/${id}`, { method: 'PUT', body: data, auth: true })

// ---- Auth ----
export const login = (password) => request('/auth/login', { method: 'POST', body: { password } })
export const logout = () => request('/auth/logout', { method: 'POST', auth: true })
export const checkAuth = () => request('/auth/check', { auth: true })

// ---- Admin writes (areas) ----
export const createArea = (data) => request('/areas', { method: 'POST', body: data, auth: true })
export const updateArea = (id, data) => request(`/areas/${id}`, { method: 'PUT', body: data, auth: true })
export const deleteArea = (id) => request(`/areas/${id}`, { method: 'DELETE', auth: true })

// ---- Admin writes (topics) ----
export const createTopic = (areaId, data) =>
  request(`/areas/${areaId}/topics`, { method: 'POST', body: data, auth: true })
export const updateTopic = (id, data) => request(`/topics/${id}`, { method: 'PUT', body: data, auth: true })
export const deleteTopic = (id) => request(`/topics/${id}`, { method: 'DELETE', auth: true })

// ---- Admin writes (lesson content) ----
export const saveLesson = (topicId, data) =>
  request(`/topics/${topicId}/lesson`, { method: 'PUT', body: data, auth: true })
export const deleteLesson = (topicId) => request(`/topics/${topicId}/lesson`, { method: 'DELETE', auth: true })

// ---- Admin writes (HSG topics) ----
export const createHsgTopic = (data) => request('/hsg-topics', { method: 'POST', body: data, auth: true })
export const updateHsgTopic = (id, data) =>
  request(`/hsg-topics/${id}`, { method: 'PUT', body: data, auth: true })
export const deleteHsgTopic = (id) => request(`/hsg-topics/${id}`, { method: 'DELETE', auth: true })

// ---- Admin writes (bulk import) ----
export const importAreas = (rows) => request('/import/areas', { method: 'POST', body: { rows }, auth: true })
export const importTopics = (areaId, rows) =>
  request(`/import/areas/${areaId}/topics`, { method: 'POST', body: { rows }, auth: true })
export const importHsgTopics = (rows) =>
  request('/import/hsg-topics', { method: 'POST', body: { rows }, auth: true })
export const importQuiz = (topicId, rows, title) =>
  request(`/import/topics/${topicId}/quiz`, { method: 'POST', body: { rows, title }, auth: true })
export const importFlashcards = (topicId, rows, title) =>
  request(`/import/topics/${topicId}/flashcards`, { method: 'POST', body: { rows, title }, auth: true })
