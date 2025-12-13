import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// ✅ WhatsApp widget
import { WhatsAppWidget } from "react-whatsapp-widget"
import "react-whatsapp-widget/dist/index.css"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "opeyemitimileyin102@example.com",
    href: "mailto:opeyemitimileyin102@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 9158 547 128",
    href: "tel:+2349158547128",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sango Ota, Nigeria",
    href: "#",
  },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  {
    icon: Twitter,
    href: "https://x.com/OpeyemiTim95975",
    label: "Twitter",
    color: "hover:text-sky-400",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/operatech_45",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: Github,
    href: "https://github.com/Timileyin95",
    label: "GitHub",
    color: "hover:text-gray-400",
  },
]

export const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // ✅ Ad Script Injection (safe + stable)
  useEffect(() => {
    const adContainer = document.getElementById("ad-container")
    if (!adContainer) return

    const script1 = document.createElement("script")
    script1.type = "text/javascript"
    script1.innerHTML = `
      atOptions = {
        'key': '4f56bea863fc1976f8053b2b4578c0ea',
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };
    `

    const script2 = document.createElement("script")
    script2.type = "text/javascript"
    script2.src =
      "https://www.highperformanceformat.com/4f56bea863fc1976f8053b2b4578c0ea/invoke.js"
    script2.async = true

    adContainer.appendChild(script1)
    adContainer.appendChild(script2)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, subject, message } = formData

    const whatsappUrl =
      "https://wa.me/2349158547128?text=" +
      encodeURIComponent(
        `*New Contact Message*\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
      )

    window.open(whatsappUrl, "_blank")

    toast.success("Redirecting to WhatsApp", {
      description: "Your message is ready to send 🚀",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen bg-gradient-background p-8 py-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmaJ6XOU3NtKbDuOYG_GHzWb75nx3CMgc6Q&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* WhatsApp Floating Widget */}
      <WhatsAppWidget
        phoneNumber="2349158547128"
        textReplyTime="I reply fast!"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        >
          <Send className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-section-title mb-4">Let’s Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got an idea? A vision? A wild plan? Let’s talk.
          </p>
        </motion.div>

        {/* Ad */}
        <div className="bg-card p-4 rounded-2xl shadow-card-custom border border-border flex justify-center mb-16">
          <div id="ad-container" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card-custom border border-border">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <Textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" size="lg" className="w-full">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50"
                  >
                    <Icon className="text-accent" />
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="bg-card p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold mb-6">Follow me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-muted/30 ${social.color}`}
                    >
                      <Icon />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-accent/20 bg-gradient-accent/10">
              <blockquote className="italic text-center">
                “Design is how it works.”
              </blockquote>
              <p className="text-center mt-4 text-accent">— Opera Tech</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
