import { useEffect, useRef, useState } from 'react';

/**
 * Wraps children in a div that fades/slides in once it scrolls into
 * view. Falls back to always-visible if IntersectionObserver is
 * unavailable or the user prefers reduced motion.
 *
 * Usage: <Reveal>...</Reveal>, optionally with delay (ms) and className.
 */
function Reveal({ children, delay = 0, className = '', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' reveal-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Reveal;
