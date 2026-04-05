// src/components/dashboard/RevenueCard.jsx
import React from 'react';
import { 
  useRevenueAndCapital 
} from '../../store/useFinanceStore';
import StatCard from '../ui/StatCard';

const RevenueCard = () => {
  // Use the dedicated selector hook (more performant)
  const { revenueGenerated, capitalDeployed } = useRevenueAndCapital();

  return (
    <StatCard 
      title="REVENUE GENERATED"
      value={`$${revenueGenerated.toLocaleString()}`}
    >
      <div className="mt-6 text-xs text-zinc-400">
        Deployed: <span className="text-white">${capitalDeployed.toLocaleString()}</span>
      </div>
      <div className="text-emerald-400 text-xs mt-1">Optimal</div>
    </StatCard>
  );
};

export default RevenueCard;