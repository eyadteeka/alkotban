import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const facts = [
    { label: t("about_fact_location_label"), value: t("about_fact_location_value") },
    { label: t("about_fact_founded_label"), value: t("about_fact_founded_value") },
    { label: t("about_fact_activity_label"), value: t("about_fact_activity_value") },
  ];

  return (
    <section className="rf-about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="rf-eyebrow wow fadeInUp" data-wow-delay="0.1s">
              {t("about_section_title")}
            </span>
            <h2 className="rf-heading wow fadeInUp" data-wow-delay="0.15s">
              {t("about_heading")}
            </h2>
            <p className="rf-body wow fadeInUp" data-wow-delay="0.2s">
              {t("about_paragraph_one")}
            </p>
            <p className="rf-body wow fadeInUp" data-wow-delay="0.25s">
              {t("about_paragraph_two")}
            </p>

            <div className="rf-quote wow fadeInUp" data-wow-delay="0.3s">
              <span className="rf-quote-mark" aria-hidden="true">“</span>
              <p>{t("about_quote")}</p>
            </div>

            <a href="#why_us" className="rf-text-link wow fadeInUp" data-wow-delay="0.35s">
              {t("about_cta")}
            </a>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="rf-about-visual">
              <div className="rf-about-frame wow zoomIn" data-wow-delay="0.15s">
                <img
                  className="rf-about-img"
                  src="img/about-1.png"
                  alt={t("about_image_alt")}
                  loading="lazy"
                />
              </div>
              <div className="rf-fact-card wow fadeInUp" data-wow-delay="0.4s">
                {facts.map((fact) => (
                  <div className="rf-fact-row" key={fact.label}>
                    <span className="rf-fact-label">{fact.label}</span>
                    <span className="rf-fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
