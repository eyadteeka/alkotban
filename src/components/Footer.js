import React from 'react';
import { FaWhatsapp, FaPhone,FaEnvelope,FaInstagram,FaTwitter,FaFacebook } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>تواصل معنا</h4>
              <div className="contact_link_box">
                  {/* رقم الوتس ضيف ايقونة وتس  */}
                <i>
                  <FaWhatsapp size={22}/>
                  <span>218928030400+</span>
                </i>
                {/* تلفون عادي ضيف ايقونة تلفون */}
                <i>
                  <FaPhone size={18}/>
                  <span>218913270016+</span>
                </i>
                <i>
                  <FaPhone size={18}/>
                  <span>218912143510+</span>
                </i>
                {/* اضافة الايميل */}
                <i>
                  <FaEnvelope size={18}/>
                  <span>demo@gmail.com</span>
                </i>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="/" className="footer-logo">ALMAISOON</a>
              <p>
في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم المرح والمغامرة.              </p>
              <div className="footer_social">
                <a href=""><FaFacebook/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaInstagram/></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>ساعات العمل</h4>
            <p>كل يوم</p>
            <p>10.00 صباحًا - 10.00 مساءً</p>
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