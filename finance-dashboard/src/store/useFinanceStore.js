// src/store/useFinanceStore.js
import { create } from 'zustand';

const useFinanceStoreBase = create((set, get) => ({
  // Main Dashboard Data
  netWorth: 24381.50,
  ytdChangePercent: 34,
  ytdChangeAmount: 6181,

  capitalRetentionRate: 64.5,
  annualReturnRate: 12.8,

  revenueGenerated: 8020,
  capitalDeployed: 2847.48,

  // Performance Chart Data
  performanceData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [19200, 20500, 21800, 23100, 24500, 23800, 25200, 26100, 25500, 26800, 27200, 27800],
  },

  // Capital Allocation
  capitalAllocation: [
    { category: "Food", percentage: 38, amount: 182.04, color: "#10b981" },
    { category: "Shopping", percentage: 22, amount: 626.45, color: "#22d3ee" },
    { category: "Transport", percentage: 15, amount: 427.12, color: "#3b82f6" },
    { category: "Health", percentage: 10, amount: 284.75, color: "#8b5cf6" },
    { category: "Entertainment", percentage: 8, amount: 227.80, color: "#ec4899" },
    { category: "Utilities", percentage: 7, amount: 199.32, color: "#f59e0b" },
  ],

  // Recent Executions
  recentExecutions: [
    { asset: "Vanguard S&P 500 ETF", type: "Buy", date: "Today, 10:24 AM", status: "Executed", value: -500.00 },
    { asset: "Apple Inc. (AAPL)", type: "Dividend", date: "Yesterday", status: "Settled", value: 24.50 },
    { asset: "Monthly Salary", type: "Deposit", date: "Mar 15, 2024", status: "Cleared", value: 4810.00 },
    { asset: "Whole Foods Market", type: "Expense", date: "Mar 14, 2024", status: "Cleared", value: -142.30 },
    { asset: "Crypto.com Transfer", type: "Transfer", date: "Mar 12, 2024", status: "Executed", value: -750.00 },
  ],

  // Actions
  updateNetWorth: (newWorth) => set({ netWorth: newWorth }),
  setPerformanceData: (newData) => set({ performanceData: newData }),
  addExecution: (newExecution) =>
    set((state) => ({
      recentExecutions: [newExecution, ...state.recentExecutions],
    })),
}));

// ======================
// Exported Custom Hooks
// ======================

export const useNetWorth = () => useFinanceStoreBase((state) => state.netWorth);

import { useShallow } from 'zustand/react/shallow';

export const useYtdChange = () => useFinanceStoreBase(useShallow((state) => ({
  percent: state.ytdChangePercent,
  amount: state.ytdChangeAmount,
})));

export const useAnnualReturnRate = () => 
  useFinanceStoreBase((state) => state.annualReturnRate);

export const useCapitalRetentionRate = () => 
  useFinanceStoreBase((state) => state.capitalRetentionRate);

export const useRevenueAndCapital = () => useFinanceStoreBase(useShallow((state) => ({
  revenueGenerated: state.revenueGenerated,
  capitalDeployed: state.capitalDeployed,
})));

export const useFormattedNetWorth = () =>
  useFinanceStoreBase((state) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(state.netWorth)
  );

export const usePerformanceData = () => useFinanceStoreBase((state) => state.performanceData);
export const useCapitalAllocation = () => useFinanceStoreBase((state) => state.capitalAllocation);
export const useRecentExecutions = () => useFinanceStoreBase((state) => state.recentExecutions);

// Actions
export const useUpdateNetWorth = () => useFinanceStoreBase((state) => state.updateNetWorth);
export const useAddExecution = () => useFinanceStoreBase((state) => state.addExecution);
export const useSetPerformanceData = () => useFinanceStoreBase((state) => state.setPerformanceData);