import React from 'react';

const ServiceItem = ({ delay, icon, title, description }) => {
  return (
    <div className={`col-lg-3 col-sm-6 wow fadeInUp`} data-wow-delay={delay}>
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className={`fa fa-3x ${icon} text-primary mb-4`}></i>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      delay: "0.1s",
      icon: "fa-medal",
      title: "منتجات معتمدة بجودة عالمية",
    },
    {
      delay: "0.3s",
      icon: "fa-utensils",
      title: "خبرة في السوق الزراعي الليبي",
    },
    {
      delay: "0.5s",
      icon: "fa-cart-plus",
      title: "دعم فني وإرشادات للمزارعين",
    },
    {
      delay: "0.7s",
      icon: "fa-headset",
      title: "توفير مستمر وتوريد سريع",
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="section-title ff-secondary text-center text-primary fw-normal mb-5">لماذا نحن؟</h2>
        </div>
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