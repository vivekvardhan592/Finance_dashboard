import React from 'react';
import { useTransactions } from '../../store/useFinanceStore';
import { TrendingUp, ArrowUpRight, BarChart3, Activity } from 'lucide-react';

const InsightsCard = () => {
  const transactions = useTransactions();

  if (!transactions.length) return null;

  const total = transactions.length;

  const highest = transactions.reduce((max, txn) =>
    Math.abs(txn.amount) > Math.abs(max.amount) ? txn : max
  );

  const net = transactions.reduce((sum, txn) => sum + txn.amount, 0);

  const expenseMap = {};
  transactions
    .filter(t => t.amount < 0)
    .forEach(t => {
      expenseMap[t.title] = (expenseMap[t.title] || 0) + Math.abs(t.amount);
    });

  const topExpense = Object.keys(expenseMap).length
    ? Object.entries(expenseMap).sort((a, b) => b[1] - a[1])[0][0]
    : "N/A";

  return (
    <div className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col h-full">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
          Insights
        </h3>
        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
          Auto
        </span>
      </div>

      {/* 🔹 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1 auto-rows-fr">

        {/* Top Expense */}
        <div className="group bg-zinc-900/80 rounded-xl p-4 h-full flex flex-col gap-2 border border-transparent shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-zinc-900 hover:border-emerald-500/30 hover:shadow-[0_12px_35px_rgba(16,185,129,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-xl text-zinc-400 font-medium">Top Expense</p>
            <TrendingUp size={18} className="text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white truncate">
            {topExpense}
          </p>
        </div>

        {/* Highest Txn */}
        <div className="group bg-zinc-900/80 rounded-xl p-4 h-full flex flex-col gap-2 border border-transparent shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-zinc-900 hover:border-blue-500/30 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-xl text-zinc-400 font-medium">Highest Txn</p>
            <ArrowUpRight size={18} className="text-blue-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white">
            ${Math.abs(highest.amount).toLocaleString()}
          </p>
        </div>

        {/* Total Txns */}
        <div className="group bg-zinc-900/80 rounded-xl p-4 h-full flex flex-col gap-2 border border-transparent shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-zinc-900 hover:border-purple-500/30 hover:shadow-[0_12px_35px_rgba(168,85,247,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-xl text-zinc-400 font-medium">Total Txns</p>
            <BarChart3 size={18} className="text-purple-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white">
            {total}
          </p>
        </div>

        {/* Net Flow */}
        <div className="group bg-zinc-900/80 rounded-xl p-4 h-full flex flex-col gap-2 border border-transparent shadow-md shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-zinc-900 hover:border-yellow-500/30 hover:shadow-[0_12px_35px_rgba(234,179,8,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-xl text-zinc-400 font-medium">Net Flow</p>
            <Activity size={18} className="text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <p className={`text-lg sm:text-xl font-semibold ${
            net >= 0 ? "text-emerald-400" : "text-red-400"
          }`}>
            {net >= 0 ? '+' : '-'}${Math.abs(net).toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
};

export default InsightsCard;