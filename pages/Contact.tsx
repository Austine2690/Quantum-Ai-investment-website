
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, ShieldAlert, Wifi } from 'lucide-react';

const Contact: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("[SYSTEM_MSG] Inquiry transmitted to the Quantum Executive Team at austinensoha50@gmail.com. Response latency: < 4 hours.");
  };

  return (
    <div className="py-32 px-4 bg-black min-h-screen relative overflow-hidden text-slate-100">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">
            <Wifi className="w-3.5 h-3.5 animate-pulse" /> Channel_Open: Support
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter">
            Neural <span className="text-gradient-gold italic">Relay</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm font-mono tracking-widest leading-relaxed uppercase opacity-80">
            [SYS_MSG] Direct interface with our specialized account managers and the Quantum AI Trade executive council.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details Grid */}
          <div className="lg:col-span-1 space-y-px bg-amber-500/10 border border-amber-500/10 h-fit">
            {[
              { icon: <Mail className="text-amber-500" />, title: 'Executive Link', info: 'austinensoha50@gmail.com', sub: 'Priority Dispatch' },
              { icon: <Phone className="text-amber-500" />, title: 'Voice Relay', info: '+1 (888) QUANTUM-AI', sub: 'Encrypted Hotline' },
              { icon: <MessageCircle className="text-amber-500" />, title: 'Signal Chat', info: 'Channel ID: 0xTrade', sub: 'AES-256 Tunnel' },
              { icon: <MapPin className="text-amber-500" />, title: 'Primary Node', info: '150 Greenwich St, NY', sub: 'WTC Tower 4' }
            ].map((item, i) => (
              <div key={i} className="bg-black p-8 group hover:bg-amber-500/[0.03] transition-colors">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-amber-500/5 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    {React.cloneElement(item.icon as any, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-2">{item.title}</h4>
                    <p className="text-lg font-black text-white tracking-tighter break-all">{item.info}</p>
                    <p className="text-[8px] text-amber-500/60 font-mono uppercase tracking-[0.3em] mt-2">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-[#080808] p-8 border-t border-amber-500/10">
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-amber-500 animate-pulse" />
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Latency_Target</p>
                  <p className="text-white font-black text-sm uppercase tracking-widest">Under 4 Minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - High End Sci-Fi */}
          <div className="lg:col-span-2 glass-effect p-12 md:p-16 border border-amber-500/20 relative group">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-amber-500/40"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-500/40"></div>
            
            <h3 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter flex items-center gap-4">
              <Send className="text-amber-500 w-6 h-6" />
              Initialize Transmission
            </h3>
            
            <form className="grid md:grid-cols-2 gap-10" onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] ml-1">Entity_Identity</label>
                <input 
                  type="text" 
                  placeholder="EX: ALEX_KNIGHT"
                  required
                  className="w-full bg-black border border-amber-500/20 px-6 py-5 text-amber-500 text-xs font-mono focus:outline-none focus:border-amber-500 transition-all uppercase placeholder:text-slate-800"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] ml-1">Relay_Terminal (Email)</label>
                <input 
                  type="email" 
                  placeholder="USER@QUANTUMAITRADE.IO"
                  required
                  className="w-full bg-black border border-amber-500/20 px-6 py-5 text-amber-500 text-xs font-mono focus:outline-none focus:border-amber-500 transition-all uppercase placeholder:text-slate-800"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] ml-1">Protocol_Subject</label>
                <select className="w-full bg-black border border-amber-500/20 px-6 py-5 text-amber-500 text-xs font-mono focus:outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer uppercase">
                  <option className="bg-black">Yield Inquiry</option>
                  <option className="bg-black">Account Synchronization</option>
                  <option className="bg-black">Verification Node Support</option>
                  <option className="bg-black">Institutional Partnership</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-4">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] ml-1">Transmission_Data</label>
                <textarea 
                  rows={6}
                  placeholder="INPUT_DETAILED_PARAMETERS..."
                  required
                  className="w-full bg-black border border-amber-500/20 px-6 py-5 text-amber-500 text-xs font-mono focus:outline-none focus:border-amber-500 resize-none transition-all uppercase placeholder:text-slate-800"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit"
                  className="w-full py-6 bg-amber-600 hover:bg-amber-500 text-black font-black uppercase tracking-[0.4em] text-xs transition-all gold-glow"
                >
                  Transmit Message Buffer
                </button>
                <div className="mt-8 flex items-center justify-center gap-3 text-[8px] text-slate-600 font-black uppercase tracking-[0.5em]">
                  <ShieldAlert className="w-3 h-3" /> Encrypted Endpoint Verified
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
