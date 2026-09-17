import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP5_ON_TAP_SO_TU_NHIEN_PHAN_SO = {
  'l5-on-tap-so-tu-nhien': {
    title: 'Ôn tập số tự nhiên và bốn phép tính',
    theory: {
      cards: [
        {
          title: 'Cấu tạo số tự nhiên theo hàng, lớp',
          formulas: [
            '923\\,481 = 9\\times100\\,000+2\\times10\\,000+3\\times1\\,000+4\\times100+8\\times10+1',
          ],
          legend: [
            'Lớp triệu gồm hàng trăm triệu, chục triệu, triệu',
            'Lớp nghìn gồm hàng trăm nghìn, chục nghìn, nghìn',
            'Lớp đơn vị gồm hàng trăm, chục, đơn vị',
          ],
          note: 'Mẹo đọc số lớn: tách số thành từng lớp 3 chữ số từ phải sang trái (dùng dấu cách hoặc dấu chấm), rồi đọc lần lượt từng lớp kèm theo tên lớp.',
        },
        {
          title: 'Tính chất của phép cộng và phép nhân',
          formulas: [
            'a+b=b+a',
            '(a+b)+c=a+(b+c)',
            'a\\times b=b\\times a',
            'a\\times(b+c)=a\\times b+a\\times c',
          ],
          legend: [
            'Hai dòng đầu: tính chất giao hoán và kết hợp của phép cộng (áp dụng tương tự cho phép nhân)',
            'Dòng cuối: tính chất phân phối của phép nhân đối với phép cộng',
          ],
          note: 'Mẹo tính nhanh: khi nhân ba số, hãy tìm hai số nhân với nhau ra tròn chục, tròn trăm, tròn nghìn trước (ví dụ $25\\times4=100$) rồi mới nhân với số còn lại.',
        },
      ],
    },
    video: { caption: '00:00 / 09:20 — on_tap_so_tu_nhien_baigiang.mp4' },
    quiz: [
      {
        question: 'Số 705 306 đọc là:',
        options: [
          'Bảy trăm linh năm nghìn ba trăm sáu',
          'Bảy trăm linh năm nghìn ba trăm linh sáu',
          'Bảy trăm năm mươi nghìn ba trăm linh sáu',
          'Bảy nghìn năm trăm ba trăm linh sáu',
        ],
        correctIndex: 1,
      },
      {
        question: 'Trong số 48 573, chữ số 5 thuộc hàng nào?',
        options: ['Hàng nghìn', 'Hàng chục', 'Hàng đơn vị', 'Hàng trăm'],
        correctIndex: 3,
      },
      {
        question: 'Tính bằng cách thuận tiện: $25\\times47\\times4$',
        options: ['4700', '4600', '4800', '4900'],
        correctIndex: 0,
      },
      {
        question: '$14\\,560 : 16 = ?$',
        options: ['900', '905', '910', '915'],
        correctIndex: 2,
      },
      {
        question: 'Tổng của số lớn nhất có 4 chữ số khác nhau và số bé nhất có 3 chữ số là bao nhiêu?',
        options: ['9876', '9976', '9900', '10076'],
        correctIndex: 1,
      },
    ],
    essays: [
      { prompt: 'Đặt tính rồi tính: $4\\,782+3\\,916$', solution: ['$4\\,782+3\\,916=8\\,698$'] },
      {
        prompt: 'Tính bằng cách thuận tiện nhất: $125\\times36\\times8$',
        solution: ['$125\\times8=1\\,000$', '$1\\,000\\times36=36\\,000$'],
      },
      {
        prompt: 'Một cửa hàng có 3 tấn 250kg gạo, đã bán đi 1 tấn 480kg. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?',
        solution: ['Đổi: 3 tấn 250kg $=3\\,250$kg; 1 tấn 480kg $=1\\,480$kg', 'Số gạo còn lại: $3\\,250-1\\,480=1\\,770$kg'],
      },
      { prompt: 'Tìm x, biết: $x\\times8=3\\,984$', solution: ['$x=3\\,984:8=498$'] },
      {
        prompt: 'Ngày thứ nhất một đội xe chở 235 bao gạo, ngày thứ hai chở gấp đôi ngày thứ nhất, ngày thứ ba chở ít hơn ngày thứ hai 45 bao. Hỏi cả ba ngày đội xe chở được bao nhiêu bao gạo?',
        solution: [
          'Ngày thứ hai chở: $235\\times2=470$ bao',
          'Ngày thứ ba chở: $470-45=425$ bao',
          'Cả ba ngày chở: $235+470+425=1\\,130$ bao',
        ],
      },
    ],
    flashcards: [
      { front: 'Lớp triệu gồm những hàng nào?', back: 'Hàng trăm triệu, hàng chục triệu, hàng triệu' },
      { front: 'Tính chất giao hoán của phép cộng', back: '$a+b=b+a$' },
      { front: 'Tính chất kết hợp của phép nhân', back: '$(a\\times b)\\times c=a\\times(b\\times c)$' },
      { front: 'Số lớn nhất có 4 chữ số khác nhau', back: '9876' },
      { front: '$25\\times4$', back: '100' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Số 1 205 630 gồm mấy chữ số?', options: ['6', '8', '7', '5'], correctIndex: 2 },
        {
          question: 'Số liền sau của 999 999 là số nào?',
          options: ['1 000 000', '999 998', '1 000 001', '900 000'],
          correctIndex: 0,
        },
        {
          question: 'Trong phép chia có dư, số dư luôn:',
          options: ['Lớn hơn số chia', 'Bằng số chia', 'Lớn hơn số bị chia', 'Nhỏ hơn số chia'],
          correctIndex: 3,
        },
        { question: 'Kết quả của $125\\times8$ là bao nhiêu?', options: ['800', '1000', '1200', '900'], correctIndex: 1 },
        {
          question: 'Muốn tìm số bị trừ, ta lấy:',
          options: ['Số trừ trừ đi hiệu', 'Hiệu trừ đi số trừ', 'Hiệu cộng với số trừ', 'Số trừ nhân với hiệu'],
          correctIndex: 2,
        },
        {
          question: '$36\\times25\\times4$ tính nhanh nhất bằng cách nào?',
          options: [
            'Nhân 25 với 4 trước (được 100), rồi nhân với 36',
            'Nhân 36 với 25 trước rồi cộng 4',
            'Cộng 36 với 25 rồi nhân 4',
            'Không thể tính nhanh hơn',
          ],
          correctIndex: 0,
        },
        { question: 'Số bé nhất có 5 chữ số là số nào?', options: ['99999', '90000', '10999', '10000'], correctIndex: 3 },
        {
          question: 'So sánh: 8 435 201 và 8 435 210.',
          options: ['8 435 201 lớn hơn', '8 435 210 lớn hơn', 'Hai số bằng nhau', 'Không so sánh được'],
          correctIndex: 1,
        },
        { question: 'Kết quả của phép tính $528\\times0$ là:', options: ['528', '1', '0', '5280'], correctIndex: 2 },
        {
          question: 'Tìm x, biết $x-356=1\\,024$.',
          options: ['1 380', '1 024', '668', '1 470'],
          correctIndex: 0,
        },
        {
          question: 'Tìm x, biết $x:7=245$.',
          options: ['1 645', '1 750', '35', '1 715'],
          correctIndex: 3,
        },
        {
          question: 'Một kho có 4 tấn 85kg thóc. Đổi ra ki-lô-gam, kho có bao nhiêu ki-lô-gam thóc?',
          options: ['4 850', '4 085', '485', '40 850'],
          correctIndex: 1,
        },
        {
          question: 'Trung bình cộng của 24, 36 và 48 là bao nhiêu?',
          options: ['24', '30', '36', '40'],
          correctIndex: 2,
        },
        {
          question: 'Một cửa hàng ngày đầu bán 128kg gạo, ngày sau bán gấp 3 lần ngày đầu. Cả hai ngày bán được bao nhiêu ki-lô-gam gạo?',
          options: ['512 kg', '384 kg', '456 kg', '500 kg'],
          correctIndex: 0,
        },
        { question: 'Số nào chia hết cho cả 2 và 5?', options: ['345', '342', '343', '340'], correctIndex: 3 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính giá trị biểu thức: $1\\,245+356\\times4$',
          solution: ['$356\\times4=1\\,424$', '$1\\,245+1\\,424=2\\,669$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Trong 4 ngày đầu, mỗi ngày một xưởng may được 235 bộ quần áo. Ngày thứ năm xưởng may được nhiều hơn trung bình 4 ngày đầu là 40 bộ. Hỏi trong 5 ngày, xưởng may được tất cả bao nhiêu bộ quần áo?',
          solution: [
            '4 ngày đầu may được: $235\\times4=940$ bộ',
            'Trung bình mỗi ngày trong 4 ngày đầu: $940:4=235$ bộ',
            'Ngày thứ năm may được: $235+40=275$ bộ',
            'Cả 5 ngày may được: $940+275=1\\,215$ bộ',
          ],
        },
      ],
    },
  },

  'l5-hon-so': {
    title: 'Hỗn số và cách đọc, viết, chuyển đổi',
    theory: {
      cards: [
        {
          title: 'Hỗn số là gì?',
          formulas: ['2\\dfrac{3}{4} = 2 + \\dfrac{3}{4}', '2\\dfrac{3}{4} = \\dfrac{2\\times4+3}{4} = \\dfrac{11}{4}'],
          legend: [
            'Hỗn số gồm phần nguyên và phần phân số (phân số kèm theo luôn bé hơn 1)',
            'Đọc là "hai và ba phần tư"',
          ],
          note: 'Mẹo: muốn đổi hỗn số ra phân số, lấy phần nguyên nhân với mẫu số rồi cộng với tử số, giữ nguyên mẫu số.',
        },
        {
          title: 'Đổi phân số ra hỗn số',
          formulas: ['\\dfrac{17}{5} = 3\\dfrac{2}{5}', '17 : 5 = 3\\ (\\text{dư } 2)'],
          legend: [
            'Phần nguyên là thương của phép chia tử số cho mẫu số',
            'Phần tử số mới là số dư, mẫu số giữ nguyên',
          ],
          note: 'Mẹo: chỉ đổi được phân số ra hỗn số khi phân số đó lớn hơn 1 (tử số lớn hơn mẫu số).',
        },
      ],
    },
    video: { caption: '00:00 / 08:15 — hon_so_baigiang.mp4' },
    quiz: [
      {
        question: 'Hỗn số $3\\dfrac{2}{5}$ được viết dưới dạng phân số là:',
        options: ['$\\dfrac{16}{5}$', '$\\dfrac{17}{5}$', '$\\dfrac{15}{5}$', '$\\dfrac{18}{5}$'],
        correctIndex: 1,
      },
      {
        question: 'Phân số $\\dfrac{23}{4}$ đổi ra hỗn số là:',
        options: ['$4\\dfrac{3}{4}$', '$5\\dfrac{2}{4}$', '$4\\dfrac{1}{4}$', '$5\\dfrac{3}{4}$'],
        correctIndex: 3,
      },
      {
        question: 'Hỗn số $4\\dfrac{1}{3}$ đọc là:',
        options: ['Bốn và một phần ba', 'Bốn phần ba', 'Một và bốn phần ba', 'Ba và một phần tư'],
        correctIndex: 0,
      },
      {
        question: 'Hỗn số nào lớn hơn: $2\\dfrac{3}{4}$ hay $2\\dfrac{1}{2}$?',
        options: ['$2\\dfrac{1}{2}$ lớn hơn', 'Bằng nhau', '$2\\dfrac{3}{4}$ lớn hơn', 'Không so sánh được'],
        correctIndex: 2,
      },
      {
        question: 'Tổng phần nguyên và tử số (của phần phân số) của hỗn số $5\\dfrac{2}{7}$ là bao nhiêu?',
        options: ['5', '7', '2', '9'],
        correctIndex: 1,
      },
    ],
    essays: [
      { prompt: 'Đổi hỗn số $3\\dfrac{2}{5}$ ra phân số.', solution: ['$3\\dfrac{2}{5} = \\dfrac{3\\times5+2}{5} = \\dfrac{17}{5}$'] },
      {
        prompt: 'Đổi phân số $\\dfrac{29}{6}$ ra hỗn số.',
        solution: ['$29:6=4$ dư $5$', '$\\dfrac{29}{6}=4\\dfrac{5}{6}$'],
      },
      {
        prompt: 'So sánh hai hỗn số $2\\dfrac{3}{5}$ và $2\\dfrac{4}{5}$.',
        solution: ['Hai hỗn số có cùng phần nguyên là 2, so sánh phần phân số: $\\dfrac{3}{5}<\\dfrac{4}{5}$', 'Vậy $2\\dfrac{3}{5}<2\\dfrac{4}{5}$'],
      },
      {
        prompt: 'Một sợi dây dài $3\\dfrac{1}{2}$m, người ta cắt đi $1\\dfrac{1}{4}$m. Hỏi sợi dây còn lại dài bao nhiêu mét?',
        solution: [
          'Đổi ra phân số: $3\\dfrac{1}{2}=\\dfrac{14}{4}$, $1\\dfrac{1}{4}=\\dfrac{5}{4}$',
          '$\\dfrac{14}{4}-\\dfrac{5}{4}=\\dfrac{9}{4}=2\\dfrac{1}{4}$m',
          'Sợi dây còn lại dài $2\\dfrac{1}{4}$m',
        ],
      },
      {
        prompt: 'Mẹ mua $2\\dfrac{1}{2}$kg táo và $1\\dfrac{3}{4}$kg cam. Hỏi mẹ mua tất cả bao nhiêu ki-lô-gam trái cây?',
        solution: [
          'Đổi ra phân số: $2\\dfrac{1}{2}=\\dfrac{10}{4}$, $1\\dfrac{3}{4}=\\dfrac{7}{4}$',
          '$\\dfrac{10}{4}+\\dfrac{7}{4}=\\dfrac{17}{4}=4\\dfrac{1}{4}$kg',
          'Mẹ mua tất cả $4\\dfrac{1}{4}$kg trái cây',
        ],
      },
    ],
    flashcards: [
      { front: 'Hỗn số gồm mấy phần?', back: 'Phần nguyên và phần phân số' },
      { front: 'Đổi $2\\dfrac{1}{3}$ ra phân số', back: '$\\dfrac{7}{3}$' },
      { front: 'Đổi $\\dfrac{13}{4}$ ra hỗn số', back: '$3\\dfrac{1}{4}$' },
      { front: 'Phần phân số trong hỗn số luôn...', back: 'bé hơn 1 (tử số bé hơn mẫu số)' },
      { front: '$4\\dfrac{2}{5}$ đọc là', back: 'Bốn và hai phần năm' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hỗn số $1\\dfrac{3}{4}$ bằng phân số nào?', options: ['$\\dfrac54$', '$\\dfrac64$', '$\\dfrac74$', '$\\dfrac84$'], correctIndex: 2 },
        {
          question: 'Phân số $\\dfrac{11}{3}$ đổi ra hỗn số là:',
          options: ['$3\\dfrac{2}{3}$', '$3\\dfrac{1}{3}$', '$2\\dfrac{2}{3}$', '$4\\dfrac{2}{3}$'],
          correctIndex: 0,
        },
        {
          question: 'Hỗn số gồm phần nguyên và phần gì?',
          options: ['Số thập phân', 'Số tự nhiên', 'Phân số lớn hơn 1', 'Phân số nhỏ hơn 1'],
          correctIndex: 3,
        },
        { question: 'Đổi hỗn số $6\\dfrac{1}{2}$ ra phân số:', options: ['$\\dfrac{12}{2}$', '$\\dfrac{13}{2}$', '$\\dfrac{14}{2}$', '$\\dfrac{11}{2}$'], correctIndex: 1 },
        {
          question: 'Phân số $\\dfrac{25}{6}$ đổi ra hỗn số, phần nguyên là:',
          options: ['3', '5', '4', '6'],
          correctIndex: 2,
        },
        {
          question: 'So sánh $3\\dfrac{2}{5}$ và $\\dfrac{18}{5}$.',
          options: ['$\\dfrac{18}{5}$ lớn hơn', '$3\\dfrac{2}{5}$ lớn hơn', 'Bằng nhau', 'Không so sánh được'],
          correctIndex: 0,
        },
        { question: 'Hỗn số $7\\dfrac{3}{8}$ có tử số của phần phân số là:', options: ['8', '7', '5', '3'], correctIndex: 3 },
        {
          question: 'Muốn đổi hỗn số ra phân số, ta lấy phần nguyên nhân với mẫu số rồi:',
          options: ['trừ đi tử số', 'cộng với tử số, giữ nguyên mẫu số', 'chia cho tử số', 'nhân với tử số'],
          correctIndex: 1,
        },
        {
          question: 'Phân số $\\dfrac{31}{4}$ viết dưới dạng hỗn số là:',
          options: ['$6\\dfrac{3}{4}$', '$7\\dfrac{1}{4}$', '$7\\dfrac{3}{4}$', '$8\\dfrac{3}{4}$'],
          correctIndex: 2,
        },
        { question: 'Tổng hai hỗn số $1\\dfrac{1}{2}$ và $2\\dfrac{1}{2}$ bằng bao nhiêu?', options: ['4', '3', '5', '$3\\dfrac12$'], correctIndex: 0 },
        {
          question: 'Một hình chữ nhật có chiều dài $2\\dfrac{1}{2}$m và chiều rộng $1$m. Tính tổng chiều dài và chiều rộng.',
          options: ['$2\\dfrac12$', '4', '3', '$3\\dfrac12$'],
          correctIndex: 3,
        },
        {
          question: 'Hỗn số $9\\dfrac{5}{9}$ khi đổi ra phân số có tử số là:',
          options: ['81', '86', '85', '90'],
          correctIndex: 1,
        },
        {
          question: 'Phân số nào sau đây KHÔNG đổi được ra hỗn số (vì bé hơn 1)?',
          options: ['$\\dfrac74$', '$\\dfrac92$', '$\\dfrac35$', '$\\dfrac{11}{6}$'],
          correctIndex: 2,
        },
        {
          question: 'Đổi hỗn số $10\\dfrac{1}{4}$ ra phân số:',
          options: ['$\\dfrac{41}{4}$', '$\\dfrac{40}{4}$', '$\\dfrac{42}{4}$', '$\\dfrac{39}{4}$'],
          correctIndex: 0,
        },
        {
          question: 'Bạn Lan có $3\\dfrac{1}{4}$ cái bánh, bạn Hoa có $2\\dfrac{3}{4}$ cái bánh. Hỏi hai bạn có tất cả bao nhiêu cái bánh?',
          options: ['5', '$5\\dfrac12$', '$6\\dfrac12$', '6'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đổi phân số $\\dfrac{47}{9}$ ra hỗn số.',
          solution: ['$47:9=5$ dư $2$', '$\\dfrac{47}{9}=5\\dfrac{2}{9}$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một thùng đựng $8\\dfrac{1}{2}$ lít nước mắm, người ta lấy ra $3\\dfrac{3}{4}$ lít để đóng chai nhỏ. Hỏi trong thùng còn lại bao nhiêu lít nước mắm?',
          solution: [
            '$8\\dfrac12 = \\dfrac{34}{4}$ lít',
            '$3\\dfrac34 = \\dfrac{15}{4}$ lít',
            '$\\dfrac{34}{4}-\\dfrac{15}{4}=\\dfrac{19}{4}=4\\dfrac34$ lít',
            'Vậy trong thùng còn lại $4\\dfrac34$ lít nước mắm',
          ],
        },
      ],
    },
  },

  'l5-phep-tinh-phan-so-nang-cao': {
    title: 'Ôn tập bốn phép tính với phân số',
    theory: {
      cards: [
        {
          title: 'Cộng, trừ phân số',
          formulas: ['\\dfrac{2}{5}+\\dfrac{1}{3} = \\dfrac{6}{15}+\\dfrac{5}{15} = \\dfrac{11}{15}', '\\dfrac{3}{4}-\\dfrac{1}{6} = \\dfrac{9}{12}-\\dfrac{2}{12} = \\dfrac{7}{12}'],
          legend: ['Muốn cộng (trừ) hai phân số khác mẫu số, ta quy đồng mẫu số rồi cộng (trừ) tử số, giữ nguyên mẫu số chung'],
          note: 'Mẹo: nếu hai mẫu số không chia hết cho nhau, có thể lấy tích hai mẫu số làm mẫu số chung.',
        },
        {
          title: 'Nhân, chia phân số',
          formulas: ['\\dfrac{2}{3}\\times\\dfrac{4}{5} = \\dfrac{8}{15}', '\\dfrac{2}{3}:\\dfrac{4}{5} = \\dfrac{2}{3}\\times\\dfrac{5}{4} = \\dfrac{10}{12}=\\dfrac{5}{6}'],
          legend: [
            'Muốn nhân hai phân số, ta nhân tử số với tử số, mẫu số với mẫu số',
            'Muốn chia hai phân số, ta nhân phân số thứ nhất với phân số thứ hai đảo ngược',
          ],
          note: 'Mẹo: sau khi tính xong, nhớ rút gọn phân số về dạng tối giản.',
        },
      ],
    },
    video: { caption: '00:00 / 09:40 — bon_phep_tinh_phan_so_baigiang.mp4' },
    quiz: [
      { question: '$\\dfrac{1}{2}+\\dfrac{1}{3}=?$', options: ['$\\dfrac15$', '$\\dfrac56$', '$\\dfrac25$', '$\\dfrac36$'], correctIndex: 1 },
      { question: '$\\dfrac{3}{4}-\\dfrac{1}{4}=?$', options: ['$\\dfrac14$', '$\\dfrac38$', '$\\dfrac23$', '$\\dfrac12$'], correctIndex: 3 },
      { question: '$\\dfrac{2}{3}\\times\\dfrac{3}{5}=?$', options: ['$\\dfrac25$', '$\\dfrac45$', '$\\dfrac38$', '$\\dfrac13$'], correctIndex: 0 },
      { question: '$\\dfrac{4}{5}:\\dfrac{2}{3}=?$', options: ['$\\dfrac56$', '$\\dfrac{8}{15}$', '$\\dfrac65$', '$\\dfrac25$'], correctIndex: 2 },
      { question: '$\\dfrac{5}{6}-\\dfrac{1}{3}=?$', options: ['$\\dfrac13$', '$\\dfrac12$', '$\\dfrac23$', '$\\dfrac16$'], correctIndex: 1 },
    ],
    essays: [
      { prompt: 'Tính: $\\dfrac{3}{4}+\\dfrac{2}{5}$', solution: ['$\\dfrac{3}{4}=\\dfrac{15}{20},\\ \\dfrac{2}{5}=\\dfrac{8}{20}$', '$\\dfrac{15}{20}+\\dfrac{8}{20}=\\dfrac{23}{20}$'] },
      { prompt: 'Tính: $\\dfrac{7}{8}-\\dfrac{1}{6}$', solution: ['$\\dfrac{7}{8}=\\dfrac{21}{24},\\ \\dfrac{1}{6}=\\dfrac{4}{24}$', '$\\dfrac{21}{24}-\\dfrac{4}{24}=\\dfrac{17}{24}$'] },
      { prompt: 'Tính: $\\dfrac{3}{5}\\times\\dfrac{10}{9}$', solution: ['$\\dfrac{3}{5}\\times\\dfrac{10}{9}=\\dfrac{30}{45}=\\dfrac{2}{3}$'] },
      { prompt: 'Tính: $\\dfrac{5}{6}:\\dfrac{5}{12}$', solution: ['$\\dfrac{5}{6}:\\dfrac{5}{12}=\\dfrac{5}{6}\\times\\dfrac{12}{5}=\\dfrac{60}{30}=2$'] },
      {
        prompt: 'Một mảnh vườn, người ta trồng rau trên $\\dfrac{2}{5}$ diện tích, trồng hoa trên $\\dfrac{1}{4}$ diện tích, phần còn lại trồng cỏ. Hỏi phần trồng cỏ chiếm bao nhiêu phần diện tích mảnh vườn?',
        solution: [
          'Diện tích trồng rau và hoa: $\\dfrac{2}{5}+\\dfrac{1}{4}=\\dfrac{8}{20}+\\dfrac{5}{20}=\\dfrac{13}{20}$',
          'Diện tích trồng cỏ: $1-\\dfrac{13}{20}=\\dfrac{7}{20}$ (diện tích mảnh vườn)',
        ],
      },
    ],
    flashcards: [
      { front: 'Muốn cộng hai phân số khác mẫu số, ta làm gì trước?', back: 'Quy đồng mẫu số' },
      { front: '$\\dfrac{2}{3}\\times\\dfrac{3}{4}$', back: '$\\dfrac{1}{2}$' },
      { front: 'Muốn chia hai phân số ta làm gì?', back: 'Nhân phân số thứ nhất với phân số thứ hai đảo ngược' },
      { front: '$\\dfrac{1}{2}+\\dfrac{1}{2}$', back: '$1$' },
      { front: 'Phân số đảo ngược của $\\dfrac{3}{7}$', back: '$\\dfrac{7}{3}$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '$\\dfrac{1}{4}+\\dfrac{1}{8}=?$', options: ['$\\dfrac18$', '$\\dfrac12$', '$\\dfrac38$', '$\\dfrac14$'], correctIndex: 2 },
        { question: '$\\dfrac{5}{6}-\\dfrac{1}{2}=?$', options: ['$\\dfrac13$', '$\\dfrac23$', '$\\dfrac16$', '$\\dfrac26$'], correctIndex: 0 },
        { question: '$\\dfrac{2}{7}\\times\\dfrac{7}{4}=?$', options: ['$\\dfrac14$', '$\\dfrac27$', '1', '$\\dfrac12$'], correctIndex: 3 },
        { question: '$\\dfrac{3}{4}:\\dfrac{1}{2}=?$', options: ['$\\dfrac38$', '$\\dfrac32$', '$\\dfrac23$', '$\\dfrac12$'], correctIndex: 1 },
        { question: '$\\dfrac{1}{3}+\\dfrac{1}{6}=?$', options: ['$\\dfrac19$', '$\\dfrac13$', '$\\dfrac12$', '$\\dfrac23$'], correctIndex: 2 },
        { question: '$\\dfrac{9}{10}-\\dfrac{3}{5}=?$', options: ['$\\dfrac{3}{10}$', '$\\dfrac{6}{10}$', '$\\dfrac35$', '$\\dfrac12$'], correctIndex: 0 },
        { question: '$\\dfrac{4}{9}\\times\\dfrac{3}{8}=?$', options: ['$\\dfrac13$', '$\\dfrac29$', '$\\dfrac12$', '$\\dfrac16$'], correctIndex: 3 },
        { question: '$\\dfrac{2}{5}:\\dfrac{4}{15}=?$', options: ['$\\dfrac{3}{10}$', '$\\dfrac32$', '$\\dfrac23$', '$\\dfrac52$'], correctIndex: 1 },
        { question: '$\\dfrac{7}{12}+\\dfrac{1}{4}=?$', options: ['$\\dfrac23$', '$\\dfrac34$', '$\\dfrac56$', '$\\dfrac{7}{16}$'], correctIndex: 2 },
        { question: '$1-\\dfrac{3}{8}=?$', options: ['$\\dfrac58$', '$\\dfrac38$', '$\\dfrac18$', '$\\dfrac78$'], correctIndex: 0 },
        { question: '$\\dfrac{5}{9}\\times\\dfrac{9}{10}=?$', options: ['$\\dfrac19$', '$\\dfrac{5}{10}$', '$\\dfrac{9}{10}$', '$\\dfrac12$'], correctIndex: 3 },
        { question: '$\\dfrac{7}{8}:\\dfrac{7}{4}=?$', options: ['$\\dfrac72$', '$\\dfrac12$', '2', '$\\dfrac14$'], correctIndex: 1 },
        { question: '$\\dfrac{3}{4}+\\dfrac{1}{4}+\\dfrac{1}{2}=?$', options: ['1', '2', '$\\dfrac32$', '$\\dfrac12$'], correctIndex: 2 },
        {
          question: 'Một hình vuông có cạnh $\\dfrac{2}{3}$m. Diện tích hình vuông là bao nhiêu mét vuông?',
          options: ['$\\dfrac49$', '$\\dfrac23$', '$\\dfrac46$', '$\\dfrac29$'],
          correctIndex: 0,
        },
        {
          question: 'Tính giá trị biểu thức: $\\dfrac{2}{3}\\times\\dfrac{1}{2}+\\dfrac{1}{6}$',
          options: ['$\\dfrac13$', '$\\dfrac16$', '$\\dfrac23$', '$\\dfrac12$'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính: $\\dfrac{5}{6}+\\dfrac{1}{4}-\\dfrac{1}{3}$',
          solution: [
            'Quy đồng mẫu số chung 12: $\\dfrac{5}{6}=\\dfrac{10}{12},\\ \\dfrac{1}{4}=\\dfrac{3}{12},\\ \\dfrac{1}{3}=\\dfrac{4}{12}$',
            '$\\dfrac{10}{12}+\\dfrac{3}{12}-\\dfrac{4}{12}=\\dfrac{9}{12}=\\dfrac{3}{4}$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một bể nước, lần đầu người ta bơm vào $\\dfrac{2}{5}$ bể, lần sau bơm thêm $\\dfrac{1}{3}$ bể. Hỏi còn thiếu bao nhiêu phần bể nữa thì đầy?',
          solution: [
            'Sau hai lần bơm, bể có: $\\dfrac{2}{5}+\\dfrac{1}{3}=\\dfrac{6}{15}+\\dfrac{5}{15}=\\dfrac{11}{15}$ bể',
            'Phần bể còn thiếu: $1-\\dfrac{11}{15}=\\dfrac{4}{15}$ bể',
            'Vậy còn thiếu $\\dfrac{4}{15}$ bể nữa thì đầy',
          ],
        },
      ],
    },
  },

  'l5-bai-toan-ti-le': {
    title: 'Bài toán liên quan đến tỉ lệ',
    theory: {
      cards: [
        {
          title: 'Bài toán tỉ lệ thuận',
          formulas: ['\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2}', '5\\text{ máy}\\to3\\text{ ngày};\\quad 1\\text{ máy}\\to15\\text{ ngày}'],
          legend: ['Khi một đại lượng tăng (giảm) bao nhiêu lần thì đại lượng kia cũng tăng (giảm) bấy nhiêu lần, ta gọi đó là hai đại lượng tỉ lệ thuận'],
          note: 'Mẹo: dùng phương pháp "rút về đơn vị" — tìm giá trị ứng với 1 đơn vị trước, rồi nhân lên số đơn vị cần tìm.',
        },
        {
          title: 'Bài toán tỉ lệ nghịch',
          formulas: ['a_1\\times b_1 = a_2\\times b_2', '3\\text{ người}\\to8\\text{ ngày};\\quad 1\\text{ người}\\to24\\text{ ngày}'],
          legend: ['Khi một đại lượng tăng bao nhiêu lần thì đại lượng kia giảm bấy nhiêu lần (và ngược lại), ta gọi đó là hai đại lượng tỉ lệ nghịch'],
          note: 'Mẹo: với tỉ lệ nghịch, tích của hai đại lượng tương ứng luôn không đổi.',
        },
      ],
    },
    video: { caption: '00:00 / 10:05 — bai_toan_ti_le_baigiang.mp4' },
    quiz: [
      {
        question: '5 công nhân xây xong một bức tường trong 12 ngày. Hỏi 1 công nhân xây xong bức tường đó trong bao nhiêu ngày?',
        options: ['50 ngày', '60 ngày', '65 ngày', '55 ngày'],
        correctIndex: 1,
      },
      {
        question: 'Mua 3 quyển vở hết 24 000 đồng. Hỏi mua 5 quyển vở như thế hết bao nhiêu tiền?',
        options: ['32 000 đồng', '35 000 đồng', '38 000 đồng', '40 000 đồng'],
        correctIndex: 3,
      },
      {
        question: '2 người làm xong một công việc trong 9 ngày. Hỏi 3 người (cùng năng suất) làm xong công việc đó trong bao nhiêu ngày?',
        options: ['6 ngày', '9 ngày', '12 ngày', '3 ngày'],
        correctIndex: 0,
      },
      {
        question: 'Một ô tô chạy 100km hết 8 lít xăng. Hỏi chạy 250km thì hết bao nhiêu lít xăng?',
        options: ['16 lít', '18 lít', '20 lít', '25 lít'],
        correctIndex: 2,
      },
      {
        question: '4 máy cày trong 6 giờ cày xong một thửa ruộng. Hỏi 8 máy cày (cùng năng suất) cày xong thửa ruộng đó trong bao nhiêu giờ?',
        options: ['4 giờ', '3 giờ', '6 giờ', '2 giờ'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt: 'Mua 4kg gạo hết 68 000 đồng. Hỏi mua 7kg gạo như thế hết bao nhiêu tiền?',
        solution: ['Giá 1kg gạo: $68\\,000:4=17\\,000$ đồng', 'Giá 7kg gạo: $17\\,000\\times7=119\\,000$ đồng'],
      },
      {
        prompt: '6 người đắp xong một đoạn đường trong 15 ngày. Hỏi muốn đắp xong đoạn đường đó trong 9 ngày thì cần bao nhiêu người (cùng năng suất)?',
        solution: ['Tổng số ngày-công: $6\\times15=90$', 'Số người cần: $90:9=10$ người'],
      },
      {
        prompt: 'Một đội 8 công nhân dự định làm xong công việc trong 21 ngày. Hỏi nếu tăng thêm 4 công nhân (cùng năng suất) thì làm xong công việc trong bao nhiêu ngày?',
        solution: ['Tổng số ngày-công: $8\\times21=168$', 'Số công nhân mới: $8+4=12$ người', 'Số ngày cần: $168:12=14$ ngày'],
      },
      {
        prompt: 'Một xe máy đi 120km tiêu thụ hết 3 lít xăng. Hỏi đi 300km thì tiêu thụ hết bao nhiêu lít xăng?',
        solution: ['Số xăng cho 1km: $3:120=0,025$ lít', 'Số xăng cho 300km: $0,025\\times300=7,5$ lít'],
      },
      {
        prompt: '5 người thợ may xong 100 bộ quần áo trong 4 ngày (năng suất mỗi người như nhau). Hỏi muốn may xong 120 bộ quần áo cũng trong 4 ngày thì cần bao nhiêu người thợ?',
        solution: [
          'Số bộ quần áo tỉ lệ thuận với số người thợ (cùng số ngày)',
          '1 người may được: $100:5=20$ bộ trong 4 ngày',
          'Số người cần để may 120 bộ: $120:20=6$ người',
        ],
      },
    ],
    flashcards: [
      { front: 'Tỉ lệ thuận là gì?', back: 'Đại lượng này tăng (giảm) bao nhiêu lần thì đại lượng kia cũng tăng (giảm) bấy nhiêu lần' },
      { front: 'Tỉ lệ nghịch là gì?', back: 'Đại lượng này tăng bao nhiêu lần thì đại lượng kia giảm bấy nhiêu lần' },
      { front: 'Phương pháp giải toán tỉ lệ thường dùng', back: 'Phương pháp rút về đơn vị' },
      { front: 'Với tỉ lệ nghịch, tích hai đại lượng tương ứng thì...', back: 'không đổi' },
      { front: '3 người làm xong việc trong 8 ngày — số người và số ngày quan hệ tỉ lệ gì?', back: 'Tỉ lệ nghịch' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        {
          question: 'Mua 2 hộp bút chì hết 30 000 đồng. Hỏi mua 5 hộp hết bao nhiêu tiền?',
          options: ['60 000 đồng', '70 000 đồng', '75 000 đồng', '80 000 đồng'],
          correctIndex: 2,
        },
        {
          question: '3 máy bơm bơm nước trong 10 giờ thì đầy bể. Hỏi 1 máy bơm (cùng công suất) bơm trong bao nhiêu giờ thì đầy bể?',
          options: ['30 giờ', '20 giờ', '25 giờ', '15 giờ'],
          correctIndex: 0,
        },
        {
          question: 'Bài toán tỉ lệ thuận có đặc điểm gì?',
          options: [
            'Tích hai đại lượng không đổi',
            'Hiệu hai đại lượng không đổi',
            'Tổng hai đại lượng không đổi',
            'Tỉ số hai giá trị của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia',
          ],
          correctIndex: 3,
        },
        {
          question: '6 người làm cỏ xong một cánh đồng trong 5 ngày. Hỏi 10 người (cùng năng suất) làm xong trong bao nhiêu ngày?',
          options: ['4 ngày', '3 ngày', '2 ngày', '5 ngày'],
          correctIndex: 1,
        },
        {
          question: '4 công nhân xây xong một bức tường trong 18 ngày. Hỏi 9 công nhân (cùng năng suất) xây xong trong bao nhiêu ngày?',
          options: ['9 ngày', '10 ngày', '8 ngày', '6 ngày'],
          correctIndex: 2,
        },
        {
          question: 'Mua 6 quyển sách hết 90 000 đồng. Hỏi mua 9 quyển như thế hết bao nhiêu tiền?',
          options: ['135 000 đồng', '130 000 đồng', '120 000 đồng', '140 000 đồng'],
          correctIndex: 0,
        },
        {
          question: 'Một đội 12 người trồng xong rừng trong 8 ngày. Muốn trồng xong trong 6 ngày cần bao nhiêu người (cùng năng suất)?',
          options: ['10 người', '14 người', '15 người', '16 người'],
          correctIndex: 3,
        },
        {
          question: 'Một xe tải chở 3 chuyến thì hết 45 tấn hàng. Hỏi chở 7 chuyến như thế thì hết bao nhiêu tấn hàng?',
          options: ['100 tấn', '105 tấn', '110 tấn', '95 tấn'],
          correctIndex: 1,
        },
        {
          question: '20 công nhân xây xong ngôi nhà trong 15 ngày. Nếu chỉ có 12 công nhân (cùng năng suất) thì xây xong trong bao nhiêu ngày?',
          options: ['20 ngày', '18 ngày', '25 ngày', '30 ngày'],
          correctIndex: 2,
        },
        {
          question: 'Một bếp ăn dự trữ gạo đủ cho 50 người ăn trong 12 ngày. Nếu chỉ có 40 người ăn (suất ăn như cũ) thì số gạo đó đủ dùng trong bao nhiêu ngày?',
          options: ['15 ngày', '10 ngày', '9 ngày', '20 ngày'],
          correctIndex: 0,
        },
        {
          question: 'Một người đi xe đạp, 3 giờ đi được 36km. Hỏi 5 giờ (cùng vận tốc) đi được bao nhiêu ki-lô-mét?',
          options: ['48km', '54km', '56km', '60km'],
          correctIndex: 3,
        },
        {
          question: 'Với hai đại lượng tỉ lệ nghịch, khi đại lượng thứ nhất gấp lên 3 lần thì đại lượng thứ hai sẽ:',
          options: ['Tăng lên 3 lần', 'Giảm đi 3 lần', 'Không đổi', 'Tăng lên 9 lần'],
          correctIndex: 1,
        },
        {
          question: 'Với hai đại lượng tỉ lệ thuận, khi đại lượng thứ nhất giảm đi 4 lần thì đại lượng thứ hai sẽ:',
          options: ['Tăng lên 4 lần', 'Không đổi', 'Giảm đi 4 lần', 'Giảm đi 2 lần'],
          correctIndex: 2,
        },
        {
          question: '8 người thợ dệt xong 100m vải trong 5 ngày. Muốn dệt xong 100m vải đó trong 4 ngày thì cần bao nhiêu người thợ (cùng năng suất)?',
          options: ['10 người', '12 người', '9 người', '11 người'],
          correctIndex: 0,
        },
        {
          question: 'Một tổ 5 người làm xong 300 sản phẩm trong 6 ngày (năng suất mỗi người bằng nhau). Nếu tổ chỉ còn 3 người thì làm xong 300 sản phẩm đó trong bao nhiêu ngày?',
          options: ['8 ngày', '9 ngày', '12 ngày', '10 ngày'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). 5 người thợ xây xong một bức tường trong 8 ngày. Hỏi 4 người thợ (cùng năng suất) xây xong bức tường đó trong bao nhiêu ngày?',
          solution: ['Tổng số ngày-công cần: $5\\times8=40$ (người-ngày)', 'Số ngày 4 người cần làm: $40:4=10$ ngày'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một bếp ăn tập thể chuẩn bị đủ gạo cho 30 người ăn trong 24 ngày. Sau 4 ngày, có thêm 10 người đến ăn cùng (suất ăn như cũ, tổng cộng 40 người). Hỏi số gạo còn lại đủ dùng trong bao nhiêu ngày nữa?',
          solution: [
            'Tổng số gạo đủ dùng trong: $30\\times24=720$ (người-ngày)',
            'Số gạo đã dùng trong 4 ngày đầu: $30\\times4=120$ (người-ngày)',
            'Số gạo còn lại: $720-120=600$ (người-ngày)',
            'Số người ăn bây giờ: $30+10=40$ người',
            'Số gạo còn lại đủ dùng trong: $600:40=15$ ngày',
          ],
        },
      ],
    },
  },
}
