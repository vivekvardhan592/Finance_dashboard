// src/store/useFinanceStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // ✅ ADDED
import { useShallow } from 'zustand/react/shallow';

const useFinanceStoreBase = create(
  persist(
    (set) => ({
      // ======================
      // Dashboard Data
      // ======================
      netWorth: 24381.50,
      ytdChangePercent: 34,
      ytdChangeAmount: 6181,

      capitalRetentionRate: 64.5,
      annualReturnRate: 12.8,

      revenueGenerated: 8020,
      capitalDeployed: 2847.48,

      // ======================
      // RBAC
      // ======================
      role: "admin",
      setRole: (role) => set({ role }),

      // ======================
      // Performance Chart Data
      // ======================
      performanceData: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        values: [19200,20500,21800,23100,24500,23800,25200,26100,25500,26800,27200,27800],
      },

      // ======================
      // Capital Allocation
      // ======================
      capitalAllocation: [
        { category: "Food", percentage: 38, amount: 182.04, color: "#10b981" },
        { category: "Shopping", percentage: 22, amount: 626.45, color: "#22d3ee" },
        { category: "Transport", percentage: 15, amount: 427.12, color: "#3b82f6" },
        { category: "Health", percentage: 10, amount: 284.75, color: "#8b5cf6" },
        { category: "Entertainment", percentage: 8, amount: 227.80, color: "#ec4899" },
        { category: "Utilities", percentage: 7, amount: 199.32, color: "#f59e0b" },
      ],

      // ======================
      // Transactions
      // ======================
      transactions: [
        {
          id: Date.now() + 1,
          title: "Vanguard S&P 500 ETF",
          type: "expense",
          date: "2024-03-20",
          status: "Executed",
          amount: -500.0,
        },
        {
          id: Date.now() + 2,
          title: "Apple Dividend",
          type: "income",
          date: "2024-03-19",
          status: "Settled",
          amount: 24.5,
        },
        {
          id: Date.now() + 3,
          title: "Monthly Salary",
          type: "income",
          date: "2024-03-15",
          status: "Cleared",
          amount: 4810.0,
        },
      ],

      // ======================
      // Actions
      // ======================
      updateNetWorth: (newWorth) => set({ netWorth: newWorth }),

      setPerformanceData: (newData) => set({ performanceData: newData }),

      addTransaction: (txn) =>
        set((state) => ({
          transactions: [
            { id: Date.now(), ...txn },
            ...state.transactions,
          ],
        })),

      updateTransaction: (id, updatedTxn) =>
        set((state) => ({
          transactions: state.transactions.map((txn) =>
            txn.id === id ? { ...txn, ...updatedTxn } : txn
          ),
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((txn) => txn.id !== id),
        })),
    }),
    {
      name: "finance-storage", // ✅ localStorage key
    }
  )
);

// ======================
// Hooks
// ======================

export const useNetWorth = () =>
  useFinanceStoreBase((state) => state.netWorth);

export const useYtdChange = () =>
  useFinanceStoreBase(
    useShallow((state) => ({
      percent: state.ytdChangePercent,
      amount: state.ytdChangeAmount,
    }))
  );

export const useAnnualReturnRate = () =>
  useFinanceStoreBase((state) => state.annualReturnRate);

export const useCapitalRetentionRate = () =>
  useFinanceStoreBase((state) => state.capitalRetentionRate);

export const useRevenueAndCapital = () =>
  useFinanceStoreBase(
    useShallow((state) => ({
      revenueGenerated: state.revenueGenerated,
      capitalDeployed: state.capitalDeployed,
    }))
  );

export const useFormattedNetWorth = () =>
  useFinanceStoreBase((state) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(state.netWorth)
  );

export const usePerformanceData = () =>
  useFinanceStoreBase((state) => state.performanceData);

export const useCapitalAllocation = () =>
  useFinanceStoreBase((state) => state.capitalAllocation);

// Transactions
export const useTransactions = () =>
  useFinanceStoreBase((state) => state.transactions);

export const useAddTransaction = () =>
  useFinanceStoreBase((state) => state.addTransaction);

export const useUpdateTransaction = () =>
  useFinanceStoreBase((state) => state.updateTransaction);

export const useDeleteTransaction = () =>
  useFinanceStoreBase((state) => state.deleteTransaction);

// RBAC
export const useRole = () =>
  useFinanceStoreBase((state) => state.role);

export const useSetRole = () =>
  useFinanceStoreBase((state) => state.setRole);

// Other
export const useUpdateNetWorth = () =>
  useFinanceStoreBase((state) => state.updateNetWorth);

export const useSetPerformanceData = () =>
  useFinanceStoreBase((state) => state.setPerformanceData);