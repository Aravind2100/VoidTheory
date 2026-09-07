import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection({ ready }) {
  const sectionRef = useRef(null);

  // Raw mouse position as motion values (0 to 1 normalized)
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  // Spring physics for buttery cursor-following (stiffness=60, damping=18 for inertia)
  const springX = useSpring(rawX, { stiffness: 60, damping: 18, mass: 1.2 });
  const springY = useSpring(rawY, { stiffness: 60, damping: 18, mass: 1.2 });

  // Grid parallax: moves ±32px on both axes (golden ratio spacing: 32 ≈ 20 × 1.618)
  const gridX = useTransform(springX, [0, 1], [-32, 32]);
  const gridY = useTransform(springY, [0, 1], [-32, 32]);

  // Secondary orb parallax: deeper offset for depth
  const orbX = useTransform(springX, [0, 1], [-60, 60]);
  const orbY = useTransform(springY, [0, 1], [-60, 60]);

  // Subtle vignette parallax: inverse movement
  const vignetteX = useTransform(springX, [0, 1], [20, -20]);
  const vignetteY = useTransform(springY, [0, 1], [20, -20]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    // Snap back to center with spring physics
    rawX.set(0.5);
    rawY.set(0.5);
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Golden Ratio Spring Physics Blur Entrance Variant (φ = 1.618)
  const goldenSpringVariant = {
    hidden: { opacity: 0, y: 48, filter: 'blur(16px)', scale: 0.95 },
    visible: (customDelay = 0) => ({
      opacity: 1, y: 0, filter: 'blur(0px)', scale: 1,
      transition: { type: 'spring', stiffness: 180, damping: 18, mass: 0.8, delay: customDelay }
    })
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-between pt-24 pb-12 sm:pt-36 sm:pb-28 overflow-hidden bg-[#11801c]"
    >
      {/* ============ PARALLAX GRAPHIC GRID (physics-driven) ============ */}
      <motion.div
        className="absolute inset-[-60px] pointer-events-none"
        style={{ x: gridX, y: gridY }}
      >
        {/* Primary Grid Lines — vertical */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.18]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-cols" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#000000" strokeWidth="0.6" />
            </pattern>
            <pattern id="grid-dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="1.5" fill="#000000" opacity="0.5" />
              <circle cx="80" cy="0" r="1.5" fill="#000000" opacity="0.5" />
              <circle cx="0" cy="80" r="1.5" fill="#000000" opacity="0.5" />
              <circle cx="80" cy="80" r="1.5" fill="#000000" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cols)" />
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>

        {/* Graphic Design Diagonal Accent Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={`${i * 14.28}%`} y1="0%"
              x2={`${i * 14.28 + 14.28}%`} y2="100%"
              stroke="#000000"
              strokeWidth="0.8"
            />
          ))}
        </svg>
      </motion.div>

      {/* ============ PARALLAX ORB — deeper depth layer ============ */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl pointer-events-none animate-hero-orb"
        style={{ x: orbX, y: orbY }}
      />

      {/* ============ INVERSE VIGNETTE LAYER — dark focus circle ============ */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: vignetteX,
          y: vignetteY,
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.18) 100%)'
        }}
      />

      {/* ============ HERO CONTENT ============ */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto flex flex-col justify-between h-full space-y-6 sm:space-y-10">

        {/* Z-LAYOUT TOP ROW */}
        <motion.div
          className="flex items-center justify-between pb-3 sm:pb-4 border-b border-black/20 text-[11px] font-mono text-black font-semibold uppercase tracking-widest"
          initial="hidden" animate={ready ? "visible" : "hidden"} whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={goldenSpringVariant} custom={0.1}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black inline-block" />
            <span>VOIDTHEORY STUDIO</span>
          </div>
          <span className="text-black font-mono text-[11px] sm:text-xs">CREATIVE DEVELOPMENT & DESIGN</span>
        </motion.div>

        {/* Z-LAYOUT CENTER — Golden Ratio Display Typography */}
        <div className="space-y-3 sm:space-y-6 text-left my-auto">

          {/* Line 1 */}
          <motion.div
            initial="hidden" animate={ready ? "visible" : "hidden"} whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={goldenSpringVariant} custom={0.25}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[6.4rem] font-extrabold tracking-tighter leading-[1.02] font-display text-[#000000]">
              We build websites
            </h1>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            initial="hidden" animate={ready ? "visible" : "hidden"} whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={goldenSpringVariant} custom={0.42}
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[6.4rem] font-extrabold tracking-tighter leading-[1.02] font-display text-white">
              that turn visitors into
            </h2>
          </motion.div>

          {/* Line 3 — Black Pill Badge */}
          <motion.div
            initial="hidden" animate={ready ? "visible" : "hidden"} whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={goldenSpringVariant} custom={0.58}
            className="pt-1 sm:pt-2"
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <span className="animate-badge-float inline-flex items-center px-4 sm:px-7 py-2 sm:py-3 bg-[#000000] text-white rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl text-3xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-extrabold font-display">
                paying customers<span className="text-[#11801c] ml-0.5">.</span>
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Z-LAYOUT BOTTOM ROW */}
        <div className="pt-6 sm:pt-10 border-t border-black/20 grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">

          {/* Body Copy — 7 cols (golden ratio) */}
          <motion.div
            className="lg:col-span-7 space-y-3 sm:space-y-4 text-left"
            initial="hidden" animate={ready ? "visible" : "hidden"} whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={goldenSpringVariant} custom={0.74}
          >
            <p className="text-sm sm:text-lg lg:text-xl text-[#000000] font-sans font-medium leading-[1.618] max-w-xl">
              At voidTheory, we build high-converting websites with smart copy and seamless development—
              <span className="text-white font-normal">turning visitors into loyal customers. Driven by strategies. Designed for growth.</span>
            </p>
            <div className="flex items-center gap-3 pt-1 font-mono text-xs text-black font-semibold uppercase tracking-wider">
              <div className="flex -space-x-2">
                <span className="inline-flex w-7 h-7 rounded-full bg-black text-white text-[10px] font-bold items-center justify-center ring-2 ring-[#11801c]">vT</span>
                <span className="inline-flex w-7 h-7 rounded-full bg-white text-black text-[10px] font-bold items-center justify-center ring-2 ring-[#11801c]">20+</span>
              </div>
              <span>Trusted by 20+ Businesses Worldwide</span>
            </div>
          </motion.div>

          {/* Buttons — 5 cols (golden ratio) */}
          <motion.div
            className="lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-3 sm:gap-4"
            initial="hidden" animate={ready ? "visible" : "hidden"} whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={goldenSpringVariant} custom={0.90}
          >
            <motion.a
              href="https://cal.com/voidtheory/call?overlayCalendar=true"
              target="_blank" rel="noopener noreferrer"
              className="group w-full sm:w-auto px-7 sm:px-9 py-4 rounded-full bg-[#000000] text-white font-bold text-xs uppercase tracking-widest shadow-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2.5 border border-white/20"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              <span>Get Your Website Built</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>

            <motion.button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-7 sm:px-9 py-4 rounded-full bg-white text-[#000000] font-bold text-xs uppercase tracking-widest border border-black/30 hover:bg-[#000000] hover:text-white transition-all duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 16 }}
            >
              Services We Offer
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
