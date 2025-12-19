import { DarkVeil } from '../ui/DarkVeil';
import TextType from '../ui/TextType'; 

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fondo */}
      <DarkVeil className="absolute inset-0 z-0" />
      
      {/* Contenido */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Disponible para trabajar
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Hola, soy Ignacio <br />
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 h-[1.2em] block md:inline-block">
            <TextType 
              text={[
                "Estudiante de Ingeniería informática",
                "Full Stack Developer", 
                "Experto en Spring Boot", 
                "Conocimiento intermedio en React",
              ]} 
              typingSpeed={200}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="_"
            />
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo ideas complejas en código robusto. Especializado en arquitecturas escalables y experiencias de usuario fluidas.
        </p>

      </div>
    </section>
  );
};