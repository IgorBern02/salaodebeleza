import "./App.css";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero_section/HeroSection";
import { ServicesSection } from "./components/services_section/ServicesSection"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
    </>
  );
}

export default App;
