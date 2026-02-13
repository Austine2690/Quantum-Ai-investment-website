
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, CheckCircle2, DollarSign, Bitcoin, Coins, Building2, MapPin, Target, Globe } from 'lucide-react';
import { FEATURES, STATS, REAL_ESTATE_PROPERTIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* HUD Borders */}
      <div className="fixed top-24 left-8 w-24 h-px bg-amber-500/20 z-10 hidden lg:block"></div>
      <div className="fixed top-24 right-8 w-24 h-px bg-amber-500/20 z-10 hidden lg:block"></div>
      <div className="fixed bottom-12 left-8 w-1 h-32 bg-gradient-to-t from-amber-500/40 to-transparent z-10 hidden lg:block"></div>

      {/* Edge-to-Edge Ticker */}
      <div className="w-full h-10 flex items-center overflow-hidden z-20 relative bg-black border-b border-amber-500/10">
        <iframe
          scrolling="no"
          allowTransparency={true}
          frameBorder="0"
          src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AGBPUSD%22%2C%22title%22%3A%22GBP%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Gold%2FBTC%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Gold%2FETH%22%7D%5D%2C%22showSymbolLogo%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%7D"
          style={{ width: '100%', height: '36px' }}
        ></iframe>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 px-4 overflow-hidden min-h-[90vh] flex items-center">
        {/* Sci-Fi Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-amber-500/5 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500/10 rounded-full"></div>
          <div className="absolute top-20 left-10 w-40 h-40 bg-amber-500/5 blur-3xl animate-orbit"></div>
          
          {/* Animated Matrix-like Gold Dots */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"></span>
            Neural Finance Protocol v3.1
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] mb-12 tracking-[-0.05em] uppercase">
            The Gold <br />
            <span className="text-gradient-gold italic">Standard</span>
          </h1>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-mono uppercase tracking-widest mb-16 leading-relaxed opacity-80">
            [SYS_LOG] Capturing market inefficiencies through quantum-inspired predictive nodes. Institutional yield. Zero-latency. Absolute security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              to="/plans"
              className="w-full sm:w-auto px-12 py-5 bg-amber-600 hover:bg-amber-500 text-black font-black text-xs uppercase tracking-[0.3em] gold-glow transition-all flex items-center justify-center gap-3"
            >
              Initiate Growth <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/real-estate"
              className="w-full sm:w-auto px-12 py-5 bg-black hover:bg-white/5 text-amber-500 border border-amber-500/40 font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3"
            >
              <Building2 className="w-4 h-4" />
              Landed Wealth
            </Link>
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="py-32 px-4 relative border-y border-amber-500/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
            <div className="max-w-xl">
              <div className="text-amber-500 font-black text-[10px] uppercase tracking-[0.5em] mb-6">Secured Assets</div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
                Tangible <span className="text-gradient-gold">Alpha</span>
              </h2>
              <p className="text-slate-500 text-sm font-mono leading-relaxed">
                Convert digital profit into physical territory. Quantum AI Trade provides a direct bridge from algorithmic yield to world-class real estate acquisition. No banks. No latency.
              </p>
            </div>
            <Link 
              to="/real-estate" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
            >
              Browse Estates <ArrowUpRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REAL_ESTATE_PROPERTIES.map((prop) => (
              <div key={prop.id} className="group glass-effect rounded-none border border-amber-500/10 relative overflow-hidden transition-all hover:border-amber-500/50">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 text-amber-500">
                    <div className="w-8 h-8 border border-amber-500/30 flex items-center justify-center backdrop-blur-md">
                       <Target className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-8 relative">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">{prop.title}</h3>
                  <div className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-6 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-amber-500" /> {prop.location}
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-amber-500/10">
                    <div className="text-amber-500 font-black text-xl">{prop.price}</div>
                    <div className="w-10 h-10 border border-amber-500/40 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Post Modern Grid */}
      <section className="py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-amber-500/10 border border-amber-500/10">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-black p-12 hover:bg-white/[0.02] transition-colors group">
                <div className="mb-10 text-amber-500 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-black text-white mb-4 uppercase tracking-[0.1em]">{feature.title}</h3>
                <p className="text-slate-500 text-xs font-mono leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
