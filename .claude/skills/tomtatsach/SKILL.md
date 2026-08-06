---
name: tomtatsach
description: Use when the user uploads or references a math book/workbook PDF and asks for a rewritten study document/summary of it (not necessarily wired into the app) — original explanations, original practice problems, and interactive step-by-step hints. Triggers on phrases like "tóm tắt sách", "viết lại sách này", "làm 20 trang đầu", "biên soạn lại cuốn này", or a follow-up like "làm thử N trang". Different from `book-to-chuyen-de`, which targets integrating content into this app's chuyên đề system — use that one instead when the user explicitly wants it added to the app.
---

# Tóm tắt sách → tài liệu học tương tác

Biến một cuốn sách/tài liệu Toán dạng PDF (thường là bản scan, không có lớp
văn bản) thành một **tài liệu Artifact độc lập**: khái niệm được viết lại
bằng lời văn mới, ví dụ thực tế mở rộng, mô tả hình vẽ bằng lời, và bài tập
tự soạn có **lời giải gợi ý từng bước** + **nút đổi sang bài tương tự** để
luyện tập không thuộc lòng đáp số.

`ARGUMENTS` thường là: đường dẫn file PDF, phạm vi trang (vd. "20 trang đầu"),
và các ghi chú thêm của người dùng.

## 0. Bản quyền — luôn làm trước tiên

Nguồn là sách đã xuất bản (kể cả khi PDF là bản scan không có lớp văn bản,
hoặc dính watermark của các trang chia sẻ lậu như daykemquynhon,
boiduonghoahoc). **Không bao giờ chép nguyên văn đề bài, số liệu, hay lời
giải của sách** — kể cả khi đổi cách trình bày.

- Nói rõ với người dùng: sẽ dùng sách để tham khảo **cấu trúc** (chương nào,
  tỉ lệ cơ bản/nâng cao, phong cách trình bày lời giải) rồi **tự soạn nội
  dung mới hoàn toàn** — đề bài mới, số liệu mới, cách diễn đạt mới, cùng độ
  khó.
