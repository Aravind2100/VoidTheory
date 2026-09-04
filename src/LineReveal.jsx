import { useEffect, useRef, useState } from 'react';
import './LineReveal.css';

/**
 * Splits children text into sentence-sized lines and reveals each one
 * individually as it scrolls into view, staggered — so a paragraph
 * reads as a paced cascade instead of appearing all at once. Pass an
 * array of strings directly for full control over the split points.
 */
function LineReveal({ lines, className = '', staggerMs = 120 }) {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setVisibleCount(lines.length);
      return undefined;
    }

    const node = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        lines.forEach((_, i) => {
          setTimeout(() => {
            setVisibleCount((c) => Math.max(c, i + 1));
          }, i * staggerMs);
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
    );

    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [lines, staggerMs]);

  return (
    <div ref={containerRef} className={`line-reveal${className ? ` ${className}` : ''}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`line-reveal-line${i < visibleCount ? ' line-reveal-visible' : ''}`}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

export default LineReveal;
