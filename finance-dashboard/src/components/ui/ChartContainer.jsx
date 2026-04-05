// src/components/common/ChartContainer.jsx
import React from 'react';
import Card from './Card';

const ChartContainer = ({ title, children, actionButtons = null }) => {
  return (
    <Card className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">↗</span>
          <h3 className="font-semibold text-lg tracking-wide">{title}</h3>
        </div>
        {actionButtons}
      </div>
      <div className="chart-container">
        {children}
      </div>
    </Card>
  );
};

export default ChartContainer;