import { EXAM_DEFAULT } from './examDefault.mjs'

export const HSG = {
  'hsg-pt-luong-giac-tham-so': {
    title: 'PT lượng giác chứa tham số',
    theory: {
      cards: [
        {
          title: 'Điều kiện có nghiệm của PT bậc nhất sin, cos chứa tham số',
          formulas: ['a\\sin x+b\\cos x=c', 'a^2+b^2\\ge c^2'],
          note: 'Mẹo: đây là điều kiện để phương trình bậc nhất đối với sin, cos có nghiệm — dùng để biện luận theo tham số m khi a, b, c phụ thuộc m.',
        },
        {
          title: 'Biện luận theo tham số m',
          formulas: ['f(m)\\ge 0'],
          note: 'Mẹo: sau khi thay điều kiện có nghiệm, ta thu được một bất phương trình theo m — giải bất phương trình này để tìm khoảng giá trị của m thoả yêu cầu.',
        },
      ],
    },
    video: { caption: '00:00 / 18:20 — hsg_pt_luong_giac_tham_so_baigiang.mp4' },
    quiz: [
      {
        question: 'Phương trình m·sin x + cos x = 1 có nghiệm khi nào?',
        options: ['Luôn có nghiệm với mọi m', 'Chỉ có nghiệm khi m = 0', 'Vô nghiệm với mọi m', 'Có nghiệm khi m ≥ 1'],
        correctIndex: 0,
      },
      { question: 'Phương trình sin x + m·cos x = 2 có nghiệm khi nào?', options: ['|m| ≥ √3', '|m| ≤ √3', 'm ≥ 3', 'Mọi m'], correctIndex: 0 },
      { question: 'Phương trình (m−1)sin x + cos x = m có nghiệm khi nào?', options: ['m ≤ 1', 'm ≥ 1', 'm = 1', 'Mọi m'], correctIndex: 0 },
      {
        question: 'Để phương trình 2sin x + m·cos x = m có nghiệm với mọi m thực, điều kiện là?',
        options: ['Luôn đúng với mọi m', 'm ≥ 0', 'm ≤ 0', 'm = 0'],
        correctIndex: 0,
      },
      { question: 'Với phương trình m·sin x − cos x = √3, giá trị m để phương trình có nghiệm là?', options: ['|m| ≥ √2', 'm ≥ 2', '|m| ≤ √2', 'm = √2'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tìm m để phương trình m·sin x + cos x = 1 có nghiệm.',
        solution: [
          'Điều kiện có nghiệm: $m^2+1\\ge1 \\Leftrightarrow m^2\\ge0$, luôn đúng với mọi m.',
          'Vậy phương trình có nghiệm với mọi giá trị m.',
        ],
      },
      {
        prompt: 'Bài 2. Tìm m để phương trình (m+1)sin x − cos x = 2 có nghiệm.',
        solution: [
          'Điều kiện: $(m+1)^2+1\\ge4 \\Leftrightarrow (m+1)^2\\ge3$',
          '$\\Leftrightarrow m+1\\ge\\sqrt3$ hoặc $m+1\\le-\\sqrt3$',
          '$\\Leftrightarrow m\\ge\\sqrt3-1$ hoặc $m\\le-\\sqrt3-1$',
        ],
      },
      {
        prompt: 'Bài 3. Tìm m để phương trình sin x + (m−2)cos x = m vô nghiệm.',
        solution: [
          'PT vô nghiệm khi $1+(m-2)^2<m^2$',
          '$\\Leftrightarrow 1+m^2-4m+4<m^2 \\Leftrightarrow -4m+5<0 \\Leftrightarrow m>\\dfrac54$',
        ],
      },
      {
        prompt: 'Bài 4. Tìm m để phương trình m·sin x + 3cos x = 5 có nghiệm.',
        solution: [
          '$m^2+9\\ge25 \\Leftrightarrow m^2\\ge16 \\Leftrightarrow |m|\\ge4$',
          'Vậy $m\\ge4$ hoặc $m\\le-4$',
        ],
      },
      {
        prompt: 'Bài 5. Cho phương trình (m−1)sin x + m·cos x = 1. Tìm m để phương trình có nghiệm.',
        solution: [
          '$(m-1)^2+m^2\\ge1 \\Leftrightarrow m^2-2m+1+m^2\\ge1$',
          '$\\Leftrightarrow 2m^2-2m\\ge0 \\Leftrightarrow 2m(m-1)\\ge0$',
          '$\\Leftrightarrow m\\le0$ hoặc $m\\ge1$',
        ],
      },
    ],
    flashcards: [
      { front: 'Điều kiện PT a·sin x + b·cos x = c có nghiệm', back: '$a^2+b^2\\ge c^2$' },
      { front: 'Điều kiện PT vô nghiệm', back: '$a^2+b^2<c^2$' },
      { front: 'Các bước biện luận PT lượng giác theo tham số', back: 'Lập điều kiện có nghiệm, giải bất phương trình theo tham số' },
      { front: 'PT m·sin x + cos x = 1 có nghiệm khi', back: 'Mọi $m$ (vì $m^2+1\\ge1$ luôn đúng)' },
      { front: 'Dạng chuẩn PT bậc nhất sin, cos', back: '$a\\sin x + b\\cos x = c$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Điều kiện để phương trình a·sinx + b·cosx = c có nghiệm là?', options: ['a² + b² ≥ c²', 'a² + b² ≤ c²', 'a = b = c', 'Luôn có nghiệm'], correctIndex: 0 },
        { question: 'Phương trình a·sinx + b·cosx = c vô nghiệm khi nào?', options: ['a² + b² < c²', 'a² + b² > c²', 'a² + b² = c²', 'a = 0'], correctIndex: 0 },
        { question: 'Để biện luận phương trình lượng giác chứa tham số m, bước đầu tiên là?', options: ['Đưa về dạng a(m)sinx + b(m)cosx = c(m)', 'Giải phương trình với m = 0', 'Vẽ đồ thị', 'Thử m = 1'], correctIndex: 0 },
        { question: 'Phương trình m·sinx + cosx = 1 luôn có nghiệm với mọi m vì?', options: ['m² + 1 ≥ 1 luôn đúng', 'm luôn dương', 'cosx luôn bằng 1', 'sinx luôn bằng 0'], correctIndex: 0 },
        { question: 'Sau khi lập điều kiện có nghiệm f(m) ≥ 0, bước tiếp theo là?', options: ['Giải bất phương trình theo m', 'Giải phương trình lượng giác luôn', 'Thế m = 0', 'Kết luận ngay'], correctIndex: 0 },
        { question: 'Phương trình dạng a(m)sinx + b(m)cosx = c(m) là phương trình bậc mấy đối với sin, cos?', options: ['Bậc nhất', 'Bậc hai', 'Bậc ba', 'Không xác định'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Phương trình sinx + m·cosx = 2 có nghiệm khi nào?', options: ['|m| ≥ √3', '|m| ≤ √3', 'm ≥ 3', 'Mọi m'], correctIndex: 0 },
        { question: 'Phương trình (m−1)sinx + cosx = m có nghiệm khi nào?', options: ['m ≤ 1', 'm ≥ 1', 'm = 1', 'Mọi m'], correctIndex: 0 },
        { question: 'Với phương trình m·sinx − cosx = √3, giá trị m để có nghiệm là?', options: ['|m| ≥ √2', 'm ≥ 2', '|m| ≤ √2', 'm = √2'], correctIndex: 0 },
        { question: 'Phương trình 2sinx + m·cosx = m có nghiệm với mọi m vì?', options: ['4 + m² ≥ m² luôn đúng', 'm = 0', 'm ≥ 4', 'Không luôn có nghiệm'], correctIndex: 0 },
        { question: 'Phương trình (m+2)sinx + cosx = 1 có nghiệm khi nào?', options: ['Với mọi m', 'm ≥ −2', 'm ≤ −2', 'm = −2'], correctIndex: 0 },
        { question: 'Phương trình m·sinx + (m−1)cosx = 2m−1 có nghiệm khi?', options: ['0 ≤ m ≤ 1', 'm ≤ 0', 'm ≥ 1', 'Mọi m'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Tìm m để phương trình (m−2)sinx + 3cosx = 5 có nghiệm.', options: ['m ≥ 6 hoặc m ≤ −2', '−2 ≤ m ≤ 6', 'm ≥ 6', 'm ≤ −2'], correctIndex: 0 },
        { question: 'Tìm m để phương trình m·sinx + (m+1)cosx = 1 vô nghiệm.', options: ['−1 < m < 0', 'm < −1', 'm > 0', '−1 ≤ m ≤ 0'], correctIndex: 0 },
        {
          question: 'Tìm m để phương trình (2m−1)sinx + (m+1)cosx = 3m−2 có nghiệm.',
          options: [
            '(5−√17)/4 ≤ m ≤ (5+√17)/4',
            'm ≤ (5−√17)/4',
            'm ≥ (5+√17)/4',
            'Vô nghiệm với mọi m',
          ],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm m để phương trình (m+3)sinx − 4cosx = 5 có nghiệm.',
          solution: [
            'Điều kiện: $(m+3)^2+16\\ge25 \\Leftrightarrow (m+3)^2\\ge9$',
            '$\\Leftrightarrow m+3\\ge3$ hoặc $m+3\\le-3 \\Leftrightarrow m\\ge0$ hoặc $m\\le-6$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm m để phương trình (m−1)sinx + (m+1)cosx = 2m có nghiệm.',
          solution: [
            'Điều kiện: $(m-1)^2+(m+1)^2\\ge(2m)^2$',
            '$(m^2-2m+1)+(m^2+2m+1)\\ge4m^2 \\Leftrightarrow 2m^2+2\\ge4m^2$',
            '$\\Leftrightarrow 2\\ge2m^2 \\Leftrightarrow m^2\\le1 \\Leftrightarrow -1\\le m\\le1$',
          ],
        },
      ],
    },
  },

  'hsg-day-so-truy-hoi': {
    title: 'Dãy số truy hồi & giới hạn nâng cao',
    theory: {
      cards: [
        {
          title: 'Dãy truy hồi tuyến tính bậc nhất',
          formulas: ['u_{n+1}=au_n+b\\ \\ (a\\ne1)', 'c=\\dfrac{b}{1-a}'],
          note: 'Mẹo: đặt vn = un − c (c là điểm bất động, nghiệm của c = ac+b), khi đó vn+1 = a·vn — dãy (vn) là cấp số nhân công bội a, dễ tìm công thức tổng quát.',
        },
        {
          title: 'Giới hạn của dãy truy hồi',
          formulas: ['|a|<1 \\Rightarrow \\lim u_n=c'],
          note: 'Mẹo: nếu |a| < 1 thì vn = (u1−c)aⁿ⁻¹ → 0, suy ra un → c. Nếu |a| ≥ 1 và u1 ≠ c thì dãy không hội tụ (trừ khi a = 1, b = 0).',
        },
      ],
    },
    video: { caption: '00:00 / 19:05 — hsg_day_so_truy_hoi_baigiang.mp4' },
    quiz: [
      { question: 'Dãy un+1 = 2un + 1, u1 = 1. Điểm bất động c thoả mãn?', options: ['c = −1', 'c = 1', 'c = 2', 'c = 0'], correctIndex: 0 },
      { question: 'Với dãy ở câu trên, đặt vn = un + 1. Dãy (vn) là?', options: ['Cấp số cộng công sai 2', 'Cấp số nhân công bội 2', 'Cấp số nhân công bội 1', 'Không phải cấp số'], correctIndex: 1 },
      { question: 'Dãy un+1 = (1/2)un + 3. Giới hạn của un khi n → ∞ bằng?', options: ['3', '6', '0', 'Không tồn tại'], correctIndex: 1 },
      {
        question: 'Dãy un+1 = 3un − 4, u1 = 2 (điểm bất động c = 2 = u1). Đây là dãy gì?',
        options: ['Dãy hằng', 'Cấp số cộng', 'Cấp số nhân', 'Không xác định'],
        correctIndex: 0,
      },
      {
        question: 'Với dãy truy hồi un+1 = aun + b (a ≠ 1), công thức tổng quát un theo n là?',
        options: ['un = c + (u1−c)aⁿ⁻¹', 'un = aⁿu1', 'un = u1 + b(n−1)', 'un = c + an'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho dãy số u1 = 1, un+1 = 2un + 1. Tìm công thức tổng quát của un.',
        solution: [
          'Điểm bất động: $c=2c+1 \\Rightarrow c=-1$',
          'Đặt $v_n=u_n+1$: $v_1=2$, và $v_{n+1}=u_{n+1}+1=2u_n+2=2(u_n+1)=2v_n$',
          '$(v_n)$ là cấp số nhân công bội 2: $v_n=2\\cdot2^{n-1}=2^n$',
          'Suy ra $u_n=2^n-1$',
        ],
      },
      {
        prompt: 'Bài 2. Với dãy ở Bài 1, tính u5.',
        solution: ['$u_5=2^5-1=31$'],
      },
      {
        prompt: 'Bài 3. Cho dãy u1 = 3, un+1 = (1/3)un + 2. Tìm công thức tổng quát un.',
        solution: [
          'Điểm bất động: $c=\\dfrac{2}{1-\\frac13}=3$',
          'Vì $u_1=3=c$ nên $u_n=3$ với mọi n (dãy hằng).',
        ],
      },
      {
        prompt: 'Bài 4. Cho dãy u1 = 0, un+1 = 3un + 2. Tìm un theo n.',
        solution: [
          'Điểm bất động: $c=\\dfrac{2}{1-3}=-1$',
          'Đặt $v_n=u_n+1$: $v_1=1$, $v_{n+1}=3v_n \\Rightarrow v_n=3^{n-1}$',
          'Suy ra $u_n=3^{n-1}-1$',
        ],
      },
      {
        prompt: 'Bài 5. Tính giới hạn của dãy un+1 = (1/2)un + 1, u1 = 0 khi n → ∞ (chỉ cần áp dụng điều kiện hội tụ, không cần tìm công thức tổng quát).',
        solution: [
          'Điểm bất động: $c=\\dfrac{1}{1-\\frac12}=2$',
          'Vì $|a|=\\dfrac12<1$ nên dãy hội tụ về c, tức $\\lim u_n=2$',
        ],
      },
    ],
    flashcards: [
      { front: 'Điểm bất động của dãy un+1 = a·un + b', back: '$c=\\dfrac{b}{1-a}$' },
      { front: 'Đặt ẩn phụ để giải dãy truy hồi', back: '$v_n=u_n-c$' },
      { front: 'Công thức tổng quát un (qua vn)', back: '$u_n=c+(u_1-c)a^{n-1}$' },
      { front: 'Điều kiện dãy truy hồi hội tụ', back: '$|a|<1 \\Rightarrow \\lim u_n=c$' },
      { front: 'Dãy (vn) trong phương pháp điểm bất động là', back: 'Cấp số nhân công bội $a$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Điểm bất động c của dãy un+1 = a·un + b (a ≠ 1) thoả mãn?', options: ['c = ac + b', 'c = a + b', 'c = ab', 'c = a/b'], correctIndex: 0 },
        { question: 'Đặt vn = un − c thì dãy (vn) là?', options: ['Cấp số nhân công bội a', 'Cấp số cộng công sai a', 'Dãy hằng', 'Không xác định'], correctIndex: 0 },
        { question: 'Nếu |a| < 1 thì lim un bằng?', options: ['c', '0', '+∞', 'Không tồn tại'], correctIndex: 0 },
        { question: 'Công thức tổng quát un theo n (qua điểm bất động c) là?', options: ['un = c + (u1−c)aⁿ⁻¹', 'un = aⁿu1', 'un = u1 + b(n−1)', 'un = c + an'], correctIndex: 0 },
        { question: 'Nếu u1 = c (điểm bất động) thì dãy un là?', options: ['Dãy hằng', 'Cấp số cộng', 'Cấp số nhân', 'Không xác định'], correctIndex: 0 },
        { question: 'Dãy un+1 = 2un + 1, u1 = 1. Điểm bất động c thoả mãn?', options: ['c = −1', 'c = 1', 'c = 2', 'c = 0'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Với dãy ở câu trên, đặt vn = un + 1. Dãy (vn) là?', options: ['Cấp số nhân công bội 2', 'Cấp số cộng công sai 2', 'Cấp số nhân công bội 1', 'Không phải cấp số'], correctIndex: 0 },
        { question: 'Dãy un+1 = (1/2)un + 3. Giới hạn của un khi n → ∞ bằng?', options: ['6', '3', '0', 'Không tồn tại'], correctIndex: 0 },
        { question: 'Dãy un+1 = 3un − 4, u1 = 2. Đây là dãy gì?', options: ['Dãy hằng', 'Cấp số cộng', 'Cấp số nhân', 'Không xác định'], correctIndex: 0 },
        { question: 'Cho dãy u1 = 2, un+1 = 4un − 3. Điểm bất động c bằng?', options: ['1', '2', '3', '−1'], correctIndex: 0 },
        { question: 'Với dãy ở câu trên, đặt vn = un − 1. Giá trị v1 bằng?', options: ['1', '2', '0', '3'], correctIndex: 0 },
        { question: 'Với dãy ở hai câu trên, công bội của cấp số nhân (vn) bằng?', options: ['4', '3', '2', '1'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Cho dãy u1 = 2, un+1 = 4un − 3 (điểm bất động c = 1). Số hạng u4 bằng?', options: ['65', '64', '63', '16'], correctIndex: 0 },
        { question: 'Cho dãy u1 = 1, un+1 = (1/3)un + 4. Tìm lim un.', options: ['6', '4', '3', '12'], correctIndex: 0 },
        { question: 'Cho dãy u1 = 5, un+1 = 2un − 3 (điểm bất động c = 3). Số hạng u5 bằng?', options: ['35', '32', '29', '64'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho dãy số u1 = 4, un+1 = 3un − 2. Tìm công thức tổng quát của un.',
          solution: [
            'Điểm bất động: $c=3c-2 \\Rightarrow c=1$',
            'Đặt $v_n=u_n-1$: $v_1=3$, và $v_{n+1}=u_{n+1}-1=3u_n-3=3(u_n-1)=3v_n$',
            '$(v_n)$ là cấp số nhân công bội 3: $v_n=3\\cdot3^{n-1}=3^n$',
            'Suy ra $u_n=3^n+1$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho dãy số u1 = 0, un+1 = 2un + 3. Tìm un theo n và tính lim(un/2ⁿ).',
          solution: [
            'Điểm bất động: $c=\\dfrac{3}{1-2}=-3$',
            'Đặt $v_n=u_n+3$: $v_1=3$, $v_{n+1}=2v_n \\Rightarrow v_n=3\\cdot2^{n-1}$',
            'Suy ra $u_n=3\\cdot2^{n-1}-3$',
            '$\\dfrac{u_n}{2^n}=\\dfrac{3\\cdot2^{n-1}}{2^n}-\\dfrac{3}{2^n}=\\dfrac32-\\dfrac{3}{2^n} \\to \\dfrac32$',
          ],
        },
      ],
    },
  },

  'hsg-cuc-tri-hinh-khong-gian': {
    title: 'Cực trị hình học không gian',
    theory: {
      cards: [
        {
          title: 'Phương pháp tìm cực trị hình học không gian',
          formulas: ['V(x),\\ S(x),\\ d(x) \\ \\to\\ \\min/\\max'],
          note: 'Mẹo: đưa đại lượng cần tìm cực trị về hàm một biến (thường là một độ dài), rồi dùng đạo hàm hoặc bất đẳng thức Cô-si để tìm min/max.',
        },
        {
          title: 'Ứng dụng BĐT Cô-si trong cực trị hình học',
          formulas: ['abc\\le\\left(\\dfrac{a+b+c}{3}\\right)^3'],
          note: 'Mẹo: BĐT Cô-si cho 3 số thường dùng khi bài toán có tổng 3 đại lượng không đổi (ví dụ tổng 3 kích thước hộp) và cần tìm thể tích lớn nhất.',
        },
      ],
    },
    video: { caption: '00:00 / 20:15 — hsg_cuc_tri_hinh_khong_gian_baigiang.mp4' },
    quiz: [
      {
        question: 'Trong các hình hộp chữ nhật có tổng 3 kích thước bằng 12, hình nào có thể tích lớn nhất?',
        options: ['Hình hộp bất kỳ', 'Hình lập phương cạnh 4', 'Hình hộp dẹt', 'Không xác định'],
        correctIndex: 1,
      },
      { question: 'Thể tích lớn nhất của hình hộp ở câu trên bằng?', options: ['48', '64', '144', '12'], correctIndex: 1 },
      {
        question: 'Trong các hình chóp tam giác đều có thể tích không đổi, hình có diện tích toàn phần nhỏ nhất là?',
        options: ['Hình chóp bất kỳ', 'Hình chóp "cân đối" tối ưu giữa đáy và chiều cao', 'Không tồn tại', 'Hình chóp cao nhất'],
        correctIndex: 1,
      },
      {
        question: 'Phương pháp phổ biến để tìm cực trị hình học không gian là?',
        options: ['Đưa về hàm một biến rồi khảo sát', 'Đoán', 'Vẽ hình rồi ước lượng', 'Không có phương pháp chung'],
        correctIndex: 0,
      },
      {
        question: 'Trong hình trụ có thể tích không đổi, để diện tích toàn phần nhỏ nhất thì quan hệ giữa bán kính r và chiều cao h là?',
        options: ['h = 2r', 'h = r', 'h = r/2', 'h = 3r'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Trong các hình hộp chữ nhật có tổng 3 kích thước bằng 15, tìm kích thước để thể tích lớn nhất.',
        solution: [
          'Theo Cô-si: $abc\\le\\left(\\dfrac{a+b+c}{3}\\right)^3=5^3=125$',
          'Dấu bằng khi $a=b=c=5$. Vậy $V_{\\max}=125$ khi hình hộp là lập phương cạnh 5.',
        ],
      },
      {
        prompt: 'Bài 2. Một hình hộp chữ nhật đáy vuông cạnh x, thể tích không đổi V = x²h = 32. Tính diện tích xung quanh Sxq = 4xh theo x.',
        solution: ['$h=\\dfrac{32}{x^2} \\Rightarrow S_{xq}=4x\\cdot\\dfrac{32}{x^2}=\\dfrac{128}{x}$'],
      },
      {
        prompt: 'Bài 3. Với hình hộp ở Bài 2, tìm x để tổng S = x² + 128/x nhỏ nhất.',
        solution: [
          '$S=x^2+\\dfrac{64}{x}+\\dfrac{64}{x}\\ge3\\sqrt[3]{x^2\\cdot\\dfrac{64}{x}\\cdot\\dfrac{64}{x}}=3\\sqrt[3]{4096}=48$',
          'Dấu bằng khi $x^2=\\dfrac{64}{x} \\Leftrightarrow x^3=64 \\Leftrightarrow x=4$. Vậy $S_{\\min}=48$ khi $x=4$.',
        ],
      },
      {
        prompt:
          'Bài 4. Trong các hình trụ có thể tích không đổi V0 = πr²h, biết diện tích toàn phần nhỏ nhất khi h = 2r. Áp dụng với V0 = 16π, tìm r, h.',
        solution: [
          '$\\pi r^2h=16\\pi \\Rightarrow r^2h=16$',
          'Với $h=2r$: $r^2\\cdot2r=16 \\Rightarrow 2r^3=16 \\Rightarrow r^3=8 \\Rightarrow r=2,\\ h=4$',
        ],
      },
      {
        prompt:
          'Bài 5. Một khối hộp chữ nhật không nắp, đáy vuông cạnh x, chiều cao h, tổng diện tích đáy và 4 mặt bên S = x² + 4xh = 48. Lập biểu thức thể tích V(x).',
        solution: [
          '$h=\\dfrac{48-x^2}{4x}$',
          '$V(x)=x^2h=x^2\\cdot\\dfrac{48-x^2}{4x}=\\dfrac{48x-x^3}{4}$',
        ],
      },
    ],
    flashcards: [
      { front: 'BĐT Cô-si cho 3 số không âm', back: '$abc\\le\\left(\\dfrac{a+b+c}{3}\\right)^3$' },
      { front: 'Điều kiện dấu bằng BĐT Cô-si 3 số', back: '$a=b=c$' },
      { front: 'Quan hệ h, r khi hình trụ thể tích không đổi có Stp nhỏ nhất', back: '$h=2r$' },
      { front: 'Phương pháp chung tìm cực trị hình không gian', back: 'Đưa về hàm một biến, dùng đạo hàm hoặc Cô-si' },
      { front: 'Thể tích khối hộp chữ nhật', back: '$V=abc$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Trong các hình hộp chữ nhật có tổng 3 kích thước không đổi, thể tích lớn nhất khi?', options: ['Ba kích thước bằng nhau (hình lập phương)', 'Một kích thước bằng 0', 'Hai kích thước bằng nhau', 'Không xác định'], correctIndex: 0 },
        { question: 'BĐT Cô-si cho 3 số không âm là?', options: ['abc ≤ ((a+b+c)/3)³', 'abc ≥ ((a+b+c)/3)³', 'a+b+c ≤ 3abc', 'abc = (a+b+c)/3'], correctIndex: 0 },
        { question: 'Dấu bằng trong BĐT Cô-si 3 số xảy ra khi nào?', options: ['a = b = c', 'a = 0', 'abc = 0', 'a+b+c = 0'], correctIndex: 0 },
        { question: 'Phương pháp phổ biến để tìm cực trị hình học không gian là?', options: ['Đưa về hàm một biến rồi khảo sát', 'Đoán', 'Vẽ hình rồi ước lượng', 'Không có phương pháp chung'], correctIndex: 0 },
        { question: 'Trong hình trụ có thể tích không đổi, để diện tích toàn phần nhỏ nhất, quan hệ giữa r và h là?', options: ['h = 2r', 'h = r', 'h = r/2', 'h = 3r'], correctIndex: 0 },
        { question: 'Thể tích khối hộp chữ nhật với 3 kích thước a, b, c là?', options: ['V = abc', 'V = a+b+c', 'V = 2(ab+bc+ca)', 'V = a²+b²+c²'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Trong các hình hộp chữ nhật có tổng 3 kích thước bằng 12, thể tích lớn nhất bằng?', options: ['64', '48', '144', '12'], correctIndex: 0 },
        { question: 'Với câu trên, thể tích lớn nhất đạt được khi hình hộp có kích thước bằng?', options: ['4, 4, 4', '3, 4, 5', '2, 4, 6', '6, 6, 0'], correctIndex: 0 },
        { question: 'Một hình hộp chữ nhật đáy vuông cạnh x, thể tích không đổi V = x²h = 54. Chiều cao h theo x là?', options: ['h = 54/x²', 'h = 54x', 'h = 54/x', 'h = x²/54'], correctIndex: 0 },
        { question: 'Với câu trên, diện tích xung quanh Sxq = 4xh theo x là?', options: ['216/x', '54/x', '4x', '216x'], correctIndex: 0 },
        { question: 'Trong hình trụ có V0 = 54π, biết Stp nhỏ nhất khi h = 2r. Tìm r.', options: ['r = 3', 'r = 2', 'r = 4', 'r = 6'], correctIndex: 0 },
        { question: 'Với câu trên, h bằng?', options: ['6', '3', '9', '12'], correctIndex: 0 },
        // Vận dụng (3)
        {
          question: 'Một khối hộp chữ nhật không nắp, đáy vuông cạnh x, diện tích toàn phần S = x² + 4xh = 48 (cố định), thể tích V(x) = (48x−x³)/4. Thể tích lớn nhất đạt tại giá trị x nào?',
          options: ['x = 4', 'x = 6', 'x = 8', 'x = 2'],
          correctIndex: 0,
        },
        { question: 'Với câu trên, thể tích lớn nhất bằng?', options: ['32', '48', '64', '16'], correctIndex: 0 },
        {
          question: 'Trong các hình hộp chữ nhật có tổng 3 kích thước bằng 18, một kích thước cố định bằng 6 (hai kích thước còn lại có tổng 12), thể tích lớn nhất bằng?',
          options: ['216', '432', '108', '72'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Trong các hình hộp chữ nhật có tổng 3 kích thước bằng 21, tìm kích thước để thể tích lớn nhất và tính giá trị lớn nhất đó.',
          solution: [
            'Theo Cô-si: $abc\\le\\left(\\dfrac{a+b+c}{3}\\right)^3=7^3=343$',
            'Dấu bằng khi $a=b=c=7$. Vậy $V_{\\max}=343$ khi hình hộp là lập phương cạnh 7.',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một hình hộp chữ nhật đáy vuông cạnh x, thể tích không đổi V = x²h = 64. Tìm x để diện tích toàn phần Stp = 2x² + 4xh nhỏ nhất.',
          solution: [
            '$h=\\dfrac{64}{x^2} \\Rightarrow S_{tp}=2x^2+4x\\cdot\\dfrac{64}{x^2}=2x^2+\\dfrac{256}{x}=2x^2+\\dfrac{128}{x}+\\dfrac{128}{x}$',
            'Theo Cô-si: $\\ge3\\sqrt[3]{2x^2\\cdot\\dfrac{128}{x}\\cdot\\dfrac{128}{x}}=3\\sqrt[3]{32768}=3\\cdot32=96$',
            'Dấu "=" khi $2x^2=\\dfrac{128}{x} \\Leftrightarrow x^3=64 \\Leftrightarrow x=4$. Vậy $S_{tp,\\min}=96$ tại $x=4$ (khi đó $h=4$).',
          ],
        },
      ],
    },
  },

  'hsg-xac-suat-nang-cao': {
    title: 'Xác suất nâng cao (biến ngẫu nhiên, kỳ vọng)',
    theory: {
      cards: [
        {
          title: 'Biến ngẫu nhiên rời rạc và kỳ vọng',
          formulas: ['E(X)=\\sum_{i=1}^n x_ip_i'],
          note: 'Mẹo: kỳ vọng E(X) là giá trị trung bình "theo lý thuyết" của biến ngẫu nhiên — tổng của mỗi giá trị nhân với xác suất tương ứng.',
        },
        {
          title: 'Phương sai của biến ngẫu nhiên',
          formulas: ['V(X)=\\sum_{i=1}^n (x_i-E(X))^2p_i', 'V(X)=E(X^2)-[E(X)]^2'],
          note: 'Mẹo: công thức tính nhanh V(X) = E(X²) − [E(X)]², với E(X²) = Σxi²pi — thường tính nhanh hơn công thức gốc.',
        },
      ],
    },
    video: { caption: '00:00 / 17:50 — hsg_xac_suat_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Kỳ vọng E(X) của biến ngẫu nhiên rời rạc được tính bằng công thức nào?', options: ['Σxi', 'Σxi·pi', 'Σpi', 'Σxi²pi'], correctIndex: 1 },
      { question: 'Gieo một xúc xắc, X là số chấm xuất hiện. E(X) bằng?', options: ['3', '3.5', '4', '21'], correctIndex: 1 },
      { question: 'Tổng các xác suất trong bảng phân bố của biến ngẫu nhiên X luôn bằng?', options: ['0', '0.5', '1', 'Tuỳ trường hợp'], correctIndex: 2 },
      { question: 'Công thức tính nhanh phương sai V(X) là?', options: ['E(X²) + [E(X)]²', 'E(X²) − [E(X)]²', 'E(X) − E(X²)', '[E(X)]² − E(X²)'], correctIndex: 1 },
      {
        question: 'Nếu X chỉ nhận 2 giá trị 0 và 1 với P(X=1) = p, đây gọi là phân bố gì?',
        options: ['Phân bố đều', 'Phân bố Bernoulli', 'Phân bố chuẩn', 'Phân bố nhị thức đầy đủ'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Gieo một đồng xu cân đối 2 lần, X là số lần xuất hiện mặt sấp. Lập bảng phân bố xác suất của X.',
        solution: [
          '$X\\in\\{0,1,2\\}$',
          '$P(X=0)=\\dfrac14$ (NN), $P(X=1)=\\dfrac12$ (SN, NS), $P(X=2)=\\dfrac14$ (SS)',
        ],
      },
      {
        prompt: 'Bài 2. Với X ở Bài 1, tính E(X).',
        solution: ['$E(X)=0\\cdot\\dfrac14+1\\cdot\\dfrac12+2\\cdot\\dfrac14=1$'],
      },
      {
        prompt: 'Bài 3. Với X ở Bài 1, tính E(X²) rồi suy ra V(X).',
        solution: [
          '$E(X^2)=0^2\\cdot\\dfrac14+1^2\\cdot\\dfrac12+2^2\\cdot\\dfrac14=1.5$',
          '$V(X)=E(X^2)-[E(X)]^2=1.5-1=0.5$',
        ],
      },
      {
        prompt: 'Bài 4. Một hộp có 3 bi đỏ, 2 bi xanh. Lấy ngẫu nhiên 1 bi, gọi X = 1 nếu được bi đỏ, X = 0 nếu được bi xanh. Tính E(X).',
        solution: [
          '$P(X=1)=\\dfrac35,\\quad P(X=0)=\\dfrac25$',
          '$E(X)=1\\cdot\\dfrac35+0\\cdot\\dfrac25=\\dfrac35$',
        ],
      },
      {
        prompt:
          'Bài 5. Một trò chơi: thắng 100.000đ với xác suất 0.2, hoà (0đ) với xác suất 0.5, thua mất 50.000đ với xác suất 0.3. Tính số tiền trung bình người chơi nhận được.',
        solution: [
          '$E(X)=100000\\cdot0.2+0\\cdot0.5+(-50000)\\cdot0.3$',
          '$E(X)=20000-15000=5000$ (đồng)',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức kỳ vọng E(X)', back: '$E(X)=\\sum x_ip_i$' },
      { front: 'Công thức phương sai V(X)', back: '$V(X)=\\sum(x_i-E(X))^2p_i$' },
      { front: 'Công thức tính nhanh phương sai', back: '$V(X)=E(X^2)-[E(X)]^2$' },
      { front: 'Tổng xác suất trong bảng phân bố', back: '$\\sum p_i=1$' },
      { front: 'Độ lệch chuẩn của biến ngẫu nhiên', back: '$\\sigma(X)=\\sqrt{V(X)}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Kỳ vọng E(X) của biến ngẫu nhiên rời rạc được tính bằng công thức nào?', options: ['Σxi·pi', 'Σxi', 'Σpi', 'Σxi²pi'], correctIndex: 0 },
        { question: 'Tổng các xác suất trong bảng phân bố của biến ngẫu nhiên X luôn bằng?', options: ['1', '0', '0,5', 'Tuỳ trường hợp'], correctIndex: 0 },
        { question: 'Công thức tính nhanh phương sai V(X) là?', options: ['E(X²) − [E(X)]²', 'E(X²) + [E(X)]²', 'E(X) − E(X²)', '[E(X)]² − E(X²)'], correctIndex: 0 },
        { question: 'Nếu X chỉ nhận 2 giá trị 0 và 1 với P(X=1) = p, đây gọi là phân bố gì?', options: ['Phân bố Bernoulli', 'Phân bố đều', 'Phân bố chuẩn', 'Phân bố nhị thức đầy đủ'], correctIndex: 0 },
        { question: 'Độ lệch chuẩn σ(X) liên hệ với phương sai như thế nào?', options: ['σ(X) = √(V(X))', 'σ(X) = V(X)', 'σ(X) = V(X)²', 'σ(X) = 2V(X)'], correctIndex: 0 },
        { question: 'Gieo một xúc xắc, X là số chấm xuất hiện. E(X) bằng?', options: ['3,5', '3', '4', '21'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Gieo một đồng xu cân đối 2 lần, X là số lần xuất hiện mặt sấp. P(X=1) bằng?', options: ['1/2', '1/4', '1/3', '3/4'], correctIndex: 0 },
        { question: 'Với X ở câu trên, E(X) bằng?', options: ['1', '0,5', '1,5', '2'], correctIndex: 0 },
        { question: 'Với X ở câu trên, E(X²) bằng?', options: ['1,5', '1', '2', '0,5'], correctIndex: 0 },
        { question: 'Với X ở hai câu trên, V(X) bằng?', options: ['0,5', '1', '1,5', '0'], correctIndex: 0 },
        { question: 'Một hộp có 3 bi đỏ, 2 bi xanh. X = 1 nếu bốc được bi đỏ, X = 0 nếu bốc được bi xanh. E(X) bằng?', options: ['3/5', '2/5', '1/2', '1'], correctIndex: 0 },
        { question: 'Một trò chơi: thắng 100.000đ với xác suất 0,2, hoà (0đ) xác suất 0,5, thua mất 50.000đ xác suất 0,3. Số tiền trung bình nhận được là?', options: ['5.000đ', '10.000đ', '0đ', '20.000đ'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Biến ngẫu nhiên X có bảng phân bố: P(X=1)=0,3; P(X=2)=0,5; P(X=3)=0,2. Tính E(X).', options: ['1,9', '2', '1,5', '2,5'], correctIndex: 0 },
        { question: 'Với X ở câu trên, tính E(X²).', options: ['4,1', '3,9', '4,5', '3,61'], correctIndex: 0 },
        { question: 'Với X ở hai câu trên, tính V(X).', options: ['0,49', '0,41', '0,39', '0,51'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Gieo một xúc xắc cân đối. X = 1 nếu ra mặt 6 chấm, X = 0 nếu ngược lại. Lập bảng phân bố xác suất của X và tính E(X).',
          solution: ['$P(X=1)=\\dfrac16,\\quad P(X=0)=\\dfrac56$', '$E(X)=1\\cdot\\dfrac16+0\\cdot\\dfrac56=\\dfrac16$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một hộp có 4 bi đỏ, 6 bi xanh. Lấy ngẫu nhiên 2 bi cùng lúc, gọi X là số bi đỏ lấy được (X ∈ {0,1,2}). Lập bảng phân bố xác suất của X và tính E(X).',
          solution: [
            'Tổng số cách chọn 2 bi trong 10: $C_{10}^2=45$',
            '$P(X=0)=\\dfrac{C_6^2}{45}=\\dfrac{15}{45}=\\dfrac13;\\quad P(X=1)=\\dfrac{C_4^1C_6^1}{45}=\\dfrac{24}{45}=\\dfrac{8}{15};\\quad P(X=2)=\\dfrac{C_4^2}{45}=\\dfrac{6}{45}=\\dfrac{2}{15}$',
            '$E(X)=0\\cdot\\dfrac13+1\\cdot\\dfrac{8}{15}+2\\cdot\\dfrac{2}{15}=\\dfrac{12}{15}=\\dfrac45$',
          ],
        },
      ],
    },
  },

  'hsg-he-thuc-luong-nang-cao': {
    title: 'Hệ thức lượng nâng cao, góc — khoảng cách khó',
    theory: {
      cards: [
        {
          title: 'Định lý cos và định lý sin trong tam giác',
          formulas: ['a^2=b^2+c^2-2bc\\cos A', '\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R'],
          note: 'Mẹo: dùng định lý cos khi biết 2 cạnh và góc xen giữa (hoặc biết 3 cạnh); dùng định lý sin khi biết góc và cạnh đối diện tương ứng.',
        },
        {
          title: 'Diện tích tam giác qua các công thức nâng cao',
          formulas: ['S=\\dfrac12ab\\sin C', 'S=\\dfrac{abc}{4R}', 'S=pr'],
          note: 'Mẹo: chọn công thức phù hợp với dữ kiện đề bài — có góc xen giữa dùng công thức 1, có bán kính ngoại tiếp R dùng công thức 2, có bán kính nội tiếp r dùng công thức 3.',
        },
      ],
    },
    video: { caption: '00:00 / 21:00 — hsg_he_thuc_luong_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Định lý cos trong tam giác ABC: a² bằng?', options: ["b²+c²+2bc·cosA", "b²+c²−2bc·cosA", "b²−c²−2bc·cosA", "b²+c²"], correctIndex: 1 },
      { question: 'Định lý sin: a/sinA bằng?', options: ['R', '2R', 'R/2', '4R'], correctIndex: 1 },
      {
        question: 'Công thức diện tích tam giác khi biết 2 cạnh và góc xen giữa là?',
        options: ['S = (1/2)ab·sinC', 'S = abc/4R', 'S = pr', 'S = (1/2)ah'],
        correctIndex: 0,
      },
      { question: 'Công thức Heron tính diện tích tam giác theo 3 cạnh a, b, c và nửa chu vi p là?', options: ['S = √(p(p−a)(p−b)(p−c))', 'S = p(p−a)(p−b)(p−c)', 'S = √(pabc)', 'S = abc/p'], correctIndex: 0 },
      { question: 'Trong tam giác vuông, đường cao h ứng với cạnh huyền thoả hệ thức nào?', options: ["h² = b'·c'", "h = b' + c'", "h² = b' + c'", "h = b'·c'"], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho tam giác ABC có a = 7, b = 8, góc C = 60°. Tính cạnh c.',
        solution: [
          '$c^2=a^2+b^2-2ab\\cos C=49+64-2\\cdot7\\cdot8\\cdot\\dfrac12=113-56=57$',
          '$c=\\sqrt{57}$',
        ],
      },
      {
        prompt: 'Bài 2. Cho tam giác ABC có a = 6, góc A = 30°, góc B = 45°. Tính cạnh b.',
        solution: [
          '$\\dfrac{b}{\\sin B}=\\dfrac{a}{\\sin A} \\Rightarrow b=\\dfrac{a\\sin B}{\\sin A}=\\dfrac{6\\sin45^\\circ}{\\sin30^\\circ}$',
          '$b=\\dfrac{6\\cdot\\frac{\\sqrt2}{2}}{\\frac12}=6\\sqrt2$',
        ],
      },
      {
        prompt: 'Bài 3. Cho tam giác ABC có a = 5, b = 6, c = 7. Tính diện tích bằng công thức Heron.',
        solution: [
          '$p=\\dfrac{5+6+7}{2}=9$',
          '$S=\\sqrt{9\\cdot4\\cdot3\\cdot2}=\\sqrt{216}=6\\sqrt6$',
        ],
      },
      {
        prompt: 'Bài 4. Cho tam giác ABC có a = 4, b = 5, góc C = 60°. Tính diện tích tam giác.',
        solution: ['$S=\\dfrac12\\cdot4\\cdot5\\cdot\\sin60^\\circ=10\\cdot\\dfrac{\\sqrt3}{2}=5\\sqrt3$'],
      },
      {
        prompt: 'Bài 5. Cho tam giác đều cạnh a. Tính bán kính đường tròn ngoại tiếp R theo a.',
        solution: [
          'Theo định lý sin với góc $60^\\circ$: $\\dfrac{a}{\\sin60^\\circ}=2R$',
          '$R=\\dfrac{a}{2\\sin60^\\circ}=\\dfrac{a}{\\sqrt3}=\\dfrac{a\\sqrt3}{3}$',
        ],
      },
    ],
    flashcards: [
      { front: 'Định lý cos', back: '$a^2=b^2+c^2-2bc\\cos A$' },
      { front: 'Định lý sin', back: '$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$' },
      { front: 'Diện tích tam giác qua 2 cạnh và góc xen giữa', back: '$S=\\dfrac12 ab\\sin C$' },
      { front: 'Công thức Heron', back: '$S=\\sqrt{p(p-a)(p-b)(p-c)}$' },
      { front: 'Diện tích tam giác qua bán kính nội tiếp', back: '$S=pr$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Định lý cos trong tam giác ABC: a² bằng?', options: ['b² + c² − 2bc·cosA', 'b² + c² + 2bc·cosA', 'b² − c² − 2bc·cosA', 'b² + c²'], correctIndex: 0 },
        { question: 'Định lý sin: a/sinA bằng?', options: ['2R', 'R', 'R/2', '4R'], correctIndex: 0 },
        { question: 'Công thức diện tích tam giác khi biết 2 cạnh và góc xen giữa là?', options: ['S = (1/2)ab·sinC', 'S = abc/4R', 'S = pr', 'S = (1/2)ah'], correctIndex: 0 },
        { question: 'Công thức Heron tính diện tích tam giác theo 3 cạnh a, b, c và nửa chu vi p là?', options: ['S = √(p(p−a)(p−b)(p−c))', 'S = p(p−a)(p−b)(p−c)', 'S = √(pabc)', 'S = abc/p'], correctIndex: 0 },
        { question: 'Trong tam giác vuông, đường cao h ứng với cạnh huyền thoả hệ thức nào?', options: ["h² = b'·c'", "h = b' + c'", "h² = b' + c'", "h = b'·c'"], correctIndex: 0 },
        { question: 'Công thức diện tích tam giác qua bán kính đường tròn ngoại tiếp R là?', options: ['S = abc/(4R)', 'S = abc·R', 'S = abc/R', 'S = abc·4R'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Cho tam giác ABC có a = 6, b = 8, góc C = 60°. Cạnh c bằng?', options: ['2√13', '2√11', '4√3', '6'], correctIndex: 0 },
        { question: 'Cho tam giác ABC có a = 4, góc A = 30°, góc B = 60°. Cạnh b bằng?', options: ['4√3', '4√2', '8', '2√3'], correctIndex: 0 },
        { question: 'Cho tam giác ABC có a = 3, b = 4, c = 5. Diện tích (Heron) bằng?', options: ['6', '12', '30', '√30'], correctIndex: 0 },
        { question: 'Cho tam giác ABC có a = 5, b = 7, góc C = 60°. Diện tích tam giác bằng?', options: ['35√3/4', '35/2', '35√3/2', '17,5'], correctIndex: 0 },
        { question: 'Cho tam giác đều cạnh a = 6. Bán kính đường tròn ngoại tiếp R bằng?', options: ['2√3', '3', '2√2', '4'], correctIndex: 0 },
        { question: "Cho tam giác ABC vuông tại A, đường cao AH ứng cạnh huyền, biết HB = 4, HC = 9. Độ dài AH bằng?", options: ['6', '36', '13', '6,5'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Cho tam giác ABC có a = 7, b = 9, c = 8. Diện tích tam giác (Heron) bằng?', options: ['12√5', '6√5', '24√5', '10√5'], correctIndex: 0 },
        { question: 'Cho tam giác ABC có góc A = 60°, b = 10, c = 6. Cạnh a bằng?', options: ['2√19', '2√17', '4√19', '76'], correctIndex: 0 },
        { question: 'Cho tam giác ABC nội tiếp đường tròn bán kính R = 5, góc A = 30°. Cạnh a (đối diện góc A) bằng?', options: ['5', '10', '2,5', '5√3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho tam giác ABC có b = 8, c = 5, góc A = 120°. Tính cạnh a và diện tích tam giác.',
          solution: [
            '$a^2=b^2+c^2-2bc\\cos A=64+25-2\\cdot8\\cdot5\\cdot\\left(-\\dfrac12\\right)=89+40=129 \\Rightarrow a=\\sqrt{129}$',
            '$S=\\dfrac12\\cdot8\\cdot5\\cdot\\sin120^\\circ=20\\cdot\\dfrac{\\sqrt3}{2}=10\\sqrt3$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Cho tam giác ABC có a = 13, b = 14, c = 15. Tính diện tích S bằng công thức Heron, suy ra bán kính đường tròn nội tiếp r và bán kính đường tròn ngoại tiếp R.',
          solution: [
            '$p=\\dfrac{13+14+15}{2}=21$',
            '$S=\\sqrt{21\\cdot8\\cdot7\\cdot6}=\\sqrt{7056}=84$',
            '$r=\\dfrac{S}{p}=\\dfrac{84}{21}=4$',
            '$R=\\dfrac{abc}{4S}=\\dfrac{13\\cdot14\\cdot15}{4\\cdot84}=\\dfrac{2730}{336}=\\dfrac{65}{8}$',
          ],
        },
      ],
    },
  },
}
