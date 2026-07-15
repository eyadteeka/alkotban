import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeadset, FaEye, FaAward, FaHistory } from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();

  const values = [
    { Icon: FaAward, titleKey: 'services_quality' },
    { Icon: FaEye, titleKey: 'services_transparency' },
    { Icon: FaHeadset, titleKey: 'services_customer_care' },
    { Icon: FaHistory, titleKey: 'services_long_term' },
  ];

  return (
    <div className="rf-values">
      <div className="container">
        <span className="rf-eyebrow rf-eyebrow-light wow fadeInUp" data-wow-delay="0.1s">
          {t('services_section_title')}
        </span>
        <div className="rf-values-strip">
          {values.map(({ Icon, titleKey }, index) => (
            <div
              className="rf-value-item wow fadeInUp"
              data-wow-delay={`${0.15 + index * 0.1}s`}
              key={titleKey}
            >
              <span className="rf-value-icon">
                <Icon />
              </span>
              <span className="rf-value-title">{t(titleKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
