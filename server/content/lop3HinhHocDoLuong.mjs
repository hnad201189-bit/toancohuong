import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP3_HINH_HOC_DO_LUONG = {
  'l3-goc-hinh-tam-giac': {
    title: 'Góc vuông, góc không vuông; hình tam giác, hình tứ giác',
    theory: {
      cards: [
        {
          title: 'Góc vuông và góc không vuông',
          formulas: ['\\widehat{xOy} = 90^\\circ (góc vuông)', '\\widehat{mOn} < 90^\\circ (góc nhọn)'],
          legend: [
            'Góc vuông là góc có số đo bằng đúng $90^\\circ$',
            'Góc nhọn bé hơn góc vuông, góc tù lớn hơn góc vuông (và bé hơn góc bẹt)',
          ],
          note: 'Mẹo: dùng ê ke để kiểm tra góc vuông — nếu hai cạnh của góc trùng khít với hai cạnh của ê ke thì đó là góc vuông.',
        },
        {
          title: 'Hình tam giác và hình tứ giác',
          formulas: ['Tam giác: 3 cạnh, 3 đỉnh, 3 góc', 'Tứ giác: 4 cạnh, 4 đỉnh, 4 góc'],
          legend: [
            'Hình tam giác có 3 cạnh và 3 góc',
            'Hình tứ giác có 4 cạnh và 4 góc; hình chữ nhật, hình vuông là các tứ giác đặc biệt',
          ],
          note: 'Mẹo: đếm số cạnh (hoặc số đỉnh) của hình để biết đó là tam giác hay tứ giác — số cạnh và số góc của một hình luôn bằng nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 07:30 — goc_hinh_tam_giac_baigiang.mp4' },
    quiz: [
      { question: 'Góc vuông có số đo bằng bao nhiêu độ?', options: ['60 độ', '90 độ', '120 độ', '180 độ'], correctIndex: 1 },
      { question: 'Hình nào có 3 cạnh và 3 góc?', options: ['Hình tứ giác', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], correctIndex: 2 },
      { question: 'Dụng cụ nào dùng để kiểm tra góc vuông?', options: ['Ê ke', 'Thước dây', 'Compa', 'Cân'], correctIndex: 0 },
      { question: 'Góc nào có số đo bé hơn góc vuông?', options: ['Góc tù', 'Góc bẹt', 'Góc vuông', 'Góc nhọn'], correctIndex: 3 },
      { question: 'Hình chữ nhật và hình vuông là các hình gì đặc biệt?', options: ['Hình tam giác đặc biệt', 'Hình tứ giác đặc biệt', 'Hình tròn đặc biệt', 'Hình ngũ giác đặc biệt'], correctIndex: 1 },
    ],
    essays: [
      {
        prompt: 'Vì sao góc vuông là góc đặc biệt trong hình học? Nêu số đo của góc vuông.',
        solution: ['Góc vuông có số đo đúng bằng $90^\\circ$.', 'Góc vuông thường gặp ở các góc của hình vuông, hình chữ nhật.'],
      },
      {
        prompt: 'Một hình tam giác có 3 đỉnh là A, B, C. Hỏi hình đó có bao nhiêu cạnh và bao nhiêu góc?',
        solution: ['Hình tam giác có 3 cạnh: AB, BC, CA.', 'Hình tam giác có 3 góc tương ứng với 3 đỉnh A, B, C.'],
      },
      {
        prompt: 'Hình tứ giác MNPQ có bao nhiêu cạnh, bao nhiêu đỉnh?',
        solution: ['Hình tứ giác MNPQ có 4 cạnh: MN, NP, PQ, QM.', 'Hình tứ giác có 4 đỉnh: M, N, P, Q.'],
      },
      {
        prompt: 'Dùng ê ke, bạn Lan kiểm tra 4 góc của một cái bảng và thấy cả 4 góc đều là góc vuông. Bảng đó có hình dạng gì?',
        solution: ['Vì bảng có 4 góc vuông và có 4 cạnh nên bảng đó có dạng hình chữ nhật (hoặc hình vuông nếu 4 cạnh bằng nhau).'],
      },
      {
        prompt: 'Quan sát mặt đồng hồ lúc 3 giờ đúng, kim giờ và kim phút tạo thành góc gì?',
        solution: ['Lúc 3 giờ đúng, kim phút chỉ số 12, kim giờ chỉ số 3.', 'Hai kim tạo thành góc vuông ($90^\\circ$).'],
      },
    ],
    flashcards: [
      { front: 'Góc vuông có số đo bao nhiêu độ?', back: '$90^\\circ$' },
      { front: 'Dụng cụ kiểm tra góc vuông', back: 'Ê ke' },
      { front: 'Hình tam giác có mấy cạnh?', back: '3 cạnh' },
      { front: 'Hình tứ giác có mấy góc?', back: '4 góc' },
      { front: 'Góc bé hơn góc vuông gọi là góc gì?', back: 'Góc nhọn' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Góc vuông có số đo là?', options: ['90 độ', '45 độ', '60 độ', '120 độ'], correctIndex: 0 },
        { question: 'Hình có 4 cạnh, 4 góc được gọi là hình gì?', options: ['Hình tam giác', 'Hình tứ giác', 'Hình tròn', 'Hình ngũ giác'], correctIndex: 1 },
        { question: 'Góc lớn hơn góc vuông được gọi là góc gì?', options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt (180 độ)'], correctIndex: 2 },
        { question: 'Trong các hình sau, hình nào là tứ giác đặc biệt có 4 góc vuông và 4 cạnh bằng nhau?', options: ['Hình tam giác', 'Hình chữ nhật', 'Hình thang', 'Hình vuông'], correctIndex: 3 },
        { question: 'Ê ke dùng để làm gì?', options: ['Kiểm tra góc vuông', 'Đo khối lượng', 'Đo thời gian', 'Đo dung tích'], correctIndex: 0 },
        { question: 'Hình tam giác ABC có mấy góc?', options: ['2 góc', '3 góc', '4 góc', '5 góc'], correctIndex: 1 },
        { question: 'Một cái cửa sổ hình chữ nhật có mấy góc vuông?', options: ['2 góc vuông', '3 góc vuông', '4 góc vuông', 'Không có góc vuông'], correctIndex: 2 },
        { question: 'Góc bẹt có số đo bằng bao nhiêu độ?', options: ['90 độ', '120 độ', '150 độ', '180 độ'], correctIndex: 3 },
        { question: 'Hình tứ giác MNPQ có bao nhiêu đỉnh?', options: ['4 đỉnh', '3 đỉnh', '5 đỉnh', '6 đỉnh'], correctIndex: 0 },
        { question: 'Lúc 9 giờ đúng, kim giờ và kim phút của đồng hồ tạo thành góc gì?', options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'], correctIndex: 1 },
        { question: 'Hình có 3 cạnh và 3 góc bằng nhau được gọi là gì?', options: ['Tam giác vuông', 'Tam giác cân', 'Tam giác đều', 'Tứ giác đều'], correctIndex: 2 },
        { question: 'Một biển báo giao thông hình tam giác có bao nhiêu góc?', options: ['2 góc', '5 góc', '4 góc', '3 góc'], correctIndex: 3 },
        { question: 'Góc nhọn có số đo như thế nào so với góc vuông?', options: ['Bé hơn góc vuông', 'Bằng góc vuông', 'Lớn hơn góc vuông', 'Bằng góc bẹt'], correctIndex: 0 },
        { question: 'Hình vuông có bao nhiêu góc vuông và bao nhiêu cạnh bằng nhau?', options: ['3 góc vuông, 3 cạnh bằng nhau', '4 góc vuông, 4 cạnh bằng nhau', '4 góc vuông, 2 cạnh bằng nhau', '2 góc vuông, 4 cạnh bằng nhau'], correctIndex: 1 },
        { question: 'Quan sát quyển sách hình chữ nhật, số góc vuông của quyển sách là?', options: ['2 góc', '3 góc', '4 góc', '0 góc'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Dùng ê ke để kiểm tra, bạn Minh thấy hình ABCD có cả 4 góc đều là góc vuông nhưng 4 cạnh không bằng nhau (chỉ có 2 cặp cạnh đối diện bằng nhau). Hình ABCD là hình gì? Vì sao?',
          solution: ['Hình ABCD có 4 góc vuông và các cặp cạnh đối diện bằng nhau nên đó là hình chữ nhật.', 'Nếu cả 4 cạnh đều bằng nhau thì mới là hình vuông.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một tấm bìa hình tứ giác có 4 góc, trong đó bạn An đo được 2 góc vuông, 1 góc nhọn 70 độ và 1 góc còn lại. Biết tổng số đo 4 góc của tứ giác đó bằng 360 độ. Hỏi góc còn lại có số đo bao nhiêu độ?',
          solution: [
            'Tổng 2 góc vuông: $90+90=180$ độ',
            'Tổng 3 góc đã biết: $180+70=250$ độ',
            'Góc còn lại: $360-250=110$ độ',
            'Vậy góc còn lại có số đo $110^\\circ$ (là góc tù).',
          ],
        },
      ],
    },
  },

  'l3-chu-vi-hcn-hv': {
    title: 'Chu vi hình chữ nhật, hình vuông',
    theory: {
      cards: [
        {
          title: 'Chu vi hình chữ nhật',
          formulas: ['P = (a+b) \\times 2', '(12+8) \\times 2 = 40 (cm)'],
          legend: [
            'a là chiều dài, b là chiều rộng của hình chữ nhật (cùng đơn vị đo)',
            'Chu vi hình chữ nhật bằng tổng chiều dài và chiều rộng, nhân 2',
          ],
          note: 'Mẹo: nhớ công thức "(dài + rộng) nhân 2", đừng quên nhân 2 ở cuối!',
        },
        {
          title: 'Chu vi hình vuông',
          formulas: ['P = a \\times 4', '9 \\times 4 = 36 (cm)'],
          legend: [
            'a là độ dài một cạnh hình vuông',
            'Chu vi hình vuông bằng độ dài một cạnh nhân với 4 vì hình vuông có 4 cạnh bằng nhau',
          ],
          note: 'Mẹo: hình vuông có 4 cạnh bằng nhau nên chỉ cần biết 1 cạnh là tính được chu vi bằng cách nhân với 4.',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — chu_vi_hcn_hv_baigiang.mp4' },
    quiz: [
      { question: 'Hình chữ nhật có chiều dài 15cm, chiều rộng 8cm. Chu vi là bao nhiêu?', options: ['44cm', '46cm', '48cm', '23cm'], correctIndex: 1 },
      { question: 'Hình vuông có cạnh 7cm. Chu vi là bao nhiêu?', options: ['21cm', '24cm', '28cm', '14cm'], correctIndex: 2 },
      { question: 'Công thức tính chu vi hình chữ nhật là?', options: ['$P=a\\times4$', '$P=(a+b)\\times2$', '$P=a\\times b$', '$P=a+b$'], correctIndex: 1 },
      { question: 'Một hình vuông có chu vi 36cm. Cạnh hình vuông đó dài bao nhiêu?', options: ['10cm', '8cm', '9cm', '12cm'], correctIndex: 2 },
      { question: 'Hình chữ nhật có chu vi 30cm, chiều dài 9cm. Chiều rộng là bao nhiêu?', options: ['6cm', '7cm', '5cm', '8cm'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính chu vi hình chữ nhật có chiều dài 12cm, chiều rộng 5cm.', solution: ['$P=(12+5)\\times2=34$ (cm)'] },
      { prompt: 'Tính chu vi hình vuông có cạnh 11cm.', solution: ['$P=11\\times4=44$ (cm)'] },
      {
        prompt: 'Một mảnh vườn hình chữ nhật có chiều dài 20m, chiều rộng 14m. Người ta muốn rào xung quanh mảnh vườn bằng lưới thép. Hỏi cần bao nhiêu mét lưới thép?',
        solution: ['$P=(20+14)\\times2=68$ (m)', 'Cần 68 mét lưới thép.'],
      },
      {
        prompt: 'Một khung ảnh hình vuông có chu vi 52cm. Tính độ dài cạnh khung ảnh.',
        solution: ['$52\\div4=13$ (cm)', 'Cạnh khung ảnh dài 13cm.'],
      },
      {
        prompt: 'Một sân chơi hình chữ nhật có chu vi 90m, chiều rộng 18m. Tính chiều dài sân chơi.',
        solution: ['Nửa chu vi: $90\\div2=45$ (m)', 'Chiều dài: $45-18=27$ (m)'],
      },
    ],
    flashcards: [
      { front: 'Công thức chu vi hình chữ nhật', back: '$P=(a+b)\\times2$' },
      { front: 'Công thức chu vi hình vuông', back: '$P=a\\times4$' },
      { front: 'Chu vi hình chữ nhật dài 10cm, rộng 6cm', back: '$(10+6)\\times2=32$cm' },
      { front: 'Chu vi hình vuông cạnh 8cm', back: '$8\\times4=32$cm' },
      { front: 'Hình vuông có chu vi 24cm, cạnh dài bao nhiêu?', back: '$24\\div4=6$cm' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình chữ nhật dài 18cm, rộng 7cm. Chu vi là bao nhiêu?', options: ['50cm', '48cm', '52cm', '46cm'], correctIndex: 0 },
        { question: 'Hình vuông cạnh 12cm. Chu vi là bao nhiêu?', options: ['44cm', '48cm', '52cm', '40cm'], correctIndex: 1 },
        { question: 'Công thức tính chu vi hình vuông là?', options: ['$P=(a+b)\\times2$', '$P=a\\times b$', '$P=a\\times4$', '$P=a+4$'], correctIndex: 2 },
        { question: 'Hình chữ nhật có chu vi 60cm, chiều rộng 12cm. Chiều dài là bao nhiêu?', options: ['16cm', '20cm', '24cm', '18cm'], correctIndex: 3 },
        { question: 'Hình vuông có chu vi 40cm. Cạnh hình vuông là bao nhiêu?', options: ['10cm', '12cm', '8cm', '9cm'], correctIndex: 0 },
        { question: 'Hình chữ nhật dài 25m, rộng 15m. Chu vi là bao nhiêu?', options: ['75m', '80m', '85m', '70m'], correctIndex: 1 },
        { question: 'Một khu đất hình vuông cạnh 35m. Chu vi khu đất là bao nhiêu?', options: ['130m', '135m', '140m', '145m'], correctIndex: 2 },
        { question: 'Hình chữ nhật có chu vi 54cm, chiều dài 17cm. Chiều rộng là bao nhiêu?', options: ['12cm', '14cm', '8cm', '10cm'], correctIndex: 3 },
        {
          question: 'Một bức tranh hình chữ nhật dài 40cm, rộng 25cm. Viền khung quanh tranh dài bao nhiêu xăng-ti-mét?',
          options: ['130cm', '125cm', '135cm', '120cm'],
          correctIndex: 0,
        },
        { question: 'Một tấm thảm hình vuông có cạnh 6dm. Chu vi tấm thảm là bao nhiêu đề-xi-mét?', options: ['20dm', '24dm', '28dm', '18dm'], correctIndex: 1 },
        { question: 'Hình chữ nhật rộng 9cm, chiều dài gấp đôi chiều rộng. Tính chu vi hình chữ nhật đó.', options: ['48cm', '50cm', '54cm', '56cm'], correctIndex: 2 },
        { question: 'Sân trường hình chữ nhật có chu vi 200m, chiều dài 60m. Chiều rộng là bao nhiêu?', options: ['30m', '35m', '45m', '40m'], correctIndex: 3 },
        {
          question: 'Hình vuông có cạnh bằng chiều rộng của hình chữ nhật dài 20cm, rộng 5cm. Tính chu vi hình vuông đó.',
          options: ['20cm', '15cm', '25cm', '10cm'],
          correctIndex: 0,
        },
        { question: 'Một khung cửa sổ hình vuông có chu vi 3m 2dm (= 32dm). Cạnh cửa sổ dài bao nhiêu đề-xi-mét?', options: ['6dm', '8dm', '10dm', '12dm'], correctIndex: 1 },
        { question: 'Hình chữ nhật có chiều dài 14cm, chu vi 44cm. Tính chiều rộng.', options: ['6cm', '7cm', '8cm', '9cm'], correctIndex: 2 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính chu vi hình chữ nhật có chiều dài 24cm và chiều rộng 16cm.', solution: ['$P=(24+16)\\times2=80$ (cm)'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một mảnh đất hình chữ nhật có chiều rộng 20m, chiều dài gấp đôi chiều rộng. Người ta muốn quây rào xung quanh mảnh đất 3 vòng dây thép gai. Hỏi cần bao nhiêu mét dây thép gai?',
          solution: [
            'Chiều dài mảnh đất: $20\\times2=40$ (m)',
            'Chu vi mảnh đất: $(40+20)\\times2=120$ (m)',
            'Số mét dây thép gai cần cho 3 vòng: $120\\times3=360$ (m)',
          ],
        },
      ],
    },
  },

  'l3-dien-tich-hcn-hv': {
    title: 'Diện tích hình chữ nhật, hình vuông',
    theory: {
      cards: [
        {
          title: 'Diện tích hình chữ nhật',
          formulas: ['S = a \\times b', '12 \\times 5 = 60 (cm^2)'],
          legend: [
            'a là chiều dài, b là chiều rộng (cùng đơn vị đo)',
            'Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng',
          ],
          note: 'Mẹo: đơn vị diện tích thường dùng là xăng-ti-mét vuông ($cm^2$), đề-xi-mét vuông ($dm^2$), mét vuông ($m^2$) — nhớ viết thêm "vuông" sau đơn vị đo độ dài.',
        },
        {
          title: 'Diện tích hình vuông',
          formulas: ['S = a \\times a', '6 \\times 6 = 36 (cm^2)'],
          legend: [
            'a là độ dài một cạnh hình vuông',
            'Diện tích hình vuông bằng cạnh nhân với chính nó',
          ],
          note: 'Mẹo: đừng nhầm diện tích ($a\\times a$, đơn vị vuông) với chu vi ($a\\times4$, đơn vị thường) của hình vuông.',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — dien_tich_hcn_hv_baigiang.mp4' },
    quiz: [
      { question: 'Hình chữ nhật dài 9cm, rộng 4cm. Diện tích là bao nhiêu?', options: ['36cm²', '32cm²', '40cm²', '13cm²'], correctIndex: 0 },
      { question: 'Hình vuông cạnh 8cm. Diện tích là bao nhiêu?', options: ['32cm²', '64cm²', '56cm²', '16cm²'], correctIndex: 1 },
      { question: 'Công thức tính diện tích hình chữ nhật là?', options: ['$S=(a+b)\\times2$', '$S=a\\times4$', '$S=a\\times b$', '$S=a\\times a$'], correctIndex: 2 },
      { question: 'Hình vuông có diện tích 49cm². Cạnh hình vuông là bao nhiêu?', options: ['6cm', '8cm', '7cm', '9cm'], correctIndex: 2 },
      { question: 'Hình chữ nhật có diện tích 48cm², chiều rộng 6cm. Chiều dài là bao nhiêu?', options: ['9cm', '8cm', '7cm', '10cm'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'Tính diện tích hình chữ nhật có chiều dài 15cm, chiều rộng 6cm.', solution: ['$S=15\\times6=90$ ($cm^2$)'] },
      { prompt: 'Tính diện tích hình vuông có cạnh 9cm.', solution: ['$S=9\\times9=81$ ($cm^2$)'] },
      {
        prompt: 'Một mảnh ruộng hình chữ nhật có chiều dài 40m, chiều rộng 25m. Tính diện tích mảnh ruộng.',
        solution: ['$S=40\\times25=1000$ ($m^2$)'],
      },
      {
        prompt: 'Một viên gạch hình vuông có diện tích 25cm². Tính độ dài cạnh viên gạch.',
        solution: ['Vì $5\\times5=25$ nên cạnh viên gạch dài 5cm.'],
      },
      {
        prompt: 'Một căn phòng hình chữ nhật có diện tích 24m², chiều rộng 4m. Tính chiều dài căn phòng.',
        solution: ['$24\\div4=6$ (m)', 'Chiều dài căn phòng là 6m.'],
      },
    ],
    flashcards: [
      { front: 'Công thức diện tích hình chữ nhật', back: '$S=a\\times b$' },
      { front: 'Công thức diện tích hình vuông', back: '$S=a\\times a$' },
      { front: 'Diện tích hình chữ nhật dài 7cm, rộng 3cm', back: '$7\\times3=21\\,cm^2$' },
      { front: 'Diện tích hình vuông cạnh 5cm', back: '$5\\times5=25\\,cm^2$' },
      { front: 'Đơn vị đo diện tích thường dùng', back: '$cm^2, dm^2, m^2$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình chữ nhật dài 11cm, rộng 5cm. Diện tích là bao nhiêu?', options: ['55cm²', '50cm²', '60cm²', '45cm²'], correctIndex: 0 },
        { question: 'Hình vuông cạnh 10cm. Diện tích là bao nhiêu?', options: ['40cm²', '100cm²', '80cm²', '60cm²'], correctIndex: 1 },
        { question: 'Công thức tính diện tích hình vuông là?', options: ['$S=a\\times4$', '$S=(a+b)\\times2$', '$S=a\\times a$', '$S=a+b$'], correctIndex: 2 },
        { question: 'Hình chữ nhật có diện tích 72cm², chiều dài 9cm. Chiều rộng là bao nhiêu?', options: ['9cm', '7cm', '6cm', '8cm'], correctIndex: 3 },
        { question: 'Hình vuông có diện tích 81cm². Cạnh hình vuông là bao nhiêu?', options: ['9cm', '8cm', '7cm', '6cm'], correctIndex: 0 },
        { question: 'Hình chữ nhật dài 30m, rộng 12m. Diện tích là bao nhiêu?', options: ['320m²', '360m²', '340m²', '380m²'], correctIndex: 1 },
        { question: 'Một khu vườn hình vuông cạnh 14m. Diện tích khu vườn là bao nhiêu?', options: ['186m²', '190m²', '196m²', '200m²'], correctIndex: 2 },
        { question: 'Hình chữ nhật có diện tích 96cm², chiều rộng 8cm. Chiều dài là bao nhiêu?', options: ['10cm', '11cm', '13cm', '12cm'], correctIndex: 3 },
        {
          question: 'Một tấm bảng hình chữ nhật dài 120cm, rộng 80cm. Diện tích tấm bảng là bao nhiêu?',
          options: ['9600cm²', '9800cm²', '9400cm²', '9200cm²'],
          correctIndex: 0,
        },
        { question: 'Một viên gạch men hình vuông cạnh 30cm. Diện tích viên gạch là bao nhiêu?', options: ['600cm²', '900cm²', '800cm²', '1200cm²'], correctIndex: 1 },
        {
          question: 'Hình chữ nhật rộng 6cm, chiều dài gấp 3 lần chiều rộng. Tính diện tích hình chữ nhật đó.',
          options: ['96cm²', '102cm²', '108cm²', '114cm²'],
          correctIndex: 2,
        },
        { question: 'Một sân bóng hình chữ nhật diện tích 2400m², chiều dài 60m. Chiều rộng là bao nhiêu?', options: ['30m', '35m', '45m', '40m'], correctIndex: 3 },
        {
          question: 'So sánh diện tích hình chữ nhật dài 8cm, rộng 5cm với hình vuông cạnh 6cm, hình nào có diện tích lớn hơn?',
          options: ['Hình chữ nhật lớn hơn', 'Hình vuông lớn hơn', 'Bằng nhau', 'Không so sánh được'],
          correctIndex: 0,
        },
        { question: 'Một mảnh đất hình vuông có chu vi 48m. Tính diện tích mảnh đất đó.', options: ['124m²', '144m²', '154m²', '134m²'], correctIndex: 1 },
        { question: 'Một tờ giấy hình chữ nhật dài 25cm, rộng 16cm. Diện tích tờ giấy là bao nhiêu?', options: ['380cm²', '390cm²', '400cm²', '410cm²'], correctIndex: 2 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính diện tích hình chữ nhật có chiều dài 32cm và chiều rộng 18cm.', solution: ['$S=32\\times18=576$ ($cm^2$)'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một khu vườn hình chữ nhật có chiều dài 50m, chiều rộng 30m. Người ta dành một phần đất hình vuông cạnh 10m ở góc vườn để trồng hoa, phần còn lại trồng rau. Tính diện tích phần đất trồng rau.',
          solution: [
            'Diện tích cả khu vườn: $50\\times30=1500$ ($m^2$)',
            'Diện tích phần trồng hoa: $10\\times10=100$ ($m^2$)',
            'Diện tích phần trồng rau: $1500-100=1400$ ($m^2$)',
          ],
        },
      ],
    },
  },

  'l3-don-vi-do-tien-thoi-gian': {
    title: 'Đơn vị đo độ dài, khối lượng, thời gian và tiền Việt Nam',
    theory: {
      cards: [
        {
          title: 'Đơn vị đo độ dài và khối lượng',
          formulas: ['1km = 1000m', '1kg = 1000g'],
          legend: [
            'Đơn vị đo độ dài: mm, cm, dm, m, km',
            'Đơn vị đo khối lượng: g, kg (1kg = 1000g)',
          ],
          note: 'Mẹo: khi đổi từ đơn vị lớn sang đơn vị bé, ta nhân; khi đổi từ đơn vị bé sang đơn vị lớn, ta chia.',
        },
        {
          title: 'Đơn vị đo thời gian và tiền Việt Nam',
          formulas: ['1 giờ = 60 phút', '1 ngày = 24 giờ'],
          legend: [
            'Đơn vị đo thời gian: giây, phút, giờ, ngày, tuần, tháng, năm',
            'Tiền Việt Nam thường dùng: 1000đ, 2000đ, 5000đ, 10 000đ, 20 000đ, 50 000đ, 100 000đ',
          ],
          note: 'Mẹo: khi tính tiền, con cộng dồn giá trị của từng tờ tiền hoặc đổi các tờ tiền nhỏ ra tờ tiền lớn để dễ tính.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — don_vi_do_tien_thoi_gian_baigiang.mp4' },
    quiz: [
      { question: '1km bằng bao nhiêu mét?', options: ['100m', '1000m', '10m', '10000m'], correctIndex: 1 },
      { question: '1kg bằng bao nhiêu gam?', options: ['10g', '100g', '1000g', '10000g'], correctIndex: 2 },
      { question: '1 giờ bằng bao nhiêu phút?', options: ['24 phút', '100 phút', '30 phút', '60 phút'], correctIndex: 3 },
      {
        question: 'Bạn Nam có 2 tờ 5000 đồng và 1 tờ 2000 đồng. Bạn Nam có tất cả bao nhiêu tiền?',
        options: ['10000 đồng', '12000 đồng', '7000 đồng', '14000 đồng'],
        correctIndex: 1,
      },
      { question: '1 ngày có bao nhiêu giờ?', options: ['12 giờ', '60 giờ', '24 giờ', '7 giờ'], correctIndex: 2 },
    ],
    essays: [
      { prompt: 'Đổi: $3km = ?\\,m$.', solution: ['$3km = 3000m$'] },
      { prompt: 'Đổi: $5kg = ?\\,g$.', solution: ['$5kg=5000g$'] },
      {
        prompt: 'Một chiếc xe đi từ 7 giờ đến 9 giờ 30 phút. Hỏi xe đi trong bao lâu?',
        solution: ['Thời gian đi: từ 7 giờ đến 9 giờ 30 phút là 2 giờ 30 phút.'],
      },
      {
        prompt: 'Mẹ đưa Lan 1 tờ 20 000 đồng để mua vở giá 15 000 đồng. Hỏi cô bán hàng phải trả lại Lan bao nhiêu tiền?',
        solution: ['$20000-15000=5000$ (đồng)', 'Cô bán hàng trả lại Lan 5000 đồng.'],
      },
      {
        prompt: 'Một bao gạo nặng 25kg, một bao ngô nặng 18kg. Hỏi cả hai bao nặng tất cả bao nhiêu ki-lô-gam?',
        solution: ['$25+18=43$ (kg)', 'Cả hai bao nặng tất cả 43kg.'],
      },
    ],
    flashcards: [
      { front: '1km = ? m', back: '1000m' },
      { front: '1kg = ? g', back: '1000g' },
      { front: '1 giờ = ? phút', back: '60 phút' },
      { front: '1 ngày = ? giờ', back: '24 giờ' },
      { front: 'Tờ tiền Việt Nam mệnh giá lớn nhất trong: 1000đ, 5000đ, 10000đ, 20000đ', back: '20 000 đồng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '$2km = ?\\,m$', options: ['2000m', '200m', '20000m', '1200m'], correctIndex: 0 },
        { question: '$4kg = ?\\,g$', options: ['400g', '4000g', '40000g', '4g'], correctIndex: 1 },
        { question: '$3$ giờ $= ?$ phút', options: ['160 phút', '170 phút', '180 phút', '190 phút'], correctIndex: 2 },
        { question: '2 ngày $= ?$ giờ', options: ['12 giờ', '24 giờ', '36 giờ', '48 giờ'], correctIndex: 3 },
        { question: 'Đổi $5000m = ?\\,km$', options: ['5km', '50km', '500km', '0,5km'], correctIndex: 0 },
        { question: 'Đổi $7000g = ?\\,kg$', options: ['70kg', '7kg', '700kg', '0,7kg'], correctIndex: 1 },
        {
          question: 'Một túi đường nặng 2kg, một túi bột nặng 750g. Hỏi cả hai túi nặng bao nhiêu gam?',
          options: ['2650g', '2700g', '2750g', '2850g'],
          correctIndex: 2,
        },
        {
          question: 'Bạn Hoa có 3 tờ 10 000 đồng. Bạn Hoa có tất cả bao nhiêu tiền?',
          options: ['13000 đồng', '20000 đồng', '25000 đồng', '30000 đồng'],
          correctIndex: 3,
        },
        {
          question: 'Một trận đấu bóng đá bắt đầu lúc 15 giờ 30 phút, kết thúc lúc 17 giờ 15 phút. Trận đấu kéo dài bao lâu?',
          options: ['1 giờ 45 phút', '1 giờ 30 phút', '2 giờ 15 phút', '1 giờ 15 phút'],
          correctIndex: 0,
        },
        {
          question: 'Bố mua rau hết 35 000 đồng, đưa cô bán hàng tờ 50 000 đồng. Hỏi cô bán hàng trả lại bố bao nhiêu tiền?',
          options: ['10000 đồng', '15000 đồng', '20000 đồng', '25000 đồng'],
          correctIndex: 1,
        },
        {
          question: 'Một chiếc cầu dài 3km 250m. Đổi ra mét thì chiếc cầu dài bao nhiêu mét?',
          options: ['3025m', '3205m', '3250m', '3520m'],
          correctIndex: 2,
        },
        {
          question: 'Một con voi nặng 4 tấn, một con bò nặng 300kg (biết 1 tấn = 1000kg). Hỏi con voi nặng hơn con bò bao nhiêu ki-lô-gam?',
          options: ['3500kg', '3600kg', '3900kg', '3700kg'],
          correctIndex: 3,
        },
        {
          question: 'Em An đi ngủ lúc 21 giờ và thức dậy lúc 6 giờ sáng hôm sau. Hỏi em An ngủ bao nhiêu giờ?',
          options: ['9 giờ', '8 giờ', '10 giờ', '7 giờ'],
          correctIndex: 0,
        },
        {
          question: 'Một cửa hàng bán 1 quyển sách giá 45 000 đồng và 1 cây bút giá 8 000 đồng. Bạn Tùng đưa 2 tờ 50 000 đồng để trả tiền. Hỏi cửa hàng phải trả lại bao nhiêu tiền?',
          options: ['45000 đồng', '47000 đồng', '50000 đồng', '43000 đồng'],
          correctIndex: 1,
        },
        {
          question: 'Một xe tải chở được 2 tấn hàng, đã chở 3 chuyến. Hỏi xe tải đó chở được tất cả bao nhiêu ki-lô-gam hàng (biết 1 tấn = 1000kg)?',
          options: ['5000kg', '5500kg', '6000kg', '6500kg'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đổi $8km\\,300m$ ra mét, và cho biết 1 giờ 20 phút bằng bao nhiêu phút.',
          solution: ['$8km\\,300m = 8300m$', '1 giờ 20 phút $=60+20=80$ phút'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Mẹ đi chợ mua 3kg thịt hết 210 000 đồng và 2kg cá hết 130 000 đồng. Mẹ đưa cho cô bán hàng 2 tờ 200 000 đồng. Hỏi cô bán hàng phải trả lại mẹ bao nhiêu tiền?',
          solution: [
            'Tổng số tiền mẹ mua: $210000+130000=340000$ (đồng)',
            'Số tiền mẹ đưa: $200000\\times2=400000$ (đồng)',
            'Số tiền cô bán hàng trả lại: $400000-340000=60000$ (đồng)',
          ],
        },
      ],
    },
  },
}
