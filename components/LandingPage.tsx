
import React from 'react';
import Sparkles from './Sparkles';
import Logo from './Logo';
import { COLORS } from '../constants';

interface LandingPageProps {
  onNavigate: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const sparkGradient = `linear-gradient(90deg, ${COLORS.pink}, ${COLORS.olive}, ${COLORS.orange})`;

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: COLORS.background }}>
      {/* 3D Animated Sparkles orbiting the central logo */}
      <Sparkles />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-screen-xl">
        {/* Scaled logo with floating effect */}
        <div className="w-[70vw] h-[70vw] max-w-[450px] max-h-[450px] relative flex items-center justify-center float-animation">
          {/* Subtle warm glow */}
          <div 
            className="absolute inset-0 rounded-full blur-[80px] opacity-20 scale-125 pointer-events-none"
            style={{ 
              background: `radial-gradient(circle, ${COLORS.teal} 0%, ${COLORS.pink} 40%, ${COLORS.orange} 100%)` 
            }}
          ></div>
          <Logo className="w-full h-full relative z-10" />
        </div>

        {/* Action Button - Lowercase as requested, minimalist style */}
        <div className="mt-8 md:mt-12 group">
          <button
            onClick={onNavigate}
            className="transition-all duration-700 transform hover:scale-105 active:scale-95"
          >
            <span 
              className="playful text-6xl md:text-8xl block"
              style={{ 
                background: sparkGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
                lineHeight: '1.2',
                paddingBottom: '0.1em'
              }}
            >
              spark something
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
