import React, { useState } from 'react';
import { Copy, Check, Type, Palette, Component, Sparkles, Layers, Sliders, Box, Feather, Shield, Terminal, ArrowUpRight } from 'lucide-react';

export default function DesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('colors');
  const [copiedHex, setCopiedHex] = useState(null);

  const colors = [
    { name: 'Pure White (Canvas)', hex: '#FFFFFF', usage: 'Primary background, cards, modal canvases', textDark: true },
    { name: 'Emerald Green (Brand Accent)', hex: '#11801C', usage: 'Active CTAs, glowing badges, kinetic highlights', textDark: false },
    { name: 'High-Contrast Black', hex: '#000000', usage: 'Display headlines, structural borders, dark accents', textDark: false },
    { name: 'Soft Mint Tint', hex: '#F4FBF6', usage: 'Subtle container fills, active hover highlights', textDark: true },
    { name: 'Emerald Light Accent', hex: '#169F23', usage: 'Hover state gradient endpoints, focus outlines', textDark: false },
    { name: 'Slate Dark Card', hex: '#050A06', usage: 'High-contrast studio manifesto backdrop', textDark: false },
  ];

  const typography = [
    { level: 'Display / Hero', font: 'Cal Sans / Outfit Bold', size: '64px / 4rem', tracking: '-0.03em', leading: '1.08', sample: 'Digital Brand Artistry' },
    { level: 'Headline 1', font: 'Cal Sans / Outfit Semibold', size: '40px / 2.5rem', tracking: '-0.02em', leading: '1.15', sample: 'Verdant Precision Engineering' },
    { level: 'Section Subhead', font: 'Lexend Deca Medium', size: '20px / 1.25rem', tracking: '-0.01em', leading: '1.50', sample: 'Aerated layouts grounded by vivid organic tones.' },
    { level: 'Body Text', font: 'Lexend Deca Light', size: '16px / 1.0rem', tracking: '0.00em', leading: '1.65', sample: 'Purposeful, spacious layouts designed to drive engagement without cognitive friction.' },
    { level: 'Micro Spec / Mono', font: 'JetBrains Mono', size: '12px / 0.75rem', tracking: '+0.05em', leading: '1.40', sample: 'SYSTEM_SPEC // HEX: #11801C // RES: 4K_UHD' },
  ];

  const iconStyles = [
    { icon: Sparkles, title: 'Kinetic Highlights', desc: 'Used for active state triggers and feature emphasis.' },
    { icon: Layers, title: 'Layered Glassmorphism', desc: 'Used for floating controls and backdrop cards.' },
    { icon: Sliders, title: 'Precision Controls', desc: 'Fine 1.5px stroke weight with emerald glow points.' },
    { icon: Feather, title: 'Aerated Spacing', desc: 'Generous padding tokens to ensure visual clarity.' },
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="design-system" className="py-24 bg-[#f4fbf6]/50 relative border-y border-[#11801c]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#11801c]/30 text-[#11801c] text-xs font-mono font-semibold">
              <Component className="w-3.5 h-3.5" />
              <span>FOUNDATIONS & DESIGN SYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black font-display tracking-tight">
              Architectural <span className="text-[#11801c]">Design Tokens</span>
            </h2>
            <p className="text-slate-600 font-sans max-w-xl text-base leading-relaxed">
              An interactive visual specification of voidTheory’s core colors, typography scale, icon tokens, and layout guidelines.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex p-1.5 rounded-2xl bg-white border border-[#11801c]/20 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeTab === 'colors' 
                  ? 'bg-[#11801c] text-white shadow-md shadow-[#11801c]/20' 
                  : 'text-slate-600 hover:text-black hover:bg-slate-50'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>COLOR PALETTE</span>
            </button>

            <button
              onClick={() => setActiveTab('typography')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeTab === 'typography' 
                  ? 'bg-[#11801c] text-white shadow-md shadow-[#11801c]/20' 
                  : 'text-slate-600 hover:text-black hover:bg-slate-50'
              }`}
            >
              <Type className="w-4 h-4" />
              <span>TYPOGRAPHY</span>
            </button>

            <button
              onClick={() => setActiveTab('icons')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeTab === 'icons' 
                  ? 'bg-[#11801c] text-white shadow-md shadow-[#11801c]/20' 
                  : 'text-slate-600 hover:text-black hover:bg-slate-50'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>ICONOGRAPHY & TOKENS</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Color Swatches Grid */}
        {activeTab === 'colors' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {colors.map((c) => (
              <div 
                key={c.hex} 
                className="p-5 rounded-2xl bg-white border border-[#11801c]/20 shadow-sm hover:shadow-lg hover:border-[#11801c] transition-all duration-300 group space-y-4"
              >
                {/* Swatch Color Preview Card */}
                <div 
                  className="h-36 rounded-xl w-full flex flex-col justify-between p-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #e2e8f0' : 'none' }}
                >
                  <span className={`text-xs font-mono font-bold tracking-wider uppercase ${c.textDark ? 'text-black' : 'text-white'}`}>
                    {c.hex}
                  </span>
                  
                  <button
                    onClick={() => handleCopy(c.hex)}
                    className={`self-end flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold backdrop-blur-md transition-all ${
                      c.textDark 
                        ? 'bg-black/10 text-black hover:bg-black/20' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {copiedHex === c.hex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY HEX</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Swatch Metadata */}
                <div>
                  <h4 className="font-display font-bold text-base text-black group-hover:text-[#11801c] transition-colors">
                    {c.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans mt-1">
                    {c.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Typography Architecture */}
        {activeTab === 'typography' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {typography.map((t) => (
              <div 
                key={t.level}
                className="p-6 rounded-2xl bg-white border border-[#11801c]/15 hover:border-[#11801c] transition-all duration-300 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[#f4fbf6] text-[#11801c] text-xs font-mono font-bold">
                      {t.level}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{t.font}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span>SIZE: {t.size}</span>
                    <span>TRACKING: {t.tracking}</span>
                    <span>LEADING: {t.leading}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <p 
                    className="text-black font-display font-bold hover:text-[#11801c] transition-colors"
                    style={{ fontSize: t.level.includes('Display') ? '1.875rem' : t.level.includes('Headline') ? '1.5rem' : '1.125rem' }}
                  >
                    {t.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Iconography & Visual Style Guide */}
        {activeTab === 'icons' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {iconStyles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#11801c]/20 hover:border-[#11801c] hover:shadow-lg transition-all duration-300 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f4fbf6] border border-[#11801c]/20 flex items-center justify-center text-[#11801c] group-hover:bg-[#11801c] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base text-black group-hover:text-[#11801c] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STROKE: 1.5px</span>
                    <span className="text-[#11801c] font-semibold">VERDANT ACCENT</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
