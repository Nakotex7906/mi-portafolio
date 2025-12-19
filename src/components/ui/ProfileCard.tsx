import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SiGithub } from "react-icons/si"; 

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status?: string;
  avatarUrl: string;
  enableTilt?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status = "Online",
  avatarUrl,
  enableTilt = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 10 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enableTilt) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-xs mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl"
    >
      {/* Indicador de Estado */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 px-2 py-1 rounded-full border border-white/5 shadow-inner">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-xs text-gray-400 font-medium">{status}</span>
      </div>

      {/* Avatar e Info */}
      <div className="flex flex-col items-center mt-6 mb-2" style={{ transform: "translateZ(20px)" }}>
        <div className="relative w-32 h-32 mb-5 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/20">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full rounded-full object-cover border-4 border-neutral-900"
          />
        </div>
        
        <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
        <p className="text-purple-400 font-medium text-sm mb-1">{title}</p>
        <p className="text-gray-500 text-xs">{handle}</p>
      </div>

      <div className="flex justify-center mt-6 mb-2" style={{ transform: "translateZ(30px)" }}>
        <a 
          href={`https://github.com/${handle.replace('@', '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visitar perfil de GitHub"
          className="text-gray-400 hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:bg-white/10"
        >
          <SiGithub size={24}/>
        </a>
      </div>

      {/* Brillo al pasar el mouse */}
      {hover && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)",
            transform: "translateZ(1px)"
          }}
        />
      )}
    </motion.div>
  );
};