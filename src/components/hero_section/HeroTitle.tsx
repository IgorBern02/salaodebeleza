import { motion } from "framer-motion";

interface HeroTitleProps {
  text: string;
}

export const HeroTitle = ({ text }: HeroTitleProps) => (
  <motion.h1
    className="text-[3rem] mb-4 text-[var(--text-dark)]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {text}
  </motion.h1>
);
