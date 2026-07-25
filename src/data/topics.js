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

export const HSG_TOPICS = [
  { id: 'hsg-pt-luong-giac-tham-so', name: 'PT lượng giác chứa tham số', progress: 10 },
  { id: 'hsg-day-so-truy-hoi', name: 'Dãy số truy hồi & giới hạn nâng cao', progress: 5 },
  { id: 'hsg-cuc-tri-hinh-khong-gian', name: 'Cực trị hình học không gian', progress: 0 },
  { id: 'hsg-xac-suat-nang-cao', name: 'Xác suất nâng cao (biến ngẫu nhiên, kỳ vọng)', progress: 0 },
  { id: 'hsg-he-thuc-luong-nang-cao', name: 'Hệ thức lượng nâng cao, góc — khoảng cách khó', progress: 0 },
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
        note: 'Ba số a, b, c theo thứ tự lập thành CSC khi và chỉ khi 2b = a + c.',
      },
      {
        title: 'Cấp số nhân (CSN)',
        formulas: [
          'u_n = u_1 \\cdot q^{\\,n-1}',
          'S_n = \\dfrac{u_1(1-q^n)}{1-q} \\quad (q \\ne 1)',
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
  },
}
