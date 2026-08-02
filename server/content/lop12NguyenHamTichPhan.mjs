import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP12_NGUYEN_HAM_TICH_PHAN = {
  'l12-nguyen-ham': {
    title: 'Nguyên hàm và các tính chất',
    theory: {
      cards: [
        {
          title: 'Định nghĩa và tính chất của nguyên hàm',
          formulas: ["\\int f(x)\\,dx = F(x)+C \\Leftrightarrow F'(x)=f(x)", '\\int [f(x)\\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx'],
          legend: ['$F(x)$: một nguyên hàm của $f(x)$', '$C$: hằng số tuỳ ý'],
          note: 'Mẹo: mọi hàm số liên tục trên một khoảng đều có nguyên hàm trên khoảng đó; họ nguyên hàm sai khác nhau một hằng số C.',
        },
        {
          title: 'Bảng nguyên hàm cơ bản',
          formulas: ['\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C\\ (n\\neq-1)', '\\int \\dfrac1x\\,dx=\\ln|x|+C', '\\int e^x\\,dx=e^x+C', '\\int \\cos x\\,dx=\\sin x+C,\\quad \\int \\sin x\\,dx=-\\cos x+C'],
          legend: [],
          note: 'Mẹo: học thuộc bảng nguyên hàm cơ bản là nền tảng để tính nguyên hàm của các hàm phức tạp hơn bằng phương pháp đổi biến hoặc từng phần.',
        },
      ],
    },
    video: { caption: '00:00 / 14:10 — nguyen_ham_baigiang.mp4' },
    quiz: [
      { question: '∫x²dx bằng?', options: ['x³/3 + C', 'x³ + C', '2x + C', '3x² + C'], correctIndex: 0 },
      { question: '∫(2x+3)dx bằng?', options: ['x² + 3x + C', 'x² + C', '2x² + 3x + C', 'x + 3x + C'], correctIndex: 0 },
      { question: '∫eˣdx bằng?', options: ['eˣ + C', 'xeˣ + C', 'eˣ/x + C', 'e^(x+1) + C'], correctIndex: 0 },
      { question: '∫cos x dx bằng?', options: ['sin x + C', '−sin x + C', 'cos x + C', '−cos x + C'], correctIndex: 0 },
      { question: '∫(1/x)dx (x>0) bằng?', options: ['ln x + C', '1/x² + C', 'x ln x + C', '−1/x² + C'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm nguyên hàm của hàm số f(x) = 3x² − 4x + 1.', solution: ['$\\int f(x)dx=x^3-2x^2+x+C$'] },
      { prompt: 'Bài 2. Tìm nguyên hàm F(x) của f(x) = 2x + 1 biết F(1) = 3.', solution: ['$F(x)=x^2+x+C$', '$F(1)=1+1+C=3\\Rightarrow C=1$', '$F(x)=x^2+x+1$'] },
      { prompt: 'Bài 3. Tính ∫(x³ − 2x + 3)dx.', solution: ['$\\int(x^3-2x+3)dx=\\dfrac{x^4}{4}-x^2+3x+C$'] },
      { prompt: 'Bài 4. Tính ∫(sin x + 2cos x)dx.', solution: ['$\\int(\\sin x+2\\cos x)dx=-\\cos x+2\\sin x+C$'] },
      { prompt: 'Bài 5. Tìm nguyên hàm của hàm số f(x) = eˣ + 3x².', solution: ['$\\int f(x)dx=e^x+x^3+C$'] },
    ],
    flashcards: [
      { front: 'Định nghĩa nguyên hàm', back: "F(x) là nguyên hàm của f(x) trên K nếu F'(x)=f(x) với mọi x∈K" },
      { front: 'Nguyên hàm của xⁿ (n≠−1)', back: '$\\int x^n dx=\\frac{x^{n+1}}{n+1}+C$' },
      { front: 'Nguyên hàm của 1/x', back: '$\\int \\frac1x dx=\\ln|x|+C$' },
      { front: 'Nguyên hàm của eˣ', back: '$\\int e^x dx=e^x+C$' },
      { front: 'Nguyên hàm của sin x, cos x', back: '$\\int \\sin x\\,dx=-\\cos x+C,\\quad \\int \\cos x\\,dx=\\sin x+C$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Nguyên hàm của hàm số f(x) = 0 là?', options: ['C (hằng số)', '0', 'x + C', '1'], correctIndex: 0 },
        { question: 'Công thức nguyên hàm của xⁿ (n≠−1) là?', options: ['x^(n+1)/(n+1) + C', 'nx^(n−1) + C', 'xⁿ/n + C', 'x^(n+1) + C'], correctIndex: 0 },
        { question: '∫1/x dx (x>0) bằng?', options: ['ln x + C', '1/x² + C', 'x ln x + C', '−1/x + C'], correctIndex: 0 },
        { question: '∫eˣdx bằng?', options: ['eˣ + C', 'xeˣ + C', 'eˣ/x + C', 'e^(x+1) + C'], correctIndex: 0 },
        { question: '∫cos x dx bằng?', options: ['sin x + C', '−sin x + C', 'cos x + C', '−cos x + C'], correctIndex: 0 },
        { question: '∫sin x dx bằng?', options: ['−cos x + C', 'cos x + C', 'sin x + C', '−sin x + C'], correctIndex: 0 },
        { question: '∫x²dx bằng?', options: ['x³/3 + C', 'x³ + C', '2x + C', '3x² + C'], correctIndex: 0 },
        { question: '∫(3x²−2x)dx bằng?', options: ['x³ − x² + C', 'x³ + C', '3x³ − x² + C', 'x³ − 2x² + C'], correctIndex: 0 },
        { question: '∫(4x³+1)dx bằng?', options: ['x⁴ + x + C', '4x⁴ + C', 'x⁴ + C', 'x⁴ + x² + C'], correctIndex: 0 },
        { question: 'Tìm nguyên hàm F(x) của f(x) = 2x biết F(0) = 5.', options: ['x² + 5', 'x² + C', '2x² + 5', 'x²'], correctIndex: 0 },
        { question: '∫(2sin x)dx bằng?', options: ['−2cos x + C', '2cos x + C', '−cos x + C', '2sin x + C'], correctIndex: 0 },
        { question: '∫(1/x²)dx (x≠0) bằng?', options: ['−1/x + C', '1/x + C', 'ln x + C', '−1/x² + C'], correctIndex: 0 },
        { question: 'Tìm F(2) biết F(x) là nguyên hàm của f(x)=3x²−6x+2 và F(1)=0.', options: ['0', '4', '−4', '2'], correctIndex: 0 },
        { question: 'Trong nguyên hàm của f(x)=(2x+1)², hệ số của x³ là bao nhiêu?', options: ['4/3', '4', '2', '1/3'], correctIndex: 0 },
        { question: 'Tìm nguyên hàm của f(x) = (x−1)/x (x>0).', options: ['x − ln x + C', 'x + ln x + C', 'ln x − x + C', 'x²/2 − ln x + C'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm nguyên hàm F(x) của hàm số f(x) = 4x³ − 6x² + 2x − 5 biết F(0) = 3.',
          solution: ['$F(x)=x^4-2x^3+x^2-5x+C$', '$F(0)=C=3$', '$F(x)=x^4-2x^3+x^2-5x+3$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tính nguyên hàm của hàm số f(x) = (x²+2x−1)/x (x>0).',
          solution: ['$f(x)=x+2-\\dfrac1x$', '$\\int f(x)dx=\\dfrac{x^2}{2}+2x-\\ln x+C$'],
        },
      ],
    },
  },

  'l12-tich-phan': {
    title: 'Tích phân và các phương pháp tính',
    theory: {
      cards: [
        {
          title: 'Định nghĩa và tính chất của tích phân xác định',
          formulas: ['\\int_a^b f(x)\\,dx = F(b)-F(a)', '\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx'],
          legend: ['$F(x)$: một nguyên hàm bất kỳ của $f(x)$', '$a, b$: cận dưới và cận trên của tích phân'],
          note: 'Mẹo (công thức Newton–Leibniz): để tính $\\int_a^b f(x)dx$, tìm một nguyên hàm F(x) của f(x) rồi tính F(b) − F(a).',
        },
        {
          title: 'Phương pháp đổi biến số và tích phân từng phần',
          formulas: ['\\int u\\,dv = uv - \\int v\\,du'],
          legend: ['Đổi biến: đặt $t=u(x)$ để đưa về tích phân đơn giản hơn theo $t$', 'Từng phần: chọn $u, dv$ sao cho $\\int v\\,du$ dễ tính hơn $\\int u\\,dv$'],
          note: 'Mẹo chọn u trong tích phân từng phần ("nhất log, nhì đa, tam lượng, tứ mũ"): logarit → đa thức → lượng giác → mũ.',
        },
      ],
    },
    video: { caption: '00:00 / 16:30 — tich_phan_baigiang.mp4' },
    quiz: [
      { question: '∫₀¹ x²dx bằng?', options: ['1/3', '1', '3', '0'], correctIndex: 0 },
      { question: '∫₀^π sin x dx bằng?', options: ['2', '0', '−2', '1'], correctIndex: 0 },
      { question: '∫₁² 2x dx bằng?', options: ['3', '4', '2', '6'], correctIndex: 0 },
      { question: '∫₀¹ eˣ dx bằng?', options: ['e − 1', 'e', 'e + 1', '1'], correctIndex: 0 },
      { question: '∫₀² 3x²dx bằng?', options: ['8', '6', '4', '12'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính I = ∫₀¹ (3x² − 2x + 1)dx.', solution: ['$I=[x^3-x^2+x]_0^1=1$'] },
      { prompt: 'Bài 2. Tính I = ∫₁² (1/x)dx.', solution: ['$I=[\\ln x]_1^2=\\ln2-\\ln1=\\ln2$'] },
      { prompt: 'Bài 3. Tính I = ∫₀^(π/2) cos x dx.', solution: ['$I=[\\sin x]_0^{\\pi/2}=1-0=1$'] },
      {
        prompt: 'Bài 4. Tính I = ∫₀¹ xeˣ dx bằng phương pháp tích phân từng phần.',
        solution: ['Đặt $u=x,\\ dv=e^xdx \\Rightarrow du=dx,\\ v=e^x$', '$I=[xe^x]_0^1-\\int_0^1 e^xdx=e-(e-1)=1$'],
      },
      {
        prompt: 'Bài 5. Tính I = ∫₀¹ 2x(x²+1)³ dx bằng phương pháp đổi biến số.',
        solution: ['Đặt $t=x^2+1 \\Rightarrow dt=2x\\,dx$. Khi $x=0,t=1$; khi $x=1,t=2$', '$I=\\int_1^2 t^3dt=\\left[\\dfrac{t^4}{4}\\right]_1^2=\\dfrac{16}{4}-\\dfrac14=\\dfrac{15}{4}$'],
      },
    ],
    flashcards: [
      { front: 'Công thức Newton–Leibniz', back: '$\\int_a^b f(x)dx=F(b)-F(a)$' },
      { front: 'Tính chất đổi cận tích phân', back: '$\\int_a^b f(x)dx=-\\int_b^a f(x)dx$' },
      { front: 'Công thức tích phân từng phần', back: '$\\int u\\,dv=uv-\\int v\\,du$' },
      { front: 'Thứ tự ưu tiên chọn u khi tích phân từng phần', back: 'Log → đa thức → lượng giác → mũ' },
      { front: 'Phương pháp đổi biến số', back: 'Đặt t=u(x) để đưa tích phân về dạng đơn giản hơn theo t' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức Newton–Leibniz để tính tích phân xác định là?', options: ['∫ₐᵇ f(x)dx = F(b) − F(a)', '∫ₐᵇ f(x)dx = F(a) − F(b)', '∫ₐᵇ f(x)dx = F(b) + F(a)', '∫ₐᵇ f(x)dx = f(b) − f(a)'], correctIndex: 0 },
        { question: '∫ₐᵃ f(x)dx bằng bao nhiêu?', options: ['0', '1', 'a', 'f(a)'], correctIndex: 0 },
        { question: 'Tính chất nào sau đây đúng?', options: ['∫ₐᵇ f(x)dx = −∫ᵦᵃ f(x)dx', '∫ₐᵇ f(x)dx = ∫ᵦᵃ f(x)dx', '∫ₐᵇ f(x)dx luôn dương', '∫ₐᵇ f(x)dx không phụ thuộc a,b'], correctIndex: 0 },
        { question: 'Công thức tích phân từng phần là?', options: ['∫u dv = uv − ∫v du', '∫u dv = uv + ∫v du', '∫u dv = u∫dv', '∫u dv = v∫du'], correctIndex: 0 },
        { question: 'Trong phương pháp đổi biến, ta thường đặt gì?', options: ['t = u(x)', 't = f(x)dx', 't = a', 't = b'], correctIndex: 0 },
        { question: '∫₀¹ 1 dx bằng?', options: ['1', '0', 'x', 'C'], correctIndex: 0 },
        { question: '∫₀¹ x²dx bằng?', options: ['1/3', '1', '3', '0'], correctIndex: 0 },
        { question: '∫₀^π sin x dx bằng?', options: ['2', '0', '−2', '1'], correctIndex: 0 },
        { question: '∫₁² 2x dx bằng?', options: ['3', '4', '2', '6'], correctIndex: 0 },
        { question: '∫₀¹ eˣ dx bằng?', options: ['e − 1', 'e', 'e + 1', '1'], correctIndex: 0 },
        { question: '∫₀² 3x²dx bằng?', options: ['8', '6', '4', '12'], correctIndex: 0 },
        { question: '∫₀^(π/2) cos x dx bằng?', options: ['1', '0', 'π/2', '−1'], correctIndex: 0 },
        { question: 'Tính I = ∫₀¹ xeˣdx.', options: ['1', 'e', 'e − 1', 'e + 1'], correctIndex: 0 },
        { question: 'Tính I = ∫₀¹ 2x(x²+1)³dx.', options: ['15/4', '4', '15', '1/4'], correctIndex: 0 },
        { question: 'Tính I = ∫₁² (3x² − 2x)dx.', options: ['4', '3', '5', '8'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính tích phân I = ∫₀² (3x² − 4x + 1) dx.', solution: ['$I=[x^3-2x^2+x]_0^2=(8-8+2)-0=2$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Tính tích phân I = ∫₀^(π/2) x sin x dx bằng phương pháp tích phân từng phần.',
          solution: ['Đặt $u=x,\\ dv=\\sin x\\,dx \\Rightarrow du=dx,\\ v=-\\cos x$', '$I=[-x\\cos x]_0^{\\pi/2}+\\int_0^{\\pi/2}\\cos x\\,dx=0+[\\sin x]_0^{\\pi/2}=1$'],
        },
      ],
    },
  },

  'l12-ung-dung-tich-phan-dien-tich': {
    title: 'Ứng dụng tích phân tính diện tích hình phẳng',
    theory: {
      cards: [
        {
          title: 'Diện tích hình phẳng giới hạn bởi 1 đường cong và trục hoành',
          formulas: ['S=\\int_a^b |f(x)|\\,dx'],
          legend: ['Diện tích hình phẳng giới hạn bởi đồ thị $y=f(x)$, trục hoành và hai đường thẳng $x=a, x=b$'],
          note: 'Mẹo: nếu f(x) không đổi dấu trên [a,b] thì $S=\\left|\\int_a^b f(x)dx\\right|$; nếu đổi dấu, cần chia nhỏ đoạn theo nghiệm của f(x)=0.',
        },
        {
          title: 'Diện tích hình phẳng giới hạn bởi 2 đường cong',
          formulas: ['S=\\int_a^b |f(x)-g(x)|\\,dx'],
          legend: ['Diện tích hình phẳng giới hạn bởi $y=f(x)$, $y=g(x)$ và hai đường thẳng $x=a, x=b$', '$a, b$ thường là hoành độ giao điểm của 2 đường cong'],
          note: 'Mẹo: giải phương trình f(x)=g(x) để tìm cận tích phân (hoành độ giao điểm) khi đề bài không cho sẵn a, b.',
        },
      ],
    },
    video: { caption: '00:00 / 15:45 — ung_dung_tich_phan_dien_tich_baigiang.mp4' },
    quiz: [
      { question: 'Diện tích hình phẳng giới hạn bởi y=f(x), trục hoành, x=a, x=b (f(x)≥0) tính bằng?', options: ['S = ∫ₐᵇ f(x)dx', 'S = ∫ₐᵇ |f(x)|²dx', 'S = f(b) − f(a)', "S = ∫ₐᵇ f'(x)dx"], correctIndex: 0 },
      { question: 'Diện tích hình phẳng giới hạn bởi y=x², trục hoành, x=0, x=1 bằng?', options: ['1/3', '1', '2/3', '1/2'], correctIndex: 0 },
      { question: 'Diện tích hình phẳng giữa 2 đường y=f(x), y=g(x) trên [a,b] tính bằng?', options: ['S = ∫ₐᵇ |f(x) − g(x)|dx', 'S = ∫ₐᵇ [f(x)+g(x)]dx', 'S = f(b) − g(a)', 'S = ∫ₐᵇ f(x)g(x)dx'], correctIndex: 0 },
      { question: 'Để tìm cận tích phân khi tính diện tích giữa 2 đường cong, ta cần làm gì?', options: ['Giải phương trình f(x)=g(x) tìm hoành độ giao điểm', "Tính f'(x)=g'(x)", 'Tính f(0), g(0)', 'Vẽ đồ thị'], correctIndex: 0 },
      { question: 'Diện tích hình phẳng giới hạn bởi y=2x, trục hoành, x=0, x=3 bằng?', options: ['9', '6', '3', '12'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính diện tích hình phẳng giới hạn bởi y=x², trục hoành, x=0, x=2.', solution: ['$S=\\int_0^2 x^2dx=\\left[\\dfrac{x^3}{3}\\right]_0^2=\\dfrac83$'] },
      {
        prompt: 'Bài 2. Tính diện tích hình phẳng giới hạn bởi y=x³−x, trục hoành trên đoạn [0;1].',
        solution: ['Trên $(0;1)$, $x^3-x=x(x-1)(x+1)\\leq0$', '$S=\\int_0^1(x-x^3)dx=\\left[\\dfrac{x^2}{2}-\\dfrac{x^4}{4}\\right]_0^1=\\dfrac14$'],
      },
      { prompt: 'Bài 3. Tính diện tích hình phẳng giới hạn bởi hai đường y=x² và y=x.', solution: ['Giao điểm: $x^2=x\\Rightarrow x=0,x=1$', 'Trên $(0;1)$, $x\\geq x^2$', '$S=\\int_0^1(x-x^2)dx=\\dfrac12-\\dfrac13=\\dfrac16$'] },
      { prompt: 'Bài 4. Tính diện tích hình phẳng giới hạn bởi y=sin x, trục hoành, x=0, x=π.', solution: ['Vì $\\sin x\\geq0$ trên $[0;\\pi]$', '$S=\\int_0^\\pi \\sin x\\,dx=[-\\cos x]_0^\\pi=2$'] },
      { prompt: 'Bài 5. Tính diện tích hình phẳng giới hạn bởi parabol y=4−x² và trục hoành.', solution: ['Giao với Ox: $4-x^2=0\\Rightarrow x=\\pm2$', '$S=\\int_{-2}^2(4-x^2)dx=\\left[4x-\\dfrac{x^3}{3}\\right]_{-2}^2=\\dfrac{32}{3}$'] },
    ],
    flashcards: [
      { front: 'Diện tích hình phẳng giới hạn bởi y=f(x), Ox, x=a, x=b', back: '$S=\\int_a^b|f(x)|dx$' },
      { front: 'Diện tích hình phẳng giữa 2 đường cong y=f(x), y=g(x)', back: '$S=\\int_a^b|f(x)-g(x)|dx$' },
      { front: 'Cách tìm cận tích phân khi tính diện tích giữa 2 đường cong', back: 'Giải f(x)=g(x) để tìm hoành độ giao điểm' },
      { front: 'Khi f(x) đổi dấu trên [a,b]', back: 'Chia đoạn theo nghiệm của f(x)=0 rồi lấy trị tuyệt đối từng phần' },
      { front: 'Diện tích luôn có dấu gì?', back: 'Không âm (dùng dấu giá trị tuyệt đối trong công thức)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức tính diện tích hình phẳng giới hạn bởi y=f(x), Ox, x=a, x=b là?', options: ['S = ∫ₐᵇ |f(x)|dx', 'S = ∫ₐᵇ f(x)²dx', 'S = f(b) − f(a)', "S = ∫ₐᵇ f'(x)dx"], correctIndex: 0 },
        { question: 'Công thức tính diện tích hình phẳng giữa 2 đường y=f(x), y=g(x) trên [a,b] là?', options: ['S = ∫ₐᵇ |f(x) − g(x)|dx', 'S = ∫ₐᵇ [f(x)+g(x)]dx', 'S = f(b) − g(a)', 'S = ∫ₐᵇ f(x)g(x)dx'], correctIndex: 0 },
        { question: 'Để tìm cận tích phân khi tính diện tích giữa 2 đường cong (không cho sẵn a, b), ta cần làm gì?', options: ['Giải phương trình f(x)=g(x)', "Tính đạo hàm f'(x)", 'Vẽ đồ thị và ước lượng', 'Tính f(0)'], correctIndex: 0 },
        { question: 'Nếu f(x)≥0 trên [a,b] thì diện tích S bằng?', options: ['∫ₐᵇ f(x)dx', '−∫ₐᵇ f(x)dx', '∫ₐᵇ |f(x)|²dx', 'f(b) − f(a)'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng luôn là số như thế nào?', options: ['Không âm', 'Có thể âm', 'Luôn bằng 0', 'Luôn là số nguyên'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=x, trục hoành, x=0, x=2 bằng?', options: ['2', '4', '1', '0'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=x², Ox, x=0, x=1 bằng?', options: ['1/3', '1', '2/3', '1/2'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=2x, Ox, x=0, x=3 bằng?', options: ['9', '6', '3', '12'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=x², Ox, x=0, x=2 bằng?', options: ['8/3', '4', '2', '16/3'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=x² và y=x bằng?', options: ['1/6', '1/2', '1/3', '1'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=sin x, Ox, x=0, x=π bằng?', options: ['2', '1', '0', 'π'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi parabol y=4−x² và trục hoành bằng?', options: ['32/3', '16/3', '8', '4'], correctIndex: 0 },
        { question: 'Diện tích hình phẳng giới hạn bởi y=x³−x, Ox trên đoạn [0;1] bằng?', options: ['1/4', '1/2', '3/4', '1'], correctIndex: 0 },
        { question: 'Tính diện tích hình phẳng giới hạn bởi y=x² và y=2−x².', options: ['8/3', '4/3', '16/3', '2'], correctIndex: 0 },
        { question: 'Tính diện tích hình phẳng giới hạn bởi y=x³ và y=x trên đoạn [0;1] (x≥0).', options: ['1/4', '1/2', '3/4', '1'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số y = x² − 2x, trục hoành và hai đường thẳng x = 0, x = 3.',
          solution: [
            'Trên $[0;2]$: $x^2-2x\\leq0$; trên $[2;3]$: $x^2-2x\\geq0$',
            '$S=\\int_0^2-(x^2-2x)dx+\\int_2^3(x^2-2x)dx$',
            '$=\\dfrac43+\\dfrac43=\\dfrac83$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tính diện tích hình phẳng giới hạn bởi hai đường parabol y = x² và y = −x² + 4x.',
          solution: [
            'Giao điểm: $x^2=-x^2+4x \\Rightarrow 2x^2-4x=0 \\Rightarrow x=0,x=2$',
            'Trên $(0;2)$: $-x^2+4x\\geq x^2$',
            '$S=\\int_0^2[(-x^2+4x)-x^2]dx=\\int_0^2(-2x^2+4x)dx=\\left[-\\dfrac{2x^3}{3}+2x^2\\right]_0^2=\\dfrac83$',
          ],
        },
      ],
    },
  },

  'l12-ung-dung-tich-phan-the-tich': {
    title: 'Ứng dụng tích phân tính thể tích vật thể',
    theory: {
      cards: [
        {
          title: 'Thể tích khối tròn xoay quanh trục Ox',
          formulas: ['V=\\pi\\int_a^b [f(x)]^2\\,dx'],
          legend: ['Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y=f(x)$, $Ox$, $x=a$, $x=b$ quanh trục $Ox$'],
          note: 'Mẹo: công thức này chỉ áp dụng khi quay quanh trục Ox; luôn bình phương f(x) trước khi lấy tích phân nên không cần xét dấu f(x).',
        },
        {
          title: 'Thể tích khối tròn xoay giữa 2 đường cong',
          formulas: ['V=\\pi\\int_a^b \\left([f(x)]^2-[g(x)]^2\\right)dx'],
          legend: ['Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi 2 đường $y=f(x)$ (ngoài) và $y=g(x)$ (trong) quanh $Ox$'],
          note: 'Mẹo: xác định đường nào ở "ngoài" (bán kính lớn) và đường nào ở "trong" (bán kính nhỏ) trước khi áp dụng công thức.',
        },
      ],
    },
    video: { caption: '00:00 / 15:00 — ung_dung_tich_phan_the_tich_baigiang.mp4' },
    quiz: [
      { question: 'Công thức tính thể tích khối tròn xoay khi quay y=f(x), Ox, x=a, x=b quanh Ox là?', options: ['V = π∫ₐᵇ [f(x)]²dx', 'V = ∫ₐᵇ f(x)dx', 'V = π∫ₐᵇ f(x)dx', 'V = 2π∫ₐᵇ f(x)dx'], correctIndex: 0 },
      { question: 'Thể tích khối tròn xoay khi quay y=x, Ox, x=0, x=2 quanh Ox bằng?', options: ['8π/3', '4π', '2π', '8π'], correctIndex: 0 },
      { question: 'Thể tích khối cầu bán kính R được tính bằng cách quay nửa đường tròn y=√(R²−x²) quanh Ox trên đoạn nào?', options: ['[−R;R]', '[0;R]', '[−R;0]', '[0;2R]'], correctIndex: 0 },
      { question: 'Thể tích khối tròn xoay khi quay y=1, Ox, x=0, x=1 quanh Ox bằng?', options: ['π', '1', '2π', 'π/2'], correctIndex: 0 },
      { question: 'Trong công thức V=π∫ₐᵇ([f(x)]²−[g(x)]²)dx, đường nào đóng vai trò "bán kính ngoài"?', options: ['f(x)', 'g(x)', 'f(x)+g(x)', 'f(x)−g(x)'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y=x², Ox, x=0, x=1 quanh Ox.', solution: ['$V=\\pi\\int_0^1 x^4dx=\\pi\\left[\\dfrac{x^5}{5}\\right]_0^1=\\dfrac{\\pi}{5}$'] },
      { prompt: 'Bài 2. Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y=√x, Ox, x=0, x=4 quanh Ox.', solution: ['$V=\\pi\\int_0^4 x\\,dx=\\pi\\left[\\dfrac{x^2}{2}\\right]_0^4=8\\pi$'] },
      { prompt: 'Bài 3. Tính thể tích khối cầu bán kính R=2 bằng cách quay nửa đường tròn y=√(4−x²) quanh Ox trên [−2;2].', solution: ['$V=\\pi\\int_{-2}^2(4-x^2)dx=\\pi\\left[4x-\\dfrac{x^3}{3}\\right]_{-2}^2=\\dfrac{32\\pi}{3}$'] },
      {
        prompt: 'Bài 4. Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y=x, y=x² quanh trục Ox (x∈[0;1]).',
        solution: ['Trên $(0;1)$, $x\\geq x^2$ nên $y=x$ là đường ngoài', '$V=\\pi\\int_0^1(x^2-x^4)dx=\\pi\\left(\\dfrac13-\\dfrac15\\right)=\\dfrac{2\\pi}{15}$'],
      },
      {
        prompt: 'Bài 5. Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y=sin x, Ox, x=0, x=π quanh Ox.',
        solution: ['$V=\\pi\\int_0^\\pi \\sin^2x\\,dx$, dùng $\\sin^2x=\\dfrac{1-\\cos2x}{2}$', '$V=\\dfrac{\\pi}{2}\\left[x-\\dfrac{\\sin2x}{2}\\right]_0^\\pi=\\dfrac{\\pi^2}{2}$'],
      },
    ],
    flashcards: [
      { front: 'Thể tích khối tròn xoay quanh Ox (1 đường cong)', back: '$V=\\pi\\int_a^b[f(x)]^2dx$' },
      { front: 'Thể tích khối tròn xoay quanh Ox (2 đường cong)', back: '$V=\\pi\\int_a^b([f(x)]^2-[g(x)]^2)dx$' },
      { front: 'Thể tích khối cầu bán kính R (bằng tích phân)', back: '$V=\\pi\\int_{-R}^{R}(R^2-x^2)dx=\\dfrac{4}{3}\\pi R^3$' },
      { front: 'Công thức hạ bậc sin²x', back: '$\\sin^2x=\\dfrac{1-\\cos2x}{2}$' },
      { front: 'Lưu ý khi tính thể tích 2 đường cong', back: 'Xác định đường nào là bán kính ngoài (lớn hơn) trước khi trừ' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức tính thể tích khối tròn xoay khi quay y=f(x), Ox, x=a, x=b quanh Ox là?', options: ['V = π∫ₐᵇ [f(x)]²dx', 'V = ∫ₐᵇ f(x)dx', 'V = π∫ₐᵇ f(x)dx', 'V = 2π∫ₐᵇ f(x)dx'], correctIndex: 0 },
        { question: 'Trục quay trong công thức thể tích khối tròn xoay cơ bản là trục nào?', options: ['Ox', 'Oy', 'Đường thẳng y=x', 'Gốc toạ độ'], correctIndex: 0 },
        { question: 'Công thức tính thể tích giữa 2 đường cong quay quanh Ox là?', options: ['V = π∫ₐᵇ([f(x)]² − [g(x)]²)dx', 'V = π∫ₐᵇ[f(x) − g(x)]dx', 'V = π∫ₐᵇ[f(x)+g(x)]²dx', 'V = ∫ₐᵇ[f(x) − g(x)]²dx'], correctIndex: 0 },
        { question: 'Trong công thức tính thể tích, tại sao cần bình phương f(x)?', options: ['Vì diện tích tiết diện tròn tỉ lệ với bình phương bán kính |f(x)|', 'Để đơn giản hoá tính toán', 'Để đảm bảo kết quả luôn dương', 'Không có lý do đặc biệt'], correctIndex: 0 },
        { question: 'Thể tích khối tròn xoay khi quay y=1, Ox, x=0, x=1 quanh Ox bằng?', options: ['π', '1', '2π', 'π/2'], correctIndex: 0 },
        { question: 'Công thức tính thể tích khối cầu bán kính R là?', options: ['4πR³/3', 'πR³', '4πR²/3', '2πR³/3'], correctIndex: 0 },
        { question: 'Thể tích khối tròn xoay khi quay y=x², Ox, x=0, x=1 quanh Ox bằng?', options: ['π/5', 'π/3', 'π', '2π/5'], correctIndex: 0 },
        { question: 'Thể tích khối tròn xoay khi quay y=x, Ox, x=0, x=2 quanh Ox bằng?', options: ['8π/3', '4π', '2π', '8π'], correctIndex: 0 },
        { question: 'Thể tích khối tròn xoay khi quay y=√x, Ox, x=0, x=4 quanh Ox bằng?', options: ['8π', '4π', '16π', '2π'], correctIndex: 0 },
        { question: 'Thể tích khối cầu bán kính R=2 bằng?', options: ['32π/3', '16π/3', '8π', '4π'], correctIndex: 0 },
        { question: 'Thể tích khối tròn xoay khi quay y=2, Ox, x=0, x=3 quanh Ox bằng?', options: ['12π', '4π', '6π', '3π'], correctIndex: 0 },
        { question: 'Thể tích khối tròn xoay khi quay y=x³, Ox, x=0, x=1 quanh Ox bằng?', options: ['π/7', 'π/6', 'π/3', 'π'], correctIndex: 0 },
        { question: 'Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y=x, y=x² quanh Ox (x∈[0;1]).', options: ['2π/15', 'π/15', '4π/15', 'π/5'], correctIndex: 0 },
        { question: 'Tính thể tích khối tròn xoay khi quay y=sin x, Ox, x=0, x=π quanh Ox.', options: ['π²/2', 'π', '2π', 'π²/4'], correctIndex: 0 },
        { question: 'Tính thể tích khối tròn xoay khi quay y=x²+1, Ox, x=0, x=1 quanh Ox.', options: ['28π/15', '8π/5', '2π', 'π'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y = x², trục hoành, x = 0, x = 2 quanh trục Ox.',
          solution: ['$V=\\pi\\int_0^2 x^4dx=\\pi\\left[\\dfrac{x^5}{5}\\right]_0^2=\\dfrac{32\\pi}{5}$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y = x và y = x² quanh trục Ox (x ∈ [0;1]).',
          solution: ['Trên $(0;1)$, $x\\geq x^2$', '$V=\\pi\\int_0^1(x^2-x^4)dx=\\pi\\left(\\dfrac13-\\dfrac15\\right)=\\dfrac{2\\pi}{15}$'],
        },
      ],
    },
  },
}
