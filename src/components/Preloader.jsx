import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Preloader({ onComplete }) {
  const [fadeState, setFadeState] = useState('entering'); // 'entering' | 'holding' | 'leaving' | 'hidden'

  useEffect(() => {
    // Hold animation then slide/fade out
    const holdTimer = setTimeout(() => {
      setFadeState('leaving');
      if (onComplete) onComplete();
    }, 1400);

    const completeTimer = setTimeout(() => {
      setFadeState('hidden');
    }, 2000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (fadeState === 'hidden') return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#11801c] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fadeState === 'leaving' ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Ambient Radial Shimmer */}
      <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        
        {/* Logo Graphic */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/20 shadow-2xl flex items-center justify-center animate-bounce-slow">
          <img src={logo} alt="Void Theory Logo" className="w-full h-full object-contain filter drop-shadow-md" />
        </div>

        {/* Brand Name Reference - Bold Display typography matching user reference */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight font-display drop-shadow-md">
            Void Theory
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-white/40" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-white/90 uppercase font-semibold">
              CREATIVE STUDIO
            </span>
            <span className="h-[1px] w-8 bg-white/40" />
          </div>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-white rounded-full animate-[loadingProgress_1.3s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
}
