export default function SwapArchesNew() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Upper arch arrow pointing down */}
      <path 
        d="M16 6V14M16 14L12 10M16 14L20 10" 
        stroke="#009ace" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Lower arch arrow pointing up */}
      <path 
        d="M16 26V18M16 18L12 22M16 18L20 22" 
        stroke="#009ace" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Horizontal divider line */}
      <path 
        d="M8 16H24" 
        stroke="#009ace" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
