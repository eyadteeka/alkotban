import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaSeedling, FaShieldAlt, FaFlask } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-alkotban">
      <div className="hero-alkotban-motif" aria-hidden="true">
        <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
          <path
            className="hero-motif-route"
            d="M 40 460 C 160 420, 200 300, 340 260 C 440 232, 480 160, 560 90"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="2"
            strokeDasharray="2 14"
            strokeLinecap="round"
          />
          <circle cx="40" cy="460" r="6" fill="var(--secondary)" />
          <circle cx="340" cy="260" r="6" fill="var(--secondary)" />
          <circle cx="560" cy="90" r="6" fill="var(--secondary)" />
          <circle cx="470" cy="470" r="220" fill="var(--primary)" opacity="0.16" />
          <circle cx="120" cy="140" r="140" fill="var(--primary)" opacity="0.12" />
        </svg>
      </div>

      <div className="container hero-alkotban-inner">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="hero-eyebrow wow fadeInUp" data-wow-delay="0.05s">
              {t('hero_eyebrow')}
            </span>
            <h1 className="hero-heading wow fadeInUp" data-wow-delay="0.15s">
              {t('hero_heading')}
            </h1>
            <p className="hero-subheading wow fadeInUp" data-wow-delay="0.25s">
              {t('hero_subheading')}
            </p>

            <div className="hero-cta-row wow fadeInUp" data-wow-delay="0.35s">
              <a href="#contact" className="btn hero-btn-primary">
                {t('hero_cta_primary')}
              </a>
              <Link to="/products" className="btn hero-btn-secondary">
                {t('hero_cta_secondary')}
              </Link>
            </div>

            <ul className="hero-badges wow fadeInUp" data-wow-delay="0.45s">
              <li>{t('hero_badge_one')}</li>
              <li>{t('hero_badge_two')}</li>
              <li>{t('hero_badge_three')}</li>
            </ul>
          </div>

          <div className="col-lg-5">
            <div className="hero-catalog-card wow fadeInUp" data-wow-delay="0.3s">
              <span className="hero-catalog-label">{t('hero_categories_label')}</span>
              <div className="hero-catalog-row">
                <span className="hero-catalog-icon"><FaFlask /></span>
                <span>{t('category_fertilizers_title')}</span>
              </div>
              <div className="hero-catalog-row">
                <span className="hero-catalog-icon"><FaSeedling /></span>
                <span>{t('category_seeds_title')}</span>
              </div>
              <div className="hero-catalog-row">
                <span className="hero-catalog-icon"><FaShieldAlt /></span>
                <span>{t('category_pesticides_title')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
