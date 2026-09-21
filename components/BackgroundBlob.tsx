"use client"; // Có tương tác chuột nên phải có dòng này

import { useEffect, useRef } from "react";

export default function BackgroundBlob() {
  // Dùng useRef thay cho document.getElementById
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hàm này sẽ chạy mỗi khi bạn di chuột
    const handlePointerMove = (e: PointerEvent) => {
      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    // Lắng nghe sự kiện chuột trên toàn bộ window
    window.addEventListener("pointermove", handlePointerMove);
    
    // Dọn dẹp sự kiện khi người dùng sang trang khác (Best practice của React)
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []); // Cặp ngoặc vuông rỗng nghĩa là Hook này chỉ chạy 1 lần lúc web vừa load

  return (
    <>
      <div className="blob-glow" ref={blobRef}></div>
      <div className="blur-overlay"></div>
    </>
  );
}