const STORAGE_KEY = 'toan-l1-progress-v1'

export const ALL_GAME_IDS = [
  'dem-hinh',
  'ghep-so',
  'ai-nhanh',
  'so-sanh-so',
  'chan-le',
  'lien-truoc-lien-sau',
  'lon-be-nhat',
  'nhan-dien-hinh',
  'dien-so-thieu',
  'dung-sai',
  'ghep-chu-so',
  'xep-so',
  'tri-nho-so',
]

export const BADGES = [
  {
    id: 'first-game',
    icon: '🌟',
    name: 'Người mới bắt đầu',
    desc: 'Chơi xong 1 trò chơi',
    check: (s) => s.totalSessions >= 1,
  },
  {
    id: 'today-5',
    icon: '⚡',
    name: 'Siêu tốc',
    desc: 'Chơi 5 trò trong 1 ngày',
    check: (s) => s.playedToday.length >= 5,
  },
  {
    id: 'streak-3',
    icon: '🔥',
    name: 'Chăm chỉ',
    desc: 'Chơi 3 ngày liên tiếp',
    check: (s) => s.streak >= 3,
  },
  {
    id: 'streak-7',
    icon: '💎',
    name: 'Kiên trì',
    desc: 'Chơi 7 ngày liên tiếp',
    check: (s) => s.streak >= 7,
  },
  {
    id: 'all-games',
    icon: '🏆',
    name: 'Nhà thám hiểm',
    desc: 'Chơi thử cả 13 trò',
    check: (s) => ALL_GAME_IDS.every((id) => s.completedGames.includes(id)),
  },
]

function dateKey(offsetDays = 0) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

function emptyState() {
  return { lastPlayedDate: null, streak: 0, playedToday: [], completedGames: [], totalSessions: 0 }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyState()
    return { ...emptyState(), ...JSON.parse(raw) }
  } catch {
    return emptyState()
  }
}

function save(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function getProgress() {
  return load()
}

export function getEarnedBadgeIds(state) {
  return BADGES.filter((b) => b.check(state)).map((b) => b.id)
}

// Gọi khi 1 lượt chơi kết thúc (màn hình kết quả hiện ra) — cập nhật streak
// theo ngày, đánh dấu trò đã chơi hôm nay/đã từng chơi, dùng để mở khoá huy hiệu.
export function recordSession(gameId) {
  const state = load()
  const today = dateKey(0)
  if (state.lastPlayedDate !== today) {
    state.streak = state.lastPlayedDate === dateKey(-1) ? state.streak + 1 : 1
    state.lastPlayedDate = today
    state.playedToday = []
  }
  if (!state.playedToday.includes(gameId)) state.playedToday.push(gameId)
  if (!state.completedGames.includes(gameId)) state.completedGames.push(gameId)
  state.totalSessions += 1
  save(state)
  return state
}
