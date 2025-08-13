import "./App.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero_section/HeroSection";
import { ServicesSection } from "./components/services_section/ServicesSection";
import { TestimonialsSection } from "./components/testimonials_section/TestimonialsSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </>
  );
}

export default App;
