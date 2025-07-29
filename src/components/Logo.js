import React from 'react';

export function Logo({ className = "w-20 h-20 sm:w-24 sm:h-24" }) {
  return (
    <div className={`${className} relative group cursor-pointer`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fondo circular con gradiente */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00eaff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00ff9d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00eaff" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Círculo de fondo */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#logoGradient)"
          className="group-hover:animate-pulse transition-all duration-300"
          filter="url(#glow)"
        />
        
        {/* Silueta de persona ergonómica */}
        <g className="group-hover:scale-110 transition-transform duration-300">
          {/* Cabeza */}
          <circle
            cx="50"
            cy="25"
            r="8"
            fill="#0a0a1f"
            stroke="#00eaff"
            strokeWidth="1.5"
            className="group-hover:stroke-[#00ff9d] transition-colors duration-300"
          />
          
          {/* Torso recto */}
          <rect
            x="46"
            y="33"
            width="8"
            height="20"
            fill="#0a0a1f"
            stroke="#00eaff"
            strokeWidth="1.5"
            rx="2"
            className="group-hover:stroke-[#00ff9d] transition-colors duration-300"
          />
          
          {/* Hombros nivelados */}
          <line
            x1="42"
            y1="35"
            x2="58"
            y2="35"
            stroke="#00ff9d"
            strokeWidth="2"
            strokeLinecap="round"
            className="group-hover:stroke-[#00eaff] transition-colors duration-300"
          />
          
          {/* Brazos */}
          <line
            x1="42"
            y1="35"
            x2="38"
            y2="45"
            stroke="#0a0a1f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="58"
            y1="35"
            x2="62"
            y2="45"
            stroke="#0a0a1f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Piernas */}
          <line
            x1="46"
            y1="53"
            x2="44"
            y2="65"
            stroke="#0a0a1f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="54"
            y1="53"
            x2="56"
            y2="65"
            stroke="#0a0a1f"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        
        {/* Indicadores de postura correcta */}
        <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Líneas de guía */}
          <line
            x1="50"
            y1="15"
            x2="50"
            y2="75"
            stroke="#00ff9d"
            strokeWidth="1"
            strokeDasharray="2,2"
            opacity="0.6"
          />
          <line
            x1="35"
            y1="50"
            x2="65"
            y2="50"
            stroke="#00eaff"
            strokeWidth="1"
            strokeDasharray="2,2"
            opacity="0.6"
          />
        </g>
        
        {/* Texto "PP" */}
        <text
          x="50"
          y="85"
          textAnchor="middle"
          fill="#00eaff"
          fontSize="12"
          fontWeight="bold"
          className="group-hover:fill-[#00ff9d] transition-colors duration-300"
        >
          PP
        </text>
      </svg>
      
      {/* Efecto de brillo al hacer hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse rounded-full pointer-events-none"></div>
    </div>
  );
} 