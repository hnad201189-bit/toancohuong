import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP4_SO_TU_NHIEN_LON = {
  'l4-lop-trieu': {
    title: 'Các số trong lớp triệu, hàng và lớp',
    theory: {
      cards: [
        {
          title: 'Hàng và lớp trong số tự nhiên lớn',
          formulas: [
            '\\text{Lớp đơn vị: hàng trăm, hàng chục, hàng đơn vị}',
            '\\text{Lớp nghìn: hàng trăm nghìn, hàng chục nghìn, hàng nghìn}',
            '\\text{Lớp triệu: hàng trăm triệu, hàng chục triệu, hàng triệu}',
          ],
          legend: [
            'Mỗi lớp gồm 3 hàng',
            'Số 305 427 168 có: lớp triệu là 305, lớp nghìn là 427, lớp đơn vị là 168',
          ],
          note: 'Mẹo: khi viết số lớn, con nên viết cách 3 chữ số một khoảng trắng (từ phải sang trái) để dễ nhận ra từng lớp, ví dụ 305 427 168.',
        },
        {
          title: 'Đọc số có nhiều chữ số',
          formulas: [
            '305\\,427\\,168 = 305\\ \\text{triệu}\\ 427\\ \\text{nghìn}\\ 168',
            '1\\,000\\,000 = 1\\ \\text{triệu}',
          ],
          legend: [
            'Đọc từ lớp cao nhất (lớp triệu) xuống lớp thấp nhất (lớp đơn vị)',
            'Đọc hết giá trị từng lớp rồi đọc tên lớp đó, trừ lớp đơn vị',
          ],
          note: 'Mẹo: nếu một lớp có các chữ số đều là 0 thì không đọc tên lớp đó, ví dụ 5 000 234 đọc là "năm triệu không trăm ba mươi tư"... hãy đọc cẩn thận từng lớp một.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — lop_trieu_hang_va_lop_baigiang.mp4' },
    quiz: [
      { question: 'Số 47 356 902 gồm mấy chữ số?', options: ['8', '7', '9', '6'], correctIndex: 0 },
      {
        question: 'Trong số 305 427 168, chữ số 4 thuộc hàng nào?',
        options: ['Hàng chục nghìn', 'Hàng trăm nghìn', 'Hàng chục triệu', 'Hàng nghìn'],
        correctIndex: 1,
      },
      { question: 'Lớp triệu gồm những hàng nào?', options: ['Hàng trăm nghìn, chục nghìn, nghìn', 'Hàng trăm, chục, đơn vị', 'Hàng trăm triệu, chục triệu, triệu', 'Hàng triệu, nghìn, đơn vị'], correctIndex: 2 },
      { question: 'Số "hai mươi triệu không trăm linh năm nghìn" viết là?', options: ['20 500 000', '20 050 000', '2 005 000', '20 005 000'], correctIndex: 3 },
      { question: 'Số nào sau đây có giá trị bằng 6 000 000?', options: ['Sáu triệu', 'Sáu trăm nghìn', 'Sáu chục triệu', 'Sáu trăm triệu'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Đọc số 123 456 789.', solution: ['Số 123 456 789 đọc là: một trăm hai mươi ba triệu, bốn trăm năm mươi sáu nghìn, bảy trăm tám mươi chín.'] },
      {
        prompt: 'Viết số gồm 7 chục triệu, 2 triệu, 0 trăm nghìn, 5 chục nghìn, 3 nghìn, 0 trăm, 0 chục, 4 đơn vị.',
        solution: ['Gộp theo lớp: lớp triệu là 72, lớp nghìn là 053, lớp đơn vị là 004.', 'Số cần viết là $72\\,053\\,004$.'],
      },
      {
        prompt: 'Số 5 084 210 gồm mấy triệu, mấy nghìn, mấy đơn vị (theo từng lớp)?',
        solution: ['Lớp triệu: 5 (5 triệu).', 'Lớp nghìn: 084 (84 nghìn).', 'Lớp đơn vị: 210 (210 đơn vị).'],
      },
      {
        prompt: 'So sánh hai số 45 302 178 và 45 320 178, số nào lớn hơn?',
        solution: ['Cả hai đều có 8 chữ số, hàng chục triệu và hàng triệu giống nhau (45).', 'So đến hàng trăm nghìn: số thứ nhất là 3, số thứ hai là 3 — bằng nhau.', 'So đến hàng chục nghìn: số thứ nhất là 0, số thứ hai là 2.', 'Vì $0<2$ nên $45\\,302\\,178 < 45\\,320\\,178$, vậy số thứ hai lớn hơn.'],
      },
      {
        prompt: 'Một tỉnh có dân số là 1 250 000 người. Viết số này thành tổng theo hàng, rồi cho biết chữ số 5 thuộc hàng nào.',
        solution: ['$1\\,250\\,000 = 1\\,000\\,000+200\\,000+50\\,000$', 'Chữ số 5 thuộc hàng chục nghìn.'],
      },
    ],
    flashcards: [
      { front: 'Lớp triệu gồm những hàng nào?', back: 'Hàng trăm triệu, hàng chục triệu, hàng triệu' },
      { front: 'Lớp nghìn gồm những hàng nào?', back: 'Hàng trăm nghìn, hàng chục nghìn, hàng nghìn' },
      { front: '1 000 000 đọc là?', back: 'Một triệu' },
      { front: 'Mỗi lớp gồm mấy hàng?', back: '3 hàng' },
      { front: 'Số lớn nhất có 6 chữ số', back: '999 999' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số 8 000 000 đọc là?', options: ['Tám trăm nghìn', 'Tám triệu', 'Tám chục triệu', 'Tám nghìn'], correctIndex: 1 },
        { question: 'Số 12 305 000 gồm mấy chữ số?', options: ['7', '9', '8', '6'], correctIndex: 2 },
        { question: 'Trong số 96 428 731, chữ số 4 thuộc hàng nào?', options: ['Hàng chục nghìn', 'Hàng nghìn', 'Hàng chục triệu', 'Hàng trăm nghìn'], correctIndex: 3 },
        { question: 'Lớp đơn vị gồm những hàng nào?', options: ['Hàng trăm, chục, đơn vị', 'Hàng trăm nghìn, chục nghìn, nghìn', 'Hàng trăm triệu, chục triệu, triệu', 'Hàng nghìn, triệu, tỉ'], correctIndex: 0 },
        { question: 'Số "năm triệu không trăm hai mươi nghìn" viết là?', options: ['5 200 000', '5 020 000', '5 002 000', '502 000'], correctIndex: 1 },
        { question: 'Số nào lớn nhất: 34 521 000, 34 512 000, 34 251 000, 34 215 000?', options: ['34 512 000', '34 251 000', '34 521 000', '34 215 000'], correctIndex: 2 },
        { question: 'Trong số 407 618 253, lớp triệu là số nào?', options: ['618', '253', '407 618', '407'], correctIndex: 3 },
        { question: 'Số nào đọc là "hai mươi triệu"?', options: ['20 000 000', '2 000 000', '200 000 000', '2 000 000 000'], correctIndex: 0 },
        { question: 'Viết số gồm 3 triệu, 4 trăm nghìn, 5 đơn vị.', options: ['3 040 005', '3 400 005', '3 400 500', '3 004 005'], correctIndex: 1 },
        { question: 'Số nào bé nhất: 61 234 500, 61 243 500, 16 234 500, 61 324 500?', options: ['61 234 500', '61 243 500', '16 234 500', '61 324 500'], correctIndex: 2 },
        { question: 'Số liền sau của 9 999 999 là?', options: ['9 999 998', '10 999 999', '19 999 999', '10 000 000'], correctIndex: 3 },
        { question: 'Trong số 573 069 481, chữ số 0 thuộc hàng nào?', options: ['Hàng trăm nghìn', 'Hàng chục nghìn', 'Hàng nghìn', 'Hàng chục triệu'], correctIndex: 0 },
        {
          question: 'Một nhà máy sản xuất được 2 triệu 500 nghìn sản phẩm trong năm nay và 300 nghìn sản phẩm trong năm sau. Tổng số sản phẩm hai năm là bao nhiêu?',
          options: ['2 500 300', '2 800 000', '2 530 000', '5 300 000'],
          correctIndex: 1,
        },
        {
          question: 'Sắp xếp các số 15 302 000, 15 032 000, 15 320 000 theo thứ tự tăng dần, số đứng giữa là số nào?',
          options: ['15 032 000', '15 320 000', '15 302 000', '15 230 000'],
          correctIndex: 2,
        },
        {
          question: 'Một thành phố có dân số 3 402 108 người. Số này gồm mấy lớp và lớp triệu bằng bao nhiêu?',
          options: ['2 lớp, lớp triệu là 3', '3 lớp, lớp triệu là 34', '3 lớp, lớp triệu là 340', '3 lớp, lớp triệu là 3'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đọc số 68 924 305 và cho biết chữ số 9 thuộc hàng nào, lớp nào.',
          solution: ['Đọc: sáu mươi tám triệu, chín trăm hai mươi tư nghìn, ba trăm linh năm.', 'Chữ số 9 thuộc hàng trăm nghìn, lớp nghìn.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Ba tỉnh có dân số lần lượt là 1 800 000 người, 980 000 người và 2 050 000 người. Hỏi tỉnh nào có dân số đông nhất, tỉnh nào ít nhất?',
          solution: ['So sánh: 980 000 có 6 chữ số, còn lại có 7 chữ số nên 980 000 bé nhất.', 'So $1\\,800\\,000$ và $2\\,050\\,000$: vì $1<2$ ở hàng triệu nên $1\\,800\\,000<2\\,050\\,000$.', 'Vậy tỉnh thứ ba (2 050 000 người) đông dân nhất, tỉnh thứ hai (980 000 người) ít dân nhất.'],
        },
      ],
    },
  },

  'l4-cong-tru-nhieu-chu-so': {
    title: 'Phép cộng, phép trừ số có nhiều chữ số',
    theory: {
      cards: [
        {
          title: 'Cộng số có nhiều chữ số',
          formulas: ['48\\,352 + 26\\,179 = 74\\,531', '(a+b)+c = a+(b+c)'],
          legend: [
            'Đặt tính: viết các số sao cho các hàng thẳng cột với nhau',
            'Cộng lần lượt từ hàng đơn vị sang trái, nhớ ghi số nhớ khi tổng một hàng lớn hơn hoặc bằng 10',
          ],
          note: 'Mẹo: sau khi cộng xong, con có thể thử lại bằng cách đổi chỗ hai số hạng rồi cộng lại — nếu kết quả không đổi thì phép cộng đúng.',
        },
        {
          title: 'Trừ số có nhiều chữ số',
          formulas: ['74\\,531 - 26\\,179 = 48\\,352', 'a - b + b = a'],
          legend: [
            'Đặt tính thẳng hàng, trừ từ hàng đơn vị sang trái',
            'Khi hàng trên bé hơn hàng dưới thì phải mượn 1 ở hàng liền trước',
          ],
          note: 'Mẹo: muốn thử lại phép trừ, con lấy hiệu cộng với số trừ, nếu ra đúng số bị trừ thì phép tính đúng.',
        },
      ],
    },
    video: { caption: '00:00 / 10:00 — cong_tru_nhieu_chu_so_baigiang.mp4' },
    quiz: [
      { question: '48 352 + 26 179 = ?', options: ['74 531', '74 521', '73 531', '75 531'], correctIndex: 0 },
      { question: '90 000 - 37 456 = ?', options: ['53 544', '52 544', '52 454', '62 544'], correctIndex: 1 },
      { question: '135 268 + 214 793 = ?', options: ['349 061', '350 161', '350 061', '340 061'], correctIndex: 2 },
      { question: 'Một kho có 258 340 kg gạo, xuất đi 96 178 kg. Kho còn lại bao nhiêu ki-lô-gam gạo?', options: ['161 162', '162 262', '163 162', '162 162'], correctIndex: 3 },
      { question: '506 207 - 128 459 = ?', options: ['377 748', '378 748', '377 848', '376 748'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: 36 458 + 27 965.', solution: ['Đặt tính thẳng hàng và cộng từ phải sang trái.', '$36\\,458+27\\,965=64\\,423$'] },
      { prompt: 'Đặt tính rồi tính: 82 304 - 45 967.', solution: ['Đặt tính thẳng hàng và trừ từ phải sang trái, có mượn ở một số hàng.', '$82\\,304-45\\,967=36\\,337$'] },
      {
        prompt: 'Một trường tiểu học có 48 725 quyển sách, thư viện mua thêm 15 380 quyển. Hỏi trường có tất cả bao nhiêu quyển sách?',
        solution: ['$48\\,725+15\\,380=64\\,105$', 'Trường có tất cả 64 105 quyển sách.'],
      },
      {
        prompt: 'Một cửa hàng có 125 600 lít xăng, đã bán 68 750 lít. Hỏi cửa hàng còn lại bao nhiêu lít xăng?',
        solution: ['$125\\,600-68\\,750=56\\,850$', 'Cửa hàng còn lại 56 850 lít xăng.'],
      },
      {
        prompt: 'Năm nay nhà máy sản xuất được 235 480 sản phẩm, nhiều hơn năm ngoái 42 615 sản phẩm. Hỏi năm ngoái nhà máy sản xuất được bao nhiêu sản phẩm?',
        solution: ['Năm nay nhiều hơn năm ngoái nên năm ngoái = năm nay − phần nhiều hơn.', '$235\\,480-42\\,615=192\\,865$', 'Năm ngoái nhà máy sản xuất được 192 865 sản phẩm.'],
      },
    ],
    flashcards: [
      { front: 'Khi cộng, tổng một hàng ≥ 10 thì làm gì?', back: 'Viết chữ số hàng đơn vị, nhớ 1 sang hàng liền trước' },
      { front: 'Khi trừ, hàng trên bé hơn hàng dưới thì làm gì?', back: 'Mượn 1 ở hàng liền trước rồi trừ' },
      { front: '100 000 - 1', back: '99 999' },
      { front: 'Cách thử lại phép trừ', back: 'Lấy hiệu cộng với số trừ, phải ra số bị trừ' },
      { front: '250 000 + 175 000', back: '425 000' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '25 431 + 18 269 = ?', options: ['42 700', '43 700', '43 600', '44 700'], correctIndex: 1 },
        { question: '80 502 - 34 178 = ?', options: ['45 324', '46 424', '46 324', '47 324'], correctIndex: 2 },
        { question: '146 235 + 258 907 = ?', options: ['404 142', '405 242', '395 142', '405 142'], correctIndex: 3 },
        { question: '600 000 - 245 813 = ?', options: ['354 187', '355 187', '354 287', '353 187'], correctIndex: 0 },
        { question: '78 946 + 13 054 = ?', options: ['91 000', '92 000', '92 100', '90 000'], correctIndex: 1 },
        { question: '304 500 - 128 650 = ?', options: ['176 850', '174 850', '175 850', '175 750'], correctIndex: 2 },
        { question: 'Một xã có 12 456 người, xã bên cạnh có nhiều hơn 3 208 người. Xã bên cạnh có bao nhiêu người?', options: ['15 764', '15 564', '14 664', '15 664'], correctIndex: 3 },
        { question: '999 999 + 1 = ?', options: ['1 000 000', '999 998', '1 000 001', '100 000'], correctIndex: 0 },
        { question: 'Một đội trồng được 45 720 cây, đội khác trồng ít hơn 8 350 cây. Đội kia trồng được bao nhiêu cây?', options: ['38 370', '37 370', '37 470', '36 370'], correctIndex: 1 },
        { question: '213 456 + 186 544 = ?', options: ['399 000', '401 000', '400 000', '390 000'], correctIndex: 2 },
        { question: '500 000 - 1 = ?', options: ['500 001', '499 998', '490 999', '499 999'], correctIndex: 3 },
        { question: '67 852 - 29 968 = ?', options: ['37 884', '38 884', '37 784', '36 884'], correctIndex: 0 },
        {
          question: 'Một kho hàng có 320 500 sản phẩm, nhập thêm 45 800 sản phẩm rồi xuất đi 96 300 sản phẩm. Hỏi kho còn lại bao nhiêu sản phẩm?',
          options: ['280 000', '270 000', '260 000', '275 000'],
          correctIndex: 1,
        },
        {
          question: 'Tổng của hai số là 458 700, số thứ nhất là 215 300. Số thứ hai là bao nhiêu?',
          options: ['244 400', '242 400', '243 400', '253 400'],
          correctIndex: 2,
        },
        {
          question: 'Một thư viện có sách Toán và sách Văn tổng cộng 84 500 quyển, trong đó có 36 200 quyển sách Toán. Hỏi số sách Văn nhiều hơn số sách Toán bao nhiêu quyển?',
          options: ['13 100', '11 100', '48 300', '12 100'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 156 284 + 97 639.',
          solution: ['Đặt tính thẳng hàng, cộng từ phải sang trái.', '$156\\,284+97\\,639=253\\,923$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một xã có tổng số dân là 68 500 người, gồm nam và nữ. Biết số nam ít hơn số nữ là 1 200 người. Hỏi xã đó có bao nhiêu người nam, bao nhiêu người nữ?',
          solution: [
            'Số nữ = (tổng + hiệu) : 2 = $(68\\,500+1\\,200):2=34\\,850$',
            'Số nam = số nữ − hiệu = $34\\,850-1\\,200=33\\,650$',
            'Xã đó có 33 650 người nam và 34 850 người nữ.',
          ],
        },
      ],
    },
  },

  'l4-nhan-nhieu-chu-so': {
    title: 'Phép nhân số có nhiều chữ số',
    theory: {
      cards: [
        {
          title: 'Nhân với số có một chữ số, hai chữ số',
          formulas: ['1234 \\times 6 = 7404', '326 \\times 24 = 7824'],
          legend: [
            'Nhân với số có 1 chữ số: nhân lần lượt từ hàng đơn vị',
            'Nhân với số có 2 chữ số: nhân với từng chữ số rồi cộng các tích riêng (tích riêng thứ hai lùi sang trái 1 cột)',
          ],
          note: 'Mẹo: khi đặt tính nhân với số có 2 chữ số, tích riêng thứ hai phải viết lùi sang trái 1 hàng so với tích riêng thứ nhất — đây là lỗi học sinh hay quên nhất.',
        },
        {
          title: 'Nhân với 10, 100, 1000 và tính chất phép nhân',
          formulas: ['a \\times 10 = a0', 'a \\times (b+c) = a\\times b + a\\times c', 'a\\times b = b\\times a'],
          legend: [
            'Nhân một số với 10, 100, 1000... chỉ cần viết thêm 1, 2, 3... chữ số 0 vào bên phải số đó',
            'Tính chất giao hoán và phân phối giúp tính nhanh',
          ],
          note: 'Mẹo: $326\\times99 = 326\\times100-326\\times1 = 32\\,600-326=32\\,274$ — dùng tính chất phân phối để nhân nhanh với các số gần chẵn chục, chẵn trăm.',
        },
      ],
    },
    video: { caption: '00:00 / 10:30 — nhan_nhieu_chu_so_baigiang.mp4' },
    quiz: [
      { question: '1234 × 6 = ?', options: ['7404', '7304', '7414', '7204'], correctIndex: 0 },
      { question: '326 × 24 = ?', options: ['7724', '7824', '7834', '7624'], correctIndex: 1 },
      { question: '4500 × 10 = ?', options: ['4 500', '450 000', '45 000', '450'], correctIndex: 2 },
      { question: 'Một hộp có 125 viên kẹo, có 36 hộp như vậy. Hỏi có tất cả bao nhiêu viên kẹo?', options: ['4 400', '4 600', '3 500', '4 500'], correctIndex: 3 },
      { question: '213 × 47 = ?', options: ['10 011', '9 011', '10 111', '10 001'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: 456 × 8.', solution: ['$456\\times8=3648$'] },
      { prompt: 'Đặt tính rồi tính: 234 × 35.', solution: ['Tích riêng 1: $234\\times5=1170$', 'Tích riêng 2: $234\\times3=702$ (viết lùi sang trái 1 hàng, thành 7020)', '$1170+7020=8190$', 'Vậy $234\\times35=8190$'] },
      {
        prompt: 'Một xe chở được 1250 kg hàng mỗi chuyến. Hỏi 18 chuyến xe chở được bao nhiêu ki-lô-gam hàng?',
        solution: ['$1250\\times18=22\\,500$', '18 chuyến xe chở được 22 500 kg hàng.'],
      },
      {
        prompt: 'Tính nhanh: 25 × 48 × 4.',
        solution: ['Nhóm $25\\times4=100$ (tính chất giao hoán, kết hợp)', '$100\\times48=4800$'],
      },
      {
        prompt: 'Một đội công nhân mỗi ngày làm được 320 sản phẩm. Hỏi trong 6 tuần (mỗi tuần làm 6 ngày) đội làm được bao nhiêu sản phẩm?',
        solution: ['Số ngày làm: $6\\times6=36$ ngày', 'Số sản phẩm: $320\\times36=11\\,520$', 'Đội làm được 11 520 sản phẩm.'],
      },
    ],
    flashcards: [
      { front: 'a × 100', back: 'Viết thêm hai chữ số 0 vào bên phải a' },
      { front: 'Tính chất giao hoán phép nhân', back: '$a\\times b=b\\times a$' },
      { front: 'Tính chất phân phối', back: '$a\\times(b+c)=a\\times b+a\\times c$' },
      { front: '125 × 8', back: '1000' },
      { front: 'Khi nhân với số có 2 chữ số, tích riêng thứ hai viết lùi mấy hàng?', back: '1 hàng sang trái' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '324 × 7 = ?', options: ['2168', '2268', '2368', '2158'], correctIndex: 1 },
        { question: '1500 × 100 = ?', options: ['15 000', '1 500 000', '150 000', '15 000 000'], correctIndex: 2 },
        { question: '215 × 34 = ?', options: ['7210', '7410', '7300', '7310'], correctIndex: 3 },
        { question: '408 × 25 = ?', options: ['10 200', '10 100', '10 300', '10 000'], correctIndex: 0 },
        { question: 'Tính nhanh: 4 × 37 × 25.', options: ['3600', '3700', '3800', '3500'], correctIndex: 1 },
        { question: 'Một lớp có 8 tổ, mỗi tổ 5 bạn. Mỗi bạn góp 15 000 đồng. Cả lớp góp được bao nhiêu tiền?', options: ['500 000 đồng', '650 000 đồng', '600 000 đồng', '550 000 đồng'], correctIndex: 2 },
        { question: '306 × 48 = ?', options: ['14 588', '14 788', '14 668', '14 688'], correctIndex: 3 },
        { question: '7000 × 6 = ?', options: ['42 000', '41 000', '43 000', '40 000'], correctIndex: 0 },
        { question: 'Một thùng có 24 chai nước, mỗi chai 500 ml. Hỏi 15 thùng như vậy có bao nhiêu mi-li-lít nước?', options: ['170 000', '180 000', '190 000', '160 000'], correctIndex: 1 },
        { question: '125 × 16 = ?', options: ['1900', '2100', '2000', '1800'], correctIndex: 2 },
        { question: 'Tính nhanh: 25 × 4 × 99.', options: ['9800', '10 000', '9700', '9900'], correctIndex: 3 },
        { question: '512 × 63 = ?', options: ['32 256', '31 256', '32 156', '33 256'], correctIndex: 0 },
        {
          question: 'Một trường có 24 lớp, mỗi lớp trung bình 38 học sinh. Nhà trường in mỗi học sinh 3 quyển vở. Hỏi cần in tất cả bao nhiêu quyển vở?',
          options: ['2636', '2736', '2836', '2726'],
          correctIndex: 1,
        },
        {
          question: 'Một ô tô chạy với vận tốc 45 km mỗi giờ. Hỏi trong 8 giờ, ô tô đi được bao nhiêu ki-lô-mét?',
          options: ['350', '370', '360', '340'],
          correctIndex: 2,
        },
        {
          question: 'Giá một quyển sách là 28 000 đồng. Một thư viện mua 125 quyển sách như vậy thì hết bao nhiêu tiền?',
          options: ['3 400 000 đồng', '3 600 000 đồng', '3 300 000 đồng', '3 500 000 đồng'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 327 × 46.',
          solution: ['Tích riêng 1: $327\\times6=1962$', 'Tích riêng 2: $327\\times4=1308$ (viết lùi trái 1 hàng, thành 13 080)', '$1962+13\\,080=15\\,042$', 'Vậy $327\\times46=15\\,042$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một đội xe có 12 xe tải, mỗi xe chở 850 kg gạo trong một chuyến. Mỗi ngày đội xe chạy 2 chuyến. Hỏi trong 5 ngày, đội xe chở được bao nhiêu ki-lô-gam gạo?',
          solution: [
            'Số kg gạo mỗi ngày: $850\\times12\\times2=20\\,400$ kg',
            'Số kg gạo trong 5 ngày: $20\\,400\\times5=102\\,000$ kg',
            'Đội xe chở được 102 000 kg gạo.',
          ],
        },
      ],
    },
  },

  'l4-chia-cho-so-co-2-3-chu-so': {
    title: 'Phép chia cho số có hai, ba chữ số',
    theory: {
      cards: [
        {
          title: 'Chia cho số có hai chữ số',
          formulas: ['672 \\div 21 = 32', '779 \\div 25 = 31\\ (\\text{dư}\\ 4)'],
          legend: [
            'Ước lượng thương ở mỗi bước chia bằng cách làm tròn số chia',
            'Chia lần lượt từ trái sang phải: chia, nhân, trừ, hạ',
          ],
          note: 'Mẹo: khi ước lượng thương, con làm tròn số chia đến hàng chục rồi nhẩm nhanh, ví dụ chia cho 21 thì làm tròn thành 20 để ước lượng thương dễ hơn.',
        },
        {
          title: 'Chia cho số có ba chữ số',
          formulas: ['46\\,857 \\div 123 = 381', 'a = b \\times q + r\\ (0 \\le r < b)'],
          legend: [
            'Cách làm giống chia cho số có 2 chữ số nhưng ước lượng thương khó hơn, cần thử lại nhiều lần',
            'Số bị chia = số chia × thương + số dư',
          ],
          note: 'Mẹo: sau khi chia xong, con luôn thử lại bằng công thức $a=b\\times q+r$ để kiểm tra kết quả có đúng không.',
        },
      ],
    },
    video: { caption: '00:00 / 11:00 — chia_so_co_2_3_chu_so_baigiang.mp4' },
    quiz: [
      { question: '672 : 21 = ?', options: ['32', '31', '33', '30'], correctIndex: 0 },
      { question: '779 : 25 = ? (thương và số dư)', options: ['30 dư 29', '31 dư 4', '31 dư 5', '32 dư 4'], correctIndex: 1 },
      { question: '46 857 : 123 = ?', options: ['371', '382', '381', '380'], correctIndex: 2 },
      { question: 'Một đội có 285 người chia đều thành các nhóm 15 người. Có bao nhiêu nhóm?', options: ['18', '20', '17', '19'], correctIndex: 3 },
      { question: '9450 : 315 = ?', options: ['30', '29', '31', '28'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: 936 : 24.', solution: ['Ước lượng: 93 chia 24 được khoảng 3, thử $24\\times3=72$, dư 21; hạ 6 được 216.', '$216:24=9$', 'Vậy $936:24=39$'] },
      {
        prompt: 'Đặt tính rồi tính: 10 250 : 205.',
        solution: ['Ước lượng thương ở từng bước, thử với 205.', '$205\\times50=10\\,250$', 'Vậy $10\\,250:205=50$'],
      },
      {
        prompt: 'Một xưởng có 2520 sản phẩm, đóng đều vào các thùng, mỗi thùng 36 sản phẩm. Hỏi cần bao nhiêu thùng?',
        solution: ['$2520:36=70$', 'Cần 70 thùng.'],
      },
      {
        prompt: 'Một trường có 1425 học sinh, xếp đều thành các lớp 25 học sinh, dư ra một số ít học sinh được ghép vào lớp khác. Hỏi trường có bao nhiêu lớp đủ 25 học sinh và dư mấy học sinh?',
        solution: ['$1425 : 25 = 57$ (dư 0 vì $57\\times25=1425$)', 'Trường có 57 lớp đủ 25 học sinh, không dư học sinh nào.'],
      },
      {
        prompt: 'Kiểm tra lại phép chia $53\\,296 : 236$ bằng cách tính thương rồi dùng công thức $a=b\\times q+r$.',
        solution: ['Thực hiện chia: $53\\,296:236=225$ dư 196... ', 'Thử lại: $236\\times225=53\\,100$, cộng dư $196$ được $53\\,296$ — đúng như số bị chia.', 'Vậy $53\\,296:236=225$ dư $196$.'],
      },
    ],
    flashcards: [
      { front: 'Công thức liên hệ số bị chia, số chia, thương, số dư', back: '$a=b\\times q+r\\ (0\\le r<b)$' },
      { front: 'Các bước chia theo cột', back: 'Chia, nhân, trừ, hạ' },
      { front: '840 : 24', back: '35' },
      { front: 'Cách thử lại phép chia có dư', back: 'Lấy thương nhân số chia rồi cộng số dư, phải ra số bị chia' },
      { front: '1000 : 125', back: '8' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '868 : 28 = ?', options: ['30', '31', '32', '29'], correctIndex: 1 },
        { question: '546 : 26 = ? (thương, dư)', options: ['20 dư 26', '21 dư 1', '21 dư 0', '22 dư 0'], correctIndex: 2 },
        { question: '18 480 : 132 = ?', options: ['130', '150', '120', '140'], correctIndex: 3 },
        { question: '75 348 : 236 = ?', options: ['319 dư 64', '318 dư 100', '320 dư 28', '319 dư 0'], correctIndex: 0 },
        { question: 'Một kho có 4284 hộp sữa, xếp đều lên các xe, mỗi xe 42 hộp. Cần bao nhiêu xe?', options: ['101', '102', '103', '100'], correctIndex: 1 },
        { question: '17 020 : 145 = ?', options: ['116 dư 100', '118 dư 30', '117 dư 55', '117 dư 45'], correctIndex: 2 },
        { question: '3936 : 48 = ?', options: ['81', '83', '80', '82'], correctIndex: 3 },
        { question: 'Một số chia cho 213 được thương 45, dư 12. Số đó là bao nhiêu?', options: ['9597', '9585', '9600', '9573'], correctIndex: 0 },
        { question: '25 200 : 315 = ?', options: ['79', '80', '81', '78'], correctIndex: 1 },
        { question: '5688 : 72 = ?', options: ['78', '80', '79', '77'], correctIndex: 2 },
        { question: 'Một đội trồng 6300 cây, trồng đều trên các thửa ruộng, mỗi thửa 175 cây. Có bao nhiêu thửa ruộng?', options: ['35', '37', '34', '36'], correctIndex: 3 },
        { question: '49 128 : 312 = ?', options: ['157 dư 144', '158 dư 0', '156 dư 216', '157 dư 0'], correctIndex: 0 },
        {
          question: 'Một nhà máy sản xuất được 15 840 sản phẩm trong 24 ngày, mỗi ngày làm như nhau. Hỏi mỗi ngày sản xuất được bao nhiêu sản phẩm?',
          options: ['650', '660', '670', '640'],
          correctIndex: 1,
        },
        {
          question: 'Một tấm vải dài 972 m được cắt thành các đoạn bằng nhau, mỗi đoạn dài 36 m. Hỏi cắt được bao nhiêu đoạn?',
          options: ['26', '28', '27', '25'],
          correctIndex: 2,
        },
        {
          question: 'Một trại chăn nuôi có 12 480 con gà, nuôi đều trong các chuồng, mỗi chuồng 195 con. Hỏi có bao nhiêu chuồng?',
          options: ['63', '65', '62', '64'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 7 476 : 42.',
          solution: ['Ước lượng và chia lần lượt từng bước.', '$7476:42=178$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một đội xây dựng chở 25 380 viên gạch bằng các xe tải, mỗi xe chở 235 viên. Hỏi cần ít nhất bao nhiêu xe tải để chở hết số gạch đó?',
          solution: [
            '$25\\,380 : 235 = 108$ dư 0 (vì $235\\times108=25\\,380$)',
            'Vì chia hết nên cần đúng 108 xe tải để chở hết số gạch.',
          ],
        },
      ],
    },
  },
}
