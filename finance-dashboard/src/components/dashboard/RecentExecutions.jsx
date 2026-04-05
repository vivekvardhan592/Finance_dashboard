import React, { useState } from 'react';
import {
  useTransactions,
  useDeleteTransaction
} from '../../store/useFinanceStore';
import TransactionModal from '../transactions/TransactionModal';
import TransactionForm from '../transactions/TransactionForm';

const RecentExecutions = () => {
  const transactions = useTransactions();
  const deleteTransaction = useDeleteTransaction();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // ✅ SEARCH + FILTER LOGIC
  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = txn.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === 'all' || txn.type === filter;

    return matchesSearch && matchesFilter;
  });

  // ✅ LIMIT TO 5 (dashboard view)
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
        <h3 className="font-semibold text-lg">Recent Executions</h3>

        <button
          onClick={() => {
            setEditData(null);
            setIsOpen(true);
          }}
          className="text-xs text-emerald-400 hover:text-emerald-500"
        >
          + Add Transaction
        </button>
      </div>

      {/* ✅ SEARCH + FILTER UI */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm w-full md:w-1/2"
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm w-full md:w-1/4"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-left text-zinc-400">
              <th className="pb-4">ASSET</th>
              <th className="pb-4">TYPE</th>
              <th className="pb-4">DATE</th>
              <th className="pb-4">VALUE</th>
              <th className="pb-4 text-right">ACTIONS</th>
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
                <tr key={item.id} className="hover:bg-zinc-950/50 transition">

                  <td className="py-4">{item.asset}</td>

                  <td className="py-4 capitalize">
                    {item.type}
                  </td>

                  <td className="py-4">
                    {item.date}
                  </td>

                  <td
                    className={`py-4 ${
                      item.value >= 0
                        ? 'text-emerald-400'
                        : 'text-red-400'
                    }`}
                  >
                    {item.value >= 0 ? '+' : ''}
                    ${Math.abs(item.value).toLocaleString()}
                  </td>

                  <td className="py-4 text-right space-x-3">

                    {/* Edit */}
                    <button
                      onClick={() => {
                        setEditData(item);
                        setIsOpen(true);
                      }}
                      className="text-blue-400 text-xs hover:text-blue-500"
                    >
                      Edit
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteTransaction(item.id)}
                      className="text-red-400 text-xs hover:text-red-500"
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

      {/* Modal */}
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