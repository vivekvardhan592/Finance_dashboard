// src/components/dashboard/PerformanceChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { usePerformanceData } from '../../store/useFinanceStore';
import ChartContainer from '../ui/ChartContainer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PerformanceChart = () => {
  const performanceData = usePerformanceData();

  const data = {
    labels: performanceData.labels,
    datasets: [
      {
        label: 'Portfolio Value',
        data: performanceData.values,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        tension: 0.4,
        fill: true,
        borderWidth: 3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { color: '#27272a' },
        ticks: { color: '#71717a' },
      },
      y: {
        min: 5000,
        max: 30000,
        grid: { color: '#27272a' },
        ticks: {
          color: '#71717a',
          callback: (val) => '$' + val / 1000 + 'k',
        },
      },
    },
  };

  const actionButtons = (
    <div className="flex gap-2 text-xs">
      {['1M', '3M', '6M', 'YTD', '1Y', 'ALL'].map((period) => (
        <button
          key={period}
          className={`px-4 py-1.5 rounded-xl transition ${
            period === '1Y'
              ? 'bg-emerald-500 text-black font-medium'
              : 'hover:bg-zinc-800 text-zinc-400'
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  );

  return (
    <div className="h-80 w-full min-w-0 overflow-hidden">
  <Line
    data={data}
    options={{
      ...options,
      layout: {
        padding: 0,
      },
    }}
  />
</div>
  );
};

export default PerformanceChart;