"use client";

import { useState } from "react";
import TiltCard from "./TiltCard";
import WeatherWidget from "./WeatherWidget";

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
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Sẵn sàng kết nối, chia sẻ kinh nghiệm và đón nhận cơ hội gia nhập đội ngũ kỹ thuật phát triển.
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
                <p className="email-text">nemnguyenhoang2907@gmail.com</p>
              </div>
              <button
                className="copy-btn"
                onClick={copyEmail}
                title="Copy email address"
                type="button"
              >
                <i className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`}></i>
                <span>{copied ? "Copied!" : "Copy"}</span>
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
                <p className="phone-text">0825 561 297</p>
              </div>
              <a href="tel:0825561297" className="call-link-btn" title="Gọi điện">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </TiltCard>

          <TiltCard className="contact-info-card-wrapper" maxTilt={6}>
            <div className="contact-info-card location-card">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p className="location-text">Ho Chi Minh City, Vietnam</p>
                <div style={{ marginTop: "6px" }}>
                  <WeatherWidget variant="compact" />
                </div>
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
              <label htmlFor="name-input">Your Name</label>
              <input
                id="name-input"
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email-input">Email Address</label>
              <input
                id="email-input"
                type="email"
                name="Email"
                placeholder="example@domain.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="msg-input">Your Message</label>
              <textarea
                id="msg-input"
                name="Message"
                rows={5}
                placeholder="Tell me about your project, idea or inquiry..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn form-submit-btn">
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
