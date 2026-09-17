import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP3_NHAN_CHIA_NANG_CAO = {
  'l3-bang-nhan-chia-den-9': {
    title: 'Bảng nhân, bảng chia đến 9 (ôn tập và mở rộng)',
    theory: {
      cards: [
        {
          title: 'Bảng nhân đến 9',
          formulas: ['6 \\times 7 = 42', '8 \\times 9 = 72'],
          legend: [
            'Bảng nhân là bảng ghi kết quả phép nhân của các số từ 1 đến 9',
            'Muốn nhân nhẩm nhanh, con có thể dùng bảng nhân đã học hoặc tính bằng cách cộng nhiều lần',
          ],
          note: 'Mẹo: nếu quên một phép nhân, con có thể tính dựa vào phép nhân đã thuộc, ví dụ $7\\times8 = 7\\times7+7 = 49+7 = 56$.',
        },
        {
          title: 'Bảng chia đến 9',
          formulas: ['42 \\div 6 = 7', '72 \\div 9 = 8'],
          legend: [
            'Phép chia là phép tính ngược của phép nhân: nếu $a\\times b=c$ thì $c\\div b=a$',
            'Mỗi bảng chia tương ứng với một bảng nhân cùng số',
          ],
          note: 'Mẹo: muốn tìm kết quả phép chia, con nghĩ đến bảng nhân tương ứng, ví dụ $54\\div9$ nghĩ "9 nhân mấy bằng 54?" ($9\\times6=54$ nên $54\\div9=6$).',
        },
      ],
    },
    video: { caption: '00:00 / 07:30 — bang_nhan_chia_den_9_baigiang.mp4' },
    quiz: [
      { question: 'Tính: $7 \\times 6 = ?$', options: ['42', '36', '48', '35'], correctIndex: 0 },
      { question: 'Tính: $72 \\div 8 = ?$', options: ['6', '7', '9', '8'], correctIndex: 2 },
      { question: 'Tính: $8 \\times 5 = ?$', options: ['35', '40', '45', '30'], correctIndex: 1 },
      { question: 'Tính: $81 \\div 9 = ?$', options: ['7', '8', '10', '9'], correctIndex: 3 },
      {
        question: 'Có 6 hộp bút, mỗi hộp có 9 cái bút. Hỏi có tất cả bao nhiêu cái bút?',
        options: ['45', '63', '54', '48'],
        correctIndex: 2,
      },
    ],
    essays: [
      { prompt: 'Tính: $7 \\times 9$.', solution: ['$7\\times9=63$'] },
      { prompt: 'Tính: $56 \\div 7$.', solution: ['$56\\div7=8$'] },
      {
        prompt: 'Một lớp học có 8 tổ, mỗi tổ có 5 bạn. Hỏi lớp đó có bao nhiêu bạn?',
        solution: ['$8\\times5=40$', 'Lớp đó có 40 bạn.'],
      },
      {
        prompt: 'Cô giáo chia đều 45 quyển vở cho 9 bạn. Hỏi mỗi bạn được bao nhiêu quyển vở?',
        solution: ['$45\\div9=5$', 'Mỗi bạn được 5 quyển vở.'],
      },
      {
        prompt: 'Một cửa hàng có 7 túi kẹo, mỗi túi có 8 cái kẹo. Cửa hàng bán bớt đi 2 túi. Hỏi cửa hàng còn lại bao nhiêu cái kẹo?',
        solution: ['Số túi kẹo còn lại: $7-2=5$ túi', 'Số kẹo còn lại: $5\\times8=40$', 'Cửa hàng còn lại 40 cái kẹo.'],
      },
    ],
    flashcards: [
      { front: '$6\\times7$', back: '42' },
      { front: '$72\\div8$', back: '9' },
      { front: '$9\\times8$', back: '72' },
      { front: '$63\\div9$', back: '7' },
      { front: '$8\\times6$', back: '48' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tính: $8 \\times 7 = ?$', options: ['56', '54', '63', '49'], correctIndex: 0 },
        { question: 'Tính: $63 \\div 9 = ?$', options: ['6', '7', '8', '9'], correctIndex: 1 },
        { question: 'Tính: $6 \\times 6 = ?$', options: ['30', '42', '36', '48'], correctIndex: 2 },
        { question: 'Tính: $42 \\div 7 = ?$', options: ['5', '7', '8', '6'], correctIndex: 3 },
        { question: 'Tính: $9 \\times 4 = ?$', options: ['36', '32', '40', '45'], correctIndex: 0 },
        { question: 'Tính: $49 \\div 7 = ?$', options: ['6', '7', '8', '9'], correctIndex: 1 },
        { question: 'Tính: $8 \\times 8 = ?$', options: ['56', '72', '64', '48'], correctIndex: 2 },
        { question: 'Tính: $72 \\div 9 = ?$', options: ['6', '7', '9', '8'], correctIndex: 3 },
        { question: 'Tính: $7 \\times 5 = ?$', options: ['35', '40', '30', '45'], correctIndex: 0 },
        { question: 'Tính: $81 \\div 9 = ?$', options: ['8', '9', '7', '6'], correctIndex: 1 },
        { question: 'Tính: $6 \\times 9 = ?$', options: ['48', '45', '54', '63'], correctIndex: 2 },
        { question: 'Tính: $56 \\div 8 = ?$', options: ['6', '8', '9', '7'], correctIndex: 3 },
        {
          question: 'Một đội có 9 hàng, mỗi hàng 6 người. Hỏi đội đó có bao nhiêu người?',
          options: ['54', '63', '48', '45'],
          correctIndex: 0,
        },
        {
          question: 'Cô giáo có 48 cái bút, chia đều cho 6 nhóm. Hỏi mỗi nhóm được bao nhiêu cái bút?',
          options: ['6', '8', '7', '9'],
          correctIndex: 1,
        },
        {
          question: 'Một rổ có 7 quả cam, một rổ khác có số cam gấp 8 lần rổ đó. Hỏi rổ thứ hai có bao nhiêu quả cam?',
          options: ['48', '63', '56', '49'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính rồi cho biết kết quả: $9\\times7$ và $63\\div9$.',
          solution: ['$9\\times7=63$', '$63\\div9=7$', 'Hai phép tính này có liên quan với nhau: vì $9\\times7=63$ nên $63\\div9=7$.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một xưởng có 72 sản phẩm được đóng đều vào các thùng, mỗi thùng 8 sản phẩm. Sau đó xưởng làm thêm 4 thùng nữa, mỗi thùng cũng đựng 8 sản phẩm. Hỏi xưởng có tất cả bao nhiêu sản phẩm?',
          solution: [
            'Số thùng ban đầu: $72\\div8=9$ thùng',
            'Tổng số thùng sau khi làm thêm: $9+4=13$ thùng',
            'Tổng số sản phẩm: $13\\times8=104$',
            'Xưởng có tất cả 104 sản phẩm.',
          ],
        },
      ],
    },
  },

  'l3-nhan-so-co-nhieu-chu-so': {
    title: 'Nhân số có 2, 3, 4 chữ số với số có 1 chữ số',
    theory: {
      cards: [
        {
          title: 'Nhân số có 2, 3 chữ số với số có 1 chữ số',
          formulas: ['23 \\times 3 = 69', '146 \\times 2 = 292'],
          legend: [
            'Đặt tính theo cột dọc, nhân từ hàng đơn vị sang hàng cao hơn',
            'Nếu tích ở một hàng lớn hơn hoặc bằng 10 thì viết chữ số hàng đơn vị của tích đó và nhớ sang hàng liền trước',
          ],
          note: 'Mẹo: nhân lần lượt từng chữ số của thừa số với số có 1 chữ số, nhớ cộng thêm số đã nhớ ở bước trước.',
        },
        {
          title: 'Nhân số có 4 chữ số với số có 1 chữ số',
          formulas: ['2134 \\times 4 = 8536', '1256 \\times 3 = 3768'],
          legend: [
            'Cách làm tương tự nhân số có 3 chữ số, thực hiện lần lượt từ hàng đơn vị đến hàng nghìn',
            'Kết quả phép nhân số có 4 chữ số với số có 1 chữ số có thể có 4 hoặc 5 chữ số',
          ],
          note: 'Mẹo: ước lượng trước kết quả bằng cách làm tròn thừa số để kiểm tra đáp số có hợp lý không.',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — nhan_so_nhieu_chu_so_baigiang.mp4' },
    quiz: [
      { question: 'Tính: $34 \\times 2 = ?$', options: ['64', '68', '78', '66'], correctIndex: 1 },
      { question: 'Tính: $213 \\times 3 = ?$', options: ['936', '693', '633', '639'], correctIndex: 3 },
      { question: 'Tính: $1024 \\times 4 = ?$', options: ['4096', '4906', '4069', '4960'], correctIndex: 0 },
      { question: 'Tính: $456 \\times 2 = ?$', options: ['902', '922', '912', '882'], correctIndex: 2 },
      {
        question: 'Một hộp có 125 viên bi, có 3 hộp như vậy. Hỏi có tất cả bao nhiêu viên bi?',
        options: ['370', '375', '385', '365'],
        correctIndex: 1,
      },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: $236 \\times 3$.', solution: ['$236\\times3=708$'] },
      { prompt: 'Đặt tính rồi tính: $1425 \\times 4$.', solution: ['$1425\\times4=5700$'] },
      {
        prompt: 'Một thùng có 145 quả trứng, có 6 thùng như vậy. Hỏi có tất cả bao nhiêu quả trứng?',
        solution: ['$145\\times6=870$', 'Có tất cả 870 quả trứng.'],
      },
      {
        prompt: 'Mỗi xe chở được 1250kg hàng. Hỏi 4 xe như vậy chở được bao nhiêu ki-lô-gam hàng?',
        solution: ['$1250\\times4=5000$', '4 xe chở được 5000kg hàng.'],
      },
      {
        prompt: 'Một trường có 8 lớp, mỗi lớp có 34 học sinh. Hỏi trường đó có tất cả bao nhiêu học sinh?',
        solution: ['$34\\times8=272$', 'Trường đó có tất cả 272 học sinh.'],
      },
    ],
    flashcards: [
      { front: '$23\\times3$', back: '69' },
      { front: '$146\\times2$', back: '292' },
      { front: '$2134\\times4$', back: '8536' },
      { front: 'Khi nhân số có 4 chữ số với số có 1 chữ số, làm theo thứ tự hàng nào trước?', back: 'Hàng đơn vị trước, rồi đến hàng chục, hàng trăm, hàng nghìn' },
      { front: '$1256\\times3$', back: '3768' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tính: $24 \\times 3 = ?$', options: ['72', '62', '82', '74'], correctIndex: 0 },
        { question: 'Tính: $142 \\times 3 = ?$', options: ['416', '426', '436', '462'], correctIndex: 1 },
        { question: 'Tính: $315 \\times 2 = ?$', options: ['620', '610', '630', '640'], correctIndex: 2 },
        { question: 'Tính: $1203 \\times 4 = ?$', options: ['4712', '4822', '4802', '4812'], correctIndex: 3 },
        { question: 'Tính: $218 \\times 4 = ?$', options: ['872', '862', '882', '792'], correctIndex: 0 },
        { question: 'Tính: $3021 \\times 3 = ?$', options: ['9053', '9063', '9163', '9603'], correctIndex: 1 },
        { question: 'Tính: $156 \\times 5 = ?$', options: ['680', '770', '780', '790'], correctIndex: 2 },
        { question: 'Tính: $2789 \\times 3 = ?$', options: ['8347', '8357', '8467', '8367'], correctIndex: 3 },
        {
          question: 'Một cửa hàng có 7 thùng táo, mỗi thùng có 125 quả. Hỏi cửa hàng có tất cả bao nhiêu quả táo?',
          options: ['875', '865', '885', '795'],
          correctIndex: 0,
        },
        {
          question: 'Một xe tải chở 6 chuyến, mỗi chuyến chở 1340kg hàng. Hỏi xe tải đó chở tất cả bao nhiêu ki-lô-gam hàng?',
          options: ['8030', '8040', '8140', '8004'],
          correctIndex: 1,
        },
        { question: 'Tính: $436 \\times 2 = ?$', options: ['862', '882', '872', '892'], correctIndex: 2 },
        { question: 'Tính: $3102 \\times 3 = ?$', options: ['9296', '9316', '9206', '9306'], correctIndex: 3 },
        {
          question: 'Một đội trồng cây, mỗi ngày trồng được 234 cây, trồng trong 4 ngày. Hỏi đội đó trồng được tất cả bao nhiêu cây?',
          options: ['936', '926', '946', '836'],
          correctIndex: 0,
        },
        { question: 'Tính giá trị biểu thức $125 \\times 4$.', options: ['450', '500', '520', '480'], correctIndex: 1 },
        {
          question:
            'Một kho có 1523 bao gạo, người ta nhập thêm một lô hàng gồm 3 chuyến xe, mỗi chuyến chở 215 bao. Hỏi kho có tất cả bao nhiêu bao gạo?',
          options: ['2158', '2148', '2168', '2178'],
          correctIndex: 2,
        },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: $1247 \\times 4$.', solution: ['$1247\\times4=4988$'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một nhà máy đóng gói bánh vào hộp, mỗi hộp có 235 cái bánh. Nhà máy đóng được 6 hộp trong buổi sáng và 3 hộp trong buổi chiều. Hỏi nhà máy đóng được tất cả bao nhiêu cái bánh trong cả ngày?',
          solution: [
            'Tổng số hộp trong cả ngày: $6+3=9$ hộp',
            'Tổng số bánh: $235\\times9=2115$',
            'Nhà máy đóng được tất cả 2115 cái bánh.',
          ],
        },
      ],
    },
  },

  'l3-chia-het-chia-co-du': {
    title: 'Chia hết, chia có dư — chia số có nhiều chữ số cho số có 1 chữ số',
    theory: {
      cards: [
        {
          title: 'Phép chia hết',
          formulas: ['486 \\div 6 = 81', '936 \\div 3 = 312'],
          legend: [
            'Phép chia hết là phép chia có số dư bằng 0',
            'Thực hiện chia lần lượt từ hàng cao nhất của số bị chia',
          ],
          note: 'Mẹo: muốn kiểm tra phép chia đúng, con lấy thương nhân với số chia, nếu bằng số bị chia thì phép chia hết đúng.',
        },
        {
          title: 'Phép chia có dư',
          formulas: ['47 \\div 5 = 9 (dư 2)', '235 \\div 4 = 58 (dư 3)'],
          legend: [
            'Trong phép chia có dư, số dư luôn bé hơn số chia',
            'Số bị chia = Số chia × Thương + Số dư',
          ],
          note: 'Mẹo: sau khi chia xong, con kiểm tra lại bằng công thức Số bị chia = Số chia × Thương + Số dư.',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — chia_het_chia_co_du_baigiang.mp4' },
    quiz: [
      { question: 'Tính: $75 \\div 8 = ?$ (nêu thương và số dư)', options: ['9 dư 2', '8 dư 3', '9 dư 3', '10 dư 5'], correctIndex: 2 },
      { question: 'Tính: $84 \\div 7 = ?$', options: ['12', '11', '13', '14'], correctIndex: 0 },
      { question: 'Tính: $58 \\div 9 = ?$ (nêu thương và số dư)', options: ['6 dư 2', '6 dư 3', '6 dư 5', '6 dư 4'], correctIndex: 3 },
      { question: 'Tính: $93 \\div 4 = ?$ (nêu thương và số dư)', options: ['23 dư 0', '23 dư 1', '22 dư 5', '24 dư 3'], correctIndex: 1 },
      {
        question: 'Một lớp có 35 học sinh xếp thành các hàng, mỗi hàng 6 học sinh. Hỏi xếp được nhiều nhất bao nhiêu hàng đủ và còn dư bao nhiêu bạn?',
        options: ['5 hàng, dư 3', '5 hàng, dư 4', '5 hàng, dư 5', '6 hàng, dư 0'],
        correctIndex: 2,
      },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: $468 \\div 6$.', solution: ['$468\\div6=78$'] },
      { prompt: 'Đặt tính rồi tính: $275 \\div 4$ (nêu rõ thương và số dư).', solution: ['$275\\div4=68$ (dư $3$)'] },
      {
        prompt: 'Một cửa hàng có 546 quả trứng, xếp đều vào các khay, mỗi khay 6 quả. Hỏi xếp được bao nhiêu khay?',
        solution: ['$546\\div6=91$', 'Xếp được 91 khay trứng.'],
      },
      {
        prompt: 'Có 85 quyển vở chia đều cho 9 bạn, mỗi bạn được nhiều nhất bao nhiêu quyển và còn thừa bao nhiêu quyển?',
        solution: ['$85\\div9=9$ (dư $4$)', 'Mỗi bạn được 9 quyển vở, còn thừa 4 quyển.'],
      },
      {
        prompt: 'Một đội có 63 người muốn chia đều thành các nhóm, mỗi nhóm 7 người. Hỏi chia được bao nhiêu nhóm? Phép chia này có dư không?',
        solution: ['$63\\div7=9$', 'Chia được 9 nhóm, phép chia này hết, không dư.'],
      },
    ],
    flashcards: [
      { front: '$486\\div6$', back: '81' },
      { front: '$47\\div5$', back: '9 dư 2' },
      { front: 'Trong phép chia có dư, số dư phải như thế nào so với số chia?', back: 'Số dư luôn bé hơn số chia' },
      { front: 'Công thức liên hệ số bị chia, số chia, thương, số dư', back: 'Số bị chia = Số chia × Thương + Số dư' },
      { front: '$235\\div4$', back: '58 dư 3' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tính: $96 \\div 8 = ?$', options: ['12', '11', '13', '14'], correctIndex: 0 },
        { question: 'Tính: $77 \\div 9 = ?$ (nêu thương và số dư)', options: ['8 dư 4', '8 dư 5', '8 dư 6', '9 dư 0'], correctIndex: 1 },
        { question: 'Tính: $342 \\div 3 = ?$', options: ['104', '124', '114', '140'], correctIndex: 2 },
        { question: 'Tính: $500 \\div 7 = ?$ (nêu thương và số dư)', options: ['70 dư 10', '71 dư 2', '71 dư 4', '71 dư 3'], correctIndex: 3 },
        { question: 'Tính: $624 \\div 8 = ?$', options: ['78', '76', '88', '68'], correctIndex: 0 },
        { question: 'Tính: $59 \\div 6 = ?$ (nêu thương và số dư)', options: ['9 dư 4', '9 dư 5', '9 dư 6', '10 dư 0'], correctIndex: 1 },
        { question: 'Tính: $723 \\div 9 = ?$ (nêu thương và số dư)', options: ['80 dư 2', '80 dư 4', '80 dư 3', '79 dư 12'], correctIndex: 2 },
        { question: 'Tính: $815 \\div 5 = ?$', options: ['153', '173', '183', '163'], correctIndex: 3 },
        {
          question: 'Một trại nuôi 245 con gà, nhốt vào các chuồng, mỗi chuồng 7 con. Hỏi nhốt được bao nhiêu chuồng đầy đủ?',
          options: ['35', '34', '36', '33'],
          correctIndex: 0,
        },
        {
          question: 'Một thùng có 130 quả cam chia đều vào các túi, mỗi túi 8 quả. Hỏi được nhiều nhất bao nhiêu túi đầy đủ và còn thừa mấy quả?',
          options: ['16 dư 1', '16 dư 2', '16 dư 3', '15 dư 10'],
          correctIndex: 1,
        },
        { question: 'Tính: $936 \\div 4 = ?$', options: ['224', '244', '234', '214'], correctIndex: 2 },
        { question: 'Tính: $601 \\div 8 = ?$ (nêu thương và số dư)', options: ['74 dư 9', '75 dư 2', '75 dư 3', '75 dư 1'], correctIndex: 3 },
        {
          question: 'Một xưởng may có 456 mét vải, may mỗi bộ quần áo cần 6 mét. Hỏi may được bao nhiêu bộ quần áo?',
          options: ['76', '75', '77', '74'],
          correctIndex: 0,
        },
        {
          question: 'Một trường có 350 học sinh xếp hàng dự lễ khai giảng, mỗi hàng có 9 học sinh. Hỏi xếp được bao nhiêu hàng đủ và còn dư bao nhiêu bạn?',
          options: ['38 dư 6', '38 dư 8', '38 dư 7', '37 dư 17'],
          correctIndex: 1,
        },
        {
          question: 'Một kho có 275 bao xi măng, chuyển đều lên 5 xe tải. Hỏi mỗi xe tải chở bao nhiêu bao xi măng?',
          options: ['50', '65', '55', '45'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đặt tính rồi tính: $358 \\div 5$, nêu rõ thương và số dư.',
          solution: ['$358\\div5=71$ (dư $3$)'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một đội công nhân có 250 viên gạch, cần xếp đều lên các xe, mỗi xe chở nhiều nhất 8 viên. Hỏi cần ít nhất bao nhiêu xe để chở hết số gạch đó?',
          solution: [
            '$250\\div8=31$ (dư $2$)',
            'Còn dư 2 viên gạch chưa được chở, cần thêm 1 xe nữa để chở hết.',
            'Vậy cần ít nhất $31+1=32$ xe.',
          ],
        },
      ],
    },
  },

  'l3-bieu-thuc-thu-tu-tinh': {
    title: 'Biểu thức số và thứ tự thực hiện phép tính',
    theory: {
      cards: [
        {
          title: 'Biểu thức chỉ có phép cộng, trừ hoặc chỉ có phép nhân, chia',
          formulas: ['25 + 30 - 15 = 40', '6 \\times 5 \\div 3 = 10'],
          legend: [
            'Nếu biểu thức chỉ có phép cộng, trừ (hoặc chỉ có phép nhân, chia) thì thực hiện lần lượt từ trái sang phải',
            'Không được tính phần bên phải trước khi tính xong phần bên trái',
          ],
          note: 'Mẹo: luôn tính lần lượt từ trái sang phải, không bỏ sót phép tính nào.',
        },
        {
          title: 'Biểu thức có phép nhân, chia trộn với phép cộng, trừ và biểu thức có dấu ngoặc',
          formulas: ['20 + 5 \\times 3 = 35', '(20+5) \\times 3 = 75'],
          legend: [
            'Nếu biểu thức có cả phép nhân, chia và phép cộng, trừ thì thực hiện nhân, chia trước, cộng, trừ sau',
            'Nếu biểu thức có dấu ngoặc thì tính trong ngoặc trước',
          ],
          note: 'Mẹo: nhớ thứ tự ưu tiên — trong ngoặc trước, rồi đến nhân chia, cuối cùng mới đến cộng trừ.',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — bieu_thuc_thu_tu_tinh_baigiang.mp4' },
    quiz: [
      { question: 'Tính: $18 + 12 - 9 = ?$', options: ['21', '20', '19', '22'], correctIndex: 0 },
      { question: 'Tính: $24 \\div 4 \\times 3 = ?$', options: ['16', '17', '18', '19'], correctIndex: 2 },
      { question: 'Tính: $15 + 4 \\times 5 = ?$', options: ['95', '35', '39', '30'], correctIndex: 1 },
      { question: 'Tính: $(18+6) \\div 4 = ?$', options: ['5', '6', '7', '8'], correctIndex: 1 },
      { question: 'Tính: $30 - 2 \\times 8 = ?$', options: ['14', '224', '16', '20'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: $45 - 15 + 20$.', solution: ['$45-15+20=50$'] },
      { prompt: 'Tính: $7 \\times 6 \\div 2$.', solution: ['$7\\times6\\div2=21$'] },
      { prompt: 'Tính: $8 + 3 \\times 9$.', solution: ['Thực hiện phép nhân trước: $3\\times9=27$', 'Sau đó cộng: $8+27=35$'] },
      { prompt: 'Tính: $(15+9) \\div 6$.', solution: ['Tính trong ngoặc trước: $15+9=24$', 'Sau đó chia: $24\\div6=4$'] },
      {
        prompt: 'Một cửa hàng có 5 hộp bút, mỗi hộp 8 cái, đã bán đi 12 cái. Viết biểu thức và tính số bút còn lại.',
        solution: ['Biểu thức: $5\\times8-12$', 'Tính nhân trước: $5\\times8=40$', 'Sau đó trừ: $40-12=28$', 'Cửa hàng còn lại 28 cái bút.'],
      },
    ],
    flashcards: [
      { front: 'Biểu thức chỉ có cộng, trừ thì tính theo thứ tự nào?', back: 'Từ trái sang phải' },
      { front: 'Biểu thức có cả nhân/chia và cộng/trừ thì tính gì trước?', back: 'Nhân, chia trước; cộng, trừ sau' },
      { front: 'Biểu thức có dấu ngoặc thì tính đâu trước?', back: 'Tính trong ngoặc trước' },
      { front: '$20+5\\times3$', back: '35' },
      { front: '$(20+5)\\times3$', back: '75' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tính: $25 + 18 - 10 = ?$', options: ['33', '32', '31', '34'], correctIndex: 0 },
        { question: 'Tính: $36 \\div 6 \\times 4 = ?$', options: ['20', '24', '22', '26'], correctIndex: 1 },
        { question: 'Tính: $9 \\times 4 - 15 = ?$', options: ['20', '19', '21', '22'], correctIndex: 2 },
        { question: 'Tính: $(12+8) \\div 5 = ?$', options: ['3', '5', '2', '4'], correctIndex: 3 },
        { question: 'Tính: $40 - 6 \\times 5 = ?$', options: ['10', '170', '15', '20'], correctIndex: 0 },
        { question: 'Tính: $7 + 8 \\times 3 = ?$', options: ['30', '31', '45', '24'], correctIndex: 1 },
        { question: 'Tính: $(30-6) \\div 4 = ?$', options: ['5', '7', '6', '8'], correctIndex: 2 },
        { question: 'Tính: $63 \\div 9 + 20 = ?$', options: ['26', '25', '24', '27'], correctIndex: 3 },
        { question: 'Tính: $5 \\times (9-4) = ?$', options: ['45', '20', '25', '30'], correctIndex: 2 },
        { question: 'Tính: $18 + 24 \\div 6 = ?$', options: ['7', '22', '20', '21'], correctIndex: 1 },
        { question: 'Tính: $(16+9) \\times 2 = ?$', options: ['48', '52', '50', '46'], correctIndex: 2 },
        { question: 'Tính: $8 \\times 7 - 30 = ?$', options: ['16', '20', '30', '26'], correctIndex: 3 },
        {
          question: 'Một lớp có 4 tổ, mỗi tổ 8 bạn, cô giáo cho thêm 6 bạn từ lớp khác vào. Viết biểu thức và tính số bạn hiện có trong lớp.',
          options: ['38', '40', '36', '34'],
          correctIndex: 0,
        },
        {
          question: 'Bạn Nam mua 3 quyển vở giá 5 nghìn đồng một quyển và 1 cái bút giá 7 nghìn đồng. Biểu thức tính số tiền Nam phải trả là gì và kết quả bằng bao nhiêu?',
          options: ['$3+5\\times7=38$', '$(3+5)\\times7=56$', '$3\\times7+5=26$', '$3\\times5+7=22$'],
          correctIndex: 3,
        },
        {
          question: 'Tính: $(45-9) \\div 6 + 8 = ?$',
          options: ['12', '13', '14', '15'],
          correctIndex: 2,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính: $6 \\times 9 - 24 \\div 4$.',
          solution: ['Thực hiện nhân và chia trước: $6\\times9=54$ và $24\\div4=6$', 'Sau đó trừ: $54-6=48$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng có 9 thùng sữa, mỗi thùng 12 hộp. Cửa hàng đã bán 3 thùng nguyên và bán lẻ thêm 15 hộp. Viết biểu thức và tính số hộp sữa còn lại.',
          solution: [
            'Tổng số hộp sữa ban đầu: $9\\times12=108$ hộp',
            'Số hộp đã bán: $3\\times12+15=36+15=51$ hộp',
            'Số hộp sữa còn lại: $108-51=57$ hộp',
          ],
        },
      ],
    },
  },
}
