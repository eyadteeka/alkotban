import React, { useState } from 'react';

const ClientSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Moana Michell",
      role: "magna aliqua",
      image: "images/client1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      id: 2,
      name: "Mike Hamell",
      role: "magna aliqua",
      image: "images/client2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    }
  ];

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>What Says Our Customers</h2>
        </div>
        <div className="carousel-wrap row">
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`item ${index === activeTestimonial ? 'active' : ''}`}
              >
                <div className="box">
                  <div className="detail-box">
                    <p>{testimonial.text}</p>
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className="img-box">
                    <img src={testimonial.image} alt={testimonial.name} className="box-img" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-controls">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`control-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;