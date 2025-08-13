import { useState } from "react";
import { NavList } from "./NavList";
import "boxicons/css/boxicons.min.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-black/10 fixed w-full z-10 flex justify-between items-center px-[5%] py-4 max-w-[1200px] mx-auto">
      <a href="#" className="text-[1.8rem] font-bold text-primary no-underline">
        Beleza & Estilo
      </a>
      {/* Menu principal (desktop) */}
      <nav className="hidden md:flex gap-6">
        <NavList href="#home" text="Início" />
        <NavList href="#services" text="Serviços" />
        <NavList href="#testimonials" text="Depoimentos" />
        <NavList href="#contact" text="Contato" />
      </nav>

      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
      </div>

      {/* Menu mobile animado */}
      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-96"
        }`}
      >
        <NavList href="#home" text="Início" />
        <NavList href="#services" text="Serviços" />
        <NavList href="#testimonials" text="Depoimentos" />
        <NavList href="#contact" text="Contato" />
      </nav>
    </header>
  );
};
