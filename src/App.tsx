import "./styles/App.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero_section/HeroSection";
import { ServicesSection } from "./components/services_section/ServicesSection";
import { TestimonialsSection } from "./components/testimonials_section/TestimonialsSection";
import { CTASection } from "./components/CTASection/CTASection";
import { Footer } from "./components/footer/Footer";
import { WhatsAppFloat } from "./components/wpp_float/WhatsAppFloat";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
