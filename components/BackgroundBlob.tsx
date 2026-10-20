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
      {/* Celestial Moon in Dark Mode (from May-WinD inspiration) */}
      <div className="sky-moon-element" aria-hidden="true">
        <div className="moon-body"></div>
        <div className="moon-glow"></div>
        <div className="moon-halo"></div>
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

      <div
        className="blob-glow"
        ref={blobRef}
        style={{ transition: "left 0.2s ease-out, top 0.2s ease-out" }}
      ></div>
      <div className="blur-overlay"></div>
    </>
  );
}
