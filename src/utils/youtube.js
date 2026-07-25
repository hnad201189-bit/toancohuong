// Accepts a full YouTube URL (watch, youtu.be, embed, shorts) or a bare
// video ID, and returns just the 11-character video ID, or null.
export function extractYouTubeId(input) {
  if (!input) return null
  const trimmed = input.trim()

  if (/^[\w-]{11}$/.test(trimmed)) return trimmed

  try {
    const url = new URL(trimmed)
    if (url.hostname === 'youtu.be') {
      return url.pathname.slice(1) || null
    }
    if (url.hostname.includes('youtube.com')) {
      if (url.pathname === '/watch') return url.searchParams.get('v')
      const match = url.pathname.match(/\/(embed|shorts)\/([\w-]{11})/)
      if (match) return match[2]
    }
  } catch {
    return null
  }
  return null
}
