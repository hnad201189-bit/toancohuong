// Dữ liệu demo — hard-code tiến độ để sau này thay bằng API thật.
export const KNOWLEDGE_AREAS = [
  {
    id: 'dai-so',
    order: 1,
    name: 'Đại số',
    description: 'Dãy số, cấp số cộng - nhân, mũ và lôgarit',
    progress: 62,
    topics: [
      { id: 'csc-csn', name: 'Cấp số cộng, cấp số nhân', progress: 80, hasLesson: true },
      { id: 'day-so', name: 'Dãy số và các tính chất', progress: 70, hasLesson: false },
      { id: 'ham-so-mu-logarit', name: 'Hàm số mũ và hàm số lôgarit', progress: 55, hasLesson: false },
      { id: 'pt-bpt-mu-logarit', name: 'Phương trình - bất phương trình mũ, lôgarit', progress: 40, hasLesson: false },
      { id: 'he-bpt-bac-nhat-hai-an', name: 'Hệ bất phương trình bậc nhất hai ẩn', progress: 65, hasLesson: false },
    ],
  },
  {
    id: 'luong-giac',
    order: 2,
    name: 'Lượng giác',
    description: 'Hàm số lượng giác và phương trình lượng giác',
    progress: 48,
    topics: [
      { id: 'ham-so-luong-giac', name: 'Hàm số lượng giác', progress: 60, hasLesson: false },
      { id: 'pt-luong-giac-co-ban', name: 'Phương trình lượng giác cơ bản', progress: 55, hasLesson: false },
      { id: 'pt-luong-giac-thuong-gap', name: 'Phương trình lượng giác thường gặp', progress: 30, hasLesson: false },
      { id: 'cong-thuc-luong-giac', name: 'Công thức biến đổi lượng giác', progress: 45, hasLesson: false },
    ],
  },
  {
    id: 'ham-so-gioi-han',
    order: 3,
    name: 'Hàm số & Giới hạn',
    description: 'Giới hạn dãy số, hàm số, hàm số liên tục, đạo hàm',
    progress: 35,
    topics: [
      { id: 'gioi-han-day-so', name: 'Giới hạn dãy số', progress: 50, hasLesson: false },
      { id: 'gioi-han-ham-so', name: 'Giới hạn hàm số', progress: 40, hasLesson: false },
      { id: 'ham-so-lien-tuc', name: 'Hàm số liên tục', progress: 30, hasLesson: false },
      { id: 'dao-ham-khai-niem', name: 'Đạo hàm — khái niệm và ý nghĩa', progress: 20, hasLesson: false },
      { id: 'quy-tac-tinh-dao-ham', name: 'Quy tắc tính đạo hàm', progress: 15, hasLesson: false },
    ],
  },
  {
    id: 'hinh-hoc-khong-gian',
    order: 4,
    name: 'Hình học không gian',
    description: 'Quan hệ song song, vuông góc, góc và khoảng cách',
    progress: 41,
    topics: [
      { id: 'duong-thang-mat-phang', name: 'Đường thẳng và mặt phẳng — quan hệ song song', progress: 55, hasLesson: false },
      { id: 'quan-he-vuong-goc', name: 'Quan hệ vuông góc trong không gian', progress: 45, hasLesson: false },
      { id: 'goc-khoang-cach', name: 'Góc và khoảng cách', progress: 35, hasLesson: false },
      { id: 'the-tich-khoi-da-dien', name: 'Thể tích khối đa diện', progress: 30, hasLesson: false },
      { id: 'phep-doi-hinh', name: 'Phép dời hình', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'thong-ke-xac-suat',
    order: 5,
    name: 'Thống kê & Xác suất',
    description: 'Số đặc trưng của mẫu số liệu, biến cố và xác suất',
    progress: 57,
    topics: [
      { id: 'so-dac-trung-xu-the', name: 'Số đặc trưng đo xu thế trung tâm', progress: 65, hasLesson: false },
      { id: 'so-dac-trung-phan-tan', name: 'Số đặc trưng đo mức độ phân tán', progress: 60, hasLesson: false },
      { id: 'bien-co-xac-suat', name: 'Biến cố và xác suất của biến cố', progress: 50, hasLesson: false },
      { id: 'quy-tac-tinh-xac-suat', name: 'Các quy tắc tính xác suất', progress: 50, hasLesson: false },
      { id: 'mau-so-lieu-ghep-nhom', name: 'Mẫu số liệu ghép nhóm', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'toan-ung-dung-tu-duy',
    order: 6,
    name: 'Toán ứng dụng / Tư duy',
    description: 'Mô hình hoá, tối ưu, suy luận logic',
    progress: 22,
    topics: [
      { id: 'mo-hinh-hoa-thuc-te', name: 'Toán thực tế — mô hình hoá', progress: 25, hasLesson: false },
      { id: 'bai-toan-toi-uu', name: 'Bài toán tối ưu', progress: 20, hasLesson: false },
      { id: 'tu-duy-logic', name: 'Tư duy logic — suy luận', progress: 20, hasLesson: false },
    ],
  },
]

// ---- Lớp 6 (khung sườn — chưa có nội dung bài học chi tiết) ----
// ---- Lớp 1 (khung sườn — chưa có nội dung bài học chi tiết) ----
export const GRADE1_AREAS = [
  {
    id: 'l1-so-pham-vi-10',
    order: 1,
    name: 'Số và phép tính trong phạm vi 10',
    description: 'Đếm, so sánh và các phép tính cộng, trừ trong phạm vi 10',
    progress: 0,
    topics: [
      { id: 'l1-cac-so-den-10', name: 'Các số đến 10, đếm và so sánh', progress: 0, hasLesson: false },
      { id: 'l1-cong-pham-vi-10', name: 'Phép cộng trong phạm vi 10', progress: 0, hasLesson: false },
      { id: 'l1-tru-pham-vi-10', name: 'Phép trừ trong phạm vi 10', progress: 0, hasLesson: false },
      { id: 'l1-bang-cong-tru-10', name: 'Bảng cộng, bảng trừ trong phạm vi 10 (ôn tập)', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l1-so-pham-vi-100',
    order: 2,
    name: 'Số và phép tính trong phạm vi 100',
    description: 'Đọc, viết số và các phép tính cộng, trừ không nhớ trong phạm vi 100',
    progress: 0,
    topics: [
      { id: 'l1-cac-so-den-100', name: 'Các số đến 100, đọc viết và cấu tạo số', progress: 0, hasLesson: false },
      { id: 'l1-so-sanh-so-100', name: 'So sánh các số trong phạm vi 100', progress: 0, hasLesson: false },
      { id: 'l1-cong-khong-nho-100', name: 'Phép cộng không nhớ trong phạm vi 100', progress: 0, hasLesson: false },
      { id: 'l1-tru-khong-nho-100', name: 'Phép trừ không nhớ trong phạm vi 100', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l1-hinh-hoc-do-luong',
    order: 3,
    name: 'Hình học và đo lường',
    description: 'Nhận biết hình cơ bản, định hướng không gian, đo độ dài và xem giờ đúng',
    progress: 0,
    topics: [
      { id: 'l1-hinh-vuong-tron-tam-giac', name: 'Nhận biết hình vuông, hình tròn, hình tam giác, hình chữ nhật', progress: 0, hasLesson: false },
      { id: 'l1-vi-tri-dinh-huong', name: 'Vị trí, định hướng trong không gian (trên–dưới, trái–phải)', progress: 0, hasLesson: false },
      { id: 'l1-do-do-dai', name: 'Đo độ dài bằng thước, đơn vị xăng-ti-mét (cm)', progress: 0, hasLesson: false },
      { id: 'l1-xem-gio-dung', name: 'Xem giờ đúng trên đồng hồ', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l1-thong-ke-xac-suat',
    order: 4,
    name: 'Một số yếu tố thống kê — xác suất đơn giản',
    description: 'Thu thập, kiểm đếm số liệu đơn giản và làm quen với khả năng xảy ra',
    progress: 0,
    topics: [
      { id: 'l1-thu-thap-kiem-dem', name: 'Thu thập, kiểm đếm số liệu đơn giản', progress: 0, hasLesson: false },
      { id: 'l1-bieu-do-tranh-don-gian', name: 'Biểu đồ tranh đơn giản', progress: 0, hasLesson: false },
      { id: 'l1-nhieu-hon-it-hon', name: 'So sánh nhiều hơn — ít hơn', progress: 0, hasLesson: false },
      { id: 'l1-kha-nang-xay-ra', name: 'Khả năng xảy ra của một sự kiện (chắc chắn, có thể, không thể)', progress: 0, hasLesson: false },
    ],
  },
]

export const GRADE6_AREAS = [
  {
    id: 'l6-so-tu-nhien',
    order: 1,
    name: 'Số tự nhiên & Tính chia hết',
    description: 'Tập hợp, các phép tính, luỹ thừa, số nguyên tố, ước chung — bội chung',
    progress: 0,
    topics: [
      { id: 'l6-tap-hop', name: 'Tập hợp và các phép toán trên tập hợp', progress: 0, hasLesson: false },
      { id: 'l6-phep-tinh-so-tu-nhien', name: 'Các phép tính với số tự nhiên, luỹ thừa', progress: 0, hasLesson: false },
      { id: 'l6-tinh-chia-het', name: 'Tính chia hết, dấu hiệu chia hết', progress: 0, hasLesson: false },
      { id: 'l6-so-nguyen-to', name: 'Số nguyên tố, hợp số, phân tích ra thừa số nguyên tố', progress: 0, hasLesson: false },
      { id: 'l6-uoc-boi-chung', name: 'Ước chung, bội chung, ƯCLN, BCNN', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l6-so-nguyen',
    order: 2,
    name: 'Số nguyên',
    description: 'Tập hợp số nguyên và các phép tính với số nguyên',
    progress: 0,
    topics: [
      { id: 'l6-tap-hop-so-nguyen', name: 'Số nguyên âm và tập hợp số nguyên', progress: 0, hasLesson: false },
      { id: 'l6-cong-tru-so-nguyen', name: 'Phép cộng, phép trừ số nguyên', progress: 0, hasLesson: false },
      { id: 'l6-nhan-chia-so-nguyen', name: 'Phép nhân, phép chia số nguyên', progress: 0, hasLesson: false },
      { id: 'l6-quy-tac-dau-ngoac', name: 'Quy tắc dấu ngoặc, quy tắc chuyển vế', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l6-phan-so-thap-phan',
    order: 3,
    name: 'Phân số & Số thập phân',
    description: 'Phân số, số thập phân, tỉ số và tỉ số phần trăm',
    progress: 0,
    topics: [
      { id: 'l6-khai-niem-phan-so', name: 'Khái niệm phân số, phân số bằng nhau', progress: 0, hasLesson: false },
      { id: 'l6-phep-tinh-phan-so', name: 'Các phép tính với phân số', progress: 0, hasLesson: false },
      { id: 'l6-so-thap-phan', name: 'Số thập phân và các phép tính', progress: 0, hasLesson: false },
      { id: 'l6-ti-so-phan-tram', name: 'Tỉ số, tỉ số phần trăm', progress: 0, hasLesson: false },
      { id: 'l6-hai-bai-toan-phan-so', name: 'Hai bài toán về phân số', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l6-hinh-hoc-truc-quan',
    order: 4,
    name: 'Hình học trực quan',
    description: 'Các hình phẳng trong thực tiễn và tính đối xứng',
    progress: 0,
    topics: [
      { id: 'l6-tam-giac-deu-luc-giac', name: 'Tam giác đều, hình vuông, lục giác đều', progress: 0, hasLesson: false },
      { id: 'l6-hinh-binh-hanh-hinh-thang', name: 'Hình chữ nhật, hình thoi, hình bình hành, hình thang cân', progress: 0, hasLesson: false },
      { id: 'l6-chu-vi-dien-tich', name: 'Chu vi và diện tích các hình đã học', progress: 0, hasLesson: false },
      { id: 'l6-tinh-doi-xung', name: 'Tính đối xứng của hình phẳng', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l6-hinh-hoc-co-ban',
    order: 5,
    name: 'Hình học cơ bản',
    description: 'Điểm, đường thẳng, đoạn thẳng, góc',
    progress: 0,
    topics: [
      { id: 'l6-diem-duong-thang', name: 'Điểm, đường thẳng, ba điểm thẳng hàng', progress: 0, hasLesson: false },
      { id: 'l6-doan-thang-trung-diem', name: 'Đoạn thẳng, độ dài đoạn thẳng, trung điểm', progress: 0, hasLesson: false },
      { id: 'l6-tia-va-goc', name: 'Tia, góc và số đo góc', progress: 0, hasLesson: false },
      { id: 'l6-cac-loai-goc', name: 'Các loại góc, hai góc kề bù', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l6-du-lieu-xac-suat',
    order: 6,
    name: 'Dữ liệu & Xác suất thực nghiệm',
    description: 'Thu thập, biểu diễn dữ liệu và xác suất thực nghiệm',
    progress: 0,
    topics: [
      { id: 'l6-thu-thap-du-lieu', name: 'Thu thập, phân loại và biểu diễn dữ liệu', progress: 0, hasLesson: false },
      { id: 'l6-bieu-do', name: 'Biểu đồ tranh, biểu đồ cột', progress: 0, hasLesson: false },
      { id: 'l6-xac-suat-thuc-nghiem', name: 'Phép thử nghiệm, sự kiện, xác suất thực nghiệm', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l6-luyen-de-tong-hop',
    order: 7,
    name: 'Luyện đề tổng hợp Toán 6',
    description: 'Bài tập tổng hợp mức độ cơ bản đến nâng cao, luyện theo từng chương',
    progress: 0,
    topics: [
      { id: 'l6-lt-so-tu-nhien', name: 'Luyện tập: Số tự nhiên và bốn phép tính', progress: 0, hasLesson: false },
      { id: 'l6-lt-chia-het', name: 'Luyện tập: Tính chia hết, số nguyên tố, ước chung – bội chung', progress: 0, hasLesson: false },
      { id: 'l6-lt-so-nguyen', name: 'Luyện tập: Số nguyên', progress: 0, hasLesson: false },
      { id: 'l6-lt-phan-so', name: 'Luyện tập: Phân số và số thập phân', progress: 0, hasLesson: false },
      { id: 'l6-lt-hinh-hoc', name: 'Luyện tập: Hình học phẳng (đoạn thẳng, góc, tam giác)', progress: 0, hasLesson: false },
    ],
  },
]

// ---- Lớp 12 (khung sườn — chưa có nội dung bài học chi tiết) ----
export const GRADE12_AREAS = [
  {
    id: 'l12-dao-ham-khao-sat',
    order: 1,
    name: 'Ứng dụng đạo hàm & Khảo sát hàm số',
    description: 'Tính đơn điệu, cực trị, GTLN-GTNN, tiệm cận, khảo sát và vẽ đồ thị',
    progress: 0,
    topics: [
      { id: 'l12-don-dieu-cuc-tri', name: 'Tính đơn điệu và cực trị của hàm số', progress: 0, hasLesson: false },
      { id: 'l12-gtln-gtnn', name: 'Giá trị lớn nhất, giá trị nhỏ nhất của hàm số', progress: 0, hasLesson: false },
      { id: 'l12-duong-tiem-can', name: 'Đường tiệm cận của đồ thị hàm số', progress: 0, hasLesson: false },
      { id: 'l12-khao-sat-ham-so', name: 'Khảo sát và vẽ đồ thị hàm số', progress: 0, hasLesson: false },
      { id: 'l12-ung-dung-dao-ham-thuc-te', name: 'Ứng dụng đạo hàm giải quyết bài toán thực tế', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l12-nguyen-ham-tich-phan',
    order: 2,
    name: 'Nguyên hàm & Tích phân',
    description: 'Nguyên hàm, tích phân và các ứng dụng tính diện tích, thể tích',
    progress: 0,
    topics: [
      { id: 'l12-nguyen-ham', name: 'Nguyên hàm và các tính chất', progress: 0, hasLesson: false },
      { id: 'l12-tich-phan', name: 'Tích phân và các phương pháp tính', progress: 0, hasLesson: false },
      { id: 'l12-ung-dung-tich-phan-dien-tich', name: 'Ứng dụng tích phân tính diện tích hình phẳng', progress: 0, hasLesson: false },
      { id: 'l12-ung-dung-tich-phan-the-tich', name: 'Ứng dụng tích phân tính thể tích vật thể', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l12-vecto-toa-do-khong-gian',
    order: 3,
    name: 'Vectơ & Toạ độ trong không gian',
    description: 'Vectơ, toạ độ điểm và vectơ trong không gian Oxyz',
    progress: 0,
    topics: [
      { id: 'l12-vecto-khong-gian', name: 'Vectơ và các phép toán vectơ trong không gian', progress: 0, hasLesson: false },
      { id: 'l12-toa-do-diem-vecto', name: 'Toạ độ của điểm và vectơ trong không gian', progress: 0, hasLesson: false },
      { id: 'l12-bieu-thuc-toa-do', name: 'Biểu thức toạ độ của các phép toán vectơ', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l12-pt-mp-dt-mc',
    order: 4,
    name: 'Phương trình mặt phẳng, đường thẳng, mặt cầu',
    description: 'Viết phương trình và tính góc, khoảng cách trong không gian toạ độ',
    progress: 0,
    topics: [
      { id: 'l12-pt-mat-phang', name: 'Phương trình mặt phẳng', progress: 0, hasLesson: false },
      { id: 'l12-pt-duong-thang', name: 'Phương trình đường thẳng trong không gian', progress: 0, hasLesson: false },
      { id: 'l12-pt-mat-cau', name: 'Phương trình mặt cầu', progress: 0, hasLesson: false },
      { id: 'l12-khoang-cach-goc-toa-do', name: 'Khoảng cách và góc trong không gian toạ độ', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l12-thong-ke-nang-cao',
    order: 5,
    name: 'Thống kê',
    description: 'Số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm (nâng cao)',
    progress: 0,
    topics: [
      { id: 'l12-khoang-bien-thien-nang-cao', name: 'Khoảng biến thiên, khoảng tứ phân vị của mẫu số liệu ghép nhóm', progress: 0, hasLesson: false },
      { id: 'l12-phuong-sai-nang-cao', name: 'Phương sai, độ lệch chuẩn của mẫu số liệu ghép nhóm', progress: 0, hasLesson: false },
    ],
  },
  {
    id: 'l12-xac-suat-co-dieu-kien',
    order: 6,
    name: 'Xác suất có điều kiện',
    description: 'Xác suất có điều kiện, công thức nhân xác suất và công thức xác suất toàn phần',
    progress: 0,
    topics: [
      { id: 'l12-khai-niem-xstd', name: 'Khái niệm xác suất có điều kiện', progress: 0, hasLesson: false },
      { id: 'l12-cong-thuc-nhan-xac-suat', name: 'Công thức nhân xác suất, công thức Bayes', progress: 0, hasLesson: false },
      { id: 'l12-cong-thuc-xac-suat-toan-phan', name: 'Công thức xác suất toàn phần', progress: 0, hasLesson: false },
    ],
  },
]

export const HSG_TOPICS = [
  { id: 'hsg-pt-luong-giac-tham-so', name: 'PT lượng giác chứa tham số', progress: 10 },
  { id: 'hsg-day-so-truy-hoi', name: 'Dãy số truy hồi & giới hạn nâng cao', progress: 5 },
  { id: 'hsg-cuc-tri-hinh-khong-gian', name: 'Cực trị hình học không gian', progress: 0 },
  { id: 'hsg-xac-suat-nang-cao', name: 'Xác suất nâng cao (biến ngẫu nhiên, kỳ vọng)', progress: 0 },
  { id: 'hsg-he-thuc-luong-nang-cao', name: 'Hệ thức lượng nâng cao, góc — khoảng cách khó', progress: 0 },
]

// ---- Chuyên đề Ôn thi HSG lớp 6 ----
export const GRADE6_HSG_TOPICS = [
  { id: 'l6-hsg-day-so-quy-luat', name: 'Dãy số và quy luật', progress: 0 },
  { id: 'l6-hsg-chia-het-nang-cao', name: 'Các bài toán chia hết nâng cao', progress: 0 },
  { id: 'l6-hsg-so-nguyen-to-nang-cao', name: 'Số nguyên tố, ước số và bội số nâng cao', progress: 0 },
  { id: 'l6-hsg-dem-dirichlet', name: 'Bài toán đếm và nguyên lý Dirichlet', progress: 0 },
  { id: 'l6-hsg-hinh-hoc-tu-duy', name: 'Bài toán hình học tư duy nâng cao', progress: 0 },
]

export const OVERALL_PROGRESS = Math.round(
  KNOWLEDGE_AREAS.reduce((sum, a) => sum + a.progress, 0) / KNOWLEDGE_AREAS.length
)

export const CONTINUE_LESSON = { areaId: 'dai-so', topicId: 'csc-csn' }

// ---- Nội dung bài học mẫu: "Cấp số cộng, cấp số nhân" ----
export const SAMPLE_LESSON = {
  id: 'csc-csn',
  areaId: 'dai-so',
  title: 'Cấp số cộng, cấp số nhân',

  theory: {
    cards: [
      {
        title: 'Cấp số cộng (CSC)',
        formulas: [
          'u_{n} = u_1 + (n-1)d',
          'S_n = \\dfrac{n}{2}\\big(2u_1 + (n-1)d\\big)',
        ],
        legend: [
          '$u_1$: số hạng đầu tiên của cấp số cộng',
          '$u_n$: số hạng thứ $n$ của cấp số cộng',
          '$d$: công sai — hiệu giữa hai số hạng liên tiếp, $d = u_{n+1} - u_n$',
          '$n$: số thứ tự của số hạng cần tìm ($n \\in \\mathbb{N}^*$)',
          '$S_n$: tổng của $n$ số hạng đầu tiên',
        ],
        note: 'Ba số a, b, c theo thứ tự lập thành CSC khi và chỉ khi 2b = a + c.',
      },
      {
        title: 'Cấp số nhân (CSN)',
        formulas: [
          'u_n = u_1 \\cdot q^{\\,n-1}',
          'S_n = \\dfrac{u_1(1-q^n)}{1-q} \\quad (q \\ne 1)',
        ],
        legend: [
          '$u_1$: số hạng đầu tiên của cấp số nhân ($u_1 \\ne 0$)',
          '$u_n$: số hạng thứ $n$ của cấp số nhân',
          '$q$: công bội — tỉ số giữa hai số hạng liên tiếp, $q = u_{n+1}/u_n$',
          '$n$: số thứ tự của số hạng cần tìm',
          '$S_n$: tổng của $n$ số hạng đầu tiên (áp dụng khi $q \\ne 1$)',
        ],
        note: 'Ba số a, b, c khác 0 theo thứ tự lập thành CSN khi và chỉ khi b² = ac.',
      },
    ],
  },

  video: {
    caption: '00:00 / 12:34 — cap_so_cong_cap_so_nhan_baigiang.mp4',
  },

  quiz: [
    {
      question: 'Cho cấp số cộng có số hạng đầu u1 = 3, công sai d = 2. Giá trị u5 là?',
      options: ['9', '11', '13', '15'],
      correctIndex: 1,
    },
    {
      question: 'Cho cấp số nhân có u1 = 2, công bội q = 3. Tổng 4 số hạng đầu S4 bằng?',
      options: ['80', '54', '90', '70'],
      correctIndex: 0,
    },
    {
      question: 'Ba số nào sau đây lập thành một cấp số nhân?',
      options: ['1, 3, 5', '2, 4, 8', '2, 6, 18', '1, 2, 4, 8 (bốn số)'],
      correctIndex: 2,
    },
    {
      question: 'Cho cấp số cộng có u1 = −2, công sai d = 5. Tổng 10 số hạng đầu S10 bằng?',
      options: ['195', '205', '215', '185'],
      correctIndex: 1,
    },
    {
      question: 'Tìm x để ba số x−1, x+1, 2x+3 theo thứ tự lập thành một cấp số cộng.',
      options: ['x = 0', 'x = 1', 'x = −1', 'x = 2'],
      correctIndex: 0,
    },
  ],

  essays: [
    {
      prompt:
        'Bài 1. Cho cấp số cộng (un) có u1 = 5 và công sai d = 3. Tính u10 và tổng S10.',
      solution: [
        '$u_{10} = u_1 + 9d = 5 + 27 = 32$',
        '$S_{10} = \\dfrac{10}{2}(2\\cdot 5 + 9\\cdot 3) = 5(10+27) = 185$',
      ],
    },
    {
      prompt:
        'Bài 2. Cho cấp số nhân (un) có u1 = 4, công bội q = 1/2. Tính u6 và tổng 6 số hạng đầu.',
      solution: [
        '$u_6 = u_1 q^5 = 4 \\cdot \\dfrac{1}{32} = \\dfrac{1}{8}$',
        '$S_6 = \\dfrac{4\\left(1-\\left(\\frac12\\right)^6\\right)}{1-\\frac12} = 8\\left(1-\\dfrac{1}{64}\\right) = \\dfrac{63}{8}$',
      ],
    },
    {
      prompt: 'Bài 3. Cho cấp số cộng (un) có u1 = 2 và u7 = 20. Tìm công sai d và số hạng u15.',
      solution: [
        '$u_7 = u_1 + 6d \\Rightarrow 20 = 2 + 6d \\Rightarrow d = 3$',
        '$u_{15} = u_1 + 14d = 2 + 14\\cdot 3 = 44$',
      ],
    },
    {
      prompt: 'Bài 4. Cho cấp số nhân (un) có u2 = 6 và u5 = 48. Tìm công bội q và số hạng đầu u1.',
      solution: [
        '$\\dfrac{u_5}{u_2} = q^3 = \\dfrac{48}{6} = 8 \\Rightarrow q = 2$',
        '$u_1 = \\dfrac{u_2}{q} = \\dfrac{6}{2} = 3$',
      ],
    },
    {
      prompt: 'Bài 5. Tính tổng S = 1 + 3 + 5 + … + 99 (tổng các số lẻ từ 1 đến 99).',
      solution: [
        'Đây là tổng của một cấp số cộng với $u_1 = 1$, $d = 2$.',
        'Số hạng cuối $u_n = 99$: $99 = 1 + (n-1)\\cdot 2 \\Rightarrow n = 50$',
        '$S = \\dfrac{n}{2}(u_1+u_n) = \\dfrac{50}{2}(1+99) = 2500$',
      ],
    },
  ],

  flashcards: [
    { front: 'Số hạng tổng quát của CSC', back: '$u_n = u_1 + (n-1)d$' },
    { front: 'Tổng n số hạng đầu của CSC', back: '$S_n = \\dfrac{n}{2}\\big(2u_1+(n-1)d\\big)$' },
    { front: 'Số hạng tổng quát của CSN', back: '$u_n = u_1 \\cdot q^{\\,n-1}$' },
    { front: 'Tổng n số hạng đầu của CSN (q ≠ 1)', back: '$S_n = \\dfrac{u_1(1-q^n)}{1-q}$' },
    { front: 'Điều kiện ba số lập CSC / CSN', back: '$2b = a + c$ (CSC) — $b^2 = ac$ (CSN)' },
  ],

  exam: {
    mcqCount: 15,
    essayCount: 2,
    minutes: 45,
    matrix: [
      { level: 'Nhận biết', mcq: 6, essay: 0 },
      { level: 'Thông hiểu', mcq: 6, essay: 1 },
      { level: 'Vận dụng', mcq: 3, essay: 1 },
    ],
    mcq: [
      // Nhận biết (6)
      {
        question: 'Công thức số hạng tổng quát của một cấp số cộng là:',
        options: ['un = u1 + (n-1)d', 'un = u1 · d^(n-1)', 'un = u1 + nd', 'un = u1 − (n-1)d'],
        correctIndex: 0,
      },
      {
        question: 'Công thức số hạng tổng quát của một cấp số nhân là:',
        options: ['un = u1 + (n-1)q', 'un = u1 · q^(n-1)', 'un = u1 · qⁿ', 'un = u1 + q^(n-1)'],
        correctIndex: 1,
      },
      {
        question: 'Cho cấp số cộng có u1 = 4, công sai d = 3. Số hạng u3 bằng?',
        options: ['7', '10', '13', '9'],
        correctIndex: 1,
      },
      {
        question: 'Cho cấp số nhân có u1 = 1, công bội q = 2. Số hạng u4 bằng?',
        options: ['6', '8', '16', '4'],
        correctIndex: 1,
      },
      {
        question: 'Dãy số nào sau đây là một cấp số cộng?',
        options: ['1, 2, 4, 8', '2, 5, 8, 11', '1, 2, 4, 7', '3, 6, 12, 24'],
        correctIndex: 1,
      },
      {
        question: 'Dãy số nào sau đây là một cấp số nhân?',
        options: ['2, 4, 6, 8', '1, 2, 3, 5', '3, 6, 12, 24', '1, 3, 5, 7'],
        correctIndex: 2,
      },
      // Thông hiểu (6)
      {
        question: 'Cho cấp số cộng có u1 = 3, công sai d = 2. Tổng 6 số hạng đầu S6 bằng?',
        options: ['42', '48', '54', '36'],
        correctIndex: 1,
      },
      {
        question: 'Cho cấp số nhân có u1 = 5, công bội q = 2. Tổng 5 số hạng đầu S5 bằng?',
        options: ['150', '155', '160', '145'],
        correctIndex: 1,
      },
      {
        question: 'Cho cấp số cộng có u1 = 7 và u5 = 19. Công sai d bằng?',
        options: ['2', '3', '4', '5'],
        correctIndex: 1,
      },
      {
        question: 'Cho cấp số nhân có u1 = 2 và u4 = 54. Công bội q bằng?',
        options: ['2', '3', '4', '9'],
        correctIndex: 1,
      },
      {
        question: 'Ba số 2, x, 8 theo thứ tự lập thành một cấp số cộng. Giá trị x bằng?',
        options: ['4', '5', '6', '10'],
        correctIndex: 1,
      },
      {
        question: 'Ba số 2, x, 18 (x > 0) theo thứ tự lập thành một cấp số nhân. Giá trị x bằng?',
        options: ['4', '6', '8', '10'],
        correctIndex: 1,
      },
      // Vận dụng (3)
      {
        question: 'Cho cấp số cộng (un) có u2 = 5 và u4 = 11. Số hạng u10 bằng?',
        options: ['26', '29', '32', '35'],
        correctIndex: 1,
      },
      {
        question:
          'Ba số hạng liên tiếp của một cấp số cộng có tổng bằng 21 và tích bằng 315, công sai dương. Ba số đó (tăng dần) là:',
        options: ['3, 7, 11', '4, 7, 10', '5, 7, 9', '6, 7, 8'],
        correctIndex: 2,
      },
      {
        question:
          'Một cấp số nhân có tổng 3 số hạng đầu bằng 13, tích của chúng bằng 27. Công bội q (q > 1) bằng?',
        options: ['2', '3', '4', '1/3'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt:
          'Câu 1 (Thông hiểu). Cho cấp số cộng (un) có u3 = 11 và u7 = 27. Tìm số hạng đầu u1, công sai d và tính tổng 20 số hạng đầu S20.',
        solution: [
          '$u_7 - u_3 = 4d \\Rightarrow 27 - 11 = 4d \\Rightarrow d = 4$',
          '$u_3 = u_1 + 2d \\Rightarrow 11 = u_1 + 8 \\Rightarrow u_1 = 3$',
          '$S_{20} = \\dfrac{20}{2}(2u_1 + 19d) = 10(6+76) = 820$',
        ],
      },
      {
        prompt:
          'Câu 2 (Vận dụng). Ba số hạng liên tiếp của một cấp số nhân đều dương có tổng bằng 14 và tổng các bình phương của chúng bằng 84. Tìm ba số đó.',
        solution: [
          'Gọi ba số hạng liên tiếp là $\\dfrac{a}{q}, a, aq$ với $a>0, q>0$.',
          'Tổng: $a\\left(\\dfrac1q+1+q\\right) = 14$ (1). Tổng bình phương: $a^2\\left(\\dfrac1{q^2}+1+q^2\\right)=84$ (2)',
          'Đặt $s = q+\\dfrac1q$, ta có $q^2+\\dfrac1{q^2}=s^2-2$.',
          'Từ (1): $a(s+1)=14 \\Rightarrow a=\\dfrac{14}{s+1}$. Thế vào (2): $a^2(s-1)(s+1)=84$',
          '$\\Rightarrow \\dfrac{196(s-1)}{s+1}=84 \\Rightarrow 196s-196=84s+84 \\Rightarrow s=\\dfrac52$',
          '$q+\\dfrac1q=\\dfrac52 \\Rightarrow 2q^2-5q+2=0 \\Rightarrow q=2$ hoặc $q=\\dfrac12$',
          'Với $q=2$: $a = \\dfrac{14}{5/2+1}=4 \\Rightarrow$ ba số là $2, 4, 8$.',
        ],
      },
    ],
  },
}
