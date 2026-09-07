import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function FooterSection() {
  // Golden Ratio Spring Physics Entrance Variants
  const springVariant = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 20,
        delay,
      }
    })
  };

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b5e14] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/15">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Top Footer Grid — Golden Ratio 7:5 Column Split */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Description — 7 cols */}
          <motion.div
            className="md:col-span-7 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={springVariant}
            custom={0.1}
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="p-1.5 rounded-xl bg-white/10">
                <img src={logo} alt="voidTheory Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                voidTheory<span className="text-[#11801c]">.</span>
              </span>
            </motion.div>

            <p className="text-white/80 font-sans text-sm sm:text-base max-w-md leading-[1.618]">
              voidTheory is a creative web development and design studio specializing in modern, high-converting websites and digital growth solutions.
            </p>

            <motion.a
              href="https://cal.com/voidtheory/call?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Quick Links & Contact — 5 cols */}
          <motion.div
            className="md:col-span-5 grid grid-cols-2 gap-8 font-mono text-xs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={springVariant}
            custom={0.22}
          >
            <div className="space-y-4">
              <span className="text-emerald-300 font-bold uppercase tracking-widest text-[11px]">NAVIGATION</span>
              <ul className="space-y-3 text-white/80">
                {[
                  { label: 'Home', href: '#hero' },
                  { label: 'Our Work', href: '#work' },
                  { label: 'Benefits', href: '#why-us' },
                  { label: 'Services', href: '#services' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      onClick={(e) => smoothScrollTo(e, href)}
                      className="hover:text-white transition-colors inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-emerald-300 font-bold uppercase tracking-widest text-[11px]">GET IN TOUCH</span>
              <ul className="space-y-3 text-white/80">
                <li>
                  <motion.a 
                    href="https://cal.com/voidtheory/call?overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-emerald-300 flex items-center gap-1 transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <span>Book a Call</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="mailto:hello@voidtheory.online"
                    className="hover:text-white transition-colors inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    hello@voidtheory.online
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://twitter.com/voidtheory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    Twitter / X
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://github.com/voidtheory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    GitHub
                  </motion.a>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright & Status Bar */}
        <motion.div
          className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/70 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20, delay: 0.3 }}
        >
          <div>
            © {new Date().getFullYear()} voidTheory Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#11801c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#11801c]"></span>
            </span>
            <span className="tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
