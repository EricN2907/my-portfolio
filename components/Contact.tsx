"use client";

import { useState } from "react";
import TiltCard from "./TiltCard";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nemnguyenhoang2907@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section reveal-on-scroll">
      <div className="section-header text-center">
        <span className="section-badge">
          <i className="fa-solid fa-comments"></i> Get In Touch
        </span>
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <p className="section-subtitle">
          Bạn có dự án cần phát triển hoặc muốn trao đổi cơ hội hợp tác? Đừng ngần ngại liên hệ với mình!
        </p>
      </div>

      <div className="contact-grid-container">
        {/* Contact Info Cards */}
        <div className="contact-info-cards">
          <TiltCard className="contact-info-card-wrapper" maxTilt={6}>
            <div className="contact-info-card">
              <div className="info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email Address</h4>
                <p>nemnguyenhoang2907@gmail.com</p>
              </div>
              <button
                className="copy-btn"
                onClick={copyEmail}
                title="Sao chép địa chỉ email"
                type="button"
              >
                <i className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`}></i>
                <span>{copied ? "Đã copy!" : "Copy"}</span>
              </button>
            </div>
          </TiltCard>

          <TiltCard className="contact-info-card-wrapper" maxTilt={6}>
            <div className="contact-info-card">
              <div className="info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-content">
                <h4>Phone Number</h4>
                <p>0825 561 297</p>
              </div>
              <a href="tel:0825561297" className="call-link-btn" title="Gọi điện">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </TiltCard>

          <TiltCard className="contact-info-card-wrapper" maxTilt={6}>
            <div className="contact-info-card">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Ho Chi Minh City, Vietnam</p>
              </div>
              <span className="location-status-badge">Available Worldwide</span>
            </div>
          </TiltCard>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form
            className="contact-form"
            action="mailto:nemnguyenhoang2907@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="input-group">
              <label htmlFor="name-input">Họ &amp; Tên</label>
              <input
                id="name-input"
                type="text"
                name="Name"
                placeholder="Nhập tên của bạn"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email-input">Địa Chỉ Email</label>
              <input
                id="email-input"
                type="email"
                name="Email"
                placeholder="example@domain.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="msg-input">Nội Dung Tin Nhắn</label>
              <textarea
                id="msg-input"
                name="Message"
                rows={5}
                placeholder="Chia sẻ về dự án hoặc câu hỏi của bạn..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn form-submit-btn">
              <span>Gửi Lời Nhắn</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
