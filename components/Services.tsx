"use client";

import TiltCard from "./TiltCard";

interface ServiceItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    icon: "fa-solid fa-server",
    title: "Backend & System Architecture",
    subtitle: "High-Performance Core",
    description:
      "Thiết kế và triển khai kiến trúc Clean Architecture, CQRS, và RESTful/gRPC APIs chuẩn hóa. Đảm bảo hệ thống đạt độ tin cậy cao, dễ mở rộng và tuân thủ chặt chẽ các nguyên lý SOLID.",
    tags: ["C# / .NET", "Clean Architecture", "RESTful API", "SOLID"],
  },
  {
    icon: "fa-brands fa-aws",
    title: "Cloud & Serverless Solutions",
    subtitle: "Scalable Infrastructure",
    description:
      "Tối ưu chi phí và tự động co giãn bằng kiến trúc AWS Serverless (Lambda, API Gateway, DynamoDB, S3). Triển khai hệ thống microservices không phụ thuộc hạ tầng máy chủ vật lý.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Database Design & Optimization",
    subtitle: "Data Reliability & Speed",
    description:
      "Mô hình hóa cơ sở dữ liệu quan hệ (PostgreSQL, MySQL, SQL Server) và NoSQL (MongoDB). Tối ưu hóa câu truy vấn phức tạp, đánh index khoa học và caching siêu tốc với Redis.",
    tags: ["PostgreSQL", "MongoDB", "Redis Cache", "Query Tuning"],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Security, DevOps & CI/CD",
    subtitle: "Automated & Protected",
    description:
      "Đóng gói ứng dụng với Docker, thiết lập quy trình tự động hóa kiểm thử và triển khai CI/CD qua GitHub Actions. Bảo mật API đa lớp với JWT, OAuth2 và kiểm soát truy cập phân quyền.",
    tags: ["Docker", "CI/CD Actions", "JWT / OAuth2", "API Security"],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section reveal-on-scroll">
      <div className="section-header text-center">
        <span className="section-badge">
          <i className="fa-solid fa-bolt"></i> What I Do
        </span>
        <h2 className="section-title">Core Specializations</h2>
        <p className="section-subtitle">
          Giải pháp công nghệ chuyên sâu từ tầng kiến trúc Backend, cơ sở dữ liệu đến hạ tầng Cloud hiện đại.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <TiltCard key={index} className="service-card-wrapper" maxTilt={6}>
            <div className="service-card">
              <div className="service-card-header">
                <div className="service-icon-box">
                  <i className={service.icon}></i>
                </div>
                <span className="service-index">0{index + 1}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <h4 className="service-subtitle">{service.subtitle}</h4>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
