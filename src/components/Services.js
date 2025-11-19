import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMedal, FaUtensils, FaCartPlus, FaHeadset } from 'react-icons/fa';

const ServiceItem = ({ delay, Icon, title }) => {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={delay}>
      <div className="service-item rounded pt-3">
        <div className="service-item-inner">
          <Icon className="service-item-icon text-primary mb-3" size={36} />
          <h5 className="service-item-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      delay: "0.1s",
      Icon: FaMedal,
      titleKey: "services_quality",
    },
    {
      delay: "0.3s",
      Icon: FaUtensils,
      titleKey: "services_transparency",
    },
    {
      delay: "0.5s",
      Icon: FaCartPlus,
      titleKey: "services_customer_care",
    },
    {
      delay: "0.7s",
      Icon: FaHeadset,
      titleKey: "services_long_term",
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="section-title ff-secondary text-center text-secondary fw-normal mb-5">
            {t('services_section_title')}
          </h2>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              delay={service.delay}
              Icon={service.Icon}
              title={t(service.titleKey)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;