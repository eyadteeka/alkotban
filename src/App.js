
import Header from './components/Header';
import Hero from './components/Hero';
import OfferSection from './components/OfferSection';
import FoodSection from './components/FoodSection';
import AboutSection from './components/AboutSection';
import BookSection from './components/BookSection';
import ClientSection from './components/ClientSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="hero_area">
        <div className="bg-box">
          <img src="images/hero-bg.jpg" alt="Background" />
        </div>
        <Header />
        <Hero />
      </div>
      
      <OfferSection />
      <FoodSection />
      <AboutSection />
      <BookSection />
      <ClientSection />
      <Footer />
    </div>
  );
}

export default App;
