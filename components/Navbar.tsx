"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.body.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setTheme("light");
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
        <Link href="/" className="logo" onClick={closeMenu}>
          EricNem
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
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title="Đổi giao diện Sáng / Tối"
          >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
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
