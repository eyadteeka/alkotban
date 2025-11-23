import { useTranslation } from "react-i18next";
import React, { useState } from "react";
const ProductMember = ({ image, name, designation, delay }) => {
  return (
    <div className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src={image} alt={name} />
        </div>
        <h5 className="mb-0">{name}</h5>
        {designation && <p className="text-muted mb-4">{designation}</p>}
      </div>
    </div>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("*");
  const teamMembers = [
    {
      image: "img/about-1.png",
      nameKey: "team_member_one_name",
      designationKey: "team_member_one_role",
      delay: "0.1s",
    },
    {
      image: "img/about-1.png",
      nameKey: "team_member_two_name",
      designationKey: "team_member_two_role",
      delay: "0.3s",
    },
    {
      image: "img/about-1.png",
      nameKey: "team_member_three_name",
      designationKey: "team_member_three_role",
      delay: "0.5s",
    },
    {
      image: "img/about-1.png",
      nameKey: "team_member_four_name",
      designationKey: "team_member_four_role",
      delay: "0.7s",
    },
  ];
  const filters = [
    { key: "*", label: "الكل" },
    { key: "Skate shoes", label: "تزلج" },
    { key: "bikes", label: "دراجات" },
    { key: "bicycle", label: "دراجات هوائية" },
    { key: "scooter", label: "سكوترات" },
    { key: "indoor", label: "ألعاب داخلية" },
    { key: "outdoor", label: "ألعاب خارجية" },
  ];
  return (
    <div className="container-xxl pt-5 pb-3" style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="section-title ff-secondary text-center text-secondary fw-normal mb-5">
            {t("team_section_title")}
          </h2>
        </div>
        <ul className="filters_menu">
          {filters.map((filter) => (
            <li
              key={filter.key}
              className={activeFilter === filter.key ? "active" : ""}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </li>
          ))}
        </ul>
        <div className="filters-content">
        <div className="row grid">
          {teamMembers.map((member, index) => (
            <ProductMember
              key={index}
              image={member.image}
              name={t(member.nameKey)}
              designation={t(member.designationKey)}
              delay={member.delay}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
