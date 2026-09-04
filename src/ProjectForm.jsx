import { useState } from 'react';
import './ProjectForm.css';

const PROJECT_TYPES = [
  'Website',
  'Web Application',
  'Mobile App',
  'Custom Software',
  'AI / Automation',
  'MVP',
  'Something Else',
];

const STAGES = [
  'Just an idea',
  'Planning',
  'Design ready',
  'Development started',
  'Existing product',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Project inquiry form. No backend yet — submits via a mailto: link
 * (opens the visitor's email client with the fields pre-filled) so
 * the site works with zero setup. Swap handleSubmit for a real POST
 * once a backend/form service is wired up; the field state and
 * validation stay the same.
 */
function ProjectForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    stage: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: null }));
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Required';
    if (!values.email.trim()) next.email = 'Required';
    else if (!EMAIL_RE.test(values.email)) next.email = 'Enter a valid email';
    if (!values.message.trim()) next.message = 'Tell us a bit about the project';
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Project inquiry from ${values.name}`;
    const bodyLines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company && `Company: ${values.company}`,
      values.projectType && `Project type: ${values.projectType}`,
      values.stage && `Stage: ${values.stage}`,
      '',
      values.message,
    ].filter(Boolean);

    const mailto = `mailto:voidtheoryit@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="project-form-sent">
        <h3>Your email client should be open.</h3>
        <p>
          Didn&apos;t open?{' '}
          <a href="mailto:voidtheoryit@gmail.com">
            Email us directly at voidtheoryit@gmail.com
          </a>
          .
        </p>
        <button type="button" className="project-form-reset" onClick={() => setSent(false)}>
          ← Back to form
        </button>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>
      <div className="project-form-row">
        <div className="project-form-field">
          <label htmlFor="pf-name">Name</label>
          <input
            id="pf-name"
            type="text"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="project-form-error">{errors.name}</span>}
        </div>

        <div className="project-form-field">
          <label htmlFor="pf-email">Email</label>
          <input
            id="pf-email"
            type="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="project-form-error">{errors.email}</span>}
        </div>
      </div>

      <div className="project-form-field">
        <label htmlFor="pf-company">Company (optional)</label>
        <input
          id="pf-company"
          type="text"
          value={values.company}
          onChange={(e) => update('company', e.target.value)}
        />
      </div>

      <div className="project-form-row">
        <div className="project-form-field">
          <label htmlFor="pf-type">What do you need?</label>
          <select
            id="pf-type"
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
          >
            <option value="">Select one</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="project-form-field">
          <label htmlFor="pf-stage">What stage is it at?</label>
          <select
            id="pf-stage"
            value={values.stage}
            onChange={(e) => update('stage', e.target.value)}
          >
            <option value="">Select one</option>
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="project-form-field">
        <label htmlFor="pf-message">Tell us what you&apos;re trying to build</label>
        <textarea
          id="pf-message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="project-form-error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary project-form-submit">
        Send Inquiry <span className="arrow">→</span>
      </button>

      <p className="project-form-note">
        Opens your email client with these details filled in — nothing is
        sent from this page directly.
      </p>
    </form>
  );
}

export default ProjectForm;
