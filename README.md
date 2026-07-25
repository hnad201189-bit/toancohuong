# Toán 11 — Học theo chuyên đề

Web app học Toán 11 theo chuyên đề, kèm trang quản trị để thêm/sửa mảng kiến
thức, chuyên đề và nội dung bài học (lý thuyết, video, trắc nghiệm, tự luận,
flashcard, đề kiểm tra).

## Kiến trúc

- **Frontend**: React + Vite (`src/`), KaTeX cho công thức toán, React Router
  cho 2 khu vực `/` (trang chính) và `/admin` (trang quản trị).
- **Backend**: Node/Express (`server/`), lưu dữ liệu bằng SQLite (`node:sqlite`
  built-in, không cần cài thêm driver). File CSDL nằm ở `server/data/app.db`
  (tự tạo & seed dữ liệu mẫu ở lần chạy đầu tiên, không commit vào git).

## Chạy dự án

Cài dependencies (chỉ cần một lần):

```bash
npm install
```

Chạy cả backend lẫn frontend cùng lúc:

```bash
npm run dev:all
```

Hoặc chạy riêng từng phần (2 terminal):

```bash
npm run server   # API tại http://localhost:4000
npm run dev      # Frontend tại http://localhost:5173 (proxy /api sang backend)
```

Mở `http://localhost:5173` để xem trang chính, `http://localhost:5173/admin`
để vào trang quản trị.

## Trang quản trị

- Mật khẩu mặc định: `admin123`. Đổi bằng biến môi trường `ADMIN_PASSWORD`
  khi chạy backend, ví dụ: `ADMIN_PASSWORD=matkhaumoi npm run server`.
- Có thể: thêm/sửa/xoá mảng kiến thức, chuyên đề, chuyên đề HSG; soạn/sửa/gỡ
  nội dung bài học mẫu (lý thuyết KaTeX, video, trắc nghiệm, tự luận,
  flashcard, ma trận đề kiểm tra) cho từng chuyên đề.
- Đăng nhập dùng token phiên lưu trong bộ nhớ server (khoảng 12 giờ); nếu
  restart backend, cần đăng nhập lại.

### Gắn video bài giảng

Trong trình soạn bài học (`/admin/topics/:id/lesson`), mục **Video**: dán link
YouTube (`youtu.be/...` hoặc `youtube.com/watch?v=...`) vào ô "Link YouTube".
Video nên để chế độ **"Không công khai" / "Không liệt kê"** trên YouTube (ai
có link mới xem được, không hiện trong tìm kiếm/kênh công khai) — miễn phí,
không tốn băng thông/lưu trữ của server. Để trống thì trang bài học tự hiện
khung chờ như trước.

### Nhập dữ liệu hàng loạt (`/admin/import`)

Thay vì nhập tay từng mục, có thể tải lên file **CSV** hoặc **JSON** để thêm
nhiều mục cùng lúc:

| Mục                     | Cột CSV cần có                                              |
| ------------------------ | ------------------------------------------------------------ |
| Mảng kiến thức           | `name, description, progress`                               |
| Chuyên đề (trong 1 mảng) | `name, progress`                                             |
| Chuyên đề HSG            | `name, progress`                                             |
| Câu hỏi trắc nghiệm      | `question, option_a, option_b, option_c, option_d, correct` (correct = A/B/C/D) |
| Flashcard                 | `front, back` (back có thể chứa công thức KaTeX)             |

File Excel: dùng **Save As → CSV (UTF-8)** rồi tải file `.csv` lên. Dòng đầu
tiên phải đúng tên cột như trên. Trùng tên mảng kiến thức/chuyên đề sẽ được
cập nhật thay vì tạo bản mới; câu hỏi trắc nghiệm và flashcard sẽ được nối
thêm vào bài học đã có (hoặc tạo bài học mới nếu điền tiêu đề).

## Chụp ảnh giải bài (AI)

Học sinh chụp/tải ảnh một bài toán ở trang chính (nút "📷 Chụp ảnh giải bài"
trên sidebar), AI đọc đề và giải chi tiết từng bước.

Cần cấu hình API key thật của Anthropic để tính năng này hoạt động (mỗi lần
giải bài sẽ tốn một lượt gọi API — có phát sinh chi phí):

1. Lấy API key tại **console.anthropic.com** (mục API Keys), cần thêm phương
   thức thanh toán trong mục Billing trước.
2. Sao chép `server/.env.example` thành `server/.env`, điền:
   ```
   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
   ```
3. Khởi động lại backend (`npm run server` hoặc `npm run dev:all`) — file
   `.env` được tự nạp, không cần cài thêm gói `dotenv`.

Chưa cấu hình key thì trang vẫn hoạt động bình thường, chỉ hiện thông báo lỗi
rõ ràng khi bấm "Giải bài".

## Tìm gia sư

Mục "🎓 Tìm gia sư" trên trang chính (dưới "📷 Chụp ảnh giải bài"):

- **Học sinh**: tìm gia sư theo khu vực (lọc theo từ khoá, VD "Quận 1") và
  môn học (Toán, Lý, Hóa, Văn...). Mỗi gia sư hiện dưới dạng thẻ hồ sơ với
  ảnh đại diện tự tạo (chữ cái đầu tên + màu ngẫu nhiên theo tên), khu vực,
  môn dạy, giới thiệu, kinh nghiệm/thành tích, giá, và số điện thoại **ẩn**
  (chỉ hiện 3 số cuối, VD `*******321`).
- **Liên hệ**: học sinh không gọi trực tiếp — bấm **"Yêu cầu kết nối"**, điền
  tên + số điện thoại của mình, gửi đi. Admin là người trung gian kết nối hai
  bên (xem mục dưới).
- **Gia sư**: tự đăng ký hồ sơ ở tab "Đăng ký làm gia sư" (không cần tài
  khoản) — hồ sơ vào trạng thái **chờ duyệt**, chưa hiển thị công khai.
- **Admin** (`/admin/tutors`): duyệt / từ chối / sửa / xoá hồ sơ gia sư. Chỉ
  hồ sơ đã duyệt mới hiện cho học sinh thấy, tránh spam.
- **Admin — Yêu cầu kết nối** (`/admin/contact-requests`): xem danh sách học
  sinh đã bấm "Yêu cầu kết nối", thấy **đầy đủ số điện thoại** của cả học
  sinh lẫn gia sư để tự liên lạc/giới thiệu hai bên, rồi đánh dấu đã xử lý.

## Build production

```bash
npm run build   # build frontend ra dist/
npm run server  # chạy API (cần chạy song song, phục vụ /api)
```
