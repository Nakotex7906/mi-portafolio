import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";
import { ProfileCard } from '../ui/ProfileCard'; // Importamos la carta

export const About = () => {
  
  const handleContactClick = () => {
    // Aquí puedes redirigir al email o hacer scroll al footer
    window.location.href = "mailto:tuemail@ejemplo.com";
  };

  return (
    <section id="sobre-mi" className="py-24 relative bg-black/40 border-t border-white/5 overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(168,85,247,0.05),_transparent_40%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative tracking-tight">
            Sobre Mí
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Profile Card (Ocupa 4 columnas en pantallas grandes) */}
          <div className="lg:col-span-4 flex justify-center perspective-1000">
            <ProfileCard
                name="Ignacio Essus"
                handle="@Nakotex7906"
                status="Disponible"
                avatarUrl="https://github.com/Nakotex7906.png"
                enableTilt={true} 
                title={''}  
            />
          </div>

          {/* COLUMNA DERECHA: Información (Ocupa 8 columnas) */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-purple-500">⚡</span> Mi Historia
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Soy un apasionado de la tecnología cursando mi <span className="text-purple-400 font-semibold">3er año de Ingeniería Informática</span>.
                No me conformo con que el código funcione; busco que sea escalable, limpio y eficiente.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                Me especializo en el ecosistema **Spring Boot** para crear backends robustos y **React** para interfaces modernas. 
                Mi objetivo es combinar la solidez de la ingeniería de software con la creatividad del desarrollo frontend.
              </p>
            </div>

            {/* Grid de Datos Rápidos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {/* Card 1 */}
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-purple-500/30 transition-colors">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Estudiante</p>
                    <p className="text-white font-bold text-sm">3er Año Ing.</p>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-cyan-500/30 transition-colors">
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                    <FaCode size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Stack</p>
                    <p className="text-white font-bold text-sm">Java & React</p>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-yellow-500/30 transition-colors">
                  <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400">
                    <FaLightbulb size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Interés</p>
                    <p className="text-white font-bold text-sm">Arquitectura</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};