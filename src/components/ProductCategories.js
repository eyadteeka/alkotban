import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFlask, FaSeedling, FaShieldAlt, FaLeaf, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductCategories = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const ArrowIcon = isRTL ? FaArrowLeft : FaArrowRight;

  const categories = [
    {
      key: 'fertilizers',
      Icon: FaFlask,
      titleKey: 'category_fertilizers_title',
      descKey: 'category_fertilizers_desc',
      to: '/products?filter=fertilizers',
      size: 'lg-7',
      tone: 'primary',
    },
    {
      key: 'seeds',
      Icon: FaSeedling,
      titleKey: 'category_seeds_title',
      descKey: 'category_seeds_desc',
      to: '/products?filter=seeds',
      size: 'lg-5',
      tone: 'gold',
    },
    {
      key: 'pesticides',
      Icon: FaShieldAlt,
      titleKey: 'category_pesticides_title',
      descKey: 'category_pesticides_desc',
      to: '/products?filter=materials',
      size: 'lg-5',
      tone: 'gold',
    },
    {
      key: 'supplies',
      Icon: FaLeaf,
      titleKey: 'category_supplies_title',
      descKey: 'category_supplies_desc',
      to: '/products',
      size: 'lg-7',
      tone: 'primary',
    },
  ];

  return (
    <div className="container-xxl py-5 categories-section">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-eyebrow">{t('categories_eyebrow')}</p>
          <h2 className="section-title ff-secondary text-center text-secondary fw-normal mb-3">
            {t('categories_heading')}
          </h2>
          <p className="categories-description">{t('categories_description')}</p>
        </div>

        <div className="row g-4 mt-3">
          {categories.map((cat, index) => (
            <div className={`col-md-6 col-${cat.size} wow fadeInUp`} data-wow-delay={`${0.1 * (index + 1)}s`} key={cat.key}>
              <Link to={cat.to} className={`category-card tone-${cat.tone}`}>
                <span className="category-card-icon">
                  <cat.Icon />
                </span>
                <h3 className="category-card-title">{t(cat.titleKey)}</h3>
                <p className="category-card-desc">{t(cat.descKey)}</p>
                <span className="category-card-cta">
                  {t('category_cta')} <ArrowIcon />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
