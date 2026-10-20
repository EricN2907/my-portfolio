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
      {/* ========================================================
          1. DARK MODE: CELESTIAL MOON & NIGHT SKY (FROM MAY-WIND)
          ======================================================== */}
      {/* Celestial Moon identical to May-WinD: Crescent body with glowing atmospheric halo */}
      <div id="skyMoonElement" className="sky-moon-element" aria-hidden="true">
        <div className="moon-body"></div>
        <div className="moon-glow"></div>
      </div>

      {/* Atmospheric Night Stars */}
      <div className="sky-stars-container" aria-hidden="true">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="twinkle-star"
            style={{
              top: `${(i * 17 + 3) % 95}%`,
              left: `${(i * 23 + 7) % 96}%`,
              animationDelay: `${(i * 0.35) % 3.5}s`,
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

      {/* Dynamic Cosmic Aurora Borealis Glow Waves in Dark Mode */}
      <div className="cosmic-aurora-glow" aria-hidden="true">
        <div className="aurora-ribbon ribbon-1" />
        <div className="aurora-ribbon ribbon-2" />
      </div>

      {/* Atmospheric Night Clouds Drifting Across Dark Sky */}
      <div className="night-clouds-layer" aria-hidden="true">
        <div className="night-cloud cloud-1" />
        <div className="night-cloud cloud-2" />
      </div>

      {/* ========================================================
          2. LIGHT MODE: GOLDEN AUTUMN FALLING LEAVES & TREES
          ======================================================== */}
      {/* Artistic Autumn Botanical Trees & Foliage Silhouette Branches */}
      <div className="autumn-trees-container" aria-hidden="true">
        {/* Top-Right Graceful Tree Branch */}
        <div className="autumn-tree-branch branch-top-right">
          <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M360 0 C310 30 260 55 210 70 C160 85 110 110 60 160 C30 190 10 215 0 220"
              stroke="rgba(180, 83, 9, 0.42)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M260 55 C220 30 180 20 140 18"
              stroke="rgba(180, 83, 9, 0.38)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <path
              d="M210 70 C190 110 170 140 130 165"
              stroke="rgba(180, 83, 9, 0.35)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="140" cy="18" r="16" fill="rgba(245, 158, 11, 0.45)" />
            <circle cx="120" cy="14" r="13" fill="rgba(217, 119, 6, 0.5)" />
            <circle cx="95" cy="10" r="14" fill="rgba(234, 88, 12, 0.45)" />
            <circle cx="70" cy="12" r="12" fill="rgba(245, 158, 11, 0.4)" />
            <circle cx="180" cy="22" r="15" fill="rgba(217, 119, 6, 0.4)" />
            <circle cx="210" cy="70" r="18" fill="rgba(245, 158, 11, 0.45)" />
            <circle cx="165" cy="125" r="15" fill="rgba(234, 88, 12, 0.45)" />
            <circle cx="130" cy="165" r="16" fill="rgba(217, 119, 6, 0.42)" />
            <circle cx="90" cy="185" r="14" fill="rgba(245, 158, 11, 0.45)" />
            <circle cx="60" cy="160" r="16" fill="rgba(234, 88, 12, 0.42)" />
            <circle cx="25" cy="210" r="12" fill="rgba(245, 158, 11, 0.38)" />
          </svg>
        </div>

        {/* Top-Left Gentle Tree Branch */}
        <div className="autumn-tree-branch branch-top-left">
          <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0 C40 35 90 60 140 75 C190 90 230 120 280 170"
              stroke="rgba(180, 83, 9, 0.36)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M90 60 C130 35 170 25 210 22"
              stroke="rgba(180, 83, 9, 0.3)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="140" cy="75" r="15" fill="rgba(245, 158, 11, 0.42)" />
            <circle cx="175" cy="25" r="14" fill="rgba(234, 88, 12, 0.4)" />
            <circle cx="210" cy="22" r="13" fill="rgba(217, 119, 6, 0.38)" />
            <circle cx="230" cy="120" r="16" fill="rgba(245, 158, 11, 0.42)" />
            <circle cx="275" cy="165" r="14" fill="rgba(217, 119, 6, 0.4)" />
          </svg>
        </div>
      </div>
      <div className="autumn-leaves-container" aria-hidden="true">
        {[...Array(16)].map((_, i) => {
          const leafTypes = ["gold", "maple", "bronze", "amber"];
          const type = leafTypes[i % leafTypes.length];
          const leftPos = (i * 6.3 + 2) % 96;
          const delay = (i * 1.4) % 12;
          const duration = 11 + ((i * 3.1) % 9);
          const scale = 0.7 + ((i * 2) % 4) * 0.15;

          return (
            <div
              key={i}
              className={`autumn-leaf-item leaf-${type}`}
              style={{
                left: `${leftPos}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                transform: `scale(${scale})`,
              }}
            >
              <svg
                viewBox="0 0 32 32"
                className="leaf-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2 C24 8, 28 19, 16 30 C4 19, 8 8, 16 2 Z"
                  fill="currentColor"
                  opacity="0.88"
                />
                <path
                  d="M16 2 L16 30 M16 11 L22 15 M16 17 L24 21 M16 13 L10 17 M16 19 L8 23"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          );
        })}
      </div>

      {/* ========================================================
          3. INTERACTIVE MOUSE CURSOR GLOW & BLUR OVERLAY
          ======================================================== */}
      <div
        className="blob-glow"
        ref={blobRef}
        style={{ transition: "left 0.2s ease-out, top 0.2s ease-out" }}
      ></div>
      <div className="blur-overlay"></div>
    </>
  );
}
