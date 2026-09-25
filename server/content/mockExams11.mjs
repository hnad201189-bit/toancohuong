import { MOCK_EXAM_11_GIUA_KY_1 } from './mockExam11GiuaKy1.mjs'
import { MOCK_EXAM_11_HET_KY_1 } from './mockExam11HetKy1.mjs'
import { MOCK_EXAM_11_GIUA_KY_2 } from './mockExam11GiuaKy2.mjs'
import { MOCK_EXAM_11_HET_KY_2 } from './mockExam11HetKy2.mjs'
import { MOCK_EXAM_11_HSG } from './mockExam11Hsg.mjs'
import { MOCK_EXAM_11_KHAO_SAT_CUOI_NAM } from './mockExam11KhaoSatCuoiNam.mjs'

// Nguồn nội dung cho các đề "Thi thử" lớp 11 (giữa kì / hết kì / HSG / khảo
// sát cuối năm), khoá theo examType — khớp với id trong src/data/exams.js.
// backfillMockExams() trong seedFullContent.js sẽ tự thêm các đề còn thiếu
// vào DB mỗi lần khởi động server, không ghi đè đề đã có (kể cả đề admin đã
// sửa tay), nên chỉ cần thêm key mới ở đây rồi khởi động lại server.
export const MOCK_EXAMS_11 = {
  'giua-ky-1': MOCK_EXAM_11_GIUA_KY_1,
  'het-ky-1': MOCK_EXAM_11_HET_KY_1,
  'giua-ky-2': MOCK_EXAM_11_GIUA_KY_2,
  'het-ky-2': MOCK_EXAM_11_HET_KY_2,
  hsg: MOCK_EXAM_11_HSG,
  'khao-sat-cuoi-nam': MOCK_EXAM_11_KHAO_SAT_CUOI_NAM,
}
