// src/components/dashboard/CapitalAllocation.jsx
import React from 'react';
import { 
  useCapitalAllocation 
} from '../../store/useFinanceStore';

const CapitalAllocation = () => {
  // Use the dedicated selector hook
  const capitalAllocation = useCapitalAllocation();

  return (
    <div className="glass-card rounded-3xl p-6">
      <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
        💰 Capital Allocation
      </h3>

      <div className="space-y-6">
        {capitalAllocation.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-300">{item.category}</span>
              <span className="text-zinc-400">
                {item.percentage}% • ${item.amount.toLocaleString()}
              </span>
            </div>
            <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${item.percentage}%`, 
                  backgroundColor: item.color 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapitalAllocation;