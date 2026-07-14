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
    <div className="about-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-secondary fw-normal">
              {t("about_section_title")}
            </h5>
            <h1 className="mb-4">{t("about_heading")}</h1>
            <p className="mb-4" style={{lineHeight: '30px'}}>{t("about_paragraph_one")}</p>
            <p className="mb-4"  style={{lineHeight: '30px'}}>{t("about_paragraph_two")}</p>

            <blockquote className="about-quote">
              {t("about_quote")}
            </blockquote>

            <div className="about-facts">
              {facts.map((fact) => (
                <div className="about-fact-item" key={fact.label}>
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="img/about-1.png"
                  alt="About 1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="img/about-2.png"
                  alt="About 2"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="img/about-3.png"
                  alt="About 3"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="img/about-4.png"
                  alt="About 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
