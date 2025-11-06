import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const AboutPage = () => {
    return (
        <div className="App">
            <Header />
            <section id="about" data-section="about">
                <AboutSection />
            </section>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default AboutPage;

