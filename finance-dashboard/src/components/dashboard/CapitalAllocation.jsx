import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTransactions } from '../../store/useFinanceStore';

ChartJS.register(ArcElement, Tooltip, Legend);

const CapitalAllocation = () => {
  const transactions = useTransactions();

  const expenses = transactions.filter(txn => txn.amount < 0);

  const categoryMap = {};
  expenses.forEach(txn => {
    const key = txn.title;
    categoryMap[key] = (categoryMap[key] || 0) + Math.abs(txn.amount);
  });

  const categories = Object.keys(categoryMap);
  const values = Object.values(categoryMap);
  const total = values.reduce((sum, val) => sum + val, 0);

  const colors = [
    "#10b981",
    "#22d3ee",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
  ];

  const data = {
    labels: categories,
    datasets: [
      {
        data: values,
        backgroundColor: colors.slice(0, categories.length),
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    cutout: '72%',
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      duration: 900,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const value = ctx.raw;
            const percent = ((value / total) * 100).toFixed(1);
            return `${ctx.label}: $${value.toLocaleString()} (${percent}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-7 h-full flex flex-col">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold tracking-tight flex items-center gap-2">
          💰 Expense Allocation
        </h3>
        <span className="text-[10px] sm:text-xs text-zinc-500">
          From Transactions
        </span>
      </div>

      {/* 🔹 Chart */}
      <div className="relative flex items-center justify-center mb-5 sm:mb-7">

        {/* Responsive chart container */}
        <div className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] aspect-square">
          <Doughnut data={data} options={options} />
        </div>

        {/* Center text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-[10px] sm:text-xs text-zinc-500">
            Total
          </span>
          <span className="text-sm sm:text-base lg:text-lg font-semibold text-white">
            ${Math.round(total).toLocaleString()}
          </span>
        </div>

      </div>

      {/* 🔹 Legend */}
      <div className="space-y-2 sm:space-y-3 mt-auto">
        {categories.map((cat, i) => {
          const amount = categoryMap[cat];
          const percent = ((amount / total) * 100).toFixed(1);

          return (
            <div
              key={i}
              className="flex justify-between items-center text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: colors[i] }}
                />
                <span className="text-zinc-300 font-medium truncate">
                  {cat}
                </span>
              </div>

              <span className="text-zinc-400 text-[10px] sm:text-xs whitespace-nowrap">
                {percent}% • ${amount.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CapitalAllocation;