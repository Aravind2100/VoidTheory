import { useState, useEffect } from 'react';
import './EstimateModal.css';

const PROJECT_TYPES = [
  { id: 'saas', name: 'SaaS / Web App', code: '01', estTime: '4 - 6 Weeks' },
  { id: 'mobile', name: 'Mobile App (iOS/Android)', code: '02', estTime: '6 - 8 Weeks' },
  { id: 'ai', name: 'Custom Automation & Systems', code: '03', estTime: '3 - 5 Weeks' },
  { id: 'mvp', name: 'Rapid MVP Launch', code: '04', estTime: '3 Weeks' },
  { id: 'custom', name: 'Custom Software Solution', code: '05', estTime: '6+ Weeks' },
];

const TIMELINES = [
  { id: 'asap', name: 'ASAP (< 1 month)', urgency: 'High priority slot' },
  { id: '1-2m', name: '1 - 2 Months', urgency: 'Standard onboarding' },
  { id: 'flexible', name: 'Flexible / Planning phase', urgency: 'Discovery call' },
];

const BUDGET_RANGES = [
  { id: 'mvp_tier', name: '$5k - $12k', detail: 'Rapid MVP or Focused Feature' },
  { id: 'scale_tier', name: '$12k - $25k', detail: 'Full SaaS / Product Release' },
  { id: 'enterprise_tier', name: '$25k+', detail: 'Enterprise System / Multi-platform' },
];

function EstimateModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: 'saas',
    timeline: '1-2m',
    budget: 'scale_tier',
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedTypeObj = PROJECT_TYPES.find((t) => t.id === formData.projectType) || PROJECT_TYPES[0];
  const selectedBudgetObj = BUDGET_RANGES.find((b) => b.id === formData.budget) || BUDGET_RANGES[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = `[Project Inquiry] ${selectedTypeObj.name} from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${selectedTypeObj.name}\nTarget Timeline: ${formData.timeline}\nEstimated Budget: ${selectedBudgetObj.name}\nDetails: ${formData.message || 'N/A'}`;

    window.location.href = `mailto:voidtheoryit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="estimate-modal-overlay" onClick={onClose}>
      <div className="estimate-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="estimate-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!submitted ? (
          <div className="estimate-modal-content">
            <div className="estimate-modal-header">
              <span className="estimate-badge">Project Scope & Estimator</span>
              <h2>Let&apos;s Build Your Product</h2>
              <p>Calculate your scope and get a guaranteed 24-hour proposal.</p>
              
              <div className="estimate-stepper">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. Type</div>
                <div className="step-line" />
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Scope & Budget</div>
                <div className="step-line" />
                <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3. Finalize</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="estimate-form">
              {step === 1 && (
                <div className="estimate-step-body">
                  <label className="step-label">Select Primary Deliverable</label>
                  <div className="type-grid">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        className={`type-card ${formData.projectType === type.id ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, projectType: type.id })}
                      >
                        <span className="type-code">{type.code}</span>
                        <div className="type-info">
                          <span className="type-name">{type.name}</span>
                          <span className="type-est">Est: {type.estTime}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="step-actions">
                    <button
                      type="button"
                      className="btn btn-primary step-btn"
                      onClick={() => setStep(2)}
                    >
                      Next: Scope & Budget →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="estimate-step-body">
                  <label className="step-label">Select Estimated Budget Tier</label>
                  <div className="budget-grid">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        type="button"
                        key={b.id}
                        className={`budget-card ${formData.budget === b.id ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, budget: b.id })}
                      >
                        <span className="budget-name">{b.name}</span>
                        <span className="budget-detail">{b.detail}</span>
                      </button>
                    ))}
                  </div>

                  <label className="step-label" style={{ marginTop: '1.25rem' }}>Desired Launch Timeline</label>
                  <div className="timeline-grid">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        className={`timeline-card ${formData.timeline === t.id ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, timeline: t.id })}
                      >
                        <span className="timeline-name">{t.name}</span>
                        <span className="timeline-urgency">{t.urgency}</span>
                      </button>
                    ))}
                  </div>

                  <div className="step-actions dual-actions">
                    <button
                      type="button"
                      className="btn btn-secondary step-btn"
                      onClick={() => setStep(1)}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary step-btn"
                      onClick={() => setStep(3)}
                    >
                      Next: Final Details →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="estimate-step-body">
                  <div className="summary-pill">
                    <span>Summary:</span> <strong>{selectedTypeObj.name}</strong> • <span>{selectedBudgetObj.name}</span>
                  </div>

                  <div className="input-group">
                    <label htmlFor="modal-name">Your Name *</label>
                    <input
                      id="modal-name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="modal-email">Work Email *</label>
                    <input
                      id="modal-email"
                      type="email"
                      placeholder="alex@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="modal-msg">Project Summary / Goals (Optional)</label>
                    <textarea
                      id="modal-msg"
                      rows={3}
                      placeholder="Briefly describe what you want to build or achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="step-actions dual-actions">
                    <button
                      type="button"
                      className="btn btn-secondary step-btn"
                      onClick={() => setStep(2)}
                    >
                      ← Back
                    </button>
                    <button type="submit" className="btn btn-primary step-btn">
                      Request Guaranteed Proposal →
                    </button>
                  </div>

                  <div className="or-cal">
                    <span>or prefer a quick chat right now?</span>
                    <a
                      href="https://cal.com/voidtheory/call?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cal-link"
                    >
                      Book 15-Min Strategy Call on Cal.com →
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="estimate-success">
            <div className="success-icon">✓</div>
            <h3>Inquiry Prepared!</h3>
            <p>Your mail app will open with your scope summary pre-filled.</p>
            <p className="success-sub">Didn&apos;t open? Send directly to <strong>voidtheoryit@gmail.com</strong></p>
            <div className="success-actions">
              <a
                href="https://cal.com/voidtheory/call?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book 15-Min Strategy Call Now →
              </a>
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EstimateModal;
