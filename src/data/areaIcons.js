// Icon cho từng "mảng kiến thức" (area), suy ra từ từ khoá trong tên thay vì
// một danh sách cứng theo id — vì areas đến từ API, khác nhau theo từng khối
// lớp, và nội dung các lớp chưa biên soạn (7, 8, 9, 10...) sẽ tiếp tục được
// thêm dần. Quy tắc xếp từ cụ thể đến chung chung, dò từ trên xuống, khớp
// quy tắc nào trước dùng icon đó.
const RULES = [
  [/phạm vi 10\b/i, '🔟'],
  [/phạm vi 100\b/i, '💯'],
  [/phân số|thập phân/i, '🍕'],
  [/lượng giác/i, '🌊'],
  [/xác suất|thống kê|dữ liệu|biểu đồ/i, '🎲'],
  [/giới hạn|đạo hàm|liên tục|hàm số/i, '📈'],
  [/hình học|hình khối|hình vuông|hình tròn|hình chữ nhật|hình thang|hình thoi|tam giác|tứ giác|lục giác|đo lường|độ dài|chu vi|diện tích|thể tích|không gian|vuông góc|song song|đối xứng|góc\b|đồng hồ|xem giờ/i, '📐'],
  [/số nguyên\b/i, '🔢'],
  [/số tự nhiên|chia hết|nguyên tố|ước chung|bội chung|phép tính|phép cộng|phép trừ|phép nhân|phép chia|so sánh các số|đếm/i, '🧮'],
  [/đại số|phương trình|bất phương trình|mũ và|lôgarit|đa thức|căn thức/i, '🧩'],
  [/tư duy|ứng dụng|logic|tối ưu|mô hình/i, '🧠'],
]

export function getAreaIcon(name = '') {
  for (const [pattern, icon] of RULES) {
    if (pattern.test(name)) return icon
  }
  return '📚'
}
