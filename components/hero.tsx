"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Open to internships & entry-level roles
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            <div className="inline-flex items-center gap-4 justify-center md:justify-start">
              <div className="relative w-30 h-30 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-accent/20 shadow-sm hover:shadow-lg transform transition-transform duration-300 hover:scale-200">
                <Image src="/Picture.jpg" alt="Muhammad Hamza profile photo" fill className="object-cover" priority />
              </div>
              <div className="text-left">
                <span className="block text-lg md:text-2xl">Hi, I'm</span>
                <span className="text-accent text-3xl md:text-5xl font-bold">Muhammad Hamza</span>
              </div>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            I'm a Computer Science student passionate about building responsive web applications and understanding
            software quality. I'm learning full-stack development and interested in how teams build and test reliable
            projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View My Work <ArrowRight size={18} />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-border hover:bg-muted w-full sm:w-auto justify-center"
            >
              Get In Touch
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">Projects Built</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">2026</p>
              <p className="text-sm text-muted-foreground">Expected Graduation</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">Core Tools</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">Karachi</p>
              <p className="text-sm text-muted-foreground">Based In</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
