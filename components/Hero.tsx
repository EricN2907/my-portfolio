"use client";

import { useEffect, useState } from "react";
import WeatherWidget from "./WeatherWidget";

const roles = [
  "BACKEND DEVELOPER",
  "CLOUD ARCHITECT",
  "SYSTEM OPTIMIZER",
  "CLEAN CODE ENTHUSIAST",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText.length + 1 === currentRole.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="mega-typo reveal-on-scroll">
      {/* Top Status & Weather Badges */}
      <div className="hero-top-badges">
        <WeatherWidget variant="pill" />
      </div>

      <div className="mega-top">
        <span className="mega-name">NGUYEN HOANG NAM</span>
        <span className="mega-year">
          <svg className="deco-sparkle" viewBox="0 0 40 40">
            <path
              d="M20,15 L20,0 M10,15 L0,5 M30,15 L40,5"
              stroke="#E63946"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          2026
        </span>
      </div>

      <h1 className="mega-center">
        PORTFOLIO
        <svg className="deco-arrow" viewBox="0 0 80 50">
          <path
            d="M10,40 Q40,10 70,40"
            stroke="#E63946"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="65,35 75,45 70,40" fill="#E63946" />
        </svg>
      </h1>

      <div className="mega-bottom">
        <div className="mega-role-wrapper">
          <span className="mega-role">
            {displayText}
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
        <p className="mega-tagline">
          Crafting scalable backend architectures, high-throughput APIs, and cloud-native solutions.
        </p>
      </div>

      {/* Quick Navigation Action Pills */}
      <div className="hero-quick-actions">
        <a href="#projects" className="hero-action-btn primary">
          <i className="fa-solid fa-code"></i> Explore Projects
        </a>
        <a href="/Nguyen-Hoang-Nam-CV.pdf" target="_blank" className="hero-action-btn secondary">
          <i className="fa-solid fa-file-arrow-down"></i> Resume / CV
        </a>
        <a href="#contact" className="hero-action-btn ghost">
          <i className="fa-solid fa-paper-plane"></i> Contact Me
        </a>
      </div>
    </section>
  );
}
