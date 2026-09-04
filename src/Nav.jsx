import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import logo from './assets/logo.png';

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="VoidTheory" className="nav-logo" />
          <span>VOIDTHEORY</span>
        </Link>

        <nav className="nav-links">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={pathname === link.to ? 'nav-link-active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://cal.com/voidtheory/call?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Start a Project <span className="arrow">→</span>
        </a>

        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        {links.map((link) => (
          <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a
          href="https://cal.com/voidtheory/call?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Start a Project →
        </a>
      </div>
    </header>
  );
}

export default Nav;
