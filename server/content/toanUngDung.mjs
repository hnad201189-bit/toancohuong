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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Bước đầu tiên trong quy trình mô hình hoá toán học là gì?', options: ['Xác định đại lượng và lập mô hình', 'Giải bài toán', 'Đối chiếu thực tế', 'Vẽ đồ thị'], correctIndex: 0 },
        { question: 'Bước cuối cùng trong quy trình mô hình hoá là gì?', options: ['Đối chiếu kết quả với thực tế', 'Lập mô hình', 'Giải mô hình', 'Không có bước cuối'], correctIndex: 0 },
        { question: 'Mô hình hoá toán học là gì?', options: ['Chuyển bài toán thực tế thành bài toán toán học', 'Vẽ hình minh hoạ', 'Giải phương trình bất kỳ', 'Thống kê số liệu'], correctIndex: 0 },
        { question: 'Hàm số nào phù hợp để mô hình hoá "chi phí tỉ lệ thuận với số lượng sản phẩm"?', options: ['Hàm bậc nhất qua gốc toạ độ', 'Hàm hằng', 'Hàm bậc hai', 'Hàm mũ'], correctIndex: 0 },
        { question: 'Tính thể tích một bể nước hình hộp chữ nhật là ví dụ mô hình hoá bằng công cụ nào?', options: ['Hình học', 'Hàm số', 'Xác suất', 'Thống kê'], correctIndex: 0 },
        { question: 'Quy trình mô hình hoá toán học thường gồm bao nhiêu bước cơ bản?', options: ['4', '2', '3', '5'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Một taxi tính giá cước y (nghìn đồng) theo quãng đường x (km): y = 10x + 15. Giá cước cho 5km là?', options: ['65', '50', '55', '75'], correctIndex: 0 },
        { question: 'Với hàm số ở câu trên, giá cước cho 8km là?', options: ['95', '80', '85', '105'], correctIndex: 0 },
        { question: 'Một cửa hàng bán bút giá 5.000đ/cái, chi phí cố định 200.000đ. Lợi nhuận khi bán 100 cây bút là?', options: ['300.000đ', '500.000đ', '200.000đ', '100.000đ'], correctIndex: 0 },
        { question: 'Một vật rơi tự do có quãng đường s = 5t² (m). Quãng đường sau 2 giây là?', options: ['20m', '10m', '25m', '40m'], correctIndex: 0 },
        { question: 'Với công thức s = 5t², sau bao lâu vật rơi được 45m?', options: ['3 giây', '4 giây', '9 giây', '5 giây'], correctIndex: 0 },
        { question: 'Một hình chữ nhật có chiều dài gấp đôi chiều rộng x. Diện tích S theo x là?', options: ['S = 2x²', 'S = x²', 'S = 3x²', 'S = 4x²'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Một công ty có chi phí cố định 2 triệu đồng, chi phí biến đổi 50.000đ/sản phẩm. Số sản phẩm tối đa có thể sản xuất mà tổng chi phí không vượt quá 5 triệu đồng là?', options: ['60', '50', '70', '55'], correctIndex: 0 },
        {
          question: 'Giá vé xem phim là y = 80 − 2x (nghìn đồng) khi mua theo nhóm x người (0 ≤ x ≤ 30). Doanh thu R(x) = x·y. Doanh thu khi nhóm có 10 người là?',
          options: ['600 nghìn đồng', '800 nghìn đồng', '500 nghìn đồng', '700 nghìn đồng'],
          correctIndex: 0,
        },
        { question: 'Với hàm doanh thu R(x) = 80x − 2x² ở câu trên, giá trị x để doanh thu lớn nhất là?', options: ['x = 20', 'x = 10', 'x = 30', 'x = 15'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Một hãng taxi tính cước phí y (nghìn đồng) theo quãng đường x (km) theo công thức y = 12x + 10. Tính cước phí cho quãng đường 12km, và cho biết với 130 nghìn đồng có thể đi được tối đa bao nhiêu km.',
          solution: [
            '$y(12)=12\\cdot12+10=154$ (nghìn đồng)',
            'Với $130$ nghìn đồng: $12x+10\\le130 \\Leftrightarrow x\\le10$. Vậy đi được tối đa 10km.',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một xưởng sản xuất ghế gỗ có chi phí cố định 3.000.000 đồng/tháng và chi phí nguyên liệu 150.000 đồng/ghế. Ghế được bán với giá 250.000 đồng/cái. Gọi x là số ghế sản xuất và bán được trong tháng. a) Lập hàm lợi nhuận P(x). b) Tìm số ghế tối thiểu cần bán để không bị lỗ.',
          solution: [
            'a) $P(x)=250000x-(3\\,000\\,000+150000x)=100000x-3\\,000\\,000$',
            'b) Không lỗ: $100000x-3\\,000\\,000\\ge0 \\Leftrightarrow x\\ge30$. Vậy cần bán tối thiểu 30 ghế.',
          ],
        },
      ],
    },
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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Theo BĐT Cô-si, với a, b ≥ 0 thì a + b lớn hơn hoặc bằng?', options: ['2√(ab)', '2ab', '√(ab)', 'ab/2'], correctIndex: 0 },
        { question: 'Dấu "=" trong BĐT Cô-si a + b ≥ 2√(ab) xảy ra khi nào?', options: ['a = b', 'a = 0', 'b = 0', 'a = −b'], correctIndex: 0 },
        { question: 'Bước đầu tiên khi giải bài toán tối ưu là gì?', options: ['Lập hàm mục tiêu', 'Tính đạo hàm ngay', 'Vẽ đồ thị', 'Kết luận'], correctIndex: 0 },
        { question: 'Một mảnh vườn hình chữ nhật có chu vi cố định. Diện tích lớn nhất khi mảnh vườn có hình dạng gì?', options: ['Hình vuông', 'Hình chữ nhật dài', 'Không xác định', 'Hình tam giác'], correctIndex: 0 },
        { question: 'BĐT Cô-si thường dùng để tìm GTNN của tổng khi nào?', options: ['Tích không đổi', 'Tổng không đổi', 'Hiệu không đổi', 'Thương không đổi'], correctIndex: 0 },
        { question: 'Với x, k > 0, GTNN của x + k/x đạt được tại?', options: ['x = √k', 'x = k', 'x = k/2', 'x = 2k'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Mảnh vườn hình chữ nhật chu vi 40m. Diện tích lớn nhất bằng?', options: ['100', '200', '400', '40'], correctIndex: 0 },
        { question: 'Tìm hai số dương x, y có tổng bằng 16 sao cho tích xy lớn nhất, giá trị lớn nhất đó bằng?', options: ['64', '32', '16', '128'], correctIndex: 0 },
        { question: 'Cho x > 0. Giá trị nhỏ nhất của f(x) = x + 9/x bằng?', options: ['6', '9', '3', '18'], correctIndex: 0 },
        { question: 'Giá trị nhỏ nhất ở câu trên đạt được tại x bằng?', options: ['3', '9', '6', '1'], correctIndex: 0 },
        { question: 'Cho x > 0. GTNN của f(x) = 3x + 12/x bằng?', options: ['12', '6', '36', '24'], correctIndex: 0 },
        { question: 'Với câu trên, giá trị x để đạt GTNN là?', options: ['2', '3', '4', '6'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Một hình chữ nhật có diện tích 100m². Tìm chu vi nhỏ nhất có thể.', options: ['40m', '20m', '50m', '100m'], correctIndex: 0 },
        { question: 'Có 80m lưới rào một vườn hình chữ nhật, một cạnh dựa tường (không cần rào). Diện tích lớn nhất bằng?', options: ['800m²', '1600m²', '400m²', '1000m²'], correctIndex: 0 },
        { question: 'Cho hai số dương x, y thoả x + y = 10. Giá trị nhỏ nhất của biểu thức 1/x + 1/y là?', options: ['2/5', '4/5', '1/5', '1'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Tìm giá trị nhỏ nhất của f(x) = x + 25/x với x > 0.',
          solution: [
            '$x+\\dfrac{25}{x}\\ge2\\sqrt{x\\cdot\\dfrac{25}{x}}=2\\sqrt{25}=10$',
            'Dấu bằng khi $x=\\dfrac{25}{x} \\Leftrightarrow x=5$. Vậy $\\min f(x)=10$ tại $x=5$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Người ta muốn làm một thùng hình hộp chữ nhật không nắp, đáy là hình vuông cạnh x, thể tích 4m³ (chiều cao h = 4/x²). Diện tích toàn phần là S(x) = x² + 16/x. Tìm x để S(x) nhỏ nhất.',
          solution: [
            'Tách $\\dfrac{16}{x}=\\dfrac8x+\\dfrac8x$, áp dụng Cô-si cho 3 số: $x^2+\\dfrac8x+\\dfrac8x\\ge3\\sqrt[3]{x^2\\cdot\\dfrac8x\\cdot\\dfrac8x}=3\\sqrt[3]{64}=12$',
            'Dấu "=" khi $x^2=\\dfrac8x \\Leftrightarrow x^3=8 \\Leftrightarrow x=2$',
            'Vậy $S_{\\min}=12$ tại $x=2$',
          ],
        },
      ],
    },
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
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Mệnh đề "P ⟹ Q" chỉ sai khi nào?', options: ['P đúng, Q sai', 'P đúng, Q đúng', 'P sai, Q đúng', 'P sai, Q sai'], correctIndex: 0 },
        { question: 'Mệnh đề đảo của "P ⟹ Q" là?', options: ['Q ⟹ P', '¬P ⟹ ¬Q', '¬Q ⟹ ¬P', 'P ⟺ Q'], correctIndex: 0 },
        { question: 'Mệnh đề phản đảo (tương đương mệnh đề gốc) của "P ⟹ Q" là?', options: ['¬Q ⟹ ¬P', 'Q ⟹ P', '¬P ⟹ Q', 'P ⟹ ¬Q'], correctIndex: 0 },
        { question: 'Phương pháp chứng minh phản chứng bắt đầu bằng cách nào?', options: ['Giả sử kết luận sai', 'Giả sử kết luận đúng', 'Chứng minh trực tiếp', 'Vẽ hình'], correctIndex: 0 },
        { question: 'Suy luận quy nạp toán học thường dùng để chứng minh mệnh đề đúng với?', options: ['Mọi số tự nhiên n ≥ n0', 'Một giá trị cụ thể', 'Số thực bất kỳ', 'Không dùng được trong toán học'], correctIndex: 0 },
        { question: 'Chứng minh quy nạp gồm mấy bước chính?', options: ['2 (cơ sở và quy nạp)', '1', '3', '4'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Xét P: "n chia hết cho 4", Q: "n chia hết cho 2". Mệnh đề P ⟹ Q có đúng không?', options: ['Đúng', 'Sai', 'Không xác định', 'Chỉ đúng khi n chẵn'], correctIndex: 0 },
        { question: 'Với P, Q ở câu trên, mệnh đề đảo Q ⟹ P có đúng không?', options: ['Sai', 'Đúng', 'Không xác định', 'Luôn đúng'], correctIndex: 0 },
        { question: 'Mệnh đề "Nếu tứ giác là hình vuông thì có 4 góc vuông" có mệnh đề đảo là?', options: ['Nếu tứ giác có 4 góc vuông thì là hình vuông', 'Nếu tứ giác không là hình vuông thì không có 4 góc vuông', 'Nếu tứ giác không có 4 góc vuông thì không là hình vuông', 'Tứ giác luôn có 4 góc vuông'], correctIndex: 0 },
        { question: 'Mệnh đề đảo ở câu trên có đúng không?', options: ['Sai (vì hình chữ nhật cũng có 4 góc vuông)', 'Đúng', 'Không xác định', 'Chỉ đúng với hình thoi'], correctIndex: 0 },
        { question: 'Chứng minh "n² lẻ thì n lẻ" bằng phản chứng, ta giả sử điều gì?', options: ['n chẵn', 'n lẻ', 'n = 0', 'n² chẵn'], correctIndex: 0 },
        { question: 'Trong chứng minh quy nạp cho mệnh đề đúng với n ≥ 1, bước cơ sở là kiểm tra mệnh đề đúng với?', options: ['n = 1', 'n = 0', 'n bất kỳ', 'n = 2'], correctIndex: 0 },
        // Vận dụng (3)
        {
          question: 'Mệnh đề "Nếu ab chia hết cho 5 thì a chia hết cho 5 hoặc b chia hết cho 5" (đúng). Mệnh đề phản đảo của nó là?',
          options: [
            'Nếu a không chia hết cho 5 và b không chia hết cho 5 thì ab không chia hết cho 5',
            'Nếu a chia hết cho 5 hoặc b chia hết cho 5 thì ab chia hết cho 5',
            'Nếu ab không chia hết cho 5 thì a chia hết cho 5',
            'ab luôn chia hết cho 5',
          ],
          correctIndex: 0,
        },
        { question: 'Dùng phản chứng để chứng minh "√2 là số vô tỉ", bước giả sử ban đầu là gì?', options: ['Giả sử √2 là số hữu tỉ', 'Giả sử √2 là số vô tỉ', 'Giả sử √2 = 0', 'Giả sử √2 là số nguyên'], correctIndex: 0 },
        { question: 'Chứng minh quy nạp "n³ − n chia hết cho 6 với mọi n ≥ 1". Ở bước quy nạp, ta giả sử điều gì đúng với n = k?', options: ['k³ − k chia hết cho 6', 'k chia hết cho 6', 'k³ chia hết cho 6', 'k − 1 chia hết cho 6'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Xét mệnh đề P: "Tam giác ABC đều" và Q: "Tam giác ABC cân". Phát biểu mệnh đề P ⟹ Q, xét tính đúng sai, và cho biết mệnh đề đảo có đúng không.',
          solution: [
            'P ⟹ Q: "Nếu tam giác ABC đều thì tam giác ABC cân" — mệnh đề này đúng (tam giác đều là trường hợp đặc biệt của tam giác cân).',
            'Mệnh đề đảo Q ⟹ P: "Nếu tam giác ABC cân thì tam giác ABC đều" — mệnh đề này sai (một tam giác cân có góc ở đỉnh khác 60° thì cân nhưng không đều).',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Dùng phương pháp quy nạp toán học, chứng minh rằng 2ⁿ > n với mọi số nguyên dương n.',
          solution: [
            'Bước cơ sở: $n=1$: $2^1=2>1$ (đúng).',
            'Bước quy nạp: giả sử $2^k>k$ đúng với $n=k\\ (k\\ge1)$. Ta chứng minh $2^{k+1}>k+1$.',
            '$2^{k+1}=2\\cdot2^k>2k$ (theo giả thiết quy nạp). Vì $k\\ge1$ nên $2k=k+k\\ge k+1$.',
            'Suy ra $2^{k+1}>2k\\ge k+1 \\Rightarrow 2^{k+1}>k+1$. Vậy theo nguyên lý quy nạp, $2^n>n$ đúng với mọi $n\\ge1$.',
          ],
        },
      ],
    },
  },
}
