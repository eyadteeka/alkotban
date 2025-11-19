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
      <Hero />
      <About />
      <Services />
      <VerticalStepper />
      <Team />
      <PartnerSection />
      <Reservation />
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
