import React, { useState } from "react";
import { motion } from "framer-motion";

interface GooeyNavProps {
  items: { name: string; href: string }[];
}

export const GooeyNav = ({ items }: GooeyNavProps) => {
  // Estado para saber cuál es el link activo. Inicializamos con el primero o según la URL.
  const [active, setActive] = useState<string>(items[0]?.href || "");

  return (
    // Contenedor tipo "isla" con fondo semitransparente y borde sutil
    <div className="relative flex gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
      {items.map((item) => {
        const isActive = active === item.href;
        return (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.href)} // Al hacer click, lo marcamos como activo
            className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
              isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {item.name}
            {/* La "pastilla" animada de fondo que sigue al elemento activo */}
            {isActive && (
              <motion.div
                layoutId="gooey-pill"
                className="absolute inset-0 -z-10 bg-primary rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </a>
        );
      })}
    </div>
  );
};