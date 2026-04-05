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
    <div className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-7 h-full flex flex-col">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight">
          Insights
        </h3>
        <span className="text-[10px] sm:text-xs text-emerald-400 bg-emerald-500/10 px-2 sm:px-3 py-1 rounded-full">
          Auto
        </span>
      </div>

      {/* 🔹 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 flex-1">

        {/* 🔹 Card Item */}
        <div className="bg-zinc-900/80 hover:bg-zinc-900 transition rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
              Top Expense
            </p>
            <TrendingUp size={16} className="text-emerald-400" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-white truncate">
            {topExpense}
          </p>
        </div>

        {/* 🔹 Highest Transaction */}
        <div className="bg-zinc-900/80 hover:bg-zinc-900 transition rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
              Highest Txn
            </p>
            <ArrowUpRight size={16} className="text-blue-400" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
            ${Math.abs(highest.amount).toLocaleString()}
          </p>
        </div>

        {/* 🔹 Total Transactions */}
        <div className="bg-zinc-900/80 hover:bg-zinc-900 transition rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
              Total Txns
            </p>
            <BarChart3 size={16} className="text-purple-400" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">
            {total}
          </p>
        </div>

        {/* 🔹 Net Flow */}
        <div className="bg-zinc-900/80 hover:bg-zinc-900 transition rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
              Net Flow
            </p>
            <Activity size={16} className="text-yellow-400" />
          </div>
          <p className={`text-sm sm:text-base lg:text-lg font-semibold ${
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