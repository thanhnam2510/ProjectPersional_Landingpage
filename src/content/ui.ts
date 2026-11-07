import type { IconName } from '@/assets/icons'
import type { Copy } from '@/types/content'

/** Interface text in both languages. */
export const ui = {
  nav: [
    { href: '#featured', label: { vi: 'Tiêu biểu', en: 'Highlights' } },
    { href: '#demo', label: { vi: 'Demo', en: 'Demo' } },
    { href: '#features', label: { vi: 'Tất cả tính năng', en: 'All features' } },
    { href: '#audience', label: { vi: 'Dành cho ai', en: 'Who it is for' } },
    { href: '#contact', label: { vi: 'Liên hệ', en: 'Contact' } },
  ] satisfies { href: string; label: Copy }[],
  cta: { vi: 'Đăng ký demo', en: 'Book a demo' },

  headline: {
    vi: 'Một nền tảng cho công việc, họp, nhân sự và vận hành của cả công ty.',
    en: 'One platform for your company’s work, meetings, people, and operations.',
  },
  lead: {
    vi: 'TeamFlow thay cho bảng tính chấm công, nhóm chat bên ngoài, đơn từ giấy và sổ theo dõi thiết bị. Mỗi phòng ban làm việc theo sơ đồ tổ chức, yêu cầu và đánh giá được chuyển theo đúng sơ đồ đó.',
    en: 'TeamFlow replaces timesheet spreadsheets, outside chat groups, paper forms, and device logbooks. Departments work to your org chart, and requests and reviews are routed along it.',
  },
  primary: { vi: 'Xem demo', en: 'Watch the demo' },
  secondary: { vi: 'Đăng ký demo trực tiếp', en: 'Book a live demo' },
  stats: [
    { value: '9', label: { vi: 'nghiệp vụ trong một nền tảng', en: 'areas in one platform' } },
    { value: 'Web', label: { vi: 'không cần cài phần mềm', en: 'nothing to install' } },
    { value: 'VI · EN', label: { vi: 'tiếng Việt và tiếng Anh', en: 'Vietnamese and English' } },
    { value: '4', label: { vi: 'bước từ giao việc đến báo cáo', en: 'steps from task to report' } },
  ] satisfies { value: string; label: Copy }[],

  featuredEyebrow: { vi: 'Tính năng tiêu biểu', en: 'Highlights' },
  featuredTitle: {
    vi: 'Sáu việc đội của bạn làm hằng ngày trên TeamFlow',
    en: 'Six things your team does every day in TeamFlow',
  },
  featuredMore: { vi: 'Xem chi tiết', en: 'See details' },

  videoEyebrow: { vi: 'Video demo', en: 'Demo video' },
  videoTitle: {
    vi: 'Xem TeamFlow chạy thật trong 3 phút',
    en: 'Watch TeamFlow in action in 3 minutes',
  },
  videoText: {
    vi: 'Quay trực tiếp trên ứng dụng với dữ liệu mẫu: giao việc, log giờ, họp video, yêu cầu, tài sản, đánh giá và nghỉ phép.',
    en: 'Recorded live in the app on sample data: tasks, time logs, video meetings, requests, assets, reviews and leave.',
  },
  videoPlay: { vi: 'Phát video demo', en: 'Play the demo' },
  videoSound: { vi: 'có nhạc nền, phụ đề tiếng Việt', en: 'background music, Vietnamese subtitles' },
  videoLabel: { vi: 'Video demo TeamFlow', en: 'TeamFlow demo video' },
  videoChapters: { vi: 'Các phần trong video', en: 'Video chapters' },
  videoSteps: { vi: 'Muốn xem chậm từng bước?', en: 'Prefer to go step by step?' },
  videoStepsLink: { vi: 'Xem demo 4 bước', en: 'See the 4-step demo' },

  demoEyebrow: { vi: 'Demo 4 bước', en: '4-step demo' },
  demoTitle: {
    vi: 'Từ giao việc đến báo cáo, trên dữ liệu mẫu',
    en: 'From assigning a task to the report, on sample data',
  },
  demoText: {
    vi: 'Một công việc thật trong dự án mẫu đi qua bốn bước. Bấm từng bước hoặc để demo tự chạy.',
    en: 'One real task in the sample project goes through four steps. Click a step, or let the demo play.',
  },
  demoStep: { vi: 'Bước', en: 'Step' },
  demoPlay: { vi: 'Tự chạy', en: 'Play' },
  demoPause: { vi: 'Tạm dừng', en: 'Pause' },
  demoNext: { vi: 'Bước tiếp', en: 'Next step' },
  demoRestart: { vi: 'Xem lại từ đầu', en: 'Start over' },

  modulesEyebrow: { vi: 'Tất cả tính năng', en: 'All features' },
  modulesTitle: {
    vi: 'Chín nhóm nghiệp vụ, chọn một nhóm để xem chi tiết',
    en: 'Nine areas — pick one to see it in action',
  },
  showMore: { vi: 'Xem thêm {n} tính năng', en: 'Show {n} more' },
  showLess: { vi: 'Thu gọn', en: 'Show less' },

  zoomHint: { vi: 'Bấm để phóng to', en: 'Click to enlarge' },
  close: { vi: 'Đóng', en: 'Close' },
  previous: { vi: 'Ảnh trước', en: 'Previous' },
  next: { vi: 'Ảnh sau', en: 'Next' },

  rolesEyebrow: { vi: 'Dành cho ai', en: 'Who it is for' },
  rolesTitle: { vi: 'Mỗi vai trò có màn hình riêng cho việc của mình', en: 'Each role gets screens for its own work' },
  roles: [
    {
      icon: 'shield',
      title: { vi: 'Ban giám đốc', en: 'Leadership' },
      points: [
        { vi: 'Xem tiến độ các dự án trên một màn hình', en: 'Project progress on one screen' },
        { vi: 'Biết đội nào quá tải, ai còn trống', en: 'See which team is overloaded and who has room' },
        { vi: 'Nắm ngân sách dự án và kết quả đánh giá', en: 'Follow project budgets and review results' },
      ],
    },
    {
      icon: 'org',
      title: { vi: 'Trưởng phòng', en: 'Managers' },
      points: [
        { vi: 'Giao việc và theo dõi kế hoạch tuần của đội', en: 'Assign work and follow the team’s weekly plan' },
        { vi: 'Duyệt giờ làm và đơn nghỉ trong một danh sách', en: 'Approve hours and leave from one list' },
        { vi: 'Xử lý yêu cầu và đánh giá nhân viên', en: 'Handle requests and review their people' },
      ],
    },
    {
      icon: 'tasks',
      title: { vi: 'Nhân viên', en: 'Staff' },
      points: [
        { vi: 'Thấy việc cần làm hôm nay ngay khi mở trang', en: 'See today’s work as soon as they sign in' },
        { vi: 'Xin nghỉ, gửi yêu cầu, ghi giờ không cần giấy tờ', en: 'Request leave, send requests, and log hours without paperwork' },
        { vi: 'Trao đổi, chia sẻ tài liệu ở một chỗ', en: 'Chat and share documents in one place' },
      ],
    },
  ] satisfies { icon: IconName; title: Copy; points: Copy[] }[],

  whyEyebrow: { vi: 'Vì sao chọn TeamFlow', en: 'Why TeamFlow' },
  whyTitle: { vi: 'Làm cho cả công ty, không chỉ một nhóm dự án', en: 'Built for a whole company, not just one project team' },
  why: [
    {
      icon: 'shield',
      title: { vi: 'Đúng người, đúng quyền', en: 'The right access for each role' },
      text: {
        vi: 'Phân quyền theo phòng ban, mỗi người chỉ thấy và duyệt những gì thuộc phạm vi của mình. Các thay đổi quyền được ghi vào nhật ký bảo mật.',
        en: 'Access follows your departments, so people only see and approve what is theirs. Changes of rights are recorded in the security log.',
      },
    },
    {
      icon: 'bolt',
      title: { vi: 'Cập nhật theo thời gian thực', en: 'Real-time updates' },
      text: {
        vi: 'Tin nhắn, thông báo và bài viết mới hiện lên mà không cần tải lại trang.',
        en: 'Messages, notifications, and new posts show up without reloading the page.',
      },
    },
    {
      icon: 'globe',
      title: { vi: 'Dễ làm quen', en: 'Easy to pick up' },
      text: {
        vi: 'Giao diện tiếng Việt và tiếng Anh, chế độ sáng và tối, dùng ngay trên trình duyệt.',
        en: 'Vietnamese and English, light and dark themes, straight from the browser.',
      },
    },
    {
      icon: 'folder',
      title: { vi: 'Dữ liệu tập trung', en: 'Everything in one place' },
      text: {
        vi: 'Công việc, tài liệu, tin nhắn, giờ làm, nghỉ phép, tài sản và đánh giá nằm chung một hệ thống, có sao lưu tự động hằng ngày và khôi phục khi cần.',
        en: 'Work, documents, chat, hours, leave, assets, and reviews live together in one system, with daily automatic backups and restore when needed.',
      },
    },
  ] satisfies { icon: IconName; title: Copy; text: Copy }[],

  ctaTitle: {
    vi: 'Muốn xem TeamFlow chạy cho công ty của bạn?',
    en: 'Want to see TeamFlow working for your company?',
  },
  ctaText: {
    vi: 'Xem lại video demo, hoặc đăng ký demo trực tiếp qua email hay điện thoại để được hướng dẫn theo nghiệp vụ bạn quan tâm.',
    en: 'Replay the demo video, or book a live demo by email or phone and we will walk through the areas you care about.',
  },
  ctaEmail: { vi: 'Đăng ký demo trực tiếp', en: 'Book a live demo' },
  ctaEmailSubject: { vi: 'Đăng ký demo TeamFlow', en: 'TeamFlow demo request' },
  ctaPhone: { vi: 'Gọi', en: 'Call' },

  footer: {
    vi: 'Nền tảng quản lý công việc và nhân sự cho doanh nghiệp.',
    en: 'Work and people management for businesses.',
  },
  backToTop: { vi: 'Lên đầu trang', en: 'Back to top' },
}
