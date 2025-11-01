import React from 'react';
import CartIcon from './icons/CartIcon';

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      image: "images/o1.jpg",
      title: "Tasty Thursdays",
      discount: "20%",
      description: "Off"
    },
    {
      id: 2,
      image: "images/o2.jpg",
      title: "Pizza Days",
      discount: "15%",
      description: "Off"
    }
  ];

  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <div className="row">
            {offers.map(offer => (
              <div key={offer.id} className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={offer.image} alt={offer.title} />
                  </div>
                  <div className="detail-box">
                    <h5>{offer.title}</h5>
                    <h6>
                      <span>{offer.discount}</span> {offer.description}
                    </h6>
                    <a href="/">
                      طلب الأن <CartIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;