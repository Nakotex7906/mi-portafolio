import React, { useState, useEffect } from "react";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;     // Velocidad de escritura (ms por caracter)
  pauseDuration?: number;   // Pausa al terminar la frase (ms)
  showCursor?: boolean;     // Mostrar cursor
  cursorCharacter?: string; // Caracter del cursor
  className?: string;
}

const TextType = ({
  text,
  typingSpeed = 150,    
  pauseDuration = 2000,   
  showCursor = true,
  cursorCharacter = "_",  
  className = "",
}: TextTypeProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = text[currentIndex % text.length];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
      }
    };

    let timer: NodeJS.Timeout;

    // Lógica de tiempos
    if (!isDeleting && displayText === currentFullText) {
      // Frase completa -> Esperar antes de borrar
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      // Frase borrada -> Pasar a la siguiente
      setIsDeleting(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, text, typingSpeed, pauseDuration]);

  return (
    <span className={`${className} inline-flex items-center`}>
      <span>{displayText}</span>
      {showCursor && (
        <span className="animate-pulse ml-0.5 font-bold text-primary">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;