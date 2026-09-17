import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP2_NHAN_CHIA = {
  'l2-khai-niem-nhan': {
    title: 'Khái niệm phép nhân, bảng nhân 2, 3, 4, 5',
    theory: {
      cards: [
        {
          title: 'Phép nhân là gì?',
          formulas: ['3 + 3 + 3 + 3 = 3 \\times 4 = 12', '5 \\times 2 = 10'],
          legend: ['Phép nhân là cách viết gọn của phép cộng các số hạng bằng nhau', 'Dấu $\\times$: dấu nhân'],
          note: 'Mẹo: "3 nhân 4" nghĩa là có 4 nhóm, mỗi nhóm gồm 3 đơn vị — thay vì cộng 4 lần số 3, ta viết gọn thành $3\\times4$.',
        },
        {
          title: 'Bảng nhân 2, 3, 4, 5 (một số ví dụ)',
          formulas: ['2 \\times 3 = 6', '3 \\times 4 = 12', '4 \\times 5 = 20', '5 \\times 5 = 25'],
          legend: ['Học thuộc bảng nhân giúp tính nhanh mà không cần cộng nhiều lần'],
          note: 'Mẹo: bảng nhân 5 luôn có kết quả tận cùng là 0 hoặc 5 (5, 10, 15, 20, 25, ...).',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — khai_niem_phep_nhan_baigiang.mp4' },
    quiz: [
      { question: '2 x 6 = ?', options: ['12', '10', '14', '8'], correctIndex: 0 },
      { question: '4 x 3 = ?', options: ['16', '12', '9', '15'], correctIndex: 1 },
      { question: 'Tính: 4 + 4 + 4', options: ['8', '9', '12', '16'], correctIndex: 2 },
      { question: '5 x 4 = ?', options: ['15', '16', '25', '20'], correctIndex: 3 },
      { question: 'Mỗi đĩa có 3 quả cam. Có 4 đĩa như vậy. Hỏi có tất cả bao nhiêu quả cam?', options: ['12', '7', '16', '9'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Viết phép cộng 5+5+5+5 thành phép nhân rồi tính kết quả.', solution: ['$5+5+5+5 = 5 \\times 4 = 20$'] },
      { prompt: 'Mỗi hộp bút có 4 cây bút. Có 5 hộp như vậy. Hỏi có tất cả bao nhiêu cây bút?', solution: ['$4 \\times 5 = 20$', 'Có tất cả 20 cây bút.'] },
      { prompt: 'Tính: 3 x 7.', solution: ['$3 \\times 7 = 21$'] },
      { prompt: 'Mỗi túi có 2 quả bóng, có 8 túi. Viết phép nhân và tính số quả bóng.', solution: ['$2 \\times 8 = 16$', 'Có tất cả 16 quả bóng.'] },
      { prompt: 'Điền số thích hợp: 5 x … = 30.', solution: ['Vì $5 \\times 6 = 30$ nên số cần điền là $6$.'] },
    ],
    flashcards: [
      { front: '2 x 7', back: '14' },
      { front: '3 x 6', back: '18' },
      { front: '4 x 4', back: '16' },
      { front: '5 x 7', back: '35' },
      { front: 'Phép nhân là cách viết gọn của phép tính gì?', back: 'Phép cộng các số hạng bằng nhau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '2 x 9 = ?', options: ['18', '16', '20', '14'], correctIndex: 0 },
        { question: '3 x 8 = ?', options: ['22', '24', '21', '27'], correctIndex: 1 },
        { question: '4 x 6 = ?', options: ['20', '28', '24', '22'], correctIndex: 2 },
        { question: '5 x 8 = ?', options: ['35', '30', '45', '40'], correctIndex: 3 },
        { question: '2 x 10 = ?', options: ['20', '18', '22', '16'], correctIndex: 0 },
        { question: '3 x 9 = ?', options: ['24', '27', '21', '30'], correctIndex: 1 },
        { question: '4 x 7 = ?', options: ['24', '32', '28', '21'], correctIndex: 2 },
        { question: '5 x 9 = ?', options: ['40', '35', '50', '45'], correctIndex: 3 },
        { question: 'Mỗi bàn có 4 học sinh ngồi. Có 6 bàn như vậy. Hỏi có tất cả bao nhiêu học sinh?', options: ['24', '20', '28', '22'], correctIndex: 0 },
        { question: 'Mỗi tuần có 7 ngày. Hỏi 3 tuần có bao nhiêu ngày?', options: ['24', '21', '18', '27'], correctIndex: 1 },
        { question: 'Điền số: 3 x … = 18.', options: ['5', '7', '6', '8'], correctIndex: 2 },
        { question: 'Tính: 2 x 5 + 3 x 4.', options: ['20', '24', '21', '22'], correctIndex: 3 },
        { question: 'Số nào nhân với 4 thì bằng 32?', options: ['8', '7', '9', '6'], correctIndex: 0 },
        { question: 'Mỗi rổ có 5 quả trứng, có 7 rổ như vậy. Hỏi có tất cả bao nhiêu quả trứng?', options: ['30', '35', '40', '32'], correctIndex: 1 },
        { question: 'Tính: 4 x 5, rồi cộng thêm 2 x 3.', options: ['24', '25', '26', '28'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết phép cộng 4+4+4+4+4 thành phép nhân rồi tính kết quả.',
          solution: ['$4+4+4+4+4 = 4 \\times 5 = 20$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một cửa hàng xếp bánh vào hộp, mỗi hộp có 5 cái bánh. Cửa hàng có 9 hộp như vậy. Hỏi cửa hàng có tất cả bao nhiêu cái bánh?',
          solution: ['$5 \\times 9 = 45$', 'Cửa hàng có tất cả 45 cái bánh.'],
        },
      ],
    },
  },

  'l2-khai-niem-chia': {
    title: 'Khái niệm phép chia, bảng chia 2, 3, 4, 5',
    theory: {
      cards: [
        {
          title: 'Phép chia là gì?',
          formulas: ['12 : 3 = 4', '20 : 5 = 4'],
          legend: ['Dấu $:$: dấu chia', 'Phép chia là chia đều một số thành các nhóm bằng nhau'],
          note: 'Mẹo: phép chia là phép tính ngược lại của phép nhân — nếu biết $3\\times4=12$ thì biết ngay $12:3=4$ và $12:4=3$.',
        },
        {
          title: 'Bảng chia 2, 3, 4, 5 (một số ví dụ)',
          formulas: ['10 : 2 = 5', '15 : 3 = 5', '16 : 4 = 4', '25 : 5 = 5'],
          legend: ['Học thuộc bảng chia dựa trên bảng nhân tương ứng'],
          note: 'Mẹo: muốn tính nhanh phép chia, con hãy nhớ lại bảng nhân cùng số đó.',
        },
      ],
    },
    video: { caption: '00:00 / 06:30 — khai_niem_phep_chia_baigiang.mp4' },
    quiz: [
      { question: '12 : 2 = ?', options: ['6', '5', '7', '4'], correctIndex: 0 },
      { question: '18 : 3 = ?', options: ['5', '6', '7', '8'], correctIndex: 1 },
      { question: '20 : 4 = ?', options: ['4', '6', '5', '7'], correctIndex: 2 },
      { question: '30 : 5 = ?', options: ['5', '7', '8', '6'], correctIndex: 3 },
      { question: 'Có 16 cái kẹo chia đều cho 4 bạn. Hỏi mỗi bạn được mấy cái kẹo?', options: ['4', '3', '5', '6'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: 24 : 4.', solution: ['$24 : 4 = 6$'] },
      { prompt: 'Có 15 quyển vở chia đều cho 3 bạn. Hỏi mỗi bạn được mấy quyển vở?', solution: ['$15:3=5$', 'Mỗi bạn được 5 quyển vở.'] },
      { prompt: 'Tính: 35 : 5.', solution: ['$35:5=7$'] },
      { prompt: 'Có 18 quả táo chia đều vào 2 giỏ. Hỏi mỗi giỏ có mấy quả táo?', solution: ['$18:2=9$', 'Mỗi giỏ có 9 quả táo.'] },
      { prompt: 'Điền số thích hợp: 28 : … = 4.', solution: ['Vì $28:4=7$ nên số cần điền là $7$.'] },
    ],
    flashcards: [
      { front: '14 : 2', back: '7' },
      { front: '27 : 3', back: '9' },
      { front: '32 : 4', back: '8' },
      { front: '45 : 5', back: '9' },
      { front: 'Biết $4 \\times 5=20$, vậy $20:5=?$', back: '4' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '10 : 2 = ?', options: ['5', '4', '6', '3'], correctIndex: 0 },
        { question: '21 : 3 = ?', options: ['6', '7', '8', '9'], correctIndex: 1 },
        { question: '24 : 4 = ?', options: ['5', '7', '6', '8'], correctIndex: 2 },
        { question: '40 : 5 = ?', options: ['7', '9', '10', '8'], correctIndex: 3 },
        { question: '16 : 2 = ?', options: ['8', '6', '9', '7'], correctIndex: 0 },
        { question: '27 : 3 = ?', options: ['8', '9', '7', '10'], correctIndex: 1 },
        { question: '36 : 4 = ?', options: ['8', '10', '9', '7'], correctIndex: 2 },
        { question: '50 : 5 = ?', options: ['9', '11', '12', '10'], correctIndex: 3 },
        { question: 'Có 20 cái bánh chia đều vào 4 hộp. Hỏi mỗi hộp có mấy cái bánh?', options: ['5', '4', '6', '7'], correctIndex: 0 },
        { question: 'Có 27 cây bút chia đều cho 3 bạn. Hỏi mỗi bạn được mấy cây bút?', options: ['8', '9', '7', '10'], correctIndex: 1 },
        { question: 'Điền số: … : 5 = 6.', options: ['25', '35', '30', '24'], correctIndex: 2 },
        { question: 'Tính: 18 : 2 + 12 : 3.', options: ['11', '12', '13', '14'], correctIndex: 3 },
        { question: 'Số nào chia cho 4 thì bằng 7?', options: ['28', '24', '32', '20'], correctIndex: 0 },
        { question: 'Có 45 quả cam chia đều vào 5 rổ. Hỏi mỗi rổ có mấy quả cam?', options: ['8', '9', '10', '7'], correctIndex: 1 },
        { question: 'Tính: 30 : 5, rồi nhân với 2.', options: ['10', '11', '12', '14'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính: 32 : 4, rồi cho biết kết quả gấp mấy lần số 2.',
          solution: ['$32:4=8$', '$8:2=4$, vậy 8 gấp 4 lần số 2.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Có 42 cái ghế xếp đều vào 6 hàng. Hỏi mỗi hàng có bao nhiêu cái ghế?',
          solution: ['$42:6=7$', 'Mỗi hàng có 7 cái ghế.'],
        },
      ],
    },
  },

  'l2-thua-so-tich': {
    title: 'Thừa số, tích và mối liên hệ nhân — chia',
    theory: {
      cards: [
        {
          title: 'Tên gọi các thành phần của phép nhân',
          formulas: ['3 \\times 4 = 12'],
          legend: ['3 và 4 gọi là thừa số', '12 gọi là tích'],
          note: 'Mẹo: "thừa số" là các số được nhân với nhau, "tích" là kết quả của phép nhân.',
        },
        {
          title: 'Mối liên hệ giữa phép nhân và phép chia',
          formulas: ['4 \\times 5 = 20', '20 : 4 = 5', '20 : 5 = 4'],
          legend: ['Từ một phép nhân đúng, ta suy ra được hai phép chia đúng', 'Lấy tích chia cho thừa số này thì được thừa số kia'],
          note: 'Mẹo: nếu con thuộc bảng nhân thì con cũng dễ dàng tính được bảng chia tương ứng.',
        },
      ],
    },
    video: { caption: '00:00 / 06:00 — thua_so_tich_baigiang.mp4' },
    quiz: [
      { question: 'Trong phép tính 5 x 6 = 30, số 30 gọi là gì?', options: ['Tích', 'Thừa số', 'Số bị chia', 'Thương'], correctIndex: 0 },
      { question: 'Trong phép tính 4 x 7 = 28, các số 4 và 7 gọi là gì?', options: ['Số chia', 'Thừa số', 'Tích', 'Thương'], correctIndex: 1 },
      { question: 'Biết 6 x 3 = 18. Vậy 18 : 3 = ?', options: ['9', '8', '6', '7'], correctIndex: 2 },
      { question: 'Biết 5 x 8 = 40. Vậy 40 : 5 = ?', options: ['9', '7', '6', '8'], correctIndex: 3 },
      { question: 'Biết 4 x 9 = 36. Vậy 36 : 9 = ?', options: ['4', '5', '6', '3'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Trong phép tính 7 x 4 = 28, hãy chỉ ra thừa số và tích.', solution: ['7 và 4 là thừa số.', '28 là tích.'] },
      { prompt: 'Biết $6 \\times 5 = 30$. Viết hai phép chia suy ra được từ phép nhân này.', solution: ['$30:6=5$', '$30:5=6$'] },
      { prompt: 'Tính tích của hai thừa số 8 và 3.', solution: ['$8 \\times 3 = 24$'] },
      { prompt: 'Biết $9 \\times 4 = 36$. Không cần tính, hãy cho biết $36:4=?$ và $36:9=?$', solution: ['$36:4=9$', '$36:9=4$'] },
      { prompt: 'Tìm thừa số còn thiếu: … x 5 = 45.', solution: ['Vì $9 \\times 5 = 45$ nên thừa số còn thiếu là $9$.'] },
    ],
    flashcards: [
      { front: 'Trong phép nhân, kết quả gọi là gì?', back: 'Tích' },
      { front: 'Trong phép nhân, các số được nhân gọi là gì?', back: 'Thừa số' },
      { front: 'Biết $3\\times7=21$, vậy $21:3=?$', back: '7' },
      { front: 'Biết $5\\times6=30$, vậy $30:6=?$', back: '5' },
      { front: '8 x 4', back: '32 (thừa số 8 và 4, tích 32)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Trong phép tính 8 x 5 = 40, số 40 gọi là gì?', options: ['Tích', 'Thừa số', 'Thương', 'Số chia'], correctIndex: 0 },
        { question: 'Trong phép tính 6 x 9 = 54, các số 6 và 9 gọi là gì?', options: ['Tích', 'Thừa số', 'Thương', 'Số bị chia'], correctIndex: 1 },
        { question: 'Biết 7 x 4 = 28. Vậy 28 : 7 = ?', options: ['3', '5', '4', '6'], correctIndex: 2 },
        { question: 'Biết 6 x 8 = 48. Vậy 48 : 8 = ?', options: ['5', '7', '8', '6'], correctIndex: 3 },
        { question: 'Biết 9 x 3 = 27. Vậy 27 : 9 = ?', options: ['3', '4', '5', '2'], correctIndex: 0 },
        { question: 'Biết 5 x 9 = 45. Vậy 45 : 5 = ?', options: ['8', '9', '7', '10'], correctIndex: 1 },
        { question: 'Tích của hai thừa số 6 và 7 là bao nhiêu?', options: ['36', '40', '42', '48'], correctIndex: 2 },
        { question: 'Tìm thừa số còn thiếu: … x 4 = 36.', options: ['8', '7', '6', '9'], correctIndex: 3 },
        { question: 'Biết $8\\times6=48$. Không tính, hãy cho biết $48:6=?$', options: ['8', '6', '7', '9'], correctIndex: 0 },
        { question: 'Biết $9\\times7=63$. Không tính, hãy cho biết $63:9=?$', options: ['6', '7', '8', '9'], correctIndex: 1 },
        { question: 'Tìm thừa số còn thiếu: 7 x … = 56.', options: ['7', '6', '8', '9'], correctIndex: 2 },
        { question: 'Biết $3\\times9=27$. Tính $27-3$ (hiệu của tích và một thừa số).', options: ['23', '25', '26', '24'], correctIndex: 3 },
        { question: 'Số nào nhân với 6 thì được tích bằng 42?', options: ['7', '6', '8', '5'], correctIndex: 0 },
        { question: 'Biết $8\\times7=56$. Đâu là hai thừa số của phép tính này?', options: ['56 và 1', '8 và 7', '7 và 1', '56 và 8'], correctIndex: 1 },
        { question: 'Tính tích của hai thừa số 6 và 9.', options: ['48', '52', '54', '56'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Biết $7 \\times 6 = 42$. Hãy nêu tên gọi của các số 7, 6 và 42 trong phép tính này, rồi viết hai phép chia suy ra được.',
          solution: ['7 và 6 là thừa số, 42 là tích.', '$42:7=6$', '$42:6=7$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một lớp học xếp bàn thành các hàng, mỗi hàng có 5 bàn, có 8 hàng như vậy. Hỏi lớp học có tất cả bao nhiêu cái bàn? Trong phép tính em vừa lập, đâu là thừa số, đâu là tích?',
          solution: ['$5 \\times 8 = 40$', 'Lớp học có tất cả 40 cái bàn.', '5 và 8 là thừa số, 40 là tích.'],
        },
      ],
    },
  },

  'l2-bai-toan-nhan-chia': {
    title: 'Giải bài toán có lời văn bằng phép nhân, phép chia',
    theory: {
      cards: [
        {
          title: 'Các bước giải bài toán có lời văn bằng phép nhân',
          formulas: ['\\text{Mỗi nhóm } 4 \\text{ vật, có } 5 \\text{ nhóm} \\to 4 \\times 5 = 20'],
          legend: [
            'Bước 1: Đọc kỹ đề, tìm số vật trong mỗi nhóm và số nhóm',
            'Bước 2: Viết phép nhân, tính kết quả',
            'Bước 3: Viết câu trả lời',
          ],
          note: 'Mẹo: nếu đề bài cho "mỗi ... có ..." và có nhiều nhóm giống nhau, hỏi tổng số, thì thường dùng phép nhân.',
        },
        {
          title: 'Các bước giải bài toán có lời văn bằng phép chia',
          formulas: ['\\text{Chia đều } 20 \\text{ vật vào } 4 \\text{ nhóm} \\to 20 : 4 = 5'],
          legend: [
            'Dạng 1: biết tổng số và số nhóm, tìm số vật mỗi nhóm (chia thành các phần bằng nhau)',
            'Dạng 2: biết tổng số và số vật mỗi nhóm, tìm số nhóm',
          ],
          note: 'Mẹo: nếu đề hỏi "mỗi phần được bao nhiêu" thì chia để tìm giá trị 1 phần; nếu đề hỏi "chia được bao nhiêu phần" thì chia để tìm số nhóm.',
        },
      ],
    },
    video: { caption: '00:00 / 07:00 — giai_toan_nhan_chia_baigiang.mp4' },
    quiz: [
      { question: 'Mỗi lớp có 3 tổ, mỗi tổ có 8 bạn. Hỏi lớp đó có tất cả bao nhiêu bạn?', options: ['24', '21', '27', '18'], correctIndex: 0 },
      { question: 'Có 24 cái bánh chia đều cho 6 bạn. Hỏi mỗi bạn được mấy cái bánh?', options: ['5', '4', '6', '3'], correctIndex: 1 },
      { question: 'Có 35 quyển vở chia đều vào 5 hộp. Hỏi mỗi hộp có mấy quyển vở?', options: ['6', '8', '7', '9'], correctIndex: 2 },
      { question: 'Mỗi xe chở được 9 người, có 4 xe như vậy. Hỏi chở được tất cả bao nhiêu người?', options: ['32', '40', '45', '36'], correctIndex: 3 },
      { question: 'Có 27 quả trứng xếp vào các hộp, mỗi hộp 3 quả. Hỏi xếp được mấy hộp?', options: ['9', '8', '7', '6'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Mỗi thùng có 6 chai nước, có 7 thùng như vậy. Hỏi có tất cả bao nhiêu chai nước?', solution: ['$6\\times7=42$', 'Có tất cả 42 chai nước.'] },
      { prompt: 'Có 32 cái cốc xếp đều vào 4 bàn. Hỏi mỗi bàn có mấy cái cốc?', solution: ['$32:4=8$', 'Mỗi bàn có 8 cái cốc.'] },
      { prompt: 'Có 45 học sinh xếp thành các hàng, mỗi hàng 5 bạn. Hỏi xếp được mấy hàng?', solution: ['$45:5=9$', 'Xếp được 9 hàng.'] },
      { prompt: 'Mỗi túi kẹo có 4 cái kẹo. Bạn Lan có 6 túi kẹo như vậy. Hỏi bạn Lan có tất cả bao nhiêu cái kẹo?', solution: ['$4\\times6=24$', 'Bạn Lan có tất cả 24 cái kẹo.'] },
      { prompt: 'Có 40 quả cam chia đều cho 8 bạn. Hỏi mỗi bạn được mấy quả cam?', solution: ['$40:8=5$', 'Mỗi bạn được 5 quả cam.'] },
    ],
    flashcards: [
      { front: 'Mỗi hộp 5 bút, 6 hộp thì có bao nhiêu bút?', back: '$5\\times6=30$ cây bút' },
      { front: '36 quả chia đều 4 rổ, mỗi rổ mấy quả?', back: '$36:4=9$ quả' },
      { front: 'Từ khóa nào trong đề thường gợi ý dùng phép nhân?', back: '"Mỗi ... có ...", có nhiều nhóm giống nhau, hỏi tổng số' },
      { front: 'Từ khóa nào trong đề thường gợi ý dùng phép chia?', back: '"Chia đều", hỏi mỗi phần được bao nhiêu, hoặc chia được mấy phần' },
      { front: '9 hàng ghế, mỗi hàng 4 ghế, có bao nhiêu ghế?', back: '$4\\times9=36$ cái ghế' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Mỗi rổ có 7 quả táo, có 5 rổ như vậy. Hỏi có tất cả bao nhiêu quả táo?', options: ['35', '32', '30', '40'], correctIndex: 0 },
        { question: 'Có 42 cái bút chia đều cho 6 bạn. Hỏi mỗi bạn được mấy cái bút?', options: ['6', '7', '8', '9'], correctIndex: 1 },
        { question: 'Có 24 bông hoa cắm đều vào 3 lọ. Hỏi mỗi lọ có mấy bông hoa?', options: ['7', '9', '8', '6'], correctIndex: 2 },
        { question: 'Mỗi đội có 9 người, có 3 đội như vậy. Hỏi có tất cả bao nhiêu người?', options: ['24', '25', '26', '27'], correctIndex: 3 },
        { question: 'Mỗi ngày bạn Nam đọc 8 trang sách. Hỏi 4 ngày bạn Nam đọc được bao nhiêu trang?', options: ['32', '28', '36', '30'], correctIndex: 0 },
        { question: 'Có 48 viên bi chia đều vào 6 hộp. Hỏi mỗi hộp có mấy viên bi?', options: ['7', '8', '9', '6'], correctIndex: 1 },
        { question: 'Có 21 cái ghế xếp thành các hàng, mỗi hàng 7 cái. Hỏi xếp được mấy hàng?', options: ['2', '4', '3', '5'], correctIndex: 2 },
        { question: 'Mỗi hộp có 4 cây kem, có 8 hộp như vậy. Hỏi có tất cả bao nhiêu cây kem?', options: ['28', '30', '36', '32'], correctIndex: 3 },
        { question: 'Có 30 quyển sách xếp đều vào 5 kệ. Hỏi mỗi kệ có mấy quyển sách?', options: ['6', '5', '7', '8'], correctIndex: 0 },
        { question: 'Mỗi túi gạo nặng 5kg, có 7 túi như vậy. Hỏi tất cả nặng bao nhiêu ki-lô-gam?', options: ['30', '35', '40', '25'], correctIndex: 1 },
        { question: 'Có 36 cái kẹo chia đều cho 9 bạn. Hỏi mỗi bạn được mấy cái kẹo?', options: ['3', '5', '4', '6'], correctIndex: 2 },
        { question: 'Một xe có 4 bánh. Hỏi 6 xe như vậy có tất cả bao nhiêu bánh xe?', options: ['20', '22', '26', '24'], correctIndex: 3 },
        { question: 'Có 45 cái cúc áo chia đều vào 9 túi nhỏ. Hỏi mỗi túi có mấy cái cúc áo?', options: ['5', '4', '6', '7'], correctIndex: 0 },
        { question: 'Mỗi bàn học ngồi được 2 bạn, có 8 bàn như vậy. Hỏi ngồi được tất cả bao nhiêu bạn?', options: ['14', '16', '18', '12'], correctIndex: 1 },
        { question: 'Có 63 quả trứng xếp đều vào các vỉ, mỗi vỉ 7 quả. Hỏi xếp được mấy vỉ?', options: ['7', '8', '9', '10'], correctIndex: 2 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Mỗi lớp học có 4 tổ, mỗi tổ có 8 bạn. Hỏi lớp học đó có tất cả bao nhiêu bạn?',
          solution: ['$4\\times8=32$', 'Lớp học đó có tất cả 32 bạn.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng có 54 cái bánh, xếp đều vào các hộp, mỗi hộp 6 cái. Sau đó cửa hàng bán được 5 hộp. Hỏi cửa hàng còn lại bao nhiêu cái bánh?',
          solution: ['$54:6=9$ (số hộp bánh)', '$9-5=4$ (số hộp còn lại)', '$4\\times6=24$ (số bánh còn lại)', 'Cửa hàng còn lại 24 cái bánh.'],
        },
      ],
    },
  },
}
