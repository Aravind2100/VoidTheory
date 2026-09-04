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
import StartProject from './sections/StartProject';
import Footer from './Footer';

function Home() {
  usePageTitle('VoidTheory — Creative Technology & Software Studio', { full: true });

  return (
    <div className="page" id="top">
      <Nav />
      <Hero />
      <WhatWeDo />
      <FeaturedWork />
      <AboutSection />
      <HowWeWork />
      <WhyVoidTheory />
      <Proof />
      <StartProject />
      <Footer />
    </div>
  );
}

export default Home;
