import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP3_SO_DEN_100000 = {
  'l3-cac-so-den-10000': {
    title: 'Các số đến 10 000',
    theory: {
      cards: [
        {
          title: 'Đọc, viết và phân tích số có bốn chữ số',
          formulas: ['3247 = 3000 + 200 + 40 + 7', '5682 = 5000 + 600 + 80 + 2'],
          legend: [
            'Số có 4 chữ số gồm hàng nghìn, hàng trăm, hàng chục, hàng đơn vị',
            'Mỗi hàng có giá trị gấp 10 lần giá trị của hàng liền sau nó',
          ],
          note: 'Mẹo: khi đọc số có 4 chữ số, con đọc lần lượt từ hàng nghìn đến hàng đơn vị, ví dụ 3247 đọc là "ba nghìn hai trăm bốn mươi bảy".',
        },
        {
          title: 'So sánh và sắp xếp các số trong phạm vi 10 000',
          formulas: ['4258 < 4285', '6000 > 5999', '7325 = 7325'],
          legend: [
            'So sánh từ hàng cao nhất (hàng nghìn) trở xuống, hàng nào lớn hơn thì số đó lớn hơn',
            'Nếu các hàng bằng nhau thì so sánh tiếp đến hàng thấp hơn',
          ],
          note: 'Mẹo: nếu hai số có số chữ số khác nhau thì số nào có nhiều chữ số hơn sẽ lớn hơn (số có 4 chữ số luôn lớn hơn số có 3 chữ số).',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — cac_so_den_10000_baigiang.mp4' },
    quiz: [
      {
        question: 'Số 3652 gồm mấy nghìn, mấy trăm, mấy chục, mấy đơn vị?',
        options: ['3 nghìn, 6 trăm, 5 chục, 2 đơn vị', '3 nghìn, 5 trăm, 6 chục, 2 đơn vị', '2 nghìn, 6 trăm, 5 chục, 3 đơn vị', '6 nghìn, 3 trăm, 5 chục, 2 đơn vị'],
        correctIndex: 0,
      },
      { question: 'Số liền sau của số 6999 là số nào?', options: ['6998', '6000', '7000', '7001'], correctIndex: 2 },
      { question: 'So sánh 4258 và 4285. Kết quả nào đúng?', options: ['4258 > 4285', '4258 = 4285', '4258 < 4285', 'Không so sánh được'], correctIndex: 2 },
      { question: 'Số nào lớn nhất trong các số: 5219, 5912, 5129, 5291?', options: ['5219', '5912', '5291', '5129'], correctIndex: 1 },
      { question: 'Viết số gồm 4 nghìn, 0 trăm, 3 chục, 5 đơn vị.', options: ['4305', '4035', '4350', '4053'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'Viết số 7408 thành tổng các nghìn, trăm, chục, đơn vị.', solution: ['$7408 = 7000+400+0+8$'] },
      {
        prompt: 'So sánh hai số 8127 và 8172, số nào lớn hơn?',
        solution: ['Hai số đều có 8 nghìn, 1 trăm bằng nhau.', 'So sánh hàng chục: 8127 có 2 chục, 8172 có 7 chục.', 'Vì $2<7$ nên $8127<8172$, vậy 8172 lớn hơn.'],
      },
      { prompt: 'Sắp xếp các số 3502, 3052, 3520, 3025 theo thứ tự từ bé đến lớn.', solution: ['Sắp xếp: $3025 < 3052 < 3502 < 3520$'] },
      { prompt: 'Số liền trước và số liền sau của số 5000 là số nào?', solution: ['Số liền trước của 5000 là 4999.', 'Số liền sau của 5000 là 5001.'] },
      {
        prompt: 'Một trường học có 2 nghìn 4 trăm 6 chục 0 đơn vị quyển sách trong thư viện. Viết số đó.',
        solution: ['$2000+400+60+0=2460$', 'Trường có 2460 quyển sách.'],
      },
    ],
    flashcards: [
      { front: '3247 gồm những hàng nào?', back: '3 nghìn, 2 trăm, 4 chục, 7 đơn vị' },
      { front: 'Số liền sau 3999', back: '4000' },
      { front: 'Số liền trước 8000', back: '7999' },
      { front: 'So sánh 6482 và 6428', back: '$6482 > 6428$' },
      { front: 'Số lớn nhất có 4 chữ số', back: '9999' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Số 4801 đọc là gì?',
          options: ['Bốn nghìn tám trăm linh một', 'Bốn nghìn tám trăm mười', 'Bốn nghìn không trăm linh một', 'Bốn nghìn tám mươi mốt'],
          correctIndex: 0,
        },
        { question: 'Số "năm nghìn sáu trăm hai mươi" viết là?', options: ['5620', '5602', '5260', '5026'], correctIndex: 0 },
        { question: 'Số liền sau của 4999 là?', options: ['4998', '5000', '4000', '5001'], correctIndex: 1 },
        { question: 'Số liền trước của 7000 là?', options: ['6999', '7001', '6900', '7100'], correctIndex: 0 },
        { question: 'Trong số 6543, chữ số 5 thuộc hàng nào?', options: ['Hàng chục', 'Hàng nghìn', 'Hàng trăm', 'Hàng đơn vị'], correctIndex: 2 },
        { question: 'Số nào bé nhất: 4098, 4980, 4809, 4089?', options: ['4980', '4809', '4098', '4089'], correctIndex: 3 },
        { question: 'So sánh 9034 và 9043.', options: ['9034 > 9043', '9034 < 9043', '9034 = 9043', 'Không xác định'], correctIndex: 1 },
        {
          question: 'Phân tích số 8206 thành tổng.',
          options: ['8000+20+0+6', '800+20+0+6', '8000+200+0+6', '8000+2+0+60'],
          correctIndex: 2,
        },
        { question: 'Số lớn nhất có 4 chữ số là số nào?', options: ['9999', '10000', '9990', '9909'], correctIndex: 0 },
        {
          question: 'Sắp xếp 3 số 6789, 6798, 6879 theo thứ tự tăng dần, số đứng giữa là số nào?',
          options: ['6789', '6798', '6879', '6987'],
          correctIndex: 1,
        },
        {
          question: 'Một cửa hàng có 4256 quyển vở, nhập thêm để có 4 nghìn 5 trăm 0 chục 6 đơn vị quyển. Số quyển vở sau khi nhập là bao nhiêu?',
          options: ['4560', '4056', '4506', '4650'],
          correctIndex: 2,
        },
        {
          question: 'Số nào có chữ số hàng nghìn là 7, hàng trăm là 0, hàng chục là 5, hàng đơn vị là 2?',
          options: ['7502', '7025', '7520', '7052'],
          correctIndex: 3,
        },
        { question: 'Viết số liền sau của số lớn nhất có 3 chữ số.', options: ['999', '1000', '9999', '1001'], correctIndex: 0 },
        { question: 'Trong các số 2345, 2354, 2435, 2453 số nào lớn nhất?', options: ['2345', '2354', '2453', '2435'], correctIndex: 2 },
        {
          question: 'Bạn Hà có 3 tấm thẻ số 8, 1, 5. Ghép 3 tấm thẻ thành số có 3 chữ số lớn nhất có thể, rồi cộng thêm 4000. Kết quả là bao nhiêu?',
          options: ['4815', '4581', '4851', '4158'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết số 6047 thành tổng các nghìn, trăm, chục, đơn vị, rồi cho biết chữ số 0 thuộc hàng nào.',
          solution: ['$6047 = 6000+0+40+7$', 'Chữ số 0 thuộc hàng trăm.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Ba bạn Lan, Minh, Hoa mỗi bạn viết một số có 4 chữ số: Lan viết 5678, Minh viết 5687, Hoa viết 5768. Hỏi bạn nào viết số lớn nhất, bạn nào viết số bé nhất?',
          solution: [
            'So sánh hàng chục: 5678 có 7 chục, 5687 có 8 chục, 5768 có 6 chục.',
            'Vì $5768 > 5687 > 5678$',
            'Bạn Hoa viết số lớn nhất, bạn Lan viết số bé nhất.',
          ],
        },
      ],
    },
  },

  'l3-cac-so-den-100000': {
    title: 'Các số đến 100 000',
    theory: {
      cards: [
        {
          title: 'Đọc, viết số có 5 chữ số',
          formulas: ['53127 = 50000+3000+100+20+7', '80005 = 80000+0+0+0+5'],
          legend: [
            'Số có 5 chữ số gồm hàng chục nghìn, hàng nghìn, hàng trăm, hàng chục, hàng đơn vị',
            'Hàng chục nghìn có giá trị gấp 10 lần hàng nghìn',
          ],
          note: 'Mẹo: khi đọc số có 5 chữ số, con đọc từ hàng chục nghìn xuống hàng đơn vị, ví dụ 53127 đọc là "năm mươi ba nghìn một trăm hai mươi bảy".',
        },
        {
          title: 'So sánh các số trong phạm vi 100 000',
          formulas: ['45210 < 45230', '70000 > 69999', '100000 = 100000'],
          legend: [
            'So sánh từ hàng cao nhất (hàng chục nghìn) trở xuống',
            'Số có nhiều chữ số hơn thì lớn hơn (số có 5 chữ số luôn lớn hơn số có 4 chữ số)',
          ],
          note: 'Mẹo: 100 000 là số có 6 chữ số, lớn hơn mọi số có 5 chữ số (số lớn nhất có 5 chữ số là 99 999).',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — cac_so_den_100000_baigiang.mp4' },
    quiz: [
      {
        question: 'Số 47 823 gồm mấy chục nghìn, mấy nghìn, mấy trăm, mấy chục, mấy đơn vị?',
        options: [
          '4 chục nghìn, 7 nghìn, 8 trăm, 2 chục, 3 đơn vị',
          '4 chục nghìn, 8 nghìn, 7 trăm, 2 chục, 3 đơn vị',
          '7 chục nghìn, 4 nghìn, 8 trăm, 2 chục, 3 đơn vị',
          '4 chục nghìn, 7 nghìn, 2 trăm, 8 chục, 3 đơn vị',
        ],
        correctIndex: 0,
      },
      { question: 'Số liền sau của 59 999 là số nào?', options: ['59998', '60000', '60001', '50000'], correctIndex: 1 },
      { question: 'So sánh 68 245 và 68 425.', options: ['68245 > 68425', '68245 < 68425', '68245 = 68425', 'Không so sánh được'], correctIndex: 1 },
      { question: 'Số nào lớn nhất: 34521, 34512, 34215, 34251?', options: ['34512', '34521', '34215', '34251'], correctIndex: 1 },
      {
        question: 'Viết số gồm 7 chục nghìn, 0 nghìn, 5 trăm, 0 chục, 9 đơn vị.',
        options: ['70590', '75009', '70509', '75090'],
        correctIndex: 2,
      },
    ],
    essays: [
      { prompt: 'Viết số 62 305 thành tổng theo hàng.', solution: ['$62305 = 60000+2000+300+0+5$'] },
      {
        prompt: 'Số nào lớn hơn: 91 000 hay 90 999?',
        solution: ['Hàng chục nghìn của hai số đều là 9.', 'Hàng nghìn: 91000 có 1 nghìn, 90999 có 0 nghìn.', 'Vì $1>0$ nên $91000>90999$.'],
      },
      {
        prompt: 'Sắp xếp các số 25 430, 24 530, 25 340, 24 350 theo thứ tự từ bé đến lớn.',
        solution: ['Sắp xếp: $24350 < 24530 < 25340 < 25430$'],
      },
      { prompt: 'Số liền trước và số liền sau của 80 000 là số nào?', solution: ['Số liền trước: 79999.', 'Số liền sau: 80001.'] },
      {
        prompt: 'Một nhà máy sản xuất được 5 chục nghìn 6 nghìn 3 trăm 4 chục 0 đơn vị sản phẩm trong một tháng. Viết số đó.',
        solution: ['$50000+6000+300+40+0=56340$', 'Nhà máy sản xuất được 56340 sản phẩm.'],
      },
    ],
    flashcards: [
      { front: '53127 gồm những hàng nào?', back: '5 chục nghìn, 3 nghìn, 1 trăm, 2 chục, 7 đơn vị' },
      { front: 'Số liền sau 99999', back: '100000' },
      { front: 'Số liền trước 50000', back: '49999' },
      { front: 'So sánh 34 802 và 34 208', back: '$34802 > 34208$' },
      { front: 'Số lớn nhất có 5 chữ số', back: '99999' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số "sáu mươi tư nghìn không trăm linh năm" viết là?', options: ['64500', '64005', '64050', '60405'], correctIndex: 1 },
        { question: 'Số liền trước của 100000 là?', options: ['99999', '90000', '99990', '100001'], correctIndex: 0 },
        { question: 'Trong số 76 341, chữ số 3 thuộc hàng nào?', options: ['Hàng chục', 'Hàng trăm', 'Hàng nghìn', 'Hàng đơn vị'], correctIndex: 1 },
        { question: 'Số nào bé nhất: 40 213, 42 013, 40 321, 41 230?', options: ['42013', '40321', '41230', '40213'], correctIndex: 3 },
        { question: 'So sánh 55 555 và 55 550.', options: ['55555 < 55550', '55555 = 55550', '55555 > 55550', 'Không xác định'], correctIndex: 2 },
        {
          question: 'Phân tích số 90 007 thành tổng.',
          options: ['90000+7', '90000+70', '90000+0+0+0+7', '9000+700'],
          correctIndex: 2,
        },
        {
          question: 'Số lớn nhất có 5 chữ số khác nhau được tạo từ các chữ số 3, 7, 0, 5, 9 là số nào?',
          options: ['97530', '97350', '95730', '90753'],
          correctIndex: 0,
        },
        {
          question: 'Số bé nhất có 5 chữ số khác nhau (không bắt đầu bằng 0) tạo từ các chữ số 3, 7, 0, 5, 9 là số nào?',
          options: ['03579', '30579', '30597', '35079'],
          correctIndex: 1,
        },
        { question: 'Số liền sau của số lớn nhất có 4 chữ số là số nào?', options: ['10000', '9999', '10001', '9000'], correctIndex: 0 },
        {
          question: 'Sắp xếp 3 số 48 210, 48 120, 48 201 theo thứ tự tăng dần, số đứng giữa là số nào?',
          options: ['48120', '48210', '48201', '48012'],
          correctIndex: 2,
        },
        {
          question: 'Một thư viện có 63 500 quyển sách, nhập thêm để có 6 chục nghìn 3 nghìn 8 trăm 0 chục 0 đơn vị quyển. Hỏi số sách sau khi nhập là bao nhiêu?',
          options: ['63500', '63800', '63080', '68300'],
          correctIndex: 1,
        },
        {
          question: 'Số nào có chữ số hàng chục nghìn là 2, hàng nghìn là 5, hàng trăm là 0, hàng chục là 8, hàng đơn vị là 3?',
          options: ['25083', '25830', '20583', '25038'],
          correctIndex: 0,
        },
        { question: 'Trong các số 71 234, 71 243, 71 324, 71 432 số nào lớn nhất?', options: ['71234', '71432', '71243', '71324'], correctIndex: 1 },
        { question: '100 000 là số có bao nhiêu chữ số?', options: ['5 chữ số', '6 chữ số', '4 chữ số', '7 chữ số'], correctIndex: 1 },
        {
          question: 'Bạn Nam có 4 tấm thẻ số 2, 6, 0, 9. Ghép 4 tấm thẻ thành số có 4 chữ số lớn nhất có thể (không bắt đầu bằng 0), rồi cộng thêm 50 000. Kết quả là bao nhiêu?',
          options: ['59620', '59260', '59602', '59206'],
          correctIndex: 0,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết số 38 406 thành tổng các chục nghìn, nghìn, trăm, chục, đơn vị, rồi cho biết chữ số 0 thuộc hàng nào.',
          solution: ['$38406=30000+8000+400+0+6$', 'Chữ số 0 thuộc hàng chục.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Ba xã có số dân lần lượt là: xã A có 24 680 người, xã B có 24 860 người, xã C có 24 608 người. Hỏi xã nào có số dân đông nhất, xã nào có số dân ít nhất?',
          solution: [
            'So sánh hàng trăm: 24680 có 6 trăm, 24860 có 8 trăm, 24608 có 6 trăm.',
            'Xã B có hàng trăm lớn nhất (8) nên đông dân nhất.',
            'So sánh xã A (24680) và xã C (24608): hàng chục, 24680 có 8 chục, 24608 có 0 chục, nên $24608<24680$.',
            'Vậy xã B đông dân nhất, xã C ít dân nhất.',
          ],
        },
      ],
    },
  },

  'l3-cong-tru-co-nho': {
    title: 'Phép cộng, phép trừ có nhớ trong phạm vi 100 000',
    theory: {
      cards: [
        {
          title: 'Phép cộng có nhớ trong phạm vi 100 000',
          formulas: ['25748 + 13579 = 39327', '456 + 678 = 1134'],
          legend: [
            'Đặt tính sao cho các hàng thẳng cột với nhau, cộng từ hàng đơn vị sang hàng cao hơn',
            'Nếu tổng ở một hàng lớn hơn hoặc bằng 10, ta viết chữ số hàng đơn vị của tổng đó và nhớ 1 sang hàng liền trước (bên trái)',
          ],
          note: 'Mẹo: khi cộng có nhớ, con luôn nhớ cộng thêm số đã nhớ vào hàng tiếp theo, đừng quên nhé!',
        },
        {
          title: 'Phép trừ có nhớ trong phạm vi 100 000',
          formulas: ['52403 - 18675 = 33728', '900 - 457 = 443'],
          legend: [
            'Đặt tính sao cho các hàng thẳng cột với nhau, trừ từ hàng đơn vị sang hàng cao hơn',
            'Nếu chữ số bị trừ ở một hàng bé hơn chữ số trừ, ta phải mượn 1 từ hàng liền trước (bên trái) rồi trừ',
          ],
          note: 'Mẹo: sau khi trừ xong, con có thể thử lại bằng cách lấy hiệu cộng với số trừ, nếu ra đúng số bị trừ thì phép tính đúng.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — cong_tru_co_nho_pham_vi_100000_baigiang.mp4' },
    quiz: [
      { question: 'Tính: 4568 + 2765 = ?', options: ['7333', '7233', '7343', '7323'], correctIndex: 0 },
      { question: 'Tính: 8000 - 3456 = ?', options: ['4454', '4544', '4554', '4644'], correctIndex: 1 },
      { question: 'Tính: 15 678 + 24 567 = ?', options: ['40145', '40255', '40345', '40245'], correctIndex: 3 },
      { question: 'Tính: 52 000 - 18 675 = ?', options: ['33225', '33325', '33425', '33235'], correctIndex: 1 },
      {
        question: 'Một cửa hàng buổi sáng bán được 3568 kg gạo, buổi chiều bán được 2745 kg gạo. Hỏi cả ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?',
        options: ['6313', '6213', '6413', '6303'],
        correctIndex: 0,
      },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: 6789 + 4536.', solution: ['$6789+4536=11325$'] },
      { prompt: 'Đặt tính rồi tính: 40 512 - 27 348.', solution: ['$40512-27348=13164$'] },
      {
        prompt: 'Một trường học có 24 685 học sinh nam và nữ, trong đó có 12 940 học sinh nữ. Hỏi trường có bao nhiêu học sinh nam?',
        solution: ['$24685-12940=11745$', 'Trường có 11745 học sinh nam.'],
      },
      {
        prompt: 'Kho A có 15 678 tấn thóc, kho B có 9456 tấn thóc. Hỏi cả hai kho có tất cả bao nhiêu tấn thóc?',
        solution: ['$15678+9456=25134$', 'Cả hai kho có 25134 tấn thóc.'],
      },
      {
        prompt: 'Một xưởng may dự định may 30 000 chiếc áo, đã may được 18 725 chiếc. Hỏi xưởng còn phải may bao nhiêu chiếc áo nữa mới đủ số lượng dự định?',
        solution: ['$30000-18725=11275$', 'Xưởng còn phải may 11275 chiếc áo nữa.'],
      },
    ],
    flashcards: [
      { front: '2568 + 1347', back: '3915' },
      { front: '9000 - 4678', back: '4322' },
      { front: 'Khi cộng có nhớ, nhớ mấy sang hàng liền trước?', back: 'Nhớ 1' },
      { front: '12345 + 6789', back: '19134' },
      { front: 'Cách thử lại phép trừ', back: 'Lấy hiệu cộng với số trừ, phải ra số bị trừ' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tính: 3456 + 2789 = ?', options: ['6245', '6235', '6345', '6145'], correctIndex: 0 },
        { question: 'Tính: 7000 - 3456 = ?', options: ['3644', '3454', '3544', '3564'], correctIndex: 2 },
        { question: 'Tính: 24 568 + 15 789 = ?', options: ['40357', '40347', '40457', '40257'], correctIndex: 0 },
        { question: 'Tính: 60 000 - 24 675 = ?', options: ['35225', '35425', '35325', '35235'], correctIndex: 2 },
        { question: 'Tính: 18 234 + 9876 = ?', options: ['28110', '28010', '28210', '28100'], correctIndex: 0 },
        { question: 'Tính: 51 000 - 36 789 = ?', options: ['14311', '14211', '14111', '14221'], correctIndex: 1 },
        { question: 'Tính: 9876 + 123 = ?', options: ['9999', '9989', '9899', '9979'], correctIndex: 0 },
        { question: 'Tính: 100 000 - 45 678 = ?', options: ['54422', '54322', '54222', '54332'], correctIndex: 1 },
        {
          question: 'Một đội công nhân trồng được 4567 cây thông và 3298 cây bạch đàn. Hỏi đội đó trồng được tất cả bao nhiêu cây?',
          options: ['7855', '7965', '7765', '7865'],
          correctIndex: 3,
        },
        {
          question: 'Một kho hàng có 28 450 sản phẩm, đã xuất đi 13 675 sản phẩm. Hỏi kho còn lại bao nhiêu sản phẩm?',
          options: ['14875', '14775', '14675', '14975'],
          correctIndex: 1,
        },
        { question: 'Tính tổng của 36 542 và 27 869.', options: ['64311', '64411', '64511', '64401'], correctIndex: 1 },
        { question: 'Tính hiệu của 72 000 và 38 456.', options: ['33544', '33444', '33644', '33454'], correctIndex: 0 },
        {
          question: 'Một thư viện có 45 780 quyển sách, nhập thêm 12 645 quyển. Hỏi thư viện có tất cả bao nhiêu quyển sách?',
          options: ['58325', '58425', '58525', '58435'],
          correctIndex: 1,
        },
        { question: 'Số bị trừ là 50 000, số trừ là 27 384. Hiệu là bao nhiêu?', options: ['22516', '22716', '22616', '22606'], correctIndex: 2 },
        {
          question: 'Hai kho chứa tổng cộng 84 500 tấn hàng, kho A chứa 39 675 tấn. Hỏi kho B chứa bao nhiêu tấn hàng?',
          options: ['44725', '44825', '44925', '44815'],
          correctIndex: 1,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 28 456 + 13 789.', solution: ['$28456+13789=42245$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một xí nghiệp có kế hoạch sản xuất 45 000 sản phẩm trong quý. Tuần đầu sản xuất được 12 350 sản phẩm, tuần sau sản xuất được 15 680 sản phẩm. Hỏi xí nghiệp còn phải sản xuất bao nhiêu sản phẩm nữa mới đạt kế hoạch?',
          solution: [
            'Số sản phẩm đã sản xuất trong hai tuần: $12350+15680=28030$',
            'Số sản phẩm còn phải sản xuất: $45000-28030=16970$',
            'Xí nghiệp còn phải sản xuất 16970 sản phẩm nữa.',
          ],
        },
      ],
    },
  },

  'l3-uoc-luong-lam-tron': {
    title: 'Làm tròn số, ước lượng kết quả tính',
    theory: {
      cards: [
        {
          title: 'Làm tròn số đến hàng chục, hàng trăm',
          formulas: ['47 \\approx 50', '243 \\approx 200', '3568 \\approx 3600'],
          legend: [
            'Nếu chữ số hàng liền sau bé hơn 5 thì làm tròn xuống (giữ nguyên hàng cần làm tròn)',
            'Nếu chữ số hàng liền sau lớn hơn hoặc bằng 5 thì làm tròn lên (tăng hàng cần làm tròn thêm 1 đơn vị)',
          ],
          note: 'Mẹo: khi làm tròn đến hàng nào, con nhìn vào chữ số ngay bên phải hàng đó để quyết định làm tròn lên hay xuống, rồi đổi các chữ số bên phải hàng đó thành 0.',
        },
        {
          title: 'Ước lượng kết quả tính',
          formulas: ['398+512 \\approx 400+500=900', '6124-2987 \\approx 6100-3000=3100'],
          legend: [
            'Làm tròn các số hạng trước rồi tính nhẩm để kiểm tra kết quả có hợp lý không',
            'Ước lượng giúp phát hiện nhanh lỗi sai khi tính toán',
          ],
          note: 'Mẹo: ước lượng không cho kết quả chính xác tuyệt đối, nhưng giúp con kiểm tra xem đáp số tính được có hợp lý hay không.',
        },
      ],
    },
    video: { caption: '00:00 / 07:30 — lam_tron_so_uoc_luong_baigiang.mp4' },
    quiz: [
      { question: 'Làm tròn số 84 đến hàng chục.', options: ['80', '90', '85', '84'], correctIndex: 0 },
      { question: 'Làm tròn số 356 đến hàng trăm.', options: ['300', '400', '350', '360'], correctIndex: 1 },
      { question: 'Làm tròn số 4520 đến hàng nghìn.', options: ['4000', '5000', '4500', '4600'], correctIndex: 1 },
      { question: 'Ước lượng tổng 297 + 405 bằng cách làm tròn đến hàng trăm.', options: ['700', '600', '800', '750'], correctIndex: 0 },
      { question: 'Ước lượng hiệu 812 - 395 bằng cách làm tròn đến hàng trăm.', options: ['500', '300', '400', '450'], correctIndex: 2 },
    ],
    essays: [
      {
        prompt: 'Làm tròn số 673 đến hàng chục và đến hàng trăm.',
        solution: [
          'Làm tròn đến hàng chục: chữ số hàng đơn vị là 3 (bé hơn 5) nên làm tròn xuống: $673 \\approx 670$',
          'Làm tròn đến hàng trăm: chữ số hàng chục là 7 (lớn hơn hoặc bằng 5) nên làm tròn lên: $673 \\approx 700$',
        ],
      },
      {
        prompt: 'Một cửa hàng có 2854 quyển sách. Làm tròn số sách đó đến hàng nghìn.',
        solution: ['Chữ số hàng trăm là 8 (lớn hơn hoặc bằng 5) nên làm tròn lên.', '$2854 \\approx 3000$ quyển sách.'],
      },
      {
        prompt: 'Ước lượng kết quả của phép tính 4870 + 3125 bằng cách làm tròn đến hàng nghìn, rồi tính kết quả đúng để so sánh.',
        solution: ['Ước lượng: $4870 \\approx 5000$, $3125 \\approx 3000$', 'Tổng ước lượng: $5000+3000=8000$', 'Kết quả đúng: $4870+3125=7995$, gần với số ước lượng 8000.'],
      },
      {
        prompt: 'Làm tròn số 95 đến hàng chục. Vì sao?',
        solution: ['Chữ số hàng đơn vị là 5 (lớn hơn hoặc bằng 5) nên làm tròn lên.', '$95 \\approx 100$'],
      },
      {
        prompt: 'Một đội bóng bán được 3675 vé xem trận đấu. Hãy làm tròn số vé đó đến hàng trăm, rồi đến hàng nghìn.',
        solution: [
          'Làm tròn đến hàng trăm: chữ số hàng chục là 7 nên làm tròn lên: $3675 \\approx 3700$',
          'Làm tròn đến hàng nghìn: chữ số hàng trăm là 6 nên làm tròn lên: $3675 \\approx 4000$',
        ],
      },
    ],
    flashcards: [
      { front: 'Làm tròn 47 đến hàng chục', back: '50' },
      { front: 'Làm tròn 231 đến hàng trăm', back: '200' },
      { front: 'Quy tắc làm tròn: chữ số liền sau < 5', back: 'Làm tròn xuống (giữ nguyên)' },
      { front: 'Quy tắc làm tròn: chữ số liền sau ≥ 5', back: 'Làm tròn lên (tăng thêm 1)' },
      { front: 'Làm tròn 6500 đến hàng nghìn', back: '7000' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Làm tròn số 23 đến hàng chục.', options: ['30', '20', '25', '23'], correctIndex: 1 },
        { question: 'Làm tròn số 78 đến hàng chục.', options: ['80', '70', '75', '78'], correctIndex: 0 },
        { question: 'Làm tròn số 145 đến hàng trăm.', options: ['200', '150', '100', '140'], correctIndex: 2 },
        { question: 'Làm tròn số 650 đến hàng trăm.', options: ['600', '700', '650', '750'], correctIndex: 1 },
        { question: 'Làm tròn số 3482 đến hàng nghìn.', options: ['4000', '3000', '3500', '3400'], correctIndex: 1 },
        { question: 'Làm tròn số 7650 đến hàng nghìn.', options: ['7000', '7600', '7700', '8000'], correctIndex: 3 },
        { question: 'Ước lượng tổng 512 + 289 bằng cách làm tròn đến hàng trăm.', options: ['700', '900', '800', '850'], correctIndex: 2 },
        { question: 'Ước lượng hiệu 934 - 478 bằng cách làm tròn đến hàng trăm.', options: ['400', '500', '300', '450'], correctIndex: 0 },
        {
          question: 'Số nào khi làm tròn đến hàng chục thì được kết quả là 60?',
          options: ['58', '65', '54', '70'],
          correctIndex: 0,
        },
        {
          question: 'Số nào khi làm tròn đến hàng trăm thì được kết quả là 500?',
          options: ['460', '550', '440', '600'],
          correctIndex: 0,
        },
        {
          question: 'Một xưởng sản xuất 2960 sản phẩm trong tháng. Làm tròn số đó đến hàng trăm.',
          options: ['2900', '3000', '2960', '2000'],
          correctIndex: 1,
        },
        { question: 'Ước lượng tổng 6120 + 2890 bằng cách làm tròn đến hàng nghìn.', options: ['8000', '10000', '9500', '9000'], correctIndex: 3 },
        { question: 'Ước lượng hiệu 8340 - 3610 bằng cách làm tròn đến hàng nghìn.', options: ['3000', '4000', '5000', '4500'], correctIndex: 1 },
        { question: 'Số 4500 làm tròn đến hàng nghìn được kết quả nào?', options: ['4000', '5000', '4500', '4600'], correctIndex: 1 },
        {
          question:
            'Bạn Lan mua các món đồ giá 187 nghìn đồng, 293 nghìn đồng và 415 nghìn đồng. Hãy ước lượng tổng số tiền bằng cách làm tròn mỗi số đến hàng trăm (nghìn đồng).',
          options: ['800 nghìn đồng', '900 nghìn đồng', '1000 nghìn đồng', '950 nghìn đồng'],
          correctIndex: 1,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Làm tròn số 3482 đến hàng trăm và đến hàng nghìn.',
          solution: [
            'Làm tròn đến hàng trăm: chữ số hàng chục là 8 nên làm tròn lên: $3482 \\approx 3500$',
            'Làm tròn đến hàng nghìn: chữ số hàng trăm là 4 nên làm tròn xuống: $3482 \\approx 3000$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một siêu thị bán được 2870 chai nước trong tuần đầu và 3450 chai nước trong tuần sau. Hãy ước lượng tổng số chai nước bán được trong hai tuần bằng cách làm tròn mỗi số đến hàng trăm, sau đó tính kết quả chính xác.',
          solution: [
            'Làm tròn: $2870 \\approx 2900$, $3450 \\approx 3500$',
            'Tổng ước lượng: $2900+3500=6400$',
            'Kết quả chính xác: $2870+3450=6320$, gần với số ước lượng 6400.',
          ],
        },
      ],
    },
  },
}
