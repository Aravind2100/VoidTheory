import './Services.css';
import './sections/buttons.css';
import './sections/shared.css';
import usePageTitle from './usePageTitle';
import Nav from './Nav';
import Footer from './Footer';
import Reveal from './Reveal';
import { services } from './data/services';

function Services() {
  usePageTitle('Services');

  return (
    <div className="page" id="top">
      <Nav />

      <section className="services-page">
        <div className="services-page-header">
          <p className="section-eyebrow hero-in" style={{ animationDelay: '0.05s' }}>
            Services
          </p>
          <h1 className="hero-in" style={{ animationDelay: '0.15s' }}>
            What we do, in depth.
          </h1>
          <p className="services-page-desc hero-in" style={{ animationDelay: '0.25s' }}>
            Software, apps, and digital products — built to actually work.
            Here&apos;s everything we offer, and what&apos;s included.
          </p>
        </div>

        <div className="services-page-list">
          {services.map((service, i) => (
            <Reveal className="service-row" key={service.number} delay={Math.min(i, 3) * 60}>
              <div className="service-row-main">
                <span className="wwd-number">{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="wwd-tags">
                  {service.tags.map((tag) => (
                    <span className="wwd-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="service-row-examples">
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
