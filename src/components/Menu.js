import React, { useState } from 'react';

const MenuItem = ({ image, name, price, description }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100" style={{ borderRadius: '15px', overflow: 'hidden', border: 'none', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <img
          className="card-img-top img-fluid"
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '15px 15px 0 0'
          }}
        />
        <div className="card-body d-flex flex-column justify-content-center text-center" style={{ padding: '1.5rem' }}>
          <h5 className="card-title mb-0" style={{ fontSize: '1.25rem', fontWeight: '600' }}>{name}</h5>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const menuItems = [
    { image: "img/menu-1.jpg", name: "seeds", price: "0" },
    { image: "img/menu-2.jpg", name: "seeds", price: "0" },
    { image: "img/menu-3.jpg", name: "seeds", price: "0" }
  ];

  // const tabs = [
  //   { id: 'tab-1', icon: 'fa-coffee', smallText: 'Popular', title: 'title' },
  //   { id: 'tab-2', icon: 'fa-hamburger', smallText: 'Special', title: 'title' },
  //   { id: 'tab-3', icon: 'fa-utensils', smallText: 'Lovely', title: 'title' }
  // ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">قائمة المنتجات</h5>
          <h1 className="mb-5"></h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          {/* <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
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
          </ul> */}
          <div className="tab-content">
            {/* {tabs.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''} p-0`}
              > */}
            <div className="row g-4">
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
            {/* </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;