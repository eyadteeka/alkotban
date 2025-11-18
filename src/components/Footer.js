import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const { t } = useTranslation();

  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              {t('footer_company_heading')}
            </h4>
            <a className="btn btn-link" href="">{t('footer_link_about')}</a>
            <a className="btn btn-link" href="">{t('footer_link_why_us')}</a>
            <a className="btn btn-link" href="">{t('footer_link_partners')}</a>
            <a className="btn btn-link" href="">{t('footer_link_contact')}</a>
            <a className="btn btn-link" href="">{t('footer_link_products')}</a>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              {t('footer_contact_heading')}
            </h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{t('footer_address')}</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>{t('footer_phone')}</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>{t('footer_email')}</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              {t('footer_opening_heading')}
            </h4>
            <h5 className="text-light fw-normal">{t('footer_opening_weekdays')}</h5>
            <p>{t('footer_opening_weekdays_hours')}</p>
            <h5 className="text-light fw-normal">{t('footer_opening_weekend')}</h5>
            <p>{t('footer_opening_weekend_hours')}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">{t('navbar_brand_name')}</a>, {t('footer_rights')}
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;