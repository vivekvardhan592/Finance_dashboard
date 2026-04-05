import React, { useState } from 'react';
import {
  useTransactions,
  useDeleteTransaction,
  useRole
} from '../../store/useFinanceStore';
import TransactionModal from '../transactions/TransactionModal';
import TransactionForm from '../transactions/TransactionForm';

const RecentExecutions = () => {
  const transactions = useTransactions();
  const deleteTransaction = useDeleteTransaction();
  const role = useRole();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const isAdmin = role === "admin";

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = txn.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === 'all' || txn.type === filter;

    return matchesSearch && matchesFilter;
  });

  const recentExecutions = filteredTransactions
    .slice(0, 5)
    .map((txn) => ({
      id: txn.id,
      asset: txn.title,
      type: txn.type,
      date: txn.date,
      status: txn.status,
      value: txn.amount,
    }));

  return (
    <div className="glass-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 w-full">

      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="font-semibold text-lg sm:text-xl">
          Recent Executions
        </h3>

        <button
          disabled={!isAdmin}
          onClick={() => {
            if (!isAdmin) return;
            setEditData(null);
            setIsOpen(true);
          }}
          className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-lg transition ${
            isAdmin
              ? "text-emerald-400 hover:bg-emerald-500/10"
              : "text-zinc-600 cursor-not-allowed"
          }`}
        >
          + Add
        </button>
      </div>

      {/* 🔹 Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-700 text-xs sm:text-sm w-full sm:w-1/2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-700 text-xs sm:text-sm w-full sm:w-1/3 focus:outline-none focus:ring-1 focus:ring-emerald-500"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 🔹 Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="border-b border-zinc-800 text-left text-zinc-500 text-xs">
              <th className="py-3 px-2">ASSET</th>
              <th className="py-3 px-2">TYPE</th>
              <th className="py-3 px-2">DATE</th>
              <th className="py-3 px-2">VALUE</th>
              <th className="py-3 px-2 text-right">ACTIONS</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800">
            {recentExecutions.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-900/60 transition">
                <td className="py-3 px-2 text-white">{item.asset}</td>
                <td className="py-3 px-2 text-zinc-400">{item.type}</td>
                <td className="py-3 px-2 text-zinc-400">{item.date}</td>
                <td className={`py-3 px-2 ${
                  item.value >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {item.value >= 0 ? '+' : ''}${Math.abs(item.value).toLocaleString()}
                </td>
                <td className="py-3 px-2 text-right space-x-2">
                  <button
                    disabled={!isAdmin}
                    onClick={() => {
                      if (!isAdmin) return;
                      setEditData(item);
                      setIsOpen(true);
                    }}
                    className="text-blue-400 text-xs"
                  >
                    Edit
                  </button>
                  <button
                    disabled={!isAdmin}
                    onClick={() => deleteTransaction(item.id)}
                    className="text-red-400 text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Mobile Cards */}
      <div className="md:hidden space-y-3">
        {recentExecutions.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-xl p-3 flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <span className="text-white font-medium">{item.asset}</span>
              <span className={`text-sm ${
                item.value >= 0 ? 'text-emerald-400' : 'text-red-400'
              }`}>
                ${Math.abs(item.value).toLocaleString()}
              </span>
            </div>

            <div className="text-xs text-zinc-400 flex justify-between">
              <span>{item.type}</span>
              <span>{item.date}</span>
            </div>

            <div className="flex gap-2 mt-1">
              <button className="text-blue-400 text-xs">Edit</button>
              <button className="text-red-400 text-xs">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Modal */}
      <TransactionModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <TransactionForm
          onClose={() => setIsOpen(false)}
          editData={editData}
        />
      </TransactionModal>

    </div>
  );
};

export default RecentExecutions;