import { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________';

/**
 * Renders text that scrambles through random glyphs before resolving
 * to the real characters, left to right — a "decrypting" effect for
 * headline reveals. Runs once on mount (delay-able), skipped entirely
 * under reduced-motion (renders the plain text immediately).
 */
function ScrambleText({ text, delay = 0, duration = 700, className = '' }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) {
      setDisplay(text);
      return undefined;
    }

    let start;
    let timeoutId;

    function tick(now) {
      if (start === undefined) start = now;
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const resolvedCount = Math.floor(progress * text.length);

      let next = '';
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
          next += ' ';
        } else if (i < resolvedCount) {
          next += char;
        } else {
          next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(next);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    }

    setDisplay(text.replace(/[^\s]/g, ' '));
    timeoutId = setTimeout(() => {
      frameRef.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, duration]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}

export default ScrambleText;
