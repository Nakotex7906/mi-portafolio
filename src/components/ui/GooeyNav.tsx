import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GooeyNavProps {
  items: { label: string; href: string }[];
}

export const GooeyNav = ({ items }: GooeyNavProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [burstKey, setBurstKey] = useState(0); 

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setBurstKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-full p-4 overflow-visible">
      
      {/* Filtro Gooey */}
      <svg className="absolute w-0 h-0 hidden">
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Menú */}
      <div 
        className="relative flex items-center gap-2 bg-neutral-900/80 border border-white/10 rounded-full px-3 py-2 backdrop-blur-md"
        style={{ filter: "url(#gooey-filter)" }} 
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          
          return (
            <a
              key={index}
              href={item.href}
              onClick={() => handleItemClick(index)}
              className="relative px-6 py-2 cursor-pointer select-none group"
            >
              <span className={`relative z-50 text-sm font-bold transition-colors duration-200 ${
                isActive ? "text-neutral-900" : "text-white/60 group-hover:text-white"
              }`}>
                {item.label}
              </span>

              {/* Fondo activo (Pastilla Morada) */}
              {isActive && (
                <motion.div
                  layoutId="gooey-pill"
                  className="absolute inset-0 z-10 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </div>

      {/* Partículas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <AnimatePresence mode="popLayout">
           <ParticleBurst key={burstKey} activeIndex={activeIndex} totalItems={items.length} />
        </AnimatePresence>
      </div>
    </div>
  );
};

const ParticleBurst = ({ activeIndex, totalItems }: { activeIndex: number, totalItems: number }) => {
  const leftPosition = `${(activeIndex / totalItems) * 100 + (50 / totalItems)}%`;

  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full h-full">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary"
            style={{ 
              left: leftPosition, 
              top: "50%",
            }}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{ 
              scale: [1, 0], 
              opacity: [1, 0], 
              x: (Math.random() - 0.5) * 200, 
              y: (Math.random() - 0.5) * 100  
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut" 
            }}
          />
        ))}
    </div>
  );
};