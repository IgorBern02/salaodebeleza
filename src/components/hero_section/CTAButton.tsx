import { motion } from "framer-motion";
import type { CTAButtonProps } from "../../types/hero/types";

export const CTAButton = ({
  text,
  href,
  delay = 0.4,
  icon,
}: CTAButtonProps) => (
  <motion.a
    href={href}
    className="inline-block bg-[var(--primary-color)] text-[var(--white)] font-semibold rounded-full py-3 px-10 shadow-[0_4px_15px_rgba(233,30,99,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(233,30,99,0.4)]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
  >
    {icon && <i className={`bx ${icon} mr-2`}></i>}
    {text}
  </motion.a>
);
