// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppWidget from "./components/WhatsAppWidget";
import PartnerSection from "./components/Partners";
import VerticalStepper from "./components/VerticalStepper";
function App() {
  return (
    // <Router>

    //   <NavigationProvider>
    //     <Routes>

    //     </Routes>
    //   </NavigationProvider>
    // </Router>
    <div className="App">
      
      <Navbar />
      <section id="home" data-section="home"><Hero /></section>
      
      <section id="about" data-section="about"><About /></section>
      <section id="our_values" data-section="our_values"><Services /></section>
      
      <section id="why_us" data-section="why_us"><VerticalStepper /></section>
      
      
      <section id="products" data-section="products"><Team /></section>
      <section id="partners" data-section="partners"><PartnerSection /></section>
      
      <section id="contact" data-section="contact"><Reservation /></section>
      
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
