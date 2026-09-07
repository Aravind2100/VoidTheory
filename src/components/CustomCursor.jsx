import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Iconic Figma / Framer Pure Black Pointer Cursor */}
      <div className={`relative transition-transform duration-150 ease-out ${isClicking ? 'scale-90' : 'scale-100'}`}>
        
        {/* Exact Figma / Framer Black Selection Arrow Pointer SVG */}
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 22 22" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          <path 
            d="M2.5 2V17.5L6.8 13.2L9.5 19L12.5 17.5L9.8 11.8L15.5 11.8L2.5 2Z" 
            fill="#000000" 
            stroke="#FFFFFF" 
            strokeWidth="1.2" 
            strokeLinejoin="round" 
            strokeLinecap="round"
          />
        </svg>

        {/* Floating Figma Designer Label */}
        <div className="absolute top-4 left-4 px-2 py-0.5 rounded-full bg-[#000000] text-white text-[10px] font-mono font-bold border border-white/30 shadow-lg tracking-wider whitespace-nowrap">
          voidTheory
        </div>

      </div>
    </div>
  );
}
