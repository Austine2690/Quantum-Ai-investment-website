
import React from 'react';
import { Building2, MapPin, Landmark, ArrowLeft, ShieldCheck, Wallet, ChevronRight, LayoutGrid, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REAL_ESTATE_PROPERTIES } from '../constants';

const RealEstate: React.FC = () => {
  const handlePurchase = (propName: string) => {
    alert(`[SYSTEM_MSG] Initializing orbital purchase protocol for: ${propName}. Encryption key generated. Ensure profit balance is sufficient.`);
  };

  return (
    <div className="py-24 px-4 bg-black min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-amber-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <Link to="/" className="inline-flex items-center gap-3 text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] hover:text-amber-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Terminate Link / Return
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">
              <Globe className="w-4 h-4" /> Global Territory Exchange
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-white uppercase tracking-[-0.05em] leading-none mb-8">
              Landed <br /><span className="text-gradient-gold italic">Relics</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-sm font-mono leading-relaxed uppercase tracking-widest opacity-80">
              Convert quantum signal yield into sovereign territory. Secure high-liquidity estates across the major economic nodes of the planet with Quantum AI Trade.
            </p>
          </div>
          
          <div className="p-10 glass-effect border border-amber-500/20 flex flex-col items-end gap-2 group">
             <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em] mb-1">Neural Yield Available</p>
                  <div className="text-4xl font-black text-amber-500 tracking-tighter group-hover:scale-105 transition-transform">$4,120.45</div>
                </div>
                <div className="w-14 h-14 bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <Wallet className="w-7 h-7" />
                </div>
             </div>
             <div className="mt-4 text-[10px] text-emerald-500/80 font-mono animate-pulse uppercase tracking-widest">
               [SYNC_STATUS: ENCRYPTED]
             </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-amber-500/10 border border-amber-500/10 mb-40">
          {REAL_ESTATE_PROPERTIES.map((prop) => (
            <div key={prop.id} className="group bg-black flex flex-col relative transition-all duration-500">
              <div className="h-[450px] overflow-hidden relative">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* HUD Overlay on Image */}
                <div className="absolute top-6 left-6 flex gap-3">
                  {prop.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-black/80 border border-amber-500/30 text-amber-500 text-[9px] font-black uppercase tracking-[0.3em]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-amber-500 transition-colors">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {prop.location}
                  </div>
                </div>
              </div>

              <div className="p-12 flex-1 flex flex-col bg-[#050505]">
                <div className="space-y-6 mb-12">
                  <div className="flex justify-between items-end border-b border-amber-500/10 pb-4">
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Valuation</span>
                    <span className="text-amber-500 font-black text-2xl tracking-tighter">{prop.price}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-amber-500/10 pb-4">
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Entity Status</span>
                    <span className="text-white text-[10px] font-mono uppercase tracking-widest">Full Ownership Node</span>
                  </div>
                </div>

                <button 
                  onClick={() => handlePurchase(prop.title)}
                  className="w-full py-6 bg-white/5 border border-white/10 hover:bg-amber-600 hover:text-black hover:border-amber-600 text-white font-black uppercase tracking-[0.5em] text-[10px] transition-all flex items-center justify-center gap-3 group/btn"
                >
                  Acquire Asset <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Info */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-10 bg-amber-500/5 blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
              alt="Architecture" 
              className="relative grayscale border border-amber-500/20 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* HUD element over image */}
            <div className="absolute bottom-6 right-6 w-32 h-32 border-b-2 border-r-2 border-amber-500/50"></div>
          </div>
          <div className="space-y-12">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Legal <br /><span className="text-gradient-gold italic">Protocols</span></h2>
            <div className="space-y-10">
              {[
                { icon: <ShieldCheck />, title: 'Immutable Proof', desc: 'Each acquisition is recorded on our private blockchain node for absolute title security.' },
                { icon: <Landmark />, title: 'Tax-Free Routing', desc: 'Leverage our institutional bridges for offshore asset holding and tax neutrality.' },
                { icon: <LayoutGrid />, title: 'Facility Mgmt', desc: 'Autonomous AI management of rental yields and facility maintenance nodes.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-mono leading-relaxed uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
