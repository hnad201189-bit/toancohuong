const DIACRITICS_MAP = {
  đ: 'd',
  Đ: 'd',
}

export function slugify(text) {
  return text
    .split('')
    .map((ch) => DIACRITICS_MAP[ch] ?? ch)
    .join('')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}
