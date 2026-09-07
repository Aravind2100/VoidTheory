import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

/**
 * RotaryScrollContainer
 * 
 * 3D drum-wheel rotation between full-page sections.
 * - Sections rotate on the X-axis (vertical drum)
 * - Small translateZ keeps faces at correct scale with no distortion
 * - Spring physics for weighted, premium feel
 * - Always starts at index 0 (Hero section)
 */
export default function RotaryScrollContainer({ children, ready }) {
  const sections = React.Children.toArray(children);
  const total = sections.length;

  // Always start at hero (index 0)
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const drumAngle = useMotionValue(0);
  const springAngle = useSpring(drumAngle, {
    stiffness: 100,
    damping: 24,
    mass: 1.0,
  });

  const wheelAccum = useRef(0);
  const wheelTimer = useRef(null);
  const lastScrollTime = useRef(0);

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    if (clamped === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(clamped);
    animate(drumAngle, clamped * -90, {
      type: 'spring',
      stiffness: 100,
      damping: 24,
      mass: 1.0,
      onComplete: () => setIsAnimating(false),
    });
  }, [activeIndex, total, drumAngle]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (isAnimating && (now - lastScrollTime.current) < 700) return;
      wheelAccum.current += e.deltaY;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        const dir = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;
        lastScrollTime.current = Date.now();
        goTo(activeIndex + dir);
      }, 80);
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 40) goTo(activeIndex + (delta > 0 ? 1 : -1));
    };
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(activeIndex + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(activeIndex - 1);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(wheelTimer.current);
    };
  }, [activeIndex, isAnimating, goTo]);

  // Drum geometry:
  // perspective: 2400px (very deep — minimal scale distortion at 90px translateZ)
  // translateZ: 90px (subtle depth cue only — faces stay at ~96% of normal scale)
  const PERSPECTIVE = 2400;
  const TRANSLATE_Z = 90;

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        perspective: `${PERSPECTIVE}px`,
        perspectiveOrigin: '50% 50%',
      }}
    >
      {/* The rotating drum */}
      <motion.div
        style={{
          rotateX: springAngle,
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {sections.map((section, i) => {
          const faceAngle = i * 90;
          const isActive = i === activeIndex;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100vh',
                transform: `rotateX(${faceAngle}deg) translateZ(${TRANSLATE_Z}px)`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                overflow: 'hidden',
              }}
            >
              {/* Scrollable content wrapper (only active face scrolls) */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  overflowY: isActive ? 'auto' : 'hidden',
                  overflowX: 'hidden',
                }}
              >
                {section}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Navigation Dots — right side, golden ratio gap */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-[13px]">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Section ${i + 1}`}
          >
            <motion.div
              animate={{
                scale: i === activeIndex ? 1.2 : 0.7,
                opacity: i === activeIndex ? 1 : 0.4,
                backgroundColor: i === activeIndex ? '#000000' : 'transparent',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="w-2.5 h-2.5 rounded-full border-2 border-black"
            />
          </button>
        ))}
      </div>

      {/* Scroll hint on face 0 */}
      {activeIndex === 0 && ready && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 text-black/60 font-mono text-[10px] uppercase tracking-widest pointer-events-none"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, type: 'spring', stiffness: 160, damping: 18 }}
        >
          <motion.div
            className="w-px h-8 bg-black/40"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>Scroll</span>
        </motion.div>
      )}
    </div>
  );
}
