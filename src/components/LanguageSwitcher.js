import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  // تحديث اتجاه الصفحة عند تغيير اللغة
  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
    setIsRTL(direction === 'rtl');
    
    // إضافة class للbody لإدارة الأنماط
    document.body.classList.toggle('rtl', direction === 'rtl');
    document.body.classList.toggle('ltr', direction === 'ltr');
    
    // حفظ تفضيل اللغة في localStorage
    localStorage.setItem('preferred-language', i18n.language);
  }, [i18n.language]);

  // استعادة اللغة المحفوظة عند التحميل
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const getLanguageLabel = () => {
    switch(i18n.language) {
      case 'en': return 'العربية';
      case 'ar': return 'English';
      default: return i18n.language === 'en' ? 'العربية' : 'English';
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`language-switcher btn btn-sm ${isRTL ? 'btn-warning' : 'btn-primary'}`}
      aria-label={t('switch_language')}
      title={t('switch_language')}
    >
      <span className="language-text">{getLanguageLabel()}</span>
    </button>
  );
};

export default LanguageSwitcher;