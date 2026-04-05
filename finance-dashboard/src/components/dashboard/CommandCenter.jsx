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

        {/* Left */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Command Center
          </h1>

          <div className="flex items-center gap-2 mt-1 sm:mt-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-xs sm:text-sm font-medium">
              Live market data sync active
            </span>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-3 sm:px-5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs sm:text-sm transition">
            Analyze
          </button>

          <button className="flex-1 sm:flex-none px-3 sm:px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-medium text-xs sm:text-sm transition">
            Deploy Capital
          </button>
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

        {/* 🔹 MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 flex flex-col gap-4 sm:gap-6">

            {/* Chart inside container */}
            <ChartContainer title="Performance Overview">
              <PerformanceChart />
            </ChartContainer>

            <InsightsCard />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <AlphaOpportunities />
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