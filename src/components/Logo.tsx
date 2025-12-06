export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Neural network brain pattern */}
      <g>
        {/* Outer nodes - representing neural connections */}
        {/* Top left */}
        <circle cx="50" cy="50" r="18" fill="white" />
        {/* Top right */}
        <circle cx="150" cy="50" r="18" fill="white" />
        {/* Middle left */}
        <circle cx="30" cy="100" r="15" fill="white" />
        {/* Middle right */}
        <circle cx="170" cy="100" r="15" fill="white" />
        {/* Bottom left */}
        <circle cx="60" cy="150" r="18" fill="white" />
        {/* Bottom right */}
        <circle cx="140" cy="150" r="18" fill="white" />
        
        {/* Center hub - brain core (larger) */}
        <circle cx="100" cy="100" r="28" fill="white" />
        
        {/* Neural connection curves - synapses */}
        {/* Top connections */}
        <path 
          d="M 65 55 Q 80 70 85 85" 
          stroke="white" 
          strokeWidth="10" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 135 55 Q 120 70 115 85" 
          stroke="white" 
          strokeWidth="10" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Middle connections */}
        <path 
          d="M 45 100 Q 65 100 72 100" 
          stroke="white" 
          strokeWidth="10" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 155 100 Q 135 100 128 100" 
          stroke="white" 
          strokeWidth="10" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Bottom connections */}
        <path 
          d="M 70 140 Q 85 125 90 115" 
          stroke="white" 
          strokeWidth="10" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 130 140 Q 115 125 110 115" 
          stroke="white" 
          strokeWidth="10" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Cross connections for complexity */}
        <path 
          d="M 50 65 Q 70 80 85 95" 
          stroke="white" 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path 
          d="M 150 65 Q 130 80 115 95" 
          stroke="white" 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
