import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelopeOpenText, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Map from './Map';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s-]{7,20}$/;

const INITIAL_FORM = {
  name: '',
  company: '',
  country: '',
  phone: '',
  email: '',
  requestType: '',
  category: '',
  message: '',
};

const Reservation = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | success

  const contactDetails = [
    {
      Icon: FaEnvelopeOpenText,
      label: t('contact_email_label'),
      value: t('contact_email_value'),
      href: 'mailto:info@alkotban.ly'
    },
    {
      Icon: FaPhoneAlt,
      label: t('contact_phone_label'),
      value: <bdo dir="ltr">+218 91-336-4768</bdo>,
      href: 'tel:+218913364768'
    },
    {
      Icon: FaWhatsapp,
      label: t('contact_whatsapp_label'),
      value: <bdo dir="ltr">+218 91-336-4768</bdo>,
      href: 'https://wa.me/218913364768'
    }
  ];

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t('form_error_required');
    if (!form.company.trim()) nextErrors.company = t('form_error_required');
    if (!form.phone.trim()) {
      nextErrors.phone = t('form_error_required');
    } else if (!PHONE_PATTERN.test(form.phone.trim())) {
      nextErrors.phone = t('form_error_phone');
    }
    if (!form.email.trim()) {
      nextErrors.email = t('form_error_required');
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = t('form_error_email');
    }
    if (!form.requestType) nextErrors.requestType = t('form_error_required');
    if (!form.message.trim()) nextErrors.message = t('form_error_required');
    return nextErrors;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `*${form.requestType}*`,
      `${t('form_name_label')}: ${form.name}`,
      `${t('form_company_label')}: ${form.company}`,
    ];
    if (form.country) lines.push(`${t('form_country_label')}: ${form.country}`);
    lines.push(`${t('form_phone_label')}: ${form.phone}`);
    lines.push(`${t('form_email_label')}: ${form.email}`);
    if (form.category) lines.push(`${t('form_category_label')}: ${form.category}`);
    lines.push('');
    lines.push(form.message);
    return lines.join('\n');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    const message = buildWhatsAppMessage();
    const url = `https://wa.me/218913364768?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('success');
  };

  return (
    <div className="rf-contact">
      <div className="container">
        <div className="rf-contact-header wow fadeInUp" data-wow-delay="0.1s">
          <span className="rf-eyebrow">{t('contact_section_title')}</span>
          <h2 className="rf-heading">{t('contact_section_heading')}</h2>
          <p className="rf-contact-description">{t('contact_section_description')}</p>
        </div>

        <div className="row g-4 g-lg-5 mt-2">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.15s">
            <div className="rf-contact-panel">
              <ul className="rf-contact-list">
                {contactDetails.map(({ Icon, label, value, href }, index) => (
                  <li key={index} className="rf-contact-row">
                    <span className="rf-contact-icon">
                      <Icon />
                    </span>
                    <div>
                      <span className="rf-contact-label">{label}</span>
                      <a href={href} target="_blank" rel="noreferrer" className="rf-contact-value p-ltr">
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="rf-contact-map">
                <Map />
              </div>
            </div>
          </div>

          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.25s">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="cf-name" className="form-label">{t('form_name_label')}</label>
                  <input
                    id="cf-name"
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder={t('form_name_placeholder')}
                    value={form.name}
                    onChange={handleChange('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'cf-name-error' : undefined}
                  />
                  {errors.name && <div id="cf-name-error" className="form-error">{errors.name}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="cf-company" className="form-label">{t('form_company_label')}</label>
                  <input
                    id="cf-company"
                    type="text"
                    className={`form-control ${errors.company ? 'is-invalid' : ''}`}
                    placeholder={t('form_company_placeholder')}
                    value={form.company}
                    onChange={handleChange('company')}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'cf-company-error' : undefined}
                  />
                  {errors.company && <div id="cf-company-error" className="form-error">{errors.company}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="cf-country" className="form-label">{t('form_country_label')}</label>
                  <input
                    id="cf-country"
                    type="text"
                    className="form-control"
                    placeholder={t('form_country_placeholder')}
                    value={form.country}
                    onChange={handleChange('country')}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="cf-phone" className="form-label">{t('form_phone_label')}</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder={t('form_phone_placeholder')}
                    value={form.phone}
                    onChange={handleChange('phone')}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'cf-phone-error' : undefined}
                  />
                  {errors.phone && <div id="cf-phone-error" className="form-error">{errors.phone}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="cf-email" className="form-label">{t('form_email_label')}</label>
                  <input
                    id="cf-email"
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder={t('form_email_placeholder')}
                    value={form.email}
                    onChange={handleChange('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'cf-email-error' : undefined}
                  />
                  {errors.email && <div id="cf-email-error" className="form-error">{errors.email}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="cf-request-type" className="form-label">{t('form_request_type_label')}</label>
                  <select
                    id="cf-request-type"
                    className={`form-select ${errors.requestType ? 'is-invalid' : ''}`}
                    value={form.requestType}
                    onChange={handleChange('requestType')}
                    aria-invalid={!!errors.requestType}
                    aria-describedby={errors.requestType ? 'cf-request-type-error' : undefined}
                  >
                    <option value="">{t('form_request_type_placeholder')}</option>
                    <option value={t('form_request_quote')}>{t('form_request_quote')}</option>
                    <option value={t('form_request_inquiry')}>{t('form_request_inquiry')}</option>
                    <option value={t('form_request_catalog')}>{t('form_request_catalog')}</option>
                    <option value={t('form_request_partnership')}>{t('form_request_partnership')}</option>
                    <option value={t('form_request_other')}>{t('form_request_other')}</option>
                  </select>
                  {errors.requestType && <div id="cf-request-type-error" className="form-error">{errors.requestType}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="cf-category" className="form-label">{t('form_category_label')}</label>
                  <select
                    id="cf-category"
                    className="form-select"
                    value={form.category}
                    onChange={handleChange('category')}
                  >
                    <option value="">{t('form_category_placeholder')}</option>
                    <option value={t('form_category_fertilizers')}>{t('form_category_fertilizers')}</option>
                    <option value={t('form_category_seeds')}>{t('form_category_seeds')}</option>
                    <option value={t('form_category_pesticides')}>{t('form_category_pesticides')}</option>
                    <option value={t('form_category_supplies')}>{t('form_category_supplies')}</option>
                    <option value={t('form_category_other')}>{t('form_category_other')}</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="cf-message" className="form-label">{t('form_message_label')}</label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    placeholder={t('form_message_placeholder')}
                    value={form.message}
                    onChange={handleChange('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'cf-message-error' : undefined}
                  />
                  {errors.message && <div id="cf-message-error" className="form-error">{errors.message}</div>}
                </div>
              </div>

              <button type="submit" className="btn contact-submit-btn mt-4">
                {t('form_submit')}
              </button>

              <p className="form-helper" aria-live="polite">
                {status === 'success' ? t('form_submit_success') : t('form_submit_helper')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
