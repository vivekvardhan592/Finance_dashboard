import React from 'react';

const AlphaOpportunities = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 text-sm sm:text-base">✦</span>
          <h3 className="font-semibold text-base sm:text-lg">
            ALPHA OPPORTUNITIES
          </h3>
        </div>
        <span className="text-[10px] sm:text-xs text-emerald-400">
          + $80/yr
        </span>
      </div>

      {/* 🔹 Opportunity Card */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 mb-3 sm:mb-4 hover:border-emerald-500/30 transition">
        
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">

          {/* LEFT */}
          <div className="min-w-0">
            <p className="font-medium text-sm sm:text-base">
              High-Yield Arbitrage
            </p>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 leading-relaxed">
              Move $2,000 from Chase Checking to Wealthfront Cash Account (5.00% APY)
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-left sm:text-right text-emerald-400 text-xs sm:text-sm font-medium whitespace-nowrap">
            +$80/yr
          </div>

        </div>
      </div>

      {/* 🔹 Opportunity Card */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 hover:border-emerald-500/30 transition">
        
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">

          {/* LEFT */}
          <div className="min-w-0">
            <p className="font-medium text-sm sm:text-base">
              Tax Loss Harvesting
            </p>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 leading-relaxed">
              Realize losses on ARKK position to offset recent TSLA gains.
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-left sm:text-right text-emerald-400 text-xs sm:text-sm font-medium whitespace-nowrap">
            +$320
          </div>

        </div>
      </div>

    </div>
  );
};

export default AlphaOpportunities;