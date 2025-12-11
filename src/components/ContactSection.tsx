import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// ✅ WhatsApp widget
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "opeyemitimileyin102@example.com",
    href: "mailto:opeyemitimileyin102@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 9158-547-128",
    href: "tel:+2349158547128"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sango Ota, Nigeria, NG",
    href: "#"
  }
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: "https://x.com/OpeyemiTim95975?t=lU-ikJX-nE-CARfn5BjRKg&s=09", label: "Twitter", color: "hover:text-sky-400" },
  { icon: Instagram, href: "https://www.instagram.com/operatech_45?igsh=MXE3anZ6b2ZvNWFlNA==", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Github, href: "https://github.com/Timileyin95", label: "GitHub", color: "hover:text-gray-400" },
];

export const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // ✅ WhatsApp redirect
    const whatsappUrl =
      "https://wa.me/2349158547128?text=" +
      encodeURIComponent(
        `*New Contact Message* 
Name: ${name} 
Email: ${email} 
Subject: ${subject} 
Message: ${message}`
      );

    // open WhatsApp
    window.open(whatsappUrl, "_blank");

    // toast notification
    toast.success("Redirecting to WhatsApp...", {
      description: "Your message will be sent there",
    });

    // reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.section
      ref={ref}
      className="min-h-screen bg-gradient-background p-8 py-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ WhatsApp Widget with Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmaJ6XOU3NtKbDuOYG_GHzWb75nx3CMgc6Q&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15, // light background effect
        }}
      ></div>
      <WhatsAppWidget phoneNumber="2349158547128" textReplyTime="I reply fast!" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Send className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-section-title mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's start a conversation about your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card p-8 rounded-2xl shadow-card-custom border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-accent transition-colors"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-accent transition-colors"
                  />
                </div>

                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-accent transition-colors"
                />

                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-accent transition-colors resize-none"
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow-accent transition-all duration-300 group"
                  size="lg"
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Information */}
            <div className="bg-card p-8 rounded-2xl shadow-card-custom border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group cursor-pointer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card p-8 rounded-2xl shadow-card-custom border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Follow me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group ${social.color}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 transition-colors" />
                      <span className="font-medium text-sm">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              className="bg-gradient-accent/10 p-8 rounded-2xl border border-accent/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <blockquote className="text-lg italic text-center text-foreground">
                "Design is not just what it looks like and feels like. Design is how it works."
              </blockquote>
              <p className="text-accent text-center mt-4 font-medium">- Opera Tech</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
