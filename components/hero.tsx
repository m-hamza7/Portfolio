"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

const FloatingParticle = ({ index }: { index: number }) => {
  const left = (index * 17) % 100
  const top = (index * 29) % 100
  const duration = 10 + (index % 6) * 1.5
  const delay = index * 0.2

  return (
    <div
      className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-50"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
      }}
    />
  )
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg" />
        <div
          className="absolute top-40 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-pulse"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-40 right-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-40 animate-pulse"
          style={{ animation: "float 8s ease-in-out infinite 2s" }}
        />
        {[...Array(12)].map((_, i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-block slide-in-down">
            <span className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-transform group hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent pulse-dot"></span>
              Open for opportunities
            </span>
          </div>

          {/* Main heading with animated gradient */}
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary opacity-30 rounded-full blur-xl group-hover:opacity-50 transition-opacity" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-primary/30 glow-animate">
                  <Image
                    src="/Picture.jpg"
                    alt="Muhammad Hamza"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              <div className="text-center lg:text-left flex-1">
                <p className="text-lg md:text-xl text-muted-foreground mb-2 float-animate">Welcome, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                  <span className="gradient-accent">Muhammad Hamza</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed slide-in-up">
            I'm a Computer Science student passionate about building responsive web applications and understanding
            software quality. I'm learning full-stack development and interested in how teams build and test reliable
            projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              onClick={() => scrollToSection("projects")}
              className="rounded-full nav-cta text-white inline-flex items-center gap-2 px-8 py-6 text-lg group transition-all hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="rounded-full glass px-8 py-6 text-lg transition-all hover:border-primary/40 hover:bg-white/5"
            >
              <Sparkles size={20} className="mr-2" />
              Let's Connect
            </Button>
          </div>

          {/* Stats with animations */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Projects Built and Tested", delay: 0 },
              { value: "2026", label: "Expected Graduation", delay: 1 },
              { value: "50+", label: "Skills Developed", delay: 2 },
              { value: "100%", label: "Commitment", delay: 3 },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center glass rounded-2xl p-5 card-hover"
                style={{
                  animation: `slideInUp 0.6s ease-out ${stat.delay * 0.1}s both`,
                }}
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
