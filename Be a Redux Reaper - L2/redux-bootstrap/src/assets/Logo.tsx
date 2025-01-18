import React from 'react';

interface LogoProps {
  size?: number; // Optional size in pixels (width and height will be the same)
  color?: string; // Optional color for the logo
}

const Logo: React.FC<LogoProps> = ({ size = 30, color = "#000" }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill={color}
        role="img"
        aria-label="Logo"
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none" />
        <path
          d="M35 65 L50 35 L65 65 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;
