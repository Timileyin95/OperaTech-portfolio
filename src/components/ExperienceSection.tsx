import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Award, Building } from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    year: "2025 - Present",
    title: "Junior Developer",
    company: "Innovation Center (ESR)",
    location: "Innovation Center, FPI",
    description:
      "Design different types of website with full functionality and responsivess , overseeing creative strategy for major tech clients including Global 100companies.",
    achievements: [
      "Increased client satisfaction by 45%",
      "Design with the lifecycle system",
      "Implemented new design system reducing project time by 30%",
    ],
    type: "work",
  },
  {
    year: "2021 - 2023",
    title: "Student",
    company: "Federal Polytechnic Ilaro",
    location: "Nigeria, NG",
    description:
      "Designed and launched 3+ web applications with also design of chatbot, focusing on Fashion desiging store as project.",
    achievements: [
      "40% increase in user engagement",
      "Reduced user onboarding time by 60%",
      "Looking forward to win an Award as a developer ",
    ],
    type: "work",
  },
  {
    year: "2019- 2021",
    title: "Project",
    company: "OperaTech",
    location: "Austin, TX",
    description:
      "Worked with 20+ startups to establish the brand identity and digital presence from concept to launch.",
    achievements: [
      "The project is to know how reliable my skills is",
      "2 successful product launches",
      "Built design alone",
    ],
    type: "work",
  },
];

export const ExperienceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloaded, setDownloaded] = useState(false);

  // ✅ AdSense script injection
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.setAttribute("data-ad-client", "ca-pub-2277283346287122");
    document.head.appendChild(script);

    // Trigger ads after script loads
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume Opera.pdf"; // must be in public folder
    link.download = "Resume_Opera.pdf";
    link.click();

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <motion.section
      ref={ref}
      className="min-h-screen bg-gradient-card p-8 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Calendar className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-section-title mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey through the world of design and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 timeline-dot z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: inView ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                >
                  <div className="w-full h-full rounded-full bg-accent shadow-glow-accent flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Building className="w-3 h-3 text-accent-foreground" />
                    ) : (
                      <Award className="w-3 h-3 text-accent-foreground" />
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-12 pl-20 md:pl-0"
                      : "md:pl-12 pl-20 md:pr-0"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-card p-8 rounded-2xl shadow-card-custom border border-border group hover:border-accent hover:shadow-glow-primary transition-all duration-300">
                    <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.year}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: inView ? 1 : 0,
                              x: inView ? 0 : -20,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.8 + index * 0.2 + achIndex * 0.1,
                            }}
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* AdSense Banner */}
        <div className="my-8 w-full flex justify-center">
          <ins className="adsbygoogle"
               style={{ display: "block" }}
               data-ad-client="ca-pub-2277283346287122"
               data-ad-slot="3631477372"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        {/* Resume download */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={handleDownload}
            className="bg-gradient-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:shadow-glow-accent transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>

          {downloaded && (
            <motion.p
              className="text-green-500 font-medium mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Thank you for the Review, Resume has been downloaded!
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
