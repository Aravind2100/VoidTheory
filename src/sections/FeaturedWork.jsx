import { Link } from 'react-router-dom';
import './FeaturedWork.css';
import { projects } from '../data/projects';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';

function FeaturedWork({ onOpenEstimator }) {
  const [first, ...rest] = projects;

  return (
    <section className="featured-work" id="work">
      <div className="featured-work-inner">
        <Reveal className="fw-header">
          <p className="section-eyebrow">Proven Case Studies</p>
          <h2 className="shine-text" style={{ animationDelay: '1.2s' }}>
            We don&apos;t just talk about building.
            <br />
            We build & deliver results.
          </h2>
        </Reveal>

        <div className="fw-layout">
          {/* Main Feature Case Study */}
          <Reveal className="fw-feature-wrap">
            <TiltCard className="fw-card fw-feature" maxTilt={4}>
              <div className="fw-thumb" aria-hidden="true">
                <div className="fw-visual-mockup nova-mockup">
                  <div className="mockup-header">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                    <span className="mockup-title">nova-system-v2.8</span>
                  </div>
                  <div className="mockup-code">
                    <span className="code-line green-text">System Status: Active • 10,420 Docs Processed</span>
                    <span className="code-line muted-text">→ Executing RAG retrieval pipeline...</span>
                    <span className="code-line cyan-text">✓ Accuracy Confidence: 99.4%</span>
                  </div>
                </div>
                {first.metric && <span className="fw-metric-badge">{first.metric}</span>}
              </div>

              <div className="fw-feature-body">
                <p className="fw-category">{first.category}</p>
                <h3>{first.title}</h3>
                <p className="fw-desc">{first.description}</p>
                <div className="fw-tags">
                  {first.tags.map((tag) => (
                    <span className="fw-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Side Case Studies */}
          <div className="fw-side-list">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={(i + 1) * 100}>
                <TiltCard className="fw-card fw-side-card" maxTilt={4}>
                  <div className="fw-side-thumb" aria-hidden="true">
                    <div className={`fw-visual-mockup side-mockup ${project.id}-mockup`}>
                      <div className="mockup-header">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                      </div>
                      <div className="mockup-preview-bar" />
                    </div>
                    {project.metric && <span className="fw-metric-badge mini">{project.metric}</span>}
                  </div>
                  <div className="fw-side-body">
                    <p className="fw-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="fw-side-desc">{project.description}</p>
                    <div className="fw-tags">
                      {project.tags.map((tag) => (
                        <span className="fw-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="fw-bottom-actions">
          <Link to="/work" className="section-all-link">
            Explore All Case Studies <span className="arrow">→</span>
          </Link>
          <button className="btn btn-primary fw-cta-btn" onClick={() => onOpenEstimator && onOpenEstimator()}>
            Build Something Similar →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
