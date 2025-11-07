import React, { useState } from "react";
import Map from "./Map";
const BookSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build an email using mailto: so the user's email client sends the review to the target address.
    const to = "maisoontoys@gmail.com";
    const subject = `مراجعة جديدة من ${formData.name || 'زائر'}`;
    const bodyLines = [
      `الاسم: ${formData.name}`,
      `رقم الهاتف: ${formData.phone}`,
      `البريد الإلكتروني: ${formData.email}`,
      `ملاحظات: ${formData.notes}`,
    ];
    const body = bodyLines.join('\r\n');
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's mail client with prefilled email. Note: this requires a local email client or mailto handling in browser.
    window.location.href = mailto;

    // Optionally clear the form and show a quick confirmation
    setFormData({ name: "", phone: "", email: "", notes: "" });
    setSent(true);
  };

  const [sent, setSent] = useState(false);

  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>تواصل معنا</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="الإسم"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="رقم الهاتف"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="البريد الإلكتروني"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="ملاحظات "
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="btn_box">
                  <button type="submit">إرسال</button>
                  {/* sned the message to the email or whatsapp */}
                </div>
              </form>
              {sent && (
                <p className="text-success" style={{ marginTop: '12px' }}>
                  تم فتح تطبيق البريد الإلكتروني، أكمل الإرسال لإرسال المراجعة.
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <Map
                location={{
                  latitude: 32.35195716191494,
                  longitude: 15.069529779849985,
                  name: "Ben Wafe Group",
                  address: "Misurata, Libya",
                }}
                zoom={16}
                mapType={"satellite"} // roadmap, satellite, hybrid, terrain
                language={"ar"}
                showControls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="book_section layout_padding">
    //   <div className="container">
    //     <div className="heading_container">
    //       <h2>Book A Table</h2>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="form_container">
    //           <form onSubmit={handleSubmit}>
    //             <div>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Your Name"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </div>
    //             <div>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Phone Number"
    //                 name="phone"
    //                 value={formData.phone}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </div>
    //             <div>
    //               <input
    //                 type="email"
    //                 className="form-control"
    //                 placeholder="Your Email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </div>
    //             <div>
    //               <select
    //                 className="form-control nice-select wide"
    //                 name="persons"
    //                 value={formData.persons}
    //                 onChange={handleChange}
    //                 required
    //               >
    //                 <option value="" disabled>How many persons?</option>
    //                 <option value="2">2</option>
    //                 <option value="3">3</option>
    //                 <option value="4">4</option>
    //                 <option value="5">5</option>
    //               </select>
    //             </div>
    //             <div>
    //               <input
    //                 type="date"
    //                 className="form-control"
    //                 name="date"
    //                 value={formData.date}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </div>
    //             <div className="btn_box">
    //               <button type="submit">Book Now</button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="map_container">
    //           <div id="googleMap"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default BookSection;
