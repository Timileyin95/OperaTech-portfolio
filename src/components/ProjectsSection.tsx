import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";
import { HolographicGrid, ParticleSystem } from "./TechEffects";
import { useState } from "react";

const projects = [
  
  {
    id: 1,
    title: "E-Commerce Redesign",
    description: "Design an Educating System Platform with full flexibility and functionality",
    tech: ["React", "TypeScript", "VScode","Superbase"],
    color: "from-purple-500 to-pink-500",
    category: "Web Design",
    demoUrl: "https://educatalyst.vercel.app/",
    githubUrl: "https://github.com/example/project1"
  },

  {
    id: 2,
    title: "Mobile Banking App",
    description: "Intuitive mobile banking interface focusing on accessibility and user-friendly financial management.",
    tech: ["React Native", "Sketch", "Prototyping"],
    color: "from-blue-500 to-cyan-500",
    category: "Mobile Design",
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Comprehensive brand identity for a tech startup including logo, typography, and visual guidelines.",
    tech: ["Illustrator", "After Effects", "Branding"],
    color: "from-green-500 to-emerald-500",
    category: "Branding",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/example/project3"
  },
  {
    id: 4,
    title: "Interactive Portfolio",
    description: "Award-winning interactive portfolio with 3D elements and smooth animations.",
    tech: ["Three.js", "GSAP", "WebGL"],
    color: "from-orange-500 to-red-500",
    category: "Web Development",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/example/project4"
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    description: "Data-rich dashboard with advanced filtering and real-time analytics visualization.",
    tech: ["Vue.js", "D3.js", "Tailwind"],
    color: "from-indigo-500 to-purple-500",
    category: "Dashboard Design",
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/example/project5"
  },
  {
    id: 6,
    title: "Learning Website",
    description: "Augmented reality experience for product visualization in retail environments.",
    tech: ["Unity", "ARKit", "C#"],
    color: "from-pink-500 to-rose-500",
    category: "AR/VR",
    demoUrl: "https://educatalyst.vercel.app/",
    githubUrl: "https://github.com/example/project6"
  },
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen bg-gradient-card p-8 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Massive Tech Background */}
      <HolographicGrid />
      
      {/* Floating tech orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full border border-accent/20"
            style={{
              left: `${i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              rotate: { duration: 15 + i * 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="w-full h-full bg-gradient-accent opacity-10 rounded-full animate-hologram-flicker" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative inline-block mb-8"
            animate={{
              rotateX: [0, 10, 0],
              rotateY: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-24 h-24 text-accent mx-auto animate-cyber-pulse" />
            {/* Massive tech glow */}
            <motion.div
              className="absolute inset-0 bg-accent rounded-full opacity-40 blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-section-title mb-6 animate-hologram-flicker"
            animate={{
              textShadow: ["0 0 10px hsl(var(--accent))", "0 0 20px hsl(var(--accent))", "0 0 10px hsl(var(--accent))"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Featured Projects
          </motion.h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my creative journey through diverse digital experiences
          </p>

          {/* Tech scanning lines */}
          <div className="flex justify-center mt-8 space-x-4">
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className="h-0.5 bg-gradient-accent"
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative perspective-1000"
              initial={{ opacity: 0, y: 80, rotateX: 45, z: -100 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 80,
                rotateX: inView ? 0 : 45,
                z: inView ? 0 : -100
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4 + index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* 3D Project Card */}
              <motion.div
                className="relative h-[450px] p-8 rounded-3xl bg-card border-2 border-transparent overflow-hidden transform-gpu"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1200px"
                }}
                whileHover={{ 
                  rotateY: -12,
                  rotateX: 8,
                  scale: 1.05,
                  z: 100,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.98,
                  rotateY: -20,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  borderColor: hoveredProject === project.id ? "hsl(var(--accent))" : "transparent",
                }}
              >
                {/* Massive holographic background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 rounded-3xl`}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 0.25 : 0.1
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Tech matrix overlay */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-30' : ''
                }`}>
                  <div className="cyber-grid w-full h-full rounded-3xl" />
                </div>
                
                {/* Particle explosion on hover */}
                {hoveredProject === project.id && (
                  <ParticleSystem trigger={true} />
                )}
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <motion.span 
                      className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold border border-accent/30"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                        boxShadow: hoveredProject === project.id ? "0 0 20px hsl(var(--accent) / 0.5)" : "none",
                      }}
                    >
                      {project.category}
                    </motion.span>
                    
                    {/* Tech action buttons */}
                    <div className={`flex gap-3 transition-all duration-500 ${
                      hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}>
                     <motion.a
  href={project.demoUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="tech-button p-3 bg-card/80 backdrop-blur-md hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300 border border-accent/30"
  whileHover={{ 
    scale: 1.2, 
    rotate: 5,
    boxShadow: "0 0 20px hsl(var(--accent) / 0.6)"
  }}
  whileTap={{ scale: 0.9 }}
>
  <ExternalLink className="w-5 h-5" />
</motion.a>

<motion.a
  href={project.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="tech-button p-3 bg-card/80 backdrop-blur-md hover:bg-accent hover:text-accent-foreground rounded-full transition-all duration-300 border border-accent/30"
  whileHover={{ 
    scale: 1.2, 
    rotate: -5,
    boxShadow: "0 0 20px hsl(var(--accent) / 0.6)"
  }}
  whileTap={{ scale: 0.9 }}
>
  <Github className="w-5 h-5" />
</motion.a>


                    </div>
                  </div>
                  
                  <motion.h3 
                    className="text-3xl font-bold mb-6 text-foreground group-hover:text-accent transition-colors duration-400"
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1,
                      textShadow: hoveredProject === project.id ? "0 0 15px hsl(var(--accent))" : "none",
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground mb-8 flex-grow leading-relaxed text-lg"
                    animate={{
                      y: hoveredProject === project.id ? -5 : 0,
                    }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tech stack with animations */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-muted/80 text-muted-foreground rounded-full text-sm font-medium border border-border/50"
                        initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
                        animate={{ 
                          opacity: inView ? 1 : 0, 
                          scale: inView ? 1 : 0.8,
                          rotateX: inView ? 0 : -45
                        }}
                        transition={{ 
                          delay: 0.8 + index * 0.1 + techIndex * 0.1,
                          duration: 0.5
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(var(--accent) / 0.2)",
                          color: "hsl(var(--accent))",
                          borderColor: "hsl(var(--accent))",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Massive 3D glow effect */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-br ${project.color} opacity-0 rounded-3xl blur-2xl -z-10`}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 0.6 : 0,
                    scale: hoveredProject === project.id ? 1.2 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Massive Call-to-Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={() => window.open('https://github.com/Timileyin95', '_blank')}
            className="tech-button relative group text-accent-foreground px-12 py-6 rounded-full font-bold text-xl overflow-hidden transform-gpu animate-cyber-pulse border-2 border-accent"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 40px hsl(var(--accent) / 0.8)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 animate-tech-glitch" />
              View All Projects
            </span>
            
            {/* Cyber scanning effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};