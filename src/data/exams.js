// Danh sách kỳ thi thử theo khối lớp — trước đây định nghĩa trong
// Sidebar.jsx, tách ra đây vì giờ trang "Thi thử" (không phải Sidebar) mới
// là nơi hiển thị danh sách này.
const BASE_MOCK_EXAMS = [
  { id: 'giua-ky-1', name: 'Thi giữa kì I' },
  { id: 'het-ky-1', name: 'Thi hết kì I' },
  { id: 'giua-ky-2', name: 'Thi giữa kì II' },
  { id: 'het-ky-2', name: 'Thi hết kì II' },
  { id: 'hsg', name: 'Thi học sinh giỏi (HSG)' },
  { id: 'khao-sat-cuoi-nam', name: 'Khảo sát chất lượng cuối năm' },
]

export function getMockExams(grade) {
  const list = [...BASE_MOCK_EXAMS]
  if (grade === 9) list.push({ id: 'vao-10', name: 'Thi vào 10' })
  if (grade === 12) list.push({ id: 'dai-hoc', name: 'Thi Đại học' })
  return list
}

export const EXAM_ICONS = {
  'giua-ky-1': '📄',
  'het-ky-1': '📋',
  'giua-ky-2': '📄',
  'het-ky-2': '📋',
  hsg: '🏅',
  'khao-sat-cuoi-nam': '📊',
  'vao-10': '🎯',
  'dai-hoc': '🎓',
}
