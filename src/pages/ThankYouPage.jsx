// pages/ThankYouPage.js
import React from 'react';

const ThankYouPage = ({ currentLang, setCurrentPage }) => {
  return (
    <div className="text-center py-10 animate-fadeIn">
      <div className="text-green-500 text-5xl mb-5">
        <i className="fas fa-check-circle"></i>
      </div>
      <h2 className="text-2xl font-bold mb-4">
        {currentLang === 'en' ? 'Thank You' : 'धन्यवाद'}
      </h2>
      <p className="mb-4">
        {currentLang === 'en' 
          ? 'Your report has been submitted. Please remember that this is a demonstration prototype and no real report has been filed.'
          : 'आपकी रिपोर्ट जमा कर दी गई है। कृपया याद रखें कि यह एक प्रदर्शन प्रोटोटाइप है और कोई वास्तविक रिपोर्ट दर्ज नहीं की गई है।'}
      </p>
      <p className="mb-6">
        {currentLang === 'en' 
          ? 'If this were a real situation, you would receive follow-up information and support resources.'
          : 'यदि यह एक वास्तविक स्थिति होती, तो आपको अनुवर्ती जानकारी और सहायता संसाधन प्राप्त होते।'}
      </p>
      <button 
        onClick={() => setCurrentPage('home')}
        className="bg-purple-700 text-white py-3 px-6 rounded-full font-semibold shadow-md active:translate-y-0.5"
      >
        {currentLang === 'en' ? 'Return to Home' : 'होम पर वापस जाएं'}
      </button>
    </div>
  );
};

export default ThankYouPage;