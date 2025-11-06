// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </NavigationProvider>
    </Router>
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
