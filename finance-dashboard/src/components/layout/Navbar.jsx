// src/components/layout/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const markets = [
    { symbol: 'MSFT', price: '420.55', change: '+0.88%' },
    { symbol: 'TSLA', price: '177.99', change: '-2.43%' },
    { symbol: 'SPY', price: '524.10', change: '+0.62%' },
    { symbol: 'BTC', price: '71,240', change: '+1.81%' },
    { symbol: 'AMZN', price: '191.50', change: '+1.10%' },
    { symbol: 'GOOGL', price: '172.30', change: '-0.3%' },
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-black">C</div>
          <span className="text-2xl font-bold tracking-tighter">CAPITAL</span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-emerald-400">Portfolio</a>
          <a href="#" className="hover:text-white transition">Markets</a>
          <a href="#" className="hover:text-white transition">Allocations</a>
          <a href="#" className="hover:text-white transition">Analytics</a>
        </div>
      </div>

      {/* Market Tickers */}
      <div className="flex items-center gap-6 text-sm overflow-x-auto hide-scrollbar max-w-md">
        {markets.map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-medium">{item.symbol}</span>
            <span>${item.price}</span>
            <span className={`text-xs ${item.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-xl text-sm flex items-center gap-2">
          <span>Standard</span>
          <span className="text-xs text-emerald-400">Pro</span>
        </button>
        
        <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-sm font-medium">JD</div>
      </div>
    </nav>
  );
};

export default Navbar;