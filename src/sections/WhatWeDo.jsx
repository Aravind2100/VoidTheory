import { Link } from 'react-router-dom';
import './WhatWeDo.css';
import { services as capabilities } from '../data/services';
import Reveal from '../Reveal';

function WhatWeDo() {
  return (
    <section className="what-we-do" id="services">
      <Reveal className="wwd-header">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="shine-text" style={{ animationDelay: '0s' }}>
          Software, apps, and digital products —
          <br />
          built to actually work.
        </h2>
      </Reveal>

      <div className="wwd-grid">
        {capabilities.map((cap, i) => (
          <Reveal className="wwd-card" key={cap.number} delay={i * 60}>
            <span className="wwd-number">{cap.number}</span>
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <div className="wwd-tags">
              {cap.tags.map((tag) => (
                <span className="wwd-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Link to="/services" className="section-all-link">
        See All Services <span className="arrow">→</span>
      </Link>
    </section>
  );
}

export default WhatWeDo;
