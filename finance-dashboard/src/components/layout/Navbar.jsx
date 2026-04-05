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
    { symbol: 'ETH', price: '3,850', change: '+2.15%' },
    { symbol: 'AMZN', price: '191.50', change: '+1.10%' },
    { symbol: 'GOOGL', price: '172.30', change: '-0.30%' },
    { symbol: 'NVDA', price: '1,020.25', change: '+3.42%' },
    { symbol: 'AAPL', price: '213.70', change: '+0.55%' },
    { symbol: 'META', price: '502.90', change: '-1.12%' },
    { symbol: 'NFLX', price: '645.80', change: '+1.95%' },
    { symbol: 'GOLD', price: '2,320', change: '-0.40%' },
    { symbol: 'SILVER', price: '27.45', change: '+0.75%' },
    { symbol: 'USOIL', price: '82.10', change: '-1.05%' },
    { symbol: 'DXY', price: '104.25', change: '+0.20%' },
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 px-3 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* 🔹 LEFT */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* 🔹 MARKET TICKER (NOW WORKS ON MOBILE ✅) */}
      <div className="flex-1 mx-2 sm:mx-4 overflow-hidden">
        <div className="ticker-track flex items-center gap-6 sm:gap-8 text-xs sm:text-sm whitespace-nowrap">

          {[...markets, ...markets].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 py-1 rounded-md hover:bg-zinc-800/50 transition"
            >
              <span className="font-medium">{item.symbol}</span>
              <span>${item.price}</span>

              <span
                className={`text-[10px] sm:text-xs flex items-center gap-1 ${
                  item.change.startsWith('+')
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {item.change.startsWith('+') ? '▲' : '▼'}
                {item.change}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* 🔹 RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="hidden sm:block bg-zinc-900 border border-zinc-700 text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-white"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>

        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
          JD
        </div>
      </div>
    </nav>
  );
};

export default Navbar;