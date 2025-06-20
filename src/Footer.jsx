import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import gsap from 'gsap';
import { Power3 } from 'gsap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    // Initial state
    gsap.set('.footer-brand, .footer-links, .footer-contact', {
      y: 50,
      opacity: 0
    });

    // Animate elements
    gsap.to('.footer-brand', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Power3.out,
      delay: 0.2
    });

    gsap.to('.footer-links', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Power3.out,
      delay: 0.4,
      stagger: 0.2
    });

    gsap.to('.footer-contact', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: Power3.out,
      delay: 0.6
    });

    // Animate social links
    gsap.from('.social-links a', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: Power3.out,
      stagger: 0.1,
      delay: 0.8
    });

    // Animate footer bottom
    gsap.from('.footer-bottom', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: Power3.out,
      delay: 1
    });
  }, []);

  // Scroll to Why Choose Void Theory section
  const scrollToBenefits = (e) => {
    e.preventDefault();
    const benefitsSection = document.querySelector('.Why-Choose-Void-Theory');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h1>Void Theory</h1>
            <p>Transforming ideas into digital excellence. We create stunning, high-performance websites that drive results.</p>
            <div className="social-links">
              <a href="https://twitter.com/voidtheory" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter color="#fff" size="1.6em" />
              </a>
              <a href="https://linkedin.com/company/voidtheory" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin color="#fff" size="1.6em" />
              </a>
              <a href="https://github.com/voidtheory" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub color="#fff" size="1.6em" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>E-commerce Solutions</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <button onClick={scrollToBenefits} className="footer-benefits-link" style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, margin: 0, font: 'inherit', cursor: 'pointer', textAlign: 'left' }}>
                  Benefits of hiring us
                </button>
              </li>
              <li><a href="https://cal.com/voidtheory/call" target="_blank" rel="noopener noreferrer">Book a Call</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p>Ready to start your project?</p>
            <a href="https://cal.com/voidtheory/call" target="_blank" rel="noopener noreferrer" className="footer-cta">
              Schedule a Call
            </a>
            <p className="email">voidtheoryit@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} Void Theory. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 