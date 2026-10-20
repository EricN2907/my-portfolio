"use client";

import { useState } from "react";
import TiltCard from "./TiltCard";

interface Project {
  id: string;
  title: string;
  category: "backend" | "cloud" | "ai";
  categoryLabel: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: "prm393",
    title: "PRM393-SU26-GRP6/BE",
    category: "backend",
    categoryLabel: "Backend & API",
    description:
      "Hệ thống Backend đóng góp trong môi trường làm việc nhóm chuyên nghiệp, thiết kế chuẩn RESTful API và tối ưu luồng xử lý dữ liệu.",
    image: "https://opengraph.githubassets.com/1/PRM393-SU26-GRP6/BE",
    github: "https://github.com/PRM393-SU26-GRP6/BE",
    tags: [".NET", "RESTful API", "Clean Architecture", "SQL Server"],
    featured: true,
  },
  {
    id: "edu-nexus",
    title: "Edu-Nexus-EXE/BE",
    category: "backend",
    categoryLabel: "Backend & API",
    description:
      "Kiến trúc Backend vững chắc và mở rộng linh hoạt cho hệ thống giáo dục kết nối, quản lý phân quyền và dữ liệu người dùng đa vai trò.",
    image: "https://opengraph.githubassets.com/1/Edu-Nexus-EXE/BE",
    github: "https://github.com/Edu-Nexus-EXE/BE",
    tags: ["C#", "Entity Framework", "JWT Auth", "PostgreSQL"],
    featured: true,
  },
  {
    id: "pied-lms",
    title: "PiedTeam/pied-lms",
    category: "backend",
    categoryLabel: "Backend & API",
    description:
      "Hệ thống quản lý học tập (LMS) mã nguồn mở với hiệu năng cao, cơ chế caching và quản lý tài nguyên học tập quy mô lớn.",
    image: "https://opengraph.githubassets.com/1/PiedTeam/pied-lms",
    github: "https://github.com/PiedTeam/pied-lms",
    tags: ["Node.js", "Express", "Redis", "Docker", "MongoDB"],
  },
  {
    id: "rag-financial",
    title: "RAG-Financial-Analysis",
    category: "ai",
    categoryLabel: "AI & Data",
    description:
      "Hệ thống phân tích tài chính kết hợp sức mạnh của công nghệ RAG (Retrieval-Augmented Generation) để tự động hóa trích xuất và phân tích báo cáo.",
    image: "https://opengraph.githubassets.com/1/RAG-Financial-System-Analysis/BE",
    github: "https://github.com/RAG-Financial-System-Analysis/BE",
    tags: ["Python", "FastAPI", "Vector DB", "LangChain", "RAG"],
    featured: true,
  },
  {
    id: "fcj-serverless",
    title: "FCJ-Serverless-Student",
    category: "cloud",
    categoryLabel: "Cloud & Serverless",
    description:
      "Hệ thống quản lý sinh viên vận hành hoàn toàn trên kiến trúc AWS Serverless, tối ưu chi phí và tự động co giãn không giới hạn.",
    image: "https://opengraph.githubassets.com/1/EricN2907/fcj-fall2025-serverless-student-management-system",
    github: "https://github.com/EricN2907/fcj-fall2025-serverless-student-management-system",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless"],
    featured: true,
  },
  {
    id: "dna-testing",
    title: "DNA-Testing-Service",
    category: "backend",
    categoryLabel: "Backend & API",
    description:
      "Hệ thống backend quản lý dịch vụ xét nghiệm DNA chặt chẽ và bảo mật cao, đảm bảo tính toàn vẹn và bảo mật dữ liệu y tế nhạy cảm.",
    image: "https://opengraph.githubassets.com/1/nguyenbatan21112003/DNA-Testing-Service-Management",
    github: "https://github.com/nguyenbatan21112003/DNA-Testing-Service-Management",
    tags: [".NET Core", "SQL Server", "Security", "Clean Arch"],
  },
];

type CategoryFilter = "all" | "backend" | "cloud" | "ai";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section reveal-on-scroll">
      <div className="section-header text-center">
        <span className="section-badge">
          <i className="fa-solid fa-laptop-code"></i> Portfolio Showcase
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Các dự án Backend thực chiến, hệ thống Serverless và ứng dụng trí tuệ nhân tạo được xây dựng với kiến trúc tối ưu.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        <button
          className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          <i className="fa-solid fa-border-all"></i> All ({projectsData.length})
        </button>
        <button
          className={`filter-tab ${activeFilter === "backend" ? "active" : ""}`}
          onClick={() => setActiveFilter("backend")}
        >
          <i className="fa-solid fa-server"></i> Backend & API (
          {projectsData.filter((p) => p.category === "backend").length})
        </button>
        <button
          className={`filter-tab ${activeFilter === "cloud" ? "active" : ""}`}
          onClick={() => setActiveFilter("cloud")}
        >
          <i className="fa-brands fa-aws"></i> Cloud & Serverless (
          {projectsData.filter((p) => p.category === "cloud").length})
        </button>
        <button
          className={`filter-tab ${activeFilter === "ai" ? "active" : ""}`}
          onClick={() => setActiveFilter("ai")}
        >
          <i className="fa-solid fa-brain"></i> AI & Data (
          {projectsData.filter((p) => p.category === "ai").length})
        </button>
      </div>

      {/* Projects Grid with 3D Tilt */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <TiltCard key={project.id} className="project-card-tilt" maxTilt={6}>
            <div className="project-card-new">
              <div className="project-img-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-category-tag">{project.categoryLabel}</span>
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-small github-link-btn"
                  >
                    <i className="fa-brands fa-github"></i> Repository
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
