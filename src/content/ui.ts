import type { IconName } from '@/assets/icons'
import type { Copy } from '@/types/content'

/** Interface text in both languages. */
export const ui = {
  nav: [
    { href: '#work', label: { vi: 'Công việc', en: 'Work' } },
    { href: '#together', label: { vi: 'Họp', en: 'Meetings' } },
    { href: '#leave', label: { vi: 'Nghỉ phép', en: 'Leave' } },
    { href: '#time', label: { vi: 'Giờ làm', en: 'Time' } },
    { href: '#org', label: { vi: 'Tổ chức', en: 'Organization' } },
    { href: '#people', label: { vi: 'Bảo mật', en: 'Security' } },
    { href: '#performance', label: { vi: 'Đánh giá', en: 'Reviews' } },
    { href: '#operations', label: { vi: 'Tài sản', en: 'Assets' } },
    { href: '#budget', label: { vi: 'Ngân sách', en: 'Budgets' } },
  ] satisfies { href: string; label: Copy }[],
  cta: { vi: 'Liên hệ tư vấn', en: 'Talk to us' },

  headline: {
    vi: 'Một nền tảng cho công việc, họp, nhân sự và vận hành của cả công ty.',
    en: 'One platform for your company’s work, meetings, people, and operations.',
  },
  lead: {
    vi: 'TeamFlow thay cho bảng tính chấm công, nhóm chat bên ngoài, đơn từ giấy và sổ theo dõi thiết bị. Mỗi phòng ban làm việc theo đúng sơ đồ tổ chức, mọi yêu cầu và đánh giá đến đúng người.',
    en: 'TeamFlow replaces timesheet spreadsheets, outside chat groups, paper forms, and device logbooks. Every department works to your org chart, and every request and review reaches the right person.',
  },
  primary: { vi: 'Xem tính năng', en: 'See the features' },
  secondary: { vi: 'Liên hệ tư vấn', en: 'Talk to us' },
  stats: [
    { value: '9', label: { vi: 'nghiệp vụ trong một nền tảng', en: 'areas in one platform' } },
    { value: '0', label: { vi: 'phần mềm cần cài thêm', en: 'extra apps to install' } },
    { value: 'VI · EN', label: { vi: 'tiếng Việt và tiếng Anh', en: 'Vietnamese and English' } },
    { value: '24/7', label: { vi: 'dùng trên trình duyệt', en: 'in any browser' } },
  ] satisfies { value: string; label: Copy }[],

  modulesEyebrow: { vi: 'Tính năng', en: 'Features' },
  modulesTitle: {
    vi: 'Chín nghiệp vụ chính, chọn một để xem chi tiết',
    en: 'Nine core areas — pick one to see it in action',
  },
  screens: { vi: 'tính năng', en: 'features' },

  zoomHint: { vi: 'Bấm để phóng to', en: 'Click to enlarge' },
  close: { vi: 'Đóng', en: 'Close' },
  previous: { vi: 'Ảnh trước', en: 'Previous' },
  next: { vi: 'Ảnh sau', en: 'Next' },

  rolesEyebrow: { vi: 'Dành cho ai', en: 'Who it is for' },
  rolesTitle: { vi: 'Mỗi người trong công ty đều nhẹ việc hơn', en: 'Lighter work for everyone in the company' },
  roles: [
    {
      icon: 'shield',
      title: { vi: 'Ban giám đốc', en: 'Leadership' },
      points: [
        { vi: 'Nhìn tiến độ mọi dự án trên một màn hình', en: 'Every project’s progress on one screen' },
        { vi: 'Biết đội nào quá tải, ai còn trống', en: 'See which team is overloaded and who has room' },
        { vi: 'Nắm ngân sách dự án và kết quả đánh giá', en: 'Follow project budgets and review results' },
      ],
    },
    {
      icon: 'org',
      title: { vi: 'Trưởng phòng', en: 'Managers' },
      points: [
        { vi: 'Giao việc và theo dõi kế hoạch tuần của đội', en: 'Assign work and follow the team’s weekly plan' },
        { vi: 'Duyệt giờ làm và đơn nghỉ trong vài giây', en: 'Approve hours and leave in seconds' },
        { vi: 'Xử lý yêu cầu và đánh giá nhân viên', en: 'Handle requests and review their people' },
      ],
    },
    {
      icon: 'tasks',
      title: { vi: 'Nhân viên', en: 'Staff' },
      points: [
        { vi: 'Biết rõ hôm nay cần làm gì', en: 'Know exactly what to do today' },
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
        vi: 'Phân quyền theo phòng ban, mỗi người chỉ thấy và duyệt những gì thuộc phạm vi của mình. Mọi thay đổi quyền đều có nhật ký.',
        en: 'Access follows your departments, so people only see and approve what is theirs. Every change of rights is logged.',
      },
    },
    {
      icon: 'bolt',
      title: { vi: 'Cập nhật tức thì', en: 'Always up to date' },
      text: {
        vi: 'Tin nhắn, thông báo và bài viết mới hiện ngay, không cần tải lại trang.',
        en: 'Messages, notifications, and new posts appear immediately, without reloading.',
      },
    },
    {
      icon: 'globe',
      title: { vi: 'Dễ dùng cho mọi người', en: 'Easy for everyone' },
      text: {
        vi: 'Giao diện tiếng Việt và tiếng Anh, chế độ sáng và tối, dùng ngay trên trình duyệt.',
        en: 'Vietnamese and English, light and dark themes, straight from the browser.',
      },
    },
    {
      icon: 'folder',
      title: { vi: 'Dữ liệu tập trung', en: 'Everything in one place' },
      text: {
        vi: 'Công việc, tài liệu, tin nhắn, giờ làm, nghỉ phép, tài sản và đánh giá nằm chung một hệ thống, được sao lưu tự động mỗi ngày.',
        en: 'Work, documents, chat, hours, leave, assets, and reviews live together in one system, backed up automatically every day.',
      },
    },
  ] satisfies { icon: IconName; title: Copy; text: Copy }[],

  ctaTitle: {
    vi: 'Sẵn sàng đưa công ty lên một nền tảng chung?',
    en: 'Ready to bring your company onto one platform?',
  },
  ctaText: {
    vi: 'Liên hệ để được demo trực tiếp và tư vấn triển khai cho doanh nghiệp của bạn.',
    en: 'Get in touch for a live demo and advice on rolling it out in your business.',
  },
  ctaFallback: { vi: 'Xem lại các tính năng', en: 'Back to the features' },
  ctaEmail: { vi: 'Gửi email', en: 'Email us' },
  ctaPhone: { vi: 'Gọi', en: 'Call' },

  footer: {
    vi: 'Nền tảng quản lý công việc và nhân sự cho doanh nghiệp.',
    en: 'Work and people management for businesses.',
  },
  backToTop: { vi: 'Lên đầu trang', en: 'Back to top' },
}
