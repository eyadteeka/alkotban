import React from 'react';
import { useTranslation } from 'react-i18next';

const PartnerSection = () => {
    const { t } = useTranslation();

    const partnerLogos = [
        "img/Co-logos/ALFAGEN.png",
        "img/Co-logos/HEFE.png",
        "img/Co-logos/HM.png",
        "img/Co-logos/LIMA.png",
        "img/Co-logos/S&w.png",
        "img/Co-logos/TORO.png",
        "img/Co-logos/ZASCO.png",
        "img/Co-logos/COCOLY.png",
    ];

    return (
        <>
            <div className="container-fluid my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '700px' }}>
                        <div className="section-title text-center">
                            <p className="fs-5 fw-medium fst-italic">{t('our_partners')}</p>
                            <h1 className="fw-bold mb-3">{t('trusted_companies')}</h1>
                            <h6 className="fw-normal lh-base">
                                {t('partners_description')}
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center align-items-center gap-1 mt-5">
                        {partnerLogos.map((src, index) => (
                            <div key={index} className="d-flex align-items-center justify-content-center mx-3" style={{ height: 70 }}>
                                <img
                                    src={src}
                                    alt={`Partner ${index + 1}`}
                                    className="img-fluid"
                                    style={{ maxHeight: 100, width: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerSection;