import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../imports/svg-hoptwfnz60";

interface SignaturePanelProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSend: () => void;
}

export default function SignaturePanel({ isOpen, onClose, onConfirmSend }: SignaturePanelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [saveSignature, setSaveSignature] = useState(true);
  const [consentChecked, setConsentChecked] = useState(true);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  // Set up canvas on mount
  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#1a1a2e";
      }
    }
  }, [isOpen]);

  const getPoint = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      const touch = e.touches[0];
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const startDrawing = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const point = getPoint(e);
    if (!point) return;
    setIsDrawing(true);
    setHasSignature(true);
    lastPoint.current = point;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    }
  }, [getPoint]);

  const draw = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing) return;
    const point = getPoint(e);
    if (!point || !lastPoint.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }
    lastPoint.current = point;
  }, [isDrawing, getPoint]);

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
    lastPoint.current = null;
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasSignature(false);
  }, []);

  return createPortal(
    <>
      {/* Backdrop overlay - only render when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[9998] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Side panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[670px] bg-white z-[9999] shadow-[-4px_0px_24px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end px-[24px] pt-[24px]">
          <button
            onClick={onClose}
            className="size-[32px] flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="#0067AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#0067AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col px-[32px] pt-[16px] overflow-y-auto">
          {/* Signature canvas area with controls */}
          <div className="flex flex-col bg-[#f5f5f5] rounded-[8px] border border-[#e0e0e0]">
            {/* Canvas */}
            <div className="h-[220px] relative overflow-hidden rounded-t-[8px]">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full cursor-crosshair"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
              />
            </div>

            {/* Save signature + Clear row - inside signature container */}
            <div className="flex items-center justify-between px-[12px] py-[12px] border-t border-[#e0e0e0]">
              {/* Save signature checkbox */}
              <label className="flex items-center gap-[4px] cursor-pointer">
                <div
                  className={`size-[20px] rounded-[4px] border flex items-center justify-center transition-colors ${saveSignature ? "bg-[#0067AC] border-[#0067AC]" : "bg-white border-[#939598]"}`}
                  onClick={() => setSaveSignature(!saveSignature)}
                >
                  {saveSignature && (
                    <svg width="14" height="10" viewBox="0 0 15 10.2587" fill="none">
                      <path d={svgPaths.pa513e80} fill="white" />
                    </svg>
                  )}
                </div>
                <span
                  className="font-['Roboto:Regular',sans-serif] font-normal text-[18px] text-[#3e3d40] leading-[28px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Save signature
                </span>
              </label>

              {/* Clear button */}
              <button
                onClick={clearCanvas}
                className="flex items-center gap-[12px] cursor-pointer hover:opacity-70 transition-opacity px-[20px] py-[10px] rounded-[4px]"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 5L15 3.333L5.833 12.5L7.5 14.167L16.667 5Z" stroke="#0067AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.333 4.999L15 3.333" stroke="#0067AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.833 12.5L3.333 15L5 16.667L7.5 14.167" stroke="#0067AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.333 16.667H16.667" stroke="#0067AC" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span
                  className="font-['Roboto:Medium',sans-serif] font-medium text-[18px] text-[#0067AC] leading-[28px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Clear
                </span>
              </button>
            </div>
          </div>

          {/* Consent checkbox */}
          <div className="flex items-start gap-[10px] pt-[24px]">
            <div
              className={`size-[20px] rounded-[4px] border flex items-center justify-center shrink-0 mt-[2px] cursor-pointer transition-colors ${consentChecked ? "bg-[#0067AC] border-[#0067AC]" : "bg-white border-[#939598]"}`}
              onClick={() => setConsentChecked(!consentChecked)}
            >
              {consentChecked && (
                <svg width="14" height="10" viewBox="0 0 15 10.2587" fill="none">
                  <path d={svgPaths.pa513e80} fill="white" />
                </svg>
              )}
            </div>
            <p
              className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] text-[#3e3d40] leading-[24px] flex-1"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              By checking this box, I represent that my patient has consented to the collection and processing of their personal health data and the processing of that data by Align Technology for the purposes of providing customized dental care.{" "}
              <button
                className="text-[#3e3d40] underline underline-offset-2 cursor-pointer hover:opacity-70 ml-[16px]"
              >
                View more
              </button>
            </p>
          </div>
        </div>

        {/* Bottom sticky footer inside panel */}
        <div className="border-t border-[#e0e0e0] px-[32px] h-[156px] flex justify-end items-center">
          <button
            onClick={onConfirmSend}
            disabled={!hasSignature || !consentChecked}
            className={`w-[280px] h-[76px] rounded-[4px] flex items-center justify-center cursor-pointer transition-opacity ${
              hasSignature && consentChecked
                ? "bg-[#bfeafb] border border-[#408dc1] hover:opacity-80"
                : "bg-[#e8e8e8] border border-[#d1d1d1] opacity-60 cursor-not-allowed"
            }`}
          >
            <span
              className={`font-['Roboto:Medium',sans-serif] font-medium text-[20px] leading-[32px] ${
                hasSignature && consentChecked ? "text-[#0067ac]" : "text-[#939598]"
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Confirm & Send
            </span>
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}