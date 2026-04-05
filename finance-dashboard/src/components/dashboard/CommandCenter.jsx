// src/components/dashboard/CommandCenter.jsx
import React from 'react';
import NetWorthCard from './NetWorthCard';
import RetentionCard from './RetentionCard';
import RevenueCard from './RevenueCard';
import PerformanceChart from './PerformanceChart';
import AlphaOpportunities from './AlphaOpportunities';
import CapitalAllocation from './CapitalAllocation';
import RecentExecutions from './RecentExecutions';

const CommandCenter = () => {
  return (
    <div className="w-full min-w-0 flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-6 md:px-8 pt-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter text-white">
            Command Center
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">
              Live market data sync active
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl text-sm font-medium text-white">
            Analyze
          </button>

          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-2xl text-sm">
            Deploy Capital
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 md:px-8 pb-8 flex flex-col min-w-0">
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <NetWorthCard />
          <RetentionCard />
          <RevenueCard />
        </div>

        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-w-0">
          
          <div className="lg:col-span-8 min-w-0">
            <PerformanceChart />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <AlphaOpportunities />
            <CapitalAllocation />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8">
          <RecentExecutions />
        </div>

      </div>
    </div>
  );
};

export default CommandCenter;