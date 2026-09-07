import { useEffect, useRef } from 'react';

/**
 * macOS Scroll Parallax Hook.
 * Uses window.scrollY to continuously write 3D scroll fold & blur CSS variables (--parallax-top, --parallax-card)
 * for smooth macOS window folding animations.
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
      // Disable parallax on mobile viewports (< 768px) for native smooth touch scrolling
      if (window.innerWidth < 768) {
        el.style.setProperty('--parallax-top', '0');
        ticking = false;
        return;
      }

      const scrolled = window.scrollY || window.pageYOffset || 0;

      // Topbar & Headline: Folds & blurs smoothly over the first 350px of scroll
      const progressTop = Math.min(
        1,
        Math.max(0, scrolled / 350)
      );

      el.style.setProperty('--parallax-top', progressTop.toFixed(4));
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
