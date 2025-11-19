import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelopeOpenText, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

// const VideoModal = () => {
//   return (
//     <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div className="modal-dialog">
//         <div className="modal-content rounded-0">
//           <div className="modal-header">
//             <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
//             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div className="modal-body">
//             <div className="ratio ratio-16x9">
//               <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowScriptAccess="always"
//                 allow="autoplay"></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Reservation = () => {
  const { t } = useTranslation();

  const contactDetails = [
    {
      Icon: FaEnvelopeOpenText,
      label: t('contact_email_label'),
      value: t('contact_email_value'),
      href: 'mailto:info@greenfield.ly'
    },
    {
      Icon: FaPhoneAlt,
      label: t('contact_phone_label'),
      value: t('contact_phone_value'),
      href: 'tel:+218918889391'
    },
    {
      Icon: FaWhatsapp,
      label: t('contact_whatsapp_label'),
      value: t('contact_whatsapp_value'),
      href: 'https://wa.me/218918889391'
    }
  ];

  return (
    <>
      <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="video">
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('contact_section_title')}</h5>
              <h1 className="text-white mb-4">{t('contact_section_heading')}</h1>
              <p className="text-white-50 mb-4">
                {t('contact_section_description')}
              </p>
              <ul className="contact-details list-unstyled">
                {contactDetails.map(({ Icon, label, value, href }, index) => (
                  <li key={index} className="contact-details-item">
                    <Icon className="contact-details-icon text-primary" />
                    <div>
                      <span className="contact-details-label">{label}</span>
                      <a href={href} target="_blank" rel="noreferrer" className="contact-details-link p-ltr">
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;