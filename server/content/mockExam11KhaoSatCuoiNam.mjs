// Đề khảo sát chất lượng cuối năm — Toán 11 (chương trình GDPT 2018).
// Cùng định dạng 3 phần theo cấu trúc mới của Bộ GD&ĐT (Quyết định
// 764/QĐ-BGDĐT) như mockExam11GiuaKy1.mjs: 12 câu TN nhiều phương án (3đ) +
// 4 câu Đúng/Sai, mỗi câu 4 ý (4đ) + 6 câu trả lời ngắn (3đ) = 34 ý hỏi,
// 10 điểm. Thang điểm phần Đúng/Sai: 1 ý đúng = 0,1đ; 2 ý = 0,25đ; 3 ý =
// 0,5đ; 4 ý = 1đ (xem MockExamRunner.jsx).
// Phạm vi: ÔN TẬP TOÀN BỘ chương trình Toán 11 (khác với các đề giữa/cuối
// từng kì, đề này rải đều trên cả 8 mạch kiến thức đã học trong năm: Lượng
// giác, Dãy số — CSC — CSN, Giới hạn dãy số, Giới hạn hàm số — hàm liên tục,
// Hàm số mũ — lôgarit, Đường thẳng và mặt phẳng song song, Quan hệ vuông góc,
// Thống kê — Xác suất), độ khó nhích nhẹ về phía Thông hiểu/Vận dụng so với
// đề giữa kì vì là đề tổng ôn cuối năm. Đề bài tự soạn, các đáp số và cả 16
// ý Đúng/Sai đã được tính toán, kiểm tra độc lập.
export const MOCK_EXAM_11_KHAO_SAT_CUOI_NAM = {
  title: 'Đề khảo sát chất lượng cuối năm — Toán 11',
  kind: 'tracnghiem-3phan',
  duration: 90,
  variants: [
    {
      matrix: [
    { chapter: 'Hàm số lượng giác và phương trình lượng giác', nb: 1, th: 2, vd: 1, vdc: 0 },
    { chapter: 'Dãy số, cấp số cộng — cấp số nhân', nb: 1, th: 1, vd: 2, vdc: 0 },
    { chapter: 'Giới hạn dãy số', nb: 1, th: 0, vd: 1, vdc: 0 },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', nb: 1, th: 1, vd: 1, vdc: 0 },
    { chapter: 'Hàm số mũ — lôgarit', nb: 1, th: 0, vd: 1, vdc: 0 },
    { chapter: 'Đường thẳng và mặt phẳng song song', nb: 1, th: 0, vd: 1, vdc: 0 },
    { chapter: 'Quan hệ vuông góc trong không gian', nb: 0, th: 1, vd: 1, vdc: 1 },
    { chapter: 'Thống kê và xác suất', nb: 0, th: 1, vd: 1, vdc: 0 },
  ],
  specification: [
    { chapter: 'Hàm số lượng giác và phương trình lượng giác', content: 'Chu kì hàm số lượng giác', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 1' },
    { chapter: 'Hàm số lượng giác và phương trình lượng giác', content: 'Công thức nghiệm phương trình sin x = a', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 2' },
    { chapter: 'Hàm số lượng giác và phương trình lượng giác', content: 'Công thức cộng cung', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 3' },
    { chapter: 'Hàm số lượng giác và phương trình lượng giác', content: 'Tính giá trị biểu thức lượng giác khi biết tan x', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 17' },
    { chapter: 'Dãy số, cấp số cộng — cấp số nhân', content: 'Số hạng tổng quát của cấp số cộng', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 4' },
    { chapter: 'Dãy số, cấp số cộng — cấp số nhân', content: 'Công bội của cấp số nhân', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 5' },
    { chapter: 'Dãy số, cấp số cộng — cấp số nhân', content: 'Ứng dụng cấp số nhân trong bài toán tăng trưởng dân số', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 13' },
    { chapter: 'Dãy số, cấp số cộng — cấp số nhân', content: 'Ứng dụng cấp số cộng trong bài toán tiết kiệm', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 18' },
    { chapter: 'Giới hạn dãy số', content: 'Giới hạn dãy số dạng phân thức đa thức', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 6' },
    { chapter: 'Giới hạn dãy số', content: 'Giới hạn dãy số bằng phương pháp nhân lượng liên hợp', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 19' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Giới hạn hàm số dạng 0/0', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 7' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Xét tính liên tục của hàm số tại một điểm', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 8' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Giới hạn và tính liên tục của hàm số có tham số', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 14' },
    { chapter: 'Hàm số mũ — lôgarit', content: 'Giải phương trình mũ cơ bản', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 9' },
    { chapter: 'Hàm số mũ — lôgarit', content: 'Điều kiện xác định và giải phương trình lôgarit', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 15' },
    { chapter: 'Đường thẳng và mặt phẳng song song', content: 'Điều kiện đường thẳng song song mặt phẳng', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 10' },
    { chapter: 'Đường thẳng và mặt phẳng song song', content: 'Xác định mặt phẳng song song với một đường thẳng trong hình lăng trụ', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 20' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Chứng minh đường thẳng vuông góc với mặt phẳng', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 11' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Góc và khoảng cách trong hình chóp có cạnh bên vuông góc với đáy', level: 'Vận dụng', part: 'II', questionNumbers: 'Câu 16' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Khoảng cách từ điểm đến mặt phẳng bằng phương pháp hai mặt phẳng vuông góc', level: 'Vận dụng cao', part: 'III', questionNumbers: 'Câu 22' },
    { chapter: 'Thống kê và xác suất', content: 'Quy tắc cộng và nhân xác suất với biến cố độc lập', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 12' },
    { chapter: 'Thống kê và xác suất', content: 'Tính phương sai của mẫu số liệu', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 21' },
  ],
  partI: [
    {
      question: 'Chu kì của hàm số $y=\\cos\\dfrac{x}{2}$ là',
      options: ['$2\\pi$', '$4\\pi$', '$\\pi$', '$\\dfrac{\\pi}{4}$'],
      correctIndex: 1,
      solution: 'Hàm số $y=\\cos(ax)$ có chu kì $T=\\dfrac{2\\pi}{|a|}$. Với $a=\\dfrac12$ ta có $T=\\dfrac{2\\pi}{1/2}=4\\pi$.',
    },
    {
      question: 'Nghiệm của phương trình $2\\sin x+\\sqrt3=0$ là',
      options: [
        '$x=\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=\\dfrac{2\\pi}{3}+k2\\pi$',
        '$x=-\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=\\dfrac{4\\pi}{3}+k2\\pi$',
        '$x=-\\dfrac{\\pi}{6}+k2\\pi$ hoặc $x=\\dfrac{7\\pi}{6}+k2\\pi$',
        '$x=\\dfrac{\\pi}{3}+k\\pi$',
      ],
      correctIndex: 1,
      solution: '$\\sin x=-\\dfrac{\\sqrt3}{2}=\\sin\\left(-\\dfrac{\\pi}{3}\\right) \\Leftrightarrow x=-\\dfrac{\\pi}{3}+k2\\pi$ hoặc $x=\\pi+\\dfrac{\\pi}{3}+k2\\pi=\\dfrac{4\\pi}{3}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
    },
    {
      question: 'Rút gọn biểu thức $A=\\cos x\\cos 2x-\\sin x\\sin 2x$ ta được',
      options: ['$\\cos x$', '$\\sin 3x$', '$\\cos 3x$', '$-\\cos 3x$'],
      correctIndex: 2,
      solution: 'Áp dụng công thức $\\cos a\\cos b-\\sin a\\sin b=\\cos(a+b)$ với $a=x,\\ b=2x$: $A=\\cos(x+2x)=\\cos 3x$.',
    },
    {
      question: 'Cho cấp số cộng $(u_n)$ có $u_1=-3$, công sai $d=4$. Số hạng $u_{20}$ bằng',
      options: ['69', '73', '77', '81'],
      correctIndex: 1,
      solution: '$u_{20}=u_1+19d=-3+19\\cdot4=-3+76=73$.',
    },
    {
      question: 'Cho cấp số nhân $(u_n)$ có $u_1=3$ và $u_4=24$. Công bội $q$ bằng',
      options: ['3', '2', '4', '8'],
      correctIndex: 1,
      solution: '$\\dfrac{u_4}{u_1}=q^3=\\dfrac{24}{3}=8 \\Rightarrow q=2$.',
    },
    {
      question: '$\\lim\\dfrac{2n^2+3n-1}{3n^2+1}$ bằng',
      options: ['$\\dfrac23$', '$\\dfrac32$', '$0$', '$+\\infty$'],
      correctIndex: 0,
      solution: 'Chia cả tử và mẫu cho $n^2$: $\\lim\\dfrac{2+\\frac3n-\\frac1{n^2}}{3+\\frac1{n^2}}=\\dfrac23$.',
    },
    {
      question: '$\\lim\\limits_{x\\to2}\\dfrac{x^2-4}{x-2}$ bằng',
      options: ['$0$', '$2$', '$4$', '$+\\infty$'],
      correctIndex: 2,
      solution: '$\\dfrac{x^2-4}{x-2}=x+2$ với $x\\ne2$, nên $\\lim\\limits_{x\\to2}\\dfrac{x^2-4}{x-2}=\\lim\\limits_{x\\to2}(x+2)=4$.',
    },
    {
      question: 'Cho hàm số $f(x)=\\dfrac{x^2-1}{x-1}$ với $x\\ne1$ và $f(1)=a$. Hàm số liên tục tại $x=1$ khi $a$ bằng',
      options: ['$0$', '$1$', '$2$', '$-1$'],
      correctIndex: 2,
      solution: 'Với $x\\ne1$: $f(x)=\\dfrac{x^2-1}{x-1}=x+1$. Hàm số liên tục tại $x=1$ khi $a=f(1)=\\lim\\limits_{x\\to1}(x+1)=2$.',
    },
    {
      question: 'Nghiệm của phương trình $2^{x+1}=8$ là',
      options: ['1', '2', '3', '4'],
      correctIndex: 1,
      solution: '$2^{x+1}=8=2^3 \\Leftrightarrow x+1=3 \\Leftrightarrow x=2$.',
    },
    {
      question: 'Cho đường thẳng $a$ không nằm trong mặt phẳng $(P)$. Điều kiện nào sau đây đảm bảo $a\\parallel(P)$?',
      options: [
        '$a$ song song với một đường thẳng nằm trong $(P)$',
        '$a$ song song với một mặt phẳng khác cắt $(P)$',
        '$a$ không cắt một đường thẳng bất kì đã biết nằm trong $(P)$',
        '$a$ và $(P)$ có ít nhất một điểm chung',
      ],
      correctIndex: 0,
      solution: 'Đây là định lý điều kiện đường thẳng song song mặt phẳng: nếu $a\\not\\subset(P)$ và $a$ song song với một đường thẳng $d\\subset(P)$ thì $a\\parallel(P)$.',
    },
    {
      question: 'Cho hình chóp $S.ABC$ có $SA\\perp(ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây đúng?',
      options: ['$AB\\perp(SBC)$', '$BC\\perp(SAB)$', '$AC\\perp(SAB)$', '$BC\\perp(SAC)$'],
      correctIndex: 1,
      solution: 'Vì $SA\\perp(ABC)$ nên $SA\\perp BC$; lại có tam giác $ABC$ vuông tại $B$ nên $AB\\perp BC$. Vì $BC$ vuông góc với hai đường thẳng cắt nhau $SA, AB$ trong mặt phẳng $(SAB)$, suy ra $BC\\perp(SAB)$.',
    },
    {
      question: 'Hai biến cố $A$, $B$ độc lập với $P(A)=0{,}4$ và $P(B)=0{,}5$. Tính $P(A\\cup B)$.',
      options: ['$0{,}9$', '$0{,}2$', '$0{,}7$', '$0{,}5$'],
      correctIndex: 2,
      solution: 'Vì $A,B$ độc lập nên $P(A\\cap B)=P(A)P(B)=0{,}4\\cdot0{,}5=0{,}2$. Vậy $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=0{,}4+0{,}5-0{,}2=0{,}7$.',
    },
  ],
  partII: [
    {
      stem:
        'Một khu vực có dân số ban đầu (năm 2020) là $100$ (nghìn người), tốc độ tăng dân số hằng năm không đổi là $2\\%$. Gọi $u_n$ là dân số của khu vực (đơn vị: nghìn người) sau $n$ năm kể từ 2020, tức $u_n=100\\cdot(1{,}02)^n$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Dãy $(u_n)$ là một cấp số nhân với công bội $q=1{,}02$.', isTrue: true },
        { text: 'b) Dân số sau 5 năm ($u_5$) xấp xỉ $110{,}4$ nghìn người (làm tròn đến hàng phần mười).', isTrue: true },
        { text: 'c) Dân số sau 10 năm gấp đôi dân số ban đầu.', isTrue: false },
        { text: 'd) Theo mô hình trên, cần đúng $25$ năm để dân số đạt mức khoảng $150$ nghìn người.', isTrue: false },
      ],
      solution:
        'a) Đúng: $\\dfrac{u_{n+1}}{u_n}=1{,}02$ không đổi nên $(u_n)$ là cấp số nhân với $u_0=100,\\ q=1{,}02$.<br>b) Đúng: $u_5=100\\cdot(1{,}02)^5\\approx 100\\cdot1{,}10408\\approx110{,}4$.<br>c) Sai: $u_{10}=100\\cdot(1{,}02)^{10}\\approx121{,}9$, không đạt $200$.<br>d) Sai: giải $100\\cdot(1{,}02)^n=150 \\Leftrightarrow n=\\dfrac{\\ln1{,}5}{\\ln1{,}02}\\approx20{,}5$ năm, không phải $25$ năm.',
    },
    {
      stem:
        'Cho hàm số $f(x)=\\begin{cases}\\dfrac{x^2-3x+2}{x-1} & x\\ne1\\\\ m & x=1\\end{cases}$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $\\lim\\limits_{x\\to1}f(x)=-1$.', isTrue: true },
        { text: 'b) Hàm số liên tục tại $x=1$ khi và chỉ khi $m=2$.', isTrue: false },
        { text: 'c) Với $m=0$, hàm số liên tục trên $\\mathbb{R}$.', isTrue: false },
        { text: 'd) $\\lim\\limits_{x\\to+\\infty}f(x)=+\\infty$.', isTrue: true },
      ],
      solution:
        'a) Đúng: với $x\\ne1$, $f(x)=\\dfrac{(x-1)(x-2)}{x-1}=x-2$, nên $\\lim\\limits_{x\\to1}f(x)=1-2=-1$.<br>b) Sai: hàm số liên tục tại $x=1$ khi $f(1)=m=\\lim\\limits_{x\\to1}f(x)=-1$, không phải $m=2$.<br>c) Sai: với $m=0\\ne-1$, hàm số gián đoạn tại $x=1$.<br>d) Đúng: với $x\\ne1$, $f(x)=x-2\\to+\\infty$ khi $x\\to+\\infty$.',
    },
    {
      stem: 'Xét phương trình $\\log_2(x-1)+\\log_2(x+1)=3$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Điều kiện xác định của phương trình là $x\\ge1$.', isTrue: false },
        { text: 'b) Phương trình tương đương với $\\log_2\\big[(x-1)(x+1)\\big]=3$.', isTrue: true },
        { text: 'c) $x=-3$ là một nghiệm của phương trình.', isTrue: false },
        { text: 'd) Phương trình có duy nhất một nghiệm.', isTrue: true },
      ],
      solution:
        'a) Sai: cần $x-1>0$ và $x+1>0$, tức $x>1$ (không phải $x\\ge1$, vì tại $x=1$, $\\log_2(x-1)$ không xác định).<br>b) Đúng: theo công thức $\\log_2A+\\log_2B=\\log_2(AB)$ với $A,B>0$.<br>c) Sai: phương trình đại số $(x-1)(x+1)=2^3=8 \\Leftrightarrow x^2=9 \\Leftrightarrow x=\\pm3$, nhưng $x=-3$ không thoả điều kiện xác định $x>1$ nên bị loại.<br>d) Đúng: chỉ có $x=3$ thoả mãn, vậy phương trình có duy nhất một nghiệm.',
    },
    {
      stem: 'Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA\\perp(ABC)$ và $SA=a$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Góc giữa $SB$ và mặt phẳng $(ABC)$ bằng $45^\\circ$.', isTrue: true },
        { text: 'b) $SC=a\\sqrt2$.', isTrue: true },
        { text: 'c) Khoảng cách từ $A$ đến mặt phẳng $(SBC)$ bằng $\\dfrac{a\\sqrt3}{2}$.', isTrue: false },
        { text: 'd) $SB\\perp SC$.', isTrue: false },
      ],
      solution:
        'a) Đúng: hình chiếu vuông góc của $S$ lên $(ABC)$ là $A$ nên hình chiếu của $SB$ là $AB$, góc giữa $SB$ và $(ABC)$ là $\\widehat{SBA}$. Vì $AB=a=SA$ nên tam giác $SAB$ vuông cân tại $A$, suy ra $\\widehat{SBA}=45^\\circ$.<br>b) Đúng: $SC^2=SA^2+AC^2=a^2+a^2=2a^2\\Rightarrow SC=a\\sqrt2$.<br>c) Sai: gọi $M$ là trung điểm $BC$, đường cao tam giác đều $AM=\\dfrac{a\\sqrt3}{2}$; vì $BC\\perp(SAM)$ nên $d(A,(SBC))$ tính theo $\\dfrac1{d^2}=\\dfrac1{SA^2}+\\dfrac1{AM^2}=\\dfrac1{a^2}+\\dfrac{4}{3a^2}=\\dfrac{7}{3a^2}$, suy ra $d=\\dfrac{a\\sqrt{21}}{7}\\ne\\dfrac{a\\sqrt3}{2}$.<br>d) Sai: xét tam giác $SBC$ có $SB=SC=a\\sqrt2$ và $BC=a$; nếu $SB\\perp SC$ thì $SB^2+SC^2=BC^2$, tức $4a^2=a^2$, vô lý. Vậy $SB$ không vuông góc với $SC$.',
    },
  ],
  partIII: [
    {
      question: 'Cho $\\tan x=3$. Tính giá trị của biểu thức $P=\\dfrac{\\sin x+2\\cos x}{3\\sin x-\\cos x}$ (nhập kết quả dưới dạng số thập phân).',
      answer: '0.625',
      solution: 'Chia cả tử và mẫu cho $\\cos x$ (do $\\cos x\\ne0$ vì $\\tan x$ xác định): $P=\\dfrac{\\tan x+2}{3\\tan x-1}=\\dfrac{3+2}{9-1}=\\dfrac58=0{,}625$.',
    },
    {
      question: 'Tháng đầu tiên, một người tiết kiệm được $1$ triệu đồng. Mỗi tháng tiếp theo, người đó tiết kiệm nhiều hơn tháng liền trước $1$ triệu đồng (không tính lãi). Hỏi sau bao nhiêu tháng thì tổng số tiền tiết kiệm được đạt $55$ triệu đồng?',
      answer: '10',
      solution: 'Số tiền tiết kiệm mỗi tháng lập thành cấp số cộng với $u_1=1,\\ d=1$ (đơn vị triệu đồng). Tổng sau $n$ tháng: $S_n=\\dfrac{n}{2}\\big(2u_1+(n-1)d\\big)=\\dfrac{n(n+1)}{2}$. Giải $\\dfrac{n(n+1)}{2}=55 \\Leftrightarrow n^2+n-110=0 \\Leftrightarrow n=10$ (nhận vì $n>0$).',
    },
    {
      question: 'Tính $\\lim\\left(\\sqrt{n^2+3n}-n\\right)$ (nhập kết quả dưới dạng số thập phân).',
      answer: '1.5',
      solution: 'Nhân lượng liên hợp: $\\sqrt{n^2+3n}-n=\\dfrac{3n}{\\sqrt{n^2+3n}+n}=\\dfrac{3}{\\sqrt{1+\\frac3n}+1}$. Khi $n\\to+\\infty$, biểu thức tiến tới $\\dfrac{3}{1+1}=\\dfrac32=1{,}5$.',
    },
    {
      question: 'Cho hình lăng trụ tam giác $ABC.A_1B_1C_1$. Gọi $M, N$ lần lượt là trung điểm của $AA_1$ và $BB_1$. Trong 4 mặt phẳng $(ABC)$, $(A_1B_1C_1)$, $(ACC_1A_1)$, $(BCC_1B_1)$, có bao nhiêu mặt phẳng song song với đường thẳng $MN$?',
      answer: '2',
      solution:
        'Vì $AA_1\\parallel BB_1$ và $AM=BN=\\dfrac12AA_1$ nên tứ giác $ABNM$ là hình bình hành, suy ra $MN\\parallel AB$.<br>Do $AB\\subset(ABC)$ và $MN\\not\\subset(ABC)$ nên $MN\\parallel(ABC)$. Tương tự $AB\\parallel A_1B_1\\subset(A_1B_1C_1)$ nên $MN\\parallel A_1B_1$, suy ra $MN\\parallel(A_1B_1C_1)$.<br>Mặt khác $M\\in AA_1\\subset(ACC_1A_1)$ nhưng $N\\notin(ACC_1A_1)$ nên $MN$ cắt $(ACC_1A_1)$ tại $M$ (không song song); tương tự $MN$ cắt $(BCC_1B_1)$ tại $N$.<br>Vậy có đúng $2$ mặt phẳng song song với $MN$.',
    },
    {
      question: 'Điểm kiểm tra của một nhóm 5 học sinh là: $6, 7, 8, 8, 9$ (điểm). Tính phương sai của mẫu số liệu trên (làm tròn đến hàng phần trăm).',
      answer: '1.04',
      solution:
        'Số trung bình: $\\bar x=\\dfrac{6+7+8+8+9}{5}=\\dfrac{38}{5}=7{,}6$.<br>Phương sai: $S^2=\\dfrac{(6-7{,}6)^2+(7-7{,}6)^2+(8-7{,}6)^2+(8-7{,}6)^2+(9-7{,}6)^2}{5}=\\dfrac{2{,}56+0{,}36+0{,}16+0{,}16+1{,}96}{5}=\\dfrac{5{,}2}{5}=1{,}04$.',
    },
    {
      question: 'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh $SA\\perp(ABCD)$ và $SA=a$. Gọi $d$ là khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$. Tính tỉ số $\\dfrac{d^2}{a^2}$ (nhập kết quả dưới dạng số thập phân).',
      answer: '0.5',
      solution:
        'Vì $CD\\perp AD$ (đáy là hình vuông) và $CD\\perp SA$ (do $SA\\perp(ABCD)$) nên $CD\\perp(SAD)$, suy ra $(SCD)\\perp(SAD)$ theo giao tuyến $SD$.<br>Gọi $H$ là hình chiếu của $A$ lên $SD$ trong mặt phẳng $(SAD)$; vì $CD\\perp(SAD)$ nên $CD\\perp AH$, kết hợp $AH\\perp SD$ suy ra $AH\\perp(SCD)$. Vậy $d=AH$.<br>Trong tam giác vuông $SAD$ (vuông tại $A$, $SA=a$, $AD=a$): $\\dfrac1{AH^2}=\\dfrac1{SA^2}+\\dfrac1{AD^2}=\\dfrac1{a^2}+\\dfrac1{a^2}=\\dfrac2{a^2}$, suy ra $AH^2=\\dfrac{a^2}{2}$.<br>Vậy $\\dfrac{d^2}{a^2}=\\dfrac{AH^2}{a^2}=\\dfrac12=0{,}5$.',
    },
      ],
    },
  ],
}
