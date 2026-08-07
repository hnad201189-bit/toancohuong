import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP1_SO_PHAM_VI_10 = {
  'l1-cac-so-den-10': {
    title: 'Các số đến 10, đếm và so sánh',
    theory: {
      cards: [
        {
          title: 'Đếm và viết số từ 0 đến 10',
          formulas: ['0,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 6,\\ 7,\\ 8,\\ 9,\\ 10'],
          legend: [
            'Đếm theo thứ tự từ bé đến lớn: 0 rồi đến 1, 2, 3... cho đến 10',
            'Mỗi số đứng sau lớn hơn số đứng trước nó 1 đơn vị',
          ],
          note: 'Mẹo: khi đếm đồ vật, con hãy chỉ tay vào từng đồ vật và đếm to từng số một, không đếm sót và không đếm hai lần một đồ vật.',
        },
        {
          title: 'So sánh các số trong phạm vi 10',
          formulas: ['3 < 5', '7 > 4', '6 = 6'],
          legend: ['Dấu $<$: bé hơn', 'Dấu $>$: lớn hơn', 'Dấu $=$: bằng nhau'],
          note: 'Mẹo: số đứng sau trong dãy đếm (0,1,2,...,10) luôn lớn hơn số đứng trước.',
        },
      ],
    },
    video: { caption: '00:00 / 05:00 — dem_so_den_10_baigiang.mp4' },
    quiz: [
      { question: 'Số liền sau số 6 là số nào?', options: ['7', '5', '8', '6'], correctIndex: 0 },
      { question: 'Trong hai số 4 và 9, số nào lớn hơn?', options: ['9', '4', 'Bằng nhau', 'Không so sánh được'], correctIndex: 0 },
      { question: 'Đếm số quả táo: 🍎🍎🍎🍎🍎. Có tất cả mấy quả táo?', options: ['5', '4', '6', '3'], correctIndex: 0 },
      { question: 'Số liền trước số 8 là số nào?', options: ['7', '9', '8', '6'], correctIndex: 0 },
      { question: 'Số nào bé nhất trong các số: 3, 7, 1, 5?', options: ['1', '3', '5', '7'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bạn Lan có 4 cái kẹo, bạn An có 6 cái kẹo. Ai có nhiều kẹo hơn?', solution: ['So sánh 4 và 6: vì $4<6$ nên bạn An có nhiều kẹo hơn.'] },
      { prompt: 'Đếm số con vịt: 🦆🦆🦆🦆🦆🦆🦆 (có 7 con vịt). Số 7 đứng liền sau số nào?', solution: ['Số 7 đứng liền sau số 6.'] },
      { prompt: 'Viết các số 5, 2, 8, 1 theo thứ tự từ bé đến lớn.', solution: ['Sắp xếp: $1,\\ 2,\\ 5,\\ 8$'] },
      {
        prompt: 'Số nào lớn hơn: số liền sau của 5, hay số liền trước của 5?',
        solution: ['Số liền sau của 5 là 6.', 'Số liền trước của 5 là 4.', 'Vì $6>4$ nên số liền sau của 5 lớn hơn.'],
      },
      {
        prompt: 'Đếm số ngón tay trên một bàn tay. Nếu có 2 bàn tay thì có tất cả bao nhiêu ngón tay?',
        solution: ['Một bàn tay có 5 ngón.', 'Hai bàn tay có $5+5=10$ ngón tay.'],
      },
    ],
    flashcards: [
      { front: 'Số liền sau số 3', back: '4' },
      { front: 'Số liền trước số 10', back: '9' },
      { front: 'Dấu bé hơn', back: '$<$' },
      { front: 'Dấu lớn hơn', back: '$>$' },
      { front: 'Số lớn nhất trong phạm vi 10', back: '10' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số liền sau số 2 là?', options: ['3', '1', '4', '2'], correctIndex: 0 },
        { question: 'Đếm: có mấy hình tròn? ⚫⚫⚫', options: ['3', '2', '4', '5'], correctIndex: 0 },
        { question: 'Số nào đứng ngay trước số 9?', options: ['8', '10', '7', '9'], correctIndex: 0 },
        { question: '5 và 5, hai số này thế nào?', options: ['Bằng nhau', '5 lớn hơn', '5 bé hơn', 'Không biết'], correctIndex: 0 },
        { question: 'Trong dãy số 1,2,3,4,5 số nào lớn nhất?', options: ['5', '1', '3', '4'], correctIndex: 0 },
        { question: 'Số 0 đứng ở đâu trong dãy đếm?', options: ['Đầu tiên', 'Cuối cùng', 'Ở giữa', 'Không có trong dãy'], correctIndex: 0 },
        { question: 'So sánh 6 và 9, số nào lớn hơn?', options: ['9', '6', 'Bằng nhau', 'Không so sánh được'], correctIndex: 0 },
        { question: 'Đếm số quả cam: 🍊🍊🍊🍊🍊🍊 (6 quả). Số liền sau của 6 là mấy?', options: ['7', '5', '8', '6'], correctIndex: 0 },
        { question: 'Sắp xếp 3 số 8, 2, 5 từ bé đến lớn, số đứng giữa là số nào?', options: ['5', '2', '8', '3'], correctIndex: 0 },
        { question: 'Số nào bé hơn cả trong các số 4, 7, 2, 9?', options: ['2', '4', '7', '9'], correctIndex: 0 },
        { question: 'Bạn Minh đếm được 8 viên bi, bạn Hà đếm được 5 viên bi. Ai đếm được nhiều bi hơn?', options: ['Minh', 'Hà', 'Bằng nhau', 'Không biết'], correctIndex: 0 },
        { question: 'Số liền trước và số liền sau của số 6 lần lượt là?', options: ['5 và 7', '7 và 5', '6 và 6', '4 và 8'], correctIndex: 0 },
        { question: 'Trong các số 0 đến 10, có bao nhiêu số bé hơn 5?', options: ['5 số (0,1,2,3,4)', '4 số', '6 số', '10 số'], correctIndex: 0 },
        { question: 'Xếp các số 9, 3, 6, 1 theo thứ tự từ lớn đến bé, số đứng đầu tiên là số nào?', options: ['9', '1', '6', '3'], correctIndex: 0 },
        { question: 'Một số vừa lớn hơn 5 vừa bé hơn 7. Đó là số nào?', options: ['6', '5', '7', '8'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đếm số bạn trong hình: có 6 bạn nam và 3 bạn nữ đứng xếp hàng riêng. Hỏi hàng nào có nhiều bạn hơn?',
          solution: ['Hàng nam có 6 bạn, hàng nữ có 3 bạn.', 'Vì $6>3$ nên hàng nam có nhiều bạn hơn.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Viết tất cả các số bé hơn 10 và lớn hơn 6.',
          solution: ['Các số lớn hơn 6 và bé hơn 10 là: 7, 8, 9.'],
        },
      ],
    },
  },

  'l1-cong-pham-vi-10': {
    title: 'Phép cộng trong phạm vi 10',
    theory: {
      cards: [
        {
          title: 'Phép cộng là gì?',
          formulas: ['3 + 2 = 5', '4 + 4 = 8'],
          legend: ['Dấu $+$: dấu cộng, chỉ phép tính gộp hai nhóm đồ vật lại với nhau', 'Kết quả phép cộng gọi là tổng'],
          note: 'Mẹo: khi cộng, con có thể đếm thêm — bắt đầu từ số lớn hơn rồi đếm tiếp thêm số còn lại.',
        },
        {
          title: 'Cộng với số 0, đổi chỗ các số hạng',
          formulas: ['5 + 0 = 5', '2 + 3 = 3 + 2'],
          legend: ['Một số cộng với 0 vẫn bằng chính số đó', 'Đổi chỗ hai số cộng, kết quả không đổi'],
          note: 'Mẹo: nếu con thuộc $2+3=5$ thì con cũng biết ngay $3+2=5$ mà không cần tính lại.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — phep_cong_pham_vi_10_baigiang.mp4' },
    quiz: [
      { question: '3 + 4 = ?', options: ['7', '6', '8', '5'], correctIndex: 0 },
      { question: '5 + 5 = ?', options: ['10', '9', '11', '8'], correctIndex: 0 },
      { question: '2 + 0 = ?', options: ['2', '0', '3', '1'], correctIndex: 0 },
      { question: 'Tổng của 6 và 1 là bao nhiêu?', options: ['7', '6', '8', '5'], correctIndex: 0 },
      { question: 'Nam có 3 quả bóng, được cho thêm 5 quả bóng nữa. Nam có tất cả mấy quả bóng?', options: ['8', '7', '6', '9'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: 4 + 3 = ?', solution: ['$4+3=7$'] },
      { prompt: 'Lan có 2 bông hoa, mẹ cho thêm 6 bông hoa. Hỏi Lan có tất cả bao nhiêu bông hoa?', solution: ['$2+6=8$', 'Lan có tất cả 8 bông hoa.'] },
      { prompt: 'Tính: 5 + 0 = ?', solution: ['$5+0=5$ (cộng với 0 thì kết quả không đổi)'] },
      { prompt: 'Điền số thích hợp: 3 + … = 7', solution: ['Vì $3+4=7$ nên số cần điền là $4$.'] },
      { prompt: 'Có 4 con gà và 4 con vịt trong sân. Hỏi có tất cả bao nhiêu con vật?', solution: ['$4+4=8$', 'Có tất cả 8 con vật.'] },
    ],
    flashcards: [
      { front: '2 + 2', back: '4' },
      { front: '5 + 3', back: '8' },
      { front: '1 + 9', back: '10' },
      { front: 'Một số cộng với 0', back: 'bằng chính số đó' },
      { front: '6 + 2', back: '8' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '1 + 1 = ?', options: ['2', '1', '3', '0'], correctIndex: 0 },
        { question: '2 + 3 = ?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: '0 + 7 = ?', options: ['7', '0', '8', '6'], correctIndex: 0 },
        { question: '4 + 4 = ?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: '5 + 1 = ?', options: ['6', '5', '7', '4'], correctIndex: 0 },
        { question: '3 + 3 = ?', options: ['6', '5', '7', '3'], correctIndex: 0 },
        { question: '6 + 2 = ?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: 'Tính tổng của 4 và 5.', options: ['9', '8', '10', '7'], correctIndex: 0 },
        { question: 'An có 5 viên bi, được cho thêm 2 viên. An có tất cả mấy viên bi?', options: ['7', '6', '8', '5'], correctIndex: 0 },
        { question: '7 + 3 = ?', options: ['10', '9', '11', '8'], correctIndex: 0 },
        { question: 'Điền số: 2 + … = 6', options: ['4', '3', '5', '6'], correctIndex: 0 },
        { question: '8 + 1 = ?', options: ['9', '8', '10', '7'], correctIndex: 0 },
        { question: 'Có 3 bạn đang chơi, thêm 2 bạn nữa đến, rồi thêm 1 bạn nữa đến. Hỏi có tất cả bao nhiêu bạn?', options: ['6', '5', '7', '4'], correctIndex: 0 },
        { question: 'Số nào cộng với 4 thì bằng 9?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: 'Bạn Hoa có 6 quyển vở, bạn Mai có 3 quyển vở. Nếu gộp lại thì có tất cả bao nhiêu quyển vở?', options: ['9', '8', '10', '7'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: 5 + 4 = ?', solution: ['$5+4=9$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Lớp 1A có 4 bạn nam và 5 bạn nữ. Hỏi lớp 1A có tất cả bao nhiêu bạn?',
          solution: ['$4+5=9$', 'Lớp 1A có tất cả 9 bạn.'],
        },
      ],
    },
  },

  'l1-tru-pham-vi-10': {
    title: 'Phép trừ trong phạm vi 10',
    theory: {
      cards: [
        {
          title: 'Phép trừ là gì?',
          formulas: ['5 - 2 = 3', '7 - 4 = 3'],
          legend: ['Dấu $-$: dấu trừ, chỉ phép tính bớt đi một số đồ vật', 'Kết quả phép trừ gọi là hiệu'],
          note: 'Mẹo: muốn kiểm tra phép trừ, con lấy hiệu cộng với số trừ, nếu ra đúng số bị trừ thì phép tính đúng.',
        },
        {
          title: 'Trừ với số 0, mối liên hệ với phép cộng',
          formulas: ['6 - 0 = 6', '4 + 3 = 7 \\Rightarrow 7 - 3 = 4'],
          legend: ['Một số trừ đi 0 vẫn bằng chính số đó', 'Phép trừ là phép tính ngược lại của phép cộng'],
          note: 'Mẹo: nếu con thuộc $4+3=7$ thì con cũng biết ngay $7-3=4$ và $7-4=3$.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — phep_tru_pham_vi_10_baigiang.mp4' },
    quiz: [
      { question: '6 - 2 = ?', options: ['4', '3', '5', '2'], correctIndex: 0 },
      { question: '9 - 5 = ?', options: ['4', '5', '3', '6'], correctIndex: 0 },
      { question: '8 - 0 = ?', options: ['8', '0', '7', '9'], correctIndex: 0 },
      { question: 'Hiệu của 7 và 3 là bao nhiêu?', options: ['4', '3', '5', '7'], correctIndex: 0 },
      { question: 'Có 6 quả bóng bay, bay mất 2 quả. Còn lại mấy quả?', options: ['4', '3', '5', '2'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: 9 - 4 = ?', solution: ['$9-4=5$'] },
      { prompt: 'Có 8 con chim đậu trên cành, bay đi 3 con. Hỏi còn lại mấy con chim?', solution: ['$8-3=5$', 'Còn lại 5 con chim.'] },
      { prompt: 'Tính: 6 - 0 = ?', solution: ['$6-0=6$ (trừ đi 0 thì kết quả không đổi)'] },
      { prompt: 'Điền số thích hợp: 9 - … = 5', solution: ['Vì $9-4=5$ nên số cần điền là $4$.'] },
      { prompt: 'Biết $3+5=8$. Hãy tính ngay $8-5=?$ mà không cần đặt tính.', solution: ['Vì $3+5=8$ nên $8-5=3$.'] },
    ],
    flashcards: [
      { front: '10 - 4', back: '6' },
      { front: '7 - 7', back: '0' },
      { front: '5 - 1', back: '4' },
      { front: 'Một số trừ đi chính nó', back: 'bằng 0' },
      { front: '9 - 6', back: '3' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '3 - 1 = ?', options: ['2', '1', '3', '0'], correctIndex: 0 },
        { question: '5 - 3 = ?', options: ['2', '3', '1', '4'], correctIndex: 0 },
        { question: '8 - 0 = ?', options: ['8', '0', '7', '9'], correctIndex: 0 },
        { question: '4 - 4 = ?', options: ['0', '1', '4', '8'], correctIndex: 0 },
        { question: '6 - 1 = ?', options: ['5', '6', '4', '7'], correctIndex: 0 },
        { question: '7 - 2 = ?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: '9 - 6 = ?', options: ['3', '4', '2', '5'], correctIndex: 0 },
        { question: 'Tính hiệu của 8 và 5.', options: ['3', '2', '4', '5'], correctIndex: 0 },
        { question: 'Có 7 cái bánh, ăn hết 2 cái. Còn lại mấy cái?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: '10 - 4 = ?', options: ['6', '5', '7', '4'], correctIndex: 0 },
        { question: 'Điền số: 8 - … = 3', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: '9 - 2 = ?', options: ['7', '6', '8', '5'], correctIndex: 0 },
        { question: 'Có 9 viên kẹo, cho bạn 3 viên, rồi ăn mất 2 viên. Hỏi còn lại mấy viên?', options: ['4', '5', '6', '3'], correctIndex: 0 },
        { question: 'Số nào trừ đi 5 thì bằng 4?', options: ['9', '8', '10', '7'], correctIndex: 0 },
        { question: 'Biết $6+3=9$. Vậy $9-3=?$', options: ['6', '3', '9', '5'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: 8 - 3 = ?', solution: ['$8-3=5$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Bạn Tùng có 9 viên bi, cho em 4 viên. Hỏi bạn Tùng còn lại bao nhiêu viên bi?',
          solution: ['$9-4=5$', 'Bạn Tùng còn lại 5 viên bi.'],
        },
      ],
    },
  },

  'l1-bang-cong-tru-10': {
    title: 'Bảng cộng, bảng trừ trong phạm vi 10 (ôn tập)',
    theory: {
      cards: [
        {
          title: 'Bảng cộng trong phạm vi 10 (một số ví dụ)',
          formulas: ['1+1=2', '2+2=4', '3+3=6', '4+4=8', '5+5=10', '1+9=10'],
          legend: ['Ôn lại các phép cộng đã học, mỗi kết quả không vượt quá 10'],
          note: 'Mẹo: học thuộc các phép cộng có tổng bằng 10 (như 1+9, 2+8, 3+7, 4+6, 5+5) sẽ giúp con tính nhanh hơn rất nhiều.',
        },
        {
          title: 'Bảng trừ trong phạm vi 10 (một số ví dụ)',
          formulas: ['10-1=9', '10-5=5', '9-3=6', '8-2=6', '7-4=3'],
          legend: ['Ôn lại các phép trừ đã học trong phạm vi 10'],
          note: 'Mẹo: phép trừ luôn có thể kiểm tra lại bằng phép cộng — lấy hiệu cộng với số trừ phải ra đúng số bị trừ.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — on_tap_cong_tru_10_baigiang.mp4' },
    quiz: [
      { question: '1 + 9 = ?', options: ['10', '9', '8', '11'], correctIndex: 0 },
      { question: '10 - 3 = ?', options: ['7', '6', '8', '5'], correctIndex: 0 },
      { question: 'Số nào cộng với 6 để bằng 10?', options: ['4', '3', '5', '6'], correctIndex: 0 },
      { question: '7 - 7 = ?', options: ['0', '1', '7', '14'], correctIndex: 0 },
      { question: '3 + 7 = ?', options: ['10', '9', '8', '11'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: 4 + 6 = ?', solution: ['$4+6=10$'] },
      { prompt: 'Có 10 quả trứng, đã dùng hết 6 quả để làm bánh. Hỏi còn lại mấy quả trứng?', solution: ['$10-6=4$', 'Còn lại 4 quả trứng.'] },
      { prompt: 'Điền số: … + 5 = 10', solution: ['Vì $5+5=10$ nên số cần điền là $5$.'] },
      {
        prompt: 'Tính rồi so sánh: 2 + 3 và 3 + 2, hai kết quả có bằng nhau không?',
        solution: ['$2+3=5$', '$3+2=5$', 'Hai kết quả bằng nhau, vì đổi chỗ hai số cộng thì kết quả không đổi.'],
      },
      {
        prompt: 'Một tổ có 8 bạn, có 3 bạn nghỉ học. Hỏi hôm nay tổ đó có mấy bạn đi học?',
        solution: ['$8-3=5$', 'Hôm nay tổ đó có 5 bạn đi học.'],
      },
    ],
    flashcards: [
      { front: 'Các cặp số có tổng bằng 10', back: '1+9, 2+8, 3+7, 4+6, 5+5' },
      { front: '8 + 2', back: '10' },
      { front: '10 - 7', back: '3' },
      { front: 'Kiểm tra lại phép trừ bằng cách nào?', back: 'Lấy hiệu cộng với số trừ, phải ra đúng số bị trừ' },
      { front: '6 + 4', back: '10' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '5 + 5 = ?', options: ['10', '9', '11', '8'], correctIndex: 0 },
        { question: '10 - 2 = ?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: '2 + 8 = ?', options: ['10', '9', '11', '8'], correctIndex: 0 },
        { question: '10 - 10 = ?', options: ['0', '1', '10', '5'], correctIndex: 0 },
        { question: '3 + 3 = ?', options: ['6', '5', '7', '3'], correctIndex: 0 },
        { question: '9 - 9 = ?', options: ['0', '1', '9', '18'], correctIndex: 0 },
        { question: 'Số nào cộng với 3 để bằng 10?', options: ['7', '6', '8', '5'], correctIndex: 0 },
        { question: '10 - 4 = ?', options: ['6', '5', '7', '4'], correctIndex: 0 },
        { question: '4 + 5 = ?', options: ['9', '8', '10', '7'], correctIndex: 0 },
        { question: 'Số nào trừ đi 6 thì bằng 2?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: '6 + 3 = ?', options: ['9', '8', '10', '7'], correctIndex: 0 },
        { question: '10 - 8 = ?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Một số cộng với 4 rồi trừ đi 2 thì được 8. Số đó là số nào?', options: ['6', '7', '5', '8'], correctIndex: 0 },
        { question: 'Tính: 10 - 3 - 2 = ?', options: ['5', '6', '4', '7'], correctIndex: 0 },
        { question: 'Có 5 quả cam và 5 quả xoài. Nếu ăn mất 3 quả cam thì còn lại tất cả bao nhiêu quả?', options: ['7', '8', '6', '9'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Tính: 10 - 5 = ?', solution: ['$10-5=5$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Có 9 chiếc bút, cho bạn 4 chiếc, sau đó được cô giáo cho thêm 2 chiếc. Hỏi hiện có bao nhiêu chiếc bút?',
          solution: ['$9-4=5$ (còn lại sau khi cho bạn)', '$5+2=7$ (sau khi được cho thêm)', 'Hiện có 7 chiếc bút.'],
        },
      ],
    },
  },
}
