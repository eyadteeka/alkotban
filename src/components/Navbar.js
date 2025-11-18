import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <img className="img-fluid" src="img/Co-logos/atilalbg.png" alt={t('navbar_logo_alt')} />
          {t('navbar_brand_name')}
        </h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <a href="index.html" className="nav-item nav-link active">{t('nav_home')}</a>
          <a href="about.html" className="nav-item nav-link">{t('nav_about')}</a>
          <a href="service.html" className="nav-item nav-link">{t('nav_services')}</a>
          <a href="menu.html" className="nav-item nav-link">{t('nav_menu')}</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{t('nav_pages')}</a>
            <div className="dropdown-menu m-0">
              <a href="booking.html" className="dropdown-item">{t('nav_booking')}</a>
              <a href="team.html" className="dropdown-item">{t('nav_team')}</a>
              <a href="testimonial.html" className="dropdown-item">{t('nav_testimonials')}</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">{t('nav_contact')}</a>
        </div>
        <div className="d-flex align-items-center gap-3">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;