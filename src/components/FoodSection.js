import React, { useState } from 'react';

const FoodSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');

const products = [
  { id: 1, name: "سكوتر درفت بثلاث عجلات", category: "scooter", image: "images/f9.png", description: "سكوتر كهربائي بثلاث عجلات يتيح الانعطاف بزاوية 360 درجة. مزود بإضاءة LED ومقعد للقيادة." },
  { id: 2, name: "سكوتر كهربائي قابل للطي", category: "scooter", image: "images/f2.png", description: "سكوتر كهربائي للتنقل الحضري. يتميز بهيكل قابل للطي لسهولة التخزين والنقل." },
  { id: 3, name: "دراجة رباعية (باغي) للطرق الوعرة", category: "bikes", image: "images/f6.png", description: "دراجة رباعية مصممة للقيادة على التضاريس الصعبة." },
  { id: 4, name: "حذاء تزلج (رولر بليدز)", category: "Skate shoes", image: "images/f1.png", description: "حذاء تزلج مزود بأربع عجلات متتالية. يوفر دعمًا للكاحل ومصمم للحركة على الأسطح الملساء." },
  { id: 5, name: "هوڤربورد بتوازن ذاتي", category: "scooter", image: "images/f3.png", description: "لوح تزلج كهربائي يعتمد على تقنية التوازن الذاتي للحركة. مناسب للتنقل على المسافات القصيرة." },
  { id: 6, name: "طاولة كرة قدم (بيبي فوت)", category: "indoor", image: "images/f5.png", description: "طاولة لعب ترفيهية للاستخدام الداخلي. مصممة للعب الجماعي وتأتي بتصميم فريقين." },
  { id: 7, name: "ترامبولين مع شبكة حماية", category: "outdoor", image: "images/f4.png", description: "ترامبولين للقفز مخصص للاستخدام الخارجي. محاط بشبكة أمان لمنع السقوط أثناء اللعب." },
  { id: 8, name: "أرجوحة أطفال مزدوجة", category: "outdoor", image: "images/f8.png", description: "أرجوحة خارجية للأطفال بمقاعد مختلفة، بما في ذلك مقعد مزدوج. مناسبة لمناطق اللعب المخصصة." },
  { id: 9, name: "مجموعة أراجيح خارجية", category: "outdoor", image: "images/f7.png", description: "ألعاب للحدائق تحتوي على عدة أراجيح متنوعة. هيكل معدني ثابت ومناسب للاستخدام العائلي." }
];

  const filters = [
    { key: '*', label: 'الكل' },
    { key: 'Skate shoes', label: 'تزلج' },
    { key: 'bikes', label: 'مركبات' },
    { key: 'scooter', label: 'سكوترات' },
    { key: 'indoor', label: 'ألعاب داخلية' },
    { key: 'outdoor', label: 'ألعاب خارجية' }
  ];

  const filteredItems = activeFilter === '*' 
    ? products 
    : products.filter(item => item.category === activeFilter);

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center pt-5">
          <h2>أبرز منتجاتنا</h2>
        </div>

        <ul className="filters_menu">
          {filters.map(filter => (
            <li 
              key={filter.key}
              className={activeFilter === filter.key ? 'active' : ''}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        <div className="filters-content">
          <div className="row grid">
            {filteredItems.map(item => (
              <div key={item.id} className={`col-sm-6 col-lg-4 all ${item.category}`}>
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="detail-box">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      {/* <div className="options">
                        <h6>{item.price}</h6>
                        <a href="">
                          <CartIcon />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* <div className="btn-box">
          <a href="">View More</a>
        </div> */}
      </div>
    </section>
  );
};

export default FoodSection;