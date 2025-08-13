import { motion } from "framer-motion";

interface HeroTextProps {
  text: string;
  delay?: number;
}

export const HeroText = ({ text, delay = 0.2 }: HeroTextProps) => (
  <motion.p
    className="text-[1.2rem] mb-8 text-[var(--text-light)]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
  >
    {text}
  </motion.p>
);
