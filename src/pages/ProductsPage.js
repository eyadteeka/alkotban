import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import ProductsSection from '../components/ProductsSection';

const ProductsPage = () => {
    return (
        <div className="App">
            <Header />
            <section id="about" data-section="about">
                <ProductsSection />
            </section>
            <Footer />
            <WhatsAppWidget />
        </div>
    );
};

export default ProductsPage;

