import { useState, useEffect } from 'react';
import './Hero.css';
import BlurText from '../components/BlurText';
import useScrollParallax from '../useScrollParallax';

const CONCEPTS = [
  { id: 'saas', name: 'SaaS / Web Platform', time: '4 - 6 Wks', badge: 'Scalable System' },
  { id: 'mobile', name: 'Mobile Application', time: '6 - 8 Wks', badge: 'iOS & Android' },
  { id: 'custom', name: 'Custom Software', time: '4 - 8 Wks', badge: 'Enterprise Architecture' },
  { id: 'mvp', name: 'Rapid MVP Launch', time: '3 - 4 Wks', badge: '30-Day Sprint' },
];

function Hero({ onOpenEstimator }) {
  const heroRef = useScrollParallax();
  const [selectedConcept, setSelectedConcept] = useState('saas');
  const [seqState, setSeqState] = useState(0);

  useEffect(() => {
    // Top-to-Bottom step-by-step sequential sequence
    const t1 = setTimeout(() => setSeqState(1), 50);   // Step 1: Top Bar
    const t2 = setTimeout(() => setSeqState(2), 300);  // Step 2: Headline
    const t3 = setTimeout(() => setSeqState(3), 1100); // Step 3: Body & Guarantees
    const t4 = setTimeout(() => setSeqState(4), 1600); // Step 4: Inverted Card

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const active = CONCEPTS.find((c) => c.id === selectedConcept) || CONCEPTS[0];

  return (
    <section className="hero-z" ref={heroRef}>
      <div className="hero-z-container">
        
        {/* STEP 1: TOP ROW (Z-Start -> Z-Top Right) */}
        <div className={`hero-z-topbar seq-item ${seqState >= 1 ? 'seq-active' : ''}`}>
          <div className="z-top-left">
            <span className="brand-tag">VOIDTHEORY // CREATIVE TECHNOLOGY STUDIO</span>
          </div>

          <div className="z-top-right">
            <div 
              className="z-status-pill"
              onClick={() => onOpenEstimator && onOpenEstimator()}
              role="button"
              tabIndex={0}
            >
              <span className="z-status-dot" />
              <span>Available for Q3/Q4 • 2 Spots Open</span>
              <span className="z-status-arrow">→</span>
            </div>
          </div>
        </div>

        {/* STEP 2 & 3: MIDDLE DIAGONAL (Top-to-Bottom Sequence) */}
        <div className="hero-z-main">
          <div className={`hero-z-headline-group seq-item ${seqState >= 2 ? 'seq-active' : ''}`}>
            <BlurText 
              text="High-Stakes Digital Products & Technology" 
              delay={100} 
              startDelay={300}
              className="hero-z-eyebrow"
            />

            <h1 className="hero-z-title">
              <BlurText 
                text="Ideas are everywhere." 
                delay={180} 
                startDelay={550}
                className="hero-title-part1"
              />
              <br />
              <BlurText 
                text="Execution is rare." 
                delay={200} 
                startDelay={950}
                className="hero-z-accent"
              />
            </h1>
          </div>

          <div className={`hero-z-body-group seq-item ${seqState >= 3 ? 'seq-active' : ''}`}>
            <p className="hero-z-desc">
              We partner with ambitious founders and businesses to engineer high-performance web applications, mobile products, and custom software architectures. Fixed scope pricing with a 24-hour proposal SLA.
            </p>

            <div className="hero-z-guarantees">
              <span className="z-guarantee-tag">
                <span className="check-icon">✓</span> 24h Guaranteed Proposal
              </span>
              <span className="z-guarantee-tag">
                <span className="check-icon">✓</span> Fixed Scope & Timeline
              </span>
              <span className="z-guarantee-tag">
                <span className="check-icon">✓</span> 100% IP Ownership
              </span>
            </div>
          </div>
        </div>

        {/* STEP 4: BOTTOM ANCHOR (Inverted Focal Card Top-to-Bottom Step) */}
        <div className={`hero-z-inverted-wrap seq-item ${seqState >= 4 ? 'seq-active' : ''}`}>
          <div className="inverted-color-card">

            <div className="inverted-card-header">
              <div className="inverted-header-info">
                <span className="inverted-badge">Direct Founder Access</span>
                <BlurText 
                  text="What are you building?" 
                  delay={160} 
                  startDelay={1700}
                  as="h3" 
                  className="inverted-title"
                />
              </div>
              <div className="inverted-time-badge">
                <span>Est. Launch:</span> <strong>{active.time}</strong>
              </div>
            </div>

            <div className="inverted-selector-grid">
              {CONCEPTS.map((c) => (
                <button
                  key={c.id}
                  className={`inverted-selector-btn ${selectedConcept === c.id ? 'active' : ''}`}
                  onClick={() => setSelectedConcept(c.id)}
                >
                  <div className="btn-concept-header">
                    <span className="btn-concept-name">{c.name}</span>
                    {selectedConcept === c.id && <span className="btn-active-dot" />}
                  </div>
                  <span className="btn-concept-badge">{c.badge}</span>
                </button>
              ))}
            </div>

            <div className="inverted-card-actions">
              <button className="inverted-cta-btn" onClick={() => onOpenEstimator && onOpenEstimator(active.id)}>
                Book Strategy Call for {active.name} ↗
              </button>

              <a
                href="https://cal.com/voidtheory/call?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inverted-secondary-btn"
              >
                Or Open Cal.com Calendar ↗
              </a>
            </div>

            <div className="inverted-metrics-row">
              <div className="inv-metric">
                <strong>7+</strong> <span>Products Built</span>
              </div>
              <div className="inv-sep">•</div>
              <div className="inv-metric">
                <strong>99.8%</strong> <span>On-Time SLA</span>
              </div>
              <div className="inv-sep">•</div>
              <div className="inv-metric">
                <strong>4.9/5★</strong> <span>Client Rating</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
