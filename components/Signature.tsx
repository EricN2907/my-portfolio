"use client";

import { useState } from "react";

interface SignatureProps {
  variant?: "full" | "compact";
  name?: string;
  className?: string;
}

export default function Signature({
  variant = "full",
  name = "Nguyen Hoang Nam",
  className = "",
}: SignatureProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`signature-block ${variant} ${isHovered ? "hovered" : ""} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="signature-content">
        <div className="signature-pen-icon">
          <i className="fa-solid fa-pen-nib"></i>
        </div>

        <div className="signature-text-container">
          {/* Animated signature using Thesignature font + clip-path stroke reveal */}
          <span className="signature-script-animated" title="Real-time handwritten signature">
            {name}
          </span>

          {/* SVG Animated Flourish Underline */}
          <svg
            className="signature-flourish"
            viewBox="0 0 260 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10,25 Q50,42 95,20 T180,18 Q220,12 250,28 Q195,45 130,36 Q80,29 110,12 Q140,-5 175,20"
              stroke="url(#sigGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="252" cy="28" r="2.5" fill="#00C6FF" />
            <defs>
              <linearGradient id="sigGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00C6FF" />
                <stop offset="50%" stopColor="#0072FF" />
                <stop offset="100%" stopColor="#D400FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {variant === "full" && (
          <div className="signature-seal" title="Verified Digital Signature">
            <svg className="seal-ring" viewBox="0 0 100 100">
              <path
                id="sealCirclePath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                fill="none"
              />
              <text className="seal-circular-text">
                <textPath href="#sealCirclePath" startOffset="0%">
                  • VERIFIED SIGNATURE • ERICN • 2026
                </textPath>
              </text>
            </svg>
            <div className="seal-center-icon">
              <i className="fa-solid fa-stamp"></i>
            </div>
          </div>
        )}
      </div>

      <div className="signature-meta">
        <span className="signature-title">Nguyễn Hoàng Nam</span>
        <span className="signature-sub">&bull; Backend Software Engineer</span>
      </div>
    </div>
  );
}
