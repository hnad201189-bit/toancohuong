import { EXAM_DEFAULT } from './examDefault.mjs'

export const DAI_SO = {
  'day-so': {
    title: 'Dãy số và các tính chất',
    theory: {
      cards: [
        {
          title: 'Định nghĩa và cách cho dãy số',
          formulas: ['u_n = f(n), \\quad n \\in \\mathbb{N}^*'],
          note: 'Mẹo: có 3 cách cho một dãy số — công thức tổng quát un = f(n), hệ thức truy hồi (cho u1 và un theo un-1), hoặc mô tả/liệt kê.',
        },
        {
          title: 'Dãy số tăng, giảm, bị chặn',
          formulas: ['u_{n+1} - u_n > 0', 'u_{n+1} - u_n < 0'],
          note: 'Mẹo: dòng công thức thứ nhất ứng với dãy tăng, dòng thứ hai ứng với dãy giảm. Nếu un > 0 với mọi n, có thể so sánh thương un+1/un với 1 để xét nhanh hơn.',
        },
      ],
    },
    video: { caption: '00:00 / 10:12 — day_so_tinh_chat_baigiang.mp4' },
    quiz: [
      {
        question: 'Cho dãy số un = 2n − 1. Số hạng u5 bằng?',
        options: ['7', '9', '11', '8'],
        correctIndex: 1,
      },
      {
        question: 'Dãy số un = 3n + 2 là dãy số:',
        options: ['Tăng', 'Giảm', 'Không tăng không giảm', 'Bị chặn trên'],
        correctIndex: 0,
      },
      {
        question: 'Dãy số un = 1/n (n ≥ 1) là dãy số:',
        options: ['Tăng', 'Giảm', 'Không đổi', 'Không xác định'],
        correctIndex: 1,
      },
      {
        question: 'Dãy số un = (−1)ⁿ có tính chất nào sau đây?',
        options: [
          'Là dãy tăng',
          'Là dãy giảm',
          'Không tăng không giảm (dao động)',
          'Bị chặn dưới nhưng không bị chặn trên',
        ],
        correctIndex: 2,
      },
      {
        question: 'Dãy số un xác định bởi u1 = 1, un+1 = un + 3. Số hạng u4 bằng?',
        options: ['7', '9', '10', '13'],
        correctIndex: 2,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho dãy số un = n² − 3n + 2. Tính u1, u2, u3, u4.',
        solution: [
          '$u_1 = 1-3+2 = 0,\\quad u_2 = 4-6+2 = 0$',
          '$u_3 = 9-9+2 = 2,\\quad u_4 = 16-12+2 = 6$',
        ],
      },
      {
        prompt: 'Bài 2. Xét tính tăng, giảm của dãy số un = 1/(n+1).',
        solution: [
          '$u_{n+1}-u_n = \\dfrac{1}{n+2}-\\dfrac{1}{n+1} = \\dfrac{-1}{(n+1)(n+2)} < 0$',
          'Vậy dãy số giảm.',
        ],
      },
      {
        prompt: 'Bài 3. Cho dãy số xác định bởi u1 = 2, un+1 = 2un − 1. Tính u2, u3, u4.',
        solution: ['$u_2 = 2\\cdot2-1=3,\\quad u_3=2\\cdot3-1=5,\\quad u_4=2\\cdot5-1=9$'],
      },
      {
        prompt: 'Bài 4. Chứng minh dãy số un = (2n−1)/(n+1) là dãy số tăng.',
        solution: [
          '$u_{n+1}-u_n = \\dfrac{2n+1}{n+2}-\\dfrac{2n-1}{n+1} = \\dfrac{3}{(n+1)(n+2)} > 0$',
          'Vậy dãy số tăng.',
        ],
      },
      {
        prompt: 'Bài 5. Xét tính bị chặn của dãy số un = n/(n+1).',
        solution: [
          '$u_n = \\dfrac{n}{n+1} = 1-\\dfrac{1}{n+1}$',
          'Do đó $0 < u_n < 1$ với mọi n, vậy dãy số bị chặn.',
        ],
      },
    ],
    flashcards: [
      { front: 'Dãy số tăng', back: '$u_{n+1} > u_n\\ \\ \\forall n$' },
      { front: 'Dãy số giảm', back: '$u_{n+1} < u_n\\ \\ \\forall n$' },
      { front: 'Dãy bị chặn trên', back: '$u_n \\le M\\ \\ \\forall n$' },
      { front: 'Dãy bị chặn dưới', back: '$u_n \\ge m\\ \\ \\forall n$' },
      { front: 'Dãy số cho bởi truy hồi', back: 'u1 cho trước, $u_{n+1}=f(u_n)$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        {
          question: 'Dãy số un = f(n) xác định trên tập nào?',
          options: ['R', 'N*', 'Z', 'Q'],
          correctIndex: 1,
        },
        {
          question: 'Cho dãy số un = 3n − 1. Số hạng đầu u1 bằng?',
          options: ['1', '2', '3', '4'],
          correctIndex: 1,
        },
        {
          question: 'Cho dãy số un = 2n. Số hạng u4 bằng?',
          options: ['6', '8', '10', '4'],
          correctIndex: 1,
        },
        {
          question: 'Dãy số un được gọi là dãy tăng nếu:',
          options: ['un+1 > un với mọi n', 'un+1 < un với mọi n', 'un+1 = un với mọi n', 'un > 0 với mọi n'],
          correctIndex: 0,
        },
        {
          question: 'Dãy số un được gọi là bị chặn trên nếu:',
          options: [
            'Tồn tại M sao cho un ≤ M với mọi n',
            'Tồn tại m sao cho un ≥ m với mọi n',
            'un ≤ 0 với mọi n',
            'Dãy số un tăng',
          ],
          correctIndex: 0,
        },
        {
          question: 'Cho dãy số xác định bởi u1 = 3, un+1 = un + 2. Số hạng u2 bằng?',
          options: ['3', '5', '7', '4'],
          correctIndex: 1,
        },
        // Thông hiểu (6)
        {
          question: 'Cho dãy số un = 5n − 2. Số hạng u10 bằng?',
          options: ['45', '48', '50', '52'],
          correctIndex: 1,
        },
        {
          question: 'Dãy số un = −2n + 5 là dãy số:',
          options: ['Tăng', 'Giảm', 'Không đổi', 'Dao động'],
          correctIndex: 1,
        },
        {
          question: 'Cho dãy số un = n/(n+2). So sánh u5 và u10.',
          options: ['u5 < u10', 'u5 > u10', 'u5 = u10', 'Không so sánh được'],
          correctIndex: 0,
        },
        {
          question: 'Cho dãy số un = (−1)ⁿ · n. Số hạng u5 bằng?',
          options: ['5', '−5', '10', '−10'],
          correctIndex: 1,
        },
        {
          question: 'Dãy số un = 1/(2n−1) là dãy số:',
          options: ['Tăng', 'Giảm', 'Không đổi', 'Dao động'],
          correctIndex: 1,
        },
        {
          question: 'Cho dãy số xác định bởi u1 = 2, un+1 = 3un − 1. Số hạng u3 bằng?',
          options: ['11', '14', '17', '20'],
          correctIndex: 1,
        },
        // Vận dụng (3)
        {
          question: 'Cho dãy số un = n² − 5n + 6 (n ∈ N*). Giá trị nhỏ nhất của un bằng?',
          options: ['−1', '0', '1', '2'],
          correctIndex: 1,
        },
        {
          question: 'Cho dãy số u1 = 1, un+1 = un + 2n + 1. Số hạng u4 bằng?',
          options: ['9', '16', '25', '12'],
          correctIndex: 1,
        },
        {
          question: 'Dãy số un = (3n−1)/(n+2) bị chặn trên bởi giá trị nào sau đây?',
          options: ['2', '3', '4', 'Không bị chặn'],
          correctIndex: 1,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho dãy số un = 4n − 7. Viết 5 số hạng đầu tiên và xét tính tăng, giảm của dãy số.',
          solution: [
            '$u_1=-3,\\ u_2=1,\\ u_3=5,\\ u_4=9,\\ u_5=13$',
            '$u_{n+1}-u_n = 4 > 0$ với mọi $n$, vậy dãy số tăng.',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Cho dãy số xác định bởi u1 = 1, un+1 = un + 2n + 1 (n ≥ 1). Chứng minh un = n² với mọi n ≥ 1, từ đó tính u10.',
          solution: [
            'Quy nạp: với $n=1$, $u_1=1=1^2$ đúng.',
            'Giả sử $u_n=n^2$ đúng với $n=k$, ta chứng minh đúng với $n=k+1$:',
            '$u_{k+1}=u_k+2k+1=k^2+2k+1=(k+1)^2$',
            'Vậy $u_n=n^2$ với mọi $n\\ge1 \\Rightarrow u_{10}=10^2=100$',
          ],
        },
      ],
    },
  },

  'ham-so-mu-logarit': {
    title: 'Hàm số mũ và hàm số lôgarit',
    theory: {
      cards: [
        {
          title: 'Hàm số mũ y = aˣ',
          formulas: ['y=a^x,\\ a>0,\\ a\\ne1', 'a^{x_1+x_2}=a^{x_1}\\cdot a^{x_2}', '(a^x)^y=a^{xy}'],
          note: 'Mẹo: a > 1 → đồ thị đi lên (đồng biến); 0 < a < 1 → đồ thị đi xuống (nghịch biến). Đồ thị luôn đi qua điểm (0;1).',
        },
        {
          title: 'Hàm số lôgarit y = logₐx',
          formulas: ['y=\\log_a x,\\ x>0', '\\log_a(xy)=\\log_a x+\\log_a y', '\\log_a x^n = n\\log_a x'],
          note: 'Mẹo: mũ và lôgarit là hai phép toán ngược nhau: a^(log_a x) = x. Đồ thị log_a x luôn đi qua điểm (1;0).',
        },
      ],
    },
    video: { caption: '00:00 / 13:40 — ham_so_mu_logarit_baigiang.mp4' },
    quiz: [
      {
        question: 'Tập xác định của hàm số y = log2(x−1) là?',
        options: ['R', '(1; +∞)', '[1; +∞)', '(−∞; 1)'],
        correctIndex: 1,
      },
      {
        question: 'Giá trị của 2³ · 2² bằng?',
        options: ['2⁵', '2⁶', '2¹', '4⁵'],
        correctIndex: 0,
      },
      {
        question: 'log2 8 bằng?',
        options: ['2', '3', '4', '8'],
        correctIndex: 1,
      },
      {
        question: 'Hàm số y = (1/2)ˣ là hàm số:',
        options: ['Đồng biến trên R', 'Nghịch biến trên R', 'Đồng biến trên (0;+∞)', 'Không xác định trên R'],
        correctIndex: 1,
      },
      {
        question: 'log3 9 + log3 3 bằng?',
        options: ['2', '3', '4', '9'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tính giá trị biểu thức A = log2 16 + log2(1/4).',
        solution: ['$A = \\log_2 16 + \\log_2 \\dfrac{1}{4} = 4 + (-2) = 2$'],
      },
      {
        prompt: 'Bài 2. Giải phương trình 2ˣ = 32.',
        solution: ['$2^x = 2^5 \\Rightarrow x = 5$'],
      },
      {
        prompt: 'Bài 3. Tính giá trị của B = 3^(log₃5).',
        solution: ['Áp dụng công thức $a^{\\log_a x}=x$, ta được $B = 3^{\\log_3 5} = 5$'],
      },
      {
        prompt: 'Bài 4. So sánh log2 5 và log2 7 mà không dùng máy tính.',
        solution: [
          'Hàm số $y=\\log_2 x$ đồng biến trên $(0;+\\infty)$ vì cơ số $2>1$.',
          'Vì $5 < 7$ nên $\\log_2 5 < \\log_2 7$',
        ],
      },
      {
        prompt: 'Bài 5. Giải phương trình log2(x+1) = 3.',
        solution: [
          'Điều kiện: $x>-1$',
          '$x+1 = 2^3 = 8 \\Rightarrow x = 7$ (thoả điều kiện)',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức lôgarit của tích', back: '$\\log_a(xy)=\\log_a x+\\log_a y$' },
      { front: 'Công thức lôgarit của thương', back: '$\\log_a\\dfrac{x}{y}=\\log_a x-\\log_a y$' },
      { front: 'Công thức lôgarit của luỹ thừa', back: '$\\log_a x^n=n\\log_a x$' },
      { front: 'Mũ và lôgarit ngược nhau', back: '$a^{\\log_a x}=x,\\quad \\log_a(a^x)=x$' },
      { front: 'Tính đơn điệu hàm số mũ', back: 'a > 1: đồng biến — 0 < a < 1: nghịch biến' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        {
          question: 'Tập xác định của hàm số y = log5 x là?',
          options: ['R', '(0; +∞)', '[0; +∞)', 'R\\{0}'],
          correctIndex: 1,
        },
        {
          question: 'Hàm số y = 3ˣ có tính chất nào?',
          options: [
            'Đồng biến trên R vì cơ số 3 > 1',
            'Nghịch biến trên R',
            'Chỉ đồng biến trên (0;+∞)',
            'Không xác định trên R',
          ],
          correctIndex: 0,
        },
        {
          question: 'Giá trị của log2 16 bằng?',
          options: ['2', '3', '4', '8'],
          correctIndex: 2,
        },
        {
          question: 'Giá trị của 5⁰ bằng?',
          options: ['0', '1', '5', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Đồ thị hàm số y = aˣ (0 < a ≠ 1) luôn đi qua điểm nào?',
          options: ['(0; 1)', '(1; 0)', '(0; 0)', '(1; 1)'],
          correctIndex: 0,
        },
        {
          question: 'Giá trị của loga 1 (0 < a ≠ 1) bằng?',
          options: ['0', '1', 'a', 'Không xác định'],
          correctIndex: 0,
        },
        // Thông hiểu (6)
        {
          question: 'Giá trị của biểu thức 2³ · 2⁻¹ bằng?',
          options: ['2', '4', '8', '16'],
          correctIndex: 1,
        },
        {
          question: 'log3 27 − log3 9 bằng?',
          options: ['0', '1', '2', '3'],
          correctIndex: 1,
        },
        {
          question: 'Tập xác định của hàm số y = log2(4 − x) là?',
          options: ['(−∞; 4)', '(4; +∞)', 'R', '(0; 4)'],
          correctIndex: 0,
        },
        {
          question: 'Cho log2 5 = a. Tính log2 20 theo a.',
          options: ['a + 2', '2a', 'a + 4', 'a²'],
          correctIndex: 0,
        },
        {
          question: 'Hàm số y = log_(1/2) x là hàm số:',
          options: ['Đồng biến trên (0;+∞)', 'Nghịch biến trên (0;+∞)', 'Đồng biến trên R', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Giá trị của 4^(1/2) + 8^(1/3) bằng?',
          options: ['2', '4', '6', '8'],
          correctIndex: 1,
        },
        // Vận dụng (3)
        {
          question: 'Cho log2 3 = a. Tính log4 3 theo a.',
          options: ['a/2', '2a', 'a²', 'a + 2'],
          correctIndex: 0,
        },
        {
          question: 'So sánh log3 5 và log9 25.',
          options: ['log3 5 > log9 25', 'log3 5 < log9 25', 'log3 5 = log9 25', 'Không so sánh được'],
          correctIndex: 2,
        },
        {
          question: 'Tập xác định của hàm số y = log2(x² − 4) là?',
          options: ['(−2; 2)', '(−∞; −2) ∪ (2; +∞)', '(2; +∞)', 'R\\{−2; 2}'],
          correctIndex: 1,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức A = log2 32 − log2 4 + log2 1.',
          solution: ['$A = \\log_2 32 - \\log_2 4 + \\log_2 1 = 5 - 2 + 0 = 3$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho log2 3 = a và log2 5 = b. Tính log2 45 theo a và b.',
          solution: [
            '$45 = 9\\cdot 5 = 3^2 \\cdot 5$',
            '$\\log_2 45 = \\log_2 3^2 + \\log_2 5 = 2\\log_2 3 + \\log_2 5 = 2a + b$',
          ],
        },
      ],
    },
  },

  'pt-bpt-mu-logarit': {
    title: 'Phương trình - bất phương trình mũ, lôgarit',
    theory: {
      cards: [
        {
          title: 'Phương trình mũ, lôgarit cơ bản',
          formulas: [
            'a^{f(x)}=a^{g(x)} \\Leftrightarrow f(x)=g(x)\\ \\ (0<a\\ne1)',
            '\\log_a f(x)=\\log_a g(x) \\Leftrightarrow f(x)=g(x)>0',
          ],
          note: 'Mẹo: với phương trình lôgarit luôn đặt điều kiện xác định trước khi giải, giải xong nhớ đối chiếu nghiệm với điều kiện.',
        },
        {
          title: 'Bất phương trình mũ, lôgarit',
          formulas: [
            'a>1:\\ a^{f(x)}>a^{g(x)} \\Leftrightarrow f(x)>g(x)',
            '0<a<1:\\ a^{f(x)}>a^{g(x)} \\Leftrightarrow f(x)<g(x)',
          ],
          note: 'Mẹo nhớ chiều bất phương trình: cơ số lớn hơn 1 giữ nguyên chiều, cơ số nhỏ hơn 1 thì đổi chiều.',
        },
      ],
    },
    video: { caption: '00:00 / 15:05 — pt_bpt_mu_logarit_baigiang.mp4' },
    quiz: [
      {
        question: 'Nghiệm của phương trình 2ˣ = 8 là?',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'],
        correctIndex: 1,
      },
      {
        question: 'Nghiệm của phương trình log2 x = 4 là?',
        options: ['x = 4', 'x = 8', 'x = 16', 'x = 2'],
        correctIndex: 2,
      },
      {
        question: 'Nghiệm của phương trình 3^(x+1) = 9 là?',
        options: ['x = 0', 'x = 1', 'x = 2', 'x = 3'],
        correctIndex: 1,
      },
      {
        question: 'Bất phương trình 2ˣ > 8 có tập nghiệm là?',
        options: ['x > 3', 'x < 3', 'x > 8', 'x < 8'],
        correctIndex: 0,
      },
      {
        question: 'Điều kiện xác định của phương trình log2(x−3) = 1 là?',
        options: ['x > 0', 'x > 3', 'x ≥ 3', 'x < 3'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Giải phương trình 2^(2x−1) = 16.',
        solution: ['$2^{2x-1}=2^4 \\Rightarrow 2x-1=4 \\Rightarrow x=\\dfrac{5}{2}$'],
      },
      {
        prompt: 'Bài 2. Giải phương trình log3(x+2) = 2.',
        solution: ['Điều kiện: $x>-2$', '$x+2=3^2=9 \\Rightarrow x=7$ (thoả điều kiện)'],
      },
      {
        prompt: 'Bài 3. Giải bất phương trình (1/2)ˣ < 1/8.',
        solution: [
          '$\\left(\\dfrac{1}{2}\\right)^x < \\left(\\dfrac{1}{2}\\right)^3$',
          'Cơ số $\\frac12<1$ nên đổi chiều: $x>3$',
        ],
      },
      {
        prompt: 'Bài 4. Giải phương trình 4ˣ − 2^(x+1) − 8 = 0.',
        solution: [
          'Đặt $t=2^x\\ (t>0)$: $\\ t^2-2t-8=0$',
          '$t=4$ (nhận) hoặc $t=-2$ (loại)',
          '$2^x=4 \\Rightarrow x=2$',
        ],
      },
      {
        prompt: 'Bài 5. Giải bất phương trình log2(x−1) ≤ 3.',
        solution: ['Điều kiện: $x>1$', '$x-1\\le 2^3=8 \\Rightarrow x\\le 9$', 'Vậy $1<x\\le 9$'],
      },
    ],
    flashcards: [
      { front: 'Phương trình mũ cơ bản', back: '$a^{f(x)}=a^{g(x)}\\Leftrightarrow f(x)=g(x)$' },
      { front: 'Phương trình lôgarit cơ bản', back: '$\\log_a f(x)=\\log_a g(x)\\Leftrightarrow f(x)=g(x)>0$' },
      { front: 'Đặt ẩn phụ khi giải PT mũ', back: '$t=a^{f(x)},\\ t>0$' },
      { front: 'Bất PT mũ, cơ số a > 1', back: '$a^{f(x)}>a^{g(x)}\\Leftrightarrow f(x)>g(x)$' },
      { front: 'Bất PT mũ, cơ số 0 < a < 1', back: '$a^{f(x)}>a^{g(x)}\\Leftrightarrow f(x)<g(x)$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        {
          question: 'Nghiệm của phương trình 3ˣ = 9 là?',
          options: ['x = 1', 'x = 2', 'x = 3', 'x = 9'],
          correctIndex: 1,
        },
        {
          question: 'Nghiệm của phương trình log2 x = 3 là?',
          options: ['x = 3', 'x = 6', 'x = 8', 'x = 9'],
          correctIndex: 2,
        },
        {
          question: 'Phương trình a^f(x) = a^g(x) (0 < a ≠ 1) tương đương với:',
          options: ['f(x) = g(x)', 'f(x) > g(x)', 'f(x) < g(x)', 'f(x) = −g(x)'],
          correctIndex: 0,
        },
        {
          question: 'Bất phương trình 2ˣ > 4 có tập nghiệm là?',
          options: ['x > 2', 'x < 2', 'x > 4', 'x < 4'],
          correctIndex: 0,
        },
        {
          question: 'Điều kiện xác định của phương trình log3 x = 2 là?',
          options: ['x > 0', 'x ≥ 0', 'x < 0', 'x ≠ 0'],
          correctIndex: 0,
        },
        {
          question: 'Với cơ số 0 < a < 1, bất phương trình a^f(x) > a^g(x) tương đương với:',
          options: ['f(x) > g(x)', 'f(x) < g(x)', 'f(x) = g(x)', 'Không xác định'],
          correctIndex: 1,
        },
        // Thông hiểu (6)
        {
          question: 'Nghiệm của phương trình 5^(x−1) = 25 là?',
          options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
          correctIndex: 1,
        },
        {
          question: 'Nghiệm của phương trình log3(x+2) = 2 là?',
          options: ['x = 0', 'x = 1', 'x = 2', 'x = 4'],
          correctIndex: 1,
        },
        {
          question: 'Tập nghiệm của bất phương trình (1/3)ˣ ≤ 9 là?',
          options: ['x ≥ −2', 'x ≤ −2', 'x ≥ 2', 'x ≤ 2'],
          correctIndex: 0,
        },
        {
          question: 'Nghiệm của phương trình 2^(x²−3x) = 1 là?',
          options: ['x = 0 hoặc x = 3', 'x = 0', 'x = 3', 'Vô nghiệm'],
          correctIndex: 0,
        },
        {
          question: 'Điều kiện xác định của phương trình log2(x−1) + log2(x+1) = 3 là?',
          options: ['x > 1', 'x > −1', 'x ≥ 1', 'x ∈ R'],
          correctIndex: 0,
        },
        {
          question: 'Tập nghiệm của bất phương trình log3 x < 2 là?',
          options: ['0 < x < 9', 'x < 9', 'x > 9', 'x < 0'],
          correctIndex: 0,
        },
        // Vận dụng (3)
        {
          question: 'Nghiệm của phương trình 9ˣ − 4·3ˣ − 45 = 0 là?',
          options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
          correctIndex: 1,
        },
        {
          question: 'Tập nghiệm của bất phương trình log2(x−1) > log2(5−x) là?',
          options: ['(3; 5)', '(1; 3)', '(1; 5)', '(3; +∞)'],
          correctIndex: 0,
        },
        {
          question: 'Nghiệm của phương trình log2 x + log2(x−3) = 2 là?',
          options: ['x = 1', 'x = 4', 'x = 5', 'x = −1'],
          correctIndex: 1,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Giải phương trình log3(2x−1) = 2.',
          solution: ['Điều kiện: $x>\\dfrac12$', '$2x-1=3^2=9 \\Rightarrow x=5$ (thoả điều kiện)'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Giải phương trình 4ˣ − 5·2ˣ + 4 = 0.',
          solution: [
            'Đặt $t=2^x\\ (t>0)$: $\\ t^2-5t+4=0 \\Rightarrow t=1$ hoặc $t=4$',
            '$2^x=1 \\Rightarrow x=0$',
            '$2^x=4 \\Rightarrow x=2$',
            'Vậy phương trình có hai nghiệm $x=0$ và $x=2$.',
          ],
        },
      ],
    },
  },

  'he-bpt-bac-nhat-hai-an': {
    title: 'Hệ bất phương trình bậc nhất hai ẩn',
    theory: {
      cards: [
        {
          title: 'Miền nghiệm của bất phương trình bậc nhất hai ẩn',
          formulas: ['ax+by+c\\le 0'],
          note: 'Mẹo xác định nhanh miền nghiệm: thay toạ độ điểm (0;0) vào bất phương trình — nếu đúng thì miền nghiệm chứa gốc toạ độ, nếu sai thì miền còn lại.',
        },
        {
          title: 'Giá trị lớn nhất, nhỏ nhất của F = ax + by',
          formulas: ['F(x,y)=ax+by'],
          note: 'Mẹo: GTLN, GTNN của F trên miền đa giác nghiệm luôn đạt tại một đỉnh của miền — chỉ cần tính F tại từng đỉnh rồi so sánh.',
        },
      ],
    },
    video: { caption: '00:00 / 12:20 — he_bpt_bac_nhat_hai_an_baigiang.mp4' },
    quiz: [
      {
        question: 'Miền nghiệm của bất phương trình x + y ≤ 4 là miền chứa điểm nào sau đây?',
        options: ['(5; 5)', '(0; 0)', '(4; 5)', '(10; 0)'],
        correctIndex: 1,
      },
      {
        question: 'Điểm nào sau đây thuộc miền nghiệm của bất phương trình 2x − y > 0?',
        options: ['(0; 1)', '(1; 0)', '(0; 0)', '(−1; 0)'],
        correctIndex: 1,
      },
      {
        question: 'Đường thẳng biên của miền nghiệm bất phương trình 3x + 2y − 6 ≤ 0 có phương trình là?',
        options: ['3x + 2y = 6', '3x − 2y = 6', '3x + 2y = 0', 'x + y = 6'],
        correctIndex: 0,
      },
      {
        question: 'Miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn (nếu khác rỗng) thường là:',
        options: ['Một đường thẳng', 'Một đa giác hoặc miền không giới hạn', 'Một điểm duy nhất', 'Luôn luôn rỗng'],
        correctIndex: 1,
      },
      {
        question: 'Biểu thức F(x;y) = 2x + 3y đạt giá trị lớn nhất trên miền đa giác nghiệm tại:',
        options: ['Tâm của miền', 'Một đỉnh của miền', 'Trung điểm một cạnh', 'Bất kỳ điểm nào trong miền'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Biểu diễn miền nghiệm của bất phương trình x − y ≤ 2 trên mặt phẳng toạ độ.',
        solution: [
          'Vẽ đường thẳng $x-y=2$',
          'Thử điểm $(0;0)$: $0-0=0\\le 2$ (đúng)',
          'Vậy miền nghiệm là nửa mặt phẳng chứa gốc toạ độ, kể cả biên.',
        ],
      },
      {
        prompt: 'Bài 2. Cho hệ bất phương trình: x ≥ 0, y ≥ 0, x + y ≤ 4. Tìm toạ độ các đỉnh của miền nghiệm.',
        solution: ['Các đỉnh của miền tam giác nghiệm: $(0;0),\\ (4;0),\\ (0;4)$'],
      },
      {
        prompt: 'Bài 3. Tìm giá trị lớn nhất của F = x + 2y trên miền nghiệm hệ: x ≥ 0, y ≥ 0, x + y ≤ 4.',
        solution: [
          '$F(0;0)=0,\\quad F(4;0)=4,\\quad F(0;4)=8$',
          'Vậy $F_{\\max}=8$ tại $(0;4)$',
        ],
      },
      {
        prompt: 'Bài 4. Xác định các đỉnh của miền nghiệm hệ: x ≥ 0, y ≥ 0, x + y ≤ 3, x − y ≤ 1.',
        solution: [
          'Giao $x+y=3$ và $x-y=1$ tại $(2;1)$',
          'Giao $x-y=1$ và $y=0$ tại $(1;0)$',
          'Các đỉnh: $(0;0),\\ (1;0),\\ (2;1),\\ (0;3)$',
        ],
      },
      {
        prompt:
          'Bài 5. Một xưởng có 8 giờ máy và 10 giờ nhân công mỗi ngày. Sản phẩm A cần 2 giờ máy, 1 giờ nhân công, lãi 3 triệu đồng/sp. Sản phẩm B cần 1 giờ máy, 2 giờ nhân công, lãi 2 triệu đồng/sp. Gọi x, y là số sản phẩm A, B sản xuất trong ngày. Tìm x, y để lợi nhuận lớn nhất.',
        solution: [
          'Ràng buộc: $2x+y\\le 8,\\ x+2y\\le 10,\\ x\\ge0,\\ y\\ge0$',
          'Hàm lợi nhuận: $F=3x+2y$',
          'Các đỉnh: $(0;0),\\ (4;0),\\ (2;4),\\ (0;5)$',
          '$F(0;0)=0,\\ F(4;0)=12,\\ F(2;4)=14,\\ F(0;5)=10$',
          'Vậy $F_{\\max}=14$ tại $(x;y)=(2;4)$',
        ],
      },
    ],
    flashcards: [
      { front: 'Miền nghiệm BPT bậc nhất 2 ẩn', back: '$ax+by+c\\le 0$' },
      {
        front: 'Hệ BPT bậc nhất 2 ẩn',
        back: '$\\begin{cases}a_1x+b_1y+c_1\\le 0\\\\ a_2x+b_2y+c_2\\le 0\\end{cases}$',
      },
      { front: 'Hàm mục tiêu quy hoạch tuyến tính', back: '$F(x,y)=ax+by$' },
      { front: 'Kiểm tra miền nghiệm bằng điểm thử', back: 'thử điểm $(0;0)$ vào bất phương trình' },
      {
        front: 'GTLN/GTNN của F trên đa giác nghiệm',
        back: '$F_{\\max}=\\max\\big(F(A_1),\\dots,F(A_k)\\big)$',
      },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        {
          question: 'Bất phương trình bậc nhất hai ẩn có dạng tổng quát là?',
          options: ['ax + by + c ≤ 0 (hoặc <, ≥, >)', 'ax² + by + c ≤ 0', 'ax + by = c', 'ax + b ≤ 0'],
          correctIndex: 0,
        },
        {
          question: 'Điểm (0; 0) có thuộc miền nghiệm của bất phương trình x + y ≤ 5 không?',
          options: ['Có', 'Không', 'Không xác định', 'Chỉ khi x = y'],
          correctIndex: 0,
        },
        {
          question: 'Đường thẳng biên của miền nghiệm bất phương trình x − 2y + 4 ≤ 0 có phương trình?',
          options: ['x − 2y + 4 = 0', 'x + 2y = 4', 'x − 2y = 0', '2x − y + 4 = 0'],
          correctIndex: 0,
        },
        {
          question: 'Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn là giao của:',
          options: ['Các nửa mặt phẳng', 'Các đường thẳng', 'Các điểm', 'Các đường tròn'],
          correctIndex: 0,
        },
        {
          question: 'Hàm mục tiêu trong bài toán quy hoạch tuyến tính hai biến có dạng?',
          options: ['F(x,y) = ax + by', 'F(x,y) = ax² + by', 'F(x,y) = ax + by + c = 0', 'F(x,y) = ax·by'],
          correctIndex: 0,
        },
        {
          question: 'Giá trị lớn nhất của F = ax + by trên miền đa giác nghiệm đạt được tại đâu?',
          options: ['Một đỉnh của đa giác', 'Tâm của đa giác', 'Trung điểm một cạnh', 'Bất kỳ điểm nào'],
          correctIndex: 0,
        },
        // Thông hiểu (6)
        {
          question: 'Điểm nào sau đây thuộc miền nghiệm của bất phương trình x − y ≥ 1?',
          options: ['(3; 1)', '(0; 2)', '(1; 3)', '(0; 0)'],
          correctIndex: 0,
        },
        {
          question: 'Cho hệ: x ≥ 0, y ≥ 0, 2x + y ≤ 6. Điểm nào KHÔNG thuộc miền nghiệm?',
          options: ['(4; 0)', '(2; 1)', '(0; 5)', '(1; 3)'],
          correctIndex: 0,
        },
        {
          question: 'Miền nghiệm của bất phương trình 2x + 3y − 6 > 0 KHÔNG chứa điểm nào?',
          options: ['(0; 0)', '(3; 1)', '(5; 2)', '(0; 3)'],
          correctIndex: 0,
        },
        {
          question: 'Đường thẳng x + y = 4 chia mặt phẳng thành hai miền. Điểm (5; 5) thuộc miền nghiệm của bất phương trình nào?',
          options: ['x + y ≥ 4', 'x + y ≤ 4', 'x + y = 4', 'x − y ≥ 4'],
          correctIndex: 0,
        },
        {
          question: 'Cho hệ x ≥ 0, y ≥ 0, x + y ≤ 5, x ≤ 3. Điểm nào sau đây KHÔNG thuộc miền nghiệm?',
          options: ['(4; 0)', '(0; 0)', '(3; 0)', '(0; 5)'],
          correctIndex: 0,
        },
        {
          question: 'Hàm F(x,y) = x + y đạt giá trị nhỏ nhất trên miền x ≥ 0, y ≥ 0, x + y ≤ 4 tại điểm nào?',
          options: ['(0; 0)', '(4; 0)', '(0; 4)', '(2; 2)'],
          correctIndex: 0,
        },
        // Vận dụng (3)
        {
          question: 'Cho hệ x ≥ 0, y ≥ 0, x + 2y ≤ 8, 3x + y ≤ 9. Giá trị lớn nhất của F = 2x + 3y bằng?',
          options: ['6', '12', '13', '16'],
          correctIndex: 2,
        },
        {
          question:
            'Một cửa hàng bán tối đa 100 sản phẩm A và 80 sản phẩm B mỗi ngày, tổng số không vượt quá 150 sản phẩm. Lãi mỗi sản phẩm A là 40 nghìn đồng, sản phẩm B là 30 nghìn đồng. Lợi nhuận lớn nhất có thể đạt được (nghìn đồng) là?',
          options: ['4000', '5200', '5500', '5900'],
          correctIndex: 2,
        },
        {
          question: 'Cho hệ x ≥ 0, y ≥ 0, x + y ≤ 6, x − y ≤ 2. Hàm F = 3x + y đạt giá trị lớn nhất tại đỉnh nào?',
          options: ['(0; 0)', '(2; 0)', '(4; 2)', '(0; 6)'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Xác định miền nghiệm của hệ bất phương trình: x ≥ 0, y ≥ 0, x + y ≤ 5. Tìm toạ độ các đỉnh của miền nghiệm.',
          solution: ['Miền nghiệm là tam giác với các đỉnh $(0;0),\\ (5;0),\\ (0;5)$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng bán hai loại hộp quà: hộp A lãi 25 nghìn đồng/hộp, hộp B lãi 20 nghìn đồng/hộp. Do nguyên liệu, cửa hàng chỉ làm được tối đa 6 hộp A, tối đa 8 hộp B mỗi ngày, và tổng số hộp không vượt quá 10. Gọi x, y lần lượt là số hộp A, B làm trong ngày. Tìm x, y để lợi nhuận lớn nhất.',
          solution: [
            'Ràng buộc: $0\\le x\\le 6,\\ 0\\le y\\le 8,\\ x+y\\le 10$. Hàm lợi nhuận $F=25x+20y$ (nghìn đồng).',
            'Các đỉnh của miền nghiệm: $(0;0),\\ (6;0),\\ (6;4),\\ (2;8),\\ (0;8)$',
            '$F(0;0)=0,\\ F(6;0)=150,\\ F(6;4)=230,\\ F(2;8)=210,\\ F(0;8)=160$',
            'Vậy $F_{\\max}=230$ (nghìn đồng) tại $(x;y)=(6;4)$',
          ],
        },
      ],
    },
  },
}
