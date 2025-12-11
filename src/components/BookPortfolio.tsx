import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Menu, X } from "lucide-react";
import { AnimatedCover } from "./AnimatedCover";
import { TableOfContents } from "./TableOfContents";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";
import { ThemeToggle } from "./ThemeToggle";
import { PortfolioChatbot } from "./PortfolioChatbot";
import { ScrollToTop, FloatingIcons, InteractiveBackground } from "./InteractiveElements";

type Section = "cover" | "contents" | "about" | "projects" | "skills" | "experience" | "contact";

export const BookPortfolio = () => {
  const [currentSection, setCurrentSection] = useState<Section>("cover");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page transitions with 3D book flip effect
  const pageVariants = {
    initial: { 
      opacity: 0, 
      x: 100,
      rotateY: -45,
      scale: 0.8,
      z: -200
    },
    in: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      scale: 1,
      z: 0
    },
    out: { 
      opacity: 0, 
      x: -100,
      rotateY: 45,
      scale: 0.8,
      z: -200
    }
  };

  const pageTransition = {
    type: "spring" as const,
    damping: 25,
    stiffness: 120,
    duration: 1.2
  };

  const handleEnterPortfolio = () => {
    setCurrentSection("contents");
  };

  const handleNavigateToSection = (section: string) => {
    setCurrentSection(section as Section);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "cover":
        return <AnimatedCover onEnter={handleEnterPortfolio} />;
      case "contents":
        return <TableOfContents activeSection={currentSection} onNavigate={handleNavigateToSection} />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AnimatedCover onEnter={handleEnterPortfolio} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Interactive Background Effects */}
      <InteractiveBackground />
      <FloatingIcons />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Navigation Menu - Only show after cover */}
      <AnimatePresence>
        {currentSection !== "cover" && (
          <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4 }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <motion.h1
                className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Opera<span className="text-white">Tech</span>
              </motion.h1>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {["contents", "about", "projects", "skills", "experience", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => handleNavigateToSection(section)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 capitalize ${
                      currentSection === section
                        ? "bg-accent text-accent-foreground shadow-glow-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section === "contents" ? "Home" : section}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-full bg-card border border-border"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 py-4 space-y-2">
                    {["contents", "about", "projects", "skills", "experience", "contact"].map((section) => (
                      <motion.button
                        key={section}
                        onClick={() => handleNavigateToSection(section)}
                        className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 capitalize ${
                          currentSection === section
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {section === "contents" ? "Home" : section}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content with Page Transitions */}
      <div className={currentSection !== "cover" ? "pt-20" : ""}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ perspective: "1000px" }}
          >
            {renderCurrentSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && currentSection !== "cover" && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-accent text-accent-foreground rounded-full shadow-glow-accent hover:scale-110 transition-transform"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      {currentSection !== "cover" && (
        <motion.div
          className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {["contents", "about", "projects", "skills", "experience", "contact"].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => handleNavigateToSection(section)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === section
                  ? "bg-accent shadow-glow-accent scale-125"
                  : "bg-muted hover:bg-muted-foreground"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          ))}
        </motion.div>
      )}
      
      {/* Interactive Components */}
      <PortfolioChatbot />
    </div>
  );
};