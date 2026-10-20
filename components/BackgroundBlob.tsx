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

      {/* ========================================================
          2. LIGHT MODE: GOLDEN AUTUMN FALLING LEAVES (LÁ THU RƠI)
          ======================================================== */}
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
