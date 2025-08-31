// pages/HomePage.js
import React from 'react';
import QuickActionCard from '../components/QuickActionCard';

const HomePage = ({ currentLang, setCurrentPage }) => {
  const quickActions = [
    { id: 'report', icon: 'exclamation-circle', labelEn: 'Report Incident', labelHi: 'घटना की रिपोर्ट करें', color: 'from-rose-500 to-red-500', bgColor: 'bg-rose-50', iconColor: 'text-rose-500' },
    { id: 'rights', icon: 'scale-balanced', labelEn: 'Know Your Rights', labelHi: 'अपने अधिकारों को जानें', color: 'from-indigo-500 to-purple-600', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-500' },
    { id: 'help', icon: 'hands-helping', labelEn: 'Find Help', labelHi: 'सहायता खोजें', color: 'from-emerald-500 to-green-600', bgColor: 'bg-emerald-50', iconColor: 'text-emerald-500' },
    { id: 'safety', icon: 'shield-check', labelEn: 'Safety Tips', labelHi: 'सुरक्षा युक्तियाँ', color: 'from-amber-500 to-orange-500', bgColor: 'bg-amber-50', iconColor: 'text-amber-500' },
  ];

  const statistics = [
    {
      numberEn: '99%',
      numberHi: '99%',
      labelEn: 'face harassment',
      labelHi: 'उत्पीड़न का सामना',
      icon: 'users',
      color: 'from-red-500 to-pink-500'
    },
    {
      numberEn: '53%',
      numberHi: '53%',
      labelEn: 'never report',
      labelHi: 'रिपोर्ट नहीं करतीं',
      icon: 'file-slash',
      color: 'from-orange-500 to-red-500'
    },
    {
      numberEn: '76%',
      numberHi: '76%',
      labelEn: 'lack awareness',
      labelHi: 'जागरूकता की कमी',
      icon: 'eye-slash',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const handleCardClick = (pageId) => {
    setCurrentPage(pageId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50">
          {/* Animated Geometric Shapes */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-8 py-4 mb-12 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-white rounded-full mr-3 animate-ping"></div>
            <span className="font-bold text-lg">
              {currentLang === 'en' ? '🛡️ Your Safety Guardian' : '🛡️ आपका सुरक्षा संरक्षक'}
            </span>
          </div>

          {/* Main Heading with Advanced Typography */}
          <h1 className="mb-8 leading-tight">
            <div className="text-6xl lg:text-8xl font-black mb-4">
              <span className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                {currentLang === 'en' ? 'Break the' : 'मौन को'}
              </span>
            </div>
            <div className="text-6xl lg:text-8xl font-black">
              <span className="inline-block text-gray-900 transform hover:scale-105 transition-transform duration-300 relative">
                {currentLang === 'en' ? 'Silence' : 'तोड़ें'}
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </div>
          </h1>

          {/* Enhanced Subtitle */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl lg:text-3xl text-gray-600 mb-8 leading-relaxed font-light">
              {currentLang === 'en' 
                ? 'Empowering women to speak up, seek justice, and find support in a'
                : 'महिलाओं को बोलने, न्याय की तलाश करने और'
              }
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-200 rounded-2xl px-6 py-3">
              <i className="fas fa-lock mr-3 text-green-600"></i>
              <span className="text-xl font-bold text-green-800">
                {currentLang === 'en' ? 'safe, anonymous environment' : 'सुरक्षित, गुमनाम वातावरण में सहायता प्राप्त करने'}
              </span>
            </div>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button 
              onClick={() => handleCardClick('report')}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-red-500 to-pink-600 text-white px-12 py-5 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center justify-center">
                  <i className="fas fa-exclamation-circle mr-3 text-2xl"></i>
                  {currentLang === 'en' ? 'Report Now' : 'अभी रिपोर्ट करें'}
                </span>
              </div>
            </button>
            
            <button 
              onClick={() => handleCardClick('help')}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white text-gray-800 px-12 py-5 rounded-3xl font-bold text-xl border-3 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                <span className="flex items-center justify-center">
                  <i className="fas fa-heart mr-3 text-2xl text-purple-500"></i>
                  {currentLang === 'en' ? 'Get Support' : 'सहायता पाएं'}
                </span>
              </div>
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { icon: 'shield-check', text: currentLang === 'en' ? 'Bank-Level Security' : 'बैंक-स्तरीय सुरक्षा' },
              { icon: 'clock', text: currentLang === 'en' ? '24/7 Available' : '24/7 उपलब्ध' },
              { icon: 'user-secret', text: currentLang === 'en' ? 'Completely Anonymous' : 'पूर्णतः गुमनाम' },
              { icon: 'language', text: currentLang === 'en' ? 'Bilingual Support' : 'द्विभाषी सहायता' }
            ].map((indicator, index) => (
              <div key={index} className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas fa-${indicator.icon} text-purple-600`}></i>
                </div>
                <span className="text-gray-600 font-medium text-lg">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl px-6 py-3 mb-6">
              <span className="text-red-700 font-bold text-lg">
                {currentLang === 'en' ? '📊 The Reality Check' : '📊 वास्तविकता की जांच'}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {currentLang === 'en' ? 'Breaking Down' : 'तोड़ना'}
              <br />
              <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                {currentLang === 'en' ? 'The Numbers' : 'संख्याओं को'}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'en' 
                ? 'These statistics represent real experiences of women across India\'s workforce'
                : 'ये आंकड़े भारत की कार्यबल में महिलाओं के वास्तविक अनुभवों को दर्शाते हैं'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {statistics.map((stat, index) => (
              <div key={index} className="group perspective-1000">
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-gray-100 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${stat.color}`}></div>
                  
                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <i className={`fas fa-${stat.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-center">
                    <div className={`text-7xl lg:text-8xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      {currentLang === 'en' ? stat.numberEn : stat.numberHi}
                    </div>
                    <p className="text-gray-700 text-xl font-semibold">
                      {currentLang === 'en' ? stat.labelEn : stat.labelHi}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action under stats */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              {currentLang === 'en' 
                ? 'These numbers represent real women who need our support'
                : 'ये संख्याएं उन वास्तविक महिलाओं का प्रतिनिधित्व करती हैं जिन्हें हमारे समर्थन की आवश्यकता है'
              }
            </p>
            <button 
              onClick={() => handleCardClick('help')}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-arrow-right mr-3"></i>
              {currentLang === 'en' ? 'Be Part of the Change' : 'बदलाव का हिस्सा बनें'}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Actions with Glass Morphism */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-200 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm border border-purple-200 rounded-2xl px-8 py-4 mb-8 shadow-lg">
              <span className="text-purple-700 font-bold text-xl">
                {currentLang === 'en' ? '🚀 Take Action Today' : '🚀 आज ही कार्रवाई करें'}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              {currentLang === 'en' ? 'Choose Your' : 'अपना'}
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {currentLang === 'en' ? 'Path Forward' : 'आगे का रास्ता चुनें'}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'en' 
                ? 'Every journey begins with a single step. Choose the support that feels right for you.'
                : 'हर यात्रा एक कदम से शुरू होती है। वह सहायता चुनें जो आपके लिए सही लगे।'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <div 
                key={action.id} 
                onClick={() => handleCardClick(action.id)} 
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200 overflow-hidden h-full">
                  {/* Hover Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${action.color} rounded-3xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                      <i className={`fas fa-${action.icon} text-3xl text-white`}></i>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {currentLang === 'en' ? action.labelEn : action.labelHi}
                    </h3>
                    
                    {/* Animated Underline */}
                    <div className="mx-auto w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl px-6 py-3 mb-6">
              <span className="text-purple-700 font-bold text-lg">
                {currentLang === 'en' ? '✨ Why Choose Us' : '✨ हमें क्यों चुनें'}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              {currentLang === 'en' ? 'Built for' : 'बनाया गया'}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> {currentLang === 'en' ? 'You' : 'आपके लिए'}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 'user-shield',
                titleEn: 'Complete Anonymity',
                titleHi: 'पूर्ण गुमनामी',
                descEn: 'Your identity is protected with military-grade encryption. Report safely without fear.',
                descHi: 'आपकी पहचान सैन्य-ग्रेड एन्क्रिप्शन से सुरक्षित है। बिना डर के सुरक्षित रिपोर्ट करें।',
                gradient: 'from-green-500 to-emerald-500',
                bgGradient: 'from-green-50 to-emerald-50'
              },
              {
                icon: 'gavel',
                titleEn: 'Expert Legal Guidance',
                titleHi: 'विशेषज्ञ कानूनी मार्गदर्शन',
                descEn: 'Access comprehensive legal information tailored to your specific situation and location.',
                descHi: 'आपकी विशिष्ट स्थिति और स्थान के अनुरूप व्यापक कानूनी जानकारी प्राप्त करें।',
                gradient: 'from-blue-500 to-indigo-500',
                bgGradient: 'from-blue-50 to-indigo-50'
              },
              {
                icon: 'headset',
                titleEn: 'Immediate Connection',
                titleHi: 'तत्काल संपर्क',
                descEn: 'Instantly connect with trained counselors and support organizations in your area.',
                descHi: 'आपके क्षेत्र में प्रशिक्षित परामर्शदाताओं और सहायता संगठनों से तुरंत जुड़ें।',
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50'
              },
              {
                icon: 'book-open',
                titleEn: 'Preventive Education',
                titleHi: 'निवारक शिक्षा',
                descEn: 'Learn proven safety strategies and prevention techniques from experts.',
                descHi: 'विशेषज्ञों से सिद्ध सुरक्षा रणनीतियों और रोकथाम तकनीकों को सीखें।',
                gradient: 'from-amber-500 to-orange-500',
                bgGradient: 'from-amber-50 to-orange-50'
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-10 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-white overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <i className={`fas fa-${feature.icon} text-3xl text-white`}></i>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {currentLang === 'en' ? feature.titleEn : feature.titleHi}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {currentLang === 'en' ? feature.descEn : feature.descHi}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Emergency Banner */}
      <section className="py-16 bg-gradient-to-r from-red-500 via-red-600 to-red-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            {/* Emergency Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 mb-8">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="font-bold text-lg">
                {currentLang === 'en' ? '🆘 Emergency Assistance' : '🆘 आपातकालीन सहायता'}
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black mb-8">
              {currentLang === 'en' ? 'Need Help Right Now?' : 'अभी तत्काल सहायता चाहिए?'}
            </h3>
            
            <p className="text-xl mb-12 opacity-90">
              {currentLang === 'en' 
                ? 'Don\'t wait. These numbers can save lives.'
                : 'इंतज़ार न करें। ये नंबर जीवन बचा सकते हैं।'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '100', label: currentLang === 'en' ? 'Police Emergency' : 'पुलिस आपातकाल', icon: 'police-box' },
                { number: '1091', label: currentLang === 'en' ? 'Women\'s Helpline' : 'महिला हेल्पलाइन', icon: 'female' },
                { number: '181', label: currentLang === 'en' ? 'Crisis Support' : 'संकट सहायता', icon: 'life-ring' }
              ].map((contact, index) => (
                <div key={index} className="group">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
                    <div className="mb-4">
                      <i className={`fas fa-${contact.icon} text-3xl text-yellow-300 mb-4`}></i>
                    </div>
                    <div className="text-4xl lg:text-5xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">
                      {contact.number}
                    </div>
                    <div className="text-lg font-semibold opacity-90">
                      {contact.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <p className="text-lg opacity-80">
                {currentLang === 'en' 
                  ? '📞 Tap any number to call immediately'
                  : '📞 तुरंत कॉल करने के लिए किसी भी नंबर पर टैप करें'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentLang === 'en' ? 'Trusted by Organizations' : 'संगठनों द्वारा भरोसेमंद'}
            </h2>
            <p className="text-gray-600 text-lg">
              {currentLang === 'en' 
                ? 'Working with leading NGOs and support networks across India'
                : 'भारत भर के प्रमुख एनजीओ और सहायता नेटवर्क के साथ काम कर रहे हैं'
              }
            </p>
          </div>
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {[
              { name: 'Women\'s Safety NGO', logo: 'hands-helping' },
              { name: 'Legal Aid Society', logo: 'gavel' },
              { name: 'Crisis Support Network', logo: 'life-ring' },
              { name: 'Workplace Rights Org', logo: 'building' }
            ].map((org, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                  <i className={`fas fa-${org.logo} text-2xl text-gray-400 group-hover:text-purple-500`}></i>
                </div>
                <p className="text-sm font-medium text-gray-500">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Notice with Better Design */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200 shadow-lg">
            <div className="flex items-center justify-center text-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <i className="fas fa-info-circle text-white text-2xl"></i>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-amber-800 mb-2">
                  {currentLang === 'en' ? 'Demo Environment' : 'डेमो वातावरण'}
                </h4>
                <p className="text-amber-700 leading-relaxed">
                  {currentLang === 'en' 
                    ? 'This is a prototype demonstration. No real reports are submitted or processed. All features are for showcase purposes only.'
                    : 'यह एक प्रोटोटाइप प्रदर्शन है। कोई वास्तविक रिपोर्ट दर्ज या संसाधित नहीं होती। सभी सुविधाएं केवल प्रदर्शन उद्देश्यों के लिए हैं।'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {currentLang === 'en' ? 'Your Voice Matters' : 'आपकी आवाज़ मायने रखती है'}
          </h2>
          
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            {currentLang === 'en' 
              ? 'Every report, every conversation, every step forward creates a safer world for all women.'
              : 'हर रिपोर्ट, हर बातचीत, हर आगे का कदम सभी महिलाओं के लिए एक सुरक्षित दुनिया बनाता है।'
            }
          </p>
          
          <button 
            onClick={() => handleCardClick('report')}
            className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-red-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-pink-500/30 transform hover:scale-110 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center">
              {currentLang === 'en' ? 'Start Your Journey' : 'अपनी यात्रा शुरू करें'}
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;