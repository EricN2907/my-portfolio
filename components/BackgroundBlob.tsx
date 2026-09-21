"use client";

import { useEffect, useRef } from "react";

export default function BackgroundBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      // Cách tối ưu nhất cho React: Gắn thẳng style thay vì gọi hàm animate() liên tục
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
      <div 
        className="blob-glow" 
        ref={blobRef}
        style={{ transition: "left 0.2s ease-out, top 0.2s ease-out" }} 
      ></div>
      <div className="blur-overlay"></div>
    </>
  );
}