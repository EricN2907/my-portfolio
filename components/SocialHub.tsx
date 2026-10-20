"use client";

interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
  badgeClass: string;
  isExternal?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    handle: "@EricN2907",
    url: "https://github.com/EricN2907",
    icon: "fa-brands fa-github",
    badgeClass: "github-pill",
    isExternal: true,
  },
  {
    name: "Facebook",
    handle: "@Nemsadboiz2907",
    url: "https://www.facebook.com/Nemsadboiz2907",
    icon: "fa-brands fa-facebook",
    badgeClass: "facebook-pill",
    isExternal: true,
  },
  {
    name: "Email",
    handle: "nemnguyenhoang2907",
    url: "mailto:nemnguyenhoang2907@gmail.com",
    icon: "fa-solid fa-envelope",
    badgeClass: "email-pill",
  },
  {
    name: "Phone / Zalo",
    handle: "0825 561 297",
    url: "tel:0825561297",
    icon: "fa-solid fa-phone",
    badgeClass: "phone-pill",
  },
  {
    name: "Curriculum Vitae",
    handle: "PDF Download",
    url: "/Nguyen-Hoang-Nam-CV.pdf",
    icon: "fa-solid fa-file-arrow-down",
    badgeClass: "resume-pill",
    isExternal: true,
  },
];

export default function SocialHub() {
  return (
    <section className="social-hub-section reveal-on-scroll">
      <div className="social-hub-container">
        <div className="social-hub-header text-center">
          <span className="social-hub-tag">
            <i className="fa-solid fa-link"></i> CONNECTIVITY
          </span>
          <h3 className="social-hub-title">Channels &amp; Social Connect</h3>
        </div>

        <div className="social-hub-grid">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={`social-pill ${item.badgeClass}`}
              title={`${item.name}: ${item.handle}`}
            >
              <div className="social-pill-icon">
                <i className={item.icon}></i>
              </div>
              <div className="social-pill-text">
                <span className="social-pill-name">{item.name}</span>
                <span className="social-pill-handle">{item.handle}</span>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square social-pill-arrow"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
