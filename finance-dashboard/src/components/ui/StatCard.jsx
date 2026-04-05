// src/components/common/StatCard.jsx
import React from 'react';
import Card from './Card';

const StatCard = ({ 
  title, 
  value, 
  changePercent, 
  changeAmount, 
  children 
}) => {
  return (
    <Card>
      <p className="text-zinc-400 text-sm tracking-wide">{title}</p>
      
      <p className="text-5xl font-semibold mt-4 tracking-tighter">
        {value}
      </p>

      {changePercent && (
        <div className="flex items-center gap-3 mt-6">
          <span className="text-emerald-400 font-medium text-lg">
            +{changePercent}% YTD
          </span>
          {changeAmount && (
            <span className="text-zinc-500">+{changeAmount}</span>
          )}
        </div>
      )}

      {children}
    </Card>
  );
};

export default StatCard;