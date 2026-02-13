
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Shield, Cpu, Orbit } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center overflow-hidden">
                <Cpu className="text-black w-6 h-6 relative z-10" />
                <Orbit className="absolute text-white/20 w-8 h-8 animate-spin-slow" />
              </div>
              <span className="text-xl font-black text-white uppercase tracking-tighter">
                QUANTUM<span className="text-amber-500">AI</span>TRADE
              </span>
            </Link>
            <p className="text-slate-500 text-xs font-mono leading-relaxed uppercase tracking-widest">
              The premier destination for high-frequency AI trading. Delivering consistent alpha through technological superiority and risk management.
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-amber-500/20 rounded-none flex items-center justify-center text-slate-500 hover:bg-amber-600 hover:text-black hover:border-amber-600 transition-all shadow-lg">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-amber-500 font-black mb-8 uppercase text-[10px] tracking-[0.3em]">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link to="/plans" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Yield Strategies</Link></li>
              <li><Link to="/dashboard" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Quantum Terminal</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Market Research</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">API Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-black mb-8 uppercase text-[10px] tracking-[0.3em]">Foundation</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Corporate Identity</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Global Compliance</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Media Relations</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Charter</Link></li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 border border-amber-500/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all"></div>
            <Shield className="w-10 h-10 text-amber-500 mb-6" />
            <h4 className="text-white font-black mb-2 uppercase tracking-tight text-xs">Institutional Shield</h4>
            <p className="text-slate-500 text-[10px] mb-6 font-mono leading-relaxed uppercase tracking-widest">Multi-signature cold storage and insurance protocols for all accounts.</p>
            <div className="flex gap-3">
              <div className="h-6 w-10 bg-amber-500/5 border border-amber-500/10"></div>
              <div className="h-6 w-10 bg-amber-500/5 border border-amber-500/10"></div>
              <div className="h-6 w-10 bg-amber-500/5 border border-amber-500/10"></div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[9px] text-center md:text-left uppercase tracking-widest font-black leading-relaxed max-w-2xl font-mono">
            &copy; {new Date().getFullYear()} Quantum AI Trade Global. Risk Notice: Digital asset trading involves substantial risk of loss. Always trade responsibly.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-amber-500 text-[9px] font-black uppercase tracking-widest transition-colors font-mono">Terms</a>
            <a href="#" className="text-slate-600 hover:text-amber-500 text-[9px] font-black uppercase tracking-widest transition-colors font-mono">Security</a>
            <a href="#" className="text-slate-600 hover:text-amber-500 text-[9px] font-black uppercase tracking-widest transition-colors font-mono">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
