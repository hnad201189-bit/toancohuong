import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP2_HINH_HOC_DO_LUONG = {
  'l2-hinh-tu-giac': {
    title: 'Đường gấp khúc, hình tứ giác, hình chữ nhật',
    theory: {
      cards: [
        {
          title: 'Đường gấp khúc',
          formulas: ['3cm + 4cm + 5cm = 12cm'],
          legend: ['Đường gấp khúc gồm các đoạn thẳng nối tiếp nhau', 'Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng tạo thành nó'],
          note: 'Mẹo: để tính độ dài đường gấp khúc, con cộng lần lượt độ dài từng đoạn thẳng lại với nhau.',
        },
        {
          title: 'Hình tứ giác, hình chữ nhật',
          formulas: ['\\text{Hình tứ giác: 4 cạnh, 4 đỉnh}', '\\text{Hình chữ nhật: 2 cặp cạnh đối bằng nhau, 4 góc vuông}'],
          legend: ['Hình tứ giác là hình có 4 cạnh và 4 đỉnh', 'Hình chữ nhật là một loại hình tứ giác đặc biệt có 4 góc vuông'],
          note: 'Mẹo: mọi hình chữ nhật đều là hình tứ giác, nhưng không phải hình tứ giác nào cũng là hình chữ nhật.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — duong_gap_khuc_tu_giac_baigiang.mp4' },
    quiz: [
      { question: 'Đường gấp khúc ABC gồm đoạn AB dài 5cm và đoạn BC dài 7cm. Tính độ dài đường gấp khúc ABC.', options: ['12cm', '13cm', '11cm', '10cm'], correctIndex: 0 },
      { question: 'Hình tứ giác có mấy cạnh?', options: ['3', '4', '5', '6'], correctIndex: 1 },
      { question: 'Hình chữ nhật có mấy góc vuông?', options: ['2', '3', '4', '1'], correctIndex: 2 },
      { question: 'Đường gấp khúc MNPQ gồm 3 đoạn thẳng dài 4cm, 6cm, 3cm. Tính độ dài đường gấp khúc.', options: ['12cm', '14cm', '15cm', '13cm'], correctIndex: 3 },
      {
        question: 'Hình nào sau đây có 4 cạnh và 4 góc vuông?',
        options: ['Hình chữ nhật', 'Hình tam giác', 'Hình tròn', 'Hình ngũ giác'],
        correctIndex: 0,
      },
    ],
    essays: [
      { prompt: 'Đường gấp khúc ABCD gồm 3 đoạn: AB=3cm, BC=5cm, CD=4cm. Tính độ dài đường gấp khúc ABCD.', solution: ['$3+5+4=12$', 'Độ dài đường gấp khúc ABCD là 12cm.'] },
      { prompt: 'Hình chữ nhật có chiều dài và chiều rộng khác nhau. Hình chữ nhật có mấy cạnh, mấy đỉnh?', solution: ['Hình chữ nhật có 4 cạnh và 4 đỉnh.'] },
      { prompt: 'Kể tên 2 đồ vật xung quanh con có dạng hình chữ nhật.', solution: ['Ví dụ: mặt bàn học, quyển vở (học sinh có thể kể đồ vật khác tương tự).'] },
      { prompt: 'Đường gấp khúc gồm 4 đoạn thẳng, mỗi đoạn dài 6cm. Tính độ dài đường gấp khúc đó.', solution: ['$6+6+6+6=24$', 'Độ dài đường gấp khúc là 24cm.'] },
      { prompt: 'Vì sao hình chữ nhật cũng là hình tứ giác?', solution: ['Vì hình chữ nhật có 4 cạnh và 4 đỉnh, đúng với đặc điểm của hình tứ giác.'] },
    ],
    flashcards: [
      { front: 'Đường gấp khúc gồm những gì?', back: 'Các đoạn thẳng nối tiếp nhau' },
      { front: 'Hình tứ giác có mấy cạnh, mấy đỉnh?', back: '4 cạnh, 4 đỉnh' },
      { front: 'Hình chữ nhật có mấy góc vuông?', back: '4 góc vuông' },
      { front: 'Cách tính độ dài đường gấp khúc', back: 'Cộng độ dài tất cả các đoạn thẳng tạo thành nó' },
      { front: 'Mọi hình chữ nhật có phải là hình tứ giác không?', back: 'Có, vì hình chữ nhật có 4 cạnh và 4 đỉnh' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Đường gấp khúc ABC gồm AB=8cm, BC=6cm. Độ dài đường gấp khúc là bao nhiêu?', options: ['14cm', '13cm', '15cm', '12cm'], correctIndex: 0 },
        { question: 'Hình tứ giác có mấy đỉnh?', options: ['3', '4', '5', '6'], correctIndex: 1 },
        { question: 'Hình chữ nhật có mấy cặp cạnh bằng nhau?', options: ['1', '3', '2', '4'], correctIndex: 2 },
        { question: 'Đường gấp khúc gồm 3 đoạn: 5cm, 5cm, 5cm. Độ dài đường gấp khúc là bao nhiêu?', options: ['10cm', '12cm', '20cm', '15cm'], correctIndex: 3 },
        { question: 'Trong các hình đã học, hình nào có 4 góc vuông?', options: ['Hình chữ nhật', 'Hình tam giác', 'Hình tròn', 'Đường gấp khúc'], correctIndex: 0 },
        { question: 'Đường gấp khúc ABCD gồm 3 đoạn: AB=4cm, BC=3cm, CD=7cm. Tính độ dài đường gấp khúc.', options: ['13cm', '14cm', '15cm', '12cm'], correctIndex: 1 },
        {
          question: 'Một hình có 4 cạnh và 4 đỉnh nhưng các cạnh không bằng nhau từng đôi một thì được gọi chung là hình gì?',
          options: ['Hình chữ nhật', 'Hình tam giác', 'Hình tứ giác', 'Hình tròn'],
          correctIndex: 2,
        },
        { question: 'Đường gấp khúc gồm 5 đoạn thẳng, mỗi đoạn dài 2cm. Tính độ dài đường gấp khúc.', options: ['8cm', '9cm', '12cm', '10cm'], correctIndex: 3 },
        { question: 'Cửa sổ nhà bạn Lan có dạng hình chữ nhật. Hình chữ nhật có mấy cạnh?', options: ['4', '3', '5', '6'], correctIndex: 0 },
        { question: 'Đường gấp khúc ABCD gồm 3 đoạn: AB=9cm, BC=2cm, CD=5cm. Tính độ dài đường gấp khúc.', options: ['15cm', '16cm', '17cm', '14cm'], correctIndex: 1 },
        { question: 'Hình chữ nhật có chiều dài 8cm, chiều rộng 5cm. Hình đó có mấy cạnh?', options: ['2', '3', '4', '5'], correctIndex: 2 },
        {
          question: 'Đường gấp khúc gồm 4 đoạn thẳng dài lần lượt 3cm, 3cm, 4cm, 4cm. Tính độ dài đường gấp khúc.',
          options: ['12cm', '13cm', '15cm', '14cm'],
          correctIndex: 3,
        },
        { question: 'Viên gạch lát nền hình chữ nhật có mấy góc vuông?', options: ['4', '3', '2', '1'], correctIndex: 0 },
        { question: 'Một đường gấp khúc có độ dài 20cm, gồm 4 đoạn bằng nhau. Mỗi đoạn dài bao nhiêu?', options: ['4cm', '5cm', '6cm', '7cm'], correctIndex: 1 },
        {
          question: 'Hình nào KHÔNG phải là hình tứ giác trong các hình: hình vuông, hình tam giác, hình chữ nhật?',
          options: ['Hình vuông', 'Hình chữ nhật', 'Hình tam giác', 'Không hình nào'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đường gấp khúc ABCD gồm 3 đoạn thẳng: AB=6cm, BC=8cm, CD=5cm. Tính độ dài đường gấp khúc ABCD.',
          solution: ['$6+8+5=19$', 'Độ dài đường gấp khúc ABCD là 19cm.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một hình chữ nhật có 4 cạnh, trong đó có 2 cạnh dài 9cm và 2 cạnh dài 4cm. Tính tổng độ dài đường gấp khúc tạo bởi 4 cạnh này khi đi hết vòng quanh hình.',
          solution: ['$9+4+9+4=26$', 'Tổng độ dài 4 cạnh của hình chữ nhật là 26cm.'],
        },
      ],
    },
  },

  'l2-khoi-tru-khoi-cau': {
    title: 'Khối trụ, khối cầu',
    theory: {
      cards: [
        {
          title: 'Nhận biết khối trụ',
          formulas: ['\\text{Lon sữa} \\to \\text{khối trụ}', '\\text{Hộp sữa hình ống} \\to \\text{khối trụ}'],
          legend: ['Khối trụ có 2 mặt đáy là hình tròn bằng nhau, xung quanh là mặt cong', 'Khối trụ có thể lăn được khi đặt nằm ngang'],
          note: 'Mẹo: con hãy tìm những đồ vật ở nhà có dạng ống tròn dài, đó chính là khối trụ.',
        },
        {
          title: 'Nhận biết khối cầu',
          formulas: ['\\text{Quả bóng} \\to \\text{khối cầu}', '\\text{Viên bi tròn} \\to \\text{khối cầu}'],
          legend: ['Khối cầu có dạng tròn đều về mọi phía, không có mặt phẳng, không có cạnh', 'Khối cầu luôn lăn được theo mọi hướng'],
          note: 'Mẹo: khối cầu khác khối trụ ở chỗ khối cầu lăn được về mọi hướng, còn khối trụ chỉ lăn theo một hướng khi đặt nằm.',
        },
      ],
    },
    video: { caption: '00:00 / 05:30 — khoi_tru_khoi_cau_baigiang.mp4' },
    quiz: [
      { question: 'Quả bóng đá có dạng khối gì?', options: ['Khối cầu', 'Khối trụ', 'Khối vuông', 'Khối chữ nhật'], correctIndex: 0 },
      { question: 'Lon sữa bò có dạng khối gì?', options: ['Khối vuông', 'Khối trụ', 'Khối cầu', 'Khối chữ nhật'], correctIndex: 1 },
      { question: 'Khối nào có 2 mặt đáy hình tròn?', options: ['Khối chữ nhật', 'Khối cầu', 'Khối trụ', 'Khối vuông'], correctIndex: 2 },
      { question: 'Khối nào lăn được theo mọi hướng?', options: ['Khối vuông', 'Khối chữ nhật', 'Khối trụ', 'Khối cầu'], correctIndex: 3 },
      { question: 'Viên bi tròn có dạng khối gì?', options: ['Khối cầu', 'Khối trụ', 'Khối vuông', 'Khối chữ nhật'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Kể tên 2 đồ vật xung quanh con có dạng khối trụ.', solution: ['Ví dụ: lon nước ngọt, ống hút, hộp sữa hình ống (học sinh có thể kể đồ vật khác tương tự).'] },
      { prompt: 'Kể tên 2 đồ vật xung quanh con có dạng khối cầu.', solution: ['Ví dụ: quả bóng, viên bi (học sinh có thể kể đồ vật khác tương tự).'] },
      {
        prompt: 'Vì sao khối cầu lăn được theo mọi hướng còn khối trụ chỉ lăn theo một hướng khi nằm ngang?',
        solution: [
          'Vì khối cầu tròn đều về mọi phía, không có mặt phẳng nào, nên lăn được theo bất kỳ hướng nào.',
          'Khối trụ có 2 mặt đáy phẳng hình tròn, khi đặt nằm ngang chỉ lăn theo hướng dọc theo thân trụ.',
        ],
      },
      { prompt: 'Khối trụ có mấy mặt đáy? Mặt đáy đó có hình gì?', solution: ['Khối trụ có 2 mặt đáy.', 'Mỗi mặt đáy có hình tròn.'] },
      {
        prompt: 'Chiếc hộp bút hình ống tròn dài và quả địa cầu, đồ vật nào có dạng khối cầu?',
        solution: ['Quả địa cầu có dạng khối cầu, còn hộp bút hình ống tròn dài có dạng khối trụ.'],
      },
    ],
    flashcards: [
      { front: 'Quả bóng bàn', back: 'Khối cầu' },
      { front: 'Lon nước ngọt', back: 'Khối trụ' },
      { front: 'Số mặt đáy của khối trụ', back: '2 mặt đáy hình tròn' },
      { front: 'Khối nào lăn được theo mọi hướng?', back: 'Khối cầu' },
      { front: 'Ống hút uống nước', back: 'Khối trụ' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Chai nước hình ống tròn có dạng khối gì?', options: ['Khối trụ', 'Khối cầu', 'Khối vuông', 'Khối chữ nhật'], correctIndex: 0 },
        { question: 'Quả địa cầu có dạng khối gì?', options: ['Khối vuông', 'Khối cầu', 'Khối trụ', 'Khối chữ nhật'], correctIndex: 1 },
        { question: 'Khối nào có mặt cong xung quanh và 2 mặt đáy hình tròn?', options: ['Khối vuông', 'Khối cầu', 'Khối trụ', 'Khối chữ nhật'], correctIndex: 2 },
        { question: 'Đồ vật nào sau đây có dạng khối cầu?', options: ['Hộp phấn', 'Lon sữa', 'Cuộn chỉ hình ống', 'Viên bi'], correctIndex: 3 },
        { question: 'Khối trụ có bao nhiêu mặt đáy?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Đồ vật nào có dạng khối trụ?', options: ['Quả bóng rổ', 'Ống nước hình trụ', 'Viên đá tròn nhỏ', 'Quả cam'], correctIndex: 1 },
        {
          question: 'Khối cầu có đặc điểm gì đặc biệt?',
          options: ['Có 2 mặt đáy phẳng', 'Có 6 mặt phẳng', 'Tròn đều mọi phía, không có mặt phẳng', 'Có 4 cạnh'],
          correctIndex: 2,
        },
        {
          question: 'Trong các đồ vật: hộp sữa hình ống, quả bóng, viên gạch, quyển sách — đồ vật nào có dạng khối cầu?',
          options: ['Hộp sữa hình ống', 'Viên gạch', 'Quyển sách', 'Quả bóng'],
          correctIndex: 3,
        },
        { question: 'Lốp xe (dạng ống tròn) gần giống khối gì?', options: ['Khối trụ', 'Khối cầu', 'Khối vuông', 'Khối chữ nhật'], correctIndex: 0 },
        { question: 'Trong khối trụ và khối cầu, khối nào có mặt đáy hình tròn?', options: ['Khối tam giác', 'Khối trụ', 'Khối vuông', 'Khối chữ nhật'], correctIndex: 1 },
        {
          question: 'Vì sao khối trụ chỉ lăn theo một hướng khi đặt nằm ngang?',
          options: ['Vì nó nhẹ', 'Vì nó có 2 mặt đáy phẳng hai đầu', 'Vì nó có 4 cạnh', 'Vì nó là hình phẳng'],
          correctIndex: 2,
        },
        {
          question: 'Đồ vật nào sau đây KHÔNG có dạng khối trụ và cũng KHÔNG có dạng khối cầu?',
          options: ['Lon sữa', 'Quả bóng', 'Hộp phấn (dạng hộp chữ nhật)', 'Ống hút'],
          correctIndex: 2,
        },
        { question: 'Một chiếc bút chì (chưa vót nhọn) hình dạng ống dài tròn giống khối gì?', options: ['Khối trụ', 'Khối cầu', 'Khối vuông', 'Khối tam giác'], correctIndex: 0 },
        {
          question: 'Viên bi ve và lon nước ngọt, đồ vật nào có dạng khối cầu?',
          options: ['Lon nước ngọt', 'Viên bi ve', 'Cả hai đều là khối cầu', 'Cả hai đều là khối trụ'],
          correctIndex: 1,
        },
        {
          question: 'Khối trụ và khối cầu giống nhau ở điểm nào?',
          options: ['Đều có 4 cạnh', 'Đều có mặt phẳng hình vuông', 'Đều có thể lăn được', 'Đều không lăn được'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Kể tên 2 đồ vật có dạng khối trụ và 2 đồ vật có dạng khối cầu mà con thường gặp trong cuộc sống.',
          solution: ['Đồ vật dạng khối trụ: ví dụ lon sữa, ống hút.', 'Đồ vật dạng khối cầu: ví dụ quả bóng, viên bi (học sinh có thể kể đồ vật khác tương tự, miễn đúng dạng khối).'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Bạn Minh có một hộp đồ chơi gồm: 3 viên bi tròn, 2 lon sữa rỗng hình ống, 1 quyển sách. Hỏi trong hộp đồ chơi có bao nhiêu đồ vật dạng khối cầu và bao nhiêu đồ vật dạng khối trụ?',
          solution: [
            '3 viên bi tròn có dạng khối cầu.',
            '2 lon sữa hình ống có dạng khối trụ.',
            'Quyển sách không phải khối cầu cũng không phải khối trụ.',
            'Vậy có 3 đồ vật dạng khối cầu và 2 đồ vật dạng khối trụ.',
          ],
        },
      ],
    },
  },

  'l2-do-do-dai-khoi-luong': {
    title: 'Đơn vị đo độ dài (m, dm, cm) và khối lượng (kg)',
    theory: {
      cards: [
        {
          title: 'Đơn vị đo độ dài: mét, đề-xi-mét, xăng-ti-mét',
          formulas: ['1m = 10dm', '1dm = 10cm', '1m = 100cm'],
          legend: ['m: mét, dm: đề-xi-mét, cm: xăng-ti-mét', 'Mét là đơn vị lớn hơn đề-xi-mét, đề-xi-mét lớn hơn xăng-ti-mét'],
          note: 'Mẹo: muốn đổi từ mét sang xăng-ti-mét, con nhân số mét với 100 (vì $1m=100cm$).',
        },
        {
          title: 'Đơn vị đo khối lượng: ki-lô-gam',
          formulas: ['3kg + 2kg = 5kg', '10kg - 4kg = 6kg'],
          legend: ['kg là viết tắt của ki-lô-gam, đơn vị đo khối lượng (độ nặng)', 'Dùng cân để đo khối lượng đồ vật'],
          note: 'Mẹo: khi cộng trừ các số đo cùng đơn vị kg, con tính như cộng trừ số tự nhiên bình thường rồi viết thêm đơn vị kg vào kết quả.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — do_do_dai_khoi_luong_baigiang.mp4' },
    quiz: [
      { question: '1m bằng bao nhiêu cm?', options: ['100cm', '10cm', '1000cm', '50cm'], correctIndex: 0 },
      { question: '1m bằng bao nhiêu dm?', options: ['100dm', '10dm', '1dm', '20dm'], correctIndex: 1 },
      { question: 'Một bao gạo cân nặng 5kg, một bao gạo khác nặng 8kg. Hỏi hai bao gạo nặng tất cả bao nhiêu ki-lô-gam?', options: ['12kg', '14kg', '13kg', '15kg'], correctIndex: 2 },
      { question: 'Đổi 2m thành cm.', options: ['20cm', '2000cm', '250cm', '200cm'], correctIndex: 3 },
      { question: 'Một túi đường cân nặng 3kg, mẹ mua thêm một túi 4kg nữa. Hỏi có tất cả bao nhiêu ki-lô-gam đường?', options: ['7kg', '6kg', '8kg', '5kg'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Đổi 3m thành cm.', solution: ['$3m = 300cm$ (vì $1m=100cm$)'] },
      { prompt: 'Một bao xi măng nặng 50kg, đã dùng hết 18kg. Hỏi còn lại bao nhiêu ki-lô-gam xi măng?', solution: ['$50-18=32$', 'Còn lại 32kg xi măng.'] },
      {
        prompt: 'So sánh: 5m và 45dm, đoạn nào dài hơn?',
        solution: ['Đổi $5m=50dm$.', 'So sánh $50dm$ và $45dm$: vì $50>45$ nên 5m dài hơn 45dm.'],
      },
      { prompt: 'Một con lợn cân nặng 45kg, con lợn khác nặng hơn 12kg. Hỏi con lợn thứ hai cân nặng bao nhiêu ki-lô-gam?', solution: ['$45+12=57$', 'Con lợn thứ hai cân nặng 57kg.'] },
      { prompt: 'Đổi 70cm thành dm.', solution: ['$70cm = 7dm$ (vì $1dm=10cm$)'] },
    ],
    flashcards: [
      { front: '1m = ? cm', back: '100cm' },
      { front: '1dm = ? cm', back: '10cm' },
      { front: '1m = ? dm', back: '10dm' },
      { front: 'Đơn vị đo khối lượng đã học ở lớp 2', back: 'ki-lô-gam (kg)' },
      { front: '4kg + 6kg', back: '10kg' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '1m bằng bao nhiêu cm?', options: ['100cm', '10cm', '1000cm', '50cm'], correctIndex: 0 },
        { question: '1dm bằng bao nhiêu cm?', options: ['100cm', '10cm', '1cm', '20cm'], correctIndex: 1 },
        { question: 'Đổi 4m thành dm.', options: ['4dm', '400dm', '40dm', '14dm'], correctIndex: 2 },
        { question: 'Một túi gạo nặng 25kg, một túi khác nặng 18kg. Hỏi hai túi nặng tất cả bao nhiêu ki-lô-gam?', options: ['33kg', '53kg', '42kg', '43kg'], correctIndex: 3 },
        { question: 'Đổi 6m thành cm.', options: ['600cm', '60cm', '6000cm', '650cm'], correctIndex: 0 },
        { question: 'So sánh 8dm và 75cm, đoạn nào dài hơn?', options: ['75cm dài hơn', '8dm dài hơn', 'Bằng nhau', 'Không so sánh được'], correctIndex: 1 },
        { question: 'Một con bò cân nặng 200kg, con bê con nhẹ hơn 150kg. Hỏi con bê cân nặng bao nhiêu ki-lô-gam?', options: ['40kg', '60kg', '50kg', '70kg'], correctIndex: 2 },
        { question: 'Đổi 90cm thành dm.', options: ['8dm', '10dm', '7dm', '9dm'], correctIndex: 3 },
        { question: 'Một bao thóc nặng 60kg, đã lấy ra 25kg. Hỏi còn lại bao nhiêu ki-lô-gam thóc?', options: ['35kg', '30kg', '45kg', '25kg'], correctIndex: 0 },
        { question: 'Chiều dài một cây thước là 2m. Đổi ra xăng-ti-mét.', options: ['20cm', '200cm', '2000cm', '250cm'], correctIndex: 1 },
        { question: 'Điền số: 5m = … dm.', options: ['5', '500', '50', '15'], correctIndex: 2 },
        { question: 'Một chiếc cặp sách nặng 3kg, sách vở bên trong nặng 2kg. Hỏi tổng khối lượng là bao nhiêu?', options: ['2kg', '3kg', '4kg', '5kg'], correctIndex: 3 },
        { question: 'Điền số: 60cm = … dm.', options: ['6', '60', '16', '600'], correctIndex: 0 },
        { question: 'Một con voi cân nặng 800kg, nặng hơn một con trâu 500kg. Hỏi con trâu cân nặng bao nhiêu ki-lô-gam?', options: ['400kg', '300kg', '200kg', '350kg'], correctIndex: 1 },
        { question: 'So sánh 3m và 250cm, số nào lớn hơn?', options: ['250cm lớn hơn', 'Bằng nhau', '3m lớn hơn', 'Không xác định'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đổi 5m thành xăng-ti-mét, rồi so sánh với 480cm, số nào lớn hơn?',
          solution: ['$5m=500cm$', 'So sánh $500cm$ và $480cm$: vì $500>480$ nên 5m lớn hơn 480cm.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng gạo có 85kg gạo, buổi sáng bán được 27kg, buổi chiều bán thêm 19kg. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?',
          solution: ['$85-27=58$ (còn lại sau buổi sáng)', '$58-19=39$ (còn lại sau buổi chiều)', 'Cửa hàng còn lại 39kg gạo.'],
        },
      ],
    },
  },

  'l2-thoi-gian-tien-viet-nam': {
    title: 'Xem giờ, xem lịch và tiền Việt Nam',
    theory: {
      cards: [
        {
          title: 'Xem giờ đúng và giờ rưỡi',
          formulas: ['\\text{Kim phút chỉ số 12} \\to \\text{giờ đúng}', '\\text{Kim phút chỉ số 6} \\to \\text{giờ rưỡi (30 phút)}'],
          legend: ['Kim ngắn là kim giờ, kim dài là kim phút', 'Khi kim phút chỉ số 6, đồng hồ chỉ "... giờ 30 phút" hay còn gọi là "... giờ rưỡi"'],
          note: 'Mẹo: kim phút đi từ số 12 đến số 6 là đi được nửa vòng, ứng với 30 phút — đó là lúc ta nói "giờ rưỡi".',
        },
        {
          title: 'Tiền Việt Nam',
          formulas: ['1000đ + 2000đ = 3000đ', '5000đ - 2000đ = 3000đ'],
          legend: [
            'Các mệnh giá tiền giấy thường gặp: 1000đ, 2000đ, 5000đ, 10 000đ, 20 000đ, 50 000đ, 100 000đ',
            'Khi mua đồ, ta cộng giá trị các tờ tiền lại để biết tổng số tiền',
          ],
          note: 'Mẹo: khi tính tiền, con có thể nhóm các tờ cùng mệnh giá lại rồi nhân lên cho nhanh, ví dụ 3 tờ 2000đ = $2000\\times3=6000đ$.',
        },
      ],
    },
    video: { caption: '00:00 / 07:30 — xem_gio_xem_lich_tien_baigiang.mp4' },
    quiz: [
      { question: 'Kim giờ chỉ số 4, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', options: ['4 giờ', '5 giờ', '3 giờ', '4 giờ 30 phút'], correctIndex: 0 },
      { question: 'Kim giờ ở giữa số 7 và 8, kim phút chỉ số 6. Đồng hồ chỉ mấy giờ?', options: ['8 giờ', '7 giờ 30 phút', '7 giờ', '8 giờ 30 phút'], correctIndex: 1 },
      { question: 'Một tuần có mấy ngày?', options: ['5 ngày', '6 ngày', '7 ngày', '8 ngày'], correctIndex: 2 },
      { question: 'Bạn Lan có tờ tiền 2000đ và tờ tiền 5000đ. Hỏi bạn Lan có tất cả bao nhiêu tiền?', options: ['6000đ', '8000đ', '5000đ', '7000đ'], correctIndex: 3 },
      { question: 'Một năm có mấy tháng?', options: ['12 tháng', '10 tháng', '11 tháng', '13 tháng'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Kim giờ chỉ số 9, kim phút chỉ số 6. Đồng hồ chỉ mấy giờ?', solution: ['Kim phút chỉ số 6 là 30 phút.', 'Kim giờ chỉ số 9 nên đồng hồ chỉ 9 giờ 30 phút.'] },
      { prompt: 'Bạn Nam có 3 tờ tiền 2000đ. Hỏi bạn Nam có tất cả bao nhiêu tiền?', solution: ['$2000+2000+2000=6000đ$', 'Bạn Nam có tất cả 6000 đồng.'] },
      {
        prompt: 'Một tuần có 7 ngày. Nếu hôm nay là thứ Ba, hỏi 7 ngày sau là thứ mấy?',
        solution: ['Sau đúng 7 ngày (1 tuần) sẽ quay lại cùng thứ.', '7 ngày sau vẫn là thứ Ba.'],
      },
      { prompt: 'Mẹ đưa cho Hoa tờ 10 000đ để mua vở giá 6000đ. Hỏi Hoa được trả lại bao nhiêu tiền?', solution: ['$10000-6000=4000đ$', 'Hoa được trả lại 4000 đồng.'] },
      { prompt: 'Kim giờ chỉ đúng số 2, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', solution: ['Kim phút chỉ số 12 là giờ đúng.', 'Kim giờ chỉ số 2 nên đồng hồ chỉ 2 giờ.'] },
    ],
    flashcards: [
      { front: 'Kim phút chỉ số 6 nghĩa là mấy phút?', back: '30 phút (giờ rưỡi)' },
      { front: '1 tuần có mấy ngày?', back: '7 ngày' },
      { front: '1 năm có mấy tháng?', back: '12 tháng' },
      { front: '2000đ + 3000đ', back: '5000đ' },
      { front: 'Tờ tiền mệnh giá lớn hơn: 5000đ hay 10 000đ?', back: '10 000đ' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Kim giờ chỉ số 6, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', options: ['6 giờ', '7 giờ', '5 giờ', '6 giờ 30 phút'], correctIndex: 0 },
        { question: 'Kim giờ ở giữa số 3 và 4, kim phút chỉ số 6. Đồng hồ chỉ mấy giờ?', options: ['4 giờ', '3 giờ 30 phút', '3 giờ', '4 giờ 30 phút'], correctIndex: 1 },
        { question: 'Một tuần có mấy ngày đi học (thứ Hai đến thứ Sáu)?', options: ['4 ngày', '6 ngày', '5 ngày', '7 ngày'], correctIndex: 2 },
        { question: 'Bạn Bình có tờ 5000đ và tờ 2000đ. Hỏi bạn Bình có tất cả bao nhiêu tiền?', options: ['6000đ', '8000đ', '9000đ', '7000đ'], correctIndex: 3 },
        { question: 'Kim phút chỉ số 12 gọi là gì?', options: ['Giờ đúng', 'Giờ rưỡi', '15 phút', '45 phút'], correctIndex: 0 },
        { question: 'Mẹ mua rau hết 8000đ, đưa 10 000đ. Hỏi mẹ được trả lại bao nhiêu tiền?', options: ['3000đ', '2000đ', '1000đ', '4000đ'], correctIndex: 1 },
        { question: 'Một năm có 12 tháng, hỏi từ tháng 3 đến tháng 6 (tính cả hai tháng) có mấy tháng?', options: ['3 tháng', '5 tháng', '4 tháng', '6 tháng'], correctIndex: 2 },
        { question: 'Bạn Hoa có 2 tờ 5000đ. Hỏi bạn Hoa có tất cả bao nhiêu tiền?', options: ['8000đ', '9000đ', '5000đ', '10000đ'], correctIndex: 3 },
        { question: 'Kim giờ chỉ số 11, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', options: ['11 giờ', '12 giờ', '10 giờ', '11 giờ 30 phút'], correctIndex: 0 },
        { question: 'Kim giờ ở giữa số 5 và 6, kim phút chỉ số 6. Đồng hồ chỉ mấy giờ?', options: ['6 giờ', '5 giờ 30 phút', '5 giờ', '6 giờ 30 phút'], correctIndex: 1 },
        { question: 'Bố đưa Nam tờ 20 000đ để mua bánh giá 14 000đ. Hỏi Nam được trả lại bao nhiêu tiền?', options: ['5000đ', '7000đ', '6000đ', '4000đ'], correctIndex: 2 },
        { question: 'Một tuần bắt đầu từ thứ Hai. Hỏi ngày thứ 5 trong tuần là thứ mấy?', options: ['Thứ Năm', 'Thứ Tư', 'Thứ Bảy', 'Thứ Sáu'], correctIndex: 3 },
        { question: 'Kim giờ chỉ số 8, kim phút chỉ số 12. Đồng hồ chỉ mấy giờ?', options: ['8 giờ', '9 giờ', '7 giờ', '8 giờ 30 phút'], correctIndex: 0 },
        { question: 'Bạn Lan có 3 tờ 1000đ và 1 tờ 2000đ. Hỏi bạn Lan có tất cả bao nhiêu tiền?', options: ['4000đ', '5000đ', '6000đ', '3000đ'], correctIndex: 1 },
        { question: 'Một năm bắt đầu từ tháng 1 và kết thúc ở tháng mấy?', options: ['Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 13'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Kim giờ ở giữa số 10 và 11, kim phút chỉ số 6. Đồng hồ chỉ mấy giờ? Hãy viết rõ giờ và phút.',
          solution: ['Kim phút chỉ số 6 nghĩa là 30 phút.', 'Kim giờ ở giữa số 10 và 11 nghĩa là đã qua 10 giờ.', 'Đồng hồ chỉ 10 giờ 30 phút.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Mẹ cho Mai 2 tờ tiền 5000đ để mua một quyển vở giá 7000đ. Hỏi Mai còn thừa lại bao nhiêu tiền?',
          solution: ['$5000+5000=10000đ$ (tổng số tiền mẹ cho)', '$10000-7000=3000đ$', 'Mai còn thừa lại 3000 đồng.'],
        },
      ],
    },
  },
}
