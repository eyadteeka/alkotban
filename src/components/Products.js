import { useTranslation } from "react-i18next";
import { useState } from "react";
const ProductMember = ({ image, name, designation }) => {
  return (
    <div className={`col-lg-3 col-md-6 wow`}>
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

  const Products = [
    {
      id: 1,
      image: "img/Products/p1.jpg",
      nameKey: "team_member_one_name",
      designationKey: "team_member_one_role",
      category: "fertilizers",
    },
    {
      id: 2,
      image: "img/Products/p2.jpg",
      nameKey: "team_member_two_name",
      designationKey: "team_member_two_role",
      category: "seeds",
    },
    {
      id: 3,
      image: "img/Products/p3.jpg",
      nameKey: "team_member_three_name",
      designationKey: "team_member_three_role",
      category: "seeds",
    },
    {
      id: 4,
      image: "img/Products/p4.jpg",
      nameKey: "team_member_four_name",
      designationKey: "team_member_four_role",
      category: "materials",
    },
    {
      id: 5,
      image: "img/Products/p5.jpg",
      nameKey: "team_member_four_name",
      designationKey: "team_member_four_role",
      category: "materials",
    },
    {
      id: 6,
      image: "img/Products/p6.jpg",
      nameKey: "team_member_four_name",
      designationKey: "team_member_four_role",
      category: "materials",
    },
    {
      id: 7,
      image: "img/Products/p7.jpg",
      nameKey: "team_member_four_name",
      designationKey: "team_member_four_role",
      category: "materials",
    },
  ];
  const filters = [
    { key: "*", label: "الكل" },
    { key: "fertilizers", label: "أسمدة" },
    { key: "seeds", label: "بذور" },
    { key: "materials", label: "مبيدات و مستلزمات زراعية" },
  ];

    const filteredItems =
    activeFilter === "*"
      ? Products
      : Products.filter((item) => item.category === activeFilter);

  return (
    <div className="container-xxl pt-5 pb-3" style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="text-center wow">
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
          {filteredItems.map((item) => (
            <ProductMember
              key={item.id}
              image={item.image}
              name={t(item.nameKey)}
              designation={t(item.designationKey)}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
