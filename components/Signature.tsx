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
  name = "Nguyen Hoang Nam",
  className = "",
  allowCustomDraw = true,
}: SignatureProps) {
  // Default mode is "paper" (the authentic handwritten signature from the user's photo)
  const [sigMode, setSigMode] = useState<"paper" | "font" | "custom">("paper");
  const [customSig, setCustomSig] = useState<string | null>(null);
  const [isPadOpen, setIsPadOpen] = useState(false);

  useEffect(() => {
    const savedCustom = localStorage.getItem("user_custom_signature");
    if (savedCustom) {
      setCustomSig(savedCustom);
    }

    const savedMode = localStorage.getItem("user_sig_mode") as "paper" | "font" | "custom" | null;
    if (savedMode === "custom" && savedCustom) {
      setSigMode("custom");
    } else if (savedMode === "font") {
      setSigMode("font");
    } else {
      // Default is always the user's authentic handwritten signature from paper photo
      setSigMode("paper");
    }
  }, []);

  const handleSelectMode = (mode: "paper" | "font" | "custom") => {
    setSigMode(mode);
    localStorage.setItem("user_sig_mode", mode);
  };

  const handleSaveCustomSignature = (dataUrl: string) => {
    setCustomSig(dataUrl);
    setSigMode("custom");
    localStorage.setItem("user_custom_signature", dataUrl);
    localStorage.setItem("user_sig_mode", "custom");
  };

  return (
    <div className={`clean-signature-container ${className}`}>
      {/* 1. OFFICIAL HANDWRITTEN SIGNATURE (From User's Paper Photo, Left Circle Removed) */}
      {sigMode === "paper" && (
        <div className="real-signature-wrapper" title="Chữ ký viết tay thật của bạn">
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

      {/* 2. THE SIGNATURE FONT DISPLAY (Alternative Option) */}
      {sigMode === "font" && (
        <div className="signature-font-display" title={`Chữ ký font: ${name}`}>
          <span className="signature-script-maywind">
            {name}
          </span>
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
          {/* Button: Official Hand-drawn Signature from paper photo */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "paper" ? "active" : ""}`}
            onClick={() => handleSelectMode("paper")}
            title="Dùng nét ký giấy gốc của bạn (chữ trong hình bạn gửi)"
          >
            <i className="fa-solid fa-signature"></i>
            <span>Chữ ký tay gốc (trong hình)</span>
          </button>

          {/* Button: Canvas Pad */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "custom" ? "active" : ""}`}
            onClick={() => setIsPadOpen(true)}
            title="Mở bảng vẽ tự ký nét tay mới"
          >
            <i className="fa-solid fa-pen-nib"></i>
            <span>{customSig ? "Vẽ lại nét mới" : "Tự vẽ nét khác"}</span>
          </button>

          {/* Button: Font May-WinD */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "font" ? "active" : ""}`}
            onClick={() => handleSelectMode("font")}
            title="Xem thử font chữ Thesignature"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>Font Thesignature</span>
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
