import React from 'react';
import { 
  useNetWorth, 
  useYtdChange, 
  useFormattedNetWorth 
} from '../../store/useFinanceStore';
import StatCard from '../ui/StatCard';
import { DollarSign, TrendingUp } from 'lucide-react';

const NetWorthCard = () => {
  const netWorth = useNetWorth();
  const formattedNetWorth = useFormattedNetWorth();
  const ytdChange = useYtdChange();

  return (
    <StatCard 
      title="NET WORTH"
      value={formattedNetWorth}
      changePercent={ytdChange.percent}
      changeAmount={ytdChange.amount}
      icon={DollarSign}
    >

      {/* 🔹 Bottom Section (Fills Space Smartly) */}
      <div className="mt-6 flex items-center justify-between">

        {/* Left: Growth Label */}
        <div className="flex flex-col">
          <span className="text-zinc-500 text-md tracking-wide">
            Growth Trend
          </span>
          <span className="text-white text-md font-medium mt-1">
            Positive Momentum
          </span>
        </div>

        {/* Right: Indicator */}
        <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
          <TrendingUp size={14} />
          Strong
        </div>

      </div>

    </StatCard>
  );
};

export default NetWorthCard;