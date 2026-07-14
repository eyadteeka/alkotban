import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobeAmericas, FaCheckCircle, FaHistory, FaTruck, FaHandshake } from 'react-icons/fa';

const TrustBar = () => {
  const { t } = useTranslation();

  const items = [
    { Icon: FaGlobeAmericas, key: 'trust_bar_one' },
    { Icon: FaCheckCircle, key: 'trust_bar_two' },
    { Icon: FaHistory, key: 'trust_bar_three' },
    { Icon: FaTruck, key: 'trust_bar_four' },
    { Icon: FaHandshake, key: 'trust_bar_five' },
  ];

  return (
    <div className="trust-bar">
      <div className="container">
        <ul className="trust-bar-list">
          {items.map(({ Icon, key }) => (
            <li key={key}>
              <Icon className="trust-bar-icon" />
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrustBar;
