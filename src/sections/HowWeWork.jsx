import './HowWeWork.css';
import Reveal from '../Reveal';
import useScrollProgress from '../useScrollProgress';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      "We understand your idea, your problem, your users, your goals. You don't need to have everything figured out yet.",
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We define scope, features, timeline, technology, and architecture — so there\'s no confusion later.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'User flows, wireframes, UI design, prototypes. You see the product before it gets built.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'We develop the system, with regular updates, testing, and iterative improvements along the way.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'We deploy the product — web deployment, app publishing, server and database setup.',
  },
  {
    number: '06',
    title: 'Evolve',
    description:
      "Software doesn't stop at launch. We continue with improvements, new features, maintenance, and scaling.",
  },
];

function HowWeWork() {
  const stepsRef = useScrollProgress('--progress');

  return (
    <section className="how-we-work">
      <Reveal className="hww-header">
        <p className="section-eyebrow">How We Work</p>
        <h2 className="shine-text" style={{ animationDelay: '2.4s' }}>
          What happens after you reach out.
        </h2>
      </Reveal>

      <div className="hww-steps" ref={stepsRef}>
        <div className="hww-line-fill" aria-hidden="true" />
        {steps.map((step, i) => (
          <Reveal className="hww-step" key={step.number} delay={i * 70}>
            <span className="hww-number">{step.number}</span>
            <div className="hww-step-body">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default HowWeWork;
