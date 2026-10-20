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
  const [customSig, setCustomSig] = useState<string | null>(null);
  const [isPadOpen, setIsPadOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("user_custom_signature");
    if (saved) {
      setCustomSig(saved);
    }
  }, []);

  const handleSaveSignature = (dataUrl: string) => {
    setCustomSig(dataUrl);
    localStorage.setItem("user_custom_signature", dataUrl);
  };

  const handleResetToFont = () => {
    setCustomSig(null);
    localStorage.removeItem("user_custom_signature");
  };

  return (
    <div className={`clean-signature-container ${className}`}>
      {customSig ? (
        /* Real Hand-Drawn Signature from Signature Pad */
        <div className="custom-drawn-sig-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={customSig}
            alt="Handwritten Signature"
            className="custom-drawn-img"
          />
        </div>
      ) : (
        /* Pure Minimalist Typography Signature with Thesignature Font & Animation */
        <div className="signature-font-display">
          <span className="signature-script-maywind" title={name}>
            {name}
          </span>
        </div>
      )}

      {/* Option to Draw Your Own Signature or Reset */}
      {allowCustomDraw && (
        <div className="signature-tool-actions">
          <button
            type="button"
            className="signature-custom-btn"
            onClick={() => setIsPadOpen(true)}
            title="Tự tay ký chữ ký của riêng bạn bằng chuột hoặc màn hình cảm ứng"
          >
            <i className="fa-solid fa-pen"></i>
            <span>{customSig ? "Ký lại nét khác" : "✍️ Tự ký tay của bạn"}</span>
          </button>

          {customSig && (
            <button
              type="button"
              className="signature-reset-btn"
              onClick={handleResetToFont}
              title="Khôi phục lại chữ ký font Thesignature"
            >
              <i className="fa-solid fa-rotate-left"></i>
              <span>Dùng lại font</span>
            </button>
          )}
        </div>
      )}

      {/* Interactive Signature Drawing Pad Modal */}
      <SignaturePad
        isOpen={isPadOpen}
        onClose={() => setIsPadOpen(false)}
        onSave={handleSaveSignature}
      />
    </div>
  );
}
