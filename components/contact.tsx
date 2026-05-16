"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactProps {
  scrollToSection?: (sectionId: string) => void
}

export default function Contact({ scrollToSection }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:muhmd.hamza0@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setFormData({ name: "", email: "", subject: "", message: "" })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhmd.hamza0@gmail.com",
      href: "mailto:muhmd.hamza0@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 348-388-3336",
      href: "tel:+923483883336",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Sindh, Pakistan",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-background">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
              <div className="absolute top-1/4 -right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 -left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
            </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-accent"> Connect </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hi, feel free to reach out. I'm always open to
            exciting opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.href}
                className="group relative p-6 bg-card border border-border rounded-lg text-center transition-all duration-300 overflow-hidden"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                                {/* Gradient border effect on hover */}
                                <div className={`absolute -inset-px bg-gradient-to-r ${
                                  index === 0 ? "from-blue-500 to-cyan-600" :
                                  index === 1 ? "from-purple-500 to-pink-600" :
                                  "from-orange-500 to-red-600"
                                } rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} style={{ zIndex: -1 }} />
                
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-all group-hover:scale-110">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                <p className="text-muted-foreground text-sm hover:text-accent transition-colors">{info.value}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto p-8 bg-card border border-border rounded-lg backdrop-blur-sm relative" style={{ animation: "slideInUp 0.6s ease-out 0.3s both" }}>
          {/* Gradient border effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-lg opacity-20 blur" style={{ zIndex: -1 }} />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Project inquiry, collaboration, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50 inline-flex items-center justify-center gap-2 font-semibold transition-all"
            >
              <Send size={18} />
              Send Message
            </Button>

            {submitted && (
              <p className="text-center text-accent text-sm animate-pulse">✓ Message sent! Opening your email client...</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
