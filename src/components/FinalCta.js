import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

const FinalCta = () => {
  const { t } = useTranslation();

  return (
    <div className="final-cta-section">
      <div className="container">
        <div className="final-cta-inner wow fadeInUp" data-wow-delay="0.1s">
          <h2>{t('final_cta_heading')}</h2>
          <p>{t('final_cta_description')}</p>
          <div className="final-cta-actions">
            <a href="#contact" className="btn final-cta-btn-primary">
              {t('final_cta_primary')}
            </a>
            <a
              href="https://wa.me/218913364768"
              target="_blank"
              rel="noreferrer"
              className="btn final-cta-btn-whatsapp"
            >
              <FaWhatsapp /> {t('final_cta_whatsapp')}
            </a>
            <a href="#contact" className="final-cta-link">
              {t('final_cta_catalog')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCta;
