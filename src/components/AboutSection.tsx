import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Laptop, Bot, FileText, Brain, Code as CodeIcon } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  { icon: CodeIcon, label: "Frontend Development", color: "text-blue-400" },
  { icon: Laptop, label: "Full-Stack Development", color: "text-purple-400" },
  { icon: Bot, label: "Machine Learning & Chatbot Dev", color: "text-emerald-400" },
  { icon: FileText, label: "Microsoft Tools (Word, Excel, PowerPoint)", color: "text-amber-400" },
  { icon: Brain, label: "Problem Solving", color: "text-red-400" },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // ✅ Load AdSense script once
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.setAttribute("data-ad-client", "ca-pub-2277283346287122");
    document.head.appendChild(script);

    // Trigger ads after script load
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-background p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-section-title text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-80 aspect-square rounded-full overflow-hidden border-4 border-accent shadow-glow-accent"
                style={{
                  clipPath: inView
                    ? "circle(50% at 50% 50%)"
                    : "circle(0% at 50% 50%)",
                }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={profilePhoto}
                  alt="OperaTech"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating accents */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                animate={{ scale: [1, 1.3, 1], y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.p className="text-xl leading-relaxed text-muted-foreground text-justify">
              I'm a passionate creative designer with over 2 years of experience in
              crafting digital experiences that blend aesthetic beauty with functional
              excellence of websites and different kinds of development.
            </motion.p>

            <motion.p className="text-lg leading-relaxed text-muted-foreground text-justify">
              My journey began with a simple love for HTML, CSS, Java, C Program, and Python. Today, I
              specialize in creating immersive digital portfolios, brand identities,
              and interactive experiences that tell compelling stories of my work.
            </motion.p>

            <motion.p className="text-lg leading-relaxed text-muted-foreground text-justify">
              When I'm not designing, you'll find me exploring new technologies,
              brainstorming ideas, doing research, or enjoying gospel music.
            </motion.p>

            {/* AdSense Ad */}
            <div className="my-6 w-full flex justify-center">
              <ins className="adsbygoogle"
                   style={{ display: "block" }}
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

            {/* Skills */}
            <motion.div className="grid grid-cols-3 gap-4 pt-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    className="flex flex-col items-center p-4 rounded-xl bg-card hover:bg-card/80 transition-colors group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <Icon className={`w-8 h-8 mb-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
