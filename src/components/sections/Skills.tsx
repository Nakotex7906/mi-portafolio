import { LogoLoop } from '../ui/LogoLoop';
import { 
  SiReact, 
  SiSpringboot, 
  SiTailwindcss, 
  SiDocker, 
  SiGithub, 
  SiGitlab, 
  SiPostgresql, 
  SiHtml5, 
  SiJavascript, 
} from "react-icons/si";
import { FaJava, FaRocket } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava className="w-10 h-10 text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="w-10 h-10 text-green-500" /> },
  { name: "React", icon: <SiReact className="w-10 h-10 text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-10 h-10 text-orange-600" /> },
  { name: "Docker", icon: <SiDocker className="w-10 h-10 text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-blue-300" /> },
  { name: "GitHub", icon: <SiGithub className="w-10 h-10 text-white" /> },
  { name: "GitLab", icon: <SiGitlab className="w-10 h-10 text-orange-500" /> },
  { name: "CI/CD", icon: <FaRocket className="w-10 h-10 text-red-500" /> },
];

export const Skills = () => {
  const loopedSkills = [...skills, ...skills];

  return (
    <section id="habilidades" className="py-24 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative tracking-tight">
          Stack Tecnológico
          <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">Herramientas que domino</p>
      </div>

      <LogoLoop>
        {loopedSkills.map((skill, index) => (
          // Ajustamos 'gap-4' para separar el icono del texto
          <li key={index} className="flex flex-col items-center justify-center gap-4 group mx-6">
            
            {/* Tarjeta del Icono (Sin zoom, solo efecto de brillo/borde) */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:bg-white/10 group-hover:border-purple-500/50 transition-all duration-300">
              {skill.icon}
            </div>
            
            {/* Nombre SIEMPRE visible debajo del icono */}
            <span className="text-sm md:text-base font-medium text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>

          </li>
        ))}
      </LogoLoop>
    </section>
  );
};