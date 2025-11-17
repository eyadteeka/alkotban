import React from 'react';

const TeamMember = ({ image, name, designation, delay }) => {
  return (
    <div className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid" src={image} alt={name} />
        </div>
        <h5 className="mb-0">{name}</h5>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      image: "img/about-1.png",
      name: "Full Name",
      designation: "Designation",
      delay: "0.1s"
    },
    {
      image: "img/about-1.png",
      name: "Full Name",
      designation: "Designation",
      delay: "0.3s"
    },
    {
      image: "img/about-1.png",
      name: "Full Name",
      designation: "Designation",
      delay: "0.5s"
    },
    {
      image: "img/about-1.png",
      name: "Full Name",
      designation: "Designation",
      delay: "0.7s"
    }
  ];

  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="section-title ff-secondary text-center text-primary fw-normal mb-5">منتجاتنا</h2>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;