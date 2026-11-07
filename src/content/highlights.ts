import type { Highlight } from '@/types/content'

/** The six flagship features shown right after the hero. */
export const highlights: Highlight[] = [
  {
    featureId: 'kanban',
    chapterId: 'work',
    title: { vi: 'Kanban & công việc', en: 'Kanban & tasks' },
    benefit: {
      vi: 'Giao việc có người phụ trách, hạn và ước lượng; kéo thả để cập nhật trạng thái.',
      en: 'Assign work with an owner, due date, and estimate; drag cards to update status.',
    },
  },
  {
    featureId: 'approvals',
    chapterId: 'time',
    title: { vi: 'Log giờ & phê duyệt', en: 'Time logs & approvals' },
    benefit: {
      vi: 'Nhân viên ghi giờ theo từng việc, quản lý duyệt hoặc từ chối trong một danh sách.',
      en: 'Staff log hours per task; managers approve or reject them from one list.',
    },
  },
  {
    featureId: 'calendar',
    chapterId: 'together',
    title: { vi: 'Lịch họp & họp video', en: 'Meetings & video calls' },
    benefit: {
      vi: 'Đặt lịch, mời người tham gia và họp video ngay trên trình duyệt.',
      en: 'Schedule, invite people, and meet on video right in the browser.',
    },
  },
  {
    featureId: 'requests',
    chapterId: 'operations',
    title: { vi: 'Yêu cầu nội bộ', en: 'Internal requests' },
    benefit: {
      vi: 'Biểu mẫu chuyển đến bộ phận phụ trách, theo dõi từng bước đến khi xử lý xong.',
      en: 'Forms go to the team in charge and are tracked step by step until done.',
    },
  },
  {
    featureId: 'assets',
    chapterId: 'operations',
    title: { vi: 'Tài sản & thiết bị', en: 'Assets & devices' },
    benefit: {
      vi: 'Biết thiết bị nào đang ở đâu; bàn giao và thu hồi có xác nhận, có lịch sử.',
      en: 'Know where each device is; handovers and returns are confirmed and recorded.',
    },
  },
  {
    featureId: 'perf-manager',
    chapterId: 'performance',
    title: { vi: 'Đánh giá hiệu suất', en: 'Performance reviews' },
    benefit: {
      vi: 'Nhân viên tự đánh giá, quản lý chấm theo tiêu chí có trọng số, kết quả lưu theo kỳ.',
      en: 'Staff assess themselves, managers score weighted criteria, results are kept per cycle.',
    },
  },
]
