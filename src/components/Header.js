// components/Header.js
import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection } = useNavigation();
  const { scrollToSection } = useSmoothScroll();

  // تأثير التمرير على الـ Header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { id: 'home', label: 'الرئيسية' },
    { id: 'menu', label: 'قائمة المنتجات' },
    { id: 'book', label: 'حجز طاولة' },
    { id: 'about', label: 'من نحن'  },
    { id: 'contact', label: 'اتصل بنا' }
  ];

  return (
    <header className={`header_section ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="/">
            <span>Feane</span>
          </a>

          <button 
            className={`navbar-toggler ${isNavOpen ? 'active' : ''}`}
            type="button" 
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="nav-label">{item.label}</span>
                    <span className="active-indicator"></span>
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="user_option">
              <form className="form-inline">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <button className="order_online">
                طلب أونلاين
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// مكون أيقونة السلة (نفس الكود السابق)
const CartIcon = () => (
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.029 456.029">
    {/* نفس محتوى SVG السابق */}
  </svg>
);

export default Header;


// import React, { useState } from 'react';

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className="header_section">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg custom_nav-container">
//           <a className="navbar-brand" href="index.html">
//             <span>Feane</span>
//           </a>

//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             onClick={toggleNav}
//           >
//             <span></span>
//           </button>

//           <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item active">
//                 <a className="nav-link" href="index.html">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="menu.html">Menu</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="about.html">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="book.html">Book Table</a>
//               </li>
//             </ul>
//             <div className="user_option">
//               <a href="" className="user_link">
//                 <i className="fa fa-user" aria-hidden="true"></i>
//               </a>
//               <a className="cart_link" href="#">
//                 <CartIcon />
//               </a>
//               <form className="form-inline">
//                 <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
//                   <i className="fa fa-search" aria-hidden="true"></i>
//                 </button>
//               </form>
//               <a href="" className="order_online">
//                 Order Online
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// const CartIcon = () => (
//   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.029 456.029">
//     <g>
//       <g>
//         <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
//          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
//       </g>
//     </g>
//     <g>
//       <g>
//         <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
//          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
//          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
//          C457.728,97.71,450.56,86.958,439.296,84.91z" />
//       </g>
//     </g>
//     <g>
//       <g>
//         <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
//          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
//       </g>
//     </g>
//   </svg>
// );

// export default Header;