import React from 'react';

const ServiceItem = ({ delay, icon, title, description }) => {
  return (
    <div className={`col-lg-3 col-sm-6 wow fadeInUp`} data-wow-delay={delay}>
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className={`fa fa-3x ${icon} text-primary mb-4`}></i>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      delay: "0.1s",
      icon: "fa-user-tie",
      title: "Master Chefs",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
    },
    {
      delay: "0.3s",
      icon: "fa-utensils",
      title: "Quality Food",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
    },
    {
      delay: "0.5s",
      icon: "fa-cart-plus",
      title: "Online Order",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
    },
    {
      delay: "0.7s",
      icon: "fa-headset",
      title: "24/7 Service",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;