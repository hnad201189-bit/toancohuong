import { EXAM_DEFAULT } from './examDefault.mjs'

export const TOAN_UNG_DUNG = {
  'mo-hinh-hoa-thuc-te': {
    title: 'Toán thực tế — mô hình hoá',
    theory: {
      cards: [
        {
          title: 'Quy trình mô hình hoá toán học',
          formulas: ['\\text{B1} \\to \\text{B2} \\to \\text{B3} \\to \\text{B4}'],
          note: 'Mẹo: quy trình 4 bước — B1: xác định đại lượng cần mô hình hoá; B2: lập hàm số/phương trình mô tả; B3: giải bài toán; B4: đối chiếu kết quả với thực tế.',
        },
        {
          title: 'Mô hình hoá bằng hàm số',
          formulas: ['y=f(x)'],
          note: 'Mẹo: nhiều bài toán thực tế (chi phí, doanh thu, quãng đường...) đều được mô hình hoá bằng một hàm số y = f(x), với x là đại lượng thay đổi và y là đại lượng cần tính.',
        },
      ],
    },
    video: { caption: '00:00 / 12:00 — mo_hinh_hoa_thuc_te_baigiang.mp4' },
    quiz: [
      {
        question: 'Bước đầu tiên trong quy trình mô hình hoá toán học là gì?',
        options: ['Giải bài toán', 'Xác định đại lượng và lập mô hình', 'Đối chiếu thực tế', 'Vẽ đồ thị'],
        correctIndex: 1,
      },
      {
        question: 'Một taxi tính giá cước y (nghìn đồng) theo quãng đường x (km): y = 10x + 15. Giá cước cho 5km là?',
        options: ['50', '55', '65', '75'],
        correctIndex: 2,
      },
      {
        question: 'Hàm số nào phù hợp để mô hình hoá "chi phí tỉ lệ thuận với số lượng sản phẩm"?',
        options: ['Hàm hằng', 'Hàm bậc nhất qua gốc toạ độ', 'Hàm bậc hai', 'Hàm mũ'],
        correctIndex: 1,
      },
      {
        question: 'Bước cuối cùng trong quy trình mô hình hoá là gì?',
        options: ['Lập mô hình', 'Giải mô hình', 'Đối chiếu kết quả với thực tế', 'Không có bước cuối'],
        correctIndex: 2,
      },
      {
        question: 'Tính thể tích một bể nước hình hộp chữ nhật là ví dụ mô hình hoá bằng công cụ nào?',
        options: ['Hàm số', 'Hình học', 'Xác suất', 'Thống kê'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt:
          'Bài 1. Một cửa hàng bán áo với giá 200.000đ/cái, chi phí cố định 500.000đ. Lập hàm số biểu diễn lợi nhuận y theo số áo bán được x.',
        solution: ['$y=200000x-500000$'],
      },
      {
        prompt: 'Bài 2. Với hàm số ở Bài 1, tính lợi nhuận khi bán được 10 áo.',
        solution: ['$y=200000\\cdot10-500000=1\\,500\\,000$ (đồng)'],
      },
      {
        prompt: 'Bài 3. Với hàm số ở Bài 1, tìm số áo tối thiểu để không bị lỗ.',
        solution: [
          '$200000x-500000\\ge0 \\Leftrightarrow x\\ge2.5$',
          'Vì x nguyên nên cần bán tối thiểu $x=3$ áo.',
        ],
      },
      {
        prompt: 'Bài 4. Một vật rơi tự do có quãng đường s (mét) theo thời gian t (giây) là s = 5t². Tính quãng đường vật rơi sau 3 giây.',
        solution: ['$s=5\\cdot3^2=45$ (mét)'],
      },
      {
        prompt: 'Bài 5. Với công thức ở Bài 4, sau bao lâu vật rơi được 80 mét?',
        solution: ['$5t^2=80 \\Leftrightarrow t^2=16 \\Leftrightarrow t=4$ (giây, nhận nghiệm dương)'],
      },
    ],
    flashcards: [
      { front: 'Bước 1 của quy trình mô hình hoá', back: 'Xác định đại lượng, lập mô hình toán học' },
      { front: 'Bước cuối của quy trình mô hình hoá', back: 'Đối chiếu kết quả với thực tế' },
      { front: 'Hàm số mô hình hoá chi phí tuyến tính', back: '$y=ax+b$' },
      { front: 'Công thức quãng đường rơi tự do', back: '$s=\\dfrac12 gt^2 \\approx 5t^2$' },
      { front: 'Mô hình hoá toán học là gì', back: 'Chuyển bài toán thực tế thành bài toán toán học' },
    ],
    exam: EXAM_DEFAULT,
  },

  'bai-toan-toi-uu': {
    title: 'Bài toán tối ưu',
    theory: {
      cards: [
        {
          title: 'Các bước giải bài toán tối ưu',
          formulas: ['\\text{B1} \\to \\text{B2} \\to \\text{B3}'],
          note: 'B1: lập hàm mục tiêu F(x); B2: xác định miền giá trị hợp lý của x; B3: tìm giá trị lớn nhất/nhỏ nhất của F(x) trên miền đó.',
        },
        {
          title: 'Bất đẳng thức Cô-si (AM–GM)',
          formulas: ['a+b\\ge 2\\sqrt{ab}\\ \\ (a,b\\ge0)'],
          note: 'Mẹo: BĐT Cô-si thường dùng để tìm GTNN của tổng khi tích không đổi (hoặc GTLN của tích khi tổng không đổi); dấu "=" xảy ra khi a = b.',
        },
      ],
    },
    video: { caption: '00:00 / 13:45 — bai_toan_toi_uu_baigiang.mp4' },
    quiz: [
      {
        question: 'Một mảnh vườn hình chữ nhật có chu vi 40m. Diện tích lớn nhất khi mảnh vườn có hình dạng gì?',
        options: ['Hình vuông', 'Hình chữ nhật dài', 'Không xác định', 'Hình tam giác'],
        correctIndex: 0,
      },
      { question: 'Diện tích lớn nhất của mảnh vườn chu vi 40m (Bài trên) là bao nhiêu?', options: ['100', '200', '400', '40'], correctIndex: 0 },
      { question: 'Theo BĐT Cô-si, với a, b ≥ 0 thì a + b lớn hơn hoặc bằng?', options: ['2ab', '2√(ab)', '√(ab)', 'ab/2'], correctIndex: 1 },
      { question: 'Dấu "=" trong BĐT Cô-si a + b ≥ 2√(ab) xảy ra khi nào?', options: ['a = 0', 'b = 0', 'a = b', 'a = −b'], correctIndex: 2 },
      { question: 'Bước đầu tiên khi giải bài toán tối ưu là gì?', options: ['Tính đạo hàm ngay', 'Lập hàm mục tiêu', 'Vẽ đồ thị', 'Kết luận'], correctIndex: 1 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Tìm hai số dương x, y có tổng bằng 20 sao cho tích xy lớn nhất.',
        solution: [
          'Theo Cô-si: $xy\\le\\left(\\dfrac{x+y}{2}\\right)^2=100$, dấu bằng khi $x=y=10$',
          'Vậy $\\max(xy)=100$ khi $x=y=10$',
        ],
      },
      {
        prompt: 'Bài 2. Một hình chữ nhật có chu vi 24m. Tìm kích thước để diện tích lớn nhất.',
        solution: [
          'Nửa chu vi: $x+y=12$. Theo Cô-si: $xy\\le\\dfrac{(x+y)^2}{4}=36$, dấu bằng khi $x=y=6$',
          'Vậy hình vuông cạnh 6m có diện tích lớn nhất là $36\\,m^2$',
        ],
      },
      {
        prompt: 'Bài 3. Cho x > 0. Tìm giá trị nhỏ nhất của f(x) = x + 4/x.',
        solution: [
          '$x+\\dfrac4x\\ge2\\sqrt{x\\cdot\\dfrac4x}=2\\sqrt4=4$',
          'Dấu bằng khi $x=\\dfrac4x \\Leftrightarrow x=2$. Vậy $\\min f(x)=4$ tại $x=2$',
        ],
      },
      {
        prompt:
          'Bài 4. Có 100m lưới để rào một mảnh vườn hình chữ nhật, một cạnh dựa vào tường có sẵn (không cần rào). Tìm kích thước để diện tích lớn nhất.',
        solution: [
          'Gọi x là cạnh vuông góc tường, y là cạnh song song tường: $2x+y=100 \\Rightarrow y=100-2x$',
          '$S=xy=x(100-2x)=100x-2x^2$',
          '$S\'=100-4x=0 \\Rightarrow x=25,\\ y=50$',
          'Diện tích lớn nhất: $S=25\\cdot50=1250\\ (m^2)$',
        ],
      },
      {
        prompt: 'Bài 5. Tìm giá trị nhỏ nhất của f(x) = 2x + 8/x với x > 0.',
        solution: [
          '$2x+\\dfrac8x\\ge2\\sqrt{2x\\cdot\\dfrac8x}=2\\sqrt{16}=8$',
          'Dấu bằng khi $2x=\\dfrac8x \\Leftrightarrow x=2$. Vậy $\\min f(x)=8$ tại $x=2$',
        ],
      },
    ],
    flashcards: [
      { front: 'Bất đẳng thức Cô-si (AM–GM) 2 số', back: '$a+b\\ge2\\sqrt{ab}\\ (a,b\\ge0)$' },
      { front: 'Dấu bằng trong BĐT Cô-si', back: '$a=b$' },
      { front: 'Các bước giải bài toán tối ưu', back: 'Lập hàm mục tiêu, xác định miền, tìm max/min' },
      { front: 'GTNN của x + k/x với x, k > 0', back: '$2\\sqrt{k}$ tại $x=\\sqrt{k}$' },
      { front: 'Diện tích hình chữ nhật chu vi cố định lớn nhất khi', back: 'Hình đó là hình vuông' },
    ],
    exam: EXAM_DEFAULT,
  },

  'tu-duy-logic': {
    title: 'Tư duy logic — suy luận',
    theory: {
      cards: [
        {
          title: 'Mệnh đề và phép kéo theo',
          formulas: ['P\\Rightarrow Q'],
          note: 'Mẹo: mệnh đề "P⟹Q" chỉ sai khi P đúng mà Q sai; các trường hợp còn lại đều đúng (kể cả khi P sai thì P⟹Q luôn đúng).',
        },
        {
          title: 'Mệnh đề đảo, phản đảo và phản chứng',
          formulas: ['\\neg Q \\Rightarrow \\neg P \\ \\equiv\\ P\\Rightarrow Q'],
          note: 'Mẹo chứng minh phản chứng: giả sử kết luận sai, suy ra điều vô lý (mâu thuẫn với giả thiết), từ đó kết luận ban đầu đúng.',
        },
      ],
    },
    video: { caption: '00:00 / 11:15 — tu_duy_logic_baigiang.mp4' },
    quiz: [
      { question: 'Mệnh đề "P ⟹ Q" chỉ sai khi nào?', options: ['P đúng, Q đúng', 'P đúng, Q sai', 'P sai, Q đúng', 'P sai, Q sai'], correctIndex: 1 },
      { question: 'Mệnh đề đảo của "P ⟹ Q" là?', options: ['Q ⟹ P', '¬P ⟹ ¬Q', '¬Q ⟹ ¬P', 'P ⟺ Q'], correctIndex: 0 },
      { question: 'Mệnh đề phản đảo (tương đương với mệnh đề gốc) của "P ⟹ Q" là?', options: ['Q ⟹ P', '¬Q ⟹ ¬P', '¬P ⟹ Q', 'P ⟹ ¬Q'], correctIndex: 1 },
      { question: 'Phương pháp chứng minh phản chứng bắt đầu bằng cách nào?', options: ['Giả sử kết luận đúng', 'Giả sử kết luận sai', 'Chứng minh trực tiếp', 'Vẽ hình'], correctIndex: 1 },
      {
        question: 'Suy luận quy nạp toán học thường dùng để chứng minh mệnh đề đúng với?',
        options: ['Một giá trị cụ thể', 'Mọi số tự nhiên n ≥ n0', 'Số thực bất kỳ', 'Không dùng được trong toán học'],
        correctIndex: 1,
      },
    ],
    essays: [
      {
        prompt:
          'Bài 1. Xét P: "n chia hết cho 6" và Q: "n chia hết cho 2 và 3". Phát biểu mệnh đề P ⟹ Q và xét tính đúng sai.',
        solution: [
          'P ⟹ Q: "Nếu n chia hết cho 6 thì n chia hết cho 2 và 3".',
          'Mệnh đề này đúng, vì $6=2\\times3$.',
        ],
      },
      {
        prompt: 'Bài 2. Viết mệnh đề đảo của mệnh đề ở Bài 1 và xét tính đúng sai.',
        solution: [
          'Mệnh đề đảo: "Nếu n chia hết cho 2 và 3 thì n chia hết cho 6".',
          'Mệnh đề này đúng, vì 2 và 3 nguyên tố cùng nhau nên n chia hết cho cả hai thì chia hết cho $2\\times3=6$.',
        ],
      },
      {
        prompt: 'Bài 3. Chứng minh bằng phản chứng: "Nếu n² chẵn thì n chẵn".',
        solution: [
          'Giả sử n lẻ, đặt $n=2k+1$.',
          '$n^2=4k^2+4k+1$ là số lẻ, mâu thuẫn với giả thiết n² chẵn.',
          'Vậy n phải chẵn.',
        ],
      },
      {
        prompt: 'Bài 4. Dùng quy nạp toán học chứng minh: 1 + 2 + ⋯ + n = n(n+1)/2 với mọi n ≥ 1.',
        solution: [
          'Bước cơ sở, $n=1$: $1=\\dfrac{1\\cdot2}{2}$ (đúng).',
          'Bước quy nạp: giả sử đúng với $n=k$, tức $1+\\cdots+k=\\dfrac{k(k+1)}{2}$.',
          '$1+\\cdots+k+(k+1)=\\dfrac{k(k+1)}{2}+(k+1)=\\dfrac{(k+1)(k+2)}{2}$, đúng với $n=k+1$.',
          'Vậy công thức đúng với mọi $n\\ge1$.',
        ],
      },
      {
        prompt:
          'Bài 5. Cho mệnh đề "Nếu tứ giác là hình vuông thì tứ giác đó là hình chữ nhật" (đúng). Viết mệnh đề phản đảo và xác nhận tính đúng sai.',
        solution: [
          'Phản đảo: "Nếu tứ giác không là hình chữ nhật thì tứ giác đó không là hình vuông".',
          'Mệnh đề phản đảo luôn cùng giá trị chân lý với mệnh đề gốc, vậy mệnh đề này đúng.',
        ],
      },
    ],
    flashcards: [
      { front: 'Mệnh đề kéo theo P ⟹ Q chỉ sai khi', back: 'P đúng, Q sai' },
      { front: 'Mệnh đề đảo của P ⟹ Q', back: '$Q\\Rightarrow P$' },
      { front: 'Mệnh đề phản đảo của P ⟹ Q', back: '$\\neg Q\\Rightarrow \\neg P$' },
      { front: 'Mệnh đề phản đảo có tính chất gì', back: 'Tương đương với mệnh đề gốc' },
      { front: 'Hai bước của chứng minh quy nạp', back: 'Bước cơ sở và bước quy nạp' },
    ],
    exam: EXAM_DEFAULT,
  },
}
