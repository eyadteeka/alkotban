import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const VerticalStepper = ({ isRTL = true }) => {
    const { t } = useTranslation();

    const steps = [
        {
            number: 1,
            titleKey: 'vertical_step_one_title',
            highlightKey: 'vertical_step_one_highlight',
            descriptionKey: 'vertical_step_one_description'
        },
        {
            number: 2,
            titleKey: 'vertical_step_two_title',
            highlightKey: 'vertical_step_two_highlight',
            descriptionKey: 'vertical_step_two_description'
        },
        {
            number: 3,
            titleKey: 'vertical_step_three_title',
            highlightKey: 'vertical_step_three_highlight',
            descriptionKey: 'vertical_step_three_description'
        },
        {
            number: 4,
            titleKey: 'vertical_step_four_title',
            highlightKey: 'vertical_step_four_highlight',
            descriptionKey: 'vertical_step_four_description'
        }
    ];

    useEffect(() => {
        // Animation trigger on component mount
        const stepElements = document.querySelectorAll('.vertical-step');

        const timeout = setTimeout(() => {
            stepElements.forEach(step => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            });
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="vertical-stepper-section">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="section-title ff-secondary text-center text-primary fw-normal mb-5">
                    {t('vertical_step_heading')}
                </h2>
            </div>

            <div className="vertical-stepper-container">
                <div className="vertical-stepper-content">
                    <div className="vertical-stepper-line"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="vertical-step">
                            <div className="vertical-step-bullet">
                                {step.number}
                            </div>
                            <div className="vertical-step-content">
                                <h3>
                                    {t(step.titleKey)}
                                    <span className="vertical-feature-highlight">{t(step.highlightKey)}</span>
                                </h3>
                                <p>{t(step.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="vertical-stepper-visual">
                    <img
                        src="/img/hero-bg-2.png"
                        alt={t('vertical_step_image_alt')}
                    />
                </div>
            </div>
        </section>
    );
};

export default VerticalStepper;