// Đề kiểm tra học kì II — Toán 11 (chương trình GDPT 2018).
// Định dạng theo cấu trúc mới của Bộ GD&ĐT áp dụng từ 2025 (Quyết định
// 764/QĐ-BGDĐT): 3 phần — 12 câu TN nhiều phương án (3đ) + 4 câu Đúng/Sai,
// mỗi câu 4 ý (4đ) + 6 câu trả lời ngắn (3đ) = 34 ý hỏi, 10 điểm.
// Thang điểm phần Đúng/Sai theo đúng quy định: 1 ý đúng = 0,1đ; 2 ý = 0,25đ;
// 3 ý = 0,5đ; 4 ý = 1đ (áp dụng chung, xem MockExamRunner.jsx).
// Phạm vi: toàn bộ phần còn lại của học kì II — Đường thẳng và mặt phẳng
// trong không gian, quan hệ song song (vị trí tương đối, hai đường thẳng /
// đường thẳng và mặt phẳng / hai mặt phẳng song song, định lý Thalès trong
// không gian); Quan hệ vuông góc trong không gian (đường thẳng vuông góc mặt
// phẳng, hai mặt phẳng vuông góc, góc, khoảng cách); Thống kê & Xác suất
// (không gian mẫu, biến cố, xác suất cổ điển, quy tắc cộng — quy tắc nhân
// cho biến cố độc lập). Tham khảo phong cách/độ khó tại
// DATA/Toán/Toán 11/3. Đề thi - Kiểm tra/ (18 ĐỀ ÔN TẬP CHƯƠNG 2, CHƯƠNG 3,
// HK2-11, 20 ĐỀ TỔ HỢP - XÁC SUẤT — nội dung tự soạn mới, bám sát chương
// trình GDPT 2018, không sao chép nguyên văn).
export const MOCK_EXAM_11_HET_KY_2 = {
  title: 'Đề kiểm tra học kì II — Toán 11',
  kind: 'tracnghiem-3phan',
  duration: 90,
  variants: [
    {
      matrix: [
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', nb: 3, th: 4, vd: 3, vdc: 0 },
    { chapter: 'Quan hệ vuông góc trong không gian', nb: 4, th: 4, vd: 5, vdc: 1 },
    { chapter: 'Thống kê & Xác suất', nb: 5, th: 2, vd: 2, vdc: 1 },
  ],
  specification: [
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Định nghĩa hai đường thẳng song song trong không gian', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 1' },
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Điều kiện đường thẳng song song mặt phẳng', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 2' },
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Tính chất hai mặt phẳng song song', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 3' },
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Định lý Thalès trong không gian', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 4' },
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Đường thẳng song song mặt phẳng, hai mặt phẳng song song trong hình chóp đáy hình bình hành', level: 'Thông hiểu — Vận dụng', part: 'II', questionNumbers: 'Câu 13' },
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Giao tuyến của mặt phẳng qua một điểm và song song với một cạnh cắt cạnh bên hình chóp (đường trung bình)', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 17' },
    { chapter: 'Đường thẳng và mặt phẳng trong không gian, quan hệ song song', content: 'Mặt phẳng song song với đáy hình chóp cắt các cạnh bên theo định lý Thalès không gian', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 18' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Điều kiện đường thẳng vuông góc mặt phẳng', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 5' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Góc giữa đường thẳng và mặt phẳng', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 6' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Điều kiện hai mặt phẳng vuông góc', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 7' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Suy luận các quan hệ vuông góc trong hình chóp có cạnh bên vuông góc đáy', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 8' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Chứng minh đường thẳng vuông góc mặt phẳng, tính độ dài cạnh, góc giữa đường thẳng và mặt phẳng, khoảng cách điểm—mặt phẳng trong hình chóp tam giác', level: 'Thông hiểu — Vận dụng', part: 'II', questionNumbers: 'Câu 14' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Hình chóp tứ giác đều: đường cao, góc giữa cạnh bên và đáy, hai mặt phẳng vuông góc', level: 'Nhận biết — Vận dụng', part: 'II', questionNumbers: 'Câu 15' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Đường chéo hình hộp chữ nhật', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 19' },
    { chapter: 'Quan hệ vuông góc trong không gian', content: 'Khoảng cách từ một điểm đến một mặt phẳng bằng phương pháp thể tích', level: 'Vận dụng cao', part: 'III', questionNumbers: 'Câu 20' },
    { chapter: 'Thống kê & Xác suất', content: 'Không gian mẫu của phép thử', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 9' },
    { chapter: 'Thống kê & Xác suất', content: 'Công thức nhân xác suất cho hai biến cố độc lập', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 10' },
    { chapter: 'Thống kê & Xác suất', content: 'Công thức cộng xác suất cho hai biến cố xung khắc', level: 'Nhận biết', part: 'I', questionNumbers: 'Câu 11' },
    { chapter: 'Thống kê & Xác suất', content: 'Xác suất cổ điển của một biến cố', level: 'Thông hiểu', part: 'I', questionNumbers: 'Câu 12' },
    { chapter: 'Thống kê & Xác suất', content: 'Xác suất của biến cố độc lập, quy tắc cộng và quy tắc nhân trong một phép thử kép', level: 'Nhận biết — Vận dụng', part: 'II', questionNumbers: 'Câu 16' },
    { chapter: 'Thống kê & Xác suất', content: 'Xác suất cổ điển: đếm số kết quả thuận lợi bằng quy tắc nhân, rút gọn phân số', level: 'Vận dụng', part: 'III', questionNumbers: 'Câu 21' },
    { chapter: 'Thống kê & Xác suất', content: 'Quy tắc nhân cho biến cố độc lập trong bài toán thực tế (biến cố đối)', level: 'Vận dụng cao', part: 'III', questionNumbers: 'Câu 22' },
  ],
  partI: [
    {
      question: 'Trong không gian, hai đường thẳng được gọi là song song nếu chúng',
      options: [
        'Không có điểm chung',
        'Cùng nằm trong một mặt phẳng và không có điểm chung',
        'Chéo nhau',
        'Cắt nhau tại một điểm',
      ],
      correctIndex: 1,
      solution: 'Hai đường thẳng song song là hai đường thẳng cùng nằm trong một mặt phẳng và không có điểm chung. (Hai đường thẳng không có điểm chung nhưng không đồng phẳng thì chéo nhau, không phải song song.)',
    },
    {
      question: 'Cho đường thẳng $d$ không nằm trong mặt phẳng $(P)$. Điều kiện để $d\\parallel(P)$ là',
      options: [
        '$d$ song song với một đường thẳng nằm trong $(P)$',
        '$d$ vuông góc với một đường thẳng nằm trong $(P)$',
        '$d$ cắt $(P)$',
        '$d$ nằm trong $(P)$',
      ],
      correctIndex: 0,
      solution: 'Nếu $d\\not\\subset(P)$ và $d$ song song với một đường thẳng $d\'\\subset(P)$ thì $d\\parallel(P)$.',
    },
    {
      question: 'Cho hai mặt phẳng song song $(P)$ và $(Q)$. Mệnh đề nào sau đây đúng?',
      options: [
        'Mọi đường thẳng nằm trong $(P)$ đều song song với $(Q)$',
        'Mọi đường thẳng nằm trong $(P)$ đều cắt $(Q)$',
        '$(P)$ và $(Q)$ có duy nhất một điểm chung',
        'Mọi đường thẳng nằm trong $(P)$ đều vuông góc với $(Q)$',
      ],
      correctIndex: 0,
      solution: 'Vì $(P)\\parallel(Q)$ nên $(P)$ và $(Q)$ không có điểm chung, do đó mọi đường thẳng nằm trong $(P)$ đều không cắt $(Q)$, tức song song với $(Q)$.',
    },
    {
      question: 'Cho ba mặt phẳng song song đôi một cắt hai đường thẳng chéo nhau lần lượt tại $A,B,C$ và $A\',B\',C\'$ (định lý Thalès trong không gian). Khi đó',
      options: [
        '$\\dfrac{AB}{BC}=\\dfrac{A\'B\'}{B\'C\'}$',
        '$AB=A\'B\'$',
        '$\\dfrac{AB}{A\'B\'}=\\dfrac{BC}{A\'C\'}$',
        'Không có mối liên hệ nào giữa các đoạn thẳng đó',
      ],
      correctIndex: 0,
      solution: 'Định lý Thalès trong không gian: ba mặt phẳng song song đôi một chắn trên hai cát tuyến các đoạn thẳng tương ứng tỉ lệ, tức $\\dfrac{AB}{BC}=\\dfrac{A\'B\'}{B\'C\'}$.',
    },
    {
      question: 'Đường thẳng $d$ vuông góc với mặt phẳng $(P)$ khi',
      options: [
        '$d$ vuông góc với một đường thẳng bất kỳ nằm trong $(P)$',
        '$d$ vuông góc với hai đường thẳng cắt nhau cùng nằm trong $(P)$',
        '$d$ song song với $(P)$',
        '$d$ vuông góc với một đường thẳng nằm trong $(P)$',
      ],
      correctIndex: 1,
      solution: 'Theo định lý ba đường vuông góc (dấu hiệu nhận biết): $d\\perp(P)$ khi $d$ vuông góc với hai đường thẳng cắt nhau cùng nằm trong $(P)$.',
    },
    {
      question: 'Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ (khi $d$ không vuông góc với $(P)$) là góc giữa $d$ và',
      options: [
        'Hình chiếu vuông góc của $d$ trên $(P)$',
        'Một đường thẳng bất kỳ nằm trong $(P)$',
        'Giao tuyến của $(P)$ với mặt phẳng chứa $d$',
        'Đường thẳng vuông góc với $(P)$',
      ],
      correctIndex: 0,
      solution: 'Theo định nghĩa, góc giữa $d$ và $(P)$ là góc giữa $d$ và hình chiếu vuông góc $d\'$ của $d$ trên $(P)$.',
    },
    {
      question: 'Hai mặt phẳng vuông góc với nhau khi',
      options: [
        'Mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia',
        'Hai mặt phẳng song song',
        'Giao tuyến của hai mặt phẳng bằng rỗng',
        'Mặt phẳng này song song với một đường thẳng vuông góc với mặt phẳng kia',
      ],
      correctIndex: 0,
      solution: 'Theo định nghĩa/dấu hiệu nhận biết, $(P)\\perp(Q)$ khi $(P)$ chứa một đường thẳng vuông góc với $(Q)$.',
    },
    {
      question: 'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông và $SA\\perp(ABCD)$. Mệnh đề nào sau đây SAI?',
      options: ['$SA\\perp BC$', '$CD\\perp SB$', '$BD\\perp SC$', '$AB\\perp SD$'],
      correctIndex: 1,
      solution: 'Vì $SA\\perp(ABCD)$ nên $SA$ vuông góc với mọi đường thẳng trong đáy. $BC\\perp AB$ và $BC\\perp SA$ nên $BC\\perp(SAB)\\Rightarrow SA\\perp BC$ (đúng). $BD\\perp AC$ (đường chéo hình vuông) và $BD\\perp SA$ nên $BD\\perp(SAC)\\Rightarrow BD\\perp SC$ (đúng). $AB\\perp AD$ và $AB\\perp SA$ nên $AB\\perp(SAD)\\Rightarrow AB\\perp SD$ (đúng). Riêng $CD$ chỉ vuông góc với mặt phẳng $(SAD)$ (vì $CD\\perp AD,\\ CD\\perp SA$), không có cơ sở để suy ra $CD\\perp SB$ — mệnh đề này SAI.',
    },
    {
      question: 'Gieo một con xúc xắc cân đối, đồng chất hai lần liên tiếp. Không gian mẫu của phép thử có số phần tử là',
      options: ['$6$', '$12$', '$72$', '$36$'],
      correctIndex: 3,
      solution: 'Mỗi lần gieo có $6$ kết quả có thể, hai lần gieo độc lập nên không gian mẫu có $6\\times6=36$ phần tử.',
    },
    {
      question: 'Cho hai biến cố $A,B$ độc lập. Công thức nào sau đây đúng?',
      options: [
        '$P(AB)=P(A)+P(B)$',
        '$P(AB)=P(A)\\cdot P(B)$',
        '$P(A\\cup B)=P(A)\\cdot P(B)$',
        '$P(AB)=P(A)-P(B)$',
      ],
      correctIndex: 1,
      solution: 'Với hai biến cố độc lập, quy tắc nhân xác suất cho $P(AB)=P(A)\\cdot P(B)$.',
    },
    {
      question: 'Cho hai biến cố xung khắc $A$ và $B$. Công thức tính $P(A\\cup B)$ là',
      options: ['$P(A)+P(B)$', '$P(A)\\cdot P(B)$', '$P(A)+P(B)-P(A)P(B)$', '$P(A)-P(B)$'],
      correctIndex: 0,
      solution: 'Với hai biến cố xung khắc ($A\\cap B=\\varnothing$), quy tắc cộng xác suất cho $P(A\\cup B)=P(A)+P(B)$.',
    },
    {
      question: 'Một hộp có 5 viên bi đỏ và 3 viên bi xanh (kích thước, khối lượng như nhau). Lấy ngẫu nhiên 1 viên bi. Xác suất lấy được bi đỏ là',
      options: ['$\\dfrac{3}{8}$', '$\\dfrac{5}{8}$', '$\\dfrac{5}{3}$', '$\\dfrac{1}{8}$'],
      correctIndex: 1,
      solution: 'Không gian mẫu có $5+3=8$ kết quả đồng khả năng, biến cố thuận lợi có $5$ kết quả, xác suất bằng $\\dfrac{5}{8}$.',
    },
  ],
  partII: [
    {
      stem: 'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M,N$ lần lượt là trung điểm của $SA,SB$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $MN\\parallel AB$.', isTrue: true },
        { text: 'b) $MN\\parallel(SCD)$.', isTrue: true },
        { text: 'c) $(SAB)\\parallel(SCD)$.', isTrue: false },
        { text: 'd) $CD\\parallel(SAB)$.', isTrue: true },
      ],
      solution:
        'a) Đúng: $M,N$ là trung điểm $SA,SB$ nên $MN$ là đường trung bình của $\\triangle SAB$, suy ra $MN\\parallel AB$.<br>b) Đúng: $MN\\parallel AB\\parallel CD$ (do $ABCD$ là hình bình hành) và $CD\\subset(SCD)$, mà $MN\\not\\subset(SCD)$ nên $MN\\parallel(SCD)$.<br>c) Sai: hai mặt phẳng $(SAB)$ và $(SCD)$ cùng chứa điểm $S$ nên chúng cắt nhau theo một giao tuyến qua $S$ (song song với $AB$ và $CD$), do đó không thể song song.<br>d) Đúng: $CD\\parallel AB$, $AB\\subset(SAB)$ và $CD\\not\\subset(SAB)$ nên $CD\\parallel(SAB)$.',
    },
    {
      stem: 'Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $AB=3$, $BC=4$, cạnh bên $SA\\perp(ABC)$ và $SA=4$. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $BC\\perp(SAB)$.', isTrue: true },
        { text: 'b) Góc giữa $SC$ và mặt phẳng $(ABC)$ bằng $45^\\circ$.', isTrue: false },
        { text: 'c) $SB=5$.', isTrue: true },
        { text: 'd) Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng $\\dfrac{12}{5}$.', isTrue: true },
      ],
      solution:
        'a) Đúng: $BC\\perp AB$ (giả thiết vuông tại $B$) và $BC\\perp SA$ (do $SA\\perp(ABC)$) nên $BC\\perp(SAB)$.<br>b) Sai: vì $SA\\perp(ABC)$ nên hình chiếu của $C$ trên... hình chiếu của $SC$ trên $(ABC)$ là $AC$, với $AC=\\sqrt{AB^2+BC^2}=\\sqrt{9+16}=5$; góc giữa $SC$ và $(ABC)$ là $\\widehat{SCA}$ với $\\tan\\widehat{SCA}=\\dfrac{SA}{AC}=\\dfrac{4}{5}=0{,}8\\ne1$, nên góc này không bằng $45^\\circ$.<br>c) Đúng: tam giác $SAB$ vuông tại $A$ (vì $SA\\perp(ABC)\\Rightarrow SA\\perp AB$) nên $SB=\\sqrt{SA^2+AB^2}=\\sqrt{16+9}=5$.<br>d) Đúng: $V_{S.ABC}=\\dfrac13\\cdot S_{ABC}\\cdot SA=\\dfrac13\\cdot6\\cdot4=8$. Vì $BC\\perp(SAB)$ nên $BC\\perp SB$, tam giác $SBC$ vuông tại $B$ với $SB=5,\\ BC=4$, diện tích $S_{SBC}=\\dfrac12\\cdot5\\cdot4=10$. Từ $V=\\dfrac13\\cdot S_{SBC}\\cdot d(A,(SBC))$ suy ra $d(A,(SBC))=\\dfrac{3\\cdot8}{10}=\\dfrac{12}{5}$.',
    },
    {
      stem: 'Cho hình chóp tứ giác đều $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a=2$, các cạnh bên $SA=SB=SC=SD=\\sqrt6$. Gọi $O$ là tâm của đáy. Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $SO\\perp(ABCD)$.', isTrue: true },
        { text: 'b) Chiều cao của hình chóp bằng $2$.', isTrue: true },
        { text: 'c) Góc giữa cạnh bên $SC$ và mặt đáy bằng $45^\\circ$.', isTrue: false },
        { text: 'd) $(SAC)\\perp(SBD)$.', isTrue: true },
      ],
      solution:
        'a) Đúng: hình chóp đều nên hình chiếu của đỉnh $S$ trùng với tâm $O$ của đáy, tức $SO\\perp(ABCD)$.<br>b) Đúng: $AC=a\\sqrt2=2\\sqrt2\\Rightarrow OC=\\sqrt2$. Trong tam giác vuông $SOC$: $SO=\\sqrt{SC^2-OC^2}=\\sqrt{6-2}=2$.<br>c) Sai: góc giữa $SC$ và đáy là $\\widehat{SCO}$ với $\\tan\\widehat{SCO}=\\dfrac{SO}{OC}=\\dfrac{2}{\\sqrt2}=\\sqrt2\\ne1$, nên góc này không bằng $45^\\circ$ (thực tế xấp xỉ $54{,}7^\\circ$).<br>d) Đúng: $BD\\perp AC$ (đường chéo hình vuông) và $BD\\perp SO$ (do $SO\\perp$ đáy) nên $BD\\perp(SAC)$; mà $BD\\subset(SBD)$ nên $(SBD)\\perp(SAC)$.',
    },
    {
      stem: 'Gieo đồng thời một con xúc xắc cân đối và một đồng xu cân đối. Gọi $A$ là biến cố "xúc xắc xuất hiện mặt 6 chấm", $B$ là biến cố "đồng xu xuất hiện mặt ngửa". Xét tính đúng sai của các mệnh đề sau:',
      statements: [
        { text: 'a) $P(A)=\\dfrac16$.', isTrue: true },
        { text: 'b) $A$ và $B$ là hai biến cố độc lập.', isTrue: true },
        { text: 'c) $P(A\\cap B)=\\dfrac{1}{12}$.', isTrue: true },
        { text: 'd) $P(A\\cup B)=\\dfrac{1}{12}$.', isTrue: false },
      ],
      solution:
        'a) Đúng: xúc xắc có $6$ mặt đồng khả năng, $P(A)=\\dfrac16$.<br>b) Đúng: kết quả của xúc xắc không ảnh hưởng đến kết quả của đồng xu (hai vật thể khác nhau) nên $A,B$ độc lập.<br>c) Đúng: do độc lập, $P(A\\cap B)=P(A)\\cdot P(B)=\\dfrac16\\cdot\\dfrac12=\\dfrac{1}{12}$.<br>d) Sai: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)=\\dfrac16+\\dfrac12-\\dfrac{1}{12}=\\dfrac{2}{12}+\\dfrac{6}{12}-\\dfrac{1}{12}=\\dfrac{7}{12}\\ne\\dfrac{1}{12}$.',
    },
  ],
  partIII: [
    {
      question: 'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là trung điểm của cạnh $SC$. Mặt phẳng $(ABM)$ cắt cạnh $SD$ tại điểm $N$. Tính tỉ số $\\dfrac{SD}{SN}$.',
      answer: '2',
      solution: 'Vì $AB\\parallel CD$, $AB\\subset(ABM)$ và $CD\\subset(SCD)$ nên giao tuyến của $(ABM)$ và $(SCD)$ là đường thẳng qua $M$ song song với $CD$; đường thẳng này cắt $SD$ tại $N$. Trong $\\triangle SCD$, $M$ là trung điểm $SC$ và $MN\\parallel CD$ nên theo tính chất đường trung bình, $N$ là trung điểm $SD$. Vậy $SD=2SN$, tức $\\dfrac{SD}{SN}=2$.',
    },
    {
      question: 'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành với $AB=6,\\ BC=8$. Gọi $M$ là trung điểm cạnh $SA$. Mặt phẳng đi qua $M$ và song song với mặt đáy $(ABCD)$ cắt các cạnh $SB,SC,SD$ lần lượt tại $N,P,Q$. Tính chu vi của tứ giác $MNPQ$.',
      answer: '14',
      solution: 'Vì $SM=\\dfrac12SA$, theo định lý Thalès trong không gian, mặt phẳng song song với đáy cắt các cạnh bên theo cùng tỉ số: $\\dfrac{SN}{SB}=\\dfrac{SP}{SC}=\\dfrac{SQ}{SD}=\\dfrac12$. Do đó $MNPQ$ là ảnh của $ABCD$ qua phép vị tự tâm $S$ tỉ số $\\dfrac12$, nên $MNPQ$ là hình bình hành với các cạnh bằng nửa cạnh tương ứng của $ABCD$: $MN=\\dfrac{AB}{2}=3,\\ NP=\\dfrac{BC}{2}=4$. Chu vi $MNPQ=2(3+4)=14$.',
    },
    {
      question: 'Cho hình hộp chữ nhật $ABCD.A\'B\'C\'D\'$ có $AB=3,\\ AD=4,\\ AA\'=12$. Tính độ dài đường chéo $AC\'$.',
      answer: '13',
      solution: 'Vì $AA\'\\perp(ABCD)$, ta có $AC\'^2=AC^2+CC\'^2=(AB^2+AD^2)+AA\'^2=3^2+4^2+12^2=9+16+144=169$. Vậy $AC\'=\\sqrt{169}=13$.',
    },
    {
      question: 'Cho hình chóp $S.ABC$ có $SA\\perp(ABC)$, tam giác $ABC$ vuông tại $B$ với $AB=BC=6$ và $SA=6$. Biết khoảng cách từ điểm $B$ đến mặt phẳng $(SAC)$ bằng $a\\sqrt2$. Tìm $a$.',
      answer: '3',
      solution: 'Ta có $AC=\\sqrt{AB^2+BC^2}=\\sqrt{72}=6\\sqrt2$. Thể tích $V_{S.ABC}=\\dfrac13\\cdot S_{ABC}\\cdot SA=\\dfrac13\\cdot\\left(\\dfrac12\\cdot6\\cdot6\\right)\\cdot6=36$. Vì $SA\\perp(ABC)$ nên $SA\\perp AC$, tam giác $SAC$ vuông tại $A$ với diện tích $S_{SAC}=\\dfrac12\\cdot SA\\cdot AC=\\dfrac12\\cdot6\\cdot6\\sqrt2=18\\sqrt2$. Từ $V=\\dfrac13\\cdot S_{SAC}\\cdot d(B,(SAC))$ suy ra $d(B,(SAC))=\\dfrac{3\\cdot36}{18\\sqrt2}=\\dfrac{6}{\\sqrt2}=3\\sqrt2$. Vậy $a=3$.',
    },
    {
      question: 'Một hộp có 4 viên bi đỏ, 5 viên bi xanh và 3 viên bi vàng (kích thước, khối lượng như nhau). Lấy ngẫu nhiên đồng thời 3 viên bi. Biết xác suất để 3 viên bi lấy được có đủ cả ba màu bằng $\\dfrac{a}{b}$ (phân số tối giản). Tính $a+b$.',
      answer: '14',
      solution: 'Không gian mẫu: $C_{12}^3=220$. Số cách chọn đủ ba màu (1 đỏ, 1 xanh, 1 vàng): $4\\cdot5\\cdot3=60$. Xác suất $=\\dfrac{60}{220}=\\dfrac{3}{11}$ (đã tối giản vì $\\gcd(3,11)=1$). Vậy $a=3,\\ b=11$, suy ra $a+b=14$.',
    },
    {
      question: 'Xác suất để một xạ thủ bắn trúng bia trong một lần bắn là $0{,}6$. Xạ thủ bắn 2 phát súng một cách độc lập. Biết xác suất để xạ thủ bắn trúng bia ít nhất 1 lần trong 2 phát bằng $p$. Tính $100p$.',
      answer: '84',
      solution: 'Gọi $A_1,A_2$ là biến cố trúng bia ở phát thứ nhất, thứ hai; $A_1,A_2$ độc lập, $P(A_1)=P(A_2)=0{,}6$. Xác suất trượt cả hai phát (biến cố đối, hai biến cố trượt cũng độc lập) là $(1-0{,}6)(1-0{,}6)=0{,}4\\cdot0{,}4=0{,}16$. Vậy $p=1-0{,}16=0{,}84$, suy ra $100p=84$.',
    },
      ],
    },
  ],
}
