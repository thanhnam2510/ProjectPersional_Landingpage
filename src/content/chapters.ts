import type { Chapter } from '@/types/content'

/** The five feature areas, in page order. */
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
      vi: 'Đặt lịch họp, họp trực tuyến, chat nội bộ và bảng tin công ty — không cần thêm phần mềm nào khác.',
      en: 'Meeting scheduling, online meetings, company chat, and an internal feed — no extra software needed.',
    },
    featureIds: ['calendar', 'room', 'messages', 'shared', 'feed', 'compose', 'notifications'],
  },
  {
    id: 'leave',
    icon: 'leave',
    title: { vi: 'Nghỉ phép', en: 'Leave' },
    summary: {
      vi: 'Nhân viên xin nghỉ trong một phút, trưởng phòng duyệt ngay, nhân sự nắm phép năm của cả công ty.',
      en: 'Staff request leave in a minute, managers approve right away, and HR sees everyone’s balance.',
    },
    featureIds: ['leaves', 'leave-manage', 'leave-approvals'],
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
]
