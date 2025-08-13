import type { PropsNavList } from "../../types/header/types";

export const NavList = ({ href, text }: PropsNavList) => {
  return (
    <nav className="flex justify-between items-center px-[5%] py-4 max-w-[1200px] mx-auto">
      <ul className="flex list-none gap-2">
        <li>
          <a
            href={href}
            className="text-none text-[#333] font-bold hover:text-[#e91e63] transition-all duration-300"
          >
            {text}
          </a>
        </li>
      </ul>
    </nav>
  );
};
