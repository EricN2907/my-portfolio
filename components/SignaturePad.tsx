"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface SignaturePadProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (dataUrl: string) => void;
}

export default function SignaturePad({
  isOpen,
  onClose,
  onSave,
}: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#00C6FF");
  const [hasDrawn, setHasDrawn] = useState(false);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = strokeColor;
    ctx.shadowBlur = 4;
    ctx.shadowColor = strokeColor;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  }, []);

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    onSave(dataUrl);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        clearCanvas();
      }, 50);
    }
  }, [isOpen, clearCanvas]);

  if (!isOpen) return null;

  return (
    <div className="sigpad-overlay" onClick={onClose}>
      <div className="sigpad-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sigpad-header">
          <div>
            <h3 className="sigpad-title">
              <i className="fa-solid fa-signature"></i> Tự Vẽ Chữ Ký Của Bạn
            </h3>
            <p className="sigpad-desc">
              Dùng chuột hoặc ngón tay (trên điện thoại/tablet) để tự ký theo phong cách riêng của bạn.
            </p>
          </div>
          <button className="sigpad-close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="sigpad-canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={550}
            height={220}
            className="sigpad-canvas"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          <div className="sigpad-baseline"></div>
        </div>

        <div className="sigpad-controls">
          <div className="sigpad-colors">
            <span className="color-label">Màu mực:</span>
            {[
              { color: "#00C6FF", name: "Cyan" },
              { color: "#0072FF", name: "Blue" },
              { color: "#D400FF", name: "Purple" },
              { color: "#E63946", name: "Red" },
              { color: "#FFFFFF", name: "White" },
            ].map((c) => (
              <button
                key={c.color}
                type="button"
                className={`color-btn ${strokeColor === c.color ? "active" : ""}`}
                style={{ backgroundColor: c.color }}
                onClick={() => setStrokeColor(c.color)}
                title={c.name}
              />
            ))}
          </div>

          <div className="sigpad-actions">
            <button
              type="button"
              className="sigpad-btn clear"
              onClick={clearCanvas}
            >
              <i className="fa-solid fa-rotate-left"></i> Xóa vẽ lại
            </button>
            <button
              type="button"
              className="sigpad-btn save"
              onClick={handleSave}
              disabled={!hasDrawn}
            >
              <i className="fa-solid fa-check"></i> Áp Dụng Chữ Ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
