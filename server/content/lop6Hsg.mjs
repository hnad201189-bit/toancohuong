import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_HSG = {
  'l6-hsg-day-so-quy-luat': {
    title: 'Dãy số và quy luật',
    theory: {
      cards: [
        {
          title: 'Dãy số cách đều',
          formulas: ['u_n = u_1+(n-1)d', 'S_n = \\dfrac{n(u_1+u_n)}{2}'],
          legend: ['$u_1$: số hạng đầu', '$d$: khoảng cách giữa 2 số hạng liên tiếp (công sai)', '$n$: số số hạng', '$S_n$: tổng của $n$ số hạng đầu'],
          note: 'Mẹo: số số hạng của dãy cách đều = (số hạng cuối − số hạng đầu) : khoảng cách + 1.',
        },
        {
          title: 'Một số quy luật dãy số thường gặp',
          formulas: ['1,2,4,8,16,...\\ (\\times2)', '1,4,9,16,25,...\\ (n^2)'],
          legend: ['Dãy nhân: mỗi số hạng gấp $k$ lần số hạng liền trước', 'Dãy bình phương: số hạng thứ $n$ bằng $n^2$'],
          note: 'Mẹo: quan sát hiệu hoặc thương giữa các số hạng liên tiếp để phát hiện quy luật.',
        },
      ],
    },
    video: { caption: '00:00 / 13:00 — hsg_day_so_quy_luat_baigiang.mp4' },
    quiz: [
      { question: 'Cho dãy 2, 5, 8, 11, ... Số hạng tiếp theo là?', options: ['14', '13', '15', '12'], correctIndex: 0 },
      { question: 'Số các số hạng của dãy 1, 2, 3, ..., 50 là?', options: ['50', '49', '51', '25'], correctIndex: 0 },
      { question: 'Cho dãy cách đều u1 = 3, d = 4. Số hạng thứ 5 là?', options: ['19', '15', '23', '20'], correctIndex: 0 },
      { question: 'Tổng các số từ 1 đến 10 là?', options: ['55', '45', '50', '60'], correctIndex: 0 },
      { question: 'Cho dãy 1, 4, 9, 16, ... Số hạng thứ 5 là?', options: ['25', '20', '36', '16'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính tổng các số tự nhiên từ 1 đến 20.', solution: ['$S=\\dfrac{20\\times21}{2}=210$'] },
      { prompt: 'Bài 2. Cho dãy số cách đều: 5, 9, 13, 17, ..., 101. Tính số số hạng của dãy.', solution: ['Số số hạng $=(101-5):4+1=25$'] },
      { prompt: 'Bài 3. Tìm quy luật và viết tiếp 2 số hạng của dãy: 3, 6, 12, 24, ...', solution: ['Quy luật: mỗi số hạng gấp đôi số hạng trước.', 'Hai số hạng tiếp theo: 48, 96.'] },
      { prompt: 'Bài 4. Tính tổng: 2 + 4 + 6 + ... + 50.', solution: ['Số số hạng $=(50-2):2+1=25$', 'Tổng $=\\dfrac{25\\times(2+50)}{2}=650$'] },
      { prompt: 'Bài 5. Tìm số hạng thứ 10 của dãy 7, 10, 13, 16, ...', solution: ['$u_1=7,\\ d=3$', '$u_{10}=7+9\\times3=34$'] },
    ],
    flashcards: [
      { front: 'Công thức số hạng tổng quát dãy cách đều', back: '$u_n=u_1+(n-1)d$' },
      { front: 'Công thức tổng dãy cách đều', back: '$S_n=\\frac{n(u_1+u_n)}{2}$' },
      { front: 'Số số hạng dãy cách đều', back: '(Số hạng cuối − số hạng đầu) : khoảng cách + 1' },
      { front: 'Tổng các số tự nhiên từ 1 đến n', back: '$\\frac{n(n+1)}{2}$' },
      { front: 'Dãy Fibonacci', back: 'Mỗi số hạng bằng tổng 2 số hạng liền trước (1,1,2,3,5,8,...)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức số hạng tổng quát của dãy cách đều là?', options: ['un = u1 + (n−1)d', 'un = u1 × dⁿ', 'un = u1 + nd', 'un = nd'], correctIndex: 0 },
        { question: 'Công thức tổng n số hạng đầu dãy cách đều là?', options: ['Sn = n(u1+un)/2', 'Sn = n × u1', 'Sn = (u1+un)/2', 'Sn = n × un'], correctIndex: 0 },
        { question: 'Số số hạng của dãy cách đều được tính bằng?', options: ['(Cuối − đầu) : khoảng cách + 1', '(Cuối − đầu) : khoảng cách', 'Cuối − đầu', 'Cuối : đầu'], correctIndex: 0 },
        { question: 'Cho dãy 1, 3, 5, 7, ... Khoảng cách (công sai) của dãy bằng?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Tổng các số tự nhiên từ 1 đến n được tính bằng?', options: ['n(n+1)/2', 'n²', 'n(n−1)/2', '2n'], correctIndex: 0 },
        { question: 'Cho dãy 2, 4, 8, 16, ... Đây là loại dãy nào?', options: ['Dãy nhân (mỗi số gấp đôi số trước)', 'Dãy cách đều', 'Dãy giảm dần', 'Không có quy luật'], correctIndex: 0 },
        { question: 'Cho dãy 4, 7, 10, 13, ... Số hạng thứ 6 là?', options: ['19', '16', '22', '25'], correctIndex: 0 },
        { question: 'Tính tổng các số tự nhiên từ 1 đến 15.', options: ['120', '105', '135', '150'], correctIndex: 0 },
        { question: 'Dãy cách đều có u1 = 10, d = 5, số hạng cuối 50. Số số hạng của dãy là?', options: ['9', '8', '10', '40'], correctIndex: 0 },
        { question: 'Tổng các số chẵn từ 2 đến 20 là?', options: ['110', '100', '120', '90'], correctIndex: 0 },
        { question: 'Cho dãy 5, 10, 20, 40, ... Số hạng thứ 5 là?', options: ['80', '60', '70', '90'], correctIndex: 0 },
        { question: 'Cho dãy cách đều u1 = 8, d = 3. Số hạng thứ 10 là?', options: ['35', '32', '38', '30'], correctIndex: 0 },
        { question: 'Tính tổng 1 + 2 + 3 + ... + 100.', options: ['5050', '5000', '10100', '4950'], correctIndex: 0 },
        { question: 'Cho dãy 1, 3, 5, ..., 99 (các số lẻ từ 1 đến 99). Tính tổng của dãy.', options: ['2500', '2450', '5000', '2550'], correctIndex: 0 },
        { question: 'Tìm số hạng thứ 20 của dãy 2, 5, 8, 11, ...', options: ['59', '56', '62', '60'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho dãy số cách đều: 6, 11, 16, 21, ..., 96. Tính số số hạng của dãy và tổng của dãy.',
          solution: ['Số số hạng $=(96-6):5+1=19$', 'Tổng $=\\dfrac{19\\times(6+96)}{2}=19\\times51=969$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tính tổng S = 1 + 2 + 3 + ... + 2024.',
          solution: ['$S=\\dfrac{2024\\times2025}{2}$', '$2024\\times2025=4\\,098\\,600$', '$S=4\\,098\\,600:2=2\\,049\\,300$'],
        },
      ],
    },
  },

  'l6-hsg-chia-het-nang-cao': {
    title: 'Các bài toán chia hết nâng cao',
    theory: {
      cards: [
        {
          title: 'Dấu hiệu chia hết cho 4, 8, 11',
          formulas: ['\\vdots\\,4:\\ \\text{2 chữ số cuối}\\,\\vdots\\,4', '\\vdots\\,8:\\ \\text{3 chữ số cuối}\\,\\vdots\\,8'],
          legend: ['Chia hết cho 4: hai chữ số tận cùng tạo thành số chia hết cho 4', 'Chia hết cho 8: ba chữ số tận cùng tạo thành số chia hết cho 8', 'Chia hết cho 11: hiệu giữa tổng các chữ số ở vị trí lẻ và tổng các chữ số ở vị trí chẵn (tính từ phải sang) chia hết cho 11'],
          note: 'Mẹo nâng cao: kết hợp nhiều dấu hiệu chia hết để giải các bài toán tìm chữ số chưa biết.',
        },
        {
          title: 'Tính chất chia hết của tổng, hiệu, tích',
          formulas: ['a\\,\\vdots\\,m,\\ b\\,\\vdots\\,m \\Rightarrow (a+b)\\,\\vdots\\,m', 'a\\,\\vdots\\,m \\Rightarrow ka\\,\\vdots\\,m'],
          legend: ['Nếu $a$ và $b$ đều chia hết cho $m$ thì tổng, hiệu của chúng cũng chia hết cho $m$', 'Nếu $a$ chia hết cho $m$ thì mọi bội của $a$ cũng chia hết cho $m$'],
          note: 'Mẹo: nếu một số hạng không chia hết cho $m$ còn số hạng kia chia hết cho $m$ thì tổng của chúng không chia hết cho $m$.',
        },
      ],
    },
    video: { caption: '00:00 / 14:20 — hsg_chia_het_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Số 1236 có chia hết cho 4 không? (36 : 4 = 9)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 2'], correctIndex: 0 },
      { question: 'Số 3128 có chia hết cho 8 không? (128 : 8 = 16)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 4'], correctIndex: 0 },
      { question: 'Nếu a chia hết cho 6 và b chia hết cho 6 thì a + b chia hết cho?', options: ['6', '12', '3', '2'], correctIndex: 0 },
      { question: 'Nếu a chia hết cho 5 nhưng b không chia hết cho 5 thì a + b có chia hết cho 5 không?', options: ['Không', 'Có', 'Không xác định', 'Tuỳ trường hợp'], correctIndex: 0 },
      { question: 'Số 121 có chia hết cho 11 không? (1−2+1=0)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 3'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm chữ số x để số $\\overline{12x}$ chia hết cho 4.', solution: ['Hai chữ số cuối "2x" phải chia hết cho 4.', '$x\\in\\{0;4;8\\}$ (vì 20, 24, 28 đều chia hết cho 4)'] },
      { prompt: 'Bài 2. Chứng minh nếu a chia hết cho 9 thì a cũng chia hết cho 3.', solution: ['Vì $9=3\\times3$, nếu $a=9k=3\\times(3k)$ thì $a$ chia hết cho 3.'] },
      { prompt: 'Bài 3. Tìm số tự nhiên nhỏ nhất có 3 chữ số chia hết cho cả 4 và 5.', solution: ['Số chia hết cho cả 4 và 5 thì chia hết cho 20 (vì 4, 5 nguyên tố cùng nhau).', 'Số có 3 chữ số nhỏ nhất chia hết cho 20 là 100.'] },
      { prompt: 'Bài 4. Không tính tổng, giải thích vì sao 24 + 36 + 48 chia hết cho 12.', solution: ['$24:12=2,\\ 36:12=3,\\ 48:12=4$, cả ba số hạng đều chia hết cho 12 nên tổng của chúng cũng chia hết cho 12.'] },
      { prompt: 'Bài 5. Tìm chữ số x để số $\\overline{7x5}$ chia hết cho 11.', solution: ['Dấu hiệu chia hết cho 11: $(7+5)-x$ chia hết cho 11.', '$12-x=11 \\Rightarrow x=1$'] },
    ],
    flashcards: [
      { front: 'Dấu hiệu chia hết cho 4', back: '2 chữ số cuối tạo thành số chia hết cho 4' },
      { front: 'Dấu hiệu chia hết cho 8', back: '3 chữ số cuối tạo thành số chia hết cho 8' },
      { front: 'Dấu hiệu chia hết cho 11', back: 'Hiệu tổng chữ số vị trí lẻ và chẵn chia hết cho 11' },
      { front: 'Tính chất chia hết của tổng', back: 'a⋮m, b⋮m ⇒ (a+b)⋮m' },
      { front: 'Tổng của số chia hết và số không chia hết cho m', back: 'Không chia hết cho m' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Dấu hiệu chia hết cho 4 là gì?', options: ['2 chữ số cuối chia hết cho 4', 'Chữ số cuối chẵn', 'Tổng chữ số chia hết 4', 'Chữ số đầu chia hết 4'], correctIndex: 0 },
        { question: 'Dấu hiệu chia hết cho 8 là gì?', options: ['3 chữ số cuối chia hết cho 8', 'Chữ số cuối chia hết 8', 'Tổng chữ số chia hết 8', 'Không có dấu hiệu'], correctIndex: 0 },
        { question: 'Nếu a⋮m và b⋮m thì a+b có chia hết cho m không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ khi a=b'], correctIndex: 0 },
        { question: 'Nếu a⋮m thì 2a có chia hết cho m không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ khi m=2'], correctIndex: 0 },
        { question: 'Số 100 có chia hết cho 4 không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 2'], correctIndex: 0 },
        { question: 'Số 1000 có chia hết cho 8 không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 4'], correctIndex: 0 },
        { question: 'Số 3416 có chia hết cho 4 không? (16:4=4)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết 2'], correctIndex: 0 },
        { question: 'Số 5432 có chia hết cho 8 không? (432:8=54)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết 4'], correctIndex: 0 },
        { question: 'Tìm x để $\\overline{45x}$ chia hết cho 4.', options: ['x=2 hoặc x=6', 'x=0 hoặc x=4', 'x=1 hoặc x=5', 'x=3 hoặc x=7'], correctIndex: 0 },
        { question: 'Nếu a chia hết cho 12 thì a có chắc chắn chia hết cho 3 không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ khi a chẵn'], correctIndex: 0 },
        { question: 'Tổng 18 + 27 có chia hết cho 9 không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết 3'], correctIndex: 0 },
        { question: 'Số nhỏ nhất có 3 chữ số chia hết cho cả 2 và 3 là?', options: ['102', '100', '108', '120'], correctIndex: 0 },
        { question: 'Tìm chữ số x để số $\\overline{4x1}$ chia hết cho 11.', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: 'Tổng của 3 số tự nhiên liên tiếp luôn chia hết cho số nào?', options: ['3', '2', '6', '9'], correctIndex: 0 },
        { question: 'Số tự nhiên nhỏ nhất có 3 chữ số chia hết cho cả 4, 5 và 6 là?', options: ['120', '60', '100', '180'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm chữ số x để số $\\overline{6x4}$ chia hết cho 4.',
          solution: ['Hai chữ số cuối "x4" chia hết cho 4.', '$x\\in\\{0;2;4;6;8\\}$ (vì 04, 24, 44, 64, 84 đều chia hết cho 4)'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Chứng minh rằng tổng của 4 số tự nhiên liên tiếp không chia hết cho 4.',
          solution: [
            'Gọi 4 số liên tiếp là $n,\\ n+1,\\ n+2,\\ n+3$.',
            'Tổng $=4n+6=4(n+1)+2$',
            'Vì $4(n+1)$ chia hết cho 4 còn 2 không chia hết cho 4, nên tổng luôn dư 2 khi chia cho 4, tức không chia hết cho 4.',
          ],
        },
      ],
    },
  },

  'l6-hsg-so-nguyen-to-nang-cao': {
    title: 'Số nguyên tố, ước số và bội số nâng cao',
    theory: {
      cards: [
        {
          title: 'Số lượng ước của một số',
          formulas: ['N=p_1^{a_1}\\cdot p_2^{a_2}\\cdots p_k^{a_k} \\Rightarrow \\text{số ước}=(a_1+1)(a_2+1)\\cdots(a_k+1)'],
          legend: ['$p_1,p_2,...$: các thừa số nguyên tố của $N$', '$a_1,a_2,...$: số mũ tương ứng'],
          note: 'Mẹo: công thức này đếm nhanh số lượng ước của một số dựa vào dạng phân tích ra thừa số nguyên tố.',
        },
        {
          title: 'Một số bài toán về ước, bội nâng cao',
          formulas: [],
          legend: ['Kết hợp ƯCLN, BCNN với các dấu hiệu chia hết để giải các bài toán tìm số theo điều kiện cho trước'],
          note: 'Mẹo: khi bài toán cho tổng và ƯCLN của 2 số, đặt các số theo dạng bội của ƯCLN để giải nhanh.',
        },
      ],
    },
    video: { caption: '00:00 / 14:45 — hsg_so_nguyen_to_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Số 12 = 2² × 3. Số ước của 12 là?', options: ['6', '4', '3', '12'], correctIndex: 0 },
      { question: 'Số 30 = 2 × 3 × 5. Số ước của 30 là?', options: ['8', '6', '3', '30'], correctIndex: 0 },
      { question: 'Số nguyên tố có bao nhiêu ước?', options: ['2', '1', '3', '0'], correctIndex: 0 },
      { question: 'Số 1 có bao nhiêu ước?', options: ['1', '0', '2', 'Vô số'], correctIndex: 0 },
      { question: 'Số 16 = 2⁴. Số ước của 16 là?', options: ['5', '4', '16', '8'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính số ước của số 100.', solution: ['$100=2^2\\times5^2$', 'Số ước $=(2+1)(2+1)=9$'] },
      { prompt: 'Bài 2. Tính số ước của số 45.', solution: ['$45=3^2\\times5$', 'Số ước $=(2+1)(1+1)=6$'] },
      {
        prompt: 'Bài 3. Tìm hai số tự nhiên biết tổng của chúng là 84 và ƯCLN là 12.',
        solution: ['Đặt $a=12m,\\ b=12n$ với ƯCLN$(m,n)=1$.', '$12m+12n=84 \\Rightarrow m+n=7$', 'Các cặp $(m,n)$ nguyên tố cùng nhau có tổng 7: $(1,6),(2,5),(3,4)$', 'Vậy các cặp số: $(12,72),\\ (24,60),\\ (36,48)$'],
      },
      { prompt: 'Bài 4. Chứng minh rằng nếu p là số nguyên tố lớn hơn 3 thì p không chia hết cho 3.', solution: ['Vì $p$ là số nguyên tố nên chỉ có ước là 1 và $p$.', 'Nếu $p$ chia hết cho 3 thì 3 là ước của $p$, suy ra $p=3$ (mâu thuẫn với $p>3$).'] },
      { prompt: 'Bài 5. Tìm số tự nhiên nhỏ nhất có đúng 4 ước.', solution: ['Số có đúng 4 ước có dạng $p\\times q$ (hai số nguyên tố khác nhau) hoặc $p^3$.', 'Nhỏ nhất: $2\\times3=6$ (các ước: 1, 2, 3, 6 — đúng 4 ước).'] },
    ],
    flashcards: [
      { front: 'Công thức số ước của N=p1^a1×p2^a2', back: '$(a_1+1)(a_2+1)$' },
      { front: 'Số ước của số nguyên tố', back: '2 (là 1 và chính nó)' },
      { front: 'Số ước của số 1', back: '1' },
      { front: 'Số ước của p² (p nguyên tố)', back: '3' },
      { front: 'Số nhỏ nhất có đúng 4 ước', back: '6 (= 2 × 3)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số nguyên tố có bao nhiêu ước?', options: ['2', '1', '3', '0'], correctIndex: 0 },
        { question: 'Số 1 có bao nhiêu ước?', options: ['1', '0', '2', 'Vô số'], correctIndex: 0 },
        { question: 'Công thức tính số ước của N = pᵃ (p nguyên tố) là?', options: ['a + 1', 'a', 'a − 1', '2a'], correctIndex: 0 },
        { question: 'Số 8 = 2³ có bao nhiêu ước?', options: ['4', '3', '8', '2'], correctIndex: 0 },
        { question: 'Số 9 = 3² có bao nhiêu ước?', options: ['3', '2', '9', '4'], correctIndex: 0 },
        { question: 'Số ước của N = p1^a1 × p2^a2 (p1, p2 nguyên tố khác nhau) tính bằng?', options: ['(a1+1)(a2+1)', 'a1 × a2', 'a1 + a2', '(a1+1)+(a2+1)'], correctIndex: 0 },
        { question: 'Số 12 = 2² × 3 có bao nhiêu ước?', options: ['6', '4', '3', '12'], correctIndex: 0 },
        { question: 'Số 20 = 2² × 5 có bao nhiêu ước?', options: ['6', '4', '3', '20'], correctIndex: 0 },
        { question: 'Số 36 = 2² × 3² có bao nhiêu ước?', options: ['9', '6', '4', '36'], correctIndex: 0 },
        { question: 'Số 50 = 2 × 5² có bao nhiêu ước?', options: ['6', '4', '3', '50'], correctIndex: 0 },
        { question: 'Số tự nhiên nhỏ nhất có đúng 3 ước là?', options: ['4', '6', '9', '2'], correctIndex: 0 },
        { question: 'Số 30 = 2 × 3 × 5 có bao nhiêu ước?', options: ['8', '6', '4', '30'], correctIndex: 0 },
        { question: 'Tìm 2 số biết tổng bằng 42, ƯCLN bằng 6. Có bao nhiêu cặp số thoả mãn?', options: ['3', '2', '4', '1'], correctIndex: 0 },
        { question: 'Số tự nhiên nhỏ nhất có đúng 6 ước là?', options: ['12', '6', '16', '24'], correctIndex: 0 },
        { question: 'Trong các số 24, 30, 36, số nào có nhiều ước nhất?', options: ['36', '24', '30', 'Bằng nhau'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính số ước của số 72.', solution: ['$72=2^3\\times3^2$', 'Số ước $=(3+1)(2+1)=12$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm hai số tự nhiên biết tổng của chúng bằng 60 và ƯCLN của chúng bằng 12.',
          solution: [
            'Đặt $a=12m,\\ b=12n$ với ƯCLN$(m,n)=1$.',
            '$12m+12n=60 \\Rightarrow m+n=5$',
            'Các cặp $(m,n)$ nguyên tố cùng nhau có tổng 5: $(1,4),(2,3)$',
            'Vậy các cặp số cần tìm: $(12,48)$ và $(24,36)$',
          ],
        },
      ],
    },
  },

  'l6-hsg-dem-dirichlet': {
    title: 'Bài toán đếm và nguyên lý Dirichlet',
    theory: {
      cards: [
        {
          title: 'Nguyên lý Dirichlet (nguyên lý chuồng bồ câu)',
          formulas: [],
          legend: ['Nếu nhốt $n+1$ con bồ câu vào $n$ chuồng thì có ít nhất 1 chuồng chứa từ 2 con bồ câu trở lên'],
          note: 'Mẹo tổng quát: nếu có nhiều hơn $k\\times n$ vật được chia vào $n$ nhóm, thì có ít nhất 1 nhóm chứa hơn $k$ vật.',
        },
        {
          title: 'Một số bài toán đếm cơ bản',
          formulas: [],
          legend: ['Đếm số cách chọn, số cách sắp xếp dựa vào liệt kê hoặc quy tắc cộng, quy tắc nhân đơn giản'],
          note: 'Mẹo: với bài toán đếm nhỏ, có thể liệt kê trực tiếp tất cả trường hợp để kiểm tra kết quả.',
        },
      ],
    },
    video: { caption: '00:00 / 15:10 — hsg_dem_dirichlet_baigiang.mp4' },
    quiz: [
      { question: 'Nguyên lý Dirichlet cơ bản: nhốt n+1 con bồ câu vào n chuồng thì?', options: ['Có ít nhất 1 chuồng chứa ≥2 con', 'Mỗi chuồng đúng 1 con', 'Có chuồng trống', 'Không xác định'], correctIndex: 0 },
      { question: 'Trong 13 người, chắc chắn có ít nhất 2 người sinh cùng tháng vì sao?', options: ['Vì chỉ có 12 tháng (13>12)', 'Vì trùng ngày sinh', 'Vì cùng tuổi', 'Không có lý do'], correctIndex: 0 },
      { question: 'Có 5 hộp bút và 6 cây bút, chắc chắn có ít nhất 1 hộp chứa mấy cây bút trở lên?', options: ['2', '1', '3', '6'], correctIndex: 0 },
      { question: 'Trong 1 lớp có 40 học sinh (12 tháng), chắc chắn có ít nhất mấy học sinh cùng tháng sinh?', options: ['4', '3', '2', '12'], correctIndex: 0 },
      { question: 'Nguyên lý Dirichlet còn được gọi là gì?', options: ['Nguyên lý chuồng bồ câu', 'Nguyên lý số học', 'Nguyên lý chia hết', 'Nguyên lý số nguyên tố'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Giải thích vì sao trong 8 người bất kỳ, luôn có ít nhất 2 người có cùng thứ trong tuần mà họ sinh ra (1 tuần có 7 ngày).', solution: ['Vì $8>7$, theo nguyên lý Dirichlet, có ít nhất 2 người trong 8 người trùng thứ sinh.'] },
      { prompt: 'Bài 2. Một hộp có bi 3 màu: đỏ, xanh, vàng. Cần lấy ít nhất bao nhiêu viên bi để chắc chắn có 2 viên cùng màu?', solution: ['Cần lấy $3+1=4$ viên (nếu chỉ lấy 3 viên có thể mỗi viên một màu khác nhau).'] },
      { prompt: 'Bài 3. Chứng minh trong 367 người bất kỳ, luôn có ít nhất 2 người trùng ngày sinh (1 năm tối đa 366 ngày).', solution: ['Vì $367>366$ (số ngày tối đa trong 1 năm, kể cả năm nhuận), theo nguyên lý Dirichlet, có ít nhất 2 người trùng ngày sinh.'] },
      { prompt: 'Bài 4. Một lớp có 30 học sinh chia thành 4 tổ. Chứng minh có ít nhất 1 tổ có từ 8 học sinh trở lên.', solution: ['$30=4\\times7+2$', 'Theo nguyên lý Dirichlet mở rộng, có ít nhất 1 tổ có $\\lceil30/4\\rceil=8$ học sinh trở lên.'] },
      { prompt: 'Bài 5. Có 10 đôi găng tay (20 chiếc, mỗi đôi 1 màu khác nhau) để lẫn trong túi tối. Cần lấy ít nhất bao nhiêu chiếc để chắc chắn có 1 đôi cùng màu?', solution: ['Cần lấy $10+1=11$ chiếc (vì có 10 màu, lấy 10 chiếc có thể mỗi chiếc một màu khác nhau).'] },
    ],
    flashcards: [
      { front: 'Nguyên lý Dirichlet cơ bản', back: 'n+1 vật vào n chuồng thì có chuồng chứa ≥2 vật' },
      { front: 'Nguyên lý Dirichlet mở rộng', back: 'Nhiều hơn kn vật vào n chuồng thì có chuồng chứa >k vật' },
      { front: 'Ứng dụng điển hình', back: 'Chứng minh sự tồn tại mà không cần chỉ rõ vật cụ thể' },
      { front: 'Ví dụ điển hình', back: '13 người luôn có 2 người cùng tháng sinh' },
      { front: 'Tên gọi khác của nguyên lý Dirichlet', back: 'Nguyên lý chuồng bồ câu (pigeonhole)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Nguyên lý Dirichlet: n+1 vật vào n chuồng thì?', options: ['Có chuồng chứa ≥2 vật', 'Mỗi chuồng đúng 1 vật', 'Không có chuồng trống', 'Không xác định được'], correctIndex: 0 },
        { question: 'Nguyên lý Dirichlet còn gọi là gì?', options: ['Nguyên lý chuồng bồ câu', 'Nguyên lý chia hết', 'Nguyên lý số nguyên tố', 'Nguyên lý đếm'], correctIndex: 0 },
        { question: '13 người, chắc chắn có ít nhất 2 người trùng tháng sinh vì sao?', options: ['13 > 12 (số tháng)', '13 là số nguyên tố', '13 > 13', 'Không có lý do'], correctIndex: 0 },
        { question: 'Có 4 hộp bút và 5 cây bút. Chắc chắn có ít nhất 1 hộp chứa mấy cây?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Nguyên lý Dirichlet dùng để làm gì?', options: ['Chứng minh sự tồn tại (không cần chỉ rõ)', 'Tính tổng dãy số', 'Tìm ước số', 'Giải phương trình'], correctIndex: 0 },
        { question: 'Một tuần có 7 ngày. Cần ít nhất bao nhiêu người để chắc chắn có 2 người cùng thứ sinh?', options: ['8', '7', '6', '14'], correctIndex: 0 },
        { question: 'Một lớp 25 học sinh chia làm 3 tổ. Tổ nào đó có ít nhất bao nhiêu học sinh?', options: ['9', '8', '7', '25'], correctIndex: 0 },
        { question: 'Có 15 viên bi 3 màu trong 1 hộp. Cần lấy ít nhất bao nhiêu viên để chắc chắn có 2 viên cùng màu?', options: ['4', '3', '2', '15'], correctIndex: 0 },
        { question: 'Trong 32 người, chắc chắn có ít nhất mấy người cùng tháng sinh (12 tháng)?', options: ['3', '2', '4', '12'], correctIndex: 0 },
        { question: 'Có 6 hộp và 20 quả bóng. Chắc chắn có ít nhất 1 hộp chứa mấy quả?', options: ['4', '3', '5', '20'], correctIndex: 0 },
        { question: 'Trong 50 học sinh, chắc chắn có ít nhất mấy học sinh cùng ngày sinh trong tháng (31 ngày)?', options: ['2', '1', '3', '31'], correctIndex: 0 },
        { question: 'Cần ít nhất bao nhiêu số tự nhiên để chắc chắn có 2 số cùng số dư khi chia cho 5?', options: ['6', '5', '4', '10'], correctIndex: 0 },
        { question: 'Trong 1 hộp có bi 4 màu. Cần lấy ít nhất bao nhiêu viên để chắc chắn có 3 viên cùng màu?', options: ['9', '8', '5', '4'], correctIndex: 0 },
        { question: '8 số tự nhiên bất kỳ khi chia cho 7 luôn có 2 số có hiệu chia hết cho 7. Khẳng định này đúng hay sai?', options: ['Đúng', 'Sai', 'Không xác định', 'Chỉ đúng với số chẵn'], correctIndex: 0 },
        { question: 'Một đội có 100 cầu thủ mặc áo số từ 1–99 (có thể trùng). Chắc chắn có ít nhất bao nhiêu cầu thủ mặc cùng 1 số áo?', options: ['2', '1', '3', '99'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một lớp có 35 học sinh được chia vào 4 tổ. Chứng minh có ít nhất 1 tổ có từ 9 học sinh trở lên.',
          solution: ['$35=4\\times8+3$', 'Theo nguyên lý Dirichlet mở rộng, có ít nhất 1 tổ có $\\lceil35/4\\rceil=9$ học sinh trở lên.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Chứng minh rằng trong 6 số tự nhiên bất kỳ, luôn tồn tại 2 số có hiệu chia hết cho 5.',
          solution: [
            'Khi chia cho 5, mỗi số tự nhiên có 1 trong 5 số dư có thể có: 0, 1, 2, 3, 4 (coi là 5 "chuồng").',
            'Với 6 số ("bồ câu") mà chỉ có 5 số dư khả dĩ, theo nguyên lý Dirichlet, tồn tại ít nhất 2 số có cùng số dư khi chia cho 5.',
            'Hiệu của 2 số có cùng số dư khi chia cho 5 thì chia hết cho 5.',
          ],
        },
      ],
    },
  },

  'l6-hsg-hinh-hoc-tu-duy': {
    title: 'Bài toán hình học tư duy nâng cao',
    theory: {
      cards: [
        {
          title: 'Đếm hình trong hình vẽ',
          formulas: ['C_n^2=\\dfrac{n(n-1)}{2}'],
          legend: ['Số đoạn thẳng tạo bởi $n$ điểm phân biệt trên một đường thẳng (hoặc đường tròn) là $C_n^2$'],
          note: 'Mẹo: đếm theo từng loại kích thước riêng biệt rồi cộng lại, tránh đếm sót hoặc đếm trùng.',
        },
        {
          title: 'Bài toán ghép hình, chia hình',
          formulas: [],
          legend: ['Ghép hình: kết hợp các hình cơ bản để tạo hình mới, tính chu vi/diện tích hình ghép', 'Chia hình: chia một hình lớn thành các hình nhỏ theo yêu cầu'],
          note: 'Mẹo: khi ghép hình, phần cạnh tiếp giáp giữa 2 hình sẽ không còn là cạnh ngoài của hình ghép.',
        },
      ],
    },
    video: { caption: '00:00 / 13:35 — hsg_hinh_hoc_tu_duy_baigiang.mp4' },
    quiz: [
      { question: 'Trên 1 đoạn thẳng có 5 điểm (kể cả 2 đầu mút), có bao nhiêu đoạn thẳng con được tạo thành?', options: ['10', '5', '8', '15'], correctIndex: 0 },
      { question: 'Một tam giác lớn được chia thành 4 tam giác nhỏ bằng 3 đường trung bình. Tổng số tam giác có trong hình (kể cả tam giác lớn) là?', options: ['5', '4', '8', '9'], correctIndex: 0 },
      { question: 'Ghép 2 hình vuông cạnh 4cm liền nhau tạo thành 1 hình chữ nhật. Chu vi hình chữ nhật đó là?', options: ['24', '32', '16', '48'], correctIndex: 0 },
      { question: 'Một hình vuông cạnh 8cm được chia thành 4 hình vuông nhỏ bằng nhau. Cạnh mỗi hình vuông nhỏ là?', options: ['4', '2', '8', '16'], correctIndex: 0 },
      { question: 'Trên đường tròn có 6 điểm phân biệt, nối tất cả các cặp điểm. Có bao nhiêu đoạn thẳng?', options: ['15', '6', '12', '30'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Trên 1 đoạn thẳng có 6 điểm phân biệt (kể cả 2 đầu). Tính số đoạn thẳng con được tạo ra.', solution: ['$C_6^2=\\dfrac{6\\times5}{2}=15$'] },
      { prompt: 'Bài 2. Một hình chữ nhật được ghép từ 2 hình vuông bằng nhau cạnh 5cm. Tính chu vi hình chữ nhật ban đầu.', solution: ['Kích thước hình chữ nhật: $10\\times5$', 'Chu vi $=2\\times(10+5)=30$ (cm)'] },
      { prompt: 'Bài 3. Đếm số hình chữ nhật (kể cả hình vuông) tạo bởi 1 lưới ô vuông 2×2 (3 đường ngang, 3 đường dọc).', solution: ['Số hình chữ nhật $=C_3^2\\times C_3^2=3\\times3=9$'] },
      { prompt: 'Bài 4. Một tấm bìa hình vuông cạnh 12cm được cắt thành 3 hình chữ nhật bằng nhau (các đường cắt song song với 1 cạnh). Tính chu vi mỗi hình chữ nhật con.', solution: ['Kích thước mỗi hình: $12\\times4$', 'Chu vi mỗi hình $=2\\times(12+4)=32$ (cm)'] },
      { prompt: 'Bài 5. Ghép 2 tam giác đều cạnh 3cm (chung 1 cạnh) tạo thành 1 hình thoi. Tính chu vi hình thoi đó.', solution: ['Cạnh hình thoi bằng cạnh tam giác đều $=3$cm', 'Chu vi $=3\\times4=12$ (cm)'] },
    ],
    flashcards: [
      { front: 'Số đoạn thẳng tạo bởi n điểm trên 1 đường thẳng', back: '$C_n^2=\\frac{n(n-1)}{2}$' },
      { front: 'Số đoạn thẳng nối n điểm trên đường tròn', back: '$C_n^2$' },
      { front: 'Mẹo đếm hình', back: 'Đếm theo từng loại kích thước, tránh đếm trùng/sót' },
      { front: 'Ghép 2 hình vuông cạnh a liền nhau', back: 'Tạo hình chữ nhật kích thước 2a × a' },
      { front: 'Ghép 2 tam giác đều cạnh a (chung 1 cạnh)', back: 'Tạo hình thoi cạnh a' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức tính số đoạn thẳng tạo bởi n điểm trên 1 đường thẳng là?', options: ['n(n−1)/2', 'n²', 'n−1', '2n'], correctIndex: 0 },
        { question: 'Trên đoạn thẳng có 3 điểm (kể 2 đầu), có bao nhiêu đoạn thẳng con?', options: ['3', '2', '1', '6'], correctIndex: 0 },
        { question: 'Ghép 2 hình vuông cạnh a liền kề tạo thành hình gì?', options: ['Hình chữ nhật', 'Hình vuông', 'Hình tam giác', 'Hình thoi'], correctIndex: 0 },
        { question: 'Số cách chọn 2 điểm trong 4 điểm (không có 3 điểm thẳng hàng) để tạo 1 đoạn thẳng là?', options: ['6', '4', '8', '12'], correctIndex: 0 },
        { question: 'Đếm hình cần chú ý điều gì để không sai?', options: ['Không đếm trùng hoặc đếm sót', 'Đếm càng nhanh càng tốt', 'Chỉ đếm hình lớn nhất', 'Không cần chú ý gì'], correctIndex: 0 },
        { question: 'Ghép 2 tam giác đều bằng nhau theo 1 cạnh chung tạo thành hình gì?', options: ['Hình thoi', 'Hình vuông', 'Hình chữ nhật', 'Hình lục giác'], correctIndex: 0 },
        { question: 'Trên đoạn thẳng có 7 điểm phân biệt (kể 2 đầu). Số đoạn thẳng con là?', options: ['21', '14', '7', '49'], correctIndex: 0 },
        { question: 'Trên đường tròn có 5 điểm, nối tất cả các cặp. Số đoạn thẳng là?', options: ['10', '5', '15', '20'], correctIndex: 0 },
        { question: 'Ghép 3 hình vuông cạnh 3cm liền kề nhau thành 1 hình chữ nhật. Chu vi hình chữ nhật đó là?', options: ['24', '36', '18', '12'], correctIndex: 0 },
        { question: 'Một hình vuông cạnh 10cm được chia thành 4 hình vuông nhỏ bằng nhau. Diện tích mỗi hình vuông nhỏ là?', options: ['25', '50', '10', '100'], correctIndex: 0 },
        { question: 'Lưới ô vuông 2×2 (3 đường ngang, 3 đường dọc). Số hình vuông (mọi kích thước) trong lưới là?', options: ['5', '4', '9', '1'], correctIndex: 0 },
        { question: 'Ghép 2 tam giác đều cạnh 5cm chung 1 cạnh tạo hình thoi. Chu vi hình thoi đó là?', options: ['20', '15', '10', '25'], correctIndex: 0 },
        { question: 'Trên 1 đoạn thẳng có n điểm (kể 2 đầu) tạo ra 28 đoạn thẳng con. Tìm n.', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: 'Một hình vuông cạnh 12cm được chia thành 9 hình vuông nhỏ bằng nhau (lưới 3×3). Chu vi mỗi hình vuông nhỏ là?', options: ['16', '12', '8', '4'], correctIndex: 0 },
        { question: 'Đếm số hình chữ nhật (kể hình vuông) trong lưới ô vuông 3×3 (4 đường ngang, 4 đường dọc).', options: ['36', '16', '9', '25'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Trên một đoạn thẳng có 9 điểm phân biệt (kể cả 2 đầu mút). Tính số đoạn thẳng con được tạo thành.',
          solution: ['$C_9^2=\\dfrac{9\\times8}{2}=36$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một tấm bìa hình vuông cạnh 20cm được cắt thành 4 hình vuông nhỏ bằng nhau bằng 2 đường cắt (1 ngang, 1 dọc, đi qua tâm). Tính diện tích và chu vi mỗi hình vuông nhỏ.',
          solution: ['Cạnh mỗi hình vuông nhỏ $=20:2=10$ (cm)', 'Diện tích mỗi hình nhỏ $=10^2=100$ (cm²)', 'Chu vi mỗi hình nhỏ $=10\\times4=40$ (cm)'],
        },
      ],
    },
  },
}
