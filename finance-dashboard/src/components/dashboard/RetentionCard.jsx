// src/components/dashboard/RetentionCard.jsx
import React from 'react';
import { 
  useCapitalRetentionRate, 
  useAnnualReturnRate 
} from '../../store/useFinanceStore';
import Card from '../ui/Card';

const RetentionCard = () => {
  // Use dedicated selectors from the store
  const capitalRetentionRate = useCapitalRetentionRate();
  const annualReturnRate = useAnnualReturnRate();

  // Calculate stroke dash offset
  const circumference = 282.74; // ≈ 2 * π * 45
  const offset = circumference - (circumference * capitalRetentionRate / 100);

  return (
    <Card>
      <p className="text-zinc-400 text-sm tracking-wide">CAPITAL RETENTION</p>
      
      <div className="flex items-center justify-center my-8">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#27272a" 
              strokeWidth="10"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-white">{capitalRetentionRate}</span>
            <span className="text-sm text-zinc-400 -mt-1">%</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-emerald-400 font-medium">
          Annual Return Rate: <span className="text-white">{annualReturnRate}%</span>
        </p>
      </div>
    </Card>
  );
};

export default RetentionCard;