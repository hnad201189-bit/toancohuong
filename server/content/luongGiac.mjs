import { EXAM_DEFAULT } from './examDefault.mjs'

export const LUONG_GIAC = {
  'ham-so-luong-giac': {
    title: 'Hàm số lượng giác',
    theory: {
      cards: [
        {
          title: 'Hàm số sin và côsin',
          formulas: ['y=\\sin x,\\ D=\\mathbb{R},\\ -1\\le \\sin x\\le 1', 'y=\\cos x,\\ D=\\mathbb{R},\\ -1\\le \\cos x\\le1'],
          note: 'Mẹo: sin là hàm lẻ (đồ thị đối xứng qua gốc O), cos là hàm chẵn (đồ thị đối xứng qua trục Oy). Cả hai tuần hoàn chu kỳ 2π.',
        },
        {
          title: 'Hàm số tang và côtang',
          formulas: [
            'y=\\tan x=\\dfrac{\\sin x}{\\cos x},\\ x\\ne \\dfrac{\\pi}{2}+k\\pi',
            'y=\\cot x=\\dfrac{\\cos x}{\\sin x},\\ x\\ne k\\pi',
          ],
          note: 'Mẹo nhớ điều kiện xác định: tan mất nghĩa khi cos x = 0 (tại π/2+kπ); cot mất nghĩa khi sin x = 0 (tại kπ). Cả hai tuần hoàn chu kỳ π.',
        },
      ],
    },
    video: { caption: '00:00 / 11:30 — ham_so_luong_giac_baigiang.mp4' },
    quiz: [
      {
        question: 'Tập xác định của hàm số y = tan x là?',
        options: ['R', 'R \\ {kπ}', 'R \\ {π/2 + kπ}', '[-1; 1]'],
        correctIndex: 2,
      },
      {
        question: 'Hàm số y = sin x là hàm số:',
        options: ['Chẵn', 'Lẻ', 'Không chẵn không lẻ', 'Tuần hoàn chu kỳ π'],
        correctIndex: 1,
      },
      {
        question: 'Giá trị lớn nhất của hàm số y = cos x là?',
        options: ['0', '1', '−1', 'Không có'],
        correctIndex: 1,
      },
      {
        question: 'Chu kỳ tuần hoàn của hàm số y = tan x là?',
        options: ['π', '2π', 'π/2', '4π'],
        correctIndex: 0,
      },
      {
        question: 'sin(−x) bằng?',
        options: ['sin x', '−sin x', 'cos x', '−cos x'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tìm tập xác định của hàm số y = 1/sin x.',
        solution: ['Điều kiện: $\\sin x\\ne 0 \\Leftrightarrow x\\ne k\\pi,\\ k\\in\\mathbb{Z}$'],
      },
      {
        prompt: 'Bài 2. Xét tính chẵn, lẻ của hàm số y = x·sin x.',
        solution: [
          '$f(-x) = -x\\sin(-x) = -x\\cdot(-\\sin x)=x\\sin x=f(x)$',
          'Vậy hàm số đã cho là hàm số chẵn.',
        ],
      },
      {
        prompt: 'Bài 3. Tìm giá trị lớn nhất, nhỏ nhất của hàm số y = 2sin x + 1.',
        solution: ['$-1\\le \\sin x\\le1 \\Rightarrow -1\\le y\\le 3$', '$y_{\\max}=3,\\quad y_{\\min}=-1$'],
      },
      {
        prompt: 'Bài 4. Tìm tập xác định của hàm số y = tan(x + π/4).',
        solution: [
          '$x+\\dfrac{\\pi}{4}\\ne \\dfrac{\\pi}{2}+k\\pi$',
          '$\\Leftrightarrow x\\ne \\dfrac{\\pi}{4}+k\\pi,\\ k\\in\\mathbb{Z}$',
        ],
      },
      {
        prompt: 'Bài 5. Chứng tỏ hàm số y = cos 2x tuần hoàn với chu kỳ π.',
        solution: [
          '$\\cos\\big(2(x+\\pi)\\big)=\\cos(2x+2\\pi)=\\cos 2x$',
          'Vậy hàm số tuần hoàn với chu kỳ $T=\\pi$',
        ],
      },
    ],
    flashcards: [
      { front: 'TXĐ hàm số tan x', back: '$x \\ne \\dfrac{\\pi}{2}+k\\pi$' },
      { front: 'TXĐ hàm số cot x', back: '$x\\ne k\\pi$' },
      { front: 'Tập giá trị sin x, cos x', back: '$[-1;1]$' },
      { front: 'Chu kỳ hàm sin, cos', back: '$T=2\\pi$' },
      { front: 'Chu kỳ hàm tan, cot', back: '$T=\\pi$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'pt-luong-giac-co-ban': {
    title: 'Phương trình lượng giác cơ bản',
    theory: {
      cards: [
        {
          title: 'PT sin x = sin α, cos x = cos α',
          formulas: [
            '\\sin x=\\sin\\alpha \\Leftrightarrow \\begin{cases}x=\\alpha+k2\\pi\\\\ x=\\pi-\\alpha+k2\\pi\\end{cases}',
            '\\cos x=\\cos\\alpha \\Leftrightarrow x=\\pm\\alpha+k2\\pi',
          ],
          note: 'Mẹo: sin có 2 họ nghiệm dạng α và π−α (đối xứng qua π/2); cos có 2 họ nghiệm dạng α và −α (đối xứng qua 0). Luôn cộng thêm k2π.',
        },
        {
          title: 'PT tan x = tan α, cot x = cot α',
          formulas: ['\\tan x=\\tan\\alpha \\Leftrightarrow x=\\alpha+k\\pi', '\\cot x=\\cot\\alpha \\Leftrightarrow x=\\alpha+k\\pi'],
          note: 'Mẹo: tan và cot chỉ có 1 họ nghiệm, cộng thêm kπ (không phải k2π) vì chu kỳ của chúng là π.',
        },
      ],
    },
    video: { caption: '00:00 / 14:15 — pt_luong_giac_co_ban_baigiang.mp4' },
    quiz: [
      {
        question: 'Nghiệm của phương trình sin x = sin(π/6) là?',
        options: [
          'x = π/6 + k2π hoặc x = 5π/6 + k2π',
          'x = π/6 + kπ',
          'x = −π/6 + k2π',
          'x = π/6 + k2π (duy nhất)',
        ],
        correctIndex: 0,
      },
      {
        question: 'Nghiệm của phương trình cos x = 1 là?',
        options: ['x = kπ', 'x = k2π', 'x = π/2 + kπ', 'x = π + k2π'],
        correctIndex: 1,
      },
      {
        question: 'Nghiệm của phương trình tan x = 1 là?',
        options: ['x = π/4 + kπ', 'x = π/4 + k2π', 'x = π/2 + kπ', 'x = −π/4 + kπ'],
        correctIndex: 0,
      },
      {
        question: 'Nghiệm của phương trình sin x = 0 là?',
        options: ['x = kπ/2', 'x = kπ', 'x = π/2 + kπ', 'x = k2π'],
        correctIndex: 1,
      },
      {
        question: 'Nghiệm của phương trình cos x = 0 là?',
        options: ['x = kπ', 'x = π/2 + kπ', 'x = k2π', 'x = π + k2π'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Giải phương trình sin x = 1/2.',
        solution: [
          '$\\sin x=\\sin\\dfrac{\\pi}{6}$',
          '$\\Leftrightarrow x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi,\\ k\\in\\mathbb{Z}$',
        ],
      },
      {
        prompt: 'Bài 2. Giải phương trình cos x = −1/2.',
        solution: ['$\\cos x=\\cos\\dfrac{2\\pi}{3}$', '$\\Leftrightarrow x=\\pm\\dfrac{2\\pi}{3}+k2\\pi$'],
      },
      {
        prompt: 'Bài 3. Giải phương trình tan x = √3.',
        solution: ['$\\tan x=\\tan\\dfrac{\\pi}{3}$', '$\\Leftrightarrow x=\\dfrac{\\pi}{3}+k\\pi$'],
      },
      {
        prompt: 'Bài 4. Giải phương trình 2sin x − 1 = 0.',
        solution: [
          '$\\sin x=\\dfrac{1}{2}$',
          '$\\Leftrightarrow x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi$',
        ],
      },
      {
        prompt: 'Bài 5. Giải phương trình sin 2x = sin x.',
        solution: [
          '$\\Leftrightarrow 2x=x+k2\\pi$ hoặc $2x=\\pi-x+k2\\pi$',
          '$\\Leftrightarrow x=k2\\pi$ hoặc $x=\\dfrac{\\pi}{3}+k\\dfrac{2\\pi}{3}$',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức nghiệm sin x = sin α', back: '$x=\\alpha+k2\\pi$ hoặc $x=\\pi-\\alpha+k2\\pi$' },
      { front: 'Công thức nghiệm cos x = cos α', back: '$x=\\pm\\alpha+k2\\pi$' },
      { front: 'Công thức nghiệm tan x = tan α', back: '$x=\\alpha+k\\pi$' },
      { front: 'Công thức nghiệm cot x = cot α', back: '$x=\\alpha+k\\pi$' },
      { front: 'Nghiệm đặc biệt sin x = 0', back: '$x=k\\pi$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'pt-luong-giac-thuong-gap': {
    title: 'Phương trình lượng giác thường gặp',
    theory: {
      cards: [
        {
          title: 'Phương trình bậc nhất đối với sin x và cos x',
          formulas: ['a\\sin x+b\\cos x=c', '\\sqrt{a^2+b^2}\\,\\sin(x+\\varphi)=c'],
          note: 'Mẹo: chia hai vế cho √(a²+b²) để đưa về dạng sin(x+φ) = c/√(a²+b²).',
        },
        {
          title: 'Phương trình bậc hai đối với một hàm số lượng giác',
          formulas: ['a\\sin^2x+b\\sin x+c=0', 't=\\sin x,\\ -1\\le t\\le1'],
          note: 'Mẹo: đặt ẩn phụ t = sin x (hoặc cos x), giải phương trình bậc hai theo t, nhớ đối chiếu điều kiện −1 ≤ t ≤ 1 trước khi suy ra x.',
        },
      ],
    },
    video: { caption: '00:00 / 16:40 — pt_luong_giac_thuong_gap_baigiang.mp4' },
    quiz: [
      {
        question: 'Phương trình a·sin x + b·cos x = c có nghiệm khi nào?',
        options: ['Luôn luôn có nghiệm', 'c² ≤ a² + b²', 'c² ≥ a² + b²', 'Chỉ khi a = b'],
        correctIndex: 1,
      },
      {
        question: 'Đặt t = sin x, phương trình 2sin²x − 3sin x + 1 = 0 trở thành?',
        options: ['2t² − 3t + 1 = 0', '2t² + 3t + 1 = 0', 't² − 3t + 1 = 0', '2t − 3t + 1 = 0'],
        correctIndex: 0,
      },
      {
        question: 'Giải 2t² − 3t + 1 = 0 được nghiệm t bằng?',
        options: ['t = 1 hoặc t = 1/2', 't = −1 hoặc t = 1/2', 't = 1 hoặc t = −1/2', 't = 2 hoặc t = 1'],
        correctIndex: 0,
      },
      {
        question: 'Phương trình cos 2x + cos x = 0 nên đặt ẩn phụ theo:',
        options: ['t = sin x', 't = cos x', 't = tan x', 't = cot x'],
        correctIndex: 1,
      },
      {
        question: 'Phương trình sin x + cos x = 1 có thể biến đổi thành dạng nào?',
        options: ['√2 sin(x + π/4) = 1', '√2 cos(x − π/4) = 1', 'Cả hai dạng trên đều đúng', 'Không thể biến đổi'],
        correctIndex: 2,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Giải phương trình sin x + cos x = √2.',
        solution: [
          '$\\sqrt2\\sin\\left(x+\\dfrac{\\pi}{4}\\right)=\\sqrt2 \\Leftrightarrow \\sin\\left(x+\\dfrac{\\pi}{4}\\right)=1$',
          '$\\Leftrightarrow x+\\dfrac{\\pi}{4}=\\dfrac{\\pi}{2}+k2\\pi \\Leftrightarrow x=\\dfrac{\\pi}{4}+k2\\pi$',
        ],
      },
      {
        prompt: 'Bài 2. Giải phương trình 2cos²x − cos x − 1 = 0.',
        solution: [
          'Đặt $t=\\cos x$: $\\ 2t^2-t-1=0 \\Leftrightarrow (2t+1)(t-1)=0$',
          '$t=1 \\Rightarrow \\cos x=1 \\Rightarrow x=k2\\pi$',
          '$t=-\\dfrac12 \\Rightarrow \\cos x=\\cos\\dfrac{2\\pi}{3} \\Rightarrow x=\\pm\\dfrac{2\\pi}{3}+k2\\pi$',
        ],
      },
      {
        prompt: 'Bài 3. Giải phương trình √3 sin x − cos x = 1.',
        solution: [
          '$2\\sin\\left(x-\\dfrac{\\pi}{6}\\right)=1 \\Leftrightarrow \\sin\\left(x-\\dfrac{\\pi}{6}\\right)=\\dfrac12$',
          '$\\Leftrightarrow x=\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=\\pi+k2\\pi$',
        ],
      },
      {
        prompt: 'Bài 4. Giải phương trình sin²x − 3sin x + 2 = 0.',
        solution: [
          'Đặt $t=\\sin x$: $\\ t^2-3t+2=0 \\Leftrightarrow t=1$ hoặc $t=2$ (loại vì $|t|\\le1$)',
          '$t=1 \\Rightarrow \\sin x=1 \\Rightarrow x=\\dfrac{\\pi}{2}+k2\\pi$',
        ],
      },
      {
        prompt: 'Bài 5. Giải phương trình cos 2x + 3cos x + 2 = 0.',
        solution: [
          '$\\cos2x=2\\cos^2x-1 \\Rightarrow 2\\cos^2x+3\\cos x+1=0$',
          'Đặt $t=\\cos x$: $\\ 2t^2+3t+1=0 \\Leftrightarrow t=-\\dfrac12$ hoặc $t=-1$',
          '$t=-\\dfrac12 \\Rightarrow x=\\pm\\dfrac{2\\pi}{3}+k2\\pi;\\quad t=-1 \\Rightarrow x=\\pi+k2\\pi$',
        ],
      },
    ],
    flashcards: [
      { front: 'Dạng phương trình bậc nhất sin, cos', back: '$a\\sin x+b\\cos x=c$' },
      { front: 'Điều kiện có nghiệm', back: '$a^2+b^2\\ge c^2$' },
      { front: 'Biến đổi về một hàm số', back: '$\\sqrt{a^2+b^2}\\sin(x+\\varphi)=c$' },
      { front: 'Đặt ẩn phụ PT bậc hai lượng giác', back: '$t=\\sin x$ hoặc $t=\\cos x,\\ -1\\le t\\le1$' },
      { front: 'Liên hệ cos 2x theo cos x', back: '$\\cos2x=2\\cos^2x-1$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'cong-thuc-luong-giac': {
    title: 'Công thức biến đổi lượng giác',
    theory: {
      cards: [
        {
          title: 'Công thức cộng',
          formulas: ['\\cos(a\\pm b)=\\cos a\\cos b \\mp \\sin a\\sin b', '\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b'],
          note: 'Mẹo nhớ: "cos cos sin sin, dấu ngược lại" và "sin cos cos sin, dấu như cũ".',
        },
        {
          title: 'Công thức nhân đôi',
          formulas: ['\\sin2a=2\\sin a\\cos a', '\\cos2a=\\cos^2a-\\sin^2a', '\\cos2a=2\\cos^2a-1=1-2\\sin^2a'],
          note: 'Mẹo: cos 2a có 3 dạng tương đương — chọn dạng phù hợp với ẩn phụ đang đặt (t = sin a hay t = cos a).',
        },
      ],
    },
    video: { caption: '00:00 / 17:25 — cong_thuc_luong_giac_baigiang.mp4' },
    quiz: [
      {
        question: 'sin(a + b) bằng?',
        options: [
          'sin a·cos b + cos a·sin b',
          'sin a·cos b − cos a·sin b',
          'cos a·cos b − sin a·sin b',
          'cos a·cos b + sin a·sin b',
        ],
        correctIndex: 0,
      },
      {
        question: 'cos(a − b) bằng?',
        options: [
          'cos a·cos b − sin a·sin b',
          'cos a·cos b + sin a·sin b',
          'sin a·sin b − cos a·cos b',
          'sin a·cos b + cos a·sin b',
        ],
        correctIndex: 1,
      },
      {
        question: 'sin 2a bằng?',
        options: ['2 sin a', '2 sin a·cos a', 'sin²a − cos²a', '2cos²a − 1'],
        correctIndex: 1,
      },
      {
        question: 'cos 2a = 2cos²a − 1 còn tương đương với dạng nào sau đây?',
        options: ['1 − 2sin²a', 'cos²a + sin²a', '2 sin a·cos a', 'sin²a − cos²a'],
        correctIndex: 0,
      },
      {
        question: 'sin(π/2 − a) bằng?',
        options: ['sin a', '−sin a', 'cos a', '−cos a'],
        correctIndex: 2,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tính sin 75° bằng công thức cộng (75° = 45° + 30°).',
        solution: [
          '$\\sin75^\\circ=\\sin45^\\circ\\cos30^\\circ+\\cos45^\\circ\\sin30^\\circ$',
          '$=\\dfrac{\\sqrt2}{2}\\cdot\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt2}{2}\\cdot\\dfrac{1}{2}=\\dfrac{\\sqrt6+\\sqrt2}{4}$',
        ],
      },
      {
        prompt: 'Bài 2. Tính cos 15° (15° = 45° − 30°).',
        solution: [
          '$\\cos15^\\circ=\\cos45^\\circ\\cos30^\\circ+\\sin45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6+\\sqrt2}{4}$',
        ],
      },
      {
        prompt: 'Bài 3. Chứng minh công thức sin 2a = 2sin a·cos a từ công thức cộng sin(a + a).',
        solution: ['$\\sin(a+a)=\\sin a\\cos a+\\cos a\\sin a=2\\sin a\\cos a$'],
      },
      {
        prompt: 'Bài 4. Cho sin a = 3/5, a ∈ (0; π/2). Tính cos 2a.',
        solution: [
          '$\\cos a=\\dfrac45$ (vì a nhọn nên cos a > 0)',
          '$\\cos2a=1-2\\sin^2a=1-2\\cdot\\dfrac{9}{25}=\\dfrac{7}{25}$',
        ],
      },
      {
        prompt: 'Bài 5. Cho sin a = 1/2, cos b = √3/2 với a, b là góc nhọn. Tính sin(a + b).',
        solution: [
          '$\\cos a=\\dfrac{\\sqrt3}{2},\\quad \\sin b=\\dfrac12$',
          '$\\sin(a+b)=\\sin a\\cos b+\\cos a\\sin b=\\dfrac12\\cdot\\dfrac{\\sqrt3}{2}+\\dfrac{\\sqrt3}{2}\\cdot\\dfrac12=\\dfrac{\\sqrt3}{2}$',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức cộng sin', back: '$\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b$' },
      { front: 'Công thức cộng cos', back: '$\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b$' },
      { front: 'Công thức nhân đôi sin', back: '$\\sin2a=2\\sin a\\cos a$' },
      { front: 'Công thức nhân đôi cos', back: '$\\cos2a=2\\cos^2a-1=1-2\\sin^2a$' },
      { front: 'Công thức góc phụ nhau', back: '$\\sin\\left(\\dfrac{\\pi}{2}-a\\right)=\\cos a$' },
    ],
    exam: EXAM_DEFAULT,
  },
}
