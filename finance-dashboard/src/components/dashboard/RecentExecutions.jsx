// src/components/dashboard/RecentExecutions.jsx
import React from 'react';
import { 
  useRecentExecutions 
} from '../../store/useFinanceStore';

const RecentExecutions = () => {
  // Use dedicated selector hook (best practice)
  const recentExecutions = useRecentExecutions();

  return (
    <div className="glass-card rounded-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Recent Executions</h3>
        <button className="text-xs text-emerald-400 hover:text-emerald-500 flex items-center gap-1 transition">
          VIEW FULL LEDGER →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-left text-zinc-400">
              <th className="pb-4 font-medium">ASSET / ENTITY</th>
              <th className="pb-4 font-medium">TYPE</th>
              <th className="pb-4 font-medium">DATE</th>
              <th className="pb-4 font-medium">STATUS</th>
              <th className="pb-4 font-medium text-right">VALUE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {recentExecutions.map((item, index) => (
              <tr key={index} className="hover:bg-zinc-950/50 transition">
                <td className="py-4 font-medium">{item.asset}</td>
                <td className="py-4 text-zinc-400">{item.type}</td>
                <td className="py-4 text-zinc-400">{item.date}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center gap-1.5 ${item.status === 'Executed' || item.status === 'Settled' || item.status === 'Cleared' 
                    ? 'text-emerald-400' 
                    : 'text-zinc-400'}`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {item.status}
                  </span>
                </td>
                <td className={`py-4 text-right font-medium ${item.value >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {item.value >= 0 ? '+' : ''}${Math.abs(item.value).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentExecutions;