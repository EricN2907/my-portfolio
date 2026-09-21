export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="tech-container">
        
        <div className="tech-grid">
          <div className="tech-card">
            <i className="fa-brands fa-microsoft icon"></i>
            <h3>C# / .NET</h3>
            <h4>Backend Core</h4>
            <p>Xây dựng hệ thống vững chắc, hiệu suất cao với kiến trúc Clean Architecture & EF Core.</p>
          </div>
          <div className="tech-card">
            <i className="fa-solid fa-network-wired icon"></i>
            <h3>System Design</h3>
            <h4>Architecture</h4>
            <p>Thiết kế kiến trúc hệ thống linh hoạt, áp dụng Design Patterns và nguyên lý SOLID.</p>
          </div>
          <div className="tech-card">
            <i className="fa-brands fa-aws icon"></i>
            <h3>AWS Cloud</h3>
            <h4>Infrastructure</h4>
            <p>Hiểu biết và triển khai các dịch vụ Cloud, tối ưu hóa hệ thống phân tán.</p>
          </div>
          <div className="tech-card">
            <i className="fa-solid fa-database icon"></i>
            <h3>Databases</h3>
            <h4>SQL & NoSQL</h4>
            <p>Thiết kế và tối ưu hóa truy xuất dữ liệu cho hệ thống quy mô vừa và lớn.</p>
          </div>
        </div>

        <div className="tech-image">
          <img src="https://avatars.githubusercontent.com/u/136496226?v=4" alt="Tech Setup" />
        </div>

      </div>
    </section>
  );
}