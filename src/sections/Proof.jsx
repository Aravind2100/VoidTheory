import { useEffect, useRef, useState } from 'react';
import './Proof.css';
import Reveal from '../Reveal';

const stats = [
  { value: 7, suffix: '', label: 'Projects Built' },
  { value: 5, suffix: '+', label: 'Technologies' },
  { value: 3, suffix: '+', label: 'Industries' },
  { value: null, display: '∞', label: 'Ideas Waiting' },
];

function CountUp({ to, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return undefined;
    }

    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * to));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function Proof() {
  return (
    <section className="proof">
      <div className="proof-inner">
        <Reveal className="proof-header">
          <p className="section-eyebrow">By the Numbers</p>
          <h2>Real work, honestly counted.</h2>
        </Reveal>

        <div className="proof-grid">
          {stats.map((stat, i) => (
            <Reveal
              className={`proof-stat${stat.value === null ? ' proof-stat-infinite' : ''}`}
              key={stat.label}
              delay={i * 80}
            >
              <span className="proof-value">
                {stat.value === null ? (
                  stat.display
                ) : (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                )}
              </span>
              <span className="proof-label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proof;
