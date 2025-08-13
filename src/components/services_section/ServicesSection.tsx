import "boxicons/css/boxicons.min.css";
import "../../styles/globals.css";
import { ServicesCard } from "./ServicesCard";

export const ServicesSection = () => {
  const services = [
    {
      icon: "bx bx-cut",
      title: "Corte & Estilo",
      description:
        " Cortes modernos e personalizados para realçar sua personalidade. Nossos profissionais estão sempre atualizados com as últimas. tendências.",
    },
    {
      icon: "bx bx-paint",
      title: "Coloração",
      description:
        "Técnicas avançadas de coloração incluindo balayage, ombré hair e mechas. Produtos de alta qualidade que cuidam dos seus fios.",
    },
    {
      icon: "bx bx-spa",
      title: "Tratamentos",
      description:
        "Hidratação profunda, reconstrução capilar e tratamentos especializados para todos os tipos de cabelo.",
    },
    {
      icon: "bx bx-palette",
      title: "Manicure & Pedicure",
      description:
        "Cuidados completos para suas unhas com esmaltação tradicional, gel e nail art. Higiene e qualidade garantidas.",
    },
    {
      icon: "bx bx-happy-heart-eyes",
      title: "Sobrancelhas",
      description:
        " Design de sobrancelhas personalizado, micropigmentação e henna. Realce seu olhar com técnicas profissionais.",
    },
    {
      icon: "bx bx-palette",
      title: "Maquiagem",
      description:
        "Maquiagem profissional para eventos especiais, casamentos e sessões fotográficas. Realce sua beleza natural!",
    },
  ];

  return (
    <section className="py-20 px-[5%] bg-[var(--white)]" id="services">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[2.5rem] mb-12 text-[var(--text-dark)]">
          Nossos Serviços
        </h2>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          <ServicesCard services={services} />
        </div>
      </div>
    </section>
  );
};
