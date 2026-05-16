"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
    { id: "resume", label: "RESUME" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
        {/* Glass-effect gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-accent/0" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">Hamza</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => (item.id === "resume" ? router.push("/resume/view") : scrollToSection(item.id))}
                className={`nav-link relative text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:w-0 after:hover:w-full after:transition-all after:duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
                        <div className="relative group">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <Button
              onClick={() => scrollToSection("contact")}
                className="relative bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all font-semibold"
            >
              Get In Touch
            </Button>
                      </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-all hover:shadow-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4 bg-gradient-to-b from-background to-background/50 rounded-b-lg backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === "resume") {
                    router.push("/resume/view")
                    setMobileMenuOpen(false)
                    return
                  }
                  scrollToSection(item.id)
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-3 rounded-lg transition-all hover:bg-primary/10 hover:text-primary text-muted-foreground border border-transparent hover:border-primary/50"
              >
                {item.label}
              </button>
            ))}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur mx-4" />
              <Button
                onClick={() => {
                  scrollToSection("contact")
                  setMobileMenuOpen(false)
                }}
                className="relative w-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-primary/50 transition-all font-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
