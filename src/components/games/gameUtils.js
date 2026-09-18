export function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

// Sinh 1 phép tính +/− (lớp 1) hoặc +/−/×/÷ (lớp 2, dùng bảng nhân chia
// 2-5 theo đúng chương trình lớp 2) — dùng chung cho "Ai nhanh ai đúng" và
// "Đúng hay sai?". `level` (0/1/2) tăng theo điểm số hiện tại trong ván để
// phạm vi phép cộng/trừ tự khó dần.
export function makeArithmeticQuestion(level, grade = 1) {
  if (grade < 2) {
    const max = level >= 2 ? 20 : level >= 1 ? 15 : 10
    const isAddition = Math.random() < 0.5
    if (isAddition) {
      const a = randInt(0, max)
      const b = randInt(0, max - a)
      return { a, b, op: '+', answer: a + b }
    }
    const a = randInt(0, max)
    const b = randInt(0, a)
    return { a, b, op: '−', answer: a - b }
  }

  const max = level >= 2 ? 100 : level >= 1 ? 50 : 20
  const roll = Math.random()
  if (roll < 0.35) {
    const a = randInt(0, max)
    const b = randInt(0, max - a)
    return { a, b, op: '+', answer: a + b }
  }
  if (roll < 0.7) {
    const a = randInt(0, max)
    const b = randInt(0, a)
    return { a, b, op: '−', answer: a - b }
  }
  if (roll < 0.85) {
    const table = randInt(2, 5)
    const b = randInt(1, 10)
    return { a: table, b, op: '×', answer: table * b }
  }
  const divisor = randInt(2, 5)
  const quotient = randInt(1, 10)
  return { a: divisor * quotient, b: divisor, op: '÷', answer: quotient }
}

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ONES_WORDS = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín']

// Đọc 2 chữ số cuối (0-99) theo quy tắc đọc số tiếng Việt bậc tiểu học:
// "mười lăm" (không phải "mười năm"), "hai mươi mốt/tư/lăm" (chỉ áp dụng từ
// hàng chục >= 2), và "linh" khi đứng sau hàng trăm với hàng chục = 0.
function readTwoDigits(n, afterHundred) {
  const tens = Math.floor(n / 10)
  const ones = n % 10
  if (n === 0) return afterHundred ? '' : 'không'
  if (tens === 0) return afterHundred ? `linh ${ONES_WORDS[ones]}` : ONES_WORDS[ones]
  if (tens === 1) {
    if (ones === 0) return 'mười'
    if (ones === 5) return 'mười lăm'
    return `mười ${ONES_WORDS[ones]}`
  }
  if (ones === 0) return `${ONES_WORDS[tens]} mươi`
  let onesWord = ONES_WORDS[ones]
  if (ones === 1) onesWord = 'mốt'
  else if (ones === 4) onesWord = 'tư'
  else if (ones === 5) onesWord = 'lăm'
  return `${ONES_WORDS[tens]} mươi ${onesWord}`
}

// Đọc số tự nhiên 0-999 thành chữ (dùng cho trò Ghép số với chữ số ở lớp 2+).
export function numberToVietnameseWords(n) {
  if (n === 0) return 'Không'
  let words
  if (n < 100) {
    words = readTwoDigits(n, false)
  } else {
    const hundreds = Math.floor(n / 100)
    const rest = n % 100
    words = `${ONES_WORDS[hundreds]} trăm`
    if (rest > 0) words += ` ${readTwoDigits(rest, true)}`
  }
  return words.charAt(0).toUpperCase() + words.slice(1)
}
