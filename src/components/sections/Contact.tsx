import React, { useState } from 'react';
import { FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "nachoessus@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
      
      {/* Fondo decorativo (Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Encabezado */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          ¿Listo para trabajar juntos?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Actualmente estoy buscando oportunidades para mi  <span className="text-primary font-semibold">Practica 1</span>. 
          Si tienes un proyecto en mente o simplemente quieres saludar, ¡hablemos!
        </p>

        {/* Tarjetas de Contacto */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
          
          {/* TARJETA EMAIL (Copiar al click) */}
          <button 
            onClick={handleCopy}
            className="group relative flex items-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 w-full md:w-auto min-w-[300px]"
          >
            <div className="p-4 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
              <FaEnvelope size={24} />
            </div>
            <div className="text-left flex-grow">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</p>
              <p className="text-white font-bold text-lg">{email}</p>
            </div>
            
            {/* Icono de Copiar / Check */}
            <div className="text-gray-500 group-hover:text-white transition-colors">
              {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
            </div>

            {copied && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded shadow-lg animate-fade-in-up">
                ¡Copiado!
              </span>
            )}
          </button>

        </div>

      </div>

      {/* Footer Simple */}
      <footer className="absolute bottom-4 w-full text-center text-gray-600 text-xs">
        <p>{new Date().getFullYear()} Creado con Astro, React & Tailwind.</p>
      </footer>
    </section>
  );
};