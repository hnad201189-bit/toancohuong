import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_LUYEN_DE_TONG_HOP = {
  'l6-lt-so-tu-nhien': {
    title: 'Luyện tập: Số tự nhiên và bốn phép tính',
    theory: {
      cards: [
        {
          title: 'Tổng hợp công thức luỹ thừa và thứ tự phép tính',
          formulas: ['a^m\\cdot a^n=a^{m+n}', 'a^m:a^n=a^{m-n}\\ (m\\geq n)', '(a^m)^n=a^{mn}'],
          legend: ['Thứ tự thực hiện: luỹ thừa → nhân/chia → cộng/trừ (trong ngoặc làm trước)'],
          note: 'Mẹo: khi tính nhanh tổng/hiệu có quy luật, hãy nhóm các số hạng để tạo ra tổng tròn chục/trăm trước khi cộng.',
        },
        {
          title: 'Kỹ thuật tính nhanh thường gặp',
          formulas: ['a\\times(b+c)=a\\times b+a\\times c', 'a\\times(b-c)=a\\times b - a\\times c'],
          legend: ['Tính chất phân phối giúp tách/gộp số hạng để tính nhanh'],
          note: 'Mẹo: với dãy số cách đều, dùng công thức tổng $S=\\dfrac{n(u_1+u_n)}{2}$ để tính nhanh thay vì cộng từng số hạng.',
        },
      ],
    },
    video: { caption: '00:00 / 13:40 — luyen_tap_so_tu_nhien_baigiang.mp4' },
    quiz: [
      { question: 'Tính nhanh 25 × 17 × 4.', options: ['1700', '1600', '1720', '1750'], correctIndex: 0 },
      { question: 'Kết quả của 2³ × 2² là?', options: ['32', '16', '64', '8'], correctIndex: 0 },
      { question: 'Tính 15 + 16 + 17 + ... + 25.', options: ['220', '200', '240', '110'], correctIndex: 0 },
      { question: 'Kết quả của 3 × (7 + 13) là?', options: ['60', '30', '50', '63'], correctIndex: 0 },
      { question: 'Một cửa hàng có 120kg gạo, ngày đầu bán 1/3 số gạo, ngày sau bán 1/4 số gạo còn lại. Ngày sau bán bao nhiêu kg?', options: ['20', '30', '40', '10'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính nhanh: 29 + 132 + 237 + 868 + 63.', solution: ['Nhóm: $(132+868)+(29+237+63)$', '$=1000+329=1329$'] },
      {
        prompt: 'Bài 2. Một đội công nhân dự định trồng 400 cây trong 10 ngày. Thực tế mỗi ngày trồng nhiều hơn dự định 10 cây nên hoàn thành sớm. Hỏi đội trồng xong trong bao nhiêu ngày?',
        solution: ['Dự định: $400:10=40$ cây/ngày', 'Thực tế: $40+10=50$ cây/ngày', 'Số ngày thực tế: $400:50=8$ ngày'],
      },
      { prompt: 'Bài 3. Tìm x biết: (x + 5) × 3 − 10 = 20.', solution: ['$(x+5)\\times3=30$', '$x+5=10$', '$x=5$'] },
      {
        prompt: 'Bài 4. Một số tự nhiên khi chia cho 5 dư 3, chia cho 7 dư 4. Tìm số nhỏ nhất thoả mãn.',
        solution: ['Số chia 5 dư 3: 3, 8, 13, 18, 23, 28, ...', 'Số chia 7 dư 4: 4, 11, 18, 25, ...', 'Số nhỏ nhất chung: $18$'],
      },
      { prompt: 'Bài 5. Tính giá trị biểu thức: A = 2⁰ + 2¹ + 2² + 2³ + 2⁴.', solution: ['$A=1+2+4+8+16=31$'] },
    ],
    flashcards: [
      { front: 'Thứ tự thực hiện phép tính', back: 'Luỹ thừa → Nhân/chia → Cộng/trừ (trong ngoặc trước)' },
      { front: 'Công thức nhân luỹ thừa cùng cơ số', back: '$a^m \\cdot a^n = a^{m+n}$' },
      { front: 'Công thức chia luỹ thừa cùng cơ số', back: '$a^m : a^n = a^{m-n}$' },
      { front: 'Tính chất phân phối', back: '$a(b+c)=ab+ac$' },
      { front: 'Công thức tổng dãy số cách đều', back: '$S=\\dfrac{n(u_1+u_n)}{2}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Thứ tự thực hiện phép tính đúng khi biểu thức không có ngoặc là?', options: ['Luỹ thừa → Nhân/chia → Cộng/trừ', 'Cộng/trừ → Nhân/chia → Luỹ thừa', 'Nhân/chia → Cộng/trừ → Luỹ thừa', 'Từ trái sang phải không phân biệt'], correctIndex: 0 },
        { question: 'Công thức aᵐ · aⁿ bằng?', options: ['a^(m+n)', 'a^(m−n)', 'a^(mn)', '2a^(m+n)'], correctIndex: 0 },
        { question: '2³ bằng bao nhiêu?', options: ['8', '6', '9', '16'], correctIndex: 0 },
        { question: '5⁰ bằng bao nhiêu?', options: ['1', '0', '5', '10'], correctIndex: 0 },
        { question: 'Tính chất phân phối của phép nhân với phép cộng là?', options: ['a(b+c) = ab+ac', 'a(b+c) = a+b+c', 'a(b+c) = ab+c', 'a+(b+c) = (a+b)+c'], correctIndex: 0 },
        { question: 'Số các số hạng của dãy 1, 2, 3, ..., 20 là?', options: ['20', '19', '21', '10'], correctIndex: 0 },
        { question: 'Tính nhanh 4 × 25 × 7.', options: ['700', '600', '750', '280'], correctIndex: 0 },
        { question: 'Tính 2² × 2³.', options: ['32', '16', '64', '8'], correctIndex: 0 },
        { question: 'Tính tổng 10 + 11 + ... + 20.', options: ['165', '150', '180', '155'], correctIndex: 0 },
        { question: 'Tính giá trị biểu thức 3 × (8 + 2).', options: ['30', '26', '24', '28'], correctIndex: 0 },
        { question: 'Một cửa hàng có 90kg đường, bán 1/3 số đường trong ngày đầu. Ngày đầu bán bao nhiêu kg?', options: ['30', '45', '20', '60'], correctIndex: 0 },
        { question: 'Tìm x biết 3x + 6 = 24.', options: ['6', '5', '7', '8'], correctIndex: 0 },
        { question: 'Tính nhanh: 29 + 132 + 237 + 868 + 63.', options: ['1329', '1300', '1350', '1229'], correctIndex: 0 },
        { question: 'Đội công nhân dự định trồng 400 cây trong 10 ngày, thực tế mỗi ngày trồng nhiều hơn 10 cây. Thực tế trồng xong trong bao nhiêu ngày?', options: ['8', '9', '7', '10'], correctIndex: 0 },
        { question: 'Một số tự nhiên chia 5 dư 3, chia 7 dư 4. Số nhỏ nhất thoả mãn là?', options: ['18', '23', '13', '25'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: A = 3² × 2 + 4 × (15 − 9).',
          solution: ['$3^2=9,\\ 9\\times2=18$', '$15-9=6,\\ 4\\times6=24$', '$A=18+24=42$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Ba lớp 6A, 6B, 6C có tổng cộng 120 học sinh. Biết số học sinh lớp 6A bằng 2/5 tổng số, lớp 6B nhiều hơn lớp 6C là 4 học sinh. Tính số học sinh mỗi lớp.',
          solution: ['$6A=120\\times\\dfrac25=48$', '$6B+6C=120-48=72$', '$6B-6C=4 \\Rightarrow 6B=38,\\ 6C=34$'],
        },
      ],
    },
  },

  'l6-lt-chia-het': {
    title: 'Luyện tập: Tính chia hết, số nguyên tố, ước chung – bội chung',
    theory: {
      cards: [
        {
          title: 'Tổng hợp dấu hiệu chia hết',
          formulas: [],
          legend: ['Chia hết cho 2: chữ số tận cùng là 0, 2, 4, 6, 8', 'Chia hết cho 5: chữ số tận cùng là 0 hoặc 5', 'Chia hết cho 3 (hoặc 9): tổng các chữ số chia hết cho 3 (hoặc 9)'],
          note: 'Mẹo: kết hợp nhiều dấu hiệu chia hết cùng lúc để thu hẹp nhanh phạm vi tìm số thoả mãn nhiều điều kiện.',
        },
        {
          title: 'ƯCLN, BCNN và ứng dụng',
          formulas: ['ƯCLN(a,b)\\times BCNN(a,b)=a\\times b'],
          legend: ['Phân tích các số ra thừa số nguyên tố rồi lấy thừa số chung (số mũ nhỏ nhất) để tìm ƯCLN, lấy thừa số chung và riêng (số mũ lớn nhất) để tìm BCNN'],
          note: 'Mẹo: bài toán "chia thành nhóm bằng nhau", "gặp nhau sau bao lâu" thường quy về tìm ƯCLN hoặc BCNN.',
        },
      ],
    },
    video: { caption: '00:00 / 14:10 — luyen_tap_chia_het_baigiang.mp4' },
    quiz: [
      { question: 'Số 234 có chia hết cho 3 không? (2+3+4=9 chia hết 3)', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 2'], correctIndex: 0 },
      { question: 'ƯCLN(12, 18) bằng?', options: ['6', '3', '36', '2'], correctIndex: 0 },
      { question: 'BCNN(4, 6) bằng?', options: ['12', '24', '6', '2'], correctIndex: 0 },
      { question: 'Số nào sau đây là số nguyên tố?', options: ['17', '15', '21', '9'], correctIndex: 0 },
      { question: 'An cứ 4 ngày trực 1 lần, Bình cứ 6 ngày trực 1 lần. Sau ít nhất bao nhiêu ngày hai bạn cùng trực?', options: ['12', '24', '10', '6'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm ƯCLN(24, 36).', solution: ['$24=2^3\\times3,\\ 36=2^2\\times3^2$', 'ƯCLN $=2^2\\times3=12$'] },
      { prompt: 'Bài 2. Tìm BCNN(8, 12).', solution: ['$8=2^3,\\ 12=2^2\\times3$', 'BCNN $=2^3\\times3=24$'] },
      {
        prompt: 'Bài 3. Một lớp có 30 nam và 24 nữ được chia thành các tổ sao cho số nam, nữ mỗi tổ bằng nhau. Hỏi có thể chia được nhiều nhất bao nhiêu tổ?',
        solution: ['ƯCLN(30,24) $=6$', 'Vậy chia được nhiều nhất 6 tổ'],
      },
      { prompt: 'Bài 4. Tìm số tự nhiên nhỏ nhất khác 0 chia hết cho cả 4, 6 và 8.', solution: ['BCNN(4,6,8) $=24$'] },
      {
        prompt: 'Bài 5. Tìm x biết x chia hết cho 15, chia hết cho 18 và 100 < x < 200.',
        solution: ['BCNN(15,18) $=90$', 'Bội của 90 trong khoảng $(100;200)$: $180$', 'Vậy $x=180$'],
      },
    ],
    flashcards: [
      { front: 'Dấu hiệu chia hết cho 3', back: 'Tổng các chữ số chia hết cho 3' },
      { front: 'Dấu hiệu chia hết cho 9', back: 'Tổng các chữ số chia hết cho 9' },
      { front: 'Cách tìm ƯCLN bằng phân tích thừa số nguyên tố', back: 'Lấy thừa số chung, số mũ nhỏ nhất' },
      { front: 'Cách tìm BCNN bằng phân tích thừa số nguyên tố', back: 'Lấy thừa số chung và riêng, số mũ lớn nhất' },
      { front: 'Công thức liên hệ ƯCLN và BCNN', back: '$ƯCLN(a,b)\\times BCNN(a,b)=a\\times b$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Dấu hiệu chia hết cho 3 là gì?', options: ['Tổng các chữ số chia hết cho 3', 'Chữ số tận cùng chia hết cho 3', 'Chữ số đầu chia hết cho 3', 'Không có dấu hiệu'], correctIndex: 0 },
        { question: 'Dấu hiệu chia hết cho 5 là gì?', options: ['Chữ số tận cùng là 0 hoặc 5', 'Chữ số tận cùng là 0', 'Tổng chữ số chia hết 5', 'Chữ số đầu là 5'], correctIndex: 0 },
        { question: 'Số nguyên tố là số như thế nào?', options: ['Chỉ có 2 ước là 1 và chính nó', 'Chia hết cho 2', 'Số lẻ bất kỳ', 'Không chia hết cho số nào'], correctIndex: 0 },
        { question: 'Công thức liên hệ giữa ƯCLN và BCNN của 2 số a, b là?', options: ['ƯCLN(a,b)×BCNN(a,b) = a×b', 'ƯCLN(a,b)+BCNN(a,b) = a+b', 'ƯCLN(a,b) = BCNN(a,b)', 'ƯCLN(a,b)×BCNN(a,b) = a+b'], correctIndex: 0 },
        { question: 'Cách tìm ƯCLN bằng phân tích thừa số nguyên tố là?', options: ['Lấy thừa số chung, số mũ nhỏ nhất', 'Lấy thừa số chung, số mũ lớn nhất', 'Lấy tất cả thừa số', 'Lấy thừa số riêng'], correctIndex: 0 },
        { question: 'Cách tìm BCNN bằng phân tích thừa số nguyên tố là?', options: ['Lấy thừa số chung và riêng, số mũ lớn nhất', 'Lấy thừa số chung, số mũ nhỏ nhất', 'Lấy thừa số riêng, số mũ nhỏ nhất', 'Lấy tất cả ước số'], correctIndex: 0 },
        { question: 'Số 234 có chia hết cho 3 không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ chia hết cho 2'], correctIndex: 0 },
        { question: 'ƯCLN(12, 18) bằng?', options: ['6', '3', '36', '2'], correctIndex: 0 },
        { question: 'BCNN(4, 6) bằng?', options: ['12', '24', '6', '2'], correctIndex: 0 },
        { question: 'ƯCLN(24, 36) bằng?', options: ['12', '6', '24', '4'], correctIndex: 0 },
        { question: 'BCNN(8, 12) bằng?', options: ['24', '12', '48', '8'], correctIndex: 0 },
        { question: 'Số tự nhiên nhỏ nhất khác 0 chia hết cho cả 4, 6, 8 là?', options: ['24', '12', '48', '8'], correctIndex: 0 },
        { question: 'Một lớp có 30 nam, 24 nữ chia thành các tổ có số nam, nữ bằng nhau. Số tổ nhiều nhất có thể chia là?', options: ['6', '4', '12', '3'], correctIndex: 0 },
        { question: 'An trực 4 ngày/lần, Bình trực 6 ngày/lần. Sau ít nhất bao nhiêu ngày 2 bạn cùng trực?', options: ['12', '24', '10', '6'], correctIndex: 0 },
        { question: 'Tìm x chia hết cho 15 và 18, biết 100 < x < 200.', options: ['180', '90', '150', '170'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm ƯCLN và BCNN của 36 và 60.',
          solution: ['$36=2^2\\times3^2,\\ 60=2^2\\times3\\times5$', 'ƯCLN $=2^2\\times3=12$', 'BCNN $=2^2\\times3^2\\times5=180$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một đội y tế có 24 bác sĩ và 108 y tá. Muốn chia đội thành các tổ sao cho số bác sĩ và y tá đều nhau ở mỗi tổ. Hỏi có thể chia được nhiều nhất bao nhiêu tổ? Khi đó mỗi tổ có bao nhiêu bác sĩ, bao nhiêu y tá?',
          solution: [
            '$24=2^3\\times3,\\ 108=2^2\\times3^3$',
            'ƯCLN $=2^2\\times3=12$ tổ',
            'Mỗi tổ có $24:12=2$ bác sĩ và $108:12=9$ y tá',
          ],
        },
      ],
    },
  },

  'l6-lt-so-nguyen': {
    title: 'Luyện tập: Số nguyên',
    theory: {
      cards: [
        {
          title: 'Quy tắc cộng, trừ số nguyên',
          formulas: ['a+(-b) = a-b', '(-a)+(-b)=-(a+b)'],
          legend: ['Cộng 2 số nguyên cùng dấu: cộng 2 giá trị tuyệt đối, giữ nguyên dấu', 'Cộng 2 số nguyên khác dấu: lấy giá trị tuyệt đối lớn trừ giá trị tuyệt đối nhỏ, dấu theo số có giá trị tuyệt đối lớn hơn'],
          note: 'Mẹo: trừ đi một số nguyên bằng cộng với số đối của nó: $a-b=a+(-b)$.',
        },
        {
          title: 'Quy tắc nhân, chia số nguyên và quy tắc dấu ngoặc',
          formulas: ['(+).(+) \\to +,\\quad (-).(-) \\to +,\\quad (+).(-) \\to -'],
          legend: ['Khi bỏ dấu ngoặc có dấu "−" đằng trước, phải đổi dấu tất cả các số hạng trong ngoặc'],
          note: 'Mẹo: đếm số dấu "−" trong tích/thương nhiều số nguyên — số dấu "−" chẵn thì kết quả dương, lẻ thì kết quả âm.',
        },
      ],
    },
    video: { caption: '00:00 / 13:55 — luyen_tap_so_nguyen_baigiang.mp4' },
    quiz: [
      { question: '(−5) + 8 bằng?', options: ['3', '−3', '13', '−13'], correctIndex: 0 },
      { question: '(−7) + (−3) bằng?', options: ['−10', '10', '−4', '4'], correctIndex: 0 },
      { question: '(−4) × (−5) bằng?', options: ['20', '−20', '9', '−9'], correctIndex: 0 },
      { question: '12 − (−8) bằng?', options: ['20', '4', '−4', '−20'], correctIndex: 0 },
      { question: 'Nhiệt độ buổi sáng là −3°C, đến trưa tăng thêm 8°C. Nhiệt độ buổi trưa là?', options: ['5', '−5', '11', '−11'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính (−15) + (−25).', solution: ['$(-15)+(-25)=-40$'] },
      { prompt: 'Bài 2. Tính 20 − (−13).', solution: ['$20-(-13)=20+13=33$'] },
      { prompt: 'Bài 3. Tính (−6) × 7.', solution: ['$(-6)\\times7=-42$'] },
      { prompt: 'Bài 4. Tính (−36) : (−4).', solution: ['$(-36):(-4)=9$'] },
      {
        prompt: 'Bài 5. Một chiếc tàu ngầm đang ở độ sâu −20m so với mực nước biển, sau đó lặn xuống thêm 15m. Hỏi tàu ngầm đang ở độ sâu bao nhiêu mét so với mực nước biển?',
        solution: ['Độ sâu mới $=-20+(-15)=-35$ (m)', 'Tức tàu ngầm ở độ sâu 35m dưới mực nước biển'],
      },
    ],
    flashcards: [
      { front: 'Cộng 2 số nguyên khác dấu', back: 'Lấy GTTĐ lớn trừ GTTĐ nhỏ, dấu theo số có GTTĐ lớn hơn' },
      { front: 'Trừ số nguyên', back: '$a-b=a+(-b)$' },
      { front: 'Quy tắc dấu của phép nhân/chia', back: 'Cùng dấu → dương; khác dấu → âm' },
      { front: 'Quy tắc dấu ngoặc', back: "Bỏ ngoặc có dấu '−' đằng trước phải đổi dấu tất cả số hạng bên trong" },
      { front: 'Số đối của số nguyên a', back: '−a' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số đối của số nguyên a là gì?', options: ['−a', 'a', '1/a', '0'], correctIndex: 0 },
        { question: 'Quy tắc trừ số nguyên: a − b = ?', options: ['a + (−b)', 'a − (−b)', '−a + b', 'a × (−b)'], correctIndex: 0 },
        { question: 'Tích của 2 số nguyên âm là số?', options: ['Dương', 'Âm', '0', 'Không xác định'], correctIndex: 0 },
        { question: 'Tích của 1 số nguyên âm và 1 số nguyên dương là số?', options: ['Âm', 'Dương', '0', 'Không xác định'], correctIndex: 0 },
        { question: 'Khi bỏ dấu ngoặc có dấu "−" đằng trước, ta phải làm gì?', options: ['Đổi dấu tất cả các số hạng trong ngoặc', 'Giữ nguyên dấu các số hạng', 'Chỉ đổi dấu số hạng đầu', 'Bỏ luôn các số hạng'], correctIndex: 0 },
        { question: '(−8) + 8 bằng?', options: ['0', '16', '−16', '8'], correctIndex: 0 },
        { question: '(−5) + 8 bằng?', options: ['3', '−3', '13', '−13'], correctIndex: 0 },
        { question: '(−7) + (−3) bằng?', options: ['−10', '10', '−4', '4'], correctIndex: 0 },
        { question: '(−4) × (−5) bằng?', options: ['20', '−20', '9', '−9'], correctIndex: 0 },
        { question: '12 − (−8) bằng?', options: ['20', '4', '−4', '−20'], correctIndex: 0 },
        { question: '(−36) : (−4) bằng?', options: ['9', '−9', '4', '−4'], correctIndex: 0 },
        { question: '(−15) + (−25) bằng?', options: ['−40', '40', '−10', '10'], correctIndex: 0 },
        { question: 'Nhiệt độ buổi sáng −3°C, đến trưa tăng 8°C. Nhiệt độ buổi trưa là?', options: ['5', '−5', '11', '−11'], correctIndex: 0 },
        { question: 'Một tàu ngầm ở độ sâu −20m, lặn thêm 15m. Độ sâu hiện tại là?', options: ['−35m', '−5m', '35m', '5m'], correctIndex: 0 },
        { question: 'Tính giá trị biểu thức: (−3) × 4 + (−12) : (−3).', options: ['−8', '8', '−16', '16'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: A = (−25) + 18 − (−7).', solution: ['$A=-25+18+7=0$'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một người nông dân nợ ngân hàng 5.000.000 đồng (biểu diễn bằng số nguyên −5.000.000). Sau vụ mùa, người đó trả được 3.200.000 đồng và vay thêm 1.500.000 đồng. Hỏi hiện tại người đó còn nợ (hoặc có dư) bao nhiêu tiền?',
          solution: ['Số tiền hiện tại $=-5\\,000\\,000+3\\,200\\,000-1\\,500\\,000=-3\\,300\\,000$', 'Vậy còn nợ 3.300.000 đồng'],
        },
      ],
    },
  },

  'l6-lt-phan-so': {
    title: 'Luyện tập: Phân số và số thập phân',
    theory: {
      cards: [
        {
          title: 'Tổng hợp phép tính phân số',
          formulas: ['\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{ad+bc}{bd}', '\\dfrac{a}{b}\\times\\dfrac{c}{d}=\\dfrac{ac}{bd}', '\\dfrac{a}{b}:\\dfrac{c}{d}=\\dfrac{a}{b}\\times\\dfrac{d}{c}'],
          legend: [],
          note: 'Mẹo: rút gọn phân số về dạng tối giản trước khi tính để số liệu nhỏ gọn, dễ tính hơn.',
        },
        {
          title: 'Bài toán tỉ số phần trăm và 2 bài toán cơ bản về phân số',
          formulas: ['\\text{Tìm}\\ \\dfrac{m}{n}\\ \\text{của}\\ a:\\quad a\\times\\dfrac{m}{n}', '\\text{Tìm}\\ a\\ \\text{biết}\\ \\dfrac{m}{n}\\ \\text{của}\\ a\\ \\text{bằng}\\ b:\\quad a=b:\\dfrac{m}{n}'],
          legend: [],
          note: 'Mẹo: đổi tỉ số phần trăm p% thành phân số $\\dfrac{p}{100}$ trước khi tính để áp dụng đúng 2 công thức trên.',
        },
      ],
    },
    video: { caption: '00:00 / 14:20 — luyen_tap_phan_so_baigiang.mp4' },
    quiz: [
      { question: '2/3 + 1/6 bằng?', options: ['5/6', '3/9', '1/2', '5/9'], correctIndex: 0 },
      { question: '3/4 × 2/9 bằng?', options: ['1/6', '6/36', '2/13', '5/13'], correctIndex: 0 },
      { question: '3/5 : 2/5 bằng?', options: ['3/2', '6/25', '2/3', '5/6'], correctIndex: 0 },
      { question: '20% của 150 là?', options: ['30', '20', '15', '45'], correctIndex: 0 },
      { question: 'Một lớp có 40 học sinh, số học sinh nữ chiếm 3/5 số học sinh cả lớp. Số học sinh nữ là?', options: ['24', '16', '20', '30'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính 1/2 + 1/3 + 1/6.', solution: ['$\\dfrac36+\\dfrac26+\\dfrac16=\\dfrac66=1$'] },
      { prompt: 'Bài 2. Tính 5/6 − 1/4.', solution: ['$\\dfrac{10}{12}-\\dfrac{3}{12}=\\dfrac{7}{12}$'] },
      { prompt: 'Bài 3. Rút gọn phân số 18/24.', solution: ['ƯCLN(18,24) $=6$', '$\\dfrac{18}{24}=\\dfrac34$'] },
      {
        prompt: 'Bài 4. Một bể nước chứa 60 lít, đã dùng hết 2/5 bể. Hỏi trong bể còn lại bao nhiêu lít nước?',
        solution: ['Đã dùng $=60\\times\\dfrac25=24$ lít', 'Còn lại $=60-24=36$ lít'],
      },
      { prompt: 'Bài 5. Giá một chiếc áo là 250.000đ, được giảm giá 20%. Hỏi giá áo sau khi giảm là bao nhiêu?', solution: ['Giảm $=250\\,000\\times20\\%=50\\,000$đ', 'Giá sau giảm $=250\\,000-50\\,000=200\\,000$đ'] },
    ],
    flashcards: [
      { front: 'Công thức cộng 2 phân số khác mẫu', back: '$\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{ad+bc}{bd}$' },
      { front: 'Công thức nhân phân số', back: '$\\dfrac{a}{b}\\times\\dfrac{c}{d}=\\dfrac{ac}{bd}$' },
      { front: 'Công thức chia phân số', back: '$\\dfrac{a}{b}:\\dfrac{c}{d}=\\dfrac{a}{b}\\times\\dfrac{d}{c}$' },
      { front: 'Tìm m/n của một số a', back: '$a\\times\\dfrac{m}{n}$' },
      { front: 'Đổi phần trăm sang phân số', back: '$p\\%=\\dfrac{p}{100}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức nhân 2 phân số là?', options: ['(a/b)×(c/d) = ac/bd', '(a/b)×(c/d) = (a+c)/(b+d)', '(a/b)×(c/d) = ad/bc', '(a/b)×(c/d) = a/b+c/d'], correctIndex: 0 },
        { question: 'Công thức chia 2 phân số a/b : c/d là?', options: ['(a/b)×(d/c)', '(a/b)×(c/d)', '(a×c)/(b×d)', '(a+d)/(b+c)'], correctIndex: 0 },
        { question: 'Muốn cộng 2 phân số khác mẫu, ta cần làm gì trước?', options: ['Quy đồng mẫu số', 'Quy đồng tử số', 'Rút gọn', 'Đổi thành số thập phân'], correctIndex: 0 },
        { question: 'p% được đổi thành phân số như thế nào?', options: ['p/100', '100/p', 'p', 'p×100'], correctIndex: 0 },
        { question: 'Muốn tìm m/n của một số a, ta tính?', options: ['a × m/n', 'a : m/n', 'a + m/n', 'a − m/n'], correctIndex: 0 },
        { question: 'Phân số tối giản là phân số có?', options: ['Tử số và mẫu số không còn ước chung nào khác 1', 'Tử số lớn hơn mẫu số', 'Mẫu số là số nguyên tố', 'Tử số là số nguyên tố'], correctIndex: 0 },
        { question: '2/3 + 1/6 bằng?', options: ['5/6', '3/9', '1/2', '5/9'], correctIndex: 0 },
        { question: '3/4 × 2/9 bằng?', options: ['1/6', '6/36', '2/13', '5/13'], correctIndex: 0 },
        { question: '3/5 : 2/5 bằng?', options: ['3/2', '6/25', '2/3', '5/6'], correctIndex: 0 },
        { question: '20% của 150 là?', options: ['30', '20', '15', '45'], correctIndex: 0 },
        { question: 'Rút gọn phân số 18/24 được kết quả là?', options: ['3/4', '2/3', '6/8', '9/12'], correctIndex: 0 },
        { question: '5/6 − 1/4 bằng?', options: ['7/12', '4/2', '1/2', '6/10'], correctIndex: 0 },
        { question: 'Một lớp có 40 học sinh, nữ chiếm 3/5. Số học sinh nữ là?', options: ['24', '16', '20', '30'], correctIndex: 0 },
        { question: 'Một bể nước 60 lít, đã dùng hết 2/5 bể. Số lít nước còn lại là?', options: ['36', '24', '30', '40'], correctIndex: 0 },
        { question: 'Giá 1 áo 250.000đ, giảm 20%. Giá sau khi giảm là?', options: ['200.000đ', '230.000đ', '220.000đ', '180.000đ'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: A = 2/3 + 1/4 − 1/6.', solution: ['Quy đồng mẫu 12: $\\dfrac{8}{12}+\\dfrac{3}{12}-\\dfrac{2}{12}=\\dfrac{9}{12}=\\dfrac34$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một cửa hàng nhập về 500kg gạo. Ngày thứ nhất bán được 30% số gạo, ngày thứ hai bán được 2/5 số gạo còn lại. Hỏi sau 2 ngày cửa hàng còn lại bao nhiêu kg gạo?',
          solution: ['Ngày 1 bán: $500\\times30\\%=150$kg, còn lại $350$kg', 'Ngày 2 bán: $350\\times\\dfrac25=140$kg', 'Còn lại: $350-140=210$kg'],
        },
      ],
    },
  },

  'l6-lt-hinh-hoc': {
    title: 'Luyện tập: Hình học phẳng (đoạn thẳng, góc, tam giác)',
    theory: {
      cards: [
        {
          title: 'Tổng hợp về đoạn thẳng và trung điểm',
          formulas: ['\\text{Nếu M nằm giữa A, B thì: } AM+MB=AB'],
          legend: ['Trung điểm M của đoạn AB: M nằm giữa A, B và $MA=MB=\\dfrac{AB}{2}$'],
          note: 'Mẹo: khi 3 điểm thẳng hàng, luôn xét xem điểm nào nằm giữa 2 điểm còn lại trước khi lập hệ thức cộng đoạn thẳng.',
        },
        {
          title: 'Tổng hợp về góc và tam giác đều',
          formulas: ['\\text{Nếu tia Oy nằm giữa Ox, Oz thì: } \\widehat{xOy}+\\widehat{yOz}=\\widehat{xOz}'],
          legend: ['Tam giác đều: 3 cạnh bằng nhau, 3 góc bằng nhau và bằng 60°'],
          note: 'Mẹo: tương tự đoạn thẳng, khi 1 tia nằm giữa 2 tia còn lại (chung gốc), số đo góc lớn bằng tổng 2 góc nhỏ.',
        },
      ],
    },
    video: { caption: '00:00 / 13:30 — luyen_tap_hinh_hoc_baigiang.mp4' },
    quiz: [
      { question: 'Cho M là trung điểm của đoạn thẳng AB, biết AB = 10cm. Độ dài AM bằng?', options: ['5', '10', '2,5', '20'], correctIndex: 0 },
      { question: 'Điểm M nằm giữa A và B, biết AM = 4cm, MB = 6cm. Độ dài AB bằng?', options: ['10', '2', '24', '6'], correctIndex: 0 },
      { question: 'Tia Oy nằm giữa Ox và Oz, biết góc xOy = 30°, góc yOz = 45°. Góc xOz bằng?', options: ['75°', '15°', '60°', '90°'], correctIndex: 0 },
      { question: 'Tam giác đều có mỗi góc bằng bao nhiêu độ?', options: ['60°', '90°', '45°', '120°'], correctIndex: 0 },
      { question: 'Một đoạn dây thép dài 24cm được uốn thành một tam giác đều. Độ dài mỗi cạnh là?', options: ['8', '6', '12', '24'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Cho đoạn thẳng AB = 12cm. Gọi M là trung điểm AB. Tính AM, MB.', solution: ['$AM=MB=\\dfrac{12}{2}=6$cm'] },
      { prompt: 'Bài 2. Điểm C nằm giữa 2 điểm A, B sao cho AC = 5cm, AB = 13cm. Tính CB.', solution: ['$CB=AB-AC=13-5=8$cm'] },
      { prompt: 'Bài 3. Cho góc xOz = 80°, tia Oy nằm giữa Ox, Oz sao cho góc xOy = 35°. Tính góc yOz.', solution: ['$\\widehat{yOz}=\\widehat{xOz}-\\widehat{xOy}=80°-35°=45°$'] },
      { prompt: 'Bài 4. Một tam giác đều có chu vi 27cm. Tính độ dài mỗi cạnh.', solution: ['Mỗi cạnh $=27:3=9$cm'] },
      {
        prompt: 'Bài 5. Trên đường thẳng có 3 điểm A, B, C theo thứ tự đó, biết AB = 7cm, BC = 5cm. Tính AC.',
        solution: ['Vì B nằm giữa A, C nên $AC=AB+BC=7+5=12$cm'],
      },
    ],
    flashcards: [
      { front: 'Hệ thức cộng đoạn thẳng (M nằm giữa A, B)', back: '$AM+MB=AB$' },
      { front: 'Định nghĩa trung điểm M của AB', back: 'M nằm giữa A, B và $MA=MB=\\dfrac{AB}{2}$' },
      { front: 'Hệ thức cộng góc (tia Oy nằm giữa Ox, Oz)', back: '$\\widehat{xOy}+\\widehat{yOz}=\\widehat{xOz}$' },
      { front: 'Số đo mỗi góc của tam giác đều', back: '60°' },
      { front: 'Chu vi tam giác đều cạnh a', back: '$3a$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hệ thức cộng đoạn thẳng khi M nằm giữa A, B là?', options: ['AM + MB = AB', 'AM − MB = AB', 'AM × MB = AB', 'AM = MB'], correctIndex: 0 },
        { question: 'Trung điểm M của đoạn thẳng AB thoả mãn điều gì?', options: ['M nằm giữa A, B và MA = MB = AB/2', 'M nằm giữa A, B', 'MA = AB', 'MB = 2AB'], correctIndex: 0 },
        { question: 'Khi tia Oy nằm giữa 2 tia Ox, Oz thì hệ thức cộng góc là?', options: ['góc xOy + góc yOz = góc xOz', 'góc xOy − góc yOz = góc xOz', 'góc xOy = góc yOz', 'góc xOy × góc yOz = góc xOz'], correctIndex: 0 },
        { question: 'Mỗi góc của tam giác đều có số đo là?', options: ['60°', '90°', '45°', '30°'], correctIndex: 0 },
        { question: 'Chu vi tam giác đều cạnh a là?', options: ['3a', '2a', 'a', 'a/3'], correctIndex: 0 },
        { question: 'Hai điểm A, B và điểm M bất kỳ nằm giữa, ta luôn có?', options: ['AM + MB = AB', 'AM = MB', 'AM − MB = AB', 'AM × MB = AB'], correctIndex: 0 },
        { question: 'M là trung điểm AB, AB = 10cm. AM bằng?', options: ['5', '10', '2,5', '20'], correctIndex: 0 },
        { question: 'M nằm giữa A, B, AM = 4cm, MB = 6cm. AB bằng?', options: ['10', '2', '24', '6'], correctIndex: 0 },
        { question: 'Tia Oy nằm giữa Ox, Oz, góc xOy = 30°, góc yOz = 45°. Góc xOz bằng?', options: ['75°', '15°', '60°', '90°'], correctIndex: 0 },
        { question: 'Tam giác đều chu vi 27cm. Mỗi cạnh dài?', options: ['9', '8', '10', '27'], correctIndex: 0 },
        { question: '3 điểm A, B, C thẳng hàng theo thứ tự đó, AB = 7cm, BC = 5cm. AC bằng?', options: ['12', '2', '35', '10'], correctIndex: 0 },
        { question: 'Đoạn dây 24cm uốn thành tam giác đều. Mỗi cạnh dài?', options: ['8', '6', '12', '24'], correctIndex: 0 },
        { question: 'Cho đoạn AB = 16cm, C nằm giữa A, B sao cho AC = 3 × CB. Tính CB.', options: ['4', '12', '8', '6'], correctIndex: 0 },
        { question: 'Góc xOz = 120°, tia Oy nằm giữa Ox, Oz sao cho góc xOy gấp đôi góc yOz. Tính góc yOz.', options: ['40°', '80°', '60°', '30°'], correctIndex: 0 },
        { question: 'Một tam giác đều và một hình vuông có cùng chu vi 36cm. Tính hiệu độ dài cạnh tam giác đều và cạnh hình vuông.', options: ['3', '9', '12', '21'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho đoạn thẳng AB = 18cm. Gọi M là trung điểm của AB, N là trung điểm của AM. Tính độ dài AN.',
          solution: ['$AM=\\dfrac{18}{2}=9$cm', '$AN=\\dfrac{9}{2}=4{,}5$cm'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho góc xOz = 100°. Tia Oy nằm giữa hai tia Ox, Oz sao cho góc xOy − góc yOz = 20°. Tính số đo mỗi góc xOy và yOz.',
          solution: [
            '$\\widehat{xOy}+\\widehat{yOz}=100°$ và $\\widehat{xOy}-\\widehat{yOz}=20°$',
            'Cộng 2 phương trình: $2\\widehat{xOy}=120° \\Rightarrow \\widehat{xOy}=60°$',
            '$\\widehat{yOz}=100°-60°=40°$',
          ],
        },
      ],
    },
  },
}
