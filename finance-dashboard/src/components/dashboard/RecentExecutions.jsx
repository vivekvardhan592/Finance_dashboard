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

  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const recentExecutions = transactions.slice(0, 5).map((txn) => ({
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
            {recentExecutions.map((item) => (
              <tr key={item.id}>

                <td className="py-4">{item.asset}</td>
                <td className="py-4 capitalize">{item.type}</td>
                <td className="py-4">{item.date}</td>

                <td className={`py-4 ${
                  item.value >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  ${Math.abs(item.value)}
                </td>

                <td className="py-4 text-right space-x-3">

                  {/* Edit */}
                  <button
                    onClick={() => {
                      setEditData(item);
                      setIsOpen(true);
                    }}
                    className="text-blue-400 text-xs"
                  >
                    Edit
                  </button>

                  {/* Delete */}
                  <button
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