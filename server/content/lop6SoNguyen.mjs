import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_SO_NGUYEN = {
  'l6-tap-hop-so-nguyen': {
    title: 'Số nguyên âm và tập hợp số nguyên',
    theory: {
      cards: [
        {
          title: 'Số nguyên âm',
          formulas: ['-5,\\ -4,\\ -3,\\ -2,\\ -1'],
          legend: ['Số nguyên âm dùng để biểu diễn các đại lượng "ngược hướng" với số tự nhiên: nhiệt độ dưới 0°C, độ sâu dưới mực nước biển, nợ tiền...'],
          note: 'Mẹo: thêm dấu "−" trước một số tự nhiên khác 0 để được số nguyên âm tương ứng.',
        },
        {
          title: 'Tập hợp số nguyên ℤ',
          formulas: ['\\mathbb{Z} = \\{...;-2;-1;0;1;2;...\\}'],
          legend: ['$\\mathbb{Z}$: tập hợp số nguyên, gồm số nguyên âm, số 0 và số nguyên dương', 'Số đối của $a$ là $-a$', '$|a|$: giá trị tuyệt đối của $a$ — khoảng cách từ điểm $a$ đến điểm 0 trên trục số'],
          note: 'Mẹo so sánh: trên trục số nằm ngang, số bên trái luôn nhỏ hơn số bên phải; trong hai số nguyên âm, số nào có giá trị tuyệt đối lớn hơn thì số đó nhỏ hơn.',
        },
      ],
    },
    video: { caption: '00:00 / 09:10 — tap_hop_so_nguyen_baigiang.mp4' },
    quiz: [
      { question: 'Số nào sau đây là số nguyên âm?', options: ['−3', '0', '5', '10'], correctIndex: 0 },
      { question: 'Tập hợp số nguyên được kí hiệu là?', options: ['ℤ', 'ℕ', 'ℚ', 'ℝ'], correctIndex: 0 },
      { question: 'So sánh −5 và −2, khẳng định nào đúng?', options: ['−5 < −2', '−5 > −2', '−5 = −2', 'Không so sánh được'], correctIndex: 0 },
      { question: 'Số đối của −7 là?', options: ['7', '−7', '0', '−14'], correctIndex: 0 },
      { question: 'Giá trị tuyệt đối của −8 là?', options: ['8', '−8', '0', '16'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Sắp xếp các số sau theo thứ tự tăng dần: 3, −5, 0, −2, 7.', solution: ['$-5<-2<0<3<7$'] },
      { prompt: 'Bài 2. Tìm số đối của các số: 5, −12, 0.', solution: ['Số đối của 5 là $-5$', 'Số đối của $-12$ là $12$', 'Số đối của 0 là 0'] },
      { prompt: 'Bài 3. Tính giá trị tuyệt đối: |−9|, |15|, |0|.', solution: ['$|-9|=9,\\quad |15|=15,\\quad |0|=0$'] },
      { prompt: 'Bài 4. So sánh −15 và −8, giải thích bằng giá trị tuyệt đối.', solution: ['$|-15|=15>|-8|=8$', 'Vì giá trị tuyệt đối của $-15$ lớn hơn nên $-15<-8$'] },
      { prompt: 'Bài 5. Biểu diễn các số −3, 2, −1, 0 trên trục số theo thứ tự từ trái sang phải.', solution: ['Thứ tự từ trái sang phải trên trục số: $-3;\\ -1;\\ 0;\\ 2$'] },
    ],
    flashcards: [
      { front: 'Tập hợp số nguyên ℤ', back: '$\\{...;-2;-1;0;1;2;...\\}$' },
      { front: 'Số đối của a', back: '$-a$' },
      { front: 'Giá trị tuyệt đối của a', back: 'Khoảng cách từ điểm a đến điểm 0 trên trục số' },
      { front: 'So sánh hai số nguyên âm', back: 'Số nào có giá trị tuyệt đối lớn hơn thì số đó nhỏ hơn' },
      { front: 'Số nguyên dương, 0, số nguyên âm', back: 'Số nguyên dương > 0 > số nguyên âm' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số nào là số nguyên âm?', options: ['−4', '0', '3', '9'], correctIndex: 0 },
        { question: 'Tập hợp số nguyên kí hiệu là?', options: ['ℤ', 'ℕ', 'ℚ', 'ℝ'], correctIndex: 0 },
        { question: 'Số đối của 6 là?', options: ['−6', '6', '0', '−12'], correctIndex: 0 },
        { question: '|−10| bằng?', options: ['10', '−10', '0', '20'], correctIndex: 0 },
        { question: 'Số 0 là số nguyên dương hay âm?', options: ['Không dương không âm', 'Dương', 'Âm', 'Cả hai'], correctIndex: 0 },
        { question: 'Trên trục số, số nguyên âm nằm ở phía nào so với 0?', options: ['Bên trái', 'Bên phải', 'Trùng với 0', 'Không xác định'], correctIndex: 0 },
        { question: 'So sánh −3 và −7:', options: ['−3 > −7', '−3 < −7', '−3 = −7', 'Không so sánh được'], correctIndex: 0 },
        { question: 'Số đối của −15 là?', options: ['15', '−15', '0', '30'], correctIndex: 0 },
        { question: '|−6| và |6| có bằng nhau không?', options: ['Bằng nhau', 'Khác nhau', 'Không xác định', '−6 lớn hơn'], correctIndex: 0 },
        { question: 'Sắp xếp tăng dần: −2, 5, −8, 0.', options: ['−8;−2;0;5', '5;0;−2;−8', '−2;−8;0;5', '0;−2;−8;5'], correctIndex: 0 },
        { question: 'Số nguyên lớn nhất trong các số −1, −10, −100 là?', options: ['−1', '−10', '−100', 'Không so sánh được'], correctIndex: 0 },
        { question: 'Giá trị tuyệt đối của một số nguyên luôn là số gì?', options: ['Số tự nhiên (không âm)', 'Số âm', 'Số 0', 'Số nguyên âm'], correctIndex: 0 },
        { question: 'Tìm số nguyên x biết |x| = 5.', options: ['x = 5 hoặc x = −5', 'x = 5', 'x = −5', 'x = 0'], correctIndex: 0 },
        { question: 'Cho các số −4, −9, 2, −1. Số nhỏ nhất là?', options: ['−9', '−4', '−1', '2'], correctIndex: 0 },
        { question: 'Nhiệt độ 3 thành phố là −5°C, 2°C, −10°C. Thành phố nào lạnh nhất?', options: ['Thành phố có −10°C', 'Thành phố có −5°C', 'Thành phố có 2°C', 'Không xác định'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Sắp xếp các số nguyên sau theo thứ tự giảm dần: −6, 4, 0, −1, 9.',
          solution: ['$9>4>0>-1>-6$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm tất cả số nguyên x thoả −3 < x < 4. Liệt kê và tính tổng các số đó.',
          solution: ['$x\\in\\{-2;-1;0;1;2;3\\}$', 'Tổng: $-2-1+0+1+2+3=3$'],
        },
      ],
    },
  },

  'l6-cong-tru-so-nguyen': {
    title: 'Phép cộng, phép trừ số nguyên',
    theory: {
      cards: [
        {
          title: 'Cộng hai số nguyên',
          formulas: ['(+3)+(+5)=+8', '(-3)+(-5)=-8', '(-7)+(+4)=-3'],
          legend: ['Cộng hai số nguyên cùng dấu: cộng hai giá trị tuyệt đối, giữ nguyên dấu chung', 'Cộng hai số nguyên khác dấu: lấy giá trị tuyệt đối lớn trừ giá trị tuyệt đối nhỏ, dấu là dấu của số có giá trị tuyệt đối lớn hơn'],
          note: 'Mẹo: $a + (-a) = 0$ với mọi số nguyên $a$.',
        },
        {
          title: 'Trừ hai số nguyên',
          formulas: ['a-b=a+(-b)'],
          legend: ['Muốn trừ số nguyên $b$, ta cộng với số đối của $b$'],
          note: 'Mẹo: phép trừ số nguyên luôn đưa được về phép cộng bằng cách đổi dấu số trừ.',
        },
      ],
    },
    video: { caption: '00:00 / 10:35 — cong_tru_so_nguyen_baigiang.mp4' },
    quiz: [
      { question: '(−3) + (−5) bằng?', options: ['−8', '8', '−2', '2'], correctIndex: 0 },
      { question: '(+7) + (−4) bằng?', options: ['3', '−3', '11', '−11'], correctIndex: 0 },
      { question: '5 − (−2) bằng?', options: ['7', '3', '−3', '−7'], correctIndex: 0 },
      { question: '(−6) + 6 bằng?', options: ['0', '−12', '12', '6'], correctIndex: 0 },
      { question: '(−9) − (−4) bằng?', options: ['−5', '−13', '5', '13'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính: (−12) + (−8).', solution: ['$(-12)+(-8)=-20$'] },
      { prompt: 'Bài 2. Tính: 15 + (−20).', solution: ['$15+(-20)=-5$'] },
      { prompt: 'Bài 3. Tính: (−7) − 9.', solution: ['$(-7)-9=(-7)+(-9)=-16$'] },
      { prompt: 'Bài 4. Tính: 20 − (−15).', solution: ['$20-(-15)=20+15=35$'] },
      { prompt: 'Bài 5. Một thang máy đang ở tầng hầm −2, đi lên 5 tầng. Hỏi thang máy đang ở tầng nào?', solution: ['$-2+5=3$. Vậy thang máy đang ở tầng 3.'] },
    ],
    flashcards: [
      { front: 'Cộng hai số nguyên cùng dấu', back: 'Cộng hai giá trị tuyệt đối, giữ dấu chung' },
      { front: 'Cộng hai số nguyên khác dấu', back: 'Trừ hai giá trị tuyệt đối (lớn trừ nhỏ), lấy dấu số có GTTĐ lớn hơn' },
      { front: 'Công thức trừ số nguyên', back: '$a-b=a+(-b)$' },
      { front: 'a + (−a)', back: '$=0$' },
      { front: 'Cộng với số 0', back: '$a+0=a$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '(+2) + (+3) bằng?', options: ['5', '−5', '1', '−1'], correctIndex: 0 },
        { question: '(−4) + (−6) bằng?', options: ['−10', '10', '−2', '2'], correctIndex: 0 },
        { question: 'Muốn trừ số nguyên b, ta làm gì?', options: ['Cộng với số đối của b', 'Trừ với số đối của b', 'Nhân với −1', 'Không đổi gì'], correctIndex: 0 },
        { question: 'a + (−a) bằng?', options: ['0', 'a', '−a', '2a'], correctIndex: 0 },
        { question: '(−5) + 5 bằng?', options: ['0', '−10', '10', '5'], correctIndex: 0 },
        { question: 'a + 0 bằng?', options: ['a', '0', '−a', '1'], correctIndex: 0 },
        { question: '(+8) + (−3) bằng?', options: ['5', '−5', '11', '−11'], correctIndex: 0 },
        { question: '(−10) + (+4) bằng?', options: ['−6', '6', '−14', '14'], correctIndex: 0 },
        { question: '7 − (−3) bằng?', options: ['10', '4', '−4', '−10'], correctIndex: 0 },
        { question: '(−9) − 5 bằng?', options: ['−14', '−4', '4', '14'], correctIndex: 0 },
        { question: '(−6) + (−6) bằng?', options: ['−12', '0', '12', '−6'], correctIndex: 0 },
        { question: '12 − 20 bằng?', options: ['−8', '8', '32', '−32'], correctIndex: 0 },
        { question: 'Một người có 500 000đ, nợ 200 000đ. Số tiền thực có là?', options: ['300.000đ', '700.000đ', '−300.000đ', '200.000đ'], correctIndex: 0 },
        { question: 'Nhiệt độ buổi sáng −3°C, đến trưa tăng thêm 10°C. Nhiệt độ buổi trưa là?', options: ['7°C', '13°C', '−13°C', '−7°C'], correctIndex: 0 },
        { question: 'Tính: (−15) + 23 − (−7).', options: ['15', '−15', '45', '−45'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: (−25) + 18 − (−10).', solution: ['$-25+18+10=3$'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một tàu ngầm đang ở độ sâu 45m dưới mực nước biển (biểu diễn là −45m). Tàu lặn thêm 20m rồi nổi lên 30m. Hỏi tàu đang ở độ sâu bao nhiêu mét so với mực nước biển?',
          solution: ['$-45+(-20)+30=-35$', 'Vậy tàu đang ở độ sâu 35m dưới mực nước biển.'],
        },
      ],
    },
  },

  'l6-nhan-chia-so-nguyen': {
    title: 'Phép nhân, phép chia số nguyên',
    theory: {
      cards: [
        {
          title: 'Nhân hai số nguyên',
          formulas: ['(+)\\times(+) = +', '(-)\\times(-) = +', '(+)\\times(-) = -'],
          legend: ['Nhân hai số nguyên cùng dấu: kết quả là số dương', 'Nhân hai số nguyên khác dấu: kết quả là số âm'],
          note: 'Mẹo: quy tắc dấu khi nhân/chia số nguyên — "cùng dấu ra dương, khác dấu ra âm".',
        },
        {
          title: 'Chia hết trong tập số nguyên',
          formulas: ['a:b=q \\ \\Leftrightarrow\\ a=b\\cdot q'],
          legend: ['$a$ chia hết cho $b$ khi tồn tại số nguyên $q$ sao cho $a=b\\times q$'],
          note: 'Quy tắc dấu khi chia giống hệt khi nhân: cùng dấu được thương dương, khác dấu được thương âm.',
        },
      ],
    },
    video: { caption: '00:00 / 10:50 — nhan_chia_so_nguyen_baigiang.mp4' },
    quiz: [
      { question: '(−3) × 4 bằng?', options: ['−12', '12', '−7', '7'], correctIndex: 0 },
      { question: '(−5) × (−6) bằng?', options: ['30', '−30', '11', '−11'], correctIndex: 0 },
      { question: '24 : (−6) bằng?', options: ['−4', '4', '−18', '18'], correctIndex: 0 },
      { question: '(−36) : (−9) bằng?', options: ['4', '−4', '27', '−27'], correctIndex: 0 },
      { question: '7 × (−8) bằng?', options: ['−56', '56', '−15', '15'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính: (−4) × (−9).', solution: ['$(-4)\\times(-9)=36$'] },
      { prompt: 'Bài 2. Tính: 15 × (−3).', solution: ['$15\\times(-3)=-45$'] },
      { prompt: 'Bài 3. Tính: (−48) : 8.', solution: ['$(-48):8=-6$'] },
      { prompt: 'Bài 4. Tính: (−72) : (−9).', solution: ['$(-72):(-9)=8$'] },
      { prompt: 'Bài 5. Tính giá trị biểu thức: (−3) × 5 + 20 : (−4).', solution: ['$(-3)\\times5=-15$', '$20:(-4)=-5$', '$-15+(-5)=-20$'] },
    ],
    flashcards: [
      { front: 'Nhân hai số cùng dấu', back: 'Kết quả dương' },
      { front: 'Nhân hai số khác dấu', back: 'Kết quả âm' },
      { front: '(−a) × (−b)', back: '$=a\\times b$' },
      { front: 'a × 0', back: '$=0$' },
      { front: 'Chia hai số nguyên cùng dấu', back: 'Thương dương' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '(+3) × (+5) bằng?', options: ['15', '−15', '8', '−8'], correctIndex: 0 },
        { question: '(−2) × (−7) bằng?', options: ['14', '−14', '5', '−5'], correctIndex: 0 },
        { question: '(+6) × (−2) bằng?', options: ['−12', '12', '4', '−4'], correctIndex: 0 },
        { question: 'a × 0 bằng?', options: ['0', 'a', '−a', '1'], correctIndex: 0 },
        { question: 'Nhân hai số nguyên cùng dấu cho kết quả gì?', options: ['Dương', 'Âm', 'Bằng 0', 'Không xác định'], correctIndex: 0 },
        { question: 'Nhân hai số nguyên khác dấu cho kết quả gì?', options: ['Âm', 'Dương', 'Bằng 0', 'Không xác định'], correctIndex: 0 },
        { question: '(−8) × 3 bằng?', options: ['−24', '24', '−11', '11'], correctIndex: 0 },
        { question: '(−9) × (−4) bằng?', options: ['36', '−36', '13', '−13'], correctIndex: 0 },
        { question: '45 : (−9) bằng?', options: ['−5', '5', '−36', '36'], correctIndex: 0 },
        { question: '(−56) : (−7) bằng?', options: ['8', '−8', '49', '−49'], correctIndex: 0 },
        { question: '(−6) × (−6) bằng?', options: ['36', '−36', '0', '12'], correctIndex: 0 },
        { question: '100 : (−25) bằng?', options: ['−4', '4', '−125', '125'], correctIndex: 0 },
        { question: 'Tính (−5) × 4 − (−10).', options: ['−10', '10', '−30', '30'], correctIndex: 0 },
        { question: 'Tính (−36) : 4 + (−2) × 3.', options: ['−15', '15', '−3', '3'], correctIndex: 0 },
        { question: 'Tìm số nguyên x biết (−3) × x = 15.', options: ['−5', '5', '−45', '45'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: (−6) × 7 + 15 : (−3).', solution: ['$(-6)\\times7=-42$', '$15:(-3)=-5$', '$-42+(-5)=-47$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm số nguyên x biết: (−4) × x − 5 = 11.',
          solution: ['$(-4)x=11+5=16$', '$x=16:(-4)=-4$'],
        },
      ],
    },
  },

  'l6-quy-tac-dau-ngoac': {
    title: 'Quy tắc dấu ngoặc, quy tắc chuyển vế',
    theory: {
      cards: [
        {
          title: 'Quy tắc dấu ngoặc',
          formulas: ['a+(b-c)=a+b-c', 'a-(b-c)=a-b+c'],
          legend: ['Bỏ ngoặc có dấu "+" đằng trước: giữ nguyên dấu các số hạng trong ngoặc', 'Bỏ ngoặc có dấu "−" đằng trước: đổi dấu tất cả các số hạng trong ngoặc'],
          note: 'Mẹo: dấu "+" trước ngoặc thì "cứ thế bỏ ngoặc", dấu "−" trước ngoặc thì "đổi hết dấu trong ngoặc".',
        },
        {
          title: 'Quy tắc chuyển vế',
          formulas: ['a+b=c\\ \\Rightarrow\\ a=c-b'],
          legend: ['Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó'],
          note: 'Mẹo: chuyển vế — đổi dấu: cộng thành trừ, trừ thành cộng.',
        },
      ],
    },
    video: { caption: '00:00 / 09:55 — quy_tac_dau_ngoac_baigiang.mp4' },
    quiz: [
      { question: 'Bỏ ngoặc rồi tính: 5 + (3 − 8).', options: ['0', '16', '−16', '10'], correctIndex: 0 },
      { question: 'Bỏ ngoặc rồi tính: 10 − (4 − 6).', options: ['12', '0', '8', '20'], correctIndex: 0 },
      { question: 'Tìm x biết x + 5 = 12.', options: ['7', '17', '−7', '−17'], correctIndex: 0 },
      { question: 'Tìm x biết x − 3 = −8.', options: ['−5', '−11', '5', '11'], correctIndex: 0 },
      { question: 'Rút gọn: (−2) + (7 − 3).', options: ['2', '−2', '12', '−12'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Bỏ ngoặc rồi tính: 25 − (15 − 8).', solution: ['$25-15+8=18$'] },
      { prompt: 'Bài 2. Bỏ ngoặc rồi tính: (−6) + (9 − 14).', solution: ['$-6+9-14=-11$'] },
      { prompt: 'Bài 3. Tìm số nguyên x biết: x + 7 = 2.', solution: ['$x=2-7=-5$'] },
      { prompt: 'Bài 4. Tìm số nguyên x biết: x − (−4) = 10.', solution: ['$x+4=10 \\Rightarrow x=6$'] },
      { prompt: 'Bài 5. Tính nhanh bằng cách bỏ ngoặc hợp lý: 37 − (20 − 13) − 17.', solution: ['$37-20+13-17=13$'] },
    ],
    flashcards: [
      { front: 'Bỏ ngoặc có dấu + trước', back: 'Giữ nguyên dấu các số hạng trong ngoặc' },
      { front: 'Bỏ ngoặc có dấu − trước', back: 'Đổi dấu tất cả số hạng trong ngoặc' },
      { front: 'Quy tắc chuyển vế', back: 'Chuyển vế thì đổi dấu' },
      { front: 'Từ a + b = c suy ra', back: '$a=c-b$' },
      { front: 'Từ a − b = c suy ra', back: '$a=c+b$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Bỏ ngoặc có dấu + trước ta làm gì?', options: ['Giữ nguyên dấu', 'Đổi dấu tất cả', 'Đổi dấu số đầu', 'Bỏ số trong ngoặc'], correctIndex: 0 },
        { question: 'Bỏ ngoặc có dấu − trước ta làm gì?', options: ['Đổi dấu tất cả các số hạng', 'Giữ nguyên dấu', 'Chỉ đổi dấu số đầu', 'Không cần làm gì'], correctIndex: 0 },
        { question: 'Quy tắc chuyển vế là gì?', options: ['Chuyển vế thì đổi dấu', 'Chuyển vế thì giữ nguyên dấu', 'Nhân cả hai vế với −1', 'Không được chuyển vế'], correctIndex: 0 },
        { question: '3 + (5 − 2) bằng?', options: ['6', '0', '10', '−6'], correctIndex: 0 },
        { question: '8 − (3 + 2) bằng?', options: ['3', '13', '−3', '−13'], correctIndex: 0 },
        { question: 'Từ a + b = c, chuyển b sang vế phải ta được?', options: ['a = c − b', 'a = c + b', 'a = b − c', 'a = bc'], correctIndex: 0 },
        { question: 'Bỏ ngoặc: 12 − (7 − 4) bằng?', options: ['9', '1', '15', '−9'], correctIndex: 0 },
        { question: 'Bỏ ngoặc: (−5) + (6 − 9) bằng?', options: ['−8', '8', '−2', '2'], correctIndex: 0 },
        { question: 'Tìm x biết x + 9 = 4.', options: ['−5', '13', '5', '−13'], correctIndex: 0 },
        { question: 'Tìm x biết x − 6 = −2.', options: ['4', '−8', '8', '−4'], correctIndex: 0 },
        { question: 'Rút gọn: 20 − (8 − 5) − 3.', options: ['14', '10', '26', '4'], correctIndex: 0 },
        { question: 'Tìm x biết x − (−3) = 7.', options: ['4', '10', '−4', '−10'], correctIndex: 0 },
        { question: 'Tính nhanh: 45 − (30 − 15) − 20.', options: ['10', '20', '70', '−10'], correctIndex: 0 },
        { question: 'Tìm x biết: 15 − (x + 3) = 8.', options: ['4', '10', '−4', '20'], correctIndex: 0 },
        { question: 'Tìm x biết: 2x − (x − 7) = 15.', options: ['8', '22', '−8', '−22'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Bỏ ngoặc rồi tính giá trị biểu thức: 50 − (18 − 12) + (−5).',
          solution: ['$50-18+12-5=39$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Tìm số nguyên x biết: 25 − (x − 8) = 19.',
          solution: ['$25-x+8=19$', '$33-x=19$', '$x=14$'],
        },
      ],
    },
  },
}
