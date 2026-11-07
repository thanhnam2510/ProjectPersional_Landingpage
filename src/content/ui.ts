import type { IconName } from '@/assets/icons'
import type { Copy } from '@/types/content'

/** Interface text in both languages. */
export const ui = {
  nav: [
    { href: '#work', label: { vi: 'Công việc', en: 'Work' } },
    { href: '#together', label: { vi: 'Họp & chat', en: 'Meetings' } },
    { href: '#leave', label: { vi: 'Nghỉ phép', en: 'Leave' } },
    { href: '#time', label: { vi: 'Giờ làm', en: 'Time' } },
    { href: '#org', label: { vi: 'Tổ chức', en: 'Organization' } },
    { href: '#people', label: { vi: 'Bảo mật', en: 'Security' } },
  ] satisfies { href: string; label: Copy }[],
  cta: { vi: 'Liên hệ tư vấn', en: 'Talk to us' },

  headline: {
    vi: 'Một nền tảng cho công việc, họp, nghỉ phép và giờ làm của cả công ty.',
    en: 'One platform for your company’s work, meetings, leave, and hours.',
  },
  lead: {
    vi: 'TeamFlow thay cho bảng tính chấm công, nhóm chat bên ngoài và đơn xin nghỉ trên giấy. Mỗi phòng ban làm việc theo đúng sơ đồ tổ chức, mọi yêu cầu đến đúng người duyệt.',
    en: 'TeamFlow replaces timesheet spreadsheets, outside chat groups, and paper leave forms. Every department works to your org chart, and every request reaches the right approver.',
  },
  primary: { vi: 'Xem tính năng', en: 'See the features' },
  secondary: { vi: 'Liên hệ tư vấn', en: 'Talk to us' },
  stats: [
    { value: '6', label: { vi: 'nghiệp vụ trong một nền tảng', en: 'areas in one platform' } },
    { value: '0', label: { vi: 'phần mềm cần cài thêm', en: 'extra apps to install' } },
    { value: 'VI · EN', label: { vi: 'tiếng Việt và tiếng Anh', en: 'Vietnamese and English' } },
    { value: '24/7', label: { vi: 'dùng trên trình duyệt', en: 'in any browser' } },
  ] satisfies { value: string; label: Copy }[],

  modulesEyebrow: { vi: 'Tính năng', en: 'Features' },
  modulesTitle: {
    vi: 'Sáu nghiệp vụ chính, chọn một để xem chi tiết',
    en: 'Six core areas — pick one to see it in action',
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
        { vi: 'Đăng thông báo đến toàn công ty', en: 'Announce to the whole company' },
      ],
    },
    {
      icon: 'org',
      title: { vi: 'Trưởng phòng', en: 'Managers' },
      points: [
        { vi: 'Giao việc và theo dõi kế hoạch tuần của đội', en: 'Assign work and follow the team’s weekly plan' },
        { vi: 'Duyệt giờ làm và đơn nghỉ trong vài giây', en: 'Approve hours and leave in seconds' },
        { vi: 'Họp đội trực tuyến ngay trên hệ thống', en: 'Run team meetings online in the system' },
      ],
    },
    {
      icon: 'tasks',
      title: { vi: 'Nhân viên', en: 'Staff' },
      points: [
        { vi: 'Biết rõ hôm nay cần làm gì', en: 'Know exactly what to do today' },
        { vi: 'Xin nghỉ, ghi giờ làm không cần giấy tờ', en: 'Request leave and log hours without paperwork' },
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
        vi: 'Công việc, tài liệu, tin nhắn, giờ làm và nghỉ phép nằm chung một hệ thống, được sao lưu tự động mỗi ngày.',
        en: 'Work, documents, chat, hours, and leave live together in one system, backed up automatically every day.',
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
