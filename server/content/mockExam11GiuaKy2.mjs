// Đề kiểm tra giữa học kì II — Toán 11 (chương trình GDPT 2018).
// Định dạng theo cấu trúc mới của Bộ GD&ĐT áp dụng từ 2025 (Quyết định
// 764/QĐ-BGDĐT): 3 phần — 12 câu TN nhiều phương án (3đ) + 4 câu Đúng/Sai,
// mỗi câu 4 ý (4đ) + 6 câu trả lời ngắn (3đ) = 34 ý hỏi, 10 điểm.
// Thang điểm phần Đúng/Sai theo đúng quy định: 1 ý đúng = 0,1đ; 2 ý = 0,25đ;
// 3 ý = 0,5đ; 4 ý = 1đ (áp dụng chung, xem MockExamRunner.jsx).
// Phạm vi: Giới hạn hàm số & hàm số liên tục (giới hạn hữu hạn tại một điểm,
// giới hạn một bên, giới hạn vô cực, xét tính liên tục) và Hàm số mũ — hàm số
// lôgarit (luỹ thừa số mũ thực, phương trình/bất phương trình mũ và lôgarit
// cơ bản, ứng dụng thực tế: lãi kép, độ pH) — phần đã học tới thời điểm giữa
// học kì II. Tham khảo phong cách/độ khó tại
// DATA/Toán/Toán 11/3. Đề thi - Kiểm tra/Giữa học kỳ 2/ (nội dung tự soạn
// mới, bám sát chương trình GDPT 2018).
export const MOCK_EXAM_11_GIUA_KY_2 = {
  title: 'Đề kiểm tra giữa học kì II — Toán 11',
  kind: 'tracnghiem-3phan',
  duration: 90,
  matrix: [
    { chapter: 'Giới hạn hàm số và hàm số liên tục', nb: 5, th: 5, vd: 5, vdc: 1 },
    { chapter: 'Hàm số mũ và hàm số lôgarit', nb: 3, th: 7, vd: 6, vdc: 2 },
  ],
  specification: [
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Giới hạn hữu hạn của hàm số tại một điểm (hàm đa thức)', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 1, 2' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Giới hạn một bên (dạng $\\dfrac{1}{x}$ khi $x\\to 0^+$)', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 4' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Giới hạn hàm số tại vô cực (dạng phân thức)', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 3' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Định nghĩa hàm số liên tục tại một điểm', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 5' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Tìm tham số để hàm số liên tục tại một điểm (hàm phân thức đơn giản)', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 6' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Tính giới hạn dạng $\\dfrac{0}{0}$ bằng phân tích nhân tử; xét tính liên tục sau khi bổ sung giá trị', level: 'Thông hiểu — Vận dụng', part: 'II', questionNumbers: 'Câu 13' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Giới hạn một bên của hàm số từng khúc; tìm tham số để hàm số liên tục tại điểm nối hai nhánh', level: 'Nhận biết — Vận dụng', part: 'II', questionNumbers: 'Câu 14' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Tính giới hạn hàm số bằng phương pháp nhân biểu thức liên hợp', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 17' },
    { chapter: 'Giới hạn hàm số và hàm số liên tục', content: 'Tìm tham số để hàm số liên tục tại một điểm dẫn tới phương trình bậc hai', level: 'Vận dụng cao', part: 'III', questionNumbers: 'Câu 18' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Tính chất luỹ thừa với số mũ thực', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 7' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Tập xác định của hàm số lôgarit', level: 'Nhận biết — Thông hiểu', part: 'I', questionNumbers: 'Câu 8, 11' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Giải phương trình mũ cơ bản', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 9' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Tính chất của lôgarit (lôgarit của một tích)', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 10' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Giải phương trình lôgarit cơ bản', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 12' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Giải bất phương trình mũ cơ bản, xét tính đúng sai của tập nghiệm', level: 'Thông hiểu — Vận dụng', part: 'II', questionNumbers: 'Câu 15' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Giải phương trình lôgarit có điều kiện xác định, loại nghiệm ngoại lai', level: 'Thông hiểu — Vận dụng', part: 'II', questionNumbers: 'Câu 16' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Giải phương trình mũ bằng phương pháp đặt ẩn phụ', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 19' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Giải bất phương trình lôgarit, đếm số nghiệm nguyên', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 20' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Bài toán thực tế: lãi suất kép (hàm số mũ)', level: 'Vận dụng cao', part: 'III', questionNumbers: 'Câu 21' },
    { chapter: 'Hàm số mũ và hàm số lôgarit', content: 'Bài toán thực tế: độ pH của dung dịch (hàm số lôgarit)', level: 'Vận dụng cao', part: 'III', questionNumbers: 'Câu 22' },
  ],
  partI: [
    {
      question: '$\\lim\\limits_{x\\to 2}(x^2-3x+1)$ bằng',
      options: ['$-5$', '$-1$', '$1$', '$3$'],
      correctIndex: 1,
      solution: 'Hàm đa thức liên tục trên $\\mathbb{R}$ nên $\\lim\\limits_{x\\to 2}(x^2-3x+1)=2^2-3\\cdot2+1=-1$.',
    },
    {
      question: '$\\lim\\limits_{x\\to 1}\\dfrac{x^2-1}{x-1}$ bằng',
      options: ['$0$', '$1$', '$2$', 'Không tồn tại'],
      correctIndex: 2,
      solution: 'Với $x\\ne1$: $\\dfrac{x^2-1}{x-1}=\\dfrac{(x-1)(x+1)}{x-1}=x+1$. Vậy $\\lim\\limits_{x\\to1}\\dfrac{x^2-1}{x-1}=\\lim\\limits_{x\\to1}(x+1)=2$.',
    },
    {
      question: '$\\lim\\limits_{x\\to +\\infty}\\dfrac{2x+1}{x-3}$ bằng',
      options: ['$-2$', '$\\dfrac{1}{3}$', '$2$', '$+\\infty$'],
      correctIndex: 2,
      solution: 'Chia cả tử và mẫu cho $x$: $\\dfrac{2x+1}{x-3}=\\dfrac{2+\\frac{1}{x}}{1-\\frac{3}{x}}\\to \\dfrac{2}{1}=2$ khi $x\\to+\\infty$.',
    },
    {
      question: '$\\lim\\limits_{x\\to 0^+}\\dfrac{1}{x}$ bằng',
      options: ['$-\\infty$', '$0$', '$1$', '$+\\infty$'],
      correctIndex: 3,
      solution: 'Khi $x\\to 0^+$ thì $x>0$ và $x$ dần về $0$ nên $\\dfrac{1}{x}\\to +\\infty$.',
    },
    {
      question: 'Hàm số $y=f(x)$ liên tục tại điểm $x_0$ khi và chỉ khi',
      options: [
        '$f(x)$ xác định tại $x_0$',
        '$\\lim\\limits_{x\\to x_0} f(x)$ tồn tại',
        '$\\lim\\limits_{x\\to x_0} f(x) = f(x_0)$',
        '$f(x_0)=0$',
      ],
      correctIndex: 2,
      solution: 'Theo định nghĩa, hàm số liên tục tại $x_0$ khi và chỉ khi $\\lim\\limits_{x\\to x_0}f(x)=f(x_0)$ (điều này đã bao hàm việc $f(x_0)$ xác định và giới hạn tồn tại).',
    },
    {
      question: 'Cho hàm số $f(x)=\\begin{cases}\\dfrac{x^2-4}{x-2} & x\\ne 2\\\\ m & x=2\\end{cases}$. Tìm $m$ để hàm số liên tục tại $x=2$.',
      options: ['$-4$', '$0$', '$2$', '$4$'],
      correctIndex: 3,
      solution: 'Với $x\\ne2$: $\\dfrac{x^2-4}{x-2}=x+2$, nên $\\lim\\limits_{x\\to2}f(x)=2+2=4$. Hàm số liên tục tại $x=2$ khi $m=f(2)=\\lim\\limits_{x\\to2}f(x)=4$.',
    },
    {
      question: 'Với $a>0,\\ a\\ne1$ và $x,y\\in\\mathbb{R}$, ta có $a^x\\cdot a^y=$',
      options: ['$a^{x-y}$', '$a^{x+y}$', '$a^{xy}$', '$a^{x/y}$'],
      correctIndex: 1,
      solution: 'Tính chất luỹ thừa với số mũ thực: $a^x\\cdot a^y=a^{x+y}$.',
    },
    {
      question: 'Tập xác định của hàm số $y=\\log_2 x$ là',
      options: ['$\\mathbb{R}$', '$[0;+\\infty)$', '$\\mathbb{R}\\setminus\\{0\\}$', '$(0;+\\infty)$'],
      correctIndex: 3,
      solution: 'Hàm số $y=\\log_2 x$ xác định khi $x>0$, tức tập xác định là $(0;+\\infty)$.',
    },
    {
      question: 'Nghiệm của phương trình $3^{x+1}=27$ là',
      options: ['$1$', '$2$', '$3$', '$4$'],
      correctIndex: 1,
      solution: '$3^{x+1}=27=3^3 \\Leftrightarrow x+1=3 \\Leftrightarrow x=2$.',
    },
    {
      question: 'Với $a>0,\\ a\\ne1$ và $b,c>0$, ta có $\\log_a(bc)=$',
      options: [
        '$\\log_a b - \\log_a c$',
        '$\\log_a b\\cdot \\log_a c$',
        '$\\log_a b + \\log_a c$',
        '$\\dfrac{\\log_a b}{\\log_a c}$',
      ],
      correctIndex: 2,
      solution: 'Tính chất lôgarit của một tích: $\\log_a(bc)=\\log_a b+\\log_a c$.',
    },
    {
      question: 'Tập xác định của hàm số $y=\\log_3(x-1)$ là',
      options: ['$(-\\infty;1)$', '$[1;+\\infty)$', '$\\mathbb{R}\\setminus\\{1\\}$', '$(1;+\\infty)$'],
      correctIndex: 3,
      solution: 'Hàm số xác định khi $x-1>0 \\Leftrightarrow x>1$, tức tập xác định là $(1;+\\infty)$.',
    },
    {
      question: 'Nghiệm của phương trình $\\log_2(x-1)=3$ là',
      options: ['$7$', '$8$', '$9$', '$10$'],
      correctIndex: 2,
      solution: 'Điều kiện $x>1$. $\\log_2(x-1)=3 \\Leftrightarrow x-1=2^3=8 \\Leftrightarrow x=9$ (thoả điều kiện).',
    },
  ],
  partII: [
    {
      stem: 'Cho hàm số $f(x)=\\dfrac{x^2-5x+6}{x-2}$ (với $x\\ne 2$). Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Với mọi $x\\ne 2$, ta có $f(x)=x-3$.', isTrue: true },
        { text: 'b) $\\lim\\limits_{x\\to 2} f(x) = -1$.', isTrue: true },
        { text: 'c) $\\lim\\limits_{x\\to 3} f(x) = 1$.', isTrue: false },
        { text: 'd) Nếu đặt $g(x)=f(x)$ với $x\\ne2$ và $g(2)=-1$ thì $g(x)$ liên tục trên $\\mathbb{R}$.', isTrue: true },
      ],
      solution:
        'Vì $x^2-5x+6=(x-2)(x-3)$ nên với $x\\ne2$: $f(x)=x-3$.<br>a) Đúng, theo phân tích trên.<br>b) Đúng: $\\lim\\limits_{x\\to2}f(x)=\\lim\\limits_{x\\to2}(x-3)=-1$.<br>c) Sai: tại lân cận $x=3$ (khác $2$) thì $f(x)=x-3$ nên $\\lim\\limits_{x\\to3}f(x)=3-3=0\\ne1$.<br>d) Đúng: với cách đặt đó, $g(x)=x-3$ với mọi $x\\in\\mathbb{R}$ (kể cả $x=2$ vì $g(2)=-1=2-3$), mà $y=x-3$ là hàm đa thức nên liên tục trên $\\mathbb{R}$.',
    },
    {
      stem: 'Cho hàm số $f(x)=\\begin{cases}\\dfrac{x^2-1}{x-1} & x<1\\\\ 2mx+1 & x\\ge 1\\end{cases}$ ($m$ là tham số). Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $\\lim\\limits_{x\\to 1^-} f(x) = 2$.', isTrue: true },
        { text: 'b) $f(1) = 2m+1$.', isTrue: true },
        { text: 'c) Hàm số liên tục tại $x=1$ khi và chỉ khi $m=\\dfrac12$.', isTrue: true },
        { text: 'd) Với $m=0$, hàm số liên tục trên $\\mathbb{R}$.', isTrue: false },
      ],
      solution:
        'Với $x<1$: $\\dfrac{x^2-1}{x-1}=x+1$.<br>a) Đúng: $\\lim\\limits_{x\\to1^-}f(x)=\\lim\\limits_{x\\to1^-}(x+1)=2$.<br>b) Đúng: nhánh $x\\ge1$ cho $f(1)=2m\\cdot1+1=2m+1$.<br>c) Đúng: hàm liên tục tại $x=1$ khi $\\lim\\limits_{x\\to1^-}f(x)=f(1)\\Leftrightarrow 2=2m+1\\Leftrightarrow m=\\dfrac12$.<br>d) Sai: với $m=0$, $f(1)=1$ nhưng $\\lim\\limits_{x\\to1^-}f(x)=2\\ne1$ nên hàm số không liên tục tại $x=1$, do đó không liên tục trên $\\mathbb{R}$.',
    },
    {
      stem: 'Cho bất phương trình $3^{2x-1} > 27$ (*). Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) (*) tương đương với $2x-1>3$.', isTrue: true },
        { text: 'b) Tập nghiệm của (*) là $(2;+\\infty)$.', isTrue: true },
        { text: 'c) $x=2$ là một nghiệm của (*).', isTrue: false },
        { text: 'd) $x=3$ thoả mãn (*).', isTrue: true },
      ],
      solution:
        '$27=3^3$, cơ số $3>1$ nên hàm mũ đồng biến.<br>a) Đúng: $3^{2x-1}>3^3 \\Leftrightarrow 2x-1>3$.<br>b) Đúng: $2x-1>3\\Leftrightarrow x>2$.<br>c) Sai: tại $x=2$, $2x-1=3$ nên $3^{2x-1}=27$, không lớn hơn $27$ (không thoả mãn bất đẳng thức chặt).<br>d) Đúng: tại $x=3$, $2x-1=5$, $3^5=243>27$.',
    },
    {
      stem: 'Cho phương trình $\\log_2(x-1)+\\log_2(x+1)=3$ (*). Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) Điều kiện xác định của (*) là $x>1$.', isTrue: true },
        { text: 'b) (*) tương đương với $x^2-1=8$.', isTrue: true },
        { text: 'c) Phương trình (*) có hai nghiệm là $x=3$ và $x=-3$.', isTrue: false },
        { text: 'd) Nghiệm của phương trình (*) là $x=3$.', isTrue: true },
      ],
      solution:
        'Điều kiện: $x-1>0$ và $x+1>0 \\Leftrightarrow x>1$.<br>a) Đúng.<br>b) Đúng: $\\log_2[(x-1)(x+1)]=3 \\Leftrightarrow (x-1)(x+1)=2^3 \\Leftrightarrow x^2-1=8$.<br>c) Sai: $x^2=9\\Leftrightarrow x=\\pm3$, nhưng $x=-3$ không thoả điều kiện $x>1$ nên bị loại, phương trình chỉ có một nghiệm.<br>d) Đúng: nghiệm duy nhất thoả mãn điều kiện là $x=3$.',
    },
  ],
  partIII: [
    {
      question: 'Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{x+4}-2}{x} = L$. Tính giá trị của $4L$.',
      answer: '1',
      solution: 'Nhân liên hợp: $\\dfrac{\\sqrt{x+4}-2}{x}=\\dfrac{x+4-4}{x(\\sqrt{x+4}+2)}=\\dfrac{1}{\\sqrt{x+4}+2}$. Vậy $L=\\lim\\limits_{x\\to0}\\dfrac{1}{\\sqrt{x+4}+2}=\\dfrac{1}{4}$, suy ra $4L=1$.',
    },
    {
      question: 'Cho hàm số $f(x)=\\begin{cases}\\dfrac{x^2-16}{x-4} & x\\ne 4\\\\ m^2-2m & x=4\\end{cases}$. Tìm giá trị nhỏ nhất của tham số $m$ để hàm số liên tục tại $x=4$.',
      answer: '-2',
      solution: 'Với $x\\ne4$: $\\dfrac{x^2-16}{x-4}=x+4$, nên $\\lim\\limits_{x\\to4}f(x)=4+4=8$. Cần $m^2-2m=8 \\Leftrightarrow m^2-2m-8=0 \\Leftrightarrow (m-4)(m+2)=0 \\Leftrightarrow m=4$ hoặc $m=-2$. Giá trị nhỏ nhất là $m=-2$.',
    },
    {
      question: 'Giải phương trình $4^x-5\\cdot2^x+4=0$. Tính tổng tất cả các nghiệm của phương trình.',
      answer: '2',
      solution: 'Đặt $t=2^x>0$: $t^2-5t+4=0 \\Leftrightarrow (t-1)(t-4)=0 \\Leftrightarrow t=1$ hoặc $t=4$ (đều thoả $t>0$). Với $t=1$: $2^x=1\\Leftrightarrow x=0$. Với $t=4$: $2^x=4\\Leftrightarrow x=2$. Tổng hai nghiệm bằng $0+2=2$.',
    },
    {
      question: 'Tìm số nghiệm nguyên của bất phương trình $\\log_2(x-1) \\le 3$.',
      answer: '8',
      solution: 'Điều kiện $x>1$. $\\log_2(x-1)\\le3 \\Leftrightarrow x-1\\le8 \\Leftrightarrow x\\le9$. Kết hợp điều kiện: $1<x\\le9$. Các giá trị nguyên: $2,3,4,5,6,7,8,9$ — có $8$ giá trị.',
    },
    {
      question: 'Một người gửi tiết kiệm 100 triệu đồng theo hình thức lãi kép với lãi suất 6%/năm (không đổi). Hỏi sau ít nhất bao nhiêu năm thì số tiền cả gốc lẫn lãi lớn hơn 150 triệu đồng?',
      answer: '7',
      solution: 'Số tiền sau $n$ năm là $T(n)=100\\cdot(1{,}06)^n$ (triệu đồng). Cần $100\\cdot(1{,}06)^n>150 \\Leftrightarrow (1{,}06)^n>1{,}5 \\Leftrightarrow n>\\dfrac{\\log 1{,}5}{\\log 1{,}06}\\approx 6{,}96$. Vì $n$ nguyên nên $n=7$ (kiểm tra: $(1{,}06)^6\\approx1{,}419<1{,}5$ và $(1{,}06)^7\\approx1{,}504>1{,}5$).',
    },
    {
      question: 'Độ pH của một dung dịch được tính bởi công thức $pH=-\\log_{10}[H^+]$, trong đó $[H^+]$ là nồng độ ion $H^+$ (mol/l). Một dung dịch A có $pH=6$. Dung dịch B có nồng độ ion $H^+$ gấp 100 lần dung dịch A. Tính $pH$ của dung dịch B.',
      answer: '4',
      solution: 'Từ $pH_A=6$ suy ra $[H^+]_A=10^{-6}$. Do đó $[H^+]_B=100\\cdot10^{-6}=10^{-4}$. Vậy $pH_B=-\\log_{10}(10^{-4})=4$.',
    },
  ],
}
