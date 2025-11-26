import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-8 text-center justify-items-center">
              <h1 className="mb-4 text-white animated slideInLeft">{t('hero_heading')}</h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                {t('hero_subheading')}
              </p>
            </div>
            <div className="col-lg-4 text-center overflow-hidden">
              <img className="img-fluid" src="logo512.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;