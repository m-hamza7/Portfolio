"use client"

import { useEffect, useState } from "react"
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
    { id: "learning", label: "LEARNING" },
    { id: "contact", label: "CONTACT" },
    { id: "resume", label: "RESUME" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" style={{ transformOrigin: "0%", transform: scrolled ? "scaleX(1)" : "scaleX(0)" }} />
      <header className="fixed top-4 left-1/2 z-50 hidden w-[calc(100vw-2rem)] max-w-7xl -translate-x-1/2 md:block lg:top-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
          <nav className={`relative flex items-center justify-between rounded-full border border-white/10 px-6 py-4 transition-all duration-700 ${scrolled ? "glass" : "glass"}`}>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold gradient-text flex-shrink-0">Hamza</div>
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <span className="text-[10px] font-medium tracking-[0.2em] text-emerald-300 uppercase">Available</span>
              </div>
            </div>

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => (item.id === "resume" ? router.push("/resume/view") : scrollToSection(item.id))}
                  className={`relative group rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    activeSection === item.id ? "text-white" : "text-gray-400"
                  } hover:text-white`}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 rounded-full px-5 py-2 text-sm font-semibold text-white nav-cta hover:scale-[1.02]"
            >
              Get In Touch
            </Button>
          </nav>
        </div>
      </header>

      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:hidden">
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
          <nav className="relative flex items-center justify-between rounded-full glass px-5 py-3">
            <div className="text-xl font-bold gradient-text flex-shrink-0">Hamza</div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="z-50 rounded-lg p-2 text-white transition-colors hover:bg-white/10"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="mt-3 space-y-2 rounded-2xl glass p-3">
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
                  className="block w-full rounded-xl border border-transparent px-4 py-3 text-left text-sm font-medium tracking-wide text-gray-300 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("contact")
                  setMobileMenuOpen(false)
                }}
                className="w-full rounded-xl nav-cta text-sm font-semibold text-white"
              >
                Get In Touch
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
