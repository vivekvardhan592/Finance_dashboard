import React from 'react';
import Card from './Card';
import { TrendingUp } from 'lucide-react';

const StatCard = ({ 
  title, 
  value, 
  changePercent, 
  changeAmount, 
  icon: Icon = TrendingUp,
  children 
}) => {
  return (
    <Card className="relative p-6 sm:p-7 overflow-hidden">

      {/* 🔥 Soft Glow Background */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-20 pointer-events-none"></div>

      {/* 🔹 Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-zinc-400 text-sm tracking-wide">
          {title}
        </p>

        <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center">
          <Icon size={18} className="text-emerald-400" />
        </div>
      </div>
      
      {/* 🔹 Main Value (KEEP BIG) */}
      <p className="text-5xl font-semibold mt-6 tracking-tighter text-white">
        {value}
      </p>

      {/* 🔹 Change Section (more structured) */}
      {changePercent && (
        <div className="flex items-center gap-3 mt-6">

          <div className="flex items-center gap-1 text-emerald-400 font-medium text-lg">
            <TrendingUp size={16} />
            +{changePercent}%
          </div>

          <span className="text-zinc-500 text-sm">
            YTD
          </span>

          {changeAmount && (
            <span className="text-zinc-400 text-sm">
              • +{changeAmount}
            </span>
          )}
        </div>
      )}

      {/* 🔹 Bottom Content (fills space naturally) */}
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}

    </Card>
  );
};

export default StatCard;