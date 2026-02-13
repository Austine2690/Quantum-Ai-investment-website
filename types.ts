
export enum InvestmentTier {
  MICRO = 'Micro',
  STANDARD = 'Standard',
  GROWTH = 'Growth'
}

export interface Plan {
  id: string;
  name: InvestmentTier;
  minInvestment: number;
  maxInvestment: number;
  roi: string;
  period: string;
  features: string[];
  color: string;
  potentialProfit: string;
}

export interface AuthUser {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface UserPortfolio {
  balance: number;
  totalProfit: number;
  activeInvestments: number;
  history: { date: string; value: number }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
