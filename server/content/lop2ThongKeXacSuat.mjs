import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP2_THONG_KE_XAC_SUAT = {
  'l2-thu-thap-kiem-dem': {
    title: 'Thu thập, kiểm đếm, biểu đồ tranh',
    theory: {
      cards: [
        {
          title: 'Thu thập và kiểm đếm số liệu',
          formulas: ['\\text{Đếm số bạn thích màu đỏ, xanh, vàng} \\to \\text{lập bảng kiểm đếm}'],
          legend: ['Kiểm đếm là đếm số lượng của từng loại đối tượng rồi ghi lại bằng số hoặc vạch', 'Bảng kiểm đếm giúp trình bày số liệu rõ ràng, dễ so sánh'],
          note: 'Mẹo: khi kiểm đếm, con nên đếm cẩn thận từng nhóm một, tránh đếm sót hoặc đếm trùng.',
        },
        {
          title: 'Biểu đồ tranh — khái niệm cơ bản',
          formulas: ['\\text{Mỗi hình quả táo tượng trưng cho 1 quả táo thật}'],
          legend: ['Biểu đồ tranh dùng hình vẽ hoặc kí hiệu để biểu diễn số liệu', 'Số lượng hình vẽ ở mỗi hàng cho biết số lượng tương ứng'],
          note: 'Mẹo: đếm số hình vẽ ở mỗi hàng của biểu đồ tranh để biết số liệu của loại đó.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — thu_thap_kiem_dem_baigiang.mp4' },
    quiz: [
      { question: 'Lớp 2A kiểm đếm sở thích: 5 bạn thích màu đỏ, 3 bạn thích màu xanh, 4 bạn thích màu vàng. Hỏi có tất cả bao nhiêu bạn được hỏi?', options: ['12', '11', '13', '10'], correctIndex: 0 },
      { question: 'Việc đếm số lượng từng loại đối tượng rồi ghi lại gọi là gì?', options: ['So sánh', 'Kiểm đếm', 'Sắp xếp', 'Đo lường'], correctIndex: 1 },
      { question: 'Biểu đồ tranh dùng gì để biểu diễn số liệu?', options: ['Chỉ dùng số', 'Chỉ dùng chữ', 'Hình vẽ hoặc kí hiệu', 'Không dùng gì cả'], correctIndex: 2 },
      { question: 'Một biểu đồ tranh có hàng "hoa hồng" vẽ 6 bông hoa, mỗi bông tượng trưng 1 lá phiếu bình chọn. Hỏi hoa hồng được bao nhiêu phiếu?', options: ['5', '7', '8', '6'], correctIndex: 3 },
      { question: 'Kiểm đếm số quả trong giỏ: 7 quả cam, 5 quả táo. Hỏi giỏ có tất cả bao nhiêu quả?', options: ['12', '11', '13', '10'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Lớp 2B kiểm đếm số bạn thích các môn thể thao: 6 bạn thích bóng đá, 4 bạn thích cầu lông, 5 bạn thích bơi lội. Hỏi lớp 2B có tất cả bao nhiêu bạn được hỏi?',
        solution: ['$6+4+5=15$', 'Có tất cả 15 bạn được hỏi.'],
      },
      {
        prompt: 'Một biểu đồ tranh vẽ số quả bóng mỗi bạn có: Nam vẽ 4 quả bóng, Hùng vẽ 6 quả bóng. Hỏi Hùng có nhiều hơn Nam bao nhiêu quả bóng?',
        solution: ['$6-4=2$', 'Hùng có nhiều hơn Nam 2 quả bóng.'],
      },
      { prompt: 'Kiểm đếm màu áo của các bạn trong lớp: 8 bạn áo trắng, 5 bạn áo xanh. Hỏi có tất cả bao nhiêu bạn?', solution: ['$8+5=13$', 'Có tất cả 13 bạn.'] },
      {
        prompt: 'Vì sao khi kiểm đếm số liệu, con nên đếm cẩn thận từng nhóm một?',
        solution: ['Vì nếu đếm sót hoặc đếm trùng thì số liệu sẽ bị sai, không phản ánh đúng thực tế.'],
      },
      {
        prompt: 'Một biểu đồ tranh có hàng "táo" vẽ 9 quả táo nhỏ, mỗi hình tượng trưng 1 quả táo thật. Hỏi số táo thật là bao nhiêu?',
        solution: ['Số táo thật là 9 quả (vì mỗi hình tượng trưng đúng 1 quả).'],
      },
    ],
    flashcards: [
      { front: 'Kiểm đếm là gì?', back: 'Đếm số lượng của từng loại đối tượng rồi ghi lại' },
      { front: 'Biểu đồ tranh dùng gì để biểu diễn số liệu?', back: 'Hình vẽ hoặc kí hiệu' },
      { front: 'Muốn biết tổng số liệu, ta làm gì?', back: 'Cộng số lượng của tất cả các nhóm lại với nhau' },
      { front: '5 bạn thích bóng rổ, 7 bạn thích bóng đá, tổng?', back: '$5+7=12$ bạn' },
      { front: 'Mỗi hình vẽ trong biểu đồ tranh tượng trưng cho điều gì?', back: 'Một số lượng nhất định của đối tượng đang thống kê (thường là 1 đơn vị)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Kiểm đếm sở thích: 4 bạn thích chó, 6 bạn thích mèo, 3 bạn thích cá. Hỏi có tất cả bao nhiêu bạn được hỏi?', options: ['13', '12', '14', '11'], correctIndex: 0 },
        { question: 'Việc dùng hình vẽ để biểu diễn số liệu gọi là gì?', options: ['Bảng số liệu', 'Biểu đồ tranh', 'Phép tính', 'Bảng kiểm đếm'], correctIndex: 1 },
        {
          question: 'Một biểu đồ tranh vẽ 8 hình ngôi sao ở hàng "lớp 2A", mỗi hình tượng trưng 1 bạn được khen thưởng. Hỏi lớp 2A có bao nhiêu bạn được khen thưởng?',
          options: ['7', '9', '8', '6'],
          correctIndex: 2,
        },
        { question: 'Kiểm đếm số quả trong rổ: 9 quả cam, 7 quả quýt. Hỏi rổ có tất cả bao nhiêu quả?', options: ['14', '15', '17', '16'], correctIndex: 3 },
        { question: 'Bảng kiểm đếm dùng để làm gì?', options: ['Trình bày số liệu đã đếm được một cách rõ ràng', 'Chỉ để vẽ tranh', 'Không dùng để làm gì', 'Để tính diện tích'], correctIndex: 0 },
        {
          question: 'Một biểu đồ tranh về loại quả yêu thích: 5 hình quả táo, 8 hình quả chuối. Hỏi loại quả nào được nhiều bạn thích hơn?',
          options: ['Táo', 'Chuối', 'Bằng nhau', 'Không xác định'],
          correctIndex: 1,
        },
        { question: 'Kiểm đếm số bạn theo tháng sinh: 3 bạn sinh tháng 1, 5 bạn sinh tháng 2, 4 bạn sinh tháng 3. Hỏi có tất cả bao nhiêu bạn?', options: ['11', '10', '12', '13'], correctIndex: 2 },
        {
          question: 'Một biểu đồ tranh vẽ số sách mỗi bạn đọc: Lan 6 quyển, Hoa 9 quyển. Hỏi Hoa đọc nhiều hơn Lan bao nhiêu quyển?',
          options: ['2', '4', '5', '3'],
          correctIndex: 3,
        },
        { question: 'Kiểm đếm màu bút chì trong hộp: 7 bút đỏ, 5 bút xanh, 3 bút vàng. Hỏi hộp có tất cả bao nhiêu bút chì?', options: ['15', '14', '16', '13'], correctIndex: 0 },
        {
          question: 'Trong biểu đồ tranh, nếu một hàng có nhiều hình vẽ hơn hàng khác thì điều đó có nghĩa gì?',
          options: ['Số liệu ít hơn', 'Số liệu nhiều hơn', 'Không có ý nghĩa gì', 'Số liệu bằng nhau'],
          correctIndex: 1,
        },
        {
          question: 'Một lớp kiểm đếm số bạn đi học bằng xe đạp: 8 bạn, đi bộ: 6 bạn, được đưa đón: 4 bạn. Hỏi lớp có tất cả bao nhiêu bạn?',
          options: ['16', '17', '18', '19'],
          correctIndex: 2,
        },
        {
          question: 'Một biểu đồ tranh vẽ số bạn tham gia câu lạc bộ: 7 hình ở "Cờ vua", 10 hình ở "Bóng đá". Hỏi Bóng đá có nhiều hơn Cờ vua bao nhiêu bạn?',
          options: ['1', '2', '4', '3'],
          correctIndex: 3,
        },
        { question: 'Kiểm đếm số con vật trong trại: 12 con gà, 8 con vịt. Hỏi trại có tất cả bao nhiêu con vật?', options: ['20', '18', '22', '19'], correctIndex: 0 },
        {
          question: 'Muốn biết loại nào được nhiều bạn chọn nhất trong biểu đồ tranh, con làm gì?',
          options: ['Đếm số ô trống', 'Tìm hàng có nhiều hình vẽ nhất', 'Đếm số hàng', 'Tìm hàng có ít hình vẽ nhất'],
          correctIndex: 1,
        },
        {
          question: 'Kiểm đếm số học sinh theo tổ: tổ 1 có 9 bạn, tổ 2 có 8 bạn, tổ 3 có 10 bạn. Hỏi lớp có tất cả bao nhiêu bạn?',
          options: ['25', '26', '27', '28'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Kiểm đếm sở thích môn học của lớp 2C: 7 bạn thích Toán, 6 bạn thích Tiếng Việt, 5 bạn thích Mĩ thuật. Hỏi lớp 2C có tất cả bao nhiêu bạn được hỏi, và môn nào được nhiều bạn thích nhất?',
          solution: ['$7+6+5=18$', 'Có tất cả 18 bạn được hỏi.', 'Môn Toán được nhiều bạn thích nhất (7 bạn).'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một biểu đồ tranh vẽ số cây được trồng mỗi tuần: tuần 1 vẽ 6 hình cây, tuần 2 vẽ 9 hình cây, tuần 3 vẽ 7 hình cây (mỗi hình tượng trưng 1 cây). Hỏi ba tuần trồng được tất cả bao nhiêu cây, và tuần nào trồng được nhiều cây nhất?',
          solution: ['$6+9+7=22$', 'Ba tuần trồng được tất cả 22 cây.', 'Tuần 2 trồng được nhiều cây nhất (9 cây).'],
        },
      ],
    },
  },

  'l2-doc-bieu-do-tranh': {
    title: 'Đọc và phân tích biểu đồ tranh đơn giản',
    theory: {
      cards: [
        {
          title: 'Cách đọc biểu đồ tranh',
          formulas: ['\\text{Hàng "cam" có 5 hình quả cam} \\to 5 \\text{ quả cam}'],
          legend: ['Đếm số kí hiệu ở mỗi hàng để biết số liệu của loại đó', 'So sánh số kí hiệu giữa các hàng để biết loại nào nhiều hơn, ít hơn'],
          note: 'Mẹo: khi đọc biểu đồ tranh, con hãy đếm cẩn thận từng kí hiệu, không bỏ sót.',
        },
        {
          title: 'Phân tích, so sánh số liệu trên biểu đồ tranh',
          formulas: ['\\text{Táo: 8, Cam: 5} \\to 8 - 5 = 3 \\text{ (táo nhiều hơn cam 3 quả)}'],
          legend: ['Muốn biết loại nào nhiều hơn hay ít hơn bao nhiêu, ta lấy hiệu của hai số liệu', 'Muốn biết tổng số, ta cộng tất cả số liệu của các hàng lại'],
          note: 'Mẹo: luôn đọc kỹ câu hỏi để biết cần tìm tổng, hiệu, hay so sánh trực tiếp giữa các hàng.',
        },
      ],
    },
    video: { caption: '00:00 / 06:30 — doc_bieu_do_tranh_baigiang.mp4' },
    quiz: [
      {
        question: 'Theo biểu đồ tranh về trái cây mang đến lớp (Chuối: 6, Cam: 4, Xoài: 8), loại trái cây nào được mang đến ÍT nhất?',
        options: ['Cam', 'Chuối', 'Xoài', 'Bằng nhau'],
        correctIndex: 0,
      },
      { question: 'Theo biểu đồ trên (Chuối: 6, Cam: 4, Xoài: 8), tổng số trái cây được mang đến là bao nhiêu?', options: ['16', '18', '20', '14'], correctIndex: 1 },
      { question: 'Theo biểu đồ trên (Chuối: 6, Cam: 4, Xoài: 8), Xoài nhiều hơn Cam bao nhiêu quả?', options: ['3', '5', '4', '6'], correctIndex: 2 },
      { question: 'Theo biểu đồ trên (Chuối: 6, Cam: 4, Xoài: 8), Chuối nhiều hơn Cam bao nhiêu quả?', options: ['4', '3', '1', '2'], correctIndex: 3 },
      { question: 'Theo biểu đồ trên (Chuối: 6, Cam: 4, Xoài: 8), loại trái cây nào được mang đến nhiều nhất?', options: ['Xoài', 'Chuối', 'Cam', 'Bằng nhau'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Một biểu đồ tranh về con vật yêu thích của lớp: Chó: 7 hình, Mèo: 9 hình, Thỏ: 5 hình. Tổng số bạn được hỏi là bao nhiêu?',
        solution: ['$7+9+5=21$', 'Có tất cả 21 bạn được hỏi.'],
      },
      { prompt: 'Theo biểu đồ trên (Chó: 7, Mèo: 9, Thỏ: 5), Mèo được bao nhiêu bạn thích hơn Thỏ?', solution: ['$9-5=4$', 'Mèo được nhiều hơn Thỏ 4 bạn thích.'] },
      { prompt: 'Theo biểu đồ trên (Chó: 7, Mèo: 9, Thỏ: 5), con vật nào được ít bạn thích nhất?', solution: ['Con vật được ít bạn thích nhất là Thỏ (5 bạn).'] },
      { prompt: 'Theo biểu đồ trên (Chó: 7, Mèo: 9, Thỏ: 5), Chó và Thỏ cộng lại được bao nhiêu bạn thích?', solution: ['$7+5=12$', 'Chó và Thỏ cộng lại được 12 bạn thích.'] },
      {
        prompt: 'Theo biểu đồ trên (Chó: 7, Mèo: 9, Thỏ: 5), nếu có thêm 3 bạn nữa chọn Mèo, hỏi lúc đó Mèo được bao nhiêu bạn thích?',
        solution: ['$9+3=12$', 'Lúc đó Mèo được 12 bạn thích.'],
      },
    ],
    flashcards: [
      { front: 'Muốn biết loại nào nhiều hơn bao nhiêu, ta làm phép tính gì?', back: 'Phép trừ (lấy số lớn trừ số bé)' },
      { front: 'Muốn biết tổng số liệu trên biểu đồ tranh, ta làm phép tính gì?', back: 'Phép cộng tất cả các số liệu' },
      { front: 'Biểu đồ tranh có hàng nhiều kí hiệu nhất nghĩa là gì?', back: 'Đó là loại có số liệu lớn nhất' },
      { front: '9 hình - 5 hình', back: '4 (hơn 4 đơn vị)' },
      { front: 'Khi đọc biểu đồ tranh cần chú ý điều gì?', back: 'Đếm chính xác số kí hiệu ở mỗi hàng, không bỏ sót' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Theo biểu đồ (Xanh: 10, Trắng: 6, Vàng: 8), màu nào được chọn nhiều nhất?', options: ['Xanh', 'Trắng', 'Vàng', 'Bằng nhau'], correctIndex: 0 },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), tổng số bạn được hỏi là bao nhiêu?', options: ['22', '24', '26', '20'], correctIndex: 1 },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), Xanh nhiều hơn Trắng bao nhiêu bạn?', options: ['3', '5', '4', '6'], correctIndex: 2 },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), Vàng nhiều hơn Trắng bao nhiêu bạn?', options: ['4', '3', '1', '2'], correctIndex: 3 },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), màu nào được chọn ít nhất?', options: ['Trắng', 'Xanh', 'Vàng', 'Bằng nhau'], correctIndex: 0 },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), Xanh và Vàng cộng lại được bao nhiêu bạn?', options: ['16', '18', '20', '17'], correctIndex: 1 },
        {
          question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), nếu có thêm 4 bạn chọn Trắng, hỏi Trắng lúc đó có bao nhiêu bạn?',
          options: ['9', '11', '10', '8'],
          correctIndex: 2,
        },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), Xanh nhiều hơn Vàng bao nhiêu bạn?', options: ['4', '3', '1', '2'], correctIndex: 3 },
        {
          question: 'Biểu đồ tranh khác gì so với bảng số liệu chỉ toàn chữ số?',
          options: ['Dùng hình vẽ hoặc kí hiệu thay vì chỉ dùng số', 'Không có gì khác', 'Chỉ dùng chữ viết', 'Không thể so sánh được số liệu'],
          correctIndex: 0,
        },
        {
          question: 'Muốn biết hai loại có số liệu bằng nhau hay không, ta làm gì?',
          options: ['Đếm số kí hiệu của mỗi loại rồi so sánh', 'Không thể biết được', 'Chỉ nhìn màu sắc', 'Đo độ dài hàng'],
          correctIndex: 1,
        },
        { question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), Vàng và Trắng cộng lại được bao nhiêu bạn?', options: ['12', '13', '14', '15'], correctIndex: 2 },
        {
          question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), tổng cả ba màu trừ đi số bạn chọn Xanh còn lại bao nhiêu?',
          options: ['12', '13', '15', '14'],
          correctIndex: 3,
        },
        {
          question: 'Theo biểu đồ trên, nếu 2 bạn đổi từ chọn Vàng sang chọn Trắng, hỏi lúc đó Trắng có bao nhiêu bạn?',
          options: ['8', '7', '9', '6'],
          correctIndex: 0,
        },
        {
          question: 'Theo tình huống trên (2 bạn đổi từ Vàng sang Trắng), hỏi lúc đó Vàng còn bao nhiêu bạn?',
          options: ['5', '6', '7', '8'],
          correctIndex: 1,
        },
        {
          question: 'Theo biểu đồ trên (Xanh: 10, Trắng: 6, Vàng: 8), xếp các màu theo số bạn chọn từ ít đến nhiều, màu đứng giữa là màu nào?',
          options: ['Trắng', 'Xanh', 'Vàng', 'Không xác định'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Theo biểu đồ tranh (Xanh: 10 hình, Trắng: 6 hình, Vàng: 8 hình, mỗi hình tượng trưng 1 bạn), hãy tính tổng số bạn được hỏi và cho biết màu nào được chọn nhiều nhất.',
          solution: ['$10+6+8=24$', 'Có tất cả 24 bạn được hỏi.', 'Màu Xanh được chọn nhiều nhất (10 bạn).'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Theo biểu đồ tranh trên, nếu có thêm 5 bạn mới vào lớp và tất cả đều chọn màu Trắng, hỏi lúc đó số bạn chọn Trắng là bao nhiêu, và Trắng có còn là màu được chọn ít nhất không?',
          solution: [
            '$6+5=11$',
            'Lúc đó Trắng có 11 bạn chọn.',
            'So sánh: Trắng 11, Xanh 10, Vàng 8 — Trắng không còn ít nhất nữa, mà Vàng mới là màu ít bạn chọn nhất.',
          ],
        },
      ],
    },
  },

  'l2-nhieu-kha-nang': {
    title: 'Nhiều khả năng — chắc chắn, có thể, không thể',
    theory: {
      cards: [
        {
          title: 'Các khả năng: chắc chắn, có thể, không thể',
          formulas: [
            '\\text{Mặt Trời mọc ở hướng Đông} \\to \\text{chắc chắn}',
            '\\text{Ngày mai trời mưa} \\to \\text{có thể}',
            '\\text{Con gà biết bay như chim đại bàng} \\to \\text{không thể}',
          ],
          legend: [
            '"Chắc chắn" là sự việc luôn luôn xảy ra đúng như vậy',
            '"Có thể" là sự việc có khả năng xảy ra nhưng không chắc chắn',
            '"Không thể" là sự việc không bao giờ xảy ra',
          ],
          note: 'Mẹo: khi gặp một sự việc, con hãy tự hỏi "việc này có luôn đúng không, có khi nào xảy ra không, hay hoàn toàn không thể xảy ra?"',
        },
        {
          title: 'Nhiều khả năng trong trò chơi',
          formulas: ['\\text{Tung đồng xu} \\to \\text{có thể ra mặt ngửa, có thể ra mặt sấp}'],
          legend: ['Trong một số trò chơi, có nhiều kết quả có thể xảy ra', 'Ta không thể biết chắc kết quả trước khi thực hiện'],
          note: 'Mẹo: khi gieo một con xúc xắc 6 mặt, mỗi lần gieo có thể ra 1 trong 6 số từ 1 đến 6 — đây đều là các khả năng "có thể" xảy ra.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — nhieu_kha_nang_baigiang.mp4' },
    quiz: [
      { question: 'Sự việc "Mặt Trời mọc ở hướng Đông mỗi sáng" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
      { question: 'Sự việc "Ngày mai trời sẽ có nắng" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 1 },
      { question: 'Sự việc "Con mèo biết nói tiếng người" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 2 },
      { question: 'Khi tung một đồng xu, kết quả có thể là gì?', options: ['Chỉ ra mặt ngửa', 'Chỉ ra mặt sấp', 'Không ra mặt nào', 'Ra mặt ngửa hoặc mặt sấp'], correctIndex: 3 },
      { question: 'Sự việc "Một năm có 12 tháng" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Cho biết sự việc sau thuộc loại khả năng nào: "Hôm nay là thứ Hai thì ngày mai là thứ Ba."',
        solution: ['Đây là sự việc chắc chắn xảy ra, vì các ngày trong tuần luôn nối tiếp nhau theo đúng thứ tự.'],
      },
      {
        prompt: 'Cho biết sự việc sau thuộc loại khả năng nào: "Chiều nay lớp em sẽ có 1 bạn nghỉ học."',
        solution: ['Đây là sự việc có thể xảy ra (không chắc chắn có bạn nghỉ, cũng không chắc chắn không có bạn nào nghỉ).'],
      },
      {
        prompt: 'Cho biết sự việc sau thuộc loại khả năng nào: "Con cá sống được trên cạn suốt nhiều ngày mà không cần nước."',
        solution: ['Đây là sự việc không thể xảy ra, vì cá cần sống trong nước để thở bằng mang.'],
      },
      {
        prompt: 'Khi gieo một con xúc xắc 6 mặt (đánh số từ 1 đến 6), kết quả thu được là gì?',
        solution: ['Kết quả có thể là một trong các số từ 1 đến 6, đây đều là các khả năng có thể xảy ra.'],
      },
      {
        prompt: 'Nêu một sự việc mà con cho là "chắc chắn" xảy ra trong cuộc sống hằng ngày.',
        solution: ['Ví dụ: mặt trời mọc vào buổi sáng, một tuần có 7 ngày (học sinh có thể nêu ví dụ khác hợp lý).'],
      },
    ],
    flashcards: [
      { front: '"Chắc chắn" nghĩa là gì?', back: 'Sự việc luôn luôn xảy ra đúng như vậy' },
      { front: '"Có thể" nghĩa là gì?', back: 'Sự việc có khả năng xảy ra nhưng không chắc chắn' },
      { front: '"Không thể" nghĩa là gì?', back: 'Sự việc không bao giờ xảy ra' },
      { front: 'Mặt Trời mọc ở hướng Tây', back: 'Không thể' },
      { front: 'Ngày mai trời có thể mưa hoặc nắng', back: 'Có thể' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Sự việc "Một tuần có 7 ngày" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        { question: 'Sự việc "Đội bóng lớp em sẽ thắng trận đấu tuần sau" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 1 },
        { question: 'Sự việc "Một con voi bay lên trời như chim" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 2 },
        {
          question: 'Khi rút 1 lá bài trong bộ bài có 4 màu (Cơ, Rô, Chuồn, Bích), kết quả rút được thuộc loại khả năng nào?',
          options: ['Chắc chắn là Cơ', 'Không thể xảy ra', 'Chắc chắn là Bích', 'Có thể là 1 trong 4 màu'],
          correctIndex: 3,
        },
        { question: 'Sự việc "Mùa đông trời sẽ lạnh hơn mùa hè ở miền Bắc Việt Nam" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        { question: 'Sự việc "Ngày mai bạn Lan sẽ được điểm 10 môn Toán" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 1 },
        { question: 'Sự việc "Một quả bóng bàn nặng bằng một quả tạ 10kg" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 2 },
        {
          question: 'Trong hộp có 5 viên bi đỏ và 5 viên bi xanh. Khi lấy ngẫu nhiên 1 viên, kết quả thuộc loại khả năng nào?',
          options: ['Chắc chắn lấy được bi đỏ', 'Chắc chắn lấy được bi xanh', 'Không thể lấy được bi nào', 'Có thể lấy được bi đỏ hoặc bi xanh'],
          correctIndex: 3,
        },
        { question: 'Sự việc "Nước sẽ chảy từ chỗ cao xuống chỗ thấp" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        { question: 'Sự việc "Bạn Nam sẽ đến lớp muộn vào ngày mai" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 1 },
        { question: 'Sự việc "Một chiếc lá cây tự nhiên biết đọc sách" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 2 },
        {
          question: 'Trong hộp chỉ có toàn bi đỏ (không có màu nào khác). Khi lấy ngẫu nhiên 1 viên, kết quả là gì?',
          options: ['Có thể lấy được bi xanh', 'Không thể lấy được viên nào', 'Không xác định được', 'Chắc chắn lấy được bi đỏ'],
          correctIndex: 3,
        },
        { question: 'Sự việc "Một năm có 4 mùa (xuân, hạ, thu, đông) ở miền Bắc Việt Nam" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'], correctIndex: 0 },
        {
          question: 'Sự việc "Lớp em sẽ có ít nhất 1 bạn đạt điểm giỏi trong bài kiểm tra tới" thuộc loại khả năng nào?',
          options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Sự việc "Một chiếc ô tô tự bay lên khỏi mặt đất mà không cần máy móc hỗ trợ" thuộc loại khả năng nào?',
          options: ['Chắc chắn', 'Có thể', 'Không thể', 'Không xác định'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Cho ba sự việc sau: (1) "Mặt Trời mọc ở hướng Đông mỗi sáng", (2) "Ngày mai trời sẽ có mưa", (3) "Con chó tự nhiên biết nói tiếng người". Hãy cho biết mỗi sự việc thuộc loại khả năng nào: chắc chắn, có thể, hay không thể.',
          solution: [
            '(1) Chắc chắn, vì Mặt Trời luôn mọc ở hướng Đông.',
            '(2) Có thể, vì trời có thể mưa hoặc không mưa, không chắc chắn trước.',
            '(3) Không thể, vì chó không có khả năng nói tiếng người.',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Trong một hộp có 6 viên bi, gồm 4 viên bi vàng và 2 viên bi tím (không có màu nào khác). Bạn An lấy ngẫu nhiên 1 viên bi từ hộp. Hỏi: (a) có thể xảy ra việc An lấy được bi đỏ không? (b) việc An lấy được bi vàng hoặc bi tím có chắc chắn xảy ra không? Vì sao?',
          solution: [
            '(a) Không thể, vì trong hộp không có viên bi màu đỏ nào.',
            '(b) Chắc chắn xảy ra, vì hộp chỉ có bi vàng và bi tím, nên viên bi lấy ra chắc chắn là một trong hai màu đó.',
          ],
        },
      ],
    },
  },

  'l2-luyen-tap-tong-hop': {
    title: 'Luyện tập tổng hợp Toán 2',
    theory: {
      cards: [
        {
          title: 'Ôn tập số và phép tính trong phạm vi 1000',
          formulas: ['456 + 238 = 694', '702 - 345 = 357', '6 \\times 7 = 42', '48 : 6 = 8'],
          legend: ['Ôn lại cách cộng, trừ có nhớ trong phạm vi 100 và 1000', 'Ôn lại bảng nhân, bảng chia 2, 3, 4, 5'],
          note: 'Mẹo: trước khi thi, con nên ôn lại các bảng nhân chia và luyện đặt tính cộng trừ có nhớ cho thật thành thạo.',
        },
        {
          title: 'Ôn tập hình học, đo lường, thống kê',
          formulas: ['1m = 100cm', '3kg + 2kg = 5kg', '\\text{Biểu đồ tranh: đếm số kí hiệu ở mỗi hàng}'],
          legend: ['Ôn lại đơn vị đo độ dài (m, dm, cm), khối lượng (kg)', 'Ôn lại cách đọc biểu đồ tranh và các khả năng chắc chắn, có thể, không thể'],
          note: 'Mẹo: khi làm bài tổng hợp, con hãy đọc kỹ đề để biết bài thuộc dạng nào (tính toán, hình học, đo lường hay thống kê) rồi mới làm.',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — luyen_tap_tong_hop_toan_2_baigiang.mp4' },
    quiz: [
      { question: '6 x 8 = ?', options: ['48', '42', '54', '40'], correctIndex: 0 },
      { question: '45 : 5 = ?', options: ['8', '9', '7', '10'], correctIndex: 1 },
      { question: 'Một hình chữ nhật có mấy góc vuông?', options: ['2', '3', '4', '1'], correctIndex: 2 },
      { question: 'Đổi 3m thành cm.', options: ['30cm', '3000cm', '350cm', '300cm'], correctIndex: 3 },
      { question: '384 + 256 = ?', options: ['640', '630', '650', '639'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Đặt tính rồi tính: 567 + 285.',
        solution: ['$7+5=12$, viết 2 nhớ 1.', '$6+8+1=15$, viết 5 nhớ 1.', '$5+2+1=8$.', '$567+285=852$'],
      },
      { prompt: 'Có 54 cái bánh chia đều vào 6 hộp. Hỏi mỗi hộp có mấy cái bánh?', solution: ['$54:6=9$', 'Mỗi hộp có 9 cái bánh.'] },
      {
        prompt: 'Một sợi dây dài 8m, cắt bớt 250cm. Hỏi đoạn dây còn lại dài bao nhiêu xăng-ti-mét?',
        solution: ['$8m=800cm$', '$800-250=550$', 'Đoạn dây còn lại dài 550cm.'],
      },
      {
        prompt: 'Kiểm đếm sở thích của lớp: 8 bạn thích vẽ, 6 bạn thích hát, 5 bạn thích múa. Hỏi lớp có tất cả bao nhiêu bạn được hỏi, và hoạt động nào được nhiều bạn thích nhất?',
        solution: ['$8+6+5=19$', 'Có tất cả 19 bạn được hỏi.', 'Vẽ được nhiều bạn thích nhất (8 bạn).'],
      },
      {
        prompt: 'Cho biết sự việc "Một hộp chỉ có bi xanh, khi lấy ngẫu nhiên 1 viên thì lấy được bi xanh" thuộc loại khả năng nào?',
        solution: ['Đây là sự việc chắc chắn xảy ra, vì trong hộp chỉ có bi xanh, không có màu nào khác.'],
      },
    ],
    flashcards: [
      { front: '7 x 9', back: '63' },
      { front: '81 : 9', back: '9' },
      { front: '1m = ? cm', back: '100cm' },
      { front: 'Hình có 4 cạnh, 4 góc vuông', back: 'Hình chữ nhật' },
      { front: '"Chắc chắn" nghĩa là gì?', back: 'Sự việc luôn luôn xảy ra đúng như vậy' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '278 + 345 = ?', options: ['623', '613', '633', '624'], correctIndex: 0 },
        { question: '624 - 358 = ?', options: ['276', '266', '256', '267'], correctIndex: 1 },
        { question: '7 x 6 = ?', options: ['36', '48', '42', '40'], correctIndex: 2 },
        { question: '56 : 7 = ?', options: ['6', '7', '9', '8'], correctIndex: 3 },
        { question: 'Hình tứ giác có mấy cạnh?', options: ['4', '3', '5', '6'], correctIndex: 0 },
        { question: 'Đổi 4m thành cm.', options: ['40cm', '400cm', '4000cm', '450cm'], correctIndex: 1 },
        { question: 'Một bao gạo nặng 35kg, dùng hết 12kg. Hỏi còn lại bao nhiêu ki-lô-gam?', options: ['22kg', '24kg', '23kg', '25kg'], correctIndex: 2 },
        { question: 'Kim giờ chỉ số 5, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', options: ['4 giờ', '6 giờ', '7 giờ', '5 giờ'], correctIndex: 3 },
        { question: 'Một biểu đồ tranh có hàng "xoài" vẽ 7 hình, hàng "ổi" vẽ 9 hình. Hỏi ổi nhiều hơn xoài bao nhiêu?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Sự việc "Mặt Trời mọc ở hướng Tây" thuộc loại khả năng nào?', options: ['Chắc chắn', 'Không thể', 'Có thể', 'Không xác định'], correctIndex: 1 },
        { question: 'Một cửa hàng có 425 quyển vở, bán được 168 quyển. Hỏi cửa hàng còn lại bao nhiêu quyển vở?', options: ['247', '267', '257', '256'], correctIndex: 2 },
        { question: 'Mỗi lớp có 5 tổ, mỗi tổ 8 bạn. Hỏi lớp đó có tất cả bao nhiêu bạn?', options: ['35', '45', '48', '40'], correctIndex: 3 },
        { question: 'Một sợi dây dài 6m, đổi ra xăng-ti-mét.', options: ['600cm', '60cm', '6000cm', '650cm'], correctIndex: 0 },
        { question: 'Có 63 viên bi chia đều cho 9 bạn. Hỏi mỗi bạn được mấy viên bi?', options: ['6', '7', '8', '9'], correctIndex: 1 },
        {
          question: 'Trong hộp có 5 viên bi đỏ và 5 viên bi vàng (không có màu khác). Khi lấy ngẫu nhiên 1 viên, kết quả thuộc loại khả năng nào?',
          options: ['Chắc chắn lấy được bi đỏ', 'Không thể lấy được viên nào', 'Có thể lấy được bi đỏ hoặc bi vàng', 'Chắc chắn lấy được bi vàng'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 486 + 327, sau đó cho biết kết quả có phải là số có 3 chữ số không.',
          solution: ['$6+7=13$, viết 3 nhớ 1.', '$8+2+1=11$, viết 1 nhớ 1.', '$4+3+1=8$.', '$486+327=813$', '813 là số có 3 chữ số.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một trường tiểu học có 480 học sinh, trong đó có 265 học sinh nữ. Nhà trường xếp toàn bộ học sinh nam vào các lớp, mỗi lớp 5 bạn. Hỏi nhà trường xếp được bao nhiêu lớp học sinh nam?',
          solution: ['$480-265=215$ (số học sinh nam)', '$215:5=43$', 'Nhà trường xếp được 43 lớp học sinh nam.'],
        },
      ],
    },
  },
}
