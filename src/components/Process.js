import React from 'react';
import { useTranslation } from 'react-i18next';

const STEP_KEYS = [
  { title: 'process_step_one_title', desc: 'process_step_one_desc' },
  { title: 'process_step_two_title', desc: 'process_step_two_desc' },
  { title: 'process_step_three_title', desc: 'process_step_three_desc' },
  { title: 'process_step_four_title', desc: 'process_step_four_desc' },
  { title: 'process_step_five_title', desc: 'process_step_five_desc' },
];

const Process = () => {
  const { t } = useTranslation();

  return (
    <div className="container-xxl py-5 process-section">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-eyebrow">{t('process_eyebrow')}</p>
          <h2 className="section-title ff-secondary text-center text-secondary fw-normal mb-3">
            {t('process_heading')}
          </h2>
        </div>

        <div className="process-track">
          {STEP_KEYS.map((step, index) => (
            <div className="process-step wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={step.title}>
              <span className="process-step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="process-step-title">{t(step.title)}</h3>
              <p className="process-step-desc">{t(step.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
