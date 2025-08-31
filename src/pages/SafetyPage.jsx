// pages/SafetyPage.js
import React from 'react';

const SafetyPage = ({ currentLang }) => {
  const tips = [
    {
      titleEn: 'Trust Your Instincts',
      titleHi: 'अपनी सहजज्ञान पर भरोसा करें',
      descEn: 'If a situation feels wrong, remove yourself from it immediately.',
      descHi: 'यदि कोई स्थिति गलत लगे, तो तुरंत खुद को उससे हटा लें।'
    },
    {
      titleEn: 'Share Your Location',
      titleHi: 'अपना location साझा करें',
      descEn: 'Let someone you trust know where you are, especially when going to unfamiliar places.',
      descHi: 'किसी विश्वसनीय व्यक्ति को बताएं कि आप कहां हैं, खासकर when unfamiliar places जा रही हों।'
    },
    {
      titleEn: 'Keep Emergency Contacts Handy',
      titleHi: 'आपातकालीन संपर्क handy रखें',
      descEn: 'Save important numbers on speed dial and memorize at least one emergency contact.',
      descHi: 'जरूरी नंबर speed dial पर सेव करें और कम से कम एक आपातकालीन संपर्क याद रखें।'
    },
    {
      titleEn: 'Document Incidents',
      titleHi: 'घटनाओं को document करें',
      descEn: 'Keep a record of any harassment with dates, times, and details.',
      descHi: 'किसी भी उत्पीड़न का dates, times और details के साथ record रखें।'
    },
    {
      titleEn: 'Use Technology',
      titleHi: 'Technology का use करें',
      descEn: 'Consider safety apps that share your location or send alerts in emergencies.',
      descHi: 'Safety apps पर विचार करें जो आपका location साझा करती हैं या emergencies में alerts भेजती हैं।'
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <h2 className="text-xl text-purple-700 font-bold mb-4 flex items-center">
          <i className="fas fa-first-aid mr-2"></i>
          {currentLang === 'en' ? 'Safety Tips' : 'सुरक्षा युक्तियाँ'}
        </h2>
        
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-semibold">{index + 1}</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">
                  {currentLang === 'en' ? tip.titleEn : tip.titleHi}
                </h4>
                <p className="text-gray-600">
                  {currentLang === 'en' ? tip.descEn : tip.descHi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;