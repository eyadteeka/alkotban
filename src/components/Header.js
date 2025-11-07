// components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleNavClick = (path) => {
    navigate(path);
    closeNav();
  };

  const navItems = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "من نحن" },
    { path: "/booking", label: "اتصل بنا" },
    { path: "/contact", label: "منتجاتنا" },

  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header_section ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <img
              // src="/GreenFieldImages/benwafa-logo.jpeg"
              alt="Greenfield Logo"
              className="navbar-logo"
              style={{ height: "100px", objectFit: "contain" }}
            />
          </Link>

          <button
            className={`navbar-toggler ${isNavOpen ? "active" : ""}`}
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <button
                    className={`nav-link ${isActive(item.path) ? "active" : ""
                      }`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    <span className="nav-label">{item.label}</span>
                    <span className="active-indicator"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;