import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP2_SO_PHAM_VI_1000 = {
  'l2-cac-so-den-1000': {
    title: 'Các số đến 1000, đọc viết và cấu tạo số',
    theory: {
      cards: [
        {
          title: 'Đọc, viết và phân tích số có ba chữ số',
          formulas: ['234 = 200 + 30 + 4', '506 = 500 + 0 + 6'],
          legend: [
            'Số có 3 chữ số gồm hàng trăm, hàng chục, hàng đơn vị',
            'Mỗi hàng có giá trị gấp 10 lần giá trị của hàng liền sau nó',
          ],
          note: 'Mẹo: khi đọc số có chữ số 0 ở hàng chục, con đọc thêm từ "linh", ví dụ 506 đọc là "năm trăm linh sáu".',
        },
        {
          title: 'So sánh và sắp xếp các số trong phạm vi 1000',
          formulas: ['342 < 423', '650 > 605', '999 < 1000'],
          legend: [
            'So sánh từ hàng cao nhất (hàng trăm) trở xuống, hàng nào lớn hơn thì số đó lớn hơn',
            'Nếu các hàng bằng nhau thì so sánh tiếp đến hàng thấp hơn',
          ],
          note: 'Mẹo: số có nhiều chữ số hơn thì lớn hơn — số có 4 chữ số (như 1000) luôn lớn hơn mọi số có 3 chữ số.',
        },
      ],
    },
    video: { caption: '00:00 / 06:30 — cac_so_den_1000_baigiang.mp4' },
    quiz: [
      {
        question: 'Số 573 gồm mấy trăm, mấy chục, mấy đơn vị?',
        options: ['5 trăm, 7 chục, 3 đơn vị', '5 trăm, 3 chục, 7 đơn vị', '7 trăm, 5 chục, 3 đơn vị', '3 trăm, 7 chục, 5 đơn vị'],
        correctIndex: 0,
      },
      { question: 'Số liền sau của 799 là số nào?', options: ['798', '801', '800', '790'], correctIndex: 2 },
      { question: 'So sánh 456 và 465.', options: ['456 = 465', '456 > 465', 'Không so sánh được', '456 < 465'], correctIndex: 3 },
      { question: 'Số nào lớn nhất trong các số 321, 312, 231, 213?', options: ['312', '321', '231', '213'], correctIndex: 1 },
      { question: 'Viết số gồm 6 trăm, 0 chục, 4 đơn vị.', options: ['640', '460', '604', '406'], correctIndex: 2 },
    ],
    essays: [
      { prompt: 'Viết số 748 thành tổng các trăm, chục, đơn vị.', solution: ['$748 = 700+40+8$'] },
      {
        prompt: 'So sánh hai số 382 và 328, số nào lớn hơn?',
        solution: ['Hai số đều có 3 trăm bằng nhau.', 'So sánh hàng chục: 382 có 8 chục, 328 có 2 chục.', 'Vì $8>2$ nên $382>328$, vậy 382 lớn hơn.'],
      },
      { prompt: 'Sắp xếp các số 205, 520, 250, 502 theo thứ tự từ bé đến lớn.', solution: ['Sắp xếp: $205 < 250 < 502 < 520$'] },
      { prompt: 'Số liền trước và số liền sau của số 900 là số nào?', solution: ['Số liền trước của 900 là 899.', 'Số liền sau của 900 là 901.'] },
      {
        prompt: 'Một cửa hàng có 4 trăm 5 chục 3 đơn vị quyển sách. Viết số đó.',
        solution: ['$400+50+3=453$', 'Cửa hàng có 453 quyển sách.'],
      },
    ],
    flashcards: [
      { front: '486 gồm những hàng nào?', back: '4 trăm, 8 chục, 6 đơn vị' },
      { front: 'Số liền sau 599', back: '600' },
      { front: 'Số liền trước 700', back: '699' },
      { front: 'So sánh 512 và 521', back: '$512 < 521$' },
      { front: 'Số lớn nhất có 3 chữ số', back: '999' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Số 907 đọc là gì?',
          options: ['Chín trăm linh bảy', 'Chín trăm bảy mươi', 'Chín mươi bảy', 'Chín trăm bảy'],
          correctIndex: 0,
        },
        { question: 'Số "ba trăm sáu mươi lăm" viết là?', options: ['356', '365', '635', '653'], correctIndex: 1 },
        { question: 'Số liền sau của 899 là?', options: ['898', '990', '900', '901'], correctIndex: 2 },
        { question: 'Số liền trước của 500 là?', options: ['501', '490', '510', '499'], correctIndex: 3 },
        { question: 'Trong số 648, chữ số 4 thuộc hàng nào?', options: ['Hàng chục', 'Hàng trăm', 'Hàng đơn vị', 'Không thuộc hàng nào'], correctIndex: 0 },
        { question: 'Số nào bé nhất: 512, 521, 152, 251?', options: ['521', '152', '512', '251'], correctIndex: 1 },
        { question: 'So sánh 674 và 647.', options: ['674 = 647', '674 < 647', '674 > 647', 'Không xác định'], correctIndex: 2 },
        { question: 'Phân tích đúng số 306 thành tổng.', options: ['300+60+0', '30+0+6', '300+0+60', '300+0+6'], correctIndex: 3 },
        { question: 'Số lớn nhất có 3 chữ số là số nào?', options: ['999', '1000', '990', '909'], correctIndex: 0 },
        {
          question: 'Sắp xếp 3 số 456, 465, 546 tăng dần, số đứng giữa là số nào?',
          options: ['456', '465', '546', '564'],
          correctIndex: 1,
        },
        {
          question: 'Một trại có 358 con gà, sau đó nhập thêm để có 3 trăm 8 chục 5 đơn vị con. Số gà sau khi nhập là bao nhiêu?',
          options: ['358', '538', '385', '583'],
          correctIndex: 2,
        },
        {
          question: 'Số nào có chữ số hàng trăm là 6, hàng chục là 0, hàng đơn vị là 9?',
          options: ['690', '906', '960', '609'],
          correctIndex: 3,
        },
        { question: 'Viết số liền sau của số lớn nhất có 2 chữ số.', options: ['100', '99', '999', '101'], correctIndex: 0 },
        { question: 'Trong các số 234, 243, 324, 342 số nào lớn nhất?', options: ['234', '342', '243', '324'], correctIndex: 1 },
        {
          question: 'Bạn Hà có 3 tấm thẻ số 2, 7, 4. Ghép thành số có 3 chữ số lớn nhất có thể, rồi trừ đi 100. Kết quả là bao nhiêu?',
          options: ['742', '724', '642', '624'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết số 528 thành tổng các trăm, chục, đơn vị, rồi cho biết chữ số 2 thuộc hàng nào.',
          solution: ['$528 = 500+20+8$', 'Chữ số 2 thuộc hàng chục.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Ba bạn Mai, Bình, Cường mỗi bạn viết một số có 3 chữ số: Mai viết 456, Bình viết 465, Cường viết 546. Hỏi bạn nào viết số lớn nhất, bạn nào viết số bé nhất?',
          solution: [
            'Cả ba số đều bắt đầu gần số 4,5 trăm nhưng 546 có 5 trăm, còn 456 và 465 có 4 trăm.',
            'So sánh 456 và 465: hàng chục 5 và 6, vì $5<6$ nên $456<465$.',
            'Vậy $546 > 465 > 456$: bạn Cường viết số lớn nhất (546), bạn Mai viết số bé nhất (456).',
          ],
        },
      ],
    },
  },

  'l2-cong-co-nho-100': {
    title: 'Phép cộng có nhớ trong phạm vi 100',
    theory: {
      cards: [
        {
          title: 'Cộng có nhớ hai số có hai chữ số',
          formulas: ['28 + 35 = 63', '46 + 27 = 73'],
          legend: [
            'Cộng hàng đơn vị trước; nếu kết quả $\\geq 10$ thì viết chữ số hàng đơn vị, nhớ 1 sang hàng chục',
            'Cộng hàng chục, nhớ cộng thêm số đã nhớ',
          ],
          note: 'Mẹo: đặt tính thẳng cột, cộng từ phải sang trái (hàng đơn vị trước, hàng chục sau), đừng quên cộng thêm số nhớ vào hàng chục.',
        },
        {
          title: 'Cộng số có hai chữ số với số có một chữ số',
          formulas: ['65 + 8 = 73', '39 + 46 = 85'],
          legend: [
            'Khi cộng một số có 2 chữ số với số có 1 chữ số, vẫn đặt tính thẳng cột hàng đơn vị',
            'Nếu tổng hai chữ số hàng đơn vị $\\geq 10$, luôn phải nhớ 1 sang hàng chục',
          ],
          note: 'Mẹo: ước lượng kết quả trước khi tính — ví dụ 39+46 gần bằng 40+46=86, nên kết quả đúng sẽ gần với 86.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — phep_cong_co_nho_100_baigiang.mp4' },
    quiz: [
      { question: '27 + 15 = ?', options: ['42', '41', '43', '32'], correctIndex: 0 },
      { question: '38 + 46 = ?', options: ['74', '84', '94', '83'], correctIndex: 1 },
      { question: '59 + 27 = ?', options: ['76', '96', '86', '85'], correctIndex: 2 },
      { question: '64 + 19 = ?', options: ['82', '93', '73', '83'], correctIndex: 3 },
      { question: 'Lớp 2A có 26 bạn nam và 17 bạn nữ. Hỏi lớp 2A có tất cả bao nhiêu bạn?', options: ['43', '33', '44', '42'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Đặt tính rồi tính: 34 + 28.',
        solution: ['Đặt tính thẳng cột.', '$4+8=12$, viết 2 nhớ 1.', '$3+2=5$, cộng thêm 1 nhớ được 6.', '$34+28=62$'],
      },
      { prompt: 'Một vườn cây có 45 cây cam, trồng thêm 38 cây cam nữa. Hỏi vườn cây có tất cả bao nhiêu cây cam?', solution: ['$45+38=83$', 'Vườn cây có tất cả 83 cây cam.'] },
      { prompt: 'Tính: 19 + 63.', solution: ['$19+63=82$'] },
      {
        prompt: 'Bạn Lan gấp được 27 chiếc thuyền giấy, bạn Hoa gấp được nhiều hơn Lan 16 chiếc. Hỏi bạn Hoa gấp được bao nhiêu chiếc thuyền?',
        solution: ['$27+16=43$', 'Bạn Hoa gấp được 43 chiếc thuyền giấy.'],
      },
      { prompt: 'Điền số thích hợp: 48 + … = 75.', solution: ['Vì $48+27=75$ nên số cần điền là $27$.'] },
    ],
    flashcards: [
      { front: '36 + 27', back: '63' },
      { front: '58 + 19', back: '77' },
      { front: 'Khi cộng hàng đơn vị được kết quả từ 10 trở lên thì làm gì?', back: 'Viết chữ số hàng đơn vị, nhớ 1 sang hàng chục' },
      { front: '45 + 45', back: '90' },
      { front: '29 + 8', back: '37' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '23 + 19 = ?', options: ['42', '41', '43', '32'], correctIndex: 0 },
        { question: '47 + 26 = ?', options: ['63', '73', '83', '72'], correctIndex: 1 },
        { question: '58 + 34 = ?', options: ['82', '93', '92', '91'], correctIndex: 2 },
        { question: '66 + 17 = ?', options: ['82', '93', '73', '83'], correctIndex: 3 },
        { question: '39 + 29 = ?', options: ['68', '58', '78', '69'], correctIndex: 0 },
        { question: '15 + 76 = ?', options: ['81', '91', '92', '90'], correctIndex: 1 },
        { question: '84 + 9 = ?', options: ['92', '94', '93', '83'], correctIndex: 2 },
        { question: '27 + 58 = ?', options: ['84', '86', '75', '85'], correctIndex: 3 },
        {
          question: 'Một cửa hàng buổi sáng bán được 34 cái bánh, buổi chiều bán được 48 cái bánh. Hỏi cả ngày cửa hàng bán được bao nhiêu cái bánh?',
          options: ['82', '72', '92', '81'],
          correctIndex: 0,
        },
        { question: 'Bạn Nam có 29 viên bi, được cho thêm 46 viên bi. Hỏi bạn Nam có tất cả bao nhiêu viên bi?', options: ['65', '75', '85', '74'], correctIndex: 1 },
        { question: 'Điền số: 36 + … = 84.', options: ['47', '49', '48', '38'], correctIndex: 2 },
        { question: 'Tính: 18 + 18 + 18.', options: ['53', '55', '36', '54'], correctIndex: 3 },
        { question: 'Số nào cộng với 37 thì bằng 72?', options: ['35', '34', '36', '45'], correctIndex: 0 },
        {
          question: 'Một tổ có 24 học sinh nam, số học sinh nữ nhiều hơn số học sinh nam 9 bạn. Hỏi tổ có bao nhiêu học sinh nữ?',
          options: ['32', '33', '34', '23'],
          correctIndex: 1,
        },
        { question: 'Tính tổng của 48 và 39 rồi cộng thêm 3.', options: ['89', '91', '90', '88'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 47 + 38.',
          solution: ['Đặt tính thẳng cột.', '$7+8=15$, viết 5 nhớ 1.', '$4+3=7$, cộng thêm 1 nhớ được 8.', '$47+38=85$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một thư viện buổi sáng có 56 bạn đến đọc sách, buổi chiều có thêm 27 bạn nữa đến (không trùng với buổi sáng). Hỏi cả ngày thư viện đó có bao nhiêu lượt bạn đến đọc sách?',
          solution: ['$56+27=83$', 'Cả ngày thư viện có 83 lượt bạn đến đọc sách.'],
        },
      ],
    },
  },

  'l2-tru-co-nho-100': {
    title: 'Phép trừ có nhớ trong phạm vi 100',
    theory: {
      cards: [
        {
          title: 'Trừ có nhớ (mượn 1 chục)',
          formulas: ['42 - 15 = 27', '53 - 26 = 27'],
          legend: [
            'Khi số trừ ở hàng đơn vị lớn hơn số bị trừ ở hàng đơn vị, phải mượn 1 chục từ hàng chục',
            'Mượn 1 chục nghĩa là hàng đơn vị của số bị trừ tăng thêm 10, hàng chục giảm đi 1',
          ],
          note: 'Mẹo: khi mượn 1 chục, nhớ trừ bớt 1 ở hàng chục của số bị trừ trước khi trừ tiếp.',
        },
        {
          title: 'Kiểm tra phép trừ bằng phép cộng',
          formulas: ['81 - 47 = 34', '34 + 47 = 81'],
          legend: [
            'Phép trừ có nhớ vẫn có thể kiểm tra lại bằng phép cộng: hiệu cộng với số trừ phải ra số bị trừ',
            'Ước lượng kết quả trước khi đặt tính giúp tránh sai sót',
          ],
          note: 'Mẹo: sau khi tính xong phép trừ, con hãy lấy kết quả cộng với số trừ để kiểm tra lại cho chắc chắn.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — phep_tru_co_nho_100_baigiang.mp4' },
    quiz: [
      { question: '52 - 18 = ?', options: ['34', '44', '24', '33'], correctIndex: 0 },
      { question: '73 - 27 = ?', options: ['56', '46', '36', '45'], correctIndex: 1 },
      { question: '91 - 45 = ?', options: ['45', '56', '46', '36'], correctIndex: 2 },
      { question: '64 - 38 = ?', options: ['36', '16', '25', '26'], correctIndex: 3 },
      { question: 'Bạn Hùng có 50 viên bi, cho bạn 24 viên. Hỏi bạn Hùng còn lại bao nhiêu viên bi?', options: ['26', '36', '16', '25'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Đặt tính rồi tính: 63 - 27.',
        solution: ['Đặt tính thẳng cột.', '$3<7$ nên mượn 1 chục: $13-7=6$.', 'Hàng chục: $6-1-2=3$.', '$63-27=36$'],
      },
      { prompt: 'Một trại nuôi 82 con vịt, bán đi 45 con. Hỏi trại còn lại bao nhiêu con vịt?', solution: ['$82-45=37$', 'Trại còn lại 37 con vịt.'] },
      { prompt: 'Tính: 70 - 34.', solution: ['$70-34=36$'] },
      {
        prompt: 'Bạn Mai có 60 nghìn đồng, mua đồ dùng học tập hết 28 nghìn đồng. Hỏi bạn Mai còn lại bao nhiêu nghìn đồng?',
        solution: ['$60-28=32$', 'Bạn Mai còn lại 32 nghìn đồng.'],
      },
      { prompt: 'Điền số thích hợp: 90 - … = 56.', solution: ['Vì $90-34=56$ nên số cần điền là $34$.'] },
    ],
    flashcards: [
      { front: '54 - 27', back: '27' },
      { front: '80 - 36', back: '44' },
      { front: 'Khi hàng đơn vị của số bị trừ nhỏ hơn số trừ thì làm gì?', back: 'Mượn 1 chục từ hàng chục' },
      { front: '45 - 19', back: '26' },
      { front: 'Cách kiểm tra phép trừ', back: 'Lấy hiệu cộng với số trừ, phải ra số bị trừ' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '46 - 19 = ?', options: ['27', '37', '17', '26'], correctIndex: 0 },
        { question: '82 - 35 = ?', options: ['57', '47', '37', '46'], correctIndex: 1 },
        { question: '61 - 24 = ?', options: ['36', '27', '37', '47'], correctIndex: 2 },
        { question: '93 - 58 = ?', options: ['45', '25', '36', '35'], correctIndex: 3 },
        { question: '70 - 26 = ?', options: ['44', '54', '34', '43'], correctIndex: 0 },
        { question: '55 - 38 = ?', options: ['27', '17', '16', '18'], correctIndex: 1 },
        { question: '84 - 49 = ?', options: ['45', '25', '35', '36'], correctIndex: 2 },
        { question: '90 - 63 = ?', options: ['37', '17', '26', '27'], correctIndex: 3 },
        {
          question: 'Một tủ sách có 71 quyển truyện, cho mượn 34 quyển. Hỏi tủ sách còn lại bao nhiêu quyển truyện?',
          options: ['37', '47', '27', '36'],
          correctIndex: 0,
        },
        {
          question: 'Bạn An gấp được 42 con hạc giấy, bạn Bình gấp ít hơn An 15 con. Hỏi bạn Bình gấp được bao nhiêu con hạc giấy?',
          options: ['37', '27', '17', '26'],
          correctIndex: 1,
        },
        { question: 'Điền số: 65 - … = 28.', options: ['36', '37', '38', '27'], correctIndex: 2 },
        { question: 'Tính: 90 - 45 - 16.', options: ['30', '39', '28', '29'], correctIndex: 3 },
        { question: 'Số nào trừ đi 47 thì bằng 25?', options: ['72', '62', '71', '73'], correctIndex: 0 },
        { question: 'Một cửa hàng có 53 cái áo, bán đi 27 cái. Hỏi cửa hàng còn lại bao nhiêu cái áo?', options: ['36', '26', '16', '25'], correctIndex: 1 },
        { question: 'Tính hiệu của 81 và 39, rồi trừ tiếp đi 12.', options: ['40', '20', '31', '30'], correctIndex: 3 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 72 - 38.',
          solution: ['Đặt tính thẳng cột.', '$2<8$ nên mượn 1 chục: $12-8=4$.', 'Hàng chục: $6-3=3$ (7 trừ 1 đã mượn còn 6).', '$72-38=34$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một kho có 95 bao gạo, đã chuyển đi 48 bao vào buổi sáng và 19 bao vào buổi chiều. Hỏi kho còn lại bao nhiêu bao gạo?',
          solution: ['$95-48=47$ (còn lại sau buổi sáng)', '$47-19=28$ (còn lại sau buổi chiều)', 'Kho còn lại 28 bao gạo.'],
        },
      ],
    },
  },

  'l2-cong-tru-1000': {
    title: 'Phép cộng, phép trừ trong phạm vi 1000',
    theory: {
      cards: [
        {
          title: 'Cộng các số có ba chữ số',
          formulas: ['234 + 152 = 386', '345 + 128 = 473'],
          legend: [
            'Đặt tính thẳng cột: hàng trăm thẳng hàng trăm, hàng chục thẳng hàng chục, hàng đơn vị thẳng hàng đơn vị',
            'Cộng từ phải sang trái, nếu có nhớ thì cộng thêm số nhớ vào hàng tiếp theo',
          ],
          note: 'Mẹo: luôn đặt tính thẳng cột trước khi cộng số có 3 chữ số để tránh nhầm hàng.',
        },
        {
          title: 'Trừ các số có ba chữ số',
          formulas: ['456 - 231 = 225', '532 - 178 = 354'],
          legend: [
            'Trừ từ phải sang trái, nếu hàng đơn vị (hoặc hàng chục) không đủ trừ thì mượn 1 từ hàng liền trước',
            'Kết quả phép trừ luôn có thể kiểm tra lại bằng phép cộng',
          ],
          note: 'Mẹo: với số có 3 chữ số, có thể phải mượn liên tiếp ở cả hàng chục và hàng trăm — con hãy làm cẩn thận từng bước.',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — cong_tru_pham_vi_1000_baigiang.mp4' },
    quiz: [
      { question: '324 + 253 = ?', options: ['577', '567', '587', '576'], correctIndex: 0 },
      { question: '415 + 284 = ?', options: ['689', '699', '709', '698'], correctIndex: 1 },
      { question: '673 - 241 = ?', options: ['442', '422', '432', '431'], correctIndex: 2 },
      { question: '852 - 367 = ?', options: ['495', '475', '486', '485'], correctIndex: 3 },
      {
        question: 'Một trường có 356 học sinh khối 2 và 289 học sinh khối 3. Hỏi trường có tất cả bao nhiêu học sinh hai khối?',
        options: ['645', '655', '635', '646'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt: 'Đặt tính rồi tính: 246 + 375.',
        solution: ['Đặt tính thẳng cột.', '$6+5=11$, viết 1 nhớ 1.', '$4+7+1=12$, viết 2 nhớ 1.', '$2+3+1=6$.', '$246+375=621$'],
      },
      { prompt: 'Một cửa hàng có 480 quyển vở, nhập thêm 265 quyển. Hỏi cửa hàng có tất cả bao nhiêu quyển vở?', solution: ['$480+265=745$', 'Cửa hàng có tất cả 745 quyển vở.'] },
      {
        prompt: 'Tính: 920 - 356.',
        solution: ['$0<6$ nên mượn 1 chục: $10-6=4$.', 'Hàng chục: $1<5$ (2 trừ 1 đã mượn) nên mượn 1 trăm: $11-5=6$.', 'Hàng trăm: $8-3=5$ (9 trừ 1 đã mượn còn 8).', '$920-356=564$'],
      },
      {
        prompt: 'Một kho hàng có 615 thùng hàng, đã xuất đi 348 thùng. Hỏi kho còn lại bao nhiêu thùng hàng?',
        solution: ['$615-348=267$', 'Kho còn lại 267 thùng hàng.'],
      },
      { prompt: 'Điền số thích hợp: 375 + … = 620.', solution: ['Vì $375+245=620$ nên số cần điền là $245$.'] },
    ],
    flashcards: [
      { front: '234 + 456', back: '690' },
      { front: '789 - 345', back: '444' },
      { front: 'Khi đặt tính số có 3 chữ số cần chú ý gì?', back: 'Đặt các hàng thẳng cột: trăm với trăm, chục với chục, đơn vị với đơn vị' },
      { front: '500 - 268', back: '232' },
      { front: '347 + 258', back: '605' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '213 + 364 = ?', options: ['577', '567', '587', '576'], correctIndex: 0 },
        { question: '528 + 143 = ?', options: ['661', '671', '681', '670'], correctIndex: 1 },
        { question: '465 - 238 = ?', options: ['237', '217', '227', '226'], correctIndex: 2 },
        { question: '704 - 256 = ?', options: ['458', '438', '447', '448'], correctIndex: 3 },
        { question: '356 + 298 = ?', options: ['654', '664', '644', '653'], correctIndex: 0 },
        { question: '819 - 542 = ?', options: ['287', '277', '267', '276'], correctIndex: 1 },
        { question: '176 + 345 = ?', options: ['511', '521', '531', '520'], correctIndex: 2 },
        { question: '630 - 284 = ?', options: ['356', '336', '345', '346'], correctIndex: 3 },
        {
          question: 'Một xưởng may làm được 425 cái áo trong tuần đầu và 318 cái áo trong tuần sau. Hỏi xưởng may làm được tất cả bao nhiêu cái áo trong hai tuần?',
          options: ['743', '733', '753', '742'],
          correctIndex: 0,
        },
        { question: 'Một xe chở 850 bao xi măng, đã giao 476 bao. Hỏi xe còn lại bao nhiêu bao xi măng?', options: ['384', '374', '364', '373'], correctIndex: 1 },
        { question: 'Điền số: 265 + … = 500.', options: ['225', '235', '245', '236'], correctIndex: 2 },
        { question: 'Tính: 999 - 456.', options: ['553', '533', '544', '543'], correctIndex: 3 },
        { question: 'Số nào cộng với 347 thì bằng 802?', options: ['455', '445', '465', '456'], correctIndex: 0 },
        {
          question: 'Một trường tiểu học có 620 học sinh, trong đó có 275 học sinh nam. Hỏi trường có bao nhiêu học sinh nữ?',
          options: ['335', '345', '355', '344'],
          correctIndex: 1,
        },
        { question: 'Tính tổng của 275 và 348, rồi trừ đi 100.', options: ['513', '523', '533', '522'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: 456 + 278.',
          solution: ['$6+8=14$, viết 4 nhớ 1.', '$5+7+1=13$, viết 3 nhớ 1.', '$4+2+1=7$.', '$456+278=734$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một thư viện có 725 quyển sách, đã cho mượn 289 quyển vào tuần trước và cho mượn thêm 156 quyển vào tuần này. Hỏi thư viện còn lại bao nhiêu quyển sách?',
          solution: ['$725-289=436$ (còn lại sau tuần trước)', '$436-156=280$ (còn lại sau tuần này)', 'Thư viện còn lại 280 quyển sách.'],
        },
      ],
    },
  },
}
