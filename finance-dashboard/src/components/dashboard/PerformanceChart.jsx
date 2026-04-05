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

  const values = performanceData.values || [];

  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 0);

  const data = {
    labels: performanceData.labels,
    datasets: [
      {
        label: 'Portfolio Value',
        data: values,
        borderColor: '#10b981',
        borderWidth: 2.5,
        tension: 0.45,
        fill: true,

        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
          return gradient;
        },

        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#10b981',
        pointHoverBorderWidth: 2,
        pointHoverBorderColor: '#0a0a0a',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },

    interaction: {
      mode: 'index',
      intersect: false,
    },

    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#18181b',
        borderColor: '#27272a',
        borderWidth: 1,
        titleColor: '#ffffff',
        bodyColor: '#a1a1aa',
        padding: 8,
        displayColors: false,
        callbacks: {
          label: (ctx) => `$${ctx.raw.toLocaleString()}`,
        },
      },
    },

    scales: {
      x: {
        grid: {
          color: 'rgba(39, 39, 42, 0.4)',
        },
        ticks: {
          color: '#71717a',
          maxTicksLimit: 6, // 🔥 prevents clutter
        },
      },
      y: {
        min: minValue * 0.9,
        max: maxValue * 1.1,
        grid: {
          color: 'rgba(39, 39, 42, 0.4)',
        },
        ticks: {
          color: '#71717a',
          callback: (val) => '$' + Math.round(val / 1000) + 'k',
        },
      },
    },
  };

  return (
    <div className="w-full min-w-0 h-56 sm:h-64 lg:h-80">
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;