import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Send, CheckCircle2, Shield, Heart, Globe, Terminal } from 'lucide-react';
import logo from '../assets/logo.png';

export default function ManifestoFooter() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="manifesto" className="relative overflow-hidden">
      
      {/* Studio Manifesto Section — Rich Emerald Green (#11801c) Background */}
      <section className="bg-[#11801c] text-white py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Rings & Shimmer */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDIO MANIFESTO</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight leading-[1.1]">
            "We believe digital experiences should feel weightless, precise, and visually unforgettable."
          </h2>

          <p className="text-white/80 font-sans text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            voidTheory bridges creative artistry and web engineering. We reject cluttered templates in favor of lush minimalism, aerated spaces, and kinetic freshness.
          </p>

          {/* Quick Inquiry Form */}
          <div className="pt-4 max-w-lg mx-auto">
            {formSubmitted ? (
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-mono text-sm flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                <span>BRIEF RECEIVED — WE WILL RESPOND WITHIN 12 HOURS</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email to initiate brief..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-3.5 rounded-full bg-white/15 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white text-sm font-sans backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-black text-white font-semibold text-xs uppercase tracking-wider hover:bg-white hover:text-[#11801c] transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 shadow-lg"
                >
                  <span>Submit Brief</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/70">
            <span>SAN FRANCISCO</span>
            <span>•</span>
            <span>LONDON</span>
            <span>•</span>
            <span>GLOBAL REMOTE</span>
          </div>

        </div>
      </section>

      {/* Lower Footer Section — Sleek Pure Black (#000000) Background */}
      <section className="bg-[#000000] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Logo & Description */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#11801c] flex items-center justify-center text-white font-bold text-xl">
                  v<span className="text-white">T</span>
                </div>
                <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                  voidTheory<span className="text-[#11801c]">.</span>
                </span>
              </div>

              <p className="text-slate-400 font-sans text-xs max-w-sm leading-relaxed">
                Creative Web Development & Design Studio specializing in luxury tech aesthetics, digital brand systems, and spatial web experiences.
              </p>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-3">
                <span className="text-[#11801c] font-bold uppercase tracking-wider">NAVIGATION</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#hero" className="hover:text-white transition-colors">System Spec</a></li>
                  <li><a href="#design-system" className="hover:text-white transition-colors">Design Tokens</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
                  <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-[#11801c] font-bold uppercase tracking-wider">DIRECT CONNECT</span>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="https://cal.com/voidtheory/call" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Strategy Call</a></li>
                  <li><a href="mailto:hello@voidtheory.online" className="hover:text-white transition-colors">hello@voidtheory.online</a></li>
                  <li><a href="https://twitter.com/voidtheory" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a></li>
                  <li><a href="https://github.com/voidtheory" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Repository</a></li>
                </ul>
              </div>

              <div className="space-y-3 col-span-2 sm:col-span-1">
                <span className="text-[#11801c] font-bold uppercase tracking-wider">SYSTEM STATUS</span>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#11801c] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#11801c]"></span>
                    </span>
                    <span className="text-[11px] font-bold text-white">ALL SYSTEMS NOMINAL</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Uptime: 99.98% • Latency &lt;18ms
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
            <div>
              © {new Date().getFullYear()} voidTheory Studio. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Lush Minimalism</span>
              <span>•</span>
              <span>Verdant Precision</span>
              <span>•</span>
              <span>Aerated Layouts</span>
            </div>
          </div>

        </div>
      </section>

    </footer>
  );
}
