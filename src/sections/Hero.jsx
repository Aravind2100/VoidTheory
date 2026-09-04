import { Link } from 'react-router-dom';
import './Hero.css';
import NodeField from './NodeField';
import useScrollParallax from '../useScrollParallax';
import ScrambleText from '../ScrambleText';

function Hero() {
  const heroRef = useScrollParallax();

  return (
    <section className="hero" ref={heroRef}>
      <NodeField />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content hero-parallax">
        <p className="hero-eyebrow hero-in" style={{ animationDelay: '0.05s' }}>
          Digital Products · Software · Technology
        </p>

        <h1 className="hero-in" style={{ animationDelay: '0.15s' }}>
          Ideas are everywhere.
          <br />
          <span className="accent-text">
            <ScrambleText text="Execution is rare." delay={550} duration={650} />
          </span>
        </h1>

        <p className="hero-desc hero-in" style={{ animationDelay: '0.3s' }}>
          VoidTheory designs and develops software, digital products,
          applications, and technology solutions for ambitious ideas and
          businesses.
        </p>

        <div className="hero-actions hero-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://cal.com/voidtheory/call?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Start a Project <span className="arrow">→</span>
          </a>
          <Link to="/work" className="btn btn-secondary">
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
