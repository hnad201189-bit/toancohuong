import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_PHAN_SO_THAP_PHAN = {
  'l6-khai-niem-phan-so': {
    title: 'Khái niệm phân số, phân số bằng nhau',
    theory: {
      cards: [
        {
          title: 'Khái niệm phân số',
          formulas: ['\\dfrac{a}{b}\\ (b\\ne0)'],
          legend: ['$a$: tử số', '$b$: mẫu số ($b\\ne0$)'],
          note: 'Mẹo: phân số $\\dfrac{a}{b}$ biểu diễn phép chia $a$ cho $b$, hoặc $a$ phần bằng nhau trong $b$ phần bằng nhau của một đơn vị.',
        },
        {
          title: 'Phân số bằng nhau',
          formulas: ['\\dfrac{a}{b}=\\dfrac{c}{d} \\Leftrightarrow a\\cdot d = b\\cdot c'],
          legend: ['Hai phân số bằng nhau khi và chỉ khi tích chéo của chúng bằng nhau'],
          note: 'Mẹo: muốn rút gọn phân số, chia cả tử và mẫu cho ƯCLN của chúng để được phân số tối giản.',
        },
      ],
    },
    video: { caption: '00:00 / 08:50 — khai_niem_phan_so_baigiang.mp4' },
    quiz: [
      { question: 'Phân số 3/4 có tử số là?', options: ['3', '4', '7', '1'], correctIndex: 0 },
      { question: 'Phân số nào bằng phân số 1/2?', options: ['2/4', '3/5', '1/3', '2/3'], correctIndex: 0 },
      { question: 'Rút gọn phân số 6/8.', options: ['3/4', '2/3', '1/2', '5/6'], correctIndex: 0 },
      { question: 'Hai phân số 2/3 và 4/6 có bằng nhau không? (2×6=12, 3×4=12)', options: ['Bằng nhau', 'Không bằng nhau', 'Không xác định', 'Chỉ đúng khi rút gọn'], correctIndex: 0 },
      { question: 'Mẫu số của phân số −5/7 là?', options: ['7', '−5', '−7', '5'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Viết phân số biểu thị "3 phần 5".', solution: ['$\\dfrac35$'] },
      { prompt: 'Bài 2. Rút gọn phân số 12/18.', solution: ['ƯCLN(12,18) = 6', '$\\dfrac{12}{18}=\\dfrac{12:6}{18:6}=\\dfrac23$'] },
      { prompt: 'Bài 3. Kiểm tra hai phân số 3/4 và 9/12 có bằng nhau không (dùng tích chéo).', solution: ['$3\\times12=36$ và $4\\times9=36$, hai tích bằng nhau nên $\\dfrac34=\\dfrac{9}{12}$'] },
      { prompt: 'Bài 4. Quy đồng mẫu số hai phân số 1/3 và 1/4.', solution: ['Mẫu số chung: 12', '$\\dfrac13=\\dfrac{4}{12};\\quad \\dfrac14=\\dfrac{3}{12}$'] },
      { prompt: 'Bài 5. Sắp xếp các phân số 1/2, 1/4, 1/3 theo thứ tự tăng dần.', solution: ['Quy đồng mẫu 12: $\\dfrac14=\\dfrac{3}{12},\\ \\dfrac13=\\dfrac{4}{12},\\ \\dfrac12=\\dfrac{6}{12}$', 'Vậy $\\dfrac14<\\dfrac13<\\dfrac12$'] },
    ],
    flashcards: [
      { front: 'Phân số a/b', back: 'a: tử số, b: mẫu số (b≠0)' },
      { front: 'Hai phân số bằng nhau', back: '$\\frac{a}{b}=\\frac{c}{d}\\Leftrightarrow ad=bc$' },
      { front: 'Rút gọn phân số', back: 'Chia cả tử và mẫu cho ƯCLN của chúng' },
      { front: 'Phân số tối giản', back: 'Phân số có tử và mẫu là hai số nguyên tố cùng nhau' },
      { front: 'Quy đồng mẫu số', back: 'Đưa các phân số về cùng một mẫu số chung' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Trong phân số a/b, a gọi là gì?', options: ['Tử số', 'Mẫu số', 'Thương', 'Hiệu'], correctIndex: 0 },
        { question: 'Điều kiện của mẫu số b trong phân số a/b là?', options: ['b ≠ 0', 'b > 0', 'b < 0', 'b = 0'], correctIndex: 0 },
        { question: 'Phân số nào sau đây bằng 1/2?', options: ['2/4', '1/3', '2/3', '3/4'], correctIndex: 0 },
        { question: 'Phân số tối giản là phân số có đặc điểm gì?', options: ['Tử và mẫu nguyên tố cùng nhau', 'Tử lớn hơn mẫu', 'Mẫu bằng 1', 'Tử bằng 0'], correctIndex: 0 },
        { question: 'Muốn rút gọn phân số ta làm gì?', options: ['Chia cả tử và mẫu cho ƯCLN', 'Nhân cả tử và mẫu với 2', 'Cộng thêm 1 vào tử và mẫu', 'Đổi chỗ tử và mẫu'], correctIndex: 0 },
        { question: 'Phân số 5/5 có giá trị bằng?', options: ['1', '5', '0', 'Không xác định'], correctIndex: 0 },
        { question: 'Rút gọn phân số 8/12.', options: ['2/3', '4/6', '1/2', '3/4'], correctIndex: 0 },
        { question: 'Rút gọn phân số 15/20.', options: ['3/4', '5/4', '3/5', '1/4'], correctIndex: 0 },
        { question: 'Hai phân số 2/5 và 6/15 có bằng nhau không?', options: ['Bằng nhau', 'Không bằng nhau', 'Không xác định', 'Chỉ gần bằng'], correctIndex: 0 },
        { question: 'Quy đồng mẫu số 1/2 và 1/3 được mẫu số chung nhỏ nhất là?', options: ['6', '5', '2', '3'], correctIndex: 0 },
        { question: 'Phân số 1/4 quy đồng về mẫu 12 là?', options: ['3/12', '4/12', '1/12', '12/4'], correctIndex: 0 },
        { question: 'So sánh 3/4 và 5/6 (quy đồng mẫu 12: 9/12 và 10/12).', options: ['3/4 < 5/6', '3/4 > 5/6', '3/4 = 5/6', 'Không so sánh được'], correctIndex: 0 },
        { question: 'Tìm x biết 2/3 = x/9.', options: ['6', '3', '9', '18'], correctIndex: 0 },
        { question: 'Rút gọn phân số 36/48 về phân số tối giản.', options: ['3/4', '6/8', '9/12', '1/2'], correctIndex: 0 },
        { question: 'Sắp xếp 2/3, 1/2, 3/4 theo thứ tự tăng dần.', options: ['1/2 < 2/3 < 3/4', '2/3 < 1/2 < 3/4', '3/4 < 2/3 < 1/2', '1/2 < 3/4 < 2/3'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Rút gọn phân số 45/60 về phân số tối giản.', solution: ['ƯCLN(45,60) = 15', '$\\dfrac{45}{60}=\\dfrac{3}{4}$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm phân số tối giản bằng phân số 90/126, biết ƯCLN(90,126) = 18.',
          solution: ['$90:18=5,\\quad 126:18=7$', '$\\dfrac{90}{126}=\\dfrac{5}{7}$'],
        },
      ],
    },
  },

  'l6-phep-tinh-phan-so': {
    title: 'Các phép tính với phân số',
    theory: {
      cards: [
        {
          title: 'Cộng, trừ phân số',
          formulas: ['\\dfrac{a}{b}+\\dfrac{c}{b}=\\dfrac{a+c}{b}', '\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{ad+bc}{bd}'],
          legend: ['Cùng mẫu: cộng/trừ tử số, giữ nguyên mẫu', 'Khác mẫu: quy đồng mẫu số trước khi cộng/trừ'],
          note: 'Mẹo: nên rút gọn kết quả về phân số tối giản sau khi tính.',
        },
        {
          title: 'Nhân, chia phân số',
          formulas: ['\\dfrac{a}{b}\\times\\dfrac{c}{d}=\\dfrac{ac}{bd}', '\\dfrac{a}{b}:\\dfrac{c}{d}=\\dfrac{a}{b}\\times\\dfrac{d}{c}'],
          legend: ['Nhân phân số: nhân tử với tử, mẫu với mẫu', 'Chia phân số: nhân với phân số nghịch đảo của số chia'],
          note: 'Mẹo: phân số nghịch đảo của $\\dfrac{a}{b}$ ($a\\ne0$) là $\\dfrac{b}{a}$.',
        },
      ],
    },
    video: { caption: '00:00 / 12:40 — phep_tinh_phan_so_baigiang.mp4' },
    quiz: [
      { question: '1/3 + 1/3 bằng?', options: ['2/3', '2/6', '1/3', '1'], correctIndex: 0 },
      { question: '2/5 + 1/3 bằng?', options: ['11/15', '3/8', '3/15', '1'], correctIndex: 0 },
      { question: '2/3 × 3/4 bằng?', options: ['1/2', '5/7', '6/7', '3/4'], correctIndex: 0 },
      { question: '3/4 : 1/2 bằng?', options: ['3/2', '3/8', '2/3', '1/2'], correctIndex: 0 },
      { question: 'Phân số nghịch đảo của 2/5 là?', options: ['5/2', '2/5', '−5/2', '−2/5'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính: 1/4 + 3/8.', solution: ['MSC = 8: $\\dfrac{2}{8}+\\dfrac{3}{8}=\\dfrac{5}{8}$'] },
      { prompt: 'Bài 2. Tính: 5/6 − 1/3.', solution: ['MSC = 6: $\\dfrac{5}{6}-\\dfrac{2}{6}=\\dfrac{3}{6}=\\dfrac12$'] },
      { prompt: 'Bài 3. Tính: 2/3 × 9/4.', solution: ['$\\dfrac23\\times\\dfrac94=\\dfrac{18}{12}=\\dfrac32$'] },
      { prompt: 'Bài 4. Tính: 4/5 : 2/3.', solution: ['$\\dfrac45:\\dfrac23=\\dfrac45\\times\\dfrac32=\\dfrac{12}{10}=\\dfrac65$'] },
      { prompt: 'Bài 5. Tính giá trị biểu thức: 1/2 + 1/3 × 3/4.', solution: ['$\\dfrac13\\times\\dfrac34=\\dfrac{1}{4}$ (nhân trước)', '$\\dfrac12+\\dfrac14=\\dfrac34$'] },
    ],
    flashcards: [
      { front: 'Cộng/trừ phân số cùng mẫu', back: 'Cộng/trừ tử số, giữ nguyên mẫu' },
      { front: 'Cộng/trừ phân số khác mẫu', back: 'Quy đồng mẫu số trước' },
      { front: 'Nhân phân số', back: '$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}$' },
      { front: 'Chia phân số', back: 'Nhân với phân số nghịch đảo của số chia' },
      { front: 'Phân số nghịch đảo của a/b', back: '$\\frac{b}{a}$ (a≠0)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Muốn cộng hai phân số cùng mẫu ta làm gì?', options: ['Cộng tử số, giữ nguyên mẫu', 'Cộng cả tử và mẫu', 'Nhân tử với mẫu', 'Quy đồng lại'], correctIndex: 0 },
        { question: 'Muốn nhân hai phân số ta làm gì?', options: ['Nhân tử với tử, mẫu với mẫu', 'Cộng tử, cộng mẫu', 'Nhân tử này với mẫu kia', 'Lấy trung bình cộng'], correctIndex: 0 },
        { question: 'Muốn chia hai phân số ta làm gì?', options: ['Nhân với phân số nghịch đảo của số chia', 'Chia tử cho tử, mẫu cho mẫu', 'Cộng với số nghịch đảo', 'Không thực hiện được'], correctIndex: 0 },
        { question: 'Phân số nghịch đảo của 3/7 là?', options: ['7/3', '3/7', '−7/3', '−3/7'], correctIndex: 0 },
        { question: '1/5 + 2/5 bằng?', options: ['3/5', '3/10', '2/5', '1'], correctIndex: 0 },
        { question: '4/7 − 1/7 bằng?', options: ['3/7', '5/7', '3/14', '4/49'], correctIndex: 0 },
        { question: '1/2 + 1/4 bằng?', options: ['3/4', '2/6', '1/6', '1/4'], correctIndex: 0 },
        { question: '2/3 − 1/6 bằng?', options: ['1/2', '1/3', '1/6', '5/6'], correctIndex: 0 },
        { question: '3/5 × 2/3 bằng?', options: ['2/5', '5/8', '1/2', '3/8'], correctIndex: 0 },
        { question: '1/2 : 1/4 bằng?', options: ['2', '1/8', '4', '1/2'], correctIndex: 0 },
        { question: '5/6 + 1/3 bằng?', options: ['7/6', '6/9', '1', '2/3'], correctIndex: 0 },
        { question: '7/8 − 1/2 bằng?', options: ['3/8', '6/8', '1/4', '1/2'], correctIndex: 0 },
        { question: 'Tính: 2/3 + 1/4 − 1/6.', options: ['3/4', '1/2', '2/3', '5/6'], correctIndex: 0 },
        { question: 'Một bể nước, lần 1 bơm đầy 2/5 bể, lần 2 bơm thêm 1/3 bể. Bể đã đầy bao nhiêu phần?', options: ['11/15', '3/8', '1', '3/15'], correctIndex: 0 },
        { question: 'Tính: (1/2 + 1/3) : 5/6.', options: ['1', '5/6', '6/5', '0'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: 3/4 − 1/2 + 1/8.', solution: ['MSC = 8: $\\dfrac68-\\dfrac48+\\dfrac18=\\dfrac38$'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một người có một mảnh vườn. Người đó trồng rau trên 2/5 diện tích vườn, trồng hoa trên 1/4 diện tích còn lại. Hỏi diện tích trồng hoa chiếm bao nhiêu phần của cả mảnh vườn?',
          solution: ['Diện tích còn lại sau khi trồng rau: $1-\\dfrac25=\\dfrac35$', 'Diện tích trồng hoa: $\\dfrac14\\times\\dfrac35=\\dfrac{3}{20}$'],
        },
      ],
    },
  },

  'l6-so-thap-phan': {
    title: 'Số thập phân và các phép tính',
    theory: {
      cards: [
        {
          title: 'Số thập phân',
          formulas: ['0,25 = \\dfrac{25}{100}'],
          legend: ['Số thập phân gồm phần nguyên và phần thập phân, ngăn cách bởi dấu phẩy', 'Mọi phân số có mẫu là luỹ thừa của 10 đều viết được thành số thập phân'],
          note: 'Mẹo: số chữ số ở phần thập phân bằng số chữ số 0 ở mẫu (khi mẫu là luỹ thừa của 10).',
        },
        {
          title: 'Cộng, trừ, nhân, chia số thập phân',
          formulas: ['1,25+2,4=3,65', '3,2\\times1,5=4,8'],
          legend: ['Cộng/trừ: đặt tính sao cho các dấu phẩy thẳng cột', 'Nhân: nhân như số tự nhiên rồi đếm tổng số chữ số thập phân của hai thừa số để đặt dấu phẩy'],
          note: 'Mẹo chia số thập phân: nhân cả số bị chia và số chia với cùng luỹ thừa của 10 để đưa về chia số tự nhiên.',
        },
      ],
    },
    video: { caption: '00:00 / 11:20 — so_thap_phan_baigiang.mp4' },
    quiz: [
      { question: 'Phân số 3/10 viết dưới dạng số thập phân là?', options: ['0,3', '0,03', '3,0', '0,003'], correctIndex: 0 },
      { question: 'Số thập phân 0,25 viết dưới dạng phân số là?', options: ['1/4', '1/25', '4/1', '25/10'], correctIndex: 0 },
      { question: 'Tính: 1,5 + 2,7.', options: ['4,2', '3,2', '4,12', '42'], correctIndex: 0 },
      { question: 'Tính: 3,6 − 1,4.', options: ['2,2', '2,4', '1,2', '5,0'], correctIndex: 0 },
      { question: 'Tính: 2,5 × 2.', options: ['5', '2,5', '4,5', '10'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Viết các phân số sau dưới dạng số thập phân: 7/10, 9/100.', solution: ['$\\dfrac{7}{10}=0,7;\\quad \\dfrac{9}{100}=0,09$'] },
      { prompt: 'Bài 2. Tính: 4,25 + 3,7.', solution: ['$4,25+3,7=7,95$'] },
      { prompt: 'Bài 3. Tính: 8,4 − 2,65.', solution: ['$8,4-2,65=5,75$'] },
      { prompt: 'Bài 4. Tính: 1,2 × 0,5.', solution: ['$1,2\\times0,5=0,6$'] },
      { prompt: 'Bài 5. Tính: 7,5 : 2,5.', solution: ['$7,5:2,5=3$'] },
    ],
    flashcards: [
      { front: 'Cấu tạo số thập phân', back: 'Phần nguyên, phần thập phân (ngăn cách bởi dấu phẩy)' },
      { front: 'Cộng/trừ số thập phân', back: 'Đặt tính sao cho các dấu phẩy thẳng cột' },
      { front: 'Nhân số thập phân', back: 'Nhân như số tự nhiên, đếm chữ số thập phân để đặt dấu phẩy' },
      { front: '3/10 dưới dạng số thập phân', back: '0,3' },
      { front: '1/4 dưới dạng số thập phân', back: '0,25' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số thập phân gồm những phần nào?', options: ['Phần nguyên và phần thập phân', 'Chỉ phần nguyên', 'Chỉ phần thập phân', 'Tử số và mẫu số'], correctIndex: 0 },
        { question: 'Phân số 1/10 viết dưới dạng số thập phân là?', options: ['0,1', '0,01', '1,0', '10'], correctIndex: 0 },
        { question: 'Phân số 1/100 viết dưới dạng số thập phân là?', options: ['0,01', '0,1', '1,00', '100'], correctIndex: 0 },
        { question: 'Số 0,5 viết dưới dạng phân số tối giản là?', options: ['1/2', '5/10', '5/100', '1/5'], correctIndex: 0 },
        { question: 'Khi cộng hai số thập phân, ta cần chú ý điều gì?', options: ['Đặt các dấu phẩy thẳng cột', 'Đặt các số cuối thẳng cột', 'Bỏ dấu phẩy đi', 'Không cần chú ý gì'], correctIndex: 0 },
        { question: 'Số 3,0 bằng số nào sau đây?', options: ['3', '0,3', '30', '0,03'], correctIndex: 0 },
        { question: 'Tính: 2,4 + 3,15.', options: ['5,55', '5,45', '5,5', '55,5'], correctIndex: 0 },
        { question: 'Tính: 6,3 − 2,15.', options: ['4,15', '4,25', '4,05', '3,15'], correctIndex: 0 },
        { question: 'Tính: 1,5 × 4.', options: ['6', '1,5', '4', '60'], correctIndex: 0 },
        { question: 'Tính: 9 : 0,5.', options: ['18', '4,5', '9', '1,8'], correctIndex: 0 },
        { question: 'Viết 3/4 dưới dạng số thập phân.', options: ['0,75', '0,34', '0,43', '7,4'], correctIndex: 0 },
        { question: 'So sánh 0,6 và 0,45.', options: ['0,6 > 0,45', '0,6 < 0,45', '0,6 = 0,45', 'Không so sánh được'], correctIndex: 0 },
        { question: 'Tính giá trị biểu thức: 2,5 × 4 − 3,6 : 2.', options: ['8,2', '6,4', '5,3', '10,8'], correctIndex: 0 },
        { question: 'Một món hàng giá 200 000đ được giảm giá 0,15 (15%). Giá sau khi giảm là?', options: ['170.000đ', '30.000đ', '230.000đ', '200.000đ'], correctIndex: 0 },
        { question: 'Tính: 12,6 : 0,3 − 5.', options: ['37', '42', '32', '47'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: 15,4 + 8,75 − 3,9.', solution: ['$15,4+8,75=24,15$', '$24,15-3,9=20,25$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một mảnh đất hình chữ nhật có chiều dài 8,5m, chiều rộng bằng 0,4 lần chiều dài. Tính diện tích mảnh đất.',
          solution: ['Chiều rộng: $8,5\\times0,4=3,4$ (m)', 'Diện tích: $8,5\\times3,4=28,9$ (m²)'],
        },
      ],
    },
  },

  'l6-ti-so-phan-tram': {
    title: 'Tỉ số, tỉ số phần trăm',
    theory: {
      cards: [
        {
          title: 'Tỉ số của hai số',
          formulas: ['\\text{Tỉ số của } a \\text{ và } b = a:b = \\dfrac{a}{b}\\ (b\\ne0)'],
          legend: ['Tỉ số của $a$ và $b$ cho biết $a$ gấp (hoặc bằng một phần của) $b$ bao nhiêu lần'],
          note: 'Mẹo: tỉ số khác phân số ở chỗ $a$, $b$ có thể là hai số đo cùng loại đơn vị (ví dụ tỉ số hai đoạn thẳng, hai khối lượng).',
        },
        {
          title: 'Tỉ số phần trăm',
          formulas: ['\\text{Tỉ số phần trăm của } a \\text{ và } b = \\dfrac{a}{b}\\times100\\%'],
          legend: ['Tỉ số phần trăm: nhân tỉ số của $a$ và $b$ với $100\\%$'],
          note: 'Mẹo: muốn tìm $a\\%$ của $b$, tính $b\\times\\dfrac{a}{100}$.',
        },
      ],
    },
    video: { caption: '00:00 / 10:00 — ti_so_phan_tram_baigiang.mp4' },
    quiz: [
      { question: 'Tỉ số của 6 và 8 là?', options: ['3/4', '4/3', '3/8', '8/3'], correctIndex: 0 },
      { question: 'Tỉ số phần trăm của 25 và 100 là?', options: ['25%', '4%', '75%', '250%'], correctIndex: 0 },
      { question: '20% của 300 là?', options: ['60', '20', '80', '15'], correctIndex: 0 },
      { question: 'Tỉ số của 3m và 1,5m là?', options: ['2', '1/2', '3/2', '1,5'], correctIndex: 0 },
      { question: '50% của 80 là?', options: ['40', '50', '80', '30'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính tỉ số của 12 và 16.', solution: ['$12:16=\\dfrac{12}{16}=\\dfrac34$'] },
      { prompt: 'Bài 2. Lớp 6A có 40 học sinh, trong đó có 24 học sinh nữ. Tính tỉ số phần trăm học sinh nữ so với cả lớp.', solution: ['$\\dfrac{24}{40}\\times100\\%=60\\%$'] },
      { prompt: 'Bài 3. Tìm 15% của 200.', solution: ['$200\\times\\dfrac{15}{100}=30$'] },
      { prompt: 'Bài 4. Một cửa hàng bán được 80 sản phẩm trong tổng số 100 sản phẩm nhập về. Tính tỉ số phần trăm sản phẩm đã bán.', solution: ['$\\dfrac{80}{100}\\times100\\%=80\\%$'] },
      {
        prompt: 'Bài 5. Giá một chiếc áo là 250 000đ, sau khi giảm giá còn 200 000đ. Tính tỉ số phần trăm giảm giá so với giá ban đầu.',
        solution: ['Số tiền giảm: $250\\,000-200\\,000=50\\,000$đ', 'Tỉ số phần trăm giảm: $\\dfrac{50\\,000}{250\\,000}\\times100\\%=20\\%$'],
      },
    ],
    flashcards: [
      { front: 'Tỉ số của a và b', back: '$a:b=\\frac{a}{b}$ (b≠0)' },
      { front: 'Tỉ số phần trăm của a và b', back: '$\\frac{a}{b}\\times100\\%$' },
      { front: 'Tìm a% của b', back: '$b\\times\\frac{a}{100}$' },
      { front: 'Đổi phần trăm sang phân số', back: '$a\\%=\\frac{a}{100}$' },
      { front: 'Đổi phần trăm sang số thập phân', back: '$25\\%=0,25$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tỉ số của a và b (b≠0) được tính bằng?', options: ['a : b', 'a + b', 'a − b', 'a × b'], correctIndex: 0 },
        { question: 'Tỉ số phần trăm của a và b là?', options: ['(a/b) × 100%', 'a/b', 'a × b × 100', '(a+b) × 100%'], correctIndex: 0 },
        { question: '50% bằng phân số nào?', options: ['1/2', '1/4', '1/5', '1/10'], correctIndex: 0 },
        { question: '25% bằng số thập phân nào?', options: ['0,25', '0,025', '2,5', '25'], correctIndex: 0 },
        { question: '100% của một số bằng chính số đó, đúng hay sai?', options: ['Đúng', 'Sai', 'Không xác định', 'Chỉ đúng với số nguyên'], correctIndex: 0 },
        { question: 'Muốn tìm a% của b ta tính?', options: ['b × a/100', 'b × a', 'b/a × 100', 'a/b × 100'], correctIndex: 0 },
        { question: 'Tỉ số của 9 và 12 là?', options: ['3/4', '4/3', '2/3', '1/3'], correctIndex: 0 },
        { question: 'Tỉ số phần trăm của 15 và 60 là?', options: ['25%', '15%', '60%', '40%'], correctIndex: 0 },
        { question: '30% của 150 là?', options: ['45', '30', '50', '60'], correctIndex: 0 },
        { question: '12 là bao nhiêu phần trăm của 48?', options: ['25%', '12%', '48%', '4%'], correctIndex: 0 },
        { question: 'Một lớp có 30 học sinh, 40% là học sinh giỏi. Số học sinh giỏi là?', options: ['12', '15', '10', '18'], correctIndex: 0 },
        { question: '75% của 40 là?', options: ['30', '35', '25', '20'], correctIndex: 0 },
        { question: 'Một cửa hàng nhập 500 sản phẩm, đã bán 60% số đó. Số sản phẩm còn lại là?', options: ['200', '300', '250', '150'], correctIndex: 0 },
        { question: 'Giá gốc 400 000đ, giảm giá 15%. Giá sau khi giảm là?', options: ['340.000đ', '360.000đ', '300.000đ', '280.000đ'], correctIndex: 0 },
        { question: 'Số học sinh nam bằng 60% số học sinh cả lớp (40 học sinh). Số học sinh nữ là?', options: ['16', '24', '20', '15'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một trường có 800 học sinh, trong đó 45% là học sinh nam. Tính số học sinh nam và số học sinh nữ.',
          solution: ['Số học sinh nam: $800\\times0,45=360$', 'Số học sinh nữ: $800-360=440$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Giá bán một chiếc xe đạp sau khi giảm 20% còn lại 1 600 000đ. Tính giá gốc của chiếc xe đạp.',
          solution: ['Giá sau khi giảm bằng 80% giá gốc.', 'Giá gốc $=1\\,600\\,000:0,8=2\\,000\\,000$đ'],
        },
      ],
    },
  },

  'l6-hai-bai-toan-phan-so': {
    title: 'Hai bài toán về phân số',
    theory: {
      cards: [
        {
          title: 'Tìm giá trị phân số của một số cho trước',
          formulas: ['\\text{Giá trị} = b \\times \\dfrac{m}{n}'],
          legend: ['$b$: số đã cho', '$\\dfrac{m}{n}$: phân số cần tìm giá trị'],
          note: 'Ví dụ: tìm $\\dfrac23$ của 15, ta tính $15\\times\\dfrac23=10$.',
        },
        {
          title: 'Tìm một số biết giá trị phân số của nó',
          formulas: ['b = \\text{Giá trị} : \\dfrac{m}{n}'],
          legend: ['Nếu $\\dfrac{m}{n}$ của một số bằng giá trị đã biết, thì số đó bằng giá trị chia cho $\\dfrac{m}{n}$'],
          note: 'Ví dụ: biết $\\dfrac23$ của một số là 10, số đó là $10:\\dfrac23=15$.',
        },
      ],
    },
    video: { caption: '00:00 / 10:45 — hai_bai_toan_phan_so_baigiang.mp4' },
    quiz: [
      { question: 'Tìm 3/4 của 20.', options: ['15', '16', '20', '5'], correctIndex: 0 },
      { question: 'Tìm 2/5 của 25.', options: ['10', '5', '15', '20'], correctIndex: 0 },
      { question: 'Biết 1/2 của một số là 8, số đó là?', options: ['16', '4', '8', '2'], correctIndex: 0 },
      { question: 'Biết 3/5 của một số là 12, số đó là?', options: ['20', '15', '4', '36'], correctIndex: 0 },
      { question: 'Tìm 5/6 của 24.', options: ['20', '24', '4', '30'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tìm 2/7 của 35.', solution: ['$35\\times\\dfrac27=10$'] },
      { prompt: 'Bài 2. Một lớp có 45 học sinh, số học sinh nam chiếm 3/5 số học sinh cả lớp. Tính số học sinh nam.', solution: ['$45\\times\\dfrac35=27$ (học sinh)'] },
      { prompt: 'Bài 3. Biết 3/4 quãng đường một người đã đi là 18km. Tính cả quãng đường.', solution: ['$18:\\dfrac34=24$ (km)'] },
      {
        prompt: 'Bài 4. Một cửa hàng đã bán 2/3 số gạo, còn lại 40kg. Hỏi cửa hàng có bao nhiêu kg gạo lúc đầu?',
        solution: ['Số gạo còn lại ứng với $1-\\dfrac23=\\dfrac13$ số gạo ban đầu.', 'Số gạo ban đầu: $40:\\dfrac13=120$ (kg)'],
      },
      { prompt: 'Bài 5. Tìm một số biết 5/8 của số đó là 45.', solution: ['$45:\\dfrac58=72$'] },
    ],
    flashcards: [
      { front: 'Tìm m/n của số b', back: '$b\\times\\frac{m}{n}$' },
      { front: 'Tìm số biết m/n của nó là v', back: '$v:\\frac{m}{n}$' },
      { front: 'Ví dụ: tìm 2/3 của 15', back: '$15\\times\\frac23=10$' },
      { front: 'Ví dụ: tìm số biết 2/3 của nó là 10', back: '$10:\\frac23=15$' },
      { front: 'Chia cho một phân số', back: 'Nhân với phân số nghịch đảo' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Muốn tìm m/n của số b ta tính?', options: ['b × m/n', 'b : m/n', 'b + m/n', 'b − m/n'], correctIndex: 0 },
        { question: 'Muốn tìm một số biết m/n của nó là giá trị v ta tính?', options: ['v : m/n', 'v × m/n', 'v + m/n', 'v − m/n'], correctIndex: 0 },
        { question: '1/2 của 10 là?', options: ['5', '10', '20', '2'], correctIndex: 0 },
        { question: 'Biết 1/3 của một số là 5, số đó là?', options: ['15', '5', '3', '8'], correctIndex: 0 },
        { question: '1/4 của 12 là?', options: ['3', '4', '12', '48'], correctIndex: 0 },
        { question: 'Biết 1/5 của một số là 4, số đó là?', options: ['20', '4', '5', '9'], correctIndex: 0 },
        { question: 'Tìm 3/5 của 30.', options: ['18', '15', '10', '25'], correctIndex: 0 },
        { question: 'Tìm 2/3 của 21.', options: ['14', '7', '21', '10'], correctIndex: 0 },
        { question: 'Biết 2/5 của một số là 16, số đó là?', options: ['40', '32', '8', '20'], correctIndex: 0 },
        { question: 'Biết 3/8 của một số là 9, số đó là?', options: ['24', '27', '12', '3'], correctIndex: 0 },
        { question: 'Tìm 5/9 của 45.', options: ['25', '20', '30', '15'], correctIndex: 0 },
        { question: 'Biết 4/7 của một số là 20, số đó là?', options: ['35', '28', '14', '80'], correctIndex: 0 },
        { question: 'Một đội đã hoàn thành 3/5 công việc, còn lại 40 sản phẩm nữa. Tổng số sản phẩm cần làm là?', options: ['100', '60', '80', '120'], correctIndex: 0 },
        { question: 'Một bể nước có 3/4 bể là 60 lít. Bể đầy chứa được bao nhiêu lít?', options: ['80', '45', '90', '75'], correctIndex: 0 },
        { question: 'Một cửa hàng bán được 2/3 số vải, còn lại 50m. Số vải ban đầu là?', options: ['150', '100', '75', '200'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tìm 5/6 của 72.', solution: ['$72\\times\\dfrac56=60$'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một người có một số tiền. Người đó chi 2/5 số tiền để mua sách, chi tiếp 1/3 số tiền còn lại để mua bút, cuối cùng còn lại 180 000đ. Hỏi người đó có bao nhiêu tiền lúc đầu?',
          solution: [
            'Sau khi mua sách còn lại: $1-\\dfrac25=\\dfrac35$ số tiền ban đầu.',
            'Sau khi mua bút, còn lại: $\\dfrac35\\times\\left(1-\\dfrac13\\right)=\\dfrac35\\times\\dfrac23=\\dfrac{2}{5}$ số tiền ban đầu.',
            '$\\dfrac25$ số tiền $=180\\,000$đ $\\Rightarrow$ số tiền ban đầu $=180\\,000:\\dfrac25=450\\,000$đ',
          ],
        },
      ],
    },
  },
}
