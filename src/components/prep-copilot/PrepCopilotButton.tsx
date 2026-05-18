export default function PrepCopilotButton({ className }: { className?: string }) {
  return (
    <div className={className} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="copilot-sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009ACE" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="copilot-sparkle-small" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009ACE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {/* Main four-pointed star */}
        <path
          d="M18 3 L20.5 13.5 L31 18 L20.5 22.5 L18 33 L15.5 22.5 L5 18 L15.5 13.5 Z"
          fill="url(#copilot-sparkle-gradient)"
        />
        {/* Small sparkle top-right */}
        <path
          d="M28 4 L29 7.5 L32.5 8.5 L29 9.5 L28 13 L27 9.5 L23.5 8.5 L27 7.5 Z"
          fill="url(#copilot-sparkle-small)"
        />
        {/* Small sparkle bottom-left */}
        <path
          d="M8 23 L9 26 L12 27 L9 28 L8 31 L7 28 L4 27 L7 26 Z"
          fill="url(#copilot-sparkle-small)"
        />
      </svg>
    </div>
  );
}
