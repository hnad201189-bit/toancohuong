import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP12_DAO_HAM_KHAO_SAT = {
  'l12-don-dieu-cuc-tri': {
    title: 'Tính đơn điệu và cực trị của hàm số',
    theory: {
      cards: [
        {
          title: 'Tính đơn điệu của hàm số',
          formulas: ["f'(x)>0\\ \\text{trên}\\ (a,b)\\Rightarrow f\\ \\text{đồng biến trên}\\ (a,b)", "f'(x)<0\\ \\text{trên}\\ (a,b)\\Rightarrow f\\ \\text{nghịch biến trên}\\ (a,b)"],
          legend: ["Xét dấu $f'(x)$ trên từng khoảng để suy ra tính đơn điệu của hàm số"],
          note: "Mẹo: lập bảng biến thiên — tìm nghiệm của f'(x)=0 và các điểm hàm số không xác định, rồi xét dấu f'(x) trên từng khoảng.",
        },
        {
          title: 'Cực trị của hàm số',
          formulas: ["f'(x_0)=0\\ \\text{và}\\ f'(x)\\ \\text{đổi dấu qua}\\ x_0 \\Rightarrow x_0\\ \\text{là điểm cực trị}"],
          legend: ["Nếu $f'$ đổi dấu từ $+$ sang $-$ qua $x_0$: $x_0$ là điểm cực đại", "Nếu $f'$ đổi dấu từ $-$ sang $+$ qua $x_0$: $x_0$ là điểm cực tiểu"],
          note: "Mẹo (dấu hiệu 2): nếu $f'(x_0)=0$ và $f''(x_0)\\neq0$ thì $x_0$ là cực trị — cực đại nếu $f''(x_0)<0$, cực tiểu nếu $f''(x_0)>0$.",
        },
      ],
    },
    video: { caption: '00:00 / 15:20 — don_dieu_cuc_tri_baigiang.mp4' },
    quiz: [
      { question: 'Hàm số y = x³ − 3x + 1 đồng biến trên khoảng nào?', options: ['(−∞;−1) và (1;+∞)', '(−1;1)', '(−∞;+∞)', '(−1;+∞)'], correctIndex: 0 },
      { question: 'Hàm số y = x³ − 3x + 1 đạt cực đại tại x =?', options: ['−1', '1', '0', '3'], correctIndex: 0 },
      { question: 'Giá trị cực tiểu của hàm số y = x³ − 3x + 1 là?', options: ['−1', '3', '1', '−3'], correctIndex: 0 },
      { question: 'Hàm số y = −x² + 4x − 1 đạt cực đại tại x =?', options: ['2', '−2', '4', '0'], correctIndex: 0 },
      { question: "Cho f'(x) = (x−2)(x+3). Hàm số đồng biến trên khoảng nào?", options: ['(−∞;−3) và (2;+∞)', '(−3;2)', '(−∞;+∞)', '(−3;+∞)'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm khoảng đơn điệu của hàm số y = x³ − 3x² + 2.', solution: ["$y'=3x^2-6x=3x(x-2)$, $y'=0$ tại $x=0,x=2$", 'Đồng biến trên $(-\\infty;0)$ và $(2;+\\infty)$; nghịch biến trên $(0;2)$'] },
      { prompt: 'Bài 2. Tìm cực trị của hàm số y = x³ − 3x² + 2.', solution: ["$y''=6x-6$", 'Tại $x=0$: $y\'\'=-6<0\\Rightarrow$ cực đại, $y(0)=2$', 'Tại $x=2$: $y\'\'=6>0\\Rightarrow$ cực tiểu, $y(2)=-2$'] },
      {
        prompt: 'Bài 3. Tìm khoảng đơn điệu và cực trị của hàm số y = −x³ + 3x − 2.',
        solution: [
          "$y'=-3x^2+3=-3(x-1)(x+1)$, $y'=0$ tại $x=\\pm1$",
          'Đồng biến trên $(-1;1)$; nghịch biến trên $(-\\infty;-1)$ và $(1;+\\infty)$',
          "$y''=-6x$: tại $x=-1$, $y''=6>0\\Rightarrow$ cực tiểu $y(-1)=-4$; tại $x=1$, $y''=-6<0\\Rightarrow$ cực đại $y(1)=0$",
        ],
      },
      { prompt: 'Bài 4. Tìm m để hàm số y = x³ − 3mx + 2 đạt cực tiểu tại x = 1.', solution: ["$y'=3x^2-3m$", "$y'(1)=3-3m=0\\Rightarrow m=1$", "Kiểm tra $y''=6x>0$ tại $x=1$ nên đúng là cực tiểu. Vậy $m=1$"] },
      {
        prompt: 'Bài 5. Cho hàm số y = x⁴ − 2x² + 1. Tìm các điểm cực trị.',
        solution: ["$y'=4x^3-4x=4x(x-1)(x+1)$, $y'=0$ tại $x=-1,0,1$", "$y''=12x^2-4$", "Tại $x=0$: $y''=-4<0\\Rightarrow$ cực đại, $y(0)=1$", "Tại $x=\\pm1$: $y''=8>0\\Rightarrow$ cực tiểu, $y(\\pm1)=0$"],
      },
    ],
    flashcards: [
      { front: 'Điều kiện hàm số đồng biến trên (a,b)', back: "$f'(x)>0$ với mọi $x\\in(a,b)$" },
      { front: 'Điều kiện hàm số nghịch biến trên (a,b)', back: "$f'(x)<0$ với mọi $x\\in(a,b)$" },
      { front: 'Điều kiện cần để có cực trị tại x₀', back: "$f'(x_0)=0$" },
      { front: 'Dấu hiệu 2 nhận biết cực trị', back: "$f'(x_0)=0,\\ f''(x_0)\\neq0$: cực đại nếu $f''(x_0)<0$, cực tiểu nếu $f''(x_0)>0$" },
      { front: 'Các bước lập bảng biến thiên', back: "Tìm TXĐ, tính y', giải y'=0, lập bảng dấu y', kết luận" },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: "Nếu f'(x) > 0 trên khoảng (a,b) thì hàm số?", options: ['Đồng biến trên (a,b)', 'Nghịch biến trên (a,b)', 'Không đổi trên (a,b)', 'Không xác định'], correctIndex: 0 },
        { question: "Nếu f'(x) < 0 trên khoảng (a,b) thì hàm số?", options: ['Nghịch biến trên (a,b)', 'Đồng biến trên (a,b)', 'Không đổi trên (a,b)', 'Không xác định'], correctIndex: 0 },
        { question: 'Điều kiện cần để x₀ là điểm cực trị của hàm số khả vi là?', options: ["f'(x₀) = 0", 'f(x₀) = 0', "f''(x₀) = 0", "f'(x₀) > 0"], correctIndex: 0 },
        { question: "Nếu f'(x₀) = 0 và f''(x₀) < 0 thì x₀ là điểm?", options: ['Cực đại', 'Cực tiểu', 'Không phải cực trị', 'Điểm uốn'], correctIndex: 0 },
        { question: "Nếu f'(x₀) = 0 và f''(x₀) > 0 thì x₀ là điểm?", options: ['Cực tiểu', 'Cực đại', 'Không phải cực trị', 'Điểm uốn'], correctIndex: 0 },
        { question: 'Muốn tìm khoảng đơn điệu của hàm số, ta cần làm gì đầu tiên?', options: ["Tính đạo hàm f'(x) và xét dấu", "Tính f''(x)", 'Tìm tiệm cận', 'Vẽ đồ thị'], correctIndex: 0 },
        { question: 'Hàm số y = x² − 4x + 3 đồng biến trên khoảng nào?', options: ['(2;+∞)', '(−∞;2)', '(−∞;+∞)', '(0;2)'], correctIndex: 0 },
        { question: 'Hàm số y = x³ − 3x đạt cực đại tại x =?', options: ['−1', '1', '0', '3'], correctIndex: 0 },
        { question: 'Hàm số y = −x² + 2x + 3 đạt giá trị cực đại bằng bao nhiêu?', options: ['4', '3', '1', '−1'], correctIndex: 0 },
        { question: 'Cho hàm số y = x³ − 6x² + 9x. Hàm số này có bao nhiêu điểm cực trị?', options: ['2', '1', '0', '3'], correctIndex: 0 },
        { question: 'Hàm số y = x⁴ − 4x² + 3 có bao nhiêu điểm cực trị?', options: ['3', '2', '1', '0'], correctIndex: 0 },
        { question: 'Hàm số y = (1/3)x³ − x² − 3x + 2 nghịch biến trên khoảng nào?', options: ['(−1;3)', '(−∞;−1)', '(3;+∞)', '(−∞;+∞)'], correctIndex: 0 },
        { question: 'Tìm m để hàm số y = x³ − 3x² + mx đạt cực tiểu tại x = 2.', options: ['0', '1', '2', '−1'], correctIndex: 0 },
        { question: 'Cho hàm số y = x³ + 3x² − 9x + 1. Tổng giá trị cực đại và cực tiểu của hàm số bằng?', options: ['24', '20', '28', '−4'], correctIndex: 0 },
        { question: 'Tìm m để hàm số y = x³ − 3x² + mx + 1 đồng biến trên ℝ.', options: ['m ≥ 3', 'm ≤ 3', 'm > 0', 'm < 3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm khoảng đơn điệu và các điểm cực trị của hàm số y = x³ − 3x² − 9x + 5.',
          solution: [
            "$y'=3x^2-6x-9=3(x-3)(x+1)$, $y'=0$ tại $x=-1,x=3$",
            'Đồng biến trên $(-\\infty;-1)$ và $(3;+\\infty)$; nghịch biến trên $(-1;3)$',
            "$y''=6x-6$: tại $x=-1$, $y''=-12<0\\Rightarrow$ cực đại $y(-1)=10$; tại $x=3$, $y''=12>0\\Rightarrow$ cực tiểu $y(3)=-22$",
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm m để hàm số y = (1/3)x³ − mx² + (m+2)x − 1 có cực đại và cực tiểu.',
          solution: [
            "$y'=x^2-2mx+(m+2)$",
            "Hàm số có cực đại, cực tiểu $\\Leftrightarrow y'=0$ có 2 nghiệm phân biệt $\\Leftrightarrow \\Delta'>0$",
            "$\\Delta'=m^2-(m+2)=m^2-m-2=(m-2)(m+1)>0 \\Leftrightarrow m<-1\\ \\text{hoặc}\\ m>2$",
          ],
        },
      ],
    },
  },

  'l12-gtln-gtnn': {
    title: 'Giá trị lớn nhất, giá trị nhỏ nhất của hàm số',
    theory: {
      cards: [
        {
          title: 'GTLN, GTNN của hàm số trên một đoạn',
          formulas: ['M=\\max_{[a,b]}f(x)', 'm=\\min_{[a,b]}f(x)'],
          legend: ['$M$: giá trị lớn nhất của $f$ trên đoạn $[a,b]$', '$m$: giá trị nhỏ nhất của $f$ trên đoạn $[a,b]$'],
          note: "Mẹo: GTLN, GTNN của hàm liên tục trên đoạn $[a,b]$ đạt được tại điểm tới hạn ($f'=0$) trong $(a,b)$ hoặc tại hai đầu mút $a,b$.",
        },
        {
          title: 'Quy tắc tìm GTLN, GTNN trên đoạn [a,b]',
          formulas: [],
          legend: ["Bước 1: Tính $f'(x)$, giải $f'(x)=0$ tìm các điểm $x_i\\in(a,b)$", 'Bước 2: Tính $f(a), f(b), f(x_i)$', 'Bước 3: So sánh — số lớn nhất là GTLN, số nhỏ nhất là GTNN'],
          note: 'Mẹo: với hàm liên tục trên khoảng mở hoặc ℝ, cần lập bảng biến thiên và xét cả giới hạn tại biên để kết luận có tồn tại GTLN/GTNN hay không.',
        },
      ],
    },
    video: { caption: '00:00 / 14:40 — gtln_gtnn_baigiang.mp4' },
    quiz: [
      { question: 'GTLN của hàm số y = x³ − 3x trên [−2;2] bằng?', options: ['2', '−2', '0', '6'], correctIndex: 0 },
      { question: 'GTNN của hàm số y = x³ − 3x trên [−2;2] bằng?', options: ['−2', '2', '0', '−6'], correctIndex: 0 },
      { question: 'GTLN của y = −x² + 4x trên [0;3] bằng?', options: ['4', '3', '0', '5'], correctIndex: 0 },
      { question: 'GTNN của y = −x² + 4x trên [0;3] bằng?', options: ['0', '3', '4', '−1'], correctIndex: 0 },
      { question: 'Với x > 0, hàm số y = x + 1/x đạt GTNN tại x =?', options: ['1', '2', '−1', '0'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm GTLN, GTNN của hàm số y = x³ − 3x² + 1 trên đoạn [−1;3].', solution: ["$y'=3x^2-6x=3x(x-2)$, $y'=0$ tại $x=0,x=2\\in[-1;3]$", '$f(-1)=-3,\\ f(0)=1,\\ f(2)=-3,\\ f(3)=1$', 'GTLN $=1$ (tại $x=0$ hoặc $x=3$); GTNN $=-3$ (tại $x=-1$ hoặc $x=2$)'] },
      { prompt: 'Bài 2. Tìm GTLN, GTNN của hàm số y = 2x³ − 3x² − 12x + 1 trên đoạn [−2;3].', solution: ["$y'=6x^2-6x-12=6(x-2)(x+1)$, $y'=0$ tại $x=-1,x=2\\in[-2;3]$", '$f(-2)=-3,\\ f(-1)=8,\\ f(2)=-19,\\ f(3)=-8$', 'GTLN $=8$ (tại $x=-1$); GTNN $=-19$ (tại $x=2$)'] },
      { prompt: 'Bài 3. Tìm GTLN của hàm số y = 4 − x² trên ℝ.', solution: ["$y'=-2x=0\\Rightarrow x=0$", 'Vì hệ số $x^2$ âm nên $x=0$ cho GTLN $=4$', 'Hàm số không có GTNN trên ℝ vì $y\\to-\\infty$ khi $x\\to\\pm\\infty$'] },
      { prompt: 'Bài 4. Một mảnh vườn hình chữ nhật có chu vi 40m. Tìm kích thước để diện tích lớn nhất.', solution: ['Gọi chiều dài $x$ ($0<x<20$), chiều rộng $20-x$', '$S(x)=x(20-x)=20x-x^2$', "$S'(x)=20-2x=0\\Rightarrow x=10$", 'Vậy hình vuông cạnh 10m cho diện tích lớn nhất $=100\\,m^2$'] },
      { prompt: 'Bài 5. Tìm GTNN của hàm số y = x² + 2/x với x > 0.', solution: ["$y'=2x-\\dfrac{2}{x^2}=0\\Rightarrow x^3=1\\Rightarrow x=1$", "$y'<0$ khi $0<x<1$, $y'>0$ khi $x>1$ nên $x=1$ là điểm cực tiểu duy nhất", 'GTNN $=y(1)=3$'] },
    ],
    flashcards: [
      { front: 'Quy tắc tìm GTLN, GTNN trên [a,b]', back: "Tính f'(x)=0 tại các xᵢ∈(a,b), so sánh f(a), f(b), f(xᵢ)" },
      { front: 'Điều kiện để hàm liên tục trên [a,b] có GTLN, GTNN', back: 'Luôn tồn tại (định lý Weierstrass)' },
      { front: 'Cách tìm GTLN/GTNN của hàm bậc 2 trên ℝ', back: 'Đỉnh parabol: GTLN nếu a<0, GTNN nếu a>0' },
      { front: 'Bài toán tối ưu thực tế', back: 'Lập hàm số theo 1 biến, tìm GTLN/GTNN bằng đạo hàm' },
      { front: 'GTLN, GTNN trên khoảng mở', back: 'Cần lập bảng biến thiên, xét giới hạn tại 2 đầu khoảng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Định lý nào đảm bảo hàm số liên tục trên đoạn [a,b] luôn có GTLN, GTNN?', options: ['Định lý Weierstrass', 'Định lý Lagrange', 'Định lý Rolle', 'Định lý Fermat'], correctIndex: 0 },
        { question: 'Để tìm GTLN, GTNN của hàm số trên đoạn [a,b], ta cần tính giá trị hàm số tại đâu?', options: ["Các điểm f'=0 trong (a,b) và hai đầu mút a, b", 'Chỉ tại hai đầu mút', "Chỉ tại điểm f'=0", 'Tại mọi điểm trong đoạn'], correctIndex: 0 },
        { question: 'Hàm số y = −x² + 2 có GTLN trên ℝ bằng?', options: ['2', '0', '−2', '1'], correctIndex: 0 },
        { question: 'Hàm số y = x² − 1 có GTNN trên ℝ bằng?', options: ['−1', '0', '1', '2'], correctIndex: 0 },
        { question: 'Hàm số bậc ba có GTLN, GTNN trên toàn trục số ℝ hay không?', options: ['Không (chỉ có cực trị, không có GTLN/GTNN trên ℝ)', 'Có', 'Chỉ có GTLN', 'Chỉ có GTNN'], correctIndex: 0 },
        { question: 'Trên đoạn [a,b], GTLN của hàm số là gì?', options: ['Giá trị lớn nhất trong các giá trị f(x) với x∈[a,b]', 'Giá trị tại x=a', 'Giá trị tại x=b', 'Giá trị tại điểm cực đại'], correctIndex: 0 },
        { question: 'GTLN của y = x³ − 3x trên [−2;2] bằng?', options: ['2', '−2', '0', '6'], correctIndex: 0 },
        { question: 'GTNN của y = x³ − 3x trên [−2;2] bằng?', options: ['−2', '2', '0', '−6'], correctIndex: 0 },
        { question: 'GTLN của y = −x² + 4x trên [0;3] bằng?', options: ['4', '3', '0', '5'], correctIndex: 0 },
        { question: 'GTNN của y = x² − 4x + 5 trên [0;3] bằng?', options: ['1', '5', '2', '4'], correctIndex: 0 },
        { question: 'GTLN của y = x² − 4x + 5 trên [0;3] bằng?', options: ['5', '1', '2', '4'], correctIndex: 0 },
        { question: 'Với x > 0, hàm số y = x + 4/x đạt GTNN bằng bao nhiêu?', options: ['4', '2', '8', '1'], correctIndex: 0 },
        { question: 'Tìm GTLN của hàm số y = x³ − 3x² − 9x + 5 trên đoạn [−2;4].', options: ['10', '3', '−22', '−15'], correctIndex: 0 },
        { question: 'Cho x, y > 0 thoả x + y = 10. Tìm GTLN của tích P = xy.', options: ['25', '20', '24', '30'], correctIndex: 0 },
        { question: 'Với x > 0, tìm GTNN của hàm số y = x² + 16/x.', options: ['12', '10', '16', '8'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm GTLN, GTNN của hàm số y = x³ − 3x + 2 trên đoạn [−2;3].',
          solution: ["$y'=3x^2-3=3(x-1)(x+1)$, $y'=0$ tại $x=\\pm1\\in[-2;3]$", '$f(-2)=0,\\ f(-1)=4,\\ f(1)=0,\\ f(3)=20$', 'GTLN $=20$ (tại $x=3$); GTNN $=0$ (tại $x=-2$ hoặc $x=1$)'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Người ta muốn làm một chiếc hộp không nắp hình hộp chữ nhật có đáy là hình vuông cạnh x (cm) và thể tích 32 cm³. Tìm x để diện tích toàn phần (không nắp) của hộp nhỏ nhất.',
          solution: [
            '$V=x^2h=32\\Rightarrow h=\\dfrac{32}{x^2}$',
            '$S(x)=x^2+4xh=x^2+\\dfrac{128}{x}$',
            "$S'(x)=2x-\\dfrac{128}{x^2}=0\\Rightarrow x^3=64\\Rightarrow x=4$",
            'Vậy $x=4$ cm thì diện tích toàn phần nhỏ nhất',
          ],
        },
      ],
    },
  },

  'l12-duong-tiem-can': {
    title: 'Đường tiệm cận của đồ thị hàm số',
    theory: {
      cards: [
        {
          title: 'Tiệm cận đứng',
          formulas: ['\\lim_{x\\to x_0^+}f(x)=\\pm\\infty\\ \\text{hoặc}\\ \\lim_{x\\to x_0^-}f(x)=\\pm\\infty \\Rightarrow x=x_0\\ \\text{là TCĐ}'],
          legend: ['Đường thẳng $x=x_0$ là tiệm cận đứng nếu một trong các giới hạn một phía của $f$ tại $x_0$ là vô cực'],
          note: 'Mẹo: với hàm phân thức $\\dfrac{P(x)}{Q(x)}$, tiệm cận đứng thường là các nghiệm của $Q(x)=0$ mà không phải nghiệm của $P(x)$.',
        },
        {
          title: 'Tiệm cận ngang',
          formulas: ['\\lim_{x\\to+\\infty}f(x)=y_0\\ \\text{hoặc}\\ \\lim_{x\\to-\\infty}f(x)=y_0 \\Rightarrow y=y_0\\ \\text{là TCN}'],
          legend: ['Đường thẳng $y=y_0$ là tiệm cận ngang nếu giới hạn của $f(x)$ khi $x\\to\\pm\\infty$ bằng $y_0$'],
          note: 'Mẹo: với hàm phân thức bậc tử = bậc mẫu, TCN là tỉ số hệ số cao nhất của tử và mẫu; nếu bậc tử < bậc mẫu, TCN là y=0.',
        },
      ],
    },
    video: { caption: '00:00 / 13:15 — duong_tiem_can_baigiang.mp4' },
    quiz: [
      { question: 'Đồ thị hàm số y = (2x−1)/(x+1) có tiệm cận đứng là?', options: ['x = −1', 'x = 1', 'x = 2', 'x = 0'], correctIndex: 0 },
      { question: 'Đồ thị hàm số y = (2x−1)/(x+1) có tiệm cận ngang là?', options: ['y = 2', 'y = −1', 'y = 1', 'y = 0'], correctIndex: 0 },
      { question: 'Đồ thị hàm số y = 1/(x−3) có tiệm cận đứng là?', options: ['x = 3', 'x = −3', 'x = 0', 'x = 1'], correctIndex: 0 },
      { question: 'Đồ thị hàm số y = (3x+2)/(x−1) có tiệm cận ngang là?', options: ['y = 3', 'y = 2', 'y = −1', 'y = 1'], correctIndex: 0 },
      { question: 'Đồ thị hàm số y = (x+1)/(x²−4) có bao nhiêu tiệm cận đứng?', options: ['2', '1', '0', '3'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = (3x−2)/(x+2).', solution: ['TCĐ: $x=-2$ (mẫu bằng 0, tử tại $x=-2$ bằng $-8\\neq0$)', 'TCN: $y=3$ (tỉ số hệ số bậc cao nhất tử/mẫu)'] },
      { prompt: 'Bài 2. Tìm các đường tiệm cận của đồ thị hàm số y = (2x+1)/(2−x).', solution: ['TCĐ: $x=2$', 'TCN: $y=\\dfrac{2}{-1}=-2$'] },
      { prompt: 'Bài 3. Tìm tiệm cận đứng của đồ thị hàm số y = (x²−1)/(x²−3x+2).', solution: ['Mẫu $=(x-1)(x-2)$, tử $=(x-1)(x+1)$', 'Rút gọn: $y=\\dfrac{x+1}{x-2}$ với $x\\neq1$', 'Vậy $x=1$ chỉ là điểm gián đoạn khử được (lỗ hổng), tiệm cận đứng duy nhất là $x=2$'] },
      { prompt: 'Bài 4. Tìm tiệm cận ngang của đồ thị hàm số y = √(x²+1)/x.', solution: ['Khi $x\\to+\\infty$: $\\sqrt{x^2+1}\\approx x$ nên $y\\to1$', 'Khi $x\\to-\\infty$: $\\sqrt{x^2+1}\\approx-x$ nên $y\\to-1$', 'Vậy đồ thị có 2 tiệm cận ngang: $y=1$ và $y=-1$'] },
      { prompt: 'Bài 5. Tìm m để đồ thị hàm số y = (x+1)/(x−m) có tiệm cận đứng là x = 2.', solution: ['Điều kiện: mẫu bằng 0 tại $x=m$, cần $m=2$', 'Kiểm tra tử tại $x=2$: $2+1=3\\neq0$ (hợp lệ)', 'Vậy $m=2$'] },
    ],
    flashcards: [
      { front: 'Điều kiện có tiệm cận đứng x=x₀', back: '$\\lim_{x\\to x_0^\\pm}f(x)=\\pm\\infty$' },
      { front: 'Điều kiện có tiệm cận ngang y=y₀', back: '$\\lim_{x\\to\\pm\\infty}f(x)=y_0$' },
      { front: 'TCN của hàm phân thức bậc tử = bậc mẫu', back: 'Tỉ số hệ số bậc cao nhất của tử và mẫu' },
      { front: 'TCN của hàm phân thức bậc tử < bậc mẫu', back: 'y = 0' },
      { front: 'Tiệm cận đứng của hàm phân thức', back: 'Nghiệm của mẫu không phải nghiệm của tử' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Đường thẳng x = x₀ là tiệm cận đứng của đồ thị hàm số khi nào?', options: ['Giới hạn một phía của f tại x₀ là vô cực', 'f(x₀) = 0', "f'(x₀) = 0", 'f(x₀) xác định'], correctIndex: 0 },
        { question: 'Đường thẳng y = y₀ là tiệm cận ngang của đồ thị hàm số khi nào?', options: ['lim f(x) khi x→±∞ bằng y₀', 'f(0) = y₀', "f'(x) = y₀", 'f(y₀) = 0'], correctIndex: 0 },
        { question: 'Hàm số y = 1/x có tiệm cận đứng là?', options: ['x = 0', 'x = 1', 'y = 0', 'y = 1'], correctIndex: 0 },
        { question: 'Hàm số y = 1/x có tiệm cận ngang là?', options: ['y = 0', 'y = 1', 'x = 0', 'x = 1'], correctIndex: 0 },
        { question: 'Hàm phân thức có bậc tử nhỏ hơn bậc mẫu thì tiệm cận ngang là?', options: ['y = 0', 'y = 1', 'Không có TCN', 'x = 0'], correctIndex: 0 },
        { question: 'Tiệm cận đứng của hàm phân thức thường là nghiệm của?', options: ['Mẫu số (không phải nghiệm của tử)', 'Tử số', 'Cả tử và mẫu', 'Đạo hàm'], correctIndex: 0 },
        { question: 'Đồ thị y = (x−1)/(x+3) có tiệm cận đứng là?', options: ['x = −3', 'x = 3', 'x = 1', 'x = −1'], correctIndex: 0 },
        { question: 'Đồ thị y = (x−1)/(x+3) có tiệm cận ngang là?', options: ['y = 1', 'y = −1', 'y = 3', 'y = −3'], correctIndex: 0 },
        { question: 'Đồ thị y = (5x+1)/(2x−4) có tiệm cận ngang là?', options: ['y = 5/2', 'y = 5', 'y = −1/4', 'y = 2'], correctIndex: 0 },
        { question: 'Đồ thị y = 2/(x²−1) có bao nhiêu tiệm cận đứng?', options: ['2', '1', '0', '3'], correctIndex: 0 },
        { question: 'Đồ thị y = (x+2)/(x²−4) có bao nhiêu tiệm cận đứng?', options: ['1', '2', '0', '3'], correctIndex: 0 },
        { question: 'Đồ thị y = (3−x)/(x+1) có tiệm cận ngang là?', options: ['y = −1', 'y = 3', 'y = 1', 'y = −3'], correctIndex: 0 },
        { question: 'Tìm m để đồ thị hàm số y = (2x+1)/(x−m) có tiệm cận đứng là x = 3.', options: ['3', '−3', '2', '1'], correctIndex: 0 },
        { question: 'Đồ thị hàm số y = (x²+1)/(x−1) có tiệm cận ngang hay không?', options: ['Không (vì bậc tử lớn hơn bậc mẫu)', 'Có, y = 1', 'Có, y = 0', 'Có, y = x'], correctIndex: 0 },
        { question: 'Tìm số tiệm cận (cả đứng và ngang) của đồ thị hàm số y = (x−2)/(x²−5x+6).', options: ['2', '3', '1', '4'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm các đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số y = (4x−1)/(x+3).',
          solution: ['TCĐ: mẫu $=0$ tại $x=-3$, tử tại $x=-3$ bằng $-13\\neq0$ nên TCĐ: $x=-3$', 'TCN: $y=\\dfrac{4}{1}=4$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm m để đồ thị hàm số y = (mx+1)/(x−2) nhận đường thẳng y = 3 làm tiệm cận ngang.',
          solution: ['TCN $=$ hệ số bậc cao nhất của tử/mẫu $=\\dfrac{m}{1}=m$', 'Để $y=3$ là TCN thì $m=3$'],
        },
      ],
    },
  },

  'l12-khao-sat-ham-so': {
    title: 'Khảo sát và vẽ đồ thị hàm số',
    theory: {
      cards: [
        {
          title: 'Sơ đồ khảo sát hàm số',
          formulas: [],
          legend: [
            'Bước 1: Tìm tập xác định',
            "Bước 2: Xét sự biến thiên (tính y', tìm cực trị, tính giới hạn, tiệm cận nếu có)",
            'Bước 3: Lập bảng biến thiên',
            'Bước 4: Vẽ đồ thị (xác định điểm đặc biệt, giao Ox, Oy, tâm/trục đối xứng)',
          ],
          note: "Mẹo: hàm bậc ba có tâm đối xứng là điểm uốn (nghiệm của y″=0); hàm bậc bốn trùng phương có trục đối xứng là trục tung.",
        },
        {
          title: 'Nhận dạng đồ thị hàm số qua hình dáng',
          formulas: [],
          legend: [
            'Hàm bậc ba $y=ax^3+bx^2+cx+d$: đồ thị hình chữ S, có tối đa 2 cực trị',
            'Hàm trùng phương $y=ax^4+bx^2+c$: đồ thị đối xứng qua Oy, có 1 hoặc 3 cực trị',
            'Hàm phân thức $y=\\dfrac{ax+b}{cx+d}$: đồ thị có 2 nhánh, nhận giao điểm 2 tiệm cận làm tâm đối xứng',
          ],
          note: 'Mẹo: hàm trùng phương có 3 cực trị khi $ab<0$ (a, b trái dấu), có 1 cực trị khi $ab\\geq0$.',
        },
      ],
    },
    video: { caption: '00:00 / 16:05 — khao_sat_ham_so_baigiang.mp4' },
    quiz: [
      { question: 'Đồ thị hàm số bậc ba y = ax³+bx²+cx+d với a > 0 có xu hướng gì khi x → +∞?', options: ['Đi lên (+∞)', 'Đi xuống (−∞)', 'Tiến về 0', 'Không xác định'], correctIndex: 0 },
      { question: 'Hàm số y = x⁴ − 2x² + 1 có trục đối xứng là?', options: ['Trục Oy (x=0)', 'Trục Ox', 'Đường thẳng x=1', 'Không có trục đối xứng'], correctIndex: 0 },
      { question: 'Hàm số trùng phương y = ax⁴+bx²+c có 3 điểm cực trị khi nào?', options: ['ab < 0', 'ab > 0', 'a = 0', 'b = 0'], correctIndex: 0 },
      { question: 'Hàm số y = (x−1)/(x+2) có tâm đối xứng là giao điểm của?', options: ['Hai đường tiệm cận', 'Hai trục toạ độ', 'Đồ thị và trục Ox', 'Đồ thị và trục Oy'], correctIndex: 0 },
      { question: 'Hàm số y = x³ − 3x² + 2 có điểm uốn tại x =?', options: ['1', '0', '2', '−1'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Khảo sát sự biến thiên (lập bảng biến thiên) của hàm số y = x³ − 3x² + 2.',
        solution: ['TXĐ: ℝ', "$y'=3x^2-6x=3x(x-2)$, $y'=0$ tại $x=0,x=2$", 'Đồng biến trên $(-\\infty;0)$ và $(2;+\\infty)$; nghịch biến trên $(0;2)$', 'Cực đại tại $x=0$, $y=2$; cực tiểu tại $x=2$, $y=-2$'],
      },
      { prompt: 'Bài 2. Tìm điểm uốn của đồ thị hàm số y = x³ − 6x² + 9x − 1.', solution: ["$y''=6x-12=0\\Rightarrow x=2$", '$y(2)=8-24+18-1=1$', 'Điểm uốn: $(2;1)$'] },
      {
        prompt: 'Bài 3. Xác định số điểm cực trị của hàm số y = x⁴ − 4x² + 3 và cho biết dạng đồ thị.',
        solution: ["$y'=4x^3-8x=4x(x^2-2)$, có 3 nghiệm phân biệt: $0,\\pm\\sqrt2 \\Rightarrow$ 3 điểm cực trị", 'Vì hệ số $a=1>0$, đồ thị có dạng chữ W (2 cực tiểu, 1 cực đại ở giữa)'],
      },
      { prompt: 'Bài 4. Tìm tiệm cận và tâm đối xứng của đồ thị hàm số y = (2x−1)/(x−1).', solution: ['TCĐ: $x=1$. TCN: $y=2$', 'Tâm đối xứng: giao điểm 2 tiệm cận, $I(1;2)$'] },
      {
        prompt: 'Bài 5. Xác định khoảng lồi, lõm của đồ thị hàm số y = x³ − 3x² + 2 (dựa vào dấu y″).',
        solution: ["$y''=6x-6$", "$y''>0$ khi $x>1$ (đồ thị lõm/cong lên); $y''<0$ khi $x<1$ (đồ thị lồi/cong xuống)", 'Điểm uốn tại $x=1$'],
      },
    ],
    flashcards: [
      { front: '4 bước khảo sát hàm số', back: "TXĐ → Sự biến thiên (y', cực trị, giới hạn, tiệm cận) → BBT → Đồ thị" },
      { front: 'Điểm uốn của đồ thị hàm bậc ba', back: 'Nghiệm của y″=0, là tâm đối xứng của đồ thị' },
      { front: 'Trục đối xứng hàm trùng phương', back: 'Trục Oy (x=0)' },
      { front: 'Số cực trị hàm trùng phương y=ax⁴+bx²+c', back: '3 cực trị nếu ab<0; 1 cực trị nếu ab≥0' },
      { front: 'Tâm đối xứng đồ thị hàm phân thức bậc nhất/bậc nhất', back: 'Giao điểm của 2 đường tiệm cận' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Bước đầu tiên khi khảo sát hàm số là gì?', options: ['Tìm tập xác định', 'Vẽ đồ thị', "Tính y''", 'Tìm tiệm cận'], correctIndex: 0 },
        { question: 'Hàm số bậc ba luôn có dạng đồ thị nào?', options: ['Hình chữ S (lượn sóng)', 'Parabol', 'Đường thẳng', 'Hai nhánh hyperbol'], correctIndex: 0 },
        { question: 'Hàm số trùng phương y = ax⁴+bx²+c có đồ thị đối xứng qua?', options: ['Trục Oy', 'Trục Ox', 'Gốc toạ độ O', 'Đường thẳng y=x'], correctIndex: 0 },
        { question: 'Điểm uốn của đồ thị hàm bậc ba là nghiệm của phương trình nào?', options: ["y''(x) = 0", "y'(x) = 0", 'y(x) = 0', "y'''(x) = 0"], correctIndex: 0 },
        { question: 'Đồ thị hàm số y = (ax+b)/(cx+d) (c≠0) có tâm đối xứng là?', options: ['Giao điểm 2 đường tiệm cận', 'Gốc toạ độ', 'Giao điểm với Ox', 'Giao điểm với Oy'], correctIndex: 0 },
        { question: 'Hàm số trùng phương có tối đa bao nhiêu điểm cực trị?', options: ['3', '2', '4', '1'], correctIndex: 0 },
        { question: 'Hàm số y = x³ − 3x + 1 có điểm uốn tại x =?', options: ['0', '1', '−1', '2'], correctIndex: 0 },
        { question: 'Hàm số y = x⁴ − 2x² − 3 có bao nhiêu điểm cực trị?', options: ['3', '1', '2', '0'], correctIndex: 0 },
        { question: 'Đồ thị hàm số y = (x+3)/(x−2) có tâm đối xứng là điểm nào?', options: ['(2;1)', '(−2;1)', '(2;−1)', '(1;2)'], correctIndex: 0 },
        { question: 'Hàm số y = −x⁴ + 2x² + 1 có bao nhiêu điểm cực trị?', options: ['3', '1', '2', '0'], correctIndex: 0 },
        { question: 'Hàm số y = x³ + 3x² + 3x + 1 có điểm uốn tại x =?', options: ['−1', '0', '1', '−2'], correctIndex: 0 },
        { question: 'Đồ thị hàm số y = x⁴ + 2x² + 1 có bao nhiêu điểm cực trị?', options: ['1', '3', '2', '0'], correctIndex: 0 },
        { question: 'Tìm m để hàm số y = x⁴ − 2mx² + 1 có 3 điểm cực trị.', options: ['m > 0', 'm < 0', 'm = 0', 'm ≥ 0'], correctIndex: 0 },
        { question: 'Tìm điểm uốn của đồ thị hàm số y = 2x³ − 6x² + 1.', options: ['(1;−3)', '(1;3)', '(−1;−3)', '(0;1)'], correctIndex: 0 },
        { question: 'Đồ thị hàm số y = (3x−1)/(2x+4) có tiệm cận đứng và tiệm cận ngang lần lượt là?', options: ['x=−2 và y=3/2', 'x=2 và y=3/2', 'x=−2 và y=−1/4', 'x=4 và y=3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Khảo sát sự biến thiên và tìm các điểm cực trị của hàm số y = −x³ + 3x² − 1.',
          solution: [
            'TXĐ: ℝ',
            "$y'=-3x^2+6x=-3x(x-2)$, $y'=0$ tại $x=0,x=2$",
            'Nghịch biến trên $(-\\infty;0)$ và $(2;+\\infty)$; đồng biến trên $(0;2)$',
            'Cực tiểu tại $x=0$, $y=-1$; cực đại tại $x=2$, $y=3$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho hàm số y = x⁴ − 2mx² + m − 1. Tìm m để hàm số có đúng 1 điểm cực trị.',
          solution: [
            "$y'=4x^3-4mx=4x(x^2-m)$",
            'Hàm số có đúng 1 cực trị khi phương trình $y\'=0$ chỉ có 1 nghiệm thực, tức $x^2=m$ vô nghiệm hoặc nghiệm trùng $x=0$',
            'Điều này xảy ra khi $m\\leq0$',
          ],
        },
      ],
    },
  },

  'l12-ung-dung-dao-ham-thuc-te': {
    title: 'Ứng dụng đạo hàm giải quyết bài toán thực tế',
    theory: {
      cards: [
        {
          title: 'Bài toán tối ưu hoá trong thực tế',
          formulas: [],
          legend: [
            'Bước 1: Chọn biến số x, biểu diễn đại lượng cần tối ưu theo x',
            'Bước 2: Tìm miền xác định của x (điều kiện thực tế)',
            'Bước 3: Tính đạo hàm, lập bảng biến thiên, tìm GTLN/GTNN',
          ],
          note: 'Mẹo: các bài toán thường gặp là tối ưu diện tích, thể tích, chi phí, quãng đường, vận tốc — luôn kiểm tra điều kiện xác định của biến theo ngữ cảnh thực tế.',
        },
        {
          title: 'Ứng dụng đạo hàm trong vật lý — vận tốc, gia tốc',
          formulas: ["v(t)=s'(t)", "a(t)=v'(t)=s''(t)"],
          legend: ['$s(t)$: quãng đường (hoặc vị trí) theo thời gian $t$', '$v(t)$: vận tốc tức thời tại thời điểm $t$', '$a(t)$: gia tốc tức thời tại thời điểm $t$'],
          note: 'Mẹo: vận tốc lớn nhất/nhỏ nhất ứng với a(t)=0 (đạo hàm của v(t) bằng 0).',
        },
      ],
    },
    video: { caption: '00:00 / 14:55 — ung_dung_dao_ham_thuc_te_baigiang.mp4' },
    quiz: [
      { question: 'Nếu s(t) là quãng đường theo thời gian t thì vận tốc tức thời v(t) bằng?', options: ["s'(t)", 's(t)', "s''(t)", 's(t)/t'], correctIndex: 0 },
      { question: 'Nếu v(t) là vận tốc theo thời gian t thì gia tốc a(t) bằng?', options: ["v'(t)", 'v(t)', '∫v(t)dt', 'v(t)/t'], correctIndex: 0 },
      { question: 'Một vật chuyển động theo phương trình s(t) = t³ − 3t² + 2t (m). Vận tốc tại t = 2s là?', options: ['2', '0', '4', '6'], correctIndex: 0 },
      { question: 'Chu vi mảnh đất hình chữ nhật cố định, để diện tích lớn nhất thì hình chữ nhật đó phải là?', options: ['Hình vuông', 'Hình chữ nhật dẹt', 'Không xác định được', 'Hình có 1 cạnh bằng 0'], correctIndex: 0 },
      { question: 'Trong bài toán tối ưu, sau khi lập hàm số f(x) theo biến x, bước tiếp theo là?', options: ["Tính f'(x), giải f'(x)=0, lập BBT để tìm GTLN/GTNN", 'Vẽ đồ thị ngay', 'Tính f(0)', 'Giải phương trình f(x)=0'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Một vật chuyển động theo phương trình s(t) = t³ − 6t² + 9t (m), t ≥ 0. Tìm vận tốc của vật tại t = 1s.', solution: ["$s'(t)=3t^2-12t+9$", "$s'(1)=3-12+9=0$ (m/s)"] },
      { prompt: 'Bài 2. Một chiếc hộp không nắp, đáy hình vuông cạnh x (cm), thể tích 108 cm³. Tìm x để diện tích toàn phần nhỏ nhất.', solution: ['$V=x^2h=108\\Rightarrow h=\\dfrac{108}{x^2}$', '$S=x^2+4xh=x^2+\\dfrac{432}{x}$', "$S'=2x-\\dfrac{432}{x^2}=0\\Rightarrow x^3=216\\Rightarrow x=6$"] },
      {
        prompt: 'Bài 3. Rào một mảnh vườn hình chữ nhật có 1 cạnh là bờ tường có sẵn, tổng chiều dài hàng rào 3 cạnh còn lại là 40m. Tìm kích thước để diện tích lớn nhất.',
        solution: ['Gọi cạnh vuông góc với tường là $x$ (2 cạnh), cạnh song song với tường là $y$: $2x+y=40\\Rightarrow y=40-2x$', '$S(x)=xy=40x-2x^2$', "$S'(x)=40-4x=0\\Rightarrow x=10,\\ y=20$", 'Diện tích lớn nhất $=10\\times20=200\\,m^2$'],
      },
      { prompt: 'Bài 4. Một vật được ném lên theo phương trình độ cao h(t) = −5t² + 20t (m). Tìm thời điểm vật đạt độ cao lớn nhất và độ cao đó.', solution: ["$h'(t)=-10t+20=0\\Rightarrow t=2s$", '$h(2)=-20+40=20$ m'] },
      { prompt: 'Bài 5. Chi phí sản xuất x sản phẩm là C(x) = x² − 40x + 800 (nghìn đồng). Tìm x để chi phí nhỏ nhất.', solution: ["$C'(x)=2x-40=0\\Rightarrow x=20$", '$C(20)=400-800+800=400$ (nghìn đồng)'] },
    ],
    flashcards: [
      { front: 'Vận tốc tức thời theo quãng đường', back: "$v(t)=s'(t)$" },
      { front: 'Gia tốc tức thời theo vận tốc', back: "$a(t)=v'(t)=s''(t)$" },
      { front: 'Các bước giải bài toán tối ưu thực tế', back: 'Chọn biến, lập hàm số, tìm miền xác định, dùng đạo hàm tìm GTLN/GTNN' },
      { front: 'Hình chữ nhật có chu vi cho trước, diện tích lớn nhất khi nào?', back: 'Khi là hình vuông' },
      { front: 'Vận tốc đạt GTLN/GTNN khi nào?', back: 'Khi gia tốc a(t)=0' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Vận tốc tức thời v(t) liên hệ với quãng đường s(t) như thế nào?', options: ["v(t) = s'(t)", 'v(t) = s(t)', "v(t) = s''(t)", 'v(t) = 1/s(t)'], correctIndex: 0 },
        { question: 'Gia tốc a(t) liên hệ với vận tốc v(t) như thế nào?', options: ["a(t) = v'(t)", 'a(t) = v(t)', 'a(t) = ∫v(t)dt', 'a(t) = 1/v(t)'], correctIndex: 0 },
        { question: 'Bước đầu tiên khi giải bài toán tối ưu thực tế là gì?', options: ['Chọn biến số và lập hàm số cần tối ưu', 'Tính đạo hàm ngay', 'Vẽ đồ thị', 'Giải phương trình bậc 2'], correctIndex: 0 },
        { question: 'Với chu vi cho trước, hình chữ nhật có diện tích lớn nhất là hình gì?', options: ['Hình vuông', 'Hình chữ nhật dẹt', 'Hình bất kỳ', 'Không xác định'], correctIndex: 0 },
        { question: 'Gia tốc bằng đạo hàm bậc mấy của quãng đường theo thời gian?', options: ['Bậc 2', 'Bậc 1', 'Bậc 3', 'Bậc 0'], correctIndex: 0 },
        { question: 'Trong bài toán tối ưu, GTLN/GTNN của hàm số thường đạt được khi nào?', options: ['Đạo hàm bằng 0 (hoặc tại biên miền xác định)', 'Đạo hàm luôn dương', 'Đạo hàm luôn âm', 'Hàm số không xác định'], correctIndex: 0 },
        { question: 'Một vật chuyển động theo phương trình s(t) = t² − 4t + 5 (m). Vận tốc tại t = 3s là?', options: ['2', '3', '4', '6'], correctIndex: 0 },
        { question: 'Một vật chuyển động theo phương trình s(t) = t³ − 3t (m). Vận tốc tại t = 2s là?', options: ['9', '3', '6', '12'], correctIndex: 0 },
        { question: 'Chu vi hình chữ nhật là 60m. Diện tích lớn nhất có thể có là?', options: ['225', '200', '250', '900'], correctIndex: 0 },
        { question: 'Vật rơi tự do có phương trình h(t) = −5t² + 45 (m). Vật chạm đất khi t bằng bao nhiêu giây?', options: ['3', '9', '5', '45'], correctIndex: 0 },
        { question: 'Một vật có phương trình vận tốc v(t) = t² − 4t + 5 (m/s). Gia tốc tại t = 1s là?', options: ['−2', '2', '1', '5'], correctIndex: 0 },
        { question: 'Chi phí sản xuất x sản phẩm là C(x) = x² − 20x + 500. Số sản phẩm x để chi phí nhỏ nhất là?', options: ['10', '20', '5', '50'], correctIndex: 0 },
        { question: 'Một người có 200m lưới muốn rào một khu đất hình chữ nhật (rào cả 4 cạnh) để diện tích lớn nhất. Diện tích lớn nhất đó là?', options: ['2500', '10000', '5000', '1000'], correctIndex: 0 },
        { question: 'Một chiếc hộp không nắp, đáy vuông cạnh x, thể tích 108 cm³. Diện tích toàn phần nhỏ nhất khi x bằng?', options: ['6', '4', '8', '12'], correctIndex: 0 },
        { question: 'Một vật ném lên có phương trình độ cao h(t) = −5t² + 30t (m). Độ cao lớn nhất vật đạt được là?', options: ['45', '30', '15', '90'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một vật chuyển động theo phương trình s(t) = t³ − 6t² + 12t (m), t ≥ 0. Tìm vận tốc và gia tốc của vật tại thời điểm t = 2s.',
          solution: ["$s'(t)=3t^2-12t+12$, $v(2)=12-24+12=0$ (m/s)", "$s''(t)=6t-12$, $a(2)=12-12=0$ (m/s²)"],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Làm một bể chứa nước hình hộp chữ nhật không nắp, đáy hình vuông cạnh x (m), thể tích 4 m³. Tìm x để diện tích vật liệu cần dùng nhỏ nhất.',
          solution: ['$V=x^2h=4\\Rightarrow h=\\dfrac{4}{x^2}$', '$S=x^2+4xh=x^2+\\dfrac{16}{x}$', "$S'(x)=2x-\\dfrac{16}{x^2}=0\\Rightarrow x^3=8\\Rightarrow x=2$", 'Vậy $x=2$ m thì diện tích vật liệu nhỏ nhất'],
        },
      ],
    },
  },
}
