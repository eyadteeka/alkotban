import React from "react";
import Counter from "./counter";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

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
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="align-items-center border-start border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-secondary mb-0"
                    data-toggle="counter-up"
                  >
                    <Counter
                      value={23}
                      places={[10, 1]}
                      fontSize={80}
                      padding={5}
                      gap={10}
                      textColor="var(--text-primary)"
                      fontWeight={900}
                      formatNumber={true}
                    />
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">{t("about_experience_label")}</p>
                    <h6 className="text-uppercase mb-0">
                      {t("about_experience_years")}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a> */}
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
