import { useRef } from 'react';

/**
 * Wraps children in a div that tilts in 3D toward the cursor position
 * on hover, with a matching glare highlight. Desktop-only in effect
 * (touch devices never fire mousemove the same way) and a no-op under
 * reduced-motion. Pass any className/props through as usual.
 */
function TiltCard({ children, className = '', maxTilt = 8, ...rest }) {
  const ref = useRef(null);
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onMouseMove(e) {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.setProperty('--glare-x', `${px * 100}%`);
    el.style.setProperty('--glare-y', `${py * 100}%`);
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
  }

  return (
    <div
      ref={ref}
      className={`tilt-card${className ? ` ${className}` : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      <div className="tilt-card-glare" aria-hidden="true" />
      {children}
    </div>
  );
}

export default TiltCard;
