import { screen } from '@/lib/screen'
import type { DemoStep } from '@/types/content'

/** The guided demo: one task from assignment to the report, captured on the sample data. */
export const demoSteps: DemoStep[] = [
  {
    id: 'assign',
    image: screen('flow-assign'),
    title: { vi: 'Giao việc', en: 'Assign' },
    who: { vi: 'Trưởng nhóm', en: 'Team lead' },
    text: {
      vi: 'Tạo công việc WEB-4 trong dự án, chọn người phụ trách, hạn hoàn thành và ước lượng 16 giờ.',
      en: 'Create task WEB-4 in the project and set the owner, due date, and a 16-hour estimate.',
    },
    points: [
      { vi: 'Người được giao nhận thông báo', en: 'The owner gets a notification' },
      { vi: 'Trao đổi và tệp đính kèm nằm ngay cạnh công việc', en: 'Comments and files sit next to the task' },
    ],
  },
  {
    id: 'log',
    image: screen('flow-log'),
    title: { vi: 'Log giờ', en: 'Log time' },
    who: { vi: 'Nhân viên', en: 'Staff' },
    text: {
      vi: 'Người phụ trách ghi 2h30 cho WEB-4 kèm ghi chú công việc đã làm, rồi gửi duyệt.',
      en: 'The owner logs 2h30 on WEB-4 with a note on what was done, then sends it for approval.',
    },
    points: [
      { vi: 'Nhập 2h30, 2.5 hoặc chọn nhanh 30m, 1h, 2h…', en: 'Type 2h30 or 2.5, or pick 30m, 1h, 2h…' },
      { vi: 'Giờ đã log được so với ước lượng của công việc', en: 'Logged hours are compared with the task estimate' },
    ],
  },
  {
    id: 'approve',
    image: screen('flow-approve'),
    title: { vi: 'Duyệt', en: 'Approve' },
    who: { vi: 'Quản lý', en: 'Manager' },
    text: {
      vi: 'Quản lý thấy các mục chờ duyệt trong một danh sách, lọc theo dự án hoặc thành viên, duyệt hoặc từ chối kèm lý do.',
      en: 'Managers see pending entries in one list, filter by project or person, and approve or reject with a reason.',
    },
    points: [
      { vi: 'Duyệt nhiều mục cùng lúc', en: 'Approve many entries at once' },
      { vi: 'Đơn nghỉ phép được duyệt ở cùng màn hình', en: 'Leave requests are approved on the same screen' },
    ],
  },
  {
    id: 'report',
    image: screen('flow-report'),
    title: { vi: 'Báo cáo', en: 'Report' },
    who: { vi: 'Ban giám đốc', en: 'Leadership' },
    text: {
      vi: 'Giờ làm hiện trong báo cáo theo ngày, theo thành viên và theo dự án, tách giờ đã duyệt và đang chờ.',
      en: 'Hours show up in the report by day, by person, and by project, with approved and pending hours apart.',
    },
    points: [
      { vi: 'Chọn phạm vi: cá nhân, dự án hoặc cả workspace', en: 'Scope it to yourself, a project, or a workspace' },
      { vi: 'Xuất CSV để làm bảng lương hoặc đối chiếu', en: 'Export CSV for payroll or checks' },
    ],
  },
]
