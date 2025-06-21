import './Home.css';
import bgImage from './assets/Untitled design.png';
import WorkBg from './assets/Work-section-bg.png';
import ServicesBg from './assets/Service-bg.png';
import WhyChooseVoidTheoryBg from './assets/Why-Choose-bg1.png';
import work1 from './assets/mightymanpower.png';
import work2 from './assets/ShopZone.png';
import work3 from './assets/WildLens.png';
import work4 from './assets/BS-Stitchers.png';
import work5 from './assets/Lustre-Co.png';
import work6 from './assets/Sri-Arjun-Silks.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import gsap from 'gsap';
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

function Home() {
  const [pixelatedIndex, setPixelatedIndex] = useState(null);

  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector('.Services-We-Offer');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize ScrollReveal for other components
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '40px',
      duration: 500,
      delay: 50,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      reset: false,
      viewFactor: 0.05,
      viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });

    // Home section animations
    sr.reveal('.home-content h1', {
      delay: 50,
      distance: '60px',
      duration: 600
    });
    sr.reveal('.home-content p', {
      delay: 100,
      distance: '40px',
      duration: 600
    });
    sr.reveal('.buttons', {
      delay: 150,
      distance: '30px',
      duration: 600
    });
    sr.reveal('.trusties', {
      delay: 200,
      distance: '20px',
      duration: 600
    });

    // Our Work section animations
    sr.reveal('.work-content h1', {
      delay: 50,
      distance: '60px',
      duration: 600
    });
    sr.reveal('.work-slider', {
      delay: 100,
      distance: '40px',
      duration: 600
    });
    sr.reveal('.work-content-heading', {
      delay: 150,
      distance: '30px',
      duration: 600
    });
    sr.reveal('.work-content-heading-desc', {
      delay: 200,
      distance: '30px',
      duration: 600
    });
    sr.reveal('.work-content-desc', {
      delay: 250,
      distance: '20px',
      duration: 600
    });

    // Common animation settings for ScrollTrigger
    const cardAnimation = {
      y: 60,
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: Power3.out
    };

    // Why Choose Void Theory cards animation with ScrollTrigger
    const whyChooseCards = document.querySelectorAll('.why-choose-void-theory-content ul li');
    whyChooseCards.forEach((card, index) => {
      gsap.set(card, cardAnimation);

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom-=100",
        end: "bottom top+=100",
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: Power3.out
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            ...cardAnimation,
            duration: 1.5
          });
        }
      });
    });

    // Service cards animation with ScrollTrigger
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      gsap.set(card, cardAnimation);

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom-=100",
        end: "bottom top+=100",
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: Power3.out
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            ...cardAnimation,
            duration: 1.5
          });
        }
      });
    });

    // Section headings animation with ScrollTrigger
    const headings = document.querySelectorAll('.why-choose-void-theory-content h1, .services-content h1');
    headings.forEach(heading => {
      gsap.set(heading, cardAnimation);

      ScrollTrigger.create({
        trigger: heading,
        start: "top bottom-=100",
        end: "bottom top+=100",
        onEnter: () => {
          gsap.to(heading, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: Power3.out
          });
        },
        onLeaveBack: () => {
          gsap.to(heading, {
            ...cardAnimation,
            duration: 1.5
          });
        }
      });
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = `${scrolled}%`;
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  const workProjects = [
    {
      id: 'mighty-man',
      title: 'Mighty Man Power Solutions',
      image: work1
    },
    {
      id: 'ShopZone',
      title: 'ShopZone',
      image: work2
    },
    {
      id: 'WildLens',
      title: 'WildLens',
      image: work3
    },
    {
      id: 'Bs Stitchers',
      title: 'Bs Stitchers',
      image: work4
    },
    {
      id: 'Lustre Co',
      title: 'Lustre Co',
      image: work5
    },
    {
      id: 'Sri Arjun silks',
      title: 'Sri Arjun silks',
      image: work6
    }
  ];

  return (
    <>
      <head>
        <title>voidTheory - Creative Web Development & Design Studio</title>
        <meta name="description" content="voidTheory is a creative web development and design studio specializing in modern, responsive websites and digital solutions. We create beautiful, functional websites that help businesses grow." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voidtheory.online/" />
        <meta property="og:title" content="voidTheory - Creative Web Development & Design Studio" />
        <meta property="og:description" content="voidTheory is a creative web development and design studio specializing in modern, responsive websites and digital solutions. We create beautiful, functional websites that help businesses grow." />
        <meta property="og:image" content="https://voidtheory.online/src/assets/logo.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://voidtheory.online/" />
        <meta property="twitter:title" content="voidTheory - Creative Web Development & Design Studio" />
        <meta property="twitter:description" content="voidTheory is a creative web development and design studio specializing in modern, responsive websites and digital solutions. We create beautiful, functional websites that help businesses grow." />
        <meta property="twitter:image" content="https://voidtheory.online/src/assets/logo.png" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://voidtheory.online/" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "voidTheory",
            "url": "https://voidtheory.online",
            "description": "Creative Web Development & Design Studio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://voidtheory.online/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </head>
      <div className="Home-Body">
        <div className="home-bg" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className='home-content'>
            <h1>We build websites that turn<br />
              visitors into paying customers.</h1>
            <p className="home-desc-mobile">
              voidTheory builds websites that convert.<br />
              Smart copy. Seamless code.<br />
              Growth by design.
            </p>

            <p className="home-desc-desktop">
              At voidTheory, we build high-converting websites with smart copy and seamless development—<br />
              turning visitors into loyal customers.
              Driven by strategy. Designed for growth.
            </p>

            <div className="buttons">
              <a href="https://cal.com/voidtheory/call?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-built">Get your website built</a>
              <button className="btn-plan" onClick={scrollToServices}>Services We Offer</button>
            </div>

            <div className="trusties">
              <p>Trusted by 20+ Businesses</p>
            </div>
          </div>
        </div>

        <div className="Our-Work" style={{ backgroundImage: `url(${WorkBg})` }}>
          <div className="work-content">
            <h1>Our Work</h1>
            <Slider {...sliderSettings} className="work-slider">
              {workProjects.map((project) => (
                <div className="work-card" key={project.id}>
                  <Link to={`/work/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={project.image} alt={project.title} />
                    <p>{project.title}</p>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className="Our-Work-Footer">
              <h2 className="work-content-heading">Ready to Elevate Your Online Presence?</h2>
              <p className="work-content-heading-desc">We're here to make it happen.</p>
              <p className="work-content-desc">Whether you're launching something new or leveling up your existing site—we're here to make it happen.</p>
              <a href="https://cal.com/voidtheory/call?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-built">Get your website built</a>
            </div>
        </div>

        <div className="Why-Choose-Void-Theory" style={{ backgroundImage: `url(${WhyChooseVoidTheoryBg})` }}>
          <div className="why-choose-void-theory-content">
            <h1>Why Choose Void Theory?</h1>
            <ul>
              <li>
                <h3>Conversion-Focused Design</h3>
                <p>Every page is structured to guide your visitors to take action—whether it's buying, booking, or subscribing.</p>
              </li>
              <li>
                <h3>SEO & Speed Optimized</h3>
                <p>Fast-loading, search-engine-friendly websites that rank higher and perform better.</p>
              </li>
              <li>
                <h3>Custom-Built for Your Brand</h3>
                <p>No templates. No shortcuts. 100% tailored design and development that reflects your unique business identity.</p>
              </li>
              <li>
                <h3>Mobile-First, Always</h3>
                <p>Your customers are on mobile—we make sure your website shines on every screen size.</p>
              </li>
            </ul>
            <p className="why-choose-void-theory-content-desc">We don't just build websites—we build digital growth engines.</p>
          </div>
        </div>

        <div className="Services-We-Offer" style={{ backgroundImage: `url(${ServicesBg})` }}>
          <div className="services-content">
            <h1>Services We Offer</h1>
            <div className="services-grid">
              <div className="service-card">
                <h3>Custom Website Design</h3>
                <p>Unique, brand-focused designs that convert visitors into customers.</p>
              </div>
              <div className="service-card">
                <h3>Full Stack Development</h3>
                <p>Modern tech stack: React, Next.js, Node.js for scalable solutions.</p>
              </div>
              <div className="service-card">
                <h3>E-Commerce & Shopify</h3>
                <p>Powerful online stores with seamless shopping experiences.</p>
              </div>
              <div className="service-card">
                <h3>Landing Pages</h3>
                <p>High-converting pages optimized for maximum engagement.</p>
              </div>
              <div className="service-card">
                <h3>Website Redesign</h3>
                <p>Transform your site into a high-performing digital asset.</p>
              </div>
              <div className="service-card">
                <h3>SEO & Analytics</h3>
                <p>Data-driven optimization for better visibility and performance.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home; 