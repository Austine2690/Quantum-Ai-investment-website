
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ArrowUpRight, DollarSign, Wallet, History, CreditCard, Lock } from 'lucide-react';
import { AuthUser } from '../types';

const data = [
  { date: 'Jan', value: 4500 },
  { date: 'Feb', value: 5200 },
  { date: 'Mar', value: 6100 },
  { date: 'Apr', value: 5800 },
  { date: 'May', value: 7200 },
  { date: 'Jun', value: 8900 },
];

const Dashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<AuthUser | null>(null);
  const selectedPlan = searchParams.get('plan');
  const navigate = useNavigate();

  useEffect(() => {
    // Fix: Updated storage key to 'quantum_user' for consistency with Auth.tsx
    const storedUser = localStorage.getItem('quantum_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center border border-white/10 mb-8">
          <Lock className="w-10 h-10 text-indigo-500" />
        </div>
        <h1 className="text-3xl font-black text-white mb-4">Dashboard Locked</h1>
        <p className="text-slate-400 max-w-md mb-8">
          Please log in to your account to view your portfolio, manage active investments, and track market performance.
        </p>
        <Link
          to="/login"
          state={{ from: { pathname: '/dashboard' } }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-600/20"
        >
          Secure Client Login
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            Portfolio <span className="text-indigo-500">Summary</span>
          </h1>
          <p className="text-slate-400">Wealth insights for <span className="text-white font-bold">{user.name}</span></p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-xl border border-white/10 text-sm font-semibold transition-all flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Deposit
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20">
            Withdraw Profits
          </button>
        </div>
      </div>

      {selectedPlan && (
        <div className="mb-8 p-6 bg-indigo-500/10 border border-indigo-500/30 rounded-[30px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="bg-indigo-500 p-3 rounded-2xl shadow-lg shadow-indigo-500/20">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Activating New Strategy</p>
              <h4 className="text-white text-xl font-black">{selectedPlan.replace('-', ' ').toUpperCase()}</h4>
            </div>
          </div>
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-slate-950 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all">
            Proceed to Payment
          </button>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Balance', value: '$24,500.00', icon: <Wallet className="text-blue-400" />, change: '+12.5%' },
          { label: 'Total Profits', value: '$4,120.45', icon: <DollarSign className="text-emerald-400" />, change: '+8.2%' },
          { label: 'Active Investments', value: '3 Plans', icon: <TrendingUp className="text-indigo-400" />, change: 'Stable' },
          { label: 'Next Payout', value: '$850.00', icon: <History className="text-amber-400" />, change: 'In 3 Days' }
        ].map((stat, i) => (
          <div key={i} className="glass-effect p-6 rounded-[32px] border border-white/5 transition-all hover:border-indigo-500/30">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-2xl">{stat.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-slate-400 font-medium mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Performance Chart */}
        <div className="lg:col-span-2 glass-effect p-8 rounded-[40px] border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Performance Overview</h3>
            <select className="bg-slate-950 text-xs text-slate-400 border border-white/10 rounded-lg px-3 py-1.5 focus:outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="glass-effect p-8 rounded-[40px] border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { type: 'Profit Payout', amount: '+$450.00', date: '2 hours ago', status: 'Completed' },
              { type: 'Re-investment', amount: '-$1,200.00', date: 'Yesterday', status: 'Processing' },
              { type: 'Profit Payout', amount: '+$312.50', date: '3 days ago', status: 'Completed' },
              { type: 'New Deposit', amount: '+$5,000.00', date: '5 days ago', status: 'Completed' }
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between pb-6 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.amount.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-indigo-500/10 text-indigo-500'}`}>
                    <ArrowUpRight className={`w-5 h-5 ${tx.amount.startsWith('-') ? 'rotate-180' : ''}`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{tx.type}</p>
                    <p className="text-xs text-slate-500">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-300'}`}>{tx.amount}</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl text-sm font-bold transition-all border border-white/5">
            View All History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
