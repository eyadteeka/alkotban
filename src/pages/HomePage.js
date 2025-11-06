import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const HomePage = () => {
    return (
        <div className="App">
            {/* Hero Section */}
            <section id="home" data-section="home">
                <div className="hero_area">
                    <Header />
                    <Hero />
                </div>
            </section>

            {/* Menu Section */}
            {/* <section id="menu" data-section="menu">
                <FoodSection />
            </section> */}

            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default HomePage;

