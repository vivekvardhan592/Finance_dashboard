import React from 'react';
import { 
  useRevenueAndCapital 
} from '../../store/useFinanceStore';
import StatCard from '../ui/StatCard';
import { Wallet, CheckCircle } from 'lucide-react';

const RevenueCard = () => {
  const { revenueGenerated, capitalDeployed } = useRevenueAndCapital();

  return (
    <StatCard 
      title="REVENUE GENERATED"
      value={`$${revenueGenerated.toLocaleString()}`}
      icon={Wallet}
    >

      {/* 🔹 Bottom Section (Structured) */}
      <div className="mt-6 flex items-center justify-between">

        {/* Left */}
        <div className="flex flex-col">
          <span className="text-zinc-500 text-md tracking-wide">
            Capital Deployed
          </span>
          <span className="text-white text-md font-medium mt-1">
            ${capitalDeployed.toLocaleString()}
          </span>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-1 text-emerald-400 text-lg font-medium">
          <CheckCircle size={14} />
          Optimal
        </div>

      </div>

    </StatCard>
  );
};

export default RevenueCard;