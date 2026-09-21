"use client"; // Dòng này báo cho Next.js biết Component này có tương tác (click chuột, state)

import { useState } from "react";
import Link from "next/link"; // Trong Next.js, luôn dùng <Link> thay cho thẻ <a> để chuyển trang mượt hơn

export default function Navbar() {
  // Biến isMenuOpen để nhớ xem menu điện thoại đang Mở (true) hay Đóng (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm đảo ngược trạng thái (Đóng thành Mở, Mở thành Đóng)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Chú ý: Trong React, thuộc tính 'class' của HTML phải đổi tên thành 'className'
    <nav className="navbar">
      <div className="logo">EricN2907</div>
      
      {/* Nếu isMenuOpen = true thì nhét thêm chữ "active" vào class, nếu không thì để trống */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link href="#tech-stack" onClick={() => setIsMenuOpen(false)}>Tech Stack</Link></li>
        <li><Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
        <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
      
      <div className="nav-actions">
        <button className="theme-toggle-btn">
          <i className="fa-solid fa-moon"></i>
        </button>
        <a href="https://github.com/EricN2907/my-portfolio" target="_blank" className="nav-btn">
          Github
        </a>
        
        {/* Nút Hamburger gọi hàm toggleMenu khi bị click */}
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}