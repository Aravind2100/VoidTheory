import { useEffect, useRef } from 'react';

/**
 * Tracks how far the viewport has scrolled through the given element,
 * from 0 (element top just entering the bottom of the viewport) to 1
 * (element bottom has passed the top of the viewport), and writes it
 * to a CSS custom property on the element. Useful for scroll-linked
 * progress indicators (e.g. a timeline line that fills as you scroll).
 * No-op under reduced-motion, in which case the property stays at 1
 * (fully filled) so the UI doesn't look broken/empty.
 */
function useScrollProgress(varName = '--progress') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) {
      el.style.setProperty(varName, '1');
      return undefined;
    }

    let ticking = false;

    function update() {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress from when the element's top reaches the viewport's
      // bottom (0) to when its bottom reaches the viewport's top (1).
      const total = rect.height + vh;
      const scrolled = vh - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      el.style.setProperty(varName, progress.toFixed(4));
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
  }, [varName]);

  return ref;
}

export default useScrollProgress;
