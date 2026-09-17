import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP5_HINH_HOC_DO_LUONG = {
  'l5-dien-tich-hinh-thang': {
    title: 'Diện tích hình thang',
    theory: {
      cards: [
        {
          title: 'Công thức tính diện tích hình thang',
          formulas: ['S = \\dfrac{(a+b)\\times h}{2}'],
          legend: [
            '$a$: độ dài đáy lớn',
            '$b$: độ dài đáy nhỏ',
            '$h$: chiều cao (khoảng cách giữa hai đáy)',
            '$S$: diện tích hình thang',
          ],
          note: 'Mẹo: diện tích hình thang bằng tổng độ dài hai đáy nhân với chiều cao rồi chia 2. Nhớ đưa các số đo về cùng một đơn vị trước khi tính.',
        },
        {
          title: 'Tính đáy hoặc chiều cao khi biết diện tích',
          formulas: [
            'h = S\\times2:(a+b)',
            'a+b = S\\times2:h',
          ],
          legend: [
            'Muốn tìm chiều cao, lấy diện tích nhân 2 rồi chia cho tổng hai đáy',
            'Muốn tìm tổng hai đáy, lấy diện tích nhân 2 rồi chia cho chiều cao',
          ],
          note: 'Mẹo: đây là các công thức ngược của công thức tính diện tích, suy ra bằng cách "chuyển vế" giống bài toán tìm số hạng chưa biết.',
        },
      ],
    },
    video: { caption: '00:00 / 09:20 — dien_tich_hinh_thang_baigiang.mp4' },
    quiz: [
      {
        question: 'Một hình thang có đáy lớn 12cm, đáy nhỏ 8cm, chiều cao 5cm. Diện tích hình thang là bao nhiêu?',
        options: ['50cm²', '20cm²', '100cm²', '40cm²'],
        correctIndex: 0,
      },
      {
        question: 'Công thức tính diện tích hình thang là:',
        options: ['$S=a\\times b$', '$S=\\dfrac{(a+b)\\times h}{2}$', '$S=(a+b)\\times h$', '$S=a\\times h$'],
        correctIndex: 1,
      },
      {
        question: 'Một hình thang có tổng hai đáy 18m, chiều cao 6m. Diện tích hình thang là bao nhiêu?',
        options: ['108m²', '24m²', '54m²', '72m²'],
        correctIndex: 2,
      },
      {
        question: 'Một hình thang có diện tích 60cm², chiều cao 8cm. Tổng hai đáy của hình thang là bao nhiêu?',
        options: ['15cm', '7,5cm', '480cm', '120cm'],
        correctIndex: 0,
      },
      {
        question: 'Một mảnh vườn hình thang có đáy lớn 20m, đáy nhỏ 14m, chiều cao 10m. Diện tích mảnh vườn là bao nhiêu?',
        options: ['340m²', '170m²', '240m²', '140m²'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Tính diện tích hình thang có đáy lớn 15cm, đáy nhỏ 9cm, chiều cao 7cm.',
        solution: ['$S=\\dfrac{(15+9)\\times7}{2}=\\dfrac{24\\times7}{2}=\\dfrac{168}{2}=84$cm²'],
      },
      {
        prompt: 'Một thửa ruộng hình thang có đáy lớn 40m, đáy nhỏ 25m, chiều cao 12m. Tính diện tích thửa ruộng đó.',
        solution: ['$S=\\dfrac{(40+25)\\times12}{2}=\\dfrac{65\\times12}{2}=\\dfrac{780}{2}=390$m²'],
      },
      {
        prompt: 'Một hình thang có diện tích 96m², đáy lớn 14m, đáy nhỏ 10m. Tính chiều cao của hình thang.',
        solution: ['Tổng hai đáy: $14+10=24$m', 'Chiều cao: $h=96\\times2:24=192:24=8$m'],
      },
      {
        prompt: 'Một mảnh đất hình thang có chiều cao 9m, diện tích 117m². Đáy lớn hơn đáy nhỏ 4m. Tính độ dài mỗi đáy.',
        solution: [
          'Tổng hai đáy: $117\\times2:9=234:9=26$m',
          'Đáy lớn: $(26+4):2=15$m',
          'Đáy nhỏ: $26-15=11$m',
        ],
      },
      {
        prompt: 'Một cái ao hình thang có đáy lớn 24m, đáy nhỏ 16m, chiều cao 10m. Người ta muốn rải bùn cải tạo với mức 2kg bùn cho mỗi mét vuông. Hỏi cần bao nhiêu ki-lô-gam bùn?',
        solution: [
          'Diện tích ao: $S=\\dfrac{(24+16)\\times10}{2}=\\dfrac{400}{2}=200$m²',
          'Số bùn cần dùng: $200\\times2=400$kg',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức tính diện tích hình thang', back: '$S=\\dfrac{(a+b)\\times h}{2}$ với $a,b$ là hai đáy, $h$ là chiều cao' },
      { front: 'Trong công thức tính diện tích hình thang, $h$ là gì?', back: 'Chiều cao — khoảng cách giữa hai đáy' },
      { front: 'Muốn tìm chiều cao hình thang khi biết diện tích và hai đáy, ta làm gì?', back: 'Lấy diện tích nhân 2 rồi chia cho tổng hai đáy' },
      { front: 'Diện tích hình thang có hai đáy 10cm, 6cm, chiều cao 4cm', back: '$\\dfrac{(10+6)\\times4}{2}=32$cm²' },
      { front: 'Muốn tìm tổng hai đáy khi biết diện tích và chiều cao, ta làm gì?', back: 'Lấy diện tích nhân 2 rồi chia cho chiều cao' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Một hình thang có đáy lớn 16cm, đáy nhỏ 10cm, chiều cao 8cm. Diện tích hình thang là bao nhiêu?',
          options: ['208cm²', '104cm²', '52cm²', '128cm²'],
          correctIndex: 1,
        },
        {
          question: 'Hình thang có hai đáy bằng nhau (đáy lớn = đáy nhỏ) thì trở thành hình gì?',
          options: ['Hình tam giác', 'Hình bình hành', 'Hình tròn', 'Hình thoi'],
          correctIndex: 1,
        },
        {
          question: 'Một hình thang có tổng hai đáy 26m, chiều cao 8m. Diện tích hình thang là bao nhiêu?',
          options: ['104m²', '208m²', '52m²', '34m²'],
          correctIndex: 0,
        },
        {
          question: 'Một hình thang có diện tích 45cm², chiều cao 6cm. Tổng hai đáy là bao nhiêu?',
          options: ['7,5cm', '270cm', '270,5cm', '15cm'],
          correctIndex: 3,
        },
        {
          question: 'Một hình thang có đáy lớn 22cm, đáy nhỏ 18cm, diện tích 160cm². Tính chiều cao.',
          options: ['8cm', '4cm', '16cm', '10cm'],
          correctIndex: 0,
        },
        {
          question: 'Muốn tính diện tích hình thang, ta lấy:',
          options: [
            'Tổng hai đáy nhân với chiều cao',
            'Tổng hai đáy nhân với chiều cao rồi chia 2',
            'Hiệu hai đáy nhân với chiều cao rồi chia 2',
            'Tích hai đáy chia cho chiều cao',
          ],
          correctIndex: 1,
        },
        {
          question: 'Một khu vườn hình thang có đáy lớn 30m, đáy nhỏ 20m, chiều cao 15m. Diện tích khu vườn là bao nhiêu?',
          options: ['750m²', '375m²', '450m²', '300m²'],
          correctIndex: 1,
        },
        {
          question: 'Một hình thang có đáy lớn hơn đáy nhỏ 6m, tổng hai đáy là 20m. Đáy lớn dài bao nhiêu mét?',
          options: ['13m', '14m', '12m', '7m'],
          correctIndex: 1,
        },
        {
          question: 'Hình thang ABCD có AB là đáy nhỏ, CD là đáy lớn. Chiều cao của hình thang là:',
          options: [
            'Độ dài cạnh AD',
            'Khoảng cách giữa hai đáy AB và CD',
            'Độ dài cạnh BC',
            'Trung bình cộng của AB và CD',
          ],
          correctIndex: 1,
        },
        {
          question: 'Một mảnh ruộng hình thang có đáy lớn 45m, đáy nhỏ 35m, chiều cao 20m. Diện tích mảnh ruộng là bao nhiêu?',
          options: ['800m²', '1600m²', '900m²', '400m²'],
          correctIndex: 0,
        },
        {
          question: 'Một hình thang có diện tích 84m², đáy lớn 15m, đáy nhỏ 9m. Chiều cao của hình thang là bao nhiêu?',
          options: ['12m', '6m', '7m', '14m'],
          correctIndex: 2,
        },
        {
          question: 'Nếu chiều cao hình thang tăng gấp đôi (giữ nguyên hai đáy) thì diện tích sẽ:',
          options: ['Giảm một nửa', 'Tăng gấp đôi', 'Không đổi', 'Tăng gấp bốn'],
          correctIndex: 1,
        },
        {
          question: 'Một thửa đất hình thang có đáy lớn 28m, đáy nhỏ 22m, chiều cao 12m. Nếu giá đất là 500 000 đồng/m² thì thửa đất trị giá bao nhiêu?',
          options: ['150 000 000 đồng', '300 000 000 đồng', '600 000 000 đồng', '75 000 000 đồng'],
          correctIndex: 1,
        },
        {
          question: 'Hình thang vuông là hình thang có:',
          options: [
            'Một cạnh bên vuông góc với hai đáy',
            'Cả bốn góc đều vuông',
            'Hai đáy bằng nhau',
            'Hai cạnh bên bằng nhau',
          ],
          correctIndex: 0,
        },
        {
          question: 'Một hình thang có đáy lớn 50cm, đáy nhỏ bằng nửa đáy lớn, chiều cao 16cm. Diện tích hình thang là bao nhiêu?',
          options: ['600cm²', '1200cm²', '300cm²', '900cm²'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính diện tích hình thang có đáy lớn 18cm, đáy nhỏ 12cm, chiều cao 9cm.',
          solution: ['$S=\\dfrac{(18+12)\\times9}{2}=\\dfrac{30\\times9}{2}=\\dfrac{270}{2}=135$cm²'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một thửa ruộng hình thang có đáy lớn 36m, đáy nhỏ 24m, chiều cao 15m. Người ta trồng lúa trên cả thửa ruộng, biết cứ 10m² thu hoạch được 6kg thóc. Hỏi cả thửa ruộng thu hoạch được bao nhiêu ki-lô-gam thóc?',
          solution: [
            'Diện tích thửa ruộng: $S=\\dfrac{(36+24)\\times15}{2}=\\dfrac{60\\times15}{2}=450$m²',
            'Số thóc thu hoạch: $450:10\\times6=45\\times6=270$kg',
          ],
        },
      ],
    },
  },

  'l5-hinh-tron-chu-vi-dien-tich': {
    title: 'Hình tròn: chu vi và diện tích',
    theory: {
      cards: [
        {
          title: 'Đường tròn, bán kính, đường kính',
          formulas: ['d = r\\times2', 'r = d:2'],
          legend: [
            '$r$: bán kính — khoảng cách từ tâm đến một điểm bất kì trên đường tròn',
            '$d$: đường kính — đoạn thẳng đi qua tâm, nối hai điểm trên đường tròn',
            'Đường kính gấp đôi bán kính',
          ],
          note: 'Mẹo: mọi bán kính của cùng một hình tròn đều bằng nhau, vì vậy chỉ cần đo một bán kính là biết đủ thông tin về hình tròn đó.',
        },
        {
          title: 'Chu vi và diện tích hình tròn',
          formulas: [
            'C = d\\times3,14',
            'C = r\\times2\\times3,14',
            'S = r\\times r\\times3,14',
          ],
          legend: [
            '$C$: chu vi hình tròn',
            '$S$: diện tích hình tròn',
            'Số $3,14$ là giá trị gần đúng của số $\\pi$ (pi)',
          ],
          note: 'Mẹo: muốn tính diện tích mà chỉ biết đường kính, hãy tìm bán kính trước ($r=d:2$) rồi mới áp dụng công thức $S=r\\times r\\times3,14$.',
        },
      ],
    },
    video: { caption: '00:00 / 10:40 — hinh_tron_chu_vi_dien_tich_baigiang.mp4' },
    quiz: [
      {
        question: 'Một hình tròn có bán kính 5cm. Chu vi hình tròn đó là bao nhiêu (lấy $\\pi\\approx3,14$)?',
        options: ['15,7cm', '31,4cm', '78,5cm', '10cm'],
        correctIndex: 1,
      },
      {
        question: 'Một hình tròn có đường kính 8cm. Bán kính hình tròn đó là bao nhiêu?',
        options: ['16cm', '2cm', '4cm', '8cm'],
        correctIndex: 2,
      },
      {
        question: 'Một hình tròn có bán kính 4cm. Diện tích hình tròn đó là bao nhiêu?',
        options: ['12,56cm²', '25,12cm²', '50,24cm²', '16cm²'],
        correctIndex: 1,
      },
      {
        question: 'Công thức tính chu vi hình tròn theo đường kính là:',
        options: ['$C=r\\times2\\times3,14$', '$C=r\\times r\\times3,14$', '$C=d\\times3,14$', '$C=d\\times2\\times3,14$'],
        correctIndex: 2,
      },
      {
        question: 'Một hình tròn có đường kính 10cm. Diện tích hình tròn đó là bao nhiêu?',
        options: ['31,4cm²', '78,5cm²', '314cm²', '15,7cm²'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Tính chu vi và diện tích hình tròn có bán kính 6cm.',
        solution: ['Chu vi: $C=6\\times2\\times3,14=37,68$cm', 'Diện tích: $S=6\\times6\\times3,14=113,04$cm²'],
      },
      {
        prompt: 'Tính chu vi và diện tích hình tròn có đường kính 12cm.',
        solution: [
          'Bán kính: $r=12:2=6$cm',
          'Chu vi: $C=12\\times3,14=37,68$cm',
          'Diện tích: $S=6\\times6\\times3,14=113,04$cm²',
        ],
      },
      {
        prompt: 'Một hình tròn có chu vi 25,12cm. Tính bán kính hình tròn đó.',
        solution: [
          'Đường kính: $d=25,12:3,14=8$cm',
          'Bán kính: $r=8:2=4$cm',
        ],
      },
      {
        prompt: 'Một cái mâm hình tròn có bán kính 20cm. Tính diện tích mặt mâm đó.',
        solution: ['$S=20\\times20\\times3,14=1256$cm²'],
      },
      {
        prompt: 'Một bồn hoa hình tròn có đường kính 4m. Người ta muốn rào xung quanh bồn hoa bằng lưới sắt, cửa ra vào rộng 1m không cần rào. Hỏi cần bao nhiêu mét lưới sắt?',
        solution: [
          'Chu vi bồn hoa: $C=4\\times3,14=12,56$m',
          'Số mét lưới sắt cần dùng: $12,56-1=11,56$m',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức tính chu vi hình tròn theo bán kính', back: '$C=r\\times2\\times3,14$' },
      { front: 'Công thức tính diện tích hình tròn', back: '$S=r\\times r\\times3,14$' },
      { front: 'Đường kính bằng bao nhiêu lần bán kính?', back: 'Gấp 2 lần ($d=r\\times2$)' },
      { front: 'Giá trị gần đúng của số $\\pi$ dùng ở lớp 5', back: '$3,14$' },
      { front: 'Bán kính hình tròn có đường kính 14cm', back: '$14:2=7$cm' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Một hình tròn có bán kính 3cm. Chu vi hình tròn đó là bao nhiêu?',
          options: ['9,42cm', '18,84cm', '28,26cm', '6cm'],
          correctIndex: 1,
        },
        {
          question: 'Một hình tròn có đường kính 6cm. Diện tích hình tròn đó là bao nhiêu?',
          options: ['18,84cm²', '9,42cm²', '28,26cm²', '113,04cm²'],
          correctIndex: 2,
        },
        {
          question: 'Bán kính của hình tròn có đường kính 20cm là:',
          options: ['40cm', '10cm', '20cm', '5cm'],
          correctIndex: 1,
        },
        {
          question: 'Một hình tròn có bán kính 7cm. Diện tích hình tròn đó là bao nhiêu?',
          options: ['43,96cm²', '153,86cm²', '21,98cm²', '49cm²'],
          correctIndex: 1,
        },
        {
          question: 'Đường kính là:',
          options: [
            'Đoạn thẳng nối tâm với một điểm trên đường tròn',
            'Đoạn thẳng đi qua tâm, nối hai điểm trên đường tròn',
            'Đường cong khép kín bao quanh hình tròn',
            'Nửa bán kính',
          ],
          correctIndex: 1,
        },
        {
          question: 'Một hình tròn có chu vi 18,84cm. Đường kính hình tròn đó là bao nhiêu?',
          options: ['3cm', '6cm', '9cm', '12cm'],
          correctIndex: 1,
        },
        {
          question: 'Một cái đĩa hình tròn có đường kính 24cm. Bán kính của đĩa là bao nhiêu?',
          options: ['48cm', '6cm', '12cm', '24cm'],
          correctIndex: 2,
        },
        {
          question: 'Một hình tròn có bán kính 10cm. Chu vi hình tròn đó là bao nhiêu?',
          options: ['31,4cm', '62,8cm', '314cm', '15,7cm'],
          correctIndex: 1,
        },
        {
          question: 'Một mặt bàn hình tròn có bán kính 50cm. Diện tích mặt bàn đó là bao nhiêu?',
          options: ['7850cm²', '15700cm²', '2500cm²', '3925cm²'],
          correctIndex: 0,
        },
        {
          question: 'Nếu bán kính hình tròn tăng gấp đôi thì diện tích hình tròn sẽ:',
          options: ['Tăng gấp đôi', 'Tăng gấp ba', 'Tăng gấp bốn', 'Không đổi'],
          correctIndex: 2,
        },
        {
          question: 'Một hình tròn có diện tích 78,5cm². Bán kính hình tròn đó là bao nhiêu?',
          options: ['5cm', '10cm', '25cm', '4cm'],
          correctIndex: 0,
        },
        {
          question: 'Một bể bơi hình tròn có đường kính 8m. Chu vi bể bơi đó là bao nhiêu?',
          options: ['12,56m', '25,12m', '50,24m', '6,28m'],
          correctIndex: 1,
        },
        {
          question: 'Công thức nào dùng để tính diện tích hình tròn khi biết đường kính $d$?',
          options: [
            '$S=d\\times d\\times3,14$',
            '$S=(d:2)\\times(d:2)\\times3,14$',
            '$S=d\\times3,14$',
            '$S=d\\times2\\times3,14$',
          ],
          correctIndex: 1,
        },
        {
          question: 'Một chiếc nắp hộp hình tròn có bán kính 9cm. Chu vi chiếc nắp hộp là bao nhiêu?',
          options: ['56,52cm', '28,26cm', '254,34cm', '18cm'],
          correctIndex: 0,
        },
        {
          question: 'Một hình tròn có đường kính bằng 2 lần đường kính của một hình tròn khác. So với hình tròn nhỏ, chu vi hình tròn lớn:',
          options: ['Gấp 2 lần', 'Gấp 4 lần', 'Bằng nhau', 'Gấp 3 lần'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một hình tròn có bán kính 8cm. Tính chu vi và diện tích hình tròn đó.',
          solution: [
            'Chu vi: $C=8\\times2\\times3,14=50,24$cm',
            'Diện tích: $S=8\\times8\\times3,14=200,96$cm²',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một miệng giếng hình tròn có đường kính 1,2m. Người ta xây thành giếng rộng thêm 0,4m bao quanh miệng giếng (bán kính thành giếng ngoài hơn bán kính miệng giếng 0,4m). Tính diện tích thành giếng đó (diện tích hình tròn lớn trừ diện tích hình tròn nhỏ).',
          solution: [
            'Bán kính miệng giếng: $r_1=1,2:2=0,6$m',
            'Bán kính miệng giếng tính cả thành giếng: $r_2=0,6+0,4=1$m',
            'Diện tích hình tròn nhỏ (miệng giếng): $S_1=0,6\\times0,6\\times3,14=1,1304$m²',
            'Diện tích hình tròn lớn: $S_2=1\\times1\\times3,14=3,14$m²',
            'Diện tích thành giếng: $S_2-S_1=3,14-1,1304=2,0096$m²',
          ],
        },
      ],
    },
  },

  'l5-hinh-hop-chu-nhat-lap-phuong': {
    title: 'Hình hộp chữ nhật, hình lập phương',
    theory: {
      cards: [
        {
          title: 'Đặc điểm hình hộp chữ nhật',
          formulas: [
            '\\text{6 mặt, 12 cạnh, 8 đỉnh}',
          ],
          legend: [
            'Có 6 mặt đều là hình chữ nhật; hai mặt đối diện bằng nhau',
            'Có 3 kích thước: chiều dài, chiều rộng, chiều cao',
            'Có 12 cạnh và 8 đỉnh',
          ],
          note: 'Mẹo: hãy liên hệ với chiếc hộp bánh, viên gạch, quyển sách — đó đều là những vật có dạng hình hộp chữ nhật quen thuộc.',
        },
        {
          title: 'Đặc điểm hình lập phương',
          formulas: [
            '\\text{6 mặt là hình vuông bằng nhau}',
          ],
          legend: [
            'Hình lập phương là hình hộp chữ nhật đặc biệt có chiều dài = chiều rộng = chiều cao',
            'Cả 6 mặt đều là hình vuông bằng nhau; có 12 cạnh bằng nhau và 8 đỉnh',
          ],
          note: 'Mẹo: con súc xắc (xúc xắc) là một ví dụ điển hình của hình lập phương — cả 6 mặt của nó đều là hình vuông giống hệt nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 08:45 — hinh_hop_hinh_lap_phuong_baigiang.mp4' },
    quiz: [
      { question: 'Hình hộp chữ nhật có bao nhiêu mặt?', options: ['4', '6', '8', '12'], correctIndex: 1 },
      { question: 'Hình lập phương có bao nhiêu cạnh?', options: ['6', '8', '12', '10'], correctIndex: 2 },
      {
        question: 'Hình lập phương khác hình hộp chữ nhật ở điểm nào?',
        options: [
          'Hình lập phương có 6 mặt đều là hình vuông bằng nhau',
          'Hình lập phương có 8 mặt',
          'Hình lập phương không có cạnh',
          'Hình lập phương có 6 đỉnh',
        ],
        correctIndex: 0,
      },
      { question: 'Hình hộp chữ nhật có bao nhiêu đỉnh?', options: ['4', '6', '8', '12'], correctIndex: 2 },
      {
        question: 'Hai mặt đối diện của hình hộp chữ nhật có đặc điểm gì?',
        options: ['Bằng nhau', 'Không liên quan gì nhau', 'Luôn là hình vuông', 'Không tồn tại mặt đối diện'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Kể tên 3 kích thước của hình hộp chữ nhật.',
        solution: ['Ba kích thước của hình hộp chữ nhật là: chiều dài, chiều rộng, chiều cao.'],
      },
      {
        prompt: 'Vì sao nói hình lập phương là một hình hộp chữ nhật đặc biệt?',
        solution: ['Vì hình lập phương có chiều dài = chiều rộng = chiều cao, tức là một trường hợp đặc biệt của hình hộp chữ nhật khi cả 3 kích thước bằng nhau.'],
      },
      {
        prompt: 'Một hình hộp chữ nhật có 6 mặt, hãy nêu số cạnh và số đỉnh của nó.',
        solution: ['Hình hộp chữ nhật có 12 cạnh và 8 đỉnh.'],
      },
      {
        prompt: 'Một chiếc hộp phấn có dạng hình hộp chữ nhật với chiều dài 20cm, chiều rộng 8cm, chiều cao 6cm. Hãy nêu 3 kích thước đó.',
        solution: ['Chiều dài: 20cm', 'Chiều rộng: 8cm', 'Chiều cao: 6cm'],
      },
      {
        prompt: 'Một viên xúc xắc có dạng hình lập phương, mỗi mặt có diện tích bằng nhau. Nếu một mặt là hình vuông cạnh 2cm thì cả 6 mặt của viên xúc xắc có đặc điểm gì?',
        solution: ['Cả 6 mặt của viên xúc xắc đều là hình vuông cạnh 2cm, có diện tích bằng nhau.'],
      },
    ],
    flashcards: [
      { front: 'Hình hộp chữ nhật có mấy mặt, mấy cạnh, mấy đỉnh?', back: '6 mặt, 12 cạnh, 8 đỉnh' },
      { front: 'Hình lập phương có mấy mặt là hình vuông?', back: 'Cả 6 mặt' },
      { front: '3 kích thước của hình hộp chữ nhật', back: 'Chiều dài, chiều rộng, chiều cao' },
      { front: 'Hình lập phương là hình hộp chữ nhật có đặc điểm gì đặc biệt?', back: 'Chiều dài = chiều rộng = chiều cao' },
      { front: 'Ví dụ về vật có dạng hình lập phương', back: 'Viên xúc xắc (súc sắc)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình hộp chữ nhật có bao nhiêu mặt?', options: ['4', '8', '6', '12'], correctIndex: 2 },
        { question: 'Hình lập phương có bao nhiêu đỉnh?', options: ['6', '8', '12', '4'], correctIndex: 1 },
        { question: 'Hình hộp chữ nhật có bao nhiêu cạnh?', options: ['8', '6', '12', '10'], correctIndex: 2 },
        {
          question: 'Các mặt của hình hộp chữ nhật đều có dạng hình gì?',
          options: ['Hình vuông', 'Hình chữ nhật', 'Hình tam giác', 'Hình tròn'],
          correctIndex: 1,
        },
        {
          question: 'Hình lập phương có tất cả các cạnh như thế nào với nhau?',
          options: ['Bằng nhau', 'Không bằng nhau', 'Chỉ có 4 cạnh bằng nhau', 'Không xác định'],
          correctIndex: 0,
        },
        {
          question: 'Một chiếc tủ lạnh thường có dạng hình gì?',
          options: ['Hình lập phương', 'Hình hộp chữ nhật', 'Hình trụ', 'Hình cầu'],
          correctIndex: 1,
        },
        {
          question: 'Hình hộp chữ nhật có mấy cặp mặt đối diện bằng nhau?',
          options: ['2', '3', '4', '6'],
          correctIndex: 1,
        },
        {
          question: 'Nếu một hình hộp chữ nhật có chiều dài = chiều rộng = chiều cao thì nó trở thành hình gì?',
          options: ['Hình lập phương', 'Hình thang', 'Hình trụ', 'Vẫn là hình hộp chữ nhật, không đổi'],
          correctIndex: 0,
        },
        {
          question: 'Một viên gạch xây nhà thường có dạng hình gì?',
          options: ['Hình lập phương', 'Hình hộp chữ nhật', 'Hình cầu', 'Hình tròn'],
          correctIndex: 1,
        },
        {
          question: 'Số đỉnh của hình lập phương so với số đỉnh của hình hộp chữ nhật là:',
          options: ['Nhiều hơn', 'Ít hơn', 'Bằng nhau', 'Không xác định'],
          correctIndex: 2,
        },
        {
          question: 'Hình lập phương có bao nhiêu mặt bằng nhau?',
          options: ['4', '6', '8', '12'],
          correctIndex: 1,
        },
        {
          question: 'Một chiếc hộp có 6 mặt đều là hình vuông cạnh 5cm. Đó là hình gì?',
          options: ['Hình hộp chữ nhật (không phải lập phương)', 'Hình lập phương', 'Hình thang', 'Hình chữ nhật'],
          correctIndex: 1,
        },
        {
          question: 'Cạnh của hình hộp chữ nhật là đoạn thẳng nối:',
          options: ['Hai đỉnh kề nhau', 'Tâm với một đỉnh', 'Hai mặt đối diện', 'Hai đường chéo'],
          correctIndex: 0,
        },
        {
          question: 'Một bể cá dạng hình hộp chữ nhật có đáy là hình chữ nhật. Mặt đáy đó có mấy cạnh?',
          options: ['3', '4', '6', '8'],
          correctIndex: 1,
        },
        {
          question: 'Trong các vật sau, vật nào không có dạng hình hộp chữ nhật hoặc hình lập phương?',
          options: ['Hộp phấn', 'Viên xúc xắc', 'Quả bóng đá', 'Cục gạch'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Nêu điểm giống và khác nhau giữa hình hộp chữ nhật và hình lập phương.',
          solution: [
            'Giống nhau: cả hai đều có 6 mặt, 12 cạnh, 8 đỉnh',
            'Khác nhau: hình hộp chữ nhật có các mặt là hình chữ nhật, 3 kích thước (dài, rộng, cao) có thể khác nhau; hình lập phương có cả 6 mặt là hình vuông bằng nhau, tức là chiều dài = chiều rộng = chiều cao',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một chiếc thùng carton có dạng hình hộp chữ nhật. Bạn Lan đo được thùng có 12 cạnh, trong đó có 4 cạnh dài bằng nhau, 4 cạnh rộng bằng nhau và 4 cạnh cao bằng nhau, nhưng ba nhóm cạnh này không bằng nhau. Hỏi thùng carton đó có thể là hình lập phương không? Vì sao?',
          solution: [
            'Thùng carton đó không thể là hình lập phương',
            'Vì hình lập phương yêu cầu cả 12 cạnh đều bằng nhau (chiều dài = chiều rộng = chiều cao), trong khi thùng này có 3 nhóm cạnh với độ dài khác nhau — đó là một hình hộp chữ nhật thông thường',
          ],
        },
      ],
    },
  },

  'l5-the-tich-don-vi-do-the-tich': {
    title: 'Thể tích hình hộp chữ nhật, hình lập phương; đơn vị đo thể tích',
    theory: {
      cards: [
        {
          title: 'Thể tích hình hộp chữ nhật, hình lập phương',
          formulas: [
            'V = a\\times b\\times c',
            'V = a\\times a\\times a',
          ],
          legend: [
            'Hình hộp chữ nhật: $a$ là chiều dài, $b$ là chiều rộng, $c$ là chiều cao',
            'Hình lập phương: $a$ là độ dài cạnh',
            '$V$: thể tích',
          ],
          note: 'Mẹo: muốn tính thể tích hình hộp chữ nhật, ta lấy chiều dài nhân chiều rộng nhân chiều cao (ba kích thước phải cùng đơn vị đo).',
        },
        {
          title: 'Đơn vị đo thể tích',
          formulas: [
            '1m^3 = 1000dm^3',
            '1dm^3 = 1000cm^3',
            '1dm^3 = 1\\ \\text{lít}',
          ],
          legend: [
            'Mỗi đơn vị đo thể tích liền kề hơn kém nhau 1000 lần (khác với đơn vị đo độ dài, hơn kém nhau 10 lần)',
            '1 lít nước có thể tích đúng bằng $1dm^3$',
          ],
          note: 'Mẹo: khi đổi đơn vị đo thể tích, mỗi lần đổi sang đơn vị liền sau (bé hơn) ta nhân với 1000, đổi sang đơn vị liền trước (lớn hơn) ta chia cho 1000.',
        },
      ],
    },
    video: { caption: '00:00 / 11:00 — the_tich_don_vi_do_the_tich_baigiang.mp4' },
    quiz: [
      {
        question: 'Một hình hộp chữ nhật có chiều dài 5cm, chiều rộng 4cm, chiều cao 3cm. Thể tích hình hộp đó là bao nhiêu?',
        options: ['12cm³', '60cm³', '35cm³', '120cm³'],
        correctIndex: 1,
      },
      {
        question: 'Một hình lập phương có cạnh 4cm. Thể tích hình lập phương đó là bao nhiêu?',
        options: ['16cm³', '48cm³', '64cm³', '12cm³'],
        correctIndex: 2,
      },
      { question: '$2m^3$ bằng bao nhiêu $dm^3$?', options: ['20dm³', '200dm³', '2000dm³', '20000dm³'], correctIndex: 2 },
      { question: '$5000cm^3$ bằng bao nhiêu $dm^3$?', options: ['5dm³', '50dm³', '500dm³', '0,5dm³'], correctIndex: 0 },
      {
        question: 'Một bể nước hình hộp chữ nhật có thể tích 2000 lít. Đổi ra $m^3$ được bao nhiêu?',
        options: ['0,2m³', '2m³', '20m³', '200m³'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Tính thể tích hình hộp chữ nhật có chiều dài 8cm, chiều rộng 5cm, chiều cao 6cm.',
        solution: ['$V=8\\times5\\times6=240$cm³'],
      },
      {
        prompt: 'Tính thể tích hình lập phương có cạnh 7cm.',
        solution: ['$V=7\\times7\\times7=343$cm³'],
      },
      {
        prompt: 'Đổi các số đo sau: $3,5m^3=?dm^3$ và $4200cm^3=?dm^3$.',
        solution: ['$3,5m^3=3500dm^3$', '$4200cm^3=4,2dm^3$'],
      },
      {
        prompt: 'Một bể cá dạng hình hộp chữ nhật có chiều dài 60cm, chiều rộng 40cm, chiều cao 30cm. Tính thể tích bể cá đó, rồi cho biết bể có thể chứa được bao nhiêu lít nước (biết $1dm^3=1$ lít) nếu đổ đầy nước.',
        solution: [
          'Đổi: $60cm=6dm$, $40cm=4dm$, $30cm=3dm$',
          'Thể tích bể cá: $V=6\\times4\\times3=72dm^3$',
          'Bể chứa được $72$ lít nước',
        ],
      },
      {
        prompt: 'Một khối gỗ hình lập phương có cạnh 2dm được cắt ra từ một khối gỗ lớn hơn. Tính thể tích khối gỗ hình lập phương đó theo đơn vị $cm^3$.',
        solution: [
          'Đổi cạnh: $2dm=20cm$',
          'Thể tích: $V=20\\times20\\times20=8000cm^3$',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức tính thể tích hình hộp chữ nhật', back: '$V=a\\times b\\times c$ (dài × rộng × cao)' },
      { front: 'Công thức tính thể tích hình lập phương', back: '$V=a\\times a\\times a$ (cạnh lập phương)' },
      { front: '$1m^3$ bằng bao nhiêu $dm^3$?', back: '$1000dm^3$' },
      { front: '$1dm^3$ bằng bao nhiêu lít?', back: '1 lít' },
      { front: 'Mỗi đơn vị đo thể tích liền kề hơn kém nhau bao nhiêu lần?', back: '1000 lần' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Một hình hộp chữ nhật có chiều dài 6cm, chiều rộng 4cm, chiều cao 5cm. Thể tích là bao nhiêu?',
          options: ['15cm³', '120cm³', '20cm³', '30cm³'],
          correctIndex: 1,
        },
        {
          question: 'Một hình lập phương có cạnh 5cm. Thể tích hình lập phương đó là bao nhiêu?',
          options: ['15cm³', '25cm³', '100cm³', '125cm³'],
          correctIndex: 3,
        },
        { question: '$1dm^3$ bằng bao nhiêu $cm^3$?', options: ['10cm³', '100cm³', '1000cm³', '10000cm³'], correctIndex: 2 },
        { question: '$7000dm^3$ bằng bao nhiêu $m^3$?', options: ['7m³', '70m³', '0,7m³', '700m³'], correctIndex: 0 },
        {
          question: 'Một hình lập phương có cạnh 10cm. Thể tích hình lập phương đó là bao nhiêu?',
          options: ['100cm³', '1000cm³', '300cm³', '30cm³'],
          correctIndex: 1,
        },
        {
          question: 'Một bể nước hình hộp chữ nhật có chiều dài 2m, chiều rộng 1,5m, chiều cao 1m. Thể tích bể là bao nhiêu?',
          options: ['3m³', '4,5m³', '2,5m³', '6m³'],
          correctIndex: 0,
        },
        { question: '$2,5m^3$ bằng bao nhiêu lít?', options: ['25 lít', '250 lít', '2500 lít', '25000 lít'], correctIndex: 2 },
        {
          question: 'Một khối gỗ hình hộp chữ nhật có chiều dài 12cm, chiều rộng 8cm, chiều cao 5cm. Thể tích khối gỗ đó là bao nhiêu?',
          options: ['480cm³', '96cm³', '240cm³', '25cm³'],
          correctIndex: 0,
        },
        {
          question: 'Muốn đổi từ $m^3$ sang $dm^3$, ta làm gì?',
          options: ['Nhân với 10', 'Nhân với 100', 'Nhân với 1000', 'Chia cho 1000'],
          correctIndex: 2,
        },
        {
          question: 'Một thùng nước hình lập phương có cạnh 3dm. Thùng chứa được bao nhiêu lít nước khi đầy?',
          options: ['9 lít', '27 lít', '18 lít', '81 lít'],
          correctIndex: 1,
        },
        {
          question: 'Một hình hộp chữ nhật có thể tích 360cm³, chiều dài 10cm, chiều rộng 6cm. Chiều cao hình hộp đó là bao nhiêu?',
          options: ['6cm', '60cm', '36cm', '4cm'],
          correctIndex: 0,
        },
        {
          question: '$450000cm^3$ bằng bao nhiêu $m^3$?',
          options: ['4,5m³', '0,45m³', '45m³', '450m³'],
          correctIndex: 1,
        },
        {
          question: 'Một bể bơi hình hộp chữ nhật dài 10m, rộng 5m, sâu 1,5m. Thể tích nước tối đa bể chứa được là bao nhiêu?',
          options: ['75m³', '150m³', '50m³', '16,5m³'],
          correctIndex: 0,
        },
        {
          question: 'Nếu cạnh của hình lập phương tăng gấp đôi thì thể tích sẽ:',
          options: ['Tăng gấp đôi', 'Tăng gấp bốn', 'Tăng gấp tám', 'Không đổi'],
          correctIndex: 2,
        },
        {
          question: 'Một hộp quà hình lập phương cạnh 15cm chứa đầy các viên kẹo nhỏ. Thể tích hộp quà đó là bao nhiêu?',
          options: ['225cm³', '3375cm³', '45cm³', '1350cm³'],
          correctIndex: 1,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính thể tích hình hộp chữ nhật có chiều dài 9cm, chiều rộng 6cm, chiều cao 4cm, rồi đổi kết quả sang $dm^3$.',
          solution: [
            '$V=9\\times6\\times4=216$cm³',
            'Đổi: $216cm^3=0,216dm^3$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một bể nước dạng hình hộp chữ nhật có chiều dài 1,5m, chiều rộng 1m, chiều cao 1,2m. Người ta đổ vào bể 900 lít nước. Hỏi mực nước trong bể cao bao nhiêu mét (so với đáy bể), biết đáy bể có diện tích không đổi bằng chiều dài nhân chiều rộng?',
          solution: [
            'Đổi: $900$ lít $=900dm^3=0,9m^3$',
            'Diện tích đáy bể: $1,5\\times1=1,5m^2$',
            'Chiều cao mực nước: $h=0,9:1,5=0,6$m',
          ],
        },
      ],
    },
  },
}
