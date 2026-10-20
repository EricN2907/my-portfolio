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
  const [useRealPhotoSig, setUseRealPhotoSig] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("user_custom_signature");
    if (saved) {
      setCustomSig(saved);
      setUseRealPhotoSig(false);
    }
  }, []);

  const handleSaveSignature = (dataUrl: string) => {
    setCustomSig(dataUrl);
    setUseRealPhotoSig(false);
    localStorage.setItem("user_custom_signature", dataUrl);
  };

  const handleResetToRealSig = () => {
    setCustomSig(null);
    setUseRealPhotoSig(true);
    localStorage.removeItem("user_custom_signature");
  };

  return (
    <div className={`clean-signature-container ${className}`}>
      {customSig ? (
        /* User drawn on canvas */
        <div className="custom-drawn-sig-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={customSig}
            alt="Handwritten Signature"
            className="real-handwritten-img"
          />
        </div>
      ) : useRealPhotoSig ? (
        /* The Real Official Signature extracted from paper */
        <div className="real-signature-wrapper" title="Official Signature: Nguyen Hoang Nam">
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
      ) : (
        /* Thesignature Font Fallback */
        <div className="signature-font-display">
          <span className="signature-script-maywind" title={name}>
            {name}
          </span>
        </div>
      )}

      {/* Signature tool options */}
      {allowCustomDraw && (
        <div className="signature-tool-actions">
          <button
            type="button"
            className="signature-custom-btn"
            onClick={() => setIsPadOpen(true)}
            title="Mở bảng vẽ tự ký nét khác"
          >
            <i className="fa-solid fa-pen"></i>
            <span>Vẽ lại chữ ký</span>
          </button>

          {customSig && (
            <button
              type="button"
              className="signature-reset-btn"
              onClick={handleResetToRealSig}
              title="Dùng lại chữ ký giấy gốc của bạn"
            >
              <i className="fa-solid fa-rotate-left"></i>
              <span>Dùng chữ ký giấy gốc</span>
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
