import React from 'react';
import Card from './Card';

const ChartContainer = ({ title, children, actionButtons = null }) => {
  return (
    <Card className="p-4 sm:p-5 lg:p-6">

      {/* 🔹 Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">

        {/* Title */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-emerald-400 text-sm sm:text-base">↗</span>
          <h3 className="font-semibold text-base sm:text-lg tracking-wide truncate">
            {title}
          </h3>
        </div>

        {/* Actions */}
        {actionButtons && (
          <div className="flex items-center gap-2 flex-wrap">
            {actionButtons}
          </div>
        )}
      </div>

      {/* 🔹 Chart Content */}
      <div className="w-full min-w-0 h-45 sm:h-52 lg:h-56">
        {children}
      </div>

    </Card>
  );
};

export default ChartContainer;