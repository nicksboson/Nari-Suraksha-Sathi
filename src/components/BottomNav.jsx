// components/BottomNav.js
import React from 'react';

const BottomNav = ({ currentPage, setCurrentPage, currentLang }) => {
  const navItems = [
    { id: 'home', icon: 'home', labelEn: 'Home', labelHi: 'होम' },
    { id: 'report', icon: 'exclamation-circle', labelEn: 'Report', labelHi: 'रिपोर्ट' },
    { id: 'rights', icon: 'scale-balanced', labelEn: 'Rights', labelHi: 'अधिकार' },
    { id: 'help', icon: 'hands-helping', labelEn: 'Help', labelHi: 'सहायता' },
    { id: 'safety', icon: 'first-aid', labelEn: 'Safety', labelHi: 'सुरक्षा' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white flex justify-around py-2 shadow-lg z-50 border-t border-gray-200">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`flex flex-col items-center p-2 rounded-xl transition-all duration-200 cursor-pointer ${
            currentPage === item.id 
              ? 'text-purple-700 bg-purple-50' 
              : 'text-gray-500 hover:text-purple-600'
          }`}
          onClick={() => setCurrentPage(item.id)}
        >
          <div className={`p-2 rounded-full mb-1 ${
            currentPage === item.id ? 'bg-purple-100' : ''
          }`}>
            <i className={`fas fa-${item.icon} text-lg ${
              currentPage === item.id ? 'text-purple-700' : 'text-gray-500'
            }`}></i>
          </div>
          <span className="text-xs font-medium">
            {currentLang === 'en' ? item.labelEn : item.labelHi}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;