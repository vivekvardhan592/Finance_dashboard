import React from 'react';
import { 
  useCapitalRetentionRate, 
  useAnnualReturnRate 
} from '../../store/useFinanceStore';
import Card from '../ui/Card';

const RetentionCard = () => {
  const capitalRetentionRate = useCapitalRetentionRate();
  const annualReturnRate = useAnnualReturnRate();

  const circumference = 282.74;
  const offset = circumference - (circumference * capitalRetentionRate / 100);

  return (
    <Card>
      <p className="text-zinc-400 text-xs sm:text-sm tracking-wide">
        CAPITAL RETENTION
      </p>
      
      {/* 🔹 Chart */}
      <div className="flex items-center justify-center my-4 sm:my-6 lg:my-8">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">

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

          {/* 🔹 Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              {capitalRetentionRate}
            </span>
            <span className="text-[10px] sm:text-xs text-zinc-400 -mt-1">
              %
            </span>
          </div>

        </div>
      </div>

      {/* 🔹 Footer */}
      <div className="text-center">
        <p className="text-xs sm:text-sm text-emerald-400 font-medium">
          Annual Return Rate:{" "}
          <span className="text-white">
            {annualReturnRate}%
          </span>
        </p>
      </div>
    </Card>
  );
};

export default RetentionCard;