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
      { question: 'Giá trị của sin(13π/6) bằng?', options: ['−1/2', '1/2', '−√3/2', '√3/2'], correctIndex: 1 },
      { question: 'Số đo theo đơn vị rađian của góc 315° là?', options: ['7π/2', '7π/4', '2π/7', '4π/7'], correctIndex: 1 },
      {
        question: 'Một bánh xe có 72 răng. Số đo góc mà bánh xe đã quay được khi di chuyển 10 răng là?',
        options: ['60°', '30°', '40°', '50°'],
        correctIndex: 3,
      },
      { question: 'Trong các hàm số sau, hàm số nào là hàm số chẵn?', options: ['y = tan x', 'y = cot x', 'y = cos x', 'y = sin x'], correctIndex: 2 },
      {
        question: 'Tập xác định của hàm số y = cot 2x là?',
        options: ['D = R \\ {π/2 + kπ}', 'D = R \\ {π/2 + k2π}', 'D = R \\ {kπ}', 'D = R \\ {kπ/2}'],
        correctIndex: 3,
      },
      { question: 'Hàm số f(x) = 2023·sin 3x tuần hoàn với chu kì bằng?', options: ['2π', '2023π', '2π/2023', '2π/3'], correctIndex: 3 },
      { question: 'Tập giá trị của hàm số y = 2sin x + 3 là?', options: ['[−1;1]', '[1;5]', '[4;8]', '(1;5)'], correctIndex: 1 },
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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Tập xác định của hàm số y = sin x là?', options: ['R', '[−1;1]', 'R \\ {kπ}', 'R \\ {π/2+kπ}'], correctIndex: 0 },
        { question: 'Tập xác định của hàm số y = cot x là?', options: ['R', 'R \\ {kπ}', 'R \\ {π/2+kπ}', '[−1;1]'], correctIndex: 1 },
        { question: 'Hàm số y = cos x là hàm số:', options: ['Lẻ', 'Chẵn', 'Không chẵn không lẻ', 'Tuần hoàn chu kỳ π'], correctIndex: 1 },
        { question: 'Giá trị nhỏ nhất của hàm số y = sin x là?', options: ['0', '1', '−1', 'Không có'], correctIndex: 2 },
        { question: 'Chu kỳ tuần hoàn của hàm số y = cot x là?', options: ['π', '2π', 'π/2', '4π'], correctIndex: 0 },
        { question: 'cos(−x) bằng?', options: ['cos x', '−cos x', 'sin x', '−sin x'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Giá trị của cos(11π/6) bằng?', options: ['√3/2', '−√3/2', '1/2', '−1/2'], correctIndex: 0 },
        { question: 'Số đo theo đơn vị rađian của góc 150° là?', options: ['5π/6', '5π/4', '2π/5', '4π/5'], correctIndex: 0 },
        { question: 'Tập xác định của hàm số y = tan 2x là?', options: ['R \\ {π/4+kπ/2}', 'R \\ {π/2+kπ}', 'R \\ {kπ/2}', 'R \\ {π/4+kπ}'], correctIndex: 0 },
        { question: 'Trong các hàm số sau, hàm số nào là hàm số lẻ?', options: ['y = cos x', 'y = sin x', 'y = |sin x|', 'y = cos 2x'], correctIndex: 1 },
        { question: 'Hàm số f(x) = 5·cos 2x tuần hoàn với chu kỳ bằng?', options: ['2π', 'π', 'π/2', '4π'], correctIndex: 1 },
        { question: 'Tập giá trị của hàm số y = 3cos x − 1 là?', options: ['[−4; 2]', '[−1; 1]', '[−3; 3]', '[−2; 4]'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Một bánh xe có 60 răng. Số đo góc (theo độ) mà bánh xe quay được khi di chuyển 15 răng là?', options: ['60°', '90°', '45°', '120°'], correctIndex: 1 },
        { question: 'Tập giá trị của hàm số y = 2sin(x − π/3) + 5 là?', options: ['[3; 7]', '[−1; 1]', '[4; 6]', '[2; 8]'], correctIndex: 0 },
        { question: 'Trên đoạn [0; 2π], hàm số y = sin x đạt giá trị lớn nhất tại?', options: ['x = 0', 'x = π/2', 'x = π', 'x = 3π/2'], correctIndex: 1 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm tập xác định của hàm số y = (1 + cos x)/sin x.',
          solution: ['Điều kiện: $\\sin x\\ne0 \\Leftrightarrow x\\ne k\\pi,\\ k\\in\\mathbb{Z}$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số y = 3 − 2cos(2x + π/6).',
          solution: [
            '$-1\\le \\cos\\left(2x+\\dfrac{\\pi}{6}\\right)\\le 1 \\Rightarrow -2\\le -2\\cos(\\cdot)\\le 2$',
            '$\\Rightarrow 1\\le y\\le 5$. Vậy $y_{\\max}=5,\\ y_{\\min}=1$',
          ],
        },
      ],
    },
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
      { question: 'Nghiệm của phương trình tan x = 1 là?', options: ['x = π/4 + kπ', 'x = π/3 + k2π', 'x = π/4 + k2π', 'x = ±5π/6 + k2π'], correctIndex: 0 },
      { question: 'Nghiệm của phương trình cos x = −1/2 là?', options: ['x = ±2π/3 + k2π', 'x = ±π/6 + kπ', 'x = ±π/3 + k2π', 'x = ±π/6 + k2π'], correctIndex: 0 },
      { question: 'Nghiệm của phương trình cos x = 1 là?', options: ['x = kπ', 'x = k2π', 'x = π/2 + kπ', 'x = π + k2π'], correctIndex: 1 },
      { question: 'Nghiệm của phương trình √3·tan x = 1 là?', options: ['x = π/6 + k2π', 'x = π/4 + kπ', 'x = π/3 + kπ', 'x = π/6 + kπ'], correctIndex: 3 },
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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Nghiệm của phương trình cos x = cos(π/3) là?', options: ['x = ±π/3 + k2π', 'x = π/3 + kπ', 'x = −π/3 + k2π', 'x = π/3 + k2π (duy nhất)'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình sin x = −1 là?', options: ['x = −π/2 + k2π', 'x = π/2 + k2π', 'x = kπ', 'x = π + k2π'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình tan x = 0 là?', options: ['x = kπ', 'x = π/2 + kπ', 'x = k2π', 'x = π/4 + kπ'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình cot x = 1 là?', options: ['x = π/4 + kπ', 'x = π/4 + k2π', 'x = −π/4 + kπ', 'x = π/2 + kπ'], correctIndex: 0 },
        { question: 'Phương trình sin x = m có nghiệm khi:', options: ['|m| ≤ 1', '|m| ≥ 1', 'm = 0', 'm > 0'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình sin x = sin(π/4) là?', options: ['x = π/4 + k2π hoặc x = 3π/4 + k2π', 'x = π/4 + kπ', 'x = −π/4 + k2π', 'x = π/4 + k2π (duy nhất)'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Nghiệm của phương trình 2cos x − 1 = 0 là?', options: ['x = ±π/3 + k2π', 'x = π/6 + k2π', 'x = ±π/6 + k2π', 'x = π/3 + kπ'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình tan 2x = √3 là?', options: ['x = π/6 + kπ/2', 'x = π/3 + kπ', 'x = π/6 + kπ', 'x = π/3 + kπ/2'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình sin 3x = 1 là?', options: ['x = π/6 + k2π/3', 'x = π/2 + k2π', 'x = π/6 + kπ', 'x = π/2 + kπ/3'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình cos(x − π/4) = 0 là?', options: ['x = 3π/4 + kπ', 'x = π/4 + kπ', 'x = −π/4 + kπ', 'x = π/2 + kπ'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình √2 sin x = 1 là?', options: ['x = π/4 + k2π hoặc x = 3π/4 + k2π', 'x = π/4 + kπ', 'x = π/2 + k2π', 'x = √2/2 + k2π'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình cot(x + π/6) = 0 là?', options: ['x = π/3 + kπ', 'x = π/6 + kπ', 'x = −π/6 + kπ', 'x = π/2 + kπ'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Số nghiệm của phương trình sin x = 1/2 trong khoảng (0; 2π) là?', options: ['1', '2', '3', '4'], correctIndex: 1 },
        { question: 'Tổng các nghiệm của phương trình cos x = 0 trong khoảng (0; 2π) là?', options: ['π', '2π', '3π', 'π/2'], correctIndex: 1 },
        {
          question: 'Tập nghiệm của phương trình sin 2x = cos x là?',
          options: [
            'x = π/2 + kπ hoặc x = π/6 + k2π hoặc x = 5π/6 + k2π',
            'x = π/2 + kπ',
            'x = π/6 + k2π',
            'x = kπ',
          ],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Giải phương trình 2sin(x + π/3) − √3 = 0.',
          solution: [
            '$\\sin\\left(x+\\dfrac{\\pi}{3}\\right)=\\dfrac{\\sqrt3}{2}$',
            '$\\Leftrightarrow x+\\dfrac{\\pi}{3}=\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x+\\dfrac{\\pi}{3}=\\dfrac{2\\pi}{3}+k2\\pi$',
            '$\\Leftrightarrow x=k2\\pi$ hoặc $x=\\dfrac{\\pi}{3}+k2\\pi$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Giải phương trình sin 2x + sin x = 0 và tìm các nghiệm thuộc khoảng (0; 2π).',
          solution: [
            '$2\\sin x\\cos x+\\sin x=0 \\Leftrightarrow \\sin x(2\\cos x+1)=0$',
            '$\\sin x=0 \\Rightarrow x=k\\pi$; \\quad $\\cos x=-\\dfrac12 \\Rightarrow x=\\pm\\dfrac{2\\pi}{3}+k2\\pi$',
            'Trong khoảng $(0;2\\pi)$: $x=\\pi,\\ x=\\dfrac{2\\pi}{3},\\ x=\\dfrac{4\\pi}{3}$',
          ],
        },
      ],
    },
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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Phương trình a·sin x + b·cos x = c thuộc dạng phương trình nào?', options: ['Bậc nhất đối với sin và cos', 'Bậc hai đối với một HSLG', 'Thuần nhất bậc hai', 'Bậc nhất đối với tan'], correctIndex: 0 },
        { question: 'Để giải phương trình bậc hai đối với sin x, ta thường đặt ẩn phụ nào?', options: ['t = sin x (−1 ≤ t ≤ 1)', 't = cos x (không cần điều kiện)', 't = x', 't = 2x'], correctIndex: 0 },
        { question: 'Điều kiện có nghiệm của phương trình a·sin x + b·cos x = c là?', options: ['a² + b² ≥ c²', 'a² + b² ≤ c²', 'a = b = c', 'Luôn luôn có nghiệm'], correctIndex: 0 },
        { question: 'Phương trình 2sin²x − sin x − 1 = 0, sau khi đặt t = sin x, trở thành?', options: ['2t² − t − 1 = 0', '2t² + t − 1 = 0', 't² − t − 1 = 0', '2t − t − 1 = 0'], correctIndex: 0 },
        { question: 'Phương trình thuần nhất bậc hai đối với sin x và cos x có dạng?', options: ['a·sin²x + b·sinx·cosx + c·cos²x = d', 'a·sinx + b·cosx = c', 'a·sin²x + b·sinx + c = 0', 'a·sinx = b·cosx'], correctIndex: 0 },
        { question: 'Khi giải phương trình thuần nhất bậc hai đối với sin, cos, ta thường chia hai vế cho:', options: ['cos²x (xét cos x = 0 trước)', 'sin²x', 'sinx·cosx', 'Không cần chia'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Giải 2t² − 3t + 1 = 0 (với t = cos x) được nghiệm t bằng?', options: ['t = 1 hoặc t = 1/2', 't = −1 hoặc t = 1/2', 't = 1 hoặc t = −1/2', 't = 2 hoặc t = 1'], correctIndex: 0 },
        { question: 'Phương trình sin x − √3·cos x = 0 tương đương với phương trình nào?', options: ['tan x = √3', 'tan x = 1/√3', 'cot x = √3', 'tan x = −√3'], correctIndex: 0 },
        { question: 'Để đặt ẩn phụ t = sin x cho phương trình cos 2x − sin x = 0, ta biến đổi cos 2x theo dạng nào?', options: ['cos 2x = 1 − 2sin²x', 'cos 2x = 2cos²x − 1', 'cos 2x = cos²x − sin²x', 'Không cần biến đổi'], correctIndex: 0 },
        { question: 'Nghiệm của phương trình sin²x = 1 là?', options: ['x = π/2 + kπ', 'x = π/2 + k2π', 'x = kπ', 'x = π/4 + kπ'], correctIndex: 0 },
        { question: 'Phương trình 3sin²x + 2sinx·cosx − cos²x = 0 là phương trình dạng nào?', options: ['Thuần nhất bậc hai đối với sin, cos', 'Bậc nhất đối với sin, cos', 'Bậc hai đối với một HSLG', 'Cơ bản'], correctIndex: 0 },
        { question: 'Phương trình sin x + cos x = 1 biến đổi thành √2·sin(x + π/4) = 1, tức là:', options: ['sin(x + π/4) = √2/2', 'sin(x + π/4) = 1', 'cos(x + π/4) = 1', 'sin(x + π/4) = 0'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Số nghiệm của phương trình 2cos²x − cos x − 1 = 0 trong khoảng (0; 2π) là?', options: ['1', '2', '3', '4'], correctIndex: 1 },
        { question: 'Phương trình sin²x − 3sinx·cosx + 2cos²x = 0 có bao nhiêu họ nghiệm (dạng x = … + kπ)?', options: ['1', '2', '3', '4'], correctIndex: 1 },
        { question: 'Phương trình √3·sin x + cos x = 2 có nghiệm là?', options: ['x = π/3 + k2π', 'x = π/6 + k2π', 'x = π/2 + k2π', 'Vô nghiệm'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Giải phương trình 2cos²x + 5sin x − 4 = 0.',
          solution: [
            '$2(1-\\sin^2x)+5\\sin x-4=0 \\Leftrightarrow 2\\sin^2x-5\\sin x+2=0$',
            'Đặt $t=\\sin x\\ (-1\\le t\\le1)$: $2t^2-5t+2=0 \\Leftrightarrow t=2$ (loại) hoặc $t=\\dfrac12$',
            '$\\sin x=\\dfrac12 \\Leftrightarrow x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Giải phương trình sin²x + sinx·cosx − 2cos²x = 0.',
          solution: [
            'Xét $\\cos x=0$: vế trái $=\\sin^2x=1\\ne0$, không thoả. Vậy $\\cos x\\ne0$.',
            'Chia hai vế cho $\\cos^2x$: $\\tan^2x+\\tan x-2=0 \\Leftrightarrow \\tan x=1$ hoặc $\\tan x=-2$',
            '$\\tan x=1 \\Rightarrow x=\\dfrac{\\pi}{4}+k\\pi$; \\quad $\\tan x=-2 \\Rightarrow x=\\arctan(-2)+k\\pi$',
          ],
        },
      ],
    },
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
      {
        question: 'Trong các công thức sau, công thức nào sai?',
        options: ['cos 2a = cos²a − sin²a', 'cos 2a = 2sin a·cos a', 'cos 2a = 2cos²a − 1', 'cos 2a = 1 − 2sin²a'],
        correctIndex: 1,
      },
      {
        question: 'Trong các công thức sau, công thức nào đúng?',
        options: ['cos(a − b) = cos a·cos b + sin a·sin b', 'cos(a + b) = cos a·cos b + sin a·sin b', 'sin(a − b) = sin a·cos b − cos a·sin b', 'sin(a + b) = sin a·cos b − cos a·sin b'],
        correctIndex: 2,
      },
      { question: 'Rút gọn M = sin(x + y)cos y − cos(x + y)sin y?', options: ['M = cos x', 'M = sin x', 'M = sin(x + 2y)', 'M = cos(x + 2y)'], correctIndex: 1 },
      { question: 'Cho tam giác ABC. Khẳng định nào dưới đây đúng?', options: ['cos(A + B) = cos C', 'cos(A + B) = sin C', 'cos(A + B) = −sin C', 'cos(A + B) = −cos C'], correctIndex: 3 },
      { question: 'Cho góc α thỏa cos α = 4/5 và 0 < α < π/2. Giá trị của sin 2α bằng?', options: ['−12/25', '24/25', '−24/25', '12/25'], correctIndex: 1 },
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
      {
        prompt: 'Bài 6. Cho tan α = 2 và 180° < α < 270°. Tính cos α + sin α.',
        solution: [
          '$\\tan\\alpha=2 \\Rightarrow \\sin\\alpha=2\\cos\\alpha$. Thay vào $\\sin^2\\alpha+\\cos^2\\alpha=1$: $4\\cos^2\\alpha+\\cos^2\\alpha=1 \\Rightarrow \\cos^2\\alpha=\\dfrac15$',
          'Vì $180^\\circ<\\alpha<270^\\circ$ (góc phần tư III) nên $\\cos\\alpha<0 \\Rightarrow \\cos\\alpha=-\\dfrac{\\sqrt5}{5}$, suy ra $\\sin\\alpha=2\\cos\\alpha=-\\dfrac{2\\sqrt5}{5}$.',
          '$\\cos\\alpha+\\sin\\alpha=-\\dfrac{\\sqrt5}{5}-\\dfrac{2\\sqrt5}{5}=-\\dfrac{3\\sqrt5}{5}$',
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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Công thức nào sau đây đúng?', options: ['sin(a+b) = sina·cosb + cosa·sinb', 'sin(a+b) = sina·sinb + cosa·cosb', 'sin(a+b) = sina·cosb − cosa·sinb', 'sin(a+b) = cosa·cosb − sina·sinb'], correctIndex: 0 },
        { question: 'cos(a+b) bằng?', options: ['cosa·cosb − sina·sinb', 'cosa·cosb + sina·sinb', 'sina·cosb + cosa·sinb', 'sina·sinb − cosa·cosb'], correctIndex: 0 },
        { question: 'Công thức nhân đôi của sin là?', options: ['sin2a = 2sina·cosa', 'sin2a = cos²a − sin²a', 'sin2a = sina + cosa', 'sin2a = 2cos²a − 1'], correctIndex: 0 },
        { question: 'cos2a = 1 − 2sin²a là một dạng của công thức nào?', options: ['Công thức nhân đôi cos', 'Công thức cộng', 'Công thức hạ bậc riêng', 'Công thức nhân ba'], correctIndex: 0 },
        { question: 'cos(π/2 − a) bằng?', options: ['sina', '−sina', 'cosa', '−cosa'], correctIndex: 0 },
        { question: 'tan(a+b) bằng (khi xác định)?', options: ['(tana + tanb)/(1 − tana·tanb)', '(tana − tanb)/(1 + tana·tanb)', '(tana + tanb)/(1 + tana·tanb)', 'tana·tanb'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Rút gọn biểu thức M = sin(x−y)cosy + cos(x−y)siny.', options: ['M = sin x', 'M = cos x', 'M = sin(x−2y)', 'M = cos(x−2y)'], correctIndex: 0 },
        { question: 'cos75° bằng (dùng công thức cộng với 75° = 45° + 30°)?', options: ['(√6−√2)/4', '(√6+√2)/4', '(√2−√6)/4', '√6/4'], correctIndex: 0 },
        { question: 'Cho sina = 3/5 với a nhọn. Giá trị cos2a bằng?', options: ['7/25', '−7/25', '24/25', '−24/25'], correctIndex: 0 },
        { question: 'Cho tam giác ABC. Khẳng định nào sau đây đúng?', options: ['sin(A+B) = sinC', 'sin(A+B) = cosC', 'sin(A+B) = −sinC', 'sin(A+B) = −cosC'], correctIndex: 0 },
        { question: 'Giá trị của biểu thức sin15°·cos15° bằng?', options: ['1/4', '1/2', '√3/4', '√2/4'], correctIndex: 0 },
        { question: 'Cho cosα = 1/3, 0 < α < π/2. Giá trị sin2α bằng?', options: ['4√2/9', '2√2/9', '4√2/3', '8√2/9'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Cho tanα = 2. Giá trị của biểu thức (sinα+cosα)/(sinα−cosα) bằng?', options: ['3', '1', '−3', '2'], correctIndex: 0 },
        { question: 'Giá trị của biểu thức A = cos20°·cos40°·cos80° bằng?', options: ['1/8', '1/4', '1/2', '1/16'], correctIndex: 0 },
        { question: 'Giá trị lớn nhất của biểu thức sina + cosa là?', options: ['√2', '2', '1', '√2/2'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho sina = 4/5, a ∈ (0; π/2). Tính sin2a và cos2a.',
          solution: [
            '$\\cos a=\\dfrac35$ (vì $a$ nhọn nên $\\cos a>0$)',
            '$\\sin2a=2\\sin a\\cos a=2\\cdot\\dfrac45\\cdot\\dfrac35=\\dfrac{24}{25}$',
            '$\\cos2a=1-2\\sin^2a=1-2\\cdot\\dfrac{16}{25}=-\\dfrac{7}{25}$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Chứng minh đẳng thức sin(a+b)·sin(a−b) = sin²a − sin²b, sau đó áp dụng tính giá trị của sin75°·sin15°.',
          solution: [
            '$\\sin(a+b)\\sin(a-b)=(\\sin a\\cos b+\\cos a\\sin b)(\\sin a\\cos b-\\cos a\\sin b)=\\sin^2a\\cos^2b-\\cos^2a\\sin^2b$',
            '$=\\sin^2a(1-\\sin^2b)-(1-\\sin^2a)\\sin^2b=\\sin^2a-\\sin^2b$ (đpcm)',
            'Áp dụng: $\\sin75^\\circ\\sin15^\\circ=\\sin(45^\\circ+30^\\circ)\\sin(45^\\circ-30^\\circ)=\\sin^245^\\circ-\\sin^230^\\circ=\\dfrac12-\\dfrac14=\\dfrac14$',
          ],
        },
      ],
    },
  },
}
