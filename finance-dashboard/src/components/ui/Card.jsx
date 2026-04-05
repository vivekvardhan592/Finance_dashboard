import React from 'react';

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        relative
        glass-card 
        rounded-3xl 
        p-6 md:p-8
        border border-zinc-800
        overflow-hidden
        transition-all duration-300
        hover:border-emerald-500/30
        hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]
        ${className}
      `}
      {...props}
    >

      {/* 🔥 Subtle Glow Layer */}
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"></div>

      {/* 🔹 Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default Card;