import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP4_PHAN_SO = {
  'l4-khai-niem-phan-so': {
    title: 'Khái niệm phân số, phân số bằng nhau',
    theory: {
      cards: [
        {
          title: 'Khái niệm phân số',
          formulas: ['\\dfrac{a}{b}\\ (b\\ne 0)', '\\dfrac{3}{4}'],
          legend: [
            '$a$ gọi là tử số, $b$ gọi là mẫu số',
            'Mẫu số cho biết hình (đơn vị) được chia thành bao nhiêu phần bằng nhau, tử số cho biết đã lấy bao nhiêu phần',
          ],
          note: 'Mẹo: khi đọc phân số $\\dfrac{3}{4}$, con đọc là "ba phần tư" — đọc tử số trước, mẫu số sau.',
        },
        {
          title: 'Phân số bằng nhau',
          formulas: ['\\dfrac{a}{b}=\\dfrac{a\\times n}{b\\times n}\\ (n\\ne0)', '\\dfrac{2}{3}=\\dfrac{4}{6}=\\dfrac{6}{9}'],
          legend: [
            'Nhân (hoặc chia) cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác 0 thì được phân số bằng phân số đã cho',
          ],
          note: 'Mẹo: muốn kiểm tra hai phân số có bằng nhau không, con nhân chéo: $\\dfrac{a}{b}=\\dfrac{c}{d}$ khi $a\\times d = b\\times c$.',
        },
      ],
    },
    video: { caption: '00:00 / 08:00 — khai_niem_phan_so_baigiang.mp4' },
    quiz: [
      { question: 'Phân số $\\dfrac{3}{5}$ có tử số là mấy?', options: ['3', '5', '8', '2'], correctIndex: 0 },
      { question: 'Một hình tròn chia thành 8 phần bằng nhau, tô màu 3 phần. Phân số chỉ phần tô màu là?', options: ['$\\dfrac{8}{3}$', '$\\dfrac{3}{8}$', '$\\dfrac{5}{8}$', '$\\dfrac{3}{5}$'], correctIndex: 1 },
      { question: 'Phân số nào bằng phân số $\\dfrac{2}{3}$?', options: ['$\\dfrac{3}{4}$', '$\\dfrac{2}{5}$', '$\\dfrac{4}{6}$', '$\\dfrac{5}{6}$'], correctIndex: 2 },
      { question: 'Phân số $\\dfrac{5}{5}$ có giá trị bằng?', options: ['0', '5', '10', '1'], correctIndex: 3 },
      { question: 'Kiểm tra bằng tích chéo: $\\dfrac{3}{4}$ và $\\dfrac{6}{8}$ có bằng nhau không?', options: ['Có, vì $3\\times8=4\\times6$', 'Không bằng nhau', 'Chỉ bằng nhau khi rút gọn', 'Không so sánh được'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Viết phân số chỉ phần tô màu: một hình chữ nhật chia thành 6 phần bằng nhau, tô màu 5 phần.', solution: ['Phân số chỉ phần tô màu là $\\dfrac{5}{6}$.'] },
      { prompt: 'Tìm phân số bằng phân số $\\dfrac{3}{7}$ có mẫu số là 21.', solution: ['Vì $21:7=3$ nên nhân cả tử và mẫu với 3.', '$\\dfrac{3}{7}=\\dfrac{3\\times3}{7\\times3}=\\dfrac{9}{21}$'] },
      { prompt: 'Kiểm tra xem $\\dfrac{4}{9}$ và $\\dfrac{12}{27}$ có bằng nhau không.', solution: ['Nhân chéo: $4\\times27=108$ và $9\\times12=108$', 'Hai tích bằng nhau nên $\\dfrac{4}{9}=\\dfrac{12}{27}$'] },
      { prompt: 'Viết ba phân số bằng phân số $\\dfrac{1}{2}$.', solution: ['Nhân tử và mẫu với 2, 3, 4: $\\dfrac{1}{2}=\\dfrac{2}{4}=\\dfrac{3}{6}=\\dfrac{4}{8}$'] },
      {
        prompt: 'Một lớp có 35 học sinh, trong đó có 20 học sinh nữ. Viết phân số chỉ số học sinh nữ so với cả lớp.',
        solution: ['Số học sinh nữ so với cả lớp là $\\dfrac{20}{35}$.'],
      },
    ],
    flashcards: [
      { front: 'Phân số $\\dfrac{a}{b}$, $a$ gọi là gì?', back: 'Tử số' },
      { front: 'Phân số $\\dfrac{a}{b}$, $b$ gọi là gì?', back: 'Mẫu số' },
      { front: 'Điều kiện của mẫu số', back: 'Mẫu số phải khác 0' },
      { front: 'Cách kiểm tra hai phân số bằng nhau', back: 'Nhân chéo: $\\dfrac{a}{b}=\\dfrac{c}{d}$ khi $a\\times d=b\\times c$' },
      { front: '$\\dfrac{5}{5}$ bằng bao nhiêu?', back: '1' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Phân số $\\dfrac{7}{9}$ có mẫu số là mấy?', options: ['7', '9', '16', '2'], correctIndex: 1 },
        { question: 'Một hình vuông chia thành 4 phần bằng nhau, tô màu 1 phần. Phân số chỉ phần tô màu là?', options: ['$\\dfrac{4}{1}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$'], correctIndex: 2 },
        { question: 'Phân số nào bằng $\\dfrac{3}{5}$?', options: ['$\\dfrac{5}{3}$', '$\\dfrac{3}{10}$', '$\\dfrac{6}{5}$', '$\\dfrac{6}{10}$'], correctIndex: 3 },
        { question: '$\\dfrac{0}{8}$ có giá trị bằng bao nhiêu?', options: ['0', '8', '1', 'Không xác định'], correctIndex: 0 },
        { question: 'Phân số $\\dfrac{9}{9}$ bằng số tự nhiên nào?', options: ['9', '1', '0', '18'], correctIndex: 1 },
        { question: 'Muốn được phân số bằng phân số đã cho, ta nhân (hoặc chia) cả tử và mẫu với số nào?', options: ['Hai số khác nhau', 'Số 0', 'Cùng một số tự nhiên khác 0', 'Số 1'], correctIndex: 2 },
        { question: 'Phân số nào KHÔNG bằng $\\dfrac{2}{5}$?', options: ['$\\dfrac{4}{10}$', '$\\dfrac{6}{15}$', '$\\dfrac{8}{20}$', '$\\dfrac{3}{8}$'], correctIndex: 3 },
        { question: 'Một hình tròn chia 10 phần bằng nhau, tô 7 phần. Phần không tô màu là phân số nào?', options: ['$\\dfrac{3}{10}$', '$\\dfrac{7}{10}$', '$\\dfrac{7}{3}$', '$\\dfrac{10}{7}$'], correctIndex: 0 },
        { question: 'Tìm $x$ để $\\dfrac{2}{3}=\\dfrac{x}{12}$.', options: ['6', '8', '9', '4'], correctIndex: 1 },
        { question: 'Phân số $\\dfrac{15}{20}$ bằng phân số nào sau đây (chưa rút gọn)?', options: ['$\\dfrac{20}{25}$', '$\\dfrac{15}{40}$', '$\\dfrac{30}{40}$', '$\\dfrac{30}{20}$'], correctIndex: 2 },
        { question: 'Kiểm tra tích chéo: $\\dfrac{5}{6}$ và $\\dfrac{10}{12}$ có bằng nhau không?', options: ['Không', 'Không xác định được', 'Chỉ bằng nhau khi nhân với 3', 'Có'], correctIndex: 3 },
        { question: 'Một túi có 24 viên bi, trong đó 9 viên màu đỏ. Phân số chỉ số bi đỏ so với cả túi là?', options: ['$\\dfrac{9}{24}$', '$\\dfrac{24}{9}$', '$\\dfrac{15}{24}$', '$\\dfrac{9}{15}$'], correctIndex: 0 },
        {
          question: 'Một băng giấy chia thành 12 phần bằng nhau, tô màu một số phần được phân số $\\dfrac{1}{3}$ số phần đã tô. Hỏi đã tô mấy phần?',
          options: ['3', '4', '6', '12'],
          correctIndex: 1,
        },
        {
          question: 'Tìm phân số bằng $\\dfrac{4}{7}$ có tử số là 20.',
          options: ['$\\dfrac{20}{28}$', '$\\dfrac{20}{14}$', '$\\dfrac{20}{35}$', '$\\dfrac{20}{21}$'],
          correctIndex: 2,
        },
        {
          question: 'Lớp 4A có 40 học sinh, trong đó 18 học sinh thích môn Toán. Phân số chỉ số học sinh thích Toán so với cả lớp, rút về dạng có mẫu số nhỏ nhất trong 4 đáp án dưới đây là?',
          options: ['$\\dfrac{9}{18}$', '$\\dfrac{9}{40}$', '$\\dfrac{18}{20}$', '$\\dfrac{9}{20}$'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Viết phân số chỉ phần tô màu và tìm hai phân số bằng nó: một băng giấy chia thành 10 phần bằng nhau, tô màu 4 phần.',
          solution: ['Phân số chỉ phần tô màu: $\\dfrac{4}{10}$', 'Rút gọn: $\\dfrac{4}{10}=\\dfrac{2}{5}$', 'Một phân số khác bằng nó: $\\dfrac{6}{15}$ (nhân tử và mẫu của $\\dfrac{2}{5}$ với 3)'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một vườn cây có 48 cây ăn quả, trong đó có 18 cây xoài. Viết phân số chỉ số cây xoài so với cả vườn, rồi rút gọn về phân số tối giản.',
          solution: ['Phân số chỉ số cây xoài so với cả vườn: $\\dfrac{18}{48}$', 'ƯCLN(18, 48) = 6', 'Rút gọn: $\\dfrac{18}{48}=\\dfrac{18:6}{48:6}=\\dfrac{3}{8}$'],
        },
      ],
    },
  },

  'l4-rut-gon-quy-dong': {
    title: 'Rút gọn phân số, quy đồng mẫu số',
    theory: {
      cards: [
        {
          title: 'Rút gọn phân số',
          formulas: ['\\dfrac{a}{b}=\\dfrac{a:n}{b:n}', '\\dfrac{18}{24}=\\dfrac{18:6}{24:6}=\\dfrac{3}{4}'],
          legend: [
            'Chia cả tử số và mẫu số cho cùng một số tự nhiên lớn hơn 1 (thường là ƯCLN)',
            'Phân số tối giản là phân số mà tử số và mẫu số không còn ước chung nào lớn hơn 1',
          ],
          note: 'Mẹo: để rút gọn nhanh về phân số tối giản ngay, con nên tìm ƯCLN của tử số và mẫu số rồi chia một lần thay vì rút gọn nhiều lần.',
        },
        {
          title: 'Quy đồng mẫu số hai phân số',
          formulas: ['\\dfrac{1}{3}\\ \\text{và}\\ \\dfrac{1}{4} \\to \\dfrac{4}{12}\\ \\text{và}\\ \\dfrac{3}{12}', '\\text{MSC} = \\text{BCNN(mẫu số)}'],
          legend: [
            'Tìm mẫu số chung (MSC) — thường là tích hai mẫu số hoặc BCNN của chúng',
            'Nhân cả tử và mẫu của mỗi phân số với thừa số phụ để có cùng mẫu số chung',
          ],
          note: 'Mẹo: nếu mẫu số này chia hết cho mẫu số kia (ví dụ 3 và 6) thì lấy luôn mẫu số lớn hơn làm mẫu số chung, không cần nhân hai mẫu số với nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — rut_gon_quy_dong_baigiang.mp4' },
    quiz: [
      { question: 'Rút gọn phân số $\\dfrac{12}{18}$.', options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$\\dfrac{5}{6}$', '$\\dfrac{3}{4}$'], correctIndex: 0 },
      { question: 'Quy đồng mẫu số hai phân số $\\dfrac{1}{2}$ và $\\dfrac{1}{5}$, mẫu số chung là?', options: ['7', '10', '5', '2'], correctIndex: 1 },
      { question: 'Phân số $\\dfrac{7}{11}$ đã là phân số tối giản chưa?', options: ['Chưa, còn rút gọn được', 'Chưa xác định được', 'Rồi, vì 7 và 11 không có ước chung nào ngoài 1', 'Không phải phân số'], correctIndex: 2 },
      { question: 'Quy đồng mẫu số $\\dfrac{2}{3}$ và $\\dfrac{5}{6}$ (6 chia hết cho 3). Mẫu số chung là?', options: ['18', '3', '12', '6'], correctIndex: 3 },
      { question: 'Rút gọn phân số $\\dfrac{25}{100}$.', options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{5}$', '$\\dfrac{3}{20}$', '$\\dfrac{2}{5}$'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Rút gọn phân số $\\dfrac{36}{48}$ về phân số tối giản.', solution: ['ƯCLN(36, 48) = 12', '$\\dfrac{36}{48}=\\dfrac{36:12}{48:12}=\\dfrac{3}{4}$'] },
      { prompt: 'Quy đồng mẫu số hai phân số $\\dfrac{2}{5}$ và $\\dfrac{3}{4}$.', solution: ['MSC = $5\\times4=20$', '$\\dfrac{2}{5}=\\dfrac{2\\times4}{5\\times4}=\\dfrac{8}{20}$', '$\\dfrac{3}{4}=\\dfrac{3\\times5}{4\\times5}=\\dfrac{15}{20}$'] },
      { prompt: 'Rút gọn phân số $\\dfrac{45}{60}$.', solution: ['ƯCLN(45, 60) = 15', '$\\dfrac{45}{60}=\\dfrac{45:15}{60:15}=\\dfrac{3}{4}$'] },
      {
        prompt: 'Quy đồng mẫu số ba phân số $\\dfrac{1}{2}$, $\\dfrac{1}{3}$, $\\dfrac{1}{4}$.',
        solution: ['MSC = 12', '$\\dfrac{1}{2}=\\dfrac{6}{12}$', '$\\dfrac{1}{3}=\\dfrac{4}{12}$', '$\\dfrac{1}{4}=\\dfrac{3}{12}$'],
      },
      {
        prompt: 'Một cửa hàng bán được $\\dfrac{18}{30}$ số bánh trong ngày. Rút gọn phân số này về dạng tối giản.',
        solution: ['ƯCLN(18, 30) = 6', '$\\dfrac{18}{30}=\\dfrac{18:6}{30:6}=\\dfrac{3}{5}$', 'Cửa hàng đã bán được $\\dfrac{3}{5}$ số bánh trong ngày.'],
      },
    ],
    flashcards: [
      { front: 'Phân số tối giản là gì?', back: 'Phân số mà tử số và mẫu số không còn ước chung nào lớn hơn 1' },
      { front: 'Rút gọn $\\dfrac{8}{12}$', back: '$\\dfrac{2}{3}$' },
      { front: 'MSC (mẫu số chung) là gì?', back: 'Một mẫu số mà cả hai (hoặc nhiều) phân số đều có thể quy đồng về đó' },
      { front: 'Quy đồng $\\dfrac{1}{2}$ và $\\dfrac{1}{3}$', back: '$\\dfrac{3}{6}$ và $\\dfrac{2}{6}$' },
      { front: 'Cách rút gọn nhanh nhất', back: 'Chia tử và mẫu cho ƯCLN của chúng' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Rút gọn phân số $\\dfrac{16}{24}$.', options: ['$\\dfrac{3}{4}$', '$\\dfrac{2}{3}$', '$\\dfrac{5}{6}$', '$\\dfrac{3}{2}$'], correctIndex: 1 },
        { question: 'Rút gọn phân số $\\dfrac{21}{35}$.', options: ['$\\dfrac{5}{3}$', '$\\dfrac{7}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{3}{7}$'], correctIndex: 2 },
        { question: 'Quy đồng mẫu số $\\dfrac{1}{4}$ và $\\dfrac{1}{6}$, mẫu số chung nhỏ nhất là?', options: ['24', '10', '6', '12'], correctIndex: 3 },
        { question: 'Quy đồng $\\dfrac{3}{8}$ và $\\dfrac{1}{2}$ (8 chia hết cho 2), mẫu số chung là?', options: ['8', '16', '2', '10'], correctIndex: 0 },
        { question: 'Phân số nào là phân số tối giản?', options: ['$\\dfrac{4}{8}$', '$\\dfrac{5}{9}$', '$\\dfrac{6}{10}$', '$\\dfrac{9}{12}$'], correctIndex: 1 },
        { question: 'Rút gọn $\\dfrac{50}{75}$.', options: ['$\\dfrac{1}{3}$', '$\\dfrac{3}{5}$', '$\\dfrac{2}{3}$', '$\\dfrac{4}{5}$'], correctIndex: 2 },
        { question: 'Quy đồng $\\dfrac{2}{3}$ và $\\dfrac{4}{5}$, phân số $\\dfrac{2}{3}$ sau khi quy đồng là?', options: ['$\\dfrac{8}{15}$', '$\\dfrac{6}{15}$', '$\\dfrac{12}{15}$', '$\\dfrac{10}{15}$'], correctIndex: 3 },
        { question: 'ƯCLN của 24 và 36 là bao nhiêu?', options: ['12', '6', '8', '18'], correctIndex: 0 },
        { question: 'Rút gọn $\\dfrac{27}{81}$.', options: ['$\\dfrac{2}{9}$', '$\\dfrac{1}{3}$', '$\\dfrac{5}{9}$', '$\\dfrac{1}{9}$'], correctIndex: 1 },
        { question: 'Quy đồng mẫu số $\\dfrac{5}{6}$ và $\\dfrac{1}{4}$, mẫu số chung nhỏ nhất là?', options: ['24', '10', '12', '6'], correctIndex: 2 },
        { question: 'Phân số $\\dfrac{14}{21}$ rút gọn về tối giản là?', options: ['$\\dfrac{7}{3}$', '$\\dfrac{2}{7}$', '$\\dfrac{5}{6}$', '$\\dfrac{2}{3}$'], correctIndex: 3 },
        { question: 'Quy đồng $\\dfrac{7}{10}$ và $\\dfrac{3}{100}$ (100 chia hết cho 10), mẫu số chung là?', options: ['100', '1000', '10', '110'], correctIndex: 0 },
        {
          question: 'Một phân số sau khi rút gọn cho 5 thì được $\\dfrac{4}{7}$. Phân số ban đầu là?',
          options: ['$\\dfrac{4}{35}$', '$\\dfrac{20}{35}$', '$\\dfrac{20}{7}$', '$\\dfrac{9}{12}$'],
          correctIndex: 1,
        },
        {
          question: 'Quy đồng mẫu số ba phân số $\\dfrac{1}{2}$, $\\dfrac{2}{3}$, $\\dfrac{5}{6}$ với mẫu số chung là 6, phân số $\\dfrac{1}{2}$ trở thành?',
          options: ['$\\dfrac{2}{6}$', '$\\dfrac{4}{6}$', '$\\dfrac{3}{6}$', '$\\dfrac{1}{6}$'],
          correctIndex: 2,
        },
        {
          question: 'Một đội có 60 người, trong đó 24 người là nữ. Rút gọn phân số chỉ số người nữ so với cả đội về dạng tối giản.',
          options: ['$\\dfrac{3}{5}$', '$\\dfrac{1}{5}$', '$\\dfrac{3}{10}$', '$\\dfrac{2}{5}$'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Rút gọn phân số $\\dfrac{54}{72}$ về phân số tối giản.',
          solution: ['ƯCLN(54, 72) = 18', '$\\dfrac{54}{72}=\\dfrac{54:18}{72:18}=\\dfrac{3}{4}$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Quy đồng mẫu số ba phân số $\\dfrac{1}{2}$, $\\dfrac{1}{3}$, $\\dfrac{5}{6}$ rồi sắp xếp theo thứ tự từ bé đến lớn.',
          solution: [
            'MSC = 6 (vì 6 chia hết cho cả 2 và 3)',
            '$\\dfrac{1}{2}=\\dfrac{3}{6}$; $\\dfrac{1}{3}=\\dfrac{2}{6}$; $\\dfrac{5}{6}$ giữ nguyên',
            'So sánh tử số: $2<3<5$ nên $\\dfrac{2}{6}<\\dfrac{3}{6}<\\dfrac{5}{6}$',
            'Vậy thứ tự tăng dần: $\\dfrac{1}{3} < \\dfrac{1}{2} < \\dfrac{5}{6}$',
          ],
        },
      ],
    },
  },

  'l4-so-sanh-phan-so': {
    title: 'So sánh hai phân số',
    theory: {
      cards: [
        {
          title: 'So sánh hai phân số cùng mẫu số',
          formulas: ['\\dfrac{a}{c}\\ \\text{và}\\ \\dfrac{b}{c}: a>b \\Rightarrow \\dfrac{a}{c}>\\dfrac{b}{c}', '\\dfrac{5}{7}>\\dfrac{3}{7}'],
          legend: ['Hai phân số cùng mẫu số: phân số nào có tử số lớn hơn thì phân số đó lớn hơn'],
          note: 'Mẹo: khi hai phân số đã cùng mẫu số, con chỉ cần so sánh tử số như so sánh hai số tự nhiên bình thường.',
        },
        {
          title: 'So sánh hai phân số khác mẫu số',
          formulas: ['\\dfrac{2}{3}\\ \\text{và}\\ \\dfrac{3}{4} \\to \\dfrac{8}{12}\\ \\text{và}\\ \\dfrac{9}{12} \\to \\dfrac{2}{3}<\\dfrac{3}{4}', '\\dfrac{a}{b}\\ \\text{và}\\ \\dfrac{c}{d}: a\\times d \\lessgtr b\\times c'],
          legend: [
            'Cách 1: quy đồng mẫu số rồi so sánh tử số',
            'Cách 2: so sánh bằng tích chéo — $a\\times d$ so với $b\\times c$',
          ],
          note: 'Mẹo: nếu hai phân số cùng tử số, phân số nào có mẫu số bé hơn thì phân số đó lớn hơn, ví dụ $\\dfrac{3}{5}>\\dfrac{3}{8}$.',
        },
      ],
    },
    video: { caption: '00:00 / 08:30 — so_sanh_phan_so_baigiang.mp4' },
    quiz: [
      { question: 'So sánh $\\dfrac{5}{9}$ và $\\dfrac{7}{9}$.', options: ['$\\dfrac{5}{9}<\\dfrac{7}{9}$', '$\\dfrac{5}{9}>\\dfrac{7}{9}$', 'Bằng nhau', 'Không so sánh được'], correctIndex: 0 },
      { question: 'So sánh $\\dfrac{2}{3}$ và $\\dfrac{3}{4}$.', options: ['$\\dfrac{2}{3}>\\dfrac{3}{4}$', '$\\dfrac{2}{3}<\\dfrac{3}{4}$', 'Bằng nhau', 'Không so sánh được'], correctIndex: 1 },
      { question: 'So sánh hai phân số cùng tử số $\\dfrac{4}{5}$ và $\\dfrac{4}{9}$.', options: ['$\\dfrac{4}{5}<\\dfrac{4}{9}$', 'Bằng nhau', '$\\dfrac{4}{5}>\\dfrac{4}{9}$', 'Không xác định'], correctIndex: 2 },
      { question: 'Phân số nào lớn hơn 1?', options: ['$\\dfrac{5}{7}$', '$\\dfrac{5}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{7}{5}$'], correctIndex: 3 },
      { question: 'So sánh $\\dfrac{3}{4}$ và $\\dfrac{6}{8}$.', options: ['Bằng nhau', '$\\dfrac{3}{4}<\\dfrac{6}{8}$', '$\\dfrac{3}{4}>\\dfrac{6}{8}$', 'Không so sánh được'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'So sánh $\\dfrac{3}{8}$ và $\\dfrac{5}{8}$.', solution: ['Hai phân số cùng mẫu số 8, so sánh tử số: $3<5$', 'Vậy $\\dfrac{3}{8}<\\dfrac{5}{8}$'] },
      {
        prompt: 'So sánh $\\dfrac{3}{4}$ và $\\dfrac{5}{6}$.',
        solution: ['Quy đồng mẫu số 12: $\\dfrac{3}{4}=\\dfrac{9}{12}$, $\\dfrac{5}{6}=\\dfrac{10}{12}$', 'So sánh tử số: $9<10$', 'Vậy $\\dfrac{3}{4}<\\dfrac{5}{6}$'],
      },
      {
        prompt: 'So sánh $\\dfrac{7}{10}$ và $\\dfrac{2}{3}$ bằng cách tích chéo.',
        solution: ['$7\\times3=21$ và $10\\times2=20$', 'Vì $21>20$ nên $\\dfrac{7}{10}>\\dfrac{2}{3}$'],
      },
      {
        prompt: 'Sắp xếp các phân số $\\dfrac{1}{2}, \\dfrac{2}{5}, \\dfrac{3}{4}$ theo thứ tự tăng dần.',
        solution: ['Quy đồng mẫu số 20: $\\dfrac{1}{2}=\\dfrac{10}{20}$, $\\dfrac{2}{5}=\\dfrac{8}{20}$, $\\dfrac{3}{4}=\\dfrac{15}{20}$', 'So sánh tử số: $8<10<15$', 'Vậy $\\dfrac{2}{5}<\\dfrac{1}{2}<\\dfrac{3}{4}$'],
      },
      {
        prompt: 'Hai bạn Lan và Huệ cùng ăn một cái bánh như nhau. Lan ăn $\\dfrac{2}{5}$ cái bánh, Huệ ăn $\\dfrac{3}{7}$ cái bánh. Ai ăn nhiều hơn?',
        solution: ['So sánh $\\dfrac{2}{5}$ và $\\dfrac{3}{7}$ bằng tích chéo: $2\\times7=14$ và $5\\times3=15$', 'Vì $14<15$ nên $\\dfrac{2}{5}<\\dfrac{3}{7}$', 'Vậy bạn Huệ ăn nhiều bánh hơn.'],
      },
    ],
    flashcards: [
      { front: 'So sánh hai phân số cùng mẫu số', back: 'Phân số nào có tử số lớn hơn thì lớn hơn' },
      { front: 'So sánh hai phân số cùng tử số', back: 'Phân số nào có mẫu số bé hơn thì lớn hơn' },
      { front: 'Cách so sánh hai phân số khác mẫu số', back: 'Quy đồng mẫu số rồi so sánh tử số, hoặc so sánh tích chéo' },
      { front: 'Phân số nào lớn hơn 1?', back: 'Phân số có tử số lớn hơn mẫu số' },
      { front: '$\\dfrac{3}{4}$ so với $\\dfrac{6}{8}$', back: 'Bằng nhau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'So sánh $\\dfrac{2}{9}$ và $\\dfrac{5}{9}$.', options: ['$\\dfrac{2}{9}>\\dfrac{5}{9}$', '$\\dfrac{2}{9}<\\dfrac{5}{9}$', 'Bằng nhau', 'Không so sánh được'], correctIndex: 1 },
        { question: 'So sánh $\\dfrac{5}{6}$ và $\\dfrac{2}{3}$.', options: ['$\\dfrac{5}{6}<\\dfrac{2}{3}$', 'Bằng nhau', '$\\dfrac{5}{6}>\\dfrac{2}{3}$', 'Không xác định'], correctIndex: 2 },
        { question: 'So sánh $\\dfrac{3}{7}$ và $\\dfrac{3}{5}$.', options: ['$\\dfrac{3}{7}>\\dfrac{3}{5}$', 'Bằng nhau', 'Không so sánh được', '$\\dfrac{3}{7}<\\dfrac{3}{5}$'], correctIndex: 3 },
        { question: 'Phân số nào bé hơn 1?', options: ['$\\dfrac{4}{7}$', '$\\dfrac{7}{4}$', '$\\dfrac{9}{9}$', '$\\dfrac{8}{5}$'], correctIndex: 0 },
        { question: 'So sánh $\\dfrac{5}{8}$ và $\\dfrac{7}{12}$.', options: ['$\\dfrac{5}{8}<\\dfrac{7}{12}$', '$\\dfrac{5}{8}>\\dfrac{7}{12}$', 'Bằng nhau', 'Không xác định'], correctIndex: 1 },
        { question: 'So sánh $\\dfrac{9}{10}$ và $\\dfrac{4}{5}$.', options: ['$\\dfrac{9}{10}<\\dfrac{4}{5}$', 'Bằng nhau', '$\\dfrac{9}{10}>\\dfrac{4}{5}$', 'Không xác định'], correctIndex: 2 },
        { question: 'Phân số nào lớn nhất trong ba phân số $\\dfrac{1}{3}, \\dfrac{1}{4}, \\dfrac{1}{2}$?', options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{4}$', 'Bằng nhau cả', '$\\dfrac{1}{2}$'], correctIndex: 3 },
        { question: 'So sánh $\\dfrac{6}{7}$ và $1$.', options: ['$\\dfrac{6}{7}<1$', '$\\dfrac{6}{7}>1$', '$\\dfrac{6}{7}=1$', 'Không xác định'], correctIndex: 0 },
        { question: 'So sánh $\\dfrac{5}{4}$ và $1$.', options: ['$\\dfrac{5}{4}<1$', '$\\dfrac{5}{4}>1$', '$\\dfrac{5}{4}=1$', 'Không xác định'], correctIndex: 1 },
        { question: 'So sánh $\\dfrac{11}{15}$ và $\\dfrac{3}{5}$.', options: ['$\\dfrac{11}{15}<\\dfrac{3}{5}$', 'Bằng nhau', '$\\dfrac{11}{15}>\\dfrac{3}{5}$', 'Không xác định'], correctIndex: 2 },
        { question: 'Phân số nào bé nhất trong ba phân số $\\dfrac{2}{3}, \\dfrac{2}{5}, \\dfrac{2}{7}$?', options: ['$\\dfrac{2}{3}$', '$\\dfrac{2}{5}$', 'Bằng nhau cả', '$\\dfrac{2}{7}$'], correctIndex: 3 },
        { question: 'So sánh $\\dfrac{7}{9}$ và $\\dfrac{8}{9}$.', options: ['$\\dfrac{7}{9}<\\dfrac{8}{9}$', '$\\dfrac{7}{9}>\\dfrac{8}{9}$', 'Bằng nhau', 'Không xác định'], correctIndex: 0 },
        {
          question: 'Ba bạn ăn cùng loại bánh giống nhau: Nam ăn $\\dfrac{3}{8}$ cái, Bình ăn $\\dfrac{1}{2}$ cái, Cường ăn $\\dfrac{5}{8}$ cái. Bạn nào ăn ít nhất?',
          options: ['Bình', 'Nam', 'Cường', 'Bằng nhau cả'],
          correctIndex: 1,
        },
        {
          question: 'Sắp xếp $\\dfrac{3}{5}, \\dfrac{7}{10}, \\dfrac{1}{2}$ theo thứ tự giảm dần, phân số đứng đầu là?',
          options: ['$\\dfrac{3}{5}$', '$\\dfrac{1}{2}$', '$\\dfrac{7}{10}$', 'Bằng nhau cả'],
          correctIndex: 2,
        },
        {
          question: 'Một đội bóng thắng $\\dfrac{5}{8}$ số trận, đội khác thắng $\\dfrac{7}{12}$ số trận (trên cùng tổng số trận). Đội nào thắng tỉ lệ cao hơn?',
          options: ['Đội thắng $\\dfrac{7}{12}$', 'Bằng nhau', 'Không so sánh được', 'Đội thắng $\\dfrac{5}{8}$'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). So sánh $\\dfrac{4}{5}$ và $\\dfrac{7}{9}$.',
          solution: ['Quy đồng mẫu số 45: $\\dfrac{4}{5}=\\dfrac{36}{45}$, $\\dfrac{7}{9}=\\dfrac{35}{45}$', 'So sánh tử số: $36>35$', 'Vậy $\\dfrac{4}{5}>\\dfrac{7}{9}$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Ba lớp 4A, 4B, 4C có số học sinh giỏi lần lượt là $\\dfrac{3}{5}$, $\\dfrac{5}{8}$, $\\dfrac{7}{10}$ tổng số học sinh mỗi lớp. Hỏi lớp nào có tỉ lệ học sinh giỏi cao nhất?',
          solution: [
            'Quy đồng mẫu số 40: $\\dfrac{3}{5}=\\dfrac{24}{40}$; $\\dfrac{5}{8}=\\dfrac{25}{40}$; $\\dfrac{7}{10}=\\dfrac{28}{40}$',
            'So sánh tử số: $28>25>24$',
            'Vậy lớp 4C có tỉ lệ học sinh giỏi cao nhất.',
          ],
        },
      ],
    },
  },

  'l4-phep-tinh-phan-so': {
    title: 'Cộng, trừ, nhân, chia phân số',
    theory: {
      cards: [
        {
          title: 'Cộng, trừ phân số',
          formulas: ['\\dfrac{a}{c}+\\dfrac{b}{c}=\\dfrac{a+b}{c}', '\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{a\\times d + b\\times c}{b\\times d}'],
          legend: [
            'Cùng mẫu số: cộng (trừ) tử số, giữ nguyên mẫu số',
            'Khác mẫu số: quy đồng mẫu số rồi cộng (trừ) như bình thường',
          ],
          note: 'Mẹo: sau khi cộng trừ xong, con nhớ rút gọn kết quả về phân số tối giản nếu có thể.',
        },
        {
          title: 'Nhân, chia phân số',
          formulas: ['\\dfrac{a}{b}\\times\\dfrac{c}{d}=\\dfrac{a\\times c}{b\\times d}', '\\dfrac{a}{b}:\\dfrac{c}{d}=\\dfrac{a}{b}\\times\\dfrac{d}{c}'],
          legend: [
            'Nhân hai phân số: nhân tử với tử, mẫu với mẫu',
            'Chia hai phân số: nhân phân số thứ nhất với phân số đảo ngược của phân số thứ hai',
          ],
          note: 'Mẹo: phân số đảo ngược của $\\dfrac{c}{d}$ ($c\\ne0$) là $\\dfrac{d}{c}$ — chỉ cần đổi chỗ tử và mẫu cho nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 11:30 — phep_tinh_phan_so_baigiang.mp4' },
    quiz: [
      { question: '$\\dfrac{2}{7}+\\dfrac{3}{7}=?$', options: ['$\\dfrac{5}{7}$', '$\\dfrac{5}{14}$', '$\\dfrac{6}{7}$', '$\\dfrac{1}{7}$'], correctIndex: 0 },
      { question: '$\\dfrac{3}{4}-\\dfrac{1}{4}=?$', options: ['$\\dfrac{3}{8}$', '$\\dfrac{1}{2}$', '$\\dfrac{1}{8}$', '$\\dfrac{1}{4}$'], correctIndex: 1 },
      { question: '$\\dfrac{1}{2}\\times\\dfrac{2}{3}=?$', options: ['$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{6}$'], correctIndex: 2 },
      { question: '$\\dfrac{3}{5}:\\dfrac{2}{5}=?$', options: ['$\\dfrac{2}{3}$', '$\\dfrac{6}{25}$', '$\\dfrac{5}{5}$', '$\\dfrac{3}{2}$'], correctIndex: 3 },
      { question: '$\\dfrac{1}{3}+\\dfrac{1}{6}=?$', options: ['$\\dfrac{1}{2}$', '$\\dfrac{2}{9}$', '$\\dfrac{1}{9}$', '$\\dfrac{2}{6}$'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính: $\\dfrac{2}{5}+\\dfrac{1}{3}$.', solution: ['MSC = 15: $\\dfrac{2}{5}=\\dfrac{6}{15}$, $\\dfrac{1}{3}=\\dfrac{5}{15}$', '$\\dfrac{6}{15}+\\dfrac{5}{15}=\\dfrac{11}{15}$'] },
      { prompt: 'Tính: $\\dfrac{5}{6}-\\dfrac{1}{4}$.', solution: ['MSC = 12: $\\dfrac{5}{6}=\\dfrac{10}{12}$, $\\dfrac{1}{4}=\\dfrac{3}{12}$', '$\\dfrac{10}{12}-\\dfrac{3}{12}=\\dfrac{7}{12}$'] },
      { prompt: 'Tính: $\\dfrac{3}{4}\\times\\dfrac{2}{9}$.', solution: ['$\\dfrac{3}{4}\\times\\dfrac{2}{9}=\\dfrac{3\\times2}{4\\times9}=\\dfrac{6}{36}$', 'Rút gọn: $\\dfrac{6}{36}=\\dfrac{1}{6}$'] },
      { prompt: 'Tính: $\\dfrac{4}{5}:\\dfrac{2}{3}$.', solution: ['$\\dfrac{4}{5}:\\dfrac{2}{3}=\\dfrac{4}{5}\\times\\dfrac{3}{2}=\\dfrac{12}{10}$', 'Rút gọn: $\\dfrac{12}{10}=\\dfrac{6}{5}$'] },
      {
        prompt: 'Một mảnh vườn, người ta trồng rau trên $\\dfrac{2}{5}$ diện tích, trồng hoa trên $\\dfrac{1}{4}$ diện tích còn lại đất trống. Hỏi rau và hoa chiếm bao nhiêu phần diện tích vườn?',
        solution: ['MSC = 20: $\\dfrac{2}{5}=\\dfrac{8}{20}$, $\\dfrac{1}{4}=\\dfrac{5}{20}$', '$\\dfrac{8}{20}+\\dfrac{5}{20}=\\dfrac{13}{20}$', 'Rau và hoa chiếm $\\dfrac{13}{20}$ diện tích vườn.'],
      },
    ],
    flashcards: [
      { front: 'Cộng hai phân số cùng mẫu số', back: 'Cộng tử số, giữ nguyên mẫu số' },
      { front: 'Nhân hai phân số', back: 'Nhân tử với tử, mẫu với mẫu' },
      { front: 'Chia hai phân số', back: 'Nhân phân số thứ nhất với phân số đảo ngược của phân số thứ hai' },
      { front: 'Phân số đảo ngược của $\\dfrac{3}{5}$', back: '$\\dfrac{5}{3}$' },
      { front: '$\\dfrac{1}{2}+\\dfrac{1}{2}$', back: '1' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '$\\dfrac{3}{8}+\\dfrac{2}{8}=?$', options: ['$\\dfrac{5}{16}$', '$\\dfrac{5}{8}$', '$\\dfrac{6}{8}$', '$\\dfrac{1}{8}$'], correctIndex: 1 },
        { question: '$\\dfrac{7}{9}-\\dfrac{2}{9}=?$', options: ['$\\dfrac{9}{9}$', '$\\dfrac{5}{18}$', '$\\dfrac{5}{9}$', '$\\dfrac{4}{9}$'], correctIndex: 2 },
        { question: '$\\dfrac{1}{4}+\\dfrac{1}{2}=?$', options: ['$\\dfrac{2}{6}$', '$\\dfrac{1}{4}$', '$\\dfrac{2}{4}$', '$\\dfrac{3}{4}$'], correctIndex: 3 },
        { question: '$\\dfrac{5}{6}-\\dfrac{1}{3}=?$', options: ['$\\dfrac{1}{2}$', '$\\dfrac{4}{6}$', '$\\dfrac{4}{3}$', '$\\dfrac{1}{3}$'], correctIndex: 0 },
        { question: '$\\dfrac{2}{3}\\times\\dfrac{3}{4}=?$', options: ['$\\dfrac{3}{7}$', '$\\dfrac{1}{2}$', '$\\dfrac{5}{7}$', '$\\dfrac{6}{7}$'], correctIndex: 1 },
        { question: '$\\dfrac{5}{7}\\times\\dfrac{2}{3}=?$', options: ['$\\dfrac{7}{10}$', '$\\dfrac{10}{10}$', '$\\dfrac{10}{21}$', '$\\dfrac{7}{21}$'], correctIndex: 2 },
        { question: '$\\dfrac{2}{3}:\\dfrac{1}{6}=?$', options: ['3', '2', '6', '4'], correctIndex: 3 },
        { question: '$\\dfrac{5}{8}:\\dfrac{5}{4}=?$', options: ['$\\dfrac{1}{2}$', '$\\dfrac{25}{32}$', '2', '$\\dfrac{1}{4}$'], correctIndex: 0 },
        { question: '$\\dfrac{3}{10}+\\dfrac{1}{5}=?$', options: ['$\\dfrac{4}{15}$', '$\\dfrac{1}{2}$', '$\\dfrac{4}{10}$', '$\\dfrac{3}{15}$'], correctIndex: 1 },
        { question: '$1-\\dfrac{3}{8}=?$', options: ['$\\dfrac{3}{8}$', '$\\dfrac{2}{8}$', '$\\dfrac{5}{8}$', '$\\dfrac{4}{8}$'], correctIndex: 2 },
        { question: '$\\dfrac{4}{9}\\times\\dfrac{3}{2}=?$', options: ['$\\dfrac{7}{18}$', '$\\dfrac{7}{11}$', '$\\dfrac{5}{6}$', '$\\dfrac{2}{3}$'], correctIndex: 3 },
        { question: '$\\dfrac{7}{8}:\\dfrac{7}{8}=?$', options: ['1', '0', '2', '$\\dfrac{49}{64}$'], correctIndex: 0 },
        {
          question: 'Một bể nước, lần đầu bơm được $\\dfrac{2}{5}$ bể, lần sau bơm thêm $\\dfrac{1}{3}$ bể. Hỏi cả hai lần bơm được bao nhiêu phần bể?',
          options: ['$\\dfrac{3}{8}$', '$\\dfrac{11}{15}$', '$\\dfrac{2}{15}$', '$\\dfrac{13}{15}$'],
          correctIndex: 1,
        },
        {
          question: 'Một tấm vải dài $\\dfrac{5}{6}$ m, đã cắt đi $\\dfrac{1}{2}$ m để may túi. Hỏi tấm vải còn lại bao nhiêu mét?',
          options: ['$\\dfrac{2}{3}$ m', '$\\dfrac{1}{6}$ m', '$\\dfrac{1}{3}$ m', '$\\dfrac{5}{6}$ m'],
          correctIndex: 2,
        },
        {
          question: 'Một hình chữ nhật có chiều dài $\\dfrac{4}{5}$ m, chiều rộng $\\dfrac{1}{2}$ m. Diện tích hình chữ nhật là bao nhiêu mét vuông?',
          options: ['$\\dfrac{5}{7}$ m²', '$\\dfrac{4}{5}$ m²', '$\\dfrac{9}{10}$ m²', '$\\dfrac{4}{10}$ m² (= $\\dfrac{2}{5}$ m²)'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tính: $\\dfrac{3}{4}+\\dfrac{2}{5}-\\dfrac{1}{2}$.',
          solution: [
            'MSC = 20: $\\dfrac{3}{4}=\\dfrac{15}{20}$, $\\dfrac{2}{5}=\\dfrac{8}{20}$, $\\dfrac{1}{2}=\\dfrac{10}{20}$',
            '$\\dfrac{15}{20}+\\dfrac{8}{20}-\\dfrac{10}{20}=\\dfrac{13}{20}$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một kho gạo, ngày đầu bán $\\dfrac{2}{7}$ số gạo, ngày sau bán $\\dfrac{1}{3}$ số gạo còn lại (so với ban đầu là $\\dfrac{1}{3}$ của phần còn lại sau ngày đầu). Biết kho có 210 kg gạo. Hỏi sau hai ngày kho còn lại bao nhiêu ki-lô-gam gạo?',
          solution: [
            'Ngày đầu bán: $210\\times\\dfrac{2}{7}=60$ kg, còn lại $210-60=150$ kg',
            'Ngày sau bán $\\dfrac{1}{3}$ của 150 kg: $150\\times\\dfrac{1}{3}=50$ kg',
            'Còn lại sau hai ngày: $150-50=100$ kg',
          ],
        },
      ],
    },
  },
}
