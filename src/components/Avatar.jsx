const PALETTE = [
  { bg: '#3f51a3', fg: '#ffffff' }, // primary indigo
  { bg: '#c9a44f', fg: '#3a2b06' }, // hsg gold
  { bg: '#2e7d5b', fg: '#ffffff' }, // success green
  { bg: '#a8548c', fg: '#ffffff' }, // plum
  { bg: '#2c7da0', fg: '#ffffff' }, // teal blue
  { bg: '#b5563c', fg: '#ffffff' }, // terracotta
  { bg: '#6b5b95', fg: '#ffffff' }, // muted purple
  { bg: '#4a7c59', fg: '#ffffff' }, // forest green
]

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Avatar({ name, size = 56 }) {
  const initials = getInitials(name)
  const { bg, fg } = PALETTE[hashString(name) % PALETTE.length]

  return (
    <div
      className="avatar"
      style={{ width: size, height: size, background: bg, color: fg, fontSize: Math.round(size * 0.4) }}
    >
      {initials}
    </div>
  )
}
