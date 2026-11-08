import type { Chapter } from '@/types/content'

/** The nine feature areas, in the order of the feature explorer's tabs. */
export const chapters: Chapter[] = [
  {
    id: 'work',
    icon: 'tasks',
    title: { vi: 'Công việc', en: 'Work' },
    summary: {
      vi: 'Giao việc, theo dõi tiến độ và giữ tài liệu dự án ở một nơi — từ việc hôm nay của một người đến toàn bộ dự án.',
      en: 'Assign work, track progress, and keep project documents in one place — from one person’s day to every project.',
    },
    featureIds: ['home', 'my-work', 'project', 'kanban', 'files', 'timeline', 'weekly', 'search'],
  },
  {
    id: 'together',
    icon: 'chat',
    title: { vi: 'Họp & trao đổi', en: 'Meetings & chat' },
    summary: {
      vi: 'Đặt lịch họp, họp trực tuyến, chat nội bộ và bảng tin công ty ngay trên trình duyệt.',
      en: 'Meeting scheduling, online meetings, company chat, and an internal feed, right in the browser.',
    },
    featureIds: ['calendar', 'room', 'messages', 'shared', 'feed', 'compose', 'notifications'],
  },
  {
    id: 'leave',
    icon: 'leave',
    title: { vi: 'Nghỉ phép', en: 'Leave' },
    summary: {
      vi: 'Nhân viên gửi đơn nghỉ trực tuyến, trưởng phòng duyệt trên cùng hệ thống, nhân sự quản lý phép năm theo chính sách và quy định áp dụng.',
      en: 'Staff request leave online, managers approve it in the same system, and HR manages annual leave according to the applicable policies and rules.',
    },
    featureIds: ['leaves', 'leave-accrual', 'leave-manage', 'leave-approvals'],
  },
  {
    id: 'time',
    icon: 'clock',
    title: { vi: 'Giờ làm', en: 'Time' },
    summary: {
      vi: 'Ghi giờ theo công việc, bảng chấm công, báo cáo và cảnh báo quá tải để chia việc hợp lý.',
      en: 'Hours per task, the company timesheet, reports, and overload warnings to balance the work.',
    },
    featureIds: ['worklogs', 'timesheet', 'report', 'approvals', 'workload'],
  },
  {
    id: 'org',
    icon: 'org',
    title: { vi: 'Tổ chức', en: 'Organization' },
    summary: {
      vi: 'Sơ đồ phòng ban quyết định ai duyệt cho ai; nhóm dự án theo khách hàng; kiểm soát tài khoản nhân viên.',
      en: 'The org chart decides who approves whom; project groups per client; control over staff accounts.',
    },
    featureIds: ['departments', 'workspaces', 'workspace', 'admin'],
  },
  {
    id: 'people',
    icon: 'shield',
    title: { vi: 'Nhân sự & bảo mật', en: 'People & security' },
    summary: {
      vi: 'Đón nhân viên mới trong một bước, quản lý cấp bậc, xem nhật ký thao tác quan trọng; sao lưu và hỗ trợ khôi phục dữ liệu, giảm rủi ro khi xảy ra sự cố.',
      en: 'Bring new hires in one step, manage levels, and review a log of key actions; back up and help restore data to reduce the risk when something goes wrong.',
    },
    featureIds: ['onboarding', 'invite', 'welcome', 'employment', 'security', 'audit', 'backups', 'restore'],
  },
  {
    id: 'performance',
    icon: 'chart',
    title: { vi: 'Đánh giá hiệu suất', en: 'Performance reviews' },
    summary: {
      vi: 'Kỳ đánh giá tháng, quý, năm với bộ tiêu chí có trọng số: nhân viên tự đánh giá, quản lý chấm điểm, HR chốt kết quả.',
      en: 'Monthly, quarterly, and yearly reviews with weighted criteria: staff assess themselves, managers score, HR signs off.',
    },
    featureIds: ['perf-manager', 'perf-self', 'perf-result', 'perf-cycle', 'perf-template', 'perf-dashboard', 'perf-360'],
  },
  {
    id: 'operations',
    icon: 'box',
    title: { vi: 'Yêu cầu & tài sản', en: 'Requests & assets' },
    summary: {
      vi: 'Gửi yêu cầu đến đúng bộ phận và theo dõi đến khi xong; quản lý laptop, thiết bị từ lúc bàn giao đến khi thanh lý.',
      en: 'Send requests to the right team and follow them to the end; track laptops and devices from handover to disposal.',
    },
    featureIds: ['request-new', 'requests', 'request-templates', 'assets', 'asset-detail', 'asset-handover', 'my-assets', 'asset-alerts', 'asset-audit'],
  },
  {
    id: 'budget',
    icon: 'wallet',
    title: { vi: 'Ngân sách dự án', en: 'Project budgets' },
    summary: {
      vi: 'Chi phí thực tế của từng dự án từ giờ làm đã duyệt và chi phí khác, cảnh báo trước khi vượt ngân sách.',
      en: 'The real cost of each project from approved hours and other expenses, with a warning before it runs over.',
    },
    featureIds: ['budgets', 'project-budget', 'cost-rates'],
  },
]
