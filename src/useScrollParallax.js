import { useEffect, useRef } from 'react';

/**
 * Tracks how far the given element has scrolled past the top of the
 * viewport (0 = element top at viewport top, 1 = element fully
 * scrolled past), and writes it to --parallax on the element via a
 * rAF loop tied to scroll events. A no-op under reduced-motion —
 * --parallax simply stays at its CSS default (0), so parallax-driven
 * rules should keep motion optional there anyway.
 */
function useScrollParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return undefined;

    let ticking = false;

    function update() {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / (rect.height || 1))
      );
      el.style.setProperty('--parallax', progress.toFixed(4));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}

export default useScrollParallax;
