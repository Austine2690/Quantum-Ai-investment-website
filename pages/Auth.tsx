
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, User, Github, Chrome as Google, ArrowRight, Cpu, Orbit } from 'lucide-react';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth logic
    const userData = {
      name: isLogin ? 'Alexander' : name,
      email: email,
      isLoggedIn: true
    };
    localStorage.setItem('quantum_user', JSON.stringify(userData));
    
    // Check for redirect
    const from = (location.state as any)?.from?.pathname || '/dashboard';
    navigate(from, { replace: true });
    window.location.reload(); // Refresh to update context/navbar
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="w-full max-w-md glass-effect rounded-[48px] p-8 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-3xl rounded-full"></div>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-[24px] mb-8 shadow-2xl shadow-indigo-600/40 relative group">
            <Cpu className="text-white w-10 h-10 relative z-10" />
            <Orbit className="absolute text-white/30 w-16 h-16 animate-spin-slow" />
          </div>
          <h1 className="text-4xl font-black text-white mb-3 uppercase tracking-tighter">
            {isLogin ? 'Quantum Access' : 'Join Elite'}
          </h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">
            {isLogin ? 'Secure investor authentication' : 'Start your algorithmic journey'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alexander Knight"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Terminal</label>
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="investor@quantumaidtrade.io"
                className="w-full bg-slate-950 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Passkey</label>
              {isLogin && <button type="button" className="text-[10px] font-black text-indigo-400 hover:text-indigo-300 uppercase tracking-widest">Recovery?</button>}
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-indigo-600/30 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs group"
          >
            {isLogin ? 'Initialize Session' : 'Create Profile'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="my-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Security Protocol</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-xs font-black uppercase tracking-widest transition-all">
            <Google className="w-5 h-5" />
            Google
          </button>
          <button className="flex items-center justify-center gap-3 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-xs font-black uppercase tracking-widest transition-all">
            <Github className="w-5 h-5" />
            Github
          </button>
        </div>

        <p className="mt-12 text-center text-slate-500 font-bold text-xs">
          {isLogin ? "New to Quantum?" : "Existing Client?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-400 hover:text-indigo-300 transition-colors uppercase ml-1"
          >
            {isLogin ? 'Register Here' : 'Login Terminal'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
