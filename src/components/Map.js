const Map = ({
  location = {
    latitude: 32.35195716191494,
    longitude: 15.069529779849985,
    name: "Ben Wafe Group",
    address: "Misurata, Libya",
  },
  zoom = 16,
  mapType = "satellite", // roadmap, satellite, hybrid, terrain
  language = "ar",
  showControls = true
}) => {

  const generateMapUrl = () => {
    const { latitude, longitude, name } = location;

    const baseParams = {
      q: `${latitude},${longitude}`, // الإحداثيات
      z: zoom, // مستوى التكبير
      maptype: 'satellite', // نوع الخريطة
      hl: language, // اللغة
      output: "embed" // نوع الإخراج
    };

    // إضافة الـ marker
    const markerParams = `&markers=color:red%7Clabel:%7C${latitude},${longitude}`;

    // إضافة عناصر التحكم
    const controlsParams = showControls ? "" : "&iwloc=near";
    console.log(`https://maps.google.com/maps?${new URLSearchParams(baseParams)}${markerParams}${controlsParams}`);
    //return `https://maps.google.com/maps?${new URLSearchParams(baseParams)}${markerParams}${controlsParams}`;
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
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

// قيم افتراضية
// Map.defaultProps = {
//   location: {
//     latitude: 32.4021803,
//     longitude: 15.0610619,
//     name: "Feane Restaurant",
//     address: "Downtown Dubai, UAE"
//   },
//   zoom: 16,
//   mapType: "satellite",
//   language: "ar",
//   showControls: true
// };

export default Map;