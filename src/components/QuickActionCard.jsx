// components/QuickActionCard.js
import React from 'react';

const QuickActionCard = ({ id, icon, label }) => {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-md transition-transform active:translate-y-0.5">
      <div className="text-purple-700 text-3xl mb-2">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3 className="font-medium">{label}</h3>
    </div>
  );
};

export default QuickActionCard;