import { ProjectCard } from '../ui/ProjectCard';

// Datos de proyectos 
const projects = [
  {
    title: "Sistema de reservas para universidad",
    description: "Plataforma de reservas para estudiantes de la UFRO. Permite reservar salas de estudio solo a estudiantes con correo @ufromail y agregar la reserva a google calendar.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Tailwind", "Google Calendar API", "Google OAuth2"],
    image: "/projects/book-frontera.png", 
    githubFrontend: "https://github.com/Nakotex7906/BookFronteraFront",
    githubBackend: "https://github.com/Nakotex7906/BookFronteraBack",
    demoUrl: "https://bookfrontera-fron.vercel.app/"
  },
  {
    title: "Plataforma de videojuegos",
    description: "Tienda online completa con pasarela de pagos, carrito de compras y panel de administración. Seguridad implementada con Spring Security y JWT, donde trabajamos entre 30 estudiantes divididos en modulos de 2 a 3 personas.",
    tags: ["Spring Boot", "PostgreSQL", "Vue", "Tailwind"],
    image: "/projects/ufro-gamelab.png",
    githubFrontend: "https://gitlab.com/dci-vn/isoft-2025-1/2-2025/ufrogamelab-frontend",
    githubBackend: "https://gitlab.com/dci-vn/isoft-2025-1/2-2025/ufrogamelab-backend",
  },
  {
    title: "Safe Ride - Aplicación para proyecto IOT",
    description: "Aplicación movil desarrollada en flutter para proyecto de IOT que permite mandar una señal de emergencia con la ubicación actual del usuario a contactos predefinidos en caso de caida en bicicleta.",
    tags: ["Docker", "React", "Node.js", "MongoDB"],
    image: "/projects/safe_ride.png",
    githubUrl: "https://github.com/Nakotex7906/safe_ride",
  }
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de Sección */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
            <span className="text-primary">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Una selección de mis trabajos más recientes, donde aplico arquitectura limpia y tecnologías modernas.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};