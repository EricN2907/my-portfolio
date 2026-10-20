"use client";

import { useState, useEffect } from "react";
import SignaturePad from "./SignaturePad";

interface SignatureProps {
  name?: string;
  className?: string;
  allowCustomDraw?: boolean;
  variant?: string;
}

export default function Signature({
  name = "EricNem",
  className = "",
  allowCustomDraw = true,
}: SignatureProps) {
  // Mode: "font" (May-WinD font), "paper" (extracted paper scan), "custom" (canvas drawn)
  const [sigMode, setSigMode] = useState<"font" | "paper" | "custom">("font");
  const [displayName, setDisplayName] = useState(name);
  const [customSig, setCustomSig] = useState<string | null>(null);
  const [isPadOpen, setIsPadOpen] = useState(false);

  useEffect(() => {
    // Check if user previously chose a custom drawing or mode
    const savedCustom = localStorage.getItem("user_custom_signature");
    if (savedCustom) {
      setCustomSig(savedCustom);
    }

    const savedMode = localStorage.getItem("user_sig_mode") as "font" | "paper" | "custom" | null;
    if (savedMode === "paper") {
      setSigMode("paper");
    } else if (savedMode === "custom" && savedCustom) {
      setSigMode("custom");
    } else {
      // Default is always the authentic May-WinD font
      setSigMode("font");
    }
  }, []);

  const handleSelectMode = (mode: "font" | "paper" | "custom") => {
    setSigMode(mode);
    localStorage.setItem("user_sig_mode", mode);
  };

  const handleSaveCustomSignature = (dataUrl: string) => {
    setCustomSig(dataUrl);
    setSigMode("custom");
    localStorage.setItem("user_custom_signature", dataUrl);
    localStorage.setItem("user_sig_mode", "custom");
  };

  const toggleFontName = () => {
    setDisplayName((prev) => (prev === "EricNem" ? "Nguyen Hoang Nam" : "EricNem"));
  };

  return (
    <div className={`clean-signature-container ${className}`}>
      {/* 1. FONT DISPLAY (Authentic May-WinD Thesignature Font) */}
      {sigMode === "font" && (
        <div className="signature-font-display" title={`Chữ ký font May-WinD: ${displayName}`}>
          <span className="signature-script-maywind">
            {displayName}
          </span>
        </div>
      )}

      {/* 2. PAPER SIGNATURE (Left circle removed, authentic paper stroke) */}
      {sigMode === "paper" && (
        <div className="real-signature-wrapper" title="Chữ ký giấy gốc: EricNem (Nguyễn Hoàng Nam)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature_nam_blue.png"
            alt="Chữ ký Nguyễn Hoàng Nam"
            className="real-handwritten-img sig-light"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature_nam_white.png"
            alt="Chữ ký Nguyễn Hoàng Nam"
            className="real-handwritten-img sig-dark"
          />
        </div>
      )}

      {/* 3. CUSTOM CANVAS DRAWN SIGNATURE */}
      {sigMode === "custom" && customSig && (
        <div className="custom-drawn-sig-box" title="Chữ ký tự vẽ trên bảng">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={customSig}
            alt="Chữ ký tự vẽ"
            className="real-handwritten-img custom-drawn-img"
          />
        </div>
      )}

      {/* Interactive Switcher Options */}
      {allowCustomDraw && (
        <div className="signature-tool-actions">
          {/* Button: Font Thesignature from May-WinD */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "font" ? "active" : ""}`}
            onClick={() => handleSelectMode("font")}
            title="Dùng font Thesignature chuẩn từ May-WinD"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>Font May-WinD ({displayName})</span>
          </button>

          {/* Toggle between EricNem and Nguyen Hoang Nam */}
          {sigMode === "font" && (
            <button
              type="button"
              className="signature-pill-sub-btn"
              onClick={toggleFontName}
              title="Đổi chữ hiển thị giữa EricNem và Nguyen Hoang Nam"
            >
              <i className="fa-solid fa-arrows-rotate"></i>
              <span>{displayName === "EricNem" ? "Hiện Họ Tên" : "Hiện EricNem"}</span>
            </button>
          )}

          {/* Button: Scanned Paper Signature */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "paper" ? "active" : ""}`}
            onClick={() => handleSelectMode("paper")}
            title="Dùng nét ký giấy gốc (đã bỏ vòng tròn bên trái)"
          >
            <i className="fa-solid fa-signature"></i>
            <span>Nét ký giấy gốc</span>
          </button>

          {/* Button: Canvas Pad */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "custom" ? "active" : ""}`}
            onClick={() => setIsPadOpen(true)}
            title="Mở bảng vẽ tự ký nét tay mới"
          >
            <i className="fa-solid fa-pen-nib"></i>
            <span>{customSig ? "Vẽ lại nét mới" : "Tự vẽ chữ ký"}</span>
          </button>
        </div>
      )}

      {/* Interactive Signature Drawing Pad Modal */}
      <SignaturePad
        isOpen={isPadOpen}
        onClose={() => setIsPadOpen(false)}
        onSave={handleSaveCustomSignature}
      />
    </div>
  );
}
