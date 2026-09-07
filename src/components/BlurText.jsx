import { useEffect, useState } from 'react';
import './BlurText.css';

/**
 * ReactBits-inspired BlurText component.
 * Splits text into individual words or characters, applying a staggered
 * blur-in entrance animation on load.
 */
function BlurText({
  text = '',
  delay = 100,
  startDelay = 0,
  className = '',
  animateBy = 'words', // 'words' | 'letters'
  as: Component = 'span',
  onAnimationComplete,
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 80 + startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <Component className={`reactbits-blur-container ${className}`}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`reactbits-blur-item ${animated ? 'is-visible' : ''}`}
          style={{
            transitionDelay: `${i * delay}ms`,
          }}
          onTransitionEnd={() => {
            if (i === items.length - 1 && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          {item === ' ' ? '\u00A0' : item}
          {animateBy === 'words' && i < items.length - 1 && '\u00A0'}
        </span>
      ))}
    </Component>
  );
}

export default BlurText;
