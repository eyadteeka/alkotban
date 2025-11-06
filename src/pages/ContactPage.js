import React from 'react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const ContactPage = () => {
    return (
        <div className="App">
            <Header />
            <section id="contact-us" data-section="contact-us">
                <ContactSection />
            </section>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default ContactPage;

