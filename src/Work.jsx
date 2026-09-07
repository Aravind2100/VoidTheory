import './Work.css';
import './sections/buttons.css';
import './sections/shared.css';
import usePageTitle from './usePageTitle';
import Nav from './Nav';
import Footer from './Footer';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { projects } from './data/projects';

function Work() {
  usePageTitle('Case Studies & Software Engineering Portfolio', {
    description: 'Explore proven case studies and software engineering portfolio shipped by VoidTheory — enterprise SaaS platforms, mobile telemetry apps, and real-time cloud data systems.'
  });

  return (
    <div className="page" id="top">
      <Nav />

      <section className="work-page">
        <div className="work-page-header">
          <p className="section-eyebrow hero-in" style={{ animationDelay: '0.05s' }}>
            Work
          </p>
          <h1 className="hero-in" style={{ animationDelay: '0.15s' }}>
            We don&apos;t just talk about building.
            <br />
            We build.
          </h1>
          <p className="work-page-desc hero-in" style={{ animationDelay: '0.25s' }}>
            A look at what we&apos;ve shipped — real projects, real
            technologies, real problems solved.
          </p>
        </div>

        <div className="work-page-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <TiltCard className="fw-card">
                <div className="fw-thumb" aria-hidden="true">
                  <span>Placeholder</span>
                </div>
                <p className="fw-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="fw-desc">{project.description}</p>
                <div className="fw-tags">
                  {project.tags.map((tag) => (
                    <span className="fw-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Work;
