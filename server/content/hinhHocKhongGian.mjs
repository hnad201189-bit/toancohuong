import { EXAM_DEFAULT } from './examDefault.mjs'

export const HINH_HOC_KHONG_GIAN = {
  'duong-thang-mat-phang': {
    title: 'Đường thẳng và mặt phẳng — quan hệ song song',
    theory: {
      cards: [
        {
          title: 'Đường thẳng song song với mặt phẳng',
          formulas: ["d\\parallel(P) \\Leftrightarrow d\\not\\subset(P),\\ \\exists a\\subset(P): d\\parallel a"],
          note: 'Mẹo: để chứng minh d//(P), chỉ cần tìm 1 đường thẳng a nằm trong (P) sao cho d//a, và d không nằm trong (P).',
        },
        {
          title: 'Hai mặt phẳng song song',
          formulas: ["(P)\\parallel(Q) \\Leftrightarrow \\begin{cases}a,b\\subset(P),\\ a\\cap b=\\{I\\}\\\\ a\\parallel(Q),\\ b\\parallel(Q)\\end{cases}"],
          note: 'Mẹo: chỉ cần 2 đường thẳng cắt nhau trong (P) cùng song song với (Q) là đủ để kết luận (P)//(Q).',
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
        prompt: 'Bài 2. Cho hai mặt phẳng (P), (Q) song song. Đường thẳng a nằm trong (P). Hỏi a có song song với (Q) không?',
        solution: [
          'Có. Vì $a\\subset(P)$ mà $(P)\\parallel(Q)$ nên (P) và (Q) không có điểm chung, suy ra a không cắt (Q).',
          'Mặt khác $a\\not\\subset(Q)$ (do a thuộc P), vậy $a\\parallel(Q)$.',
        ],
      },
      {
        prompt: 'Bài 3. Cho tứ diện ABCD, gọi M, N lần lượt là trung điểm AB, AC. Chứng minh MN // (BCD).',
        solution: [
          'MN là đường trung bình của tam giác ABC nên $MN\\parallel BC$.',
          '$BC\\subset(BCD)$, $MN\\not\\subset(BCD)$, vậy $MN\\parallel(BCD)$.',
        ],
      },
      {
        prompt: 'Bài 4. Cho hình chóp S.ABC, gọi M, N lần lượt là trung điểm SB, SC. Chứng minh MN // (ABC).',
        solution: [
          'MN là đường trung bình của tam giác SBC nên $MN\\parallel BC$.',
          '$BC\\subset(ABC)$, $MN\\not\\subset(ABC)$, vậy $MN\\parallel(ABC)$.',
        ],
      },
      {
        prompt: 'Bài 5. Cho hình lăng trụ ABC.A\'B\'C\'. Chứng minh (ABC) // (A\'B\'C\').',
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
}
