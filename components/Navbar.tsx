
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Cpu, LogOut, User as UserIcon, Orbit, Building2, Shield } from 'lucide-react';
import { AuthUser } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('quantum_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('quantum_user');
    setUser(null);
    navigate('/');
  };

  const navLinks = [
    { name: 'Terminal', path: '/' },
    { name: 'Wealth Tiers', path: '/plans' },
    { name: 'Estates', path: '/real-estate' },
    { name: 'Foundation', path: '/about' },
    { name: 'Support', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 bg-black border border-amber-500/40 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/20 transition-all"></div>
                <Shield className="text-amber-500 w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="absolute w-20 h-20 border border-amber-500/10 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-black tracking-[0.2em] text-white uppercase hidden lg:block">
                QUANTUM<span className="text-amber-500 font-bold">AI</span><span className="text-slate-500 ml-1 font-medium">TRADE</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-amber-400 relative group ${
                  isActive(link.path) ? 'text-amber-500' : 'text-slate-500'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-amber-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            {user?.isLoggedIn ? (
              <div className="flex items-center gap-4 pl-8 border-l border-amber-500/20">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-[10px] font-black text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-widest"
                >
                  <UserIcon className="w-3.5 h-3.5" />
                  Access Portal
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-amber-500/5 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 p-2 rounded-lg transition-all"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="relative overflow-hidden px-8 py-2.5 bg-amber-600 hover:bg-amber-700 text-black rounded-sm font-black text-[10px] uppercase tracking-[0.2em] transition-all gold-glow"
              >
                Establish Link
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-amber-500/20 px-4 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-black uppercase tracking-[0.3em] transition-colors ${
                isActive(link.path) ? 'text-amber-500' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-amber-600 text-black py-4 rounded-sm font-black uppercase tracking-widest text-xs"
          >
            Terminal Access
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
