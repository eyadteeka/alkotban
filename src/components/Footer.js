import React from 'react';

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
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>00218928030400</span>
                </a>
                {/* تلفون عادي ضيف ايقونة تلفون */}
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>00218913270016</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>00218912143510</span>
                </a>
                {/* اضافة الايميل */}
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="" className="footer-logo">ALMAISOON</a>
              <p>
في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم المرح والمغامرة.              </p>
              <div className="footer_social">
                <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-pinterest" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear">{currentYear}</span> All Rights Reserved By
            <a href="https://html.design/"> Free Html Templates</a><br /><br />
            &copy; <span id="displayYear">{currentYear}</span> Distributed By
            <a href="https://themewagon.com/" target="_blank"> ThemeWagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;