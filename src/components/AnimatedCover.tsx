import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { MatrixRain, ParticleSystem, HolographicGrid, DataStream } from "./TechEffects";
import { useState } from "react";

interface AnimatedCoverProps {
  onEnter: () => void;
}

export const AnimatedCover = ({ onEnter }: AnimatedCoverProps) => {
  const [showParticles, setShowParticles] = useState(false);

  const handleEnter = () => {
    setShowParticles(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated overlay with tech effects */}
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Holographic Grid */}
      <HolographicGrid />
      
      {/* Data Streams */}
      <DataStream />
      
      {/* Particle System */}
      <ParticleSystem trigger={showParticles} />
      
      {/* Smaller floating tech shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <div className="w-full h-full bg-gradient-accent opacity-10 rounded-lg animate-hologram-flicker border border-accent/20" />
          </motion.div>
        ))}
        
        {/* Subtle tech lines with enhanced cyber effects */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`tech-line-${i}`}
            className="absolute h-0.5 bg-gradient-accent opacity-20"
            style={{
              width: "100px",
              top: `${10 + i * 15}%`,
              left: "-100px",
            }}
            animate={{
              x: ["-100px", "100vw"],
              opacity: [0, 0.6, 0],
              scaleX: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
        
        {/* New micro particles for effectiveness */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main content with massive tech enhancements */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          className="relative inline-block"
          animate={{
            filter: ["hue-rotate(0deg)", "hue-rotate(5deg)", "hue-rotate(0deg)"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.h1
            className="text-hero mb-6 relative animate-cyber-pulse"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
          Opeyemi Timileyin
            {/* Subtle holographic overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-accent opacity-15 rounded-lg blur-sm -z-10"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h1>
        </motion.div>
        
        <motion.p
          className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light animate-hologram-flicker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Full-stack Developer & Digital Artist
        </motion.p>
        
        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Crafting immersive digital experiences through innovative design and cutting-edge technology
        </motion.p>

        <motion.button
          onClick={handleEnter}
          className="tech-button relative group text-primary-foreground px-12 py-6 rounded-full font-bold text-xl overflow-hidden transform-gpu animate-cyber-pulse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center justify-center">
            Open Portfolio
            <motion.div
              className="inline-block ml-3"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </span>
          
          {/* Cyber scanning effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Particle burst on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <ParticleSystem trigger={showParticles} />
          </div>
        </motion.button>
      </div>

      {/* Massive scroll indicator with tech effects */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-accent rounded-full flex justify-center relative animate-cyber-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-4 bg-accent rounded-full mt-2 animate-hologram-flicker"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Tech glow effect */}
          <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-md animate-glow-pulse" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};