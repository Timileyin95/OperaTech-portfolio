import { motion } from "framer-motion";
import { User, Briefcase, Award, Clock, MessageCircle } from "lucide-react";
import { HolographicGrid, DataStream } from "./TechEffects";
import { useState, useEffect } from "react";

interface TableOfContentsProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: "about", title: "About Me", icon: User, description: "Get to know me", color: "from-blue-500 to-cyan-500" },
  { id: "projects", title: "Projects", icon: Briefcase, description: "My creative works", color: "from-purple-500 to-pink-500" },
  { id: "skills", title: "Skills", icon: Award, description: "What I excel at", color: "from-green-500 to-emerald-500" },
  { id: "experience", title: "Experience", icon: Clock, description: "My journey", color: "from-orange-500 to-red-500" },
  { id: "contact", title: "Contact", icon: MessageCircle, description: "Let's connect", color: "from-indigo-500 to-purple-500" },
];

export const TableOfContents = ({ activeSection, onNavigate }: TableOfContentsProps) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [time, setTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gradient-card p-2 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Tech Background Effects */}
      <HolographicGrid />
      <DataStream />
      
      {/* Smaller floating tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-accent/10"
            style={{
              width: `${30 + i * 15}px`,
              height: `${30 + i * 15}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              rotate: { duration: 25 + i * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-full h-full bg-gradient-accent opacity-5 rounded-full animate-hologram-flicker" />
          </motion.div>
        ))}
        
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute h-px bg-gradient-accent opacity-20"
            style={{
              width: "60px",
              top: `${20 + i * 20}%`,
              left: "-60px",
            }}
            animate={{
              x: ["-60px", "100vw"],
              opacity: [0, 0.4, 0],
              scaleX: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative inline-block"
            animate={{ rotateY: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Digital Clock replacing Book */}
            <motion.div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-xl bg-card border-2 border-accent text-accent text-lg font-mono animate-cyber-pulse">
              {time.toLocaleTimeString()}
            </motion.div>

            {/* Tech glow effect */}
            <div className="absolute inset-0 bg-accent rounded-full opacity-30 blur-xl animate-glow-pulse" />
          </motion.div>
          
          <h2 className="text-section-title mb-4 animate-hologram-flicker">OperaTech Portfolio Contents</h2>
          <p className="text-xl text-muted-foreground">Navigate through my digital portfolio</p>
          
          <motion.div
            className="w-full h-0.5 bg-gradient-accent mt-4 opacity-60"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;
            
            return (
              <motion.div
                key={section.id}
                className="relative group perspective-1000"
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  bounce: 0.4 
                }}
                onHoverStart={() => setHoveredSection(section.id)}
                onHoverEnd={() => setHoveredSection(null)}
              >
                <motion.button
                  onClick={() => handleSectionClick(section.id)}
                  className={`relative w-full p-8 rounded-2xl bg-card border-2 transition-all duration-500 text-left overflow-hidden transform-gpu ${
                    isActive ? "border-accent shadow-glow-accent" : "border-transparent hover:border-accent/50"
                  }`}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05, z: 50, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.98, rotateY: -15 }}
                  animate={{ rotateY: isActive ? -5 : 0 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 rounded-2xl`}
                    animate={{ opacity: isActive ? 0.15 : isHovered ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="cyber-grid w-full h-full rounded-2xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center mb-6"
                      animate={{ x: isActive ? 10 : isHovered ? 5 : 0, scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{ rotate: isHovered ? [0, 5, -5, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-10 h-10 mr-4 transition-all duration-300 ${
                          isActive ? "text-accent animate-cyber-pulse" : "text-muted-foreground group-hover:text-accent"
                        }`} />
                        {(isActive || isHovered) && (
                          <motion.div
                            className="absolute inset-0 bg-accent rounded-full opacity-30 blur-md"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                      </motion.div>
                      
                      <h3 className={`text-2xl font-bold transition-all duration-300 ${
                        isActive ? "text-accent animate-hologram-flicker" : "text-foreground group-hover:text-accent"
                      }`}>
                        {section.title}
                      </h3>
                    </motion.div>
                    
                    <motion.p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      animate={{ y: isHovered ? -2 : 0 }}>
                      {section.description}
                    </motion.p>
                    
                    <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-accent"
                      animate={{ width: isActive ? "100%" : isHovered ? "70%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${section.color} opacity-0 rounded-2xl blur-md -z-10`}
                    animate={{ opacity: isActive ? 0.2 : isHovered ? 0.15 : 0, scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 8 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-accent rounded-full"
                          style={{ left: `${20 + i * 10}%`, top: `${20 + (i % 3) * 20}%` }}
                          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.p className="text-muted-foreground italic text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            "Every page tells a story, every click reveals a new chapter"
          </motion.p>
          
          <motion.div className="flex justify-center mt-6 space-x-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
