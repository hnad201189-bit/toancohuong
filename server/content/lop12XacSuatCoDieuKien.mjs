import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP12_XAC_SUAT_CO_DIEU_KIEN = {
  'l12-khai-niem-xstd': {
    title: 'Khái niệm xác suất có điều kiện',
    theory: {
      cards: [
        {
          title: 'Định nghĩa xác suất có điều kiện',
          formulas: ['P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}\\ (P(B)>0)'],
          legend: ['$P(A|B)$: xác suất của biến cố A với điều kiện biến cố B đã xảy ra', '$P(A\\cap B)$: xác suất của biến cố "A và B cùng xảy ra"'],
          note: 'Mẹo: xác suất có điều kiện P(A|B) đo khả năng xảy ra của A khi đã biết B chắc chắn xảy ra — không gian mẫu bị thu hẹp lại thành B.',
        },
        {
          title: 'Hai biến cố độc lập',
          formulas: ['A, B\\ \\text{độc lập} \\Leftrightarrow P(A|B)=P(A) \\Leftrightarrow P(A\\cap B)=P(A)P(B)'],
          legend: [],
          note: 'Mẹo: nếu việc B xảy ra không làm thay đổi xác suất xảy ra của A thì A, B độc lập; khi đó P(A|B)=P(A) và P(B|A)=P(B).',
        },
      ],
    },
    video: { caption: '00:00 / 14:25 — khai_niem_xstd_baigiang.mp4' },
    quiz: [
      { question: 'Công thức tính xác suất có điều kiện P(A|B) là?', options: ['P(A∩B)/P(B)', 'P(A∩B)/P(A)', 'P(A)P(B)', 'P(A)+P(B)'], correctIndex: 0 },
      { question: 'Hai biến cố A, B độc lập khi nào?', options: ['P(A∩B) = P(A)P(B)', 'P(A∩B) = P(A)+P(B)', 'P(A|B) = 0', 'P(A) = P(B)'], correctIndex: 0 },
      { question: 'Gieo 1 xúc xắc cân đối, A: "mặt chẵn", B: "mặt lớn hơn 3". Tính P(A|B).', options: ['2/3', '1/2', '1/3', '3/4'], correctIndex: 0 },
      { question: 'Nếu P(A∩B) = 0,2 và P(B) = 0,5 thì P(A|B) bằng?', options: ['0,4', '0,1', '0,7', '2,5'], correctIndex: 0 },
      { question: 'Nếu A, B độc lập và P(A) = 0,4 thì P(A|B) bằng?', options: ['0,4', 'P(B)', '0', '1'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Gieo 1 con xúc xắc cân đối. Gọi A: "mặt chẵn", B: "mặt lớn hơn 3". Tính P(A|B).', solution: ['$B=\\{4,5,6\\}\\Rightarrow P(B)=\\dfrac12$', '$A\\cap B=\\{4,6\\}\\Rightarrow P(A\\cap B)=\\dfrac13$', '$P(A|B)=\\dfrac{1/3}{1/2}=\\dfrac23$'] },
      { prompt: 'Bài 2. Một hộp có 4 bi đỏ, 6 bi xanh. Lấy lần lượt 2 bi không hoàn lại. Tính xác suất bi thứ 2 là bi đỏ, biết bi thứ nhất là bi xanh.', solution: ['Sau khi lấy 1 bi xanh, còn 4 đỏ + 5 xanh = 9 bi', '$P=\\dfrac49$'] },
      { prompt: 'Bài 3. Cho P(A)=0,6, P(B)=0,5, P(A∩B)=0,3. Tính P(A|B) và P(B|A).', solution: ['$P(A|B)=\\dfrac{0{,}3}{0{,}5}=0{,}6$', '$P(B|A)=\\dfrac{0{,}3}{0{,}6}=0{,}5$'] },
      { prompt: 'Bài 4. Kiểm tra xem A, B ở bài 3 có độc lập không.', solution: ['$P(A)P(B)=0{,}6\\times0{,}5=0{,}3=P(A\\cap B)$', 'Vậy A, B độc lập'] },
      { prompt: 'Bài 5. Một lớp có 20 học sinh, trong đó 12 học sinh giỏi Toán, 8 học sinh giỏi cả Toán và Văn. Chọn ngẫu nhiên 1 học sinh giỏi Toán, tính xác suất học sinh đó cũng giỏi Văn.', solution: ['$P=\\dfrac{8}{12}=\\dfrac23$'] },
    ],
    flashcards: [
      { front: 'Công thức xác suất có điều kiện', back: '$P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$' },
      { front: 'Điều kiện áp dụng công thức xác suất có điều kiện', back: 'P(B) > 0' },
      { front: 'Hai biến cố độc lập', back: '$P(A\\cap B)=P(A)P(B)$' },
      { front: 'Khi A, B độc lập thì P(A|B) bằng', back: 'P(A)' },
      { front: 'Ý nghĩa của P(A|B)', back: 'Xác suất của A khi biết B đã xảy ra' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức tính xác suất có điều kiện P(A|B) là?', options: ['P(A∩B)/P(B)', 'P(A∩B)/P(A)', 'P(A)P(B)', 'P(A)+P(B)'], correctIndex: 0 },
        { question: 'Điều kiện để công thức P(A|B) = P(A∩B)/P(B) áp dụng được là?', options: ['P(B) > 0', 'P(A) > 0', 'P(A∩B) > 0', 'Không cần điều kiện'], correctIndex: 0 },
        { question: 'Hai biến cố A, B độc lập khi nào?', options: ['P(A∩B) = P(A)P(B)', 'P(A∩B) = P(A)+P(B)', 'P(A|B) = 0', 'P(A) = P(B)'], correctIndex: 0 },
        { question: 'Nếu A, B độc lập thì P(A|B) bằng?', options: ['P(A)', 'P(B)', '0', '1'], correctIndex: 0 },
        { question: 'P(A|B) đo điều gì?', options: ['Xác suất của A khi B đã xảy ra', 'Xác suất của B khi A đã xảy ra', 'Xác suất của A và B cùng xảy ra', 'Xác suất của A hoặc B xảy ra'], correctIndex: 0 },
        { question: 'Không gian mẫu khi tính P(A|B) được thu hẹp thành?', options: ['B', 'A', 'A∩B', 'A∪B'], correctIndex: 0 },
        { question: 'Gieo 1 xúc xắc, A: "mặt chẵn", B: "mặt lớn hơn 3". Tính P(A|B).', options: ['2/3', '1/2', '1/3', '3/4'], correctIndex: 0 },
        { question: 'Nếu P(A∩B) = 0,2 và P(B) = 0,5 thì P(A|B) bằng?', options: ['0,4', '0,1', '0,7', '2,5'], correctIndex: 0 },
        { question: 'Nếu A, B độc lập và P(A) = 0,4 thì P(A|B) bằng?', options: ['0,4', 'P(B)', '0', '1'], correctIndex: 0 },
        { question: 'Một hộp có 4 bi đỏ, 6 bi xanh. Lấy lần lượt 2 bi không hoàn lại. Xác suất bi thứ 2 đỏ biết bi thứ nhất xanh là?', options: ['4/9', '4/10', '6/9', '5/9'], correctIndex: 0 },
        { question: 'Cho P(A)=0,6, P(B)=0,5, P(A∩B)=0,3. Tính P(A|B).', options: ['0,6', '0,5', '0,3', '0,8'], correctIndex: 0 },
        { question: 'Cho P(A)=0,6, P(B)=0,5, P(A∩B)=0,3. Tính P(B|A).', options: ['0,5', '0,6', '0,3', '0,4'], correctIndex: 0 },
        { question: 'Cho P(A)=0,6, P(B)=0,5, P(A∩B)=0,3. Hai biến cố A, B có độc lập không?', options: ['Có (vì P(A)P(B) = P(A∩B) = 0,3)', 'Không', 'Không xác định', 'Chỉ độc lập 1 chiều'], correctIndex: 0 },
        { question: 'Một lớp có 20 học sinh, 12 giỏi Toán, 8 giỏi cả Toán và Văn. Chọn ngẫu nhiên 1 học sinh giỏi Toán, xác suất học sinh đó cũng giỏi Văn là?', options: ['2/3', '1/2', '3/5', '8/20'], correctIndex: 0 },
        { question: 'Một hộp có 3 bi trắng, 2 bi đen. Lấy liên tiếp 2 bi không hoàn lại. Xác suất bi thứ 2 trắng biết bi thứ nhất trắng là?', options: ['1/2', '2/5', '3/5', '1/4'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Gieo một con xúc xắc cân đối 2 lần liên tiếp. Gọi A: "tổng số chấm 2 lần gieo bằng 8", B: "lần gieo đầu tiên xuất hiện mặt 3 chấm". Tính P(A|B).',
          solution: ['$B$: lần 1 là 3 (6 khả năng cho lần 2) $\\Rightarrow P(B)=\\dfrac{6}{36}=\\dfrac16$', '$A\\cap B$: lần 1 = 3, lần 2 = 5 (duy nhất) $\\Rightarrow P(A\\cap B)=\\dfrac{1}{36}$', '$P(A|B)=\\dfrac{1/36}{1/6}=\\dfrac16$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một hộp có 5 quả cầu trắng, 4 quả cầu đỏ, 3 quả cầu xanh. Lấy ngẫu nhiên lần lượt 2 quả cầu không hoàn lại. Tính xác suất quả cầu thứ hai là quả cầu đỏ, biết quả cầu thứ nhất là quả cầu trắng.',
          solution: ['Sau khi lấy 1 quả trắng, còn lại 4 trắng + 4 đỏ + 3 xanh = 11 quả', '$P(\\text{đỏ}_2|\\text{trắng}_1)=\\dfrac{4}{11}$'],
        },
      ],
    },
  },

  'l12-cong-thuc-nhan-xac-suat': {
    title: 'Công thức nhân xác suất, công thức Bayes',
    theory: {
      cards: [
        {
          title: 'Công thức nhân xác suất',
          formulas: ['P(A\\cap B)=P(B)\\cdot P(A|B)=P(A)\\cdot P(B|A)'],
          legend: [],
          note: 'Mẹo: công thức nhân xác suất suy ra trực tiếp từ định nghĩa xác suất có điều kiện, dùng để tính xác suất của biến cố giao khi biết xác suất có điều kiện.',
        },
        {
          title: 'Công thức Bayes',
          formulas: ['P(A|B)=\\dfrac{P(A)\\cdot P(B|A)}{P(B)}'],
          legend: ['Công thức Bayes cho phép tính ngược $P(A|B)$ khi đã biết $P(B|A)$'],
          note: 'Mẹo: công thức Bayes thường dùng khi biết xác suất theo 1 chiều (ví dụ P(triệu chứng|bệnh)) và cần suy ra chiều ngược lại (P(bệnh|triệu chứng)).',
        },
      ],
    },
    video: { caption: '00:00 / 16:00 — cong_thuc_nhan_xac_suat_baigiang.mp4' },
    quiz: [
      { question: 'Công thức nhân xác suất là?', options: ['P(A∩B) = P(A)P(B|A)', 'P(A∩B) = P(A)+P(B)', 'P(A∩B) = P(A)/P(B)', 'P(A∩B) = P(A|B)'], correctIndex: 0 },
      { question: 'Công thức Bayes để tính P(A|B) là?', options: ['P(A)P(B|A)/P(B)', 'P(A)P(B)', 'P(A)/P(B|A)', 'P(B|A)/P(A)'], correctIndex: 0 },
      { question: 'Một hộp có 6 bi trắng, 4 bi đen. Lấy liên tiếp 2 bi không hoàn lại. Tính P(2 bi đều trắng).', options: ['1/3', '3/5', '5/9', '6/10'], correctIndex: 0 },
      { question: 'Công thức nhân xác suất được suy ra trực tiếp từ đâu?', options: ['Định nghĩa xác suất có điều kiện', 'Công thức xác suất toàn phần', 'Định lý Bayes', 'Quy tắc cộng xác suất'], correctIndex: 0 },
      { question: 'Công thức Bayes thường dùng để làm gì?', options: ['Tính ngược P(A|B) khi biết P(B|A)', 'Tính P(A∪B)', 'Tính P(A)+P(B)', 'Tính xác suất độc lập'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Một hộp có 5 bi đỏ, 3 bi xanh. Lấy liên tiếp 2 bi không hoàn lại. Tính xác suất cả 2 bi đều đỏ.', solution: ['$P(\\text{đỏ}_1)=\\dfrac58$, $P(\\text{đỏ}_2|\\text{đỏ}_1)=\\dfrac47$', '$P=\\dfrac58\\times\\dfrac47=\\dfrac{20}{56}=\\dfrac{5}{14}$'] },
      { prompt: 'Bài 2. Một lớp có 60% học sinh nam, trong đó 30% thích môn Toán. Tính xác suất chọn ngẫu nhiên 1 học sinh vừa là nam vừa thích Toán.', solution: ['$P(\\text{Nam}\\cap\\text{Toán})=P(\\text{Nam})\\cdot P(\\text{Toán}|\\text{Nam})=0{,}6\\times0{,}3=0{,}18$'] },
      { prompt: 'Bài 3. Có 2 hộp bi: hộp 1 có 3 đỏ, 2 xanh; hộp 2 có 4 đỏ, 1 xanh. Chọn ngẫu nhiên 1 hộp rồi lấy 1 bi. Tính xác suất chọn được hộp 1 và bi đỏ.', solution: ['$P(\\text{hộp1}\\cap\\text{đỏ})=P(\\text{hộp1})\\cdot P(\\text{đỏ}|\\text{hộp1})=\\dfrac12\\times\\dfrac35=\\dfrac{3}{10}$'] },
      { prompt: 'Bài 4. Cho P(A)=0,5, P(B|A)=0,4. Tính P(A∩B).', solution: ['$P(A\\cap B)=P(A)P(B|A)=0{,}5\\times0{,}4=0{,}2$'] },
      { prompt: 'Bài 5. Cho P(A)=0,3, P(B|A)=0,6, P(B)=0,4. Tính P(A|B) bằng công thức Bayes.', solution: ['$P(A|B)=\\dfrac{P(A)P(B|A)}{P(B)}=\\dfrac{0{,}3\\times0{,}6}{0{,}4}=\\dfrac{0{,}18}{0{,}4}=0{,}45$'] },
    ],
    flashcards: [
      { front: 'Công thức nhân xác suất', back: '$P(A\\cap B)=P(A)P(B|A)=P(B)P(A|B)$' },
      { front: 'Công thức Bayes', back: '$P(A|B)=\\dfrac{P(A)P(B|A)}{P(B)}$' },
      { front: 'Ứng dụng công thức Bayes', back: 'Tính ngược P(A|B) khi biết P(B|A)' },
      { front: 'Nguồn gốc công thức nhân xác suất', back: 'Suy ra từ định nghĩa xác suất có điều kiện' },
      { front: 'Cách tính P(2 biến cố liên tiếp không hoàn lại đều xảy ra)', back: 'Nhân xác suất biến cố đầu với xác suất có điều kiện của biến cố sau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức nhân xác suất là?', options: ['P(A∩B) = P(A)P(B|A)', 'P(A∩B) = P(A)+P(B)', 'P(A∩B) = P(A)/P(B)', 'P(A∩B) = P(A|B)'], correctIndex: 0 },
        { question: 'Công thức Bayes để tính P(A|B) là?', options: ['P(A)P(B|A)/P(B)', 'P(A)P(B)', 'P(A)/P(B|A)', 'P(B|A)/P(A)'], correctIndex: 0 },
        { question: 'Công thức nhân xác suất được suy ra trực tiếp từ đâu?', options: ['Định nghĩa xác suất có điều kiện', 'Công thức xác suất toàn phần', 'Định lý Bayes', 'Quy tắc cộng xác suất'], correctIndex: 0 },
        { question: 'Công thức Bayes thường dùng để làm gì?', options: ['Tính ngược P(A|B) khi biết P(B|A)', 'Tính P(A∪B)', 'Tính P(A)+P(B)', 'Tính xác suất độc lập'], correctIndex: 0 },
        { question: 'Công thức nhân xác suất viết theo chiều khác là?', options: ['P(A∩B) = P(B)P(A|B)', 'P(A∩B) = P(B)−P(A|B)', 'P(A∩B) = P(B)/P(A|B)', 'P(A∩B) = P(A|B)−P(B)'], correctIndex: 0 },
        { question: 'Nếu A, B độc lập thì công thức nhân xác suất trở thành?', options: ['P(A∩B) = P(A)P(B)', 'P(A∩B) = P(A)+P(B)', 'P(A∩B) = 0', 'P(A∩B) = 1'], correctIndex: 0 },
        { question: 'Một hộp có 6 bi trắng, 4 bi đen. Lấy liên tiếp 2 bi không hoàn lại. Tính P(2 bi đều trắng).', options: ['1/3', '3/5', '5/9', '6/10'], correctIndex: 0 },
        { question: 'Một hộp có 5 bi đỏ, 3 bi xanh. Lấy liên tiếp 2 bi không hoàn lại. Tính P(cả 2 bi đều đỏ).', options: ['5/14', '5/8', '4/7', '1/2'], correctIndex: 0 },
        { question: 'Cho P(A)=0,5, P(B|A)=0,4. Tính P(A∩B).', options: ['0,2', '0,9', '0,1', '0,45'], correctIndex: 0 },
        { question: 'Cho P(A)=0,3, P(B|A)=0,6, P(B)=0,4. Tính P(A|B) bằng công thức Bayes.', options: ['0,45', '0,18', '0,4', '0,3'], correctIndex: 0 },
        { question: 'Một lớp 60% học sinh nam, trong đó 30% thích Toán. Tính P(Nam và thích Toán).', options: ['0,18', '0,3', '0,6', '0,9'], correctIndex: 0 },
        { question: 'Có 2 hộp bi: hộp 1 có 3 đỏ, 2 xanh; hộp 2 có 4 đỏ, 1 xanh. Chọn ngẫu nhiên 1 hộp rồi lấy 1 bi. Tính P(chọn hộp 1 và bi đỏ).', options: ['3/10', '1/2', '3/5', '1/5'], correctIndex: 0 },
        { question: 'Nhà máy có 2 dây chuyền: A sản xuất 60% với tỉ lệ lỗi 2%; B sản xuất 40% với tỉ lệ lỗi 5%. Tính P(dây chuyền A và bị lỗi).', options: ['0,012', '0,02', '0,6', '0,032'], correctIndex: 0 },
        { question: 'Với dữ liệu ở câu trên, tính P(dây chuyền B và bị lỗi).', options: ['0,02', '0,05', '0,4', '0,032'], correctIndex: 0 },
        { question: 'Hộp có 4 bi đỏ, 2 bi xanh. Lấy liên tiếp 2 bi không hoàn lại. Tính P(bi đầu đỏ và bi sau xanh).', options: ['4/15', '2/5', '2/3', '1/3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một hộp có 7 bi đỏ, 3 bi vàng. Lấy liên tiếp 2 bi không hoàn lại. Tính xác suất cả 2 bi đều là bi đỏ.',
          solution: ['$P(\\text{đỏ}_1)=\\dfrac{7}{10}$, $P(\\text{đỏ}_2|\\text{đỏ}_1)=\\dfrac{6}{9}=\\dfrac23$', '$P=\\dfrac{7}{10}\\times\\dfrac23=\\dfrac{7}{15}$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một nhà máy có 2 phân xưởng: I sản xuất 70% sản phẩm với tỉ lệ đạt chuẩn 90%; II sản xuất 30% với tỉ lệ đạt chuẩn 80%. Biết một sản phẩm lấy ngẫu nhiên đạt chuẩn, tính xác suất sản phẩm đó do phân xưởng I sản xuất.',
          solution: [
            '$P(I\\cap\\text{đạt})=0{,}7\\times0{,}9=0{,}63$; $P(II\\cap\\text{đạt})=0{,}3\\times0{,}8=0{,}24$',
            '$P(\\text{đạt})=0{,}63+0{,}24=0{,}87$',
            '$P(I|\\text{đạt})=\\dfrac{0{,}63}{0{,}87}=\\dfrac{21}{29}\\approx0{,}724$',
          ],
        },
      ],
    },
  },

  'l12-cong-thuc-xac-suat-toan-phan': {
    title: 'Công thức xác suất toàn phần',
    theory: {
      cards: [
        {
          title: 'Hệ biến cố đầy đủ và công thức xác suất toàn phần',
          formulas: ['P(B)=\\sum_{i=1}^n P(A_i)\\cdot P(B|A_i)'],
          legend: ['$A_1,A_2,...,A_n$: hệ biến cố đầy đủ (đôi một xung khắc, hợp bằng không gian mẫu)', '$B$: biến cố bất kỳ'],
          note: 'Mẹo: công thức xác suất toàn phần dùng khi biến cố B có thể xảy ra theo nhiều "kịch bản" (theo từng $A_i$) khác nhau, mỗi kịch bản có xác suất điều kiện riêng.',
        },
        {
          title: 'Kết hợp công thức xác suất toàn phần với công thức Bayes',
          formulas: ['P(A_i|B)=\\dfrac{P(A_i)P(B|A_i)}{\\sum_{j=1}^n P(A_j)P(B|A_j)}'],
          legend: [],
          note: 'Mẹo: mẫu số trong công thức Bayes chính là P(B) tính theo công thức xác suất toàn phần — hai công thức này luôn đi cùng nhau trong các bài toán thực tế (y tế, kiểm định chất lượng...).',
        },
      ],
    },
    video: { caption: '00:00 / 16:20 — cong_thuc_xac_suat_toan_phan_baigiang.mp4' },
    quiz: [
      { question: 'Công thức xác suất toàn phần là?', options: ['P(B) = ΣP(Ai)P(B|Ai)', 'P(B) = ΣP(Ai)+P(B|Ai)', 'P(B) = P(A1)P(A2)...P(An)', 'P(B) = max P(Ai)'], correctIndex: 0 },
      { question: 'Hệ biến cố A1, ..., An được gọi là đầy đủ khi nào?', options: ['Đôi một xung khắc và hợp bằng không gian mẫu', 'Độc lập với nhau', 'Có xác suất bằng nhau', 'Chỉ cần đôi một xung khắc'], correctIndex: 0 },
      { question: 'Nhà máy có 2 dây chuyền: dây chuyền 1 chiếm 50% sản lượng với tỉ lệ lỗi 3%; dây chuyền 2 chiếm 50% với tỉ lệ lỗi 5%. Tính tỉ lệ sản phẩm lỗi chung.', options: ['4%', '3%', '5%', '8%'], correctIndex: 0 },
      { question: 'Trong công thức Bayes, mẫu số chính là gì?', options: ['P(B) tính theo công thức xác suất toàn phần', 'P(Ai)', 'P(B|Ai)', 'Tổng các P(Ai)'], correctIndex: 0 },
      { question: 'Công thức xác suất toàn phần thường dùng khi nào?', options: ['Biến cố B có thể xảy ra theo nhiều kịch bản khác nhau', 'B và các Ai độc lập', 'Chỉ có 1 biến cố A duy nhất', 'B luôn xảy ra'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Một hộp bi có 3 loại: 40% loại I, 35% loại II, 25% loại III với tỉ lệ hỏng lần lượt 2%, 3%, 5%. Tính tỉ lệ bi hỏng chung.', solution: ['$P=0{,}4\\times0{,}02+0{,}35\\times0{,}03+0{,}25\\times0{,}05$', '$=0{,}008+0{,}0105+0{,}0125=0{,}031=3{,}1\\%$'] },
      { prompt: 'Bài 2. Dây chuyền A sản xuất 60% sản phẩm với tỉ lệ đạt chuẩn 95%; dây chuyền B sản xuất 40% với tỉ lệ đạt chuẩn 90%. Tính tỉ lệ sản phẩm đạt chuẩn chung.', solution: ['$P=0{,}6\\times0{,}95+0{,}4\\times0{,}9=0{,}57+0{,}36=0{,}93=93\\%$'] },
      { prompt: 'Bài 3. Hộp 1 có 5 đỏ, 5 xanh; hộp 2 có 3 đỏ, 7 xanh. Chọn ngẫu nhiên 1 hộp (xác suất bằng nhau) rồi lấy 1 bi. Tính xác suất lấy được bi đỏ.', solution: ['$P=0{,}5\\times\\dfrac{5}{10}+0{,}5\\times\\dfrac{3}{10}=0{,}25+0{,}15=0{,}4$'] },
      { prompt: 'Bài 4. Với bài toán ở câu 3, biết đã lấy được bi đỏ, tính xác suất bi đó lấy từ hộp 1 (dùng Bayes).', solution: ['$P(\\text{hộp1}|\\text{đỏ})=\\dfrac{0{,}5\\times0{,}5}{0{,}4}=\\dfrac{0{,}25}{0{,}4}=0{,}625$'] },
      {
        prompt: 'Bài 5. Một bệnh có tỉ lệ mắc trong dân số 1%. Xét nghiệm cho dương tính đúng 95% ở người mắc bệnh, dương tính giả 2% ở người không mắc bệnh. Tính xác suất 1 người bất kỳ có kết quả xét nghiệm dương tính.',
        solution: ['$P(\\text{dương})=0{,}01\\times0{,}95+0{,}99\\times0{,}02=0{,}0095+0{,}0198=0{,}0293=2{,}93\\%$'],
      },
    ],
    flashcards: [
      { front: 'Công thức xác suất toàn phần', back: '$P(B)=\\sum_{i=1}^n P(A_i)P(B|A_i)$' },
      { front: 'Hệ biến cố đầy đủ', back: 'Đôi một xung khắc và hợp bằng không gian mẫu' },
      { front: 'Mẫu số công thức Bayes', back: 'Chính là P(B) theo công thức xác suất toàn phần' },
      { front: 'Khi nào dùng công thức xác suất toàn phần?', back: 'Khi biến cố B có thể xảy ra theo nhiều kịch bản Ai khác nhau' },
      { front: 'Công thức Bayes kết hợp xác suất toàn phần', back: '$P(A_i|B)=\\dfrac{P(A_i)P(B|A_i)}{\\sum P(A_j)P(B|A_j)}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức xác suất toàn phần là?', options: ['P(B) = ΣP(Ai)P(B|Ai)', 'P(B) = ΣP(Ai)+P(B|Ai)', 'P(B) = P(A1)P(A2)...P(An)', 'P(B) = max P(Ai)'], correctIndex: 0 },
        { question: 'Hệ biến cố A1, ..., An được gọi là đầy đủ khi nào?', options: ['Đôi một xung khắc và hợp bằng không gian mẫu', 'Độc lập với nhau', 'Có xác suất bằng nhau', 'Chỉ cần đôi một xung khắc'], correctIndex: 0 },
        { question: 'Trong công thức Bayes, mẫu số chính là gì?', options: ['P(B) tính theo công thức xác suất toàn phần', 'P(Ai)', 'P(B|Ai)', 'Tổng các P(Ai)'], correctIndex: 0 },
        { question: 'Công thức xác suất toàn phần thường dùng khi nào?', options: ['Biến cố B có thể xảy ra theo nhiều kịch bản khác nhau', 'B và các Ai độc lập', 'Chỉ có 1 biến cố A duy nhất', 'B luôn xảy ra'], correctIndex: 0 },
        { question: 'Số hạng P(Ai)P(B|Ai) trong công thức xác suất toàn phần biểu diễn điều gì?', options: ['Xác suất giao P(Ai∩B)', 'Xác suất riêng P(Ai)', 'Xác suất riêng P(B)', 'Xác suất hợp P(Ai∪B)'], correctIndex: 0 },
        { question: 'Công thức Bayes và công thức xác suất toàn phần thường được dùng cùng nhau trong bài toán nào?', options: ['Bài toán suy luận ngược (y tế, kiểm định chất lượng...)', 'Bài toán đếm đơn giản', 'Bài toán về dãy số', 'Bài toán hình học'], correctIndex: 0 },
        { question: 'Dây chuyền 1 chiếm 50% sản lượng, tỉ lệ lỗi 3%; dây chuyền 2 chiếm 50%, tỉ lệ lỗi 5%. Tính tỉ lệ sản phẩm lỗi chung.', options: ['4%', '3%', '5%', '8%'], correctIndex: 0 },
        { question: 'Một hộp có 40% bi loại I (2% hỏng), 35% bi loại II (3% hỏng), 25% bi loại III (5% hỏng). Tính tỉ lệ bi hỏng chung.', options: ['3,1%', '3%', '5%', '10%'], correctIndex: 0 },
        { question: 'Dây chuyền A (60% sản phẩm, 95% đạt chuẩn), dây chuyền B (40%, 90% đạt chuẩn). Tính tỉ lệ đạt chuẩn chung.', options: ['93%', '95%', '90%', '92%'], correctIndex: 0 },
        { question: 'Hộp 1 (5 đỏ, 5 xanh), hộp 2 (3 đỏ, 7 xanh). Chọn ngẫu nhiên 1 hộp rồi lấy 1 bi. Tính P(lấy được bi đỏ).', options: ['0,4', '0,5', '0,3', '0,8'], correctIndex: 0 },
        { question: 'Với bài toán ở câu trên, biết lấy được bi đỏ, tính xác suất bi đó từ hộp 1.', options: ['0,625', '0,5', '0,4', '0,375'], correctIndex: 0 },
        { question: 'Tỉ lệ mắc bệnh trong dân số 1%. Dương tính đúng 95% ở người mắc, dương tính giả 2% ở người không mắc. Tính P(dương tính).', options: ['2,93%', '1%', '95%', '2%'], correctIndex: 0 },
        { question: 'Với bài toán ở câu trên, biết 1 người có kết quả dương tính, tính xác suất người đó thực sự mắc bệnh.', options: ['≈32,4%', '≈95%', '≈1%', '≈50%'], correctIndex: 0 },
        { question: 'Hộp 1 có 6 bi trắng, 4 bi đen; hộp 2 có 3 bi trắng, 7 bi đen. Chọn ngẫu nhiên 1 hộp rồi lấy 1 bi. Tính P(lấy được bi trắng).', options: ['0,45', '0,6', '0,3', '0,9'], correctIndex: 0 },
        { question: 'Với bài toán ở câu trên, biết lấy được bi trắng, tính xác suất bi đó từ hộp 1.', options: ['2/3', '1/2', '3/5', '0,3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một nhà máy có 3 phân xưởng: I chiếm 30% sản lượng với tỉ lệ lỗi 2%; II chiếm 45% với tỉ lệ lỗi 3%; III chiếm 25% với tỉ lệ lỗi 4%. Tính tỉ lệ sản phẩm lỗi chung của nhà máy.',
          solution: ['$P(\\text{lỗi})=0{,}3\\times0{,}02+0{,}45\\times0{,}03+0{,}25\\times0{,}04$', '$=0{,}006+0{,}0135+0{,}01=0{,}0295=2{,}95\\%$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Với dữ liệu ở câu 1, biết một sản phẩm bị lỗi, tính xác suất sản phẩm đó do phân xưởng II sản xuất.',
          solution: ['$P(II|\\text{lỗi})=\\dfrac{0{,}45\\times0{,}03}{0{,}0295}=\\dfrac{0{,}0135}{0{,}0295}=\\dfrac{27}{59}\\approx0{,}458=45{,}8\\%$'],
        },
      ],
    },
  },
}
