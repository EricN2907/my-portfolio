"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  desc: string;
}

const statsData: StatItem[] = [
  {
    id: "projects",
    value: 6,
    suffix: "+",
    label: "Production Projects",
    icon: "fa-solid fa-code-branch",
    desc: "From enterprise backend to serverless apps",
  },
  {
    id: "tech",
    value: 12,
    suffix: "+",
    label: "Technologies Mastered",
    icon: "fa-solid fa-layer-group",
    desc: ".NET, AWS, Docker, Databases & CI/CD",
  },
  {
    id: "commits",
    value: 500,
    suffix: "+",
    label: "Git Contributions",
    icon: "fa-solid fa-fire-flame-curved",
    desc: "Active commits & continuous delivery",
  },
  {
    id: "uptime",
    value: 100,
    suffix: "%",
    label: "Clean Code Focus",
    icon: "fa-solid fa-shield-halved",
    desc: "SOLID principles & high maintainability",
  },
];

export default function Stats() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    tech: 0,
    commits: 0,
    uptime: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // 1.8s
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              projects: Math.floor(easeOutProgress * 6),
              tech: Math.floor(easeOutProgress * 12),
              commits: Math.floor(easeOutProgress * 500),
              uptime: Math.floor(easeOutProgress * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                projects: 6,
                tech: 12,
                commits: 500,
                uptime: 100,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="stats-section reveal-on-scroll" ref={containerRef}>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon-wrapper">
              <i className={stat.icon}></i>
            </div>
            <div className="stat-number">
              {counts[stat.id]}
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <h4 className="stat-label">{stat.label}</h4>
            <p className="stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
