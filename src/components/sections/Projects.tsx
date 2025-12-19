import React, { useState } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal, type ProjectData } from '../ui/ProjectModal';

const projectsData: ProjectData[] = [
  {
    title: "Sistema de reservas para universidad",
    description: "Plataforma de reservas para estudiantes de la UFRO. Permite reservar salas de estudio solo a estudiantes con correo @ufromail.",
    longDescription: "Desarrollé una plataforma de reservas para estudiantes de la UFRO, permitiendo reservar salas de estudio exclusivamente a usuarios con correo @ufromail. Implementé integración con Google Calendar para que los usuarios puedan añadir sus reservas directamente a su calendario personal. Utilicé Spring Boot para el backend, React para el frontend y PostgreSQL como base de datos. La autenticación se manejó mediante Google OAuth2, asegurando un acceso seguro y sencillo.",
    features: [
      "Autenticación exclusiva con correo institucional (@ufromail)",
      "Integración bidireccional con Google Calendar API",
      "Gestión de salas y horarios en tiempo real",
      "Seguridad robusta con Google OAuth2"
    ],
    tags: ["Spring Boot", "React", "PostgreSQL", "Tailwind", "Google Calendar API", "Google OAuth2"],
    image: "/projects/book-frontera.webp", 
    githubFrontend: "https://github.com/Nakotex7906/BookFronteraFront",
    githubBackend: "https://github.com/Nakotex7906/BookFronteraBack",
    demoUrl: "https://bookfrontera-fron.vercel.app/"
  },
  {
    title: "Plataforma de videojuegos",
    description: "Tienda online completa con pasarela de pagos, carrito de compras y panel de administración.",
    longDescription: "Este fue un proyecto masivo de colaboración desarrollado por 30 estudiantes divididos en células de trabajo ágil. Creamos un ecosistema completo de e-commerce para videojuegos. Mi modulo se encargo de que los modulos que hacian juegos los puedan subir a la tienda, editarlos y borrarlos.",
    features: [
      "Arquitectura Modular y Trabajo Colaborativo (30 devs)",
      "Seguridad avanzada con Spring Security y JWT",
      "Carrito de compras y Pasarela de pagos",
      "Panel de administración para gestión de productos"
    ],
    tags: ["Spring Boot", "PostgreSQL", "Vue", "Tailwind", "Spring Security"],
    image: "/projects/ufro-gamelab.webp",
    githubFrontend: "https://gitlab.com/dci-vn/isoft-2025-1/2-2025/ufrogamelab-frontend",
    githubBackend: "https://gitlab.com/dci-vn/isoft-2025-1/2-2025/ufrogamelab-backend",
  },
  {
    title: "Safe Ride - Proyecto IoT",
    description: "App móvil en Flutter que envía señales de emergencia con ubicación en caso de caída en bicicleta.",
    longDescription: "Aplicación móvil innovadora desarrollada en Flutter como parte de un sistema IoT integral. La app monitorea los sensores del dispositivo para detectar caídas bruscas (accidentes de bicicleta). Al confirmar un accidente, envía automáticamente una alerta con las coordenadas GPS exactas a los contactos de emergencia predefinidos, utilizando servicios de mensajería y geolocalización.",
    features: [
      "Desarrollo móvil nativo con Flutter & Dart",
      "Detección de caídas mediante acelerómetro",
      "Geolocalización y envío de SMS automáticos",
      "Integración con hardware IoT"
    ],
    tags: ["Flutter", "Dart", "IoT", "Open street Maps"], 
    image: "/projects/safe_ride.webp",
    githubUrl: "https://github.com/Nakotex7906/safe_ride",
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="proyectos" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados <span className="text-primary"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Una selección de mis trabajos académicos y personales, aplicando arquitectura limpia y tecnologías modernas.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)} className="cursor-pointer h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detallado */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};