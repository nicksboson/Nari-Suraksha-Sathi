// pages/HomePage.js
import React from 'react';
import QuickActionCard from '../components/QuickActionCard';

const HomePage = ({ currentLang }) => {
  const quickActions = [
    { id: 'report', icon: 'exclamation-circle', labelEn: 'Report Incident', labelHi: 'घटना की रिपोर्ट करें' },
    { id: 'rights', icon: 'scale-balanced', labelEn: 'Know Your Rights', labelHi: 'अपने अधिकारों को जानें' },
    { id: 'help', icon: 'hands-helping', labelEn: 'Find Help', labelHi: 'सहायता खोजें' },
    { id: 'safety', icon: 'first-aid', labelEn: 'Safety Tips', labelHi: 'सुरक्षा युक्तियाँ' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="text-center py-5">
        <div className="text-purple-700 text-5xl mb-4">
          <i className="fas fa-ribbon"></i>
        </div>
        <h1 className="text-2xl font-bold text-purple-700 mb-2">
          {currentLang === 'en' ? 'Your Safety is Your Right' : 'आपकी सुरक्षा आपका अधिकार है'}
        </h1>
        <p className="text-gray-600 mb-6">
          {currentLang === 'en' 
            ? 'Nari Suraksha Saathi is here to help you understand your rights and access support'
            : 'नारी सुरक्षा साथी आपको अपने अधिकारों को समझने और सहायता प्राप्त करने में मदद करने के लिए है'}
        </p>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mb-6 text-sm">
          <i className="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
          {currentLang === 'en' 
            ? 'This is a demonstration prototype. No real reports are being submitted.'
            : 'यह एक प्रदर्शन प्रोटोटाइप है। कोई वास्तविक रिपोर्ट दर्ज नहीं की जा रही है।'}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {quickActions.map(action => (
          <QuickActionCard 
            key={action.id}
            id={action.id}
            icon={action.icon}
            label={currentLang === 'en' ? action.labelEn : action.labelHi}
          />
        ))}
      </div>

      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <h2 className="text-xl text-purple-700 font-bold mb-4 flex items-center">
          <i className="fas fa-info-circle mr-2"></i>
          {currentLang === 'en' ? 'About This App' : 'इस ऐप के बारे में'}
        </h2>
        <p className="mb-3">
          {currentLang === 'en' 
            ? 'Nari Suraksha Saathi is designed to support women in India\'s informal sector to safely report workplace harassment and access relevant legal rights and support organizations.'
            : 'नारी सुरक्षा साथी को भारत के अनौपचारिक क्षेत्र की महिलाओं को कार्यस्थल पर उत्पीड़न की सुरक्षित रूप से रिपोर्ट करने और संबंधित कानूनी अधिकारों और सहायता संगठनों तक पहुंचने में सहायता के लिए डिज़ाइन किया गया है।'}
        </p>
        <p>
          {currentLang === 'en' 
            ? 'This is a prototype demonstration only, created to showcase how technology can assist in women\'s safety.'
            : 'यह केवल एक प्रोटोटाइप प्रदर्शन है, जो यह दिखाने के लिए बनाया गया है कि प्रौद्योगिकी महिलाओं की सुरक्षा में कैसे सहायता कर सकती है।'}
        </p>
      </div>
    </div>
  );
};

export default HomePage;