// Đề thi học sinh giỏi (HSG) Toán 11 — định dạng TỰ LUẬN thuần tuý, khác với
// 5 đề thi thử còn lại (dùng định dạng 3 phần trắc nghiệm). Đây là lựa chọn
// có chủ đích: đề thi HSG Toán 11 thực tế ở các trường/tỉnh luôn ra dưới dạng
// tự luận, không theo cấu trúc 34 ý hỏi của Bộ GD&ĐT áp dụng cho kiểm tra
// định kỳ. `kind: 'tuluan'` báo cho MockExamRunner.jsx render theo format
// essay-only (chấm điểm tổng theo thang `points` từng bài, không có đáp án
// trắc nghiệm để so khớp tự động).
// Thang điểm: 5 bài × 4 điểm = 20 điểm — chuẩn thang điểm thi HSG cấp
// trường/tỉnh (khác thang 10 điểm của các đề kiểm tra định kỳ).
// Phạm vi: 5 chuyên đề "Chuyên đề nâng cao" (HSG) lớp 11 đã có trong app, xem
// KNOWLEDGE_AREAS['chuyen-de-nang-cao'] trong src/data/topics.js — PT lượng
// giác chứa tham số, dãy số truy hồi & giới hạn nâng cao, cực trị/khoảng
// cách hình không gian, xác suất nâng cao. Đề bài tự soạn (không sao chép từ
// DATA/), lời giải đã được tính toán và kiểm tra độc lập từng bước (kể cả
// bằng phương pháp toạ độ hoá làm nháp cho bài hình, không đưa vào lời giải
// cuối vì lớp 11 dùng phương pháp tổng hợp/hình học thuần tuý).
export const MOCK_EXAM_11_HSG = {
  title: 'Đề thi học sinh giỏi Toán 11',
  kind: 'tuluan',
  duration: 150, // phút — chuẩn thi HSG cấp trường/tỉnh
  matrix: [
    { chapter: 'Phương trình lượng giác chứa tham số', nb: 0, th: 0, vd: 1, vdc: 1 },
    { chapter: 'Dãy số truy hồi nâng cao', nb: 0, th: 0, vd: 1, vdc: 1 },
    { chapter: 'Giới hạn dãy số nâng cao', nb: 0, th: 0, vd: 1, vdc: 1 },
    { chapter: 'Hình học không gian nâng cao — góc và khoảng cách', nb: 0, th: 0, vd: 1, vdc: 1 },
    { chapter: 'Xác suất và tổ hợp nâng cao', nb: 0, th: 0, vd: 1, vdc: 1 },
  ],
  specification: [
    { chapter: 'Phương trình lượng giác chứa tham số', content: 'Giải phương trình lượng giác bằng nhân tử hoá và đặt ẩn phụ; điều kiện có nghiệm của phương trình bậc nhất đối với sin, cos', level: 'Vận dụng cao', part: '', questionNumbers: 'Bài 1' },
    { chapter: 'Dãy số truy hồi nâng cao', content: 'Chứng minh quy nạp, đặt dãy phụ đưa dãy truy hồi phân thức về cấp số cộng, tính tổng viễn vọng (telescoping)', level: 'Vận dụng cao', part: '', questionNumbers: 'Bài 2' },
    { chapter: 'Giới hạn dãy số nâng cao', content: 'Dãy truy hồi kiểu Newton, dùng bất đẳng thức AM–GM để chặn, chứng minh dãy đơn điệu bị chặn suy ra hội tụ, tính giới hạn qua hệ thức truy hồi', level: 'Vận dụng cao', part: '', questionNumbers: 'Bài 3' },
    { chapter: 'Hình học không gian nâng cao — góc và khoảng cách', content: 'Góc giữa đường thẳng và mặt phẳng, khoảng cách từ điểm đến mặt phẳng, góc giữa hai mặt phẳng trong hình chóp có cạnh bên vuông góc với đáy', level: 'Vận dụng cao', part: '', questionNumbers: 'Bài 4' },
    { chapter: 'Xác suất và tổ hợp nâng cao', content: 'Đếm có điều kiện ràng buộc, xác suất có điều kiện, biến ngẫu nhiên rời rạc và kỳ vọng (phân phối siêu bội)', level: 'Vận dụng cao', part: '', questionNumbers: 'Bài 5' },
  ],
  essays: [
    {
      prompt:
        'Bài 1. (4 điểm)<br>a) Giải phương trình $\\cos^3 x-\\sin^3 x=\\cos 2x$.<br>b) Tìm tất cả các giá trị của tham số $m$ để phương trình $(m-1)\\sin x+m\\cos x=m+1$ có nghiệm.',
      points: 4,
      solution: [
        'a) Ta có $\\cos^3x-\\sin^3x=(\\cos x-\\sin x)(\\cos^2x+\\sin x\\cos x+\\sin^2x)=(\\cos x-\\sin x)(1+\\sin x\\cos x)$.',
        'Mặt khác $\\cos 2x=\\cos^2x-\\sin^2x=(\\cos x-\\sin x)(\\cos x+\\sin x)$.',
        'Phương trình trở thành $(\\cos x-\\sin x)(1+\\sin x\\cos x)=(\\cos x-\\sin x)(\\cos x+\\sin x)$',
        '$\\Leftrightarrow (\\cos x-\\sin x)\\left[1+\\sin x\\cos x-\\cos x-\\sin x\\right]=0$.',
        '<b>Trường hợp 1:</b> $\\cos x-\\sin x=0 \\Leftrightarrow \\tan x=1 \\Leftrightarrow x=\\dfrac{\\pi}{4}+k\\pi\\ (k\\in\\mathbb{Z})$.',
        '<b>Trường hợp 2:</b> $1+\\sin x\\cos x-\\sin x-\\cos x=0$. Đặt $t=\\sin x+\\cos x$ $(-\\sqrt2\\le t\\le \\sqrt2)$, khi đó $\\sin x\\cos x=\\dfrac{t^2-1}{2}$.',
        'Phương trình trở thành $1+\\dfrac{t^2-1}{2}-t=0 \\Leftrightarrow t^2-2t+1=0 \\Leftrightarrow (t-1)^2=0 \\Leftrightarrow t=1$ (thoả điều kiện).',
        'Với $t=1$: $\\sin x+\\cos x=1 \\Leftrightarrow \\sqrt2\\sin\\left(x+\\dfrac{\\pi}{4}\\right)=1 \\Leftrightarrow \\sin\\left(x+\\dfrac{\\pi}{4}\\right)=\\dfrac{\\sqrt2}{2}$',
        '$\\Leftrightarrow x+\\dfrac{\\pi}{4}=\\dfrac{\\pi}{4}+k2\\pi$ hoặc $x+\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{4}+k2\\pi \\Leftrightarrow x=k2\\pi$ hoặc $x=\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
        'Vậy phương trình có nghiệm: $x=\\dfrac{\\pi}{4}+k\\pi$, $x=k2\\pi$, $x=\\dfrac{\\pi}{2}+k2\\pi\\ (k\\in\\mathbb{Z})$.',
        'b) Phương trình $(m-1)\\sin x+m\\cos x=m+1$ có dạng $a\\sin x+b\\cos x=c$ với $a=m-1,\\ b=m,\\ c=m+1$.',
        'Điều kiện để phương trình có nghiệm là $a^2+b^2\\ge c^2$, tức $(m-1)^2+m^2\\ge (m+1)^2$.',
        'Khai triển: $m^2-2m+1+m^2 \\ge m^2+2m+1 \\Leftrightarrow m^2-4m\\ge 0 \\Leftrightarrow m(m-4)\\ge 0$',
        '$\\Leftrightarrow m\\le 0$ hoặc $m\\ge 4$.',
        'Vậy giá trị cần tìm là $m\\le 0$ hoặc $m\\ge 4$.',
      ],
    },
    {
      prompt:
        'Bài 2. (4 điểm) Cho dãy số $(u_n)$ xác định bởi $u_1=1$ và $u_{n+1}=\\dfrac{u_n}{1+2u_n}$ với mọi $n\\ge1$.<br>a) Chứng minh $u_n>0$ với mọi $n\\in\\mathbb{N}^*$.<br>b) Đặt $v_n=\\dfrac{1}{u_n}$. Chứng minh $(v_n)$ là một cấp số cộng, từ đó suy ra công thức số hạng tổng quát $u_n$ theo $n$.<br>c) Tính tổng $S_n=u_1u_2+u_2u_3+\\cdots+u_nu_{n+1}$ theo $n$.',
      points: 4,
      solution: [
        'a) Ta chứng minh bằng quy nạp. Với $n=1$: $u_1=1>0$, đúng.',
        'Giả sử $u_k>0$ với $k\\ge1$. Khi đó $u_{k+1}=\\dfrac{u_k}{1+2u_k}$; vì $u_k>0$ nên $1+2u_k>0$, suy ra $u_{k+1}>0$.',
        'Theo nguyên lý quy nạp, $u_n>0$ với mọi $n\\in\\mathbb{N}^*$.',
        'b) Vì $u_n>0$ với mọi $n$ nên $v_n=\\dfrac1{u_n}$ xác định. Từ $u_{n+1}=\\dfrac{u_n}{1+2u_n}$, lấy nghịch đảo hai vế:',
        '$\\dfrac{1}{u_{n+1}}=\\dfrac{1+2u_n}{u_n}=\\dfrac{1}{u_n}+2$, tức $v_{n+1}=v_n+2$.',
        'Vậy $(v_n)$ là cấp số cộng với $v_1=\\dfrac1{u_1}=1$ và công sai $d=2$.',
        'Suy ra $v_n=v_1+(n-1)d=1+2(n-1)=2n-1$, do đó $u_n=\\dfrac{1}{v_n}=\\dfrac{1}{2n-1}$.',
        'c) Ta có $u_ku_{k+1}=\\dfrac{1}{(2k-1)(2k+1)}=\\dfrac12\\left(\\dfrac{1}{2k-1}-\\dfrac{1}{2k+1}\\right)$.',
        'Suy ra $S_n=u_1u_2+u_2u_3+\\cdots+u_nu_{n+1}=\\dfrac12\\left[\\left(1-\\dfrac13\\right)+\\left(\\dfrac13-\\dfrac15\\right)+\\cdots+\\left(\\dfrac1{2n-1}-\\dfrac1{2n+1}\\right)\\right]$',
        '$=\\dfrac12\\left(1-\\dfrac{1}{2n+1}\\right)=\\dfrac{n}{2n+1}$.',
        'Vậy $S_n=\\dfrac{n}{2n+1}$.',
      ],
    },
    {
      prompt:
        'Bài 3. (4 điểm) Cho dãy số $(x_n)$ xác định bởi $x_1=2$ và $x_{n+1}=\\dfrac{x_n^2+2}{2x_n}$ với mọi $n\\ge1$.<br>a) Chứng minh $x_n>0$ và $x_n\\ge\\sqrt2$ với mọi $n\\in\\mathbb{N}^*$.<br>b) Chứng minh dãy $(x_n)$ giảm, từ đó suy ra dãy có giới hạn hữu hạn.<br>c) Tìm $\\lim x_n$.',
      points: 4,
      solution: [
        'a) Từ công thức truy hồi $x_{n+1}=\\dfrac{x_n^2+2}{2x_n}=\\dfrac12\\left(x_n+\\dfrac2{x_n}\\right)$, bằng quy nạp dễ thấy $x_n>0$ với mọi $n$ (vì $x_1=2>0$ và nếu $x_n>0$ thì $x_{n+1}>0$).',
        'Áp dụng bất đẳng thức AM–GM cho hai số dương $x_n$ và $\\dfrac{2}{x_n}$: $x_{n+1}=\\dfrac12\\left(x_n+\\dfrac2{x_n}\\right)\\ge \\dfrac12\\cdot 2\\sqrt{x_n\\cdot\\dfrac2{x_n}}=\\sqrt2$, với mọi $n\\ge1$.',
        'Do đó $x_n\\ge\\sqrt2$ với mọi $n\\ge2$; mặt khác $x_1=2>\\sqrt2$. Vậy $x_n\\ge\\sqrt2$ với mọi $n\\in\\mathbb{N}^*$.',
        'b) Xét hiệu $x_{n+1}-x_n=\\dfrac{x_n^2+2}{2x_n}-x_n=\\dfrac{2-x_n^2}{2x_n}$.',
        'Vì $x_n\\ge\\sqrt2$ nên $x_n^2\\ge2$, suy ra $2-x_n^2\\le0$; lại có $x_n>0$ nên $x_{n+1}-x_n\\le0$, tức $(x_n)$ là dãy giảm (không tăng).',
        'Dãy $(x_n)$ giảm và bị chặn dưới bởi $\\sqrt2$ nên theo định lý về dãy đơn điệu bị chặn, $(x_n)$ có giới hạn hữu hạn.',
        'c) Gọi $L=\\lim x_n$ ($L\\ge\\sqrt2>0$). Chuyển qua giới hạn hai vế của hệ thức $x_{n+1}=\\dfrac{x_n^2+2}{2x_n}$ ta được',
        '$L=\\dfrac{L^2+2}{2L} \\Leftrightarrow 2L^2=L^2+2 \\Leftrightarrow L^2=2 \\Leftrightarrow L=\\sqrt2$ (do $L>0$).',
        'Vậy $\\lim x_n=\\sqrt2$.',
      ],
    },
    {
      prompt:
        'Bài 4. (4 điểm) Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA=a\\sqrt2$.<br>a) Tính góc giữa đường thẳng $SC$ và mặt phẳng $(ABCD)$.<br>b) Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$.<br>c) Tính góc giữa mặt phẳng $(SBD)$ và mặt phẳng $(ABCD)$.',
      points: 4,
      solution: [
        'a) Vì $SA\\perp(ABCD)$ nên hình chiếu vuông góc của $S$ lên $(ABCD)$ là $A$, do đó hình chiếu của $SC$ lên $(ABCD)$ là $AC$. Vậy góc giữa $SC$ và $(ABCD)$ là góc $\\widehat{SCA}$.',
        'Trong tam giác vuông $SAC$ (vuông tại $A$): $AC=a\\sqrt2$ (đường chéo hình vuông cạnh $a$), $SA=a\\sqrt2$.',
        '$\\tan\\widehat{SCA}=\\dfrac{SA}{AC}=\\dfrac{a\\sqrt2}{a\\sqrt2}=1 \\Rightarrow \\widehat{SCA}=45^\\circ$.',
        'Vậy góc giữa $SC$ và $(ABCD)$ bằng $45^\\circ$.',
        'b) Gọi $H$ là hình chiếu vuông góc của $A$ lên $BD$. Vì $ABCD$ là hình vuông cạnh $a$ nên $BD=a\\sqrt2$ và khoảng cách từ $A$ đến đường chéo $BD$ là $AH=\\dfrac{AB\\cdot AD}{BD}=\\dfrac{a\\cdot a}{a\\sqrt2}=\\dfrac{a\\sqrt2}{2}$.',
        'Vì $SA\\perp(ABCD)$ nên $SA\\perp BD$; kết hợp $AH\\perp BD$ suy ra $BD\\perp(SAH)$.',
        'Gọi $K$ là hình chiếu của $A$ lên $SH$ (trong mặt phẳng $(SAH)$); vì $BD\\perp(SAH)$ nên $BD\\perp AK$, kết hợp $AK\\perp SH$ suy ra $AK\\perp(SBD)$. Vậy $d(A,(SBD))=AK$.',
        'Áp dụng hệ thức lượng trong tam giác vuông $SAH$ (vuông tại $A$): $\\dfrac{1}{AK^2}=\\dfrac{1}{SA^2}+\\dfrac{1}{AH^2}=\\dfrac{1}{2a^2}+\\dfrac{2}{a^2}=\\dfrac{5}{2a^2}$.',
        'Suy ra $AK^2=\\dfrac{2a^2}{5} \\Rightarrow AK=\\dfrac{a\\sqrt2}{\\sqrt5}=\\dfrac{a\\sqrt{10}}{5}$.',
        'Vậy $d(A,(SBD))=\\dfrac{a\\sqrt{10}}{5}$.',
        'c) Vì $BD\\perp(SAH)$ (chứng minh ở câu b) nên $BD\\perp AH$ và $BD\\perp SH$; do $AH, SH$ cùng vuông góc với giao tuyến $BD$ của hai mặt phẳng $(SBD)$ và $(ABCD)$, góc giữa hai mặt phẳng này chính là góc $\\widehat{SHA}$.',
        'Trong tam giác vuông $SAH$: $\\tan\\widehat{SHA}=\\dfrac{SA}{AH}=\\dfrac{a\\sqrt2}{a\\sqrt2/2}=2$.',
        'Vậy góc giữa $(SBD)$ và $(ABCD)$ bằng $\\arctan 2$ (xấp xỉ $63{,}43^\\circ$).',
      ],
    },
    {
      prompt:
        'Bài 5. (4 điểm) Một hộp chứa $15$ quả cầu đôi một phân biệt gồm $4$ quả màu đỏ, $5$ quả màu xanh và $6$ quả màu vàng. Lấy ngẫu nhiên đồng thời $4$ quả cầu từ hộp.<br>a) Tính xác suất để $4$ quả cầu lấy ra có đủ cả $3$ màu.<br>b) Tính xác suất để trong $4$ quả lấy ra có ít nhất $2$ quả màu đỏ, biết rằng $4$ quả lấy ra chỉ có đúng $2$ màu.<br>c) Gọi $X$ là số quả cầu màu đỏ trong $4$ quả lấy ra. Lập bảng phân bố xác suất của $X$ và tính kỳ vọng $E(X)$.',
      points: 4,
      solution: [
        'Không gian mẫu: chọn ngẫu nhiên $4$ quả từ $15$ quả, số cách là $C_{15}^4=1365$.',
        'a) Vì lấy $4$ quả mà có đủ $3$ màu nên số quả của đúng một màu là $2$, hai màu còn lại mỗi màu $1$ quả (kiểu phân bố $2+1+1$).',
        '— Đỏ $2$, Xanh $1$, Vàng $1$: $C_4^2\\cdot C_5^1\\cdot C_6^1=6\\cdot5\\cdot6=180$.',
        '— Xanh $2$, Đỏ $1$, Vàng $1$: $C_5^2\\cdot C_4^1\\cdot C_6^1=10\\cdot4\\cdot6=240$.',
        '— Vàng $2$, Đỏ $1$, Xanh $1$: $C_6^2\\cdot C_4^1\\cdot C_5^1=15\\cdot4\\cdot5=300$.',
        'Số kết quả thuận lợi: $180+240+300=720$. Vậy $P(\\text{đủ 3 màu})=\\dfrac{720}{1365}=\\dfrac{48}{91}$.',
        'b) Xét biến cố $B$: "$4$ quả lấy ra chỉ có đúng $2$ màu". Số cách chọn $4$ quả chỉ từ $1$ màu: đỏ $C_4^4=1$, xanh $C_5^4=5$, vàng $C_6^4=15$, tổng $21$ cách.',
        'Số cách chọn có đúng $2$ màu: $|B|=1365-720-21=624$.',
        'Vì cần "ít nhất $2$ đỏ" nên chỉ xét các cặp màu có chứa màu đỏ: (Đỏ, Xanh) và (Đỏ, Vàng).',
        '— Cặp (Đỏ, Xanh): gọi $r$ là số quả đỏ ($1\\le r\\le3$ để cả hai màu cùng xuất hiện). $r=2$: $C_4^2C_5^2=6\\cdot10=60$; $r=3$: $C_4^3C_5^1=4\\cdot5=20$. Số thoả "ít nhất 2 đỏ": $60+20=80$.',
        '— Cặp (Đỏ, Vàng): $r=2$: $C_4^2C_6^2=6\\cdot15=90$; $r=3$: $C_4^3C_6^1=4\\cdot6=24$. Số thoả "ít nhất 2 đỏ": $90+24=114$.',
        'Số kết quả thuận lợi cho cả hai điều kiện: $80+114=194$.',
        'Vậy $P(\\text{ít nhất 2 đỏ}\\mid B)=\\dfrac{194}{624}=\\dfrac{97}{312}$.',
        'c) $X$ nhận các giá trị $0,1,2,3,4$ theo phân phối siêu bội: $P(X=k)=\\dfrac{C_4^k\\cdot C_{11}^{4-k}}{C_{15}^4}$ (có $11=5+6$ quả không đỏ).',
        '$P(X=0)=\\dfrac{330}{1365}=\\dfrac{22}{91}$; $P(X=1)=\\dfrac{660}{1365}=\\dfrac{44}{91}$; $P(X=2)=\\dfrac{330}{1365}=\\dfrac{22}{91}$; $P(X=3)=\\dfrac{44}{1365}$; $P(X=4)=\\dfrac{1}{1365}$.',
        'Kiểm tra: $330+660+330+44+1=1365$, tổng xác suất bằng $1$ (hợp lệ).',
        'Kỳ vọng: $E(X)=0\\cdot\\dfrac{330}{1365}+1\\cdot\\dfrac{660}{1365}+2\\cdot\\dfrac{330}{1365}+3\\cdot\\dfrac{44}{1365}+4\\cdot\\dfrac{1}{1365}=\\dfrac{1456}{1365}=\\dfrac{16}{15}$.',
        'Vậy $E(X)=\\dfrac{16}{15}$ (kiểm tra nhanh bằng công thức phân phối siêu bội $E(X)=n\\cdot\\dfrac{K}{N}=4\\cdot\\dfrac{4}{15}=\\dfrac{16}{15}$, khớp kết quả).',
      ],
    },
  ],
}
