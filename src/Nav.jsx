import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import logo from './assets/logo.png';

function Nav({ onOpenEstimator }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Trigger logo-to-full-nav expansion on page load
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 180);

    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { label: 'Work', to: '/work' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className={`nav-floating-wrap${scrolled ? ' is-scrolled' : ''}`}>
      <div className={`nav-pill ${expanded ? 'is-expanded' : 'is-collapsed'}`}>
        
        {/* BRAND LOGO AREA */}
        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="VoidTheory — Creative Technology & Custom Software Studio Logo" className="nav-logo" />
          <span className="brand-name-text">VOIDTHEORY</span>
        </Link>

        {/* NAVIGATION LINKS (Reveals during expansion) */}
        <nav className="nav-links-wrap">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`nav-link-item ${pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* PRIMARY CTA */}
        <div className="nav-cta-wrap">
          <button
            className="nav-cta-btn"
            onClick={() => {
              if (onOpenEstimator) onOpenEstimator();
              else window.open('https://cal.com/voidtheory/call?overlayCalendar=true', '_blank');
            }}
          >
            Start a Project <span className="arrow">→</span>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className={`nav-toggle-btn${open ? ' is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`nav-mobile-overlay${open ? ' is-open' : ''}`}>
        <div className="nav-mobile-links">
          {links.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <button
            className="nav-mobile-cta-btn"
            onClick={() => {
              setOpen(false);
              if (onOpenEstimator) onOpenEstimator();
              else window.open('https://cal.com/voidtheory/call?overlayCalendar=true', '_blank');
            }}
          >
            Start a Project →
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
