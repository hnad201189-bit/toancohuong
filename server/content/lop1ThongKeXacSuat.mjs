import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP1_THONG_KE_XAC_SUAT = {
  'l1-thu-thap-kiem-dem': {
    title: 'Thu thập, kiểm đếm số liệu đơn giản',
    theory: {
      cards: [
        {
          title: 'Kiểm đếm là gì?',
          formulas: ['\\text{Đếm} + \\text{Ghi lại kết quả} = \\text{Kiểm đếm}'],
          legend: ['Kiểm đếm giúp biết chính xác có bao nhiêu đồ vật/người thuộc mỗi loại'],
          note: 'Mẹo: khi kiểm đếm nhiều nhóm, con nên đếm từng nhóm một, không đếm nhầm sang nhóm khác.',
        },
        {
          title: 'Ghi lại kết quả kiểm đếm bằng vạch',
          formulas: ['|\\ |\\ |\\ |\\ | \\to 5'],
          legend: ['Mỗi vạch tương ứng với 1 lần đếm', 'Đếm số vạch để biết tổng số lượng'],
          note: 'Mẹo: cách vẽ vạch để đếm giúp con không bị nhầm hoặc quên khi có nhiều đồ vật cần đếm.',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — kiem_dem_so_lieu_baigiang.mp4' },
    quiz: [
      { question: 'Lớp có 15 bạn thích màu đỏ và 10 bạn thích màu xanh. Tổng số bạn được hỏi là bao nhiêu?', options: ['25', '24', '26', '23'], correctIndex: 0 },
      { question: 'Kiểm đếm 4 vạch |,|,|,| tương ứng với số nào?', options: ['4', '3', '5', '2'], correctIndex: 0 },
      {
        question: 'Muốn biết lớp có bao nhiêu bạn nam, bao nhiêu bạn nữ, con cần làm gì?',
        options: ['Đếm và ghi lại số lượng mỗi nhóm', 'Chỉ cần đoán', 'Không cần làm gì', 'Hỏi cô giáo mà không đếm'],
        correctIndex: 0,
      },
      { question: 'Đếm số quả táo và số quả cam riêng biệt là ví dụ của việc gì?', options: ['Kiểm đếm số liệu', 'Đo độ dài', 'Xem giờ', 'So sánh hình dạng'], correctIndex: 0 },
      { question: '5 vạch ||||| tương ứng với số nào?', options: ['5', '4', '6', '3'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Trong lớp có 12 bạn thích ăn cơm, 8 bạn thích ăn phở. Hỏi tổng số bạn được hỏi là bao nhiêu?',
        solution: ['$12+8=20$', 'Tổng có 20 bạn được hỏi.'],
      },
      {
        prompt: 'Đếm số quả bóng trong hình: 🔴🔴🔴🔵🔵 (3 quả đỏ, 2 quả xanh). Loại nào nhiều hơn?',
        solution: ['So sánh 3 và 2: $3>2$.', 'Quả bóng đỏ nhiều hơn.'],
      },
      { prompt: 'Vẽ (mô tả bằng vạch) số lượng 6 bằng các vạch |.', solution: ['Vẽ 6 vạch: |  |  |  |  |  |'] },
      {
        prompt: 'Một nhóm có 7 bạn nam và 5 bạn nữ. Nhóm đó có tất cả bao nhiêu bạn?',
        solution: ['$7+5=12$', 'Nhóm đó có tất cả 12 bạn.'],
      },
      {
        prompt: 'Vì sao khi kiểm đếm, con nên đếm từng nhóm riêng rồi mới cộng lại?',
        solution: ['Vì đếm riêng từng nhóm giúp không bị nhầm lẫn hoặc đếm sót, đếm trùng giữa các nhóm khác nhau.'],
      },
    ],
    flashcards: [
      { front: 'Kiểm đếm', back: 'Đếm và ghi lại số lượng' },
      { front: '4 vạch ||||', back: 'Số 4' },
      { front: 'Vì sao cần kiểm đếm?', back: 'Để biết chính xác số lượng mỗi loại' },
      { front: '7 vạch', back: 'Số 7' },
      { front: 'Đếm riêng từng nhóm để làm gì?', back: 'Tránh nhầm lẫn, đếm sót hoặc đếm trùng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '3 vạch ||| tương ứng số nào?', options: ['3', '2', '4', '1'], correctIndex: 0 },
        { question: 'Kiểm đếm giúp con biết điều gì?', options: ['Số lượng chính xác', 'Màu sắc', 'Hình dạng', 'Vị trí'], correctIndex: 0 },
        { question: '2 vạch || tương ứng số nào?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: '8 vạch tương ứng số nào?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: 'Đếm 5 quả táo, con ghi lại số nào?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        {
          question: 'Muốn biết có bao nhiêu bạn thích màu vàng, con cần làm gì?',
          options: ['Đếm và ghi lại', 'Đoán', 'Không làm gì', 'Hỏi người khác mà không đếm'],
          correctIndex: 0,
        },
        { question: 'Lớp có 9 bạn thích bơi, 6 bạn thích đá bóng. Tổng có bao nhiêu bạn?', options: ['15', '14', '16', '13'], correctIndex: 0 },
        { question: 'Đếm 🟡🟡🟡🟡 (4 hình) và 🟢🟢 (2 hình). Loại nào nhiều hơn?', options: ['Hình vàng', 'Hình xanh', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '10 vạch tương ứng số nào?', options: ['10', '9', '11', '8'], correctIndex: 0 },
        { question: 'Một nhóm có 6 nam, 6 nữ. Tổng nhóm có bao nhiêu bạn?', options: ['12', '11', '13', '10'], correctIndex: 0 },
        { question: 'Đếm số bút trong hộp: 7 bút xanh, 3 bút đỏ. Tổng có bao nhiêu bút?', options: ['10', '9', '11', '8'], correctIndex: 0 },
        { question: 'Loại quả nào ít hơn: 8 quả cam hay 5 quả xoài?', options: ['5 quả xoài', '8 quả cam', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        {
          question: 'Lớp có 30 bạn, kiểm đếm được 18 bạn thích Toán, còn lại thích Tiếng Việt. Hỏi có bao nhiêu bạn thích Tiếng Việt?',
          options: ['12', '13', '11', '14'],
          correctIndex: 0,
        },
        { question: 'Kiểm đếm 3 loại quả: 5 táo, 4 cam, 3 xoài. Loại nào nhiều nhất?', options: ['Táo', 'Cam', 'Xoài', 'Bằng nhau cả'], correctIndex: 0 },
        {
          question:
            'Tổng số học sinh thích 3 môn thể thao là 20 bạn: 8 bạn thích bơi, 7 bạn thích đá bóng, còn lại thích cầu lông. Hỏi có bao nhiêu bạn thích cầu lông?',
          options: ['5', '6', '4', '7'],
          correctIndex: 0,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Đếm số hình: 6 hình tam giác, 4 hình vuông. Tổng có bao nhiêu hình?', solution: ['$6+4=10$', 'Tổng có 10 hình.'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một lớp có 25 bạn, kiểm đếm được 14 bạn đi xe đạp đến trường, số còn lại đi bộ. Hỏi có bao nhiêu bạn đi bộ đến trường?',
          solution: ['$25-14=11$', 'Có 11 bạn đi bộ đến trường.'],
        },
      ],
    },
  },

  'l1-bieu-do-tranh-don-gian': {
    title: 'Biểu đồ tranh đơn giản',
    theory: {
      cards: [
        {
          title: 'Biểu đồ tranh là gì?',
          formulas: ['🍎 \\to 1\\ \\text{quả}', '🍎🍎🍎 \\to 3\\ \\text{quả}'],
          legend: ['Mỗi hình vẽ (tranh) tượng trưng cho 1 đơn vị số lượng', 'Đếm số hình vẽ để biết số lượng'],
          note: 'Mẹo: biểu đồ tranh giúp con nhìn thấy ngay số liệu bằng hình ảnh, không cần đọc số.',
        },
        {
          title: 'Đọc biểu đồ tranh để so sánh',
          formulas: ['\\text{Nhiều tranh hơn} \\to \\text{Số lượng nhiều hơn}'],
          legend: ['Hàng nào có nhiều hình vẽ hơn thì số lượng của loại đó nhiều hơn'],
          note: 'Mẹo: đếm số hình ở mỗi hàng rồi so sánh giống như so sánh số bình thường.',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — bieu_do_tranh_baigiang.mp4' },
    quiz: [
      { question: 'Biểu đồ tranh cho Táo: 🍎🍎🍎🍎, cho Cam: 🍊🍊. Loại quả nào nhiều hơn?', options: ['Táo', 'Cam', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
      { question: 'Mỗi hình 🍎 trong biểu đồ tranh tượng trưng cho bao nhiêu quả?', options: ['1 quả', '2 quả', '3 quả', '0 quả'], correctIndex: 0 },
      { question: 'Biểu đồ có 5 hình ⭐, vậy số lượng là bao nhiêu?', options: ['5', '4', '6', '3'], correctIndex: 0 },
      {
        question: 'Muốn biết loại nào nhiều nhất trong biểu đồ tranh, con làm gì?',
        options: ['Đếm số hình mỗi hàng rồi so sánh', 'Đoán', 'Không cần đếm', 'Chỉ nhìn màu sắc'],
        correctIndex: 0,
      },
      { question: 'Biểu đồ tranh cho Xanh: 🔵🔵🔵, cho Đỏ: 🔴🔴🔴🔴🔴. Loại nào ít hơn?', options: ['Xanh', 'Đỏ', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Biểu đồ tranh: Chó 🐶🐶🐶, Mèo 🐱🐱🐱🐱🐱. Loại vật nuôi nào nhiều hơn, nhiều hơn mấy con?',
        solution: ['Đếm: Chó có 3, Mèo có 5.', 'So sánh: $5>3$.', 'Mèo nhiều hơn, nhiều hơn $5-3=2$ con.'],
      },
      { prompt: 'Vẽ biểu đồ tranh (mô tả bằng lời) cho số lượng 4 quả chuối.', solution: ['Vẽ 4 hình quả chuối: 🍌🍌🍌🍌'] },
      {
        prompt: 'Biểu đồ tranh có 3 hàng: Bút chì 6 hình, Tẩy 3 hình, Thước 4 hình. Đồ dùng nào nhiều nhất?',
        solution: ['So sánh 6, 3, 4: số lớn nhất là 6.', 'Bút chì nhiều nhất.'],
      },
      { prompt: 'Đếm số hình trong biểu đồ: 🌸🌸🌸🌸🌸🌸🌸 (hoa). Có tất cả bao nhiêu hình hoa?', solution: ['Đếm được 7 hình hoa.'] },
      {
        prompt: 'Biểu đồ tranh cho thấy An có 4 viên bi, Bình có 4 viên bi. Hai bạn có số bi thế nào?',
        solution: ['Vì đều có 4 hình nên An và Bình có số bi bằng nhau.'],
      },
    ],
    flashcards: [
      { front: 'Mỗi hình trong biểu đồ tranh tượng trưng cho', back: '1 đơn vị số lượng' },
      { front: 'Cách đọc biểu đồ tranh', back: 'Đếm số hình ở mỗi hàng' },
      { front: 'Hàng nhiều hình hơn thì', back: 'số lượng nhiều hơn' },
      { front: '6 hình ⭐ nghĩa là', back: '6 đơn vị' },
      { front: 'So sánh biểu đồ tranh giống', back: 'So sánh số bình thường (đếm rồi so sánh)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Biểu đồ tranh dùng để làm gì?', options: ['Thể hiện số liệu bằng hình vẽ', 'Đo độ dài', 'Xem giờ', 'Vẽ hình học'], correctIndex: 0 },
        { question: '3 hình 🍎 tượng trưng cho bao nhiêu quả táo?', options: ['3', '2', '4', '1'], correctIndex: 0 },
        { question: 'Đếm số hình 🐟: 🐟🐟🐟🐟. Có bao nhiêu con cá?', options: ['4', '3', '5', '2'], correctIndex: 0 },
        { question: 'Hàng có nhiều hình hơn thì số lượng thế nào?', options: ['Nhiều hơn', 'Ít hơn', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '2 hình ⚽ tượng trưng cho mấy quả bóng?', options: ['2', '1', '3', '0'], correctIndex: 0 },
        { question: 'Đếm 6 hình 🎈. Có bao nhiêu quả bóng bay?', options: ['6', '5', '7', '4'], correctIndex: 0 },
        { question: 'Biểu đồ: Cam 🍊🍊🍊, Chanh 🍋🍋. Loại nào nhiều hơn?', options: ['Cam', 'Chanh', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        {
          question: 'Biểu đồ có Xanh 5 hình, Đỏ 3 hình, Vàng 7 hình. Màu nào nhiều nhất?',
          options: ['Vàng', 'Xanh', 'Đỏ', 'Bằng nhau'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ có Xanh 5 hình, Đỏ 3 hình, Vàng 7 hình. Màu nào ít nhất?',
          options: ['Đỏ', 'Xanh', 'Vàng', 'Bằng nhau'],
          correctIndex: 0,
        },
        { question: 'Đếm 8 hình 🌟. Có bao nhiêu ngôi sao?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: 'Hàng A có 4 hình, hàng B có 6 hình. Hàng nào ít hơn?', options: ['Hàng A', 'Hàng B', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        {
          question: 'Biểu đồ: Táo 4 hình, Cam 6 hình, Xoài 2 hình. Tổng cả 3 loại quả là bao nhiêu?',
          options: ['12', '10', '14', '8'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ: Chó 5 hình, Mèo 3 hình. Nếu thêm 2 hình Mèo nữa thì Mèo có nhiều hơn Chó không?',
          options: ['Không, bằng nhau', 'Có, nhiều hơn', 'Mèo ít hơn', 'Không xác định được'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ có 3 loại quả, tổng cộng 15 hình. Táo 6 hình, Cam 5 hình. Vậy Xoài có mấy hình?',
          options: ['4', '5', '3', '6'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ: Bút xanh 5 hình, Bút đỏ 8 hình. Loại bút nào nhiều hơn?',
          options: ['Bút đỏ', 'Bút xanh', 'Bằng nhau', 'Không rõ'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Biểu đồ: Bút xanh 5 hình, Bút đỏ 8 hình. Loại bút nào nhiều hơn, nhiều hơn mấy cái?',
          solution: ['So sánh 5 và 8: $8>5$.', 'Bút đỏ nhiều hơn, nhiều hơn $8-5=3$ cái.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Biểu đồ tranh có 3 loại hoa: hoa hồng 4 hình, hoa cúc 6 hình, hoa lan 3 hình. Hỏi tổng cộng có bao nhiêu hình hoa, và loại hoa nào nhiều nhất?',
          solution: ['Tổng: $4+6+3=13$ hình.', 'So sánh 4, 6, 3: số lớn nhất là 6.', 'Hoa cúc nhiều nhất.'],
        },
      ],
    },
  },

  'l1-nhieu-hon-it-hon': {
    title: 'So sánh nhiều hơn — ít hơn',
    theory: {
      cards: [
        {
          title: 'So sánh số lượng nhiều hơn - ít hơn',
          formulas: ['5\\ \\text{quả} > 3\\ \\text{quả} \\to \\text{Nhiều hơn}', '3\\ \\text{quả} < 5\\ \\text{quả} \\to \\text{Ít hơn}'],
          legend: ['Nhóm có số lượng lớn hơn thì "nhiều hơn"', 'Nhóm có số lượng bé hơn thì "ít hơn"'],
          note: 'Mẹo: để biết nhiều hơn bao nhiêu, con lấy số lớn trừ đi số bé.',
        },
        {
          title: 'Tìm số hơn - kém',
          formulas: ['8 - 5 = 3'],
          legend: ['Muốn tìm "nhiều hơn/ít hơn bao nhiêu", ta lấy số lớn trừ số bé'],
          note: 'Mẹo: đây chính là ứng dụng của phép trừ đã học vào so sánh số lượng thực tế.',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — nhieu_hon_it_hon_baigiang.mp4' },
    quiz: [
      { question: 'An có 7 viên kẹo, Bình có 4 viên kẹo. Ai có nhiều kẹo hơn?', options: ['An', 'Bình', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
      { question: 'Lan có 6 quyển vở, Mai có 9 quyển vở. Ai có ít vở hơn?', options: ['Lan', 'Mai', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
      { question: 'Có 8 con gà và 5 con vịt. Gà nhiều hơn vịt mấy con?', options: ['3', '2', '4', '1'], correctIndex: 0 },
      { question: 'Rổ A có 10 quả cam, rổ B có 10 quả cam. Hai rổ thế nào?', options: ['Bằng nhau', 'Rổ A nhiều hơn', 'Rổ B nhiều hơn', 'Không so sánh được'], correctIndex: 0 },
      { question: 'Có 12 cái bút, 7 cái thước. Bút nhiều hơn thước mấy cái?', options: ['5', '4', '6', '3'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Đội A có 9 bạn, đội B có 6 bạn. Đội nào nhiều hơn, nhiều hơn mấy bạn?',
        solution: ['So sánh 9 và 6: $9>6$.', 'Đội A nhiều hơn.', 'Nhiều hơn: $9-6=3$ bạn.'],
      },
      { prompt: 'Có 15 quả táo và 8 quả cam. Táo nhiều hơn cam mấy quả?', solution: ['$15-8=7$', 'Táo nhiều hơn cam 7 quả.'] },
      { prompt: 'Lớp 1A có 20 bạn, lớp 1B có 20 bạn. Số bạn hai lớp thế nào?', solution: ['Vì đều là 20 nên số bạn hai lớp bằng nhau.'] },
      { prompt: 'Có 6 cái cốc và 9 cái đĩa. Cốc ít hơn đĩa mấy cái?', solution: ['$9-6=3$', 'Cốc ít hơn đĩa 3 cái.'] },
      {
        prompt: 'Một rổ có 18 quả trứng, một rổ khác có 25 quả trứng. Rổ nào ít hơn, ít hơn mấy quả?',
        solution: ['So sánh 18 và 25: $18<25$.', 'Rổ 18 quả ít hơn.', 'Ít hơn: $25-18=7$ quả.'],
      },
    ],
    flashcards: [
      { front: 'Muốn tìm nhiều hơn bao nhiêu, ta làm gì?', back: 'Lấy số lớn trừ số bé' },
      { front: '9 và 5, số nào nhiều hơn?', back: '9 nhiều hơn' },
      { front: '8 - 3', back: '5 (8 nhiều hơn 3 là 5 đơn vị)' },
      { front: '10 và 10', back: 'Bằng nhau' },
      { front: 'Ít hơn nghĩa là', back: 'Có số lượng bé hơn' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '6 và 4, số nào nhiều hơn?', options: ['6', '4', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '3 và 8, số nào ít hơn?', options: ['3', '8', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '7 quả và 7 quả, hai nhóm thế nào?', options: ['Bằng nhau', 'Nhóm 1 nhiều hơn', 'Nhóm 2 nhiều hơn', 'Không so sánh được'], correctIndex: 0 },
        { question: '10 và 2, số nào nhiều hơn?', options: ['10', '2', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '5 và 9, số nào ít hơn?', options: ['5', '9', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Muốn tìm hơn kém bao nhiêu, ta dùng phép tính gì?', options: ['Phép trừ', 'Phép cộng', 'Phép nhân', 'Phép chia'], correctIndex: 0 },
        { question: 'An có 12 bi, Bình có 7 bi. An nhiều hơn Bình mấy bi?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: 'Lan có 6 bút, Hoa có 10 bút. Lan ít hơn Hoa mấy bút?', options: ['4', '3', '5', '2'], correctIndex: 0 },
        { question: 'Có 20 học sinh nam, 15 học sinh nữ. Nam nhiều hơn nữ mấy bạn?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: 'Rổ A có 9 quả, rổ B có 9 quả. Kết luận nào đúng?', options: ['Bằng nhau', 'A nhiều hơn', 'B nhiều hơn', 'Không rõ'], correctIndex: 0 },
        { question: 'Có 8 cái ghế, 13 cái bàn. Ghế ít hơn bàn mấy cái?', options: ['5', '4', '6', '7'], correctIndex: 0 },
        { question: '14 và 9, số nào nhiều hơn và nhiều hơn mấy?', options: ['14, nhiều hơn 5', '9, nhiều hơn 5', '14, nhiều hơn 4', '9, nhiều hơn 4'], correctIndex: 0 },
        { question: 'Đội A hơn đội B 4 bạn. Đội B có 8 bạn. Đội A có mấy bạn?', options: ['12', '11', '13', '10'], correctIndex: 0 },
        {
          question: 'Có 3 rổ táo: rổ 1 có 5 quả, rổ 2 có 8 quả, rổ 3 có 6 quả. Rổ nào nhiều hơn cả 2 rổ còn lại?',
          options: ['Rổ 2', 'Rổ 1', 'Rổ 3', 'Bằng nhau cả'],
          correctIndex: 0,
        },
        { question: 'Lan có nhiều hơn Hà 5 viên kẹo. Hà có 9 viên. Lan có mấy viên kẹo?', options: ['14', '13', '15', '12'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Có 16 quả bóng xanh, 9 quả bóng đỏ. Bóng xanh nhiều hơn bóng đỏ mấy quả?',
          solution: ['$16-9=7$', 'Bóng xanh nhiều hơn bóng đỏ 7 quả.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Bạn Nam có nhiều hơn bạn Việt 6 viên bi. Bạn Việt có 14 viên bi. Hỏi bạn Nam có bao nhiêu viên bi?',
          solution: ['$14+6=20$', 'Bạn Nam có 20 viên bi.'],
        },
      ],
    },
  },

  'l1-kha-nang-xay-ra': {
    title: 'Khả năng xảy ra của một sự kiện (chắc chắn, có thể, không thể)',
    theory: {
      cards: [
        {
          title: 'Ba mức độ khả năng',
          formulas: ['\\text{Chắc chắn}', '\\text{Có thể}', '\\text{Không thể}'],
          legend: ['"Chắc chắn": chuyện chắc chắn sẽ xảy ra', '"Có thể": chuyện có khi xảy ra, có khi không', '"Không thể": chuyện không bao giờ xảy ra'],
          note: 'Mẹo: hãy tự hỏi "chuyện này có luôn luôn đúng không, hay chỉ thỉnh thoảng đúng, hay không bao giờ đúng?" để xác định đúng mức độ.',
        },
        {
          title: 'Ví dụ minh hoạ',
          formulas: [
            '\\text{Mặt trời mọc buổi sáng} \\to \\text{Chắc chắn}',
            '\\text{Ngày mai trời mưa} \\to \\text{Có thể}',
            '\\text{Con mèo biết bay} \\to \\text{Không thể}',
          ],
          legend: ['Phân biệt 3 mức độ dựa vào việc quan sát thực tế'],
          note: 'Mẹo: những quy luật tự nhiên cố định (như mặt trời mọc) thường là "chắc chắn"; thời tiết thường là "có thể"; những điều trái với tự nhiên là "không thể".',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — kha_nang_xay_ra_baigiang.mp4' },
    quiz: [
      { question: "'Mặt trời mọc vào buổi sáng' là sự kiện thuộc mức độ nào?", options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
      {
        question: "'Con cá sống được trên cạn không cần nước' là sự kiện thuộc mức độ nào?",
        options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'],
        correctIndex: 0,
      },
      { question: "'Ngày mai trời sẽ nắng' là sự kiện thuộc mức độ nào?", options: ['Có thể', 'Chắc chắn', 'Không thể', 'Không xác định'], correctIndex: 0 },
      { question: "'Một năm có 12 tháng' là sự kiện thuộc mức độ nào?", options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
      { question: "'Con lợn biết nói tiếng người' là sự kiện thuộc mức độ nào?", options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: "Kể một sự kiện 'chắc chắn' xảy ra trong cuộc sống hằng ngày của con.",
        solution: ['Ví dụ: "Mặt trời mọc mỗi sáng", "Một tuần có 7 ngày" (học sinh có thể nêu ví dụ khác đúng bản chất "chắc chắn").'],
      },
      {
        prompt: "'Gieo một hạt đậu thì hạt đậu sẽ nảy mầm' là sự kiện có thể xảy ra hay chắc chắn xảy ra? Vì sao?",
        solution: ['Đây là sự kiện "có thể" xảy ra, vì hạt đậu có thể nảy mầm nếu được chăm sóc tốt, nhưng cũng có thể không nảy mầm (ví dụ hạt hỏng, thiếu nước...).'],
      },
      {
        prompt: "'Con người có thể tự bay lên trời mà không cần máy móc' là sự kiện thuộc mức độ nào? Vì sao?",
        solution: ['Đây là sự kiện "không thể" xảy ra, vì con người không có khả năng tự bay được.'],
      },
      {
        prompt: "Kể một sự kiện 'không thể' xảy ra.",
        solution: ['Ví dụ: "Con chó biết đọc sách", "Hòn đá tự biết đi" (học sinh có thể nêu ví dụ khác đúng bản chất "không thể").'],
      },
      {
        prompt: "'Khi tung một đồng xu, mặt xuất hiện có thể là mặt sấp hoặc mặt ngửa' — đây là sự kiện thuộc mức độ nào?",
        solution: ['Đây là sự kiện "có thể" xảy ra, vì kết quả không cố định trước, có lúc ra mặt sấp, có lúc ra mặt ngửa.'],
      },
    ],
    flashcards: [
      { front: 'Chắc chắn', back: 'Sự kiện luôn luôn xảy ra' },
      { front: 'Không thể', back: 'Sự kiện không bao giờ xảy ra' },
      { front: 'Có thể', back: 'Sự kiện có khi xảy ra, có khi không' },
      { front: 'Mặt trời mọc buổi sáng', back: 'Chắc chắn' },
      { front: 'Con mèo biết lái ô tô', back: 'Không thể' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: "'Một tuần có 7 ngày' thuộc mức độ nào?", options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        {
          question: "'Con chim biết bơi dưới biển như cá' thuộc mức độ nào?",
          options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'],
          correctIndex: 0,
        },
        { question: "'Ngày mai có thể trời mưa' thuộc mức độ nào?", options: ['Có thể', 'Chắc chắn', 'Không thể', 'Không xác định'], correctIndex: 0 },
        { question: "'Mặt trăng xuất hiện vào ban đêm' thuộc mức độ nào?", options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        {
          question: "'Con người sống dưới nước không cần thở' thuộc mức độ nào?",
          options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'],
          correctIndex: 0,
        },
        { question: "'Hôm nay có thể có bạn nghỉ học' thuộc mức độ nào?", options: ['Có thể', 'Chắc chắn', 'Không thể', 'Không xác định'], correctIndex: 0 },
        { question: "'Gà con nở ra từ trứng gà' thuộc mức độ nào?", options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        {
          question: "'Khi gieo 1 con xúc xắc, mặt xuất hiện có thể là số 1, 2, 3, 4, 5 hoặc 6' thuộc mức độ nào?",
          options: ['Có thể', 'Chắc chắn', 'Không thể', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: "'Cá sống được trên cạn mãi mãi mà không cần nước' thuộc mức độ nào?",
          options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'],
          correctIndex: 0,
        },
        { question: "'Một ngày có 24 giờ' thuộc mức độ nào?", options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        {
          question: "'Đội bóng lớp con có thể thắng trận đấu ngày mai' thuộc mức độ nào?",
          options: ['Có thể', 'Chắc chắn', 'Không thể', 'Không xác định'],
          correctIndex: 0,
        },
        { question: "'Hòn đá tự nhiên biết nói chuyện' thuộc mức độ nào?", options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'], correctIndex: 0 },
        {
          question: 'Trong hộp có 5 viên bi đỏ, không có bi màu khác. Lấy ra 1 viên, khả năng lấy được bi đỏ là mức độ nào?',
          options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Trong hộp chỉ có bi xanh, không có bi vàng. Lấy ra 1 viên, khả năng lấy được bi vàng là mức độ nào?',
          options: ['Không thể', 'Chắc chắn', 'Có thể', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Trong hộp có cả bi đỏ và bi xanh. Lấy ra 1 viên, khả năng lấy được bi đỏ là mức độ nào?',
          options: ['Có thể', 'Chắc chắn', 'Không thể', 'Không xác định'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: "Câu 1 (Thông hiểu). 'Con voi bay được như chim' thuộc mức độ chắc chắn, có thể, hay không thể? Vì sao?",
          solution: ['Đây là sự kiện "không thể" xảy ra, vì voi không có khả năng bay.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Trong hộp chỉ có toàn bi màu vàng (không có màu khác). Lấy ra 1 viên bi bất kỳ. Khả năng lấy được bi màu vàng thuộc mức độ nào? Vì sao?',
          solution: ['Đây là sự kiện "chắc chắn" xảy ra, vì trong hộp chỉ có bi vàng nên chắc chắn lấy ra sẽ là bi vàng.'],
        },
      ],
    },
  },
}
