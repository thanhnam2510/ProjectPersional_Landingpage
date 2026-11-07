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
      FeatureAreas/        Năm thẻ nghiệp vụ
      FeatureShowcase/     Một nghiệp vụ: danh sách tính năng và ảnh
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
    chapters.ts            Năm nghiệp vụ và tính năng thuộc mỗi nghiệp vụ
    ui.ts                  Chữ giao diện hai ngôn ngữ
    site.ts                Email và số điện thoại liên hệ

  i18n/                    Ngôn ngữ: LanguageProvider, useLang, featureText
  hooks/                   useScrolledPast, useHashSelection
  lib/tour.ts              Ghép nghiệp vụ với tính năng, thứ tự xem ảnh
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
- **Thông tin liên hệ**: điền `contactEmail`, `contactPhone` trong `content/site.ts`. Nút "Gửi email" và "Gọi" tự hiện.
- **Thêm icon**: đặt file `.svg` vào `src/assets/icons/` và khai báo trong `src/assets/icons/index.ts`.
