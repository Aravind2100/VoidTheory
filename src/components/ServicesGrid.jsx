import React, { useState } from 'react';
import { Code2, Layout, Zap, ArrowRight, CheckCircle2, Terminal, Layers, Sparkles, X, Shield, Cpu, Play } from 'lucide-react';

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      icon: Code2,
      badge: 'VERDANT PRECISION',
      title: 'Creative Web Development',
      subtitle: 'High-performance React & WebGL applications built for ultra-fast load times and seamless scalability.',
      description: 'We engineer bespoke web applications using clean, modern tech stacks. Every line of code is structured for optimal core web vitals, zero bloat, and smooth interactivity.',
      features: [
        'React 19 & Next.js Architecture',
        'Three.js & WebGL 3D Graphic Integration',
        'Headless CMS & API Engineering',
        'Sub-second Core Web Vitals (<0.6s LCP)'
      ],
      techStack: ['React', 'Vite', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'WebGL'],
      deliverables: ['Custom Web App Codebase', 'API Layer Integration', 'Performance Audit', 'Deployment & CI/CD Pipeline']
    },
    {
      id: 'ui-ux',
      icon: Layout,
      badge: 'LUSH MINIMALISM',
      title: 'UI/UX & Design Systems',
      subtitle: 'Aerated layouts, crystal-clear visual hierarchies, and scalable component architecture.',
      description: 'We transform complex product requirements into intuitive, breathtaking user interfaces. Structured with rigorous design tokens, generous white space, and conversion clarity.',
      features: [
        'Digital Brand Systems & Tokens',
        'Interactive Figma Design Kits',
        'Responsive Aerated Layout Architecture',
        'Micro-interaction Design & Prototyping'
      ],
      techStack: ['Figma Tokens', 'Tailwind Config', 'CSS Variables', 'Design System Spec', 'Storybook'],
      deliverables: ['Complete Design System', 'High-Fidelity Figma Files', 'Component Library Spec', 'UX Wireframes']
    },
    {
      id: 'web-motion',
      icon: Zap,
      badge: 'KINETIC FRESHNESS',
      title: 'Web Motion & Interactive Art',
      subtitle: 'Fluid micro-interactions, scroll-driven visual narratives, and dynamic glowing effects.',
      description: 'Motion brings digital interfaces to life. We craft buttery-smooth 60 FPS transitions, kinetic button responses, and interactive canvas visualizations that captivate users.',
      features: [
        'GSAP & ScrollTrigger Animations',
        'Framer Motion Micro-Interactions',
        'Interactive Canvas & Cursor Effects',
        'Kinetic Glow & Glassmorphic Highlights'
      ],
      techStack: ['GSAP', 'Framer Motion', 'Canvas API', 'SVG Animation', 'Three.js Shader'],
      deliverables: ['Custom Interactive Animations', 'Motion Guidelines', 'Lottie / SVG Assets', 'Optimized Motion Scripts']
    }
  ];

  return (
    <section id="services" className="py-28 bg-white relative">
      {/* Background Subtle Mint Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#11801c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4fbf6] border border-[#11801c]/30 text-[#11801c] text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED CAPABILITIES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-black font-display tracking-tight">
            Services Driven by <br className="hidden sm:inline" />
            <span className="text-[#11801c]">Verdant Precision</span> & Elegance
          </h2>

          <p className="text-slate-600 font-sans text-base leading-relaxed">
            From digital brand systems to high-speed web apps, voidTheory crafts digital experiences that fuse artistic vision with technical perfection.
          </p>
        </div>

        {/* 3-Card Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-8 bg-white border border-[#11801c]/20 hover:border-[#11801c] hover:shadow-2xl hover:shadow-[#11801c]/20 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Ambient Top Glow Border on Hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#11801c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />

                <div className="space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#f4fbf6] border border-[#11801c]/30 flex items-center justify-center text-[#11801c] group-hover:bg-[#11801c] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#f4fbf6] text-[#11801c] border border-[#11801c]/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-black group-hover:text-[#11801c] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans mt-2 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#11801c] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inspect Specs Trigger */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-3 px-4 rounded-xl bg-[#f4fbf6] border border-[#11801c]/20 text-[#11801c] font-semibold text-xs font-mono group-hover:bg-[#11801c] group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>INSPECT TECHNICAL SPEC</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Technical Spec Drawer / Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-8 border border-[#11801c]/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#11801c] text-white flex items-center justify-center">
                  <selectedService.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-black">{selectedService.title}</h3>
                  <span className="text-xs font-mono text-[#11801c] font-semibold">{selectedService.badge}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              {selectedService.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">Tech Stack & Frameworks</span>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#f4fbf6] border border-[#11801c]/20 text-[#11801c] text-xs font-mono font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">Key Deliverables</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans font-medium text-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#11801c]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Close Spec
              </button>
              <a
                href="https://cal.com/voidtheory/call?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#11801c] text-white text-xs font-semibold hover:bg-[#0c5c14] shadow-md shadow-[#11801c]/20 flex items-center gap-2"
              >
                <span>Book Service Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
