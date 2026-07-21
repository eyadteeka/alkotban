import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ style }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path, hash = '') => {
    if (location.pathname !== path) return false;
    if (hash) return location.hash === hash;
    return !location.hash || location.hash === '#home';
  };

  const navLinkClass = (path, hash = '') =>
    `nav-item nav-link ${isActive(path, hash) ? 'active' : ''}`.trim();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 45);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ${isScrolled ? 'sticky-top shadow-sm' : ''}`}
      style={{ ...style }}
    >
      <div style={{ display: "flex" }}>
        <Link to="/" className="navbar-brand p-0 d-flex align-items-center brand-lockup">
          <img
            className="brand-logo"
            src={`${process.env.PUBLIC_URL}/img/alkotban-logo.png`}
            alt={t("navbar_logo_alt")}
          />
          <span className="brand-name text-primary">{t("navbar_brand_name")}</span>
        </Link>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-label={t("nav_toggle_menu")}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav py-0 pe-4">
          <Link to="/" className={navLinkClass('/')} aria-current={isActive('/') ? 'page' : undefined}>
            {t("nav_home")}
          </Link>
          <Link to="/#about" className={navLinkClass('/', '#about')} aria-current={isActive('/', '#about') ? 'location' : undefined}>
            {t("nav_about")}
          </Link>
          <Link to="/products" className={navLinkClass('/products')} aria-current={isActive('/products') ? 'page' : undefined}>
            {t("nav_menu")}
          </Link>
          <Link to="/#why_us" className={navLinkClass('/', '#why_us')} aria-current={isActive('/', '#why_us') ? 'location' : undefined}>
            {t("nav_why")}
          </Link>
          <Link to="/#partners" className={navLinkClass('/', '#partners')} aria-current={isActive('/', '#partners') ? 'location' : undefined}>
            {t("nav_partners")}
          </Link>
          <Link to="/#contact" className={navLinkClass('/', '#contact')} aria-current={isActive('/', '#contact') ? 'location' : undefined}>
            {t("nav_contact")}
          </Link>
        </div>
      </div>
      <div className="nav-e" style={{ display: "flex" }}>
        <div className="d-flex align-items-center gap-3">
          <Link to="/#contact" className="btn nav-cta-btn d-none d-lg-inline-flex">
            {t("nav_cta")}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
