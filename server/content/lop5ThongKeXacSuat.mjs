import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP5_THONG_KE_XAC_SUAT = {
  'l5-bieu-do-hinh-quat': {
    title: 'Biểu đồ hình quạt — đọc và phân tích số liệu',
    theory: {
      cards: [
        {
          title: 'Biểu đồ hình quạt là gì?',
          formulas: ['\\text{Cả hình tròn} = 100\\%'],
          legend: [
            'Biểu đồ hình quạt dùng một hình tròn chia thành các hình quạt (miếng) để biểu diễn tỉ số phần trăm của từng phần so với tổng thể',
            'Diện tích mỗi hình quạt tỉ lệ với tỉ số phần trăm mà nó biểu diễn',
            'Tổng tỉ số phần trăm của tất cả các hình quạt trong một biểu đồ luôn bằng 100%',
          ],
          note: 'Mẹo: khi đọc biểu đồ hình quạt, hãy nhìn số phần trăm ghi trên mỗi hình quạt trước, sau đó mới so sánh diện tích các miếng để kiểm tra tính hợp lí.',
        },
        {
          title: 'Cách đọc và tính số liệu từ biểu đồ hình quạt',
          formulas: [
            '\\text{Số lượng của một phần} = \\text{Tổng số}\\times\\%:100',
          ],
          legend: [
            'Muốn tìm số lượng thực tế ứng với một phần trăm trên biểu đồ, ta lấy tổng số nhân với tỉ số phần trăm đó rồi chia cho 100',
            'Muốn so sánh hai phần, ta so sánh trực tiếp tỉ số phần trăm ghi trên biểu đồ',
          ],
          note: 'Mẹo: trước khi tính toán, hãy kiểm tra tổng các tỉ số phần trăm trên biểu đồ có bằng 100% không — nếu chưa, có thể còn một phần chưa được ghi rõ số liệu.',
        },
      ],
    },
    video: { caption: '00:00 / 09:40 — bieu_do_hinh_quat_baigiang.mp4' },
    quiz: [
      {
        question: 'Biểu đồ hình quạt biểu diễn số liệu bằng cách nào?',
        options: ['Bằng các đoạn thẳng', 'Bằng các hình quạt trong một hình tròn', 'Bằng các cột', 'Bằng các chấm điểm'],
        correctIndex: 1,
      },
      {
        question: 'Tổng tỉ số phần trăm của tất cả các hình quạt trong một biểu đồ hình quạt luôn bằng bao nhiêu?',
        options: ['50%', '100%', '10%', 'Tuỳ theo biểu đồ'],
        correctIndex: 1,
      },
      {
        question: 'Một biểu đồ hình quạt về sở thích môn thể thao của 200 học sinh có phần "Bóng đá" chiếm 45%. Hỏi có bao nhiêu học sinh thích bóng đá?',
        options: ['45', '90', '9', '900'],
        correctIndex: 1,
      },
      {
        question: 'Biểu đồ hình quạt về xếp loại học lực của một lớp có: Giỏi 30%, Khá 50%, Trung bình còn lại. Tỉ số phần trăm học sinh Trung bình là bao nhiêu?',
        options: ['10%', '15%', '20%', '25%'],
        correctIndex: 2,
      },
      {
        question: 'Trong biểu đồ hình quạt, hình quạt có diện tích lớn hơn thì biểu diễn tỉ số phần trăm:',
        options: ['Nhỏ hơn', 'Lớn hơn', 'Bằng nhau', 'Không liên quan'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Một biểu đồ hình quạt biểu diễn loại sách yêu thích của 300 học sinh: Truyện tranh 40%, Sách khoa học 25%, Sách khác 35%. Tính số học sinh thích mỗi loại sách.',
        solution: [
          'Truyện tranh: $300\\times40:100=120$ học sinh',
          'Sách khoa học: $300\\times25:100=75$ học sinh',
          'Sách khác: $300\\times35:100=105$ học sinh',
        ],
      },
      {
        prompt: 'Biểu đồ hình quạt về phương tiện đến trường của 250 học sinh có: Xe đạp 20%, Đi bộ 32%, Xe đưa đón chiếm phần còn lại. Tính tỉ số phần trăm và số học sinh đi xe đưa đón.',
        solution: [
          'Tỉ số phần trăm đi xe đưa đón: $100\\%-20\\%-32\\%=48\\%$',
          'Số học sinh đi xe đưa đón: $250\\times48:100=120$ học sinh',
        ],
      },
      {
        prompt: 'Một biểu đồ hình quạt biểu diễn kết quả kiểm tra của 40 học sinh gồm 3 phần: Giỏi, Khá, Trung bình. Biết Giỏi chiếm 25%, Khá chiếm 50%. Hỏi có bao nhiêu học sinh xếp loại Trung bình?',
        solution: [
          'Tỉ số phần trăm Trung bình: $100\\%-25\\%-50\\%=25\\%$',
          'Số học sinh Trung bình: $40\\times25:100=10$ học sinh',
        ],
      },
      {
        prompt: 'Biểu đồ hình quạt cho biết cơ cấu cây trồng của một trang trại 500ha: Lúa 60%, Rau màu 15%, Cây ăn quả còn lại. Tính diện tích trồng cây ăn quả.',
        solution: [
          'Tỉ số phần trăm cây ăn quả: $100\\%-60\\%-15\\%=25\\%$',
          'Diện tích cây ăn quả: $500\\times25:100=125$ha',
        ],
      },
      {
        prompt: 'Một biểu đồ hình quạt về màu sắc yêu thích của 120 học sinh có: Xanh 35%, Đỏ 25%, Vàng 20%, còn lại là các màu khác. Tính số học sinh thích các màu khác.',
        solution: [
          'Tỉ số phần trăm màu khác: $100\\%-35\\%-25\\%-20\\%=20\\%$',
          'Số học sinh thích màu khác: $120\\times20:100=24$ học sinh',
        ],
      },
    ],
    flashcards: [
      { front: 'Biểu đồ hình quạt dùng hình gì để biểu diễn số liệu?', back: 'Hình tròn, chia thành các hình quạt' },
      { front: 'Tổng tỉ số phần trăm trên một biểu đồ hình quạt bằng bao nhiêu?', back: '100%' },
      { front: 'Muốn tìm số lượng thực tế từ tỉ số phần trăm trên biểu đồ, ta làm gì?', back: 'Lấy tổng số nhân với tỉ số phần trăm rồi chia cho 100' },
      { front: 'Hình quạt có diện tích lớn hơn biểu diễn điều gì?', back: 'Tỉ số phần trăm lớn hơn' },
      { front: 'Nếu biểu đồ có 2 phần biết là 30% và 45%, phần còn lại chiếm bao nhiêu %?', back: '25%' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Trong biểu đồ hình quạt, đại lượng nào được biểu diễn bằng diện tích của mỗi hình quạt?',
          options: ['Tỉ số phần trăm của phần đó so với tổng thể', 'Số đo góc bất kỳ', 'Chu vi hình tròn', 'Bán kính hình tròn'],
          correctIndex: 0,
        },
        {
          question: 'Một biểu đồ hình quạt về 400 học sinh có phần "Thích bơi lội" chiếm 30%. Số học sinh thích bơi lội là bao nhiêu?',
          options: ['100', '120', '140', '160'],
          correctIndex: 1,
        },
        {
          question: 'Một biểu đồ hình quạt có 3 phần: 20%, 35%, và phần còn lại. Tỉ số phần trăm phần còn lại là bao nhiêu?',
          options: ['35%', '40%', '45%', '50%'],
          correctIndex: 2,
        },
        {
          question: 'Biểu đồ hình quạt về 600 sản phẩm của một xưởng: Loại A 50%, Loại B 30%, Loại C còn lại. Số sản phẩm loại C là bao nhiêu?',
          options: ['60', '90', '100', '120'],
          correctIndex: 3,
        },
        {
          question: 'Một biểu đồ hình quạt về 80 con vật nuôi trong trại: Gà 50%, Vịt 25%, Ngan còn lại. Số ngan là bao nhiêu con?',
          options: ['20', '25', '30', '35'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ hình quạt về ngân sách một gia đình gồm 10 000 000 đồng: Ăn uống 40%, Học tập 25%, còn lại tiết kiệm. Số tiền tiết kiệm là bao nhiêu?',
          options: ['3 000 000 đồng', '3 500 000 đồng', '4 000 000 đồng', '4 500 000 đồng'],
          correctIndex: 1,
        },
        {
          question: 'Biểu đồ hình quạt về 500 học sinh: Thích Toán 45%, Thích Văn 30%, còn lại thích môn khác. Số học sinh thích môn khác là bao nhiêu?',
          options: ['100', '115', '125', '135'],
          correctIndex: 2,
        },
        {
          question: 'Biểu đồ hình quạt về cơ cấu vật nuôi của một trại 1000 con: Gà 60%, Vịt 25%, Ngan còn lại. Số ngan là bao nhiêu con?',
          options: ['100', '120', '140', '150'],
          correctIndex: 3,
        },
        {
          question: 'Trên một biểu đồ hình quạt đầy đủ (biểu diễn hết tổng thể), tổng các tỉ số phần trăm của tất cả các phần bằng bao nhiêu?',
          options: ['100%', '90%', '50%', '10%'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ hình quạt về 240 cây trồng: Cây ăn quả 25%, Cây lấy gỗ 45%, còn lại là cây cảnh. Số cây cảnh là bao nhiêu?',
          options: ['60', '72', '84', '96'],
          correctIndex: 1,
        },
        {
          question: 'Một biểu đồ hình quạt về sở thích đọc sách của 90 học sinh: Truyện 40%, Khoa học 20%, còn lại là các loại khác. Số học sinh thích loại khác là bao nhiêu?',
          options: ['18', '27', '36', '45'],
          correctIndex: 2,
        },
        {
          question: 'Biểu đồ hình quạt về diện tích rừng 2000ha: Rừng thông 35%, Rừng keo 40%, còn lại là rừng hỗn giao. Diện tích rừng hỗn giao là bao nhiêu?',
          options: ['200ha', '350ha', '450ha', '500ha'],
          correctIndex: 3,
        },
        {
          question: 'Trong biểu đồ hình quạt, nếu một phần chiếm 100% thì phần đó biểu diễn điều gì?',
          options: ['Toàn bộ tổng thể', 'Một nửa tổng thể', 'Không có gì', 'Một phần nhỏ'],
          correctIndex: 0,
        },
        {
          question: 'Biểu đồ hình quạt về 350 công nhân: Nam 60%, Nữ chiếm phần còn lại. Số công nhân nữ là bao nhiêu?',
          options: ['100', '140', '180', '210'],
          correctIndex: 1,
        },
        {
          question: 'Biểu đồ hình quạt về kết quả bình chọn món ăn yêu thích của 160 người: Phở 35%, Bún chả 25%, còn lại là các món khác. Số người chọn món khác là bao nhiêu?',
          options: ['40', '56', '64', '72'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một biểu đồ hình quạt biểu diễn số học sinh tham gia các câu lạc bộ của trường (240 học sinh): Câu lạc bộ Âm nhạc 25%, Câu lạc bộ Thể thao 45%, còn lại là Câu lạc bộ Mỹ thuật. Tính số học sinh mỗi câu lạc bộ.',
          solution: [
            'Câu lạc bộ Âm nhạc: $240\\times25:100=60$ học sinh',
            'Câu lạc bộ Thể thao: $240\\times45:100=108$ học sinh',
            'Tỉ số phần trăm Câu lạc bộ Mỹ thuật: $100\\%-25\\%-45\\%=30\\%$, số học sinh: $240\\times30:100=72$ học sinh',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Biểu đồ hình quạt về nguồn thu nhập của một gia đình trong tháng (tổng thu nhập 15 triệu đồng) gồm: Lương 65%, Kinh doanh phụ 20%, còn lại từ nguồn khác. Tính số tiền thu nhập từ mỗi nguồn, và cho biết nguồn thu nào thấp nhất.',
          solution: [
            'Lương: $15\\,000\\,000\\times65:100=9\\,750\\,000$ đồng',
            'Kinh doanh phụ: $15\\,000\\,000\\times20:100=3\\,000\\,000$ đồng',
            'Tỉ số phần trăm nguồn khác: $100\\%-65\\%-20\\%=15\\%$, số tiền: $15\\,000\\,000\\times15:100=2\\,250\\,000$ đồng',
            'Nguồn thu thấp nhất là nguồn khác (2 250 000 đồng)',
          ],
        },
      ],
    },
  },

  'l5-so-trung-binh-cong-nang-cao': {
    title: 'Số trung bình cộng của nhiều số',
    theory: {
      cards: [
        {
          title: 'Số trung bình cộng của nhiều số',
          formulas: ['TBC = (a_1+a_2+\\cdots+a_n):n'],
          legend: [
            'Muốn tìm số trung bình cộng của nhiều số, ta tính tổng của các số đó rồi chia cho số các số hạng',
            '$n$: số các số hạng',
          ],
          note: 'Mẹo: luôn đếm chính xác số các số hạng trước khi chia — thiếu hoặc thừa một số hạng sẽ làm sai kết quả.',
        },
        {
          title: 'Tìm một số hạng khi biết số trung bình cộng',
          formulas: ['a_n = TBC\\times n - (a_1+a_2+\\cdots+a_{n-1})'],
          legend: [
            'Muốn tìm số hạng còn thiếu, ta lấy số trung bình cộng nhân với số các số hạng để được tổng tất cả các số hạng',
            'Sau đó lấy tổng đó trừ đi tổng các số hạng đã biết',
          ],
          note: 'Mẹo: đây là dạng toán ngược của tìm số trung bình cộng — hãy luôn tìm tổng tất cả các số hạng trước (TBC nhân số các số hạng), rồi mới trừ dần.',
        },
      ],
    },
    video: { caption: '00:00 / 10:10 — so_trung_binh_cong_nang_cao_baigiang.mp4' },
    quiz: [
      { question: 'Tìm số trung bình cộng của 12, 18, 24, 30.', options: ['18', '20', '21', '24'], correctIndex: 2 },
      {
        question: 'Trung bình cộng của ba số là 25. Biết hai số đầu là 20 và 22. Tìm số thứ ba.',
        options: ['30', '31', '32', '33'],
        correctIndex: 3,
      },
      {
        question: 'Một tổ có 5 bạn cân nặng lần lượt là 30kg, 32kg, 29kg, 31kg, 33kg. Tính cân nặng trung bình của tổ.',
        options: ['30kg', '30,5kg', '31kg', '32kg'],
        correctIndex: 2,
      },
      { question: 'Trung bình cộng của 4 số là 18. Tổng của 4 số đó là bao nhiêu?', options: ['64', '68', '72', '76'], correctIndex: 2 },
      {
        question: 'Trung bình cộng của hai số là 45. Biết một số là 50. Tìm số còn lại.',
        options: ['35', '38', '40', '42'],
        correctIndex: 2,
      },
    ],
    essays: [
      { prompt: 'Tìm số trung bình cộng của 15, 20, 25, 30, 35.', solution: ['Tổng: $15+20+25+30+35=125$', 'Trung bình cộng: $125:5=25$'] },
      {
        prompt: 'Điểm kiểm tra Toán của bạn An trong học kỳ là: 8, 9, 7, 10, 8, 9. Tính điểm trung bình cộng.',
        solution: ['Tổng điểm: $8+9+7+10+8+9=51$', 'Điểm trung bình cộng: $51:6=8,5$'],
      },
      {
        prompt: 'Trung bình cộng của 3 số là 40. Số thứ nhất là 35, số thứ hai là 42. Tìm số thứ ba.',
        solution: ['Tổng ba số: $40\\times3=120$', 'Số thứ ba: $120-35-42=43$'],
      },
      {
        prompt: 'Một đội bóng đá trong 5 trận ghi được số bàn thắng lần lượt là: 2, 1, 3, 0, 4. Tính trung bình mỗi trận đội ghi được bao nhiêu bàn thắng.',
        solution: ['Tổng số bàn thắng: $2+1+3+0+4=10$', 'Trung bình mỗi trận: $10:5=2$ bàn thắng'],
      },
      {
        prompt: 'Trung bình cộng tuổi của 4 anh em là 12 tuổi. Biết tuổi ba anh lớn là 15, 14, 13. Tìm tuổi em út.',
        solution: ['Tổng tuổi 4 anh em: $12\\times4=48$', 'Tuổi em út: $48-15-14-13=6$ tuổi'],
      },
    ],
    flashcards: [
      { front: 'Công thức tính số trung bình cộng của nhiều số', back: 'Tổng các số hạng chia cho số các số hạng' },
      { front: 'Trung bình cộng của 4 và 6', back: '5' },
      { front: 'Trung bình cộng của 10, 20, 30', back: '20' },
      { front: 'Muốn tìm một số hạng khi biết TBC và các số hạng còn lại, ta làm gì?', back: 'Lấy TBC nhân với số các số hạng rồi trừ đi tổng các số hạng đã biết' },
      { front: 'Trung bình cộng của 7, 7, 7, 7', back: '7' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tìm số trung bình cộng của 10, 20, 30, 40.', options: ['25', '20', '30', '35'], correctIndex: 0 },
        { question: 'Trung bình cộng của 5 số là 16. Tổng 5 số đó là bao nhiêu?', options: ['70', '80', '90', '60'], correctIndex: 1 },
        {
          question: 'Ba số có trung bình cộng là 27. Hai số đầu là 25 và 24. Tìm số thứ ba.',
          options: ['28', '30', '32', '34'],
          correctIndex: 2,
        },
        {
          question: 'Một cửa hàng bán được số kg gạo trong 4 ngày lần lượt là: 45kg, 50kg, 55kg, 60kg. Tính trung bình mỗi ngày bán được bao nhiêu ki-lô-gam gạo.',
          options: ['50kg', '51kg', '52kg', '52,5kg'],
          correctIndex: 3,
        },
        {
          question: 'Trung bình cộng của hai số là 60. Một số là 72. Tìm số còn lại.',
          options: ['48', '50', '52', '54'],
          correctIndex: 0,
        },
        { question: 'Tìm trung bình cộng của các số: 100, 200, 300, 400, 500.', options: ['250', '300', '350', '400'], correctIndex: 1 },
        {
          question: 'Trung bình cộng tuổi của 3 bạn là 11. Bạn thứ nhất 10 tuổi, bạn thứ hai 12 tuổi. Tuổi bạn thứ ba là bao nhiêu?',
          options: ['9', '10', '11', '12'],
          correctIndex: 2,
        },
        {
          question: 'Ba tổ có số học sinh lần lượt là 9, 10, 11 bạn. Trung bình mỗi tổ có bao nhiêu học sinh?',
          options: ['9', '9,5', '11', '10'],
          correctIndex: 3,
        },
        {
          question: 'Trung bình cộng của 4 số bằng 22. Ba số đầu là 20, 21, 23. Tìm số thứ tư.',
          options: ['24', '22', '20', '26'],
          correctIndex: 0,
        },
        {
          question: 'Một người đi xe đạp trong 3 giờ, mỗi giờ đi được số km lần lượt: 12km, 14km, 16km. Tính trung bình mỗi giờ người đó đi được bao nhiêu ki-lô-mét.',
          options: ['12km', '14km', '16km', '15km'],
          correctIndex: 1,
        },
        { question: 'Trung bình cộng của 6 số bằng 15. Tổng 6 số đó là bao nhiêu?', options: ['80', '85', '90', '95'], correctIndex: 2 },
        {
          question: 'Ba thửa ruộng thu hoạch được lần lượt 320kg, 350kg, 380kg thóc. Trung bình mỗi thửa thu hoạch được bao nhiêu ki-lô-gam thóc?',
          options: ['320kg', '335kg', '340kg', '350kg'],
          correctIndex: 3,
        },
        {
          question: 'Số trung bình cộng của 5 số bằng 30. Biết 4 số đầu lần lượt là 28, 29, 31, 32. Tìm số thứ năm.',
          options: ['28', '30', '32', '34'],
          correctIndex: 0,
        },
        {
          question: 'Một tổ công nhân trong 4 tuần làm được lần lượt: 60 sản phẩm, 65 sản phẩm, 70 sản phẩm, 65 sản phẩm. Tính trung bình mỗi tuần tổ đó làm được bao nhiêu sản phẩm.',
          options: ['60', '65', '68', '70'],
          correctIndex: 1,
        },
        {
          question: 'Trung bình cộng của 3 số là 50. Biết số thứ ba bằng 45. Tổng của số thứ nhất và số thứ hai là bao nhiêu?',
          options: ['95', '100', '105', '110'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một cửa hàng bán vải trong 5 ngày, số mét vải bán được lần lượt là: 40m, 35m, 38m, 42m, 45m. Tính trung bình mỗi ngày cửa hàng bán được bao nhiêu mét vải.',
          solution: ['Tổng số mét vải: $40+35+38+42+45=200$m', 'Trung bình mỗi ngày: $200:5=40$m'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Trung bình cộng số cây ba lớp 5A, 5B, 5C trồng được là 45 cây/lớp. Biết lớp 5A trồng được 50 cây, lớp 5B trồng được 40 cây. Hỏi lớp 5C trồng được bao nhiêu cây, và lớp nào trồng được nhiều cây nhất?',
          solution: [
            'Tổng số cây ba lớp trồng được: $45\\times3=135$ cây',
            'Số cây lớp 5C trồng được: $135-50-40=45$ cây',
            'So sánh: $50>45>40$, vậy lớp 5A trồng được nhiều cây nhất',
          ],
        },
      ],
    },
  },

  'l5-kha-nang-xay-ra-cua-bien-co': {
    title: 'Khả năng xảy ra của một biến cố, tỉ lệ phần trăm khả năng',
    theory: {
      cards: [
        {
          title: 'Các mức độ khả năng xảy ra của một biến cố',
          formulas: [
            '\\text{Chắc chắn xảy ra}',
            '\\text{Có thể xảy ra}',
            '\\text{Không thể xảy ra}',
          ],
          legend: [
            'Biến cố chắc chắn xảy ra: luôn luôn xảy ra, không có khả năng khác (ví dụ: mặt trời mọc ở hướng Đông)',
            'Biến cố có thể xảy ra: có thể xảy ra hoặc không, tuỳ tình huống (ví dụ: ngày mai trời mưa)',
            'Biến cố không thể xảy ra: không bao giờ xảy ra (ví dụ: gieo xúc xắc 6 mặt ra 7 chấm)',
          ],
          note: 'Mẹo: muốn xác định mức độ khả năng của một biến cố, hãy tự hỏi "việc này có luôn xảy ra không?", "có bao giờ xảy ra không?" để phân biệt ba mức độ.',
        },
        {
          title: 'Tỉ lệ phần trăm khả năng xảy ra',
          formulas: ['\\text{Tỉ lệ \\%} = (\\text{Số kết quả thuận lợi} : \\text{Tổng số kết quả})\\times100'],
          legend: [
            'Số kết quả thuận lợi: số trường hợp xảy ra đúng như biến cố mô tả',
            'Tổng số kết quả: tổng số trường hợp có thể xảy ra',
          ],
          note: 'Mẹo: đây chính là dạng toán tìm tỉ số phần trăm đã học — chỉ cần xác định đúng "số thuận lợi" và "tổng số" rồi áp dụng công thức tỉ số phần trăm.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — kha_nang_xay_ra_bien_co_baigiang.mp4' },
    quiz: [
      {
        question: 'Khi tung một đồng xu cân đối, khả năng xuất hiện mặt sấp là biến cố gì?',
        options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định được'],
        correctIndex: 2,
      },
      {
        question: 'Một hộp có 4 quả bóng đỏ và 6 quả bóng xanh. Tỉ lệ phần trăm khả năng lấy được quả bóng đỏ là bao nhiêu?',
        options: ['60%', '4%', '40%', '46%'],
        correctIndex: 2,
      },
      {
        question: 'Biến cố "Mặt trời mọc ở hướng Đông vào ngày mai" là biến cố gì?',
        options: ['Không thể xảy ra', 'Có thể xảy ra', 'Chắc chắn xảy ra', 'Không xác định'],
        correctIndex: 2,
      },
      {
        question: 'Biến cố "Một con gà đẻ ra trứng vịt" là biến cố gì?',
        options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định', 'Không thể xảy ra'],
        correctIndex: 3,
      },
      {
        question: 'Một túi có 5 viên bi trong đó có 2 viên bi vàng. Tỉ lệ phần trăm khả năng lấy được viên bi vàng là bao nhiêu?',
        options: ['20%', '25%', '40%', '50%'],
        correctIndex: 2,
      },
    ],
    essays: [
      {
        prompt: 'Một hộp có 10 tấm thẻ đánh số từ 1 đến 10. Tính tỉ lệ phần trăm khả năng rút được một tấm thẻ ghi số chẵn.',
        solution: ['Các số chẵn từ 1 đến 10 là: 2, 4, 6, 8, 10 (có 5 số)', 'Tỉ lệ phần trăm: $5:10\\times100=50\\%$'],
      },
      {
        prompt: 'Một túi kẹo có 6 viên kẹo cam và 4 viên kẹo dâu. Tính tỉ lệ phần trăm khả năng lấy ngẫu nhiên được một viên kẹo cam.',
        solution: ['Tổng số kẹo: $6+4=10$ viên', 'Tỉ lệ phần trăm: $6:10\\times100=60\\%$'],
      },
      {
        prompt: 'Trong hộp có 3 bi đỏ, 3 bi xanh, 4 bi vàng (tổng 10 bi). Tính tỉ lệ phần trăm khả năng lấy được bi xanh.',
        solution: ['Tỉ lệ phần trăm: $3:10\\times100=30\\%$'],
      },
      {
        prompt: 'Nêu một ví dụ về biến cố chắc chắn xảy ra và một ví dụ về biến cố không thể xảy ra.',
        solution: [
          'Ví dụ biến cố chắc chắn xảy ra: mặt trời mọc ở hướng Đông mỗi ngày',
          'Ví dụ biến cố không thể xảy ra: gieo một con xúc xắc 6 mặt (đánh số từ 1 đến 6) mà ra mặt có 7 chấm',
        ],
      },
      {
        prompt: 'Một lớp có 20 học sinh, trong đó có 12 học sinh nữ. Nếu chọn ngẫu nhiên 1 học sinh, tính tỉ lệ phần trăm khả năng chọn được học sinh nữ.',
        solution: ['Tỉ lệ phần trăm: $12:20\\times100=60\\%$'],
      },
    ],
    flashcards: [
      { front: 'Biến cố chắc chắn xảy ra là gì?', back: 'Biến cố luôn luôn xảy ra, không có khả năng khác' },
      { front: 'Biến cố không thể xảy ra là gì?', back: 'Biến cố không bao giờ xảy ra' },
      { front: 'Công thức tính tỉ lệ % khả năng xảy ra', back: '(Số kết quả thuận lợi : Tổng số kết quả) × 100' },
      { front: 'Hộp có 5 bi, trong đó 2 bi đỏ. Tỉ lệ % khả năng lấy được bi đỏ', back: '40%' },
      { front: 'Khi tung một đồng xu, có mấy khả năng xảy ra (mặt sấp/mặt ngửa)?', back: '2 khả năng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Biến cố "Gieo một con xúc xắc 6 mặt, ra mặt có số chấm từ 1 đến 6" là biến cố gì?',
          options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Biến cố "Bốc thăm trúng thưởng khi chỉ có 1 vé trong 100 vé" là biến cố gì?',
          options: ['Chắc chắn xảy ra', 'Có thể xảy ra', 'Không thể xảy ra', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Một hộp có 8 bi, trong đó có 2 bi đỏ. Tỉ lệ phần trăm khả năng lấy được bi đỏ là bao nhiêu (làm tròn)?',
          options: ['20%', '23%', '25%', '30%'],
          correctIndex: 2,
        },
        {
          question: 'Một lớp có 30 học sinh, 18 học sinh nam. Tỉ lệ phần trăm khả năng chọn ngẫu nhiên được một học sinh nam là bao nhiêu?',
          options: ['50%', '55%', '58%', '60%'],
          correctIndex: 3,
        },
        {
          question: 'Biến cố "Một hòn đá tự bay lên trời" là biến cố gì?',
          options: ['Không thể xảy ra', 'Chắc chắn xảy ra', 'Có thể xảy ra', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Một túi có 10 viên bi gồm 4 bi đỏ, 6 bi xanh. Tỉ lệ phần trăm khả năng lấy được bi xanh là bao nhiêu?',
          options: ['40%', '60%', '50%', '70%'],
          correctIndex: 1,
        },
        {
          question: 'Một hộp có 5 thẻ đánh số 1, 2, 3, 4, 5. Tỉ lệ phần trăm khả năng rút được thẻ ghi số lẻ là bao nhiêu?',
          options: ['40%', '50%', '60%', '80%'],
          correctIndex: 2,
        },
        {
          question: 'Biến cố "Ngày mai là thứ Bảy, biết hôm nay là thứ Sáu" là biến cố gì?',
          options: ['Không thể xảy ra', 'Có thể xảy ra', 'Không xác định', 'Chắc chắn xảy ra'],
          correctIndex: 3,
        },
        {
          question: 'Một hộp bút có 12 cây bút, trong đó có 3 cây bút đỏ. Tỉ lệ phần trăm khả năng lấy được bút đỏ là bao nhiêu?',
          options: ['25%', '30%', '20%', '35%'],
          correctIndex: 0,
        },
        {
          question: 'Gieo một con xúc xắc 6 mặt (đánh số từ 1 đến 6). Biến cố "ra mặt có số chấm là 7" là biến cố gì?',
          options: ['Chắc chắn xảy ra', 'Không thể xảy ra', 'Có thể xảy ra', 'Không xác định'],
          correctIndex: 1,
        },
        {
          question: 'Một túi có 20 viên bi, trong đó có 5 bi vàng. Tỉ lệ phần trăm khả năng lấy được bi vàng là bao nhiêu?',
          options: ['15%', '20%', '25%', '30%'],
          correctIndex: 2,
        },
        {
          question: 'Một hộp có 4 quả cầu đỏ và 4 quả cầu xanh. Tỉ lệ phần trăm khả năng lấy được quả cầu đỏ là bao nhiêu?',
          options: ['25%', '40%', '45%', '50%'],
          correctIndex: 3,
        },
        {
          question: 'Biến cố nào sau đây là biến cố chắc chắn xảy ra?',
          options: ['Mặt trời mọc ở hướng Đông', 'Gieo xúc xắc 6 mặt ra 7 chấm', 'Ngày mai trời sẽ mưa', 'Bốc thăm trúng giải nhất'],
          correctIndex: 0,
        },
        {
          question: 'Một lớp có 40 học sinh, trong đó có 22 học sinh thích môn Toán. Tỉ lệ phần trăm khả năng chọn ngẫu nhiên được một học sinh thích môn Toán là bao nhiêu?',
          options: ['50%', '55%', '60%', '65%'],
          correctIndex: 1,
        },
        {
          question: 'Một hộp có 25 tấm thẻ đánh số từ 1 đến 25. Tỉ lệ phần trăm khả năng rút được tấm thẻ có số chia hết cho 5 là bao nhiêu?',
          options: ['10%', '15%', '20%', '25%'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một hộp có 15 quả bóng, trong đó có 6 quả bóng màu đỏ, còn lại là bóng màu xanh. Tính tỉ lệ phần trăm khả năng lấy được quả bóng màu xanh.',
          solution: ['Số bóng xanh: $15-6=9$ quả', 'Tỉ lệ phần trăm: $9:15\\times100=60\\%$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một lớp học có 40 học sinh, trong đó 24 học sinh biết bơi. Nếu chọn ngẫu nhiên 1 học sinh để tham gia đội tuyển bơi lội, tính tỉ lệ phần trăm khả năng chọn được học sinh biết bơi. Sau đó lớp có thêm 10 học sinh mới chuyển đến, tất cả đều biết bơi. Tính lại tỉ lệ phần trăm khả năng đó.',
          solution: [
            'Tỉ lệ phần trăm ban đầu: $24:40\\times100=60\\%$',
            'Sau khi thêm học sinh: tổng số học sinh là $40+10=50$, số học sinh biết bơi là $24+10=34$',
            'Tỉ lệ phần trăm mới: $34:50\\times100=68\\%$',
          ],
        },
      ],
    },
  },

  'l5-luyen-tap-tong-hop': {
    title: 'Luyện tập tổng hợp Toán 5, chuẩn bị vào lớp 6',
    theory: {
      cards: [
        {
          title: 'Tổng hợp các dạng toán trọng tâm lớp 5',
          formulas: [
            '\\text{Phân số, số thập phân, tỉ số phần trăm}',
            '\\text{Diện tích, thể tích hình học}',
            '\\text{Trung bình cộng, khả năng xảy ra}',
          ],
          legend: [
            'Ôn lại các phép tính với phân số, số thập phân và các bài toán về tỉ số phần trăm',
            'Ôn lại công thức tính diện tích, chu vi các hình phẳng và thể tích các hình khối đã học',
            'Ôn lại cách tìm số trung bình cộng và cách tính tỉ lệ phần trăm khả năng xảy ra của một biến cố',
          ],
          note: 'Mẹo: khi ôn tập tổng hợp, hãy lập một danh sách các công thức đã học rồi luyện giải xen kẽ nhiều dạng bài để không bị nhầm lẫn.',
        },
        {
          title: 'Toán chuyển động đều — kiến thức nối vào lớp 6',
          formulas: ['s = v\\times t', 'v = s:t', 't = s:v'],
          legend: [
            '$s$: quãng đường, $v$: vận tốc, $t$: thời gian',
            'Ba đại lượng trên luôn đi cùng nhau trong các bài toán chuyển động đều',
          ],
          note: 'Mẹo: trước khi tính, phải đưa vận tốc và thời gian về cùng một đơn vị thời gian (ví dụ cùng theo giờ) thì mới áp dụng công thức đúng được.',
        },
      ],
    },
    video: { caption: '00:00 / 12:00 — luyen_tap_tong_hop_toan5_baigiang.mp4' },
    quiz: [
      { question: '$\\dfrac{3}{4}$ viết dưới dạng số thập phân là bao nhiêu?', options: ['0,34', '0,75', '0,43', '7,5'], correctIndex: 1 },
      { question: 'Tìm 20% của 350.', options: ['60', '65', '70', '75'], correctIndex: 2 },
      {
        question: 'Một hình thang có hai đáy 10cm và 14cm, chiều cao 6cm. Diện tích hình thang đó là bao nhiêu?',
        options: ['60cm²', '68cm²', '72cm²', '84cm²'],
        correctIndex: 2,
      },
      {
        question: 'Một ô tô đi với vận tốc 45km/giờ trong 2 giờ. Quãng đường ô tô đi được là bao nhiêu?',
        options: ['80km', '85km', '90km', '95km'],
        correctIndex: 2,
      },
      { question: 'Tìm trung bình cộng của 12, 16, 20.', options: ['14', '15', '16', '18'], correctIndex: 2 },
    ],
    essays: [
      {
        prompt: 'Một người đi bộ với vận tốc 5km/giờ trong 1,5 giờ. Tính quãng đường người đó đi được.',
        solution: ['$s=v\\times t=5\\times1,5=7,5$km'],
      },
      { prompt: 'Một hình lập phương có cạnh 6cm. Tính thể tích hình lập phương đó.', solution: ['$V=6\\times6\\times6=216$cm³'] },
      {
        prompt: 'Một cửa hàng có 250kg gạo, đã bán 40% số gạo. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?',
        solution: ['Số gạo đã bán: $250\\times40:100=100$kg', 'Số gạo còn lại: $250-100=150$kg'],
      },
      { prompt: 'Một ca nô đi quãng đường 90km hết 3 giờ. Tính vận tốc của ca nô.', solution: ['$v=s:t=90:3=30$km/giờ'] },
      {
        prompt: 'Điểm kiểm tra cuối năm môn Toán của 5 bạn là: 9, 8, 10, 7, 9 (điểm). Tính điểm trung bình cộng của 5 bạn.',
        solution: ['Tổng điểm: $9+8+10+7+9=43$', 'Điểm trung bình cộng: $43:5=8,6$'],
      },
    ],
    flashcards: [
      { front: 'Công thức tính quãng đường khi biết vận tốc và thời gian', back: '$s=v\\times t$' },
      { front: 'Công thức tính vận tốc', back: '$v=s:t$' },
      { front: 'Công thức tính diện tích hình thang', back: '$S=\\dfrac{(a+b)\\times h}{2}$' },
      { front: 'Công thức tính thể tích hình lập phương', back: '$V=a\\times a\\times a$' },
      { front: 'Muốn tìm số trung bình cộng của nhiều số, ta làm gì?', back: 'Lấy tổng các số hạng chia cho số các số hạng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '$\\dfrac{7}{10}$ viết dưới dạng số thập phân là bao nhiêu?', options: ['0,7', '7,0', '0,07', '70'], correctIndex: 0 },
        { question: 'Tìm 15% của 200.', options: ['20', '30', '35', '40'], correctIndex: 1 },
        {
          question: 'Một hình thang có đáy lớn 18cm, đáy nhỏ 12cm, chiều cao 8cm. Diện tích hình thang đó là bao nhiêu?',
          options: ['100cm²', '110cm²', '120cm²', '130cm²'],
          correctIndex: 2,
        },
        {
          question: 'Một xe máy đi với vận tốc 40km/giờ trong 3 giờ. Quãng đường xe máy đi được là bao nhiêu?',
          options: ['100km', '110km', '115km', '120km'],
          correctIndex: 3,
        },
        { question: 'Tìm trung bình cộng của 15, 20, 25.', options: ['20', '22', '24', '26'], correctIndex: 0 },
        {
          question: 'Một hình lập phương có cạnh 5cm. Thể tích hình lập phương đó là bao nhiêu?',
          options: ['100cm³', '125cm³', '150cm³', '75cm³'],
          correctIndex: 1,
        },
        {
          question: 'Một ô tô đi quãng đường 180km với vận tốc 60km/giờ. Thời gian ô tô đi hết quãng đường đó là bao nhiêu?',
          options: ['2 giờ', '2,5 giờ', '3 giờ', '3,5 giờ'],
          correctIndex: 2,
        },
        { question: '25% của 480 là bao nhiêu?', options: ['100', '110', '115', '120'], correctIndex: 3 },
        {
          question: 'Một hình tròn có bán kính 5cm. Diện tích hình tròn đó là bao nhiêu (lấy $\\pi\\approx3,14$)?',
          options: ['78,5cm²', '75cm²', '80cm²', '62,8cm²'],
          correctIndex: 0,
        },
        {
          question: 'Một bể nước hình hộp chữ nhật có chiều dài 2m, chiều rộng 1m, chiều cao 1,5m. Thể tích bể đó là bao nhiêu?',
          options: ['2,5m³', '3m³', '3,5m³', '4m³'],
          correctIndex: 1,
        },
        {
          question: 'Một người đi xe đạp trong 2 giờ đi được 24km. Tính vận tốc của người đó.',
          options: ['10km/giờ', '11km/giờ', '12km/giờ', '14km/giờ'],
          correctIndex: 2,
        },
        { question: 'Trung bình cộng của 4 số là 25. Tổng 4 số đó là bao nhiêu?', options: ['80', '90', '95', '100'], correctIndex: 3 },
        {
          question: 'Một thửa ruộng hình thang có đáy lớn 20m, đáy nhỏ 16m, chiều cao 10m. Diện tích thửa ruộng đó là bao nhiêu?',
          options: ['180m²', '160m²', '170m²', '190m²'],
          correctIndex: 0,
        },
        {
          question: 'Một ca nô đi với vận tốc 25km/giờ trong 4 giờ. Quãng đường ca nô đi được là bao nhiêu?',
          options: ['90km', '100km', '110km', '120km'],
          correctIndex: 1,
        },
        {
          question: 'Một hộp có 10 viên bi, trong đó có 3 viên bi đỏ. Tỉ lệ phần trăm khả năng lấy được bi đỏ là bao nhiêu?',
          options: ['20%', '25%', '30%', '35%'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Một thửa ruộng hình thang có đáy lớn 26m, đáy nhỏ 14m, chiều cao 10m. Tính diện tích thửa ruộng đó. Biết cứ 10m² thu hoạch được 8kg thóc, hỏi cả thửa ruộng thu hoạch được bao nhiêu ki-lô-gam thóc?',
          solution: [
            'Diện tích thửa ruộng: $S=\\dfrac{(26+14)\\times10}{2}=200$m²',
            'Số thóc thu hoạch: $200:10\\times8=20\\times8=160$kg',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một ô tô đi từ A đến B với vận tốc 60km/giờ trong 2 giờ thì đến nơi. Lúc về, ô tô đi với vận tốc 40km/giờ. Tính thời gian ô tô đi từ B về A.',
          solution: ['Quãng đường AB: $s=60\\times2=120$km', 'Thời gian đi từ B về A: $t=120:40=3$ giờ'],
        },
      ],
    },
  },
}
