import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP12_PT_MP_DT_MC = {
  'l12-pt-mat-phang': {
    title: 'Phương trình mặt phẳng',
    theory: {
      cards: [
        {
          title: 'Vectơ pháp tuyến và phương trình tổng quát của mặt phẳng',
          formulas: ['\\vec n=(A;B;C)', 'A(x-x_0)+B(y-y_0)+C(z-z_0)=0'],
          legend: ['$\\vec n=(A;B;C)$: vectơ pháp tuyến của mặt phẳng (vuông góc với mặt phẳng)', '$M_0(x_0;y_0;z_0)$: một điểm thuộc mặt phẳng'],
          note: 'Mẹo: nếu biết 2 vectơ chỉ phương $\\vec u,\\vec v$ nằm trong mặt phẳng, vectơ pháp tuyến là $\\vec n=[\\vec u,\\vec v]$ (tích có hướng).',
        },
        {
          title: 'Vị trí tương đối của hai mặt phẳng',
          formulas: ['(P)\\parallel(Q) \\Leftrightarrow \\vec{n_P}=k\\vec{n_Q}', '(P)\\perp(Q) \\Leftrightarrow \\vec{n_P}\\cdot\\vec{n_Q}=0'],
          legend: ['$\\vec{n_P}, \\vec{n_Q}$: vectơ pháp tuyến của 2 mặt phẳng (P), (Q)'],
          note: 'Mẹo: hai mặt phẳng song song khi 2 vectơ pháp tuyến cùng phương; vuông góc khi tích vô hướng 2 vectơ pháp tuyến bằng 0.',
        },
      ],
    },
    video: { caption: '00:00 / 16:15 — pt_mat_phang_baigiang.mp4' },
    quiz: [
      { question: 'Phương trình mặt phẳng đi qua M₀(x₀;y₀;z₀) với vectơ pháp tuyến n=(A;B;C) là?', options: ['A(x−x₀)+B(y−y₀)+C(z−z₀)=0', 'Ax+By+Cz=0', 'A(x−x₀)=B(y−y₀)=C(z−z₀)', 'Ax₀+By₀+Cz₀=0'], correctIndex: 0 },
      { question: 'Mặt phẳng (P): 2x − y + 3z − 5 = 0 có vectơ pháp tuyến là?', options: ['(2;−1;3)', '(2;1;3)', '(−2;1;−3)', '(5;−1;3)'], correctIndex: 0 },
      { question: 'Hai mặt phẳng song song khi 2 vectơ pháp tuyến của chúng?', options: ['Cùng phương', 'Vuông góc', 'Bằng nhau', 'Đối nhau'], correctIndex: 0 },
      { question: 'Hai mặt phẳng vuông góc khi 2 vectơ pháp tuyến của chúng?', options: ['Có tích vô hướng bằng 0', 'Cùng phương', 'Bằng nhau', 'Song song'], correctIndex: 0 },
      { question: 'Mặt phẳng (Oxy) có phương trình là?', options: ['z = 0', 'x = 0', 'y = 0', 'x+y+z = 0'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Viết phương trình mặt phẳng đi qua điểm M(1;2;−3) và có vectơ pháp tuyến n=(2;−1;4).', solution: ['$2(x-1)-1(y-2)+4(z+3)=0$', '$\\Leftrightarrow 2x-y+4z+12=0$'] },
      { prompt: 'Bài 2. Viết phương trình mặt phẳng đi qua 3 điểm A(1;0;0), B(0;1;0), C(0;0;1).', solution: ['Đây là mặt phẳng đoạn chắn: $\\dfrac{x}{1}+\\dfrac{y}{1}+\\dfrac{z}{1}=1$', '$\\Leftrightarrow x+y+z-1=0$'] },
      { prompt: 'Bài 3. Cho (P): x−2y+3z−1=0 và (Q): 2x−4y+6z+5=0. Chứng minh (P) song song (Q).', solution: ['$\\vec{n_P}=(1;-2;3)$, $\\vec{n_Q}=(2;-4;6)=2(1;-2;3)$', 'Hai VTPT cùng phương nên $(P)\\parallel(Q)$'] },
      { prompt: 'Bài 4. Cho (P): 2x+y−z+1=0 và (Q): x−y+z−3=0. Chứng minh (P) vuông góc (Q).', solution: ['$\\vec{n_P}=(2;1;-1)$, $\\vec{n_Q}=(1;-1;1)$', '$\\vec{n_P}\\cdot\\vec{n_Q}=2-1-1=0$', 'Vậy $(P)\\perp(Q)$'] },
      { prompt: 'Bài 5. Viết phương trình mặt phẳng trung trực của đoạn thẳng AB với A(1;2;3), B(3;4;5).', solution: ['Trung điểm $M(2;3;4)$', 'VTPT $=\\overrightarrow{AB}=(2;2;2)$, chọn $(1;1;1)$', 'PT: $(x-2)+(y-3)+(z-4)=0 \\Leftrightarrow x+y+z-9=0$'] },
    ],
    flashcards: [
      { front: 'Phương trình mặt phẳng qua M₀ với VTPT n=(A;B;C)', back: '$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$' },
      { front: 'Điều kiện 2 mặt phẳng song song', back: 'Vectơ pháp tuyến cùng phương' },
      { front: 'Điều kiện 2 mặt phẳng vuông góc', back: 'Tích vô hướng 2 vectơ pháp tuyến bằng 0' },
      { front: 'Phương trình mặt phẳng (Oxy), (Oyz), (Oxz)', back: 'z=0,  x=0,  y=0' },
      { front: 'Cách tìm VTPT khi biết 2 vectơ chỉ phương trong mặt phẳng', back: 'Tích có hướng của 2 vectơ chỉ phương' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Phương trình tổng quát của mặt phẳng đi qua M₀ với VTPT n=(A;B;C) là?', options: ['A(x−x₀)+B(y−y₀)+C(z−z₀)=0', 'Ax+By+Cz=0', 'A(x−x₀)=B(y−y₀)', 'Ax₀+By₀+Cz₀=0'], correctIndex: 0 },
        { question: 'Mặt phẳng Ax+By+Cz+D=0 có vectơ pháp tuyến là?', options: ['(A;B;C)', '(A;B;D)', '(B;C;D)', '(D;A;B)'], correctIndex: 0 },
        { question: 'Hai mặt phẳng song song khi nào?', options: ['2 VTPT cùng phương', '2 VTPT vuông góc', '2 VTPT bằng nhau', '2 VTPT đối nhau'], correctIndex: 0 },
        { question: 'Hai mặt phẳng vuông góc khi nào?', options: ['Tích vô hướng 2 VTPT bằng 0', '2 VTPT cùng phương', '2 VTPT bằng nhau', '2 VTPT đối nhau'], correctIndex: 0 },
        { question: 'Mặt phẳng (Oxy) có phương trình là?', options: ['z = 0', 'x = 0', 'y = 0', 'x+y = 0'], correctIndex: 0 },
        { question: 'Mặt phẳng (Oyz) có phương trình là?', options: ['x = 0', 'y = 0', 'z = 0', 'y+z = 0'], correctIndex: 0 },
        { question: 'Mặt phẳng (P): 2x − y + 3z − 5 = 0 có vectơ pháp tuyến là?', options: ['(2;−1;3)', '(2;1;3)', '(−2;1;−3)', '(5;−1;3)'], correctIndex: 0 },
        { question: 'Viết phương trình mặt phẳng qua M(1;2;−3), VTPT n=(2;−1;4).', options: ['2x−y+4z+12=0', '2x−y+4z−12=0', '2x+y+4z+12=0', 'x−y+4z+12=0'], correctIndex: 0 },
        { question: 'Mặt phẳng đi qua A(1;0;0), B(0;1;0), C(0;0;1) có phương trình là?', options: ['x+y+z−1=0', 'x+y+z=0', 'x+y+z+1=0', 'x−y+z−1=0'], correctIndex: 0 },
        { question: 'Cho (P): x−2y+3z−1=0, (Q): 2x−4y+6z+5=0. Quan hệ giữa (P) và (Q) là?', options: ['Song song', 'Vuông góc', 'Trùng nhau', 'Cắt nhau'], correctIndex: 0 },
        { question: 'Cho (P): 2x+y−z+1=0, (Q): x−y+z−3=0. Quan hệ giữa (P) và (Q) là?', options: ['Vuông góc', 'Song song', 'Trùng nhau', 'Không xác định'], correctIndex: 0 },
        { question: 'Mặt phẳng trung trực của đoạn AB với A(1;2;3), B(3;4;5) có VTPT cùng phương với vectơ nào?', options: ['(1;1;1)', '(1;2;3)', '(3;4;5)', '(2;3;4)'], correctIndex: 0 },
        { question: 'Phương trình mặt phẳng trung trực của đoạn AB với A(1;2;3), B(3;4;5) là?', options: ['x+y+z−9=0', 'x+y+z+9=0', 'x+y+z−6=0', '2x+2y+2z−9=0'], correctIndex: 0 },
        { question: 'Viết phương trình mặt phẳng qua M(2;−1;3), song song với (P): x+2y−z+5=0.', options: ['x+2y−z+3=0', 'x+2y−z−3=0', 'x+2y+z+3=0', '2x+2y−z+3=0'], correctIndex: 0 },
        { question: 'Viết phương trình mặt phẳng qua M(1;1;1), vuông góc với đường thẳng nối A(0;0;0), B(2;2;2).', options: ['x+y+z−3=0', 'x+y+z+3=0', 'x+y+z−6=0', '2x+2y+2z−3=0'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết phương trình mặt phẳng (P) đi qua điểm M(2;1;−1) và có vectơ pháp tuyến n=(3;−2;1).',
          solution: ['$3(x-2)-2(y-1)+1(z+1)=0$', '$\\Leftrightarrow 3x-2y+z-3=0$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Viết phương trình mặt phẳng (P) đi qua 3 điểm A(1;1;1), B(2;0;1), C(1;2;0).',
          solution: [
            '$\\overrightarrow{AB}=(1;-1;0)$, $\\overrightarrow{AC}=(0;1;-1)$',
            'VTPT $\\vec n=[\\overrightarrow{AB},\\overrightarrow{AC}]=(1;1;1)$',
            'PT: $1(x-1)+1(y-1)+1(z-1)=0 \\Leftrightarrow x+y+z-3=0$',
          ],
        },
      ],
    },
  },

  'l12-pt-duong-thang': {
    title: 'Phương trình đường thẳng trong không gian',
    theory: {
      cards: [
        {
          title: 'Phương trình tham số và chính tắc của đường thẳng',
          formulas: ['\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases}', '\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}=\\dfrac{z-z_0}{c}\\ (abc\\neq0)'],
          legend: ['$M_0(x_0;y_0;z_0)$: điểm thuộc đường thẳng', '$\\vec u=(a;b;c)$: vectơ chỉ phương của đường thẳng', '$t$: tham số'],
          note: 'Mẹo: phương trình chính tắc chỉ viết được khi cả 3 thành phần của vectơ chỉ phương đều khác 0.',
        },
        {
          title: 'Vị trí tương đối của hai đường thẳng',
          formulas: [],
          legend: [
            'Hai đường thẳng song song: 2 vectơ chỉ phương cùng phương, và không trùng nhau',
            'Hai đường thẳng vuông góc: tích vô hướng 2 vectơ chỉ phương bằng 0',
            'Hai đường thẳng chéo nhau: không cùng nằm trên 1 mặt phẳng',
          ],
          note: 'Mẹo: để xét 2 đường thẳng cắt nhau hay chéo nhau (khi không song song), giải hệ phương trình tham số của chúng — có nghiệm thì cắt nhau, vô nghiệm thì chéo nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 15:35 — pt_duong_thang_baigiang.mp4' },
    quiz: [
      { question: 'Phương trình tham số của đường thẳng qua M₀(x₀;y₀;z₀) với VTCP u=(a;b;c) là?', options: ['x=x₀+at, y=y₀+bt, z=z₀+ct', 'x=x₀+a, y=y₀+b, z=z₀+c', 'x=at, y=bt, z=ct', 'x=x₀t, y=y₀t, z=z₀t'], correctIndex: 0 },
      { question: 'Đường thẳng d: (x−1)/2 = (y+2)/(−1) = (z−3)/4 có vectơ chỉ phương là?', options: ['(2;−1;4)', '(1;−2;3)', '(−1;2;−3)', '(2;1;4)'], correctIndex: 0 },
      { question: 'Hai đường thẳng song song khi nào?', options: ['2 VTCP cùng phương và đường thẳng không trùng nhau', '2 VTCP vuông góc', 'Cắt nhau tại 1 điểm', '2 VTCP bằng nhau'], correctIndex: 0 },
      { question: 'Hai đường thẳng chéo nhau là 2 đường thẳng?', options: ['Không cùng nằm trên 1 mặt phẳng', 'Song song với nhau', 'Cắt nhau tại 1 điểm', 'Trùng nhau'], correctIndex: 0 },
      { question: 'Hai đường thẳng vuông góc khi nào?', options: ['Tích vô hướng 2 VTCP bằng 0', '2 VTCP cùng phương', '2 VTCP bằng nhau', 'Chúng cắt nhau'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Viết phương trình tham số của đường thẳng qua M(1;2;−1), VTCP u=(2;−1;3).', solution: ['$\\begin{cases}x=1+2t\\\\y=2-t\\\\z=-1+3t\\end{cases}$'] },
      { prompt: 'Bài 2. Viết phương trình chính tắc của đường thẳng qua A(1;0;2), B(3;4;−2).', solution: ['$\\overrightarrow{AB}=(2;4;-4)$, chọn VTCP $(1;2;-2)$', '$\\dfrac{x-1}{1}=\\dfrac{y}{2}=\\dfrac{z-2}{-2}$'] },
      { prompt: 'Bài 3. Cho d₁ VTCP u₁=(1;2;3), d₂ VTCP u₂=(2;4;6). Chứng minh d₁ song song hoặc trùng d₂.', solution: ['$\\vec{u_2}=2\\vec{u_1}$ nên 2 VTCP cùng phương', 'Vậy d₁ song song hoặc trùng d₂'] },
      { prompt: 'Bài 4. Cho d₁ VTCP u₁=(1;1;0), d₂ VTCP u₂=(1;−1;0). Chứng minh d₁ vuông góc d₂.', solution: ['$\\vec{u_1}\\cdot\\vec{u_2}=1-1+0=0$', 'Vậy $d_1\\perp d_2$'] },
      { prompt: 'Bài 5. Viết phương trình tham số của đường thẳng qua M(0;1;2), song song với d: (x−1)/3=(y+2)/1=z/(−2).', solution: ['VTCP của d: $(3;1;-2)$', '$\\begin{cases}x=3t\\\\y=1+t\\\\z=2-2t\\end{cases}$'] },
    ],
    flashcards: [
      { front: 'Phương trình tham số của đường thẳng', back: '$x=x_0+at,\\ y=y_0+bt,\\ z=z_0+ct$' },
      { front: 'Phương trình chính tắc của đường thẳng', back: '$\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}=\\dfrac{z-z_0}{c}$' },
      { front: 'Điều kiện 2 đường thẳng song song', back: '2 VTCP cùng phương, đường thẳng không trùng nhau' },
      { front: 'Điều kiện 2 đường thẳng vuông góc', back: 'Tích vô hướng 2 VTCP bằng 0' },
      { front: 'Hai đường thẳng chéo nhau', back: 'Không song song và không cắt nhau (không cùng mặt phẳng)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Phương trình tham số của đường thẳng qua M₀ với VTCP u=(a;b;c) là?', options: ['x=x₀+at, y=y₀+bt, z=z₀+ct', 'x=x₀+a, y=y₀+b, z=z₀+c', 'x=at, y=bt, z=ct', 'x=x₀t, y=y₀t, z=z₀t'], correctIndex: 0 },
        { question: 'Phương trình chính tắc của đường thẳng yêu cầu điều kiện gì với VTCP (a;b;c)?', options: ['a, b, c đều khác 0', 'a=b=c', 'a=0', 'b=0'], correctIndex: 0 },
        { question: 'Hai đường thẳng song song khi nào?', options: ['2 VTCP cùng phương và đường thẳng không trùng nhau', '2 VTCP vuông góc', 'Cắt nhau tại 1 điểm', '2 VTCP bằng nhau'], correctIndex: 0 },
        { question: 'Hai đường thẳng vuông góc khi nào?', options: ['Tích vô hướng 2 VTCP bằng 0', '2 VTCP cùng phương', '2 VTCP bằng nhau', 'Chúng song song'], correctIndex: 0 },
        { question: 'Hai đường thẳng chéo nhau là 2 đường thẳng?', options: ['Không cùng nằm trên 1 mặt phẳng', 'Song song với nhau', 'Cắt nhau tại 1 điểm', 'Trùng nhau'], correctIndex: 0 },
        { question: 'Để xét 2 đường thẳng cắt nhau hay chéo nhau (không song song), ta làm gì?', options: ['Giải hệ phương trình tham số của chúng', 'Tính tích vô hướng 2 VTCP', 'Tính độ dài 2 đường thẳng', 'So sánh 2 điểm bất kỳ'], correctIndex: 0 },
        { question: 'Đường thẳng d: (x−1)/2 = (y+2)/(−1) = (z−3)/4 có vectơ chỉ phương là?', options: ['(2;−1;4)', '(1;−2;3)', '(−1;2;−3)', '(2;1;4)'], correctIndex: 0 },
        { question: 'Viết phương trình tham số của đường thẳng qua M(1;2;−1), VTCP u=(2;−1;3).', options: ['x=1+2t, y=2−t, z=−1+3t', 'x=1+2t, y=2+t, z=−1+3t', 'x=2+t, y=−1+2t, z=3−t', 'x=1−2t, y=2+t, z=−1−3t'], correctIndex: 0 },
        { question: 'Viết phương trình chính tắc của đường thẳng qua A(1;0;2), B(3;4;−2).', options: ['(x−1)/1=(y)/2=(z−2)/(−2)', '(x−1)/2=(y)/4=(z−2)/(−4)', '(x−3)/1=(y−4)/2=(z+2)/(−2)', '(x+1)/1=(y)/2=(z+2)/(−2)'], correctIndex: 0 },
        { question: 'Cho d₁ VTCP (1;2;3), d₂ VTCP (2;4;6). Quan hệ giữa d₁, d₂ là?', options: ['Song song hoặc trùng nhau', 'Vuông góc', 'Chéo nhau', 'Cắt nhau'], correctIndex: 0 },
        { question: 'Cho d₁ VTCP (1;1;0), d₂ VTCP (1;−1;0). Quan hệ giữa d₁, d₂ là?', options: ['Vuông góc', 'Song song', 'Trùng nhau', 'Không xác định'], correctIndex: 0 },
        { question: 'Đường thẳng qua M(0;1;2), song song với d: (x−1)/3=(y+2)/1=z/(−2) có VTCP là?', options: ['(3;1;−2)', '(1;−2;0)', '(0;1;2)', '(−3;−1;2)'], correctIndex: 0 },
        { question: 'Viết phương trình tham số của đường thẳng qua M(0;1;2), VTCP (3;1;−2).', options: ['x=3t, y=1+t, z=2−2t', 'x=3+t, y=1+t, z=2−2t', 'x=3t, y=t, z=−2t', 'x=t, y=1+3t, z=2−t'], correctIndex: 0 },
        { question: 'Cho d₁ qua A(1;0;0) VTCP (1;1;0) và d₂ qua B(0;1;0) VTCP (1;−1;0). Hai đường thẳng có vuông góc không?', options: ['Có (vuông góc)', 'Không', 'Song song', 'Trùng nhau'], correctIndex: 0 },
        { question: 'Đường thẳng d: (x−2)/1=(y+1)/(−2)=(z)/3 đi qua điểm nào sau đây?', options: ['(2;−1;0)', '(1;−2;3)', '(0;0;0)', '(2;1;0)'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết phương trình tham số của đường thẳng d đi qua điểm M(2;−1;3) và có vectơ chỉ phương u=(1;2;−2).',
          solution: ['$d:\\begin{cases}x=2+t\\\\y=-1+2t\\\\z=3-2t\\end{cases}$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Viết phương trình đường thẳng d đi qua điểm A(1;2;−1) và vuông góc với mặt phẳng (P): 2x−y+3z−5=0.',
          solution: ['Vì $d\\perp(P)$ nên VTCP của d chính là VTPT của (P): $\\vec u=(2;-1;3)$', '$d:\\begin{cases}x=1+2t\\\\y=2-t\\\\z=-1+3t\\end{cases}$'],
        },
      ],
    },
  },

  'l12-pt-mat-cau': {
    title: 'Phương trình mặt cầu',
    theory: {
      cards: [
        {
          title: 'Phương trình mặt cầu dạng chính tắc',
          formulas: ['(x-a)^2+(y-b)^2+(z-c)^2=R^2'],
          legend: ['$I(a;b;c)$: tâm mặt cầu', '$R$: bán kính mặt cầu'],
          note: 'Mẹo: đây là phương trình mặt cầu tâm I, bán kính R — hoàn toàn tương tự phương trình đường tròn trong mặt phẳng, chỉ thêm biến z.',
        },
        {
          title: 'Phương trình mặt cầu dạng khai triển',
          formulas: ['x^2+y^2+z^2-2ax-2by-2cz+d=0', 'R=\\sqrt{a^2+b^2+c^2-d}\\ (a^2+b^2+c^2-d>0)'],
          legend: ['Tâm mặt cầu: $I(a;b;c)$', 'Điều kiện để phương trình là mặt cầu: $a^2+b^2+c^2-d>0$'],
          note: 'Mẹo: đưa phương trình khai triển về dạng chính tắc bằng cách hoàn thành bình phương (nhóm các số hạng theo từng biến x, y, z).',
        },
      ],
    },
    video: { caption: '00:00 / 14:50 — pt_mat_cau_baigiang.mp4' },
    quiz: [
      { question: 'Phương trình mặt cầu tâm I(a;b;c), bán kính R là?', options: ['(x−a)²+(y−b)²+(z−c)²=R²', '(x−a)+(y−b)+(z−c)=R', '(x+a)²+(y+b)²+(z+c)²=R²', 'x²+y²+z²=R'], correctIndex: 0 },
      { question: 'Mặt cầu (x−1)²+(y+2)²+(z−3)²=16 có tâm và bán kính là?', options: ['I(1;−2;3), R=4', 'I(−1;2;−3), R=4', 'I(1;−2;3), R=16', 'I(1;2;3), R=4'], correctIndex: 0 },
      { question: 'Phương trình x²+y²+z²−2x+4y−6z+5=0 có là phương trình mặt cầu không?', options: ['Có (vì a²+b²+c²−d=9>0)', 'Không', 'Chưa đủ dữ kiện', 'Là mặt phẳng'], correctIndex: 0 },
      { question: 'Mặt cầu tâm O(0;0;0), bán kính R=3 có phương trình là?', options: ['x²+y²+z²=9', 'x²+y²+z²=3', 'x²+y²+z²=6', 'x²+y²+z²=27'], correctIndex: 0 },
      { question: 'Trong công thức x²+y²+z²−2ax−2by−2cz+d=0, bán kính mặt cầu là?', options: ['√(a²+b²+c²−d)', 'a²+b²+c²−d', '√(a²+b²+c²+d)', 'a+b+c−d'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Viết phương trình mặt cầu tâm I(2;−1;3), bán kính R=5.', solution: ['$(x-2)^2+(y+1)^2+(z-3)^2=25$'] },
      { prompt: 'Bài 2. Tìm tâm và bán kính mặt cầu: x²+y²+z²−4x+2y−6z−2=0.', solution: ['$a=2,b=-1,c=3,d=-2$', 'Tâm $I(2;-1;3)$', '$R=\\sqrt{4+1+9-(-2)}=\\sqrt{16}=4$'] },
      { prompt: 'Bài 3. Viết phương trình mặt cầu có đường kính AB với A(1;2;3), B(3;4;5).', solution: ['Tâm $=$ trung điểm AB $=(2;3;4)$', '$AB=\\sqrt{4+4+4}=2\\sqrt3 \\Rightarrow R=\\sqrt3$', '$(x-2)^2+(y-3)^2+(z-4)^2=3$'] },
      { prompt: 'Bài 4. Tìm điều kiện của m để x²+y²+z²−2x+4y−2mz+m²+3=0 là phương trình mặt cầu.', solution: ['$a=1,b=-2,c=m,d=m^2+3$', 'Điều kiện: $a^2+b^2+c^2-d>0 \\Leftrightarrow 1+4+m^2-(m^2+3)>0 \\Leftrightarrow 2>0$', 'Luôn đúng với mọi m'] },
      { prompt: 'Bài 5. Viết phương trình mặt cầu tâm I(0;0;0) đi qua điểm A(1;2;2).', solution: ['$R=IA=\\sqrt{1+4+4}=3$', '$x^2+y^2+z^2=9$'] },
    ],
    flashcards: [
      { front: 'Phương trình mặt cầu dạng chính tắc', back: '$(x-a)^2+(y-b)^2+(z-c)^2=R^2$, tâm I(a;b;c), bán kính R' },
      { front: 'Phương trình mặt cầu dạng khai triển', back: '$x^2+y^2+z^2-2ax-2by-2cz+d=0$' },
      { front: 'Công thức bán kính từ dạng khai triển', back: '$R=\\sqrt{a^2+b^2+c^2-d}$' },
      { front: 'Điều kiện để phương trình là mặt cầu', back: '$a^2+b^2+c^2-d>0$' },
      { front: 'Mặt cầu đường kính AB', back: 'Tâm là trung điểm AB, bán kính $R=\\dfrac{AB}{2}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Phương trình mặt cầu tâm I(a;b;c), bán kính R là?', options: ['(x−a)²+(y−b)²+(z−c)²=R²', '(x−a)+(y−b)+(z−c)=R', '(x+a)²+(y+b)²+(z+c)²=R²', 'x²+y²+z²=R'], correctIndex: 0 },
        { question: 'Trong phương trình x²+y²+z²−2ax−2by−2cz+d=0, tâm mặt cầu là?', options: ['I(a;b;c)', 'I(−a;−b;−c)', 'I(2a;2b;2c)', 'I(a;b;d)'], correctIndex: 0 },
        { question: 'Điều kiện để x²+y²+z²−2ax−2by−2cz+d=0 là phương trình mặt cầu là?', options: ['a²+b²+c²−d > 0', 'a²+b²+c²−d < 0', 'a²+b²+c²−d = 0', 'a+b+c > d'], correctIndex: 0 },
        { question: 'Công thức bán kính mặt cầu từ dạng khai triển là?', options: ['√(a²+b²+c²−d)', 'a²+b²+c²−d', '√(a²+b²+c²+d)', 'a+b+c−d'], correctIndex: 0 },
        { question: 'Mặt cầu tâm O(0;0;0), bán kính R có phương trình là?', options: ['x²+y²+z²=R²', 'x²+y²+z²=R', 'x+y+z=R', 'x²+y²+z²=2R'], correctIndex: 0 },
        { question: 'Mặt cầu đường kính AB có tâm là?', options: ['Trung điểm của AB', 'Điểm A', 'Điểm B', 'Trọng tâm tam giác OAB'], correctIndex: 0 },
        { question: 'Mặt cầu (x−1)²+(y+2)²+(z−3)²=16 có tâm và bán kính là?', options: ['I(1;−2;3), R=4', 'I(−1;2;−3), R=4', 'I(1;−2;3), R=16', 'I(1;2;3), R=4'], correctIndex: 0 },
        { question: 'Mặt cầu tâm O(0;0;0), bán kính R=3 có phương trình là?', options: ['x²+y²+z²=9', 'x²+y²+z²=3', 'x²+y²+z²=6', 'x²+y²+z²=27'], correctIndex: 0 },
        { question: 'Tìm tâm và bán kính mặt cầu x²+y²+z²−4x+2y−6z−2=0.', options: ['I(2;−1;3), R=4', 'I(2;−1;3), R=16', 'I(−2;1;−3), R=4', 'I(4;−2;6), R=4'], correctIndex: 0 },
        { question: 'Viết phương trình mặt cầu tâm I(2;−1;3), bán kính R=5.', options: ['(x−2)²+(y+1)²+(z−3)²=25', '(x+2)²+(y−1)²+(z+3)²=25', '(x−2)²+(y+1)²+(z−3)²=5', '(x−2)²+(y+1)²+(z−3)²=10'], correctIndex: 0 },
        { question: 'Viết phương trình mặt cầu tâm I(0;0;0), đi qua điểm A(1;2;2).', options: ['x²+y²+z²=9', 'x²+y²+z²=3', 'x²+y²+z²=5', 'x²+y²+z²=25'], correctIndex: 0 },
        { question: 'Phương trình x²+y²+z²−2x+4y−6z+5=0 có phải phương trình mặt cầu không?', options: ['Có (vì a²+b²+c²−d=9>0)', 'Không', 'Chưa đủ dữ kiện', 'Là mặt phẳng'], correctIndex: 0 },
        { question: 'Viết phương trình mặt cầu có đường kính AB với A(1;2;3), B(3;4;5).', options: ['(x−2)²+(y−3)²+(z−4)²=3', '(x−2)²+(y−3)²+(z−4)²=12', '(x−1)²+(y−2)²+(z−3)²=3', '(x−2)²+(y−3)²+(z−4)²=6'], correctIndex: 0 },
        { question: 'Tìm điều kiện của m để x²+y²+z²−2x+4y−2mz+m²+3=0 là phương trình mặt cầu.', options: ['Đúng với mọi m', 'm > 0', 'm < 0', 'm ≠ 0'], correctIndex: 0 },
        { question: 'Cho mặt cầu (S): x²+y²+z²−6x+4y−2z+5=0. Tính bán kính R.', options: ['3', '9', '4', '6'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm tâm và bán kính của mặt cầu (S): x² + y² + z² + 2x − 4y + 6z − 2 = 0.',
          solution: ['$-2a=2\\Rightarrow a=-1;\\ -2b=-4\\Rightarrow b=2;\\ -2c=6\\Rightarrow c=-3;\\ d=-2$', 'Tâm $I(-1;2;-3)$', '$R=\\sqrt{1+4+9-(-2)}=\\sqrt{16}=4$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Viết phương trình mặt cầu (S) có tâm I(1;−1;2) và đi qua điểm A(3;1;0).',
          solution: ['$R=IA=\\sqrt{(3-1)^2+(1+1)^2+(0-2)^2}=\\sqrt{4+4+4}=2\\sqrt3$', '$(x-1)^2+(y+1)^2+(z-2)^2=12$'],
        },
      ],
    },
  },

  'l12-khoang-cach-goc-toa-do': {
    title: 'Khoảng cách và góc trong không gian toạ độ',
    theory: {
      cards: [
        {
          title: 'Khoảng cách từ điểm đến mặt phẳng',
          formulas: ['d(M_0,(P))=\\dfrac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}'],
          legend: ['$(P): Ax+By+Cz+D=0$', '$M_0(x_0;y_0;z_0)$: điểm cần tính khoảng cách'],
          note: 'Mẹo: công thức khoảng cách từ điểm đến mặt phẳng trong không gian có cùng dạng với công thức khoảng cách từ điểm đến đường thẳng trong mặt phẳng.',
        },
        {
          title: 'Góc giữa hai mặt phẳng, góc giữa đường thẳng và mặt phẳng',
          formulas: ['\\cos\\left((P),(Q)\\right)=\\dfrac{|\\vec{n_P}\\cdot\\vec{n_Q}|}{|\\vec{n_P}||\\vec{n_Q}|}', '\\sin(d,(P))=\\dfrac{|\\vec u\\cdot\\vec{n_P}|}{|\\vec u||\\vec{n_P}|}'],
          legend: ['$\\vec{n_P}, \\vec{n_Q}$: vectơ pháp tuyến của (P), (Q)', '$\\vec u$: vectơ chỉ phương của đường thẳng $d$'],
          note: 'Mẹo: luôn lấy trị tuyệt đối trong công thức tính góc để đảm bảo góc thu được nằm trong khoảng [0°;90°].',
        },
      ],
    },
    video: { caption: '00:00 / 15:55 — khoang_cach_goc_toa_do_baigiang.mp4' },
    quiz: [
      { question: 'Công thức khoảng cách từ M₀(x₀;y₀;z₀) đến (P): Ax+By+Cz+D=0 là?', options: ['|Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)', 'Ax₀+By₀+Cz₀+D', '√(A²+B²+C²)', '|Ax₀+By₀+Cz₀+D|'], correctIndex: 0 },
      { question: 'Khoảng cách từ M(1;2;2) đến (P): 2x−y+2z−3=0 bằng?', options: ['1/3', '1', '3', '1/9'], correctIndex: 0 },
      { question: 'Góc giữa 2 mặt phẳng luôn nằm trong khoảng nào?', options: ['[0°;90°]', '[0°;180°]', '(0°;90°)', '[90°;180°]'], correctIndex: 0 },
      { question: 'Công thức tính góc giữa đường thẳng d và mặt phẳng (P) sử dụng hàm lượng giác nào?', options: ['sin', 'cos', 'tan', 'cot'], correctIndex: 0 },
      { question: 'Khoảng cách từ gốc toạ độ O đến mặt phẳng (P): x+2y+2z−9=0 bằng?', options: ['3', '9', '1', '6'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính khoảng cách từ điểm M(1;1;1) đến mặt phẳng (P): 2x+2y−z+3=0.', solution: ['$d=\\dfrac{|2+2-1+3|}{\\sqrt{4+4+1}}=\\dfrac{6}{3}=2$'] },
      { prompt: 'Bài 2. Tính khoảng cách từ gốc toạ độ O đến mặt phẳng (P): x+2y+2z−9=0.', solution: ['$d=\\dfrac{|0-9|}{\\sqrt{1+4+4}}=\\dfrac93=3$'] },
      {
        prompt: 'Bài 3. Tính góc giữa 2 mặt phẳng (P): x+y+z−1=0 và (Q): x−y+z−2=0.',
        solution: ['$\\vec{n_P}=(1;1;1),\\ \\vec{n_Q}=(1;-1;1)$', '$\\vec{n_P}\\cdot\\vec{n_Q}=1-1+1=1$', '$\\cos=\\dfrac{|1|}{\\sqrt3\\cdot\\sqrt3}=\\dfrac13$'],
      },
      {
        prompt: 'Bài 4. Tính khoảng cách giữa 2 mặt phẳng song song (P): x+2y−2z+1=0 và (Q): x+2y−2z−5=0.',
        solution: ['Lấy điểm $M(-1;0;0)\\in(P)$', '$d(M,(Q))=\\dfrac{|-1-5|}{\\sqrt{1+4+4}}=\\dfrac63=2$'],
      },
      {
        prompt: 'Bài 5. Tính sin của góc giữa đường thẳng d (VTCP u=(1;1;0)) và mặt phẳng (P): x−y+2z−1=0.',
        solution: ['$\\vec u\\cdot\\vec n=1-1+0=0$', '$\\sin=\\dfrac{|0|}{|\\vec u||\\vec n|}=0$ (d song song hoặc nằm trong (P))'],
      },
    ],
    flashcards: [
      { front: 'Công thức khoảng cách từ điểm đến mặt phẳng', back: '$d(M_0,(P))=\\dfrac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$' },
      { front: 'Công thức góc giữa 2 mặt phẳng', back: '$\\cos=\\dfrac{|\\vec{n_P}\\cdot\\vec{n_Q}|}{|\\vec{n_P}||\\vec{n_Q}|}$' },
      { front: 'Công thức góc giữa đường thẳng và mặt phẳng', back: '$\\sin=\\dfrac{|\\vec u\\cdot\\vec n|}{|\\vec u||\\vec n|}$' },
      { front: 'Phạm vi giá trị góc giữa 2 mặt phẳng, đường thẳng-mặt phẳng', back: '[0°;90°]' },
      { front: 'Cách tính khoảng cách giữa 2 mặt phẳng song song', back: 'Lấy 1 điểm bất kỳ trên mặt phẳng này, tính khoảng cách đến mặt phẳng kia' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức khoảng cách từ M₀(x₀;y₀;z₀) đến (P): Ax+By+Cz+D=0 là?', options: ['|Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)', 'Ax₀+By₀+Cz₀+D', '√(A²+B²+C²)', '|Ax₀+By₀+Cz₀+D|'], correctIndex: 0 },
        { question: 'Góc giữa 2 mặt phẳng luôn nằm trong khoảng nào?', options: ['[0°;90°]', '[0°;180°]', '(0°;90°)', '[90°;180°]'], correctIndex: 0 },
        { question: 'Công thức tính góc giữa đường thẳng và mặt phẳng dùng hàm số lượng giác nào?', options: ['sin', 'cos', 'tan', 'cot'], correctIndex: 0 },
        { question: 'Trong công thức tính khoảng cách và góc, tại sao cần lấy trị tuyệt đối?', options: ['Để đảm bảo kết quả không âm', 'Để đơn giản hoá', 'Không cần thiết', 'Để tính nhanh hơn'], correctIndex: 0 },
        { question: 'Khoảng cách từ gốc toạ độ O đến mặt phẳng Ax+By+Cz+D=0 bằng?', options: ['|D|/√(A²+B²+C²)', 'D', '√(A²+B²+C²)', 'A+B+C'], correctIndex: 0 },
        { question: 'Công thức tính góc giữa 2 mặt phẳng dùng hàm số lượng giác nào?', options: ['cos', 'sin', 'tan', 'cot'], correctIndex: 0 },
        { question: 'Khoảng cách từ M(1;2;2) đến (P): 2x−y+2z−3=0 bằng?', options: ['1/3', '1', '3', '1/9'], correctIndex: 0 },
        { question: 'Khoảng cách từ gốc toạ độ O đến (P): x+2y+2z−9=0 bằng?', options: ['3', '9', '1', '6'], correctIndex: 0 },
        { question: 'Tính khoảng cách từ M(1;1;1) đến (P): 2x+2y−z+3=0.', options: ['2', '6', '3', '1'], correctIndex: 0 },
        { question: 'Tính góc giữa 2 mặt phẳng (P): x+y+z−1=0 và (Q): x−y+z−2=0.', options: ['arccos(1/3)', '90°', '0°', 'arccos(1/2)'], correctIndex: 0 },
        { question: 'Khoảng cách giữa 2 mặt phẳng song song (P): x+2y−2z+1=0 và (Q): x+2y−2z−5=0 bằng?', options: ['2', '6', '3', '1'], correctIndex: 0 },
        { question: 'Sin của góc giữa d (VTCP (1;1;0)) và (P): x−y+2z−1=0 bằng?', options: ['0', '1', '1/2', '√2/2'], correctIndex: 0 },
        { question: 'Tìm điểm M trên trục Oz cách đều (P): x+y+z−1=0 và (Q): x+y−z−3=0.', options: ['(0;0;−1)', '(0;0;1)', '(0;0;−3)', '(0;0;2)'], correctIndex: 0 },
        { question: 'Tính khoảng cách từ điểm A(2;−1;1) đến mặt phẳng (P): 2x−2y+z+5=0.', options: ['4', '3', '2', '6'], correctIndex: 0 },
        { question: 'Sin của góc giữa d (VTCP u=(1;0;1)) và (P): x+y+z−3=0 bằng?', options: ['√6/3', '1/√6', '2/3', '√3/3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính khoảng cách từ điểm M(3;−1;2) đến mặt phẳng (P): 2x − y + 2z − 5 = 0.',
          solution: ['$d=\\dfrac{|2(3)-(-1)+2(2)-5|}{\\sqrt{4+1+4}}=\\dfrac{|6+1+4-5|}{3}=\\dfrac63=2$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tính góc giữa hai mặt phẳng (P): x + 2y − 2z + 1 = 0 và (Q): 2x − y + 2z − 3 = 0.',
          solution: [
            '$\\vec{n_P}=(1;2;-2),\\ \\vec{n_Q}=(2;-1;2)$',
            '$\\vec{n_P}\\cdot\\vec{n_Q}=2-2-4=-4$',
            '$|\\vec{n_P}|=3,\\ |\\vec{n_Q}|=3$',
            '$\\cos=\\dfrac{|-4|}{3\\times3}=\\dfrac49$, góc giữa (P) và (Q) là $\\arccos\\left(\\dfrac49\\right)$',
          ],
        },
      ],
    },
  },
}
