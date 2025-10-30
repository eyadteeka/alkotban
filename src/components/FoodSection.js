import React, { useState } from 'react';
import CartIcon from './icons/CartIcon';

const FoodSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const foodItems = [
    { id: 1, name: "Delicious Pizza", category: "pizza", image: "images/f1.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 2, name: "Delicious Burger", category: "burger", image: "images/f2.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 3, name: "Delicious Pizza", category: "pizza", image: "images/f3.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 4, name: "Delicious Pasta", category: "pasta", image: "images/f4.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 5, name: "French Fries", category: "fries", image: "images/f5.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 6, name: "Delicious Pizza", category: "pizza", image: "images/f6.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 7, name: "Tasty Burger", category: "burger", image: "images/f7.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 8, name: "Tasty Burger", category: "burger", image: "images/f8.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" },
    { id: 9, name: "Delicious Pasta", category: "pasta", image: "images/f9.png", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque" }
  ];

  const filters = [
    { key: '*', label: 'All' },
    { key: 'burger', label: 'Burger' },
    { key: 'pizza', label: 'Pizza' },
    { key: 'pasta', label: 'Pasta' },
    { key: 'fries', label: 'Fries' }
  ];

  const filteredItems = activeFilter === '*' 
    ? foodItems 
    : foodItems.filter(item => item.category === activeFilter);

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
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
                      <div className="options">
                        <h6>{item.price}</h6>
                        <a href="">
                          <CartIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="btn-box">
          <a href="">View More</a>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;