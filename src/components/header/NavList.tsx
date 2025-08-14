import type { NavListProps } from "../../types/header/types";
import "../../styles/globals.css";

export const NavList = ({ href, text }: NavListProps) => {
  return (
    <li>
      <a
        href={href}
        className="no-underline font-bold text-[var(--dark-color)] hover:text-[var(--primary-color)] transition-all duration-300"
      >
        {text}
      </a>
    </li>
  );
};
