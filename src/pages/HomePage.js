import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const HomePage = () => {
    return (
        <div className="App">
            <Header />
            <main>
                {/* Hero Section */}
                <section id="home" data-section="home" className="hero-section">
                    <Hero />
                </section>
            </main>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default HomePage;

