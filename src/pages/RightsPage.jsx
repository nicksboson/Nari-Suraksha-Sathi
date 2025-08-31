// pages/RightsPage.js
import React, { useState } from 'react';

const RightsPage = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState('posh');

  const tabs = [
    { id: 'posh', labelEn: 'POSH Act', labelHi: 'पोश अधिनियम' },
    { id: 'maternity', labelEn: 'Maternity Rights', labelHi: 'मातृत्व अधिकार' },
    { id: 'labor', labelEn: 'Labor Laws', labelHi: 'श्रम कानून' },
    { id: 'wages', labelEn: 'Wage Rights', labelHi: 'वेतन अधिकार' },
    { id: 'reporting', labelEn: 'Reporting', labelHi: 'रिपोर्टिंग' },
  ];

  const renderPoshContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold mb-3 text-purple-800">
          {currentLang === 'en' 
            ? 'Sexual Harassment of Women at Workplace (POSH) Act, 2013'
            : 'कार्यस्थल पर महिलाओं का यौन उत्पीड़न (पोश) अधिनियम, 2013'}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {currentLang === 'en' 
            ? 'Every woman has a right to a safe workplace free from sexual harassment. This act applies to all workplaces including government, private sector, organized or unorganized sectors, hospitals, and sports institutions.'
            : 'प्रत्येक महिला को यौन उत्पीड़न से मुक्त सुरक्षित कार्यस्थल का अधिकार है। यह अधिनियम सभी कार्यस्थलों पर लागू होता है।'}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-red-600 flex items-center">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            {currentLang === 'en' ? 'What Constitutes Sexual Harassment?' : 'यौन उत्पीड़न क्या है?'}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Physical contact and advances' : 'शारीरिक संपर्क और प्रगति'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Demand or request for sexual favors' : 'यौन एहसान की मांग या अनुरोध'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Making sexually colored remarks' : 'यौन रंगीन टिप्पणियां करना'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Showing pornography' : 'अश्लील सामग्री दिखाना'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Any unwelcome physical, verbal, or non-verbal conduct of sexual nature' : 'यौन प्रकृति का कोई भी अवांछित व्यवहार'}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-green-600 flex items-center">
            <i className="fas fa-shield-alt mr-2"></i>
            {currentLang === 'en' ? 'Your Employer Must:' : 'आपके नियोक्ता को करना चाहिए:'}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Form an Internal Complaints Committee (ICC)' : 'आंतरिक शिकायत समिति (ICC) का गठन'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Provide a safe mechanism for reporting' : 'रिपोर्टिंग के लिए सुरक्षित तंत्र प्रदान करना'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Complete inquiry within 90 days' : '90 दिनों के भीतर जांच पूरी करना'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Protect your privacy during the process' : 'प्रक्रिया के दौरान आपकी गोपनीयता की सुरक्षा'}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <i className="fas fa-info-circle mr-2"></i>
          {currentLang === 'en' 
            ? 'Complaints must be filed within 3 months of the incident. For smaller workplaces (<10 employees), Local Complaints Committees are available at district level.'
            : 'घटना के 3 महीने के भीतर शिकायत दर्ज करनी होगी। छोटे कार्यस्थलों के लिए जिला स्तर पर स्थानीय शिकायत समितियां उपलब्ध हैं।'}
        </p>
      </div>
    </div>
  );

  const renderMaternityContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
        <h3 className="text-xl font-bold mb-3 text-pink-800">
          {currentLang === 'en' 
            ? 'Maternity Benefit Act, 1961'
            : 'मातृत्व लाभ अधिनियम, 1961'}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {currentLang === 'en' 
            ? 'This act regulates employment of women before and after childbirth and provides maternity benefits. Applies to establishments employing 10 or more persons.'
            : 'यह अधिनियम प्रसव से पहले और बाद में महिलाओं के रोजगार को नियंत्रित करता है और मातृत्व लाभ प्रदान करता है।'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-pink-600 flex items-center">
            <i className="fas fa-baby mr-2"></i>
            {currentLang === 'en' ? 'Leave Entitlements' : 'छुट्टी के अधिकार'}
          </h4>
          <div className="space-y-3">
            <div className="bg-pink-50 p-3 rounded">
              <p className="font-semibold text-pink-700">
                {currentLang === 'en' ? '26 weeks' : '26 सप्ताह'}
              </p>
              <p className="text-sm text-gray-600">
                {currentLang === 'en' ? 'For first two children' : 'पहले दो बच्चों के लिए'}
              </p>
            </div>
            <div className="bg-pink-50 p-3 rounded">
              <p className="font-semibold text-pink-700">
                {currentLang === 'en' ? '12 weeks' : '12 सप्ताह'}
              </p>
              <p className="text-sm text-gray-600">
                {currentLang === 'en' ? 'If two or more surviving children' : 'यदि दो या अधिक जीवित बच्चे हैं'}
              </p>
            </div>
            <div className="bg-pink-50 p-3 rounded">
              <p className="font-semibold text-pink-700">
                {currentLang === 'en' ? '8 weeks' : '8 सप्ताह'}
              </p>
              <p className="text-sm text-gray-600">
                {currentLang === 'en' ? 'Pre-delivery leave maximum' : 'प्रसव पूर्व छुट्टी अधिकतम'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-green-600 flex items-center">
            <i className="fas fa-heart mr-2"></i>
            {currentLang === 'en' ? 'Additional Benefits' : 'अतिरिक्त लाभ'}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Full wage payment during leave' : 'छुट्टी के दौरान पूरा वेतन'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Medical bonus of ₹1000' : '₹1000 का चिकित्सा बोनस'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Nursing breaks until child is 15 months' : '15 महीने तक स्तनपान विराम'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Crèche facility if 50+ women employed' : '50+ महिला कर्मचारियों के लिए क्रेच सुविधा'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Protection against dismissal' : 'बर्खास्तगी से सुरक्षा'}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <i className="fas fa-info-circle mr-2"></i>
          {currentLang === 'en' 
            ? 'Eligibility: Must have worked at least 80 days in the 12 months prior to expected delivery date.'
            : 'पात्रता: प्रत्याशित प्रसव तिथि से पहले 12 महीनों में कम से कम 80 दिन काम किया होना चाहिए।'}
        </p>
      </div>
    </div>
  );

  const renderLaborContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-3 text-blue-800">
          {currentLang === 'en' 
            ? 'Labor Rights & Protection Laws'
            : 'श्रम अधिकार और सुरक्षा कानून'}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {currentLang === 'en' 
            ? 'Comprehensive protection for women workers across all sectors, including informal employment.'
            : 'अनौपचारिक रोजगार सहित सभी क्षेत्रों में महिला श्रमिकों के लिए व्यापक सुरक्षा।'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-blue-600 flex items-center">
            <i className="fas fa-hard-hat mr-2"></i>
            {currentLang === 'en' ? 'Factories Act, 1948' : 'फैक्ट्री अधिनियम, 1948'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Maximum 48 hours/week, 9 hours/day' : 'अधिकतम 48 घंटे/सप्ताह, 9 घंटे/दिन'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Safety equipment and machinery fencing' : 'सुरक्षा उपकरण और मशीनरी बाड़'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Clean environment, proper lighting' : 'स्वच्छ वातावरण, उचित प्रकाश'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Rest rooms and welfare facilities' : 'विश्राम कक्ष और कल्याण सुविधाएं'}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-orange-600 flex items-center">
            <i className="fas fa-medkit mr-2"></i>
            {currentLang === 'en' ? 'Workmen\'s Compensation Act, 1923' : 'श्रमिक मुआवजा अधिनियम, 1923'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Compensation for workplace injuries' : 'कार्यस्थल की चोटों के लिए मुआवजा'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Coverage for occupational diseases' : 'व्यावसायिक बीमारियों के लिए कवरेज'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Death and disability benefits' : 'मृत्यु और विकलांगता लाभ'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Claims within 2 years of accident' : 'दुर्घटना के 2 साल के भीतर दावा'}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderWagesContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-xl font-bold mb-3 text-green-800">
          {currentLang === 'en' 
            ? 'Equal Pay & Wage Rights'
            : 'समान वेतन और मजदूरी अधिकार'}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {currentLang === 'en' 
            ? 'Laws ensuring fair wages, equal pay for equal work, and transparent payment systems.'
            : 'निष्पक्ष मजदूरी, समान काम के लिए समान वेतन, और पारदर्शी भुगतान प्रणाली सुनिश्चित करने वाले कानून।'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-green-600 flex items-center">
            <i className="fas fa-balance-scale mr-2"></i>
            {currentLang === 'en' ? 'Equal Remuneration Act, 1976' : 'समान पारिश्रमिक अधिनियम, 1976'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Equal pay for same or similar work' : 'समान या समान काम के लिए समान वेतन'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'No discrimination in recruitment' : 'भर्ती में कोई भेदभाव नहीं'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Equal opportunities for training' : 'प्रशिक्षण के लिए समान अवसर'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Fair promotion policies' : 'निष्पक्ष पदोन्नति नीतियां'}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border">
          <h4 className="font-bold text-lg mb-3 text-indigo-600 flex items-center">
            <i className="fas fa-money-bill-wave mr-2"></i>
            {currentLang === 'en' ? 'Minimum Wages Act, 1948' : 'न्यूनतम मजदूरी अधिनियम, 1948'}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Guaranteed minimum wage rates' : 'गारंटीशुदा न्यूनतम मजदूरी दरें'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Variable Dearness Allowance (VDA)' : 'परिवर्तनीय महंगाई भत्ता (VDA)'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Protection from inflation' : 'मुद्रास्फीति से सुरक्षा'}</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
              <span>{currentLang === 'en' ? 'Equal application to all genders' : 'सभी लिंगों के लिए समान लागू'}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm border">
        <h4 className="font-bold text-lg mb-3 text-purple-600 flex items-center">
          <i className="fas fa-credit-card mr-2"></i>
          {currentLang === 'en' ? 'Payment of Wages (Amendment) Act, 2017' : 'मजदूरी भुगतान (संशोधन) अधिनियम, 2017'}
        </h4>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-800 mb-2">
            {currentLang === 'en' 
              ? 'Ensures transparent and traceable wage payments:'
              : 'पारदर्शी और ट्रेसेबल मजदूरी भुगतान सुनिश्चित करता है:'}
          </p>
          <ul className="text-sm space-y-1">
            <li>• {currentLang === 'en' ? 'Payment by cheque or bank transfer' : 'चेक या बैंक ट्रांसफर द्वारा भुगतान'}</li>
            <li>• {currentLang === 'en' ? 'Better transparency in wage payments' : 'मजदूरी भुगतान में बेहतर पारदर्शिता'}</li>
            <li>• {currentLang === 'en' ? 'Reduced risk of wage theft' : 'मजदूरी चोरी का कम जोखिम'}</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderReportingContent = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
        <h3 className="text-xl font-bold mb-3 text-red-800">
          {currentLang === 'en' ? 'How to Report Violations' : 'उल्लंघन की रिपोर्ट कैसे करें'}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {currentLang === 'en' 
            ? 'Step-by-step guide to reporting harassment, wage violations, or unsafe working conditions.'
            : 'उत्पीड़न, मजदूरी उल्लंघन, या असुरक्षित कार्य स्थितियों की रिपोर्ट करने के लिए चरणबद्ध गाइड।'}
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center">
          <i className="fas fa-list-ol mr-2"></i>
          {currentLang === 'en' ? 'Reporting Steps:' : 'रिपोर्टिंग के कदम:'}
        </h4>
        <div className="space-y-4">
          {[
            {
              step: '1',
              titleEn: 'Document Everything',
              titleHi: 'सब कुछ दस्तावेज़ करें',
              descEn: 'Record incidents with dates, times, witnesses, and detailed descriptions',
              descHi: 'घटनाओं को तारीख, समय, गवाह और विस्तृत विवरण के साथ रिकॉर्ड करें'
            },
            {
              step: '2',
              titleEn: 'Internal Reporting',
              titleHi: 'आंतरिक रिपोर्टिंग',
              descEn: 'Report to ICC, supervisor, or HR department at your workplace',
              descHi: 'अपने कार्यस्थल पर ICC, पर्यवेक्षक, या HR विभाग को रिपोर्ट करें'
            },
            {
              step: '3',
              titleEn: 'External Support',
              titleHi: 'बाहरी सहायता',
              descEn: 'Contact women\'s rights NGOs and labor departments',
              descHi: 'महिला अधिकार NGOs और श्रम विभागों से संपर्क करें'
            },
            {
              step: '4',
              titleEn: 'Legal Action',
              titleHi: 'कानूनी कार्रवाई',
              descEn: 'File police report or approach labor courts if needed',
              descHi: 'यदि आवश्यक हो तो पुलिस रिपोर्ट दर्ज करें या श्रम न्यायालयों से संपर्क करें'
            },
            {
              step: '5',
              titleEn: 'Medical Care',
              titleHi: 'चिकित्सा देखभाल',
              descEn: 'Seek medical attention and counseling support if required',
              descHi: 'यदि आवश्यक हो तो चिकित्सा सहायता और परामर्श सहायता लें'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-800 mb-1">
                  {currentLang === 'en' ? item.titleEn : item.titleHi}
                </h5>
                <p className="text-sm text-gray-600">
                  {currentLang === 'en' ? item.descEn : item.descHi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h5 className="font-bold text-yellow-800 mb-2 flex items-center">
            <i className="fas fa-phone mr-2"></i>
            {currentLang === 'en' ? 'Emergency Contacts' : 'आपातकालीन संपर्क'}
          </h5>
          <div className="text-sm space-y-1">
            <p>• {currentLang === 'en' ? 'Women Helpline: 1091' : 'महिला हेल्पलाइन: 1091'}</p>
            <p>• {currentLang === 'en' ? 'Police: 100' : 'पुलिस: 100'}</p>
            <p>• {currentLang === 'en' ? 'National Commission for Women: 011-26944880' : 'राष्ट्रीय महिला आयोग: 011-26944880'}</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h5 className="font-bold text-blue-800 mb-2 flex items-center">
            <i className="fas fa-clock mr-2"></i>
            {currentLang === 'en' ? 'Important Timelines' : 'महत्वपूर्ण समयसीमा'}
          </h5>
          <div className="text-sm space-y-1">
            <p>• {currentLang === 'en' ? 'POSH complaint: 3 months' : 'पोश शिकायत: 3 महीने'}</p>
            <p>• {currentLang === 'en' ? 'Inquiry completion: 90 days' : 'जांच पूर्णता: 90 दिन'}</p>
            <p>• {currentLang === 'en' ? 'Compensation claim: 2 years' : 'मुआवजा दावा: 2 साल'}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl text-purple-700 font-bold mb-2 flex items-center justify-center">
            <i className="fas fa-scale-balanced mr-3 text-3xl"></i>
            {currentLang === 'en' ? 'Know Your Rights' : 'अपने अधिकारों को जानें'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Comprehensive guide to your legal rights and protections in the workplace'
              : 'कार्यस्थल में आपके कानूनी अधिकारों और सुरक्षा की व्यापक गाइड'}
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 p-4 rounded-lg mb-6 text-sm">
          <div className="flex items-start">
            <i className="fas fa-exclamation-circle text-yellow-600 mr-3 mt-0.5 flex-shrink-0"></i>
            <div>
              <p className="font-semibold text-yellow-800 mb-1">
                {currentLang === 'en' ? 'Important Disclaimer' : 'महत्वपूर्ण अस्वीकरण'}
              </p>
              <p className="text-yellow-700">
                {currentLang === 'en' 
                  ? 'This information is for educational purposes only and not legal advice. For specific legal guidance, consult with a qualified lawyer or legal aid organization.'
                  : 'यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है और कानूनी सलाह नहीं है। विशिष्ट कानूनी मार्गदर्शन के लिए, योग्य वकील या कानूनी सहायता संगठन से सलाह लें।'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-all duration-200 transform hover:scale-105 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {currentLang === 'en' ? tab.labelEn : tab.labelHi}
            </button>
          ))}
        </div>

        <div className="rights-content min-h-[400px]">
          {activeTab === 'posh' && renderPoshContent()}
          {activeTab === 'maternity' && renderMaternityContent()}
          {activeTab === 'labor' && renderLaborContent()}
          {activeTab === 'wages' && renderWagesContent()}
          {activeTab === 'reporting' && renderReportingContent()}
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">
              {currentLang === 'en' ? 'Remember: You Are Not Alone' : 'याद रखें: आप अकेली नहीं हैं'}
            </h4>
            <p className="text-sm opacity-90">
              {currentLang === 'en' 
                ? 'Your safety and rights matter. There are people and organizations ready to help and support you.'
                : 'आपकी सुरक्षा और अधिकार महत्वपूर्ण हैं। ऐसे लोग और संगठन हैं जो आपकी मदद और समर्थन के लिए तैयार हैं।'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsPage;