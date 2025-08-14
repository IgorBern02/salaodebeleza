import { CTAButton } from "./CTAButton";
import { ContactInfo } from "./ContactInfo";

export const CTASection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-5 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Agende Seu Horário Agora</h2>
        <p className="text-lg text-gray-500 mb-12">
          Clique no botão abaixo e fale diretamente conosco pelo WhatsApp
        </p>
        <div className="flex flex-col items-center justify-center gap-6">
          <CTAButton />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};
