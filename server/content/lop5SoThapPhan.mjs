import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP5_SO_THAP_PHAN = {
  'l5-khai-niem-so-thap-phan': {
    title: 'Khái niệm số thập phân, hàng của số thập phân',
    theory: {
      cards: [
        {
          title: 'Số thập phân là gì?',
          formulas: ['3,7 = 3 + \\dfrac{7}{10}', '0,25 = \\dfrac{25}{100}'],
          legend: [
            'Phần nguyên viết bên trái dấu phẩy, phần thập phân viết bên phải dấu phẩy',
            'Mỗi chữ số ở phần thập phân thuộc một hàng: phần mười, phần trăm, phần nghìn,...',
          ],
          note: 'Mẹo đọc số thập phân: đọc phần nguyên trước, rồi đọc "phẩy", rồi đọc từng chữ số ở phần thập phân.',
        },
        {
          title: 'Hàng của số thập phân',
          formulas: ['12,345', '\\text{hàng phần mười: }3,\\ \\text{hàng phần trăm: }4,\\ \\text{hàng phần nghìn: }5'],
          legend: [
            'Hàng phần mười đứng ngay sau dấu phẩy',
            'Hàng phần trăm đứng thứ hai sau dấu phẩy',
            'Hàng phần nghìn đứng thứ ba sau dấu phẩy',
          ],
          note: 'Mẹo: chữ số 0 ở tận cùng bên phải phần thập phân không làm thay đổi giá trị số đó, ví dụ $3,50=3,5$.',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — khai_niem_so_thap_phan_baigiang.mp4' },
    quiz: [
      {
        question: 'Số thập phân 7,25 gồm phần nguyên là 7 và phần thập phân là:',
        options: ['2', '25', '052', '250'],
        correctIndex: 1,
      },
      {
        question: 'Trong số 45,678, chữ số 7 thuộc hàng nào?',
        options: ['Hàng phần mười', 'Hàng phần nghìn', 'Hàng đơn vị', 'Hàng phần trăm'],
        correctIndex: 3,
      },
      { question: 'Phân số $\\dfrac{3}{10}$ viết dưới dạng số thập phân là:', options: ['0,3', '3,0', '0,03', '30,0'], correctIndex: 0 },
      { question: 'Số thập phân 6,050 viết gọn (bỏ chữ số 0 thừa) là:', options: ['6,5', '6,005', '6,05', '60,5'], correctIndex: 2 },
      { question: 'Hỗn số $2\\dfrac{3}{100}$ viết dưới dạng số thập phân là:', options: ['2,3', '2,03', '2,003', '20,3'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'Viết các số sau dưới dạng số thập phân: $\\dfrac{5}{10}$ và $\\dfrac{27}{100}$.', solution: ['$\\dfrac{5}{10}=0,5$', '$\\dfrac{27}{100}=0,27$'] },
      {
        prompt: 'Nêu tên các hàng của số thập phân 305,148 (kể từ hàng cao nhất đến hàng thấp nhất).',
        solution: ['Hàng trăm: 3', 'Hàng chục: 0', 'Hàng đơn vị: 5', 'Hàng phần mười: 1', 'Hàng phần trăm: 4', 'Hàng phần nghìn: 8'],
      },
      {
        prompt: 'Viết các số thập phân sau dưới dạng gọn nhất (bỏ chữ số 0 thừa ở tận cùng bên phải phần thập phân): 8,200 và 14,050.',
        solution: ['$8,200 = 8,2$', '$14,050 = 14,05$'],
      },
      { prompt: 'Đổi hỗn số $5\\dfrac{7}{100}$ thành số thập phân.', solution: ['$5\\dfrac{7}{100} = 5,07$'] },
      {
        prompt: 'Một thanh gỗ dài 3,5m. Viết độ dài đó dưới dạng phân số thập phân có mẫu số là 10.',
        solution: ['$3,5 = \\dfrac{35}{10}$m'],
      },
    ],
    flashcards: [
      { front: 'Số thập phân gồm mấy phần?', back: 'Phần nguyên và phần thập phân, ngăn cách bởi dấu phẩy' },
      { front: '$\\dfrac{1}{10}$ viết dưới dạng số thập phân', back: '0,1' },
      { front: 'Hàng ngay sau dấu phẩy gọi là hàng gì?', back: 'Hàng phần mười' },
      { front: '3,50 viết gọn là', back: '3,5' },
      { front: '$\\dfrac{9}{100}$ viết dưới dạng số thập phân', back: '0,09' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số thập phân 0,7 gồm phần nguyên là 0 và phần thập phân là:', options: ['0', '70', '7', '07'], correctIndex: 2 },
        { question: 'Phân số $\\dfrac{9}{1000}$ viết dưới dạng số thập phân là:', options: ['0,009', '0,09', '0,9', '9,000'], correctIndex: 0 },
        {
          question: 'Trong số 12,345, chữ số 4 thuộc hàng nào?',
          options: ['Hàng phần mười', 'Hàng phần nghìn', 'Hàng đơn vị', 'Hàng phần trăm'],
          correctIndex: 3,
        },
        { question: 'Số thập phân 20,300 viết gọn là:', options: ['20,03', '20,3', '2,3', '203,0'], correctIndex: 1 },
        { question: 'Hỗn số $4\\dfrac{5}{10}$ viết dưới dạng số thập phân là:', options: ['4,05', '4,005', '4,5', '45,0'], correctIndex: 2 },
        {
          question: 'Trong số 0,608, chữ số 0 (đứng ngay sau chữ số 6) thuộc hàng nào?',
          options: ['Hàng phần trăm', 'Hàng phần mười', 'Hàng phần nghìn', 'Hàng đơn vị'],
          correctIndex: 0,
        },
        { question: 'Số thập phân nào bằng với $\\dfrac{125}{1000}$?', options: ['1,25', '0,0125', '12,5', '0,125'], correctIndex: 3 },
        { question: 'Phần nguyên của số thập phân 99,05 là:', options: ['9', '99', '05', '9905'], correctIndex: 1 },
        { question: 'Số thập phân 7,4 có thể viết dưới dạng phân số thập phân nào?', options: ['7/4', '47/10', '74/10', '704/100'], correctIndex: 2 },
        { question: 'Trong số 456,789, chữ số nào thuộc hàng phần nghìn?', options: ['9', '8', '7', '6'], correctIndex: 0 },
        { question: 'Số thập phân 3,000 viết gọn nhất là:', options: ['3,0', '3,00', '0,3', '3'], correctIndex: 3 },
        {
          question: '$\\dfrac{6}{10}+\\dfrac{3}{100}$ viết dưới dạng số thập phân là bao nhiêu?',
          options: ['0,9', '0,63', '0,603', '6,3'],
          correctIndex: 1,
        },
        {
          question: 'Số thập phân 15,08 đọc là:',
          options: ['Mười lăm phẩy tám mươi', 'Mười lăm phẩy tám', 'Mười lăm phẩy không tám', 'Một trăm năm mươi phẩy tám'],
          correctIndex: 2,
        },
        {
          question: 'Hàng phần trăm của số thập phân đứng ở vị trí nào so với dấu phẩy?',
          options: ['Thứ hai bên phải dấu phẩy', 'Thứ nhất bên phải dấu phẩy', 'Thứ ba bên phải dấu phẩy', 'Bên trái dấu phẩy'],
          correctIndex: 0,
        },
        { question: 'Viết phân số $\\dfrac{2035}{100}$ dưới dạng số thập phân:', options: ['2,035', '2,35', '203,5', '20,35'], correctIndex: 3 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết các phân số sau dưới dạng số thập phân: $\\dfrac{7}{10}$; $\\dfrac{34}{100}$; $\\dfrac{9}{1000}$.',
          solution: ['$\\dfrac{7}{10}=0,7$', '$\\dfrac{34}{100}=0,34$', '$\\dfrac{9}{1000}=0,009$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng ghi giá một chiếc bút là 12,50 nghìn đồng và một chiếc thước là 8,5 nghìn đồng. Hãy viết gọn giá chiếc bút (bỏ chữ số 0 thừa), rồi cho biết vật nào có giá cao hơn.',
          solution: [
            'Giá chiếc bút viết gọn: $12,50=12,5$ nghìn đồng',
            'So sánh $12,5$ và $8,5$: vì $12,5>8,5$ nên chiếc bút có giá cao hơn',
          ],
        },
      ],
    },
  },

  'l5-so-sanh-so-thap-phan': {
    title: 'So sánh số thập phân',
    theory: {
      cards: [
        {
          title: 'Cách so sánh hai số thập phân',
          formulas: ['8,5 > 7,9\\ (\\text{vì phần nguyên } 8>7)', '6,42 > 6,39\\ (\\text{phần nguyên bằng nhau, so hàng phần mười: } 4>3)'],
          legend: [
            'So sánh phần nguyên trước: phần nguyên nào lớn hơn thì số đó lớn hơn',
            'Nếu phần nguyên bằng nhau, so sánh lần lượt từng hàng ở phần thập phân từ trái sang phải',
          ],
          note: 'Mẹo: có thể viết thêm chữ số 0 vào tận cùng bên phải phần thập phân để hai số có cùng số chữ số ở phần thập phân, giúp so sánh dễ hơn (ví dụ so sánh 6,4 và 6,42 → viết 6,40 và 6,42).',
        },
        {
          title: 'Sắp xếp các số thập phân theo thứ tự',
          formulas: ['3,1 < 3,15 < 3,2 < 3,25'],
          legend: ['Muốn sắp xếp, ta so sánh từng cặp số thập phân với nhau rồi xếp theo thứ tự yêu cầu (tăng dần hoặc giảm dần)'],
          note: 'Mẹo: khi có nhiều số, hãy viết tất cả về cùng số chữ số ở phần thập phân (thêm số 0 nếu cần) để so sánh chính xác và nhanh hơn.',
        },
      ],
    },
    video: { caption: '00:00 / 07:50 — so_sanh_so_thap_phan_baigiang.mp4' },
    quiz: [
      { question: 'So sánh 5,6 và 5,58.', options: ['5,58 lớn hơn', '5,6 lớn hơn', 'Bằng nhau', 'Không so sánh được'], correctIndex: 1 },
      { question: 'Số nào lớn nhất trong các số: 4,5; 4,05; 4,55; 4,505?', options: ['4,5', '4,05', '4,505', '4,55'], correctIndex: 3 },
      { question: 'So sánh 12,34 và 12,340.', options: ['Bằng nhau', '12,34 lớn hơn', '12,340 lớn hơn', 'Không so sánh được'], correctIndex: 0 },
      {
        question: 'Sắp xếp theo thứ tự tăng dần: 3,7; 3,07; 3,77; 3,17. Số đứng đầu tiên là số nào?',
        options: ['3,7', '3,17', '3,07', '3,77'],
        correctIndex: 2,
      },
      { question: 'Số nào bé hơn 0,5 trong các số: 0,45; 0,54; 0,5; 0,505?', options: ['0,54', '0,45', '0,5', '0,505'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'So sánh 7,8 và 7,80.', solution: ['$7,80=7,8$ (chữ số 0 ở cuối phần thập phân không làm đổi giá trị)', 'Vậy $7,8=7,80$'] },
      {
        prompt: 'Sắp xếp các số sau theo thứ tự từ bé đến lớn: 6,3; 6,03; 6,33; 6,003.',
        solution: ['So sánh từng cặp: $6,003<6,03<6,3<6,33$', 'Thứ tự từ bé đến lớn: $6,003;\\ 6,03;\\ 6,3;\\ 6,33$'],
      },
      { prompt: 'Tìm số lớn nhất trong các số: 15,4; 15,04; 15,44; 15,404.', solution: ['So sánh phần thập phân: $15,44$ có hàng phần mười là 4, lớn nhất trong các số có cùng phần nguyên 15', 'Số lớn nhất là $15,44$'] },
      { prompt: 'Bạn An cao 1,42m, bạn Bình cao 1,4m. Ai cao hơn?', solution: ['$1,4=1,40$', 'So sánh $1,42$ và $1,40$: vì $1,42>1,40$ nên bạn An cao hơn'] },
      {
        prompt: 'Ba bạn nhảy xa được: Lan 2,35m; Hoa 2,3m; Mai 2,53m. Ai nhảy xa nhất?',
        solution: ['So sánh: $2,53>2,35>2,3$', 'Bạn Mai nhảy xa nhất'],
      },
    ],
    flashcards: [
      { front: 'Muốn so sánh hai số thập phân, ta so sánh phần nào trước?', back: 'Phần nguyên' },
      { front: 'So sánh 4,5 và 4,50', back: 'Bằng nhau' },
      { front: 'So sánh 3,8 và 3,79', back: '3,8 lớn hơn' },
      { front: 'Số lớn nhất trong 2,1; 2,01; 2,11', back: '2,11' },
      { front: 'Thêm chữ số 0 vào cuối phần thập phân có làm đổi giá trị số không?', back: 'Không' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'So sánh 9,2 và 9,19.', options: ['9,19 lớn hơn', 'Bằng nhau', '9,2 lớn hơn', 'Không so sánh được'], correctIndex: 2 },
        { question: 'Số nào bé nhất trong các số: 5,6; 5,06; 5,66; 5,606?', options: ['5,06', '5,6', '5,66', '5,606'], correctIndex: 0 },
        { question: 'So sánh 18,50 và 18,5.', options: ['18,50 lớn hơn', '18,5 lớn hơn', 'Không so sánh được', 'Bằng nhau'], correctIndex: 3 },
        {
          question: 'Sắp xếp giảm dần: 7,2; 7,02; 7,22; 7,002. Số đứng đầu tiên là số nào?',
          options: ['7,2', '7,22', '7,02', '7,002'],
          correctIndex: 1,
        },
        { question: 'So sánh 0,08 và 0,8.', options: ['0,08 lớn hơn', 'Bằng nhau', '0,8 lớn hơn', 'Không so sánh được'], correctIndex: 2 },
        { question: 'Số lớn nhất trong 3 số 12,9; 12,19; 12,91 là số nào?', options: ['12,91', '12,9', '12,19', 'Không xác định'], correctIndex: 0 },
        { question: 'So sánh 6,450 và 6,45.', options: ['6,450 lớn hơn', '6,45 lớn hơn', 'Không so sánh được', 'Bằng nhau'], correctIndex: 3 },
        { question: 'Số bé nhất trong các số: 24,3; 24,03; 24,33; 24,003 là số nào?', options: ['24,3', '24,003', '24,03', '24,33'], correctIndex: 1 },
        { question: 'So sánh 100,1 và 99,9.', options: ['99,9 lớn hơn', 'Bằng nhau', '100,1 lớn hơn', 'Không so sánh được'], correctIndex: 2 },
        {
          question: 'Xếp theo thứ tự tăng dần các số 8,08; 8,8; 8,088; 8,008. Số đứng thứ hai là số nào?',
          options: ['8,08', '8,8', '8,088', '8,008'],
          correctIndex: 0,
        },
        {
          question: 'Nam ném bóng xa 15,25m, Hùng ném bóng xa 15,3m. Ai ném xa hơn?',
          options: ['Nam', 'Bằng nhau', 'Không xác định', 'Hùng'],
          correctIndex: 3,
        },
        { question: 'Số nào trong các số sau bằng 7,4: 7,40; 7,04; 7,004; 74,0?', options: ['7,04', '7,40', '7,004', '74,0'], correctIndex: 1 },
        { question: 'So sánh 45,600 và 45,6.', options: ['45,600 lớn hơn', '45,6 lớn hơn', 'Bằng nhau', 'Không so sánh được'], correctIndex: 2 },
        {
          question: 'Trong 4 số: 3,5; 3,55; 3,505; 3,45, số nào lớn thứ hai (xếp theo thứ tự giảm dần)?',
          options: ['3,505', '3,55', '3,5', '3,45'],
          correctIndex: 0,
        },
        {
          question: 'Ba thửa ruộng có diện tích 0,5ha; 0,45ha; 0,54ha. Thửa nào có diện tích lớn nhất?',
          options: ['0,5ha', '0,45ha', 'Bằng nhau', '0,54ha'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Sắp xếp các số thập phân sau theo thứ tự từ bé đến lớn: 6,17; 6,7; 6,071; 6,701.',
          solution: [
            'Cả 4 số đều có phần nguyên là 6',
            'So sánh hàng phần mười: $6,071$ và $6,17$ có hàng phần mười là 0 và 1 nên $6,071<6,17$; còn $6,7$ và $6,701$ có cùng hàng phần mười là 7, so tiếp hàng phần trăm: 0<1 nên $6,7<6,701$',
            'Sắp xếp: $6,071<6,17<6,7<6,701$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Ba vận động viên nhảy xa được thành tích: Bình 4,25m, Cường 4,2m, Dũng 4,52m. Hãy sắp xếp thành tích của ba bạn theo thứ tự từ cao xuống thấp và cho biết ai đạt thành tích tốt nhất.',
          solution: [
            'So sánh: $4,52 > 4,25 > 4,20$ (vì $4,2=4,20$)',
            'Sắp xếp từ cao xuống thấp: Dũng (4,52m), Bình (4,25m), Cường (4,2m)',
            'Vậy bạn Dũng đạt thành tích tốt nhất',
          ],
        },
      ],
    },
  },

  'l5-phep-tinh-so-thap-phan': {
    title: 'Cộng, trừ, nhân, chia số thập phân',
    theory: {
      cards: [
        {
          title: 'Cộng, trừ số thập phân',
          formulas: ['12,45+3,7=16,15', '25,6-8,75=16,85'],
          legend: [
            'Đặt tính sao cho các dấu phẩy thẳng cột với nhau (các hàng tương ứng thẳng cột)',
            'Cộng (trừ) như cộng (trừ) số tự nhiên, rồi đặt dấu phẩy vào kết quả thẳng cột với các dấu phẩy đã cho',
          ],
          note: 'Mẹo: nếu hai số thập phân có số chữ số ở phần thập phân khác nhau, có thể viết thêm chữ số 0 vào bên phải để bằng số chữ số rồi mới đặt tính cho dễ.',
        },
        {
          title: 'Nhân, chia số thập phân',
          formulas: ['2,5\\times1,2=3,00=3', '12,6:3=4,2'],
          legend: [
            'Muốn nhân hai số thập phân, ta nhân như số tự nhiên rồi đếm tổng số chữ số ở phần thập phân của cả hai thừa số để đặt dấu phẩy vào tích',
            'Muốn chia số thập phân cho số tự nhiên, ta chia phần nguyên trước, hạ dần phần thập phân',
          ],
          note: 'Mẹo: khi chia một số thập phân cho một số thập phân, ta nhân cả số bị chia và số chia với 10, 100,... để số chia trở thành số tự nhiên rồi chia bình thường.',
        },
      ],
    },
    video: { caption: '00:00 / 11:15 — bon_phep_tinh_so_thap_phan_baigiang.mp4' },
    quiz: [
      { question: '$12,5+7,35=?$', options: ['19,75', '19,85', '20,85', '18,85'], correctIndex: 1 },
      { question: '$20-8,4=?$', options: ['11,4', '12,4', '12,6', '11,6'], correctIndex: 3 },
      { question: '$3,2\\times1,5=?$', options: ['4,8', '4,5', '3,7', '5,2'], correctIndex: 0 },
      { question: '$18,6:3=?$', options: ['6', '6,6', '6,2', '5,2'], correctIndex: 2 },
      { question: '$0,4\\times0,5=?$', options: ['0,9', '0,2', '2,0', '0,02'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: $34,56+8,7$', solution: ['$34,56+8,70=43,26$'] },
      { prompt: 'Đặt tính rồi tính: $50-12,45$', solution: ['$50,00-12,45=37,55$'] },
      { prompt: 'Tính: $4,5\\times2,4$', solution: ['$4,5\\times2,4=10,8$'] },
      { prompt: 'Tính: $15,75:2,5$', solution: ['$15,75:2,5=6,3$'] },
      {
        prompt: 'Một mảnh vải dài 8,5m, người ta cắt may 3 chiếc áo, mỗi chiếc hết 1,25m vải. Hỏi mảnh vải còn lại dài bao nhiêu mét?',
        solution: ['Số vải may 3 chiếc áo: $1,25\\times3=3,75$m', 'Số vải còn lại: $8,5-3,75=4,75$m'],
      },
    ],
    flashcards: [
      { front: 'Khi đặt tính cộng (trừ) số thập phân, cần chú ý điều gì?', back: 'Đặt các dấu phẩy thẳng cột với nhau' },
      { front: '$1,5\\times2$', back: '3' },
      { front: '$9,6:4$', back: '2,4' },
      { front: 'Muốn nhân hai số thập phân, sau khi nhân như số tự nhiên ta làm gì?', back: 'Đếm tổng số chữ số ở phần thập phân của hai thừa số để đặt dấu phẩy vào tích' },
      { front: '$10-4,5$', back: '5,5' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '$7,25+5,8=?$', options: ['13,25', '12,05', '13,05', '13,8'], correctIndex: 2 },
        { question: '$15-6,35=?$', options: ['8,65', '9,65', '8,35', '8,75'], correctIndex: 0 },
        { question: '$2,5\\times4=?$', options: ['9', '8,5', '10,5', '10'], correctIndex: 3 },
        { question: '$27,6:6=?$', options: ['4,5', '4,6', '4,4', '5,6'], correctIndex: 1 },
        { question: '$0,25\\times100=?$', options: ['2,5', '0,25', '25', '250'], correctIndex: 2 },
        { question: '$36,8-14,5=?$', options: ['22,3', '21,3', '22,7', '23,3'], correctIndex: 0 },
        { question: '$1,2\\times1,2=?$', options: ['1,2', '2,4', '1,4', '1,44'], correctIndex: 3 },
        { question: '$8,4:0,4=?$', options: ['2,1', '21', '210', '0,21'], correctIndex: 1 },
        { question: '$45,6+3,44=?$', options: ['48,04', '49,4', '49,04', '49,44'], correctIndex: 2 },
        { question: '$60-24,75=?$', options: ['35,25', '34,25', '35,75', '36,25'], correctIndex: 0 },
        { question: '$0,6\\times0,3=?$', options: ['0,9', '1,8', '0,3', '0,18'], correctIndex: 3 },
        { question: '$9,45:1,5=?$', options: ['6', '6,3', '6,5', '9,45'], correctIndex: 1 },
        { question: '$3,75+6,25=?$', options: ['9,9', '9,95', '10', '10,1'], correctIndex: 2 },
        { question: '$100\\times0,08=?$', options: ['8', '0,8', '80', '0,08'], correctIndex: 0 },
        {
          question: 'Một người mua 2,5kg thịt hết 175 000 đồng. Hỏi 1kg thịt giá bao nhiêu tiền?',
          options: ['65 000 đồng', '72 000 đồng', '75 000 đồng', '70 000 đồng'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: $12,5+7,5\\times2$',
          solution: ['$7,5\\times2=15$', '$12,5+15=27,5$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một người đi xe máy trong 2,5 giờ với vận tốc 36km/giờ. Sau đó người đó còn đi thêm 15km nữa mới tới nơi. Hỏi cả quãng đường người đó đi dài bao nhiêu ki-lô-mét?',
          solution: ['Quãng đường đã đi trong 2,5 giờ: $2,5\\times36=90$km', 'Cả quãng đường: $90+15=105$km'],
        },
      ],
    },
  },

  'l5-ti-so-phan-tram': {
    title: 'Tỉ số phần trăm và các bài toán về tỉ số phần trăm',
    theory: {
      cards: [
        {
          title: 'Tỉ số phần trăm',
          formulas: ['\\dfrac{45}{100} = 45\\%', '\\dfrac{a}{b} = (a:b)\\times100\\%'],
          legend: ['Tỉ số phần trăm của a và b là thương của a chia cho b, nhân với 100 rồi viết thêm kí hiệu %'],
          note: 'Mẹo: muốn tìm tỉ số phần trăm của hai số a và b, ta tính thương $a:b$, nhân thương đó với 100 rồi viết thêm kí hiệu % vào bên phải.',
        },
        {
          title: 'Ba dạng toán về tỉ số phần trăm',
          formulas: [
            '\\text{Tìm \\% của một số: } 80\\times25:100=20',
            '\\text{Tìm một số biết \\%: biết } 20\\%\\text{ của } x \\text{ là } 16 \\Rightarrow x=16\\times100:20=80',
          ],
          legend: [
            'Dạng 1: tìm tỉ số phần trăm của hai số',
            'Dạng 2: tìm giá trị phần trăm của một số cho trước',
            'Dạng 3: tìm một số khi biết giá trị phần trăm của số đó',
          ],
          note: 'Mẹo: luôn xác định rõ bài toán thuộc dạng nào trong ba dạng trên trước khi đặt phép tính.',
        },
      ],
    },
    video: { caption: '00:00 / 10:50 — ti_so_phan_tram_baigiang.mp4' },
    quiz: [
      { question: 'Tỉ số phần trăm của 15 và 50 là bao nhiêu?', options: ['15%', '30%', '35%', '25%'], correctIndex: 1 },
      { question: 'Tìm 20% của 150.', options: ['15', '20', '25', '30'], correctIndex: 3 },
      {
        question: 'Một lớp có 40 học sinh, trong đó 25% là học sinh giỏi. Hỏi lớp có bao nhiêu học sinh giỏi?',
        options: ['10', '8', '12', '15'],
        correctIndex: 0,
      },
      { question: 'Biết 10% của một số là 8. Số đó là bao nhiêu?', options: ['70', '75', '80', '85'], correctIndex: 2 },
      { question: 'Tỉ số phần trăm của 3 và 4 là bao nhiêu?', options: ['34%', '75%', '43%', '25%'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'Tìm tỉ số phần trăm của 18 và 24.', solution: ['$18:24=0,75=75\\%$'] },
      { prompt: 'Tìm 35% của 200.', solution: ['$200\\times35:100=70$'] },
      { prompt: 'Biết 15% của một số là 45. Tìm số đó.', solution: ['Số đó là: $45\\times100:15=300$'] },
      {
        prompt: 'Một cửa hàng nhập về 500kg gạo, đã bán được 60% số gạo đó. Hỏi cửa hàng đã bán được bao nhiêu ki-lô-gam gạo, còn lại bao nhiêu ki-lô-gam?',
        solution: ['Số gạo đã bán: $500\\times60:100=300$kg', 'Số gạo còn lại: $500-300=200$kg'],
      },
      {
        prompt: 'Lớp 5A có 32 học sinh, trong đó có 20 học sinh nữ. Tìm tỉ số phần trăm số học sinh nữ so với số học sinh cả lớp.',
        solution: ['Tỉ số phần trăm học sinh nữ: $20:32=0,625=62,5\\%$'],
      },
    ],
    flashcards: [
      { front: 'Muốn tìm tỉ số phần trăm của a và b, ta làm gì?', back: 'Tính $a:b$ rồi nhân với 100, viết thêm kí hiệu %' },
      { front: '50% của 80', back: '40' },
      { front: '$\\dfrac{1}{4}$ viết dưới dạng tỉ số phần trăm', back: '25%' },
      { front: 'Biết 10% của x là 5, tìm x', back: '50' },
      { front: '100% của một số là', back: 'chính số đó' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tỉ số phần trăm của 9 và 20 là bao nhiêu?', options: ['40%', '90%', '45%', '20%'], correctIndex: 2 },
        { question: 'Tìm 40% của 250.', options: ['100', '90', '110', '120'], correctIndex: 0 },
        { question: 'Biết 25% của một số là 50. Số đó là bao nhiêu?', options: ['150', '175', '125', '200'], correctIndex: 3 },
        { question: 'Tỉ số phần trăm của 7 và 10 là bao nhiêu?', options: ['17%', '70%', '7%', '710%'], correctIndex: 1 },
        {
          question: 'Một đội có 50 công nhân, trong đó có 40% là nữ. Hỏi có bao nhiêu công nhân nữ?',
          options: ['15', '18', '20', '25'],
          correctIndex: 2,
        },
        { question: 'Tìm 5% của 400.', options: ['20', '25', '15', '40'], correctIndex: 0 },
        { question: 'Biết 60% của một số là 120. Số đó là bao nhiêu?', options: ['180', '160', '220', '200'], correctIndex: 3 },
        { question: 'Tỉ số phần trăm của 45 và 60 là bao nhiêu?', options: ['45%', '75%', '60%', '80%'], correctIndex: 1 },
        {
          question: 'Một kho có 800 tấn hàng, đã xuất 25% số hàng. Hỏi kho đã xuất bao nhiêu tấn hàng?',
          options: ['150', '175', '200', '225'],
          correctIndex: 2,
        },
        { question: 'Tìm 12% của 300.', options: ['36', '30', '40', '32'], correctIndex: 0 },
        { question: 'Biết 8% của một số là 16. Số đó là bao nhiêu?', options: ['150', '180', '220', '200'], correctIndex: 3 },
        {
          question: 'Giá một chiếc áo là 200 000 đồng, được giảm giá 15%. Hỏi số tiền được giảm là bao nhiêu?',
          options: ['25 000 đồng', '30 000 đồng', '35 000 đồng', '20 000 đồng'],
          correctIndex: 1,
        },
        {
          question: 'Một trường có 600 học sinh, trong đó có 288 học sinh nam. Tỉ số phần trăm học sinh nam so với cả trường là bao nhiêu?',
          options: ['45%', '50%', '48%', '52%'],
          correctIndex: 2,
        },
        { question: 'Tỉ số phần trăm của một số và chính nó luôn bằng bao nhiêu?', options: ['100%', '50%', '10%', '0%'], correctIndex: 0 },
        {
          question: 'Năm ngoái một xã có 400 hộ nghèo. Năm nay giảm 20% số hộ nghèo so với năm ngoái. Hỏi năm nay xã còn bao nhiêu hộ nghèo?',
          options: ['380', '300', '340', '320'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một lớp học có 45 học sinh, trong đó có 18 học sinh nam. Tìm tỉ số phần trăm số học sinh nam so với số học sinh cả lớp.',
          solution: ['Tỉ số phần trăm học sinh nam: $18:45=0,4=40\\%$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cửa hàng nhập về 250kg đường. Ngày thứ nhất bán được 30% số đường, ngày thứ hai bán tiếp 20% số đường còn lại. Hỏi sau hai ngày, cửa hàng còn lại bao nhiêu ki-lô-gam đường?',
          solution: [
            'Số đường bán được ngày thứ nhất: $250\\times30:100=75$kg',
            'Số đường còn lại sau ngày thứ nhất: $250-75=175$kg',
            'Số đường bán được ngày thứ hai: $175\\times20:100=35$kg',
            'Số đường còn lại sau hai ngày: $175-35=140$kg',
          ],
        },
      ],
    },
  },
}
