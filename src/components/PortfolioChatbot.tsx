import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// Portfolio Knowledge
const portfolioKnowledge = {
  skills: ["React", "TypeScript", "JavaScript", "Node.js", "Python", "Tailwind CSS", "Next.js", "Supabase", "Git","Java","C program","HTML/CSS","MySQL","WordPress"],
  projects: [
    { name: "Digital Portfolio", description: "An interactive book-style portfolio with stunning animations and tech effects" },
    { name: "E-commerce Platform", description: "Full-stack online shopping platform with payment integration" },
    { name: "Memorial Website", description: "Collaborative project management tool with real-time updates" },
    { name: "Chat-Bot/Ai Design", description: "Artificial Intelligence like Metal AI" }
  ],
  experience: [
    { role: "Frontend Developer", company: "Tech Solutions Inc.", duration: "2025-Present" },
    { role: "Full-Stack Developer", company: "Innovation Center", duration: "2025-Present" }
  ],
  about: "OperaTech is a passionate full-stack developer with expertise in modern web technologies. Love creating immersive digital experiences.",
  contact: { email: "opeyemitimileyin102@gmail.com", github: "https://github.com/Timileyin95", linkedin: "linkedin.com/in/opeyemi_timiley" }
}

// Response generator
const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase()
  if (lowerQuery.includes("projects")) return portfolioKnowledge.projects.map(p => `${p.name}: ${p.description}`).join("\n")
  if (lowerQuery.includes("skills")) return portfolioKnowledge.skills.join(", ")
  if (lowerQuery.includes("experience")) return portfolioKnowledge.experience.map(e => `${e.role} at ${e.company} (${e.duration})`).join("\n")
  if (lowerQuery.includes("contact") || lowerQuery.includes("hire")) return `Email: ${portfolioKnowledge.contact.email}\nGitHub: ${portfolioKnowledge.contact.github}\nLinkedIn: ${portfolioKnowledge.contact.linkedin}`
  if (lowerQuery.includes("about")) return portfolioKnowledge.about
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) return "Hello! I'm OperaTech's AI assistant. Ask me about skills, projects, experience, or contact info."
  return "I can help you learn about this developer's skills, projects, experience, and contact info."
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition()
      recognition.lang = "en-US"
      recognition.interimResults = false
      recognition.continuous = false
      recognition.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript
        sendMessage(speechResult)
        setIsListening(false)
      }
      recognition.onerror = () => setIsListening(false)
      recognitionRef.current = recognition
    }
  }, [])

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })

  const speakAndType = async (text: string) => {
    setIsTyping(true)
    const tempId = "bot-temp-" + Date.now()
    setMessages(prev => [...prev, { id: tempId, text: "", sender: "bot", timestamp: new Date() }])

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "en-US"

      // Female voice example
      const voices = window.speechSynthesis.getVoices()
      const femaleVoice = voices.find(v => v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("zira"))
      if (femaleVoice) utterance.voice = femaleVoice

      let charIndex = 0
      utterance.onstart = () => {
        const typeInterval = setInterval(() => {
          if (charIndex < text.length) {
            setMessages(prev => {
              const newMessages = [...prev]
              const idx = newMessages.findIndex(m => m.id === tempId)
              if (idx !== -1) newMessages[idx].text += text[charIndex]
              return newMessages
            })
            charIndex++
            scrollToBottom()
          } else {
            clearInterval(typeInterval)
          }
        }, 50)
      }

      utterance.onend = () => setIsTyping(false)
      window.speechSynthesis.speak(utterance)
    } else {
      setMessages(prev => prev.map(m => m.id === tempId ? { ...m, text } : m))
      setIsTyping(false)
    }
  }

  const sendMessage = (msg?: string) => {
    const messageText = msg || inputValue
    if (!messageText.trim()) return

    const userMessage: Message = { id: Date.now().toString(), text: messageText, sender: "user", timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    scrollToBottom()

    const botResponse = generateResponse(messageText)
    speakAndType(botResponse)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === "Enter") sendMessage() }
  const startListening = () => { if (recognitionRef.current) { setIsListening(true); recognitionRef.current.start() } }

  const handleToggle = () => {
    if (isOpen) {
      // Stop any ongoing speech immediately
      window.speechSynthesis.cancel()
      // Clear chat
      setMessages([])
    } else {
      // Opening: start welcome message
      speakAndType(
        "Hi! Welcome to OperaTech's portfolio. I'm here to help you learn about and explore projects, skills, and experience. Ask me anything!"
      )
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button onClick={handleToggle} className="fixed bottom-6 right-0 left-5 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all duration-300">
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-96 h-[450px] bg-card/95 backdrop-blur-sm border-accent/20 shadow-2xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-accent/20 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center gap-3">
              <Bot className="h-5 w-5 text-accent" />
              <div>
                <h3 className="font-semibold text-sm">OperaTech Assistant</h3>
                <p className="text-xs text-muted-foreground">{isListening ? "Listening..." : isTyping ? "Typing..." : "Ask me anything"}</p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map(m => (
                  <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg whitespace-pre-wrap ${m.sender === "user" ? "bg-gradient-to-r from-primary to-accent text-white" : "bg-muted/50 text-foreground border border-accent/20"}`}>
                      <div className="flex items-start gap-2">
                        {m.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 text-accent" />}
                        {m.sender === "user" && <User className="h-4 w-4 mt-0.5 text-white" />}
                        <span className="text-sm">{m.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-accent/20 flex gap-2">
              <Input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask about skills, projects, experience..." className="flex-1" disabled={isTyping}/>
              <Button onClick={() => sendMessage()} disabled={!inputValue.trim() || isTyping} size="icon"><Send className="h-4 w-4" /></Button>
              <Button onClick={startListening} size="icon" className={`${isListening ? "animate-pulse" : ""}`}><Mic className="h-4 w-4" /></Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
