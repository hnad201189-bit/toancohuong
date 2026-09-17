import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP4_HINH_HOC_DO_LUONG = {
  'l4-goc-hai-duong-thang': {
    title: 'Góc nhọn, góc tù, góc bẹt; hai đường thẳng vuông góc, song song',
    theory: {
      cards: [
        {
          title: 'Các loại góc',
          formulas: ['\\text{Góc nhọn} < 90^\\circ', '\\text{Góc vuông} = 90^\\circ', '90^\\circ < \\text{Góc tù} < 180^\\circ', '\\text{Góc bẹt} = 180^\\circ'],
          legend: [
            'So với góc vuông (dùng ê ke để kiểm tra): góc nhọn bé hơn, góc tù lớn hơn',
            'Góc bẹt là góc có hai cạnh nằm thẳng hàng, bằng hai góc vuông',
          ],
          note: 'Mẹo: dùng ê ke áp vào góc cần kiểm tra — nếu góc bé hơn góc vuông của ê ke thì đó là góc nhọn, nếu lớn hơn thì là góc tù.',
        },
        {
          title: 'Hai đường thẳng vuông góc, hai đường thẳng song song',
          formulas: ['AB \\perp CD', 'MN \\parallel PQ'],
          legend: [
            'Hai đường thẳng vuông góc tạo thành 4 góc vuông tại giao điểm',
            'Hai đường thẳng song song thì không bao giờ cắt nhau, dù kéo dài mãi về hai phía',
          ],
          note: 'Mẹo: muốn kiểm tra hai đường thẳng có vuông góc không, con đặt ê ke sao cho một cạnh góc vuông trùng với một đường thẳng, nếu cạnh kia trùng với đường thẳng còn lại thì chúng vuông góc.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — goc_va_hai_duong_thang_baigiang.mp4' },
    quiz: [
      { question: 'Góc có số đo bé hơn 90° gọi là góc gì?', options: ['Góc nhọn', 'Góc tù', 'Góc vuông', 'Góc bẹt'], correctIndex: 0 },
      { question: 'Góc bẹt có số đo bằng bao nhiêu độ?', options: ['90°', '180°', '360°', '120°'], correctIndex: 1 },
      { question: 'Hai đường thẳng vuông góc tạo với nhau góc bao nhiêu độ?', options: ['180°', '60°', '90°', '45°'], correctIndex: 2 },
      { question: 'Hai đường thẳng song song thì như thế nào?', options: ['Luôn cắt nhau tại 1 điểm', 'Luôn vuông góc với nhau', 'Trùng nhau', 'Không bao giờ cắt nhau'], correctIndex: 3 },
      { question: 'Góc có số đo lớn hơn 90° và bé hơn 180° gọi là góc gì?', options: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Kể tên các loại góc đã học và số đo tương ứng.', solution: ['Góc nhọn: bé hơn 90°', 'Góc vuông: bằng 90°', 'Góc tù: lớn hơn 90° và bé hơn 180°', 'Góc bẹt: bằng 180°'] },
      { prompt: 'Nêu cách kiểm tra hai đường thẳng có vuông góc với nhau hay không.', solution: ['Dùng ê ke: đặt một cạnh góc vuông của ê ke trùng với một đường thẳng.', 'Nếu cạnh góc vuông còn lại của ê ke trùng với đường thẳng kia thì hai đường thẳng đó vuông góc với nhau.'] },
      { prompt: 'Trong hình chữ nhật ABCD, cạnh AB và cạnh AD có quan hệ gì với nhau?', solution: ['Cạnh AB và cạnh AD vuông góc với nhau (vì góc A của hình chữ nhật là góc vuông).'] },
      { prompt: 'Trong hình chữ nhật ABCD, cạnh AB và cạnh CD có quan hệ gì với nhau?', solution: ['Cạnh AB và cạnh CD song song với nhau (đây là một cặp cạnh đối diện của hình chữ nhật).'] },
      {
        prompt: 'Kim giờ và kim phút của đồng hồ lúc 9 giờ đúng tạo thành góc gì?',
        solution: ['Lúc 9 giờ đúng, kim giờ chỉ số 9, kim phút chỉ số 12, tạo thành góc vuông (90°).'],
      },
    ],
    flashcards: [
      { front: 'Góc nhọn có số đo thế nào?', back: 'Bé hơn 90°' },
      { front: 'Góc tù có số đo thế nào?', back: 'Lớn hơn 90° và bé hơn 180°' },
      { front: 'Góc bẹt có số đo bao nhiêu?', back: '180°' },
      { front: 'Dụng cụ dùng để kiểm tra góc vuông', back: 'Ê ke' },
      { front: 'Hai đường thẳng song song có đặc điểm gì?', back: 'Không bao giờ cắt nhau' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Góc vuông có số đo bằng bao nhiêu độ?', options: ['180°', '90°', '60°', '45°'], correctIndex: 1 },
        { question: 'Góc nào lớn hơn góc vuông?', options: ['Góc nhọn', 'Cả hai đều không', 'Góc tù', 'Không xác định'], correctIndex: 2 },
        { question: 'Kim giờ và kim phút lúc 6 giờ đúng tạo thành góc gì?', options: ['Góc vuông', 'Góc nhọn', 'Góc tù', 'Góc bẹt'], correctIndex: 3 },
        { question: 'Trong hình vuông, hai cạnh kề nhau có quan hệ gì?', options: ['Vuông góc với nhau', 'Song song với nhau', 'Không liên quan gì', 'Bằng nhau nhưng không vuông góc'], correctIndex: 0 },
        { question: 'Trong hình chữ nhật, hai cạnh đối diện có quan hệ gì?', options: ['Vuông góc với nhau', 'Song song với nhau', 'Cắt nhau tại 1 điểm', 'Không liên quan gì'], correctIndex: 1 },
        { question: 'Góc có hai cạnh là hai tia đối nhau (nằm trên một đường thẳng) gọi là góc gì?', options: ['Góc vuông', 'Góc nhọn', 'Góc bẹt', 'Góc tù'], correctIndex: 2 },
        { question: 'Ê ke dùng để làm gì?', options: ['Đo độ dài', 'Đo khối lượng', 'Đo thời gian', 'Kiểm tra và vẽ góc vuông'], correctIndex: 3 },
        { question: 'Một góc bằng 120° là góc gì?', options: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'], correctIndex: 0 },
        { question: 'Một góc bằng 45° là góc gì?', options: ['Góc tù', 'Góc nhọn', 'Góc vuông', 'Góc bẹt'], correctIndex: 1 },
        { question: 'Hai đường thẳng cắt nhau tạo thành 4 góc vuông thì hai đường thẳng đó gọi là gì?', options: ['Hai đường thẳng song song', 'Hai đường thẳng trùng nhau', 'Hai đường thẳng vuông góc', 'Hai đường thẳng cắt nhau bất kỳ'], correctIndex: 2 },
        { question: 'Hai đường thẳng không cắt nhau dù kéo dài mãi về hai phía gọi là gì?', options: ['Hai đường thẳng vuông góc', 'Hai đường thẳng trùng nhau', 'Hai đường thẳng cắt nhau', 'Hai đường thẳng song song'], correctIndex: 3 },
        { question: 'Trong các chữ cái in hoa, chữ nào có hai nét vuông góc với nhau?', options: ['L', 'O', 'S', 'C'], correctIndex: 0 },
        {
          question: 'Một chiếc cổng hình chữ nhật có 4 góc. Tổng số đo 4 góc đó là bao nhiêu độ?',
          options: ['180°', '360°', '90°', '270°'],
          correctIndex: 1,
        },
        {
          question: 'Trong hình bình hành, hai cạnh đối diện có quan hệ gì với nhau?',
          options: ['Vuông góc với nhau', 'Cắt nhau tại trung điểm', 'Song song và bằng nhau', 'Không liên quan gì'],
          correctIndex: 2,
        },
        {
          question: 'Một cái thang dựa vào tường tạo với mặt đất một góc 70°. Góc đó là góc gì?',
          options: ['Góc tù', 'Góc vuông', 'Góc bẹt', 'Góc nhọn'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Vẽ (mô tả bằng lời) hai đường thẳng AB và CD vuông góc với nhau tại điểm O. Hỏi tại O có bao nhiêu góc vuông được tạo thành?',
          solution: ['Hai đường thẳng vuông góc cắt nhau tạo thành 4 góc, cả 4 góc đều là góc vuông (90°).', 'Vậy tại O có 4 góc vuông.'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một mảnh đất hình chữ nhật ABCD. Hãy nêu tên các cặp cạnh song song và các cặp cạnh vuông góc với nhau trong hình đó.',
          solution: [
            'Các cặp cạnh song song: AB song song với CD; AD song song với BC.',
            'Các cặp cạnh vuông góc: AB vuông góc với AD; AB vuông góc với BC; CD vuông góc với AD; CD vuông góc với BC.',
          ],
        },
      ],
    },
  },

  'l4-hinh-binh-hanh-hinh-thoi': {
    title: 'Hình bình hành, hình thoi',
    theory: {
      cards: [
        {
          title: 'Đặc điểm hình bình hành',
          formulas: ['AB = CD,\\ AD = BC', 'AB \\parallel CD,\\ AD \\parallel BC'],
          legend: [
            'Hình bình hành có 2 cặp cạnh đối diện song song và bằng nhau',
            'Đáy là một cạnh được chọn làm cạnh gốc để tính chiều cao tương ứng',
          ],
          note: 'Mẹo: hình chữ nhật cũng là một hình bình hành đặc biệt (có thêm 4 góc đều vuông).',
        },
        {
          title: 'Đặc điểm hình thoi',
          formulas: ['AB = BC = CD = DA', 'AC \\perp BD'],
          legend: [
            'Hình thoi có 4 cạnh bằng nhau',
            'Hai đường chéo của hình thoi vuông góc với nhau và cắt nhau tại trung điểm mỗi đường',
          ],
          note: 'Mẹo: hình vuông cũng là một hình thoi đặc biệt (có thêm 4 góc đều vuông) — vì hình vuông có cả 4 cạnh bằng nhau giống hình thoi.',
        },
      ],
    },
    video: { caption: '00:00 / 09:30 — hinh_binh_hanh_hinh_thoi_baigiang.mp4' },
    quiz: [
      { question: 'Hình bình hành có mấy cặp cạnh đối diện song song?', options: ['2', '1', '3', '4'], correctIndex: 0 },
      { question: 'Hình thoi có đặc điểm gì về các cạnh?', options: ['4 cạnh khác nhau', '4 cạnh bằng nhau', '2 cạnh bằng nhau', 'Không cạnh nào bằng nhau'], correctIndex: 1 },
      { question: 'Hai đường chéo của hình thoi có quan hệ gì?', options: ['Song song với nhau', 'Bằng nhau nhưng không vuông góc', 'Vuông góc với nhau', 'Không liên quan gì'], correctIndex: 2 },
      { question: 'Hình chữ nhật có phải là một hình bình hành đặc biệt không?', options: ['Không, vì hình chữ nhật khác hoàn toàn', 'Chỉ đúng khi là hình vuông', 'Không xác định được', 'Có, vì có 2 cặp cạnh đối song song và bằng nhau'], correctIndex: 3 },
      { question: 'Hình vuông có phải là một hình thoi đặc biệt không?', options: ['Có, vì có 4 cạnh bằng nhau', 'Không, vì hình vuông khác hoàn toàn', 'Chỉ đúng khi là hình chữ nhật', 'Không xác định được'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Nêu đặc điểm của hình bình hành.', solution: ['Hình bình hành có 2 cặp cạnh đối diện song song với nhau và bằng nhau từng đôi một.'] },
      { prompt: 'Nêu đặc điểm của hình thoi.', solution: ['Hình thoi có 4 cạnh bằng nhau.', 'Hai đường chéo của hình thoi vuông góc với nhau tại trung điểm mỗi đường.'] },
      {
        prompt: 'Hình bình hành ABCD có AB = 8 cm. Hỏi cạnh CD dài bao nhiêu xăng-ti-mét?',
        solution: ['Trong hình bình hành, hai cạnh đối diện bằng nhau nên CD = AB.', 'Vậy CD = 8 cm.'],
      },
      {
        prompt: 'Hình thoi MNPQ có cạnh MN = 5 cm. Tính chu vi hình thoi đó.',
        solution: ['Hình thoi có 4 cạnh bằng nhau, mỗi cạnh 5 cm.', 'Chu vi $= 5\\times4=20$ cm.'],
      },
      {
        prompt: 'So sánh sự giống và khác nhau giữa hình bình hành và hình thoi.',
        solution: ['Giống nhau: cả hai đều có 2 cặp cạnh đối diện song song với nhau.', 'Khác nhau: hình thoi có cả 4 cạnh bằng nhau, còn hình bình hành chỉ có từng cặp cạnh đối diện bằng nhau (có thể 2 cặp cạnh không bằng nhau).'],
      },
    ],
    flashcards: [
      { front: 'Hình bình hành có mấy cặp cạnh song song?', back: '2 cặp' },
      { front: 'Hình thoi có mấy cạnh bằng nhau?', back: 'Cả 4 cạnh bằng nhau' },
      { front: 'Hai đường chéo hình thoi có tính chất gì?', back: 'Vuông góc với nhau tại trung điểm mỗi đường' },
      { front: 'Hình chữ nhật có phải hình bình hành không?', back: 'Có (hình bình hành đặc biệt)' },
      { front: 'Hình vuông có phải hình thoi không?', back: 'Có (hình thoi đặc biệt)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình bình hành có mấy cạnh?', options: ['3', '4', '5', '6'], correctIndex: 1 },
        { question: 'Trong hình bình hành ABCD, cạnh AD song song với cạnh nào?', options: ['AB', 'CD', 'BC', 'AC'], correctIndex: 2 },
        { question: 'Hình thoi có mấy góc?', options: ['3', '5', '6', '4'], correctIndex: 3 },
        { question: 'Hình thoi EFGH có EF = 6 cm. Cạnh FG dài bao nhiêu?', options: ['6 cm', '3 cm', '12 cm', '9 cm'], correctIndex: 0 },
        { question: 'Chu vi hình thoi có cạnh 7 cm là bao nhiêu?', options: ['14 cm', '28 cm', '21 cm', '35 cm'], correctIndex: 1 },
        { question: 'Hình bình hành có cạnh AB = 10 cm, cạnh AD = 6 cm. Chu vi hình bình hành là bao nhiêu?', options: ['16 cm', '60 cm', '32 cm', '26 cm'], correctIndex: 2 },
        { question: 'Đường chéo của hình thoi cắt nhau tại đâu?', options: ['Một đỉnh của hình thoi', 'Ngoài hình thoi', 'Không cắt nhau', 'Trung điểm mỗi đường chéo'], correctIndex: 3 },
        { question: 'Hình nào sau đây KHÔNG phải là hình bình hành?', options: ['Hình thang (2 đáy không bằng nhau)', 'Hình chữ nhật', 'Hình vuông', 'Hình thoi'], correctIndex: 0 },
        { question: 'Trong hình thoi, hai cạnh kề nhau có bằng nhau không?', options: ['Không bằng nhau', 'Có, vì cả 4 cạnh đều bằng nhau', 'Chỉ bằng nhau ở hình vuông', 'Không xác định'], correctIndex: 1 },
        { question: 'Một hình bình hành có 2 cạnh kề là 12 cm và 9 cm. Chu vi là bao nhiêu?', options: ['21 cm', '108 cm', '42 cm', '30 cm'], correctIndex: 2 },
        { question: 'Hình thoi có chu vi 32 cm thì mỗi cạnh dài bao nhiêu?', options: ['16 cm', '4 cm', '32 cm', '8 cm'], correctIndex: 3 },
        { question: 'Trong hình bình hành, hai góc đối diện có quan hệ gì?', options: ['Bằng nhau', 'Bù nhau (tổng 180°)', 'Vuông góc', 'Không liên quan'], correctIndex: 0 },
        {
          question: 'Một khung ảnh hình bình hành có cạnh đáy 25 cm và cạnh bên 15 cm. Tính chu vi khung ảnh.',
          options: ['40 cm', '80 cm', '375 cm', '50 cm'],
          correctIndex: 1,
        },
        {
          question: 'Một viên gạch hoa hình thoi có cạnh 20 cm. Người ta ghép 4 viên gạch giống nhau thành một hàng. Tính tổng chu vi 4 viên gạch (chưa ghép, tính riêng từng viên).',
          options: ['80 cm', '400 cm', '320 cm', '160 cm'],
          correctIndex: 2,
        },
        {
          question: 'Hình bình hành và hình thoi giống nhau ở điểm nào?',
          options: ['Đều có 4 cạnh bằng nhau', 'Đều có 4 góc vuông', 'Đều có 2 đường chéo bằng nhau', 'Đều có 2 cặp cạnh đối diện song song'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một hình bình hành có cạnh đáy 14 cm, cạnh bên 8 cm. Tính chu vi hình bình hành đó.',
          solution: ['Chu vi hình bình hành = tổng độ dài các cạnh = $(14+8)\\times2$', '$=22\\times2=44$ cm'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một hình thoi có chu vi 60 cm. Tính độ dài mỗi cạnh của hình thoi, biết hình thoi đó có 4 cạnh bằng nhau.',
          solution: ['Vì hình thoi có 4 cạnh bằng nhau nên mỗi cạnh $= 60:4=15$ cm.'],
        },
      ],
    },
  },

  'l4-dien-tich-binh-hanh-thoi': {
    title: 'Diện tích hình bình hành, hình thoi',
    theory: {
      cards: [
        {
          title: 'Diện tích hình bình hành',
          formulas: ['S = a \\times h'],
          legend: ['$a$: độ dài đáy', '$h$: chiều cao (khoảng cách vuông góc từ đáy đến cạnh đối diện)', '$S$: diện tích'],
          note: 'Mẹo: diện tích hình bình hành bằng đáy nhân chiều cao — chú ý chiều cao phải vuông góc với đáy, không phải cạnh bên.',
        },
        {
          title: 'Diện tích hình thoi',
          formulas: ['S = \\dfrac{d_1 \\times d_2}{2}'],
          legend: ['$d_1, d_2$: độ dài hai đường chéo', '$S$: diện tích'],
          note: 'Mẹo: diện tích hình thoi bằng tích hai đường chéo rồi chia cho 2 — nhớ chia 2, đây là lỗi học sinh hay quên nhất khi làm bài.',
        },
      ],
    },
    video: { caption: '00:00 / 10:00 — dien_tich_binh_hanh_thoi_baigiang.mp4' },
    quiz: [
      { question: 'Hình bình hành có đáy 12 cm, chiều cao 5 cm. Diện tích là bao nhiêu?', options: ['60 cm²', '17 cm²', '34 cm²', '120 cm²'], correctIndex: 0 },
      { question: 'Hình thoi có hai đường chéo 8 cm và 6 cm. Diện tích là bao nhiêu?', options: ['48 cm²', '24 cm²', '14 cm²', '28 cm²'], correctIndex: 1 },
      { question: 'Công thức tính diện tích hình bình hành là gì?', options: ['Đáy + chiều cao', '(Đáy + chiều cao) × 2', 'Đáy × chiều cao', 'Đáy × chiều cao : 2'], correctIndex: 2 },
      { question: 'Công thức tính diện tích hình thoi là gì?', options: ['Đường chéo 1 × đường chéo 2', '(Đường chéo 1 + đường chéo 2) × 2', 'Cạnh × cạnh', '(Đường chéo 1 × đường chéo 2) : 2'], correctIndex: 3 },
      { question: 'Hình bình hành có diện tích 45 cm², đáy 9 cm. Chiều cao là bao nhiêu?', options: ['5 cm', '4 cm', '6 cm', '9 cm'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Tính diện tích hình bình hành có đáy 15 cm, chiều cao 8 cm.', solution: ['$S = a\\times h = 15\\times8=120$ cm²'] },
      { prompt: 'Tính diện tích hình thoi có hai đường chéo 10 cm và 7 cm.', solution: ['$S=\\dfrac{d_1\\times d_2}{2}=\\dfrac{10\\times7}{2}=\\dfrac{70}{2}=35$ cm²'] },
      {
        prompt: 'Một hình bình hành có diện tích 96 cm², chiều cao 8 cm. Tính độ dài đáy.',
        solution: ['Đáy $= S:h = 96:8=12$ cm'],
      },
      {
        prompt: 'Một hình thoi có diện tích 54 cm², đường chéo thứ nhất 12 cm. Tính đường chéo thứ hai.',
        solution: ['$S=\\dfrac{d_1\\times d_2}{2} \\Rightarrow d_1\\times d_2 = S\\times2=54\\times2=108$', 'Đường chéo thứ hai $=108:12=9$ cm'],
      },
      {
        prompt: 'Một mảnh vườn hình bình hành có đáy 20 m, chiều cao 12 m. Người ta trồng hoa trên toàn bộ mảnh vườn, mỗi mét vuông trồng 4 cây hoa. Hỏi trồng được tất cả bao nhiêu cây hoa?',
        solution: ['Diện tích mảnh vườn: $S=20\\times12=240$ m²', 'Số cây hoa: $240\\times4=960$ cây'],
      },
    ],
    flashcards: [
      { front: 'Công thức diện tích hình bình hành', back: '$S=a\\times h$ (đáy nhân chiều cao)' },
      { front: 'Công thức diện tích hình thoi', back: '$S=\\dfrac{d_1\\times d_2}{2}$' },
      { front: 'Chiều cao hình bình hành là gì?', back: 'Khoảng cách vuông góc từ đáy đến cạnh đối diện' },
      { front: 'Diện tích hình bình hành đáy 10 cm, cao 6 cm', back: '60 cm²' },
      { front: 'Diện tích hình thoi có 2 đường chéo 8 cm và 5 cm', back: '20 cm²' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình bình hành có đáy 9 cm, chiều cao 6 cm. Diện tích là bao nhiêu?', options: ['15 cm²', '54 cm²', '30 cm²', '27 cm²'], correctIndex: 1 },
        { question: 'Hình thoi có hai đường chéo 12 cm và 9 cm. Diện tích là bao nhiêu?', options: ['108 cm²', '21 cm²', '54 cm²', '42 cm²'], correctIndex: 2 },
        { question: 'Hình bình hành có đáy 14 cm, chiều cao 5 cm. Diện tích là bao nhiêu?', options: ['19 cm²', '38 cm²', '35 cm²', '70 cm²'], correctIndex: 3 },
        { question: 'Hình thoi có diện tích 40 cm², đường chéo thứ nhất 10 cm. Đường chéo thứ hai là bao nhiêu?', options: ['8 cm', '4 cm', '80 cm', '10 cm'], correctIndex: 0 },
        { question: 'Hình bình hành có diện tích 84 cm², chiều cao 7 cm. Đáy là bao nhiêu?', options: ['11 cm', '12 cm', '14 cm', '10 cm'], correctIndex: 1 },
        { question: 'Hình thoi có cạnh 13 cm và hai đường chéo 24 cm, 10 cm. Diện tích là bao nhiêu?', options: ['240 cm²', '60 cm²', '120 cm²', '170 cm²'], correctIndex: 2 },
        { question: 'Hình bình hành có đáy gấp đôi chiều cao, chiều cao 6 cm. Diện tích là bao nhiêu?', options: ['36 cm²', '18 cm²', '144 cm²', '72 cm²'], correctIndex: 3 },
        { question: 'Một hình thoi có hai đường chéo bằng nhau và bằng 10 cm. Diện tích là bao nhiêu?', options: ['50 cm²', '100 cm²', '25 cm²', '20 cm²'], correctIndex: 0 },
        { question: 'Hình bình hành có chu vi 40 cm, đáy 12 cm, cạnh bên 8 cm, chiều cao ứng với đáy là 5 cm. Diện tích hình bình hành là bao nhiêu?', options: ['40 cm²', '60 cm²', '96 cm²', '20 cm²'], correctIndex: 1 },
        { question: 'Một khu đất hình bình hành có đáy 45 m, chiều cao 20 m. Diện tích khu đất là bao nhiêu?', options: ['65 m²', '130 m²', '900 m²', '450 m²'], correctIndex: 2 },
        { question: 'Một viên gạch hình thoi có hai đường chéo 16 cm và 12 cm. Diện tích viên gạch là bao nhiêu?', options: ['192 cm²', '48 cm²', '28 cm²', '96 cm²'], correctIndex: 3 },
        { question: 'Hình bình hành có diện tích 108 cm², đáy 9 cm. Chiều cao là bao nhiêu?', options: ['12 cm', '11 cm', '10 cm', '13 cm'], correctIndex: 0 },
        {
          question: 'Một mảnh ruộng hình bình hành có đáy 35 m, chiều cao 18 m. Cứ 10 m² thu hoạch được 6 kg thóc. Hỏi cả mảnh ruộng thu hoạch được bao nhiêu ki-lô-gam thóc?',
          options: ['630', '378', '210', '63'],
          correctIndex: 1,
        },
        {
          question: 'Một tấm bìa hình thoi có đường chéo lớn 30 cm, đường chéo bé bằng $\\dfrac{2}{3}$ đường chéo lớn. Diện tích tấm bìa là bao nhiêu?',
          options: ['600 cm²', '450 cm²', '300 cm²', '150 cm²'],
          correctIndex: 2,
        },
        {
          question: 'Một sân hình bình hành có diện tích 195 m², chiều cao ứng với đáy là 13 m và cạnh bên là 18 m. Người ta muốn rào xung quanh sân. Tính chu vi sân đó (đáy tính từ diện tích và chiều cao).',
          options: ['33 m', '58 m', '62 m', '66 m'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Một hình bình hành có đáy 24 cm, chiều cao bằng nửa đáy. Tính diện tích hình bình hành.',
          solution: ['Chiều cao $=24:2=12$ cm', 'Diện tích $=24\\times12=288$ cm²'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một khu vườn hình thoi có đường chéo thứ nhất dài 24 m, đường chéo thứ hai bằng $\\dfrac{3}{4}$ đường chéo thứ nhất. Người ta trồng rau trên toàn bộ khu vườn, cứ mỗi mét vuông thu hoạch được 3 kg rau. Hỏi khu vườn thu hoạch được bao nhiêu ki-lô-gam rau?',
          solution: [
            'Đường chéo thứ hai: $24\\times\\dfrac{3}{4}=18$ m',
            'Diện tích khu vườn: $S=\\dfrac{24\\times18}{2}=\\dfrac{432}{2}=216$ m²',
            'Số rau thu hoạch: $216\\times3=648$ kg',
          ],
        },
      ],
    },
  },

  'l4-don-vi-do-dien-tich': {
    title: 'Đơn vị đo diện tích (dm², m², km²) và đổi đơn vị',
    theory: {
      cards: [
        {
          title: 'Các đơn vị đo diện tích và quan hệ giữa chúng',
          formulas: ['1\\ dm^2 = 100\\ cm^2', '1\\ m^2 = 100\\ dm^2 = 10\\,000\\ cm^2', '1\\ km^2 = 1\\,000\\,000\\ m^2'],
          legend: [
            'Mỗi đơn vị đo diện tích liền kề gấp (hoặc kém) nhau 100 lần',
            'Thứ tự từ lớn đến bé: km², hm² (ha), dam², m², dm², cm², mm²',
          ],
          note: 'Mẹo: đơn vị đo độ dài liền kề gấp nhau 10 lần, nhưng đơn vị đo diện tích liền kề gấp nhau 100 lần — vì diện tích tính theo 2 chiều (dài × rộng).',
        },
        {
          title: 'Đổi đơn vị đo diện tích',
          formulas: ['5\\ m^2 = 50\\,000\\ cm^2', '3\\ km^2 = 3\\,000\\,000\\ m^2', '250\\ dm^2 = 2.5\\ m^2'],
          legend: [
            'Đổi từ đơn vị lớn sang đơn vị bé hơn: nhân với 100 (nếu liền kề) hoặc lũy thừa của 100 (nếu cách nhiều bậc)',
            'Đổi từ đơn vị bé sang đơn vị lớn hơn: chia cho 100 (hoặc lũy thừa của 100)',
          ],
          note: 'Mẹo: khi đổi qua nhiều bậc, ví dụ từ km² sang m², con nhân với $100\\times100=10\\,000$ vì cách nhau 2 bậc (km² → hm² → ... nhưng thực ra km² sang m² cách 3 bậc theo dãy đủ, ghi nhớ trực tiếp $1\\,km^2=1\\,000\\,000\\,m^2$ sẽ nhanh hơn).',
        },
      ],
    },
    video: { caption: '00:00 / 10:30 — don_vi_do_dien_tich_baigiang.mp4' },
    quiz: [
      { question: '1 m² bằng bao nhiêu dm²?', options: ['100 dm²', '10 dm²', '1000 dm²', '10 000 dm²'], correctIndex: 0 },
      { question: '1 km² bằng bao nhiêu m²?', options: ['10 000 m²', '1 000 000 m²', '100 000 m²', '100 m²'], correctIndex: 1 },
      { question: '3 m² bằng bao nhiêu cm²?', options: ['3000 cm²', '300 cm²', '30 000 cm²', '300 000 cm²'], correctIndex: 2 },
      { question: '500 dm² bằng bao nhiêu m²?', options: ['50 m²', '0,5 m²', '5000 m²', '5 m²'], correctIndex: 3 },
      { question: '2 km² bằng bao nhiêu m²?', options: ['2 000 000 m²', '200 000 m²', '20 000 m²', '20 000 000 m²'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Đổi: 7 m² = ... dm².', solution: ['$1\\,m^2=100\\,dm^2$', '$7\\,m^2=7\\times100=700\\,dm^2$'] },
      { prompt: 'Đổi: 45 000 cm² = ... m².', solution: ['$1\\,m^2=10\\,000\\,cm^2$', '$45\\,000\\,cm^2=45\\,000:10\\,000=4,5\\,m^2$'] },
      { prompt: 'Đổi: 4 km² = ... m².', solution: ['$1\\,km^2=1\\,000\\,000\\,m^2$', '$4\\,km^2=4\\times1\\,000\\,000=4\\,000\\,000\\,m^2$'] },
      {
        prompt: 'Một khu rừng có diện tích 8 km². Hỏi khu rừng đó rộng bao nhiêu mét vuông?',
        solution: ['$1\\,km^2=1\\,000\\,000\\,m^2$', '$8\\,km^2=8\\times1\\,000\\,000=8\\,000\\,000\\,m^2$', 'Khu rừng rộng 8 000 000 m².'],
      },
      {
        prompt: 'Một căn phòng hình chữ nhật có diện tích 24 m². Đổi diện tích đó sang đơn vị dm² và cm².',
        solution: ['$24\\,m^2=24\\times100=2400\\,dm^2$', '$24\\,m^2=24\\times10\\,000=240\\,000\\,cm^2$'],
      },
    ],
    flashcards: [
      { front: '1 m² = ? dm²', back: '100 dm²' },
      { front: '1 dm² = ? cm²', back: '100 cm²' },
      { front: '1 m² = ? cm²', back: '10 000 cm²' },
      { front: '1 km² = ? m²', back: '1 000 000 m²' },
      { front: 'Hai đơn vị đo diện tích liền kề gấp/kém nhau bao nhiêu lần?', back: '100 lần' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: '1 dm² bằng bao nhiêu cm²?', options: ['10 cm²', '100 cm²', '1000 cm²', '10 000 cm²'], correctIndex: 1 },
        { question: '6 m² bằng bao nhiêu dm²?', options: ['60 dm²', '6000 dm²', '600 dm²', '60 000 dm²'], correctIndex: 2 },
        { question: '2 m² bằng bao nhiêu cm²?', options: ['2000 cm²', '200 cm²', '200 000 cm²', '20 000 cm²'], correctIndex: 3 },
        { question: '5 km² bằng bao nhiêu m²?', options: ['5 000 000 m²', '500 000 m²', '50 000 m²', '50 000 000 m²'], correctIndex: 0 },
        { question: '800 cm² bằng bao nhiêu dm²?', options: ['80 dm²', '8 dm²', '0,8 dm²', '8000 dm²'], correctIndex: 1 },
        { question: '3000 dm² bằng bao nhiêu m²?', options: ['3 m²', '300 m²', '30 m²', '3000 m²'], correctIndex: 2 },
        { question: '12 000 000 m² bằng bao nhiêu km²?', options: ['120 km²', '1,2 km²', '1200 km²', '12 km²'], correctIndex: 3 },
        { question: '9 m² 5 dm² bằng bao nhiêu dm²?', options: ['905 dm²', '95 dm²', '950 dm²', '9005 dm²'], correctIndex: 0 },
        { question: 'So sánh: 3 m² và 3500 cm².', options: ['3 m² < 3500 cm²', '3 m² > 3500 cm²', '3 m² = 3500 cm²', 'Không so sánh được'], correctIndex: 1 },
        { question: 'Một mảnh đất rộng 6000 m². Đổi sang héc-ta (1 ha = 10 000 m²), mảnh đất đó rộng bao nhiêu héc-ta?', options: ['6 ha', '60 ha', '0,6 ha', '0,06 ha'], correctIndex: 2 },
        { question: '15 dm² 30 cm² bằng bao nhiêu cm²?', options: ['153 cm²', '15 030 cm²', '1503 cm²', '1530 cm²'], correctIndex: 3 },
        { question: 'Một tỉnh có diện tích 2345 km². Đổi sang mét vuông, số đó là bao nhiêu?', options: ['2 345 000 000 m²', '234 500 000 m²', '23 450 000 m²', '2 345 000 m²'], correctIndex: 0 },
        {
          question: 'Một sân trường hình chữ nhật dài 40 m, rộng 25 m. Diện tích sân trường tính theo m² là bao nhiêu, và bằng bao nhiêu dm²?',
          options: ['1000 m² = 10 000 dm²', '1000 m² = 100 000 dm²', '650 m² = 65 000 dm²', '1000 m² = 1 000 000 dm²'],
          correctIndex: 1,
        },
        {
          question: 'Một thửa ruộng có diện tích 7 ha 500 m² (1 ha = 10 000 m²). Diện tích đó bằng bao nhiêu mét vuông?',
          options: ['75 000 m²', '7500 m²', '70 500 m²', '700 500 m²'],
          correctIndex: 2,
        },
        {
          question: 'Diện tích Việt Nam khoảng 331 000 km². Số đó gần đúng bằng bao nhiêu mét vuông?',
          options: ['33 100 000 m²', '3 310 000 000 m²', '331 000 000 m²', '331 000 000 000 m²'],
          correctIndex: 3,
        },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Đổi các số đo sau: 6 m² 25 dm² = ... dm²; 4200 cm² = ... dm².',
          solution: ['$6\\,m^2\\,25\\,dm^2 = 600\\,dm^2+25\\,dm^2=625\\,dm^2$', '$4200\\,cm^2=4200:100=42\\,dm^2$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một khu công nghiệp có diện tích 3 km² 250 000 m². Hỏi khu công nghiệp đó có diện tích bao nhiêu mét vuông?',
          solution: [
            '$3\\,km^2 = 3\\times1\\,000\\,000=3\\,000\\,000\\,m^2$',
            '$3\\,000\\,000\\,m^2+250\\,000\\,m^2=3\\,250\\,000\\,m^2$',
            'Khu công nghiệp có diện tích 3 250 000 m².',
          ],
        },
      ],
    },
  },
}
