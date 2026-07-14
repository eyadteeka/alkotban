import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaClipboardCheck, FaHeadset } from 'react-icons/fa';

const Quality = () => {
  const { t } = useTranslation();

  const pillars = [
    { Icon: FaSearch, title: 'quality_pillar_one_title', desc: 'quality_pillar_one_desc' },
    { Icon: FaClipboardCheck, title: 'quality_pillar_two_title', desc: 'quality_pillar_two_desc' },
    { Icon: FaHeadset, title: 'quality_pillar_three_title', desc: 'quality_pillar_three_desc' },
  ];

  return (
    <div className="container-xxl py-5 quality-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <p className="section-eyebrow">{t('quality_eyebrow')}</p>
            <h2 className="mb-3">{t('quality_heading')}</h2>
            <p className="quality-intro">{t('quality_intro')}</p>
          </div>
          <div className="col-lg-7">
            <div className="quality-pillars">
              {pillars.map(({ Icon, title, desc }) => (
                <div className="quality-pillar" key={title}>
                  <span className="quality-pillar-icon"><Icon /></span>
                  <div>
                    <h4>{t(title)}</h4>
                    <p>{t(desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
