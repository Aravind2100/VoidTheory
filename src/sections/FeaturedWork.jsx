import { Link } from 'react-router-dom';
import './FeaturedWork.css';
import { projects } from '../data/projects';
import Reveal from '../Reveal';
import TiltCard from '../TiltCard';

function FeaturedWork() {
  const [first, ...rest] = projects;

  return (
    <section className="featured-work" id="work">
      <div className="featured-work-inner">
        <Reveal className="fw-header">
          <p className="section-eyebrow">Featured Work</p>
          <h2 className="shine-text" style={{ animationDelay: '1.2s' }}>
            We don&apos;t just talk about building.
            <br />
            We build.
          </h2>
        </Reveal>

        <div className="fw-layout">
          <Reveal className="fw-feature-wrap">
            <TiltCard className="fw-card fw-feature" maxTilt={5}>
              <div className="fw-thumb" aria-hidden="true">
                <span>Placeholder</span>
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

          <div className="fw-side-list">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={(i + 1) * 100}>
                <TiltCard className="fw-card fw-side-card" maxTilt={5}>
                  <div className="fw-side-thumb" aria-hidden="true">
                    <span>Placeholder</span>
                  </div>
                  <div className="fw-side-body">
                    <p className="fw-category">{project.category}</p>
                    <h3>{project.title}</h3>
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

        <Link to="/work" className="section-all-link">
          See All Work <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedWork;
