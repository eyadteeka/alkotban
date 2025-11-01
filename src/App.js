// App.js
import React from 'react';
import { NavigationProvider } from './context/NavigationContext';
import { useActiveSection } from './hooks/useActiveSection';
import Header from './components/Header';
import Hero from './components/Hero';
import FoodSection from './components/FoodSection';
import AboutSection from './components/AboutSection';
import BookSection from './components/BookSection';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import './App.css';

// مكون مجمع لتفعيل تتبع الأقسام
const AppContent = () => {
  useActiveSection(); // تفعيل تتبع القسم النشط

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="home" data-section="home">
        <div className="hero_area">
          <div className="bg-box">
            <img src="images/hero-bg.jpg" alt="Background" />
          </div>
          <Header />
          <Hero />
        </div>
      </section>
      
      {/* Menu Section */}
      <section id="menu" data-section="menu">
        <FoodSection />
      </section>
      
      {/* About Section */}
      <section id="about" data-section="about">
        <AboutSection />
      </section>
      
      {/* Booking Section */}
      <section id="book" data-section="book">
        <BookSection />
      </section>
      {/* Contact Section */}
      <section id="contact" data-section="contact">
        <Footer />
      </section>

      {/* زر واتساب */}
      <WhatsAppWidget />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
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
