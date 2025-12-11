import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          glow: "hsl(var(--accent-glow))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom portfolio colors
        "book-page": "hsl(var(--book-page))",
        "book-shadow": "hsl(var(--book-shadow))",
        "timeline-line": "hsl(var(--timeline-line))",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-background": "var(--gradient-background)",
        "gradient-card": "var(--gradient-card)",
      },
      boxShadow: {
        "book": "var(--shadow-book)",
        "card-custom": "var(--shadow-card)",
        "glow-accent": "var(--glow-accent)",
        "glow-primary": "var(--glow-primary)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "elastic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "slide": {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "reveal": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.8) translateY(30px)"
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1) translateY(0)"
          }
        },
        "typewriter": {
          "0%": { width: "0" },
          "50%": { width: "0" },
          "100%": { width: "100%" }
        },
        "blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" }
        },
        "page-flip": {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(-180deg)" }
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "var(--glow-accent)" },
          "50%": { boxShadow: "var(--glow-accent), 0 0 40px hsl(var(--accent) / 0.5)" }
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(180deg)", opacity: "0" }
        },
        "hologram-flicker": {
          "0%, 100%": { opacity: "1", filter: "hue-rotate(0deg)" },
          "25%": { opacity: "0.8", filter: "hue-rotate(90deg)" },
          "50%": { opacity: "1", filter: "hue-rotate(180deg)" },
          "75%": { opacity: "0.9", filter: "hue-rotate(270deg)" }
        },
        "cyber-pulse": {
          "0%": { 
            boxShadow: "0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent)), 0 0 15px hsl(var(--accent))"
          },
          "50%": { 
            boxShadow: "0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent)), 0 0 30px hsl(var(--accent)), 0 0 40px hsl(var(--accent))"
          },
          "100%": { 
            boxShadow: "0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent)), 0 0 15px hsl(var(--accent))"
          }
        },
        "book-3d-flip": {
          "0%": { 
            transform: "perspective(1200px) rotateY(0deg) rotateX(0deg)",
            boxShadow: "var(--shadow-book)"
          },
          "50%": { 
            transform: "perspective(1200px) rotateY(-90deg) rotateX(5deg)",
            boxShadow: "20px 0 40px hsl(var(--book-shadow) / 0.8)"
          },
          "100%": { 
            transform: "perspective(1200px) rotateY(-180deg) rotateX(0deg)",
            boxShadow: "var(--shadow-book)"
          }
        },
        "particle-explosion": {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1.5) rotate(180deg)", opacity: "0.8" },
          "100%": { transform: "scale(3) rotate(360deg)", opacity: "0" }
        },
        "data-stream": {
          "0%": { transform: "translateX(-100%) skewX(45deg)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100vw) skewX(45deg)", opacity: "0" }
        },
        "tech-glitch": {
          "0%, 100%": { transform: "translateX(0)", filter: "hue-rotate(0deg)" },
          "10%": { transform: "translateX(-2px) skew(-1deg)", filter: "hue-rotate(90deg)" },
          "20%": { transform: "translateX(2px) skew(1deg)", filter: "hue-rotate(180deg)" },
          "30%": { transform: "translateX(-1px) skew(-0.5deg)", filter: "hue-rotate(270deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "slide": "slide 8s linear infinite",
        "reveal": "reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "typewriter": "typewriter 3s steps(40) forwards",
        "blink": "blink 1s infinite",
        "page-flip": "page-flip 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 3s linear infinite",
        "hologram-flicker": "hologram-flicker 2s ease-in-out infinite",
        "cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
        "book-3d-flip": "book-3d-flip 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "particle-explosion": "particle-explosion 1s ease-out forwards",
        "data-stream": "data-stream 2s ease-in-out infinite",
        "tech-glitch": "tech-glitch 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
