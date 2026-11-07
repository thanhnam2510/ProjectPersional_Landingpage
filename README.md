# TeamFlow — trang giới thiệu sản phẩm

Trang giới thiệu các tính năng của TeamFlow cho doanh nghiệp, có tiếng Việt và tiếng Anh.

## Chạy

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # bản build trong dist/
npm run lint
```

## Cấu trúc

```
public/
  icons/favicon.svg
  images/screens/          Ảnh chụp từng tính năng (<id>.jpg)

src/
  main.tsx                 Điểm khởi động, bọc LanguageProvider, nạp style chung
  App.tsx                  Ghép các khối của trang theo thứ tự

  assets/brand/            Logo TeamFlow
  assets/icons/            Icon dạng .svg, mỗi icon một file; index.ts liệt kê tên

  components/
    layout/                Khung trang
      SiteHeader/          Thanh trên cùng
      LanguageSwitch/      Nút VI / EN
      SiteFooter/          Chân trang
      BackToTop/           Nút lên đầu trang
    sections/              Các khối nội dung, theo thứ tự trên trang
      Hero/                Phần mở đầu
      Highlights/          Sáu tính năng tiêu biểu
      DemoFlow/            Demo 4 bước: giao việc, log giờ, duyệt, báo cáo
      FeatureExplorer/     Tất cả tính năng: chọn nhóm, mỗi nhóm hiện 4 mục và nút "Xem thêm"
      Audience/            Dành cho ai
      Benefits/            Vì sao chọn TeamFlow
      ContactBanner/       Lời mời liên hệ
    ui/                    Thành phần dùng lại
      Brand/               Logo
      Icon/                Vẽ icon từ assets/icons
      ScreenFrame/         Khung ảnh kiểu cửa sổ trình duyệt
      ProtectedImage/      Ảnh có dấu chìm, chặn kéo và lưu
      Lightbox/            Xem ảnh phóng to

  content/                 Toàn bộ chữ trên trang
    features.ts            Tính năng (tiếng Việt) và ảnh tương ứng
    features.en.ts         Tính năng (tiếng Anh)
    chapters.ts            Chín nghiệp vụ và tính năng thuộc mỗi nghiệp vụ
    highlights.ts          Sáu tính năng tiêu biểu
    demoFlow.ts            Các bước của demo và ảnh flow-*.jpg
    ui.ts                  Chữ giao diện hai ngôn ngữ
    site.ts                Email và số điện thoại liên hệ

  i18n/                    Ngôn ngữ: LanguageProvider, useLang, featureText
  hooks/                   useScrolledPast, useHashSelection
  lib/                     tour.ts (ghép nghiệp vụ với tính năng), screen.ts (đường dẫn ảnh), roving.ts (phím mũi tên cho tab)
  types/content.ts         Kiểu dữ liệu nội dung

  styles/
    _tokens.scss           Màu, kích thước, điểm ngắt
    _mixins.scss           container, below(), icon-tile, glass-card, bare-button
    _base.scss             Reset và style nền
    _typography.scss       eyebrow, section-head
    _buttons.scss          .button và các biến thể
    main.scss              Nạp các file trên
```

Mỗi component nằm trong một thư mục riêng gồm `Component.tsx`, `Component.scss` và `index.ts`. File SCSS của component dùng `@use 'tokens' as *;` và `@use 'mixins' as *;`. Import trong code dùng `@/` cho thư mục `src`.

## Sửa nội dung thường gặp

- **Thêm một tính năng**: thêm ảnh `public/images/screens/<id>.jpg`, thêm mục vào `content/features.ts` và `content/features.en.ts`, rồi thêm `<id>` vào `featureIds` của nghiệp vụ trong `content/chapters.ts`.
- **Đổi tính năng tiêu biểu**: sửa `content/highlights.ts` (id tính năng, nhóm, tên, một câu lợi ích).
- **Thông tin liên hệ**: điền `contactEmail`, `contactPhone` trong `content/site.ts`. Nút "Đăng ký demo trực tiếp" và "Gọi" tự hiện.
- **Liên kết tới một nhóm hoặc tính năng**: `#<id nhóm>` (ví dụ `#leave`) hoặc `#<id tính năng>` (ví dụ `#leave-accrual`) mở đúng tab trong "Tất cả tính năng".
- **Thêm icon**: đặt file `.svg` vào `src/assets/icons/` và khai báo trong `src/assets/icons/index.ts`.
- **Video demo**: file `public/videos/teamflow-demo.mp4` và ảnh bìa `public/videos/teamflow-demo-poster.jpg`; thời lượng và mốc các chương nằm trong `content/demoVideo.ts`. Video chỉ tải khi người xem bấm phát. Nhạc nền là track tự tổng hợp, không có bản quyền; muốn thay bằng bài khác (chỉ đổi âm thanh, giữ nguyên hình) thì chạy:

  ```bash
  ffmpeg -i teamflow-demo.mp4 -stream_loop -1 -i nhac-moi.mp3 -map 0:v -map 1:a -c:v copy \
    -af "afade=t=in:d=2,afade=t=out:st=178:d=3,volume=0.5" -c:a aac -b:a 128k -shortest -movflags +faststart teamflow-demo-new.mp4
  ```
