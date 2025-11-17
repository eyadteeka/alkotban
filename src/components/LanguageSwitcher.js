import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="btn btn-outline-primary btn-sm"
    >
      {i18n.language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;