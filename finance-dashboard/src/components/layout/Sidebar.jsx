// src/components/layout/Sidebar.jsx
import React from 'react';
import { 
  Home, 
  TrendingUp, 
  PieChart, 
  Wallet, 
  History, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: TrendingUp, label: 'Markets' },
    { icon: PieChart, label: 'Allocations' },
    { icon: Wallet, label: 'Portfolio' },
    { icon: History, label: 'Transactions' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col overflow-y-auto z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center font-bold text-black text-xl">
          C
        </div>
        <span className="text-2xl font-bold tracking-tighter">CAPITAL</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all ${
                    item.active 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                      : 'hover:bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  <IconComponent size={20} strokeWidth={2} />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Tip */}
      <div className="mt-auto pt-8 border-t border-zinc-800">
        <div className="bg-zinc-900 rounded-2xl p-5 text-sm">
          <div className="text-emerald-400 mb-2">💡 Pro Tip</div>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Deploy idle cash into High-Yield opportunities to earn up to 5% APY.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;