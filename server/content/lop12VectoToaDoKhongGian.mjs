import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP12_VECTO_TOA_DO_KHONG_GIAN = {
  'l12-vecto-khong-gian': {
    title: 'Vectơ và các phép toán vectơ trong không gian',
    theory: {
      cards: [
        {
          title: 'Vectơ trong không gian và các phép toán',
          formulas: ['\\vec{a}+\\vec{b},\\quad \\vec a - \\vec b,\\quad k\\vec a'],
          legend: ["Quy tắc 3 điểm: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$", "Quy tắc hình hộp: $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$ (với ABCD.A'B'C'D' là hình hộp)"],
          note: 'Mẹo: các phép toán vectơ trong không gian (cộng, trừ, nhân với số) thực hiện hoàn toàn tương tự như trong mặt phẳng.',
        },
        {
          title: 'Tích vô hướng của hai vectơ trong không gian',
          formulas: ['\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos(\\vec a,\\vec b)'],
          legend: ['Hai vectơ vuông góc $\\Leftrightarrow \\vec a\\cdot\\vec b=0$', '$|\\vec a|=\\sqrt{\\vec a\\cdot\\vec a}$: độ dài vectơ $\\vec a$'],
          note: 'Mẹo: 3 vectơ đồng phẳng khi giá của chúng cùng song song với 1 mặt phẳng — đây là điều kiện quan trọng để xét sự đồng phẳng.',
        },
      ],
    },
    video: { caption: '00:00 / 14:20 — vecto_khong_gian_baigiang.mp4' },
    quiz: [
      { question: 'Quy tắc 3 điểm cho vectơ là?', options: ['AB + BC = AC', 'AB + AC = BC', 'AB − BC = AC', 'AB × BC = AC'], correctIndex: 0 },
      { question: 'Hai vectơ vuông góc khi nào?', options: ['Tích vô hướng bằng 0', 'Tích vô hướng bằng 1', 'Độ dài bằng nhau', 'Cùng phương'], correctIndex: 0 },
      { question: 'Công thức tích vô hướng của 2 vectơ là?', options: ['|a||b|cos(a,b)', '|a||b|sin(a,b)', '|a|+|b|', '|a|−|b|'], correctIndex: 0 },
      { question: 'Ba vectơ đồng phẳng là 3 vectơ có giá?', options: ['Cùng song song với 1 mặt phẳng', 'Cùng phương', 'Vuông góc với nhau', 'Bằng nhau'], correctIndex: 0 },
      { question: "Trong hình hộp ABCD.A'B'C'D', vectơ AC' bằng tổng của những vectơ nào?", options: ["AB + AD + AA'", 'AB + AD', "AB + AA'", "AD + AA'"], correctIndex: 0 },
    ],
    essays: [
      { prompt: "Bài 1. Cho hình hộp ABCD.A'B'C'D'. Chứng minh $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}$.", solution: ["$\\overrightarrow{AC'}=\\overrightarrow{AC}+\\overrightarrow{CC'}$", "Vì $\\overrightarrow{CC'}=\\overrightarrow{AA'}$ và $\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$ (quy tắc hình bình hành đáy)", "Vậy $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}$"] },
      { prompt: 'Bài 2. Cho tứ diện ABCD, M là trung điểm BC. Chứng minh $\\overrightarrow{AM}=\\dfrac12(\\overrightarrow{AB}+\\overrightarrow{AC})$.', solution: ['Theo tính chất trung điểm đoạn thẳng BC, với A là điểm bất kỳ: $\\overrightarrow{AM}=\\dfrac12(\\overrightarrow{AB}+\\overrightarrow{AC})$'] },
      { prompt: 'Bài 3. Cho hai vectơ a, b với |a|=3, |b|=4, góc giữa chúng bằng 60°. Tính a·b.', solution: ['$\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos60°=3\\times4\\times\\dfrac12=6$'] },
      { prompt: 'Bài 4. Cho hai vectơ a, b vuông góc, |a|=3, |b|=4. Tính |a+b|.', solution: ['$|\\vec a+\\vec b|^2=|\\vec a|^2+2\\vec a\\cdot\\vec b+|\\vec b|^2=9+0+16=25$', '$|\\vec a+\\vec b|=5$'] },
      { prompt: "Bài 5. Cho hình lập phương ABCD.A'B'C'D' cạnh a. Tính $\\overrightarrow{AC'}\\cdot\\overrightarrow{AB}$.", solution: ["$\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}$", "$\\overrightarrow{AC'}\\cdot\\overrightarrow{AB}=\\overrightarrow{AB}\\cdot\\overrightarrow{AB}+\\overrightarrow{AD}\\cdot\\overrightarrow{AB}+\\overrightarrow{AA'}\\cdot\\overrightarrow{AB}=a^2+0+0=a^2$"] },
    ],
    flashcards: [
      { front: 'Quy tắc 3 điểm', back: '$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$' },
      { front: 'Quy tắc hình hộp', back: "$\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{AC'}$" },
      { front: 'Điều kiện 2 vectơ vuông góc', back: '$\\vec a\\cdot\\vec b=0$' },
      { front: 'Công thức tích vô hướng', back: '$\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos(\\vec a,\\vec b)$' },
      { front: '3 vectơ đồng phẳng', back: 'Giá của 3 vectơ cùng song song với 1 mặt phẳng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Quy tắc 3 điểm cho vectơ là?', options: ['AB + BC = AC', 'AB + AC = BC', 'AB − BC = AC', 'AB × BC = AC'], correctIndex: 0 },
        { question: 'Hai vectơ vuông góc khi nào?', options: ['Tích vô hướng bằng 0', 'Tích vô hướng bằng 1', 'Độ dài bằng nhau', 'Cùng phương'], correctIndex: 0 },
        { question: 'Công thức tích vô hướng của hai vectơ là?', options: ['|a||b|cos(a,b)', '|a||b|sin(a,b)', '|a|+|b|', '|a|−|b|'], correctIndex: 0 },
        { question: 'Ba vectơ đồng phẳng là 3 vectơ có giá?', options: ['Cùng song song với 1 mặt phẳng', 'Cùng phương', 'Vuông góc với nhau', 'Bằng nhau'], correctIndex: 0 },
        { question: 'Độ dài của vectơ a được tính bằng?', options: ['√(a·a)', 'a·a', '2a·a', 'a/2'], correctIndex: 0 },
        { question: 'Quy tắc trung điểm M của đoạn AB cho vectơ OM (O bất kỳ) là?', options: ['OM = (OA+OB)/2', 'OM = OA+OB', 'OM = OA−OB', 'OM = 2(OA+OB)'], correctIndex: 0 },
        { question: 'Cho |a|=5, |b|=2, góc giữa chúng 90°. Tích vô hướng a·b bằng?', options: ['0', '10', '7', '3'], correctIndex: 0 },
        { question: 'Cho |a|=2, |b|=3, góc giữa chúng 60°. Tích vô hướng a·b bằng?', options: ['3', '6', '5', '1'], correctIndex: 0 },
        { question: 'Cho |a|=2, |b|=3, góc giữa chúng 180°. Tích vô hướng a·b bằng?', options: ['−6', '6', '0', '5'], correctIndex: 0 },
        { question: "Cho hình hộp ABCD.A'B'C'D'. AC' bằng tổng vectơ nào?", options: ["AB + AD + AA'", 'AB + AD', "AB + AA'", "AD + AA'"], correctIndex: 0 },
        { question: 'Cho a, b vuông góc, |a|=3, |b|=4. Tính |a+b|.', options: ['5', '7', '1', '12'], correctIndex: 0 },
        { question: 'Cho tam giác ABC, M là trung điểm BC. Vectơ AM bằng?', options: ['(AB+AC)/2', 'AB+AC', '(AB−AC)/2', '2(AB+AC)'], correctIndex: 0 },
        { question: 'Cho hình lập phương cạnh a. Tính AC′·AB.', options: ['a²', '2a²', 'a²/2', '0'], correctIndex: 0 },
        { question: 'Cho tứ diện đều ABCD cạnh a. Tính AB·AC.', options: ['a²/2', 'a²', '0', 'a²/4'], correctIndex: 0 },
        { question: 'Cho hai vectơ a, b với |a|=1, |b|=2, |a+b|=√7. Tính góc giữa a và b.', options: ['60°', '90°', '30°', '120°'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: "Câu 1 (Thông hiểu). Cho hình hộp ABCD.A'B'C'D'. Gọi O là tâm của hình hộp (giao điểm các đường chéo). Chứng minh $\\overrightarrow{AO}=\\dfrac12(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'})$.",
          solution: ["Theo quy tắc hình hộp: $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}$", "Vì O là trung điểm của $AC'$ (tâm hình hộp là trung điểm đường chéo chính)", "$\\overrightarrow{AO}=\\dfrac12\\overrightarrow{AC'}=\\dfrac12(\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'})$"],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho tứ diện đều ABCD cạnh a. Tính $\\overrightarrow{AB}\\cdot\\overrightarrow{CD}$.',
          solution: [
            '$\\overrightarrow{CD}=\\overrightarrow{AD}-\\overrightarrow{AC}$',
            '$\\overrightarrow{AB}\\cdot\\overrightarrow{CD}=\\overrightarrow{AB}\\cdot\\overrightarrow{AD}-\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$',
            'Vì tứ diện đều, các góc giữa các cạnh đều bằng 60°: $\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=a^2\\cos60°=\\dfrac{a^2}{2}$',
            'Vậy $\\overrightarrow{AB}\\cdot\\overrightarrow{CD}=\\dfrac{a^2}{2}-\\dfrac{a^2}{2}=0$ (AB vuông góc CD)',
          ],
        },
      ],
    },
  },

  'l12-toa-do-diem-vecto': {
    title: 'Toạ độ của điểm và vectơ trong không gian',
    theory: {
      cards: [
        {
          title: 'Hệ trục toạ độ Oxyz',
          formulas: ['M(x;y;z)', '\\overrightarrow{OM}=x\\vec i+y\\vec j+z\\vec k'],
          legend: ['$\\vec i,\\vec j,\\vec k$: các vectơ đơn vị trên 3 trục $Ox, Oy, Oz$', '$x,y,z$: hoành độ, tung độ, cao độ của điểm $M$'],
          note: 'Mẹo: 3 trục Ox, Oy, Oz đôi một vuông góc, tạo thành hệ trục toạ độ Oxyz trong không gian.',
        },
        {
          title: 'Toạ độ vectơ và độ dài đoạn thẳng',
          formulas: ['\\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)', 'AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}'],
          legend: ['Toạ độ trung điểm M của AB: $M\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2};\\dfrac{z_A+z_B}{2}\\right)$'],
          note: 'Mẹo: công thức độ dài đoạn thẳng trong không gian là mở rộng trực tiếp của công thức khoảng cách trong mặt phẳng, thêm thành phần z.',
        },
      ],
    },
    video: { caption: '00:00 / 13:50 — toa_do_diem_vecto_baigiang.mp4' },
    quiz: [
      { question: 'Cho A(1;2;3), B(4;6;3). Toạ độ vectơ AB là?', options: ['(3;4;0)', '(5;8;6)', '(3;4;3)', '(−3;−4;0)'], correctIndex: 0 },
      { question: 'Độ dài AB với A(1;2;3), B(4;6;3) bằng?', options: ['5', '7', '25', '3'], correctIndex: 0 },
      { question: 'Cho A(0;0;0), B(2;2;2). Toạ độ trung điểm của AB là?', options: ['(1;1;1)', '(2;2;2)', '(0;0;0)', '(4;4;4)'], correctIndex: 0 },
      { question: 'Điểm M(x;y;z) có OM = x·i + y·j + z·k. Trong đó i, j, k là gì?', options: ['Vectơ đơn vị trên 3 trục Ox, Oy, Oz', 'Toạ độ của O', 'Toạ độ của M', 'Trung điểm OM'], correctIndex: 0 },
      { question: 'Cho A(1;−1;2), B(3;1;0). Toạ độ vectơ AB là?', options: ['(2;2;−2)', '(4;0;2)', '(−2;−2;2)', '(2;0;−2)'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Cho A(1;0;2), B(3;4;−2). Tìm toạ độ vectơ AB và tính độ dài AB.', solution: ['$\\overrightarrow{AB}=(2;4;-4)$', '$AB=\\sqrt{4+16+16}=\\sqrt{36}=6$'] },
      { prompt: 'Bài 2. Cho A(2;−1;3), B(0;3;1). Tìm toạ độ trung điểm M của đoạn AB.', solution: ['$M=\\left(\\dfrac{2+0}{2};\\dfrac{-1+3}{2};\\dfrac{3+1}{2}\\right)=(1;1;2)$'] },
      { prompt: 'Bài 3. Cho tam giác ABC với A(1;2;−1), B(2;−1;3), C(−1;5;1). Tìm toạ độ trọng tâm G.', solution: ['$G=\\left(\\dfrac{1+2-1}{3};\\dfrac{2-1+5}{3};\\dfrac{-1+3+1}{3}\\right)=\\left(\\dfrac23;2;1\\right)$'] },
      {
        prompt: 'Bài 4. Cho A(1;1;1), B(2;2;2), C(0;0;3). Xác định loại tam giác ABC.',
        solution: ['$AB=\\sqrt{1+1+1}=\\sqrt3$', '$AC=\\sqrt{1+1+4}=\\sqrt6$', '$BC=\\sqrt{4+4+1}=3$', 'Vì $AB^2+AC^2=3+6=9=BC^2$ nên tam giác ABC vuông tại A'],
      },
      { prompt: 'Bài 5. Cho A(2;0;0), B(0;3;0), C(0;0;4). Tìm toạ độ trọng tâm G của tam giác ABC.', solution: ['$G=\\left(\\dfrac{2+0+0}{3};\\dfrac{0+3+0}{3};\\dfrac{0+0+4}{3}\\right)=\\left(\\dfrac23;1;\\dfrac43\\right)$'] },
    ],
    flashcards: [
      { front: 'Toạ độ vectơ AB theo toạ độ A, B', back: '$\\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)$' },
      { front: 'Công thức độ dài đoạn AB trong không gian', back: '$AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}$' },
      { front: 'Toạ độ trung điểm M của AB', back: '$M\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2};\\frac{z_A+z_B}{2}\\right)$' },
      { front: 'Toạ độ trọng tâm G của tam giác ABC', back: '$G\\left(\\frac{x_A+x_B+x_C}{3};\\frac{y_A+y_B+y_C}{3};\\frac{z_A+z_B+z_C}{3}\\right)$' },
      { front: 'Vectơ đơn vị trên 3 trục', back: '$\\vec i(1;0;0),\\ \\vec j(0;1;0),\\ \\vec k(0;0;1)$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Toạ độ vectơ AB theo toạ độ A(xₐ;yₐ;zₐ), B(x_b;y_b;z_b) là?', options: ['(x_b−xₐ; y_b−yₐ; z_b−zₐ)', '(xₐ−x_b; yₐ−y_b; zₐ−z_b)', '(xₐ+x_b; yₐ+y_b; zₐ+z_b)', '(xₐx_b; yₐy_b; zₐz_b)'], correctIndex: 0 },
        { question: 'Công thức tính độ dài đoạn thẳng AB trong không gian là?', options: ['√[(x_b−xₐ)²+(y_b−yₐ)²+(z_b−zₐ)²]', '(x_b−xₐ)+(y_b−yₐ)+(z_b−zₐ)', '(x_b−xₐ)²+(y_b−yₐ)²+(z_b−zₐ)²', 'x_b − xₐ'], correctIndex: 0 },
        { question: 'Toạ độ trung điểm M của đoạn AB là?', options: ['Trung bình cộng toạ độ tương ứng của A và B', 'Tổng toạ độ của A và B', 'Hiệu toạ độ của A và B', 'Tích toạ độ của A và B'], correctIndex: 0 },
        { question: 'Toạ độ trọng tâm G của tam giác ABC là?', options: ['Trung bình cộng toạ độ tương ứng của A, B, C', 'Tổng toạ độ của A, B, C', 'Trung điểm của AB', 'Trung điểm của AC'], correctIndex: 0 },
        { question: 'Vectơ đơn vị trên trục Ox có toạ độ là?', options: ['(1;0;0)', '(0;1;0)', '(0;0;1)', '(1;1;1)'], correctIndex: 0 },
        { question: 'Điểm M(x;y;z) nằm trên mặt phẳng Oxy khi nào?', options: ['z = 0', 'x = 0', 'y = 0', 'x = y = 0'], correctIndex: 0 },
        { question: 'Cho A(1;2;3), B(4;6;3). Toạ độ vectơ AB là?', options: ['(3;4;0)', '(5;8;6)', '(3;4;3)', '(−3;−4;0)'], correctIndex: 0 },
        { question: 'Độ dài AB với A(1;2;3), B(4;6;3) bằng?', options: ['5', '7', '25', '3'], correctIndex: 0 },
        { question: 'Cho A(0;0;0), B(2;2;2). Toạ độ trung điểm AB là?', options: ['(1;1;1)', '(2;2;2)', '(0;0;0)', '(4;4;4)'], correctIndex: 0 },
        { question: 'Cho A(1;−1;2), B(3;1;0). Toạ độ vectơ AB là?', options: ['(2;2;−2)', '(4;0;2)', '(−2;−2;2)', '(2;0;−2)'], correctIndex: 0 },
        { question: 'Cho A(2;0;0), B(0;3;0), C(0;0;4). Toạ độ trọng tâm G là?', options: ['(2/3;1;4/3)', '(2;3;4)', '(1;1;1)', '(2/3;3;4)'], correctIndex: 0 },
        { question: 'Cho A(1;0;2), B(3;4;−2). Độ dài AB bằng?', options: ['6', '4', '8', '36'], correctIndex: 0 },
        { question: 'Cho tam giác ABC với A(1;2;−1), B(2;−1;3), C(−1;5;1). Toạ độ trọng tâm G là?', options: ['(2/3;2;1)', '(2;6;3)', '(1;2;1)', '(0;2;1)'], correctIndex: 0 },
        { question: 'Cho A(1;1;1), B(2;2;2), C(0;0;3). Tam giác ABC là tam giác gì?', options: ['Tam giác vuông tại A', 'Tam giác đều', 'Tam giác cân tại B', 'Tam giác vuông tại B'], correctIndex: 0 },
        { question: 'Cho A(2;−1;3), B(0;3;1). Toạ độ trung điểm M của AB là?', options: ['(1;1;2)', '(2;4;4)', '(2;2;2)', '(1;2;2)'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Trong không gian Oxyz, cho A(2;−1;3) và B(4;3;−1). Tìm toạ độ vectơ AB và độ dài đoạn thẳng AB.',
          solution: ['$\\overrightarrow{AB}=(4-2;3-(-1);-1-3)=(2;4;-4)$', '$AB=\\sqrt{4+16+16}=\\sqrt{36}=6$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho tam giác ABC với A(1;0;0), B(0;2;0), C(0;0;3). Tìm toạ độ trọng tâm G và tính độ dài trung tuyến AM (M là trung điểm BC).',
          solution: [
            '$G=\\left(\\dfrac13;\\dfrac23;1\\right)$',
            'M là trung điểm BC: $M=\\left(0;1;\\dfrac32\\right)$',
            '$AM=\\sqrt{(0-1)^2+(1-0)^2+\\left(\\dfrac32-0\\right)^2}=\\sqrt{1+1+\\dfrac94}=\\sqrt{\\dfrac{17}{4}}=\\dfrac{\\sqrt{17}}{2}$',
          ],
        },
      ],
    },
  },

  'l12-bieu-thuc-toa-do': {
    title: 'Biểu thức toạ độ của các phép toán vectơ',
    theory: {
      cards: [
        {
          title: 'Biểu thức toạ độ của tổng, hiệu, tích với số thực',
          formulas: ['\\vec a=(a_1;a_2;a_3),\\ \\vec b=(b_1;b_2;b_3)', '\\vec a\\pm\\vec b=(a_1\\pm b_1;a_2\\pm b_2;a_3\\pm b_3)', 'k\\vec a=(ka_1;ka_2;ka_3)'],
          legend: [],
          note: 'Mẹo: hai vectơ bằng nhau khi và chỉ khi các toạ độ tương ứng bằng nhau.',
        },
        {
          title: 'Biểu thức toạ độ của tích vô hướng và ứng dụng',
          formulas: ['\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3', '|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}', '\\cos(\\vec a,\\vec b)=\\dfrac{\\vec a\\cdot\\vec b}{|\\vec a||\\vec b|}'],
          legend: ['Hai vectơ vuông góc $\\Leftrightarrow a_1b_1+a_2b_2+a_3b_3=0$'],
          note: 'Mẹo: hai vectơ cùng phương khi và chỉ khi toạ độ tương ứng của chúng tỉ lệ: $\\dfrac{a_1}{b_1}=\\dfrac{a_2}{b_2}=\\dfrac{a_3}{b_3}$.',
        },
      ],
    },
    video: { caption: '00:00 / 14:35 — bieu_thuc_toa_do_baigiang.mp4' },
    quiz: [
      { question: 'Cho a=(1;2;3), b=(2;−1;1). Toạ độ a+b là?', options: ['(3;1;4)', '(1;3;2)', '(−1;3;2)', '(3;−1;4)'], correctIndex: 0 },
      { question: 'Cho a=(1;2;3), b=(2;−1;1). Tích vô hướng a·b bằng?', options: ['3', '6', '0', '5'], correctIndex: 0 },
      { question: 'Cho a=(1;0;0), b=(0;1;0). Hai vectơ này có quan hệ gì?', options: ['Vuông góc', 'Cùng phương', 'Bằng nhau', 'Đối nhau'], correctIndex: 0 },
      { question: 'Cho a=(2;4;−2). Độ dài của a bằng?', options: ['2√6', '√6', '4√6', '6'], correctIndex: 0 },
      { question: 'Hai vectơ a=(1;2;3), b=(2;4;6) có quan hệ gì?', options: ['Cùng phương', 'Vuông góc', 'Bằng nhau', 'Không liên quan'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Cho a=(2;−1;3), b=(1;2;−1). Tính a+b, a−b, và 2a.', solution: ['$\\vec a+\\vec b=(3;1;2)$', '$\\vec a-\\vec b=(1;-3;4)$', '$2\\vec a=(4;-2;6)$'] },
      { prompt: 'Bài 2. Cho a=(1;2;2). Tính |a|.', solution: ['$|\\vec a|=\\sqrt{1+4+4}=\\sqrt9=3$'] },
      { prompt: 'Bài 3. Cho a=(1;−2;3), b=(2;1;m). Tìm m để a vuông góc với b.', solution: ['$\\vec a\\cdot\\vec b=1\\times2+(-2)\\times1+3\\times m=3m$', 'Để $\\vec a\\perp\\vec b$: $3m=0\\Rightarrow m=0$'] },
      { prompt: 'Bài 4. Cho a=(2;1;−1), b=(1;−1;2). Tính cos góc giữa a và b.', solution: ['$\\vec a\\cdot\\vec b=2-1-2=-1$', '$|\\vec a|=\\sqrt6,\\ |\\vec b|=\\sqrt6$', '$\\cos(\\vec a,\\vec b)=\\dfrac{-1}{\\sqrt6\\cdot\\sqrt6}=-\\dfrac16$'] },
      { prompt: 'Bài 5. Cho a=(m;−4;6), b=(1;−2;3) cùng phương. Tìm m.', solution: ['Điều kiện: $\\dfrac{m}{1}=\\dfrac{-4}{-2}=\\dfrac{6}{3}=2$', 'Vậy $m=2$'] },
    ],
    flashcards: [
      { front: 'Biểu thức toạ độ tổng 2 vectơ', back: '$\\vec a+\\vec b=(a_1+b_1;a_2+b_2;a_3+b_3)$' },
      { front: 'Biểu thức toạ độ tích vô hướng', back: '$\\vec a\\cdot\\vec b=a_1b_1+a_2b_2+a_3b_3$' },
      { front: 'Công thức độ dài vectơ theo toạ độ', back: '$|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$' },
      { front: 'Điều kiện 2 vectơ cùng phương', back: 'Toạ độ tương ứng tỉ lệ: $\\frac{a_1}{b_1}=\\frac{a_2}{b_2}=\\frac{a_3}{b_3}$' },
      { front: 'Công thức tính góc giữa 2 vectơ', back: '$\\cos(\\vec a,\\vec b)=\\dfrac{\\vec a\\cdot\\vec b}{|\\vec a||\\vec b|}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Biểu thức toạ độ của tổng 2 vectơ a=(a₁;a₂;a₃), b=(b₁;b₂;b₃) là?', options: ['(a₁+b₁; a₂+b₂; a₃+b₃)', '(a₁b₁; a₂b₂; a₃b₃)', '(a₁−b₁; a₂−b₂; a₃−b₃)', 'a₁+a₂+a₃+b₁+b₂+b₃'], correctIndex: 0 },
        { question: 'Công thức tính tích vô hướng theo toạ độ là?', options: ['a₁b₁+a₂b₂+a₃b₃', 'a₁+b₁+a₂+b₂+a₃+b₃', 'a₁b₁−a₂b₂−a₃b₃', '(a₁+a₂+a₃)(b₁+b₂+b₃)'], correctIndex: 0 },
        { question: 'Công thức tính độ dài vectơ a=(a₁;a₂;a₃) là?', options: ['√(a₁²+a₂²+a₃²)', 'a₁+a₂+a₃', 'a₁²+a₂²+a₃²', '√(a₁+a₂+a₃)'], correctIndex: 0 },
        { question: 'Hai vectơ vuông góc khi và chỉ khi?', options: ['a₁b₁+a₂b₂+a₃b₃ = 0', 'a₁=b₁, a₂=b₂, a₃=b₃', 'a₁/b₁ = a₂/b₂ = a₃/b₃', 'a₁b₁+a₂b₂+a₃b₃ = 1'], correctIndex: 0 },
        { question: 'Hai vectơ cùng phương khi và chỉ khi?', options: ['Toạ độ tương ứng tỉ lệ', 'Tích vô hướng bằng 0', 'Độ dài bằng nhau', 'Toạ độ đối nhau'], correctIndex: 0 },
        { question: 'Biểu thức toạ độ của k·a với a=(a₁;a₂;a₃) là?', options: ['(ka₁; ka₂; ka₃)', '(a₁+k; a₂+k; a₃+k)', 'k(a₁+a₂+a₃)', '(a₁/k; a₂/k; a₃/k)'], correctIndex: 0 },
        { question: 'Cho a=(1;2;3), b=(2;−1;1). Toạ độ a+b là?', options: ['(3;1;4)', '(1;3;2)', '(−1;3;2)', '(3;−1;4)'], correctIndex: 0 },
        { question: 'Cho a=(1;2;3), b=(2;−1;1). Tích vô hướng a·b bằng?', options: ['3', '6', '0', '5'], correctIndex: 0 },
        { question: 'Cho a=(1;0;0), b=(0;1;0). Hai vectơ này có quan hệ gì?', options: ['Vuông góc', 'Cùng phương', 'Bằng nhau', 'Đối nhau'], correctIndex: 0 },
        { question: 'Cho a=(2;4;−2). Độ dài của a bằng?', options: ['2√6', '√6', '4√6', '6'], correctIndex: 0 },
        { question: 'Cho a=(1;2;3), b=(2;4;6). Hai vectơ này có quan hệ gì?', options: ['Cùng phương', 'Vuông góc', 'Bằng nhau', 'Không liên quan'], correctIndex: 0 },
        { question: 'Cho a=(1;2;2). Độ dài |a| bằng?', options: ['3', '9', '5', '4'], correctIndex: 0 },
        { question: 'Cho a=(1;−2;3), b=(2;1;m). Tìm m để a vuông góc với b.', options: ['0', '1', '−1', '2'], correctIndex: 0 },
        { question: 'Cho a=(2;1;−1), b=(1;−1;2). Tính cos góc giữa a và b.', options: ['−1/6', '1/6', '−1/3', '1/3'], correctIndex: 0 },
        { question: 'Cho a=(m;−4;6), b=(1;−2;3) cùng phương. Tìm m.', options: ['2', '4', '−2', '1'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho hai vectơ a=(2;−1;2) và b=(1;3;−1). Tính a+b, a−b và tích vô hướng a·b.',
          solution: ['$\\vec a+\\vec b=(3;2;1)$', '$\\vec a-\\vec b=(1;-4;3)$', '$\\vec a\\cdot\\vec b=2\\times1+(-1)\\times3+2\\times(-1)=-3$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho a=(1;2;−2) và b=(m;1;2). Tìm m để góc giữa a và b bằng 90°.',
          solution: ['$\\vec a\\cdot\\vec b=1\\times m+2\\times1+(-2)\\times2=m-2$', 'Để góc giữa $\\vec a,\\vec b$ bằng $90°$ thì $\\vec a\\cdot\\vec b=0$: $m-2=0\\Rightarrow m=2$'],
        },
      ],
    },
  },
}
