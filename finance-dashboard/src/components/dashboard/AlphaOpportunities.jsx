// src/components/dashboard/AlphaOpportunities.jsx
import React from 'react';

const AlphaOpportunities = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">✦</span>
          <h3 className="font-semibold text-lg">ALPHA OPPORTUNITIES</h3>
        </div>
        <span className="text-xs text-emerald-400">+ $80/yr</span>
      </div>

      {/* High-Yield Arbitrage */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 mb-4 hover:border-emerald-500/30 transition">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">High-Yield Arbitrage</p>
            <p className="text-xs text-zinc-400 mt-1">Move $2,000 from Chase Checking to Wealthfront Cash Account (5.00% APY)</p>
          </div>
          <div className="text-right text-emerald-400 text-sm font-medium">+$80/yr</div>
        </div>
      </div>

      {/* Tax Loss Harvesting */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 hover:border-emerald-500/30 transition">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">Tax Loss Harvesting</p>
            <p className="text-xs text-zinc-400 mt-1">Realize losses on ARKK position to offset recent TSLA gains.</p>
          </div>
          <div className="text-right text-emerald-400 text-sm font-medium">+$320</div>
        </div>
      </div>
    </div>
  );
};

export default AlphaOpportunities;