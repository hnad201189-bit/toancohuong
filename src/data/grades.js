// Danh sách khối lớp và icon tương ứng, dùng chung giữa GradeGate (trang
// chọn lớp ngoài) và Sidebar (bộ chuyển lớp thu gọn) để hai nơi luôn khớp
// nhau khi đổi icon.
export const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const GRADE_ICONS = {
  1: '🐣',
  2: '🎈',
  3: '🧸',
  4: '🌈',
  5: '🚀',
  6: '📘',
  7: '📗',
  8: '📙',
  9: '🎯',
  10: '📐',
  11: '🧮',
  12: '🏆',
}

// 3 "nhóm phong cách" theo cấp học — dùng để đổi bảng màu/hoạ tiết trang trí
// toàn site (xem [data-grade-band] trong index.css) mà không đổi layout hay
// font chữ: Tiểu học vui tươi sặc sỡ, THCS tươi sáng gọn gàng, THPT tối giản
// hiện đại (giữ nguyên phong cách đã làm cho Toán 11).
export function getGradeBand(grade) {
  if (grade <= 5) return 'tieu-hoc'
  if (grade <= 9) return 'thcs'
  return 'thpt'
}
