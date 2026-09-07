import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import work1 from '../assets/mightymanpower.png';
import work2 from '../assets/ShopZone.png';
import work3 from '../assets/WildLens.png';
import work4 from '../assets/BS-Stitchers.png';
import work5 from '../assets/Lustre-Co.png';
import work6 from '../assets/Sri-Arjun-Silks.png';

export default function WorkSection() {
  const projects = [
    { id: 'mighty-man', title: 'Mighty Man Power Solutions', category: 'Operations & Web App', image: work1 },
    { id: 'ShopZone', title: 'ShopZone Storefront', category: 'E-Commerce Platform', image: work2 },
    { id: 'WildLens', title: 'WildLens Spatial', category: 'Portfolio & Motion', image: work3 },
    { id: 'Bs Stitchers', title: 'B.S. Stitchers', category: 'Custom Tailoring Brand', image: work4 },
    { id: 'Lustre Co', title: 'Lustre & Co.', category: 'Luxury Beauty & Skincare', image: work5 },
    { id: 'Sri Arjun silks', title: 'Sri Arjun Silks', category: 'Heritage Textile House', image: work6 },
  ];

  // Golden Ratio Spring Physics Entrance Variant
  const cardSpringVariant = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 18,
        delay: index * 0.12,
      }
    })
  };

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#0e7018] border-t border-black/20 relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 graphic-grid-overlay opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#11801c]" />
            <span>SELECTED PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-black font-display tracking-tight leading-[1.1]">
            Our <span className="text-white">Work</span>
          </h2>
          <p className="text-white/80 font-sans text-sm sm:text-base leading-[1.618]">
            High-converting digital platforms engineered with verdant precision and clean aesthetic perfection.
          </p>
        </div>

        {/* Portfolio Grid - Golden Ratio Proportioned Cards (Aspect 1.618 : 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardSpringVariant}
              custom={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            >
              <Link
                to={`/work/${project.id}`}
                className="group rounded-3xl graphic-card-black overflow-hidden transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Image Container with Golden Ratio Aspect Ratio 1.618 : 1 */}
                <div className="relative aspect-[1.618/1] overflow-hidden bg-slate-950 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      INSPECT PROJECT <ArrowUpRight className="w-4 h-4 text-[#11801c]" />
                    </span>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#11801c] font-bold uppercase tracking-widest block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#11801c] transition-colors duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Graphic Footer Callout Banner */}
        <motion.div 
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-black text-white border border-white/20 shadow-2xl text-center space-y-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        >
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Ready to Elevate Your Online Presence?
          </h3>
          
          <p className="text-white/80 font-sans text-xs sm:text-base max-w-xl mx-auto leading-[1.618]">
            Whether you're launching something new or leveling up your existing site—we're here to make it happen.
          </p>

          <div className="pt-2">
            <motion.a
              href="https://cal.com/voidtheory/call?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#11801c] text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              <span>Get Your Website Built</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
