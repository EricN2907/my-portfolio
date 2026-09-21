"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Kiểm tra Theme đã lưu khi trang vừa load
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }, []);

  // Hàm chuyển đổi Theme Sáng/Tối
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

  return (
    <nav className="navbar">
      <div className="logo">EricN2907</div>
      
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link href="#tech-stack" onClick={() => setIsMenuOpen(false)}>Tech Stack</Link></li>
        <li><Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
        <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
      
      <div className="nav-actions">
        {/* Nút bấm Theme */}
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
        </button>
        
        <a href="https://github.com/EricN2907/my-portfolio" target="_blank" className="nav-btn">
          Github
        </a>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}