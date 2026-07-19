import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp } from 'react-icons/fa';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <a href="/" className="d-flex align-items-center brand-lockup mb-3">
              <img className="brand-logo" src="img/alkotban-logo.png" alt={t('navbar_logo_alt')} />
              <span className="brand-name text-primary">{t('navbar_brand_name')}</span>
            </a>
            <p className="footer-about-blurb">{t('footer_about_blurb')}</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              {t('footer_company_heading')}
            </h4>
            <a className="btn btn-link" href="/#about">{t('footer_link_about')}</a>
            <a className="btn btn-link" href="/#our_values">{t('footer_link_our_values')}</a>
            <a className="btn btn-link" href="/#why_us">{t('footer_link_why_us')}</a>
            <a className="btn btn-link" href="/products">{t('footer_link_products')}</a>
            <a className="btn btn-link" href="/#partners">{t('footer_link_partners')}</a>
            <a className="btn btn-link" href="/#contact">{t('footer_link_contact')}</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              {t('footer_contact_heading')}
            </h4>
            <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-fa" />{t('footer_address')}</p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-fa" />
              <bdo dir="ltr"><a className="footer-inline-link" href="tel:+218913364768">+218 91-336-4768</a></bdo>
            </p>
            <p className="mb-2">
              <FaWhatsapp className="me-fa" />
              <bdo dir="ltr"><a className="footer-inline-link" href="https://wa.me/218913364768" target="_blank" rel="noreferrer">+218 91-336-4768</a></bdo>
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="me-fa" />
              <a className="footer-inline-link" href={`mailto:${t('footer_email')}`}>{t('footer_email')}</a>
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              {t('footer_opening_heading')}
            </h4>
            <h5 className="text-light fw-normal">{t('saturday_thursday')}</h5>
            <p>{t('time_8_6')}</p>
            <h5 className="text-light fw-normal">{t('friday')}</h5>
            <p>{t('closed')}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="/">{t('navbar_brand_name')}</a>, {t('footer_rights')}
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
