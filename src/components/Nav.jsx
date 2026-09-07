import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Nav({ ready }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // GPU-Accelerated Spring Physics Ball-to-Navbar Expansion
  const springNavVariant = {
    hidden: { 
      scaleX: 0.04, 
      scaleY: 0.6, 
      opacity: 0,
      filter: 'blur(8px)'
    },
    visible: {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 18,
        mass: 0.8,
        delay: 0.15
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 pt-3 sm:pt-4 pb-2 pointer-events-none flex justify-center">
      {/* GPU-Accelerated Spring Physics Navbar */}
      <motion.nav 
        variants={springNavVariant}
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        style={{ transformOrigin: 'center center' }}
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full pointer-events-auto flex items-center justify-between shadow-2xl backdrop-blur-xl border bg-black text-white will-change-transform ${
          scrolled 
            ? 'bg-black/95 border-white/30 scale-[0.99]' 
            : 'bg-black/85 border-white/20'
        }`}
      >
        {/* Content Spring Fade In */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ 
            type: 'spring', 
            stiffness: 180, 
            damping: 20, 
            delay: 0.35 
          }}
          className="flex items-center justify-between w-full"
        >
          {/* Brand Logo */}
          <motion.a 
            href="#hero" 
            className="flex items-center gap-2.5 sm:gap-3 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div className="p-1 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
              <img 
                src={logo} 
                alt="voidTheory Logo" 
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-500 group-hover:rotate-6" 
              />
            </div>
            <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
              voidTheory<span className="text-[#11801c]">.</span>
            </span>
          </motion.a>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest font-semibold text-white/80">
            {['Our Work', 'Benefits', 'Services'].map((name) => {
              const targetId = name === 'Our Work' ? '#work' : name === 'Benefits' ? '#why-us' : '#services';
              return (
                <li key={name}>
                  <motion.a 
                    href={targetId}
                    onClick={(e) => scrollToSection(e, targetId)}
                    className="hover:text-white transition-colors relative py-1 group/link flex items-center"
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <span>{name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#11801c] transition-all duration-300 group-hover/link:w-full" />
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              href="https://cal.com/voidtheory/call?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2.5 rounded-full bg-[#11801c] text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1.5 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-black/95 text-white shadow-2xl border border-white/20 pointer-events-auto flex flex-col gap-4 animate-fade-in w-full max-w-6xl">
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest font-semibold text-white/90">
            <a href="#work" onClick={(e) => scrollToSection(e, '#work')} className="py-2.5 px-3 rounded-lg hover:bg-white/10">Our Work</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="py-2.5 px-3 rounded-lg hover:bg-white/10">Benefits</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="py-2.5 px-3 rounded-lg hover:bg-white/10">Services</a>
          </div>

          <a
            href="https://cal.com/voidtheory/call?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-[#11801c] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
