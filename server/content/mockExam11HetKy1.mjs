// Đề kiểm tra học kì I — Toán 11 (chương trình GDPT 2018).
// Định dạng theo cấu trúc mới của Bộ GD&ĐT áp dụng từ 2025 (Quyết định
// 764/QĐ-BGDĐT): 3 phần — 12 câu TN nhiều phương án (3đ) + 4 câu Đúng/Sai,
// mỗi câu 4 ý (4đ) + 6 câu trả lời ngắn (3đ) = 34 ý hỏi, 10 điểm.
// Thang điểm phần Đúng/Sai theo đúng quy định: 1 ý đúng = 0,1đ; 2 ý = 0,25đ;
// 3 ý = 0,5đ; 4 ý = 1đ (áp dụng chung, xem MockExamRunner.jsx).
// Phạm vi: toàn bộ học kì I — Chương Lượng giác (hàm số lượng giác, phương
// trình lượng giác cơ bản và thường gặp, công thức biến đổi lượng giác),
// Chương Dãy số — Cấp số cộng — Cấp số nhân, và Chương Giới hạn dãy số
// (giới hạn hữu hạn, vô cực, tổng cấp số nhân lùi vô hạn). Tham khảo cấu
// trúc chương trình tại src/data/topics.js và các đề gốc (chương trình cũ,
// chỉ dùng để tham khảo độ khó/hình thức) tại
// DATA/Toán/Toán 11/3. Đề thi - Kiểm tra/Học kỳ 1/.
export const MOCK_EXAM_11_HET_KY_1 = {
  title: 'Đề kiểm tra học kì I — Toán 11',
  kind: 'tracnghiem-3phan',
  duration: 90,
  matrix: [
    { chapter: 'Hàm số lượng giác', nb: 2, th: 0, vd: 0, vdc: 0 },
    { chapter: 'Phương trình lượng giác', nb: 1, th: 1, vd: 2, vdc: 0 },
    { chapter: 'Công thức biến đổi lượng giác', nb: 0, th: 0, vd: 1, vdc: 0 },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', nb: 3, th: 2, vd: 4, vdc: 0 },
    { chapter: 'Giới hạn dãy số', nb: 1, th: 2, vd: 3, vdc: 0 },
  ],
  specification: [
    { chapter: 'Hàm số lượng giác', content: 'Tập xác định của hàm số lượng giác', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 1' },
    { chapter: 'Hàm số lượng giác', content: 'Chu kì của hàm số lượng giác', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 2' },
    { chapter: 'Phương trình lượng giác', content: 'Công thức nghiệm phương trình $\\sin x=a$', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 3' },
    { chapter: 'Phương trình lượng giác', content: 'Công thức nghiệm phương trình $\\tan x=a$', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 4' },
    { chapter: 'Phương trình lượng giác', content: 'Phương trình bậc hai đối với một hàm số lượng giác', level: 'Thông hiểu — Vận dụng', part: 'II', questionNumbers: 'Câu 13' },
    { chapter: 'Phương trình lượng giác', content: 'Giải và đếm số nghiệm của phương trình lượng giác thường gặp trên một đoạn', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 17' },
    { chapter: 'Công thức biến đổi lượng giác', content: 'Công thức cộng', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 18' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Tính tăng, giảm của dãy số', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 5' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Số hạng tổng quát của cấp số cộng', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 6' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Tổng $n$ số hạng đầu của cấp số cộng', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 7' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Số hạng tổng quát của cấp số nhân', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 8' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Tổng $n$ số hạng đầu của cấp số nhân', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 9' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Xác định các yếu tố của CSC từ hai số hạng cho trước', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 14' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Tính chất và tổng các số hạng của cấp số nhân', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 15' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Tìm công sai từ tổng các số hạng đầu của CSC', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 19' },
    { chapter: 'Dãy số. Cấp số cộng, cấp số nhân', content: 'Tìm công bội và tính tổng các số hạng của CSN', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 20' },
    { chapter: 'Giới hạn dãy số', content: 'Giới hạn hữu hạn của dãy số dạng phân thức', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 10' },
    { chapter: 'Giới hạn dãy số', content: 'Giới hạn vô cực của dãy số', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 11' },
    { chapter: 'Giới hạn dãy số', content: 'Tổng của cấp số nhân lùi vô hạn', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 12' },
    { chapter: 'Giới hạn dãy số', content: 'Xét tính đúng sai về giới hạn và tính đơn điệu của một dãy số cụ thể', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 16' },
    { chapter: 'Giới hạn dãy số', content: 'Giới hạn dãy số chứa căn thức', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 21' },
    { chapter: 'Giới hạn dãy số', content: 'Ứng dụng tổng cấp số nhân lùi vô hạn vào bài toán thực tế', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 22' },
  ],
  partI: [
    {
      question: 'Tập xác định của hàm số $y = \\cot x$ là',
      options: [
        '$\\mathbb{R}\\setminus\\{k\\pi,\\ k\\in\\mathbb{Z}\\}$',
        '$\\mathbb{R}\\setminus\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\ k\\in\\mathbb{Z}\\right\\}$',
        '$\\mathbb{R}$',
        '$\\mathbb{R}\\setminus\\{0\\}$',
      ],
      correctIndex: 0,
      solution: 'Hàm số $y=\\cot x=\\dfrac{\\cos x}{\\sin x}$ xác định khi $\\sin x\\ne 0 \\Leftrightarrow x\\ne k\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Chu kì của hàm số $y=\\cos\\dfrac{x}{2}$ là',
      options: ['$T=2\\pi$', '$T=4\\pi$', '$T=\\pi$', '$T=\\dfrac{\\pi}{2}$'],
      correctIndex: 1,
      solution: 'Hàm số $y=\\cos(ax)$ có chu kì $T=\\dfrac{2\\pi}{|a|}$. Với $a=\\dfrac12$ ta có $T=\\dfrac{2\\pi}{1/2}=4\\pi$.',
    },
    {
      question: 'Nghiệm của phương trình $\\sin x = -1$ là',
      options: [
        '$x=\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=-\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=-\\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z})$',
      ],
      correctIndex: 2,
      solution: '$\\sin x=-1 \\Leftrightarrow x=-\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Nghiệm của phương trình $\\tan 2x = \\tan\\dfrac{\\pi}{6}$ là',
      options: [
        '$x=\\dfrac{\\pi}{6}+k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{12}+k\\pi\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{3}+k\\dfrac{\\pi}{2}\\ (k\\in\\mathbb{Z})$',
        '$x=\\dfrac{\\pi}{12}+k\\dfrac{\\pi}{2}\\ (k\\in\\mathbb{Z})$',
      ],
      correctIndex: 3,
      solution: '$\\tan 2x=\\tan\\dfrac{\\pi}{6} \\Leftrightarrow 2x=\\dfrac{\\pi}{6}+k\\pi \\Leftrightarrow x=\\dfrac{\\pi}{12}+k\\dfrac{\\pi}{2}\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Cho dãy số $(u_n)$ với $u_n=2n+1$. Khẳng định nào sau đây đúng?',
      options: [
        'Dãy số $(u_n)$ là dãy số tăng',
        'Dãy số $(u_n)$ là dãy số giảm',
        'Dãy số $(u_n)$ là dãy số không đổi',
        'Dãy số $(u_n)$ bị chặn trên',
      ],
      correctIndex: 0,
      solution: 'Ta có $u_{n+1}-u_n=2(n+1)+1-(2n+1)=2>0$ với mọi $n$, suy ra $(u_n)$ là dãy số tăng (và không bị chặn trên).',
    },
    {
      question: 'Cho cấp số cộng $(u_n)$ có $u_1=3$ và công sai $d=4$. Số hạng $u_{10}$ bằng',
      options: ['43', '39', '35', '40'],
      correctIndex: 1,
      solution: '$u_{10}=u_1+9d=3+9\\cdot4=3+36=39$.',
    },
    {
      question: 'Cho cấp số cộng $(u_n)$ có $u_1=2$ và công sai $d=3$. Tổng 10 số hạng đầu $S_{10}$ bằng',
      options: ['150', '160', '155', '145'],
      correctIndex: 2,
      solution: '$S_{10}=\\dfrac{10}{2}\\left(2u_1+9d\\right)=5(4+27)=5\\cdot31=155$.',
    },
    {
      question: 'Cho cấp số nhân $(u_n)$ có $u_1=2$ và công bội $q=3$. Số hạng $u_5$ bằng',
      options: ['81', '486', '154', '162'],
      correctIndex: 3,
      solution: '$u_5=u_1q^4=2\\cdot3^4=2\\cdot81=162$.',
    },
    {
      question: 'Cho cấp số nhân $(u_n)$ có $u_1=1$ và công bội $q=2$. Tổng 6 số hạng đầu $S_6$ bằng',
      options: ['63', '64', '31', '127'],
      correctIndex: 0,
      solution: '$S_6=\\dfrac{u_1(q^6-1)}{q-1}=\\dfrac{2^6-1}{2-1}=63$.',
    },
    {
      question: '$\\lim\\limits_{n\\to+\\infty}\\dfrac{3n+1}{n+2}$ bằng',
      options: ['1', '3', '0', '$+\\infty$'],
      correctIndex: 1,
      solution: 'Chia cả tử và mẫu cho $n$: $\\dfrac{3n+1}{n+2}=\\dfrac{3+\\frac1n}{1+\\frac2n}\\to \\dfrac{3+0}{1+0}=3$.',
    },
    {
      question: '$\\lim\\limits_{n\\to+\\infty}\\left(n^2-2n\\right)$ bằng',
      options: ['$-\\infty$', '0', '$+\\infty$', '1'],
      correctIndex: 2,
      solution: '$n^2-2n=n^2\\left(1-\\dfrac{2}{n}\\right)$. Vì $n^2\\to+\\infty$ và $1-\\dfrac2n\\to1>0$ nên $\\lim(n^2-2n)=+\\infty$.',
    },
    {
      question: 'Tổng của một cấp số nhân lùi vô hạn có số hạng đầu $u_1=1$ và công bội $q=\\dfrac12$ bằng',
      options: ['1', '4', '$\\dfrac12$', '2'],
      correctIndex: 3,
      solution: 'Vì $|q|=\\dfrac12<1$ nên tổng cấp số nhân lùi vô hạn là $S=\\dfrac{u_1}{1-q}=\\dfrac{1}{1-\\frac12}=\\dfrac{1}{\\frac12}=2$.',
    },
  ],
  partII: [
    {
      stem: 'Cho phương trình $2\\cos^2 x - 3\\cos x + 1 = 0$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Phương trình đã cho tương đương với $(\\cos x-1)(2\\cos x-1)=0$.', isTrue: true },
        { text: 'b) Phương trình có họ nghiệm $x=k2\\pi\\ (k\\in\\mathbb{Z})$.', isTrue: true },
        { text: 'c) Phương trình có họ nghiệm $x=\\dfrac{\\pi}{3}+k2\\pi\\ (k\\in\\mathbb{Z})$.', isTrue: true },
        { text: 'd) $x=\\dfrac{2\\pi}{3}$ là một nghiệm của phương trình.', isTrue: false },
      ],
      solution:
        'Đặt $t=\\cos x\\ (-1\\le t\\le 1)$, phương trình trở thành $2t^2-3t+1=0 \\Leftrightarrow (t-1)(2t-1)=0 \\Leftrightarrow t=1$ hoặc $t=\\dfrac12$.<br>a) Đúng: $(\\cos x-1)(2\\cos x-1)=0$ chính là dạng phân tích của $2\\cos^2x-3\\cos x+1=0$.<br>b) Đúng: $\\cos x=1 \\Leftrightarrow x=k2\\pi\\ (k\\in\\mathbb{Z})$.<br>c) Đúng: $\\cos x=\\dfrac12 \\Leftrightarrow x=\\pm\\dfrac{\\pi}{3}+k2\\pi$, trong đó có họ nghiệm $x=\\dfrac{\\pi}{3}+k2\\pi$.<br>d) Sai: $\\cos\\dfrac{2\\pi}{3}=-\\dfrac12$, khác cả $1$ và $\\dfrac12$ nên $x=\\dfrac{2\\pi}{3}$ không phải là nghiệm.',
    },
    {
      stem: 'Cho cấp số cộng $(u_n)$ có $u_3=7$ và $u_7=19$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Công sai của cấp số cộng là $d=3$.', isTrue: true },
        { text: 'b) Số hạng đầu là $u_1=1$.', isTrue: true },
        { text: 'c) $u_{10}=31$.', isTrue: false },
        { text: 'd) Tổng 10 số hạng đầu $S_{10}=145$.', isTrue: true },
      ],
      solution:
        'Ta có $u_3=u_1+2d=7$ và $u_7=u_1+6d=19$. Trừ vế theo vế: $4d=12\\Rightarrow d=3$, suy ra $u_1=7-2\\cdot3=1$.<br>a) Đúng.<br>b) Đúng.<br>c) Sai: $u_{10}=u_1+9d=1+27=28\\ne 31$.<br>d) Đúng: $S_{10}=\\dfrac{10}{2}(2u_1+9d)=5(2+27)=5\\cdot29=145$.',
    },
    {
      stem: 'Cho cấp số nhân $(u_n)$ có $u_1=3$ và công bội $q=-2$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $u_4=-24$.', isTrue: true },
        { text: 'b) $u_5=48$.', isTrue: true },
        { text: 'c) Dãy số $(u_n)$ là một dãy số tăng.', isTrue: false },
        { text: 'd) $S_4=u_1+u_2+u_3+u_4=-15$.', isTrue: true },
      ],
      solution:
        '$u_4=u_1q^3=3\\cdot(-2)^3=3\\cdot(-8)=-24$.<br>$u_5=u_1q^4=3\\cdot16=48$.<br>a) Đúng.<br>b) Đúng.<br>c) Sai: vì $q=-2<0$ nên các số hạng đổi dấu liên tiếp ($3,-6,12,-24,\\ldots$), dãy số không đơn điệu, không phải dãy tăng.<br>d) Đúng: $S_4=\\dfrac{u_1(q^4-1)}{q-1}=\\dfrac{3(16-1)}{-2-1}=\\dfrac{45}{-3}=-15$ (kiểm tra trực tiếp: $3-6+12-24=-15$).',
    },
    {
      stem: 'Cho dãy số $(u_n)$ với $u_n=\\dfrac{2n-1}{n+1}$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $u_1=\\dfrac12$.', isTrue: true },
        { text: 'b) $\\lim\\limits_{n\\to+\\infty} u_n = 2$.', isTrue: true },
        { text: 'c) $(u_n)$ là một dãy số giảm.', isTrue: false },
        { text: 'd) $\\lim\\limits_{n\\to+\\infty}(u_n-2)=-3$.', isTrue: false },
      ],
      solution:
        '$u_1=\\dfrac{2\\cdot1-1}{1+1}=\\dfrac12$. Viết lại $u_n=\\dfrac{2n-1}{n+1}=2-\\dfrac{3}{n+1}$.<br>a) Đúng.<br>b) Đúng: $\\lim u_n=\\lim\\left(2-\\dfrac{3}{n+1}\\right)=2-0=2$.<br>c) Sai: vì $\\dfrac{3}{n+1}$ giảm dần về $0$ khi $n$ tăng nên $u_n=2-\\dfrac{3}{n+1}$ tăng dần, do đó $(u_n)$ là dãy số tăng, không phải giảm.<br>d) Sai: $u_n-2=-\\dfrac{3}{n+1}\\to 0$ khi $n\\to+\\infty$, không phải $-3$.',
    },
  ],
  partIII: [
    {
      question: 'Giải phương trình $\\cos 2x + \\cos x = 0$ trên đoạn $[0;2\\pi]$. Phương trình có bao nhiêu nghiệm?',
      answer: '3',
      solution: '$\\cos 2x+\\cos x=0 \\Leftrightarrow 2\\cos^2x-1+\\cos x=0 \\Leftrightarrow 2\\cos^2x+\\cos x-1=0$. Đặt $t=\\cos x\\ (-1\\le t\\le1)$: $2t^2+t-1=0 \\Leftrightarrow t=\\dfrac12$ hoặc $t=-1$. Với $t=\\dfrac12$: $x=\\pm\\dfrac{\\pi}{3}+k2\\pi$, trên $[0;2\\pi]$ được $x=\\dfrac{\\pi}{3}$ và $x=\\dfrac{5\\pi}{3}$. Với $t=-1$: $x=\\pi+k2\\pi$, trên $[0;2\\pi]$ được $x=\\pi$. Vậy phương trình có 3 nghiệm.',
    },
    {
      question: 'Biết $\\sin a=\\dfrac35$ với $a\\in\\left(0;\\dfrac{\\pi}{2}\\right)$. Tính giá trị của $P=\\sin\\left(a+\\dfrac{\\pi}{4}\\right)\\cdot 5\\sqrt2$.',
      answer: '7',
      solution: 'Vì $a\\in\\left(0;\\dfrac{\\pi}{2}\\right)$ nên $\\cos a>0$, suy ra $\\cos a=\\sqrt{1-\\sin^2a}=\\dfrac45$. Theo công thức cộng: $\\sin\\left(a+\\dfrac{\\pi}{4}\\right)=\\sin a\\cos\\dfrac{\\pi}{4}+\\cos a\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt2}{2}\\left(\\dfrac35+\\dfrac45\\right)=\\dfrac{7\\sqrt2}{10}$. Vậy $P=\\dfrac{7\\sqrt2}{10}\\cdot5\\sqrt2=\\dfrac{7\\cdot5\\cdot2}{10}=7$.',
    },
    {
      question: 'Một cấp số cộng $(u_n)$ có tổng 5 số hạng đầu $S_5=25$ và tổng 10 số hạng đầu $S_{10}=150$. Tìm công sai $d$.',
      answer: '4',
      solution: '$S_5=\\dfrac52(2u_1+4d)=25 \\Rightarrow u_1+2d=5$. $S_{10}=\\dfrac{10}{2}(2u_1+9d)=150 \\Rightarrow 2u_1+9d=30$. Từ phương trình đầu: $2u_1=10-4d$, thay vào phương trình sau: $10-4d+9d=30 \\Rightarrow 5d=20 \\Rightarrow d=4$.',
    },
    {
      question: 'Cho cấp số nhân $(u_n)$ có $u_2=6$, $u_5=48$ và công bội $q>0$. Tính tổng $S_4=u_1+u_2+u_3+u_4$.',
      answer: '45',
      solution: '$\\dfrac{u_5}{u_2}=q^3=\\dfrac{48}{6}=8 \\Rightarrow q=2$ (do $q>0$). Suy ra $u_1=\\dfrac{u_2}{q}=\\dfrac{6}{2}=3$. Vậy $S_4=\\dfrac{u_1(q^4-1)}{q-1}=\\dfrac{3(16-1)}{2-1}=45$ (kiểm tra: $3+6+12+24=45$).',
    },
    {
      question: 'Tính $\\lim\\limits_{n\\to+\\infty}\\left(\\sqrt{n^2+4n}-n\\right)$.',
      answer: '2',
      solution: 'Nhân lượng liên hợp: $\\sqrt{n^2+4n}-n=\\dfrac{(n^2+4n)-n^2}{\\sqrt{n^2+4n}+n}=\\dfrac{4n}{\\sqrt{n^2+4n}+n}=\\dfrac{4}{\\sqrt{1+\\frac4n}+1}$. Khi $n\\to+\\infty$, biểu thức này tiến tới $\\dfrac{4}{1+1}=2$.',
    },
    {
      question: 'Một quả bóng được thả rơi từ độ cao 8m. Mỗi lần chạm đất, quả bóng nảy lên đến độ cao bằng $\\dfrac12$ độ cao của lần rơi ngay trước đó, rồi lại rơi xuống, cứ tiếp tục như vậy mãi mãi. Tính tổng quãng đường quả bóng di chuyển được (đơn vị mét).',
      answer: '24',
      solution: 'Gọi $h=8$ là độ cao thả ban đầu, $r=\\dfrac12$ là tỉ số độ cao giữa hai lần nảy liên tiếp. Sau khi rơi đoạn $h$, quả bóng nảy lên rồi rơi xuống liên tiếp các đoạn $2hr, 2hr^2, 2hr^3,\\ldots$ tạo thành hai lần một cấp số nhân lùi vô hạn công bội $r$. Tổng quãng đường $D=h+2hr+2hr^2+\\cdots=h+\\dfrac{2hr}{1-r}=8+\\dfrac{2\\cdot8\\cdot\\frac12}{1-\\frac12}=8+\\dfrac{8}{\\frac12}=8+16=24$ (m).',
    },
  ],
}
