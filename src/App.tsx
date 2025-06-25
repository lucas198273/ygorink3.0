import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './pages/About';
import SocialMediaSection from './components/SocialMediaSection/SocialMediaSection';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import ArtistaPreview from './components/ArtistaPreview/ArtistaPreview'
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // <-- importante importar o CSS
import Disponiveis from './components/Disponiveis/Disponiveis';
import ScrollTop from './components/ScrollTop/ScrollTop';
import ServiceSection from './components/ServiceSection/ServiceSection';
import AboutCp from './components/AboutCp/AboutCp';
export default function App() {
    useEffect(() => {
    AOS.init({
      once: true, // anima apenas uma vez
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <Router>
      <ScrollTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20 min-h-screen flex flex-col">
              <Hero />
              <ArtistaPreview />
              <ServiceSection />
              <Disponiveis />
              <AboutCp />

             
              <SocialMediaSection />
            </main>
          }
        />
        <Route path="/about" element={<About />} />


      </Routes>
      <Footer />
    </Router>
  );
}
