import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const widgetRef = useRef(null);

  const config = {
    phoneNumber: "218913364768",
    companyName: t('whatsapp_company_name'),
    quickReplies: [
      { text: t('whatsapp_products_list'), message: t('whatsapp_products_message') },
      { text: t('whatsapp_location'), message: t('whatsapp_location_message') }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const generateWhatsAppUrl = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${config.phoneNumber}?text=${encodedMessage}`;
  };

  const handleQuickReply = (message) => {
    window.open(generateWhatsAppUrl(message), '_blank');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="whatsapp-widget" ref={widgetRef}>
      {/* الزر الرئيسي */}
      <div
        className={`whatsapp-main-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWhatsapp size={28} color="white" />
        <div className="pulse-ring"></div>
        <div className="notification-badge">1</div>
      </div>

      {/* الويدجت المنبثقة */}
      {isOpen && (
        <div className="whatsapp-widget-popup">
          {/* الهيدر */}
          <div className="widget-header">
            <div className="company-info">
              <div className="company-avatar">
                <FaWhatsapp size={20} color="white" />
              </div>
              <div className="company-details">
                <h6>{config.companyName}</h6>
                <span className="status online">{t('whatsapp_online')}</span>
              </div>
            </div>
            <button
              className="close-widget-btn"
              onClick={() => setIsOpen(false)}
              aria-label={t('whatsapp_close')}
            >
              <FaTimes size={16} color="white" />
            </button>
          </div>

          {/* المحتوى */}
          <div className="widget-content">
            <div className="welcome-message">
              <p>{t('whatsapp_welcome')}</p>
              <p>{t('whatsapp_help')}</p>
            </div>

            <div className="quick-replies">
              {config.quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply.message)}
                >
                  {reply.text}
                </button>
              ))}
            </div>

            <button
              className="custom-message-btn"
              onClick={() => {
                const message = prompt(t('whatsapp_custom_prompt'));
                if (message) {
                  window.open(generateWhatsAppUrl(message), '_blank');
                }
                setIsOpen(false);
              }}
            >
              {t('whatsapp_custom_message')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
