
import React from 'react';
import { Target, ShieldCheck, Globe, Award, Cpu, Zap, Box } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-32 px-4 bg-black min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-48">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/30 bg-amber-500/5 text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
              <Cpu className="w-3 h-3" /> Core Identity V.5
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 uppercase tracking-tighter leading-none">
              The Neural <br />
              <span className="text-gradient-gold italic">Consensus</span>
            </h1>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8 uppercase tracking-widest opacity-80">
              [EST_PROTOCOL_2018] Quantum AI Trade was engineered to dissolve the barriers between institutional high-frequency trading and the sovereign individual investor. 
            </p>
            <p className="text-slate-500 font-mono text-xs leading-relaxed uppercase tracking-widest">
              Our neural network clusters operate across 40 global zones, executing micro-second arbitrage and predictive positioning that defines the modern gold standard of wealth preservation.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/40 z-20"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/40 z-20"></div>
            <div className="relative overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Infrastructure" 
                className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/20"></div>
            </div>
            {/* HUD Overlay */}
            <div className="absolute top-8 right-8 text-amber-500/50 font-mono text-[8px] uppercase tracking-widest">
              Network_Status: Optimal <br />
              Encryption: Level_7
            </div>
          </div>
        </div>

        {/* Mission Cards - Sci-Fi Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-amber-500/10 border border-amber-500/10 mb-48">
          {[
            { icon: <Target className="w-8 h-8 text-amber-500" />, title: 'Mission', desc: 'Sovereign wealth creation through automated neural arbitrage nodes.' },
            { icon: <ShieldCheck className="w-8 h-8 text-amber-400" />, title: 'Security', desc: 'Obsidian-grade encryption and multi-sig vault protocols.' },
            { icon: <Globe className="w-8 h-8 text-amber-600" />, title: 'Global', desc: 'Unified liquidity access across 124 decentralized exchanges.' },
            { icon: <Award className="w-8 h-8 text-amber-300" />, title: 'Verified', desc: 'Ranked Tier 1 by Global Quantum Finance Audit 2025.' }
          ].map((item, i) => (
            <div key={i} className="bg-black p-12 hover:bg-amber-500/[0.02] transition-colors group">
              <div className="mb-10 text-amber-500 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-[0.2em]">{item.title}</h3>
              <p className="text-slate-500 text-xs font-mono leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Security Matrix */}
        <div className="glass-effect border border-amber-500/20 p-16 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-all"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Zap className="w-12 h-12 text-amber-500 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter">
              The Quantum <span className="text-gradient-gold">Shield</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm leading-relaxed mb-16 uppercase tracking-widest">
              Our infrastructure employs military-grade 0.01ms latency clusters, 2FA biometric key support, and 
              over $1.2B in segregated insurance coverage. Total capital integrity is our primary directive.
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {['AES-256 ENCRYPTED', 'SOC3 COMPLIANT', 'NODE_SYNC: 99.9%', 'FINRA NODE ID'].map((tag, i) => (
                <div key={i} className="flex items-center gap-3 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">
                  <Box className="w-3 h-3" /> {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
