import './About.css';
import './sections/buttons.css';
import './sections/shared.css';
import usePageTitle from './usePageTitle';
import Nav from './Nav';
import Footer from './Footer';
import Reveal from './Reveal';

const audiences = [
  {
    title: 'Startups',
    description: 'You have an idea. We help turn it into an MVP.',
  },
  {
    title: 'Businesses',
    description: 'You have a process. We help improve it with software.',
  },
  {
    title: 'Product Teams',
    description: 'You need technical development support. We become part of the build.',
  },
  {
    title: 'Innovators',
    description: "You have an unusual idea. We help figure out whether it can become real.",
  },
];

function About() {
  usePageTitle('About Our Creative Technology Studio', {
    description: 'Learn about VoidTheory — an avant-garde software & design studio engineering custom digital products with fixed scope, zero fluff, and direct technical leadership.'
  });

  return (
    <div className="page" id="top">
      <Nav />

      <section className="about-page-hero">
        <div className="about-glow" aria-hidden="true" />
        <div className="about-page-content">
          <p className="section-eyebrow hero-in" style={{ animationDelay: '0.05s' }}>
            The VoidTheory Philosophy
          </p>
          <h1 className="hero-in" style={{ animationDelay: '0.15s' }}>
            From an idea in the void
            <br />
            to something real.
          </h1>
          <p className="about-page-lead hero-in" style={{ animationDelay: '0.25s' }}>
            Every product starts in uncertainty. A thought. A problem. A
            question. An unfinished idea.
          </p>
          <p className="about-page-body hero-in" style={{ animationDelay: '0.35s' }}>
            Before something is built, there is nothing but possibility.
            That&apos;s the void. VoidTheory exists to explore that space —
            we take ideas apart, question assumptions, design solutions, and
            engineer systems that turn possibility into something real.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <Reveal className="about-mission-inner">
          <p className="section-eyebrow">Mission</p>
          <h2>We turn ambitious ideas into working digital products.</h2>
          <p>
            VoidTheory is a creative technology and software studio. We work
            across design, software engineering, mobile development, web
            applications, automation, and emerging technologies — from an
            early concept to a deployed product.
          </p>
        </Reveal>
      </section>

      <section className="about-who">
        <Reveal>
          <p className="section-eyebrow">Who We Work With</p>
          <h2>You don&apos;t need to fit one mold.</h2>
        </Reveal>

        <div className="about-who-grid">
          {audiences.map((a, i) => (
            <Reveal className="about-who-card" key={a.title} delay={i * 70}>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <Reveal>
          <h2>Have something in mind?</h2>
          <a
            href="https://cal.com/voidtheory/call?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Start a Project <span className="arrow">→</span>
          </a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

export default About;
