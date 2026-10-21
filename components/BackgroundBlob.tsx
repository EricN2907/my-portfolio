"use client";

import { useEffect, useRef } from "react";

export default function BackgroundBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 1. Mouse pointer tracker
    const handlePointerMove = (e: PointerEvent) => {
      if (blobRef.current) {
        blobRef.current.style.left = `${e.clientX}px`;
        blobRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("pointermove", handlePointerMove);

    // 2. Dynamic Dark Mode Celestial Starfield & Shooting Stars Canvas
    const canvas = canvasRef.current;
    let animId: number;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = window.innerHeight);

      const handleResize = () => {
        if (!canvas) return;
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      // 90 Twinkling stars
      const stars = Array.from({ length: 90 }, () => ({
        x: Math.random() * w,
        y: Math.random() * (h * 0.9),
        radius: Math.random() * 1.6 + 0.6,
        baseAlpha: Math.random() * 0.6 + 0.35,
        twinkleSpeed: Math.random() * 0.035 + 0.015,
        phase: Math.random() * Math.PI * 2,
      }));

      // 20 Floating night firefly particles
      const fireflies = Array.from({ length: 20 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        size: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
      }));

      // Shooting stars (Meteors)
      const meteors: Array<{
        x: number;
        y: number;
        length: number;
        speed: number;
        angle: number;
        alpha: number;
      }> = [];

      let lastMeteorTime = Date.now();

      const render = () => {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        if (ctx && isDark) {
          ctx.clearRect(0, 0, w, h);

          // Draw Twinkling Stars
          for (const star of stars) {
            star.phase += star.twinkleSpeed;
            const alpha = Math.max(0.12, star.baseAlpha + Math.sin(star.phase) * 0.35);
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(0, 198, 255, 0.85)";
            ctx.fill();
          }

          // Draw Floating Night Fireflies / Stardust
          for (const f of fireflies) {
            f.x += f.vx;
            f.y += f.vy;
            f.pulsePhase += f.pulseSpeed;
            if (f.y < -20) f.y = h + 10;
            if (f.x < -20) f.x = w + 10;
            if (f.x > w + 20) f.x = -10;

            const alpha = Math.max(0.15, f.alpha + Math.sin(f.pulsePhase) * 0.25);
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 225, 255, ${alpha})`;
            ctx.shadowBlur = 14;
            ctx.shadowColor = "#00C6FF";
            ctx.fill();
          }

          // Trigger occasional Shooting Stars (every 2.5 - 3.5 seconds)
          const now = Date.now();
          if (now - lastMeteorTime > 2600 && Math.random() < 0.04) {
            meteors.push({
              x: Math.random() * (w * 0.85) + w * 0.1,
              y: Math.random() * (h * 0.35),
              length: Math.random() * 140 + 90,
              speed: Math.random() * 9 + 14,
              angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
              alpha: 1,
            });
            lastMeteorTime = now;
          }

          // Render Meteors
          for (let i = meteors.length - 1; i >= 0; i--) {
            const m = meteors[i];
            m.x += Math.cos(m.angle) * m.speed;
            m.y += Math.sin(m.angle) * m.speed;
            m.alpha -= 0.016;

            if (m.alpha <= 0 || m.x > w || m.y > h) {
              meteors.splice(i, 1);
              continue;
            }

            const tailX = m.x - Math.cos(m.angle) * m.length;
            const tailY = m.y - Math.sin(m.angle) * m.length;

            const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
            grad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
            grad.addColorStop(0.25, `rgba(0, 198, 255, ${m.alpha * 0.85})`);
            grad.addColorStop(1, "transparent");

            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2.6;
            ctx.shadowBlur = 16;
            ctx.shadowColor = "#00C6FF";
            ctx.stroke();
          }
        } else if (ctx) {
          ctx.clearRect(0, 0, w, h);
        }

        animId = requestAnimationFrame(render);
      };

      animId = requestAnimationFrame(render);

      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animId);
      };
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      {/* ========================================================
          1. DARK MODE: CELESTIAL MOON & INTERACTIVE STARFIELD
          ======================================================== */}
      {/* High-Performance Canvas for Dynamic Starfield, Meteors & Night Fireflies */}
      <canvas ref={canvasRef} className="sky-stars-canvas" aria-hidden="true" />

      {/* Celestial Moon: Crescent body with glowing atmospheric halo */}
      <div id="skyMoonElement" className="sky-moon-element" aria-hidden="true">
        <div className="moon-body"></div>
        <div className="moon-glow"></div>
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
          2. LIGHT MODE: GOLDEN AUTUMN FALLING LEAVES & 4 CORNER TREES
          ======================================================== */}
      {/* Artistic Autumn Botanical Trees & Foliage Silhouette Branches (All 4 Corners) */}
      <div className="autumn-trees-container" aria-hidden="true">
        {/* Top-Right Tree Branch */}
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

        {/* Top-Left Tree Branch */}
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

        {/* Bottom-Left Tree Branch */}
        <div className="autumn-tree-branch branch-bottom-left">
          <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 240 C50 200 90 170 140 150 C190 130 230 100 270 40"
              stroke="rgba(180, 83, 9, 0.4)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M140 150 C170 175 200 195 240 205"
              stroke="rgba(180, 83, 9, 0.32)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M90 170 C100 130 120 100 150 75"
              stroke="rgba(180, 83, 9, 0.3)"
              strokeWidth="3.8"
              strokeLinecap="round"
            />
            <circle cx="150" cy="75" r="16" fill="rgba(245, 158, 11, 0.45)" />
            <circle cx="185" cy="80" r="14" fill="rgba(234, 88, 12, 0.42)" />
            <circle cx="270" cy="40" r="18" fill="rgba(217, 119, 6, 0.46)" />
            <circle cx="240" cy="205" r="15" fill="rgba(245, 158, 11, 0.42)" />
            <circle cx="215" cy="180" r="13" fill="rgba(234, 88, 12, 0.4)" />
            <circle cx="180" cy="140" r="15" fill="rgba(217, 119, 6, 0.42)" />
            <circle cx="110" cy="160" r="14" fill="rgba(245, 158, 11, 0.45)" />
          </svg>
        </div>

        {/* Bottom-Right Tree Branch */}
        <div className="autumn-tree-branch branch-bottom-right">
          <svg viewBox="0 0 350 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M350 240 C300 200 250 170 200 150 C150 130 110 95 70 35"
              stroke="rgba(180, 83, 9, 0.4)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M200 150 C170 180 140 200 100 210"
              stroke="rgba(180, 83, 9, 0.32)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <circle cx="70" cy="35" r="18" fill="rgba(245, 158, 11, 0.45)" />
            <circle cx="100" cy="50" r="14" fill="rgba(234, 88, 12, 0.42)" />
            <circle cx="100" cy="210" r="16" fill="rgba(217, 119, 6, 0.42)" />
            <circle cx="135" cy="185" r="14" fill="rgba(245, 158, 11, 0.45)" />
            <circle cx="165" cy="140" r="15" fill="rgba(234, 88, 12, 0.4)" />
            <circle cx="230" cy="165" r="16" fill="rgba(217, 119, 6, 0.45)" />
          </svg>
        </div>
      </div>

      {/* Autumn Falling Leaves */}
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
