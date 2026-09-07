import './StartProject.css';
import Reveal from '../Reveal';

function StartProject() {
  return (
    <section className="start-project">
      <div className="start-project-glow" aria-hidden="true" />
      <Reveal className="start-project-content">
        <h2>Have something in mind?</h2>
        <p>
          Whether you have a clear plan or just an idea, let&apos;s talk
          about what it could become.
        </p>
        <a
          href="https://cal.com/voidtheory/call?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Start a Conversation <span className="arrow">→</span>
        </a>
      </Reveal>
    </section>
  );
}

export default StartProject;
