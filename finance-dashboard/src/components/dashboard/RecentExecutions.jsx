// src/components/dashboard/RecentExecutions.jsx
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

  // 🔍 Search + Filter
  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = txn.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === 'all' || txn.type === filter;

    return matchesSearch && matchesFilter;
  });

  // 📊 Limit to 5 (dashboard view)
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
    <div className="glass-card rounded-3xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-xl">Recent Executions</h3>

        {/* ➕ Add Button */}
        <button
          disabled={!isAdmin}
          title={!isAdmin ? "Only admin can perform this action" : ""}
          onClick={() => {
            if (!isAdmin) return;
            setEditData(null);
            setIsOpen(true);
          }}
          className={`text-sm font-medium ${
            isAdmin
              ? "text-emerald-400 hover:text-emerald-500"
              : "text-zinc-600 cursor-not-allowed"
          }`}
        >
          + Add Transaction
        </button>
      </div>

      {/* 🔎 Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-sm w-full md:w-1/2"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-sm w-full md:w-1/4"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* 📋 Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[15px]">

          {/* Header */}
          <thead>
            <tr className="border-b border-zinc-800 text-left text-zinc-500 text-xs tracking-wide">
              <th className="py-3 px-3">ASSET</th>
              <th className="py-3 px-3">TYPE</th>
              <th className="py-3 px-3">DATE</th>
              <th className="py-3 px-3">VALUE</th>
              <th className="py-3 px-3 text-right">ACTIONS</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800">
            {recentExecutions.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-6 text-center text-zinc-500">
                  No transactions found
                </td>
              </tr>
            ) : (
              recentExecutions.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-zinc-950/50 transition"
                >

                  {/* Asset */}
                  <td className="py-3 px-3 font-medium text-white">
                    {item.asset}
                  </td>

                  {/* Type */}
                  <td className="py-3 px-3 text-zinc-400 capitalize">
                    {item.type}
                  </td>

                  {/* Date */}
                  <td className="py-3 px-3 text-zinc-400">
                    {item.date}
                  </td>

                  {/* Value */}
                  <td
                    className={`py-3 px-3 font-medium ${
                      item.value >= 0
                        ? 'text-emerald-400'
                        : 'text-red-400'
                    }`}
                  >
                    {item.value >= 0 ? '+' : ''}
                    ${Math.abs(item.value).toLocaleString()}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-3 text-right space-x-2">

                    {/* ✏️ Edit */}
                    <button
                      disabled={!isAdmin}
                      title={!isAdmin ? "Only admin can perform this action" : ""}
                      onClick={() => {
                        if (!isAdmin) return;
                        setEditData(item);
                        setIsOpen(true);
                      }}
                      className={`text-xs ${
                        isAdmin
                          ? "text-blue-400 hover:text-blue-500"
                          : "text-zinc-600 cursor-not-allowed"
                      }`}
                    >
                      Edit
                    </button>

                    {/* 🗑 Delete */}
                    <button
                      disabled={!isAdmin}
                      title={!isAdmin ? "Only admin can perform this action" : ""}
                      onClick={() => {
                        if (!isAdmin) return;

                        const confirmDelete = window.confirm(
                          "Are you sure you want to delete this transaction?"
                        );

                        if (confirmDelete) {
                          deleteTransaction(item.id);
                        }
                      }}
                      className={`text-xs ${
                        isAdmin
                          ? "text-red-400 hover:text-red-500"
                          : "text-zinc-600 cursor-not-allowed"
                      }`}
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 🧾 Modal */}
      <TransactionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TransactionForm
          onClose={() => setIsOpen(false)}
          editData={editData}
        />
      </TransactionModal>

    </div>
  );
};

export default RecentExecutions;