import React from 'react';
import NetWorthCard from './NetWorthCard';
import RetentionCard from './RetentionCard';
import RevenueCard from './RevenueCard';
import PerformanceChart from './PerformanceChart';
import AlphaOpportunities from './AlphaOpportunities';
import CapitalAllocation from './CapitalAllocation';
import RecentExecutions from './RecentExecutions';
import InsightsCard from './InsightsCard';
import ChartContainer from '../ui/ChartContainer';

const CommandCenter = () => {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8">

      {/* 🔹 HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Dashboard
          </h1>

          <div className="flex items-center gap-2 mt-1 sm:mt-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-xs sm:text-sm font-medium">
              Live market data sync active
            </span>
          </div>
        </div>

      

      </div>

      {/* 🔹 CONTENT */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 flex flex-col gap-6 sm:gap-8 w-full">

        {/* 🔹 STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <NetWorthCard />
          <RetentionCard />
          <RevenueCard />
        </div>

        {/* 🔥 PERFECT GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">

          {/* 🔹 ROW 1 */}
          <div className="xl:col-span-2">
            <ChartContainer title="Performance Overview">
              <PerformanceChart />
            </ChartContainer>
          </div>

          <div>
            <AlphaOpportunities />
          </div>

          {/* 🔹 ROW 2 */}
          <div className="xl:col-span-2">
            <InsightsCard />
          </div>

          <div>
            <CapitalAllocation />
          </div>

        </div>

        {/* 🔹 BOTTOM */}
        <div className="w-full">
          <RecentExecutions />
        </div>

      </div>
    </div>
  );
};

export default CommandCenter;