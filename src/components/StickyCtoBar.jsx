import { useState, useEffect } from 'react';
import './StickyCtoBar.css';

function StickyCtoBar({ onOpenEstimator }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="sticky-cro-bar">
      <div className="sticky-cro-inner">
        {/* Metric & Live SLA Indicator */}
        <div className="sticky-cro-info">
          <span className="sticky-status-dot" />
          <div className="sticky-metric-wrap">
            <span className="sticky-metric-badge">24h SLA</span>
            <span className="sticky-text">
              <strong>Fixed Scope & Timeline</strong> • 2 Spots Open
            </span>
          </div>
        </div>

        {/* High-Converting Action Group */}
        <div className="sticky-cro-actions">
          <button className="btn btn-primary sticky-btn" onClick={() => onOpenEstimator && onOpenEstimator()}>
            <span>Book Call</span> <span className="arrow">↗</span>
          </button>
          <a
            href="https://cal.com/voidtheory/call?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary sticky-btn-secondary"
          >
            Call ↗
          </a>
          <button
            className="sticky-close"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss floating bar"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyCtoBar;
