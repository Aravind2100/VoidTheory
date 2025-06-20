import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './WorkDetails.css';
import Footer from './Footer';
import work1 from './Design/Mightymanpower.png';
import work2 from './Design/ShopZone.png';
import work3 from './Design/WildLens.png';
import work4 from './Design/BS-Stitchers.png';
import work5 from './Design/Lustre-Co.png';
import ScrollReveal from 'scrollreveal';

const WorkDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: false
    });

    // Animate elements
    sr.reveal('.work-details-header', { delay: 100 });
    sr.reveal('.work-details-image', { delay: 200 });
    sr.reveal('.work-details-info h2', { delay: 300 });
    sr.reveal('.work-details-info p', { delay: 400 });
    sr.reveal('.work-details-technologies', { delay: 500 });
    sr.reveal('.work-details-features', { delay: 600 });
  }, []);

  const workDetails = {
    'mighty-man': {
      title: 'Mighty Man Power Solutions',
      description: 'A comprehensive website for Mighty Man Power Solutions, showcasing their services in power solutions and industrial equipment. The website features a modern design with smooth animations and a user-friendly interface.',
      image: work1,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: [
        'Responsive Design',
        'Service Showcase',
        'Contact Form',
        'Image Gallery',
        'SEO Optimization'
      ]
    },
    'ShopZone': {
      title: 'ShopZone',
      description: 'An e-commerce platform built with modern technologies, offering a seamless shopping experience with features like real-time inventory, secure payments, and user reviews.',
      image: work2,
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'User Authentication',
        'Shopping Cart',
        'Payment Integration',
        'Order Tracking',
        'Admin Dashboard'
      ]
    },
    'WildLens': {
      title: 'WildLens',
      description: 'A photography portfolio website showcasing stunning wildlife photography. The platform includes a blog section, photo gallery, and booking system for photography sessions.',
      image: work3,
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'AWS S3'],
      features: [
        'Photo Gallery',
        'Blog System',
        'Booking System',
        'Image Optimization',
        'Social Media Integration'
      ]
    },
    'Bs Stitchers': {
      title: 'Bs Stitchers',
      description: 'A photography portfolio website showcasing stunning wildlife photography. The platform includes a blog section, photo gallery, and booking system for photography sessions.',
      image: work4,
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'AWS S3'],
      features: [
        'Photo Gallery',
        'Blog System',
        'Booking System',
        'Image Optimization',
        'Social Media Integration'
      ]
    },
    'Lustre Co': {
      title: 'Lustre Co',
      description: 'A photography portfolio website showcasing stunning wildlife photography. The platform includes a blog section, photo gallery, and booking system for photography sessions.',
      image: work5,
      technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'AWS S3'],
      features: [
        'Photo Gallery',
        'Blog System',
        'Booking System',
        'Image Optimization',
        'Social Media Integration'
      ]
    }
  };

  const project = workDetails[id] || {
    title: 'Project Not Found',
    description: 'The requested project could not be found.',
    image: work1,
    technologies: [],
    features: []
  };

  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "url": `https://voidtheory.online/work/${id}`,
    "author": {
      "@type": "Organization",
      "name": "voidTheory",
      "url": "https://voidtheory.online"
    },
    "mainEntity": {
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "image": project.image,
      "keywords": project.technologies.join(", ")
    }
  };

  return (
    <div className="work-details">
      <Helmet>
        <title>{project.title} | voidTheory</title>
        <meta name="description" content={project.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://voidtheory.online/work/${id}`} />
        <meta property="og:title" content={`${project.title} | voidTheory`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://voidtheory.online/work/${id}`} />
        <meta property="twitter:title" content={`${project.title} | voidTheory`} />
        <meta property="twitter:description" content={project.description} />
        <meta property="twitter:image" content={project.image} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://voidtheory.online/work/${id}`} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="work-details-container">
        <div className="work-details-header">
          <Link to="/" className="back-button">← Back to Home</Link>
          <h1>{project.title}</h1>
        </div>

        <div className="work-details-content">
          <div className="work-details-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="work-details-info">
            <h2>Project Overview</h2>
            <p>{project.description}</p>

            <div className="work-details-technologies">
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="work-details-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkDetails; 