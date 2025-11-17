import React from 'react';

const Hero = () => {
  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">شريكك الموثوق لتطوير الإنتاج الزراعي في ليبيا</h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                نحن نوفر الأسمدة والبذور والمبيدات الحشرية عالية الجودة من الموردين المعتمدين دوليًا، مما يضمن منتجات موثوقة تلبي احتياجات السوق الزراعية الليبية</p>
              {/* <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">تواصل معنا</a> */}
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="img/hero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;