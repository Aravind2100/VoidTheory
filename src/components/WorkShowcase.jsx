import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, X, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import work1 from '../assets/mightymanpower.png';
import work2 from '../assets/ShopZone.png';
import work3 from '../assets/WildLens.png';
import work4 from '../assets/BS-Stitchers.png';
import work5 from '../assets/Lustre-Co.png';
import work6 from '../assets/Sri-Arjun-Silks.png';

export default function WorkShowcase() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Mighty Manpower',
      category: 'Web Development',
      image: work1,
      metrics: '+240% Lead Conversion',
      lcp: '0.42s LCP',
      link: 'https://mightymanpower.com',
      description: 'Industrial workforce management platform engineered with React, custom SVG graphics, and zero-latency form dispatch.',
      tags: ['React', 'Operations UI', 'Tailwind', 'High Performance']
    },
    {
      id: 2,
      title: 'ShopZone Storefront',
      category: 'Design Systems',
      image: work2,
      metrics: '+180% AOV Increase',
      lcp: '0.51s LCP',
      link: 'https://shopzone.online',
      description: 'Modern luxury e-commerce experience featuring aerated minimalist cards, instant search, and instant cart drawer state.',
      tags: ['E-Commerce', 'Design System', 'React', 'Lush Minimalism']
    },
    {
      id: 3,
      title: 'WildLens Spatial',
      category: 'Motion',
      image: work3,
      metrics: '4.9/5 User Rating',
      lcp: '0.38s LCP',
      link: 'https://wildlens.online',
      description: 'Immersive nature photography gallery featuring fluid WebGL transitions, kinetic cursor triggers, and spatial layout grids.',
      tags: ['WebGL', 'Motion', 'Three.js', 'Spatial UI']
    },
    {
      id: 4,
      title: 'B.S. Stitchers',
      category: 'Web Development',
      image: work4,
      metrics: '+310% Online Inquiries',
      lcp: '0.45s LCP',
      link: 'https://bs-stitchers.com',
      description: 'Precision bespoke tailoring brand experience combining classical elegance with modern responsive web engineering.',
      tags: ['React', 'Brand Identity', 'Custom Code']
    },
    {
      id: 5,
      title: 'Lustre & Co.',
      category: 'Design Systems',
      image: work5,
      metrics: '100 Lighthouse Score',
      lcp: '0.35s LCP',
      link: 'https://lustreco.online',
      description: 'High-end beauty brand website with glassmorphic skincare selectors, interactive ingredient specs, and mint accents.',
      tags: ['Lush Minimalism', 'UX Research', 'Glassmorphism']
    },
    {
      id: 6,
      title: 'Sri Arjun Silks',
      category: 'Motion',
      image: work6,
      metrics: '+195% Session Time',
      lcp: '0.48s LCP',
      link: 'https://sriarjunsilks.online',
      description: 'Heritage textile house digital transformation featuring smooth scroll narratives and rich silk texture showcases.',
      tags: ['Motion Graphics', 'Heritage Brand', 'Web Development']
    }
  ];

  const categories = ['All', 'Web Development', 'Design Systems', 'Motion'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="work" className="py-28 bg-[#f4fbf6]/30 border-t border-[#11801c]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#11801c]/30 text-[#11801c] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-black font-display tracking-tight">
              High-Impact <span className="text-[#11801c]">Studio Projects</span>
            </h2>

            <p className="text-slate-600 font-sans max-w-xl text-base leading-relaxed">
              Explore our portfolio of bespoke web solutions, each crafted with verdant precision engineering and verified performance metrics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto p-1.5 rounded-full bg-white border border-[#11801c]/20 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#11801c] text-white shadow-md shadow-[#11801c]/20'
                    : 'text-slate-600 hover:text-black hover:bg-slate-50'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-[#11801c]/20 overflow-hidden hover:border-[#11801c] hover:shadow-2xl hover:shadow-[#11801c]/20 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                
                {/* Metric Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20 flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-[#11801c]" />
                    {project.metrics}
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-[#11801c]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold">
                    {project.lcp}
                  </span>
                </div>
              </div>

              {/* Card Metadata */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#11801c] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-black group-hover:text-[#11801c] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Button */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f4fbf6] text-slate-700 border border-[#11801c]/15">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#11801c]/20 text-[#000000] font-mono text-xs font-semibold hover:bg-[#11801c] hover:text-white hover:border-[#11801c] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>VIEW CASE DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl p-8 border border-[#11801c]/30 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono text-[#11801c] font-bold uppercase">{activeModalProject.category} CASE STUDY</span>
                <h3 className="font-display font-extrabold text-2xl text-black">{activeModalProject.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] bg-slate-900">
              <img src={activeModalProject.image} alt={activeModalProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Project Details */}
            <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-[#f4fbf6] border border-[#11801c]/20">
                <span className="text-slate-500 font-bold block mb-1">KEY IMPACT METRIC</span>
                <span className="text-lg font-bold text-[#11801c]">{activeModalProject.metrics}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 font-bold block mb-1">PERFORMANCE SCORE</span>
                <span className="text-lg font-bold text-black">{activeModalProject.lcp} Target</span>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              {activeModalProject.description} Designed and engineered by voidTheory to deliver absolute visual clarity, fluid motion cues, and instant conversion response.
            </p>

            {/* Action CTAs */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50"
              >
                Back to Showcase
              </button>

              <a
                href={activeModalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#11801c] text-white text-xs font-semibold hover:bg-[#0c5c14] shadow-md shadow-[#11801c]/20 flex items-center gap-2"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
