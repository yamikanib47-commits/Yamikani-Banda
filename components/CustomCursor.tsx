import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CustomCursor: React.FC = () => {
  // Instant values for the inner dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  
  // Spring values for the trailing outer ring
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringXSpring = useSpring(ringX, springConfig);
  const ringYSpring = useSpring(ringY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      // Dot is 6px (w-1.5), so offset by 3px
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
      // Ring is 32px (w-8), so offset by 16px
      ringX.set(e.clientX - 16);
      ringY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, dotX, dotY, ringX, ringY]);

  return (
    <>
      <style>
        {`
          @media (pointer: fine) {
            body, a, button, input, textarea, select {
              cursor: none !important;
            }
          }
        `}
      </style>
      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[10000] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)', 
          borderColor: 'rgba(255,255,255,1)'
        }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 }, opacity: { duration: 0.2 } }}
      />
      
      {/* Instant Inner Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10001] hidden md:block mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible && !isHovering ? 1 : 0,
          scale: isHovering ? 0 : 1
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      />
    </>
  );
};

export default CustomCursor;
