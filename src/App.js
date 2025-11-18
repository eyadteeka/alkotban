// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
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
      {/* <Spinner /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VerticalStepper />
      <Team />
      {/* <Menu /> */}
      <PartnerSection />
      <Reservation />
      {/* <Testimonials /> */}
      <Footer />
      <BackToTop />
      {/* زر واتساب */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
