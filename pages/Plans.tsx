
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, TrendingUp, Hexagon, Cpu } from 'lucide-react';
import { INVESTMENT_PLANS } from '../constants';

const Plans: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-none border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">
            <Cpu className="w-3 h-3" /> System Tiers V.1
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter">
            Capital <span className="text-gradient-gold">Nodes</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm font-mono tracking-widest leading-relaxed">
            Select a neural deployment strategy. Institutional grade returns processed at quantum speed. Min entry: $250 USD.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {INVESTMENT_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col bg-[#080808] border ${
                plan.name === 'Standard' ? 'border-amber-500 gold-glow' : 'border-white/5'
              } p-10 transition-all hover:border-amber-500 group`}
            >
              {plan.name === 'Standard' && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-amber-600 text-black text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2">
                  Optimal
                </div>
              )}

              <div className="mb-12">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-amber-500 transition-colors">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black text-white">{plan.roi.split(' ')[0]}</span>
                  <span className="text-amber-500 font-bold text-lg uppercase font-mono">{plan.roi.split(' ')[1]}</span>
                </div>
                <p className="text-slate-500 text-[10px] uppercase font-mono tracking-widest border-l-2 border-amber-500 pl-4">
                  Cycle Length: {plan.period}
                </p>
              </div>

              <div className="p-8 bg-black border border-white/5 mb-10 group-hover:border-amber-500/30 transition-colors">
                <div className="flex justify-between text-[10px] font-mono mb-4">
                  <span className="text-slate-500 uppercase">Limit</span>
                  <span className="text-white font-bold">${plan.minInvestment.toLocaleString()} — ${plan.maxInvestment.toLocaleString()}</span>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-1">Projected Cycle Yield</p>
                  <p className="text-amber-500 font-black text-2xl tracking-tighter">{plan.potentialProfit}</p>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <Hexagon className="w-3.5 h-3.5 text-amber-500/40 group-hover/item:text-amber-500 transition-colors" />
                    <span className="text-xs text-slate-400 font-mono tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={`/dashboard?plan=${plan.id}`}
                className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-black font-black text-[10px] text-center uppercase tracking-[0.4em] transition-all shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                Deploy Strategy
              </Link>
            </div>
          ))}
        </div>

        {/* Private Access HUD element */}
        <div className="mt-32 p-12 glass-effect border border-amber-500/20 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-500/40"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-500/40"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-10">
              <div className="w-24 h-24 bg-amber-500/5 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0 shadow-inner">
                <Info className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter">Sovereign Tier Access</h3>
                <p className="text-slate-500 font-mono text-xs leading-relaxed max-w-xl uppercase tracking-widest">
                  Capital deployments exceeding <span className="text-amber-500">$105,000</span> require direct orbital verification. Custom liquidity paths and private signal relays available.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all"
            >
              Request High-Net link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
