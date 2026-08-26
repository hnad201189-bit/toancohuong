// Sẽ tiếp tục được biên soạn dựa trên các file PDF người dùng cung cấp — mỗi
// mục trỏ tới một tài liệu tĩnh tự soạn trong public/tai-lieu (xem skill
// tomtatsach), mở ở tab mới vì không phải chuyên đề trong hệ thống lesson.
// Hiển thị dạng lưới icon (xem OnLuyen.jsx) giống màn "Trò chơi" của lớp 1.
export const ON_LUYEN_TOPICS_BY_GRADE = {
  1: [
    {
      id: 'hoc-ky-nang-toan-singapore',
      icon: '🧠',
      name: 'Học Kĩ Năng Giải Toán Singapore',
      desc: 'Rèn tư duy giải toán kiểu Singapore qua các bước hình - số.',
      href: '/tai-lieu/hoc-ky-nang-toan-singapore.html',
    },
    {
      id: 'toan-timo-khong-kho',
      icon: '🏆',
      name: 'Toán Timo Không Khó',
      desc: 'Làm quen các dạng bài thi Toán Timo dành cho lớp 1.',
      href: '/tai-lieu/toan-timo-khong-kho.html',
    },
  ],
  6: [
    {
      id: 'chinh-phuc-diem-10',
      icon: '⭐',
      name: 'Chinh Phục Điểm 10 Toán 6',
      desc: 'Ôn tập trọng tâm chương trình Toán 6 để đạt điểm cao.',
      href: '/tai-lieu/chuong-1-tap-hop-so-tu-nhien.html',
    },
    {
      id: 'chinh-phuc-toan-tu-duy',
      icon: '🧠',
      name: 'Chinh Phục Toán Tư Duy (TIMO & SASMO) Lớp 5-6',
      desc: '7 dạng bài tư duy theo cấu trúc đề thi TIMO và SASMO, có gợi ý từng bước và bài luyện tương tự.',
      href: '/tai-lieu/chinh-phuc-toan-tu-duy.html',
    },
    {
      id: 'de-thi-hsg-toan-6',
      icon: '🏅',
      name: 'Đề Thi Học Sinh Giỏi Toán 6',
      desc: 'Đề thi HSG Toán 6 (đề bài + đáp án) tổng hợp từ nhiều địa phương.',
      href: '/tai-lieu/de-thi-hsg-toan-6.html',
    },
  ],
  11: [
    {
      id: 'giai-ma-luong-giac',
      icon: '📐',
      name: 'Giải Mã Lượng Giác',
      desc: 'Nắm chắc công thức và kỹ thuật giải phương trình lượng giác.',
      href: '/tai-lieu/giai-ma-luong-giac.html',
    },
    {
      id: '10-diem-to-hop-xac-suat',
      icon: '🎲',
      name: '10 Điểm Tổ Hợp Xác Suất',
      desc: 'Luyện các dạng bài tổ hợp, xác suất thường gặp trong đề thi.',
      href: '/tai-lieu/10-diem-to-hop-xac-suat.html',
    },
    {
      id: '10-diem-thi-hoc-ki-1',
      icon: '📝',
      name: '10 Điểm Thi Học Kì I',
      desc: 'Tổng ôn trọng tâm học kì I lớp 11.',
      href: '/tai-lieu/10-diem-thi-hoc-ki-1.html',
    },
    {
      id: 'sieu-cap-trac-nghiem-luong-giac',
      icon: '⚡',
      name: 'Siêu Cấp Trắc Nghiệm Lượng Giác',
      desc: 'Bộ câu hỏi trắc nghiệm lượng giác tốc độ cao.',
      href: '/tai-lieu/sieu-cap-trac-nghiem-luong-giac.html',
    },
    {
      id: 'hoc-gioi-toan-11',
      icon: '🌱',
      name: 'Học Giỏi Toán 11',
      desc: 'Lộ trình ôn luyện toàn diện chương trình Toán 11.',
      href: '/tai-lieu/hoc-gioi-toan-11.html',
    },
  ],
}

export function getOnLuyenTopics(grade) {
  return ON_LUYEN_TOPICS_BY_GRADE[grade] || []
}
