import { useState } from "react";
import { NavList } from "./NavList";
import "boxicons/css/boxicons.min.css";
import "../../styles/globals.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-black/10 fixed w-full z-10 flex justify-between items-center px-[5%] py-4 md:relative">
      <a href="#" className="text-[1.8rem] font-bold text-[var(--primary-color)] no-underline">
        Beleza & Estilo
      </a>

      {/* Menu desktop */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6">
          <NavList href="#home" text="Início" />
          <NavList href="#services" text="Serviços" />
          <NavList href="#testimonials" text="Depoimentos" />
          <NavList href="#contact" text="Contato" />
        </ul>
      </nav>

      {/* Botão menu mobile */}
      <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
      </div>

      {/* Menu mobile */}
      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center text-center py-4 md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-96"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <NavList href="#home" text="Início" />
          <NavList href="#services" text="Serviços" />
          <NavList href="#testimonials" text="Depoimentos" />
          <NavList href="#contact" text="Contato" />
        </ul>
      </nav>
    </header>
  );
};
