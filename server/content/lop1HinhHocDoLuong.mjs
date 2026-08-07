import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP1_HINH_HOC_DO_LUONG = {
  'l1-hinh-vuong-tron-tam-giac': {
    title: 'Nhận biết hình vuông, hình tròn, hình tam giác, hình chữ nhật',
    theory: {
      cards: [
        {
          title: 'Đặc điểm nhận biết các hình',
          formulas: [
            '\\text{Hình vuông: 4 cạnh bằng nhau}',
            '\\text{Hình chữ nhật: 2 cặp cạnh bằng nhau}',
            '\\text{Hình tam giác: 3 cạnh}',
            '\\text{Hình tròn: không có cạnh, không có góc}',
          ],
          legend: ['Cạnh là đường thẳng bao quanh hình', 'Đếm số cạnh giúp phân biệt các hình với nhau'],
          note: 'Mẹo: hình vuông và hình chữ nhật đều có 4 cạnh và 4 góc vuông — điểm khác là hình vuông có cả 4 cạnh bằng nhau, còn hình chữ nhật chỉ có 2 cặp cạnh bằng nhau.',
        },
        {
          title: 'Tìm hình trong đồ vật xung quanh',
          formulas: ['\\text{Bánh xe} \\to \\text{hình tròn}', '\\text{Viên gạch} \\to \\text{hình chữ nhật}', '\\text{Biển báo} \\to \\text{hình tam giác}'],
          legend: ['Nhiều đồ vật quen thuộc có dạng giống các hình đã học'],
          note: 'Mẹo: con hãy quan sát xung quanh và thử tìm 3 đồ vật có hình dạng giống hình vuông, hình tròn, hình tam giác nhé!',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — nhan_biet_hinh_baigiang.mp4' },
    quiz: [
      { question: 'Viên gạch lát nền thường có hình gì?', options: ['Hình chữ nhật', 'Hình tròn', 'Hình tam giác', 'Hình vuông'], correctIndex: 0 },
      { question: 'Bánh xe đạp có hình gì?', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
      { question: 'Hình nào có 3 cạnh?', options: ['Hình tam giác', 'Hình vuông', 'Hình tròn', 'Hình chữ nhật'], correctIndex: 0 },
      { question: 'Hình nào không có góc, không có cạnh?', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
      { question: 'Chiếc khăn mùi soa hình vuông có mấy cạnh?', options: ['4 cạnh', '3 cạnh', '2 cạnh', 'Không có cạnh'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Kể tên 2 đồ vật xung quanh con có hình tròn.', solution: ['Ví dụ: cái đĩa, bánh xe (học sinh có thể kể đồ vật khác tương tự).'] },
      { prompt: 'Hình vuông và hình chữ nhật giống nhau ở điểm gì?', solution: ['Cả hai đều có 4 cạnh và 4 góc vuông.'] },
      { prompt: 'Đếm số cạnh của hình tam giác.', solution: ['Hình tam giác có 3 cạnh.'] },
      { prompt: 'Biển báo giao thông hình tam giác thường có mấy cạnh, mấy góc?', solution: ['Có 3 cạnh và 3 góc.'] },
      { prompt: 'Vì sao nói hình tròn không có góc?', solution: ['Vì hình tròn được tạo bởi một đường cong khép kín, không có đoạn thẳng nào tạo thành góc.'] },
    ],
    flashcards: [
      { front: 'Hình vuông', back: 'Có 4 cạnh bằng nhau' },
      { front: 'Hình tròn', back: 'Không có cạnh, không có góc' },
      { front: 'Hình tam giác', back: 'Có 3 cạnh' },
      { front: 'Hình chữ nhật', back: 'Có 2 cặp cạnh bằng nhau' },
      { front: 'Bánh xe có hình gì?', back: 'Hình tròn' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình nào có 4 cạnh bằng nhau?', options: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
        { question: 'Quả bóng có hình gì?', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
        { question: 'Hình tam giác có mấy cạnh?', options: ['3', '4', '2', '0'], correctIndex: 0 },
        { question: 'Hình nào không có cạnh?', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
        { question: 'Cửa sổ hình chữ nhật có mấy cạnh?', options: ['4', '3', '2', '1'], correctIndex: 0 },
        { question: 'Hình vuông có mấy góc?', options: ['4', '3', '2', '0'], correctIndex: 0 },
        {
          question: 'Hình nào có 2 cặp cạnh bằng nhau (không phải cả 4 cạnh bằng nhau)?',
          options: ['Hình chữ nhật', 'Hình vuông', 'Hình tròn', 'Hình tam giác'],
          correctIndex: 0,
        },
        { question: 'Biển báo dừng xe hình tam giác có mấy góc?', options: ['3', '4', '2', '0'], correctIndex: 0 },
        { question: 'Trong các hình đã học, hình nào lăn được?', options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
        { question: 'Chiếc bánh chưng thường có hình gì?', options: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Không có hình nào'], correctIndex: 0 },
        { question: 'Viên xúc xắc có các mặt hình gì?', options: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 0 },
        {
          question: 'Hình nào có số cạnh ít nhất trong 3 hình: vuông, tam giác, chữ nhật?',
          options: ['Hình tam giác', 'Hình vuông', 'Hình chữ nhật', 'Bằng nhau cả'],
          correctIndex: 0,
        },
        {
          question: 'Một hình có 4 cạnh bằng nhau và 4 góc bằng nhau. Đó là hình gì?',
          options: ['Hình vuông', 'Hình chữ nhật', 'Hình tam giác', 'Hình tròn'],
          correctIndex: 0,
        },
        {
          question: 'Ghép 2 hình tam giác bằng nhau lại có thể tạo thành hình gì?',
          options: ['Hình chữ nhật', 'Hình tròn', 'Hình tam giác nhỏ hơn', 'Không tạo được hình gì'],
          correctIndex: 0,
        },
        {
          question:
            'Trong lớp học, con đếm được 3 đồ vật hình chữ nhật là bảng, cửa, và cửa sổ. Còn hình vuông con tìm thấy là viên gạch lát nền. Tổng cộng con tìm được mấy đồ vật có hình đã học?',
          options: ['4', '3', '5', '2'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Hình chữ nhật và hình vuông khác nhau ở điểm nào?',
          solution: ['Hình vuông có cả 4 cạnh bằng nhau, còn hình chữ nhật chỉ có 2 cặp cạnh bằng nhau (không phải cả 4 cạnh đều bằng nhau).'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Con hãy kể tên 3 đồ vật xung quanh nhà có 3 hình khác nhau: hình vuông, hình tròn, hình tam giác.',
          solution: [
            'Ví dụ: viên gạch (hình vuông), cái đĩa (hình tròn), biển báo giao thông (hình tam giác) — học sinh có thể kể đồ vật khác tương tự, miễn đúng hình dạng.',
          ],
        },
      ],
    },
  },

  'l1-vi-tri-dinh-huong': {
    title: 'Vị trí, định hướng trong không gian (trên–dưới, trái–phải)',
    theory: {
      cards: [
        {
          title: 'Trên - dưới, trước - sau',
          formulas: ['\\text{Trên} \\leftrightarrow \\text{Dưới}', '\\text{Trước} \\leftrightarrow \\text{Sau}'],
          legend: ['Vật ở vị trí cao hơn gọi là "trên"', 'Vật ở vị trí thấp hơn gọi là "dưới"'],
          note: 'Mẹo: khi tả vị trí, con cần nói rõ "so với vật nào" — ví dụ "quyển sách ở trên bàn" nghĩa là so với mặt bàn.',
        },
        {
          title: 'Trái - phải',
          formulas: ['\\text{Trái} \\leftrightarrow \\text{Phải}'],
          legend: ['Tay cầm bút thường là tay phải (với người thuận tay phải)', 'Đứng đối diện nhau thì trái - phải của hai người sẽ ngược nhau'],
          note: 'Mẹo: giơ tay lên, tay nào con hay cầm bút để viết thì đó thường là tay phải của con.',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — vi_tri_dinh_huong_baigiang.mp4' },
    quiz: [
      { question: 'Quyển sách để trên bàn, vậy quyển sách ở vị trí nào so với mặt bàn?', options: ['Trên', 'Dưới', 'Trái', 'Phải'], correctIndex: 0 },
      { question: 'Con mèo nằm dưới gầm giường, vậy con mèo ở vị trí nào so với giường?', options: ['Dưới', 'Trên', 'Trước', 'Sau'], correctIndex: 0 },
      {
        question: 'Bạn Nam đứng trước bạn Lan trong hàng. Vậy bạn Lan đứng ở đâu so với bạn Nam?',
        options: ['Sau', 'Trước', 'Trên', 'Dưới'],
        correctIndex: 0,
      },
      { question: 'Tay con cầm bút viết chữ thường là tay nào?', options: ['Tay phải', 'Tay trái', 'Cả hai tay', 'Không tay nào'], correctIndex: 0 },
      { question: 'Cái đèn treo trên trần nhà, vậy đèn ở vị trí nào so với sàn nhà?', options: ['Trên', 'Dưới', 'Trái', 'Phải'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Kể một đồ vật ở trên đầu con khi con ngồi trong lớp học.', solution: ['Ví dụ: cái quạt trần, bóng đèn (học sinh có thể kể đồ vật khác phù hợp).'] },
      {
        prompt: 'Bạn A đứng bên trái bạn B. Vậy bạn B đứng bên nào so với bạn A?',
        solution: ['Bạn B đứng bên phải bạn A (vì trái - phải của 2 người đứng cạnh nhau, cùng hướng, là giống nhau).'],
      },
      { prompt: 'Con chó chạy trước, con mèo chạy sau. Ai chạy phía sau ai?', solution: ['Con mèo chạy phía sau con chó.'] },
      { prompt: 'Kể một đồ vật thường đặt dưới sàn nhà.', solution: ['Ví dụ: thảm, dép (học sinh có thể kể đồ vật khác phù hợp).'] },
      {
        prompt: 'Khi xếp hàng vào lớp, bạn đứng đầu hàng ở vị trí nào so với các bạn còn lại?',
        solution: ['Bạn đứng đầu hàng ở vị trí trước tất cả các bạn còn lại.'],
      },
    ],
    flashcards: [
      { front: 'Trái đối lập với', back: 'Phải' },
      { front: 'Trên đối lập với', back: 'Dưới' },
      { front: 'Trước đối lập với', back: 'Sau' },
      { front: 'Tay cầm bút thường là tay nào?', back: 'Tay phải' },
      { front: 'Cái mũ đội ở vị trí nào trên cơ thể?', back: 'Trên đầu (vị trí trên cùng)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Cái nón đội trên đầu, vậy nón ở vị trí nào so với đầu?', options: ['Trên', 'Dưới', 'Trái', 'Phải'], correctIndex: 0 },
        { question: 'Đôi dép đi ở dưới chân, vậy dép ở vị trí nào so với chân?', options: ['Dưới', 'Trên', 'Trước', 'Sau'], correctIndex: 0 },
        { question: 'Con đứng trước bạn Bình, vậy con ở vị trí nào so với bạn Bình?', options: ['Trước', 'Sau', 'Trên', 'Dưới'], correctIndex: 0 },
        { question: 'Con chim bay trên bầu trời, vậy chim ở vị trí nào so với mặt đất?', options: ['Trên', 'Dưới', 'Trái', 'Phải'], correctIndex: 0 },
        { question: 'Con cá bơi dưới nước, vậy cá ở vị trí nào so với mặt nước?', options: ['Dưới', 'Trên', 'Trước', 'Sau'], correctIndex: 0 },
        {
          question: 'Bạn xếp hàng cuối cùng đứng ở vị trí nào so với các bạn phía trước?',
          options: ['Sau', 'Trước', 'Trên', 'Dưới'],
          correctIndex: 0,
        },
        {
          question: 'Quyển vở để trong cặp, cây bút để trên bàn. Vật nào ở vị trí trên?',
          options: ['Cây bút', 'Quyển vở', 'Cả hai đều trên', 'Cả hai đều dưới'],
          correctIndex: 0,
        },
        { question: 'Bạn A đứng bên phải bạn B. Bạn B đứng bên nào so với bạn A?', options: ['Bên trái', 'Bên phải', 'Phía trước', 'Phía sau'], correctIndex: 0 },
        {
          question: 'Con mèo nằm trên ghế, con chó nằm dưới gầm bàn. Con vật nào ở vị trí dưới?',
          options: ['Con chó', 'Con mèo', 'Cả hai', 'Không con nào'],
          correctIndex: 0,
        },
        { question: 'Xe đạp đi trước, xe máy đi sau. Xe nào ở phía trước?', options: ['Xe đạp', 'Xe máy', 'Cả hai', 'Không xe nào'], correctIndex: 0 },
        {
          question: 'Tay trái thường dùng để làm gì khi viết (với người thuận tay phải)?',
          options: ['Giữ vở', 'Cầm bút', 'Không làm gì', 'Cả hai tay đều cầm bút'],
          correctIndex: 0,
        },
        {
          question: 'Bóng đèn ở trên trần nhà, thảm ở dưới sàn nhà. Vật nào ở vị trí cao hơn?',
          options: ['Bóng đèn', 'Thảm', 'Bằng nhau', 'Không rõ'],
          correctIndex: 0,
        },
        {
          question: 'Ba bạn xếp hàng: Lan đứng trước Hà, Hà đứng trước Mai. Ai đứng cuối hàng?',
          options: ['Mai', 'Lan', 'Hà', 'Không xác định được'],
          correctIndex: 0,
        },
        {
          question:
            'Trong 3 bạn xếp hàng ngang, bạn đứng giữa tên là Hoa. Bên trái Hoa là Lan. Vậy bên phải Hoa là bạn nào (biết chỉ có 3 bạn: Lan, Hoa, Minh)?',
          options: ['Minh', 'Lan', 'Hoa', 'Không xác định được'],
          correctIndex: 0,
        },
        {
          question: 'Xếp hàng có 5 bạn, bạn đứng thứ 3 tên An. Hỏi có mấy bạn đứng trước An?',
          options: ['2 bạn', '3 bạn', '1 bạn', '4 bạn'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Con chim đậu trên cành cây, con giun sống dưới đất. Con vật nào ở vị trí cao hơn?',
          solution: ['Con chim ở vị trí trên (cao hơn), con giun ở vị trí dưới (thấp hơn).', 'Vậy con chim ở vị trí cao hơn.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Bốn bạn xếp hàng dọc: Mai đứng đầu tiên, sau đó đến Lan, rồi đến Hoa, cuối cùng là Nam. Hỏi bạn nào đứng ngay trước Hoa?',
          solution: ['Thứ tự hàng: Mai, Lan, Hoa, Nam.', 'Bạn đứng ngay trước Hoa là Lan.'],
        },
      ],
    },
  },

  'l1-do-do-dai': {
    title: 'Đo độ dài bằng thước, đơn vị xăng-ti-mét (cm)',
    theory: {
      cards: [
        {
          title: 'Đơn vị xăng-ti-mét (cm)',
          formulas: ['1\\ cm', '5\\ cm', '10\\ cm'],
          legend: ['cm là chữ viết tắt của "xăng-ti-mét", đơn vị đo độ dài', 'Dùng thước kẻ có vạch chia để đo độ dài đồ vật'],
          note: 'Mẹo: đặt vạch số 0 của thước trùng với một đầu của vật cần đo, rồi đọc số ở đầu kia của vật.',
        },
        {
          title: 'So sánh độ dài',
          formulas: ['5\\ cm < 8\\ cm', '10\\ cm > 6\\ cm'],
          legend: ['Số đo càng lớn thì vật càng dài'],
          note: 'Mẹo: khi so sánh 2 đồ vật, có thể đặt chúng cạnh nhau (so sánh trực tiếp) hoặc đo bằng thước rồi so sánh số đo (so sánh gián tiếp).',
        },
      ],
    },
    video: { caption: '00:00 / 05:30 — do_do_dai_baigiang.mp4' },
    quiz: [
      { question: 'cm là viết tắt của đơn vị nào?', options: ['Xăng-ti-mét', 'Ki-lô-gam', 'Lít', 'Giờ'], correctIndex: 0 },
      { question: 'Một cây bút chì dài 12cm và một cục tẩy dài 4cm. Vật nào dài hơn?', options: ['Bút chì', 'Cục tẩy', 'Bằng nhau', 'Không so sánh được'], correctIndex: 0 },
      { question: 'Dùng gì để đo độ dài một quyển vở?', options: ['Thước kẻ', 'Cân', 'Đồng hồ', 'Ca đong'], correctIndex: 0 },
      { question: 'Một sợi dây dài 15cm, một sợi dây khác dài 9cm. Sợi nào ngắn hơn?', options: ['Sợi 9cm', 'Sợi 15cm', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
      {
        question: 'Vạch số 0 trên thước dùng để làm gì khi đo?',
        options: ['Đặt trùng với 1 đầu của vật cần đo', 'Không dùng để làm gì', 'Đặt ở giữa vật', 'Đặt cuối vật'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Một chiếc thước dài 20cm, một chiếc bút chì dài 12cm. Vật nào dài hơn, dài hơn mấy cm?',
        solution: ['So sánh 20cm và 12cm: $20>12$.', 'Chiếc thước dài hơn.', 'Dài hơn: $20-12=8$cm.'],
      },
      {
        prompt: 'Con hãy đo độ dài quyển vở của mình bằng thước kẻ. Kết quả đo được gọi là gì?',
        solution: ['Kết quả đo được là độ dài quyển vở, tính theo đơn vị xăng-ti-mét (cm).'],
      },
      { prompt: 'Băng giấy A dài 8cm, băng giấy B dài 8cm. Hai băng giấy này thế nào?', solution: ['Vì cùng là 8cm nên hai băng giấy dài bằng nhau.'] },
      { prompt: 'Sắp xếp 3 đoạn dây dài 6cm, 10cm, 3cm theo thứ tự từ ngắn đến dài.', solution: ['Sắp xếp: $3cm,\\ 6cm,\\ 10cm$'] },
      {
        prompt: 'Một cái bàn cao khoảng 50cm (đối với bàn học sinh lớp 1), một cái ghế cao khoảng 30cm. Vật nào cao hơn?',
        solution: ['So sánh 50cm và 30cm: $50>30$.', 'Cái bàn cao hơn.'],
      },
    ],
    flashcards: [
      { front: 'cm', back: 'Xăng-ti-mét (đơn vị đo độ dài)' },
      { front: 'Dụng cụ đo độ dài', back: 'Thước kẻ' },
      { front: 'So sánh 7cm và 12cm', back: '7cm ngắn hơn 12cm' },
      { front: 'Đặt vạch số 0 của thước ở đâu khi đo?', back: 'Trùng với 1 đầu của vật cần đo' },
      { front: '15cm và 15cm', back: 'Bằng nhau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'cm là đơn vị đo gì?', options: ['Độ dài', 'Cân nặng', 'Thời gian', 'Dung tích'], correctIndex: 0 },
        { question: 'Dùng thước để làm gì?', options: ['Đo độ dài', 'Đo cân nặng', 'Đo thời gian', 'Đo nhiệt độ'], correctIndex: 0 },
        { question: '8cm và 5cm, đoạn nào dài hơn?', options: ['8cm', '5cm', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '10cm và 10cm, hai đoạn này thế nào?', options: ['Bằng nhau', '8cm dài hơn', '10cm ngắn hơn', 'Không so sánh được'], correctIndex: 0 },
        { question: 'Đo độ dài quyển sách bằng gì?', options: ['Thước kẻ', 'Cân', 'Đồng hồ', 'Ca đong'], correctIndex: 0 },
        { question: '3cm và 9cm, đoạn nào ngắn hơn?', options: ['3cm', '9cm', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Bút chì dài 14cm, thước dài 20cm. Vật nào ngắn hơn?', options: ['Bút chì', 'Thước', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Hai đoạn dây dài 6cm và 6cm. Kết luận nào đúng?', options: ['Bằng nhau', '6cm dài hơn', 'Không so sánh được', 'Ngắn hơn'], correctIndex: 0 },
        { question: 'Đoạn thẳng dài 18cm hơn đoạn thẳng dài 11cm mấy cm?', options: ['7cm', '6cm', '8cm', '9cm'], correctIndex: 0 },
        { question: 'Sắp xếp 5cm, 12cm, 8cm từ ngắn đến dài, số ở giữa là bao nhiêu?', options: ['8cm', '5cm', '12cm', '10cm'], correctIndex: 0 },
        {
          question: 'Bàn học cao hơn ghế học. Vật nào có số đo độ dài (chiều cao) lớn hơn?',
          options: ['Bàn học', 'Ghế học', 'Bằng nhau', 'Không rõ'],
          correctIndex: 0,
        },
        { question: 'Đoạn dây 7cm ngắn hơn đoạn dây 16cm bao nhiêu cm?', options: ['9cm', '8cm', '10cm', '7cm'], correctIndex: 0 },
        {
          question: 'Ba đoạn dây dài 4cm, 9cm, 6cm. Nếu nối đoạn ngắn nhất và đoạn dài nhất lại thì được đoạn dài bao nhiêu cm?',
          options: ['13cm', '15cm', '10cm', '12cm'],
          correctIndex: 0,
        },
        { question: 'Một băng giấy dài 20cm, cắt bớt đi 7cm. Hỏi phần còn lại dài bao nhiêu cm?', options: ['13cm', '14cm', '12cm', '15cm'], correctIndex: 0 },
        {
          question: 'Đoạn thẳng AB dài 10cm, đoạn thẳng CD dài gấp đôi đoạn AB. Hỏi đoạn CD dài bao nhiêu cm?',
          options: ['20cm', '15cm', '10cm', '25cm'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một cây thước dài 24cm, một cây bút dài 15cm. Vật nào dài hơn, dài hơn mấy cm?',
          solution: ['So sánh 24cm và 15cm: $24>15$.', 'Cây thước dài hơn, dài hơn $24-15=9$cm.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một sợi dây dài 30cm, cắt thành 2 đoạn, đoạn thứ nhất dài 12cm. Hỏi đoạn thứ hai dài bao nhiêu cm?',
          solution: ['$30-12=18$', 'Đoạn thứ hai dài 18cm.'],
        },
      ],
    },
  },

  'l1-xem-gio-dung': {
    title: 'Xem giờ đúng trên đồng hồ',
    theory: {
      cards: [
        {
          title: 'Kim giờ và kim phút',
          formulas: ['\\text{Kim ngắn} \\to \\text{Kim giờ}', '\\text{Kim dài} \\to \\text{Kim phút}'],
          legend: ['Kim giờ ngắn hơn, chỉ vào số giờ', 'Kim phút dài hơn, khi chỉ đúng số 12 nghĩa là "giờ đúng"'],
          note: 'Mẹo: khi kim dài (kim phút) chỉ đúng vào số 12, ta đọc giờ theo số mà kim ngắn (kim giờ) đang chỉ vào.',
        },
        {
          title: 'Đọc giờ đúng',
          formulas: [
            '\\text{Kim giờ chỉ số 3, kim phút chỉ số 12} \\to 3\\ \\text{giờ}',
            '\\text{Kim giờ chỉ số 7, kim phút chỉ số 12} \\to 7\\ \\text{giờ}',
          ],
          legend: ['"Giờ đúng" nghĩa là kim phút luôn chỉ vào số 12'],
          note: 'Mẹo: buổi sáng con thức dậy, đi học, ăn trưa, đi ngủ đều vào những giờ nhất định — hãy thử để ý đồng hồ ở nhà vào những lúc đó.',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — xem_gio_dung_baigiang.mp4' },
    quiz: [
      { question: 'Kim ngắn trên đồng hồ gọi là kim gì?', options: ['Kim giờ', 'Kim phút', 'Kim giây', 'Không có tên'], correctIndex: 0 },
      { question: 'Khi xem giờ đúng, kim dài (kim phút) luôn chỉ vào số nào?', options: ['12', '6', '3', '9'], correctIndex: 0 },
      { question: 'Kim giờ chỉ số 5, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', options: ['5 giờ', '12 giờ', '6 giờ', '7 giờ'], correctIndex: 0 },
      { question: 'Kim dài trên đồng hồ gọi là kim gì?', options: ['Kim phút', 'Kim giờ', 'Kim giây', 'Không có tên'], correctIndex: 0 },
      { question: 'Đồng hồ chỉ 8 giờ đúng thì kim phút chỉ vào số nào?', options: ['12', '8', '6', '1'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Kim giờ chỉ số 9, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?',
        solution: ['Kim phút chỉ số 12 là giờ đúng.', 'Kim giờ chỉ số 9 nên đồng hồ chỉ 9 giờ.'],
      },
      {
        prompt: 'Buổi sáng con thường thức dậy lúc mấy giờ? Hãy mô tả vị trí kim giờ và kim phút lúc đó.',
        solution: ['Ví dụ: thức dậy lúc 6 giờ — kim giờ chỉ số 6, kim phút chỉ số 12 (học sinh trả lời theo giờ thực tế của mình).'],
      },
      { prompt: 'Đồng hồ chỉ 2 giờ đúng. Kim giờ chỉ vào số nào?', solution: ['Kim giờ chỉ vào số 2.'] },
      {
        prompt: 'Vì sao khi xem giờ đúng, ta luôn thấy kim phút chỉ vào số 12?',
        solution: ['Vì "giờ đúng" nghĩa là chưa qua phút nào của giờ đó, mà số 12 trên đồng hồ chính là mốc bắt đầu của giờ mới.'],
      },
      {
        prompt: 'Lớp học bắt đầu lúc 7 giờ. Hãy mô tả vị trí kim giờ và kim phút lúc 7 giờ đúng.',
        solution: ['Kim giờ chỉ số 7, kim phút chỉ số 12.'],
      },
    ],
    flashcards: [
      { front: 'Kim ngắn', back: 'Kim giờ' },
      { front: 'Kim dài', back: 'Kim phút' },
      { front: 'Giờ đúng thì kim phút chỉ số mấy?', back: 'Số 12' },
      { front: 'Kim giờ chỉ số 10, kim phút chỉ số 12', back: '10 giờ' },
      { front: 'Kim giờ chỉ số 4, kim phút chỉ số 12', back: '4 giờ' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Kim giờ chỉ số 1, kim phút chỉ số 12. Mấy giờ?', options: ['1 giờ', '12 giờ', '2 giờ', '11 giờ'], correctIndex: 0 },
        { question: 'Kim giờ chỉ số 6, kim phút chỉ số 12. Mấy giờ?', options: ['6 giờ', '12 giờ', '7 giờ', '5 giờ'], correctIndex: 0 },
        { question: 'Kim nào chỉ số giờ?', options: ['Kim ngắn', 'Kim dài', 'Cả hai', 'Không kim nào'], correctIndex: 0 },
        { question: 'Kim nào dài hơn?', options: ['Kim phút', 'Kim giờ', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: '10 giờ đúng thì kim phút chỉ số mấy?', options: ['12', '10', '6', '1'], correctIndex: 0 },
        { question: 'Kim giờ chỉ số 3, kim phút chỉ số 12. Mấy giờ?', options: ['3 giờ', '12 giờ', '4 giờ', '2 giờ'], correctIndex: 0 },
        { question: 'Đồng hồ chỉ 11 giờ đúng, kim giờ chỉ vào số nào?', options: ['11', '12', '10', '1'], correctIndex: 0 },
        { question: 'Kim giờ chỉ số 8, kim phút chỉ số 12. Mấy giờ?', options: ['8 giờ', '12 giờ', '9 giờ', '7 giờ'], correctIndex: 0 },
        {
          question: 'Buổi trưa ăn cơm lúc 12 giờ, kim giờ và kim phút lúc đó chỉ vào số nào?',
          options: ['Cả 2 kim đều chỉ số 12', 'Kim giờ chỉ 6, kim phút chỉ 12', 'Kim giờ chỉ 12, kim phút chỉ 6', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Đồng hồ chỉ 4 giờ, sau đó kim giờ di chuyển sang số 5, kim phút vẫn chỉ 12. Mấy giờ?',
          options: ['5 giờ', '4 giờ', '6 giờ', '3 giờ'],
          correctIndex: 0,
        },
        { question: 'Kim giờ chỉ số 2, kim phút chỉ số 12. Mấy giờ?', options: ['2 giờ', '12 giờ', '1 giờ', '3 giờ'], correctIndex: 0 },
        { question: 'Giờ nào diễn ra sau: 7 giờ hay 9 giờ?', options: ['9 giờ', '7 giờ', 'Bằng nhau', 'Không rõ'], correctIndex: 0 },
        { question: 'Bây giờ là 5 giờ đúng. Sau 2 giờ nữa là mấy giờ?', options: ['7 giờ', '6 giờ', '8 giờ', '9 giờ'], correctIndex: 0 },
        { question: 'Bạn Lan đi học lúc 7 giờ, tan học lúc 11 giờ. Bạn Lan ở trường mấy giờ đồng hồ?', options: ['4 giờ', '3 giờ', '5 giờ', '6 giờ'], correctIndex: 0 },
        {
          question: 'Kim giờ đang ở giữa số 3 và số 4, kim phút chỉ đúng số 12. Điều này có phải là giờ đúng không?',
          options: ['Không phải, vì kim giờ phải chỉ đúng vào 1 số', 'Có, vì kim phút chỉ đúng số 12', 'Không xác định được', 'Có, vì đó là 3 giờ rưỡi'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Kim giờ chỉ số 12, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?',
          solution: ['Kim phút chỉ số 12 là giờ đúng, kim giờ chỉ số 12.', 'Đồng hồ chỉ 12 giờ.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Buổi sáng con đi học lúc 7 giờ, buổi chiều tan học lúc 4 giờ. Từ lúc đi học đến lúc tan học là mấy giờ đồng hồ?',
          solution: ['Từ 7 giờ sáng đến 12 giờ trưa là 5 giờ.', 'Từ 12 giờ trưa đến 4 giờ chiều là 4 giờ.', 'Tổng cộng: $5+4=9$ giờ đồng hồ.'],
        },
      ],
    },
  },
}
