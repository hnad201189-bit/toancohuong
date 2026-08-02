import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP12_THONG_KE_NANG_CAO = {
  'l12-khoang-bien-thien-nang-cao': {
    title: 'Khoảng biến thiên, khoảng tứ phân vị của mẫu số liệu ghép nhóm',
    theory: {
      cards: [
        {
          title: 'Khoảng biến thiên của mẫu số liệu ghép nhóm',
          formulas: ['R=x_{max}-x_{min}'],
          legend: ['$x_{max}$: đầu mút phải của nhóm cuối cùng', '$x_{min}$: đầu mút trái của nhóm đầu tiên'],
          note: 'Mẹo: khoảng biến thiên chỉ phản ánh độ trải rộng tổng thể, dễ bị ảnh hưởng bởi giá trị bất thường ở 2 đầu.',
        },
        {
          title: 'Tứ phân vị của mẫu số liệu ghép nhóm',
          formulas: ['Q_j = L_m + \\dfrac{\\frac{jn}{4}-C}{f_m}\\cdot h'],
          legend: ['$L_m$: đầu mút trái của nhóm chứa $Q_j$', '$n$: tổng tần số', '$C$: tần số tích luỹ trước nhóm chứa $Q_j$', '$f_m$: tần số của nhóm chứa $Q_j$', '$h$: độ dài nhóm'],
          note: 'Mẹo: khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1$ đo độ phân tán của 50% dữ liệu ở giữa, ít bị ảnh hưởng bởi giá trị bất thường hơn khoảng biến thiên.',
        },
      ],
    },
    video: { caption: '00:00 / 15:10 — khoang_bien_thien_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Công thức tính khoảng biến thiên R của mẫu số liệu ghép nhóm là?', options: ['R = xmax − xmin', 'R = xmax + xmin', 'R = (xmax − xmin)/2', 'R = xmax/xmin'], correctIndex: 0 },
      { question: 'Với bảng tần số ghép nhóm có nhóm đầu [0;10) và nhóm cuối [40;50), khoảng biến thiên R bằng?', options: ['50', '40', '45', '10'], correctIndex: 0 },
      { question: 'Khoảng tứ phân vị ΔQ được tính bằng công thức nào?', options: ['ΔQ = Q3 − Q1', 'ΔQ = Q3 + Q1', 'ΔQ = Q3 / Q1', 'ΔQ = (Q3+Q1)/2'], correctIndex: 0 },
      { question: 'Với bảng tần số n=50, nhóm [10;20) có tần số 10, tần số tích luỹ trước đó là 5, giá trị Q1 (n/4=12,5) rơi vào nhóm nào?', options: ['[10;20)', '[0;10)', '[20;30)', '[30;40)'], correctIndex: 0 },
      { question: 'Khoảng tứ phân vị đo điều gì?', options: ['Độ phân tán của 50% dữ liệu ở giữa', 'Toàn bộ độ trải rộng dữ liệu', 'Giá trị trung bình', 'Giá trị lớn nhất'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt:
          'Bài 1–5. Thời gian tự học buổi tối (phút) của 50 học sinh được ghép nhóm: [0;10): 5, [10;20): 10, [20;30): 20, [30;40): 10, [40;50): 5 (n=50). Tính khoảng biến thiên R.',
        solution: ['$R=50-0=50$ (phút)'],
      },
      { prompt: 'Bài 2. Tính tứ phân vị thứ nhất Q1 của mẫu số liệu trên.', solution: ['Tần số tích luỹ: 5, 15, 35, 45, 50. $\\dfrac{n}{4}=12{,}5$ rơi vào nhóm $[10;20)$', '$Q_1=10+\\dfrac{12{,}5-5}{10}\\times10=17{,}5$ (phút)'] },
      { prompt: 'Bài 3. Tính trung vị (tứ phân vị thứ hai) Q2 của mẫu số liệu trên.', solution: ['$\\dfrac{n}{2}=25$ rơi vào nhóm $[20;30)$', '$Q_2=20+\\dfrac{25-15}{20}\\times10=25$ (phút)'] },
      { prompt: 'Bài 4. Tính tứ phân vị thứ ba Q3 của mẫu số liệu trên.', solution: ['$\\dfrac{3n}{4}=37{,}5$ rơi vào nhóm $[30;40)$', '$Q_3=30+\\dfrac{37{,}5-35}{10}\\times10=32{,}5$ (phút)'] },
      { prompt: 'Bài 5. Tính khoảng tứ phân vị ΔQ và nêu nhận xét.', solution: ['$\\Delta_Q=Q_3-Q_1=32{,}5-17{,}5=15$ (phút)', 'ΔQ khá lớn cho thấy 50% dữ liệu ở giữa cũng có độ phân tán đáng kể'] },
    ],
    flashcards: [
      { front: 'Công thức khoảng biến thiên R', back: '$R=x_{max}-x_{min}$ (đầu mút phải nhóm cuối trừ đầu mút trái nhóm đầu)' },
      { front: 'Công thức tứ phân vị Qⱼ của mẫu ghép nhóm', back: '$Q_j=L_m+\\dfrac{\\frac{jn}{4}-C}{f_m}\\cdot h$' },
      { front: 'Công thức khoảng tứ phân vị', back: '$\\Delta_Q=Q_3-Q_1$' },
      { front: 'Ưu điểm của khoảng tứ phân vị so với khoảng biến thiên', back: 'Ít bị ảnh hưởng bởi giá trị bất thường' },
      { front: 'Trung vị của mẫu ghép nhóm', back: 'Chính là Q₂' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức tính khoảng biến thiên R của mẫu số liệu ghép nhóm là?', options: ['R = xmax − xmin', 'R = xmax + xmin', 'R = (xmax − xmin)/2', 'R = xmax/xmin'], correctIndex: 0 },
        { question: 'Khoảng tứ phân vị ΔQ được tính bằng công thức nào?', options: ['ΔQ = Q3 − Q1', 'ΔQ = Q3 + Q1', 'ΔQ = Q3 / Q1', 'ΔQ = (Q3+Q1)/2'], correctIndex: 0 },
        { question: 'Trung vị của mẫu số liệu ghép nhóm chính là?', options: ['Q2', 'Q1', 'Q3', 'Q4'], correctIndex: 0 },
        { question: 'Khoảng tứ phân vị đo điều gì?', options: ['Độ phân tán của 50% dữ liệu ở giữa', 'Toàn bộ độ trải rộng dữ liệu', 'Giá trị trung bình', 'Giá trị lớn nhất'], correctIndex: 0 },
        { question: 'Ưu điểm của khoảng tứ phân vị so với khoảng biến thiên là gì?', options: ['Ít bị ảnh hưởng bởi giá trị bất thường', 'Dễ tính hơn', 'Luôn lớn hơn R', 'Không cần bảng tần số'], correctIndex: 0 },
        { question: 'Trong công thức tứ phân vị ghép nhóm, C là gì?', options: ['Tần số tích luỹ trước nhóm chứa Qj', 'Tần số của nhóm chứa Qj', 'Độ dài nhóm', 'Tổng tần số'], correctIndex: 0 },
        {
          question: 'Thời gian tự học buổi tối (phút) của 50 học sinh: [0;10):5, [10;20):10, [20;30):20, [30;40):10, [40;50):5. Khoảng biến thiên R bằng?',
          options: ['50', '40', '45', '10'],
          correctIndex: 0,
        },
        { question: 'Với bảng số liệu trên, tứ phân vị Q1 rơi vào nhóm nào?', options: ['[10;20)', '[0;10)', '[20;30)', '[30;40)'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, tứ phân vị Q1 bằng?', options: ['17,5', '15', '20', '12,5'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, trung vị (Q2) bằng?', options: ['25', '20', '30', '22,5'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, tứ phân vị Q3 bằng?', options: ['32,5', '35', '30', '37,5'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, khoảng tứ phân vị ΔQ bằng?', options: ['15', '10', '20', '17,5'], correctIndex: 0 },
        { question: 'Cho bảng ghép nhóm: [0;20):6, [20;40):14, [40;60):20, [60;80):8, [80;100):2 (n=50). Khoảng biến thiên R bằng?', options: ['100', '80', '90', '20'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, trung vị (Q2) rơi vào nhóm nào?', options: ['[40;60)', '[20;40)', '[0;20)', '[60;80)'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, tính Q2.', options: ['45', '40', '50', '42,5'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho bảng tần số ghép nhóm về điểm kiểm tra của 40 học sinh: [0;2):4, [2;4):8, [4;6):16, [6;8):8, [8;10):4 (n=40). Tính khoảng biến thiên R và tứ phân vị thứ nhất Q1 của mẫu số liệu.',
          solution: [
            '$R=10-0=10$',
            'Tần số tích luỹ: 4, 12, 28, 36, 40. $\\dfrac{n}{4}=10$ rơi vào nhóm $[2;4)$ (vì $4<10\\leq12$)',
            '$Q_1=2+\\dfrac{10-4}{8}\\times2=2+1{,}5=3{,}5$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Với bảng số liệu ở câu 1, tính tứ phân vị thứ ba Q3 và khoảng tứ phân vị ΔQ.',
          solution: [
            '$\\dfrac{3n}{4}=30$ rơi vào nhóm $[6;8)$ (vì $28<30\\leq36$)',
            '$Q_3=6+\\dfrac{30-28}{8}\\times2=6+0{,}5=6{,}5$',
            '$\\Delta_Q=Q_3-Q_1=6{,}5-3{,}5=3$',
          ],
        },
      ],
    },
  },

  'l12-phuong-sai-nang-cao': {
    title: 'Phương sai, độ lệch chuẩn của mẫu số liệu ghép nhóm',
    theory: {
      cards: [
        {
          title: 'Phương sai của mẫu số liệu ghép nhóm',
          formulas: ['\\bar x=\\dfrac1n\\sum_{i=1}^k f_ic_i', 's^2=\\dfrac1n\\sum_{i=1}^k f_i(c_i-\\bar x)^2'],
          legend: ['$c_i$: giá trị đại diện (trung điểm) của nhóm thứ $i$', '$f_i$: tần số của nhóm thứ $i$', '$\\bar x$: số trung bình của mẫu số liệu ghép nhóm'],
          note: 'Mẹo: giá trị đại diện của mỗi nhóm là trung bình cộng của đầu mút trái và đầu mút phải nhóm đó.',
        },
        {
          title: 'Độ lệch chuẩn',
          formulas: ['s=\\sqrt{s^2}'],
          legend: ['$s$: độ lệch chuẩn — cùng đơn vị đo với số liệu gốc (khác với phương sai $s^2$ có đơn vị bình phương)'],
          note: 'Mẹo: độ lệch chuẩn càng nhỏ thì số liệu càng đồng đều (ít phân tán quanh giá trị trung bình).',
        },
      ],
    },
    video: { caption: '00:00 / 15:40 — phuong_sai_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Công thức tính số trung bình của mẫu số liệu ghép nhóm là?', options: ['x̄ = (1/n)Σfici', 'x̄ = Σci', 'x̄ = Σfi', 'x̄ = (1/n)Σci'], correctIndex: 0 },
      { question: 'Công thức tính phương sai của mẫu số liệu ghép nhóm là?', options: ['s² = (1/n)Σfi(ci−x̄)²', 's² = Σfi(ci−x̄)', 's² = (1/n)Σci²', 's² = Σ(ci−x̄)²'], correctIndex: 0 },
      { question: 'Độ lệch chuẩn s liên hệ với phương sai s² như thế nào?', options: ['s = √(s²)', 's = s²', 's = s²/2', 's = 2s²'], correctIndex: 0 },
      { question: 'Giá trị đại diện của nhóm [10;20) là?', options: ['15', '10', '20', '5'], correctIndex: 0 },
      { question: 'Độ lệch chuẩn càng nhỏ thì số liệu như thế nào?', options: ['Càng đồng đều (ít phân tán)', 'Càng phân tán', 'Không liên quan đến độ phân tán', 'Luôn bằng 0'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1–4. Điểm kiểm tra của 8 học sinh được ghép nhóm: [0;10):2, [10;20):4, [20;30):2 (n=8). Tính giá trị đại diện của mỗi nhóm.', solution: ['Nhóm $[0;10)$: 5. Nhóm $[10;20)$: 15. Nhóm $[20;30)$: 25'] },
      { prompt: 'Bài 2. Tính số trung bình x̄ của mẫu số liệu trên.', solution: ['$\\bar x=\\dfrac{2\\times5+4\\times15+2\\times25}{8}=\\dfrac{120}{8}=15$'] },
      { prompt: 'Bài 3. Tính phương sai s² của mẫu số liệu trên.', solution: ['$s^2=\\dfrac{2(5-15)^2+4(15-15)^2+2(25-15)^2}{8}=\\dfrac{200+0+200}{8}=50$'] },
      { prompt: 'Bài 4. Tính độ lệch chuẩn s của mẫu số liệu trên.', solution: ['$s=\\sqrt{50}=5\\sqrt2\\approx7{,}07$'] },
      { prompt: "Bài 5. So sánh độ phân tán của mẫu số liệu trên với 1 mẫu số liệu khác có độ lệch chuẩn s'=3.", solution: ["Vì $s=5\\sqrt2\\approx7{,}07>3=s'$ nên mẫu số liệu ban đầu có độ phân tán lớn hơn (kém đồng đều hơn)"] },
    ],
    flashcards: [
      { front: 'Công thức số trung bình mẫu ghép nhóm', back: '$\\bar x=\\dfrac1n\\sum f_ic_i$' },
      { front: 'Công thức phương sai mẫu ghép nhóm', back: '$s^2=\\dfrac1n\\sum f_i(c_i-\\bar x)^2$' },
      { front: 'Công thức độ lệch chuẩn', back: '$s=\\sqrt{s^2}$' },
      { front: 'Giá trị đại diện của 1 nhóm', back: 'Trung bình cộng của đầu mút trái và đầu mút phải nhóm đó' },
      { front: 'Ý nghĩa độ lệch chuẩn nhỏ', back: 'Số liệu đồng đều, ít phân tán quanh số trung bình' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức tính số trung bình của mẫu số liệu ghép nhóm là?', options: ['x̄ = (1/n)Σfici', 'x̄ = Σci', 'x̄ = Σfi', 'x̄ = (1/n)Σci'], correctIndex: 0 },
        { question: 'Công thức tính phương sai của mẫu số liệu ghép nhóm là?', options: ['s² = (1/n)Σfi(ci−x̄)²', 's² = Σfi(ci−x̄)', 's² = (1/n)Σci²', 's² = Σ(ci−x̄)²'], correctIndex: 0 },
        { question: 'Độ lệch chuẩn s liên hệ với phương sai s² như thế nào?', options: ['s = √(s²)', 's = s²', 's = s²/2', 's = 2s²'], correctIndex: 0 },
        { question: 'Giá trị đại diện của 1 nhóm là gì?', options: ['Trung bình cộng của 2 đầu mút nhóm', 'Đầu mút trái của nhóm', 'Đầu mút phải của nhóm', 'Tần số của nhóm'], correctIndex: 0 },
        { question: 'Đơn vị đo của phương sai so với số liệu gốc là?', options: ['Bình phương đơn vị số liệu gốc', 'Cùng đơn vị số liệu gốc', 'Không có đơn vị', 'Nửa đơn vị số liệu gốc'], correctIndex: 0 },
        { question: 'Đơn vị đo của độ lệch chuẩn so với số liệu gốc là?', options: ['Cùng đơn vị số liệu gốc', 'Bình phương đơn vị số liệu gốc', 'Không có đơn vị', 'Gấp đôi đơn vị số liệu gốc'], correctIndex: 0 },
        { question: 'Điểm kiểm tra của 8 học sinh: [0;10):2, [10;20):4, [20;30):2 (n=8). Giá trị đại diện của nhóm [10;20) là?', options: ['15', '10', '20', '5'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, số trung bình x̄ bằng?', options: ['15', '10', '20', '12'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, phương sai s² bằng?', options: ['50', '25', '100', '40'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, độ lệch chuẩn s bằng?', options: ['5√2', '√50/2', '10', '5'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, tổng tần số n bằng?', options: ['8', '3', '15', '40'], correctIndex: 0 },
        { question: 'Với bảng số liệu trên, nhóm nào có tần số lớn nhất?', options: ['[10;20)', '[0;10)', '[20;30)', 'Không xác định'], correctIndex: 0 },
        { question: 'Cho bảng ghép nhóm: [0;10):3, [10;20):5, [20;30):2 (n=10). Số trung bình x̄ bằng?', options: ['14', '15', '13', '16'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, phương sai s² bằng?', options: ['49', '50', '45', '40'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, độ lệch chuẩn s bằng?', options: ['7', '49', '6', '8'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho bảng tần số ghép nhóm về số sách đọc trong tháng của 10 học sinh: [0;2):2, [2;4):4, [4;6):3, [6;8):1 (n=10). Tính số trung bình x̄ của mẫu số liệu.',
          solution: ['Giá trị đại diện: 1, 3, 5, 7', '$\\bar x=\\dfrac{2\\times1+4\\times3+3\\times5+1\\times7}{10}=\\dfrac{36}{10}=3{,}6$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Với bảng số liệu ở câu 1, tính phương sai s² và độ lệch chuẩn s của mẫu số liệu.',
          solution: [
            '$s^2=\\dfrac{2(1-3{,}6)^2+4(3-3{,}6)^2+3(5-3{,}6)^2+1(7-3{,}6)^2}{10}$',
            '$=\\dfrac{13{,}52+1{,}44+5{,}88+11{,}56}{10}=\\dfrac{32{,}4}{10}=3{,}24$',
            '$s=\\sqrt{3{,}24}=1{,}8$',
          ],
        },
      ],
    },
  },
}
