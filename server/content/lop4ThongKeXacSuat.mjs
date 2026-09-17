import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP4_THONG_KE_XAC_SUAT = {
  'l4-bieu-do-cot-nang-cao': {
    title: 'Biểu đồ cột — đọc và nhận xét số liệu',
    theory: {
      cards: [
        {
          title: 'Đọc biểu đồ cột',
          formulas: ['\\text{Chiều cao cột} \\leftrightarrow \\text{Giá trị số liệu}'],
          legend: [
            'Trục ngang thường ghi tên các đối tượng (lớp, tháng, loại quả...)',
            'Trục đứng ghi thang số liệu (số học sinh, số kg...)',
            'Mỗi cột cao bao nhiêu ứng với giá trị bấy nhiêu trên trục đứng',
          ],
          note: 'Mẹo: khi đọc biểu đồ cột, con nhìn đỉnh cột rồi kẻ ngang sang trục đứng để đọc chính xác giá trị.',
        },
        {
          title: 'Nhận xét và so sánh số liệu trên biểu đồ cột',
          formulas: ['\\text{Cột cao nhất} \\to \\text{giá trị lớn nhất}', '\\text{Cột thấp nhất} \\to \\text{giá trị bé nhất}'],
          legend: [
            'So sánh chiều cao các cột để biết đối tượng nào có số liệu lớn hơn, bé hơn',
            'Có thể tính tổng hoặc hiệu giữa các cột để trả lời câu hỏi',
          ],
          note: 'Mẹo: khi đề hỏi "hơn/kém bao nhiêu", con lấy giá trị cột lớn trừ giá trị cột bé, không cộng nhầm.',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — bieu_do_cot_nang_cao_baigiang.mp4' },
    quiz: [
      {
        question: 'Biểu đồ cột thống kê số cây trồng 4 tổ: tổ 1: 12 cây, tổ 2: 15 cây, tổ 3: 9 cây, tổ 4: 18 cây. Tổ nào trồng nhiều cây nhất?',
        options: ['Tổ 4', 'Tổ 1', 'Tổ 2', 'Tổ 3'],
        correctIndex: 0,
      },
      {
        question: 'Theo số liệu trên, tổ nào trồng ít cây nhất?',
        options: ['Tổ 1', 'Tổ 3', 'Tổ 2', 'Tổ 4'],
        correctIndex: 1,
      },
      {
        question: 'Theo số liệu trên, tổ 4 trồng nhiều hơn tổ 3 bao nhiêu cây?',
        options: ['6 cây', '3 cây', '9 cây', '18 cây'],
        correctIndex: 2,
      },
      {
        question: 'Biểu đồ cột về số sách đọc trong tháng của 3 bạn: An 8 quyển, Bình 5 quyển, Chi 11 quyển. Tổng số sách 3 bạn đã đọc là bao nhiêu?',
        options: ['19 quyển', '16 quyển', '13 quyển', '24 quyển'],
        correctIndex: 3,
      },
      {
        question: 'Trên biểu đồ cột, cột càng cao thì thể hiện điều gì?',
        options: ['Số liệu càng lớn', 'Số liệu càng bé', 'Không liên quan gì đến số liệu', 'Số liệu bằng 0'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Biểu đồ cột thống kê số học sinh giỏi 4 lớp: 4A: 10 bạn, 4B: 14 bạn, 4C: 8 bạn, 4D: 12 bạn. Lớp nào có nhiều học sinh giỏi nhất, lớp nào ít nhất?',
        solution: ['So sánh các số: 10, 14, 8, 12.', 'Số lớn nhất là 14 (lớp 4B), số bé nhất là 8 (lớp 4C).', 'Vậy lớp 4B nhiều học sinh giỏi nhất, lớp 4C ít nhất.'],
      },
      {
        prompt: 'Theo số liệu trên, tổng số học sinh giỏi của cả 4 lớp là bao nhiêu?',
        solution: ['$10+14+8+12=44$', 'Tổng số học sinh giỏi của 4 lớp là 44 bạn.'],
      },
      {
        prompt: 'Theo số liệu trên, lớp 4B có nhiều hơn lớp 4C bao nhiêu học sinh giỏi?',
        solution: ['$14-8=6$', 'Lớp 4B có nhiều hơn lớp 4C 6 học sinh giỏi.'],
      },
      {
        prompt: 'Biểu đồ cột về lượng mưa 4 tháng: tháng 6: 120 mm, tháng 7: 150 mm, tháng 8: 200 mm, tháng 9: 90 mm. Tháng nào có lượng mưa nhiều hơn tháng 6 là 30mm?',
        solution: ['Cần tìm tháng có lượng mưa $=120+30=150$ mm.', 'Đó là tháng 7 (150 mm).'],
      },
      {
        prompt: 'Theo số liệu lượng mưa trên, tổng lượng mưa 4 tháng là bao nhiêu mi-li-mét?',
        solution: ['$120+150+200+90=560$', 'Tổng lượng mưa 4 tháng là 560 mm.'],
      },
    ],
    flashcards: [
      { front: 'Trục ngang của biểu đồ cột thường ghi gì?', back: 'Tên các đối tượng cần so sánh' },
      { front: 'Trục đứng của biểu đồ cột thường ghi gì?', back: 'Thang số liệu (giá trị)' },
      { front: 'Cột cao nhất thể hiện điều gì?', back: 'Giá trị lớn nhất trong các đối tượng' },
      { front: 'Muốn biết hơn kém bao nhiêu giữa hai cột, làm gì?', back: 'Lấy giá trị cột lớn trừ giá trị cột bé' },
      { front: 'Muốn tính tổng các giá trị trên biểu đồ, làm gì?', back: 'Cộng tất cả giá trị của các cột lại với nhau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Biểu đồ cột số quả cam thu hoạch 4 ngày: ngày 1: 40 kg, ngày 2: 55 kg, ngày 3: 35 kg, ngày 4: 60 kg. Ngày nào thu hoạch nhiều nhất?',
          options: ['Ngày 1', 'Ngày 4', 'Ngày 2', 'Ngày 3'],
          correctIndex: 1,
        },
        {
          question: 'Theo số liệu trên, ngày nào thu hoạch ít nhất?',
          options: ['Ngày 1', 'Ngày 2', 'Ngày 3', 'Ngày 4'],
          correctIndex: 2,
        },
        {
          question: 'Theo số liệu trên, ngày 4 thu hoạch nhiều hơn ngày 3 bao nhiêu ki-lô-gam?',
          options: ['20 kg', '15 kg', '95 kg', '25 kg'],
          correctIndex: 3,
        },
        {
          question: 'Tổng số cam thu hoạch cả 4 ngày là bao nhiêu ki-lô-gam?',
          options: ['190 kg', '180 kg', '200 kg', '170 kg'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ cột số học sinh 3 khối tham gia văn nghệ: khối 3: 24 bạn, khối 4: 30 bạn, khối 5: 18 bạn. Khối nào có nhiều bạn tham gia nhất?',
          options: ['Khối 3', 'Khối 4', 'Khối 5', 'Bằng nhau cả'],
          correctIndex: 1,
        },
        {
          question: 'Theo số liệu trên, khối 4 nhiều hơn khối 5 bao nhiêu bạn?',
          options: ['6 bạn', '18 bạn', '12 bạn', '10 bạn'],
          correctIndex: 2,
        },
        {
          question: 'Tổng số bạn 3 khối tham gia văn nghệ là bao nhiêu?',
          options: ['62 bạn', '54 bạn', '48 bạn', '72 bạn'],
          correctIndex: 3,
        },
        {
          question: 'Biểu đồ cột số xe bán được 4 tháng: tháng 1: 15 xe, tháng 2: 20 xe, tháng 3: 25 xe, tháng 4: 10 xe. Tháng nào bán được ít xe nhất?',
          options: ['Tháng 4', 'Tháng 1', 'Tháng 2', 'Tháng 3'],
          correctIndex: 0,
        },
        {
          question: 'Theo số liệu trên, tháng 3 bán được nhiều hơn tháng 4 bao nhiêu xe?',
          options: ['10 xe', '15 xe', '5 xe', '35 xe'],
          correctIndex: 1,
        },
        {
          question: 'Tổng số xe bán được trong 4 tháng là bao nhiêu?',
          options: ['65 xe', '75 xe', '70 xe', '60 xe'],
          correctIndex: 2,
        },
        {
          question: 'Trên biểu đồ cột, nếu hai cột cao bằng nhau thì hai giá trị đó thế nào?',
          options: ['Khác nhau', 'Không xác định được', 'Một giá trị bằng 0', 'Bằng nhau'],
          correctIndex: 3,
        },
        {
          question: 'Biểu đồ cột số bài kiểm tra đạt điểm giỏi 4 tổ: tổ 1: 5 bài, tổ 2: 7 bài, tổ 3: 6 bài, tổ 4: 4 bài. Trung bình mỗi tổ có bao nhiêu bài đạt điểm giỏi?',
          options: ['5,5 bài', '5 bài', '6 bài', '22 bài'],
          correctIndex: 0,
        },
        {
          question: 'Một biểu đồ cột thống kê cân nặng trung bình (kg) của gà nuôi 4 tuần: tuần 1: 1 kg, tuần 2: 1,5 kg, tuần 3: 2 kg, tuần 4: 2,5 kg. Từ tuần 1 đến tuần 4, cân nặng tăng thêm bao nhiêu ki-lô-gam?',
          options: ['1 kg', '1,5 kg', '2 kg', '0,5 kg'],
          correctIndex: 1,
        },
        {
          question: 'Biểu đồ cột số lượt khách 4 quý của một cửa hàng: quý 1: 200, quý 2: 350, quý 3: 300, quý 4: 250. Quý nào có lượt khách nhiều thứ hai?',
          options: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'],
          correctIndex: 2,
        },
        {
          question: 'Theo số liệu 4 quý trên, tổng lượt khách cả năm là bao nhiêu?',
          options: ['1000', '1050', '1150', '1100'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Biểu đồ cột số cây xanh trồng được của 4 lớp: 4A: 20 cây, 4B: 25 cây, 4C: 18 cây, 4D: 22 cây. Lớp nào trồng nhiều cây nhất, lớp nào ít nhất? Tính tổng số cây 4 lớp đã trồng.',
          solution: ['So sánh: 20, 25, 18, 22. Lớn nhất là 25 (lớp 4B), bé nhất là 18 (lớp 4C).', 'Tổng số cây: $20+25+18+22=85$ cây.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Biểu đồ cột lượng gạo bán được 5 ngày của một cửa hàng: ngày 1: 45 kg, ngày 2: 60 kg, ngày 3: 38 kg, ngày 4: 52 kg, ngày 5: 55 kg. Tính tổng lượng gạo bán được trong 5 ngày và trung bình mỗi ngày bán được bao nhiêu ki-lô-gam?',
          solution: [
            'Tổng lượng gạo: $45+60+38+52+55=250$ kg',
            'Trung bình mỗi ngày: $250:5=50$ kg',
          ],
        },
      ],
    },
  },

  'l4-so-trung-binh-cong': {
    title: 'Số trung bình cộng',
    theory: {
      cards: [
        {
          title: 'Khái niệm số trung bình cộng',
          formulas: ['TBC = (a_1+a_2+\\dots+a_n) : n'],
          legend: [
            'Muốn tìm số trung bình cộng của nhiều số, ta tính tổng các số đó rồi chia cho số các số hạng',
            'Ví dụ: TBC của 3, 5, 7 là $(3+5+7):3=5$',
          ],
          note: 'Mẹo: số trung bình cộng luôn nằm giữa số bé nhất và số lớn nhất trong dãy số — dùng để kiểm tra nhanh kết quả có hợp lý không.',
        },
        {
          title: 'Bài toán ngược: tìm tổng hoặc một số hạng khi biết TBC',
          formulas: ['\\text{Tổng} = TBC \\times n', 'a_n = TBC\\times n - (a_1+\\dots+a_{n-1})'],
          legend: [
            'Biết trung bình cộng và số các số hạng, ta tính được tổng bằng cách nhân ngược lại',
            'Muốn tìm một số hạng còn thiếu, lấy tổng trừ đi các số hạng đã biết',
          ],
          note: 'Mẹo: dạng bài "tìm số thứ n" luôn làm theo 2 bước — trước tiên tính tổng bằng TBC × n, sau đó trừ đi các số đã biết.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — so_trung_binh_cong_baigiang.mp4' },
    quiz: [
      { question: 'Tìm số trung bình cộng của 4, 6, 8.', options: ['6', '5', '7', '18'], correctIndex: 0 },
      { question: 'Tìm số trung bình cộng của 10, 20, 30, 40.', options: ['20', '25', '30', '100'], correctIndex: 1 },
      { question: 'Ba số có trung bình cộng là 15, tổng ba số đó là bao nhiêu?', options: ['15', '30', '45', '5'], correctIndex: 2 },
      { question: 'Hai số có tổng 36, trung bình cộng hai số là bao nhiêu?', options: ['36', '72', '9', '18'], correctIndex: 3 },
      { question: 'Lan có điểm kiểm tra 3 môn là 8, 9, 7. Điểm trung bình là bao nhiêu?', options: ['8', '7', '9', '24'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tìm số trung bình cộng của các số 12, 18, 15.', solution: ['Tổng: $12+18+15=45$', 'TBC: $45:3=15$'] },
      {
        prompt: 'Bốn bạn cân nặng lần lượt 28 kg, 32 kg, 30 kg, 26 kg. Tính cân nặng trung bình của 4 bạn.',
        solution: ['Tổng cân nặng: $28+32+30+26=116$ kg', 'Trung bình: $116:4=29$ kg'],
      },
      {
        prompt: 'Trung bình cộng của hai số là 24. Biết một số là 18. Tìm số còn lại.',
        solution: ['Tổng hai số: $24\\times2=48$', 'Số còn lại: $48-18=30$'],
      },
      {
        prompt: 'Ba tổ trồng cây, tổ 1 trồng 20 cây, tổ 2 trồng 25 cây. Trung bình cộng cả 3 tổ là 24 cây. Hỏi tổ 3 trồng bao nhiêu cây?',
        solution: ['Tổng 3 tổ: $24\\times3=72$ cây', 'Tổ 1 và tổ 2: $20+25=45$ cây', 'Tổ 3: $72-45=27$ cây'],
      },
      {
        prompt: 'Một cửa hàng bán được trong 5 ngày, trung bình mỗi ngày 40 kg gạo. Biết 4 ngày đầu bán được lần lượt 35 kg, 42 kg, 38 kg, 45 kg. Hỏi ngày thứ 5 bán được bao nhiêu ki-lô-gam gạo?',
        solution: ['Tổng 5 ngày: $40\\times5=200$ kg', 'Tổng 4 ngày đầu: $35+42+38+45=160$ kg', 'Ngày thứ 5: $200-160=40$ kg'],
      },
    ],
    flashcards: [
      { front: 'Công thức tính số trung bình cộng', back: '$TBC=(a_1+a_2+\\dots+a_n):n$' },
      { front: 'Muốn tìm tổng khi biết TBC và số số hạng, làm gì?', back: 'Lấy $TBC\\times n$' },
      { front: 'TBC của 5 và 9', back: '7' },
      { front: 'TBC luôn nằm trong khoảng nào?', back: 'Giữa số bé nhất và số lớn nhất của dãy số' },
      { front: 'TBC của 3 số bằng 10, tổng 3 số là?', back: '30' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tìm số trung bình cộng của 5, 9, 13.', options: ['8', '9', '10', '27'], correctIndex: 1 },
        { question: 'Tìm số trung bình cộng của 6, 10, 14, 18.', options: ['11', '13', '12', '48'], correctIndex: 2 },
        { question: 'Ba số có tổng 90, trung bình cộng ba số đó là bao nhiêu?', options: ['45', '90', '3', '30'], correctIndex: 3 },
        { question: 'Bốn số có trung bình cộng 25, tổng bốn số đó là bao nhiêu?', options: ['100', '25', '50', '125'], correctIndex: 0 },
        { question: 'Hai số có TBC là 20, một số là 14. Số còn lại là bao nhiêu?', options: ['6', '26', '34', '20'], correctIndex: 1 },
        { question: 'Điểm 4 bài kiểm tra của Hùng là 7, 8, 6, 9. Điểm trung bình là bao nhiêu?', options: ['7', '8', '7,5', '30'], correctIndex: 2 },
        { question: 'Ba đội có số người lần lượt 18, 22, 20. Trung bình cộng số người mỗi đội là bao nhiêu?', options: ['18', '22', '60', '20'], correctIndex: 3 },
        { question: 'Trung bình cộng của 3 số là 16. Biết 2 số là 12 và 18. Tìm số thứ ba.', options: ['18', '16', '20', '14'], correctIndex: 0 },
        { question: 'Một xe chạy 3 giờ, mỗi giờ đi được 40 km, 45 km, 50 km. Vận tốc trung bình là bao nhiêu km/giờ?', options: ['40', '45', '50', '135'], correctIndex: 1 },
        { question: 'Số trung bình cộng của 100 và 200 là bao nhiêu?', options: ['100', '200', '150', '300'], correctIndex: 2 },
        { question: 'Trung bình cộng của 5 số bằng 30, tổng 5 số đó là bao nhiêu?', options: ['30', '25', '35', '150'], correctIndex: 3 },
        { question: 'Hai thùng dầu có trung bình mỗi thùng 25 lít. Thùng 1 có 20 lít, hỏi thùng 2 có bao nhiêu lít?', options: ['30', '25', '20', '45'], correctIndex: 0 },
        {
          question: 'Bốn bạn góp tiền mua quà, trung bình mỗi bạn góp 15 000 đồng. Biết 3 bạn góp lần lượt 12 000, 18 000, 14 000 đồng. Bạn thứ 4 góp bao nhiêu?',
          options: ['15 000 đồng', '16 000 đồng', '14 000 đồng', '18 000 đồng'],
          correctIndex: 1,
        },
        {
          question: 'Một lớp có 30 học sinh, điểm trung bình môn Toán cả lớp là 8. Tổng điểm của cả lớp là bao nhiêu?',
          options: ['38', '224', '240', '270'],
          correctIndex: 2,
        },
        {
          question: 'Trong 6 ngày đầu tuần, cửa hàng bán trung bình 50 sản phẩm/ngày. Biết 5 ngày đầu bán được 48, 52, 45, 55, 53 sản phẩm. Ngày thứ 6 bán được bao nhiêu sản phẩm?',
          options: ['50', '53', '45', '47'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm số trung bình cộng của các số 24, 30, 18, 36.',
          solution: ['Tổng: $24+30+18+36=108$', 'TBC: $108:4=27$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một đội xe chở hàng trong 4 chuyến, trung bình mỗi chuyến chở 850 kg. Biết 3 chuyến đầu chở lần lượt 800 kg, 900 kg, 820 kg. Hỏi chuyến thứ 4 chở bao nhiêu ki-lô-gam?',
          solution: [
            'Tổng 4 chuyến: $850\\times4=3400$ kg',
            'Tổng 3 chuyến đầu: $800+900+820=2520$ kg',
            'Chuyến thứ 4: $3400-2520=880$ kg',
          ],
        },
      ],
    },
  },

  'l4-kha-nang-xay-ra-nang-cao': {
    title: 'Khả năng xảy ra của một biến cố',
    theory: {
      cards: [
        {
          title: 'Các mức độ khả năng xảy ra',
          formulas: ['\\text{Chắc chắn xảy ra}', '\\text{Có thể xảy ra}', '\\text{Không thể xảy ra}'],
          legend: [
            'Một sự việc "chắc chắn xảy ra" nếu nó luôn luôn đúng trong mọi trường hợp',
            'Một sự việc "không thể xảy ra" nếu nó không bao giờ đúng',
            'Một sự việc "có thể xảy ra" nếu đôi khi đúng, đôi khi không',
          ],
          note: 'Mẹo: khi gặp bài toán về khả năng, con hãy tự hỏi "việc này có luôn luôn đúng không?", "có bao giờ đúng không?" để xếp đúng vào 1 trong 3 mức độ.',
        },
        {
          title: 'So sánh khả năng xảy ra với các phần bằng nhau',
          formulas: ['\\text{Nhiều phần tử hơn} \\to \\text{khả năng cao hơn}'],
          legend: [
            'Trong một hộp có nhiều loại bi, loại nào có số lượng nhiều hơn thì khả năng lấy được loại đó cao hơn',
            'Nếu số lượng các loại bằng nhau thì khả năng lấy được mỗi loại là như nhau',
          ],
          note: 'Mẹo: khả năng xảy ra ở đây chỉ so sánh định tính (cao hơn, thấp hơn, bằng nhau) — học sinh lớp 4 chưa cần tính bằng phân số hay phần trăm.',
        },
      ],
    },
    video: { caption: '00:00 / 07:30 — kha_nang_xay_ra_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Việc "Mặt Trời mọc ở hướng Đông" là loại khả năng nào?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 0 },
      { question: 'Việc "Tháng 2 có 40 ngày" là loại khả năng nào?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 1 },
      { question: 'Việc "Ngày mai trời sẽ mưa" là loại khả năng nào?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 2 },
      {
        question: 'Một hộp có 8 bi đỏ và 2 bi xanh. Lấy ngẫu nhiên 1 viên, khả năng lấy được bi màu nào cao hơn?',
        options: ['Bi xanh', 'Bằng nhau', 'Không xác định', 'Bi đỏ'],
        correctIndex: 3,
      },
      {
        question: 'Một hộp có 5 bi đỏ và 5 bi xanh. Lấy ngẫu nhiên 1 viên, khả năng lấy được bi đỏ so với bi xanh thế nào?',
        options: ['Bằng nhau', 'Bi đỏ cao hơn', 'Bi xanh cao hơn', 'Không xác định'],
        correctIndex: 0,
      },
    ],
    essays: [
      { prompt: 'Xếp các sự việc sau vào đúng loại khả năng: "Gieo một con xúc xắc được mặt có chấm từ 1 đến 6", "Gieo xúc xắc được mặt 7 chấm".', solution: ['"Gieo xúc xắc được mặt có chấm từ 1 đến 6" là việc chắc chắn xảy ra (vì xúc xắc chỉ có 6 mặt, từ 1 đến 6 chấm).', '"Gieo xúc xắc được mặt 7 chấm" là việc không thể xảy ra (vì xúc xắc không có mặt 7 chấm).'] },
      {
        prompt: 'Một hộp có 6 quả bóng vàng và 4 quả bóng đỏ. Lấy ngẫu nhiên 1 quả. Khả năng lấy được quả nào cao hơn? Vì sao?',
        solution: ['Vì số bóng vàng (6 quả) nhiều hơn số bóng đỏ (4 quả) nên khả năng lấy được bóng vàng cao hơn.'],
      },
      {
        prompt: 'Nêu 1 ví dụ về sự việc chắc chắn xảy ra và 1 ví dụ về sự việc không thể xảy ra trong cuộc sống hằng ngày.',
        solution: ['Ví dụ chắc chắn xảy ra: một năm có 12 tháng.', 'Ví dụ không thể xảy ra: con gà biết bay như chim đại bàng lên tới mặt trăng (học sinh có thể nêu ví dụ khác tương tự, miễn hợp lý).'],
      },
      {
        prompt: 'Một túi có 3 bi đỏ, 3 bi xanh, 3 bi vàng (số lượng bằng nhau). Lấy ngẫu nhiên 1 viên. So sánh khả năng lấy được từng màu.',
        solution: ['Vì số lượng 3 màu bi bằng nhau (đều 3 viên) nên khả năng lấy được mỗi màu là như nhau.'],
      },
      {
        prompt: 'Một hộp có 9 bi xanh và 1 bi đỏ. Lấy ngẫu nhiên 1 viên. Khả năng lấy được bi đỏ là cao, thấp hay bằng khả năng lấy được bi xanh?',
        solution: ['Vì số bi đỏ (1 viên) ít hơn rất nhiều so với bi xanh (9 viên) nên khả năng lấy được bi đỏ thấp hơn nhiều so với khả năng lấy được bi xanh.'],
      },
    ],
    flashcards: [
      { front: '3 mức độ khả năng xảy ra đã học', back: 'Chắc chắn xảy ra, có thể xảy ra, không thể xảy ra' },
      { front: '"Một năm có 12 tháng" là khả năng gì?', back: 'Chắc chắn xảy ra' },
      { front: '"Tháng 2 có 40 ngày" là khả năng gì?', back: 'Không thể xảy ra' },
      { front: 'Số lượng nhiều hơn thì khả năng lấy được ra sao?', back: 'Cao hơn' },
      { front: 'Số lượng các loại bằng nhau thì khả năng lấy được từng loại thế nào?', back: 'Bằng nhau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Việc "Một tuần có 7 ngày" là loại khả năng nào?', options: ['Không thể xảy ra', 'Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 1 },
        { question: 'Việc "Gieo xúc xắc được mặt 6 chấm" là loại khả năng nào?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 2 },
        { question: 'Việc "Con người có thể tự bay lên trời không cần phương tiện" là loại khả năng nào?', options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định', 'Không thể xảy ra'], correctIndex: 3 },
        {
          question: 'Một hộp có 10 quả bóng đều màu đỏ. Lấy ngẫu nhiên 1 quả, khả năng lấy được bóng đỏ là gì?',
          options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra một nửa', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Một hộp có 10 quả bóng đều màu đỏ. Lấy ngẫu nhiên 1 quả, khả năng lấy được bóng xanh là gì?',
          options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Một hộp có 7 bi vàng và 3 bi tím. Khả năng lấy được bi nào cao hơn?',
          options: ['Bi tím', 'Bằng nhau', 'Bi vàng', 'Không xác định'],
          correctIndex: 2,
        },
        {
          question: 'Một hộp có 4 bi đỏ và 4 bi xanh. Khả năng lấy được bi đỏ so với bi xanh?',
          options: ['Bi đỏ cao hơn', 'Bi xanh cao hơn', 'Không xác định', 'Bằng nhau'],
          correctIndex: 3,
        },
        { question: 'Việc "Mặt Trăng mọc ở hướng Tây vào mọi đêm" là khả năng gì?', options: ['Không thể xảy ra', 'Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 0 },
        { question: 'Việc "Ngày mai là thứ Ba nếu hôm nay là thứ Hai" là khả năng gì?', options: ['Không thể xảy ra', 'Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 1 },
        {
          question: 'Một túi có 2 bi đỏ, 6 bi xanh, 2 bi vàng. Loại bi nào có khả năng lấy được cao nhất?',
          options: ['Bi đỏ', 'Bi vàng', 'Bi xanh', 'Bằng nhau cả'],
          correctIndex: 2,
        },
        {
          question: 'Một túi có 2 bi đỏ, 6 bi xanh, 2 bi vàng. Hai loại bi nào có khả năng lấy được bằng nhau?',
          options: ['Bi đỏ và bi xanh', 'Bi xanh và bi vàng', 'Không có loại nào bằng nhau', 'Bi đỏ và bi vàng'],
          correctIndex: 3,
        },
        { question: 'Việc "Gieo 1 đồng xu, mặt sấp hoặc mặt ngửa sẽ xuất hiện" là khả năng gì?', options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'], correctIndex: 0 },
        {
          question: 'Một lớp có 20 bạn nam và 20 bạn nữ. Chọn ngẫu nhiên 1 bạn để làm lớp trưởng, khả năng chọn được bạn nam so với bạn nữ như thế nào?',
          options: ['Nam cao hơn', 'Bằng nhau', 'Nữ cao hơn', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Một rổ có 15 quả cam và 5 quả chanh. Lấy ngẫu nhiên 1 quả, khả năng lấy được quả nào thấp hơn?',
          options: ['Quả cam', 'Bằng nhau', 'Quả chanh', 'Không xác định'],
          correctIndex: 2,
        },
        {
          question: 'Việc "Hôm nay là Chủ nhật thì ngày mai là thứ Hai" thuộc loại khả năng nào?',
          options: ['Không thể xảy ra', 'Có thể xảy ra', 'Không xác định', 'Chắc chắn xảy ra'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Xếp các sự việc sau vào 3 loại khả năng (chắc chắn xảy ra / có thể xảy ra / không thể xảy ra): (1) "Một năm có 365 hoặc 366 ngày"; (2) "Trời sẽ nắng vào ngày mai"; (3) "Con người có thể sống dưới nước như cá mà không cần thiết bị hỗ trợ".',
          solution: [
            '(1) Chắc chắn xảy ra (mọi năm dương lịch đều có 365 hoặc 366 ngày).',
            '(2) Có thể xảy ra (thời tiết ngày mai không chắc chắn trước).',
            '(3) Không thể xảy ra (con người không có khả năng đó nếu không có thiết bị hỗ trợ).',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một hộp có 12 viên bi gồm 3 màu: đỏ, xanh, vàng, trong đó có 6 viên đỏ, 4 viên xanh, 2 viên vàng. Lấy ngẫu nhiên 1 viên. Hãy sắp xếp khả năng lấy được từng màu theo thứ tự từ cao đến thấp và giải thích.',
          solution: [
            'Số lượng: đỏ 6 viên, xanh 4 viên, vàng 2 viên.',
            'Vì số lượng càng nhiều thì khả năng lấy được càng cao, nên thứ tự từ cao đến thấp là: đỏ, xanh, vàng.',
          ],
        },
      ],
    },
  },

  'l4-luyen-tap-tong-hop': {
    title: 'Luyện tập tổng hợp Toán 4',
    theory: {
      cards: [
        {
          title: 'Tổng hợp các dạng toán đã học',
          formulas: ['S_{\\text{hình bình hành}} = a\\times h', 'S_{\\text{hình thoi}} = \\dfrac{d_1\\times d_2}{2}', 'TBC = (a_1+\\dots+a_n):n'],
          legend: [
            'Ôn lại số tự nhiên lớn (lớp triệu), 4 phép tính, phân số, hình học và đo lường, thống kê và xác suất',
            'Khi giải toán có lời văn, cần đọc kỹ đề, xác định dữ kiện đã cho và câu hỏi cần tìm',
          ],
          note: 'Mẹo: với bài toán nhiều bước, con nên tóm tắt đề bằng sơ đồ hoặc ghi chú ngắn gọn trước khi giải, tránh bỏ sót dữ kiện.',
        },
        {
          title: 'Các bước giải toán có lời văn',
          formulas: ['\\text{Bước 1: Đọc và tóm tắt đề}', '\\text{Bước 2: Tìm cách giải}', '\\text{Bước 3: Trình bày lời giải}', '\\text{Bước 4: Kiểm tra lại kết quả}'],
          legend: ['4 bước cơ bản giúp giải đúng và trình bày rõ ràng một bài toán có lời văn'],
          note: 'Mẹo: sau khi tính ra đáp số, con nên thử lại bằng cách ước lượng xem kết quả có hợp lý với thực tế của bài toán không.',
        },
      ],
    },
    video: { caption: '00:00 / 12:00 — luyen_tap_tong_hop_toan_4_baigiang.mp4' },
    quiz: [
      { question: 'Một hình chữ nhật có chiều dài 15 m, chiều rộng 8 m. Chu vi hình đó là bao nhiêu?', options: ['46 m', '23 m', '120 m', '60 m'], correctIndex: 0 },
      { question: 'Tính: $\\dfrac{3}{5}+\\dfrac{1}{4}$.', options: ['$\\dfrac{4}{9}$', '$\\dfrac{17}{20}$', '$\\dfrac{4}{20}$', '$\\dfrac{3}{20}$'], correctIndex: 1 },
      { question: 'Một hình bình hành có đáy 16 cm, chiều cao 9 cm. Diện tích là bao nhiêu?', options: ['50 cm²', '25 cm²', '144 cm²', '72 cm²'], correctIndex: 2 },
      { question: '384 : 24 = ?', options: ['15', '17', '14', '16'], correctIndex: 3 },
      { question: 'Trung bình cộng của 18, 22, 26 là bao nhiêu?', options: ['22', '20', '24', '66'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Một trường học có 1250 học sinh, trong đó $\\dfrac{2}{5}$ số học sinh là học sinh nam. Hỏi trường có bao nhiêu học sinh nam?',
        solution: ['$1250\\times\\dfrac{2}{5}=500$', 'Trường có 500 học sinh nam.'],
      },
      {
        prompt: 'Một thửa ruộng hình chữ nhật có chiều dài 45 m, chiều rộng 30 m. Tính diện tích thửa ruộng và đổi sang đơn vị héc-ta (1 ha = 10 000 m²).',
        solution: ['Diện tích: $S=45\\times30=1350$ m²', 'Đổi sang ha: $1350:10\\,000=0,135$ ha'],
      },
      {
        prompt: 'Một ô tô đi 3 giờ đầu mỗi giờ được 48 km, 2 giờ sau mỗi giờ được 52 km. Tính quãng đường trung bình mỗi giờ ô tô đi được trong cả 5 giờ.',
        solution: ['Quãng đường 3 giờ đầu: $48\\times3=144$ km', 'Quãng đường 2 giờ sau: $52\\times2=104$ km', 'Tổng quãng đường: $144+104=248$ km', 'Trung bình mỗi giờ: $248:5=49,6$ km'],
      },
      {
        prompt: 'Một kho có 3 tấn 250 kg gạo (1 tấn = 1000 kg). Kho đã xuất đi 1 tấn 480 kg. Hỏi kho còn lại bao nhiêu ki-lô-gam gạo?',
        solution: ['Đổi ra kg: $3$ tấn $250$ kg $=3250$ kg; $1$ tấn $480$ kg $=1480$ kg', 'Số gạo còn lại: $3250-1480=1770$ kg'],
      },
      {
        prompt: 'Một hình thoi có diện tích 84 cm², đường chéo thứ nhất 14 cm. Tính đường chéo thứ hai và tính xem đường chéo đó gấp mấy lần đường chéo thứ nhất.',
        solution: ['$d_1\\times d_2 = S\\times2=84\\times2=168$', 'Đường chéo thứ hai: $168:14=12$ cm', 'So sánh: đường chéo thứ hai (12 cm) bé hơn đường chéo thứ nhất (14 cm), không phải là bội số nguyên lần của nó.'],
      },
    ],
    flashcards: [
      { front: 'Công thức chu vi hình chữ nhật', back: '$(dài+rộng)\\times2$' },
      { front: 'Công thức diện tích hình bình hành', back: '$đáy\\times chiều\\ cao$' },
      { front: 'Công thức số trung bình cộng', back: '$(a_1+\\dots+a_n):n$' },
      { front: '1 tấn bằng bao nhiêu kg?', back: '1000 kg' },
      { front: '4 bước giải toán có lời văn', back: 'Đọc và tóm tắt đề, tìm cách giải, trình bày lời giải, kiểm tra lại' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Một hình chữ nhật có chiều dài 20 m, chiều rộng 12 m. Diện tích là bao nhiêu?', options: ['64 m²', '240 m²', '32 m²', '120 m²'], correctIndex: 1 },
        { question: 'Tính: $\\dfrac{5}{6}-\\dfrac{1}{2}$.', options: ['$\\dfrac{2}{3}$', '$\\dfrac{4}{4}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{6}$'], correctIndex: 2 },
        { question: '256 × 34 = ?', options: ['8604', '8804', '8714', '8704'], correctIndex: 3 },
        { question: '9576 : 42 = ?', options: ['228', '218', '238', '208'], correctIndex: 0 },
        { question: 'Trung bình cộng của 15, 25, 35, 45 là bao nhiêu?', options: ['25', '30', '35', '120'], correctIndex: 1 },
        { question: 'Một hình thoi có 2 đường chéo 18 cm và 10 cm. Diện tích là bao nhiêu?', options: ['180 cm²', '28 cm²', '90 cm²', '56 cm²'], correctIndex: 2 },
        { question: 'Số 5 306 214 gồm mấy chữ số?', options: ['6', '8', '5', '7'], correctIndex: 3 },
        { question: '3 m² 8 dm² bằng bao nhiêu dm²?', options: ['308 dm²', '38 dm²', '380 dm²', '3008 dm²'], correctIndex: 0 },
        { question: 'Tính: $\\dfrac{2}{3}\\times\\dfrac{3}{5}$.', options: ['$\\dfrac{5}{8}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{8}$', '$\\dfrac{6}{8}$'], correctIndex: 1 },
        { question: 'Một hình bình hành có diện tích 156 cm², đáy 12 cm. Chiều cao là bao nhiêu?', options: ['12 cm', '14 cm', '13 cm', '15 cm'], correctIndex: 2 },
        { question: 'Việc "Gieo xúc xắc 6 mặt được số chấm lớn hơn 6" là khả năng gì?', options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định', 'Không thể xảy ra'], correctIndex: 3 },
        { question: 'Một đội có 45 người chia đều thành các nhóm 9 người. Có bao nhiêu nhóm?', options: ['5', '4', '6', '9'], correctIndex: 0 },
        {
          question: 'Một cửa hàng có 850 kg gạo, đã bán $\\dfrac{2}{5}$ số gạo. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?',
          options: ['340 kg', '510 kg', '425 kg', '600 kg'],
          correctIndex: 1,
        },
        {
          question: 'Một mảnh vườn hình bình hành có đáy 28 m, chiều cao 15 m. Người ta để $\\dfrac{1}{4}$ diện tích trồng hoa, phần còn lại trồng rau. Diện tích trồng rau là bao nhiêu mét vuông?',
          options: ['420 m²', '105 m²', '315 m²', '210 m²'],
          correctIndex: 2,
        },
        {
          question: 'Ba lớp 4A, 4B, 4C góp sách tặng thư viện: 4A góp 85 quyển, 4B góp 92 quyển, 4C góp 78 quyển. Trung bình mỗi lớp góp bao nhiêu quyển sách?',
          options: ['80 quyển', '90 quyển', '255 quyển', '85 quyển'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một mảnh đất hình chữ nhật có chiều dài 60 m, chiều rộng bằng $\\dfrac{2}{3}$ chiều dài. Tính diện tích mảnh đất.',
          solution: ['Chiều rộng: $60\\times\\dfrac{2}{3}=40$ m', 'Diện tích: $S=60\\times40=2400$ m²'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một kho gạo có 4 tấn 500 kg gạo. Ngày đầu xuất đi $\\dfrac{1}{3}$ số gạo, ngày sau xuất tiếp 800 kg. Hỏi kho còn lại bao nhiêu ki-lô-gam gạo?',
          solution: [
            'Đổi ra kg: $4$ tấn $500$ kg $=4500$ kg',
            'Ngày đầu xuất: $4500\\times\\dfrac{1}{3}=1500$ kg, còn lại $4500-1500=3000$ kg',
            'Ngày sau xuất tiếp 800 kg: $3000-800=2200$ kg',
            'Kho còn lại 2200 kg gạo.',
          ],
        },
      ],
    },
  },
}
