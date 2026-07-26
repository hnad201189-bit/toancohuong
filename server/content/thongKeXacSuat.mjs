import { EXAM_DEFAULT } from './examDefault.mjs'

export const THONG_KE_XAC_SUAT = {
  'mau-so-lieu-ghep-nhom': {
    title: 'Mẫu số liệu ghép nhóm',
    theory: {
      cards: [
        {
          title: 'Mẫu số liệu ghép nhóm',
          formulas: ["[a;b),\\quad \\text{độ dài}=b-a"],
          note: 'a là đầu mút trái, b là đầu mút phải của nhóm. Mẫu số liệu ghép nhóm là mẫu số liệu cho dưới dạng bảng tần số của các nhóm số liệu — dùng khi không thể (hoặc không cần) thu thập số liệu chính xác từng giá trị. Nhóm cuối cùng đôi khi lấy cả đầu mút phải.',
        },
        {
          title: 'Ghép nhóm mẫu số liệu',
          formulas: ["n=\\sum_{i=1}^k n_i"],
          note: 'Bước 1: chia miền giá trị thành các nhóm [a;b). Bước 2: đếm tần số mỗi nhóm, lập bảng thống kê. Chú ý: không nên chia quá nhiều hoặc quá ít nhóm; các nhóm không giao nhau, nên có độ dài bằng nhau, và tổng độ dài các nhóm lớn hơn khoảng biến thiên của mẫu.',
        },
      ],
    },
    video: { caption: '00:00 / 10:20 — mau_so_lieu_ghep_nhom_baigiang.mp4' },
    quiz: [
      {
        question: 'Mẫu số liệu ghép nhóm thường được trình bày dưới dạng?',
        options: ['Danh sách các giá trị riêng lẻ', 'Bảng tần số của các nhóm số liệu', 'Một số duy nhất', 'Biểu đồ tròn'],
        correctIndex: 1,
      },
      { question: 'Độ dài của nhóm [a;b) bằng?', options: ['a + b', 'a − b', 'b − a', 'ab'], correctIndex: 2 },
      {
        question: 'Khi ghép nhóm mẫu số liệu, các nhóm nên thoả mãn điều gì?',
        options: [
          'Có thể giao nhau tuỳ ý',
          'Không giao nhau và nên có độ dài bằng nhau',
          'Càng nhiều nhóm càng tốt',
          'Chỉ cần 2 nhóm',
        ],
        correctIndex: 1,
      },
      {
        question:
          'Độ dài của 60 lá dương xỉ trưởng thành: [10;20) có 8 lá, [20;30) có 18, [30;40) có 24, [40;50) có 10. Số lá có chiều dài từ 30cm đến 50cm chiếm bao nhiêu phần trăm?',
        options: ['50%', '56%', '56,7%', '57%'],
        correctIndex: 2,
      },
      {
        question:
          'Khối lượng của 30 củ khoai tây: [70;80) có 3, [80;90) có 6, [90;100) có 12, [100;110) có 6, [110;120) có 3. Tần suất ghép nhóm của lớp [100;110) là?',
        options: ['20%', '40%', '60%', '80%'],
        correctIndex: 0,
      },
    ],
    essays: [
      {
        prompt:
          'Bài 1. Mẫu số liệu sau cho biết phân bố theo độ tuổi của dân số Việt Nam năm 2019: dưới 15 tuổi có 23 371 882 người, từ 15 đến dưới 65 tuổi có 65 420 451 người, từ 65 tuổi trở lên có 7 416 651 người. a) Đây có phải mẫu số liệu ghép nhóm không? b) Nêu các nhóm, tần số tương ứng và tổng dân số Việt Nam năm 2019.',
        solution: [
          'a) Đúng, đây là mẫu số liệu ghép nhóm vì được cho dưới dạng bảng tần số theo các khoảng (nhóm) tuổi.',
          'b) 3 nhóm: "dưới 15" (tần số 23 371 882), "15 đến dưới 65" (tần số 65 420 451), "từ 65 trở lên" (tần số 7 416 651).',
          'Dân số Việt Nam năm 2019 = tổng 3 tần số $=23\\,371\\,882+65\\,420\\,451+7\\,416\\,651=96\\,208\\,984$ người.',
        ],
      },
      {
        prompt:
          'Bài 2. Cho mẫu số liệu ghép nhóm về thời gian (phút) đi từ nhà đến nơi làm việc của các nhân viên một công ty: [15;20) có 6, [20;25) có 14, [25;30) có 25, [30;35) có 37, [35;40) có 21, [40;45) có 13, [45;50) có 9. Đọc và giải thích mẫu số liệu này.',
        solution: [
          'Đây là mẫu số liệu ghép nhóm gồm 7 nhóm, mỗi nhóm độ dài 5 phút.',
          'Nhóm đông nhất là $[30;35)$ với 37 nhân viên — nghĩa là có 37 người mất từ 30 đến dưới 35 phút để đi làm.',
          'Tổng số nhân viên: $n=6+14+25+37+21+13+9=125$ người.',
        ],
      },
      {
        prompt:
          'Bài 3. Bảng thống kê sau cho biết thời gian chạy (phút) của 30 vận động viên (VĐV) trong một giải chạy Marathon (số liệu gốc): 129(1), 130(2), 133(1), 134(1), 135(1), 136(2), 138(3), 141(3), 142(4), 143(5), 144(2), 145(5) — giá trị (số VĐV). Hãy chuyển mẫu số liệu trên sang mẫu số liệu ghép nhóm gồm 6 nhóm có độ dài bằng nhau và bằng 3.',
        solution: [
          'Giá trị nhỏ nhất là 129, chia thành 6 nhóm độ dài 3 bắt đầu từ 129:',
          '$[129;132)$: gồm 129, 130 → tần số $1+2=3$',
          '$[132;135)$: gồm 133, 134 → tần số $1+1=2$',
          '$[135;138)$: gồm 135, 136 → tần số $1+2=3$',
          '$[138;141)$: gồm 138 → tần số $3$',
          '$[141;144)$: gồm 141, 142, 143 → tần số $3+4+5=12$',
          '$[144;147)$: gồm 144, 145 → tần số $2+5=7$',
          'Kiểm tra: $3+2+3+3+12+7=30$ ✓',
        ],
      },
      {
        prompt:
          'Bài 4. Cân nặng (kg) của 35 người trưởng thành: 43 51 47 62 48 40 50 62 53 56 40 48 56 53 50 42 55 52 48 46 45 54 52 50 47 44 54 55 60 63 58 55 60 58 53. Chuyển mẫu số liệu trên thành dạng ghép nhóm, các nhóm có độ dài bằng nhau, trong đó có nhóm [40;45).',
        solution: [
          'Các nhóm độ dài 5 bắt đầu từ 40: $[40;45),[45;50),[50;55),[55;60),[60;65)$.',
          'Đếm tần số từng nhóm: $[40;45)$: 5 người; $[45;50)$: 7 người; $[50;55)$: 11 người; $[55;60)$: 7 người; $[60;65)$: 5 người.',
          'Kiểm tra: $5+7+11+7+5=35$ ✓',
        ],
      },
    ],
    flashcards: [
      { front: 'Mẫu số liệu ghép nhóm là gì?', back: 'Mẫu số liệu cho dưới dạng bảng tần số của các nhóm (khoảng) số liệu' },
      { front: 'Độ dài nhóm [a;b)', back: '$b-a$' },
      { front: 'Bước 1 khi ghép nhóm', back: 'Chia miền giá trị thành các nhóm theo tiêu chí cho trước' },
      { front: 'Bước 2 khi ghép nhóm', back: 'Đếm tần số mỗi nhóm, lập bảng thống kê' },
      { front: 'Nguyên tắc chọn nhóm', back: 'Không giao nhau, độ dài bằng nhau, tổng độ dài > khoảng biến thiên' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Mẫu số liệu ghép nhóm thường được trình bày dưới dạng?', options: ['Bảng tần số của các nhóm số liệu', 'Danh sách các giá trị riêng lẻ', 'Một số duy nhất', 'Biểu đồ tròn'], correctIndex: 0 },
        { question: 'Độ dài của nhóm [a;b) bằng?', options: ['b − a', 'a + b', 'a − b', 'ab'], correctIndex: 0 },
        { question: 'Khi ghép nhóm, các nhóm nên thoả mãn điều gì?', options: ['Không giao nhau và nên có độ dài bằng nhau', 'Có thể giao nhau tuỳ ý', 'Càng nhiều nhóm càng tốt', 'Chỉ cần 2 nhóm'], correctIndex: 0 },
        { question: 'Cỡ mẫu n của mẫu ghép nhóm bằng?', options: ['Tổng tần số các nhóm', 'Số nhóm', 'Độ dài trung bình các nhóm', 'Giá trị lớn nhất trừ nhỏ nhất'], correctIndex: 0 },
        { question: 'Trong bảng ghép nhóm, ni là kí hiệu của?', options: ['Tần số nhóm i', 'Giá trị đại diện nhóm i', 'Độ dài nhóm i', 'Tần suất phần trăm nhóm i'], correctIndex: 0 },
        { question: 'Bước đầu tiên khi ghép nhóm một mẫu số liệu là?', options: ['Chia miền giá trị thành các nhóm', 'Tính số trung bình ngay', 'Vẽ biểu đồ tròn', 'Sắp xếp giảm dần'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Cho bảng: [0;10) có 4, [10;20) có 6, [20;30) có 10. Cỡ mẫu n bằng?', options: ['20', '16', '10', '30'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, tần suất của nhóm [20;30) bằng?', options: ['50%', '10%', '20%', '30%'], correctIndex: 0 },
        { question: 'Cho bảng: [5;10) có 3, [10;15) có 7, [15;20) có 5, [20;25) có 5. Nhóm có tần số lớn nhất là?', options: ['[10;15)', '[5;10)', '[15;20)', '[20;25)'], correctIndex: 0 },
        { question: 'Độ dài của nhóm [15;25) là?', options: ['10', '15', '25', '40'], correctIndex: 0 },
        { question: 'Cho mẫu ghép nhóm với các nhóm độ dài bằng nhau và bằng 5, bắt đầu từ 10. Nhóm thứ 3 là?', options: ['[20;25)', '[15;20)', '[10;15)', '[25;30)'], correctIndex: 0 },
        { question: 'Bảng: [0;20) có 5, [20;40) có 9, [40;60) có 12, [60;80) có 10, [80;100) có 6. Tổng số phần tử của mẫu là?', options: ['42', '40', '36', '45'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Bảng: [10;20) có 8, [20;30) có 18, [30;40) có 24, [40;50) có 10 (tổng 60). Số lá có chiều dài dưới 30cm chiếm bao nhiêu phần trăm?', options: ['43,3%', '50%', '56,7%', '30%'], correctIndex: 0 },
        { question: 'Khối lượng 30 củ khoai tây: [70;80) có 3, [80;90) có 6, [90;100) có 12, [100;110) có 6, [110;120) có 3. Tần suất ghép nhóm của lớp [90;100) là?', options: ['40%', '20%', '60%', '12%'], correctIndex: 0 },
        { question: 'Một mẫu ghép nhóm có các nhóm độ dài bằng nhau và bằng 4, nhóm đầu là [12;16). Nhóm thứ 5 là?', options: ['[28;32)', '[24;28)', '[26;30)', '[30;34)'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Bảng thống kê thời gian tự học (giờ/ngày) của 40 học sinh: [0;1) có 5, [1;2) có 12, [2;3) có 15, [3;4) có 8. Tính tần suất (%) của nhóm [2;3).',
          solution: ['Tần suất $=\\dfrac{15}{40}\\times100\\%=37{,}5\\%$'],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Cho mẫu số liệu gốc (điểm kiểm tra) của 20 học sinh: 5, 6, 7, 8, 5, 6, 9, 10, 7, 6, 8, 5, 9, 7, 6, 8, 9, 10, 7, 6. Ghép nhóm mẫu số liệu trên thành các nhóm độ dài bằng nhau và bằng 2, bắt đầu từ nhóm [5;7).',
          solution: [
            'Đếm tần số từng giá trị: $5$ (3 lần), $6$ (5 lần), $7$ (4 lần), $8$ (3 lần), $9$ (3 lần), $10$ (2 lần).',
            'Nhóm $[5;7)$ gồm giá trị 5, 6: tần số $=3+5=8$',
            'Nhóm $[7;9)$ gồm giá trị 7, 8: tần số $=4+3=7$',
            'Nhóm $[9;11)$ gồm giá trị 9, 10: tần số $=3+2=5$',
            'Kiểm tra: $8+7+5=20$ ✓',
          ],
        },
      ],
    },
  },

  'so-dac-trung-xu-the': {
    title: 'Số đặc trưng đo xu thế trung tâm',
    theory: {
      cards: [
        {
          title: 'Số trung bình của mẫu số liệu ghép nhóm',
          formulas: ['\\bar x=\\dfrac1n\\sum_{i=1}^{k} n_ic_i', 'n=\\sum_{i=1}^k n_i'],
          note: 'Mẹo: ci là giá trị đại diện của nhóm i (trung điểm của khoảng), ni là tần số của nhóm i.',
        },
        {
          title: 'Trung vị của mẫu số liệu ghép nhóm',
          formulas: ['M_e=L+\\dfrac{\\frac n2-C}{n_m}\\cdot h'],
          note: 'Mẹo: L là đầu mút trái của nhóm chứa trung vị, C là tần số tích luỹ trước nhóm đó, nm là tần số nhóm chứa trung vị, h là độ dài nhóm.',
        },
        {
          title: 'Tứ phân vị của mẫu số liệu ghép nhóm',
          formulas: ['Q_1=a_p+\\dfrac{\\frac n4-C}{n_p}\\cdot h', 'Q_3=a_p+\\dfrac{\\frac{3n}4-C}{n_p}\\cdot h'],
          note: 'Cách tìm giống trung vị nhưng thay n/2 bằng n/4 (cho Q1) hoặc 3n/4 (cho Q3). Tứ phân vị thứ hai Q2 chính là trung vị Me.',
        },
        {
          title: 'Mốt của mẫu số liệu ghép nhóm',
          formulas: ['M_o=a_j+\\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\\cdot h'],
          note: 'j là nhóm có tần số lớn nhất (quy ước m₀ = m_{k+1} = 0). Chỉ định nghĩa mốt khi các nhóm có độ dài bằng nhau.',
        },
      ],
    },
    video: { caption: '00:00 / 14:10 — so_dac_trung_xu_the_baigiang.mp4' },
    quiz: [
      {
        question: 'Số trung bình của mẫu số liệu ghép nhóm được tính bằng công thức nào?',
        options: ['x̄ = (1/n)Σnici', 'x̄ = Σni', 'x̄ = n/Σci', 'x̄ = Σci'],
        correctIndex: 0,
      },
      { question: 'Cho mẫu số liệu: 2, 4, 4, 6, 8. Số trung bình bằng?', options: ['4.8', '4', '5', '6'], correctIndex: 0 },
      { question: 'Cho mẫu số liệu: 2, 4, 4, 6, 8. Mốt (giá trị xuất hiện nhiều nhất) bằng?', options: ['2', '4', '6', '8'], correctIndex: 1 },
      { question: 'Cho mẫu số liệu đã sắp xếp: 1, 3, 5, 7, 9. Trung vị bằng?', options: ['3', '5', '7', '4'], correctIndex: 1 },
      {
        question: 'Trong mẫu số liệu ghép nhóm, ci đại diện cho?',
        options: ['Tần số nhóm i', 'Giá trị đại diện (trung điểm) nhóm i', 'Tần suất nhóm i', 'Độ dài nhóm i'],
        correctIndex: 1,
      },
      {
        question:
          'Khảo sát thời gian tập thể dục (phút) của học sinh khối 11: [0;20) có 5 học sinh, [20;40) có 9, [40;60) có 12, [60;80) có 10, [80;100) có 6. Giá trị đại diện của nhóm [20;40) là?',
        options: ['10', '20', '30', '40'],
        correctIndex: 2,
      },
      {
        question: 'Với mẫu số liệu ở câu trên, mẫu số liệu ghép nhóm này có số mốt là?',
        options: ['0', '1', '2', '3'],
        correctIndex: 1,
      },
      {
        question: 'Với mẫu số liệu ở câu trên, nhóm chứa mốt là?',
        options: ['[20;40)', '[40;60)', '[60;80)', '[80;100)'],
        correctIndex: 1,
      },
      {
        question: 'Với mẫu số liệu ở câu trên, nhóm chứa trung vị là?',
        options: ['[0;20)', '[20;40)', '[40;60)', '[60;80)'],
        correctIndex: 2,
      },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho mẫu số liệu: 3, 5, 5, 7, 9, 11. Tính số trung bình.',
        solution: ['$\\bar x=\\dfrac{3+5+5+7+9+11}{6}=\\dfrac{40}{6}\\approx6.67$'],
      },
      {
        prompt: 'Bài 2. Cho mẫu số liệu: 3, 5, 5, 7, 9, 11. Tìm trung vị.',
        solution: ['Dãy có n = 6 (chẵn), trung vị là trung bình 2 giá trị giữa: $M_e=\\dfrac{5+7}{2}=6$'],
      },
      {
        prompt: 'Bài 3. Cho mẫu số liệu: 3, 5, 5, 7, 9, 11. Tìm mốt.',
        solution: ['Giá trị 5 xuất hiện 2 lần, nhiều nhất trong mẫu, vậy $M_o=5$'],
      },
      {
        prompt:
          'Bài 4. Tìm cân nặng trung bình của học sinh lớp 11D cho trong bảng: [40,5;45,5) có 10 học sinh, [45,5;50,5) có 7, [50,5;55,5) có 16, [55,5;60,5) có 4, [60,5;65,5) có 2, [65,5;70,5) có 3.',
        solution: [
          'Giá trị đại diện: $43;\\,48;\\,53;\\,58;\\,63;\\,68$. Cỡ mẫu $n=10+7+16+4+2+3=42$.',
          '$\\bar x=\\dfrac{10\\cdot43+7\\cdot48+16\\cdot53+4\\cdot58+2\\cdot63+3\\cdot68}{42}=\\dfrac{2176}{42}\\approx51{,}8$ (kg)',
        ],
      },
      {
        prompt:
          'Bài 5. Thời gian (phút) truy cập Internet mỗi buổi tối của học sinh: [9,5;12,5) có 3, [12,5;15,5) có 12, [15,5;18,5) có 15, [18,5;21,5) có 24, [21,5;24,5) có 2. Tính trung vị.',
        solution: [
          'Cỡ mẫu $n=3+12+15+24+2=56 \\Rightarrow n/2=28$.',
          'Tần số tích luỹ: 3; 15; 30; ... nhóm $[15{,}5;18{,}5)$ là nhóm đầu tiên có tích luỹ $\\ge28$ (tích luỹ trước đó là 15).',
          '$M_e=15{,}5+\\dfrac{28-15}{15}\\cdot3=15{,}5+2{,}6=18{,}1$ (phút)',
        ],
      },
      {
        prompt:
          'Bài 6. Tốc độ giao bóng (km/h) của một vận động viên quần vợt trong 200 lần giao bóng: [150;155) có 18, [155;160) có 28, [160;165) có 35, [165;170) có 43, [170;175) có 41, [175;180) có 35. Tìm tứ phân vị thứ nhất Q1 và tứ phân vị thứ ba Q3.',
        solution: [
          '$n=200$. $Q_1$ ứng vị trí $n/4=50$: tích luỹ 18; 46; 81 ⟹ nhóm chứa $Q_1$ là $[160;165)$ (tích luỹ trước 46).',
          '$Q_1=160+\\dfrac{50-46}{35}\\cdot5\\approx160{,}6$',
          '$Q_3$ ứng vị trí $3n/4=150$: tích luỹ ...124 (đến nhóm 4); 165 (đến nhóm 5) ⟹ nhóm chứa $Q_3$ là $[170;175)$ (tích luỹ trước 124).',
          '$Q_3=170+\\dfrac{150-124}{41}\\cdot5\\approx173{,}2$',
        ],
      },
      {
        prompt:
          'Bài 7. Bảng số liệu ghép nhóm cho biết chiều cao (cm) của 50 học sinh lớp 11A: [145;150) có 7, [150;155) có 14, [155;160) có 10, [160;165) có 10, [165;170) có 9. Tính mốt của mẫu số liệu này.',
        solution: [
          'Nhóm có tần số lớn nhất là $[150;155)$ với $m_j=14$ ($m_{j-1}=7$, $m_{j+1}=10$, $h=5$).',
          '$M_o=150+\\dfrac{14-7}{(14-7)+(14-10)}\\cdot5=150+\\dfrac{7}{11}\\cdot5\\approx153{,}2$ (cm)',
        ],
      },
      {
        prompt:
          'Bài 8. Cơ cấu dân số Việt Nam năm 2020 theo độ tuổi: dưới 5 tuổi có 7,89 triệu người, 5–14 tuổi có 14,68 triệu, 15–24 tuổi có 13,32 triệu, 25–64 tuổi có 53,78 triệu, trên 65 tuổi có 7,66 triệu (chọn 80 là giá trị đại diện cho nhóm trên 65 tuổi). Tính tuổi trung bình của người Việt Nam năm 2020.',
        solution: [
          'Giá trị đại diện các nhóm: $2{,}5;\\ 9{,}5;\\ 19{,}5;\\ 44{,}5;\\ 80$. Cỡ mẫu $n=7{,}89+14{,}68+13{,}32+53{,}78+7{,}66=97{,}33$ (triệu người).',
          '$\\bar x=\\dfrac{7{,}89\\cdot2{,}5+14{,}68\\cdot9{,}5+13{,}32\\cdot19{,}5+53{,}78\\cdot44{,}5+7{,}66\\cdot80}{97{,}33}\\approx\\dfrac{3424{,}9}{97{,}33}\\approx35{,}2$ (tuổi)',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức số trung bình (mẫu ghép nhóm)', back: '$\\bar x=\\dfrac1n\\sum n_ic_i$' },
      { front: 'Giá trị đại diện ci của một nhóm', back: '$c_i=\\dfrac{L_i+R_i}{2}$' },
      { front: 'Công thức trung vị nhóm', back: '$M_e=L+\\dfrac{\\frac n2-C}{n_m}\\cdot h$' },
      { front: 'Công thức tứ phân vị Q1, Q3 nhóm', back: 'Giống trung vị nhưng thay $\\frac n2$ bằng $\\frac n4$ (Q1) hoặc $\\frac{3n}4$ (Q3)' },
      { front: 'Công thức mốt nhóm', back: '$M_o=a_j+\\dfrac{m_j-m_{j-1}}{(m_j-m_{j-1})+(m_j-m_{j+1})}\\cdot h$' },
      { front: 'Cỡ mẫu n', back: '$n=\\sum_{i=1}^k n_i$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Công thức số trung bình của mẫu ghép nhóm là?', options: ['x̄ = (1/n)Σnici', 'x̄ = Σni', 'x̄ = n/Σci', 'x̄ = Σci'], correctIndex: 0 },
        { question: 'ci trong công thức số trung bình đại diện cho?', options: ['Giá trị đại diện (trung điểm) nhóm i', 'Tần số nhóm i', 'Tần suất nhóm i', 'Độ dài nhóm i'], correctIndex: 0 },
        { question: 'Tứ phân vị thứ hai Q2 chính là?', options: ['Trung vị Me', 'Mốt', 'Số trung bình', 'Độ lệch chuẩn'], correctIndex: 0 },
        { question: 'Mốt của mẫu ghép nhóm chỉ được định nghĩa khi?', options: ['Các nhóm có độ dài bằng nhau', 'Có đúng 2 nhóm', 'Cỡ mẫu là số chẵn', 'Không có điều kiện gì'], correctIndex: 0 },
        { question: 'Cho mẫu: 2, 4, 4, 6, 8. Mốt bằng?', options: ['4', '2', '6', '8'], correctIndex: 0 },
        { question: 'Cho mẫu đã sắp xếp: 1, 3, 5, 7, 9. Trung vị bằng?', options: ['5', '3', '7', '4'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Cho mẫu: 2, 4, 4, 6, 8. Số trung bình bằng?', options: ['4,8', '4', '5', '6'], correctIndex: 0 },
        { question: 'Cho bảng: [0;20) có 5, [20;40) có 9, [40;60) có 12, [60;80) có 10, [80;100) có 6. Giá trị đại diện của nhóm [40;60) là?', options: ['50', '40', '60', '20'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, nhóm chứa mốt là?', options: ['[40;60)', '[20;40)', '[60;80)', '[80;100)'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, cỡ mẫu n bằng?', options: ['42', '40', '36', '45'], correctIndex: 0 },
        { question: 'Với bảng ở câu trên, nhóm chứa trung vị là?', options: ['[40;60)', '[20;40)', '[0;20)', '[60;80)'], correctIndex: 0 },
        { question: 'Cho mẫu: 1, 2, 2, 3, 3, 3, 4. Mốt bằng?', options: ['3', '2', '4', '1'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Bảng: [0;20) có 5, [20;40) có 9, [40;60) có 12, [60;80) có 10, [80;100) có 6. Số trung bình xấp xỉ bằng?', options: ['51,4', '50', '45', '55'], correctIndex: 0 },
        {
          question: 'Bảng: [40,5;45,5) có 10, [45,5;50,5) có 7, [50,5;55,5) có 16, [55,5;60,5) có 4, [60,5;65,5) có 2, [65,5;70,5) có 3. Trung vị nằm trong nhóm nào?',
          options: ['[50,5; 55,5)', '[45,5; 50,5)', '[55,5; 60,5)', '[40,5; 45,5)'],
          correctIndex: 0,
        },
        { question: 'Với bảng ở câu trên, trung vị Me xấp xỉ bằng?', options: ['51,75', '50,5', '53', '55,5'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho mẫu số liệu: 4, 6, 6, 8, 10, 12. Tính số trung bình và tìm mốt.',
          solution: [
            '$\\bar x=\\dfrac{4+6+6+8+10+12}{6}=\\dfrac{46}{6}\\approx7{,}67$',
            'Giá trị 6 xuất hiện 2 lần, nhiều nhất, vậy $M_o=6$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Bảng thống kê điểm kiểm tra của 50 học sinh: [4;6) có 8, [6;8) có 20, [8;10) có 15, [10;12) có 7. Tính số trung bình và tìm nhóm chứa trung vị.',
          solution: [
            'Giá trị đại diện: $5,\\ 7,\\ 9,\\ 11$. $n=50$.',
            '$\\bar x=\\dfrac{8\\cdot5+20\\cdot7+15\\cdot9+7\\cdot11}{50}=\\dfrac{392}{50}=7{,}84$',
            'Tần số tích luỹ: $8; 28; 43; 50$. Vì $n/2=25$, nhóm đầu tiên có tích luỹ $\\ge25$ là $[6;8)$.',
          ],
        },
      ],
    },
  },

  'so-dac-trung-phan-tan': {
    title: 'Số đặc trưng đo mức độ phân tán',
    theory: {
      cards: [
        {
          title: 'Khoảng biến thiên và khoảng tứ phân vị',
          formulas: ['R=x_{\\max}-x_{\\min}', '\\Delta_Q=Q_3-Q_1'],
          note: 'Mẹo: khoảng tứ phân vị ít bị ảnh hưởng bởi giá trị ngoại lệ hơn khoảng biến thiên, vì chỉ dùng 50% dữ liệu ở giữa.',
        },
        {
          title: 'Phương sai và độ lệch chuẩn',
          formulas: ['s^2=\\dfrac1n\\sum_{i=1}^k n_i(c_i-\\bar x)^2', 's=\\sqrt{s^2}'],
          note: 'Mẹo: phương sai càng lớn thì dữ liệu càng phân tán xa số trung bình; độ lệch chuẩn có cùng đơn vị với dữ liệu gốc (phương sai thì không).',
        },
      ],
    },
    video: { caption: '00:00 / 13:35 — so_dac_trung_phan_tan_baigiang.mp4' },
    quiz: [
      { question: 'Khoảng biến thiên R được tính bằng?', options: ['max − min', 'max + min', '(max+min)/2', 'Q3 − Q1'], correctIndex: 0 },
      { question: 'Khoảng tứ phân vị được tính bằng?', options: ['Q3 − Q1', 'Q2 − Q1', 'max − min', 'Q3 + Q1'], correctIndex: 0 },
      { question: 'Độ lệch chuẩn s liên hệ với phương sai s² như thế nào?', options: ['s = s²', 's = √(s²)', 's² = √s', 's = 2s²'], correctIndex: 1 },
      {
        question: 'Phương sai càng lớn cho biết điều gì về mẫu số liệu?',
        options: ['Dữ liệu càng đồng đều', 'Dữ liệu càng phân tán', 'Trung bình càng lớn', 'Trung vị càng lớn'],
        correctIndex: 1,
      },
      { question: 'Đại lượng nào có cùng đơn vị đo với dữ liệu gốc?', options: ['Phương sai', 'Độ lệch chuẩn', 'Tần số', 'Tần suất'], correctIndex: 1 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Cho mẫu số liệu: 2, 4, 6, 8, 10. Tính khoảng biến thiên R.',
        solution: ['$R=10-2=8$'],
      },
      {
        prompt:
          'Bài 2. Cho mẫu số liệu đã sắp xếp: 1, 3, 5, 7, 9, 11, 13. Tính khoảng tứ phân vị.',
        solution: [
          'Trung vị $Q_2=7$. Nửa dưới {1,3,5} có $Q_1=3$. Nửa trên {9,11,13} có $Q_3=11$.',
          '$\\Delta_Q=Q_3-Q_1=11-3=8$',
        ],
      },
      {
        prompt: 'Bài 3. Cho mẫu số liệu: 2, 4, 6. Tính số trung bình và phương sai.',
        solution: [
          '$\\bar x=\\dfrac{2+4+6}{3}=4$',
          '$s^2=\\dfrac{(2-4)^2+(4-4)^2+(6-4)^2}{3}=\\dfrac{8}{3}$',
        ],
      },
      {
        prompt: 'Bài 4. Tính độ lệch chuẩn của mẫu số liệu ở Bài 3.',
        solution: ['$s=\\sqrt{\\dfrac83}\\approx1.63$'],
      },
      {
        prompt:
          'Bài 5. Hai mẫu số liệu A: 5, 5, 5, 5 và B: 2, 4, 6, 8 có cùng số trung bình là 5. So sánh độ phân tán của hai mẫu.',
        solution: [
          'Mẫu A có mọi giá trị bằng nhau nên $s_A^2=0$ (không phân tán).',
          'Mẫu B có các giá trị khác nhau xoay quanh 5 nên $s_B^2>0$.',
          'Vậy mẫu B phân tán hơn mẫu A dù có cùng số trung bình.',
        ],
      },
    ],
    flashcards: [
      { front: 'Khoảng biến thiên', back: '$R=x_{\\max}-x_{\\min}$' },
      { front: 'Khoảng tứ phân vị', back: '$\\Delta_Q=Q_3-Q_1$' },
      { front: 'Công thức phương sai (mẫu ghép nhóm)', back: '$s^2=\\dfrac1n\\sum n_i(c_i-\\bar x)^2$' },
      { front: 'Độ lệch chuẩn', back: '$s=\\sqrt{s^2}$' },
      { front: 'So sánh độ phân tán qua phương sai', back: 'Nếu $s_A^2 > s_B^2$ thì A phân tán hơn B' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Khoảng biến thiên R được tính bằng?', options: ['max − min', 'max + min', '(max+min)/2', 'Q3 − Q1'], correctIndex: 0 },
        { question: 'Khoảng tứ phân vị được tính bằng?', options: ['Q3 − Q1', 'Q2 − Q1', 'max − min', 'Q3 + Q1'], correctIndex: 0 },
        { question: 'Độ lệch chuẩn s liên hệ với phương sai s² như thế nào?', options: ['s = √(s²)', 's = s²', 's² = √s', 's = 2s²'], correctIndex: 0 },
        { question: 'Phương sai càng lớn cho biết điều gì về mẫu số liệu?', options: ['Dữ liệu càng phân tán', 'Dữ liệu càng đồng đều', 'Trung bình càng lớn', 'Trung vị càng lớn'], correctIndex: 0 },
        { question: 'Đại lượng nào có cùng đơn vị đo với dữ liệu gốc?', options: ['Độ lệch chuẩn', 'Phương sai', 'Tần số', 'Tần suất'], correctIndex: 0 },
        { question: 'Khoảng tứ phân vị ít bị ảnh hưởng bởi điều gì so với khoảng biến thiên?', options: ['Giá trị ngoại lệ', 'Số trung bình', 'Mốt', 'Cỡ mẫu'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Cho mẫu: 3, 7, 9, 12, 15. Khoảng biến thiên R bằng?', options: ['12', '9', '6', '15'], correctIndex: 0 },
        { question: 'Cho mẫu đã sắp xếp: 2, 4, 6, 8, 10, 12, 14. Trung vị Q2 bằng?', options: ['8', '6', '10', '7'], correctIndex: 0 },
        { question: 'Với mẫu ở câu trên, Q1 (trung vị nửa dưới {2,4,6}) bằng?', options: ['4', '2', '6', '3'], correctIndex: 0 },
        { question: 'Với mẫu ở câu trên, Q3 (trung vị nửa trên {10,12,14}) bằng?', options: ['12', '10', '14', '11'], correctIndex: 0 },
        { question: 'Với mẫu ở câu trên, khoảng tứ phân vị ΔQ bằng?', options: ['8', '6', '10', '4'], correctIndex: 0 },
        { question: 'Cho mẫu: 5, 5, 5, 5, 5. Phương sai bằng?', options: ['0', '5', '25', '1'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Cho mẫu: 1, 3, 5. Phương sai s² bằng?', options: ['8/3', '4', '8', '3'], correctIndex: 0 },
        { question: 'Cho mẫu: 1, 3, 5. Độ lệch chuẩn s xấp xỉ bằng?', options: ['1,63', '2,67', '1,15', '2'], correctIndex: 0 },
        { question: 'Hai mẫu A: 4,4,4,4 và B: 1,3,5,7 có cùng trung bình 4. Mẫu nào có độ lệch chuẩn lớn hơn?', options: ['Mẫu B', 'Mẫu A', 'Bằng nhau', 'Không so sánh được'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho mẫu số liệu đã sắp xếp: 2, 5, 7, 9, 11, 13, 16. Tính khoảng biến thiên R và khoảng tứ phân vị ΔQ.',
          solution: [
            '$R=16-2=14$',
            'Trung vị $Q_2=9$. Nửa dưới $\\{2,5,7\\}$ có $Q_1=5$. Nửa trên $\\{11,13,16\\}$ có $Q_3=13$.',
            '$\\Delta_Q=Q_3-Q_1=13-5=8$',
          ],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Cho mẫu số liệu: 3, 5, 7, 9. Tính số trung bình, phương sai và độ lệch chuẩn.',
          solution: [
            '$\\bar x=\\dfrac{3+5+7+9}{4}=6$',
            '$s^2=\\dfrac{(3-6)^2+(5-6)^2+(7-6)^2+(9-6)^2}{4}=\\dfrac{9+1+1+9}{4}=5$',
            '$s=\\sqrt5\\approx2{,}24$',
          ],
        },
      ],
    },
  },

  'bien-co-xac-suat': {
    title: 'Biến cố và xác suất của biến cố',
    theory: {
      cards: [
        {
          title: 'Biến cố và không gian mẫu',
          formulas: ['A\\subset\\Omega'],
          note: 'Ω (không gian mẫu) là tập hợp tất cả kết quả có thể của phép thử; biến cố A là một tập con của Ω.',
        },
        {
          title: 'Xác suất cổ điển',
          formulas: ['P(A)=\\dfrac{n(A)}{n(\\Omega)}'],
          note: 'Mẹo: n(A) là số kết quả thuận lợi cho biến cố A, n(Ω) là tổng số kết quả có thể (các kết quả đồng khả năng).',
        },
      ],
    },
    video: { caption: '00:00 / 12:40 — bien_co_xac_suat_baigiang.mp4' },
    quiz: [
      { question: 'Xác suất cổ điển của biến cố A được tính bằng?', options: ['n(A) + n(Ω)', 'n(A) / n(Ω)', 'n(Ω) / n(A)', 'n(A) − n(Ω)'], correctIndex: 1 },
      { question: 'Gieo một con xúc xắc. Không gian mẫu Ω có bao nhiêu phần tử?', options: ['4', '6', '8', '12'], correctIndex: 1 },
      {
        question: 'Gieo một con xúc xắc, biến cố A: "xuất hiện mặt chẵn". n(A) bằng?',
        options: ['2', '3', '4', '6'],
        correctIndex: 1,
      },
      { question: 'Xác suất của biến cố chắc chắn bằng?', options: ['0', '0.5', '1', 'Không xác định'], correctIndex: 2 },
      { question: 'Xác suất của biến cố không thể (rỗng) bằng?', options: ['0', '0.5', '1', 'Không xác định'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Gieo 2 đồng xu cân đối. Tính n(Ω).',
        solution: ['$\\Omega=\\{SS,SN,NS,NN\\} \\Rightarrow n(\\Omega)=4$'],
      },
      {
        prompt: 'Bài 2. Với phép thử ở Bài 1, tính xác suất của biến cố A: "có ít nhất 1 mặt sấp".',
        solution: ['$A=\\{SS,SN,NS\\} \\Rightarrow n(A)=3$', '$P(A)=\\dfrac34$'],
      },
      {
        prompt: 'Bài 3. Rút ngẫu nhiên 1 lá bài từ bộ bài 52 lá. Tính xác suất rút được lá Át (có 4 lá Át).',
        solution: ['$P=\\dfrac{4}{52}=\\dfrac{1}{13}$'],
      },
      {
        prompt: 'Bài 4. Gieo một con xúc xắc 2 lần. Tính n(Ω).',
        solution: ['$n(\\Omega)=6\\times6=36$'],
      },
      {
        prompt: 'Bài 5. Với phép thử ở Bài 4, tính xác suất tổng số chấm 2 lần gieo bằng 7.',
        solution: [
          'Các cặp thoả mãn: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — có 6 cách.',
          '$P=\\dfrac{6}{36}=\\dfrac16$',
        ],
      },
    ],
    flashcards: [
      { front: 'Công thức xác suất cổ điển', back: '$P(A)=\\dfrac{n(A)}{n(\\Omega)}$' },
      { front: 'Xác suất biến cố chắc chắn', back: '$P(\\Omega)=1$' },
      { front: 'Xác suất biến cố không thể', back: '$P(\\varnothing)=0$' },
      { front: 'Miền giá trị của xác suất', back: '$0\\le P(A)\\le 1$' },
      { front: 'Không gian mẫu khi gieo xúc xắc 2 lần', back: '$n(\\Omega)=6\\times6=36$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Xác suất cổ điển của biến cố A được tính bằng?', options: ['n(A) / n(Ω)', 'n(A) + n(Ω)', 'n(Ω) / n(A)', 'n(A) − n(Ω)'], correctIndex: 0 },
        { question: 'Không gian mẫu Ω là gì?', options: ['Tập hợp tất cả kết quả có thể của phép thử', 'Một biến cố cụ thể', 'Số phần tử của biến cố', 'Xác suất của phép thử'], correctIndex: 0 },
        { question: 'Xác suất của biến cố chắc chắn bằng?', options: ['1', '0', '0,5', 'Không xác định'], correctIndex: 0 },
        { question: 'Xác suất của biến cố không thể (rỗng) bằng?', options: ['0', '1', '0,5', 'Không xác định'], correctIndex: 0 },
        { question: 'Gieo một con xúc xắc. Số phần tử của không gian mẫu Ω là?', options: ['6', '4', '8', '12'], correctIndex: 0 },
        { question: 'Xác suất P(A) của một biến cố A luôn thoả mãn?', options: ['0 ≤ P(A) ≤ 1', 'P(A) ≥ 1', 'P(A) ≤ 0', 'P(A) = 1'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Gieo một xúc xắc, biến cố A: "xuất hiện mặt lẻ". n(A) bằng?', options: ['3', '2', '4', '6'], correctIndex: 0 },
        { question: 'Gieo một xúc xắc, xác suất xuất hiện mặt số 5 bằng?', options: ['1/6', '1/2', '1/3', '5/6'], correctIndex: 0 },
        { question: 'Gieo 2 đồng xu cân đối, n(Ω) bằng?', options: ['4', '2', '8', '16'], correctIndex: 0 },
        { question: 'Rút ngẫu nhiên 1 lá bài từ bộ bài 52 lá, xác suất rút được lá Cơ (13 lá) bằng?', options: ['1/4', '1/13', '1/52', '1/2'], correctIndex: 0 },
        { question: 'Một hộp có 4 bi đỏ, 6 bi xanh. Lấy ngẫu nhiên 1 bi, xác suất lấy được bi đỏ bằng?', options: ['2/5', '1/2', '3/5', '1/10'], correctIndex: 0 },
        { question: 'Gieo một xúc xắc 2 lần, n(Ω) bằng?', options: ['36', '12', '6', '24'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Gieo 2 đồng xu cân đối. Xác suất để có đúng 1 mặt sấp bằng?', options: ['1/2', '1/4', '3/4', '1'], correctIndex: 0 },
        { question: 'Gieo một xúc xắc 2 lần. Xác suất tổng số chấm bằng 8 là?', options: ['5/36', '6/36', '4/36', '1/6'], correctIndex: 0 },
        { question: 'Một hộp có 3 bi đỏ, 2 bi xanh. Lấy ngẫu nhiên 2 bi cùng lúc. Xác suất lấy được 2 bi cùng màu bằng?', options: ['2/5', '3/10', '1/10', '3/5'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Gieo một con xúc xắc. Tính xác suất của biến cố A: "xuất hiện mặt có số chấm lớn hơn 4".',
          solution: ['Mặt lớn hơn 4: $\\{5,6\\} \\Rightarrow n(A)=2$', '$P(A)=\\dfrac26=\\dfrac13$'],
        },
        {
          prompt: 'Câu 2 (Vận dụng). Một hộp có 5 bi đỏ và 3 bi xanh. Lấy ngẫu nhiên 2 bi cùng lúc. Tính xác suất lấy được 2 bi khác màu.',
          solution: [
            'Tổng số cách chọn 2 bi trong 8 bi: $C_8^2=28$',
            'Số cách chọn 1 đỏ và 1 xanh: $C_5^1\\cdot C_3^1=5\\times3=15$',
            '$P=\\dfrac{15}{28}$',
          ],
        },
      ],
    },
  },

  'quy-tac-tinh-xac-suat': {
    title: 'Các quy tắc tính xác suất',
    theory: {
      cards: [
        {
          title: 'Quy tắc cộng xác suất',
          formulas: ['P(A\\cup B)=P(A)+P(B)-P(A\\cap B)', 'A\\cap B=\\varnothing \\Rightarrow P(A\\cup B)=P(A)+P(B)'],
          note: 'Mẹo: nếu A và B xung khắc (không thể đồng thời xảy ra) thì A∩B = ∅, công thức cộng rút gọn còn P(A∪B) = P(A)+P(B).',
        },
        {
          title: 'Biến cố đối và quy tắc nhân',
          formulas: ['P(\\bar A)=1-P(A)', 'P(A\\cap B)=P(A)\\cdot P(B)'],
          note: 'Công thức nhân chỉ áp dụng khi A và B độc lập (việc xảy ra của A không ảnh hưởng đến xác suất xảy ra của B).',
        },
      ],
    },
    video: { caption: '00:00 / 15:20 — quy_tac_tinh_xac_suat_baigiang.mp4' },
    quiz: [
      {
        question: 'Công thức cộng xác suất tổng quát là?',
        options: ['P(A∪B) = P(A) + P(B)', 'P(A∪B) = P(A) + P(B) − P(A∩B)', 'P(A∪B) = P(A)·P(B)', 'P(A∪B) = P(A) − P(B)'],
        correctIndex: 1,
      },
      { question: 'Nếu A, B xung khắc thì P(A∪B) bằng?', options: ['P(A) + P(B)', 'P(A)·P(B)', 'P(A) − P(B)', 'P(A∩B)'], correctIndex: 0 },
      { question: 'Xác suất của biến cố đối P(Ā) bằng?', options: ['P(A)', '1 − P(A)', '1 + P(A)', 'P(A) − 1'], correctIndex: 1 },
      { question: 'Nếu A, B độc lập thì P(A∩B) bằng?', options: ['P(A) + P(B)', 'P(A)·P(B)', 'P(A) − P(B)', '0'], correctIndex: 1 },
      { question: 'Xác suất P(A) và P(Ā) luôn thoả mãn?', options: ['P(A) + P(Ā) = 1', 'P(A) − P(Ā) = 1', 'P(A)·P(Ā) = 1', 'P(A) = P(Ā)'], correctIndex: 0 },
    ],
    essays: [
      {
        prompt: 'Bài 1. Gieo một xúc xắc. A: "xuất hiện mặt chẵn" có P(A) = 1/2. Tính xác suất biến cố đối Ā.',
        solution: ['$P(\\bar A)=1-\\dfrac12=\\dfrac12$'],
      },
      {
        prompt: 'Bài 2. Cho P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1. Tính P(A∪B).',
        solution: ['$P(A\\cup B)=0.4+0.3-0.1=0.6$'],
      },
      {
        prompt:
          'Bài 3. Gieo 2 xúc xắc độc lập. A: "xúc xắc 1 ra mặt 6", B: "xúc xắc 2 ra mặt 6". Tính P(A∩B).',
        solution: ['$P(A)=P(B)=\\dfrac16$', '$P(A\\cap B)=\\dfrac16\\times\\dfrac16=\\dfrac{1}{36}$'],
      },
      {
        prompt:
          'Bài 4. Một hộp có 5 bi đỏ, 3 bi xanh (không có loại khác). Lấy ngẫu nhiên 1 bi. Tính xác suất lấy được bi đỏ hoặc bi xanh.',
        solution: [
          'Gọi $P_1$ là xác suất lấy được bi đỏ, $P_2$ là xác suất lấy được bi xanh: $P_1=\\dfrac58,\\quad P_2=\\dfrac38$',
          'Hai biến cố xung khắc: $P=P_1+P_2=\\dfrac58+\\dfrac38=1$ (biến cố chắc chắn vì hộp chỉ có 2 loại bi)',
        ],
      },
      {
        prompt: 'Bài 5. Cho P(A) = 0.6. Tính xác suất để A không xảy ra.',
        solution: ['$P(\\bar A)=1-0.6=0.4$'],
      },
    ],
    flashcards: [
      { front: 'Quy tắc cộng xác suất (tổng quát)', back: '$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$' },
      { front: 'Quy tắc cộng khi A, B xung khắc', back: '$P(A\\cup B)=P(A)+P(B)$' },
      { front: 'Xác suất biến cố đối', back: '$P(\\bar A)=1-P(A)$' },
      { front: 'Quy tắc nhân khi A, B độc lập', back: '$P(A\\cap B)=P(A)\\cdot P(B)$' },
      { front: 'Tổng xác suất A và biến cố đối', back: '$P(A)+P(\\bar A)=1$' },
    ],
    exam: {
      ...EXAM_DEFAULT,
      mcq: [
        // Nhận biết (6)
        { question: 'Công thức cộng xác suất tổng quát là?', options: ['P(A∪B) = P(A)+P(B)−P(A∩B)', 'P(A∪B) = P(A)+P(B)', 'P(A∪B) = P(A)·P(B)', 'P(A∪B) = P(A)−P(B)'], correctIndex: 0 },
        { question: 'Nếu A, B xung khắc thì P(A∪B) bằng?', options: ['P(A) + P(B)', 'P(A)·P(B)', 'P(A) − P(B)', 'P(A∩B)'], correctIndex: 0 },
        { question: 'Xác suất của biến cố đối P(Ā) bằng?', options: ['1 − P(A)', 'P(A)', '1 + P(A)', 'P(A) − 1'], correctIndex: 0 },
        { question: 'Nếu A, B độc lập thì P(A∩B) bằng?', options: ['P(A)·P(B)', 'P(A) + P(B)', 'P(A) − P(B)', '0'], correctIndex: 0 },
        { question: 'P(A) và P(Ā) luôn thoả mãn?', options: ['P(A) + P(Ā) = 1', 'P(A) − P(Ā) = 1', 'P(A)·P(Ā) = 1', 'P(A) = P(Ā)'], correctIndex: 0 },
        { question: 'Hai biến cố A, B được gọi là xung khắc khi?', options: ['A ∩ B = ∅', 'A ∩ B = Ω', 'A = B', 'A, B độc lập'], correctIndex: 0 },
        // Thông hiểu (6)
        { question: 'Cho P(A) = 0,3. Xác suất biến cố đối P(Ā) bằng?', options: ['0,7', '0,3', '1,3', '0'], correctIndex: 0 },
        { question: 'Cho P(A) = 0,5, P(B) = 0,2, P(A∩B) = 0,1. Tính P(A∪B).', options: ['0,6', '0,7', '0,5', '0,4'], correctIndex: 0 },
        { question: 'Gieo 2 xúc xắc độc lập, A: "xúc xắc 1 ra mặt 6" (P=1/6), B: "xúc xắc 2 ra mặt 6" (P=1/6). P(A∩B) bằng?', options: ['1/36', '1/6', '2/6', '1/12'], correctIndex: 0 },
        { question: 'Cho P(A) = 0,6, P(B) = 0,3, A và B xung khắc. Tính P(A∪B).', options: ['0,9', '0,18', '0,3', '1,0'], correctIndex: 0 },
        { question: 'Một hộp có 4 bi đỏ, 5 bi xanh, 3 bi vàng. Xác suất lấy được bi đỏ hoặc bi vàng là?', options: ['7/12', '4/12', '3/12', '9/12'], correctIndex: 0 },
        { question: 'Cho P(A) = 0,7. Xác suất để A không xảy ra bằng?', options: ['0,3', '0,7', '1,7', '0'], correctIndex: 0 },
        // Vận dụng (3)
        { question: 'Hai xạ thủ độc lập cùng bắn vào 1 mục tiêu, xác suất bắn trúng lần lượt là 0,7 và 0,8. Xác suất để cả 2 đều bắn trúng là?', options: ['0,56', '0,7', '1,5', '0,14'], correctIndex: 0 },
        { question: 'Với dữ kiện câu trên, xác suất để có ít nhất 1 người bắn trúng là?', options: ['0,94', '0,56', '0,5', '0,06'], correctIndex: 0 },
        { question: 'Cho P(A) = 0,5, P(B) = 0,4, A và B độc lập. Tính P(A∪B).', options: ['0,7', '0,9', '0,2', '0,6'], correctIndex: 0 },
      ],
      essays: [
        {
          prompt: 'Câu 1 (Thông hiểu). Cho P(A) = 0,45, P(B) = 0,35, P(A∩B) = 0,15. Tính P(A∪B) và xác suất P(Ā).',
          solution: [
            '$P(A\\cup B)=0{,}45+0{,}35-0{,}15=0{,}65$',
            '$P(\\bar A)=1-0{,}45=0{,}55$',
          ],
        },
        {
          prompt:
            'Câu 2 (Vận dụng). Một hộp có 6 bi đỏ, 4 bi xanh. Lấy lần lượt và không hoàn lại 2 bi. Tính xác suất để cả 2 bi lấy được đều màu đỏ.',
          solution: [
            '$P(\\text{bi 1 đỏ})=\\dfrac{6}{10}$',
            'Sau khi lấy 1 bi đỏ, còn 5 đỏ trong 9 bi: $P(\\text{bi 2 đỏ}\\mid\\text{bi 1 đỏ})=\\dfrac{5}{9}$',
            '$P(\\text{cả 2 đỏ})=\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{1}{3}$',
          ],
        },
      ],
    },
  },
}
