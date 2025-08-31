// pages/ReportPage.js
import React, { useState } from 'react';

const ReportPage = ({ currentLang }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    incidentType: '',
    incidentDate: '',
    location: '',
    description: '',
    anonymous: 'yes'
  });

  const steps = [1, 2, 3];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to a server
    console.log('Form submitted:', formData);
  };

  const renderStep1 = () => (
    <div>
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          {currentLang === 'en' ? 'Type of Incident *' : 'घटना का प्रकार *'}
        </label>
        <select 
          name="incidentType"
          value={formData.incidentType}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
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
      
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          {currentLang === 'en' ? 'Date of Incident *' : 'घटना की तारीख *'}
        </label>
        <input 
          type="date" 
          name="incidentDate"
          value={formData.incidentDate}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      
      <button 
        onClick={nextStep}
        className="w-full bg-purple-700 text-white py-3 rounded-full font-semibold shadow-md active:translate-y-0.5"
      >
        {currentLang === 'en' ? 'Next' : 'अगला'}
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          {currentLang === 'en' ? 'Location of Incident *' : 'घटना का स्थान *'}
        </label>
        <input 
          type="text" 
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder={currentLang === 'en' ? 'Where did it happen?' : 'यह कहाँ हुआ?'}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
          required
        />
      </div>
      
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          {currentLang === 'en' ? 'Description *' : 'विवरण *'}
        </label>
        <textarea 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder={currentLang === 'en' ? 'Please describe what happened...' : 'कृपया बताएं कि क्या हुआ...'}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 min-h-32"
          required
        ></textarea>
      </div>
      
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          {currentLang === 'en' ? 'Would you like to remain anonymous?' : 'क्या आप गुमनाम रहना चाहेंगी?'}
        </label>
        <select 
          name="anonymous"
          value={formData.anonymous}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500"
        >
          <option value="yes">
            {currentLang === 'en' ? 'Yes, keep me anonymous' : 'हां, मुझे गुमनाम रखें'}
          </option>
          <option value="no">
            {currentLang === 'en' ? 'No, I\'m willing to share my identity' : 'नहीं, मैं अपनी पहचान साझा करने को तैयार हूं'}
          </option>
        </select>
      </div>
      
      <div className="flex gap-3">
        <button 
          onClick={prevStep}
          className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-full font-semibold active:translate-y-0.5"
        >
          {currentLang === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button 
          onClick={nextStep}
          className="flex-1 bg-purple-700 text-white py-3 rounded-full font-semibold shadow-md active:translate-y-0.5"
        >
          {currentLang === 'en' ? 'Next' : 'अगला'}
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <div className="bg-white rounded-xl p-5 shadow-md mb-5">
        <h3 className="text-lg font-bold mb-3">
          {currentLang === 'en' ? 'Review Your Report' : 'अपनी रिपोर्ट की समीक्षा करें'}
        </h3>
        <p className="mb-2">
          <strong>{currentLang === 'en' ? 'Incident Type:' : 'घटना का प्रकार:'}</strong> {formData.incidentType}
        </p>
        <p className="mb-2">
          <strong>{currentLang === 'en' ? 'Date:' : 'तारीख:'}</strong> {formData.incidentDate}
        </p>
        <p className="mb-2">
          <strong>{currentLang === 'en' ? 'Location:' : 'स्थान:'}</strong> {formData.location}
        </p>
        <p className="mb-2">
          <strong>{currentLang === 'en' ? 'Description:' : 'विवरण:'}</strong> {formData.description}
        </p>
        <p className="mb-2">
          <strong>{currentLang === 'en' ? 'Anonymous:' : 'गुमनाम:'}</strong> {formData.anonymous === 'yes' 
            ? (currentLang === 'en' ? 'Yes' : 'हां') 
            : (currentLang === 'en' ? 'No' : 'नहीं')}
        </p>
      </div>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mb-5 text-sm">
        <i className="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
        {currentLang === 'en' 
          ? 'Remember: This is a demonstration. No real report is being submitted.'
          : 'याद रखें: यह एक प्रदर्शन है। कोई वास्तविक रिपोर्ट दर्ज नहीं की जा रही है।'}
      </div>
      
      <div className="flex gap-3">
        <button 
          onClick={prevStep}
          className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-full font-semibold active:translate-y-0.5"
        >
          {currentLang === 'en' ? 'Back' : 'पीछे'}
        </button>
        <button 
          onClick={handleSubmit}
          className="flex-1 bg-purple-700 text-white py-3 rounded-full font-semibold shadow-md active:translate-y-0.5"
        >
          {currentLang === 'en' ? 'Submit Report' : 'रिपोर्ट जमा करें'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <h2 className="text-xl text-purple-700 font-bold mb-3 flex items-center">
          <i className="fas fa-exclamation-circle mr-2"></i>
          {currentLang === 'en' ? 'Report an Incident' : 'एक घटना की रिपोर्ट करें'}
        </h2>
        <p className="mb-4">
          {currentLang === 'en' 
            ? 'Your report is confidential. You can choose to remain anonymous.'
            : 'आपकी रिपोर्ट गोपनीय है। आप गुमनाम रहना चुन सकती हैं।'}
        </p>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded mb-5 text-sm">
          <i className="fas fa-exclamation-circle text-yellow-600 mr-2"></i>
          {currentLang === 'en' 
            ? 'This is a demonstration. No real report is being submitted.'
            : 'यह एक प्रदर्शन है। कोई वास्तविक रिपोर्ट दर्ज नहीं की जा रही है।'}
        </div>

        <div className="flex justify-between mb-6 relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          {steps.map((step, index) => (
            <div 
              key={step}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 ${
                index <= currentStep ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 0 && renderStep1()}
          {currentStep === 1 && renderStep2()}
          {currentStep === 2 && renderStep3()}
        </form>
      </div>
    </div>
  );
};

export default ReportPage;