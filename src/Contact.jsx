import './Contact.css';
import './sections/buttons.css';
import './sections/shared.css';
import usePageTitle from './usePageTitle';
import Nav from './Nav';
import Footer from './Footer';
import Reveal from './Reveal';
import ProjectForm from './ProjectForm';

function Contact() {
  usePageTitle('Book Strategy Call & Inquiry', {
    description: 'Book a 15-minute strategy call with VoidTheory founders or submit your custom software inquiry for a guaranteed 24-hour proposal.'
  });

  return (
    <div className="page" id="top">
      <Nav />

      <section className="contact-hero">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-content">
          <p className="section-eyebrow hero-in" style={{ animationDelay: '0.05s' }}>
            Contact
          </p>
          <h1 className="hero-in" style={{ animationDelay: '0.15s' }}>
            Let&apos;s build something.
          </h1>
          <p className="contact-desc hero-in" style={{ animationDelay: '0.25s' }}>
            Have a project, problem, or idea? Tell us about it below, or
            reach out directly.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <Reveal className="contact-form-panel">
          <h2>Start a Project</h2>
          <ProjectForm />
        </Reveal>

        <Reveal className="contact-info-panel" delay={100}>
          <div>
            <p className="contact-info-label">Email</p>
            <a href="mailto:voidtheoryit@gmail.com" className="contact-email">
              voidtheoryit@gmail.com
            </a>
          </div>

          <div>
            <p className="contact-info-label">Prefer to talk?</p>
            <a
              href="https://cal.com/voidtheory/call?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Book a Call <span className="arrow">→</span>
            </a>
          </div>

          <div>
            <p className="contact-info-label">Elsewhere</p>
            <div className="contact-social">
              <a href="https://twitter.com/voidtheory" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/company/voidtheory" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/voidtheory" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
