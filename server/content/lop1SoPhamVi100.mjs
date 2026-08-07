import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP1_SO_PHAM_VI_100 = {
  'l1-cac-so-den-100': {
    title: 'Các số đến 100, đọc viết và cấu tạo số',
    theory: {
      cards: [
        {
          title: 'Đọc, viết số có hai chữ số',
          formulas: ['23 = 2\\ \\text{chục}\\ 3\\ \\text{đơn vị}', '45 = 40 + 5'],
          legend: ['Chữ số hàng chục cho biết có bao nhiêu chục', 'Chữ số hàng đơn vị cho biết có bao nhiêu đơn vị lẻ'],
          note: 'Mẹo: số có hai chữ số luôn đọc chữ số hàng chục trước, hàng đơn vị sau, ví dụ 34 đọc là "ba mươi tư".',
        },
        {
          title: 'Số 100',
          formulas: ['99 + 1 = 100', '100 = 10\\ \\text{chục}'],
          legend: ['100 là số liền sau của 99', '100 gồm đúng 10 chục, không có đơn vị lẻ'],
          note: 'Mẹo: 100 là số có 3 chữ số nhỏ nhất, lớn hơn tất cả các số có 2 chữ số.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — cac_so_den_100_baigiang.mp4' },
    quiz: [
      { question: 'Số 47 gồm mấy chục và mấy đơn vị?', options: ['4 chục 7 đơn vị', '7 chục 4 đơn vị', '4 chục 0 đơn vị', '40 chục'], correctIndex: 0 },
      { question: "Viết số 'sáu mươi hai'.", options: ['62', '26', '60', '82'], correctIndex: 0 },
      { question: 'Số liền sau của 79 là số nào?', options: ['80', '78', '81', '70'], correctIndex: 0 },
      { question: 'Số nào lớn hơn: 58 hay 85?', options: ['85', '58', 'Bằng nhau', 'Không so sánh được'], correctIndex: 0 },
      { question: 'Đếm thêm 10: sau 90 là số nào?', options: ['100', '91', '99', '90'], correctIndex: 0 },
    ],
    essays: [
      { prompt: "Viết số 'ba mươi lăm' bằng chữ số.", solution: ['Số ba mươi lăm viết là $35$.'] },
      { prompt: 'Số 78 gồm mấy chục và mấy đơn vị?', solution: ['$78=7$ chục $8$ đơn vị.'] },
      { prompt: 'Số liền trước của 100 là số nào?', solution: ['Số liền trước của 100 là $99$.'] },
      { prompt: 'Viết các số 45, 54, 40 theo thứ tự từ bé đến lớn.', solution: ['Sắp xếp: $40,\\ 45,\\ 54$'] },
      {
        prompt: 'Một cửa hàng có 6 chục quả trứng và thêm 3 quả lẻ. Hỏi cửa hàng có tất cả bao nhiêu quả trứng?',
        solution: ['$6$ chục $=60$', '$60+3=63$', 'Cửa hàng có 63 quả trứng.'],
      },
    ],
    flashcards: [
      { front: '7 chục 5 đơn vị', back: '75' },
      { front: 'Số liền sau 99', back: '100' },
      { front: '9 chục', back: '90' },
      { front: 'Số có 2 chữ số nhỏ nhất', back: '10' },
      { front: 'Số có 2 chữ số lớn nhất', back: '99' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số 34 gồm mấy chục?', options: ['3 chục', '4 chục', '7 chục', '34 chục'], correctIndex: 0 },
        { question: "Viết số 'hai mươi'.", options: ['20', '2', '200', '12'], correctIndex: 0 },
        { question: 'Số liền sau 45 là?', options: ['46', '44', '47', '45'], correctIndex: 0 },
        { question: 'Số 100 gồm mấy chục?', options: ['10 chục', '1 chục', '100 chục', '0 chục'], correctIndex: 0 },
        { question: 'Số nào có 2 chữ số?', options: ['58', '5', '100', '0'], correctIndex: 0 },
        { question: 'Đọc số 90.', options: ['Chín mươi', 'Chín', 'Chín trăm', 'Mười chín'], correctIndex: 0 },
        { question: 'Số 63 gồm mấy chục mấy đơn vị?', options: ['6 chục 3 đơn vị', '3 chục 6 đơn vị', '6 chục 0 đơn vị', '60 chục'], correctIndex: 0 },
        { question: 'Số liền trước 50 là?', options: ['49', '51', '48', '50'], correctIndex: 0 },
        { question: 'So sánh 72 và 27, số nào lớn hơn?', options: ['72', '27', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Viết số gồm 5 chục 6 đơn vị.', options: ['56', '65', '506', '560'], correctIndex: 0 },
        { question: 'Đếm thêm 10 từ 40 được số nào?', options: ['50', '41', '30', '49'], correctIndex: 0 },
        { question: 'Số nào bé nhất: 38, 83, 45, 54?', options: ['38', '83', '45', '54'], correctIndex: 0 },
        { question: 'Số nào vừa lớn hơn 60 vừa bé hơn 70?', options: ['65', '60', '70', '75'], correctIndex: 0 },
        { question: 'Sắp xếp 3 số 91, 19, 61 từ lớn đến bé, số đứng giữa là số nào?', options: ['61', '91', '19', '16'], correctIndex: 0 },
        {
          question: 'Một số có 2 chữ số, chữ số hàng chục là 4, chữ số hàng đơn vị hơn chữ số hàng chục là 2. Số đó là số nào?',
          options: ['46', '42', '64', '26'],
          correctIndex: 0,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Số 58 gồm mấy chục mấy đơn vị?', solution: ['$58=5$ chục $8$ đơn vị.'] },
        {
          prompt: 'Câu 2 (Vận dụng). Viết tất cả các số tròn chục lớn hơn 50 và bé hơn 90.',
          solution: ['Các số tròn chục trong khoảng đó: 60, 70, 80.'],
        },
      ],
    },
  },

  'l1-so-sanh-so-100': {
    title: 'So sánh các số trong phạm vi 100',
    theory: {
      cards: [
        {
          title: 'So sánh hai số có cùng số chữ số',
          formulas: ['45 < 54', '38 > 29', '62 = 62'],
          legend: ['So sánh chữ số hàng chục trước: chục lớn hơn thì số lớn hơn', 'Nếu hàng chục bằng nhau, so sánh tiếp hàng đơn vị'],
          note: 'Mẹo: nhìn chữ số đầu tiên (hàng chục) trước — không cần so hàng đơn vị nếu hàng chục đã khác nhau.',
        },
        {
          title: 'So sánh số có 1 chữ số và số có 2 chữ số',
          formulas: ['9 < 10', '7 < 23'],
          legend: ['Một số có 2 chữ số luôn lớn hơn một số chỉ có 1 chữ số'],
          note: 'Mẹo: chỉ cần đếm số chữ số — số nào có nhiều chữ số hơn thì lớn hơn.',
        },
      ],
    },
    video: { caption: '00:00 / 05:30 — so_sanh_so_100_baigiang.mp4' },
    quiz: [
      { question: 'So sánh 56 và 65, số nào lớn hơn?', options: ['65', '56', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
      { question: '9 và 15, số nào bé hơn?', options: ['9', '15', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
      { question: 'Số nào lớn nhất: 34, 43, 24?', options: ['43', '34', '24', 'Bằng nhau'], correctIndex: 0 },
      { question: 'Điền dấu thích hợp: 78 … 87', options: ['<', '>', '=', 'Không điền được'], correctIndex: 0 },
      { question: 'Số nào bé hơn 50: 45 hay 54?', options: ['45', '54', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'So sánh 67 và 76.', solution: ['Hàng chục: $6<7$ nên $67<76$.'] },
      { prompt: 'Sắp xếp các số 82, 28, 80 từ bé đến lớn.', solution: ['Sắp xếp: $28,\\ 80,\\ 82$'] },
      {
        prompt: 'Số nào lớn hơn: số liền sau của 49, hay 51?',
        solution: ['Số liền sau của 49 là 50.', 'So sánh 50 và 51: $50<51$ nên 51 lớn hơn.'],
      },
      { prompt: 'Điền dấu >, <, = thích hợp: 90 … 89', solution: ['$90>89$'] },
      {
        prompt: 'Ba bạn có số điểm: An 8 điểm, Bình 15 điểm, Chi 12 điểm. Ai có điểm cao nhất?',
        solution: ['So sánh 8, 15, 12: số lớn nhất là 15.', 'Bạn Bình có điểm cao nhất.'],
      },
    ],
    flashcards: [
      { front: 'So sánh 34 và 43', back: '34 < 43' },
      { front: 'Dấu bằng', back: '$=$' },
      { front: 'Số lớn hơn trong 2 số 71 và 17', back: '71' },
      { front: 'So sánh 8 và 12', back: '8 < 12' },
      { front: 'Cách so sánh số 2 chữ số', back: 'So sánh chữ số hàng chục trước, rồi đến hàng đơn vị' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'So sánh 23 và 32.', options: ['23<32', '23>32', '23=32', 'Không so sánh được'], correctIndex: 0 },
        { question: '9 và 10, số nào lớn hơn?', options: ['10', '9', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Số nào lớn hơn: 55 hay 45?', options: ['55', '45', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Điền dấu: 60 … 59', options: ['>', '<', '=', '?'], correctIndex: 0 },
        { question: 'So sánh 100 và 99.', options: ['100>99', '100<99', '100=99', 'Không rõ'], correctIndex: 0 },
        { question: 'Số nào bé hơn: 18 hay 81?', options: ['18', '81', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Số nào lớn nhất trong 3 số 46, 64, 40?', options: ['64', '46', '40', 'Bằng nhau'], correctIndex: 0 },
        { question: 'Sắp xếp 27, 72, 20 từ bé đến lớn, số đứng đầu là?', options: ['20', '27', '72', '40'], correctIndex: 0 },
        { question: 'Điền dấu: 38 … 83', options: ['<', '>', '=', '?'], correctIndex: 0 },
        { question: 'Số nào bé nhất: 91, 19, 55?', options: ['19', '91', '55', 'Bằng nhau'], correctIndex: 0 },
        { question: 'So sánh số liền sau của 30 với 32.', options: ['31<32', '31>32', '31=32', 'Không rõ'], correctIndex: 0 },
        { question: 'Ba số 44, 48, 41 số nào lớn nhất?', options: ['48', '44', '41', 'Bằng nhau'], correctIndex: 0 },
        {
          question: 'Số nào vừa lớn hơn 40 vừa bé hơn 44 và có chữ số hàng đơn vị là số chẵn?',
          options: ['42', '41', '43', '44'],
          correctIndex: 0,
        },
        { question: 'Xếp 4 số 76, 67, 60, 70 theo thứ tự tăng dần, số đứng thứ 3 là số nào?', options: ['70', '67', '60', '76'], correctIndex: 0 },
        {
          question: 'Một số lớn hơn 25 và bé hơn 30, có chữ số hàng đơn vị bằng 8. Số đó là?',
          options: ['28', '26', '27', '29'],
          correctIndex: 0,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). So sánh 52 và 25, số nào lớn hơn?', solution: ['Hàng chục: $5>2$ nên $52>25$.'] },
        {
          prompt: 'Câu 2 (Vận dụng). Ba đội có số bạn: đội A 18 bạn, đội B 21 bạn, đội C 15 bạn. Đội nào có ít bạn nhất?',
          solution: ['So sánh 18, 21, 15: số bé nhất là 15.', 'Đội C có ít bạn nhất.'],
        },
      ],
    },
  },

  'l1-cong-khong-nho-100': {
    title: 'Phép cộng không nhớ trong phạm vi 100',
    theory: {
      cards: [
        {
          title: 'Cộng số có 2 chữ số không nhớ',
          formulas: ['23 + 15 = 38', '42 + 30 = 72'],
          legend: ['Cộng hàng đơn vị với hàng đơn vị, hàng chục với hàng chục', 'Không nhớ: tổng hàng đơn vị không vượt quá 9'],
          note: 'Mẹo: đặt tính thẳng cột — hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, rồi cộng từ phải sang trái.',
        },
        {
          title: 'Cộng số có 2 chữ số với số có 1 chữ số',
          formulas: ['34 + 5 = 39', '61 + 8 = 69'],
          legend: ['Số có 1 chữ số chỉ cộng vào hàng đơn vị'],
          note: 'Mẹo: nếu hàng đơn vị cộng vượt quá 9 (ví dụ 34+7) thì đây gọi là phép cộng có nhớ, sẽ học ở bài sau — bài này chỉ xét trường hợp không vượt quá 9.',
        },
      ],
    },
    video: { caption: '00:00 / 06:30 — cong_khong_nho_100_baigiang.mp4' },
    quiz: [
      { question: '23 + 14 = ?', options: ['37', '36', '38', '35'], correctIndex: 0 },
      { question: '50 + 30 = ?', options: ['80', '70', '90', '60'], correctIndex: 0 },
      { question: '42 + 6 = ?', options: ['48', '47', '49', '46'], correctIndex: 0 },
      { question: 'Tính tổng của 31 và 25.', options: ['56', '55', '57', '54'], correctIndex: 0 },
      { question: 'Lớp có 21 bạn nam và 15 bạn nữ. Hỏi lớp có tất cả bao nhiêu bạn?', options: ['36', '35', '37', '34'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: 34 + 22 = ?', solution: ['Hàng đơn vị: $4+2=6$', 'Hàng chục: $3+2=5$', '$34+22=56$'] },
      { prompt: 'Tính: 60 + 25 = ?', solution: ['$60+25=85$'] },
      { prompt: 'Một trại nuôi 45 con gà và 32 con vịt. Hỏi trại có tất cả bao nhiêu con?', solution: ['$45+32=77$', 'Trại có tất cả 77 con.'] },
      { prompt: 'Tính: 53 + 6 = ?', solution: ['$53+6=59$'] },
      { prompt: 'Điền số thích hợp: 42 + … = 68', solution: ['Vì $42+26=68$ nên số cần điền là $26$.'] },
    ],
    flashcards: [
      { front: '12 + 15', back: '27' },
      { front: '40 + 40', back: '80' },
      { front: '25 + 3', back: '28' },
      { front: 'Cách cộng không nhớ số 2 chữ số', back: 'Cộng hàng đơn vị với hàng đơn vị, hàng chục với hàng chục' },
      { front: '36 + 21', back: '57' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '12 + 11 = ?', options: ['23', '22', '24', '21'], correctIndex: 0 },
        { question: '30 + 20 = ?', options: ['50', '40', '60', '70'], correctIndex: 0 },
        { question: '14 + 5 = ?', options: ['19', '18', '20', '17'], correctIndex: 0 },
        { question: '21 + 16 = ?', options: ['37', '36', '38', '35'], correctIndex: 0 },
        { question: '45 + 3 = ?', options: ['48', '47', '49', '46'], correctIndex: 0 },
        { question: '60 + 10 = ?', options: ['70', '80', '60', '50'], correctIndex: 0 },
        { question: '24 + 35 = ?', options: ['59', '58', '60', '57'], correctIndex: 0 },
        { question: 'Tính tổng 32 và 7.', options: ['39', '38', '40', '37'], correctIndex: 0 },
        { question: 'Có 26 quả cam và thêm 13 quả cam nữa. Hỏi có tất cả mấy quả?', options: ['39', '38', '40', '37'], correctIndex: 0 },
        { question: '53 + 16 = ?', options: ['69', '68', '70', '67'], correctIndex: 0 },
        { question: 'Điền số: 20 + … = 45', options: ['25', '24', '26', '23'], correctIndex: 0 },
        { question: '71 + 8 = ?', options: ['79', '78', '80', '77'], correctIndex: 0 },
        { question: 'Tính: 12 + 13 + 14 = ?', options: ['39', '38', '40', '37'], correctIndex: 0 },
        {
          question: 'Một số cộng với 25 rồi cộng thêm 10 thì bằng 60. Số đó là số nào?',
          options: ['25', '24', '26', '30'],
          correctIndex: 0,
        },
        {
          question:
            'Buổi sáng hái được 20 quả táo, buổi trưa hái thêm 25 quả, buổi chiều hái thêm 15 quả táo nữa. Hỏi cả ngày hái được bao nhiêu quả táo?',
          options: ['60', '55', '65', '50'],
          correctIndex: 0,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: 43 + 25 = ?', solution: ['$43+25=68$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một cửa hàng buổi sáng bán được 34 cái bánh, buổi chiều bán được 42 cái bánh. Hỏi cả ngày cửa hàng bán được bao nhiêu cái bánh?',
          solution: ['$34+42=76$', 'Cả ngày bán được 76 cái bánh.'],
        },
      ],
    },
  },

  'l1-tru-khong-nho-100': {
    title: 'Phép trừ không nhớ trong phạm vi 100',
    theory: {
      cards: [
        {
          title: 'Trừ số có 2 chữ số không nhớ',
          formulas: ['48 - 15 = 33', '76 - 20 = 56'],
          legend: [
            'Trừ hàng đơn vị với hàng đơn vị, hàng chục với hàng chục',
            'Không nhớ: chữ số hàng đơn vị của số bị trừ luôn lớn hơn hoặc bằng chữ số hàng đơn vị của số trừ',
          ],
          note: 'Mẹo: đặt tính thẳng cột giống phép cộng, rồi trừ từ phải sang trái.',
        },
        {
          title: 'Trừ số có 2 chữ số cho số có 1 chữ số',
          formulas: ['38 - 5 = 33', '67 - 4 = 63'],
          legend: ['Số có 1 chữ số chỉ trừ vào hàng đơn vị'],
          note: 'Mẹo: muốn kiểm tra lại, lấy hiệu cộng với số trừ phải ra đúng số bị trừ.',
        },
      ],
    },
    video: { caption: '00:00 / 06:30 — tru_khong_nho_100_baigiang.mp4' },
    quiz: [
      { question: '57 - 23 = ?', options: ['34', '33', '35', '32'], correctIndex: 0 },
      { question: '80 - 30 = ?', options: ['50', '40', '60', '70'], correctIndex: 0 },
      { question: '49 - 6 = ?', options: ['43', '42', '44', '41'], correctIndex: 0 },
      { question: 'Hiệu của 68 và 24 là bao nhiêu?', options: ['44', '43', '45', '42'], correctIndex: 0 },
      { question: 'Có 39 quả trứng, đã bán 15 quả. Còn lại bao nhiêu quả?', options: ['24', '23', '25', '22'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: 56 - 32 = ?', solution: ['Hàng đơn vị: $6-2=4$', 'Hàng chục: $5-3=2$', '$56-32=24$'] },
      { prompt: 'Tính: 90 - 40 = ?', solution: ['$90-40=50$'] },
      {
        prompt: 'Một kho có 68 bao gạo, đã xuất đi 25 bao. Hỏi kho còn lại bao nhiêu bao gạo?',
        solution: ['$68-25=43$', 'Kho còn lại 43 bao gạo.'],
      },
      { prompt: 'Tính: 47 - 5 = ?', solution: ['$47-5=42$'] },
      { prompt: 'Điền số thích hợp: 79 - … = 34', solution: ['Vì $79-45=34$ nên số cần điền là $45$.'] },
    ],
    flashcards: [
      { front: '38 - 14', back: '24' },
      { front: '70 - 30', back: '40' },
      { front: '29 - 6', back: '23' },
      { front: 'Cách kiểm tra phép trừ', back: 'Lấy hiệu cộng với số trừ, phải ra số bị trừ' },
      { front: '65 - 24', back: '41' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '25 - 14 = ?', options: ['11', '10', '12', '13'], correctIndex: 0 },
        { question: '50 - 20 = ?', options: ['30', '40', '20', '10'], correctIndex: 0 },
        { question: '19 - 5 = ?', options: ['14', '13', '15', '12'], correctIndex: 0 },
        { question: '36 - 21 = ?', options: ['15', '14', '16', '13'], correctIndex: 0 },
        { question: '48 - 6 = ?', options: ['42', '41', '43', '40'], correctIndex: 0 },
        { question: '90 - 10 = ?', options: ['80', '70', '90', '60'], correctIndex: 0 },
        { question: '68 - 35 = ?', options: ['33', '32', '34', '31'], correctIndex: 0 },
        { question: 'Tính hiệu của 47 và 6.', options: ['41', '40', '42', '39'], correctIndex: 0 },
        { question: 'Có 58 quyển vở, đã phát 23 quyển. Còn lại mấy quyển?', options: ['35', '34', '36', '33'], correctIndex: 0 },
        { question: '73 - 42 = ?', options: ['31', '30', '32', '29'], correctIndex: 0 },
        { question: 'Điền số: 60 - … = 25', options: ['35', '34', '36', '33'], correctIndex: 0 },
        { question: '89 - 7 = ?', options: ['82', '81', '83', '80'], correctIndex: 0 },
        { question: 'Tính: 78 - 23 - 15 = ?', options: ['40', '41', '39', '42'], correctIndex: 0 },
        { question: 'Một số trừ đi 20 rồi trừ tiếp 5 thì còn 33. Số đó là số nào?', options: ['58', '57', '59', '60'], correctIndex: 0 },
        {
          question: 'Có 90 viên bi. Đã cho bạn A 20 viên, cho bạn B 15 viên, cho bạn C 10 viên. Hỏi còn lại bao nhiêu viên bi?',
          options: ['45', '40', '50', '35'],
          correctIndex: 0,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: 65 - 32 = ?', solution: ['$65-32=33$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một thư viện có 87 quyển sách. Đã cho mượn 34 quyển. Hỏi thư viện còn lại bao nhiêu quyển sách?',
          solution: ['$87-34=53$', 'Thư viện còn lại 53 quyển sách.'],
        },
      ],
    },
  },
}
