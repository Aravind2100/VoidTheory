import './Nav.css';
import logo from './assets/logo.png';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Nav() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: false
    });

    // Animate nav elements
    sr.reveal('.nav-logo', { delay: 100 });
    sr.reveal('.nav-glass ul li', { 
      delay: 200,
      interval: 100,
      origin: 'right'
    });
  }, []);

  const scrollToBenefits = (e) => {
    e.preventDefault();
    const benefitsSection = document.querySelector('.Why-Choose-Void-Theory');
    benefitsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav-glass">
      <img src={logo} alt="VoidTheory Logo" className="nav-logo" />
      <ul>
        <li><a href="#benefits" onClick={scrollToBenefits}>Benefits</a></li>
        <li><a href="https://cal.com/voidtheory/call?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="nav-button">Book a Call</a></li>
      </ul>
    </nav>
  );
}

export default Nav; 