import './App.css'

const features = [
  {
    title: 'Công việc',
    text: 'Dự án, Kanban, tiến độ và phụ thuộc task ở một chỗ.',
  },
  {
    title: 'Tin nhắn',
    text: 'Chat nhóm, gọi thoại, file và ảnh đã chia sẻ trong cuộc trò chuyện.',
  },
  {
    title: 'Nghỉ phép',
    text: 'Xin phép, số ngày phép năm và quản lý duyệt theo phòng ban.',
  },
  {
    title: 'Diễn đàn',
    text: 'Đăng hoạt động và thông báo công ty, bình luận, gắn thẻ, cảm xúc.',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#top">
          <span className="mark">tf</span>
          TeamFlow
        </a>
        <nav>
          <a href="#features">Tính năng</a>
          <a href="#start">Bắt đầu</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Dành cho cả công ty</p>
          <h1>Làm việc, nói chuyện và ra quyết định trên cùng một nơi.</h1>
          <p className="lead">
            TeamFlow gom công việc, tin nhắn, nghỉ phép và diễn đàn nội bộ. Quản lý theo phòng
            ban, không chia quyền theo từng workspace rời.
          </p>
          <div className="actions">
            <a className="primary" href="#start">
              Xem cách chạy
            </a>
            <a className="ghost" href="#features">
              Các phần chính
            </a>
          </div>
        </section>

        <section className="features" id="features">
          {features.map((feature) => (
            <article key={feature.title}>
              <h2>{feature.title}</h2>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>

        <section className="start" id="start">
          <h2>Chạy trang này</h2>
          <pre>
            <code>{`npm install\nnpm run dev\nnpm run build`}</code>
          </pre>
        </section>
      </main>

      <footer>
        <span>TeamFlow</span>
        <span>Landing page</span>
      </footer>
    </div>
  )
}
