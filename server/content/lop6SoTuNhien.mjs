import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_SO_TU_NHIEN = {
  'l6-tap-hop': {
    title: 'Tập hợp và các phép toán trên tập hợp',
    theory: {
      cards: [
        {
          title: 'Tập hợp và phần tử',
          formulas: ['A = \\{1;\\ 2;\\ 3\\}', 'x \\in A,\\quad y \\notin A'],
          legend: [
            '$A$: tên tập hợp (thường viết bằng chữ cái in hoa)',
            'Các số trong dấu $\\{\\}$: các phần tử của tập hợp',
            '$\\in$: kí hiệu "thuộc"; $\\notin$: kí hiệu "không thuộc"',
          ],
          note: 'Mẹo: có hai cách viết một tập hợp — liệt kê các phần tử, hoặc chỉ ra tính chất đặc trưng cho các phần tử của tập hợp đó.',
        },
        {
          title: 'Tập hợp số tự nhiên',
          formulas: ['\\mathbb{N} = \\{0;\\ 1;\\ 2;\\ 3;\\ ...\\}', '\\mathbb{N}^* = \\{1;\\ 2;\\ 3;\\ ...\\}'],
          legend: ['$\\mathbb{N}$: tập hợp các số tự nhiên (bắt đầu từ 0)', '$\\mathbb{N}^*$: tập hợp các số tự nhiên khác 0'],
          note: 'Mẹo: $\\mathbb{N}^*$ chính là $\\mathbb{N}$ bỏ đi số 0.',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — tap_hop_baigiang.mp4' },
    quiz: [
      { question: 'Cách viết nào đúng khi liệt kê tập hợp A các số tự nhiên nhỏ hơn 4?', options: ['A = {0;1;2;3}', 'A = {1;2;3;4}', 'A = {0;1;2}', 'A = {1;2;3}'], correctIndex: 0 },
      { question: 'Cho tập hợp B = {2;4;6;8}. Số phần tử của B là?', options: ['4', '3', '2', '8'], correctIndex: 0 },
      { question: 'Kí hiệu nào dùng để chỉ "3 thuộc tập hợp A"?', options: ['3 ∈ A', '3 ∉ A', '3 ⊂ A', 'A ∈ 3'], correctIndex: 0 },
      { question: 'Tập hợp các số tự nhiên được kí hiệu là?', options: ['ℕ', 'ℤ', 'ℚ', 'ℝ'], correctIndex: 0 },
      { question: 'Cho M = {x | x là số tự nhiên, 2 ≤ x ≤ 5}. Viết M dưới dạng liệt kê?', options: ['{2;3;4;5}', '{2;3;4}', '{1;2;3;4;5}', '{3;4;5}'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Viết tập hợp A các số tự nhiên lớn hơn 5 và nhỏ hơn 10 bằng hai cách.',
        solution: ['Cách 1 (liệt kê): $A=\\{6;7;8;9\\}$', 'Cách 2 (tính chất đặc trưng): $A=\\{x\\in\\mathbb{N}\\mid 5<x<10\\}$'],
      },
      {
        prompt: 'Bài 2. Cho tập hợp B = {0;1;2;3;4;5}. B có bao nhiêu phần tử? Viết tập hợp C gồm các phần tử của B là số chẵn.',
        solution: ['B có 6 phần tử.', '$C=\\{0;2;4\\}$'],
      },
      {
        prompt: 'Bài 3. Trong các cách viết sau, cách nào đúng, cách nào sai: a) 5 ∈ ℕ; b) −2 ∈ ℕ; c) 0 ∈ ℕ*.',
        solution: ['a) Đúng.', 'b) Sai, vì ℕ chỉ gồm các số tự nhiên (không âm).', 'c) Sai, vì ℕ* không chứa số 0.'],
      },
      {
        prompt: 'Bài 4. Viết tập hợp D các chữ cái (không lặp lại) trong từ "TOANHOC".',
        solution: ['Các chữ cái phân biệt: T, O, A, N, H, C', '$D=\\{T;O;A;N;H;C\\}$, có 6 phần tử.'],
      },
      {
        prompt: 'Bài 5. Cho A = {1;2;3} và B = {2;3;4}. Viết tập hợp gồm các phần tử vừa thuộc A vừa thuộc B.',
        solution: ['Các phần tử chung của A và B là 2 và 3.', 'Tập hợp cần tìm: $\\{2;3\\}$'],
      },
    ],
    flashcards: [
      { front: 'Kí hiệu thuộc tập hợp', back: '$\\in$' },
      { front: 'Kí hiệu không thuộc tập hợp', back: '$\\notin$' },
      { front: 'Tập hợp số tự nhiên ℕ', back: '$\\{0;1;2;3;...\\}$' },
      { front: 'Tập hợp ℕ*', back: '$\\{1;2;3;...\\}$ (không chứa 0)' },
      { front: 'Hai cách viết tập hợp', back: 'Liệt kê phần tử hoặc chỉ ra tính chất đặc trưng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tập hợp A = {2;4;6} có bao nhiêu phần tử?', options: ['3', '2', '4', '6'], correctIndex: 0 },
        { question: 'Kí hiệu ℕ dùng để chỉ tập hợp nào?', options: ['Số tự nhiên', 'Số nguyên', 'Số hữu tỉ', 'Số thực'], correctIndex: 0 },
        { question: 'Số 0 có thuộc tập hợp ℕ* không?', options: ['Không', 'Có', 'Không xác định', 'Tuỳ trường hợp'], correctIndex: 0 },
        { question: 'Kí hiệu "5 ∈ A" có nghĩa là gì?', options: ['5 là phần tử của A', '5 không là phần tử của A', '5 bằng A', 'A chứa 5 phần tử'], correctIndex: 0 },
        { question: 'Tập hợp rỗng được kí hiệu là?', options: ['∅', '{0}', 'ℕ', 'ℕ*'], correctIndex: 0 },
        { question: 'Tập hợp B = {a;b;c} có bao nhiêu phần tử?', options: ['3', '2', '1', '4'], correctIndex: 0 },
        { question: 'Viết tập hợp các số tự nhiên nhỏ hơn 5 bằng cách liệt kê.', options: ['{0;1;2;3;4}', '{1;2;3;4;5}', '{0;1;2;3}', '{1;2;3;4}'], correctIndex: 0 },
        { question: 'Tập hợp C các số tự nhiên x thoả 3 < x ≤ 7 có bao nhiêu phần tử?', options: ['4', '5', '3', '6'], correctIndex: 0 },
        { question: 'Cho A = {1;3;5;7}. Phần tử nào sau đây KHÔNG thuộc A?', options: ['4', '1', '5', '7'], correctIndex: 0 },
        { question: 'Tập hợp các chữ cái trong từ "ABC" có bao nhiêu phần tử?', options: ['3', '2', '1', '4'], correctIndex: 0 },
        { question: 'Cho M = {x ∈ ℕ | x < 3}. M viết dưới dạng liệt kê là?', options: ['{0;1;2}', '{1;2;3}', '{0;1;2;3}', '{1;2}'], correctIndex: 0 },
        { question: 'Tập hợp các số tự nhiên chẵn nhỏ hơn 10 có bao nhiêu phần tử?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: 'Cho A là tập các số tự nhiên có 2 chữ số, chia hết cho 5 và nhỏ hơn 30. Số phần tử của A là?', options: ['4', '3', '5', '6'], correctIndex: 0 },
        { question: 'Cho A = {1;2;3;4} và B = {3;4;5;6}. Số phần tử vừa thuộc A vừa thuộc B là?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Tập hợp các số tự nhiên x là ước của 12 và x < 12 có bao nhiêu phần tử?', options: ['5', '6', '4', '3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết tập hợp A các số tự nhiên chẵn lớn hơn 10 và nhỏ hơn 20 bằng hai cách.',
          solution: ['Liệt kê: $A=\\{12;14;16;18\\}$', 'Tính chất: $A=\\{x\\in\\mathbb{N}\\mid x\\text{ chẵn},\\ 10<x<20\\}$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Cho tập hợp B gồm các số tự nhiên là ước của 18. a) Viết tập hợp B. b) Tìm trong B các phần tử vừa là ước của 18 vừa là ước của 24.',
          solution: [
            'Ước của 18: 1, 2, 3, 6, 9, 18 $\\Rightarrow B=\\{1;2;3;6;9;18\\}$',
            'Ước của 24: 1, 2, 3, 4, 6, 8, 12, 24',
            'Các phần tử của B vừa là ước của 24: $\\{1;2;3;6\\}$',
          ],
        },
      ],
    },
  },

  'l6-phep-tinh-so-tu-nhien': {
    title: 'Các phép tính với số tự nhiên, luỹ thừa',
    theory: {
      cards: [
        {
          title: 'Thứ tự thực hiện phép tính',
          formulas: ['(\\ ) \\to [\\ ] \\to \\{\\ \\}', '\\text{Luỹ thừa} \\to \\times, \\div \\to +, -'],
          legend: [
            'Không có ngoặc: làm luỹ thừa trước, rồi đến nhân/chia, cuối cùng là cộng/trừ (theo thứ tự trái sang phải)',
            'Có ngoặc: làm trong ngoặc tròn trước, rồi đến ngoặc vuông, rồi đến ngoặc nhọn',
          ],
          note: 'Mẹo nhớ: "Ngoặc — Luỹ thừa — Nhân chia — Cộng trừ", làm trong ngoặc trước tiên bất kể phép tính gì.',
        },
        {
          title: 'Luỹ thừa với số mũ tự nhiên',
          formulas: ['a^n = \\underbrace{a \\cdot a \\cdots a}_{n\\text{ thừa số}}', 'a^m \\cdot a^n = a^{m+n}', 'a^m : a^n = a^{m-n}\\ (m \\ge n, a \\ne 0)'],
          legend: ['$a$: cơ số', '$n$: số mũ', '$a^n$: đọc là "a mũ n"'],
          note: 'Quy ước: $a^1 = a$, $a^0 = 1$ (với $a \\ne 0$).',
        },
      ],
    },
    video: { caption: '00:00 / 10:15 — phep_tinh_so_tu_nhien_baigiang.mp4' },
    quiz: [
      { question: 'Giá trị của 2³ bằng?', options: ['8', '6', '9', '4'], correctIndex: 0 },
      { question: 'Biểu thức 20 − 4 × 3 có giá trị bằng?', options: ['8', '48', '16', '12'], correctIndex: 0 },
      { question: 'Giá trị của 5² × 5³ bằng?', options: ['5⁵', '5⁶', '25⁵', '5¹⁵'], correctIndex: 0 },
      { question: 'Biểu thức (15 + 5) : 4 có giá trị bằng?', options: ['5', '8', '20', '4'], correctIndex: 0 },
      { question: 'Giá trị của 10⁰ bằng?', options: ['1', '0', '10', 'Không xác định'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính giá trị biểu thức: 45 − 9 × 3 + 2.', solution: ['$45-9\\times3+2 = 45-27+2 = 20$'] },
      { prompt: 'Bài 2. Tính: 3² + 4² − 2³.', solution: ['$9+16-8=17$'] },
      { prompt: 'Bài 3. Tính giá trị biểu thức: (12 + 8) : 5 × 3.', solution: ['$(12+8):5\\times3 = 20:5\\times3 = 4\\times3=12$'] },
      { prompt: 'Bài 4. Viết gọn bằng luỹ thừa: 7 × 7 × 7 × 7.', solution: ['$7\\times7\\times7\\times7 = 7^4$'] },
      {
        prompt: 'Bài 5. Tính giá trị biểu thức: 100 − [30 + (25 − 15)].',
        solution: ['$25-15=10$', '$30+10=40$', '$100-40=60$'],
      },
    ],
    flashcards: [
      { front: 'Thứ tự thực hiện (không ngoặc)', back: 'Luỹ thừa → Nhân, chia → Cộng, trừ' },
      { front: 'Thứ tự thực hiện (có ngoặc)', back: 'Ngoặc tròn → ngoặc vuông → ngoặc nhọn' },
      { front: 'Công thức nhân hai luỹ thừa cùng cơ số', back: '$a^m\\cdot a^n = a^{m+n}$' },
      { front: 'Công thức chia hai luỹ thừa cùng cơ số', back: '$a^m:a^n=a^{m-n}$' },
      { front: 'Quy ước a⁰ và a¹', back: '$a^0=1,\\ a^1=a$ (với $a\\ne0$)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Giá trị của 3² bằng?', options: ['9', '6', '5', '3'], correctIndex: 0 },
        { question: 'Cơ số của luỹ thừa 5⁴ là?', options: ['5', '4', '9', '20'], correctIndex: 0 },
        { question: 'Số mũ của luỹ thừa 2⁷ là?', options: ['7', '2', '9', '14'], correctIndex: 0 },
        { question: 'Trong biểu thức không có ngoặc, phép tính nào được thực hiện trước?', options: ['Luỹ thừa', 'Cộng, trừ', 'Nhân, chia', 'Tất cả như nhau'], correctIndex: 0 },
        { question: 'Giá trị của 6⁰ bằng?', options: ['1', '0', '6', 'Không xác định'], correctIndex: 0 },
        { question: 'Giá trị của 4¹ bằng?', options: ['4', '1', '0', '16'], correctIndex: 0 },
        { question: 'Giá trị của 15 + 5 × 2 bằng?', options: ['25', '40', '35', '20'], correctIndex: 0 },
        { question: 'Giá trị của (8 + 2) × 3 bằng?', options: ['30', '14', '26', '24'], correctIndex: 0 },
        { question: 'Viết gọn bằng luỹ thừa: 4 × 4 × 4.', options: ['4³', '3⁴', '4×3', '12'], correctIndex: 0 },
        { question: 'Giá trị của 2³ × 2² bằng?', options: ['2⁵', '2⁶', '4⁵', '2¹'], correctIndex: 0 },
        { question: 'Giá trị của 5⁴ : 5² bằng?', options: ['5²', '5⁶', '5⁸', '1²'], correctIndex: 0 },
        { question: 'Giá trị biểu thức 30 − 2 × 5 bằng?', options: ['20', '140', '28', '25'], correctIndex: 0 },
        { question: 'Giá trị biểu thức (20 − 4) : 4 + 3 bằng?', options: ['7', '4', '19', '10'], correctIndex: 0 },
        { question: 'Giá trị biểu thức 2 × 3² − 5 bằng?', options: ['13', '31', '1', '19'], correctIndex: 0 },
        { question: 'Giá trị biểu thức 100 − [20 + (10 − 5)] bằng?', options: ['75', '85', '65', '95'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: 5³ − 4 × (12 − 7).',
          solution: ['$12-7=5$', '$4\\times5=20$', '$5^3-20=125-20=105$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm số tự nhiên x biết: 2x + 3² = 45.',
          solution: ['$2x+9=45$', '$2x=36$', '$x=18$'],
        },
      ],
    },
  },

  'l6-tinh-chia-het': {
    title: 'Tính chia hết, dấu hiệu chia hết',
    theory: {
      cards: [
        {
          title: 'Quan hệ chia hết',
          formulas: ['a = b \\cdot q\\ \\Rightarrow\\ a \\,\\vdots\\, b'],
          legend: ['$a$: số bị chia', '$b$: số chia', '$q$: thương', '$a\\,\\vdots\\,b$: đọc là "a chia hết cho b"'],
          note: 'Mẹo: a chia hết cho b khi tồn tại số tự nhiên q sao cho a = b × q (phép chia không dư).',
        },
        {
          title: 'Dấu hiệu chia hết cho 2, 3, 5, 9',
          formulas: ['\\vdots\\,2:\\ \\text{chữ số cuối} \\in \\{0,2,4,6,8\\}', '\\vdots\\,5:\\ \\text{chữ số cuối} \\in \\{0,5\\}', '\\vdots\\,3\\ (\\vdots\\,9):\\ \\text{tổng các chữ số}\\ \\vdots\\,3\\ (\\vdots\\,9)'],
          legend: ['Chia hết cho 2: chữ số tận cùng là số chẵn', 'Chia hết cho 5: chữ số tận cùng là 0 hoặc 5', 'Chia hết cho 3 (hoặc 9): tổng các chữ số chia hết cho 3 (hoặc 9)'],
          note: 'Mẹo: một số vừa chia hết cho 2 vừa chia hết cho 5 thì chia hết cho 10 (chữ số tận cùng là 0).',
        },
      ],
    },
    video: { caption: '00:00 / 09:40 — tinh_chia_het_baigiang.mp4' },
    quiz: [
      { question: 'Số nào sau đây chia hết cho 2?', options: ['246', '135', '723', '891'], correctIndex: 0 },
      { question: 'Số nào sau đây chia hết cho 5?', options: ['470', '472', '473', '478'], correctIndex: 0 },
      { question: 'Số 549 có chia hết cho 3 không? (5+4+9=18)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 9'], correctIndex: 0 },
      { question: 'Số nào sau đây chia hết cho cả 2 và 5?', options: ['360', '365', '362', '355'], correctIndex: 0 },
      { question: 'Số 123 có chia hết cho 9 không? (1+2+3=6)', options: ['Không', 'Có', 'Không xác định', 'Chia hết cho 3 và 9'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Trong các số 120, 235, 402, 567, số nào chia hết cho 2? Số nào chia hết cho 5?', solution: ['Chia hết cho 2 (chữ số cuối chẵn): 120, 402', 'Chia hết cho 5 (chữ số cuối 0 hoặc 5): 120, 235'] },
      { prompt: 'Bài 2. Xét xem số 2 340 có chia hết cho 3 và cho 9 không.', solution: ['Tổng các chữ số: $2+3+4+0=9$', '9 chia hết cho 3 và cho 9, vậy 2340 chia hết cho cả 3 và 9.'] },
      { prompt: 'Bài 3. Tìm chữ số x để số $\\overline{45x}$ chia hết cho 5 (x là chữ số).', solution: ['Số chia hết cho 5 khi chữ số tận cùng là 0 hoặc 5.', 'Vậy $x=0$ hoặc $x=5$.'] },
      { prompt: 'Bài 4. Tìm chữ số x để số $\\overline{12x}$ chia hết cho 3.', solution: ['Tổng các chữ số: $1+2+x=3+x$', '$3+x$ chia hết cho 3 khi $x\\in\\{0;3;6;9\\}$'] },
      { prompt: 'Bài 5. Số 720 có chia hết cho 2, 3, 5, 9 không? Giải thích.', solution: ['Chữ số cuối là 0 nên chia hết cho 2 và cho 5.', 'Tổng chữ số $7+2+0=9$, chia hết cho cả 3 và 9.', 'Vậy 720 chia hết cho cả 2, 3, 5, 9.'] },
    ],
    flashcards: [
      { front: 'Dấu hiệu chia hết cho 2', back: 'Chữ số tận cùng là 0, 2, 4, 6, 8' },
      { front: 'Dấu hiệu chia hết cho 5', back: 'Chữ số tận cùng là 0 hoặc 5' },
      { front: 'Dấu hiệu chia hết cho 3', back: 'Tổng các chữ số chia hết cho 3' },
      { front: 'Dấu hiệu chia hết cho 9', back: 'Tổng các chữ số chia hết cho 9' },
      { front: 'Chia hết cho 10', back: 'Chữ số tận cùng là 0 (vừa chia hết 2 vừa chia hết 5)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số nào sau đây chia hết cho 2?', options: ['358', '135', '723', '891'], correctIndex: 0 },
        { question: 'Số nào sau đây chia hết cho 5?', options: ['625', '627', '621', '628'], correctIndex: 0 },
        { question: 'Dấu hiệu chia hết cho 3 là gì?', options: ['Tổng các chữ số chia hết cho 3', 'Chữ số cuối chia hết cho 3', 'Số đó là số lẻ', 'Số đó lớn hơn 3'], correctIndex: 0 },
        { question: 'Dấu hiệu chia hết cho 9 là gì?', options: ['Tổng các chữ số chia hết cho 9', 'Chữ số cuối là 9', 'Số đó chia hết cho 3', 'Số đó là số chẵn'], correctIndex: 0 },
        { question: 'Số nào chia hết cho cả 2 và 5?', options: ['450', '455', '452', '457'], correctIndex: 0 },
        { question: 'Số 81 có chia hết cho 9 không? (8+1=9)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 3'], correctIndex: 0 },
        { question: 'Số 213 có chia hết cho 3 không? (2+1+3=6)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 9'], correctIndex: 0 },
        { question: 'Trong các số 12, 15, 20, 27, số nào chia hết cho 5?', options: ['15 và 20', '12 và 27', '20 và 27', 'Chỉ 12'], correctIndex: 0 },
        { question: 'Số 1 000 có chia hết cho 2, 5 không?', options: ['Chia hết cho cả 2 và 5', 'Chỉ chia hết cho 2', 'Chỉ chia hết cho 5', 'Không chia hết cho cả hai'], correctIndex: 0 },
        { question: 'Tìm x để $\\overline{3x}$ (x là chữ số) chia hết cho 2.', options: ['x ∈ {0;2;4;6;8}', 'x ∈ {1;3;5;7;9}', 'x = 3', 'x = 0 duy nhất'], correctIndex: 0 },
        { question: 'Số 99 999 có chia hết cho 9 không? (tổng chữ số = 45)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 3'], correctIndex: 0 },
        { question: 'Số nào sau đây chia hết cho 3 nhưng KHÔNG chia hết cho 9?', options: ['15', '18', '27', '36'], correctIndex: 0 },
        { question: 'Tìm chữ số x để $\\overline{72x}$ chia hết cho 5.', options: ['x = 0 hoặc x = 5', 'x = 2 hoặc x = 7', 'x = 0 duy nhất', 'x = 5 duy nhất'], correctIndex: 0 },
        { question: 'Tìm chữ số x để $\\overline{4x5}$ chia hết cho 3, biết tổng các chữ số là 9+x.', options: ['x ∈ {0;3;6;9}', 'x ∈ {1;4;7}', 'x ∈ {2;5;8}', 'x = 0 duy nhất'], correctIndex: 0 },
        { question: 'Số 2 025 có chia hết cho cả 3 và 9 không? (tổng chữ số = 9)', options: ['Chia hết cho cả 3 và 9', 'Chỉ chia hết cho 3', 'Chỉ chia hết cho 9', 'Không chia hết cho cả hai'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm chữ số x để số $\\overline{25x}$ chia hết cho cả 2 và 5.',
          solution: ['Chia hết cho 2: x ∈ {0;2;4;6;8}. Chia hết cho 5: x ∈ {0;5}.', 'Thoả cả hai điều kiện: $x=0$.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm số tự nhiên có 3 chữ số nhỏ nhất chia hết cho cả 3 và 5, biết chữ số hàng trăm là 1.',
          solution: [
            'Số cần tìm có dạng $\\overline{1ab}$, chia hết cho 5 nên chữ số cuối là 0 hoặc 5.',
            'Thử $\\overline{1a0}$: tổng chữ số $1+a+0=1+a$ chia hết cho 3 khi $a\\in\\{2;5;8\\}$ — nhỏ nhất $a=2$, được số 120.',
            'Kiểm tra: $120:3=40$, $120:5=24$ (đúng). Vậy số cần tìm là 120.',
          ],
        },
      ],
    },
  },

  'l6-so-nguyen-to': {
    title: 'Số nguyên tố, hợp số, phân tích ra thừa số nguyên tố',
    theory: {
      cards: [
        {
          title: 'Số nguyên tố và hợp số',
          formulas: ['2, 3, 5, 7, 11, 13, ...'],
          legend: ['Số nguyên tố: số tự nhiên lớn hơn 1, chỉ có 2 ước là 1 và chính nó', 'Hợp số: số tự nhiên lớn hơn 1, có nhiều hơn 2 ước'],
          note: 'Lưu ý: số 0 và số 1 không phải là số nguyên tố cũng không phải là hợp số. Số 2 là số nguyên tố chẵn duy nhất.',
        },
        {
          title: 'Phân tích một số ra thừa số nguyên tố',
          formulas: ['60 = 2^2 \\cdot 3 \\cdot 5'],
          legend: ['Phân tích ra thừa số nguyên tố: viết một hợp số thành tích các thừa số nguyên tố', 'Có thể dùng sơ đồ cây hoặc chia liên tiếp cho các số nguyên tố từ nhỏ đến lớn'],
          note: 'Mẹo: luôn thử chia cho 2 trước, rồi 3, 5, 7... theo thứ tự tăng dần cho đến khi thương bằng 1.',
        },
      ],
    },
    video: { caption: '00:00 / 11:05 — so_nguyen_to_baigiang.mp4' },
    quiz: [
      { question: 'Số nào sau đây là số nguyên tố?', options: ['7', '9', '15', '21'], correctIndex: 0 },
      { question: 'Số nào sau đây là hợp số?', options: ['12', '2', '5', '13'], correctIndex: 0 },
      { question: 'Số 1 được xếp vào loại nào?', options: ['Không là số nguyên tố, không là hợp số', 'Là số nguyên tố', 'Là hợp số', 'Vừa nguyên tố vừa hợp số'], correctIndex: 0 },
      { question: 'Phân tích 12 ra thừa số nguyên tố được kết quả nào?', options: ['2² × 3', '2 × 6', '3 × 4', '2² × 2'], correctIndex: 0 },
      { question: 'Số nguyên tố chẵn duy nhất là?', options: ['2', '0', '4', '6'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Trong các số 11, 15, 17, 21, số nào là số nguyên tố?', solution: ['11 và 17 là số nguyên tố (chỉ có ước là 1 và chính nó).', '15 = 3×5 và 21 = 3×7 là hợp số.'] },
      { prompt: 'Bài 2. Phân tích số 36 ra thừa số nguyên tố.', solution: ['$36=2\\times18=2\\times2\\times9=2\\times2\\times3\\times3$', '$36=2^2\\times3^2$'] },
      { prompt: 'Bài 3. Phân tích số 84 ra thừa số nguyên tố.', solution: ['$84=2\\times42=2\\times2\\times21=2\\times2\\times3\\times7$', '$84=2^2\\times3\\times7$'] },
      { prompt: 'Bài 4. Giải thích vì sao số 51 là hợp số.', solution: ['$51=3\\times17$, có nhiều hơn 2 ước (1, 3, 17, 51) nên 51 là hợp số.'] },
      { prompt: 'Bài 5. Tìm tất cả số nguyên tố nhỏ hơn 20.', solution: ['Các số nguyên tố nhỏ hơn 20 là: 2, 3, 5, 7, 11, 13, 17, 19.'] },
    ],
    flashcards: [
      { front: 'Định nghĩa số nguyên tố', back: 'Số tự nhiên > 1, chỉ có đúng 2 ước là 1 và chính nó' },
      { front: 'Định nghĩa hợp số', back: 'Số tự nhiên > 1, có nhiều hơn 2 ước' },
      { front: 'Số 0 và số 1', back: 'Không là số nguyên tố, cũng không là hợp số' },
      { front: 'Số nguyên tố chẵn duy nhất', back: '2' },
      { front: 'Phân tích 60 ra thừa số nguyên tố', back: '$60=2^2\\times3\\times5$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số nào sau đây là số nguyên tố?', options: ['13', '15', '21', '25'], correctIndex: 0 },
        { question: 'Số nào sau đây là hợp số?', options: ['16', '3', '7', '11'], correctIndex: 0 },
        { question: 'Số nguyên tố nhỏ nhất là?', options: ['2', '0', '1', '3'], correctIndex: 0 },
        { question: 'Số 1 được xếp vào loại nào?', options: ['Không nguyên tố, không hợp số', 'Số nguyên tố', 'Hợp số', 'Vừa nguyên tố vừa hợp số'], correctIndex: 0 },
        { question: 'Trong các số sau, số nào KHÔNG phải số nguyên tố?', options: ['9', '2', '5', '7'], correctIndex: 0 },
        { question: 'Ước của một số nguyên tố p là?', options: ['1 và p', 'Chỉ có 1', 'Chỉ có p', 'Nhiều hơn 2 ước'], correctIndex: 0 },
        { question: 'Phân tích 18 ra thừa số nguyên tố được kết quả nào?', options: ['2 × 3²', '2 × 9', '3 × 6', '2² × 3'], correctIndex: 0 },
        { question: 'Phân tích 45 ra thừa số nguyên tố được kết quả nào?', options: ['3² × 5', '5 × 9', '3 × 15', '3² × 5²'], correctIndex: 0 },
        { question: 'Số 97 là số nguyên tố hay hợp số? (97 không chia hết cho 2,3,5,7)', options: ['Số nguyên tố', 'Hợp số', 'Không xác định', 'Cả hai'], correctIndex: 0 },
        { question: 'Trong các số 23, 33, 43, 53, số nào là hợp số? (33 = 3×11)', options: ['33', '23', '43', '53'], correctIndex: 0 },
        { question: 'Phân tích 100 ra thừa số nguyên tố được kết quả nào?', options: ['2² × 5²', '2 × 5³', '4 × 25', '2³ × 5'], correctIndex: 0 },
        { question: 'Số nguyên tố nào là ước của 30 mà nhỏ nhất?', options: ['2', '3', '5', '1'], correctIndex: 0 },
        { question: 'Tích các thừa số nguyên tố của 2² × 3 × 5 bằng?', options: ['60', '30', '40', '20'], correctIndex: 0 },
        { question: 'Số 91 = 7 × 13. Vậy 91 là?', options: ['Hợp số', 'Số nguyên tố', 'Không xác định', 'Vừa nguyên tố vừa hợp số'], correctIndex: 0 },
        { question: 'Trong khoảng từ 20 đến 30, có bao nhiêu số nguyên tố (23, 29)?', options: ['2', '1', '3', '4'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Phân tích số 72 ra thừa số nguyên tố.',
          solution: ['$72=2\\times36=2\\times2\\times18=2\\times2\\times2\\times9=2\\times2\\times2\\times3\\times3$', '$72=2^3\\times3^2$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm số tự nhiên nhỏ nhất có 3 thừa số nguyên tố khác nhau đều là số nguyên tố lẻ.',
          solution: [
            'Ba số nguyên tố lẻ nhỏ nhất: 3, 5, 7.',
            'Số cần tìm: $3\\times5\\times7=105$',
          ],
        },
      ],
    },
  },

  'l6-uoc-boi-chung': {
    title: 'Ước chung, bội chung, ƯCLN, BCNN',
    theory: {
      cards: [
        {
          title: 'Ước chung và ước chung lớn nhất (ƯCLN)',
          formulas: ['\\text{ƯCLN}(a,b) = \\text{tích các thừa số nguyên tố chung, mũ nhỏ nhất}'],
          legend: ['Ước chung của hai hay nhiều số: số vừa là ước của số này vừa là ước của số kia', 'ƯCLN: ước chung lớn nhất trong các ước chung'],
          note: 'Mẹo tìm ƯCLN: phân tích các số ra thừa số nguyên tố, lấy các thừa số nguyên tố CHUNG với số mũ NHỎ NHẤT.',
        },
        {
          title: 'Bội chung và bội chung nhỏ nhất (BCNN)',
          formulas: ['\\text{BCNN}(a,b) = \\text{tích các thừa số nguyên tố chung và riêng, mũ lớn nhất}'],
          legend: ['Bội chung của hai hay nhiều số: số vừa là bội của số này vừa là bội của số kia', 'BCNN: bội chung nhỏ nhất khác 0 trong các bội chung'],
          note: 'Mẹo tìm BCNN: phân tích các số ra thừa số nguyên tố, lấy tất cả thừa số nguyên tố CHUNG và RIÊNG với số mũ LỚN NHẤT.',
        },
      ],
    },
    video: { caption: '00:00 / 12:20 — uoc_boi_chung_baigiang.mp4' },
    quiz: [
      { question: 'ƯCLN(12, 18) bằng?', options: ['6', '3', '36', '12'], correctIndex: 0 },
      { question: 'BCNN(4, 6) bằng?', options: ['12', '24', '6', '10'], correctIndex: 0 },
      { question: 'Ước chung của 8 và 12 là?', options: ['{1;2;4}', '{1;2}', '{4;8}', '{1;2;4;8}'], correctIndex: 0 },
      { question: 'Hai số nào sau đây là hai số nguyên tố cùng nhau (ƯCLN = 1)?', options: ['8 và 9', '6 và 9', '4 và 6', '10 và 15'], correctIndex: 0 },
      { question: 'BCNN(3, 5) bằng?', options: ['15', '8', '1', '5'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm ƯCLN(24, 36).', solution: ['$24=2^3\\times3$', '$36=2^2\\times3^2$', 'ƯCLN$=2^2\\times3=12$'] },
      { prompt: 'Bài 2. Tìm BCNN(8, 12).', solution: ['$8=2^3$', '$12=2^2\\times3$', 'BCNN$=2^3\\times3=24$'] },
      { prompt: 'Bài 3. Tìm ước chung của 18 và 24.', solution: ['Ước của 18: 1,2,3,6,9,18', 'Ước của 24: 1,2,3,4,6,8,12,24', 'Ước chung: $\\{1;2;3;6\\}$'] },
      {
        prompt: 'Bài 4. Một đội có 30 học sinh nam và 24 học sinh nữ, chia thành các tổ sao cho số nam và số nữ đều đều nhau ở mỗi tổ. Hỏi có thể chia được nhiều nhất bao nhiêu tổ?',
        solution: ['Số tổ nhiều nhất chính là ƯCLN(30,24).', '$30=2\\times3\\times5$, $24=2^3\\times3$', 'ƯCLN$=2\\times3=6$. Vậy chia được nhiều nhất 6 tổ.'],
      },
      {
        prompt: 'Bài 5. Hai bạn An và Bình cùng trực nhật, An cứ 4 ngày trực một lần, Bình cứ 6 ngày trực một lần. Hỏi sau ít nhất bao nhiêu ngày hai bạn lại cùng trực một ngày?',
        solution: ['Số ngày cần tìm là BCNN(4,6).', '$4=2^2$, $6=2\\times3$', 'BCNN$=2^2\\times3=12$. Vậy sau ít nhất 12 ngày.'],
      },
    ],
    flashcards: [
      { front: 'Cách tìm ƯCLN', back: 'Tích các thừa số nguyên tố chung, mũ nhỏ nhất' },
      { front: 'Cách tìm BCNN', back: 'Tích các thừa số nguyên tố chung và riêng, mũ lớn nhất' },
      { front: 'Hai số nguyên tố cùng nhau', back: 'ƯCLN của chúng bằng 1' },
      { front: 'ƯCLN(a,b) khi a chia hết cho b', back: 'ƯCLN(a,b) = b' },
      { front: 'BCNN(a,b) khi a chia hết cho b', back: 'BCNN(a,b) = a' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'ƯCLN(8, 12) bằng?', options: ['4', '2', '24', '8'], correctIndex: 0 },
        { question: 'BCNN(6, 8) bằng?', options: ['24', '48', '2', '14'], correctIndex: 0 },
        { question: 'Ước chung của 6 và 9 là?', options: ['{1;3}', '{1;2;3}', '{3;6}', '{1;9}'], correctIndex: 0 },
        { question: 'Hai số nguyên tố cùng nhau có ƯCLN bằng?', options: ['1', '0', 'Chính hai số đó', 'Không xác định'], correctIndex: 0 },
        { question: 'BCNN(4, 5) bằng?', options: ['20', '9', '1', '10'], correctIndex: 0 },
        { question: 'ƯCLN(10, 15) bằng?', options: ['5', '1', '10', '15'], correctIndex: 0 },
        { question: 'BCNN(2, 3, 4) bằng?', options: ['12', '24', '6', '8'], correctIndex: 0 },
        { question: 'Ước chung lớn nhất của hai số bằng 1 khi nào?', options: ['Hai số đó nguyên tố cùng nhau', 'Hai số đó bằng nhau', 'Một trong hai số là 0', 'Không thể xảy ra'], correctIndex: 0 },
        { question: 'ƯCLN(a, b) khi a chia hết cho b là?', options: ['b', 'a', '1', 'ab'], correctIndex: 0 },
        { question: 'BCNN(a, b) khi a chia hết cho b là?', options: ['a', 'b', '1', 'ab'], correctIndex: 0 },
        { question: 'ƯCLN(15, 25) bằng?', options: ['5', '1', '15', '75'], correctIndex: 0 },
        { question: 'BCNN(9, 12) bằng?', options: ['36', '108', '3', '21'], correctIndex: 0 },
        { question: 'Số tổ nhiều nhất chia đều 20 nam và 30 nữ (số nam, nữ bằng nhau mỗi tổ) là bao nhiêu? (ƯCLN(20,30))', options: ['10', '5', '20', '30'], correctIndex: 0 },
        { question: 'Hai bạn trực nhật theo chu kì 3 ngày và 5 ngày. Sau ít nhất bao nhiêu ngày cùng trực? (BCNN(3,5))', options: ['15', '8', '3', '5'], correctIndex: 0 },
        { question: 'Ước chung lớn nhất của 0 và 5 (theo quy ước ƯCLN(0,a)=a) là?', options: ['5', '0', '1', 'Không xác định'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm ƯCLN và BCNN của 20 và 30.',
          solution: ['$20=2^2\\times5$', '$30=2\\times3\\times5$', 'ƯCLN$=2\\times5=10$', 'BCNN$=2^2\\times3\\times5=60$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một lớp có 40 học sinh nam và 32 học sinh nữ. Cô giáo muốn chia lớp thành các nhóm sao cho số nam và số nữ ở mỗi nhóm bằng nhau, chia được nhiều nhóm nhất có thể. Hỏi chia được nhiều nhất bao nhiêu nhóm, mỗi nhóm có bao nhiêu nam, bao nhiêu nữ?',
          solution: [
            'Số nhóm nhiều nhất là ƯCLN(40,32).',
            '$40=2^3\\times5$, $32=2^5$',
            'ƯCLN$=2^3=8$. Vậy chia được nhiều nhất 8 nhóm.',
            'Mỗi nhóm có $40:8=5$ nam và $32:8=4$ nữ.',
          ],
        },
      ],
    },
  },
}
