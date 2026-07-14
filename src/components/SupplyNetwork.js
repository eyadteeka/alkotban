import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SupplyNetwork = () => {
  const { t } = useTranslation();

  const markets = [
    'network_market_china',
    'network_market_spain',
    'network_market_argentina',
    'network_market_saudi',
    'network_market_kuwait',
  ];

  return (
    <div className="container-xxl py-5 network-section">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-eyebrow section-eyebrow-light">{t('network_eyebrow')}</p>
          <h2 className="section-title ff-secondary text-center text-light fw-normal mb-3">
            {t('network_heading')}
          </h2>
          <p className="network-description">{t('network_description')}</p>
        </div>

        <div className="network-diagram wow fadeInUp" data-wow-delay="0.2s">
          <div className="network-markets">
            {markets.map((key) => (
              <div className="network-market-node" key={key}>
                <span className="network-node-dot" />
                <span className="network-node-label">{t(key)}</span>
              </div>
            ))}
          </div>

          <div className="network-hub">
            <FaMapMarkerAlt className="network-hub-icon" />
            <span className="network-hub-label">{t('network_hub_label')}</span>
            <span className="network-hub-caption">{t('network_hub_caption')}</span>
          </div>
        </div>

        <p className="network-footnote text-center">{t('network_footnote')}</p>
      </div>
    </div>
  );
};

export default SupplyNetwork;
