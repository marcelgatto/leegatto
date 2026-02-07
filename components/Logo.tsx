
import React from 'react';

interface LogoProps {
  className?: string;
  /** Set to false if the logo is on a dark background where multiply blending isn't desired */
  shouldBlend?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, shouldBlend = true }) => {
  return (
    <img 
      src="https://image2url.com/r2/default/images/1770138981492-507e8814-a996-422e-99f7-5ee5a449bded.png" 
      alt="Spark Something Doula Care Logo"
      className={`${className} object-contain transition-opacity duration-500`}
      style={{ 
        mixBlendMode: shouldBlend ? 'multiply' : 'normal' 
      }}
      loading="eager"
    />
  );
};

export default Logo;
