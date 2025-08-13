export const CTAButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário no salão."
      target="_blank"
      className="inline-flex items-center gap-4 bg-green-500 text-white px-12 py-5 rounded-full text-lg font-semibold shadow-md mb-12 transition-transform duration-300 ease-in-out hover:bg-teal-700 hover:-translate-y-1 hover:shadow-lg"
    >
      <i className="bx bxl-whatsapp text-2xl"></i>
      <span>Agendar pelo WhatsApp</span>
    </a>
  );
};
