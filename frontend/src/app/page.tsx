import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about" className="section-padding bg-gray-50">
        <AboutSection />
      </section>
      
      <section id="services" className="section-padding">
        <ServicesSection />
      </section>
      
      <section id="contact" className="section-padding bg-gray-50">
        <ContactSection />
      </section>
    </>
  );
}