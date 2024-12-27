import React from "react";
import { motion } from "framer-motion";

interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, name, className = "" }) => (
  <motion.div
    className={`lg:opacity-10 opacity-5  absolute ${className}`}
    title={name}
    animate={{
      y: [0, 0, 0],
    }}
    transition={{
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  >
    {icon}
  </motion.div>
);

export default TechIcon;
