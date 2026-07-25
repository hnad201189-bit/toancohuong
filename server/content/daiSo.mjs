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
    exam: EXAM_DEFAULT,
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
    exam: EXAM_DEFAULT,
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
    exam: EXAM_DEFAULT,
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
    exam: EXAM_DEFAULT,
  },
}