- Nếu người dùng đã tự nói rõ ý này trong yêu cầu ban đầu (ví dụ: "bài toán
  mới... giữ nguyên logic"), coi như đã đồng ý, không cần hỏi lại bước này.
- Không OCR/trích xuất sâu để "lấy lại" đề gốc dưới hình thức khác — mục
  tiêu không bao giờ là khôi phục nội dung gốc của sách.

## 1. Xem nhẹ phần nguồn

1. Thử `Read` với `pages` nhỏ (vd. `1-5`) trước. Nếu báo lỗi `pdftoppm is not
   installed` (thường gặp trên Windows), coi đây là dấu hiệu PDF là bản scan
   — không phải lỗi cần fix.
2. Chuyển trang cần xem thành ảnh bằng PyMuPDF (không cần poppler):
   ```powershell
   pip install --quiet pymupdf
   ```
   ```python
   import fitz
   doc = fitz.open(pdf_path)
   mat = fitz.Matrix(2.2, 2.2)  # ~150-200 dpi
   for i in range(start-1, end):
       doc[i].get_pixmap(matrix=mat).save(f"{outdir}/page_{i+1:03d}.png")
   ```
   Lưu ảnh vào thư mục scratchpad của phiên làm việc, không lưu vào repo.
3. Dùng `Read` để xem trực tiếp một vài ảnh trang (bìa, mục lục nếu có, 1-2
   trang bài tập mẫu) — chỉ để nắm **cấu trúc** (chương/chủ đề nào, tỉ lệ cơ
   bản/nâng cao, khuôn mẫu trình bày lời giải "Bài X — Hướng dẫn giải"...).
   Không cần xem hết toàn bộ phạm vi trang trước khi soạn.

## 2. Xác nhận phạm vi & định dạng với người dùng

Dùng `AskUserQuestion` (trừ khi người dùng đã nói rõ) để chốt hai điều:

1. **Định dạng đầu ra:**
   - *Tài liệu độc lập (Artifact)* — mặc định cho skill này; không đụng vào
     codebase app.
   - *Chuyên đề trong app* — nếu người dùng chọn cái này, dừng lại và
     chuyển sang skill `book-to-chuyen-de` thay vì tiếp tục ở đây.
2. **Cách tiếp cận nội dung:** xác nhận lại nguyên tắc ở mục 0 (tự soạn bài
   mới, không lấy nguyên đề/số liệu gốc).

## 3. Soạn nội dung gốc

Với phạm vi đã chốt (vd. "20 trang đầu" ~ tương đương 1 chương nhỏ), soạn
theo từng chủ đề con:

- **Khái niệm** — diễn giải lại bằng lời văn mới, đầy đủ hơn nếu sách viết
  tắt; định nghĩa rõ ràng, có kí hiệu.
- **Ví dụ thực tế mở rộng** — ít nhất 1 ví dụ đời sống mới cho mỗi khái
  niệm quan trọng (không lấy ví dụ trong sách).
- **Mô tả hình vẽ bằng lời** — nếu sách có hình minh họa (sơ đồ Venn, tia
  số, hình học...), mô tả lại bằng văn bản/công thức thay vì chép ảnh.
- **Bài tập tự soạn** — mỗi bài có lời giải mẫu trình bày theo đúng khuôn
  5 bước (đọc đề & gọi tên đại lượng → chọn hướng giải → trình bày từng
  bước có giải thích → thử lại/đối chiếu điều kiện → kết luận rõ ràng).
  **Tính tay và kiểm tra lại mọi đáp số trước khi viết vào tài liệu** — đây
  là chi phí thật của việc soạn bài, đừng đoán số.

## 4. Dựng thành Artifact có luyện tập tương tác

Trước khi viết trang, **load skill `artifact-design`** — đây là tài liệu học
thuật/utilitarian (không phải landing page), nên chọn hướng "polished, not
flashy": phân cấp typographic thật, palette được chọn có chủ đích theo chủ
đề (không dùng công thức mặc định kem+terracotta), layout đọc một cột với
mục lục phụ.

Mỗi bài tập dựng theo khuôn tương tác đã kiểm chứng hiệu quả:

```
.problem (data-pool="..." data-qid="Bài X.Y")
 ├─ đề bài
 ├─ .controls: 4 nút
 │    💡 Gợi ý bước tiếp theo   — mỗi lần bấm lộ ĐÚNG 1 bước kế tiếp, tự
 │                                 disable khi hết bước
 │    👁 Xem đáp số ngay        — lộ thẳng đáp số, KHÔNG tự lộ các bước
 │    🔄 Đổi bài tương tự       — đảo sang bài cùng dạng từ một pool JS
 │                                 (bài gốc luôn là index 0, tuần hoàn quay
 │                                 lại sau khi hết biến thể); ẩn nút này nếu
 │                                 bài không có biến thể
 │    ↺ Làm lại                — ẩn mặc định, chỉ hiện khi đã lộ gì đó,
 │                                 đưa bài về trạng thái ban đầu
 └─ .sol-body: các .step (class "hidden" mặc định) + .answer (class
    "hidden" mặc định)
```

Soạn thêm một số bài **tương tự** (khoảng 1 biến thể/bài là đủ, nhiều hơn
nếu người dùng yêu cầu) cho các bài có "dạng lặp lại" tự nhiên; bài minh họa
kỹ thuật đặc thù (không có dạng chung) thì không cần biến thể — chỉ ẩn nút
đổi bài cho bài đó.

JS thuần (không cần capability nào của Artifact — đây chỉ là tương tác phía
client, không cần lưu trạng thái giữa các lượt xem):
- Khởi tạo mỗi `.problem`: đọc nội dung tĩnh sẵn có trong DOM làm phần tử
  index 0 của pool (tránh chép tay lại đề gốc trong JS), rồi nối thêm các
  biến thể hard-code từ `window.VARIANTS[pool-id]`.
- 4 hàm xử lý: lộ bước kế tiếp, lộ đáp số, đổi biến thể (viết lại
  `.qtext`/`.sol-body`, reset trạng thái, cập nhật nhãn "· biến thể k/n"),
  làm lại (ẩn hết, reset).
- Tôn trọng `prefers-reduced-motion` khi cuộn tới bước mới lộ.

## 5. Xác minh trước khi publish

1. Đối chiếu tay lại toàn bộ đáp số (bài gốc lẫn bài biến thể) một lần nữa.
2. Viết một test headless bằng `jsdom` (`npm install --no-save jsdom` trong
   thư mục scratchpad) mô phỏng click từng nút cho **mọi** `.problem`:
   - lộ đúng từng bước một, đúng thứ tự, disable đúng lúc;
   - nút "Làm lại" ẩn/hiện đúng lúc;
   - "Xem đáp số ngay" lộ đáp số mà không lộ các bước;
   - "Đổi bài tương tự" đổi nội dung, reset trạng thái, và quay đúng vòng về
     bài gốc; nút này ẩn đúng ở các bài không có pool.

   Lưu ý: jsdom không cài sẵn `window.matchMedia`/`scrollIntoView` — polyfill
   hai hàm này trong script test trước khi trigger `DOMContentLoaded`, đây
   là giới hạn môi trường test chứ không phải lỗi trong trang.
3. Dọn file test/`node_modules` tạm khỏi scratchpad sau khi xong (không bắt
   buộc vì scratchpad đã cô lập theo phiên, nhưng nên làm nếu người dùng có
   thể nhìn thấy thư mục).

## 6. Publish

Gọi `Artifact` với `favicon` (bắt buộc), `title`, `description` phù hợp chủ
đề sách. Khi cập nhật lại tài liệu đã publish trong cùng phiên, gọi lại đúng
`file_path` đó để giữ nguyên URL; nếu tiếp tục ở phiên khác, dùng `url` của
artifact đã publish trước đó (tìm bằng `action: "list"` nếu cần) để không
tạo URL mới.

### Lưu thêm một bản để úp lên website thật của dự án

Artifact chỉ là link riêng tư trên claude.ai, chưa nằm trên website thật của
dự án. Để tiện đưa lên site, **lưu thêm một bản độc lập vào
`public/tai-lieu/<slug>.html`** trong repo — vì `public/` được Vite copy
nguyên vẹn vào `dist/` khi `npm run build`, và `server/index.js` đã
`express.static(dist)`, nên chỉ cần file này tồn tại là sau lần build/deploy
kế tiếp nó tự sống ở `/tai-lieu/<slug>.html` trên site thật, **không cần sửa
route hay code backend nào**.

- `<slug>` đặt theo đúng quy tắc `slugify()` của repo
  (`server/slugify.js`: bỏ dấu, thường hóa, nối bằng `-`), ví dụ
  `chuong-1-tap-hop-so-tu-nhien.html`.
- Khác với bản Artifact (được tool tự bọc khung `<!doctype html>…<body>`),
  bản lưu trong `public/` phải là **một file HTML hoàn chỉnh** — tự thêm
  `<!doctype html><html lang="vi"><head><meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>…</title></head><body>` bao quanh đúng nội dung đã dựng ở mục 4,
  rồi đóng `</body></html>`.
- File này độc lập, không phụ thuộc React/Vite build pipeline của app (không
  import CSS/JS của app) — an toàn để thả thẳng vào `public/tai-lieu/`.
- Sau khi lưu file, **không tự ý `git add`/commit** — chỉ báo cho người dùng
  đường dẫn file và đường dẫn sẽ có trên site (`/tai-lieu/<slug>.html`), để
  họ tự quyết định khi nào commit/deploy (theo đúng nguyên tắc chỉ commit
  khi được yêu cầu).

## 7. Khi người dùng gọi lại để làm phần tiếp theo

Nếu người dùng nói "làm tiếp trang N trở đi" hoặc tương tự, lặp lại từ mục 1
với phạm vi trang mới, nhưng **thêm nội dung mới vào cùng tài liệu đã có**
(thêm chủ đề/section mới, không tạo file/Artifact riêng) trừ khi người dùng
nói rõ muốn tách file mới.
