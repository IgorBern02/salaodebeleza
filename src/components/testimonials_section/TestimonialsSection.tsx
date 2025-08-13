import { TestimonialsSectionCard } from "./TestimonialsSectionCard";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[var(--bg-light)]" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">
          O Que Nossas Clientes Dizem
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialsSectionCard
            text='"Simplesmente incrível! A equipe é super atenciosa e o resultado do meu cabelo ficou perfeito. Recomendo de olhos fechados!"'
            author="- Maria Silva"
          />
          <TestimonialsSectionCard
            text='"Ambiente acolhedor e profissionais ex
            ,0tremamente capacitados. Sempre saio de lá me sentindo renovada e linda!"'
            author="- Ana Santos"
          />
          <TestimonialsSectionCard
            text='"O melhor salão da região! Preços justos e qualidade excepcional. Sou cliente fiel há mais de 3 anos."'
            author="- Juliana Costa"
          />
        </div>
      </div>
    </section>
  );
};
