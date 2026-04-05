import React from 'react';
import { Menu } from 'lucide-react';
import { useRole, useSetRole } from '../../store/useFinanceStore';

const Navbar = ({ setIsOpen }) => {
  const role = useRole();
  const setRole = useSetRole();

  const markets = [
    { symbol: 'MSFT', price: '420.55', change: '+0.88%' },
    { symbol: 'TSLA', price: '177.99', change: '-2.43%' },
    { symbol: 'SPY', price: '524.10', change: '+0.62%' },
    { symbol: 'BTC', price: '71,240', change: '+1.81%' },
    { symbol: 'AMZN', price: '191.50', change: '+1.10%' },
    { symbol: 'GOOGL', price: '172.30', change: '-0.3%' },
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* 🔹 LEFT SECTION */}
      <div className="flex items-center gap-4 lg:gap-8">

        {/* ✅ Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={22} />
        </button>

        {/* ✅ Nav Links (hidden on small screens) */}
       
      </div>

      {/* 🔹 MARKET TICKERS (Adaptive Width) */}
      <div className="flex-1 mx-4 hidden sm:block">
        <div className="flex items-center gap-6 text-sm overflow-x-auto hide-scrollbar">
          {markets.map((item, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-medium">{item.symbol}</span>
              <span>${item.price}</span>
              <span
                className={`text-xs ${
                  item.change.startsWith('+')
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 RIGHT SECTION */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

        {/* ✅ Role Switcher (hidden on very small screens) */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="hidden sm:block bg-zinc-900 border border-zinc-700 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-white"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>

        {/* ✅ Plan Button (compact on mobile) */}
        <button className="px-2 sm:px-4 py-1.5 sm:py-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
          <span className="hidden sm:inline">Standard</span>
          <span className="text-emerald-400">Pro</span>
        </button>

        {/* ✅ Avatar */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
          JD
        </div>
      </div>
    </nav>
  );
};

export default Navbar;