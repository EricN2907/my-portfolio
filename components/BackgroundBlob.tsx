"use client";

import { useEffect, useRef } from "react";

export default function BackgroundBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (blobRef.current) {
        blobRef.current.style.left = `${e.clientX}px`;
        blobRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <>
      {/* Celestial Glowing Moon in Dark Mode */}
      <div className="sky-moon-element" aria-hidden="true">
        <svg
          viewBox="0 0 100 100"
          className="moon-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#cce5ff" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#70b5ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0072ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e2f0ff" />
              <stop offset="100%" stopColor="#a3d0ff" />
            </linearGradient>
            <filter id="moonShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Atmospheric Halo */}
          <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />

          {/* Crescent Moon Body */}
          <path
            d="M 68 14 A 40 40 0 1 0 68 86 A 32 32 0 0 1 68 14 Z"
            fill="url(#moonGradient)"
            filter="url(#moonShadow)"
          />

          {/* Subtle Lunar Surface Craters */}
          <circle cx="40" cy="38" r="3.5" fill="#75aadb" opacity="0.35" />
          <circle cx="32" cy="52" r="5" fill="#75aadb" opacity="0.3" />
          <circle cx="48" cy="65" r="3" fill="#75aadb" opacity="0.35" />
          <circle cx="28" cy="36" r="2.5" fill="#75aadb" opacity="0.25" />
        </svg>
      </div>

      {/* Atmospheric Night Stars */}
      <div className="sky-stars-container" aria-hidden="true">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="twinkle-star"
            style={{
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23 + 7) % 96}%`,
              animationDelay: `${(i * 0.4) % 3.5}s`,
              transform: `scale(${0.6 + ((i * 3) % 5) * 0.15})`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Shooting Stars in Night Mode */}
      <div className="shooting-stars-box" aria-hidden="true">
        <div className="shooting-star star-1" />
        <div className="shooting-star star-2" />
        <div className="shooting-star star-3" />
      </div>

      <div
        className="blob-glow"
        ref={blobRef}
        style={{ transition: "left 0.2s ease-out, top 0.2s ease-out" }}
      ></div>
      <div className="blur-overlay"></div>
    </>
  );
}
