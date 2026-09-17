import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP3_THONG_KE_XAC_SUAT = {
  'l3-bang-so-lieu': {
    title: 'Thu thập, phân loại và trình bày bảng số liệu',
    theory: {
      cards: [
        {
          title: 'Thu thập và phân loại số liệu',
          formulas: ['Táo: 5 quả, Cam: 3 quả, Chuối: 4 quả', '5+3+4=12 (tổng số quả)'],
          legend: [
            'Thu thập số liệu là đếm và ghi lại số lượng của từng loại đối tượng cần thống kê',
            'Phân loại là sắp xếp các số liệu đã thu thập theo từng nhóm để dễ quan sát',
          ],
          note: 'Mẹo: khi thu thập số liệu, con nên đếm cẩn thận từng loại một rồi mới ghi vào bảng để tránh nhầm lẫn hoặc đếm sót.',
        },
        {
          title: 'Đọc và trình bày bảng số liệu',
          formulas: ['Loại quả | Táo | Cam | Chuối', 'Số lượng | 5 | 3 | 4'],
          legend: [
            'Bảng số liệu trình bày thông tin theo hàng và cột giúp dễ so sánh, đối chiếu',
            'Nhìn vào bảng, ta có thể biết loại nào có số lượng nhiều nhất, ít nhất',
          ],
          note: 'Mẹo: để tìm loại có số lượng nhiều nhất hoặc ít nhất, con so sánh các số liệu trong bảng với nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — bang_so_lieu_baigiang.mp4' },
    quiz: [
      {
        question: 'Bảng số liệu về số cây được trồng: Xoài 8, Ổi 5, Mít 6, Bưởi 7. Loại cây nào được trồng nhiều nhất?',
        options: ['Ổi', 'Mít', 'Bưởi', 'Xoài'],
        correctIndex: 3,
      },
      {
        question: 'Theo bảng số liệu trên (Xoài 8, Ổi 5, Mít 6, Bưởi 7), loại cây nào được trồng ít nhất?',
        options: ['Xoài', 'Ổi', 'Mít', 'Bưởi'],
        correctIndex: 1,
      },
      {
        question: 'Tổng số cây được trồng (cả 4 loại: 8, 5, 6, 7) là bao nhiêu?',
        options: ['24', '25', '26', '27'],
        correctIndex: 2,
      },
      {
        question: 'Số cây Mít (6 cây) nhiều hơn số cây Ổi (5 cây) bao nhiêu cây?',
        options: ['1', '2', '3', '0'],
        correctIndex: 0,
      },
      {
        question: 'Số cây Xoài (8 cây) và số cây Bưởi (7 cây) cộng lại bằng bao nhiêu?',
        options: ['13', '14', '15', '16'],
        correctIndex: 2,
      },
    ],
    essays: [
      {
        prompt: 'Bảng số liệu cho biết sở thích môn học của lớp 3A: Toán 12 bạn, Tiếng Việt 10 bạn, Vẽ 8 bạn, Thể dục 6 bạn. Môn nào được nhiều bạn yêu thích nhất?',
        solution: ['So sánh các số liệu: 12, 10, 8, 6.', 'Môn Toán có số bạn yêu thích nhiều nhất (12 bạn).'],
      },
      {
        prompt: 'Từ bảng số liệu ở trên (Toán 12, Tiếng Việt 10, Vẽ 8, Thể dục 6), tính tổng số học sinh của lớp 3A.',
        solution: ['$12+10+8+6=36$', 'Lớp 3A có 36 học sinh.'],
      },
      {
        prompt: 'Số bạn thích môn Toán (12 bạn) nhiều hơn số bạn thích môn Thể dục (6 bạn) bao nhiêu bạn?',
        solution: ['$12-6=6$', 'Số bạn thích Toán nhiều hơn số bạn thích Thể dục là 6 bạn.'],
      },
      {
        prompt: 'Một cửa hàng thống kê số xe bán được trong 4 tháng: tháng 1 bán 15 xe, tháng 2 bán 18 xe, tháng 3 bán 12 xe, tháng 4 bán 20 xe. Tháng nào bán được ít xe nhất?',
        solution: ['So sánh: 15, 18, 12, 20.', 'Tháng 3 bán được ít xe nhất (12 xe).'],
      },
      {
        prompt: 'Theo bảng số liệu ở câu trên (15, 18, 12, 20 xe), tổng số xe cửa hàng bán được trong 4 tháng là bao nhiêu?',
        solution: ['$15+18+12+20=65$', 'Cửa hàng bán được tất cả 65 xe trong 4 tháng.'],
      },
    ],
    flashcards: [
      { front: 'Thu thập số liệu là gì?', back: 'Là đếm và ghi lại số lượng của từng loại đối tượng cần thống kê' },
      { front: 'Bảng số liệu trình bày thông tin theo gì?', back: 'Theo hàng và cột' },
      { front: 'Muốn tìm loại có số lượng nhiều nhất, ta làm gì?', back: 'So sánh các số liệu trong bảng với nhau' },
      { front: 'Toán 12, Tiếng Việt 10, Vẽ 8, Thể dục 6 — tổng cộng?', back: '36' },
      { front: 'Phân loại số liệu nghĩa là gì?', back: 'Sắp xếp các số liệu đã thu thập theo từng nhóm để dễ quan sát' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Bảng: Thứ Hai mượn 25 quyển sách, Thứ Ba 18, Thứ Tư 22, Thứ Năm 30, Thứ Sáu 15. Ngày nào mượn được nhiều sách nhất?',
          options: ['Thứ Năm', 'Thứ Hai', 'Thứ Tư', 'Thứ Ba'],
          correctIndex: 0,
        },
        {
          question: 'Theo bảng trên (25, 18, 22, 30, 15 quyển), ngày nào mượn được ít sách nhất?',
          options: ['Thứ Ba', 'Thứ Sáu', 'Thứ Tư', 'Thứ Hai'],
          correctIndex: 1,
        },
        {
          question: 'Tổng số sách mượn trong cả tuần (25+18+22+30+15) là bao nhiêu?',
          options: ['100', '105', '110', '115'],
          correctIndex: 2,
        },
        {
          question: 'Số sách mượn ngày Thứ Năm (30 quyển) nhiều hơn ngày Thứ Sáu (15 quyển) bao nhiêu quyển?',
          options: ['10', '12', '14', '15'],
          correctIndex: 3,
        },
        {
          question: 'Số sách mượn ngày Thứ Hai (25) và Thứ Tư (22) cộng lại bằng bao nhiêu?',
          options: ['47', '45', '43', '49'],
          correctIndex: 0,
        },
        {
          question: 'Bảng: Lớp 3A có 32 học sinh, 3B có 35, 3C có 30, 3D có 33. Lớp nào có số học sinh đông nhất?',
          options: ['3A', '3B', '3C', '3D'],
          correctIndex: 1,
        },
        {
          question: 'Theo bảng trên (32, 35, 30, 33 học sinh), lớp nào có số học sinh ít nhất?',
          options: ['3A', '3B', '3C', '3D'],
          correctIndex: 2,
        },
        {
          question: 'Tổng số học sinh của cả 4 lớp (32+35+30+33) là bao nhiêu?',
          options: ['125', '128', '129', '130'],
          correctIndex: 3,
        },
        {
          question: 'Lớp 3B (35 học sinh) có nhiều hơn lớp 3C (30 học sinh) bao nhiêu học sinh?',
          options: ['5', '6', '4', '3'],
          correctIndex: 0,
        },
        {
          question: 'Số học sinh lớp 3A (32) và lớp 3D (33) cộng lại bằng bao nhiêu?',
          options: ['63', '65', '67', '69'],
          correctIndex: 1,
        },
        {
          question: 'Khi lập bảng số liệu, ta thường trình bày các số liệu theo dạng nào?',
          options: ['Theo hình tròn', 'Theo đường thẳng', 'Theo hàng và cột', 'Theo đồ thị'],
          correctIndex: 2,
        },
        {
          question: 'Muốn biết loại nào có số lượng nhiều nhất trong bảng số liệu, ta cần làm gì?',
          options: ['Cộng tất cả các số liệu lại', 'Đếm số hàng của bảng', 'Đếm số cột của bảng', 'So sánh các số liệu với nhau'],
          correctIndex: 3,
        },
        {
          question: 'Việc ghi lại số lượng của từng loại đối tượng cần thống kê gọi là gì?',
          options: ['Thu thập số liệu', 'Vẽ biểu đồ', 'Tính trung bình', 'So sánh số liệu'],
          correctIndex: 0,
        },
        {
          question: 'Một bảng số liệu thống kê số hoa: Hồng 14, Cúc 9, Lan 11. Loại hoa nào có số lượng đứng giữa (không nhiều nhất, không ít nhất)?',
          options: ['Cúc', 'Lan', 'Hồng', 'Không có'],
          correctIndex: 1,
        },
        {
          question: 'Theo bảng ở câu trên (Hồng 14, Cúc 9, Lan 11), tổng số hoa cả 3 loại là bao nhiêu?',
          options: ['30', '32', '34', '36'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Bảng số liệu ghi số lượng bút chì bán được trong 4 ngày của một cửa hàng: Ngày 1: 20 cây, Ngày 2: 24 cây, Ngày 3: 18 cây, Ngày 4: 22 cây. Ngày nào bán được nhiều bút chì nhất? Ngày nào bán được ít nhất?',
          solution: ['So sánh các số liệu: 20, 24, 18, 22.', 'Ngày 2 bán được nhiều nhất (24 cây).', 'Ngày 3 bán được ít nhất (18 cây).'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Theo bảng số liệu ở câu 1 (20, 24, 18, 22 cây bút chì trong 4 ngày), tính tổng số bút chì cửa hàng đã bán trong 4 ngày, và cho biết trung bình mỗi ngày cửa hàng bán được bao nhiêu cây bút chì.',
          solution: [
            'Tổng số bút chì bán trong 4 ngày: $20+24+18+22=84$ (cây)',
            'Trung bình mỗi ngày bán được: $84\\div4=21$ (cây)',
          ],
        },
      ],
    },
  },

  'l3-bieu-do-cot': {
    title: 'Đọc và phân tích biểu đồ cột',
    theory: {
      cards: [
        {
          title: 'Cấu tạo của biểu đồ cột',
          formulas: ['Trục ngang: tên các đối tượng', 'Trục đứng: số liệu (số lượng)'],
          legend: [
            'Biểu đồ cột dùng các cột hình chữ nhật có chiều cao khác nhau để biểu diễn số liệu',
            'Cột càng cao thì số liệu tương ứng càng lớn',
          ],
          note: 'Mẹo: nhìn vào đỉnh cột rồi dóng sang trục đứng để đọc chính xác số liệu của cột đó.',
        },
        {
          title: 'Đọc và so sánh số liệu trên biểu đồ cột',
          formulas: ['Cột cao nhất → số liệu lớn nhất', 'Cột thấp nhất → số liệu bé nhất'],
          legend: [
            'So sánh chiều cao các cột để biết đối tượng nào có số liệu lớn hơn, bé hơn',
            'Có thể cộng hoặc trừ số liệu của các cột để trả lời câu hỏi liên quan',
          ],
          note: 'Mẹo: khi so sánh hai cột gần bằng nhau, con nên dóng thẳng sang trục đứng để đọc số chính xác thay vì chỉ nhìn bằng mắt.',
        },
      ],
    },
    video: { caption: '00:00 / 07:30 — bieu_do_cot_baigiang.mp4' },
    quiz: [
      {
        question: 'Biểu đồ cột về số học sinh giỏi các môn: Toán 15, Tiếng Việt 12, Tiếng Anh 9, Khoa học 10. Môn nào có số học sinh giỏi nhiều nhất?',
        options: ['Tiếng Việt', 'Tiếng Anh', 'Khoa học', 'Toán'],
        correctIndex: 3,
      },
      {
        question: 'Theo biểu đồ trên (Toán 15, Tiếng Việt 12, Tiếng Anh 9, Khoa học 10), môn nào có số học sinh giỏi ít nhất?',
        options: ['Toán', 'Tiếng Anh', 'Tiếng Việt', 'Khoa học'],
        correctIndex: 1,
      },
      {
        question: 'Số học sinh giỏi Toán (15) nhiều hơn số học sinh giỏi Tiếng Anh (9) bao nhiêu bạn?',
        options: ['4', '5', '6', '7'],
        correctIndex: 2,
      },
      {
        question: 'Tổng số học sinh giỏi cả 4 môn (15+12+9+10) là bao nhiêu?',
        options: ['44', '45', '46', '47'],
        correctIndex: 2,
      },
      {
        question: 'Trong biểu đồ trên, cột nào có chiều cao thấp nhất?',
        options: ['Cột Toán', 'Cột Tiếng Anh', 'Cột Tiếng Việt', 'Cột Khoa học'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Biểu đồ cột cho biết số cây được trồng trong 4 tuần: Tuần 1: 20 cây, Tuần 2: 35 cây, Tuần 3: 25 cây, Tuần 4: 30 cây. Tuần nào trồng được nhiều cây nhất?',
        solution: ['So sánh chiều cao các cột: 20, 35, 25, 30.', 'Tuần 2 trồng được nhiều cây nhất (35 cây).'],
      },
      {
        prompt: 'Theo biểu đồ ở câu trên (20, 35, 25, 30 cây), tính tổng số cây được trồng trong cả 4 tuần.',
        solution: ['$20+35+25+30=110$', 'Cả 4 tuần trồng được tất cả 110 cây.'],
      },
      {
        prompt: 'Theo biểu đồ ở câu trên, tuần 2 (35 cây) trồng được nhiều hơn tuần 1 (20 cây) bao nhiêu cây?',
        solution: ['$35-20=15$', 'Tuần 2 trồng nhiều hơn tuần 1 là 15 cây.'],
      },
      {
        prompt: 'Một biểu đồ cột biểu diễn số quyển vở quyên góp của 3 lớp: 3A 40 quyển, 3B 55 quyển, 3C 45 quyển. Lớp nào quyên góp được nhiều nhất, lớp nào ít nhất?',
        solution: ['So sánh: 40, 55, 45.', 'Lớp 3B quyên góp nhiều nhất (55 quyển), lớp 3A quyên góp ít nhất (40 quyển).'],
      },
      {
        prompt: 'Theo biểu đồ ở câu trên (3A 40, 3B 55, 3C 45 quyển), tính tổng số vở cả 3 lớp quyên góp được.',
        solution: ['$40+55+45=140$', 'Cả 3 lớp quyên góp được tất cả 140 quyển vở.'],
      },
    ],
    flashcards: [
      { front: 'Biểu đồ cột dùng gì để biểu diễn số liệu?', back: 'Các cột hình chữ nhật có chiều cao khác nhau' },
      { front: 'Cột càng cao thì số liệu như thế nào?', back: 'Số liệu càng lớn' },
      { front: 'Trục ngang của biểu đồ cột thường ghi gì?', back: 'Tên các đối tượng được thống kê' },
      { front: 'Trục đứng của biểu đồ cột thường ghi gì?', back: 'Số liệu (số lượng)' },
      { front: 'Muốn biết đối tượng nào có số liệu lớn nhất trên biểu đồ cột, ta làm gì?', back: 'Tìm cột cao nhất' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Biểu đồ cột: số xe đạp bán được trong 4 quý: Quý 1: 45, Quý 2: 60, Quý 3: 38, Quý 4: 52. Quý nào bán được nhiều xe đạp nhất?',
          options: ['Quý 2', 'Quý 1', 'Quý 3', 'Quý 4'],
          correctIndex: 0,
        },
        {
          question: 'Theo biểu đồ trên (45, 60, 38, 52), quý nào bán được ít xe đạp nhất?',
          options: ['Quý 1', 'Quý 3', 'Quý 2', 'Quý 4'],
          correctIndex: 1,
        },
        {
          question: 'Tổng số xe đạp bán được trong cả 4 quý (45+60+38+52) là bao nhiêu?',
          options: ['185', '190', '195', '200'],
          correctIndex: 2,
        },
        {
          question: 'Quý 2 (60 xe) bán được nhiều hơn Quý 3 (38 xe) bao nhiêu xe đạp?',
          options: ['18', '20', '21', '22'],
          correctIndex: 3,
        },
        {
          question: 'Số xe đạp bán được ở Quý 1 (45) và Quý 4 (52) cộng lại bằng bao nhiêu?',
          options: ['97', '95', '93', '99'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ số học sinh tham gia câu lạc bộ: Vẽ 18, Nhạc 22, Thể thao 27, Cờ vua 15. Câu lạc bộ nào có nhiều học sinh tham gia nhất?',
          options: ['Vẽ', 'Thể thao', 'Nhạc', 'Cờ vua'],
          correctIndex: 1,
        },
        {
          question: 'Theo biểu đồ trên (18, 22, 27, 15), câu lạc bộ nào có ít học sinh tham gia nhất?',
          options: ['Vẽ', 'Nhạc', 'Cờ vua', 'Thể thao'],
          correctIndex: 2,
        },
        {
          question: 'Tổng số học sinh tham gia cả 4 câu lạc bộ (18+22+27+15) là bao nhiêu?',
          options: ['78', '80', '81', '82'],
          correctIndex: 3,
        },
        {
          question: 'Câu lạc bộ Thể thao (27 bạn) có nhiều hơn câu lạc bộ Cờ vua (15 bạn) bao nhiêu học sinh?',
          options: ['12', '10', '11', '13'],
          correctIndex: 0,
        },
        {
          question: 'Trên biểu đồ cột, muốn đọc số liệu của một cột, ta làm gì?',
          options: ['Đếm số cột', 'Nhìn đỉnh cột rồi dóng sang trục đứng', 'Đo chiều rộng cột', 'Đếm số lượng biểu đồ'],
          correctIndex: 1,
        },
        {
          question: 'Cột cao hơn trên biểu đồ cột biểu diễn điều gì?',
          options: ['Số liệu bé hơn', 'Số liệu bằng nhau', 'Số liệu lớn hơn', 'Không biểu diễn gì'],
          correctIndex: 2,
        },
        {
          question: 'Số học sinh câu lạc bộ Nhạc (22) và Vẽ (18) cộng lại bằng bao nhiêu?',
          options: ['36', '38', '39', '40'],
          correctIndex: 3,
        },
        {
          question: 'Trục ngang của biểu đồ cột thường dùng để ghi gì?',
          options: ['Tên các đối tượng thống kê', 'Số liệu', 'Ngày tháng', 'Đơn vị đo'],
          correctIndex: 0,
        },
        {
          question: 'Theo biểu đồ xe đạp (Quý1: 45, Quý2: 60, Quý3: 38, Quý4: 52), quý nào có số xe đạp bán được đứng thứ hai (nhiều thứ nhì)?',
          options: ['Quý 1', 'Quý 4', 'Quý 3', 'Quý 2'],
          correctIndex: 1,
        },
        {
          question: 'Theo biểu đồ câu lạc bộ (Vẽ 18, Nhạc 22, Thể thao 27, Cờ vua 15), tổng số học sinh của câu lạc bộ có nhiều nhất và câu lạc bộ có ít nhất là bao nhiêu?',
          options: ['40', '41', '42', '43'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Biểu đồ cột biểu diễn số lượng áo bán được trong 4 tháng: Tháng 1: 50 áo, Tháng 2: 65 áo, Tháng 3: 42 áo, Tháng 4: 58 áo. Tháng nào bán được nhiều áo nhất? Tháng nào bán được ít áo nhất?',
          solution: ['So sánh chiều cao các cột: 50, 65, 42, 58.', 'Tháng 2 bán được nhiều áo nhất (65 áo).', 'Tháng 3 bán được ít áo nhất (42 áo).'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Theo biểu đồ ở câu 1 (50, 65, 42, 58 áo trong 4 tháng), tính tổng số áo bán được trong cả 4 tháng. Nếu cửa hàng đặt mục tiêu bán 250 áo trong 4 tháng, hỏi cửa hàng còn thiếu bao nhiêu áo nữa mới đạt mục tiêu?',
          solution: [
            'Tổng số áo bán được: $50+65+42+58=215$ (áo)',
            'Số áo còn thiếu để đạt mục tiêu: $250-215=35$ (áo)',
          ],
        },
      ],
    },
  },

  'l3-kha-nang-xay-ra': {
    title: 'Khả năng xảy ra của một sự kiện',
    theory: {
      cards: [
        {
          title: 'Các khả năng: chắc chắn, có thể, không thể xảy ra',
          formulas: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra'],
          legend: [
            'Một sự kiện có thể chắc chắn xảy ra, có thể xảy ra (không chắc chắn) hoặc không thể xảy ra',
            'Ví dụ: "Mặt Trời mọc ở hướng Đông" là sự kiện chắc chắn xảy ra',
          ],
          note: 'Mẹo: khi xét một sự kiện, con tự hỏi "việc này có luôn luôn đúng không, có bao giờ đúng không, hay không bao giờ đúng?" để xác định khả năng xảy ra.',
        },
        {
          title: 'So sánh khả năng xảy ra qua các phép thử đơn giản',
          formulas: ['Hộp có 5 bi đỏ, 1 bi xanh → lấy được bi đỏ dễ hơn', 'Tung đồng xu → mặt sấp hoặc mặt ngửa, khả năng như nhau'],
          legend: [
            'Trong một hộp có nhiều đối tượng, đối tượng nào có số lượng nhiều hơn thì khả năng lấy được đối tượng đó cao hơn',
            'Nếu số lượng bằng nhau thì khả năng xảy ra là như nhau',
          ],
          note: 'Mẹo: đếm số lượng từng loại trong hộp (hoặc trong phép thử) để so sánh khả năng xảy ra của từng sự kiện.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — kha_nang_xay_ra_baigiang.mp4' },
    quiz: [
      { question: 'Sự kiện "Mặt Trời mọc ở hướng Tây" là sự kiện gì?', options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra', 'Không xác định được'], correctIndex: 2 },
      { question: 'Một hộp có 4 bi đỏ và 1 bi vàng. Lấy ngẫu nhiên 1 bi, khả năng lấy được bi nào cao hơn?', options: ['Bi vàng', 'Bi đỏ', 'Hai khả năng bằng nhau', 'Không lấy được bi nào'], correctIndex: 1 },
      { question: 'Sự kiện "Gieo một con xúc xắc (từ 1 đến 6 chấm) được mặt có 7 chấm" là sự kiện gì?', options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra', 'Có thể hoặc không'], correctIndex: 2 },
      { question: 'Tung một đồng xu, khả năng xuất hiện mặt sấp và mặt ngửa như thế nào?', options: ['Mặt sấp cao hơn', 'Mặt ngửa cao hơn', 'Bằng nhau', 'Không thể xác định'], correctIndex: 2 },
      { question: 'Một hộp có 3 bi xanh, 3 bi đỏ. Lấy ngẫu nhiên 1 bi, sự kiện "lấy được bi xanh" và "lấy được bi đỏ" có khả năng như thế nào?', options: ['Khả năng lấy được bi xanh cao hơn', 'Khả năng lấy được bi đỏ cao hơn', 'Hai khả năng bằng nhau', 'Không thể lấy được bi nào'], correctIndex: 2 },
    ],
    essays: [
      {
        prompt: 'Xét sự kiện "Ngày mai trời sẽ có 25 giờ". Sự kiện này chắc chắn xảy ra, có thể xảy ra hay không thể xảy ra? Vì sao?',
        solution: ['Một ngày luôn có 24 giờ, không thể có 25 giờ.', 'Vậy sự kiện này không thể xảy ra.'],
      },
      {
        prompt: 'Một hộp có 6 quả bóng đỏ và 2 quả bóng xanh. Lấy ngẫu nhiên 1 quả bóng. Khả năng lấy được quả bóng màu nào cao hơn? Vì sao?',
        solution: ['Số bóng đỏ (6 quả) nhiều hơn số bóng xanh (2 quả).', 'Vì vậy khả năng lấy được bóng đỏ cao hơn khả năng lấy được bóng xanh.'],
      },
      {
        prompt: 'Xét sự kiện "Gieo một con xúc xắc 6 mặt (đánh số từ 1 đến 6), được mặt có số chấm bé hơn 7". Đây là sự kiện gì?',
        solution: ['Con xúc xắc chỉ có các mặt từ 1 đến 6 chấm, tất cả đều bé hơn 7.', 'Vậy sự kiện này chắc chắn xảy ra.'],
      },
      {
        prompt: 'Một túi có 4 viên bi vàng và 4 viên bi tím. Lấy ngẫu nhiên 1 viên bi. So sánh khả năng lấy được bi vàng và bi tím.',
        solution: ['Số bi vàng bằng số bi tím (đều là 4 viên).', 'Vậy khả năng lấy được bi vàng và khả năng lấy được bi tím là như nhau.'],
      },
      {
        prompt: 'Một hộp quà có 10 tấm thiệp, trong đó chỉ có 1 tấm ghi "trúng thưởng". Bạn An rút ngẫu nhiên 1 tấm thiệp. Khả năng bạn An rút trúng tấm "trúng thưởng" cao hay thấp so với khả năng rút phải tấm không trúng thưởng?',
        solution: ['Chỉ có 1 tấm trúng thưởng trong khi có 9 tấm không trúng thưởng.', 'Vậy khả năng rút trúng tấm "trúng thưởng" thấp hơn nhiều so với khả năng rút phải tấm không trúng thưởng.'],
      },
    ],
    flashcards: [
      { front: 'Sự kiện "Mặt Trời mọc ở hướng Đông" là sự kiện gì?', back: 'Chắc chắn xảy ra' },
      { front: 'Sự kiện "Gieo xúc xắc được mặt 7 chấm" là sự kiện gì?', back: 'Không thể xảy ra (xúc xắc chỉ có 1-6 chấm)' },
      { front: 'Trong hộp có nhiều bi đỏ hơn bi xanh, khả năng lấy được bi nào cao hơn?', back: 'Khả năng lấy được bi đỏ cao hơn' },
      { front: 'Hộp có số bi xanh bằng số bi đỏ, khả năng lấy được mỗi loại như thế nào?', back: 'Bằng nhau' },
      { front: 'Tung đồng xu, có mấy khả năng xảy ra?', back: '2 khả năng: mặt sấp hoặc mặt ngửa' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Sự kiện "Con gà biết nói tiếng người" là sự kiện gì?', options: ['Không thể xảy ra', 'Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 0 },
        { question: 'Sự kiện "Hôm nay là một ngày trong tuần" là sự kiện gì?', options: ['Không thể xảy ra', 'Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 1 },
        { question: 'Sự kiện "Ngày mai trời có thể mưa hoặc nắng" thuộc loại nào?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 2 },
        { question: 'Một hộp có 7 bi đỏ và 3 bi vàng. Lấy ngẫu nhiên 1 bi. Khả năng lấy được bi màu nào cao nhất?', options: ['Bi vàng', 'Bằng nhau', 'Không xác định', 'Bi đỏ'], correctIndex: 3 },
        { question: 'Gieo một con xúc xắc 6 mặt, sự kiện "được mặt có số chấm nhỏ hơn 10" là sự kiện gì?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 0 },
        { question: 'Một hộp có 5 bi xanh và 5 bi đỏ. Khả năng lấy được bi xanh so với bi đỏ như thế nào?', options: ['Cao hơn', 'Bằng nhau', 'Thấp hơn', 'Không xác định'], correctIndex: 1 },
        { question: 'Sự kiện "Một năm có 13 tháng" là sự kiện gì?', options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra', 'Không xác định'], correctIndex: 2 },
        { question: 'Một túi có 2 bi trắng và 8 bi đen. Lấy ngẫu nhiên 1 bi, khả năng lấy được bi nào thấp hơn?', options: ['Bi đen', 'Bằng nhau', 'Không xác định', 'Bi trắng'], correctIndex: 3 },
        { question: 'Sự kiện chắc chắn xảy ra là sự kiện như thế nào?', options: ['Luôn luôn xảy ra', 'Không bao giờ xảy ra', 'Có khi xảy ra, có khi không', 'Không thể biết trước'], correctIndex: 0 },
        { question: 'Sự kiện không thể xảy ra là sự kiện như thế nào?', options: ['Luôn luôn xảy ra', 'Không bao giờ xảy ra', 'Có khi xảy ra, có khi không', 'Chắc chắn xảy ra'], correctIndex: 1 },
        { question: 'Một hộp có 9 bi đỏ và 1 bi xanh. So với việc lấy được bi xanh, khả năng lấy được bi đỏ như thế nào?', options: ['Thấp hơn nhiều', 'Bằng nhau', 'Cao hơn nhiều', 'Không xác định'], correctIndex: 2 },
        { question: 'Bạn Bình tung một đồng xu 1 lần. Có bao nhiêu khả năng có thể xảy ra?', options: ['4 khả năng', '3 khả năng', '1 khả năng', '2 khả năng'], correctIndex: 3 },
        { question: 'Sự kiện "Viên bi rơi xuống đất khi thả từ trên cao" là sự kiện gì?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra (không chắc chắn)', 'Không xác định'], correctIndex: 0 },
        { question: 'Một hộp có 6 bi đỏ, không có bi xanh nào. Lấy ngẫu nhiên 1 bi, sự kiện "lấy được bi xanh" là sự kiện gì?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 1 },
        { question: 'Một hộp chỉ toàn bi đỏ (10 viên). Lấy ngẫu nhiên 1 bi, sự kiện "lấy được bi đỏ" là sự kiện gì?', options: ['Không thể xảy ra', 'Có thể xảy ra', 'Chắc chắn xảy ra', 'Không xác định'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Xét ba sự kiện sau: (1) Mặt Trời mọc ở hướng Đông; (2) Gieo xúc xắc 6 mặt được số chấm là 8; (3) Ngày mai trời có nắng. Hãy cho biết mỗi sự kiện là chắc chắn xảy ra, có thể xảy ra hay không thể xảy ra.',
          solution: [
            'Sự kiện (1) chắc chắn xảy ra vì Mặt Trời luôn mọc ở hướng Đông.',
            'Sự kiện (2) không thể xảy ra vì xúc xắc chỉ có các mặt từ 1 đến 6 chấm.',
            'Sự kiện (3) có thể xảy ra (không chắc chắn) vì thời tiết có thể nắng hoặc không nắng.',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một hộp có 12 viên bi gồm bi đỏ và bi xanh, trong đó số bi đỏ nhiều gấp 3 lần số bi xanh. Hỏi hộp có bao nhiêu viên bi đỏ, bao nhiêu viên bi xanh? Khả năng lấy được bi màu nào cao hơn khi lấy ngẫu nhiên 1 viên?',
          solution: [
            'Coi số bi xanh là 1 phần thì số bi đỏ là 3 phần, tổng là 4 phần ứng với 12 viên.',
            'Số bi xanh: $12\\div4=3$ (viên)',
            'Số bi đỏ: $3\\times3=9$ (viên)',
            'Vì số bi đỏ (9 viên) nhiều hơn số bi xanh (3 viên) nên khả năng lấy được bi đỏ cao hơn.',
          ],
        },
      ],
    },
  },

  'l3-luyen-tap-tong-hop': {
    title: 'Luyện tập tổng hợp Toán 3',
    theory: {
      cards: [
        {
          title: 'Ôn tập các phép tính và số trong phạm vi 100 000',
          formulas: ['a+b,\\ a-b,\\ a\\times b,\\ a\\div b\\ (dư)', '(dài+rộng)\\times2 ;\\ dài\\times rộng'],
          legend: [
            'Ôn lại 4 phép tính cộng, trừ, nhân, chia đã học và các công thức tính chu vi, diện tích hình chữ nhật, hình vuông',
            'Kết hợp nhiều bước tính để giải các bài toán có lời văn',
          ],
          note: 'Mẹo: khi giải toán tổng hợp, con đọc kỹ đề bài, xác định các bước tính cần làm rồi giải lần lượt từng bước.',
        },
        {
          title: 'Ôn tập hình học, đo lường và thống kê',
          formulas: ['1km=1000m ;\\ 1kg=1000g ;\\ 1$ giờ$=60$ phút$', 'Chắc chắn / Có thể / Không thể xảy ra'],
          legend: [
            'Ôn lại các đơn vị đo độ dài, khối lượng, thời gian, tiền Việt Nam',
            'Ôn lại cách đọc bảng số liệu, biểu đồ cột và xác định khả năng xảy ra của một sự kiện',
          ],
          note: 'Mẹo: luôn kiểm tra lại đơn vị đo trong bài toán và đổi về cùng một đơn vị trước khi tính toán.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — luyen_tap_tong_hop_toan3_baigiang.mp4' },
    quiz: [
      { question: 'Tính: $3456+2789=?$', options: ['6245', '6235', '6345', '6145'], correctIndex: 0 },
      { question: 'Một hình chữ nhật dài 16cm, rộng 9cm. Chu vi là bao nhiêu?', options: ['48cm', '50cm', '52cm', '46cm'], correctIndex: 1 },
      { question: 'Tính: $54\\div6=?$', options: ['7', '8', '9', '6'], correctIndex: 2 },
      { question: 'Đổi: $2kg\\,500g = ?\\,g$', options: ['250g', '2050g', '2005g', '2500g'], correctIndex: 3 },
      { question: 'Gieo xúc xắc 6 mặt, sự kiện "được mặt có số chấm bé hơn 7" là sự kiện gì?', options: ['Không thể xảy ra', 'Có thể xảy ra', 'Chắc chắn xảy ra', 'Không xác định'], correctIndex: 2 },
    ],
    essays: [
      { prompt: 'Tính: $24568-9675$.', solution: ['$24568-9675=14893$'] },
      {
        prompt: 'Một hình vuông có cạnh 13cm. Tính chu vi và diện tích hình vuông đó.',
        solution: ['Chu vi: $13\\times4=52$ (cm)', 'Diện tích: $13\\times13=169$ ($cm^2$)'],
      },
      {
        prompt: 'Một cửa hàng có 245 quyển vở, đã bán 60 quyển mỗi ngày trong 3 ngày. Hỏi cửa hàng còn lại bao nhiêu quyển vở?',
        solution: ['Số vở đã bán trong 3 ngày: $60\\times3=180$ (quyển)', 'Số vở còn lại: $245-180=65$ (quyển)'],
      },
      {
        prompt: 'Một bảng số liệu ghi số học sinh giỏi của 3 lớp: 3A 14 bạn, 3B 17 bạn, 3C 11 bạn. Lớp nào có số học sinh giỏi nhiều nhất? Tính tổng số học sinh giỏi của cả 3 lớp.',
        solution: ['So sánh: 14, 17, 11 → lớp 3B nhiều nhất.', 'Tổng: $14+17+11=42$ (bạn)'],
      },
      {
        prompt: 'Một xe khách khởi hành lúc 6 giờ 30 phút, đến nơi lúc 9 giờ 15 phút. Hỏi xe đi hết bao lâu?',
        solution: ['Thời gian đi: từ 6 giờ 30 phút đến 9 giờ 15 phút là 2 giờ 45 phút.'],
      },
    ],
    flashcards: [
      { front: '$3456+2789$', back: '6245' },
      { front: 'Chu vi hình vuông cạnh 13cm', back: '$13\\times4=52$cm' },
      { front: 'Diện tích hình vuông cạnh 13cm', back: '$13\\times13=169\\,cm^2$' },
      { front: '2kg 500g = ? g', back: '2500g' },
      { front: 'Gieo xúc xắc được mặt bé hơn 7 chấm — sự kiện gì?', back: 'Chắc chắn xảy ra' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tính: $45678+12345=?$', options: ['58023', '58013', '58123', '57023'], correctIndex: 0 },
        { question: 'Tính: $90000-34567=?$', options: ['55343', '55433', '55533', '54433'], correctIndex: 1 },
        { question: 'Tính: $7\\times8=?$', options: ['54', '48', '56', '64'], correctIndex: 2 },
        { question: 'Tính: $72\\div9=?$', options: ['6', '7', '9', '8'], correctIndex: 3 },
        { question: 'Một hình chữ nhật dài 20cm, rộng 12cm. Diện tích là bao nhiêu?', options: ['240cm²', '220cm²', '260cm²', '200cm²'], correctIndex: 0 },
        { question: 'Một hình vuông có chu vi 36cm. Cạnh hình vuông là bao nhiêu?', options: ['8cm', '9cm', '10cm', '12cm'], correctIndex: 1 },
        { question: 'Đổi: 4 giờ $=?$ phút', options: ['200 phút', '220 phút', '240 phút', '260 phút'], correctIndex: 2 },
        { question: 'Một hộp có 8 bi đỏ, 2 bi xanh. Khả năng lấy được bi nào cao hơn?', options: ['Bi xanh', 'Bằng nhau', 'Không xác định', 'Bi đỏ'], correctIndex: 3 },
        {
          question: 'Bảng số liệu số kg gạo bán trong 4 ngày: 12, 18, 15, 20. Tổng số kg gạo bán được là bao nhiêu?',
          options: ['65', '60', '70', '55'],
          correctIndex: 0,
        },
        {
          question: 'Một ô tô chở 235 bao xi măng, mỗi bao nặng 5kg. Hỏi tổng khối lượng xi măng là bao nhiêu ki-lô-gam?',
          options: ['1075kg', '1175kg', '1275kg', '1150kg'],
          correctIndex: 1,
        },
        { question: 'Làm tròn số 6482 đến hàng trăm.', options: ['6400', '6480', '6500', '6600'], correctIndex: 2 },
        { question: 'Một túi kẹo có 54 cái, chia đều cho 6 bạn. Mỗi bạn được bao nhiêu cái kẹo?', options: ['6', '7', '8', '9'], correctIndex: 3 },
        { question: 'Mẹ mua rau hết 28 000 đồng, đưa cô bán hàng 50 000 đồng. Cô trả lại bao nhiêu tiền?', options: ['22000 đồng', '20000 đồng', '18000 đồng', '25000 đồng'], correctIndex: 0 },
        { question: 'Số nào lớn nhất trong các số: 47 802, 47 820, 47 208, 47 028?', options: ['47802', '47820', '47208', '47028'], correctIndex: 1 },
        {
          question: 'Một hình chữ nhật có chiều dài gấp đôi chiều rộng, chiều rộng là 8cm. Tính chu vi hình chữ nhật.',
          options: ['44cm', '46cm', '48cm', '50cm'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một hình chữ nhật có chiều dài 28cm, chiều rộng 15cm. Tính chu vi và diện tích hình chữ nhật đó.',
          solution: ['Chu vi: $(28+15)\\times2=86$ (cm)', 'Diện tích: $28\\times15=420$ ($cm^2$)'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng có 3240 quyển sách. Buổi sáng bán được 6 kệ trưng bày, mỗi kệ 180 quyển, buổi chiều bán thêm 750 quyển nữa. Hỏi cửa hàng còn lại bao nhiêu quyển sách?',
          solution: [
            'Số sách bán buổi sáng: $180\\times6=1080$ (quyển)',
            'Tổng số sách đã bán: $1080+750=1830$ (quyển)',
            'Số sách còn lại: $3240-1830=1410$ (quyển)',
          ],
        },
      ],
    },
  },
}
