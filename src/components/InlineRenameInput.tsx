import React from "react";
import { Check, X } from "lucide-react";

interface InlineRenameInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  value: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onConfirm: () => void;
  onCancel: () => void;
  placeholder?: string;
  maxLength?: number;
  /** Compact mode for smaller inline contexts (layers panel) */
  compact?: boolean;
}

export default function InlineRenameInput({
  inputRef,
  value,
  error,
  onChange,
  onKeyDown,
  onConfirm,
  onCancel,
  placeholder = "Enter name",
  maxLength = 30,
  compact = false,
}: InlineRenameInputProps) {
  const inputSize = compact ? "text-[18px]" : "text-[16px]";
  const inputHeight = compact ? "24px" : "28px";
  const btnSize = compact ? "w-[24px] h-[24px]" : "w-[26px] h-[26px]";
  const iconSize = compact ? "w-[12px] h-[12px]" : "w-[14px] h-[14px]";

  return (
    <div className="relative flex items-center gap-[6px]">
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={(e) => {
          // Don't confirm if clicking on virtual keyboard or confirm/cancel buttons
          const relatedTarget = e.relatedTarget as HTMLElement | null;
          if (relatedTarget && (relatedTarget.closest('[data-name="keyboard"]') || relatedTarget.closest('[title="Save"]') || relatedTarget.closest('[title="Cancel"]'))) {
            return;
          }
          onConfirm();
        }}
        onFocus={(e) => e.target.select()}
        placeholder={placeholder}
        className={`${inputSize} bg-white text-[#3e3d40] rounded-[6px] px-2 py-0 outline-none min-w-[100px] max-w-[200px] ${
          error ? "ring-2 ring-[#EF4444]" : "ring-2 ring-[#009ace]"
        }`}
        style={{
          fontWeight: 500,
          fontFamily: "'Roboto', sans-serif",
          height: inputHeight,
        }}
        maxLength={maxLength}
      />
      <button
        onClick={onConfirm}
        onMouseDown={(e) => e.preventDefault()}
        className={`${btnSize} flex items-center justify-center rounded-[6px] bg-[#009ace] hover:bg-[#0088bf] transition-colors shrink-0`}
        title="Save"
      >
        <Check className={`${iconSize} text-white`} />
      </button>
      <button
        onClick={onCancel}
        onMouseDown={(e) => e.preventDefault()}
        className={`${btnSize} flex items-center justify-center rounded-[6px] bg-[#009ace] hover:bg-[#0088bf] transition-colors shrink-0`}
        title="Cancel"
      >
        <X className={`${iconSize} text-white`} />
      </button>
      {error && (
        <div
          className="absolute left-0 top-full mt-1 z-50 bg-white rounded-[6px] px-2 py-1 shadow-lg border border-[#EF4444]"
          style={{ whiteSpace: "nowrap" }}
        >
          <span
            className="text-[11px] text-[#EF4444]"
            style={{ fontWeight: 500 }}
          >
            {error}
          </span>
        </div>
      )}
    </div>
  );
}