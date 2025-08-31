// components/Header.js
import React from 'react';

const Header = ({ currentLang, setCurrentLang }) => {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-700 text-white sticky top-0 z-50 shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <i className="fas fa-shield-alt text-yellow-400 text-2xl mr-2"></i>
            <span className="text-xl font-bold">
              {currentLang === 'en' ? 'Nari Suraksha Saathi' : 'नारी सुरक्षा साथी'}
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-4 bg-white bg-opacity-20 rounded-full p-1 flex">
        <button 
          className={`px-2 py-1 rounded-full text-xs ${currentLang === 'en' ? 'bg-white text-purple-700' : 'bg-transparent text-white'}`}
          onClick={() => setCurrentLang('en')}
        >
          EN
        </button>
        <button 
          className={`px-2 py-1 rounded-full text-xs ${currentLang === 'hi' ? 'bg-white text-purple-700' : 'bg-transparent text-white'}`}
          onClick={() => setCurrentLang('hi')}
        >
          HI
        </button>
      </div>
    </header>
  );
};

export default Header;