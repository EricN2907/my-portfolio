"use client";

import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const themeBusy = useRef(false);

  useEffect(() => {
    // Default to dark mode if not yet set in localStorage (per user request)
    let savedTheme: string | null = null;
    try { savedTheme = localStorage.getItem("theme"); } catch { /* Use the default. */ }
    const currentTheme = savedTheme ? savedTheme : "dark";
    if (currentTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.body.removeAttribute("data-theme");
      setTheme("light");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (themeBusy.current) return;
    const nextTheme = theme === "light" ? "dark" : "light";
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const applyTheme = () => {
      if (nextTheme === "dark") document.body.setAttribute("data-theme", "dark");
      else document.body.removeAttribute("data-theme");
      setTheme(nextTheme);
      try { localStorage.setItem("theme", nextTheme); } catch { /* Storage can be disabled. */ }
    };
    const transitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => { ready: Promise<void>; finished: Promise<void> };
    };
    if (!transitionDocument.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
      return;
    }
    themeBusy.current = true;
    document.documentElement.classList.add("theme-transitioning");
    try {
      const transition = transitionDocument.startViewTransition(() => flushSync(applyTheme));
      const finished = transition.finished.catch(() => undefined);
      try {
        await transition.ready;
        await document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
        ).finished;
      } catch { /* The theme still changes if the browser skips the animation. */ }
      await finished;
    } finally {
      document.documentElement.classList.remove("theme-transitioning");
      themeBusy.current = false;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-header-sticky ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <Link href="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-first">Eric</span>
          <span className="brand-nem-wrapper" title="Nem">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/signature_nem_blue.png"
              alt="Nem"
              className="brand-sig-img sig-light"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/signature_nem_white.png"
              alt="Nem"
              className="brand-sig-img sig-dark"
            />
          </span>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="#about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#tech-stack" onClick={closeMenu}>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={closeMenu}>
              Milestones
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Nút bấm Theme */}
          <button
            className={`theme-toggle-btn ${theme === "dark" ? "is-dark" : "is-light"}`}
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title="Đổi giao diện Sáng / Tối"
          >
            <span className="theme-icon-stage" aria-hidden="true">
              <i className="fa-solid fa-sun theme-icon theme-icon-sun" />
              <i className="fa-solid fa-moon theme-icon theme-icon-moon" />
            </span>
          </button>

          <a
            href="https://github.com/EricN2907/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
