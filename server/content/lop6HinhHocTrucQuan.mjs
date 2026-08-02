import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_HINH_HOC_TRUC_QUAN = {
  'l6-tam-giac-deu-luc-giac': {
    title: 'Tam giác đều, hình vuông, lục giác đều',
    theory: {
      cards: [
        {
          title: 'Tam giác đều',
          formulas: ['3\\ \\text{cạnh bằng nhau},\\ 3\\ \\text{góc}\\ 60°'],
          legend: ['Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng $60°$'],
          note: 'Mẹo nhận biết: đo 3 cạnh, nếu cả 3 cạnh bằng nhau thì đó là tam giác đều.',
        },
        {
          title: 'Hình vuông và lục giác đều',
          formulas: ['\\text{Hình vuông: 4 cạnh bằng nhau, 4 góc vuông}', '\\text{Lục giác đều: 6 cạnh bằng nhau, 6 góc bằng nhau}'],
          legend: ['Hình vuông: 4 cạnh bằng nhau, 4 góc vuông ($90°$)', 'Lục giác đều: 6 cạnh bằng nhau, mỗi góc bằng $120°$'],
          note: 'Mẹo: tổng các góc trong hình vuông là $360°$; mỗi góc lục giác đều bằng $120°$.',
        },
      ],
    },
    video: { caption: '00:00 / 08:20 — tam_giac_deu_luc_giac_baigiang.mp4' },
    quiz: [
      { question: 'Tam giác đều có bao nhiêu cạnh bằng nhau?', options: ['3', '2', '4', '6'], correctIndex: 0 },
      { question: 'Mỗi góc của tam giác đều bằng bao nhiêu độ?', options: ['60°', '90°', '45°', '120°'], correctIndex: 0 },
      { question: 'Hình vuông có bao nhiêu góc vuông?', options: ['4', '2', '3', '1'], correctIndex: 0 },
      { question: 'Lục giác đều có bao nhiêu cạnh?', options: ['6', '4', '5', '8'], correctIndex: 0 },
      { question: 'Mỗi góc của lục giác đều bằng bao nhiêu độ?', options: ['120°', '90°', '60°', '108°'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Nêu đặc điểm của tam giác đều.', solution: ['Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau (mỗi góc $60°$).'] },
      { prompt: 'Bài 2. Nêu đặc điểm của hình vuông.', solution: ['Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.'] },
      { prompt: 'Bài 3. Một tam giác đều có cạnh 5cm. Tính chu vi tam giác đó.', solution: ['Chu vi $=5\\times3=15$ (cm)'] },
      { prompt: 'Bài 4. Một hình vuông có cạnh 6cm. Tính chu vi hình vuông đó.', solution: ['Chu vi $=6\\times4=24$ (cm)'] },
      { prompt: 'Bài 5. Kể tên hai vật dụng trong thực tế có dạng lục giác đều.', solution: ['Ví dụ: tổ ong, mặt bu-lông/đai ốc lục giác.'] },
    ],
    flashcards: [
      { front: 'Tam giác đều', back: '3 cạnh bằng nhau, 3 góc bằng 60°' },
      { front: 'Hình vuông', back: '4 cạnh bằng nhau, 4 góc vuông' },
      { front: 'Lục giác đều', back: '6 cạnh bằng nhau, mỗi góc bằng 120°' },
      { front: 'Chu vi tam giác đều cạnh a', back: '$3a$' },
      { front: 'Chu vi hình vuông cạnh a', back: '$4a$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tam giác đều có bao nhiêu góc bằng nhau?', options: ['3', '2', '4', '1'], correctIndex: 0 },
        { question: 'Hình vuông có bao nhiêu cạnh?', options: ['4', '3', '5', '6'], correctIndex: 0 },
        { question: 'Góc của hình vuông bằng bao nhiêu độ?', options: ['90°', '60°', '120°', '45°'], correctIndex: 0 },
        { question: 'Lục giác đều có bao nhiêu cạnh bằng nhau?', options: ['6', '4', '5', '8'], correctIndex: 0 },
        { question: 'Tam giác đều là tam giác có đặc điểm gì?', options: ['3 cạnh và 3 góc bằng nhau', 'Có 1 góc vuông', 'Có 2 cạnh bằng nhau', 'Có 1 góc tù'], correctIndex: 0 },
        { question: 'Tổng các góc trong hình vuông bằng bao nhiêu độ?', options: ['360°', '180°', '270°', '90°'], correctIndex: 0 },
        { question: 'Tam giác đều có cạnh 4cm, chu vi bằng?', options: ['12', '8', '16', '4'], correctIndex: 0 },
        { question: 'Hình vuông có cạnh 7cm, chu vi bằng?', options: ['28', '14', '49', '21'], correctIndex: 0 },
        { question: 'Một lục giác đều có cạnh 3cm, chu vi bằng?', options: ['18', '15', '12', '21'], correctIndex: 0 },
        { question: 'Hình vuông có chu vi 20cm, cạnh của hình vuông là?', options: ['5', '4', '10', '20'], correctIndex: 0 },
        { question: 'Tam giác đều có chu vi 21cm, cạnh của tam giác là?', options: ['7', '6', '9', '21'], correctIndex: 0 },
        { question: 'Hình nào sau đây có các góc đều bằng 60°?', options: ['Tam giác đều', 'Hình vuông', 'Lục giác đều', 'Hình chữ nhật'], correctIndex: 0 },
        { question: 'Một khung tranh hình vuông có chu vi 32cm. Diện tích khung tranh đó là?', options: ['64', '32', '16', '128'], correctIndex: 0 },
        { question: 'Ghép 6 tam giác đều cạnh 4cm thành 1 lục giác đều. Chu vi lục giác đó là?', options: ['24', '16', '32', '20'], correctIndex: 0 },
        { question: 'Một tam giác đều và một hình vuông có cùng chu vi 24cm. Cạnh tam giác lớn hơn cạnh hình vuông bao nhiêu cm?', options: ['2', '8', '6', '14'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Một hình vuông có cạnh 9cm. Tính chu vi hình vuông đó.', solution: ['Chu vi $=9\\times4=36$ (cm)'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một tam giác đều có chu vi bằng chu vi của một hình vuông cạnh 6cm. Tính độ dài cạnh của tam giác đều đó.',
          solution: ['Chu vi hình vuông $=6\\times4=24$ (cm)', 'Cạnh tam giác đều $=24:3=8$ (cm)'],
        },
      ],
    },
  },

  'l6-hinh-binh-hanh-hinh-thang': {
    title: 'Hình chữ nhật, hình thoi, hình bình hành, hình thang cân',
    theory: {
      cards: [
        {
          title: 'Hình chữ nhật và hình thoi',
          formulas: ['\\text{Hình chữ nhật: 4 góc vuông, các cạnh đối bằng nhau}', '\\text{Hình thoi: 4 cạnh bằng nhau}'],
          legend: ['Hình chữ nhật: 2 cặp cạnh đối song song và bằng nhau, 4 góc vuông', 'Hình thoi: 4 cạnh bằng nhau, các cạnh đối song song'],
          note: 'Mẹo: hình vuông vừa là hình chữ nhật đặc biệt (4 góc vuông) vừa là hình thoi đặc biệt (4 cạnh bằng nhau).',
        },
        {
          title: 'Hình bình hành và hình thang cân',
          formulas: ['\\text{Hình bình hành: các cạnh đối song song và bằng nhau}'],
          legend: ['Hình bình hành: 2 cặp cạnh đối song song và bằng nhau, các góc đối bằng nhau', 'Hình thang cân: có 1 cặp cạnh đáy song song, 2 cạnh bên bằng nhau, 2 góc kề một đáy bằng nhau'],
          note: 'Mẹo: hình chữ nhật là hình bình hành đặc biệt có thêm 4 góc vuông.',
        },
      ],
    },
    video: { caption: '00:00 / 09:15 — hbh_hinh_thang_baigiang.mp4' },
    quiz: [
      { question: 'Hình chữ nhật có bao nhiêu góc vuông?', options: ['4', '2', '3', '1'], correctIndex: 0 },
      { question: 'Hình thoi có đặc điểm gì về các cạnh?', options: ['4 cạnh bằng nhau', '4 cạnh khác nhau', '2 cạnh bằng nhau', '3 cạnh bằng nhau'], correctIndex: 0 },
      { question: 'Hình bình hành có đặc điểm gì?', options: ['Các cạnh đối song song và bằng nhau', '4 góc vuông', '4 cạnh bằng nhau', 'Không có cạnh song song'], correctIndex: 0 },
      { question: 'Hình thang cân có mấy cạnh đáy song song với nhau?', options: ['2', '1', '3', '4'], correctIndex: 0 },
      { question: 'Hình vuông có phải là hình chữ nhật đặc biệt không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ khi cạnh bằng nhau'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Nêu đặc điểm của hình chữ nhật.', solution: ['4 góc vuông, 2 cặp cạnh đối song song và bằng nhau.'] },
      { prompt: 'Bài 2. Nêu đặc điểm của hình thoi.', solution: ['4 cạnh bằng nhau, các cạnh đối song song với nhau.'] },
      { prompt: 'Bài 3. Một hình chữ nhật có chiều dài 8cm, chiều rộng 5cm. Tính chu vi.', solution: ['Chu vi $=(8+5)\\times2=26$ (cm)'] },
      { prompt: 'Bài 4. Một hình thoi có cạnh 6cm. Tính chu vi.', solution: ['Chu vi $=6\\times4=24$ (cm)'] },
      { prompt: 'Bài 5. Kể tên đặc điểm chung giữa hình bình hành và hình chữ nhật.', solution: ['Cả hai đều có các cạnh đối song song và bằng nhau, các góc đối bằng nhau.'] },
    ],
    flashcards: [
      { front: 'Hình chữ nhật', back: '4 góc vuông, cạnh đối song song và bằng nhau' },
      { front: 'Hình thoi', back: '4 cạnh bằng nhau, cạnh đối song song' },
      { front: 'Hình bình hành', back: 'Cạnh đối song song và bằng nhau, góc đối bằng nhau' },
      { front: 'Hình thang cân', back: '1 cặp cạnh đáy song song, 2 cạnh bên bằng nhau' },
      { front: 'Chu vi hình chữ nhật cạnh a, b', back: '$2(a+b)$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Hình chữ nhật có bao nhiêu góc vuông?', options: ['4', '2', '3', '1'], correctIndex: 0 },
        { question: 'Hình thoi có bao nhiêu cạnh bằng nhau?', options: ['4', '2', '3', '1'], correctIndex: 0 },
        { question: 'Hình bình hành có đặc điểm gì về các cạnh đối?', options: ['Song song và bằng nhau', 'Vuông góc', 'Bằng nhau nhưng không song song', 'Không liên quan gì'], correctIndex: 0 },
        { question: 'Hình thang cân có bao nhiêu cạnh đáy song song?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Hình vuông là trường hợp đặc biệt của hình nào?', options: ['Cả hình chữ nhật và hình thoi', 'Chỉ hình chữ nhật', 'Chỉ hình thoi', 'Hình thang'], correctIndex: 0 },
        { question: 'Hình thang cân có 2 cạnh bên như thế nào?', options: ['Bằng nhau', 'Song song', 'Vuông góc', 'Khác nhau'], correctIndex: 0 },
        { question: 'Hình chữ nhật có chiều dài 10cm, rộng 4cm. Chu vi bằng?', options: ['28', '14', '40', '56'], correctIndex: 0 },
        { question: 'Hình thoi có cạnh 5cm, chu vi bằng?', options: ['20', '10', '25', '15'], correctIndex: 0 },
        { question: 'Hình bình hành có 2 cạnh kề là 6cm và 4cm. Chu vi bằng?', options: ['20', '10', '24', '40'], correctIndex: 0 },
        { question: 'Một hình chữ nhật có chu vi 30cm, chiều dài 9cm. Chiều rộng bằng?', options: ['6', '9', '15', '21'], correctIndex: 0 },
        { question: 'Hình thang cân có 2 cạnh bên bằng nhau, mỗi cạnh 5cm. Tổng độ dài 2 cạnh bên là?', options: ['10', '5', '15', '20'], correctIndex: 0 },
        { question: 'Trong các hình: hình vuông, hình chữ nhật, hình thoi, hình bình hành — hình nào KHÔNG chắc chắn có góc vuông?', options: ['Hình bình hành', 'Hình vuông', 'Hình chữ nhật', 'Cả 3 hình trên'], correctIndex: 0 },
        { question: 'Một hình chữ nhật có chu vi 36cm, chiều dài gấp đôi chiều rộng. Diện tích hình chữ nhật đó là?', options: ['72', '36', '48', '60'], correctIndex: 0 },
        { question: 'Một hình thoi có chu vi 28cm. Độ dài mỗi cạnh là?', options: ['7', '14', '4', '28'], correctIndex: 0 },
        { question: 'Một hình bình hành có chu vi 26cm, một cạnh dài 8cm. Cạnh còn lại là?', options: ['5', '8', '13', '18'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Một hình chữ nhật có chiều dài 12cm, chiều rộng 7cm. Tính chu vi hình chữ nhật đó.', solution: ['Chu vi $=(12+7)\\times2=38$ (cm)'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một hình thoi có chu vi 48cm. Người ta muốn làm một khung hình vuông có cùng chu vi với hình thoi đó. Tính độ dài cạnh của hình vuông.',
          solution: ['Cạnh hình vuông $=48:4=12$ (cm)'],
        },
      ],
    },
  },

  'l6-chu-vi-dien-tich': {
    title: 'Chu vi và diện tích các hình đã học',
    theory: {
      cards: [
        {
          title: 'Công thức chu vi',
          formulas: ['P_{hcn}=2(a+b)', 'P_{hv}=4a', 'P_{\\text{tam giác đều}}=3a'],
          legend: ['$P$: chu vi', '$a,\\ b$: độ dài các cạnh của hình'],
          note: 'Mẹo: chu vi luôn là tổng độ dài tất cả các cạnh của hình.',
        },
        {
          title: 'Công thức diện tích',
          formulas: ['S_{hcn}=a\\times b', 'S_{hv}=a^2', 'S_{\\text{tam giác}}=\\dfrac12\\times\\text{đáy}\\times\\text{chiều cao}'],
          legend: ['$S$: diện tích', '$a,\\ b$: chiều dài, chiều rộng (hcn) hoặc cạnh (hv)'],
          note: 'Mẹo: diện tích hình vuông = cạnh × cạnh = cạnh bình phương.',
        },
      ],
    },
    video: { caption: '00:00 / 10:30 — chu_vi_dien_tich_baigiang.mp4' },
    quiz: [
      { question: 'Diện tích hình chữ nhật có chiều dài 6cm, rộng 4cm là?', options: ['24', '20', '10', '48'], correctIndex: 0 },
      { question: 'Diện tích hình vuông cạnh 5cm là?', options: ['25', '20', '10', '50'], correctIndex: 0 },
      { question: 'Chu vi hình chữ nhật có chiều dài 7cm, rộng 3cm là?', options: ['20', '10', '21', '14'], correctIndex: 0 },
      { question: 'Diện tích tam giác có đáy 8cm, chiều cao 5cm là?', options: ['20', '40', '13', '10'], correctIndex: 0 },
      { question: 'Chu vi hình vuông cạnh 9cm là?', options: ['36', '18', '81', '9'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Tính diện tích hình chữ nhật có chiều dài 12cm, chiều rộng 5cm.', solution: ['$S=12\\times5=60$ (cm²)'] },
      { prompt: 'Bài 2. Tính chu vi và diện tích hình vuông cạnh 8cm.', solution: ['Chu vi $=8\\times4=32$ (cm)', 'Diện tích $=8^2=64$ (cm²)'] },
      { prompt: 'Bài 3. Tính diện tích tam giác có đáy 10cm, chiều cao 6cm.', solution: ['$S=\\dfrac12\\times10\\times6=30$ (cm²)'] },
      { prompt: 'Bài 4. Một mảnh vườn hình chữ nhật có chiều dài 20m, chiều rộng 15m. Tính diện tích mảnh vườn đó.', solution: ['$S=20\\times15=300$ (m²)'] },
      { prompt: 'Bài 5. Một hình vuông có diện tích 49cm². Tính cạnh và chu vi hình vuông đó.', solution: ['Cạnh $=7$cm (vì $7\\times7=49$)', 'Chu vi $=7\\times4=28$ (cm)'] },
    ],
    flashcards: [
      { front: 'Diện tích hình chữ nhật', back: '$S=a\\times b$' },
      { front: 'Diện tích hình vuông', back: '$S=a^2$' },
      { front: 'Diện tích tam giác', back: '$S=\\frac12\\times\\text{đáy}\\times\\text{chiều cao}$' },
      { front: 'Chu vi hình chữ nhật', back: '$P=2(a+b)$' },
      { front: 'Chu vi hình vuông', back: '$P=4a$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Công thức diện tích hình chữ nhật là?', options: ['S = a × b', 'S = 2(a+b)', 'S = a²', 'S = a+b'], correctIndex: 0 },
        { question: 'Công thức diện tích hình vuông là?', options: ['S = a²', 'S = 4a', 'S = a × 2', 'S = 2a'], correctIndex: 0 },
        { question: 'Công thức chu vi hình chữ nhật là?', options: ['P = 2(a+b)', 'P = a × b', 'P = 4a', 'P = a+b'], correctIndex: 0 },
        { question: 'Công thức chu vi hình vuông là?', options: ['P = 4a', 'P = a²', 'P = 2a', 'P = a × 4 × 2'], correctIndex: 0 },
        { question: 'Công thức diện tích tam giác là?', options: ['S = 1/2 × đáy × chiều cao', 'S = đáy × chiều cao', 'S = 2 × đáy × chiều cao', 'S = đáy + chiều cao'], correctIndex: 0 },
        { question: 'Đơn vị đo diện tích thường dùng là?', options: ['cm², m²', 'cm, m', 'cm³, m³', 'Không có đơn vị'], correctIndex: 0 },
        { question: 'Diện tích hình chữ nhật dài 9cm rộng 4cm là?', options: ['36', '26', '13', '18'], correctIndex: 0 },
        { question: 'Diện tích hình vuông cạnh 6cm là?', options: ['36', '24', '12', '18'], correctIndex: 0 },
        { question: 'Chu vi hình chữ nhật dài 15cm rộng 8cm là?', options: ['46', '23', '120', '30'], correctIndex: 0 },
        { question: 'Diện tích tam giác đáy 12cm cao 5cm là?', options: ['30', '60', '17', '35'], correctIndex: 0 },
        { question: 'Một hình vuông có chu vi 24cm. Diện tích hình vuông đó là?', options: ['36', '24', '12', '48'], correctIndex: 0 },
        { question: 'Một hình chữ nhật có diện tích 48cm², chiều rộng 6cm. Chiều dài là?', options: ['8', '6', '42', '54'], correctIndex: 0 },
        { question: 'Một mảnh vườn hình chữ nhật có chu vi 60m, chiều dài 20m. Diện tích mảnh vườn là?', options: ['200', '300', '600', '100'], correctIndex: 0 },
        { question: 'Một tam giác có diện tích 24cm², chiều cao 6cm. Độ dài đáy là?', options: ['8', '4', '12', '144'], correctIndex: 0 },
        { question: 'Một hình vuông có diện tích bằng diện tích hình chữ nhật 9cm × 4cm. Cạnh hình vuông đó là?', options: ['6', '36', '9', '4'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Một hình chữ nhật có chiều dài 14cm, chiều rộng 6cm. Tính chu vi và diện tích hình chữ nhật đó.', solution: ['Chu vi $=(14+6)\\times2=40$ (cm)', 'Diện tích $=14\\times6=84$ (cm²)'] },
        {
          prompt: 'Câu 2 (Vận dụng). Một mảnh đất hình vuông có diện tích 144m². Tính độ dài lưới thép cần dùng để rào xung quanh mảnh đất (chính là chu vi).',
          solution: ['Cạnh $=12$m (vì $12\\times12=144$)', 'Chu vi $=12\\times4=48$ (m)'],
        },
      ],
    },
  },

  'l6-tinh-doi-xung': {
    title: 'Tính đối xứng của hình phẳng',
    theory: {
      cards: [
        {
          title: 'Trục đối xứng',
          formulas: [],
          legend: ['Một hình có trục đối xứng nếu có một đường thẳng chia hình đó thành hai phần trùng khít nhau khi gấp lại theo đường thẳng đó'],
          note: 'Ví dụ: hình vuông có 4 trục đối xứng, hình tròn có vô số trục đối xứng.',
        },
        {
          title: 'Tâm đối xứng',
          formulas: [],
          legend: ['Một hình có tâm đối xứng $O$ nếu khi quay hình đó $180°$ quanh $O$ thì hình nhận được trùng với chính nó ban đầu'],
          note: 'Ví dụ: hình bình hành, hình chữ nhật, hình thoi, hình vuông đều có tâm đối xứng (là giao điểm hai đường chéo).',
        },
      ],
    },
    video: { caption: '00:00 / 08:45 — tinh_doi_xung_baigiang.mp4' },
    quiz: [
      { question: 'Hình vuông có bao nhiêu trục đối xứng?', options: ['4', '2', '1', '0'], correctIndex: 0 },
      { question: 'Hình tròn có bao nhiêu trục đối xứng?', options: ['Vô số', '1', '2', '4'], correctIndex: 0 },
      { question: 'Hình nào sau đây có tâm đối xứng?', options: ['Hình bình hành', 'Tam giác đều', 'Hình thang cân (thường)', 'Tam giác vuông'], correctIndex: 0 },
      { question: 'Tam giác đều có bao nhiêu trục đối xứng?', options: ['3', '1', '0', '6'], correctIndex: 0 },
      { question: 'Chữ cái "H" có trục đối xứng không?', options: ['Có (2 trục)', 'Không có', 'Chỉ 1 trục', 'Không xác định'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng? Kể ra.', solution: ['Có 2 trục đối xứng: hai đường thẳng nối trung điểm hai cặp cạnh đối diện.'] },
      { prompt: 'Bài 2. Hình thoi có bao nhiêu trục đối xứng?', solution: ['Có 2 trục đối xứng, chính là hai đường chéo của hình thoi.'] },
      {
        prompt: 'Bài 3. Giải thích vì sao hình bình hành (không đặc biệt) có tâm đối xứng nhưng không có trục đối xứng.',
        solution: ['Quay $180°$ quanh giao điểm hai đường chéo thì hình bình hành trùng khít với chính nó (có tâm đối xứng).', 'Nhưng không tồn tại đường thẳng nào gấp hình lại làm hai nửa trùng khít (không có trục đối xứng).'],
      },
      { prompt: 'Bài 4. Kể tên 3 chữ cái in hoa có trục đối xứng.', solution: ['Ví dụ: A, B, M, T, U, V, W, Y (mỗi chữ có ít nhất 1 trục đối xứng).'] },
      { prompt: 'Bài 5. Một lá cờ hình chữ nhật có một ngôi sao 5 cánh đặt đúng tâm. Lá cờ đó có trục đối xứng không?', solution: ['Có — trục đối xứng dọc đi qua tâm ngôi sao và tâm hình chữ nhật (nếu ngôi sao đặt cân đối tại tâm).'] },
    ],
    flashcards: [
      { front: 'Trục đối xứng', back: 'Đường thẳng chia hình thành 2 phần trùng khít khi gấp lại' },
      { front: 'Tâm đối xứng', back: 'Điểm O sao cho quay hình 180° quanh O thì hình trùng chính nó' },
      { front: 'Số trục đối xứng của hình vuông', back: '4' },
      { front: 'Số trục đối xứng của tam giác đều', back: '3' },
      { front: 'Số trục đối xứng của hình tròn', back: 'Vô số' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Trục đối xứng là gì?', options: ['Đường thẳng chia hình thành 2 phần trùng khít', 'Điểm đặc biệt của hình', 'Đường chéo của hình', 'Cạnh dài nhất của hình'], correctIndex: 0 },
        { question: 'Tâm đối xứng là gì?', options: ['Điểm mà quay hình 180° quanh đó hình trùng chính nó', 'Giao điểm 2 cạnh', 'Trung điểm 1 cạnh', 'Đỉnh của hình'], correctIndex: 0 },
        { question: 'Hình vuông có bao nhiêu trục đối xứng?', options: ['4', '2', '1', '0'], correctIndex: 0 },
        { question: 'Hình tròn có bao nhiêu trục đối xứng?', options: ['Vô số', '1', '2', '4'], correctIndex: 0 },
        { question: 'Tam giác đều có bao nhiêu trục đối xứng?', options: ['3', '1', '0', '6'], correctIndex: 0 },
        { question: 'Hình chữ nhật (không phải hình vuông) có bao nhiêu trục đối xứng?', options: ['2', '4', '1', '0'], correctIndex: 0 },
        { question: 'Hình thoi có bao nhiêu trục đối xứng?', options: ['2', '4', '1', '0'], correctIndex: 0 },
        { question: 'Hình bình hành (không đặc biệt) có tâm đối xứng không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ có trục đối xứng'], correctIndex: 0 },
        { question: 'Hình vuông có tâm đối xứng không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ có trục đối xứng'], correctIndex: 0 },
        { question: 'Chữ cái nào sau đây có trục đối xứng?', options: ['A', 'F', 'G', 'P'], correctIndex: 0 },
        { question: 'Hình lục giác đều có bao nhiêu trục đối xứng?', options: ['6', '3', '4', '12'], correctIndex: 0 },
        { question: 'Một hình thang cân có bao nhiêu trục đối xứng?', options: ['1', '2', '0', '4'], correctIndex: 0 },
        { question: 'Trong các chữ cái sau, chữ nào chỉ có tâm đối xứng mà không có trục đối xứng?', options: ['S', 'O', 'A', 'H'], correctIndex: 0 },
        { question: 'Hình vuông và hình chữ nhật (không phải hình vuông) đều có tâm đối xứng. Hình nào có nhiều trục đối xứng hơn?', options: ['Hình vuông', 'Hình chữ nhật', 'Bằng nhau', 'Không xác định'], correctIndex: 0 },
        { question: 'Ghép 2 tam giác đều bằng nhau theo 1 cạnh chung sẽ tạo thành hình gì?', options: ['Hình thoi', 'Hình vuông', 'Hình chữ nhật', 'Hình lục giác'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Kể tên các trục đối xứng của một hình vuông (mô tả vị trí).',
          solution: ['Hình vuông có 4 trục đối xứng: 2 đường chéo và 2 đường thẳng nối trung điểm các cặp cạnh đối diện.'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một biển báo giao thông hình tam giác đều. Hỏi biển báo đó có tất cả bao nhiêu trục đối xứng? Mô tả vị trí các trục đó.',
          solution: [
            'Tam giác đều có tất cả 3 trục đối xứng.',
            'Mỗi trục đi qua một đỉnh và trung điểm của cạnh đối diện với đỉnh đó.',
          ],
        },
      ],
    },
  },
}
