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
          Hola, soy Nacho <br />
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 h-[1.2em] block md:inline-block">
            <TextType 
              text={[
                "Full Stack Developer", 
                "Experto en Spring Boot", 
                "Conocimiento avanzado en React",
                "Apasionado por Tailwind CSS",
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

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            Ver Portafolio
          </button>
          
          <button className="px-8 py-3 bg-black/50 backdrop-blur-md text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            Contáctame
          </button>
        </div>

      </div>
    </section>
  );
};