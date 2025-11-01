// components/Header.js
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection } = useNavigation();
  const { scrollToSection } = useSmoothScroll();

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

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    closeNav();
  };

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "menu", label: "قائمة المنتجات" },
    // { id: "book", label: "حجز طاولة" },
    { id: "about", label: "من نحن" },
    { id: "contact", label: "اتصل بنا" },
  ];

  return (
    <header className={`header_section ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="/">
            <span>ALMAISOON</span>
          </a>

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
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="nav-label">{item.label}</span>
                    <span className="active-indicator"></span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="user_option">
              <button
                className="order_online"
                onClick={() => handleNavClick("book")}
              >
                طلب الأن
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;