import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaTimes, FaServer, FaLaptopCode } from "react-icons/fa";

// Definimos la interfaz del proyecto aquí para reusarla
export interface ProjectData {
  title: string;
  description: string;
  longDescription: string; // <--- Nuevo: Descripción larga para el modal
  tags: string[];
  image?: string;
  githubUrl?: string;
  githubFrontend?: string;
  githubBackend?: string;
  demoUrl?: string;
  features?: string[]; // <--- Nuevo: Lista de características
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  
  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* BACKDROP (Fondo oscuro) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* CONTENIDO DEL MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl scrollbar-hide"
          >
            {/* Botón Cerrar */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-red-500/20 transition-colors"
            >
              <FaTimes size={20} />
            </button>

            {/* Imagen Header */}
            {project.image && (
              <div className="relative h-64 md:h-80 w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </div>
            )}

            <div className="p-8">
              {/* Título y Tags */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {project.title}
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contenido en 2 Columnas (en Desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Columna Izquierda: Descripción Larga */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Sobre el proyecto</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.longDescription}
                    </p>
                  </div>

                  {project.features && (
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Características Clave</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Columna Derecha: Botones y Enlaces */}
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Enlaces</h3>
                    <div className="flex flex-col gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" className="flex items-center gap-3 w-full p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg text-white transition-all">
                          <SiGithub size={20} /> <span>Ver Código</span>
                        </a>
                      )}
                      {project.githubFrontend && (
                        <a href={project.githubFrontend} target="_blank" className="flex items-center gap-3 w-full p-3 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg text-white transition-all">
                          <FaLaptopCode size={20} /> <span>Frontend Repo</span>
                        </a>
                      )}
                      {project.githubBackend && (
                        <a href={project.githubBackend} target="_blank" className="flex items-center gap-3 w-full p-3 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 rounded-lg text-white transition-all">
                          <FaServer size={20} /> <span>Backend Repo</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" className="flex items-center gap-3 w-full p-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg text-white font-bold shadow-lg transition-all">
                          <FaExternalLinkAlt size={18} /> <span>Visitar Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};