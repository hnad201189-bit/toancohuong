import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_HINH_HOC_CO_BAN = {
  'l6-diem-duong-thang': {
    title: 'Điểm, đường thẳng, ba điểm thẳng hàng',
    theory: {
      cards: [
        {
          title: 'Điểm và đường thẳng',
          formulas: [],
          legend: ['Điểm: kí hiệu bằng chữ cái in hoa (A, B, C...)', 'Đường thẳng: kí hiệu bằng chữ cái in thường (a, b, xy...) hoặc bằng hai điểm thuộc nó (đường thẳng AB)'],
          note: 'Mẹo: qua hai điểm phân biệt, có một và chỉ một đường thẳng.',
        },
        {
          title: 'Ba điểm thẳng hàng',
          formulas: [],
          legend: ['Ba điểm thẳng hàng: ba điểm cùng thuộc một đường thẳng', 'Trong ba điểm thẳng hàng, có đúng một điểm nằm giữa hai điểm còn lại'],
          note: 'Mẹo kiểm tra: đặt mép thước qua hai điểm, nếu điểm thứ ba cũng nằm trên mép thước thì ba điểm đó thẳng hàng.',
        },
      ],
    },
    video: { caption: '00:00 / 08:05 — diem_duong_thang_baigiang.mp4' },
    quiz: [
      { question: 'Kí hiệu điểm thường dùng chữ gì?', options: ['Chữ in hoa', 'Chữ in thường', 'Chữ số', 'Chữ Hy Lạp'], correctIndex: 0 },
      { question: 'Qua hai điểm phân biệt có bao nhiêu đường thẳng?', options: ['1', '2', '0', 'Vô số'], correctIndex: 0 },
      { question: 'Ba điểm thẳng hàng là ba điểm như thế nào?', options: ['Cùng thuộc một đường thẳng', 'Tạo thành tam giác', 'Cách đều nhau', 'Không thuộc đường thẳng nào'], correctIndex: 0 },
      { question: 'Trong ba điểm thẳng hàng, có bao nhiêu điểm nằm giữa hai điểm còn lại?', options: ['1', '2', '0', '3'], correctIndex: 0 },
      { question: 'Hai đường thẳng phân biệt có thể có bao nhiêu điểm chung?', options: ['0 hoặc 1', 'Luôn luôn 1', 'Luôn luôn 2', 'Vô số'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Nêu cách kiểm tra ba điểm A, B, C có thẳng hàng hay không bằng thước thẳng.', solution: ['Đặt mép thước qua hai điểm A, B. Nếu điểm C cũng nằm trên mép thước thì ba điểm A, B, C thẳng hàng; nếu không thì chúng không thẳng hàng.'] },
      { prompt: 'Bài 2. Cho ba điểm A, B, C thẳng hàng, B nằm giữa A và C. Nêu một hệ thức đúng liên hệ AB, BC, AC.', solution: ['$AB+BC=AC$'] },
      { prompt: 'Bài 3. Giải thích vì sao qua một điểm có vô số đường thẳng đi qua.', solution: ['Vì có thể vẽ nhiều đường thẳng khác nhau, mỗi đường xoay quanh điểm đó theo một hướng khác nhau, nên có vô số đường thẳng đi qua một điểm cho trước.'] },
      { prompt: 'Bài 4. Cho 4 điểm A, B, C, D, trong đó không có 3 điểm nào thẳng hàng. Có bao nhiêu đường thẳng đi qua 2 trong 4 điểm đó?', solution: ['Số đường thẳng $=C_4^2=\\dfrac{4\\times3}{2}=6$'] },
      { prompt: 'Bài 5. Vẽ đường thẳng d và lấy 3 điểm M, N, P thuộc d. Có bao nhiêu cách gọi tên đường thẳng d bằng hai trong ba điểm đó?', solution: ['Có 3 cách: MN, MP, NP (đều là tên gọi khác nhau của cùng đường thẳng d).'] },
    ],
    flashcards: [
      { front: 'Kí hiệu điểm', back: 'Chữ cái in hoa (A, B, C...)' },
      { front: 'Kí hiệu đường thẳng', back: 'Chữ cái in thường hoặc 2 điểm thuộc đường thẳng đó' },
      { front: 'Số đường thẳng qua 2 điểm phân biệt', back: 'Duy nhất 1 đường thẳng' },
      { front: 'Ba điểm thẳng hàng', back: 'Ba điểm cùng thuộc một đường thẳng' },
      { front: 'Tính chất 3 điểm thẳng hàng', back: 'Có đúng 1 điểm nằm giữa 2 điểm còn lại' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Điểm được kí hiệu bằng?', options: ['Chữ in hoa', 'Chữ in thường', 'Số', 'Kí hiệu đặc biệt'], correctIndex: 0 },
        { question: 'Qua 2 điểm phân biệt có bao nhiêu đường thẳng?', options: ['1', '0', '2', 'Vô số'], correctIndex: 0 },
        { question: 'Ba điểm thẳng hàng là gì?', options: ['Ba điểm cùng thuộc 1 đường thẳng', 'Ba điểm tạo tam giác', 'Ba điểm cách đều', 'Ba điểm bất kỳ'], correctIndex: 0 },
        { question: 'Trong 3 điểm thẳng hàng, có mấy điểm nằm giữa?', options: ['1', '2', '0', '3'], correctIndex: 0 },
        { question: 'Hai đường thẳng phân biệt có tối đa bao nhiêu điểm chung?', options: ['1', '0', '2', 'Vô số'], correctIndex: 0 },
        { question: 'Đường thẳng được kí hiệu bằng?', options: ['Chữ in thường hoặc 2 điểm thuộc nó', 'Chỉ số', 'Chữ Hy Lạp', 'Không có kí hiệu'], correctIndex: 0 },
        { question: 'Cho A, B, C thẳng hàng, B nằm giữa A, C, AB = 3cm, BC = 4cm. AC bằng?', options: ['7', '1', '12', '3'], correctIndex: 0 },
        { question: 'Cho 3 điểm không thẳng hàng, có thể vẽ được bao nhiêu đường thẳng qua từng cặp điểm?', options: ['3', '1', '2', '6'], correctIndex: 0 },
        { question: 'Cho 4 điểm phân biệt, không có 3 điểm nào thẳng hàng. Số đường thẳng qua 2 trong 4 điểm là?', options: ['6', '4', '8', '12'], correctIndex: 0 },
        { question: 'Nếu điểm M nằm giữa A và B thì đẳng thức nào đúng?', options: ['AM + MB = AB', 'AM − MB = AB', 'AM × MB = AB', 'AM = MB'], correctIndex: 0 },
        { question: 'Ba điểm A, B, C thẳng hàng, A nằm giữa B, C. Đẳng thức đúng là?', options: ['BA + AC = BC', 'AB + AC = BC', 'BA = AC', 'AB = BC'], correctIndex: 0 },
        { question: 'Có bao nhiêu đường thẳng phân biệt có thể vẽ qua 1 điểm cho trước?', options: ['Vô số', '1', '0', '2'], correctIndex: 0 },
        { question: 'Cho 5 điểm phân biệt, không có 3 điểm nào thẳng hàng. Số đường thẳng qua 2 trong 5 điểm là?', options: ['10', '5', '20', '15'], correctIndex: 0 },
        { question: 'Ba điểm A, B, C thẳng hàng, AB = 5cm, AC = 9cm, B nằm giữa A, C. Tính BC.', options: ['4', '14', '5', '9'], correctIndex: 0 },
        { question: 'Ba điểm A, B, C thẳng hàng theo thứ tự đó. Nếu AB = 2BC và AC = 12cm thì BC bằng?', options: ['4', '6', '8', '3'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho ba điểm A, B, C thẳng hàng với B nằm giữa A và C. Biết AB = 6cm, AC = 15cm. Tính BC.',
          solution: ['$BC=AC-AB=15-6=9$ (cm)'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho 6 điểm phân biệt trên một mặt phẳng, trong đó không có 3 điểm nào thẳng hàng. Hỏi có thể vẽ được bao nhiêu đường thẳng đi qua 2 trong 6 điểm đó?',
          solution: ['Số đường thẳng $=C_6^2=\\dfrac{6\\times5}{2}=15$'],
        },
      ],
    },
  },

  'l6-doan-thang-trung-diem': {
    title: 'Đoạn thẳng, độ dài đoạn thẳng, trung điểm',
    theory: {
      cards: [
        {
          title: 'Đoạn thẳng và độ dài đoạn thẳng',
          formulas: ['\\text{Nếu M nằm giữa A, B: } AM+MB=AB'],
          legend: ['Đoạn thẳng AB: hình gồm điểm A, điểm B và tất cả các điểm nằm giữa A và B'],
          note: 'Mẹo: nếu điểm M nằm giữa hai điểm A, B thì $AM+MB=AB$; ngược lại nếu đẳng thức này đúng thì M nằm giữa A và B.',
        },
        {
          title: 'Trung điểm của đoạn thẳng',
          formulas: ['MA=MB=\\dfrac{AB}{2}'],
          legend: ['Trung điểm M của đoạn thẳng AB là điểm nằm giữa A, B và cách đều A, B'],
          note: 'Mẹo: muốn tìm trung điểm, tính độ dài AB rồi chia đôi để được MA = MB.',
        },
      ],
    },
    video: { caption: '00:00 / 09:30 — doan_thang_trung_diem_baigiang.mp4' },
    quiz: [
      { question: 'Đoạn thẳng AB gồm những điểm nào?', options: ['Điểm A, B và các điểm nằm giữa', 'Chỉ điểm A và B', 'Chỉ các điểm nằm giữa', 'Toàn bộ đường thẳng AB'], correctIndex: 0 },
      { question: 'M là trung điểm của AB thì MA bằng?', options: ['AB/2', 'AB', '2AB', 'AB/4'], correctIndex: 0 },
      { question: 'Nếu M nằm giữa A, B thì công thức nào đúng?', options: ['AM + MB = AB', 'AM − MB = AB', 'AM = MB', 'AM × MB = AB'], correctIndex: 0 },
      { question: 'Đoạn thẳng AB dài 10cm, M là trung điểm. AM bằng?', options: ['5', '10', '20', '2,5'], correctIndex: 0 },
      { question: 'Trung điểm của một đoạn thẳng là điểm như thế nào?', options: ['Nằm giữa và cách đều 2 đầu mút', 'Chỉ nằm giữa', 'Chỉ cách đều 2 đầu mút', 'Là 1 đầu mút'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Cho đoạn thẳng AB = 12cm. Điểm M nằm giữa A, B sao cho AM = 5cm. Tính MB.', solution: ['$MB=AB-AM=12-5=7$ (cm)'] },
      { prompt: 'Bài 2. Đoạn thẳng CD = 16cm, N là trung điểm CD. Tính CN, ND.', solution: ['$CN=ND=\\dfrac{16}{2}=8$ (cm)'] },
      { prompt: 'Bài 3. Cho AB = 20cm, M là trung điểm AB, K là trung điểm AM. Tính AK.', solution: ['$AM=\\dfrac{20}{2}=10$ (cm)', '$AK=\\dfrac{AM}{2}=5$ (cm)'] },
      { prompt: 'Bài 4. Đoạn thẳng EF = 9cm. Điểm I nằm giữa E, F sao cho EI = IF. Hỏi I có phải trung điểm EF không? Vì sao?', solution: ['Có, vì I nằm giữa E, F và cách đều hai điểm đó ($EI=IF$).'] },
      { prompt: 'Bài 5. Cho ba điểm A, B, C thẳng hàng, AB = 8cm, BC = 8cm, B nằm giữa A, C. Hỏi B có là trung điểm AC không?', solution: ['Có, vì B nằm giữa A, C và $AB=BC$.'] },
    ],
    flashcards: [
      { front: 'Đoạn thẳng AB', back: 'Gồm điểm A, B và các điểm nằm giữa A, B' },
      { front: 'M nằm giữa A, B', back: '$AM+MB=AB$' },
      { front: 'Trung điểm M của AB', back: 'M nằm giữa A, B và $MA=MB=\\frac{AB}{2}$' },
      { front: 'Điều kiện là trung điểm', back: 'Nằm giữa hai đầu mút và cách đều hai đầu mút' },
      { front: 'AB = 10cm, trung điểm M', back: '$AM=MB=5$cm' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Đoạn thẳng AB gồm những điểm nào?', options: ['A, B và các điểm nằm giữa', 'Chỉ A và B', 'Chỉ điểm giữa', 'Cả đường thẳng AB'], correctIndex: 0 },
        { question: 'M là trung điểm AB nghĩa là gì?', options: ['M nằm giữa và cách đều A, B', 'M nằm giữa A, B', 'M cách đều A, B', 'M trùng A hoặc B'], correctIndex: 0 },
        { question: 'Công thức đúng khi M nằm giữa A, B là?', options: ['AM + MB = AB', 'AM − MB = AB', 'AM = MB', 'AM × MB = AB'], correctIndex: 0 },
        { question: 'Nếu M là trung điểm AB thì AM bằng?', options: ['AB/2', 'AB', '2AB', 'AB/3'], correctIndex: 0 },
        { question: 'Đoạn thẳng AB dài 8cm, trung điểm M thì MB bằng?', options: ['4', '8', '2', '16'], correctIndex: 0 },
        { question: 'Một đoạn thẳng có bao nhiêu trung điểm?', options: ['1', '2', '0', 'Vô số'], correctIndex: 0 },
        { question: 'AB = 14cm, M nằm giữa sao cho AM = 6cm. MB bằng?', options: ['8', '20', '6', '7'], correctIndex: 0 },
        { question: 'CD = 18cm, N là trung điểm. CN bằng?', options: ['9', '18', '4,5', '36'], correctIndex: 0 },
        { question: 'EF = 24cm, I là trung điểm EF, K là trung điểm EI. EK bằng?', options: ['6', '12', '3', '18'], correctIndex: 0 },
        { question: 'AB = 16cm. Điểm M nằm giữa A, B với AM = MB. AM bằng?', options: ['8', '16', '4', '32'], correctIndex: 0 },
        { question: 'Ba điểm A, B, C thẳng hàng, AB = 7cm, BC = 7cm, B nằm giữa. B có là trung điểm AC không?', options: ['Có', 'Không', 'Không xác định', 'Chỉ khi AC = 7'], correctIndex: 0 },
        { question: 'AB = 9cm, M nằm giữa sao cho AM = 4cm. MB bằng?', options: ['5', '4', '13', '9'], correctIndex: 0 },
        { question: 'AB = 30cm. M là trung điểm AB. N là trung điểm MB. Tính AN.', options: ['22,5', '15', '7,5', '30'], correctIndex: 0 },
        { question: 'Đoạn thẳng AB = 24cm, C nằm giữa A, B với AC = 3BC. Tính BC.', options: ['6', '18', '8', '12'], correctIndex: 0 },
        { question: 'M là trung điểm AB, biết AM = 7cm. Tính AB.', options: ['14', '7', '21', '3,5'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Cho đoạn thẳng AB = 22cm. Điểm M nằm giữa A và B sao cho AM = 9cm. Tính MB.', solution: ['$MB=22-9=13$ (cm)'] },
        {
          prompt: 'Câu 2 (Vận dụng). Cho đoạn thẳng AB = 36cm. Gọi M là trung điểm AB, N là trung điểm AM. Tính độ dài đoạn AN và NB.',
          solution: ['$AM=\\dfrac{36}{2}=18$ (cm)', '$AN=\\dfrac{AM}{2}=9$ (cm)', '$NB=AB-AN=36-9=27$ (cm)'],
        },
      ],
    },
  },

  'l6-tia-va-goc': {
    title: 'Tia, góc và số đo góc',
    theory: {
      cards: [
        {
          title: 'Tia',
          formulas: [],
          legend: ['Tia gốc O: hình gồm điểm O và một phần đường thẳng bị chia ra bởi O', 'Hai tia đối nhau: chung gốc và hợp thành một đường thẳng'],
          note: 'Mẹo: mỗi điểm trên một đường thẳng đều chia đường thẳng đó thành 2 tia đối nhau.',
        },
        {
          title: 'Góc và số đo góc',
          formulas: ['0°<\\widehat{xOy}\\le180°'],
          legend: ['Góc: hình gồm 2 tia chung gốc, gốc chung gọi là đỉnh của góc', 'Số đo góc được đo bằng thước đo góc, đơn vị độ (°)'],
          note: 'Mẹo đo góc: đặt tâm thước trùng đỉnh góc, một cạnh của góc trùng vạch 0°, đọc số đo tại cạnh còn lại.',
        },
      ],
    },
    video: { caption: '00:00 / 09:00 — tia_va_goc_baigiang.mp4' },
    quiz: [
      { question: 'Tia gồm những điểm nào?', options: ['Gốc và 1 phần đường thẳng', 'Toàn bộ đường thẳng', 'Chỉ điểm gốc', 'Đoạn thẳng có 2 đầu'], correctIndex: 0 },
      { question: 'Hai tia đối nhau có đặc điểm gì?', options: ['Chung gốc, tạo thành đường thẳng', 'Không chung gốc', 'Song song với nhau', 'Vuông góc với nhau'], correctIndex: 0 },
      { question: 'Góc được tạo bởi?', options: ['2 tia chung gốc', '2 đường thẳng song song', '1 đoạn thẳng', '2 điểm'], correctIndex: 0 },
      { question: 'Đơn vị đo góc thường dùng là?', options: ['Độ (°)', 'cm', 'm', 'kg'], correctIndex: 0 },
      { question: 'Đỉnh của góc là?', options: ['Gốc chung của 2 tia', 'Điểm bất kỳ trên tia', 'Trung điểm 1 cạnh', 'Điểm xa nhất'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Vẽ góc xOy và nêu tên đỉnh, các cạnh của góc.', solution: ['Đỉnh: O. Hai cạnh: tia Ox và tia Oy.'] },
      { prompt: 'Bài 2. Cho tia Ox, lấy điểm A trên tia Ox (A khác O). Nêu đặc điểm của tia đối của tia Ox.', solution: ['Tia đối của Ox có cùng gốc O, là phần còn lại của đường thẳng chứa Ox (không chứa điểm A).'] },
      { prompt: 'Bài 3. Nêu cách đặt thước đo góc để đo góc xOy.', solution: ['Đặt tâm thước trùng đỉnh O, một cạnh (ví dụ Ox) trùng vạch 0°, đọc số đo tại vạch mà cạnh Oy đi qua.'] },
      { prompt: 'Bài 4. Nêu sự khác nhau giữa tia và đoạn thẳng.', solution: ['Tia có một đầu (gốc) và kéo dài vô tận về một phía; đoạn thẳng có hai đầu mút xác định.'] },
      { prompt: 'Bài 5. Vẽ 3 tia chung gốc O: Ox, Oy, Oz (đôi một không trùng nhau). Có bao nhiêu góc được tạo thành?', solution: ['Có 3 góc: $\\widehat{xOy},\\ \\widehat{yOz},\\ \\widehat{xOz}$'] },
    ],
    flashcards: [
      { front: 'Tia gốc O', back: 'Gồm điểm O và 1 phần đường thẳng bị chia bởi O' },
      { front: 'Hai tia đối nhau', back: 'Chung gốc, hợp thành 1 đường thẳng' },
      { front: 'Góc', back: 'Hình gồm 2 tia chung gốc' },
      { front: 'Đỉnh của góc', back: 'Gốc chung của 2 tia tạo thành góc' },
      { front: 'Đơn vị đo góc', back: 'Độ (°)' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tia gồm những gì?', options: ['Gốc và 1 phần đường thẳng', 'Toàn đường thẳng', 'Chỉ điểm gốc', '2 đầu mút'], correctIndex: 0 },
        { question: 'Hai tia đối nhau tạo thành?', options: ['Một đường thẳng', 'Một đoạn thẳng', 'Một góc vuông', 'Hai đường song song'], correctIndex: 0 },
        { question: 'Góc gồm mấy tia chung gốc?', options: ['2', '1', '3', '0'], correctIndex: 0 },
        { question: 'Đỉnh của góc là?', options: ['Gốc chung của 2 tia', 'Trung điểm 1 cạnh', 'Điểm bất kỳ', 'Điểm xa nhất trên tia'], correctIndex: 0 },
        { question: 'Đơn vị đo góc là?', options: ['Độ', 'cm', 'm²', 'lít'], correctIndex: 0 },
        { question: 'Dụng cụ đo góc gọi là gì?', options: ['Thước đo góc', 'Thước thẳng', 'Compa', 'Êke'], correctIndex: 0 },
        { question: 'Cho 2 tia đối nhau Ox, Oy. Góc xOy có số đo bằng?', options: ['180°', '90°', '0°', '360°'], correctIndex: 0 },
        { question: 'Vẽ 4 tia chung gốc O (đôi một không trùng nhau), tạo được nhiều nhất bao nhiêu góc?', options: ['6', '4', '8', '12'], correctIndex: 0 },
        { question: 'Cho tia Ox và điểm A khác O trên Ox. Tia đối của Ox có gốc là?', options: ['O', 'A', 'Trung điểm OA', 'Không xác định'], correctIndex: 0 },
        { question: 'Góc bẹt có số đo bằng?', options: ['180°', '90°', '0°', '360°'], correctIndex: 0 },
        { question: 'Cho 3 tia chung gốc, số góc tạo thành nhiều nhất là?', options: ['3', '2', '1', '6'], correctIndex: 0 },
        { question: 'Góc có 2 cạnh trùng nhau có số đo bằng?', options: ['0°', '180°', '90°', '360°'], correctIndex: 0 },
        { question: 'Vẽ 5 tia chung gốc, đôi một không trùng nhau. Số góc tạo thành nhiều nhất là?', options: ['10', '5', '15', '20'], correctIndex: 0 },
        { question: 'Trên đường thẳng xy lấy điểm O. Có bao nhiêu tia gốc O được tạo thành?', options: ['2', '1', '3', '4'], correctIndex: 0 },
        { question: 'Cho góc xOy = 70°, tia Oz nằm giữa Ox, Oy sao cho xOz = 30°. Tính zOy.', options: ['40°', '100°', '30°', '70°'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho góc xOy = 120°. Tia Oz nằm giữa hai tia Ox và Oy sao cho góc xOz = 45°. Tính góc zOy.',
          solution: ['$\\widehat{zOy}=\\widehat{xOy}-\\widehat{xOz}=120°-45°=75°$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Vẽ 6 tia chung gốc O, đôi một không trùng nhau. Hỏi có tất cả bao nhiêu góc được tạo thành?',
          solution: ['Số góc $=C_6^2=\\dfrac{6\\times5}{2}=15$'],
        },
      ],
    },
  },

  'l6-cac-loai-goc': {
    title: 'Các loại góc, hai góc kề bù',
    theory: {
      cards: [
        {
          title: 'Các loại góc theo số đo',
          formulas: ['0°<\\text{góc nhọn}<90°', '\\text{góc vuông}=90°', '90°<\\text{góc tù}<180°', '\\text{góc bẹt}=180°'],
          legend: ['Góc nhọn: nhỏ hơn $90°$', 'Góc vuông: bằng $90°$', 'Góc tù: lớn hơn $90°$ và nhỏ hơn $180°$', 'Góc bẹt: bằng $180°$'],
          note: 'Mẹo nhớ theo thứ tự tăng dần: nhọn — vuông — tù — bẹt.',
        },
        {
          title: 'Hai góc kề bù',
          formulas: ['\\widehat{xOy}+\\widehat{yOz}=180°'],
          legend: ['Hai góc kề nhau: có 1 cạnh chung, 2 cạnh còn lại nằm về 2 phía của cạnh chung', 'Hai góc bù nhau: tổng số đo bằng $180°$', 'Hai góc kề bù: vừa kề nhau vừa bù nhau'],
          note: 'Mẹo: hai góc kề bù có tổng bằng $180°$ và hai cạnh không chung tạo thành một đường thẳng (hai tia đối nhau).',
        },
      ],
    },
    video: { caption: '00:00 / 09:50 — cac_loai_goc_baigiang.mp4' },
    quiz: [
      { question: 'Góc 45° là góc gì?', options: ['Nhọn', 'Vuông', 'Tù', 'Bẹt'], correctIndex: 0 },
      { question: 'Góc 120° là góc gì?', options: ['Tù', 'Nhọn', 'Vuông', 'Bẹt'], correctIndex: 0 },
      { question: 'Góc vuông có số đo bằng?', options: ['90°', '180°', '45°', '60°'], correctIndex: 0 },
      { question: 'Hai góc kề bù có tổng số đo bằng?', options: ['180°', '90°', '360°', '0°'], correctIndex: 0 },
      { question: 'Góc bẹt có số đo bằng?', options: ['180°', '90°', '360°', '270°'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Phân loại các góc sau: 30°, 90°, 150°, 180°.', solution: ['30° là góc nhọn; 90° là góc vuông; 150° là góc tù; 180° là góc bẹt.'] },
      { prompt: 'Bài 2. Hai góc kề bù, biết một góc bằng 70°. Tính góc còn lại.', solution: ['$180°-70°=110°$'] },
      { prompt: 'Bài 3. Cho góc xOy = 90°. Đây là góc gì?', solution: ['Đây là góc vuông.'] },
      { prompt: 'Bài 4. Hai góc kề nhau có tổng số đo bằng 180° được gọi là gì?', solution: ['Được gọi là hai góc kề bù.'] },
      { prompt: 'Bài 5. Cho hai góc kề bù, góc thứ nhất gấp đôi góc thứ hai. Tính mỗi góc.', solution: ['Gọi góc nhỏ là $x$: $x+2x=180° \\Rightarrow x=60°$', 'Vậy hai góc là $60°$ và $120°$'] },
    ],
    flashcards: [
      { front: 'Góc nhọn', back: 'Nhỏ hơn 90°' },
      { front: 'Góc vuông', back: 'Bằng 90°' },
      { front: 'Góc tù', back: 'Lớn hơn 90° và nhỏ hơn 180°' },
      { front: 'Góc bẹt', back: 'Bằng 180°' },
      { front: 'Hai góc kề bù', back: 'Tổng số đo bằng 180°' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Góc nhọn có số đo trong khoảng nào?', options: ['0° − 90°', '90° − 180°', 'Bằng 90°', 'Bằng 180°'], correctIndex: 0 },
        { question: 'Góc vuông có số đo bằng?', options: ['90°', '180°', '0°', '45°'], correctIndex: 0 },
        { question: 'Góc tù có số đo trong khoảng nào?', options: ['90° − 180°', '0° − 90°', 'Bằng 90°', 'Bằng 0°'], correctIndex: 0 },
        { question: 'Góc bẹt có số đo bằng?', options: ['180°', '90°', '0°', '360°'], correctIndex: 0 },
        { question: 'Hai góc kề bù có tổng số đo bằng bao nhiêu?', options: ['180°', '90°', '360°', '0°'], correctIndex: 0 },
        { question: 'Góc 90° được gọi là góc gì?', options: ['Vuông', 'Nhọn', 'Tù', 'Bẹt'], correctIndex: 0 },
        { question: 'Góc 85° là góc gì?', options: ['Nhọn', 'Vuông', 'Tù', 'Bẹt'], correctIndex: 0 },
        { question: 'Góc 100° là góc gì?', options: ['Tù', 'Nhọn', 'Vuông', 'Bẹt'], correctIndex: 0 },
        { question: 'Hai góc kề bù, biết một góc 55°. Góc còn lại là?', options: ['125°', '35°', '145°', '90°'], correctIndex: 0 },
        { question: 'Góc 175° là góc gì?', options: ['Tù', 'Bẹt', 'Vuông', 'Nhọn'], correctIndex: 0 },
        { question: 'Hai góc kề bù, một góc gấp 3 lần góc kia. Góc nhỏ bằng?', options: ['45°', '60°', '90°', '30°'], correctIndex: 0 },
        { question: 'Góc 60° và góc 30° cộng lại bằng?', options: ['90° (vuông)', '180° (bẹt)', '60°', '120° (tù)'], correctIndex: 0 },
        { question: 'Hai góc kề bù có hiệu số đo là 40°. Số đo góc lớn là?', options: ['110°', '70°', '140°', '90°'], correctIndex: 0 },
        { question: 'Ba góc kề nhau có tổng bằng 180°, biết góc 1 = 50°, góc 2 = 60°. Tính góc 3.', options: ['70°', '110°', '130°', '60°'], correctIndex: 0 },
        { question: 'Một góc tù kề bù với một góc nhọn 35°. Tính góc tù đó.', options: ['145°', '135°', '125°', '155°'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Hai góc kề bù, biết góc thứ nhất bằng 65°. Tính góc thứ hai.', solution: ['$180°-65°=115°$'] },
        {
          prompt: 'Câu 2 (Vận dụng). Hai góc kề bù có số đo hơn kém nhau 60°. Tính số đo mỗi góc.',
          solution: ['Gọi hai góc là $a$ và $b$ ($a>b$): $a+b=180°$, $a-b=60°$', '$2a=240° \\Rightarrow a=120°,\\ b=60°$'],
        },
      ],
    },
  },
}
