import { EXAM_DEFAULT } from './examDefault.mjs'

export const HAM_SO_GIOI_HAN = {
  'gioi-han-day-so': {
    title: 'Giới hạn dãy số',
    theory: {
      cards: [
        {
          title: 'Giới hạn hữu hạn của dãy số',
          formulas: ['\\lim_{n\\to+\\infty}\\dfrac1n=0', '\\lim_{n\\to+\\infty}\\dfrac{1}{n^k}=0\\ (k>0)'],
          note: 'Mẹo: khi n → +∞, mọi biểu thức dạng c/nᵏ (k>0) đều tiến về 0 — đây là "giới hạn gốc" để tính các giới hạn phức tạp hơn.',
        },
        {
          title: 'Các phép toán về giới hạn dãy số',
          formulas: ['\\lim(u_n\\pm v_n)=\\lim u_n\\pm \\lim v_n', '\\lim(u_n\\cdot v_n)=\\lim u_n\\cdot \\lim v_n'],
          note: 'Mẹo tính giới hạn phân thức đa thức theo n: chia cả tử và mẫu cho luỹ thừa cao nhất của n ở mẫu.',
        },
      ],
    },
    video: { caption: '00:00 / 12:50 — gioi_han_day_so_baigiang.mp4' },
    quiz: [
      { question: 'lim(1/n) khi n → +∞ bằng?', options: ['0', '1', '+∞', 'Không tồn tại'], correctIndex: 0 },
      { question: 'lim (2n+1)/n bằng?', options: ['1', '2', '0', '+∞'], correctIndex: 1 },
      { question: 'lim (3n²+1)/(n²+2) bằng?', options: ['3', '1', '0', '+∞'], correctIndex: 0 },
      { question: 'lim ((−1)ⁿ/n) bằng?', options: ['0', '1', '−1', 'Không tồn tại'], correctIndex: 0 },
      { question: 'lim qⁿ với |q| < 1 bằng?', options: ['0', '1', 'q', '+∞'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tính lim (2n−3)/(n+1).',
        solution: ['$\\lim\\dfrac{2n-3}{n+1}=\\lim\\dfrac{2-\\frac3n}{1+\\frac1n}=\\dfrac21=2$'],
      },
      {
        prompt: 'Bài 2. Tính lim (n²−1)/(2n²+n).',
        solution: ['$\\lim\\dfrac{n^2-1}{2n^2+n}=\\lim\\dfrac{1-\\frac{1}{n^2}}{2+\\frac1n}=\\dfrac12$'],
      },
      {
        prompt: 'Bài 3. Tính lim (√(n²+1) − n).',
        solution: [
          '$\\sqrt{n^2+1}-n=\\dfrac{(n^2+1)-n^2}{\\sqrt{n^2+1}+n}=\\dfrac{1}{\\sqrt{n^2+1}+n}\\to 0$',
        ],
      },
      {
        prompt: 'Bài 4. Tính tổng cấp số nhân lùi vô hạn S = 1 + 1/2 + 1/4 + ⋯',
        solution: ['$S=\\dfrac{u_1}{1-q}=\\dfrac{1}{1-\\frac12}=2$'],
      },
      {
        prompt: 'Bài 5. Tính lim (3ⁿ + 2ⁿ)/3ⁿ.',
        solution: [
          '$\\dfrac{3^n+2^n}{3^n}=1+\\left(\\dfrac23\\right)^n$',
          'Vì $\\left|\\frac23\\right|<1$ nên biểu thức tiến về $1+0=1$',
        ],
      },
    ],
    flashcards: [
      { front: 'Giới hạn cơ bản 1/n', back: '$\\lim_{n\\to+\\infty}\\dfrac1n=0$' },
      { front: 'Giới hạn của hằng số', back: '$\\lim c=c$' },
      { front: 'Tổng cấp số nhân lùi vô hạn', back: '$S=\\dfrac{u_1}{1-q},\\ |q|<1$' },
      { front: 'Giới hạn qⁿ khi |q| < 1', back: '$\\lim q^n=0$' },
      { front: 'Giới hạn phân thức cùng bậc', back: '$\\lim\\dfrac{an^k+\\cdots}{bn^k+\\cdots}=\\dfrac{a}{b}$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'gioi-han-ham-so': {
    title: 'Giới hạn hàm số',
    theory: {
      cards: [
        {
          title: 'Định nghĩa và các giới hạn cơ bản',
          formulas: ['\\lim_{x\\to a}f(x)=L', '\\lim_{x\\to a}c=c,\\quad \\lim_{x\\to a}x=a'],
          note: 'Mẹo: nếu f(x) là hàm đa thức hoặc phân thức xác định tại a, thường chỉ cần thay trực tiếp x = a để tính giới hạn.',
        },
        {
          title: 'Giới hạn dạng vô định 0/0',
          formulas: ['\\lim_{x\\to a}\\dfrac{f(x)}{g(x)}\\ \\ (f(a)=g(a)=0)'],
          note: 'Mẹo: khi gặp 0/0, hãy phân tích f(x), g(x) thành nhân tử chung (x−a) rồi rút gọn, hoặc nhân liên hợp nếu có căn thức.',
        },
      ],
    },
    video: { caption: '00:00 / 13:15 — gioi_han_ham_so_baigiang.mp4' },
    quiz: [
      { question: 'lim x→2 (x²−4)/(x−2) bằng?', options: ['0', '2', '4', 'Không tồn tại'], correctIndex: 2 },
      { question: 'lim x→1 (x+3) bằng?', options: ['1', '3', '4', '0'], correctIndex: 2 },
      { question: 'lim x→0 (sin x / x) bằng?', options: ['0', '1', '+∞', 'Không tồn tại'], correctIndex: 1 },
      { question: 'lim x→+∞ (1/x) bằng?', options: ['0', '1', '+∞', '−∞'], correctIndex: 0 },
      {
        question: 'Giới hạn dạng 0/0 thường được xử lý bằng cách nào trước tiên?',
        options: ['Thay số trực tiếp', 'Phân tích nhân tử hoặc nhân liên hợp', 'Bỏ qua', 'Lấy đạo hàm ngay'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tính lim x→3 (x²−9)/(x−3).',
        solution: ['$\\dfrac{x^2-9}{x-3}=\\dfrac{(x-3)(x+3)}{x-3}=x+3 \\to 6$'],
      },
      {
        prompt: 'Bài 2. Tính lim x→1 (x²−1)/(x−1).',
        solution: ['$\\dfrac{x^2-1}{x-1}=x+1 \\to 2$'],
      },
      {
        prompt: 'Bài 3. Tính lim x→0 (√(x+4) − 2)/x.',
        solution: [
          '$\\dfrac{\\sqrt{x+4}-2}{x}=\\dfrac{x}{x(\\sqrt{x+4}+2)}=\\dfrac{1}{\\sqrt{x+4}+2}\\to\\dfrac14$',
        ],
      },
      {
        prompt: 'Bài 4. Tính lim x→+∞ (2x+1)/(x−3).',
        solution: ['$\\dfrac{2x+1}{x-3}=\\dfrac{2+\\frac1x}{1-\\frac3x}\\to 2$'],
      },
      {
        prompt: 'Bài 5. Tính lim x→2 (x³−8)/(x−2).',
        solution: [
          '$x^3-8=(x-2)(x^2+2x+4)$',
          '$\\dfrac{x^3-8}{x-2}=x^2+2x+4 \\to 4+4+4=12$',
        ],
      },
    ],
    flashcards: [
      { front: 'Giới hạn hàm đa thức tại a', back: '$\\lim_{x\\to a}f(x)=f(a)$' },
      { front: 'Giới hạn đặc biệt sin x / x', back: '$\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$' },
      { front: 'Giới hạn 1/x khi x → +∞', back: '$\\lim_{x\\to+\\infty}\\dfrac1x=0$' },
      { front: 'Khử dạng 0/0 bằng nhân tử', back: '$\\dfrac{f(x)}{g(x)}=\\dfrac{(x-a)h(x)}{(x-a)k(x)}$' },
      { front: 'Nhân liên hợp khử căn', back: '$(\\sqrt a-\\sqrt b)(\\sqrt a+\\sqrt b)=a-b$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'ham-so-lien-tuc': {
    title: 'Hàm số liên tục',
    theory: {
      cards: [
        {
          title: 'Định nghĩa hàm số liên tục tại một điểm',
          formulas: ['\\lim_{x\\to x_0}f(x)=f(x_0)'],
          note: 'Mẹo: hàm số f liên tục tại x0 khi 3 điều kiện thoả: f(x0) xác định, giới hạn tại x0 tồn tại, và hai giá trị đó bằng nhau.',
        },
        {
          title: 'Tính liên tục của các hàm thường gặp',
          formulas: ['f(x)=a_nx^n+\\cdots+a_1x+a_0,\\quad D_f=\\mathbb{R}'],
          note: 'Mẹo: hàm đa thức luôn liên tục khắp nơi; hàm phân thức/căn thức chỉ có thể gián đoạn tại các điểm không thuộc tập xác định.',
        },
      ],
    },
    video: { caption: '00:00 / 11:45 — ham_so_lien_tuc_baigiang.mp4' },
    quiz: [
      { question: 'Hàm số f(x) = x² + 1 liên tục trên?', options: ['R', 'R \\ {0}', '(0; +∞)', 'Chỉ tại x = 0'], correctIndex: 0 },
      { question: 'Hàm số f(x) = 1/(x−2) gián đoạn tại?', options: ['x = 0', 'x = 1', 'x = 2', 'Không gián đoạn'], correctIndex: 2 },
      {
        question: 'f liên tục tại x0 khi và chỉ khi?',
        options: ['f(x0) xác định', 'lim x→x0 f(x) tồn tại', 'lim x→x0 f(x) = f(x0)', 'f(x0) = 0'],
        correctIndex: 2,
      },
      { question: 'Hàm số nào sau đây liên tục trên toàn bộ R?', options: ['1/x', '√x', 'x³ − 2x', 'tan x'], correctIndex: 2 },
      {
        question: 'Hàm số f(x) = (x²−1)/(x−1) với quy ước f(1) = 2 có liên tục tại x = 1 không?',
        options: ['Có', 'Không', 'Không xác định', 'Không đủ dữ kiện'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Xét tính liên tục của hàm số f(x) = x² − 3x + 2 tại x = 1.',
        solution: [
          '$f(1)=1-3+2=0$',
          '$\\lim_{x\\to1}f(x)=0=f(1)$, vậy hàm số liên tục tại $x=1$.',
        ],
      },
      {
        prompt: 'Bài 2. Tìm điểm gián đoạn của hàm số f(x) = (x+1)/(x²−4).',
        solution: ['$x^2-4=0 \\Leftrightarrow x=\\pm2$', 'Vậy hàm số gián đoạn tại $x=2$ và $x=-2$.'],
      },
      {
        prompt:
          'Bài 3. Xét tính liên tục tại x = 1 của hàm số f(x) = (x²−1)/(x−1) khi x ≠ 1, và f(1) = 3.',
        solution: [
          '$\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}=\\lim_{x\\to1}(x+1)=2$',
          'Vì $2 \\ne f(1)=3$ nên hàm số không liên tục tại $x=1$.',
        ],
      },
      {
        prompt:
          'Bài 4. Tìm m để hàm số f(x) = (x²−4)/(x−2) khi x ≠ 2, và f(2) = m, liên tục tại x = 2.',
        solution: [
          '$\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}=\\lim_{x\\to2}(x+2)=4$',
          'Cần $m=4$ để hàm số liên tục tại $x=2$.',
        ],
      },
      {
        prompt: 'Bài 5. Chứng minh phương trình x³ − 3x + 1 = 0 có nghiệm trong khoảng (0; 1).',
        solution: [
          '$f(x)=x^3-3x+1$ liên tục trên $\\mathbb{R}$ (hàm đa thức).',
          '$f(0)=1>0,\\quad f(1)=1-3+1=-1<0$',
          'Vì $f(0)\\cdot f(1)<0$ nên tồn tại $c\\in(0;1)$ sao cho $f(c)=0$.',
        ],
      },
    ],
    flashcards: [
      { front: 'Định nghĩa liên tục tại x0', back: '$\\lim_{x\\to x_0}f(x)=f(x_0)$' },
      { front: 'Hàm đa thức liên tục trên', back: '$\\mathbb{R}$' },
      { front: 'Hàm phân thức liên tục trên', back: '$D_f\\subset \\mathbb{R}$' },
      {
        front: 'Định lý giá trị trung gian (tồn tại nghiệm)',
        back: '$f(a)\\cdot f(b)<0 \\Rightarrow \\exists c\\in(a,b): f(c)=0$',
      },
      { front: 'Hàm số gián đoạn tại x0 khi', back: '$\\lim_{x\\to x_0}f(x)\\ne f(x_0)$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'dao-ham-khai-niem': {
    title: 'Đạo hàm — khái niệm và ý nghĩa',
    theory: {
      cards: [
        {
          title: 'Định nghĩa đạo hàm tại một điểm',
          formulas: ["f'(x_0)=\\lim_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}", "f'(x_0)=\\lim_{\\Delta x\\to0}\\dfrac{\\Delta y}{\\Delta x}"],
          note: 'Mẹo: đạo hàm là giới hạn của tỉ số biến thiên (Δy/Δx) khi Δx tiến về 0 — đo tốc độ thay đổi tức thời của hàm số.',
        },
        {
          title: 'Ý nghĩa hình học — phương trình tiếp tuyến',
          formulas: ["y=f'(x_0)(x-x_0)+f(x_0)"],
          note: "Mẹo: f'(x0) chính là hệ số góc (độ dốc) của tiếp tuyến với đồ thị hàm số tại điểm có hoành độ x0.",
        },
      ],
    },
    video: { caption: '00:00 / 14:00 — dao_ham_khai_niem_baigiang.mp4' },
    quiz: [
      {
        question: "Đạo hàm f'(x0) biểu diễn cho đại lượng nào?",
        options: ['Giá trị hàm số tại x0', 'Hệ số góc tiếp tuyến tại x0', 'Giao điểm với trục Ox', 'Giá trị lớn nhất của hàm số'],
        correctIndex: 1,
      },
      {
        question: 'Công thức định nghĩa đạo hàm tại x0 là?',
        options: [
          'lim [f(x)+f(x0)]/(x−x0)',
          'lim [f(x)−f(x0)]/(x−x0)',
          'lim f(x)/x',
          'f(x0)',
        ],
        correctIndex: 1,
      },
      {
        question: 'Phương trình tiếp tuyến của đồ thị y = f(x) tại điểm (x0; f(x0)) là?',
        options: ['y = f(x0)(x − x0)', "y = f'(x0)(x − x0) + f(x0)", "y = f'(x0)·x", 'y = f(x0)'],
        correctIndex: 1,
      },
      {
        question: "Nếu f'(x0) = 0 thì tiếp tuyến tại x0:",
        options: ['Song song trục Oy', 'Song song trục Ox', 'Vuông góc trục Ox', 'Không tồn tại'],
        correctIndex: 1,
      },
      {
        question: "Cho f(x) = x² với f'(x) = 2x. Hệ số góc tiếp tuyến tại x = 1 bằng?",
        options: ['1', '2', '3', '4'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Dùng định nghĩa, tính đạo hàm của f(x) = x² tại x0 = 1.',
        solution: ["$f'(1)=\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}=\\lim_{x\\to1}(x+1)=2$"],
      },
      {
        prompt: 'Bài 2. Tính đạo hàm của f(x) = 2x + 3 tại x0 = 2 bằng định nghĩa.',
        solution: ["$f'(2)=\\lim_{x\\to2}\\dfrac{(2x+3)-7}{x-2}=\\lim_{x\\to2}\\dfrac{2(x-2)}{x-2}=2$"],
      },
      {
        prompt: "Bài 3. Cho f(x) = x² (f'(x) = 2x). Viết phương trình tiếp tuyến tại điểm có hoành độ x0 = 1.",
        solution: ["$f(1)=1,\\quad f'(1)=2$", '$y=2(x-1)+1=2x-1$'],
      },
      {
        prompt: "Bài 4. Cho f(x) = x³ (f'(x) = 3x²). Viết phương trình tiếp tuyến tại điểm x0 = 1.",
        solution: ["$f(1)=1,\\quad f'(1)=3$", '$y=3(x-1)+1=3x-2$'],
      },
      {
        prompt: 'Bài 5. Tính đạo hàm của f(x) = 1/x tại x0 = 2 bằng định nghĩa.',
        solution: [
          "$f'(2)=\\lim_{x\\to2}\\dfrac{\\frac1x-\\frac12}{x-2}=\\lim_{x\\to2}\\dfrac{2-x}{2x(x-2)}$",
          "$=\\lim_{x\\to2}\\dfrac{-1}{2x}=-\\dfrac14$",
        ],
      },
    ],
    flashcards: [
      { front: 'Định nghĩa đạo hàm tại x0', back: "$f'(x_0)=\\lim_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}$" },
      { front: 'Định nghĩa qua số gia', back: "$f'(x_0)=\\lim_{\\Delta x\\to0}\\dfrac{\\Delta y}{\\Delta x}$" },
      { front: 'Phương trình tiếp tuyến tại x0', back: "$y=f'(x_0)(x-x_0)+f(x_0)$" },
      { front: "Ý nghĩa hình học của f'(x0)", back: "$k=f'(x_0)$" },
      { front: 'Tiếp tuyến song song trục hoành khi', back: "$f'(x_0)=0$" },
    ],
    exam: EXAM_DEFAULT,
  },

  'quy-tac-tinh-dao-ham': {
    title: 'Quy tắc tính đạo hàm',
    theory: {
      cards: [
        {
          title: 'Quy tắc tính đạo hàm của tổng, tích, thương',
          formulas: ["(u\\pm v)'=u'\\pm v'", "(uv)'=u'v+uv'", "\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'v-uv'}{v^2}"],
          note: 'Mẹo nhớ đạo hàm thương: "trên đạo dưới, trừ trên dưới đạo, tất cả chia dưới bình phương".',
        },
        {
          title: 'Bảng đạo hàm cơ bản và đạo hàm hàm hợp',
          formulas: [
            "(x^n)'=nx^{n-1}",
            "(\\sin x)'=\\cos x,\\quad (\\cos x)'=-\\sin x",
            "\\big[u(v(x))\\big]'=u'(v)\\cdot v'(x)",
          ],
          note: 'Mẹo hàm hợp: "đạo hàm ngoài nhân đạo hàm trong" — tính đạo hàm hàm ngoài trước (giữ nguyên phần trong), rồi nhân với đạo hàm của phần trong.',
        },
      ],
    },
    video: { caption: '00:00 / 15:30 — quy_tac_tinh_dao_ham_baigiang.mp4' },
    quiz: [
      { question: 'Đạo hàm của hàm số y = x³ là?', options: ['3x', '3x²', 'x²', '2x³'], correctIndex: 1 },
      { question: 'Đạo hàm của y = sin x là?', options: ['cos x', '−cos x', '−sin x', 'sin x'], correctIndex: 0 },
      { question: 'Theo quy tắc tích, đạo hàm của y = u·v là?', options: ["u'v'", "u'v + uv'", "u'v − uv'", "u'/v'"], correctIndex: 1 },
      { question: 'Đạo hàm của một hằng số c là?', options: ['c', '1', '0', 'x'], correctIndex: 2 },
      {
        question: 'Đạo hàm của y = (2x+1)³ (dùng đạo hàm hàm hợp) là?',
        options: ['3(2x+1)²', '6(2x+1)²', '3(2x+1)', '6x²'],
        correctIndex: 1,
      },
    ],
    essays: [
      { prompt: 'Bài 1. Tính đạo hàm của y = 3x² − 5x + 2.', solution: ["$y'=6x-5$"] },
      {
        prompt: 'Bài 2. Tính đạo hàm của y = x·sin x.',
        solution: ["$y'=(x)'\\sin x+x(\\sin x)'=\\sin x+x\\cos x$"],
      },
      {
        prompt: 'Bài 3. Tính đạo hàm của y = (2x−1)/(x+1).',
        solution: [
          "$y'=\\dfrac{2(x+1)-(2x-1)\\cdot1}{(x+1)^2}=\\dfrac{3}{(x+1)^2}$",
        ],
      },
      {
        prompt: 'Bài 4. Tính đạo hàm của y = cos(3x+1) (dùng đạo hàm hàm hợp).',
        solution: ["$y'=-\\sin(3x+1)\\cdot3=-3\\sin(3x+1)$"],
      },
      {
        prompt: "Bài 5. Cho y = (x²+1)⁵, biết y' = 5(x²+1)⁴·2x. Tính y'(0).",
        solution: ["$y'=10x(x^2+1)^4$", "$y'(0)=10\\cdot0\\cdot1=0$"],
      },
    ],
    flashcards: [
      { front: 'Đạo hàm của tổng', back: "$(u\\pm v)'=u'\\pm v'$" },
      { front: 'Đạo hàm của tích', back: "$(uv)'=u'v+uv'$" },
      { front: 'Đạo hàm của thương', back: "$\\left(\\dfrac uv\\right)'=\\dfrac{u'v-uv'}{v^2}$" },
      { front: 'Đạo hàm hàm luỹ thừa', back: "$(x^n)'=nx^{n-1}$" },
      { front: 'Đạo hàm hàm hợp', back: "$[u(v(x))]'=u'(v)\\cdot v'(x)$" },
    ],
    exam: EXAM_DEFAULT,
  },
}
