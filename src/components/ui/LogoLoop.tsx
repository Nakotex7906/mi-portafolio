import React from 'react';

interface LogoLoopProps {
  children: React.ReactNode;
}

export const LogoLoop = ({ children }: LogoLoopProps) => {
  return (
    // El contenedor principal tiene una máscara para desvanecer los bordes
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      
      {/* Primera lista de logos, se anima hacia la izquierda */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {children}
      </ul>
      
      {/* Segunda lista idéntica (el duplicado) que sigue a la primera para cerrar el bucle */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {children}
      </ul>
    </div>
  );
};