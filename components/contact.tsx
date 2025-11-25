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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-accent bg-clip-text text-transparent">Connect</span>
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
                className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-card/80 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
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
        <div className="max-w-2xl mx-auto p-8 bg-card border border-border rounded-lg">
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
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
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
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
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
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
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
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </Button>

            {submitted && (
              <p className="text-center text-accent text-sm">✓ Message sent! Opening your email client...</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
