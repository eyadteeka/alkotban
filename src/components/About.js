import React from 'react';
import Counter from './counter';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.png" alt="About 1" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.png" alt="About 2" style={{ marginTop: '25%' }} />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.png" alt="About 3" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.png" alt="About 4" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">حول الشركة</h5>
            <h1 className="mb-4">مرحباً بكم في شركة الحقل الأخضر</h1>
            <p className="mb-4">
              شركة الحقل الأخضر هي شركة ليبية تأسست عام 2002، متخصصة في استيراد وتوزيع الأسمدة والبذور والمبيدات ومستلزمات الري من شركات عالمية موثوقة. نركز على تقديم منتجات عالية الجودة تناسب التربة الليبية وتلبي احتياجات المزارعين
            </p>
            <p className="mb-4">
              خلال مسيرتنا، ركّزنا على تقديم منتجات تساعد المزارعين على العمل بكفاءة أكبر وتحقيق نتائج أفضل في محاصيلهم. نعمل باستمرار على توسيع مجموعة منتجاتنا لضمان تلبية احتياجات المزارع الليبي في مختلف المواسم
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">
                    <Counter
                      value={13}
                      places={[10, 1]}
                      fontSize={80}
                      padding={5}
                      gap={10}
                      textColor="var(--text-primary)"
                      fontWeight={900}
                    />
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">خبرة</p>
                    <h6 className="text-uppercase mb-0">سنة</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
