import './WhyVoidTheory.css';
import Reveal from '../Reveal';

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-5-5" strokeLinecap="round" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M4 5.5h16v11H9l-4 3.5v-3.5H4v-11Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 16l5.5-6 4 4L20 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 6H20v5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 3.5l7 2.5v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const reasons = [
  {
    icon: IconSearch,
    title: 'We Ask Questions First',
    description: 'Before writing code, we try to understand the problem.',
  },
  {
    icon: IconTarget,
    title: 'We Build With Purpose',
    description: 'Features exist because they solve something, not to pad a list.',
  },
  {
    icon: IconChat,
    title: 'We Communicate Clearly',
    description:
      "You'll know what's happening, what's being built, and what comes next.",
  },
  {
    icon: IconTrendUp,
    title: 'We Think Long-Term',
    description: 'Good software should be able to evolve, not just ship.',
  },
  {
    icon: IconShield,
    title: 'We Respect the Details',
    description:
      'Performance, security, design, architecture — the small things become the big things.',
  },
];

function WhyVoidTheory() {
  return (
    <section className="why-vt">
      <Reveal className="why-vt-header">
        <p className="section-eyebrow">Why VoidTheory</p>
        <h2 className="shine-text" style={{ animationDelay: '3.6s' }}>
          Not generic marketing language. Just how we work.
        </h2>
      </Reveal>

      <div className="why-vt-list">
        {reasons.map((reason, i) => (
          <Reveal className="why-vt-item" key={reason.title} delay={i * 60}>
            <div className="why-vt-icon" aria-hidden="true">
              <reason.icon />
            </div>
            <div className="why-vt-item-text">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default WhyVoidTheory;
