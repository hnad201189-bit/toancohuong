import { EXAM_DEFAULT } from './examDefault.mjs'

export const HINH_HOC_KHONG_GIAN = {
  'duong-thang-mat-phang': {
    title: 'Đường thẳng và mặt phẳng — quan hệ song song',
    theory: {
      cards: [
        {
          title: 'Các tính chất thừa nhận',
          formulas: ["(P)\\cap(Q)=d\\ (\\text{nếu có điểm chung})"],
          note: 'TC1: có duy nhất 1 đường thẳng qua 2 điểm phân biệt. TC2: có duy nhất 1 mặt phẳng qua 3 điểm không thẳng hàng. TC4: hai mp phân biệt có điểm chung thì chung nhau đúng 1 đường thẳng (giao tuyến). Ba cách xác định mặt phẳng: qua 3 điểm không thẳng hàng (ABC); qua 1 đường thẳng và 1 điểm ngoài đường đó (A,d); qua 2 đường thẳng cắt nhau (a,b).',
        },
        {
          title: 'Đường thẳng song song với mặt phẳng',
          formulas: ["d\\parallel(P) \\Leftrightarrow d\\not\\subset(P),\\ \\exists a\\subset(P): d\\parallel a"],
          note: 'Mẹo: để chứng minh d//(P), chỉ cần tìm 1 đường thẳng a nằm trong (P) sao cho d//a, và d không nằm trong (P). Tính chất 2: nếu a//(P) và mp(Q) chứa a cắt (P) theo giao tuyến b thì b//a.',
        },
        {
          title: 'Hai mặt phẳng song song',
          formulas: ["(P)\\parallel(Q) \\Leftrightarrow \\begin{cases}a,b\\subset(P),\\ a\\cap b=\\{I\\}\\\\ a\\parallel(Q),\\ b\\parallel(Q)\\end{cases}"],
          note: 'Mẹo: chỉ cần 2 đường thẳng cắt nhau trong (P) cùng song song với (Q) là đủ để kết luận (P)//(Q). Tính chất 3: nếu (P)//(Q) thì mp nào cắt (P) cũng cắt (Q), và 2 giao tuyến song song nhau.',
        },
        {
          title: 'Định lý Thalès trong không gian',
          formulas: ["\\dfrac{AB}{A'B'}=\\dfrac{BC}{B'C'}=\\dfrac{AC}{A'C'}"],
          note: 'Ba mặt phẳng đôi một song song chắn trên hai cát tuyến các đoạn thẳng tương ứng tỉ lệ. Áp dụng: hình lăng trụ có các mặt bên là hình bình hành, các cạnh bên song song và bằng nhau; hình hộp là lăng trụ tứ giác có 2 đáy là hình bình hành.',
        },
      ],
    },
    video: { caption: '00:00 / 13:20 — duong_thang_mat_phang_baigiang.mp4' },
    quiz: [
      {
        question: 'Hai đường thẳng phân biệt không cắt nhau và không song song thì gọi là?',
        options: ['Trùng nhau', 'Chéo nhau', 'Đồng phẳng', 'Vuông góc'],
        correctIndex: 1,
      },
      {
        question: 'Điều kiện để d // (P) là?',
        options: [
          'd cắt (P)',
          'd nằm trong (P)',
          'd không nằm trong (P) và song song với một đường thẳng thuộc (P)',
          'd vuông góc (P)',
        ],
        correctIndex: 2,
      },
      {
        question: 'Hai mặt phẳng phân biệt có một điểm chung thì?',
        options: ['Song song nhau', 'Trùng nhau', 'Cắt nhau theo một đường thẳng', 'Không có điểm chung nào khác'],
        correctIndex: 2,
      },
      {
        question: 'Nếu (P) // (Q) và mặt phẳng (R) cắt (P) thì (R) có cắt (Q) không?',
        options: ['Không bao giờ', 'Có, và hai giao tuyến song song nhau', 'Có, và hai giao tuyến vuông góc', 'Không xác định'],
        correctIndex: 1,
      },
      {
        question: '(P) chứa a, (Q) chứa b, a // b, (P) cắt (Q) theo giao tuyến d. Kết luận nào đúng?',
        options: ['d cắt a', 'd // a và d // b', 'd vuông góc a', 'd trùng a'],
        correctIndex: 1,
      },
      {
        question: 'Qua một điểm nằm ngoài một mặt phẳng cho trước, có bao nhiêu mặt phẳng song song với mặt phẳng đó?',
        options: ['Không có', 'Duy nhất một', 'Hai', 'Vô số'],
        correctIndex: 1,
      },
      {
        question: 'Cho hai mặt phẳng song song (α), (β), và đường thẳng a // (α). Có mấy vị trí tương đối của a và (β)?',
        options: ['1', '2', '3', '4'],
        correctIndex: 1,
      },
      {
        question: 'Hai điểm M, N lần lượt thay đổi trên hai mặt phẳng song song (P), (Q). Gọi I là trung điểm MN. Tập hợp các điểm I là?',
        options: [
          'Một đường thẳng song song và cách đều (P), (Q)',
          'Một mặt phẳng song song và cách đều (P), (Q)',
          'Một mặt phẳng cắt (P)',
          'Một đường thẳng cắt (P)',
        ],
        correctIndex: 1,
      },
      {
        question: 'Cho hai mặt phẳng (P), (Q) cắt nhau theo giao tuyến d. Hai đường thẳng p, q lần lượt nằm trong (P), (Q). Mệnh đề nào đúng?',
        options: ['p và q luôn cắt nhau', 'p và q luôn chéo nhau', 'p và q luôn song song', 'Cả ba mệnh đề trên đều sai'],
        correctIndex: 3,
      },
    ],
    essays: [
      {
        prompt:
          'Bài 1. Cho hình chóp S.ABCD, đáy ABCD là hình bình hành. Chứng minh AB // mặt phẳng (SCD).',
        solution: [
          'Vì ABCD là hình bình hành nên $AB \\parallel CD$.',
          '$CD\\subset(SCD)$, mà $AB\\not\\subset(SCD)$, vậy $AB\\parallel(SCD)$.',
        ],
      },
      {
        prompt:
          'Bài 2. Cho hình chóp S.ABCD, đáy ABCD là tứ giác lồi có các cặp cạnh đối không song song. Tìm giao tuyến của (SAC) và (SBD); của (SAB) và (SCD).',
        solution: [
          'Gọi $O=AC\\cap BD$ (hai đường chéo của tứ giác lồi luôn cắt nhau). Ta có $S,O$ là 2 điểm chung của $(SAC)$ và $(SBD)$, vậy giao tuyến là $SO$.',
          'Gọi $I=AB\\cap CD$ (tồn tại vì AB, CD không song song). Ta có $S,I$ là 2 điểm chung của $(SAB)$ và $(SCD)$, vậy giao tuyến là $SI$.',
        ],
      },
      {
        prompt: 'Bài 3. Cho tứ diện ABCD. Gọi M là điểm trên cạnh AB, N là điểm trên cạnh CD. Tìm giao tuyến của (ABN) và (CDM).',
        solution: [
          '$M\\in AB\\subset(ABN)$ và hiển nhiên $M\\in(CDM)$, vậy M là điểm chung của 2 mặt phẳng.',
          '$N\\in CD\\subset(CDM)$ và hiển nhiên $N\\in(ABN)$, vậy N cũng là điểm chung.',
          'Vậy giao tuyến của $(ABN)$ và $(CDM)$ là đường thẳng $MN$.',
        ],
      },
      {
        prompt:
          'Bài 4. Cho tứ diện ABCD. Gọi M, N lần lượt là trọng tâm của các tam giác ABC và BCD. Chứng minh MN // (ABD) và MN // (ACD).',
        solution: [
          'Gọi E là trung điểm BC. Vì M là trọng tâm $\\triangle ABC$ nên $M\\in AE$ với $\\dfrac{EM}{EA}=\\dfrac13$.',
          'Vì N là trọng tâm $\\triangle BCD$ nên $N\\in DE$ với $\\dfrac{EN}{ED}=\\dfrac13$.',
          'Trong tam giác EAD: $\\dfrac{EM}{EA}=\\dfrac{EN}{ED}=\\dfrac13 \\Rightarrow MN\\parallel AD$ (định lí Thalès đảo).',
          '$AD\\subset(ABD)$ và $AD\\subset(ACD)$, mà $MN\\not\\subset$ hai mặt phẳng này, vậy $MN\\parallel(ABD)$ và $MN\\parallel(ACD)$.',
        ],
      },
      {
        prompt:
          'Bài 5. Cho tứ diện ABCD. Gọi M là điểm bất kì trên cạnh BC. Mặt phẳng (α) qua M, song song với AB và CD, cắt BD, AD, AC lần lượt tại N, P, Q. Chứng minh MNPQ là hình bình hành.',
        solution: [
          '$(\\alpha)$ và $(ABC)$ có điểm chung M, mà $(\\alpha)\\parallel AB$, $AB\\subset(ABC)$ nên giao tuyến qua M song song AB, chính là $MQ$. Vậy $MQ\\parallel AB$.',
          'Tương tự, $(\\alpha)\\cap(ABD)$ qua N song song AB (vì $(\\alpha)\\parallel AB$), chính là $NP$. Vậy $NP\\parallel AB$, suy ra $MQ\\parallel NP$.',
          'Lập luận tương tự với $(\\alpha)\\parallel CD$: $(\\alpha)\\cap(ACD)=QP\\parallel CD$ và $(\\alpha)\\cap(BCD)=MN\\parallel CD$, suy ra $MN\\parallel QP$.',
          'Tứ giác MNPQ có $MQ\\parallel NP$ và $MN\\parallel QP$, vậy MNPQ là hình bình hành.',
        ],
      },
      {
        prompt:
          'Bài 6. Cho hình chóp S.ABCD, đáy ABCD là hình bình hành tâm O. Gọi M, N lần lượt là trung điểm SA, SD. Chứng minh MN // (SBC), SB // (OMN), SC // (OMN).',
        solution: [
          'MN là đường trung bình của $\\triangle SAD$ nên $MN\\parallel AD$. Mà $AD\\parallel BC$ (ABCD hbh) nên $MN\\parallel BC$. $BC\\subset(SBC)$, $MN\\not\\subset(SBC)$, vậy $MN\\parallel(SBC)$.',
          'Trong $\\triangle SAC$: O là trung điểm AC, M là trung điểm SA, nên OM là đường trung bình $\\Rightarrow OM\\parallel SC$. $OM\\subset(OMN)$, vậy $SC\\parallel(OMN)$.',
          'Trong $\\triangle SBD$: O là trung điểm BD, N là trung điểm SD, nên ON là đường trung bình $\\Rightarrow ON\\parallel SB$. $ON\\subset(OMN)$, vậy $SB\\parallel(OMN)$.',
        ],
      },
      {
        prompt:
          'Bài 7. Cho hình chóp S.ABCD, đáy ABCD là hình thang với AD // BC, AD = 2BC. Gọi E, F, I lần lượt là trung điểm của SA, AD, SD. Chứng minh (EFB) // (SCD).',
        solution: [
          'EF là đường trung bình của $\\triangle SAD$ (E trung điểm SA, I trung điểm SD) $\\Rightarrow EI\\parallel SD$; xét trong $(EFB)$ ta dùng $EF\\parallel SD$ vì F, I cùng thuộc AD, SD tương ứng — cụ thể EF nối 2 trung điểm SA và AD nên $EF\\parallel SD$.',
          'F là trung điểm AD nên $FD=\\dfrac12 AD=BC$; mà $FD\\parallel BC$ (vì AD // BC), suy ra tứ giác FBCD là hình bình hành $\\Rightarrow FB\\parallel DC$.',
          '$(EFB)$ chứa 2 đường thẳng cắt nhau EF, FB lần lượt song song với 2 đường thẳng cắt nhau SD, DC của $(SCD)$. Vậy $(EFB)\\parallel(SCD)$.',
        ],
      },
      {
        prompt: 'Bài 8. Cho hình lăng trụ ABC.A\'B\'C\'. Chứng minh (ABC) // (A\'B\'C\').',
        solution: [
          'Do các mặt bên là hình bình hành nên $AB\\parallel A\'B\'$ và $AC\\parallel A\'C\'$.',
          '$AB, AC\\subset(ABC)$, cắt nhau tại A, và cùng song song $(A\'B\'C\')$.',
          'Vậy $(ABC)\\parallel(A\'B\'C\')$.',
        ],
      },
    ],
    flashcards: [
      { front: 'Hai đường thẳng chéo nhau', back: '$a\\cap b=\\varnothing$, a và b không đồng phẳng' },
      { front: 'Điều kiện d song song (P)', back: '$d\\not\\subset(P),\\ \\exists a\\subset(P): d\\parallel a$' },
      {
        front: 'Điều kiện hai mặt phẳng song song',
        back: '$a,b\\subset(P),\\ a\\cap b\\ne\\varnothing,\\ a\\parallel(Q),\\ b\\parallel(Q) \\Rightarrow (P)\\parallel(Q)$',
      },
      { front: 'Định lý giao tuyến với hai đường song song', back: '$a\\parallel b,\\ a\\subset(P),\\ b\\subset(Q) \\Rightarrow (P)\\cap(Q)\\parallel a$' },
      { front: 'Đường trung bình tam giác', back: '$MN\\parallel BC,\\ MN=\\dfrac12 BC$' },
      { front: 'Định lý Thalès trong không gian', back: 'Ba mp song song chắn trên 2 cát tuyến các đoạn tỉ lệ: $\\dfrac{AB}{A\'B\'}=\\dfrac{BC}{B\'C\'}$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'quan-he-vuong-goc': {
    title: 'Quan hệ vuông góc trong không gian',
    theory: {
      cards: [
        {
          title: 'Đường thẳng vuông góc với mặt phẳng',
          formulas: ['d\\perp(P) \\Leftrightarrow d\\perp a,\\ d\\perp b\\ \\ (a,b\\subset(P),\\ a\\cap b)'],
          note: 'Mẹo: chỉ cần chứng minh d vuông góc với 2 đường thẳng cắt nhau trong (P) là đủ để kết luận d⊥(P).',
        },
        {
          title: 'Hai mặt phẳng vuông góc',
          formulas: ['(P)\\perp(Q) \\Leftrightarrow \\exists d\\subset(P): d\\perp(Q)'],
          note: 'Mẹo nhận biết nhanh: nếu (P) chứa đường thẳng d mà d⊥(Q) thì chắc chắn (P)⊥(Q).',
        },
      ],
    },
    video: { caption: '00:00 / 14:45 — quan_he_vuong_goc_baigiang.mp4' },
    quiz: [
      {
        question: 'd ⊥ (P) khi nào?',
        options: [
          'd vuông góc 1 đường bất kỳ trong (P)',
          'd vuông góc 2 đường cắt nhau trong (P)',
          'd nằm trong (P)',
          'd song song (P)',
        ],
        correctIndex: 1,
      },
      { question: 'Nếu d ⊥ (P) và a ⊂ (P) thì?', options: ['d // a', 'd ⊥ a', 'd cắt a', 'Không xác định'], correctIndex: 1 },
      {
        question: '(P) ⊥ (Q) khi nào?',
        options: ['(P) chứa 1 đường vuông góc (Q)', '(P) // (Q)', '(P) cắt (Q) tuỳ ý', '(P), (Q) không có điểm chung'],
        correctIndex: 0,
      },
      {
        question: 'Cho hình chóp S.ABCD có SA ⊥ (ABCD). Góc giữa SC và (ABCD) là góc nào?',
        options: ['Góc SCA', 'Góc SAC', 'Góc ASC', 'Góc SBA'],
        correctIndex: 0,
      },
      {
        question: 'Nếu hai mặt phẳng cùng vuông góc với một đường thẳng thì hai mặt phẳng đó:',
        options: ['Vuông góc nhau', 'Song song nhau (hoặc trùng nhau)', 'Cắt nhau', 'Chéo nhau'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho hình chóp S.ABCD, đáy ABCD là hình vuông, SA ⊥ (ABCD). Chứng minh BC ⊥ (SAB).',
        solution: [
          '$BC\\perp AB$ (tính chất hình vuông).',
          '$BC\\perp SA$ (vì $SA\\perp(ABCD)\\supset BC$).',
          'BC vuông góc với 2 đường cắt nhau AB, SA trong (SAB), vậy $BC\\perp(SAB)$.',
        ],
      },
      {
        prompt:
          'Bài 2. Cho hình chóp S.ABCD, đáy hình vuông cạnh a, SA ⊥ (ABCD), SA = a. Tính góc giữa SC và mặt đáy.',
        solution: [
          '$AC=a\\sqrt2$ (đường chéo hình vuông).',
          'Góc giữa SC và đáy là góc SCA: $\\tan(\\widehat{SCA})=\\dfrac{SA}{AC}=\\dfrac{a}{a\\sqrt2}=\\dfrac{1}{\\sqrt2}$',
        ],
      },
      {
        prompt: 'Bài 3. Cho tứ diện đều ABCD. Chứng minh AB ⊥ CD.',
        solution: [
          'Gọi M là trung điểm CD. Vì tam giác ACD, BCD đều nên $AM\\perp CD$ và $BM\\perp CD$.',
          'Suy ra $CD\\perp(ABM)$, mà $AB\\subset(ABM)$, vậy $CD\\perp AB$.',
        ],
      },
      {
        prompt: 'Bài 4. Cho hình chóp S.ABC có SA ⊥ (ABC), tam giác ABC vuông tại B. Chứng minh (SAB) ⊥ (SBC).',
        solution: [
          '$BC\\perp AB$ (giả thiết) và $BC\\perp SA$ (vì $SA\\perp(ABC)$).',
          'Suy ra $BC\\perp(SAB)$. Mà $BC\\subset(SBC)$, vậy $(SBC)\\perp(SAB)$.',
        ],
      },
      {
        prompt: 'Bài 5. Cho hình chóp S.ABCD, đáy hình vuông cạnh a, SA ⊥ (ABCD), SA = a. Tính độ dài SC.',
        solution: [
          '$AC=a\\sqrt2$ (đường chéo hình vuông cạnh a).',
          'Tam giác SAC vuông tại A: $SC=\\sqrt{SA^2+AC^2}=\\sqrt{a^2+2a^2}=a\\sqrt3$',
        ],
      },
    ],
    flashcards: [
      { front: 'Điều kiện đường thẳng vuông góc mặt phẳng', back: '$d\\perp a,\\ d\\perp b\\ (a,b\\subset(P),\\ a\\cap b) \\Rightarrow d\\perp(P)$' },
      { front: 'Điều kiện hai mặt phẳng vuông góc', back: '$d\\subset(P),\\ d\\perp(Q) \\Rightarrow (P)\\perp(Q)$' },
      { front: 'Hai mặt phẳng cùng vuông góc 1 đường thẳng', back: '$(P)\\perp d,\\ (Q)\\perp d \\Rightarrow (P)\\parallel(Q)$' },
      { front: 'Đường chéo hình vuông cạnh a', back: '$a\\sqrt2$' },
      { front: 'Đường chéo hình lập phương cạnh a', back: '$a\\sqrt3$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'goc-khoang-cach': {
    title: 'Góc và khoảng cách',
    theory: {
      cards: [
        {
          title: 'Góc trong không gian',
          formulas: ['\\sin\\widehat{(d,(P))}=\\dfrac{d(A,(P))}{AH}'],
          note: 'Mẹo: góc giữa đường thẳng và mặt phẳng luôn là góc nhọn (0°–90°), tính qua tam giác vuông tạo bởi đường thẳng, hình chiếu và đường vuông góc.',
        },
        {
          title: 'Khoảng cách trong không gian',
          formulas: ['d(A,(P))=AH,\\quad AH\\perp(P),\\ H\\in(P)'],
          note: 'Mẹo: khoảng cách từ 1 điểm đến mặt phẳng luôn là đoạn vuông góc ngắn nhất — kẻ AH⊥(P) tại H, độ dài AH chính là khoảng cách cần tìm.',
        },
      ],
    },
    video: { caption: '00:00 / 16:10 — goc_khoang_cach_baigiang.mp4' },
    quiz: [
      { question: 'Góc giữa đường thẳng và mặt phẳng có giá trị trong khoảng nào?', options: ['[0°;180°]', '[0°;90°]', '(0°;90°)', '[90°;180°]'], correctIndex: 1 },
      {
        question: 'Khoảng cách từ điểm A đến mặt phẳng (P) được xác định bằng?',
        options: ['Đoạn thẳng bất kỳ từ A đến (P)', 'Đoạn vuông góc từ A đến (P)', 'Đoạn song song với (P)', 'Không xác định được'],
        correctIndex: 1,
      },
      {
        question: 'Cho hình chóp S.ABCD có SA ⊥ (ABCD). Góc giữa SB và (ABCD) là góc nào?',
        options: ['Góc SBA', 'Góc SAB', 'Góc BSA', 'Góc ASB'],
        correctIndex: 0,
      },
      { question: 'Hai mặt phẳng vuông góc thì góc giữa chúng bằng?', options: ['0°', '45°', '90°', '180°'], correctIndex: 2 },
      {
        question: 'Khoảng cách giữa hai đường thẳng song song bằng?',
        options: [
          'Khoảng cách từ 1 điểm bất kỳ trên đường này đến đường kia',
          '0',
          'Không xác định',
          'Luôn bằng độ dài đường thẳng',
        ],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt:
          'Bài 1. Cho hình chóp S.ABCD, đáy hình vuông cạnh a, SA ⊥ (ABCD), SA = a. Tính khoảng cách từ A đến (SCD).',
        solution: [
          'Vì $CD\\perp AD$ và $CD\\perp SA$ nên $CD\\perp(SAD)$.',
          'Kẻ $AH\\perp SD$ tại H trong $(SAD)$, khi đó $AH\\perp CD$ và $AH\\perp SD$, vậy $AH\\perp(SCD)$.',
          'Trong tam giác SAD vuông tại A: $\\dfrac{1}{AH^2}=\\dfrac{1}{SA^2}+\\dfrac{1}{AD^2}=\\dfrac{2}{a^2} \\Rightarrow AH=\\dfrac{a\\sqrt2}{2}$',
        ],
      },
      {
        prompt:
          'Bài 2. Cho hình chóp S.ABCD, đáy hình vuông cạnh a, SA ⊥ (ABCD), SA = a√3. Tính góc giữa SC và mặt đáy.',
        solution: [
          '$AC=a\\sqrt2$',
          '$\\tan(\\widehat{SCA})=\\dfrac{SA}{AC}=\\dfrac{a\\sqrt3}{a\\sqrt2}=\\dfrac{\\sqrt6}{2}$',
        ],
      },
      {
        prompt: 'Bài 3. Tính khoảng cách giữa hai cạnh đối AB và CD của tứ diện đều cạnh a.',
        solution: [
          'Đây là kết quả quen thuộc của tứ diện đều: đoạn vuông góc chung nối trung điểm AB và trung điểm CD.',
          '$d(AB,CD)=\\dfrac{a\\sqrt2}{2}$',
        ],
      },
      {
        prompt: 'Bài 4. Cho hình lập phương ABCD.A\'B\'C\'D\' cạnh a. Tính khoảng cách từ A đến mặt phẳng (A\'BD).',
        solution: [
          'Gọi G là giao điểm của AC\' với (A\'BD); G là trọng tâm tam giác A\'BD nên $AG=\\dfrac13 AC\'$.',
          'Đường chéo hình lập phương: $AC\'=a\\sqrt3$',
          'Vậy $d(A,(A\'BD))=AG=\\dfrac{a\\sqrt3}{3}$',
        ],
      },
      {
        prompt:
          'Bài 5. Cho hình chóp tứ giác đều S.ABCD, đáy cạnh a, cạnh bên SA = a√2. Tính góc giữa cạnh bên SA và mặt đáy.',
        solution: [
          'Gọi O là tâm đáy, $SO\\perp(ABCD)$ (chóp đều). Góc giữa SA và đáy là góc SAO.',
          '$AO=\\dfrac{a\\sqrt2}{2}$ (nửa đường chéo hình vuông cạnh a).',
          '$\\cos(\\widehat{SAO})=\\dfrac{AO}{SA}=\\dfrac{a\\sqrt2/2}{a\\sqrt2}=\\dfrac12 \\Rightarrow \\widehat{SAO}=60^\\circ$',
        ],
      },
    ],
    flashcards: [
      { front: 'Góc giữa đường thẳng và mặt phẳng', back: '$0^\\circ \\le \\widehat{(d,(P))}\\le 90^\\circ$' },
      { front: 'Khoảng cách điểm đến mặt phẳng', back: '$d(A,(P))=AH,\\ AH\\perp(P)$' },
      { front: 'Góc giữa hai mặt phẳng vuông góc', back: '$\\widehat{((P),(Q))}=90^\\circ$' },
      { front: 'Khoảng cách hai đường thẳng song song', back: '$d(a,b)=d(M,b),\\ M\\in a$' },
      { front: 'Khoảng cách 2 cạnh đối tứ diện đều cạnh a', back: '$\\dfrac{a\\sqrt2}{2}$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'the-tich-khoi-da-dien': {
    title: 'Thể tích khối đa diện',
    theory: {
      cards: [
        {
          title: 'Thể tích khối chóp và khối lăng trụ',
          formulas: ['V_1=\\dfrac13 S\\cdot h', 'V_2=S\\cdot h'],
          note: 'V1 (khối chóp) và V2 (khối lăng trụ), với S là diện tích đáy, h là chiều cao. Mẹo: khối chóp luôn bằng 1/3 khối lăng trụ có cùng đáy và cùng chiều cao.',
        },
        {
          title: 'Thể tích khối hộp chữ nhật, khối lập phương',
          formulas: ['V=a\\cdot b\\cdot c', 'V=a^3'],
          note: 'a, b, c là ba kích thước; với khối lập phương thì a = b = c. Mẹo: khối hộp chữ nhật là trường hợp đặc biệt của lăng trụ đứng có đáy hình chữ nhật.',
        },
      ],
    },
    video: { caption: '00:00 / 15:50 — the_tich_khoi_da_dien_baigiang.mp4' },
    quiz: [
      { question: 'Công thức thể tích khối chóp là?', options: ['V = S đáy · h', 'V = (1/3) S đáy · h', 'V = (1/2) S đáy · h', 'V = 3 S đáy · h'], correctIndex: 1 },
      { question: 'Công thức thể tích khối lăng trụ là?', options: ['V = S đáy · h', 'V = (1/3) S đáy · h', 'V = (1/2) S đáy · h', 'V = 2 S đáy · h'], correctIndex: 0 },
      { question: 'Thể tích khối lập phương cạnh a là?', options: ['a²', 'a³', '3a', '6a²'], correctIndex: 1 },
      { question: 'Thể tích khối hộp chữ nhật kích thước a, b, c là?', options: ['a + b + c', 'a·b·c', '2(a+b+c)', 'abc/3'], correctIndex: 1 },
      { question: 'Hai khối chóp có cùng đáy và cùng chiều cao thì có:', options: ['Thể tích bằng nhau', 'Thể tích khác nhau', 'Diện tích xung quanh bằng nhau', 'Không so sánh được'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tính thể tích khối chóp S.ABC có đáy ABC là tam giác vuông tại B, AB = 3, BC = 4, chiều cao SA = 6 (SA ⊥ đáy).',
        solution: [
          '$S_{ABC}=\\dfrac12\\cdot AB\\cdot BC=\\dfrac12\\cdot3\\cdot4=6$',
          '$V=\\dfrac13 S_{ABC}\\cdot SA=\\dfrac13\\cdot6\\cdot6=12$',
        ],
      },
      {
        prompt: 'Bài 2. Tính thể tích khối lập phương có cạnh a = 3 (đơn vị độ dài).',
        solution: ['$V=a^3=3^3=27$ (đơn vị thể tích)'],
      },
      {
        prompt: 'Bài 3. Tính thể tích khối hộp chữ nhật có ba kích thước 2, 3, 5.',
        solution: ['$V=2\\cdot3\\cdot5=30$ (đơn vị thể tích)'],
      },
      {
        prompt: 'Bài 4. Cho hình chóp S.ABCD có đáy là hình vuông cạnh a, SA ⊥ (ABCD), SA = a. Tính thể tích khối chóp.',
        solution: [
          '$S_{ABCD}=a^2$',
          '$V=\\dfrac13 S_{ABCD}\\cdot SA=\\dfrac13 a^2\\cdot a=\\dfrac{a^3}{3}$',
        ],
      },
      {
        prompt: 'Bài 5. Cho lăng trụ đứng ABC.A\'B\'C\' có đáy là tam giác đều cạnh a, chiều cao AA\' = a. Tính thể tích khối lăng trụ.',
        solution: [
          '$S_{ABC}=\\dfrac{a^2\\sqrt3}{4}$ (diện tích tam giác đều cạnh a)',
          '$V=S_{ABC}\\cdot AA\'=\\dfrac{a^2\\sqrt3}{4}\\cdot a=\\dfrac{a^3\\sqrt3}{4}$',
        ],
      },
    ],
    flashcards: [
      { front: 'Thể tích khối chóp (S = diện tích đáy)', back: '$V=\\dfrac13 S\\cdot h$' },
      { front: 'Thể tích khối lăng trụ (S = diện tích đáy)', back: '$V=S\\cdot h$' },
      { front: 'Thể tích khối hộp chữ nhật', back: '$V=a\\cdot b\\cdot c$' },
      { front: 'Thể tích khối lập phương cạnh a', back: '$V=a^3$' },
      { front: 'Diện tích tam giác đều cạnh a', back: '$S=\\dfrac{a^2\\sqrt3}{4}$' },
    ],
    exam: EXAM_DEFAULT,
  },

  'phep-doi-hinh': {
    title: 'Phép dời hình',
    theory: {
      cards: [
        {
          title: 'Phép tịnh tiến',
          formulas: [
            "T_{\\vec v}(M)=M' \\Leftrightarrow \\overrightarrow{MM'}=\\vec v",
            "\\vec v=(a;b):\\quad x'=x+a,\\ y'=y+b",
          ],
          note: 'Phép tịnh tiến bảo toàn khoảng cách: biến đường thẳng thành đường thẳng song song (hoặc trùng), biến đường tròn thành đường tròn cùng bán kính.',
        },
        {
          title: 'Phép quay',
          formulas: [
            "Q_{(O,\\alpha)}(M)=M' \\Leftrightarrow OM'=OM,\\ (OM,OM')=\\alpha",
            "\\text{Góc } 90°:\\ (x;y)\\mapsto(-y;x)",
            "\\text{Góc } {-90°}:\\ (x;y)\\mapsto(y;-x)",
          ],
          note: 'Phép quay bảo toàn khoảng cách và biến đường tròn thành đường tròn cùng bán kính.',
        },
        {
          title: 'Phép đối xứng tâm',
          formulas: ["Đ_O(M)=M' \\Leftrightarrow \\overrightarrow{OM}=-\\overrightarrow{OM'}"],
          note: 'O là trung điểm MM\'. Phép đối xứng tâm O chính là phép quay tâm O với góc quay 180°. Đây cũng là một phép dời hình (bảo toàn khoảng cách).',
        },
      ],
    },
    video: { caption: '00:00 / 12:30 — phep_doi_hinh_baigiang.mp4' },
    quiz: [
      {
        question: 'Có bao nhiêu phép tịnh tiến biến một hình vuông thành chính nó?',
        options: ['Không có', 'Một', 'Bốn', 'Vô số'],
        correctIndex: 1,
      },
      {
        question: 'Cho hai đường thẳng song song d và d\'. Tất cả những phép tịnh tiến biến d thành d\' là:',
        options: [
          'Các phép tịnh tiến theo vector vuông góc với d',
          'Các phép tịnh tiến theo vector chỉ phương của d',
          'Các phép tịnh tiến theo vector AA\', với A, A\' tùy ý lần lượt nằm trên d và d\'',
          'Không có phép tịnh tiến nào',
        ],
        correctIndex: 2,
      },
      {
        question: 'Trong mặt phẳng Oxy, cho phép biến hình f: M(x;y) ↦ M\'(x+2; y−3). f là phép tịnh tiến theo vector nào?',
        options: ['v = (2; 3)', 'v = (−2; 3)', 'v = (−2; −3)', 'v = (2; −3)'],
        correctIndex: 3,
      },
      {
        question: 'Trong mặt phẳng Oxy, ảnh của đường tròn (x−2)² + (y−1)² = 16 qua phép tịnh tiến theo vector v = (1; 3) là đường tròn:',
        options: ['(x−2)² + (y−1)² = 16', '(x+2)² + (y+1)² = 16', '(x−3)² + (y−4)² = 16', '(x+3)² + (y+4)² = 16'],
        correctIndex: 2,
      },
      {
        question: 'Khẳng định nào sau đây đúng về phép đối xứng tâm O?',
        options: [
          'Nếu OM = OM\' thì M\' là ảnh của M qua phép đối xứng tâm O',
          'Nếu vector OM = −vector OM\' thì M\' là ảnh của M qua phép đối xứng tâm O',
          'Phép quay là phép đối xứng tâm',
          'Phép đối xứng tâm không phải là một phép quay',
        ],
        correctIndex: 1,
      },
      {
        question: 'Trong mặt phẳng Oxy cho điểm M(1;1). Điểm nào là ảnh của M qua phép quay tâm O, góc 45°?',
        options: ['(−1; 1)', '(1; 0)', '(√2; 0)', '(0; √2)'],
        correctIndex: 3,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Trong mặt phẳng Oxy cho vector v = (2;−1) và điểm M(3;2). Tìm tọa độ điểm A sao cho a) A = T_v(M); b) M = T_v(A).',
        solution: [
          'a) $A=T_{\\vec v}(M) \\Leftrightarrow \\overrightarrow{MA}=\\vec v \\Rightarrow A=M+\\vec v=(3+2;\\,2-1)=(5;1)$',
          'b) $M=T_{\\vec v}(A) \\Leftrightarrow \\overrightarrow{AM}=\\vec v \\Rightarrow A=M-\\vec v=(3-2;\\,2+1)=(1;3)$',
        ],
      },
      {
        prompt:
          'Bài 2. Trong mp Oxy cho đường thẳng d: 3x − y + 9 = 0. a) Viết pt đường thẳng d\' là ảnh của d qua phép tịnh tiến theo vector v(2;−1). b) Tìm phép tịnh tiến theo vector có phương song song với trục Ox biến d thành d₁ đi qua gốc tọa độ.',
        solution: [
          'a) Với $M(x;y)\\in d$, ảnh $M\'(x\';y\')$ có $x\'=x+2,\\ y\'=y-1 \\Rightarrow x=x\'-2,\\ y=y\'+1$.',
          'Thay vào d: $3(x\'-2)-(y\'+1)+9=0 \\Leftrightarrow 3x\'-y\'+2=0$. Vậy $d\': 3x-y+2=0$.',
          'b) Gọi $\\vec u=(m;0)$. Vì tịnh tiến bảo toàn phương nên $d_1\\parallel d$ và qua gốc toạ độ: $d_1: 3x-y=0$.',
          'Điểm $(-3;0)\\in d$ (vì $3(-3)-0+9=0$), ảnh của nó là $(-3+m;0)\\in d_1$: $3(-3+m)-0=0 \\Rightarrow m=3$.',
          'Vậy $\\vec u=(3;0)$ và $d_1: 3x-y=0$.',
        ],
      },
      {
        prompt:
          'Bài 3. Cho đường tròn (C): x² + y² − 2x + 4y − 4 = 0. Viết pt đường tròn (C\') là ảnh của (C) qua phép tịnh tiến theo vector v(−2;5).',
        solution: [
          '(C) có tâm $I(1;-2)$, bán kính $R=\\sqrt{1+4+4}=3$.',
          'Tâm ảnh: $I\'=I+\\vec v=(1-2;\\,-2+5)=(-1;3)$, bán kính không đổi $R=3$.',
          'Vậy $(C\'): (x+1)^2+(y-3)^2=9$.',
        ],
      },
      {
        prompt:
          'Bài 4. Trong mp Oxy cho điểm A(3;−1) và đường thẳng d: x + y − 2 = 0. Tìm tọa độ ảnh của A và viết pt đường thẳng d\' là ảnh của d qua phép quay tâm O góc 90°.',
        solution: [
          'Quy tắc quay tâm O góc 90°: $(x;y)\\mapsto(-y;x)$.',
          '$A\'=(-(-1);3)=(1;3)$.',
          'Với $M(x;y)\\in d$, ảnh $M\'(x\';y\')$: $x\'=-y,\\ y\'=x \\Rightarrow y=x\',\\ x=-y\'$... thay vào $x+y-2=0$: $-y\'+x\'-2=0$.',
          'Vậy $d\': x-y+2=0$.',
        ],
      },
    ],
    flashcards: [
      { front: 'Phép tịnh tiến theo v(a;b)', back: '$x\'=x+a,\\ y\'=y+b$' },
      { front: 'Phép quay tâm O góc 90°', back: '$(x;y)\\mapsto(-y;x)$' },
      { front: 'Phép quay tâm O góc −90°', back: '$(x;y)\\mapsto(y;-x)$' },
      { front: 'Phép đối xứng tâm O', back: 'O là trung điểm MM\', $\\overrightarrow{OM}=-\\overrightarrow{OM\'}$' },
      { front: 'Tính chất chung của phép dời hình', back: 'Bảo toàn khoảng cách giữa hai điểm bất kỳ' },
    ],
    exam: EXAM_DEFAULT,
  },
}
