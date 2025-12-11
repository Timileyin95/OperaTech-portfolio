import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MatrixRain = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 bg-accent opacity-30"
          style={{
            left: `${particle.x}%`,
            height: "100vh",
          }}
          initial={{ y: "-100vh", opacity: 1 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Matrix code characters */}
      {particles.slice(0, 8).map((particle) => (
        <motion.div
          key={`char-${particle.id}`}
          className="absolute text-accent font-mono text-sm opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
        </motion.div>
      ))}
    </div>
  );
};

export const ParticleSystem = ({ trigger = false }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; scale: number; delay: number }>>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 20,
        y: 50 + (Math.random() - 0.5) * 20,
        scale: 0.5 + Math.random() * 0.5,
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);
    }
  }, [trigger]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-accent rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, particle.scale, 0],
            x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
            y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
            opacity: [1, 0.8, 0]
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export const HolographicGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="cyber-grid w-full h-full animate-pulse" />
      {/* Scanning lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export const DataStream = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
          style={{
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: ["-100vw", "100vw"],
          }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};