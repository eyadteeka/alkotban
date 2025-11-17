import React, { useState } from 'react';

const MenuItem = ({ image, name, price, description }) => {
  return (
    <div className="col-lg-6">
      <div className="d-flex align-items-center">
        <img className="flex-shrink-0 img-fluid rounded" src={image} alt={name} style={{width: '80px'}} />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{name}</span>
            <span className="text-primary">${price}</span>
          </h5>
          <small className="fst-italic">{description}</small>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const menuItems = [
    { image: "img/menu-1.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-2.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-3.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-4.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-5.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-6.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-7.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" },
    { image: "img/menu-8.jpg", name: "Chicken Burger", price: "115", description: "Ipsum ipsum clita erat amet dolor justo diam" }
  ];

  const tabs = [
    { id: 'tab-1', icon: 'fa-coffee', smallText: 'Popular', title: 'Breakfast' },
    { id: 'tab-2', icon: 'fa-hamburger', smallText: 'Special', title: 'Launch' },
    { id: 'tab-3', icon: 'fa-utensils', smallText: 'Lovely', title: 'Dinner' }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`d-flex align-items-center text-start mx-3 ${tab.id === 'tab-1' ? 'ms-0' : ''} ${tab.id === 'tab-3' ? 'me-0' : ''} pb-3 ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className={`fa fa-2x ${tab.icon} text-primary`}></i>
                  <div className="ps-3">
                    <small className="text-body">{tab.smallText}</small>
                    <h6 className="mt-n1 mb-0">{tab.title}</h6>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''} p-0`}
              >
                <div className="row g-4">
                  {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;