import React, { useState, useEffect } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 150,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = text[currentPhraseIndex];
    
    const handleTyping = () => {
      setDisplayText(prev => {
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });

      // Lógica para cambiar de estado (escribir <-> borrar)
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % text.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, text, typingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse ml-1 font-normal text-white/80 inline-block">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;