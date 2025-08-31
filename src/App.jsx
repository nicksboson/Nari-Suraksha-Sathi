// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import ThankYouPage from './pages/ThankYouPage';
import RightsPage from './pages/RightsPage';
import HelpPage from './pages/HelpPage';
import SafetyPage from './pages/SafetyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState('en');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':  return <HomePage currentLang={currentLang} setCurrentPage={setCurrentPage} />;
      case 'report': return <ReportPage currentLang={currentLang} />;
      case 'thankyou': return <ThankYouPage currentLang={currentLang} setCurrentPage={setCurrentPage} />;
      case 'rights': return <RightsPage currentLang={currentLang} />;
      case 'help': return <HelpPage currentLang={currentLang} />;
      case 'safety': return <SafetyPage currentLang={currentLang} />;
      default: return <HomePage currentLang={currentLang} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <main className="container mx-auto px-4 py-5">
        {renderPage()}
      </main>
      // In App.js, update the BottomNav usage:
<BottomNav 
  currentPage={currentPage} 
  setCurrentPage={setCurrentPage} 
  currentLang={currentLang} 
/>
    </div>
  );
}

export default App;