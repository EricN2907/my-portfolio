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
        style={{ transition: "all 3s cubic-bezier(0.075, 0.82, 0.165, 1)" }} 
      ></div>
      <div className="blur-overlay"></div>
    </>
  );
}