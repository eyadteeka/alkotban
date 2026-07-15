import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCertificate, FaMapMarkedAlt, FaTools, FaShippingFast } from 'react-icons/fa';

const VerticalStepper = () => {
    const { t } = useTranslation();

    const reasons = [
        {
            Icon: FaCertificate,
            titleKey: 'vertical_step_one_title',
            highlightKey: 'vertical_step_one_highlight',
            descKey: 'vertical_step_one_description'
        },
        {
            Icon: FaMapMarkedAlt,
            titleKey: 'vertical_step_two_title',
            highlightKey: 'vertical_step_two_highlight',
            descKey: 'vertical_step_two_description'
        },
        {
            Icon: FaTools,
            titleKey: 'vertical_step_three_title',
            highlightKey: 'vertical_step_three_highlight',
            descKey: 'vertical_step_three_description'
        },
        {
            Icon: FaShippingFast,
            titleKey: 'vertical_step_four_title',
            highlightKey: 'vertical_step_four_highlight',
            descKey: 'vertical_step_four_description'
        }
    ];

    return (
        <section className="rf-why">
            <div className="container">
                <span className="rf-eyebrow wow fadeInUp" data-wow-delay="0.1s">
                    {t('vertical_step_heading')}
                </span>

                <div className="rf-why-grid">
                    {reasons.map(({ Icon, titleKey, highlightKey, descKey }, index) => (
                        <div
                            className="rf-why-item wow fadeInUp"
                            data-wow-delay={`${0.15 + index * 0.1}s`}
                            key={titleKey}
                        >
                            <span className="rf-why-icon">
                                <Icon />
                            </span>
                            <div className="rf-why-copy">
                                <h3 className="rf-why-title">
                                    {t(titleKey)}
                                    <span className="rf-why-tag">{t(highlightKey)}</span>
                                </h3>
                                <p className="rf-why-desc">{t(descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VerticalStepper;
