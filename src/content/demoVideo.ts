import type { Copy } from '@/types/content'

const base = `${import.meta.env.BASE_URL}videos/`

/** The screen recording of the app on sample data. Chapter times are in seconds. */
export const demoVideo = {
  src: `${base}teamflow-demo.mp4`,
  poster: `${base}teamflow-demo-poster.jpg`,
  duration: '3:01',
  chapters: [
    { at: 4.7, title: { vi: 'Công việc', en: 'Tasks' } },
    { at: 33.2, title: { vi: 'Log giờ & duyệt', en: 'Time & approvals' } },
    { at: 59.8, title: { vi: 'Họp video', en: 'Video meetings' } },
    { at: 78.9, title: { vi: 'Yêu cầu', en: 'Requests' } },
    { at: 105.7, title: { vi: 'Tài sản', en: 'Assets' } },
    { at: 129.6, title: { vi: 'Đánh giá', en: 'Reviews' } },
    { at: 154.5, title: { vi: 'Phép năm', en: 'Leave' } },
  ] satisfies { at: number; title: Copy }[],
}
