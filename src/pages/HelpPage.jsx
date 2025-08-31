// pages/HelpPage.js
import React, { useState } from 'react';

const HelpPage = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', labelEn: 'All', labelHi: 'सभी' },
    { id: 'legal', labelEn: 'Legal Aid', labelHi: 'कानूनी सहायता' },
    { id: 'counseling', labelEn: 'Counseling', labelHi: 'परामर्श' },
    { id: 'emergency', labelEn: 'Emergency', labelHi: 'आपातकाल' },
    { id: 'delhi', labelEn: 'Delhi NCR', labelHi: 'दिल्ली एनसीआर' },
    { id: 'mumbai', labelEn: 'Mumbai', labelHi: 'मुंबई' },
  ];

  const ngos = [
    {
      name: "Women's Rights Foundation",
      servicesEn: "Legal Aid, Counseling",
      servicesHi: "कानूनी सहायता, परामर्श",
      locationEn: "Delhi, Mumbai, Bangalore",
      locationHi: "दिल्ली, मुंबई, बैंगलोर",
      phone: "+91 XXXXXX1234"
    },
    {
      name: "SafeWork India",
      servicesEn: "Workplace Safety, Legal Aid",
      servicesHi: "कार्यस्थल सुरक्षा, कानूनी सहायता",
      locationEn: "Delhi NCR",
      locationHi: "दिल्ली एनसीआर",
      phone: "+91 XXXXXX5678"
    },
    {
      name: "Women's Health & Safety Initiative",
      servicesEn: "Counseling, Emergency Support",
      servicesHi: "परामर्श, आपातकालीन सहायता",
      locationEn: "Mumbai, Pune",
      locationHi: "मुंबई, पुणे",
      phone: "+91 XXXXXX9012"
    },
    {
      name: "Legal Empowerment Society",
      servicesEn: "Legal Aid, Education",
      servicesHi: "कानूनी सहायता, शिक्षा",
      locationEn: "All India",
      locationHi: "पूरे भारत में",
      phone: "+91 XXXXXX3456"
    }
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <h2 className="text-xl text-purple-700 font-bold mb-4 flex items-center">
          <i className="fas fa-hands-helping mr-2"></i>
          {currentLang === 'en' ? 'Find Help & Support' : 'सहायता और समर्थन खोजें'}
        </h2>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mb-5 text-sm">
          <i className="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
          {currentLang === 'en' 
            ? 'These are simulated contacts for demonstration purposes only.'
            : 'ये प्रदर्शन उद्देश्यों के लिए सिम्युलेटेड संपर्क हैं।'}
        </div>

        <div className="relative mb-5">
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          <input 
            type="text" 
            placeholder={currentLang === 'en' ? 'Search organizations...' : 'संगठनों को खोजें...'}
            className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap border ${
                activeFilter === filter.id 
                  ? 'bg-purple-700 text-white border-purple-700' 
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {currentLang === 'en' ? filter.labelEn : filter.labelHi}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {ngos.map((ngo, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <h3 className="font-bold text-lg mb-2">{ngo.name}</h3>
              <p className="mb-2 flex items-center">
                <i className="fas fa-crosshairs text-gray-500 mr-2 w-4"></i>
                <span>{currentLang === 'en' ? ngo.servicesEn : ngo.servicesHi}</span>
              </p>
              <p className="mb-2 flex items-center">
                <i className="fas fa-map-marker-alt text-gray-500 mr-2 w-4"></i>
                <span>{currentLang === 'en' ? ngo.locationEn : ngo.locationHi}</span>
              </p>
              <p className="mb-4 flex items-center">
                <i className="fas fa-phone text-gray-500 mr-2 w-4"></i>
                <span>{ngo.phone}</span>
              </p>
              <div className="flex gap-2">
                <a href={`tel:${ngo.phone}`} className="flex-1 bg-purple-700 text-white py-2 rounded text-center">
                  <i className="fas fa-phone mr-1"></i> 
                  {currentLang === 'en' ? 'Call' : 'कॉल'}
                </a>
                <a href={`https://wa.me/${ngo.phone.replace(/\D/g, '')}`} className="flex-1 bg-green-600 text-white py-2 rounded text-center">
                  <i className="fab fa-whatsapp mr-1"></i> 
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpPage;