import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const widgetRef = useRef(null);

  const config = {
    phoneNumber: "+218928030400",
    companyName: "ALMAISOON",
    quickReplies: [
      { text: "📋 قائمة المنتجات", message: "أرغب في رؤية قائمة المنتجات" },
      { text: "📍 الموقع", message: "أين موقع الشركة بالضبط؟" }
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
                <span className="status online">● متصل الآن</span>
              </div>
            </div>
            <button 
              className="close-widget-btn"
              onClick={() => setIsOpen(false)}
              aria-label="إغلاق النافذة"
            >
              <FaTimes size={16} color="white" />
            </button>
          </div>

          {/* المحتوى */}
          <div className="widget-content">
            <div className="welcome-message">
              <p>مرحباً! 👋</p>
              <p>كيف يمكننا مساعدتك؟</p>
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
                const message = prompt("اكتب رسالتك هنا:");
                if (message) {
                  window.open(generateWhatsAppUrl(message), '_blank');
                }
                setIsOpen(false);
              }}
            >
              ✏️ رسالة مخصصة
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;