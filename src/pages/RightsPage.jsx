// pages/RightsPage.js
import React, { useState } from 'react';

const RightsPage = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState('posh');

  const tabs = [
    { id: 'posh', labelEn: 'POSH Act', labelHi: 'पोश अधिनियम' },
    { id: 'labor', labelEn: 'Labor Laws', labelHi: 'श्रम कानून' },
    { id: 'reporting', labelEn: 'Reporting', labelHi: 'रिपोर्टिंग' },
  ];

  const renderPoshContent = () => (
    <div>
      <h3 className="text-lg font-bold mb-3">
        {currentLang === 'en' 
          ? 'Sexual Harassment of Women at Workplace (POSH) Act'
          : 'कार्यस्थल पर महिलाओं का यौन उत्पीड़न (पोश) अधिनियम'}
      </h3>
      <p className="mb-4">
        {currentLang === 'en' 
          ? 'Every woman has a right to a safe workplace free from sexual harassment.'
          : 'प्रत्येक महिला को यौन उत्पीड़न से मुक्त सुरक्षित कार्यस्थल का अधिकार है।'}
      </p>
      
      <h4 className="font-semibold mb-2">
        {currentLang === 'en' ? 'What constitutes sexual harassment?' : 'यौन उत्पीड़न क्या constitutes?'}
      </h4>
      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">{currentLang === 'en' ? 'Physical contact and advances' : 'Physical contact and advances'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Demand or request for sexual favors' : 'Demand or request for sexual favors'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Making sexually colored remarks' : 'Making sexually colored remarks'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Showing pornography' : 'Showing pornography'}</li>
        <li>{currentLang === 'en' ? 'Any other unwelcome physical, verbal, or non-verbal conduct of sexual nature' : 'Any other unwelcome physical, verbal, or non-verbal conduct of sexual nature'}</li>
      </ul>
      
      <h4 className="font-semibold mb-2">
        {currentLang === 'en' ? 'Your employer must:' : 'आपके नियोक्ता को must:'}
      </h4>
      <ul className="list-disc pl-5">
        <li className="mb-1">{currentLang === 'en' ? 'Form an Internal Complaints Committee (ICC)' : 'Form an Internal Complaints Committee (ICC)'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Provide a safe mechanism for reporting' : 'Provide a safe mechanism for reporting'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Take action within specified timeframes' : 'Take action within specified timeframes'}</li>
        <li>{currentLang === 'en' ? 'Protect your privacy during the process' : 'Protect your privacy during the process'}</li>
      </ul>
    </div>
  );

  const renderLaborContent = () => (
    <div>
      <h3 className="text-lg font-bold mb-3">
        {currentLang === 'en' 
          ? 'Labor Rights for Informal Sector Workers'
          : 'अनौपचारिक क्षेत्र के श्रमिकों के लिए श्रम अधिकार'}
      </h3>
      <p className="mb-4">
        {currentLang === 'en' 
          ? 'Even in the informal sector, you have rights and protections.'
          : 'अनौपचारिक क्षेत्र में भी, आपके पास अधिकार और सुरक्षा हैं।'}
      </p>
      
      <h4 className="font-semibold mb-2">
        {currentLang === 'en' ? 'Key rights include:' : 'मुख्य अधिकारों में शामिल हैं:'}
      </h4>
      <ul className="list-disc pl-5">
        <li className="mb-1">{currentLang === 'en' ? 'Right to a safe working environment' : 'Right to a safe working environment'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Protection against discrimination' : 'Protection against discrimination'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Right to timely payment of wages' : 'Right to timely payment of wages'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Reasonable working hours and rest periods' : 'Reasonable working hours and rest periods'}</li>
        <li>{currentLang === 'en' ? 'Protection from verbal and physical abuse' : 'Protection from verbal and physical abuse'}</li>
      </ul>
    </div>
  );

  const renderReportingContent = () => (
    <div>
      <h3 className="text-lg font-bold mb-3">
        {currentLang === 'en' ? 'Reporting Process' : 'रिपोर्टिंग प्रक्रिया'}
      </h3>
      <p className="mb-4">
        {currentLang === 'en' 
          ? 'If you experience harassment, here\'s what you can do:'
          : 'यदि आप उत्पीड़न का अनुभव करती हैं, तो यहां बताया गया है कि आप क्या कर सकती हैं:'}
      </p>
      
      <h4 className="font-semibold mb-2">
        {currentLang === 'en' ? 'Steps to take:' : 'कदम उठाने के लिए:'}
      </h4>
      <ol className="list-decimal pl-5">
        <li className="mb-1">{currentLang === 'en' ? 'Document incidents with dates, times, and details' : 'Document incidents with dates, times, and details'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Report to your supervisor or ICC committee if available' : 'Report to your supervisor or ICC committee if available'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'Contact local NGOs that specialize in women\'s rights' : 'Contact local NGOs that specialize in women\'s rights'}</li>
        <li className="mb-1">{currentLang === 'en' ? 'File a police report if the situation requires legal intervention' : 'File a police report if the situation requires legal intervention'}</li>
        <li>{currentLang === 'en' ? 'Seek medical attention if needed' : 'Seek medical attention if needed'}</li>
      </ol>
    </div>
  );

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <h2 className="text-xl text-purple-700 font-bold mb-4 flex items-center">
          <i className="fas fa-scale-balanced mr-2"></i>
          {currentLang === 'en' ? 'Know Your Rights' : 'अपने अधिकारों को जानें'}
        </h2>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mb-5 text-sm">
          <i className="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
          {currentLang === 'en' 
            ? 'This information is for educational purposes only and not legal advice.'
            : 'यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है और कानूनी सलाह नहीं है।'}
        </div>

        <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap border ${
                activeTab === tab.id 
                  ? 'bg-purple-700 text-white border-purple-700' 
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {currentLang === 'en' ? tab.labelEn : tab.labelHi}
            </button>
          ))}
        </div>

        <div className="rights-content">
          {activeTab === 'posh' && renderPoshContent()}
          {activeTab === 'labor' && renderLaborContent()}
          {activeTab === 'reporting' && renderReportingContent()}
        </div>
      </div>
    </div>
  );
};

export default RightsPage;