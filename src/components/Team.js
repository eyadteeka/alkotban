import React from 'react';
import { useTranslation } from 'react-i18next';

const TeamMember = ({ image, name, designation, delay }) => {
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

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      image: "img/about-1.png",
      nameKey: "team_member_one_name",
      designationKey: "team_member_one_role",
      delay: "0.1s"
    },
    {
      image: "img/about-1.png",
      nameKey: "team_member_two_name",
      designationKey: "team_member_two_role",
      delay: "0.3s"
    },
    {
      image: "img/about-1.png",
      nameKey: "team_member_three_name",
      designationKey: "team_member_three_role",
      delay: "0.5s"
    },
    {
      image: "img/about-1.png",
      nameKey: "team_member_four_name",
      designationKey: "team_member_four_role",
      delay: "0.7s"
    }
  ];

  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="section-title ff-secondary text-center text-secondary fw-normal mb-5">
            {t('team_section_title')}
          </h2>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <TeamMember
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
  );
};

export default Team;