"use client";

import { useState, useEffect } from "react";
import SignaturePad from "./SignaturePad";

interface SignatureProps {
  name?: string;
  className?: string;
  allowCustomDraw?: boolean;
  variant?: string;
  defaultMode?: "full" | "trimmed" | "font" | "custom";
}

export default function Signature({
  name = "Nguyen Hoang Nam",
  className = "",
  allowCustomDraw = true,
  defaultMode = "trimmed",
}: SignatureProps) {
  // Modes: "trimmed" (pristine signature from user's crop), "full", "font", "custom"
  const [sigMode, setSigMode] = useState<"full" | "trimmed" | "font" | "custom">(defaultMode);
  const [customSig, setCustomSig] = useState<string | null>(null);
  const [isPadOpen, setIsPadOpen] = useState(false);

  useEffect(() => {
    const savedCustom = localStorage.getItem("user_custom_signature");
    if (savedCustom) {
      setCustomSig(savedCustom);
    }

    const savedMode = localStorage.getItem("user_sig_mode") as "full" | "trimmed" | "font" | "custom" | null;
    if (savedMode === "custom" && savedCustom) {
      setSigMode("custom");
    } else if (savedMode) {
      setSigMode(savedMode);
    } else {
      setSigMode(defaultMode);
    }
  }, [defaultMode]);

  const handleSelectMode = (mode: "full" | "trimmed" | "font" | "custom") => {
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
      {/* 1. AUTHENTIC HANDWRITTEN SIGNATURE (FULL - INCLUDING MONOGRAM CIRCLE) */}
      {sigMode === "full" && (
        <div className="real-signature-wrapper" title="Chữ ký giấy gốc nguyên vẹn của bạn">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature_nam_full_blue.png"
            alt="Chữ ký Nguyễn Hoàng Nam đầy đủ"
            className="real-handwritten-img sig-light"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature_nam_full_white.png"
            alt="Chữ ký Nguyễn Hoàng Nam đầy đủ"
            className="real-handwritten-img sig-dark"
          />
        </div>
      )}

      {/* 2. AUTHENTIC HANDWRITTEN SIGNATURE (TRIMMED - WITHOUT MONOGRAM CIRCLE) */}
      {sigMode === "trimmed" && (
        <div className="real-signature-wrapper" title="Chữ ký giấy gốc (lược bỏ vòng tròn bên trái)">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature_nam_trimmed_blue.png"
            alt="Chữ ký Nguyễn Hoàng Nam nét lượn"
            className="real-handwritten-img sig-light"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature_nam_trimmed_white.png"
            alt="Chữ ký Nguyễn Hoàng Nam nét lượn"
            className="real-handwritten-img sig-dark"
          />
        </div>
      )}

      {/* 3. THE SIGNATURE FONT DISPLAY (Alternative Option) */}
      {sigMode === "font" && (
        <div className="signature-font-display" title={`Chữ ký font: ${name}`}>
          <span className="signature-script-maywind">
            {name}
          </span>
        </div>
      )}

      {/* 4. CUSTOM CANVAS DRAWN SIGNATURE */}
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
          {/* Button: Full Authentic */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "full" ? "active" : ""}`}
            onClick={() => handleSelectMode("full")}
            title="Chữ ký nguyên vẹn đầy đủ nét trong hình sổ tay của bạn"
          >
            <i className="fa-solid fa-signature"></i>
            <span>Chữ ký gốc đầy đủ</span>
          </button>

          {/* Button: Trimmed (without circle) */}
          <button
            type="button"
            className={`signature-pill-btn ${sigMode === "trimmed" ? "active" : ""}`}
            onClick={() => handleSelectMode("trimmed")}
            title="Chữ ký nét lượn (bỏ vòng tròn bên trái)"
          >
            <i className="fa-solid fa-pen-fancy"></i>
            <span>Nét ký không vòng</span>
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
