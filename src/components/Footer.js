import React from 'react';
import { FaWhatsapp, FaPhone,FaEnvelope,FaInstagram,FaTwitter,FaFacebook } from 'react-icons/fa';
import { useSmoothScroll } from "../hooks/useSmoothScroll";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>تواصل معنا</h4>
              <div className="contact_link_box">
                <i>
                  <FaWhatsapp size={22}/>
                  <span>218928030400+</span>
                </i>
                <i>
                  <FaPhone size={18}/>
                  <span>218913270016+</span>
                </i>
                <i>
                  <FaPhone size={18}/>
                  <span>218912143510+</span>
                </i>
                <i>
                  <FaEnvelope size={18}/>
                  <span>maisoontoys@gmail.com</span>
                </i>
                <div className="qr-box" style={{ marginTop: '10px' }}>
                  <img src="/images/QR-code.jpeg" alt="QR code" style={{ width: '120px', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="/" className="footer-logo">ALMAISOON</a>
              <p>
في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم المرح والمغامرة.              </p>
              <div className="footer_social">
                <a href="/"><FaFacebook/></a>
                <a href="/"><FaTwitter/></a>
                <a href="/"><FaInstagram/></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_nav">
              <ul className="footer-nav-list">
                {/* reuse same nav items as header for smooth scrolling */}
                {[
                  { id: "home", label: "الرئيسية" },
                  { id: "menu", label: "قائمة المنتجات" },
                  { id: "about", label: "من نحن" },
                  { id: "contact", label: "اتصل بنا" },
                ].map((item) => (
                  <li key={item.id} style={{ listStyle: 'none', marginBottom: '6px' }}>
                    <button
                      type="button"
                      className="nav-link footer-link"
                      onClick={() => {
                        try {
                          if (typeof scrollToSection === 'function') scrollToSection(item.id);
                        } catch (err) {
                          const el = document.getElementById(item.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer' }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear">{currentYear}</span> جميع الحقوق محفوظة لشركة 
            <a href="/"> الميسون</a><br /><br />
            &copy; <span id="displayYear">{currentYear}</span> Distributed By
            <a href="https://ICode.ly/"> ICode</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;