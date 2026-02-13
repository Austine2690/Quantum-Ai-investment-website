
import React from 'react';
import { Shield, TrendingUp, Zap, PieChart, Building2, MapPin, Landmark } from 'lucide-react';
import { Plan, InvestmentTier } from './types';

export const INVESTMENT_PLANS: Plan[] = [
  {
    id: 'micro-plan',
    name: InvestmentTier.MICRO,
    minInvestment: 250,
    maxInvestment: 4999,
    roi: '12% Weekly',
    period: '30 Days',
    potentialProfit: 'Up to $599 weekly',
    features: ['Instant Deposits', 'Neural Signal Access', 'Standard Vault', 'Quantum Wallet'],
    color: 'amber'
  },
  {
    id: 'standard-plan',
    name: InvestmentTier.STANDARD,
    minInvestment: 5000,
    maxInvestment: 49999,
    roi: '22% Weekly',
    period: '60 Days',
    potentialProfit: 'Up to $10,999 weekly',
    features: ['Priority Compute', 'Holographic Analytics', 'Multi-sig Custody', 'Algorithm Backtesting'],
    color: 'yellow'
  },
  {
    id: 'growth-plan',
    name: InvestmentTier.GROWTH,
    minInvestment: 50000,
    maxInvestment: 105000,
    roi: '45% Monthly',
    period: '90 Days',
    potentialProfit: 'Up to $47,250 monthly',
    features: ['Dedicated AI Strategist', 'Zero-Latency Execution', 'Tax-Optimization AI', 'Private Equity Bridge'],
    color: 'orange'
  }
];

export const REAL_ESTATE_PROPERTIES = [
  {
    id: 're-1',
    title: 'The Gilded Penthouse',
    location: 'Dubai One Tower, UAE',
    price: '$2,450,000',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    tags: ['Royal', 'Hyper-Modern'],
    icon: <Building2 className="w-5 h-5" />
  },
  {
    id: 're-2',
    title: 'Neo-Tokyo Commerce',
    location: 'Shinjuku District, JP',
    price: '$8,200,000',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    tags: ['Prime', 'Tech-Hub'],
    icon: <Landmark className="w-5 h-5" />
  },
  {
    id: 're-3',
    title: 'Aurelia Eco-Villa',
    location: 'Amalfi Coast, IT',
    price: '$1,850,000',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    tags: ['Organic', 'Estate'],
    icon: <MapPin className="w-5 h-5" />
  }
];

export const FEATURES = [
  {
    icon: <Shield className="w-8 h-8 text-amber-500" />,
    title: 'Obsidian Security',
    description: 'Quantum-resistant encryption layers for absolute capital safety.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
    title: 'Neural Alpha',
    description: 'Predictive intelligence capturing market shifts before they happen.'
  },
  {
    icon: <PieChart className="w-8 h-8 text-amber-600" />,
    title: 'Smart Allocation',
    description: 'Automated portfolio balancing across high-liquidity gold markets.'
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-300" />,
    title: 'Atomic Payouts',
    description: 'Immediate liquidity processing through our private banking network.'
  }
];

export const STATS = [
  { label: 'Verified Nodes', value: '14.2K' },
  { label: 'Asset Throughput', value: '$3.8B' },
  { label: 'System Precision', value: '99.9%' },
  { label: 'Global Trust', value: 'Level 5' }
];
