// src/components/common/Card.jsx
import React from 'react';

const Card = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`glass-card rounded-3xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;