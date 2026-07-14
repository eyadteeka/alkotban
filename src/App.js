// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import ProductCategories from "./components/ProductCategories";
import SupplyNetwork from "./components/SupplyNetwork";
import Process from "./components/Process";
import Quality from "./components/Quality";
import FinalCta from "./components/FinalCta";
import Reservation from "./components/Reservation";
import Products from "./components/Products";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppWidget from "./components/WhatsAppWidget";
import PartnerSection from "./components/Partners";
import VerticalStepper from "./components/VerticalStepper";

// مكون لمعالجة التمرير إلى الأقسام
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

// الصفحة الرئيسية
function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToHash />
      <section id="home" data-section="home"><Hero /></section>
      <TrustBar />
      <section id="about" data-section="about"><About /></section>
      <section id="products" data-section="products"><ProductCategories /></section>
      <section id="our_values" data-section="our_values"><Services /></section>
      <section id="why_us" data-section="why_us"><VerticalStepper /></section>
      <SupplyNetwork />
      <Process />
      <Quality />
      <section id="partners" data-section="partners"><PartnerSection /></section>
      <FinalCta />
      <section id="contact" data-section="contact"><Reservation /></section>
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </div>
  );
}

// صفحة المنتجات
function ProductsPage() {
  return (
    <div className="App">
      <Navbar style={{ background: "var(--primary) !important"}} />

        <Products />
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* إعادة توجيه الروابط القديمة */}
        <Route path="/#contact" element={<HomePage />} />
        <Route path="/#about" element={<HomePage />} />
        <Route path="/#products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;