import React from 'react';

const Header = ({ currentLang, setCurrentLang }) => {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-purple-700 text-white sticky top-0 z-50 py-3 md:py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center">
            <div className="bg-white/10 p-2 rounded-lg mr-3">
              <i className="fas fa-shield-alt text-yellow-400 text-lg md:text-xl"></i>
            </div>
            <span className="text-lg md:text-xl font-semibold tracking-tight">
              {currentLang === 'en' ? 'Nari Suraksha Saathi' : 'नारी सुरक्षा साथी'}
            </span>
          </div>
          
          {/* Language toggle */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 flex gap-1 border border-white/20">
            <button
              className={`px-3 py-1 text-xs md:text-sm rounded-full transition-all duration-200 outline-none focus:ring-2 focus:ring-white/50 ${
                currentLang === 'en'
                  ? 'bg-white text-purple-800 shadow-sm'
                  : 'bg-transparent text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setCurrentLang('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className={`px-3 py-1 text-xs md:text-sm rounded-full transition-all duration-200 outline-none focus:ring-2 focus:ring-white/50 ${
                currentLang === 'hi'
                  ? 'bg-white text-purple-800 shadow-sm'
                  : 'bg-transparent text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setCurrentLang('hi')}
              aria-label="Switch to Hindi"
            >
              HI
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;