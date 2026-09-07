import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';

export default function WhyChooseSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      desc: "Every page is structured to guide your visitors to take action—whether it's buying, booking, or subscribing."
    },
    {
      icon: Zap,
      title: 'SEO & Speed Optimized',
      desc: 'Fast-loading, search-engine-friendly websites that rank higher and perform better.'
    },
    {
      icon: ShieldCheck,
      title: 'Custom-Built for Your Brand',
      desc: 'No templates. No shortcuts. 100% tailored design and development that reflects your unique business identity.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First, Always',
      desc: 'Your customers are on mobile—we make sure your website shines on every screen size.'
    }
  ];

  // Golden Ratio Spring Physics Card Entrance Variant
  const cardSpringVariant = {
    hidden: { opacity: 0, y: 44, filter: 'blur(12px)', scale: 0.96 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 18,
        mass: 0.8,
        delay: index * 0.14, // Golden delay stagger
      }
    })
  };

  // Golden header entrance
  const headerSpringVariant = {
    hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 160, damping: 18 }
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-36 bg-[#11801c] border-t border-black/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Golden Ratio Typography */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={headerSpringVariant}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#11801c]" />
            <span>CORE ADVANTAGES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-black font-display tracking-tight leading-[1.1]">
            Why Choose <span className="text-white">Void Theory</span>?
          </h2>
        </motion.div>

        {/* 4 Graphic Pillars Grid — Golden Ratio Proportioned Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardSpringVariant}
                custom={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                className="p-8 sm:p-10 rounded-3xl graphic-card-black space-y-5 group relative overflow-hidden"
              >
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#11801c] group-hover:bg-[#11801c] group-hover:text-white"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <IconComp className="w-6 h-6" />
                </motion.div>

                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors leading-[1.3]">
                    {pillar.title}
                  </h3>
                  <p className="text-white/80 font-sans text-sm mt-3 leading-[1.618]">
                    {pillar.desc}
                  </p>
                </div>

                {/* Decorative golden ratio corner line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#11801c] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout with Spring Physics */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20, delay: 0.2 }}
        >
          <motion.p
            className="inline-block px-8 sm:px-10 py-4 rounded-full bg-black text-white font-mono font-bold text-sm sm:text-base border border-white/20 shadow-xl leading-[1.618]"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 16 }}
          >
            We don't just build websites—we build digital growth engines.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
