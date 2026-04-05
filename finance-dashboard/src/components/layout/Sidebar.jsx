import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  TrendingUp,
  PieChart,
  Wallet,
  History,
  Settings,
  HelpCircle,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: PieChart, label: 'Allocations', path: '/allocations' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  return (
    <>
      {/* 🔹 Overlay (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 sm:w-72 bg-zinc-950 border-r border-zinc-800 
          p-4 sm:p-6 flex flex-col overflow-y-auto z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
        `}
      >

        {/* 🔹 Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-black text-lg sm:text-xl">
              C
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              CAPITAL
            </span>
          </div>

          {/* Close Button (mobile only) */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        {/* 🔹 Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1 sm:space-y-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)} // close on mobile click
                    className={({ isActive }) =>
                      `flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'hover:bg-zinc-900 text-zinc-400 hover:text-white'
                      }`
                    }
                  >
                    <IconComponent size={18} strokeWidth={2} />
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 🔹 Bottom Tip */}
        <div className="mt-auto pt-6 sm:pt-8 border-t border-zinc-800">
          <div className="bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-sm">
            <div className="text-emerald-400 mb-2">💡 Pro Tip</div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Deploy idle cash into High-Yield opportunities to earn up to 5% APY.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;