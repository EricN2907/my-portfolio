"use client";

import TiltCard from "./TiltCard";
import Signature from "./Signature";

export default function About() {
  return (
    <>
      <section className="hero-profile reveal-on-scroll">
        <div className="profile-avatar-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/136496226?v=4"
            alt="Hoang Nam Profile"
            className="profile-pic"
          />
          <div className="avatar-badge" title="Verified Developer">
            <i className="fa-solid fa-circle-check"></i>
          </div>
        </div>

        <div className="profile-info-intro">
          <h3 className="profile-name-heading">Nguyễn Hoàng Nam</h3>
          <p className="profile-role-sub">Backend Developer &amp; Cloud Enthusiast</p>
        </div>

        <div className="action-buttons">
          <a href="/Nguyen-Hoang-Nam-CV.pdf" target="_blank" className="btn btn-outline cv-btn">
            <i className="fa-solid fa-file-arrow-down"></i> Download CV
          </a>
          <a href="#contact" className="btn btn-outline contact-quick-btn">
            <i className="fa-solid fa-envelope"></i> Contact Me
          </a>
        </div>

        <div className="social-icons" style={{ marginTop: "25px" }}>
          <a
            href="https://github.com/EricN2907"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/Nemsadboiz2907"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="mailto:nemnguyenhoang2907@gmail.com" aria-label="Send Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>

      <section id="about" className="quotes-section reveal-on-scroll">
        <div className="section-header text-center">
          <span className="section-badge">
            <i className="fa-solid fa-heart"></i> Mindset
          </span>
          <h2 className="section-title">My Philosophy</h2>
          <p className="section-subtitle">
            Những nguyên tắc kim chỉ nam định hình phong cách làm việc và tư duy lập trình của mình.
          </p>
        </div>

        <div className="quotes-grid">
          <TiltCard className="quote-tilt-wrapper" maxTilt={6}>
            <div className="quote-card primary-quote">
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="bio-text">
                &quot;Cuộc sống không phải lúc nào cũng màu hồng, muốn thấy cầu vồng phải chấp nhận những cơn mưa.&quot;
              </p>
              <div className="quote-signature-wrapper">
                <Signature name="EricNem" allowCustomDraw={false} defaultMode="font" />
              </div>
            </div>
          </TiltCard>

          <TiltCard className="quote-tilt-wrapper" maxTilt={6}>
            <div className="quote-card secondary-quote">
              <i className="fa-solid fa-bolt quote-icon-small"></i>
              <p className="quote-title">Làm chủ công nghệ</p>
              <p className="quote-body">&quot;Hãy chơi code và đừng để code chơi.&quot;</p>
            </div>
          </TiltCard>

          <TiltCard className="quote-tilt-wrapper" maxTilt={6}>
            <div className="quote-card secondary-quote">
              <i className="fa-solid fa-wand-magic-sparkles quote-icon-small"></i>
              <p className="quote-title">Kiến tạo tương lai</p>
              <p className="quote-body">&quot;If ur life didn&apos;t create a miracle, then create ones.&quot;</p>
            </div>
          </TiltCard>
        </div>
      </section>
    </>
  );
}
