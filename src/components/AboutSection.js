import React from "react";

const AboutSection = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="GreenFieldImages/field.jpeg" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>من نحن ؟</h2>
              </div>
              <p>
                تأسست شركة الحقل الأخضر في عام 1997 في مدينة مصراتة – ليبيا لتكون شريككم الموثوق في عالم
                الزراعة الحديثة. نعمل على استيراد وبيع المستلزمات والمعدات الزراعية بأعلى معايير
                الجودة لتلبية احتياجات المزارعين والمشروعات الزراعية بمختلف أحجامها.
                نقدم حلولاً متكاملة تشمل أنظمة الري، الأدوات الزراعية، الأسمدة، وقطع الغيار،
                مع التزامنا الدائم بتوفير منتجات فعالة تدعم الإنتاج وتزيد من كفاءة العمل في الحقول.
                في شركة الحقل الأخضر، نؤمن بأن الزراعة هي أساس التنمية المستدامة،
                ونسعى دوماً لتقديم كل ما يساعد على بناء مستقبل زراعي أكثر إنتاجاً واستدامة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
