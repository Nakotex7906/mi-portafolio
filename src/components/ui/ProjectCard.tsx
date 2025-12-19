import React, { useRef, useState } from 'react';
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaServer, FaLaptopCode } from "react-icons/fa"; 

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;       // Caso: Monorepo o repo único
  githubFrontend?: string;  // Caso: Repo separado Front
  githubBackend?: string;   // Caso: Repo separado Back
  demoUrl?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image, 
  githubUrl, 
  githubFrontend,
  githubBackend,
  demoUrl 
}: ProjectCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-md group flex flex-col h-full"
    >
      {/* EFECTO SPOTLIGHT */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.15), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.4), transparent 40%)`,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Imagen */}
      <div className="relative h-48 overflow-hidden rounded-t-xl border-b border-white/5 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
      </div>

      <div className="absolute top-3 right-3 z-20">
        <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300 bg-black/60 backdrop-blur-md border border-white/10 rounded-md shadow-sm">
            Imagen Referencial
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="mb-4 text-sm text-gray-400 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded-md">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};