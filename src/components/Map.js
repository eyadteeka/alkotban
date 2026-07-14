import { useTranslation } from 'react-i18next';

const Map = ({
  location = {
    latitude: 32.35195716191494,
    longitude: 15.069529779849985,
    name: "ALKOTBAN Agricultural Materials",
    address: "Misurata, Libya",
  },
  zoom = 16,
  language = "ar",
}) => {
  const { t } = useTranslation();

  const generateMapUrl = () => {
    const { latitude, longitude } = location;
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&center=${latitude},${longitude}&zoom=${zoom}&maptype=satellite&language=${language}`;
  };

  return (
    <div className="map_container">
      <iframe
        src={generateMapUrl()}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Location of ${location.name}`}
      />

      <div className="map_actions mt-2">
        <a
          href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-warning btn-sm"
        >
          {t('open_in_maps')}
        </a>
      </div>
    </div>
  );
};

export default Map;