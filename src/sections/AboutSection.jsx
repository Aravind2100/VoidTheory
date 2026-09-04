import { Link } from 'react-router-dom';
import './AboutSection.css';
import './shared.css';
import Reveal from '../Reveal';
import LineReveal from '../LineReveal';

const bodyLines = [
  'Before something is built, there is nothing but possibility.',
  "That's the void.",
  'VoidTheory exists to explore that space — we take ideas apart, question assumptions, design solutions, and engineer systems that turn possibility into something real.',
];

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <Reveal className="about-section-inner">
        <p className="section-eyebrow">The VoidTheory Philosophy</p>

        <p className="about-section-lead">
          Every product starts in uncertainty. A thought. A problem. A
          question. An unfinished idea.
        </p>

        <LineReveal
          lines={bodyLines}
          className="about-section-body"
          staggerMs={180}
        />

        <Link to="/about" className="section-all-link">
          Learn About Us <span className="arrow">→</span>
        </Link>
      </Reveal>
    </section>
  );
}

export default AboutSection;
