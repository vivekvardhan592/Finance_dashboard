// src/pages/Allocations.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTransactions } from "../store/useFinanceStore";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Allocations = () => {
  const transactions = useTransactions();

  const expenses = transactions.filter((txn) => txn.amount < 0);

  const categoryMap = {};
  expenses.forEach((txn) => {
    categoryMap[txn.title] =
      (categoryMap[txn.title] || 0) + Math.abs(txn.amount);
  });

  const categories = Object.keys(categoryMap);
  const values = Object.values(categoryMap);
  const total = values.reduce((sum, val) => sum + val, 0);

  const maxAmount = Math.max(...values, 0);
  const topCategories = categories.filter(
    (cat) => categoryMap[cat] === maxAmount
  );

  const colors = ["#6366f1", "#22c55e", "#06b6d4", "#f59e0b", "#ef4444"];

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
    cutout: "75%", // slightly better for small screens
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111",
        borderColor: "#333",
        borderWidth: 1,
        callbacks: {
          label: (ctx) => `$${ctx.raw.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col">

      {/* 🔥 HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-3 px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Allocations
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 sm:mt-2">
            Analyze how your capital is distributed across categories
          </p>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-6 md:pb-8 flex flex-col w-full">

        {/* 🔥 TOP CARDS */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8"
        >

          {/* 📊 CHART CARD */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-900/60 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center transition"
          >
            {/* 🔥 Responsive Chart */}
            <div className="w-full max-w-[260px] sm:max-w-[320px] aspect-square">
              <Doughnut data={data} options={options} />
            </div>

            <p className="text-zinc-500 text-xs sm:text-sm mt-3 sm:mt-4">
              Total Spend
            </p>
            <p className="text-lg sm:text-xl font-semibold text-white">
              ${Math.round(total).toLocaleString()}
            </p>
          </motion.div>

          {/* 🔥 TOP CATEGORY */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-900/60 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition"
          >
            <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wide mb-2 sm:mb-3">
              Highest Spending
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight mb-2 sm:mb-3">
              {topCategories.map((cat, i) => (
                <span key={i}>
                  <span className="text-emerald-400">{cat}</span>
                  {i < topCategories.length - 1 && (
                    <span className="text-zinc-500 mx-1">·</span>
                  )}
                </span>
              ))}
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              ${maxAmount.toLocaleString()}
            </p>

            <p className="text-emerald-400 text-sm mt-1">
              {((maxAmount / total) * 100).toFixed(1)}% of total
            </p>

            <div className="h-px bg-zinc-800 my-3 sm:my-4" />

            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-zinc-500">Impact</span>
              <span className="text-emerald-400">High</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 🔥 BREAKDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-900/60 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 w-full"
        >
          <h3 className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wide">
            Breakdown
          </h3>

          {categories.map((cat, i) => {
            const amount = categoryMap[cat];
            const percent = ((amount / total) * 100).toFixed(1);

            return (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
              >
                {/* LEFT */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: colors[i % colors.length],
                    }}
                  />
                  <span className="text-white text-sm sm:text-base">
                    {cat}
                  </span>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-1/2">
                  <div className="flex-1 h-[6px] bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-emerald-400"
                    />
                  </div>

                  <span className="text-zinc-500 text-xs sm:text-sm w-12 text-right">
                    {percent}%
                  </span>

                  <span className="text-white text-xs sm:text-sm w-16 sm:w-20 text-right">
                    ${amount.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
};

export default Allocations;