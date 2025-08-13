export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 px-5 text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="#"
          className="flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full text-xl transition-transform duration-300 hover:bg-white hover:text-green-500 hover:-translate-y-1"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full text-xl transition-transform duration-300 hover:bg-white hover:text-blue-600 hover:-translate-y-1"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-11 h-11 bg-primary text-white rounded-full text-xl transition-transform duration-300 hover:bg-white hover:text-green-500 hover:-translate-y-1"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>

      <p className="mb-2">
        &copy; 2024 Beleza & Estilo. Todos os direitos reservados.
      </p>
      <p>📍 Rua das Flores, 123 - Centro | ☎️ (11) 4444-5555</p>
    </footer>
  );
};
