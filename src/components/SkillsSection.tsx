import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, TrendingUp } from "lucide-react";

const skills = [
  
  { name: "HTML/CSS/JavaScript", level: 95, color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", level: 78, color: "from-indigo-500 to-purple-500" },
  { name: "React.js", level: 85, color: "from-cyan-500 to-blue-500" },
  { name: "Bootstrap/Tailwind CSS", level: 88, color: "from-teal-500 to-green-500" },
  { name: "Node.js", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Java", level: 45, color: "from-orange-500 to-red-500" },
  { name: "Python", level: 50, color: "from-green-500 to-emerald-500" },
  { name: "C Programming", level: 20, color: "from-pink-500 to-rose-500" },
  { name: "MySQL", level: 70, color: "from-yellow-500 to-orange-500" },
  { name: "MongoDB", level: 65, color: "from-green-600 to-emerald-600" },
  { name: "Git/GitHub", level: 60, color: "from-gray-700 to-black" },
];

const tools = [
  "Figma",
  "Adobe XD",
  "Canva",
  "Wix",
  "React",
  "TypeScript",
  "Bootstrap",
  "Tailwind CSS",
  "Git & GitHub",
  "Visual Studio Code",
  "Intelli J"
];


export const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      className="min-h-screen bg-gradient-background p-8 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Target className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-section-title mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of creative vision and technical proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-8">
            <motion.h3
              className="text-3xl font-bold text-foreground mb-8 flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TrendingUp className="w-8 h-8 text-accent mr-3" />
              Core Skills
            </motion.h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
                  <motion.span
                    className="text-accent font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-50`}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div>
            <motion.h3
              className="text-3xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tools & Technologies
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  className="group p-4 bg-card hover:bg-accent/10 rounded-xl border border-border hover:border-accent transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: inView ? 1 : 0, 
                    scale: inView ? 1 : 0.8,
                    y: inView ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.8 + index * 0.05,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Circular Progress Example */}
            <motion.div
              className="mt-12 p-8 bg-card rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h4 className="text-xl font-bold text-center mb-8 text-foreground">
                Experience Overview
              </h4>
              
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Years", value: 3, suffix: "+" },
                  { label: "Projects", value: 7, suffix: "+" },
                  { label: "Clients", value: 0, suffix: "+" },
                  { label: "Communication", value: "Fluently", suffix: "" },
                  { label: "Problem Solving", value: 100, suffix: "%" },
                  {label: "Live Websites Built", value:2, suffix: "+"},
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  >
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-muted stroke-current"
                          strokeWidth="2"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                          className="text-accent stroke-current"
                          strokeWidth="2"
                          strokeDasharray="100, 100"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          initial={{ strokeDasharray: "0, 100" }}
                          animate={{ strokeDasharray: inView ? "85, 100" : "0, 100" }}
                          transition={{ duration: 1.5, delay: 1.8 + index * 0.2 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-lg font-bold text-accent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: inView ? 1 : 0 }}
                          transition={{ duration: 0.4, delay: 2 + index * 0.2 }}
                        >
                          {stat.value}{stat.suffix}
                        </motion.span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};