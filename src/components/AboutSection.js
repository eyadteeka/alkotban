import React from "react";

const AboutSection = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              {/* <img src="images/about-img.png" alt="About Us" /> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>ماهي شركة الميسون؟</h2>
              </div>
              <p>
                منذ عام 2013، تأسست شركة الميسون في مدينة مصراتة – ليبيا لتكون
                وجهتكم الأولى لعالم الترفيه والجودة. بدأت رحلتنا بهدف توفير
                منتجات ترفيهية مميزة تجمع بين المتعة، الأمان، والتصميم العصري،
                لتلبي احتياجات مختلف الأعمار من الأطفال إلى الكبار. نحن وكلاء
                معتمدون لمنتجات شركة SPOLO المعروفة بجودتها العالية وابتكارها في
                عالم الألعاب والمعدات الترفيهية. من خلال تعاوننا مع أفضل
                الموردين، نحرص على تقديم تجربة تسوّق متكاملة تشمل ألعاب الأطفال،
                الدراجات الصغيرة، السكوترات، والمعدات الترفيهية المنزلية
                والخارجية. في الميسون، نؤمن أن الترفيه أسلوب حياة، لذلك نعمل
                باستمرار على تطوير تشكيلتنا وتقديم كل جديد في عالم المرح
                والمغامرة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
