import React, { useState } from 'react';

const ReportPage = ({ currentLang = 'en', setCurrentPage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    incidentType: '',
    incidentDate: '',
    location: '',
    description: '',
    anonymous: 'yes',
    name: '',
    phone: ''
  });

  const steps = [1, 2, 3];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateStep = () => {
    if (currentStep === 0) {
      return formData.incidentType && formData.incidentDate;
    }
    if (currentStep === 1) {
      const basicFields = formData.location && formData.description;
      if (formData.anonymous === 'no') {
        return basicFields && formData.name && formData.phone;
      }
      return basicFields;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      // In a real app, this would submit to a secure server
      console.log('Form submitted:', formData);
      setShowSuccessModal(true);
      
      // Auto-redirect to homepage after 3 seconds
      setTimeout(() => {
        setShowSuccessModal(false);
        
        // Try to navigate using setCurrentPage first
        if (setCurrentPage) {
          setCurrentPage('home');
        } else {
          // Fallback: refresh the page to go back to homepage
          window.location.reload();
        }
        
        // Additional fallback: force page refresh after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }, 3000);
    }
  };

  const getIncidentTypeDisplay = (type) => {
    const types = {
      verbal: currentLang === 'en' ? 'Verbal Harassment' : 'मौखिक उत्पीड़न',
      physical: currentLang === 'en' ? 'Physical Harassment' : 'शारीरिक उत्पीड़न',
      sexual: currentLang === 'en' ? 'Sexual Harassment' : 'यौन उत्पीड़न',
      discrimination: currentLang === 'en' ? 'Discrimination' : 'भेदभाव',
      other: currentLang === 'en' ? 'Other' : 'अन्य'
    };
    return types[type] || type;
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {currentLang === 'en' ? 'Type of Incident *' : 'घटना का प्रकार *'}
        </label>
        <select 
          name="incidentType"
          value={formData.incidentType}
          onChange={handleInputChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          required
        >
          <option value="">
            {currentLang === 'en' ? 'Select incident type' : 'घटना का प्रकार चुनें'}
          </option>
          <option value="verbal">
            {currentLang === 'en' ? 'Verbal Harassment' : 'मौखिक उत्पीड़न'}
          </option>
          <option value="physical">
            {currentLang === 'en' ? 'Physical Harassment' : 'शारीरिक उत्पीड़न'}
          </option>
          <option value="sexual">
            {currentLang === 'en' ? 'Sexual Harassment' : 'यौन उत्पीड़न'}
          </option>
          <option value="discrimination">
            {currentLang === 'en' ? 'Discrimination' : 'भेदभाव'}
          </option>
          <option value="other">
            {currentLang === 'en' ? 'Other' : 'अन्य'}
          </option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {currentLang === 'en' ? 'Date of Incident *' : 'घटना की तारीख *'}
        </label>
        <input 
          type="date" 
          name="incidentDate"
          value={formData.incidentDate}
          onChange={handleInputChange}
          max={new Date().toISOString().split('T')[0]}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          required
        />
      </div>
      
      <button 
        type="button"
        onClick={nextStep}
        disabled={!validateStep()}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-medium shadow-lg hover:from-purple-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100"
      >
        {currentLang === 'en' ? 'Continue' : 'आगे बढ़ें'}
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {currentLang === 'en' ? 'Location of Incident *' : 'घटना का स्थान *'}
        </label>
        <input 
          type="text" 
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder={currentLang === 'en' ? 'Where did this incident occur?' : 'यह घटना कहाँ हुई?'}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {currentLang === 'en' ? 'Description *' : 'विवरण *'}
        </label>
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder={currentLang === 'en' ? 'Please provide a detailed description of what happened. Include relevant details like time, people involved, and any witnesses.' : 'कृपया विस्तार से बताएं कि क्या हुआ। समय, शामिल लोग, और गवाह जैसी प्रासंगिक जानकारी शामिल करें।'}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors min-h-32 resize-none"
          required
        ></textarea>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {currentLang === 'en' ? 'Reporting Preference *' : 'रिपोर्टिंग प्राथमिकता *'}
        </label>
        <select 
          name="anonymous"
          value={formData.anonymous}
          onChange={handleInputChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          required
        >
          <option value="yes">
            {currentLang === 'en' ? 'Anonymous Report' : 'गुमनाम रिपोर्ट'}
          </option>
          <option value="no">
            {currentLang === 'en' ? 'Include My Contact Information' : 'मेरी संपर्क जानकारी शामिल करें'}
          </option>
        </select>
      </div>

      {formData.anonymous === 'no' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4 animate-slideIn">
          <h4 className="text-sm font-medium text-blue-800 mb-3 flex items-center">
            <i className="fas fa-user text-blue-600 mr-2"></i>
            {currentLang === 'en' ? 'Contact Information' : 'संपर्क जानकारी'}
          </h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {currentLang === 'en' ? 'Full Name *' : 'पूरा नाम *'}
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={currentLang === 'en' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें'}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              required={formData.anonymous === 'no'}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {currentLang === 'en' ? 'Phone Number *' : 'फोन नंबर *'}
            </label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={currentLang === 'en' ? 'Enter your phone number' : 'अपना फोन नंबर दर्ज करें'}
              pattern="[0-9]{10}"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              required={formData.anonymous === 'no'}
            />
          </div>
        </div>
      )}
      
      <div className="flex gap-3">
        <button 
          type="button"
          onClick={prevStep}
          className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-200 transition-colors"
        >
          {currentLang === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button 
          type="button"
          onClick={nextStep}
          disabled={!validateStep()}
          className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-lg font-medium shadow-lg hover:from-purple-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100"
        >
          {currentLang === 'en' ? 'Review' : 'समीक्षा करें'}
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <i className="fas fa-eye text-purple-600 mr-2"></i>
          {currentLang === 'en' ? 'Review Your Report' : 'अपनी रिपोर्ट की समीक्षा करें'}
        </h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex">
            <span className="w-24 font-medium text-gray-600">
              {currentLang === 'en' ? 'Type:' : 'प्रकार:'}
            </span>
            <span className="text-gray-800">{getIncidentTypeDisplay(formData.incidentType)}</span>
          </div>
          <div className="flex">
            <span className="w-24 font-medium text-gray-600">
              {currentLang === 'en' ? 'Date:' : 'तारीख:'}
            </span>
            <span className="text-gray-800">{formData.incidentDate}</span>
          </div>
          <div className="flex">
            <span className="w-24 font-medium text-gray-600">
              {currentLang === 'en' ? 'Location:' : 'स्थान:'}
            </span>
            <span className="text-gray-800">{formData.location}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-600 mb-1">
              {currentLang === 'en' ? 'Description:' : 'विवरण:'}
            </span>
            <span className="text-gray-800 bg-white p-3 rounded border">{formData.description}</span>
          </div>
          {formData.anonymous === 'no' && (
            <>
              <div className="flex">
                <span className="w-24 font-medium text-gray-600">
                  {currentLang === 'en' ? 'Name:' : 'नाम:'}
                </span>
                <span className="text-gray-800">{formData.name}</span>
              </div>
              <div className="flex">
                <span className="w-24 font-medium text-gray-600">
                  {currentLang === 'en' ? 'Phone:' : 'फोन:'}
                </span>
                <span className="text-gray-800">{formData.phone}</span>
              </div>
            </>
          )}
          <div className="flex">
            <span className="w-24 font-medium text-gray-600">
              {currentLang === 'en' ? 'Anonymous:' : 'गुमनाम:'}
            </span>
            <span className="text-gray-800">
              {formData.anonymous === 'yes' 
                ? (currentLang === 'en' ? 'Yes' : 'हां') 
                : (currentLang === 'en' ? 'No' : 'नहीं')}
            </span>
          </div>
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start">
          <i className="fas fa-shield-alt text-amber-600 mr-3 mt-1"></i>
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">
              {currentLang === 'en' ? 'Security & Privacy Notice' : 'सुरक्षा और गोपनीयता सूचना'}
            </p>
            <p>
              {currentLang === 'en' 
                ? 'Your report will be handled confidentially by trained professionals. All data is encrypted and stored securely.'
                : 'आपकी रिपोर्ट को प्रशिक्षित पेशेवरों द्वारा गोपनीय रूप से संभाला जाएगा। सभी डेटा एन्क्रिप्ट किया गया है और सुरक्षित रूप से संग्रहीत है।'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
        <div className="flex items-center text-blue-800">
          <i className="fas fa-info-circle mr-2"></i>
          <span className="font-medium">
            {currentLang === 'en' ? 'Demo Notice:' : 'डेमो सूचना:'}
          </span>
        </div>
        <p className="text-blue-700 mt-1">
          {currentLang === 'en' 
            ? 'This is a demonstration. No real report is being submitted.'
            : 'यह एक प्रदर्शन है। कोई वास्तविक रिपोर्ट दर्ज नहीं की जा रही है।'}
        </p>
      </div>
      
      <div className="flex gap-3">
        <button 
          type="button"
          onClick={prevStep}
          className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-200 transition-colors"
        >
          {currentLang === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button 
          type="button"
          onClick={handleSubmit}
          disabled={!validateStep()}
          className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-medium shadow-lg hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center"
        >
          <i className="fas fa-paper-plane mr-2"></i>
          {currentLang === 'en' ? 'Submit Report' : 'रिपोर्ट जमा करें'}
        </button>
      </div>
    </div>
  );

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center shadow-2xl transform animate-bounce">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-check text-green-600 text-3xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {currentLang === 'en' ? 'Report Submitted!' : 'रिपोर्ट जमा हो गई!'}
        </h3>
        <p className="text-gray-600 mb-4">
          {currentLang === 'en' 
            ? 'Thank you for your courage. Your report has been received and will be reviewed by our team.'
            : 'आपके साहस के लिए धन्यवाद। आपकी रिपोर्ट प्राप्त हो गई है और हमारी टीम द्वारा इसकी समीक्षा की जाएगी।'}
        </p>
        <div className="text-sm text-gray-500 flex items-center justify-center">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          {currentLang === 'en' ? 'Redirecting to homepage in 3 seconds...' : 'होमपेज पर 3 सेकंड में भेजा जा रहा है...'}
        </div>
        <button
          onClick={() => {
            setShowSuccessModal(false);
            if (setCurrentPage) {
              setCurrentPage('home');
            } else {
              window.location.reload();
            }
          }}
          className="mt-4 text-purple-600 hover:text-purple-800 font-medium text-sm underline"
        >
          {currentLang === 'en' ? 'Go to Homepage Now' : 'अभी होमपेज पर जाएं'}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="animate-fadeIn max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <i className="fas fa-shield-alt mr-3"></i>
              {currentLang === 'en' ? 'Secure Incident Report' : 'सुरक्षित घटना रिपोर्ट'}
            </h2>
            <p className="text-purple-100">
              {currentLang === 'en' 
                ? 'Your safety and privacy are our top priority.'
                : 'आपकी सुरक्षा और गोपनीयता हमारी सर्वोच्च प्राथमिकता है।'}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
              {steps.map((step, index) => (
                <div 
                  key={step}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold relative z-10 border-4 transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-purple-600 text-white border-purple-600' 
                      : 'bg-white text-gray-400 border-gray-200'
                  }`}
                >
                  {index < currentStep ? (
                    <i className="fas fa-check text-sm"></i>
                  ) : (
                    step
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs font-medium text-gray-600">
              <span>{currentLang === 'en' ? 'Basic Info' : 'बुनियादी जानकारी'}</span>
              <span>{currentLang === 'en' ? 'Details' : 'विवरण'}</span>
              <span>{currentLang === 'en' ? 'Review' : 'समीक्षा'}</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {currentStep === 0 && renderStep1()}
            {currentStep === 1 && renderStep2()}
            {currentStep === 2 && renderStep3()}
          </div>
        </div>

        {/* Security Features Notice */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-lock text-green-600 mr-2"></i>
            <span className="font-medium text-green-600 mr-1">
              {currentLang === 'en' ? 'Secure:' : 'सुरक्षित:'}
            </span>
            {currentLang === 'en' 
              ? 'End-to-end encryption • Anonymous options • Professional handling'
              : 'एंड-टू-एंड एन्क्रिप्शन • गुमनाम विकल्प • पेशेवर हैंडलिंग'}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal />}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -10px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -5px, 0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-bounce {
          animation: bounce 1s;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ReportPage;