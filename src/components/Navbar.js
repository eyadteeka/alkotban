import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Navbar = ({ style }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="/" className="navbar-brand p-0 d-flex align-items-center brand-lockup">
          <img
            className="brand-logo"
            src="img/alkotban-logo.svg"
            alt={t("navbar_logo_alt")}
          />
          <span className="brand-name text-primary">{t("navbar_brand_name")}</span>
        </a>
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
          <a href="/" className="nav-item nav-link active">
            {t("nav_home")}
          </a>
          <a href="/#about" className="nav-item nav-link">
            {t("nav_about")}
          </a>
          <Link to="/products" className="nav-item nav-link">
            {t("nav_menu")}
          </Link>
          <a href="/#why_us" className="nav-item nav-link">
            {t("nav_why")}
          </a>
          <a href="/#partners" className="nav-item nav-link">
            {t("nav_partners")}
          </a>
          <a href="/#contact" className="nav-item nav-link">
            {t("nav_contact")}
          </a>
        </div>
      </div>
      <div className="nav-e" style={{ display: "flex" }}>
        <div className="d-flex align-items-center gap-3">
          <a href="/#contact" className="btn nav-cta-btn d-none d-lg-inline-flex">
            {t("nav_cta")}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
