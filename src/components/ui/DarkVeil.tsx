import { useEffect, useRef, useState } from "react";

interface DarkVeilProps {
  className?: string;
}

export const DarkVeil = ({ className = "" }: DarkVeilProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden bg-black ${className}`}
    >
      {/* Grid sutil de fondo */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#a855f7 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Efecto de "Velo" que sigue al mouse */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
    </div>
  );
};
export default DarkVeil;