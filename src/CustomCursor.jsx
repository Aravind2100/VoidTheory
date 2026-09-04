import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/**
 * A small dot that follows the cursor with slight lag, growing into a
 * ring around interactive elements (links, buttons). Desktop-only
 * (fine pointer + hover-capable) and disabled under reduced-motion —
 * on touch/coarse-pointer devices this renders nothing and the
 * system cursor is left alone.
 */
function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    setEnabled(canHover && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const dot = dotRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let frameId;

    function onMove(e) {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target;
      const interactive = target.closest(
        'a, button, .fw-card, .wwd-card, .about-who-card'
      );
      setHovering(Boolean(interactive));
    }

    function tick() {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      if (dot) dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frameId = requestAnimationFrame(tick);
    }

    document.body.classList.add('custom-cursor-active');
    window.addEventListener('mousemove', onMove);
    tick();

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`custom-cursor${hovering ? ' custom-cursor-hover' : ''}`}
      aria-hidden="true"
    />
  );
}

export default CustomCursor;
