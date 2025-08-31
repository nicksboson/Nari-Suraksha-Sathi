// pages/SafetyPage.js
import React, { useState } from 'react';

const SafetyPage = ({ currentLang }) => {
  const [activeSection, setActiveSection] = useState('personal');

  const personalSafetyTips = [
    {
      titleEn: 'Trust Your Instincts',
      titleHi: 'अपनी सहजज्ञान पर भरोसा करें',
      descEn: 'If a situation feels wrong, remove yourself from it immediately. Your intuition is a powerful safety tool.',
      descHi: 'यदि कोई स्थिति गलत लगे, तो तुरंत खुद को उससे हटा लें। आपकी अंतर्दृष्टि एक शक्तिशाली सुरक्षा उपकरण है।'
    },
    {
      titleEn: 'Stay Alert in Public',
      titleHi: 'सार्वजनिक स्थानों पर सतर्क रहें',
      descEn: 'Keep your head up, avoid distractions like headphones in unfamiliar areas, and be aware of your surroundings.',
      descHi: 'अपना सिर ऊंचा रखें, अजनबी इलाकों में हेडफोन जैसे विकर्षणों से बचें, और अपने आसपास के माहौल से अवगत रहें।'
    },
    {
      titleEn: 'Walk Confidently',
      titleHi: 'आत्मविश्वास से चलें',
      descEn: 'Maintain good posture, make brief eye contact, and walk with purpose. Confident body language deters potential threats.',
      descHi: 'अच्छी मुद्रा बनाए रखें, संक्षिप्त आंखों का संपर्क करें, और उद्देश्य के साथ चलें। आत्मविश्वास भरी भाषा संभावित खतरों को रोकती है।'
    },
    {
      titleEn: 'Vary Your Routes',
      titleHi: 'अपने रास्ते बदलते रहें',
      descEn: 'Don\'t follow the same routine daily. Change your routes and timings to avoid being predictable.',
      descHi: 'रोजाना एक ही दिनचर्या का पालन न करें। अनुमानित होने से बचने के लिए अपने रास्ते और समय बदलते रहें।'
    }
  ];

  const digitalSafetyTips = [
    {
      titleEn: 'Secure Your Social Media',
      titleHi: 'अपने सोशल मीडिया को सुरक्षित करें',
      descEn: 'Keep personal information private, use strong privacy settings, and be cautious about sharing your location.',
      descHi: 'व्यक्तिगत जानकारी को निजी रखें, मजबूत गोपनीयता सेटिंग्स का उपयोग करें, और अपना स्थान साझा करते समय सावधान रहें।'
    },
    {
      titleEn: 'Online Dating Safety',
      titleHi: 'ऑनलाइन डेटिंग सुरक्षा',
      descEn: 'Meet in public places, tell someone about your plans, and trust your instincts about potential matches.',
      descHi: 'सार्वजनिक स्थानों पर मिलें, किसी को अपनी योजनाओं के बारे में बताएं, और संभावित मैचों के बारे में अपनी अंतर्दृष्टि पर भरोसा करें।'
    },
    {
      titleEn: 'Avoid Oversharing',
      titleHi: 'अधिक साझा करने से बचें',
      descEn: 'Don\'t post real-time locations, vacation plans, or personal schedules that could compromise your safety.',
      descHi: 'वास्तविक समय स्थान, छुट्टियों की योजनाएं, या व्यक्तिगत कार्यक्रम पोस्ट न करें जो आपकी सुरक्षा से समझौता कर सकते हैं।'
    }
  ];

  const emergencyPreparedness = [
    {
      titleEn: 'Keep Emergency Contacts Ready',
      titleHi: 'आपातकालीन संपर्क तैयार रखें',
      descEn: 'Save important numbers on speed dial including police (100), women\'s helpline (1091), and trusted contacts.',
      descHi: 'पुलिस (100), महिला हेल्पलाइन (1091), और विश्वसनीय संपर्कों सहित महत्वपूर्ण नंबरों को स्पीड डायल पर सेव करें।'
    },
    {
      titleEn: 'Share Your Location',
      titleHi: 'अपना स्थान साझा करें',
      descEn: 'Let someone you trust know where you are, especially when going to unfamiliar places or meeting new people.',
      descHi: 'किसी विश्वसनीय व्यक्ति को बताएं कि आप कहां हैं, विशेषकर जब अपरिचित स्थानों पर जा रही हों या नए लोगों से मिल रही हों।'
    },
    {
      titleEn: 'Create a Safety Plan',
      titleHi: 'सुरक्षा योजना बनाएं',
      descEn: 'Have a plan for different scenarios including escape routes, safe places to go, and people who can help.',
      descHi: 'विभिन्न परिस्थितियों के लिए एक योजना बनाएं जिसमें भागने के रास्ते, जाने के लिए सुरक्षित स्थान, और मदद करने वाले लोग शामिल हों।'
    }
  ];

  const selfDefenseTips = [
    {
      titleEn: 'Learn Basic Self-Defense',
      titleHi: 'बुनियादी आत्मरक्षा सीखें',
      descEn: 'Take a self-defense class to learn techniques like striking pressure points, breaking free from grabs, and using your voice.',
      descHi: 'दबाव बिंदुओं पर प्रहार करना, पकड़ से मुक्त होना, और अपनी आवाज का उपयोग करने जैसी तकनीकें सीखने के लिए आत्मरक्षा कक्षा लें।'
    },
    {
      titleEn: 'Carry Legal Safety Items',
      titleHi: 'कानूनी सुरक्षा सामान रखें',
      descEn: 'Consider carrying a whistle, personal alarm, or pepper spray (where legal) for emergency situations.',
      descHi: 'आपातकालीन स्थितियों के लिए सीटी, व्यक्तिगत अलार्म, या पेप्पर स्प्रे (जहां कानूनी हो) रखने पर विचार करें।'
    },
    {
      titleEn: 'Use Your Voice',
      titleHi: 'अपनी आवाज का प्रयोग करें',
      descEn: 'Shout loudly to draw attention. Words like "Fire!" or "Help!" can be more effective than screaming.',
      descHi: 'ध्यान आकर्षित करने के लिए जोर से चिल्लाएं। "आग!" या "बचाओ!" जैसे शब्द चीखने से अधिक प्रभावी हो सकते हैं।'
    }
  ];

  const workplaceSafety = [
    {
      titleEn: 'Know Your Rights',
      titleHi: 'अपने अधिकारों को जानें',
      descEn: 'Understand workplace harassment policies, reporting procedures, and your legal rights under POSH Act.',
      descHi: 'कार्यस्थल उत्पीड़न नीतियों, रिपोर्टिंग प्रक्रियाओं, और POSH अधिनियम के तहत अपने कानूनी अधिकारों को समझें।'
    },
    {
      titleEn: 'Document Everything',
      titleHi: 'सब कुछ दस्तावेजित करें',
      descEn: 'Keep detailed records of any harassment incidents with dates, times, witnesses, and evidence.',
      descHi: 'तारीखों, समय, गवाहों, और साक्ष्यों के साथ किसी भी उत्पीड़न की घटनाओं का विस्तृत रिकॉर्ड रखें।'
    },
    {
      titleEn: 'Build Support Networks',
      titleHi: 'सहायता नेटवर्क बनाएं',
      descEn: 'Connect with trusted colleagues and know who to approach for help in difficult situations.',
      descHi: 'विश्वसनीय सहकर्मियों से जुड़ें और जानें कि कठिन परिस्थितियों में मदद के लिए किससे संपर्क करना है।'
    }
  ];

  const travelSafety = [
    {
      titleEn: 'Plan Your Journey',
      titleHi: 'अपनी यात्रा की योजना बनाएं',
      descEn: 'Research your destination, book verified accommodations, and share your itinerary with someone trusted.',
      descHi: 'अपने गंतव्य पर शोध करें, सत्यापित आवास बुक करें, और किसी विश्वसनीय व्यक्ति के साथ अपना यात्रा कार्यक्रम साझा करें।'
    },
    {
      titleEn: 'Use Reliable Transportation',
      titleHi: 'विश्वसनीय परिवहन का उपयोग करें',
      descEn: 'Choose reputable cab services, sit behind the driver, and share ride details with contacts.',
      descHi: 'प्रतिष्ठित कैब सेवाओं का चुनाव करें, ड्राइवर के पीछे बैठें, और संपर्कों के साथ राइड विवरण साझा करें।'
    },
    {
      titleEn: 'Stay Connected',
      titleHi: 'जुड़े रहें',
      descEn: 'Keep your phone charged, carry a power bank, and check in regularly with family or friends.',
      descHi: 'अपना फोन चार्ज रखें, पावर बैंक रखें, और परिवार या दोस्तों के साथ नियमित रूप से संपर्क करें।'
    }
  ];

  const legalResources = [
    {
      titleEn: 'Women\'s Helpline: 1091',
      titleHi: 'महिला हेल्पलाइन: 1091',
      descEn: '24/7 helpline for women in distress, providing immediate assistance and guidance.',
      descHi: 'संकट में महिलाओं के लिए 24/7 हेल्पलाइन, तत्काल सहायता और मार्गदर्शन प्रदान करती है।'
    },
    {
      titleEn: 'Police: 100',
      titleHi: 'पुलिस: 100',
      descEn: 'Emergency police assistance available round the clock for immediate help.',
      descHi: 'तत्काल सहायता के लिए चौबीसों घंटे उपलब्ध आपातकालीन पुलिस सहायता।'
    },
    {
      titleEn: 'National Commission for Women',
      titleHi: 'राष्ट्रीय महिला आयोग',
      descEn: 'File complaints online or call their helpline for legal assistance and guidance.',
      descHi: 'कानूनी सहायता और मार्गदर्शन के लिए ऑनलाइन शिकायत दर्ज करें या उनकी हेल्पलाइन पर कॉल करें।'
    }
  ];

  const safetyApps = [
    {
      titleEn: 'bSafe',
      titleHi: 'bSafe',
      descEn: 'Tracks your location and sends alerts to emergency contacts when you feel unsafe.',
      descHi: 'आपके स्थान को ट्रैक करता है और जब आप असुरक्षित महसूस करते हैं तो आपातकालीन संपर्कों को अलर्ट भेजता है।'
    },
    {
      titleEn: 'Himmat Plus',
      titleHi: 'हिम्मत प्लस',
      descEn: 'Delhi Police\'s official app for women safety with panic button and location sharing.',
      descHi: 'महिला सुरक्षा के लिए दिल्ली पुलिस का आधिकारिक ऐप जिसमें पैनिक बटन और स्थान साझाकरण है।'
    },
    {
      titleEn: 'Smart24x7',
      titleHi: 'Smart24x7',
      descEn: 'Emergency response app that connects you with nearest help and emergency services.',
      descHi: 'आपातकालीन प्रतिक्रिया ऐप जो आपको निकटतम सहायता और आपातकालीन सेवाओं से जोड़ता है।'
    }
  ];

  const sections = [
    { id: 'personal', labelEn: 'Personal Safety', labelHi: 'व्यक्तिगत सुरक्षा', data: personalSafetyTips },
    { id: 'digital', labelEn: 'Digital Safety', labelHi: 'डिजिटल सुरक्षा', data: digitalSafetyTips },
    { id: 'emergency', labelEn: 'Emergency Preparedness', labelHi: 'आपातकालीन तैयारी', data: emergencyPreparedness },
    { id: 'selfdefense', labelEn: 'Self Defense', labelHi: 'आत्मरक्षा', data: selfDefenseTips },
    { id: 'workplace', labelEn: 'Workplace Safety', labelHi: 'कार्यस्थल सुरक्षा', data: workplaceSafety },
    { id: 'travel', labelEn: 'Travel Safety', labelHi: 'यात्रा सुरक्षा', data: travelSafety },
    { id: 'legal', labelEn: 'Legal Resources', labelHi: 'कानूनी संसाधन', data: legalResources },
    { id: 'apps', labelEn: 'Safety Apps', labelHi: 'सुरक्षा ऐप्स', data: safetyApps }
  ];

  const getCurrentData = () => {
    return sections.find(section => section.id === activeSection)?.data || personalSafetyTips;
  };

  const getCurrentTitle = () => {
    const section = sections.find(section => section.id === activeSection);
    return currentLang === 'en' ? section?.labelEn : section?.labelHi;
  };

  return (
    <div className="animate-fadeIn max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 shadow-lg mb-6 text-white">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <i className="fas fa-shield-alt mr-3"></i>
          {currentLang === 'en' ? 'Comprehensive Safety Guide' : 'व्यापक सुरक्षा गाइड'}
        </h1>
        <p className="text-lg opacity-90">
          {currentLang === 'en' 
            ? 'Your safety is our priority. Explore comprehensive resources and tips to stay safe in various situations.'
            : 'आपकी सुरक्षा हमारी प्राथमिकता है। विभिन्न स्थितियों में सुरक्षित रहने के लिए व्यापक संसाधनों और युक्तियों का अन्वेषण करें।'
          }
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
        <div className="flex flex-wrap border-b">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-purple-600 text-white border-b-2 border-purple-600'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {currentLang === 'en' ? section.labelEn : section.labelHi}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-6">
        <h2 className="text-2xl text-purple-700 font-bold mb-6 flex items-center">
          <i className="fas fa-info-circle mr-3"></i>
          {getCurrentTitle()}
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {getCurrentData().map((tip, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="font-bold">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-purple-800">
                  {currentLang === 'en' ? tip.titleEn : tip.titleHi}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {currentLang === 'en' ? tip.descEn : tip.descHi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Numbers Quick Access */}
      <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 shadow-md mb-6">
        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {currentLang === 'en' ? 'Emergency Numbers - Save These Now!' : 'आपातकालीन नंबर - अभी सेव करें!'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-red-600">100</div>
            <div className="text-sm text-gray-600">
              {currentLang === 'en' ? 'Police Emergency' : 'पुलिस आपातकाल'}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-red-600">1091</div>
            <div className="text-sm text-gray-600">
              {currentLang === 'en' ? 'Women\'s Helpline' : 'महिला हेल्पलाइन'}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-red-600">181</div>
            <div className="text-sm text-gray-600">
              {currentLang === 'en' ? 'Women in Distress' : 'संकट में महिलाएं'}
            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
        <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
          <i className="fas fa-lightbulb mr-2"></i>
          {currentLang === 'en' ? 'Remember' : 'याद रखें'}
        </h3>
        <p className="text-blue-700">
          {currentLang === 'en' 
            ? 'Your safety comes first, always. Don\'t hesitate to seek help, trust your instincts, and remember that you\'re not alone. These tips are guidelines, but every situation is unique - prioritize your wellbeing above all else.'
            : 'आपकी सुरक्षा हमेशा पहले आती है। मदद मांगने में झिझक न करें, अपनी अंतर्दृष्टि पर भरोसा करें, और याद रखें कि आप अकेली नहीं हैं। ये युक्तियाँ दिशानिर्देश हैं, लेकिन हर स्थिति अनूठी होती है - सबसे पहले अपनी भलाई को प्राथमिकता दें।'
          }
        </p>
      </div>
    </div>
  );
};

export default SafetyPage;