import { EXAM_DEFAULT } from './examDefault.mjs'

export const THONG_KE_XAC_SUAT = {
  'so-dac-trung-xu-the': {
    title: 'Số đặc trưng đo xu thế trung tâm',
    theory: {
      cards: [
        {
          title: 'Số trung bình của mẫu số liệu ghép nhóm',
          formulas: ['\\bar x=\\dfrac1n\\sum_{i=1}^{k} n_ic_i', 'n=\\sum_{i=1}^k n_i'],
          note: 'Mẹo: ci là giá trị đại diện của nhóm i (trung điểm của khoảng), ni là tần số của nhóm i.',
        },
        {
          title: 'Trung vị của mẫu số liệu ghép nhóm',
          formulas: ['M_e=L+\\dfrac{\\frac n2-C}{n_m}\\cdot h'],
          note: 'Mẹo: L là đầu mút trái của nhóm chứa trung vị, C là tần số tích luỹ trước nhóm đó, nm là tần số nhóm chứa trung vị, h là độ dài nhóm.',
        },
      ],
    },
    video: { caption: '00:00 / 14:10 — so_dac_trung_xu_the_baigiang.mp4' },
    quiz: [
      {
        question: 'Số trung bình của mẫu số liệu ghép nhóm được tính bằng công thức nào?',
        options: ['x̄ = (1/n)Σnici', 'x̄ = Σni', 'x̄ = n/Σci', 'x̄ = Σci'],
        correctIndex: 0,
      },
      { question: 'Cho mẫu số liệu: 2, 4, 4, 6, 8. Số trung bình bằng?', options: ['4.8', '4', '5', '6'], correctIndex: 0 },
      { question: 'Cho mẫu số liệu: 2, 4, 4, 6, 8. Mốt (giá trị xuất hiện nhiều nhất) bằng?', options: ['2', '4', '6', '8'], correctIndex: 1 },
      { question: 'Cho mẫu số liệu đã sắp xếp: 1, 3, 5, 7, 9. Trung vị bằng?', options: ['3', '5', '7', '4'], correctIndex: 1 },
      {
        question: 'Trong mẫu số liệu ghép nhóm, ci đại diện cho?',
        options: ['Tần số nhóm i', 'Giá trị đại diện (trung điểm) nhóm i', 'Tần suất nhóm i', 'Độ dài nhóm i'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho mẫu số liệu: 3, 5, 5, 7, 9, 11. Tính số trung bình.',
        solution: ['$\\bar x=\\dfrac{3+5+5+7+9+11}{6}=\\dfrac{40}{6}\\approx6.67$'],
      },
      {
        prompt: 'Bài 2. Cho mẫu số liệu: 3, 5, 5, 7, 9, 11. Tìm trung vị.',
        solution: ['Dãy có n = 6 (chẵn), trung vị là trung bình 2 giá trị giữa: $M_e=\\dfrac{5+7}{2}=6$'],
      },
      {
        prompt: 'Bài 3. Cho mẫu số liệu: 3, 5, 5, 7, 9, 11. Tìm mốt.',
        solution: ['Giá trị 5 xuất hiện 2 lần, nhiều nhất trong mẫu, vậy $M_o=5$'],
      },
      {
        prompt:
          'Bài 4. Bảng tần số ghép nhóm: [0;10) có 3 giá trị, [10;20) có 5, [20;30) có 2. Tính số trung bình (dùng giá trị đại diện là trung điểm mỗi nhóm).',
        solution: [
          'Giá trị đại diện: $c_1=5,\\ c_2=15,\\ c_3=25$',
          '$\\bar x=\\dfrac{3\\cdot5+5\\cdot15+2\\cdot25}{10}=\\dfrac{140}{10}=14$',
        ],
      },
      {
        prompt: 'Bài 5. Với bảng tần số ở Bài 4, xác định nhóm chứa trung vị.',
        solution: [
          '$n/2=5$. Tần số tích luỹ đến nhóm 1: 3 (chưa đủ 5).',
          'Tần số tích luỹ đến nhóm 2: $3+5=8\\ge5$, vậy nhóm chứa trung vị là $[10;20)$',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức số trung bình (mẫu ghép nhóm)', back: '$\\bar x=\\dfrac1n\\sum n_ic_i$' },
      { front: 'Giá trị đại diện ci của một nhóm', back: '$c_i=\\dfrac{L_i+R_i}{2}$' },
      { front: 'Công thức trung vị nhóm', back: '$M_e=L+\\dfrac{\\frac n2-C}{n_m}\\cdot h$' },
      { front: 'Mốt ứng với nhóm có', back: '$\\max(n_i)$' },
      { front: 'Cỡ mẫu n', back: '$n=\\sum_{i=1}^k n_i$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'so-dac-trung-phan-tan': {
    title: 'Số đặc trưng đo mức độ phân tán',
    theory: {
      cards: [
        {
          title: 'Khoảng biến thiên và khoảng tứ phân vị',
          formulas: ['R=x_{\\max}-x_{\\min}', '\\Delta_Q=Q_3-Q_1'],
          note: 'Mẹo: khoảng tứ phân vị ít bị ảnh hưởng bởi giá trị ngoại lệ hơn khoảng biến thiên, vì chỉ dùng 50% dữ liệu ở giữa.',
        },
        {
          title: 'Phương sai và độ lệch chuẩn',
          formulas: ['s^2=\\dfrac1n\\sum_{i=1}^k n_i(c_i-\\bar x)^2', 's=\\sqrt{s^2}'],
          note: 'Mẹo: phương sai càng lớn thì dữ liệu càng phân tán xa số trung bình; độ lệch chuẩn có cùng đơn vị với dữ liệu gốc (phương sai thì không).',
        },
      ],
    },
    video: { caption: '00:00 / 13:35 — so_dac_trung_phan_tan_baigiang.mp4' },
    quiz: [
      { question: 'Khoảng biến thiên R được tính bằng?', options: ['max − min', 'max + min', '(max+min)/2', 'Q3 − Q1'], correctIndex: 0 },
      { question: 'Khoảng tứ phân vị được tính bằng?', options: ['Q3 − Q1', 'Q2 − Q1', 'max − min', 'Q3 + Q1'], correctIndex: 0 },
      { question: 'Độ lệch chuẩn s liên hệ với phương sai s² như thế nào?', options: ['s = s²', 's = √(s²)', 's² = √s', 's = 2s²'], correctIndex: 1 },
      {
        question: 'Phương sai càng lớn cho biết điều gì về mẫu số liệu?',
        options: ['Dữ liệu càng đồng đều', 'Dữ liệu càng phân tán', 'Trung bình càng lớn', 'Trung vị càng lớn'],
        correctIndex: 1,
      },
      { question: 'Đại lượng nào có cùng đơn vị đo với dữ liệu gốc?', options: ['Phương sai', 'Độ lệch chuẩn', 'Tần số', 'Tần suất'], correctIndex: 1 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho mẫu số liệu: 2, 4, 6, 8, 10. Tính khoảng biến thiên R.',
        solution: ['$R=10-2=8$'],
      },
      {
        prompt:
          'Bài 2. Cho mẫu số liệu đã sắp xếp: 1, 3, 5, 7, 9, 11, 13. Tính khoảng tứ phân vị.',
        solution: [
          'Trung vị $Q_2=7$. Nửa dưới {1,3,5} có $Q_1=3$. Nửa trên {9,11,13} có $Q_3=11$.',
          '$\\Delta_Q=Q_3-Q_1=11-3=8$',
        ],
      },
      {
        prompt: 'Bài 3. Cho mẫu số liệu: 2, 4, 6. Tính số trung bình và phương sai.',
        solution: [
          '$\\bar x=\\dfrac{2+4+6}{3}=4$',
          '$s^2=\\dfrac{(2-4)^2+(4-4)^2+(6-4)^2}{3}=\\dfrac{8}{3}$',
        ],
      },
      {
        prompt: 'Bài 4. Tính độ lệch chuẩn của mẫu số liệu ở Bài 3.',
        solution: ['$s=\\sqrt{\\dfrac83}\\approx1.63$'],
      },
      {
        prompt:
          'Bài 5. Hai mẫu số liệu A: 5, 5, 5, 5 và B: 2, 4, 6, 8 có cùng số trung bình là 5. So sánh độ phân tán của hai mẫu.',
        solution: [
          'Mẫu A có mọi giá trị bằng nhau nên $s_A^2=0$ (không phân tán).',
          'Mẫu B có các giá trị khác nhau xoay quanh 5 nên $s_B^2>0$.',
          'Vậy mẫu B phân tán hơn mẫu A dù có cùng số trung bình.',
        ],
      },
    ],
    flashcards: [
      { front: 'Khoảng biến thiên', back: '$R=x_{\\max}-x_{\\min}$' },
      { front: 'Khoảng tứ phân vị', back: '$\\Delta_Q=Q_3-Q_1$' },
      { front: 'Công thức phương sai (mẫu ghép nhóm)', back: '$s^2=\\dfrac1n\\sum n_i(c_i-\\bar x)^2$' },
      { front: 'Độ lệch chuẩn', back: '$s=\\sqrt{s^2}$' },
      { front: 'So sánh độ phân tán qua phương sai', back: 'Nếu $s_A^2 > s_B^2$ thì A phân tán hơn B' },
    ],
    exam: EXAM_DEFAULT,
  },

  'bien-co-xac-suat': {
    title: 'Biến cố và xác suất của biến cố',
    theory: {
      cards: [
        {
          title: 'Biến cố và không gian mẫu',
          formulas: ['A\\subset\\Omega'],
          note: 'Ω (không gian mẫu) là tập hợp tất cả kết quả có thể của phép thử; biến cố A là một tập con của Ω.',
        },
        {
          title: 'Xác suất cổ điển',
          formulas: ['P(A)=\\dfrac{n(A)}{n(\\Omega)}'],
          note: 'Mẹo: n(A) là số kết quả thuận lợi cho biến cố A, n(Ω) là tổng số kết quả có thể (các kết quả đồng khả năng).',
        },
      ],
    },
    video: { caption: '00:00 / 12:40 — bien_co_xac_suat_baigiang.mp4' },
    quiz: [
      { question: 'Xác suất cổ điển của biến cố A được tính bằng?', options: ['n(A) + n(Ω)', 'n(A) / n(Ω)', 'n(Ω) / n(A)', 'n(A) − n(Ω)'], correctIndex: 1 },
      { question: 'Gieo một con xúc xắc. Không gian mẫu Ω có bao nhiêu phần tử?', options: ['4', '6', '8', '12'], correctIndex: 1 },
      {
        question: 'Gieo một con xúc xắc, biến cố A: "xuất hiện mặt chẵn". n(A) bằng?',
        options: ['2', '3', '4', '6'],
        correctIndex: 1,
      },
      { question: 'Xác suất của biến cố chắc chắn bằng?', options: ['0', '0.5', '1', 'Không xác định'], correctIndex: 2 },
      { question: 'Xác suất của biến cố không thể (rỗng) bằng?', options: ['0', '0.5', '1', 'Không xác định'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Gieo 2 đồng xu cân đối. Tính n(Ω).',
        solution: ['$\\Omega=\\{SS,SN,NS,NN\\} \\Rightarrow n(\\Omega)=4$'],
      },
      {
        prompt: 'Bài 2. Với phép thử ở Bài 1, tính xác suất của biến cố A: "có ít nhất 1 mặt sấp".',
        solution: ['$A=\\{SS,SN,NS\\} \\Rightarrow n(A)=3$', '$P(A)=\\dfrac34$'],
      },
      {
        prompt: 'Bài 3. Rút ngẫu nhiên 1 lá bài từ bộ bài 52 lá. Tính xác suất rút được lá Át (có 4 lá Át).',
        solution: ['$P=\\dfrac{4}{52}=\\dfrac{1}{13}$'],
      },
      {
        prompt: 'Bài 4. Gieo một con xúc xắc 2 lần. Tính n(Ω).',
        solution: ['$n(\\Omega)=6\\times6=36$'],
      },
      {
        prompt: 'Bài 5. Với phép thử ở Bài 4, tính xác suất tổng số chấm 2 lần gieo bằng 7.',
        solution: [
          'Các cặp thoả mãn: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — có 6 cách.',
          '$P=\\dfrac{6}{36}=\\dfrac16$',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức xác suất cổ điển', back: '$P(A)=\\dfrac{n(A)}{n(\\Omega)}$' },
      { front: 'Xác suất biến cố chắc chắn', back: '$P(\\Omega)=1$' },
      { front: 'Xác suất biến cố không thể', back: '$P(\\varnothing)=0$' },
      { front: 'Miền giá trị của xác suất', back: '$0\\le P(A)\\le 1$' },
      { front: 'Không gian mẫu khi gieo xúc xắc 2 lần', back: '$n(\\Omega)=6\\times6=36$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'quy-tac-tinh-xac-suat': {
    title: 'Các quy tắc tính xác suất',
    theory: {
      cards: [
        {
          title: 'Quy tắc cộng xác suất',
          formulas: ['P(A\\cup B)=P(A)+P(B)-P(A\\cap B)', 'A\\cap B=\\varnothing \\Rightarrow P(A\\cup B)=P(A)+P(B)'],
          note: 'Mẹo: nếu A và B xung khắc (không thể đồng thời xảy ra) thì A∩B = ∅, công thức cộng rút gọn còn P(A∪B) = P(A)+P(B).',
        },
        {
          title: 'Biến cố đối và quy tắc nhân',
          formulas: ['P(\\bar A)=1-P(A)', 'P(A\\cap B)=P(A)\\cdot P(B)'],
          note: 'Công thức nhân chỉ áp dụng khi A và B độc lập (việc xảy ra của A không ảnh hưởng đến xác suất xảy ra của B).',
        },
      ],
    },
    video: { caption: '00:00 / 15:20 — quy_tac_tinh_xac_suat_baigiang.mp4' },
    quiz: [
      {
        question: 'Công thức cộng xác suất tổng quát là?',
        options: ['P(A∪B) = P(A) + P(B)', 'P(A∪B) = P(A) + P(B) − P(A∩B)', 'P(A∪B) = P(A)·P(B)', 'P(A∪B) = P(A) − P(B)'],
        correctIndex: 1,
      },
      { question: 'Nếu A, B xung khắc thì P(A∪B) bằng?', options: ['P(A) + P(B)', 'P(A)·P(B)', 'P(A) − P(B)', 'P(A∩B)'], correctIndex: 0 },
      { question: 'Xác suất của biến cố đối P(Ā) bằng?', options: ['P(A)', '1 − P(A)', '1 + P(A)', 'P(A) − 1'], correctIndex: 1 },
      { question: 'Nếu A, B độc lập thì P(A∩B) bằng?', options: ['P(A) + P(B)', 'P(A)·P(B)', 'P(A) − P(B)', '0'], correctIndex: 1 },
      { question: 'Xác suất P(A) và P(Ā) luôn thoả mãn?', options: ['P(A) + P(Ā) = 1', 'P(A) − P(Ā) = 1', 'P(A)·P(Ā) = 1', 'P(A) = P(Ā)'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Gieo một xúc xắc. A: "xuất hiện mặt chẵn" có P(A) = 1/2. Tính xác suất biến cố đối Ā.',
        solution: ['$P(\\bar A)=1-\\dfrac12=\\dfrac12$'],
      },
      {
        prompt: 'Bài 2. Cho P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1. Tính P(A∪B).',
        solution: ['$P(A\\cup B)=0.4+0.3-0.1=0.6$'],
      },
      {
        prompt:
          'Bài 3. Gieo 2 xúc xắc độc lập. A: "xúc xắc 1 ra mặt 6", B: "xúc xắc 2 ra mặt 6". Tính P(A∩B).',
        solution: ['$P(A)=P(B)=\\dfrac16$', '$P(A\\cap B)=\\dfrac16\\times\\dfrac16=\\dfrac{1}{36}$'],
      },
      {
        prompt:
          'Bài 4. Một hộp có 5 bi đỏ, 3 bi xanh (không có loại khác). Lấy ngẫu nhiên 1 bi. Tính xác suất lấy được bi đỏ hoặc bi xanh.',
        solution: [
          'Gọi $P_1$ là xác suất lấy được bi đỏ, $P_2$ là xác suất lấy được bi xanh: $P_1=\\dfrac58,\\quad P_2=\\dfrac38$',
          'Hai biến cố xung khắc: $P=P_1+P_2=\\dfrac58+\\dfrac38=1$ (biến cố chắc chắn vì hộp chỉ có 2 loại bi)',
        ],
      },
      {
        prompt: 'Bài 5. Cho P(A) = 0.6. Tính xác suất để A không xảy ra.',
        solution: ['$P(\\bar A)=1-0.6=0.4$'],
      },
    ],
    flashcards: [
      { front: 'Quy tắc cộng xác suất (tổng quát)', back: '$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$' },
      { front: 'Quy tắc cộng khi A, B xung khắc', back: '$P(A\\cup B)=P(A)+P(B)$' },
      { front: 'Xác suất biến cố đối', back: '$P(\\bar A)=1-P(A)$' },
      { front: 'Quy tắc nhân khi A, B độc lập', back: '$P(A\\cap B)=P(A)\\cdot P(B)$' },
      { front: 'Tổng xác suất A và biến cố đối', back: '$P(A)+P(\\bar A)=1$' },
    ],
    exam: EXAM_DEFAULT,
  },
}
