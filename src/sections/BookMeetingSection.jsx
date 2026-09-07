import { useState } from 'react';
import './BookMeetingSection.css';
import Reveal from '../Reveal';

const PROJECT_TYPES = [
  'SaaS / Web Application',
  'Mobile App (iOS/Android)',
  'Custom Software & Systems',
  'Rapid MVP Launch',
  'Automation & Workflows',
];

function BookMeetingSection() {
  const [selectedType, setSelectedType] = useState('SaaS / Web Application');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = `[Project Inquiry] ${selectedType} from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${selectedType}\nDetails: ${formData.message || 'N/A'}`;

    window.location.href = `mailto:voidtheoryit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section className="book-meeting-section" id="book-meeting">
      <div className="book-meeting-glow" aria-hidden="true" />
      
      <div className="book-meeting-container">
        <Reveal className="book-meeting-header">
          <span className="book-meeting-badge">
            <span className="book-status-dot" /> Available for Q3/Q4 • 2 Spots Open
          </span>
          <h2>Ready to Build Your Product?</h2>
          <p>Book a 15-minute strategy call with our founders or submit your inquiry for a guaranteed 24-hour proposal.</p>
        </Reveal>

        <div className="book-meeting-grid">
          {/* OPTION 1: EMBEDDED LIVE CALENDAR BOOKING */}
          <Reveal className="book-card book-cal-card" delay={100}>
            <div className="book-card-header book-card-header-flex">
              <div>
                <span className="book-card-tag">Fastest Route • Live Calendar</span>
                <h3>Book 15-Min Strategy Call</h3>
                <p>Select a time below to speak directly with our engineering founders. 100% technical architecture & scope clarity.</p>
              </div>
              <a
                href="https://cal.com/voidtheory/call"
                target="_blank"
                rel="noopener noreferrer"
                className="cal-direct-link"
              >
                Open Full Window ↗
              </a>
            </div>

            <div className="book-cal-iframe-wrap">
              <iframe
                src="https://cal.com/voidtheory/call?embed=true&theme=dark"
                width="100%"
                height="620"
                frameBorder="0"
                title="Book Strategy Call on Cal.com"
                className="cal-embed-iframe"
                loading="lazy"
                allow="camera; microphone; autoplay; payment"
              />
            </div>
          </Reveal>

          {/* OPTION 2: DIRECT INQUIRY FORM */}
          <Reveal className="book-card book-form-card" delay={200}>
            <div className="book-card-header">
              <span className="book-card-tag muted">Async Route</span>
              <h3>Send Project Inquiry</h3>
              <p>Prefer email or text? Share your goals below and we will prepare a proposal overview within 24 hours.</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="book-form">
                <div className="book-input-group">
                  <label className="book-label">Select Deliverable</label>
                  <select
                    className="book-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="book-input-group">
                  <label htmlFor="bm-name" className="book-label">Your Name *</label>
                  <input
                    id="bm-name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="book-input-group">
                  <label htmlFor="bm-email" className="book-label">Work Email *</label>
                  <input
                    id="bm-email"
                    type="email"
                    placeholder="alex@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="book-input-group">
                  <label htmlFor="bm-msg" className="book-label">Project Summary / Goals (Optional)</label>
                  <textarea
                    id="bm-msg"
                    rows={3}
                    placeholder="Tell us what you want to build or achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-secondary book-submit-btn">
                  Send Inquiry & Get Proposal →
                </button>
              </form>
            ) : (
              <div className="book-form-success">
                <span className="success-check">✓</span>
                <h4>Inquiry Prepared!</h4>
                <p>Your mail app will open with your pre-filled project details.</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default BookMeetingSection;
