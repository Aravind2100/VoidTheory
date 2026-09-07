import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code2, ShoppingBag, Layers, RefreshCw, BarChart3, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: 'Custom Website Design',
      desc: 'Unique, brand-focused designs that convert visitors into customers.'
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      desc: 'Modern tech stack: React, Next.js, Node.js for scalable solutions.'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce & Shopify',
      desc: 'Powerful online stores with seamless shopping experiences.'
    },
    {
      icon: Layers,
      title: 'Landing Pages',
      desc: 'High-converting pages optimized for maximum engagement.'
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      desc: 'Transform your site into a high-performing digital asset.'
    },
    {
      icon: BarChart3,
      title: 'SEO & Analytics',
      desc: 'Data-driven optimization for better visibility and performance.'
    }
  ];

  // Golden Ratio Spring Physics Card Entrance
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
        delay: index * 0.1,
      }
    })
  };

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#0d6b17] border-t border-black/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — Golden Ratio Spring Physics */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 160, damping: 18 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#11801c]" />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-black font-display tracking-tight leading-[1.1]">
            Services We <span className="text-white">Offer</span>
          </h2>
          <p className="text-white/80 font-sans text-sm sm:text-base leading-[1.618]">
            Tailored digital capabilities engineered to deliver measurable growth for your business.
          </p>
        </motion.div>

        {/* 6 Service Cards Grid — Golden Ratio Proportioned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardSpringVariant}
                custom={idx}
                whileHover={{ y: -6, scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                className="p-8 sm:p-10 rounded-3xl graphic-card-black space-y-5 group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-5">
                  <motion.div 
                    className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#11801c] group-hover:bg-[#11801c] group-hover:text-white"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <IconComp className="w-6 h-6" />
                  </motion.div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors leading-[1.3]">
                      {service.title}
                    </h3>
                    <p className="text-white/80 font-sans text-sm mt-3 leading-[1.618]">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Animated Border Line */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#11801c] font-semibold group-hover:text-white transition-colors">
                  <span>LEARN MORE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Decorative golden ratio bottom slide accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#11801c] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
