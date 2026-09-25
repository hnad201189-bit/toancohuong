// Đề kiểm tra giữa học kì I — Toán 11 (chương trình GDPT 2018).
// Định dạng theo cấu trúc mới của Bộ GD&ĐT áp dụng từ 2025 (Quyết định
// 764/QĐ-BGDĐT), đã được các trường THPT áp dụng cho kiểm tra định kỳ lớp 11
// từ năm học 2025-2026: 3 phần — 12 câu TN nhiều phương án (3đ) + 4 câu
// Đúng/Sai, mỗi câu 4 ý (4đ) + 6 câu trả lời ngắn (3đ) = 34 ý hỏi, 10 điểm.
// Thang điểm phần Đúng/Sai theo đúng quy định: 1 ý đúng = 0,1đ; 2 ý = 0,25đ;
// 3 ý = 0,5đ; 4 ý = 1đ (áp dụng chung, xem MockExamRunner.jsx).
// Phạm vi: Chương 1 (Hàm số lượng giác và phương trình lượng giác) — phần đã
// học tới thời điểm giữa học kì I, tham khảo đề gốc tại
// DATA/Toán/Toán 11/3. Đề thi - Kiểm tra/Giữa học kỳ 1/.
export const MOCK_EXAM_11_GIUA_KY_1 = {
  title: 'Đề kiểm tra giữa học kì I — Toán 11',
  kind: 'tracnghiem-3phan',
  duration: 90,
  variants: [
    {
      matrix: [
    { chapter: 'Hàm số lượng giác và đồ thị', nb: 3, th: 2, vd: 1, vdc: 0 },
    { chapter: 'Phương trình lượng giác cơ bản', nb: 3, th: 3, vd: 2, vdc: 0 },
  ],
  specification: [
    { chapter: 'Hàm số lượng giác và đồ thị', content: 'Tập xác định của hàm số lượng giác', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 1, 2' },
    { chapter: 'Hàm số lượng giác và đồ thị', content: 'Tính tuần hoàn, chu kì của hàm số lượng giác', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 3' },
    { chapter: 'Hàm số lượng giác và đồ thị', content: 'Tính chẵn — lẻ của hàm số lượng giác', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 4' },
    { chapter: 'Hàm số lượng giác và đồ thị', content: 'Tập giá trị, GTLN — GTNN của hàm số lượng giác', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 5' },
    { chapter: 'Hàm số lượng giác và đồ thị', content: 'Đồ thị hàm số lượng giác', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 13' },
    { chapter: 'Phương trình lượng giác cơ bản', content: 'Công thức nghiệm phương trình sin x = a, cos x = a', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 6, 7' },
    { chapter: 'Phương trình lượng giác cơ bản', content: 'Công thức nghiệm phương trình tan x = a, cot x = a', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 8' },
    { chapter: 'Phương trình lượng giác cơ bản', content: 'Giải phương trình lượng giác cơ bản, biện luận nghiệm', level: 'Thông hiểu', part: 'I/II', questionNumbers: 'Câu 9, 10, 11, 12, Câu 14' },
    { chapter: 'Phương trình lượng giác cơ bản', content: 'Đếm số nghiệm trên một đoạn, khoảng cho trước', level: 'Vận dụng', part: 'II/III', questionNumbers: 'Câu 15, 16, Câu 17-22' },
  ],
  partI: [
    {
      question: 'Tập xác định của hàm số $y = \\tan x$ là',
      options: [
        '$\\mathbb{R}$',
        '$\\mathbb{R}\\setminus\\{k\\pi,\\ k\\in\\mathbb{Z}\\}$',
        '$\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\ k\\in\\mathbb{Z}\\right\\}$',
        '$\\mathbb{R}\\setminus\\{0\\}$',
      ],
      correctIndex: 2,
      solution: 'Hàm số $y=\\tan x=\\dfrac{\\sin x}{\\cos x}$ xác định khi $\\cos x\\ne 0 \\Leftrightarrow x\\ne \\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Tập xác định của hàm số $y = \\dfrac{1}{\\sin x}$ là',
      options: [
        '$\\mathbb{R}\\setminus\\{k\\pi,\\ k\\in\\mathbb{Z}\\}$',
        '$\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi\\right\\}$',
        '$\\mathbb{R}$',
        '$\\mathbb{R}\\setminus\\{k2\\pi\\}$',
      ],
      correctIndex: 0,
      solution: 'Hàm số xác định khi $\\sin x\\ne 0 \\Leftrightarrow x\\ne k\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Chu kì của hàm số $y=\\sin 2x$ là',
      options: ['$T=2\\pi$', '$T=\\pi$', '$T=4\\pi$', '$T=\\dfrac{\\pi}{2}$'],
      correctIndex: 1,
      solution: 'Hàm số $y=\\sin(ax)$ có chu kì $T=\\dfrac{2\\pi}{|a|}$. Với $a=2$ ta có $T=\\dfrac{2\\pi}{2}=\\pi$.',
    },
    {
      question: 'Hàm số nào sau đây là hàm số chẵn?',
      options: ['$y=\\sin x$', '$y=\\tan x$', '$y=\\cos x$', '$y=x+\\sin x$'],
      correctIndex: 2,
      solution: '$\\cos(-x)=\\cos x$ với mọi $x$ nên $y=\\cos x$ là hàm số chẵn. Ba hàm còn lại đều là hàm số lẻ.',
    },
    {
      question: 'Tập giá trị của hàm số $y=3\\sin x-1$ là',
      options: ['$[-1;1]$', '$[-4;2]$', '$[-3;3]$', '$[-2;4]$'],
      correctIndex: 1,
      solution: 'Vì $-1\\le \\sin x\\le 1$ nên $-3\\le 3\\sin x\\le 3$, suy ra $-4\\le 3\\sin x-1\\le 2$. Vậy tập giá trị là $[-4;2]$.',
    },
    {
      question: 'Nghiệm của phương trình $\\sin x = 1$ là',
      options: [
        '$x=\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=-\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$',
      ],
      correctIndex: 0,
      solution: '$\\sin x=1 \\Leftrightarrow x=\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Nghiệm của phương trình $\\cos x = -\\dfrac{1}{2}$ là',
      options: [
        '$x=\\pm\\dfrac{\\pi}{3}+k2\\pi$',
        '$x=\\pm\\dfrac{2\\pi}{3}+k2\\pi$',
        '$x=\\pm\\dfrac{\\pi}{6}+k2\\pi$',
        '$x=\\dfrac{2\\pi}{3}+k\\pi$',
      ],
      correctIndex: 1,
      solution: 'Vì $\\cos\\dfrac{2\\pi}{3}=-\\dfrac{1}{2}$ nên $\\cos x=-\\dfrac{1}{2} \\Leftrightarrow x=\\pm\\dfrac{2\\pi}{3}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Nghiệm của phương trình $\\tan x = 1$ là',
      options: [
        '$x=\\dfrac{\\pi}{4}+k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{4}+k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=-\\dfrac{\\pi}{4}+k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z})$',
      ],
      correctIndex: 0,
      solution: '$\\tan x=1=\\tan\\dfrac{\\pi}{4} \\Leftrightarrow x=\\dfrac{\\pi}{4}+k\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Phương trình $\\sin x=\\sin\\dfrac{\\pi}{5}$ có nghiệm là',
      options: [
        '$x=\\dfrac{\\pi}{5}+k2\\pi$ hoặc $x=\\dfrac{4\\pi}{5}+k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{5}+k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{5}+k2\\pi$ hoặc $x=-\\dfrac{\\pi}{5}+k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{4\\pi}{5}+k2\\pi\\ (k\\in\\mathbb{Z})$',
      ],
      correctIndex: 0,
      solution: '$\\sin x=\\sin\\dfrac{\\pi}{5} \\Leftrightarrow x=\\dfrac{\\pi}{5}+k2\\pi$ hoặc $x=\\pi-\\dfrac{\\pi}{5}+k2\\pi=\\dfrac{4\\pi}{5}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Điều kiện xác định của phương trình $\\cot x = \\sqrt{3}$ là',
      options: ['$x\\ne k\\pi$', '$x\\ne \\dfrac{\\pi}{2}+k\\pi$', '$x\\ne k2\\pi$', 'Không có điều kiện'],
      correctIndex: 0,
      solution: '$\\cot x=\\dfrac{\\cos x}{\\sin x}$ xác định khi $\\sin x\\ne 0 \\Leftrightarrow x\\ne k\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Số nghiệm của phương trình $2\\sin x - \\sqrt{2}=0$ trên đoạn $[0;\\pi]$ là',
      options: ['0', '1', '2', '3'],
      correctIndex: 2,
      solution: '$\\sin x=\\dfrac{\\sqrt{2}}{2} \\Leftrightarrow x=\\dfrac{\\pi}{4}+k2\\pi$ hoặc $x=\\dfrac{3\\pi}{4}+k2\\pi$. Trên $[0;\\pi]$ có hai nghiệm $x=\\dfrac{\\pi}{4}$ và $x=\\dfrac{3\\pi}{4}$.',
    },
    {
      question: 'Phương trình $\\cos 2x = \\cos x$ tương đương với',
      options: [
        '$2x=x+k2\\pi$ hoặc $2x=-x+k2\\pi$',
        '$2x=x+k\\pi$',
        '$2x=-x+k\\pi$',
        '$x=k2\\pi$',
      ],
      correctIndex: 0,
      solution: 'Áp dụng $\\cos A=\\cos B \\Leftrightarrow A=B+k2\\pi$ hoặc $A=-B+k2\\pi$, với $A=2x,B=x$.',
    },
  ],
  partII: [
    {
      stem: 'Cho hàm số $y=f(x)=\\sin 2x$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Hàm số $f(x)$ có chu kì $T=\\pi$.', isTrue: true },
        { text: 'b) Hàm số $f(x)$ là hàm số lẻ.', isTrue: true },
        { text: 'c) Tập giá trị của hàm số là $[-2;2]$.', isTrue: false },
        { text: 'd) $f\\left(\\dfrac{\\pi}{4}\\right)=1$.', isTrue: true },
      ],
      solution:
        'a) Đúng: $T=\\dfrac{2\\pi}{2}=\\pi$.<br>b) Đúng: $f(-x)=\\sin(-2x)=-\\sin 2x=-f(x)$.<br>c) Sai: vì $-1\\le \\sin 2x\\le 1$ nên tập giá trị là $[-1;1]$, không phải $[-2;2]$.<br>d) Đúng: $f\\left(\\dfrac{\\pi}{4}\\right)=\\sin\\dfrac{\\pi}{2}=1$.',
    },
    {
      stem: 'Cho phương trình $2\\cos x - 1 = 0$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Phương trình tương đương với $\\cos x=\\dfrac{1}{2}$.', isTrue: true },
        { text: 'b) Công thức nghiệm của phương trình là $x=\\pm\\dfrac{\\pi}{3}+k2\\pi\\ (k\\in\\mathbb{Z})$.', isTrue: true },
        { text: 'c) $x=\\dfrac{\\pi}{3}$ là một nghiệm của phương trình.', isTrue: true },
        { text: 'd) Trên đoạn $[0;2\\pi]$, phương trình có 3 nghiệm.', isTrue: false },
      ],
      solution:
        'a) Đúng: $2\\cos x-1=0 \\Leftrightarrow \\cos x=\\dfrac{1}{2}$.<br>b) Đúng vì $\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$.<br>c) Đúng: thay $x=\\pi/3$ thoả mãn.<br>d) Sai: trên $[0;2\\pi]$ chỉ có hai nghiệm $x=\\dfrac{\\pi}{3}$ và $x=\\dfrac{5\\pi}{3}$.',
    },
    {
      stem: 'Cho phương trình $\\tan\\left(2x-\\dfrac{\\pi}{4}\\right)=1$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Điều kiện xác định là $2x-\\dfrac{\\pi}{4}\\ne \\dfrac{\\pi}{2}+k\\pi$.', isTrue: true },
        { text: 'b) Phương trình tương đương với $2x-\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}+k\\pi$.', isTrue: true },
        { text: 'c) Nghiệm của phương trình là $x=\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2}\\ (k\\in\\mathbb{Z})$.', isTrue: true },
        { text: 'd) $x=\\dfrac{3\\pi}{4}$ không phải là nghiệm của phương trình.', isTrue: false },
      ],
      solution:
        'a) Đúng: điều kiện của $\\tan u$ là $u\\ne \\dfrac{\\pi}{2}+k\\pi$.<br>b) Đúng vì $1=\\tan\\dfrac{\\pi}{4}$.<br>c) Đúng: giải ra $x=\\dfrac{\\pi}{4}+k\\dfrac{\\pi}{2}$.<br>d) Sai: với $k=1$, $x=\\dfrac{\\pi}{4}+\\dfrac{\\pi}{2}=\\dfrac{3\\pi}{4}$ là một nghiệm, nên mệnh đề "không phải nghiệm" là sai.',
    },
    {
      stem: 'Một vật dao động điều hoà có li độ $x(t)=5\\sin\\left(2\\pi t+\\dfrac{\\pi}{6}\\right)$ (cm), $t$ tính bằng giây. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Chu kì dao động là $T=1$ giây.', isTrue: true },
        { text: 'b) Biên độ dao động là $A=5$ cm.', isTrue: true },
        { text: 'c) Tại $t=0$, li độ $x(0)=2{,}5$ cm.', isTrue: true },
        { text: 'd) Vật đạt li độ cực đại khi $t=\\dfrac{1}{6}$ giây (lần đầu tiên, $t>0$).', isTrue: true },
      ],
      solution:
        'a) Đúng: $T=\\dfrac{2\\pi}{2\\pi}=1$ giây.<br>b) Đúng: biên độ là hệ số đứng trước $\\sin$, bằng $5$.<br>c) Đúng: $x(0)=5\\sin\\dfrac{\\pi}{6}=5\\cdot\\dfrac{1}{2}=2{,}5$.<br>d) Đúng: cực đại khi $2\\pi t+\\dfrac{\\pi}{6}=\\dfrac{\\pi}{2}+k2\\pi \\Leftrightarrow t=\\dfrac{1}{6}+k\\ (k\\in\\mathbb{Z})$; nghiệm dương nhỏ nhất ứng $k=0$ cho $t=\\dfrac{1}{6}$ giây.',
    },
  ],
  partIII: [
    {
      question: 'Giải phương trình $2\\sin x-1=0$ trên đoạn $[0;2\\pi]$. Phương trình có bao nhiêu nghiệm?',
      answer: '2',
      solution: '$\\sin x=\\dfrac12 \\Leftrightarrow x=\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{5\\pi}{6}+k2\\pi$. Trên $[0;2\\pi]$ có 2 nghiệm: $\\dfrac{\\pi}{6}$ và $\\dfrac{5\\pi}{6}$.',
    },
    {
      question: 'Tổng các nghiệm của phương trình $\\cos x=\\dfrac{\\sqrt3}{2}$ trên đoạn $[0;2\\pi]$ bằng bao nhiêu lần $\\pi$? (nhập giá trị của thương số đó)',
      answer: '2',
      solution: 'Nghiệm trên $[0;2\\pi]$: $x=\\dfrac{\\pi}{6}$ và $x=2\\pi-\\dfrac{\\pi}{6}=\\dfrac{11\\pi}{6}$. Tổng $=\\dfrac{\\pi}{6}+\\dfrac{11\\pi}{6}=2\\pi$, vậy thương so với $\\pi$ là $2$.',
    },
    {
      question: 'Hàm số $y=2\\cos x+1$ đạt giá trị lớn nhất bằng bao nhiêu?',
      answer: '3',
      solution: '$\\cos x\\le 1$ nên $y\\le 2\\cdot1+1=3$, dấu bằng khi $x=k2\\pi$.',
    },
    {
      question: 'Chu kì của hàm số $y=\\tan 3x$ bằng $\\dfrac{\\pi}{n}$. Tìm $n$.',
      answer: '3',
      solution: 'Hàm $y=\\tan(ax)$ có chu kì $T=\\dfrac{\\pi}{|a|}$, với $a=3$ ta có $T=\\dfrac{\\pi}{3}$, vậy $n=3$.',
    },
    {
      question: 'Phương trình $\\sin^2 x=1$ có bao nhiêu nghiệm trên đoạn $[0;3\\pi]$?',
      answer: '3',
      solution: '$\\sin^2x=1 \\Leftrightarrow \\sin x=\\pm1 \\Leftrightarrow x=\\dfrac{\\pi}{2}+k\\pi$. Trên $[0;3\\pi]$: $k=0,1,2$ cho $x=\\dfrac{\\pi}{2},\\dfrac{3\\pi}{2},\\dfrac{5\\pi}{2}$ — có 3 nghiệm.',
    },
    {
      question: 'Cho $\\tan x = 2$ với $x\\in\\left(0;\\dfrac{\\pi}{2}\\right)$. Tính giá trị của biểu thức $P=\\dfrac{2\\sin x+\\cos x}{\\sin x-3\\cos x}$ (nhập kết quả dưới dạng số thập phân).',
      answer: '-5',
      solution: 'Chia cả tử và mẫu cho $\\cos x$: $P=\\dfrac{2\\tan x+1}{\\tan x-3}=\\dfrac{2\\cdot2+1}{2-3}=\\dfrac{5}{-1}=-5$.',
    },
      ],
    },
  ],
}
