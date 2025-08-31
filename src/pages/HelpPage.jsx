import React, { useState, useMemo } from 'react';

const HelpPage = ({ currentLang = 'en' }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
      name: "Snehalaya",
      servicesEn: "Women's shelter, Education, Healthcare, Awareness",
      servicesHi: "महिला आश्रय, शिक्षा, स्वास्थ्य सेवा, जागरूकता",
      locationEn: "Maharashtra",
      locationHi: "महाराष्ट्र",
      phone: "+91 XXXXXX1001",
      category: ['emergency', 'counseling'],
      keywords: ['shelter', 'education', 'healthcare', 'maharashtra', 'आश्रय', 'शिक्षा', 'स्वास्थ्य', 'महाराष्ट्र']
    },
    {
      name: "Majlis Manch",
      servicesEn: "Legal Aid, Counseling, Women's Rights Awareness",
      servicesHi: "कानूनी सहायता, परामर्श, महिला अधिकार जागरूकता",
      locationEn: "Mumbai, Maharashtra",
      locationHi: "मुंबई, महाराष्ट्र",
      phone: "+91 XXXXXX1002",
      category: ['legal', 'counseling', 'mumbai'],
      keywords: ['legal', 'counseling', 'rights', 'mumbai', 'majlis', 'कानूनी', 'परामर्श', 'अधिकार', 'मुंबई']
    },
    {
      name: "The Baale Mane",
      servicesEn: "Shelter for girls, Education, Life-skills training",
      servicesHi: "लड़कियों के लिए आश्रय, शिक्षा, जीवन-कौशल प्रशिक्षण",
      locationEn: "Bangalore, Karnataka",
      locationHi: "बैंगलोर, कर्नाटक",
      phone: "+91 XXXXXX1003",
      category: ['emergency', 'counseling'],
      keywords: ['shelter', 'education', 'girls', 'bangalore', 'baale', 'आश्रय', 'शिक्षा', 'लड़कियों', 'बैंगलोर']
    },
    {
      name: "Aarti for Girls",
      servicesEn: "Girls' shelter, Education, Women's Leadership Training",
      servicesHi: "लड़कियों का आश्रय, शिक्षा, महिला नेतृत्व प्रशिक्षण",
      locationEn: "Kadapa, Andhra Pradesh",
      locationHi: "कडपा, आंध्र प्रदेश",
      phone: "+91 XXXXXX1004",
      category: ['emergency', 'counseling'],
      keywords: ['girls', 'shelter', 'education', 'leadership', 'kadapa', 'aarti', 'लड़कियों', 'आश्रय', 'नेतृत्व']
    },
    {
      name: "My Choices Foundation",
      servicesEn: "Domestic Violence Support, Anti-Trafficking, Counseling",
      servicesHi: "घरेलू हिंसा सहायता, मानव तस्करी विरोध, परामर्श",
      locationEn: "Hyderabad, Telangana",
      locationHi: "हैदराबाद, तेलंगाना",
      phone: "+91 XXXXXX1005",
      category: ['emergency', 'counseling', 'legal'],
      keywords: ['violence', 'trafficking', 'counseling', 'hyderabad', 'choices', 'हिंसा', 'तस्करी', 'परामर्श', 'हैदराबाद']
    },
    {
      name: "The Prajnya Trust",
      servicesEn: "Gender Sensitisation, Workshops, Community Engagement",
      servicesHi: "लैंगिक संवेदनशीलता, कार्यशालाएं, सामुदायिक भागीदारी",
      locationEn: "Chennai, Tamil Nadu",
      locationHi: "चेन्नई, तमिलनाडु",
      phone: "+91 XXXXXX1006",
      category: ['counseling'],
      keywords: ['gender', 'workshops', 'community', 'chennai', 'prajnya', 'लैंगिक', 'कार्यशालाएं', 'सामुदायिक', 'चेन्नई']
    },
    {
      name: "Snehi",
      servicesEn: "Counseling, Helplines, Mental Health Awareness",
      servicesHi: "परामर्श, हेल्पलाइन, मानसिक स्वास्थ्य जागरूकता",
      locationEn: "Delhi",
      locationHi: "दिल्ली",
      phone: "+91 XXXXXX1007",
      category: ['counseling', 'emergency', 'delhi'],
      keywords: ['counseling', 'helpline', 'mental', 'health', 'delhi', 'snehi', 'परामर्श', 'हेल्पलाइन', 'मानसिक', 'दिल्ली']
    },
    {
      name: "Shakti Shalini",
      servicesEn: "Crisis Intervention, Shelters, Vocational Training",
      servicesHi: "संकट हस्तक्षेप, आश्रय, व्यावसायिक प्रशिक्षण",
      locationEn: "Delhi",
      locationHi: "दिल्ली",
      phone: "+91 XXXXXX1008",
      category: ['emergency', 'counseling', 'delhi'],
      keywords: ['crisis', 'shelter', 'training', 'delhi', 'shakti', 'संकट', 'आश्रय', 'प्रशिक्षण', 'दिल्ली']
    },
    {
      name: "Apne Aap Women's Collective",
      servicesEn: "Safe Spaces, Healthcare, Education, Vocational Training",
      servicesHi: "सुरक्षित स्थान, स्वास्थ्य सेवा, शिक्षा, व्यावसायिक प्रशिक्षण",
      locationEn: "Mumbai, Maharashtra",
      locationHi: "मुंबई, महाराष्ट्र",
      phone: "+91 XXXXXX1009",
      category: ['counseling', 'mumbai'],
      keywords: ['safe', 'healthcare', 'education', 'mumbai', 'women', 'सुरक्षित', 'स्वास्थ्य', 'शिक्षा', 'मुंबई', 'महिला']
    },
    {
      name: "Jagori",
      servicesEn: "Women's Rights Awareness, Gender Equality, Legal Support",
      servicesHi: "महिला अधिकार जागरूकता, लैंगिक समानता, कानूनी सहायता",
      locationEn: "Delhi",
      locationHi: "दिल्ली",
      phone: "+91 XXXXXX1010",
      category: ['legal', 'counseling', 'delhi'],
      keywords: ['rights', 'equality', 'legal', 'delhi', 'jagori', 'अधिकार', 'समानता', 'कानूनी', 'दिल्ली']
    }
  ];

  // Filtered and searched NGOs using useMemo for performance
  const filteredNgos = useMemo(() => {
    let filtered = ngos;

    // Apply filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(ngo => ngo.category.includes(activeFilter));
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(ngo => {
        return (
          ngo.name.toLowerCase().includes(query) ||
          ngo.servicesEn.toLowerCase().includes(query) ||
          ngo.servicesHi.includes(query) ||
          ngo.locationEn.toLowerCase().includes(query) ||
          ngo.locationHi.includes(query) ||
          ngo.keywords.some(keyword => keyword.toLowerCase().includes(query))
        );
      });
    }

    return filtered;
  }, [activeFilter, searchQuery]);

  // Clear search function
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Get result count text
  const getResultText = () => {
    const count = filteredNgos.length;
    if (currentLang === 'en') {
      return count === 1 ? `${count} organization found` : `${count} organizations found`;
    } else {
      return `${count} संगठन मिले`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border border-purple-100">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 flex items-center justify-center">
              <svg className="w-8 h-8 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1z" clipRule="evenodd" />
                <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 12a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM16 16a1 1 0 100-2 1 1 0 000 2zM16 20a1 1 0 100-2 1 1 0 000 2zM10 16a1 1 0 110-2 1 1 0 010 2zM10 20a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
              {currentLang === 'en' ? 'Find Help & Support' : 'सहायता और समर्थन खोजें'}
            </h2>
            <p className="text-slate-600">
              {currentLang === 'en' 
                ? 'Connect with organizations dedicated to women\'s safety and empowerment'
                : 'महिलाओं की सुरक्षा और सशक्तिकरण के लिए समर्पित संगठनों से जुड़ें'}
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 p-4 rounded-xl mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-yellow-800">
                {currentLang === 'en' 
                  ? 'These are simulated contacts for demonstration purposes only.'
                  : 'ये प्रदर्शन उद्देश्यों के लिए सिम्युलेटेड संपर्क हैं।'}
              </span>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search organizations, services, or locations...' : 'संगठन, सेवाएं या स्थान खोजें...'}
              className="w-full p-4 pl-12 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {currentLang === 'en' ? filter.labelEn : filter.labelHi}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 px-2">
            <span className="text-sm text-gray-600 font-medium">
              {getResultText()}
            </span>
            {(searchQuery || activeFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {currentLang === 'en' ? 'Clear all' : 'सब साफ़ करें'}
              </button>
            )}
          </div>

          {/* NGO List */}
          <div className="space-y-4">
            {filteredNgos.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.444-.984-5.909-2.563C4.486 10.68 4 8.42 4 6c0-.895.077-1.773.227-2.625" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  {currentLang === 'en' ? 'No organizations found' : 'कोई संगठन नहीं मिला'}
                </h3>
                <p className="text-gray-500">
                  {currentLang === 'en' 
                    ? 'Try adjusting your search terms or filters'
                    : 'अपने खोज शब्दों या फिल्टर को समायोजित करने का प्रयास करें'}
                </p>
              </div>
            ) : (
              filteredNgos.map((ngo, index) => (
                <div key={index} className="bg-gradient-to-r from-white to-purple-50/30 rounded-xl p-6 shadow-md border border-purple-100/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{ngo.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">
                        {currentLang === 'en' ? ngo.servicesEn : ngo.servicesHi}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">
                        {currentLang === 'en' ? ngo.locationEn : ngo.locationHi}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-gray-700 font-mono">{ngo.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${ngo.phone}`} 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {currentLang === 'en' ? 'Call' : 'कॉल'}
                    </a>
                    <a 
                      href={`https://wa.me/${ngo.phone.replace(/\D/g, '')}`} 
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl text-center font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;