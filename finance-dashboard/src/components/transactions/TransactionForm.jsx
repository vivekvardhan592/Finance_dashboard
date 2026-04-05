import React, { useState, useEffect } from 'react';
import {
  useAddTransaction,
  useUpdateTransaction
} from '../../store/useFinanceStore';

const TransactionForm = ({ onClose, editData }) => {
  const addTransaction = useAddTransaction();
  const updateTransaction = useUpdateTransaction();

  const [form, setForm] = useState({
    title: '',
    amount: '',
    type: 'expense',
    date: '',
    status: 'Executed',
  });

  // Fill form when editing
  useEffect(() => {
    if (editData) {
      setForm({
        title: editData.asset,
        amount: Math.abs(editData.value),
        type: editData.type,
        date: editData.date,
        status: editData.status,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      title: form.title,
      amount: form.type === 'expense' ? -Number(form.amount) : Number(form.amount),
      type: form.type,
      date: form.date,
      status: form.status,
    };

    if (editData) {
      updateTransaction(editData.id, finalData);
    } else {
      addTransaction(finalData);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <h2 className="text-lg font-semibold">
        {editData ? 'Edit Transaction' : 'Add Transaction'}
      </h2>

      {/* Title */}
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
      />

      {/* Amount */}
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
      />

      {/* Type */}
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {/* Date */}
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl"
      >
        {editData ? 'Update' : 'Add'}
      </button>

    </form>
  );
};

export default TransactionForm;