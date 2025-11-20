import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };
  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    closeLanguageMenu();
  };
  const closeLanguageMenu = () => {
    setIsLanguageMenuOpen(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <div style={{ display: "flex" }}>
        <a href="" className="navbar-brand p-0">
          <h5 className="text-primary m-0">
            <img
              className="img-fluid"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
              src="img/Co-logos/greenfield-fav.png"
              alt={t("navbar_logo_alt")}
            />
            {t("navbar_brand_name")}
          </h5>
        </a>
      </div>
      <div className="language-e" style={{ display: "none" }}>
        <div className="mobile-controls">
          <button
            className="mobile-language-toggle"
            onClick={toggleLanguageMenu}
            aria-label="Change language"
          >
            <FontAwesomeIcon icon={faGlobe} className="text-primary" />

          </button>
          {isLanguageMenuOpen && (
            <div className="mobile-language-dropdown">
              <button
                className={`mobile-lang-item ${
                  i18n.language === "en" ? "active" : ""
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                English
              </button>
              <button
                className={`mobile-lang-item ${
                  i18n.language === "ar" ? "active" : ""
                }`}
                onClick={() => handleLanguageChange("ar")}
              >
                العربية
              </button>
            </div>
          )}

        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav py-0 pe-4">
          <a href="#home" className="nav-item nav-link active">
            {t("nav_home")}
          </a>
          <a href="#about" className="nav-item nav-link">
            {t("nav_about")}
          </a>
          {/* <a href="#service" className="nav-item nav-link">
            {t("nav_services")}
          </a> */}
          <a href="#products" className="nav-item nav-link">
            {t("nav_menu")}
          </a>
          <a href="#contact" className="nav-item nav-link">
            {t("nav_contact")}
          </a>
        </div>
      </div>
      <div className="nav-e" style={{ display: "flex" }}>
        <div className="d-flex align-items-center gap-3">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
