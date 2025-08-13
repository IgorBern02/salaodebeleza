import "boxicons/css/boxicons.min.css";

import { HeroTitle } from "./HeroTitle";
import { HeroText } from "./HeroText";
import { CTAButton } from "./CTAButton";

export const HeroSection = () => {
  return (
    <section
      className="text-center py-[120px] px-[5%] pb-[80px]"
      style={{
        background:
          "linear-gradient(135deg, var(--bg-light) 0%, var(--secondary-color) 100%)",
      }}
      id="home"
    >
      <div className="max-w-[800px] mx-auto">
        <HeroTitle text="Realce Sua Beleza Natural" />
        <HeroText
          text="Transforme seu visual com nossos profissionais especializados. Agende
          agora e sinta-se ainda mais linda!"
        />
        <CTAButton
          text="Agende Seu Horário"
          href="#contact"
          icon="bx-calendar"
        />
      </div>
    </section>
  );
};
