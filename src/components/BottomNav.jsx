// components/BottomNav.js
import React from 'react';

const BottomNav = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: 'home', labelEn: 'Home', labelHi: 'होम' },
    { id: 'report', icon: 'exclamation-circle', labelEn: 'Report', labelHi: 'रिपोर्ट' },
    { id: 'rights', icon: 'scale-balanced', labelEn: 'Rights', labelHi: 'अधिकार' },
    { id: 'help', icon: 'hands-helping', labelEn: 'Help', labelHi: 'सहायता' },
    { id: 'safety', icon: 'first-aid', labelEn: 'Safety', labelHi: 'सुरक्षा' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white flex justify-around py-2 shadow-md z-50">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`flex flex-col items-center p-2 rounded-lg ${currentPage === item.id ? 'text-purple-700' : 'text-gray-600'}`}
          onClick={() => setCurrentPage(item.id)}
        >
          <i className={`fas fa-${item.icon} text-lg mb-1`}></i>
          <span className="text-xs">{item.labelEn}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;