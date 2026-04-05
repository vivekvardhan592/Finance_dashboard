// src/components/dashboard/NetWorthCard.jsx
import React from 'react';
import { 
  useNetWorth, 
  useYtdChange, 
  useFormattedNetWorth 
} from '../../store/useFinanceStore';
import StatCard from '../ui/StatCard';

const NetWorthCard = () => {
  // Best practice: Use individual selectors
  const netWorth = useNetWorth();
  const formattedNetWorth = useFormattedNetWorth();
  const ytdChange = useYtdChange();

  return (
    <StatCard 
      title="NET WORTH"
      value={formattedNetWorth}                    // Already formatted with $
      changePercent={ytdChange.percent}
      changeAmount={ytdChange.amount}               // Pass number, let StatCard format if needed
    />
  );
};

export default NetWorthCard;