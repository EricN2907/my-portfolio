"use client";

import Signature from "./Signature";

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="logo">EricN<span className="logo-accent">.dev</span></span>
            <p className="footer-tagline">
              Xây dựng kiến trúc hệ thống vững chắc, hiệu suất tối đa và mở rộng linh hoạt cho tương lai.
            </p>
            <div className="footer-signature-container">
              <Signature variant="compact" />
            </div>
          </div>

          <div className="footer-contact-items">
            <div className="footer-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Ho Chi Minh City, Vietnam</span>
            </div>
            <div className="footer-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:0825561297">0825 561 297</a>
            </div>
            <div className="footer-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:nemnguyenhoang2907@gmail.com">nemnguyenhoang2907@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <h3>Navigation &amp; Connect</h3>
          <div className="footer-quick-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#experience">Milestones</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/EricN2907"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/Nemsadboiz2907"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook Profile"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="mailto:nemnguyenhoang2907@gmail.com"
              aria-label="Email"
              title="Send an Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nguyen Hoang Nam (EricN). All rights reserved.</p>
        <p className="footer-tech-credit">
          Powered by <strong>Next.js 14 App Router</strong> &bull; TypeScript &bull; Custom Animations
        </p>
      </div>
    </footer>
  );
}
