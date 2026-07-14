import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const ProductMember = ({ image, name, designation }) => {
  return (
    <div className={`col-lg-3 col-md-4 wow mb-4`}>
      <div className="team-item text-center rounded overflow-hidden">
        <div className="overflow-hidden m-4">
          <img className="img-fluid" src={image} alt={name} />
        </div>
        <h5 className="mb-4">{name}</h5>
        {designation && <p className="text-muted mb-4 p-3">{designation}</p>}
      </div>
    </div>
  );
};

const VALID_FILTERS = ["fertilizers", "seeds", "materials"];

const Products = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const requestedFilter = searchParams.get("filter");
  const initialFilter = VALID_FILTERS.includes(requestedFilter) ? requestedFilter : "*";
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const Products = [
{
  id: 6,
  image: "img/Products/p6.webp",
  nameKey: "product_vegetable_seeds_clause",
  designationKey: "product_vegetable_seeds_clause_desc",
  category: "seeds",
},
{
  id: 7,
  image: "img/Products/p7.webp",
  nameKey: "product_alfalfa_seeds_sw",
  designationKey: "product_alfalfa_seeds_sw_desc",
  category: "seeds",
},
{
  id: 8,
  image: "img/Products/p8.webp",
  nameKey: "product_alfalfa_three_cows",
  designationKey: "product_alfalfa_three_cows_desc",
  category: "seeds",
},
{
  id: 9,
  image: "img/Products/p9.webp",
  nameKey: "product_zaszko_dutch_seeds",
  designationKey: "product_zaszko_dutch_seeds_desc",
  category: "seeds",
},
{
  id: 1,
  image: "img/Products/pp1.webp",
  nameKey: "product_carbini_tomato",
  designationKey: "product_carbini_tomato_desc",
  category: "materials",
},
{
  id: 2,
  image: "img/Products/p2.webp",
  nameKey: "product_senator_extra",
  designationKey: "product_senator_extra_desc",
  category: "materials",
},
{
  id: 3,
  image: "img/Products/p3.webp",
  nameKey: "product_solution_pesticide",
  designationKey: "product_solution_pesticide_desc",
  category: "materials",
},
{
  id: 4,
  image: "img/Products/p4.webp",
  nameKey: "product_admiral_extra",
  designationKey: "product_admiral_extra_desc",
  category: "materials",
},
{
  id: 5,
  image: "img/Products/p5.webp",
  nameKey: "product_five_multi",
  designationKey: "product_five_multi_desc",
  category: "materials",
},
{
  id: 10,
  image: "img/Products/p10.webp",
  nameKey: "product_torofort_gel",
  designationKey: "product_torofort_gel_desc",
  category: "fertilizers",
},
{
  id: 11,
  image: "img/Products/p11.webp",
  nameKey: "product_grogreen_belgian",
  designationKey: "product_grogreen_belgian_desc",
  category: "fertilizers",
},
{
  id: 12,
  image: "img/Products/p12.webp",
  nameKey: "product_cocoly",
  designationKey: "product_cocoly_desc",
  category: "fertilizers",
},
{
  id: 13,
  image: "img/Products/p13.webp",
  nameKey: "product_organic_birds",
  designationKey: "product_organic_birds_desc",
  category: "fertilizers",
}
  ];
const filters = [
  { key: "*", label: "filter_all" },
  { key: "fertilizers", label: "filter_fertilizers" },
  { key: "seeds", label: "filter_seeds" },
  { key: "materials", label: "filter_materials" },
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
    {t(filter.label)}
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
