import { useState, useEffect } from "react"
import { ArrowUp, Zap, Star, Code2, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}

export function FloatingIcons() {
  const icons = [
    { Icon: Zap, delay: 0 },
    { Icon: Star, delay: 1 },
    { Icon: Code2, delay: 2 },
    { Icon: Rocket, delay: 3 }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {icons.map(({ Icon, delay }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: `${20 + (index * 20)}%`,
            top: `${10 + (index * 15)}%`,
            animationDelay: `${delay}s`
          }}
        >
          <Icon className="h-8 w-8 text-accent animate-hologram" />
        </div>
      ))}
    </div>
  )
}

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Interactive gradient that follows mouse */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)"
        }}
      />
      
      {/* Animated grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Data streams */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-data-stream"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function SectionIndicator({ currentSection }: { currentSection: string }) {
  const sections = ["cover", "about", "skills", "experience", "projects", "contact"]
  
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 space-y-3">
      {sections.map((section) => (
        <div
          key={section}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
            currentSection === section
              ? "bg-accent shadow-[0_0_10px_hsl(var(--accent))]"
              : "bg-muted hover:bg-accent/50"
          }`}
          onClick={() => {
            const element = document.getElementById(section)
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        />
      ))}
    </div>
  )
}