// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import Spinner from './components/Spinner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


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
      <Services />
      <About />
      <Menu />
      <Reservation />
      <Team />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
// import Header from './components/Header';
// import Hero from './components/Hero';
// import OfferSection from './components/OfferSection';
// import FoodSection from './components/FoodSection';
// import AboutSection from './components/AboutSection';
// import BookSection from './components/BookSection';
// import ClientSection from './components/ClientSection';
// import Footer from './components/Footer';
// function App() {
//   return (
//     <div className="App">
//       <div className="hero_area">
//         <div className="bg-box">
//           <img src="images/hero-bg.jpg" alt="Background" />
//         </div>
//         <Header />
//         <Hero />
//       </div>
      
//       <OfferSection />
//       <FoodSection />
//       <AboutSection />
//       <BookSection />
//       <ClientSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;
