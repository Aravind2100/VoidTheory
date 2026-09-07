import { useState } from 'react';
import './sections/buttons.css';
import './sections/shared.css';
import usePageTitle from './usePageTitle';
import Nav from './Nav';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import FeaturedWork from './sections/FeaturedWork';
import AboutSection from './sections/AboutSection';
import HowWeWork from './sections/HowWeWork';
import WhyVoidTheory from './sections/WhyVoidTheory';
import Proof from './sections/Proof';
import BookMeetingSection from './sections/BookMeetingSection';
import Footer from './Footer';
import StickyCtoBar from './components/StickyCtoBar';

function Home() {
  usePageTitle('VoidTheory — Creative Technology & Custom Software Studio', {
    full: true,
    description: 'VoidTheory is an elite creative technology and custom software studio engineering SaaS platforms, mobile apps, and automated digital systems with fixed scope and a guaranteed 24-hour proposal SLA.'
  });

  const handleOpenEstimator = () => {
    const el = document.getElementById('book-meeting');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page" id="top">
      <Nav onOpenEstimator={handleOpenEstimator} />
      <Hero onOpenEstimator={handleOpenEstimator} />
      <WhatWeDo />
      <FeaturedWork onOpenEstimator={handleOpenEstimator} />
      <AboutSection />
      <HowWeWork />
      <WhyVoidTheory />
      <Proof />
      <BookMeetingSection />
      <Footer />

      <StickyCtoBar onOpenEstimator={handleOpenEstimator} />
    </div>
  );
}

export default Home;
