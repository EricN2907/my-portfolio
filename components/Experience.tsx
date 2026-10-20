"use client";

import TiltCard from "./TiltCard";

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
  skills: string[];
}

const timelineData: TimelineItem[] = [
  {
    period: "2024 - Present",
    role: "Kỹ sư Phần mềm (Software Engineering)",
    organization: "FPT University",
    type: "Education & Degree",
    description:
      "Tập trung nghiên cứu chuyên sâu về Kiến trúc phần mềm doanh nghiệp, Cấu trúc dữ liệu & Giải thuật, Hệ quản trị cơ sở dữ liệu và Lập trình hướng đối tượng nâng cao.",
    skills: ["Data Structures", "OOP", "Software Architecture", "Database Design"],
  },
  {
    period: "2025 - 2026",
    role: "Backend & Cloud Engineer (Dự án FCJ)",
    organization: "FCJ Serverless Student Management",
    type: "Cloud & Serverless",
    description:
      "Thiết kế toàn bộ kiến trúc Serverless trên nền tảng AWS. Sử dụng AWS Lambda, API Gateway và DynamoDB để quản lý sinh viên với thời gian phản hồi dưới 100ms và chi phí vận hành tiệm cận 0.",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Cloud Architecture"],
  },
  {
    period: "2025 - Present",
    role: "Core Backend Contributor",
    organization: "PiedTeam LMS & Edu-Nexus Platform",
    type: "Open Source & Teamwork",
    description:
      "Phát triển hệ thống quản lý học tập và nền tảng kết nối giáo dục. Xây dựng authentication đa tầng, phân quyền RBAC, tích hợp API thanh toán và tối ưu hóa truy vấn dữ liệu lớn.",
    skills: ["C# / .NET", "Clean Architecture", "PostgreSQL", "Docker", "Git Flow"],
  },
  {
    period: "2026",
    role: "AI & Backend Engineer",
    organization: "RAG Financial System Analysis",
    type: "AI & Advanced Research",
    description:
      "Tích hợp mô hình AI và kiến trúc Retrieval-Augmented Generation (RAG) vào hệ thống phân tích dữ liệu tài chính. Tự động trích xuất thông tin, đối soát số liệu và xuất báo cáo tài chính thông minh.",
    skills: ["Python", "RAG Pipeline", "FastAPI", "Vector Database", "System Integration"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section reveal-on-scroll">
      <div className="section-header text-center">
        <span className="section-badge">
          <i className="fa-solid fa-timeline"></i> Milestones
        </span>
        <h2 className="section-title">Career Milestones</h2>
        <p className="section-subtitle">
          Quá trình trau dồi học thuật, thực chiến qua các dự án thực tế và những bước tiến kỹ thuật.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-marker">
              <span className="timeline-dot"></span>
            </div>

            <TiltCard className="timeline-card-wrapper" maxTilt={5}>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className="timeline-type">{item.type}</span>
                </div>
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-org">
                  <i className="fa-solid fa-building-columns"></i> {item.organization}
                </h4>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-skills">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
