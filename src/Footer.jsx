import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './assets/logo.png';
import Reveal from './Reveal';

function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="VoidTheory" className="footer-logo" />
          <div>
            <p className="footer-name">VOIDTHEORY</p>
            <p className="footer-tagline">Exploring ideas. Engineering reality.</p>
          </div>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <a href="mailto:voidtheoryit@gmail.com">voidtheoryit@gmail.com</a>
          <div className="footer-social">
            <a href="https://twitter.com/voidtheory" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/company/voidtheory" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/voidtheory" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </Reveal>

      <div className="footer-marquee" aria-hidden="true">
        <div className="footer-marquee-track">
          <span>VOIDTHEORY&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>VOIDTHEORY&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>VOIDTHEORY&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>VOIDTHEORY&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>VOIDTHEORY&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>VOIDTHEORY&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VoidTheory.</p>
        <p className="footer-signature">Built from the void.</p>
      </div>
    </footer>
  );
}

export default Footer;
