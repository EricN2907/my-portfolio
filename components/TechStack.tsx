"use client";

import TiltCard from "./TiltCard";

const skillBadges = [
  { name: "C# / .NET Core", icon: "fa-brands fa-microsoft" },
  { name: "AWS Cloud & Lambda", icon: "fa-brands fa-aws" },
  { name: "PostgreSQL & SQL Server", icon: "fa-solid fa-database" },
  { name: "Docker & Containers", icon: "fa-brands fa-docker" },
  { name: "Redis In-Memory Cache", icon: "fa-solid fa-bolt" },
  { name: "MongoDB NoSQL", icon: "fa-solid fa-leaf" },
  { name: "Clean Architecture", icon: "fa-solid fa-cubes" },
  { name: "Git & CI/CD Actions", icon: "fa-brands fa-git-alt" },
  { name: "Next.js & React", icon: "fa-brands fa-react" },
  { name: "Python & RAG", icon: "fa-brands fa-python" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-section reveal-on-scroll">
      <div className="section-header text-center">
        <span className="section-badge">
          <i className="fa-solid fa-microchip"></i> Technology Ecosystem
        </span>
        <h2 className="section-title">Tech Stack &amp; Tools</h2>
        <p className="section-subtitle">
          Công cụ và công nghệ mình sử dụng hàng ngày để xây dựng các giải pháp backend chịu tải cao.
        </p>
      </div>

      <div className="tech-container">
        <div className="tech-grid">
          <TiltCard className="tech-card-tilt" maxTilt={6}>
            <div className="tech-card">
              <i className="fa-brands fa-microsoft icon"></i>
              <h3>C# / .NET</h3>
              <h4>Backend Core</h4>
              <p>Xây dựng hệ thống vững chắc, hiệu suất cao với kiến trúc Clean Architecture &amp; EF Core.</p>
            </div>
          </TiltCard>

          <TiltCard className="tech-card-tilt" maxTilt={6}>
            <div className="tech-card">
              <i className="fa-solid fa-network-wired icon"></i>
              <h3>System Design</h3>
              <h4>Architecture</h4>
              <p>Thiết kế kiến trúc hệ thống linh hoạt, áp dụng Design Patterns và nguyên lý SOLID.</p>
            </div>
          </TiltCard>

          <TiltCard className="tech-card-tilt" maxTilt={6}>
            <div className="tech-card">
              <i className="fa-brands fa-aws icon"></i>
              <h3>AWS Cloud</h3>
              <h4>Infrastructure</h4>
              <p>Hiểu biết và triển khai các dịch vụ Cloud, tối ưu hóa hệ thống phân tán và serverless.</p>
            </div>
          </TiltCard>

          <TiltCard className="tech-card-tilt" maxTilt={6}>
            <div className="tech-card">
              <i className="fa-solid fa-database icon"></i>
              <h3>Databases</h3>
              <h4>SQL &amp; NoSQL</h4>
              <p>Thiết kế và tối ưu hóa truy xuất dữ liệu cho hệ thống quy mô lớn với PostgreSQL &amp; Redis.</p>
            </div>
          </TiltCard>
        </div>

        <div className="tech-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://avatars.githubusercontent.com/u/136496226?v=4" alt="Tech Setup" />
          <div className="floating-badge badge-top">
            <i className="fa-solid fa-terminal"></i> Clean Code
          </div>
          <div className="floating-badge badge-bottom">
            <i className="fa-solid fa-shield-halved"></i> High Security
          </div>
        </div>
      </div>

      {/* Floating Interactive Skill Pills Carousel / Grid */}
      <div className="skill-pills-container">
        {skillBadges.map((badge, idx) => (
          <div key={idx} className="skill-pill">
            <i className={badge.icon}></i>
            <span>{badge.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
