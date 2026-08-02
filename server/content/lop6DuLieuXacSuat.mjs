import { EXAM_DEFAULT } from './examDefault.mjs'

export const LOP6_DU_LIEU_XAC_SUAT = {
  'l6-thu-thap-du-lieu': {
    title: 'Thu thập, phân loại và biểu diễn dữ liệu',
    theory: {
      cards: [
        {
          title: 'Thu thập và phân loại dữ liệu',
          formulas: [],
          legend: ['Dữ liệu định tính: mô tả bằng từ ngữ (màu sắc, sở thích...)', 'Dữ liệu định lượng: biểu diễn bằng số (chiều cao, cân nặng, điểm số...)'],
          note: 'Mẹo: khi thu thập dữ liệu cần đảm bảo tính chính xác, khách quan và đầy đủ.',
        },
        {
          title: 'Bảng thống kê',
          formulas: [],
          legend: ['Bảng thống kê trình bày dữ liệu theo hàng và cột', 'Mỗi cột có tiêu đề rõ ràng, mỗi hàng ghi thông tin của một đối tượng'],
          note: 'Mẹo: đọc bảng thống kê bằng cách xem tiêu đề trước, sau đó đến từng dòng, cột dữ liệu.',
        },
      ],
    },
    video: { caption: '00:00 / 08:35 — thu_thap_du_lieu_baigiang.mp4' },
    quiz: [
      { question: 'Dữ liệu định tính là dữ liệu như thế nào?', options: ['Mô tả bằng từ ngữ, không phải số', 'Chỉ là số', 'Không thể thu thập', 'Chỉ có 1 giá trị'], correctIndex: 0 },
      { question: 'Dữ liệu định lượng là dữ liệu như thế nào?', options: ['Biểu diễn bằng số', 'Chỉ là chữ', 'Không đo được', 'Không thể thống kê'], correctIndex: 0 },
      { question: 'Chiều cao của học sinh là loại dữ liệu gì?', options: ['Định lượng', 'Định tính', 'Không phải dữ liệu', 'Cả hai'], correctIndex: 0 },
      { question: 'Màu sắc yêu thích của học sinh là loại dữ liệu gì?', options: ['Định tính', 'Định lượng', 'Không phải dữ liệu', 'Cả hai'], correctIndex: 0 },
      { question: 'Bảng thống kê thường trình bày dữ liệu theo?', options: ['Hàng và cột', 'Chỉ theo hàng', 'Chỉ theo cột', 'Không theo quy tắc nào'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Kể 2 ví dụ về dữ liệu định tính và 2 ví dụ về dữ liệu định lượng.', solution: ['Định tính: màu sắc, sở thích.', 'Định lượng: chiều cao, điểm số.'] },
      { prompt: 'Bài 2. Một lớp có bảng thống kê điểm kiểm tra: 5 bạn đạt điểm 10, 8 bạn đạt điểm 9, 12 bạn đạt điểm 8. Lớp có bao nhiêu học sinh (theo bảng này)?', solution: ['$5+8+12=25$ (học sinh)'] },
      { prompt: 'Bài 3. Nêu các bước cơ bản khi thu thập dữ liệu.', solution: ['Xác định mục đích → chọn đối tượng → thu thập (quan sát/đo/hỏi) → ghi chép → kiểm tra lại.'] },
      { prompt: 'Bài 4. Phân loại các dữ liệu sau: cân nặng, quê quán, số lượng anh chị em, môn thể thao yêu thích.', solution: ['Định lượng: cân nặng, số lượng anh chị em.', 'Định tính: quê quán, môn thể thao yêu thích.'] },
      { prompt: 'Bài 5. Vì sao cần thu thập dữ liệu chính xác và khách quan?', solution: ['Để đảm bảo kết quả thống kê, phân tích phản ánh đúng thực tế, tránh sai lệch khi đưa ra kết luận.'] },
    ],
    flashcards: [
      { front: 'Dữ liệu định tính', back: 'Mô tả bằng từ ngữ (màu sắc, sở thích...)' },
      { front: 'Dữ liệu định lượng', back: 'Biểu diễn bằng số (chiều cao, điểm số...)' },
      { front: 'Bảng thống kê', back: 'Trình bày dữ liệu theo hàng và cột' },
      { front: 'Yêu cầu khi thu thập dữ liệu', back: 'Chính xác, khách quan, đầy đủ' },
      { front: 'Ví dụ dữ liệu định lượng', back: 'Cân nặng, chiều cao, điểm số' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Dữ liệu định tính là?', options: ['Mô tả bằng từ ngữ', 'Biểu diễn bằng số', 'Không xác định', 'Luôn là số nguyên'], correctIndex: 0 },
        { question: 'Dữ liệu định lượng là?', options: ['Biểu diễn bằng số', 'Mô tả bằng từ ngữ', 'Không đo được', 'Chỉ có 2 giá trị'], correctIndex: 0 },
        { question: 'Bảng thống kê trình bày dữ liệu theo?', options: ['Hàng và cột', 'Chỉ hàng', 'Chỉ cột', 'Không có quy tắc'], correctIndex: 0 },
        { question: 'Yêu cầu quan trọng khi thu thập dữ liệu là gì?', options: ['Chính xác, khách quan', 'Nhanh nhất có thể', 'Không cần kiểm tra', 'Chỉ cần đủ số lượng'], correctIndex: 0 },
        { question: 'Điểm kiểm tra của học sinh là dữ liệu gì?', options: ['Định lượng', 'Định tính', 'Không phải dữ liệu', 'Cả hai'], correctIndex: 0 },
        { question: 'Sở thích ăn uống là dữ liệu gì?', options: ['Định tính', 'Định lượng', 'Không phải dữ liệu', 'Cả hai'], correctIndex: 0 },
        { question: 'Trong các dữ liệu sau, đâu là dữ liệu định tính?', options: ['Màu tóc', 'Cân nặng', 'Tuổi', 'Số điện thoại'], correctIndex: 0 },
        { question: 'Trong các dữ liệu sau, đâu là dữ liệu định lượng?', options: ['Chiều cao', 'Quê quán', 'Giới tính', 'Sở thích'], correctIndex: 0 },
        { question: 'Một bảng ghi số học sinh giỏi của 4 lớp: 6A:10, 6B:8, 6C:12, 6D:9. Tổng số học sinh giỏi 4 lớp là?', options: ['39', '38', '40', '37'], correctIndex: 0 },
        { question: 'Lớp nào có số học sinh giỏi nhiều nhất (theo bảng trên)?', options: ['6C', '6A', '6B', '6D'], correctIndex: 0 },
        { question: 'Muốn biết môn học yêu thích của học sinh, ta nên thu thập dữ liệu bằng cách nào?', options: ['Khảo sát/phỏng vấn học sinh', 'Đo chiều cao', 'Cân nặng', 'Đếm số học sinh'], correctIndex: 0 },
        { question: 'Dữ liệu "số lượng sách trong thư viện" thuộc loại nào?', options: ['Định lượng', 'Định tính', 'Không phải dữ liệu', 'Cả hai'], correctIndex: 0 },
        { question: 'Một trường khảo sát 100 học sinh: 40 chọn bóng đá, 25 chọn cầu lông, 20 chọn bơi, còn lại chọn môn khác. Số học sinh chọn môn khác là?', options: ['15', '20', '25', '10'], correctIndex: 0 },
        { question: 'Bảng thống kê số sách mượn trong 5 ngày: 12, 15, 9, 18, 11. Tổng số sách mượn trong 5 ngày là?', options: ['65', '60', '70', '55'], correctIndex: 0 },
        { question: 'Từ bảng số liệu ở câu trên, ngày nào mượn nhiều sách nhất?', options: ['Ngày thứ 4', 'Ngày thứ 1', 'Ngày thứ 2', 'Ngày thứ 5'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Một bảng thống kê ghi số học sinh đạt loại Giỏi, Khá, Trung bình của lớp 6A lần lượt là 12, 18, 5. Tính tổng số học sinh của lớp 6A.', solution: ['$12+18+5=35$ (học sinh)'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một cuộc khảo sát 60 học sinh về phương tiện đến trường: có 25 học sinh đi xe đạp, 20 học sinh đi bộ, còn lại được người thân đưa đón. Tính số học sinh được người thân đưa đón, và cho biết đây là dữ liệu định tính hay định lượng.',
          solution: ['Số học sinh được đưa đón: $60-25-20=15$', 'Đây là dữ liệu định tính, vì phân loại theo phương tiện di chuyển (không phải một số đo).'],
        },
      ],
    },
  },

  'l6-bieu-do': {
    title: 'Biểu đồ tranh, biểu đồ cột',
    theory: {
      cards: [
        {
          title: 'Biểu đồ tranh',
          formulas: [],
          legend: ['Biểu đồ tranh dùng hình ảnh (biểu tượng) để biểu diễn số liệu, mỗi hình ảnh ứng với một số lượng nhất định'],
          note: 'Mẹo: đọc chú thích để biết mỗi biểu tượng ứng với bao nhiêu đơn vị trước khi đọc biểu đồ.',
        },
        {
          title: 'Biểu đồ cột',
          formulas: [],
          legend: ['Biểu đồ cột dùng các cột (hình chữ nhật) có chiều cao tỉ lệ với số liệu', 'Trục ngang thường ghi các đối tượng, trục đứng ghi giá trị số liệu'],
          note: 'Mẹo: so sánh nhanh các số liệu bằng cách so sánh chiều cao các cột.',
        },
      ],
    },
    video: { caption: '00:00 / 09:05 — bieu_do_baigiang.mp4' },
    quiz: [
      { question: 'Biểu đồ tranh dùng gì để biểu diễn số liệu?', options: ['Hình ảnh (biểu tượng)', 'Chỉ số', 'Chỉ chữ', 'Đường thẳng'], correctIndex: 0 },
      { question: 'Biểu đồ cột dùng gì để biểu diễn số liệu?', options: ['Các cột hình chữ nhật', 'Hình tròn', 'Hình ảnh', 'Đường cong'], correctIndex: 0 },
      { question: 'Trong biểu đồ tranh, nếu 1 biểu tượng ứng với 5 học sinh và có 3 biểu tượng thì số học sinh là?', options: ['15', '3', '5', '8'], correctIndex: 0 },
      { question: 'Trục đứng trong biểu đồ cột thường ghi gì?', options: ['Giá trị số liệu', 'Tên đối tượng', 'Ngày tháng', 'Không có gì'], correctIndex: 0 },
      { question: 'Muốn so sánh nhanh dữ liệu bằng biểu đồ cột ta so sánh gì?', options: ['Chiều cao các cột', 'Màu sắc các cột', 'Độ rộng các cột', 'Vị trí các cột'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Một biểu đồ tranh: mỗi hình ⭐ ứng với 10 sản phẩm. Hàng A có 4 hình, hàng B có 3 hình. Tính số sản phẩm mỗi hàng.', solution: ['Hàng A: $4\\times10=40$ sản phẩm', 'Hàng B: $3\\times10=30$ sản phẩm'] },
      { prompt: 'Bài 2. Lớp 6A có 30 học sinh, 6B có 35, 6C có 28. Mô tả cách vẽ biểu đồ cột biểu diễn số liệu này.', solution: ['Vẽ trục ngang ghi tên lớp, trục đứng ghi số học sinh; mỗi lớp ứng với một cột có chiều cao bằng số học sinh của lớp đó.'] },
      { prompt: 'Bài 3. Biểu đồ cột cho biết số sách 4 loại: Toán 50, Văn 40, Anh 30, Sử 20. Loại sách nào nhiều nhất, ít nhất?', solution: ['Nhiều nhất: Toán (50 cuốn). Ít nhất: Sử (20 cuốn).'] },
      { prompt: 'Bài 4. Từ bảng số liệu ở Bài 3, tính tổng số sách 4 loại.', solution: ['$50+40+30+20=140$ (cuốn)'] },
      { prompt: 'Bài 5. Nêu một ưu điểm của biểu đồ tranh so với bảng số liệu.', solution: ['Biểu đồ tranh trực quan, giúp hình dung và so sánh nhanh bằng hình ảnh hơn là đọc bảng số liệu thuần túy.'] },
    ],
    flashcards: [
      { front: 'Biểu đồ tranh', back: 'Dùng hình ảnh biểu diễn số liệu' },
      { front: 'Biểu đồ cột', back: 'Dùng các cột có chiều cao tỉ lệ với số liệu' },
      { front: 'Trục đứng biểu đồ cột', back: 'Thường ghi giá trị số liệu' },
      { front: 'Trục ngang biểu đồ cột', back: 'Thường ghi tên các đối tượng' },
      { front: 'Đọc biểu đồ tranh', back: 'Xem chú thích để biết mỗi biểu tượng ứng bao nhiêu đơn vị' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Biểu đồ tranh dùng gì để biểu diễn?', options: ['Hình ảnh', 'Số liệu thô', 'Chữ viết', 'Đường thẳng'], correctIndex: 0 },
        { question: 'Biểu đồ cột dùng gì để biểu diễn?', options: ['Các cột hình chữ nhật', 'Hình tròn', 'Hình ảnh', 'Đường cong'], correctIndex: 0 },
        { question: 'Trục đứng biểu đồ cột thường ghi?', options: ['Giá trị số liệu', 'Tên đối tượng', 'Không có gì', 'Ngày tháng'], correctIndex: 0 },
        { question: 'Trục ngang biểu đồ cột thường ghi?', options: ['Tên các đối tượng', 'Giá trị số liệu', 'Không có gì', 'Thời gian đo'], correctIndex: 0 },
        { question: 'Muốn đọc biểu đồ tranh, trước tiên cần xem gì?', options: ['Chú thích (1 biểu tượng ứng bao nhiêu)', 'Màu sắc', 'Kích thước hình', 'Vị trí đặt biểu đồ'], correctIndex: 0 },
        { question: 'Cột cao hơn trong biểu đồ cột thể hiện điều gì?', options: ['Giá trị lớn hơn', 'Giá trị nhỏ hơn', 'Không có ý nghĩa', 'Sai số liệu'], correctIndex: 0 },
        { question: 'Mỗi hình 🍎 ứng với 5 quả táo, có 6 hình. Số táo là?', options: ['30', '6', '5', '11'], correctIndex: 0 },
        { question: 'Biểu đồ cột: lớp 6A cao 25, 6B cao 30, 6C cao 20 (đơn vị: học sinh). Lớp nào đông nhất?', options: ['6B', '6A', '6C', 'Không xác định'], correctIndex: 0 },
        { question: 'Từ dữ liệu câu trên, tổng số học sinh 3 lớp là?', options: ['75', '70', '80', '65'], correctIndex: 0 },
        { question: 'Mỗi hình ⭐ ứng 20 sản phẩm, hàng có 3,5 hình. Số sản phẩm là?', options: ['70', '60', '80', '75'], correctIndex: 0 },
        { question: 'Biểu đồ cột có 4 cột cao lần lượt 10, 15, 8, 12. Cột nào thấp nhất?', options: ['Cột thứ 3', 'Cột thứ 1', 'Cột thứ 2', 'Cột thứ 4'], correctIndex: 0 },
        { question: 'Tổng giá trị 4 cột ở câu trên là?', options: ['45', '40', '50', '35'], correctIndex: 0 },
        { question: 'Biểu đồ tranh: mỗi hình ứng 4 sản phẩm. Hàng A có 5 hình, hàng B có 3,5 hình. Hàng A nhiều hơn hàng B bao nhiêu sản phẩm?', options: ['6', '4', '8', '10'], correctIndex: 0 },
        { question: 'Biểu đồ cột 3 tháng bán hàng: T1: 120, T2: 150, T3: 90. Trung bình mỗi tháng bán được bao nhiêu?', options: ['120', '100', '140', '360'], correctIndex: 0 },
        { question: 'Từ dữ liệu câu trên, tháng nào bán được ít hơn trung bình 3 tháng?', options: ['Tháng 3', 'Tháng 1', 'Tháng 2', 'Không có tháng nào'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt:
            'Câu 1 (Thông hiểu). Biểu đồ tranh cho biết số cây được trồng bởi 3 tổ: mỗi hình 🌳 ứng với 5 cây. Tổ 1 có 4 hình, Tổ 2 có 3 hình, Tổ 3 có 5 hình. Tính tổng số cây 3 tổ trồng được.',
          solution: ['Tổ 1: $4\\times5=20$; Tổ 2: $3\\times5=15$; Tổ 3: $5\\times5=25$', 'Tổng: $20+15+25=60$ (cây)'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Biểu đồ cột biểu diễn số học sinh tham gia 4 câu lạc bộ: Âm nhạc 24, Mỹ thuật 18, Thể thao 30, Tin học 16. Hỏi câu lạc bộ Thể thao có số học sinh nhiều hơn câu lạc bộ Tin học bao nhiêu? Tính tổng số học sinh cả 4 câu lạc bộ.',
          solution: ['Thể thao hơn Tin học: $30-16=14$ (học sinh)', 'Tổng cả 4 câu lạc bộ: $24+18+30+16=88$ (học sinh)'],
        },
      ],
    },
  },

  'l6-xac-suat-thuc-nghiem': {
    title: 'Phép thử nghiệm, sự kiện, xác suất thực nghiệm',
    theory: {
      cards: [
        {
          title: 'Phép thử nghiệm và sự kiện',
          formulas: [],
          legend: ['Phép thử nghiệm: một hành động hay thí nghiệm có thể lặp lại (tung đồng xu, gieo xúc xắc...)', 'Sự kiện: kết quả (hoặc tập hợp kết quả) được quan tâm khi thực hiện phép thử'],
          note: 'Mẹo: mỗi lần thực hiện phép thử cho ra một kết quả cụ thể.',
        },
        {
          title: 'Xác suất thực nghiệm',
          formulas: ['\\text{Xác suất thực nghiệm của A} = \\dfrac{\\text{Số lần A xảy ra}}{\\text{Tổng số lần thử}}'],
          legend: ['Xác suất thực nghiệm được tính dựa trên kết quả thực tế của nhiều lần thử nghiệm'],
          note: 'Mẹo: càng thử nghiệm nhiều lần, xác suất thực nghiệm càng phản ánh chính xác khả năng xảy ra của sự kiện.',
        },
      ],
    },
    video: { caption: '00:00 / 09:40 — xac_suat_thuc_nghiem_baigiang.mp4' },
    quiz: [
      { question: 'Tung một đồng xu là ví dụ của?', options: ['Phép thử nghiệm', 'Sự kiện', 'Xác suất', 'Dữ liệu'], correctIndex: 0 },
      { question: 'Xác suất thực nghiệm của sự kiện A được tính bằng?', options: ['Số lần A xảy ra / Tổng số lần thử', 'Tổng số lần thử / Số lần A xảy ra', 'Số lần A xảy ra × Tổng số lần thử', 'Số lần A xảy ra + Tổng số lần thử'], correctIndex: 0 },
      { question: 'Gieo 1 xúc xắc 20 lần, mặt 6 chấm xuất hiện 4 lần. Xác suất thực nghiệm là?', options: ['0,2', '0,4', '4', '0,05'], correctIndex: 0 },
      { question: 'Tung đồng xu 50 lần, có 28 lần mặt sấp. Xác suất thực nghiệm mặt sấp là?', options: ['0,56', '0,28', '0,5', '0,44'], correctIndex: 0 },
      { question: 'Xác suất thực nghiệm luôn nằm trong khoảng nào?', options: ['Từ 0 đến 1', 'Từ 0 đến 100', 'Từ −1 đến 1', 'Không giới hạn'], correctIndex: 0 },
    ],
    essays: [
      { prompt: 'Bài 1. Gieo 1 con xúc xắc 30 lần, mặt 1 chấm xuất hiện 6 lần. Tính xác suất thực nghiệm xuất hiện mặt 1 chấm.', solution: ['$\\dfrac{6}{30}=0,2$'] },
      { prompt: 'Bài 2. Tung đồng xu 40 lần, có 22 lần mặt ngửa. Tính xác suất thực nghiệm của mặt ngửa và mặt sấp.', solution: ['Ngửa: $\\dfrac{22}{40}=0,55$', 'Sấp: $\\dfrac{40-22}{40}=\\dfrac{18}{40}=0,45$'] },
      { prompt: 'Bài 3. Một hộp có bi đỏ và bi xanh. Lấy ngẫu nhiên 1 bi (trả lại), lặp lại 50 lần, có 30 lần lấy được bi đỏ. Tính xác suất thực nghiệm lấy được bi đỏ.', solution: ['$\\dfrac{30}{50}=0,6$'] },
      { prompt: 'Bài 4. Giải thích vì sao xác suất thực nghiệm có thể khác nhau giữa các đợt thử nghiệm khác nhau (dù cùng số lần thử).', solution: ['Vì kết quả mỗi lần thử là ngẫu nhiên, không chắc chắn, nên tỉ lệ có thể dao động qua các đợt thử khác nhau.'] },
      { prompt: 'Bài 5. Một lớp có 40 học sinh, thống kê thấy 24 học sinh thích môn Toán. Tính xác suất thực nghiệm của sự kiện "học sinh thích Toán".', solution: ['$\\dfrac{24}{40}=0,6$'] },
    ],
    flashcards: [
      { front: 'Phép thử nghiệm', back: 'Hành động/thí nghiệm có thể lặp lại (tung xúc xắc, tung đồng xu...)' },
      { front: 'Sự kiện', back: 'Kết quả quan tâm khi thực hiện phép thử' },
      { front: 'Công thức xác suất thực nghiệm', back: '$\\frac{\\text{Số lần A xảy ra}}{\\text{Tổng số lần thử}}$' },
      { front: 'Khoảng giá trị xác suất thực nghiệm', back: 'Từ 0 đến 1' },
      { front: 'Ý nghĩa số lần thử càng nhiều', back: 'Xác suất thực nghiệm càng phản ánh chính xác khả năng xảy ra' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        { question: 'Tung đồng xu, gieo xúc xắc là ví dụ của?', options: ['Phép thử nghiệm', 'Sự kiện', 'Xác suất', 'Dữ liệu'], correctIndex: 0 },
        { question: 'Sự kiện là gì?', options: ['Kết quả quan tâm khi thực hiện phép thử', 'Số lần thử nghiệm', 'Chỉ số liệu', 'Bảng thống kê'], correctIndex: 0 },
        { question: 'Công thức tính xác suất thực nghiệm là?', options: ['Số lần A xảy ra / Tổng số lần thử', 'Tổng số lần thử / Số lần A xảy ra', 'Số lần A × Tổng số lần thử', 'Không có công thức'], correctIndex: 0 },
        { question: 'Xác suất thực nghiệm luôn nằm trong khoảng nào?', options: ['Từ 0 đến 1', 'Từ 0 đến 100', 'Từ −1 đến 1', 'Không giới hạn'], correctIndex: 0 },
        { question: 'Nếu 1 sự kiện luôn xảy ra thì xác suất thực nghiệm của nó bằng?', options: ['1', '0', '0,5', 'Không xác định'], correctIndex: 0 },
        { question: 'Nếu 1 sự kiện không bao giờ xảy ra thì xác suất thực nghiệm bằng?', options: ['0', '1', '0,5', 'Không xác định'], correctIndex: 0 },
        { question: 'Gieo xúc xắc 25 lần, mặt 6 chấm ra 5 lần. Xác suất thực nghiệm là?', options: ['0,2', '0,5', '5', '0,4'], correctIndex: 0 },
        { question: 'Tung đồng xu 60 lần, 33 lần ngửa. Xác suất thực nghiệm ngửa là?', options: ['0,55', '0,33', '0,6', '0,45'], correctIndex: 0 },
        { question: 'Một hộp bi, lấy 40 lần có 16 lần bi đỏ. Xác suất thực nghiệm bi đỏ là?', options: ['0,4', '0,16', '0,6', '4'], correctIndex: 0 },
        { question: 'Gieo xúc xắc 50 lần, mặt chẵn xuất hiện 27 lần. Xác suất thực nghiệm mặt chẵn là?', options: ['0,54', '0,27', '0,5', '0,46'], correctIndex: 0 },
        { question: 'Nếu xác suất thực nghiệm của 1 sự kiện là 0,3 trên 100 lần thử thì sự kiện đó xảy ra bao nhiêu lần?', options: ['30', '3', '70', '0,3'], correctIndex: 0 },
        { question: 'Xác suất thực nghiệm của sự kiện A cộng với xác suất "A không xảy ra" (cùng số lần thử) bằng?', options: ['1', '0', '0,5', '2'], correctIndex: 0 },
        { question: 'Gieo xúc xắc 120 lần, mặt 6 chấm có xác suất thực nghiệm 0,15. Mặt 6 chấm xuất hiện bao nhiêu lần?', options: ['18', '15', '12', '20'], correctIndex: 0 },
        { question: 'Một cầu thủ ném bóng rổ 40 lần, xác suất thực nghiệm ném trúng là 0,65. Cầu thủ ném trúng bao nhiêu lần?', options: ['26', '25', '30', '24'], correctIndex: 0 },
        { question: 'Tung đồng xu 200 lần, được 92 lần mặt sấp. So sánh xác suất thực nghiệm mặt sấp và mặt ngửa.', options: ['Xác suất mặt ngửa lớn hơn', 'Xác suất mặt sấp lớn hơn', 'Bằng nhau', 'Không xác định'], correctIndex: 0 },
      ],
      essays: [
        { prompt: 'Câu 1 (Thông hiểu). Gieo một con xúc xắc 40 lần, mặt 3 chấm xuất hiện 8 lần. Tính xác suất thực nghiệm xuất hiện mặt 3 chấm.', solution: ['$\\dfrac{8}{40}=0,2$'] },
        {
          prompt:
            'Câu 2 (Vận dụng). Một hộp có các quả bóng chỉ có hai màu xanh và đỏ. Lấy ngẫu nhiên 1 quả, ghi màu rồi trả lại hộp, lặp lại 80 lần thì có 52 lần lấy được bóng xanh. Tính xác suất thực nghiệm lấy được bóng xanh và xác suất thực nghiệm lấy được bóng đỏ.',
          solution: ['Xanh: $\\dfrac{52}{80}=0,65$', 'Đỏ: $\\dfrac{80-52}{80}=\\dfrac{28}{80}=0,35$'],
        },
      ],
    },
  },
}
