import React, { useState, useEffect } from 'react';
import { GooeyNav } from '../ui/GooeyNav';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#inicio" className="text-2xl font-bold text-white tracking-tighter">
          Nacho<span className="text-primary">.dev</span>
        </a>

        {/* GooeyNav Central */}
        <div className="hidden md:block">
          <GooeyNav items={navLinks} />
        </div>

        {/* Botón Contratame */}
        <a 
          href="#contacto"
          className="hidden md:inline-block px-5 py-2 text-sm font-semibold text-white bg-primary/10 border border-primary/30 rounded-full hover:bg-primary hover:border-transparent transition-all shadow-[0_0_10px_rgba(168,85,247,0.2)]"
        >
          Contratame
        </a>
      </div>
    </nav>
  );
};