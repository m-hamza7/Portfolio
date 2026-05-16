"use client"

import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  // keep download href pointed at the public PDF
  const downloadHref = "/Muhammad_Hamza_resume.pdf"
  const viewHref = "/resume/view"

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-accent">Resumé</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View my skills, projects, and interests in software engineering and quality assurance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={viewHref} className="no-underline">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <Button variant="outline" className="relative inline-flex items-center gap-2 border-border hover:bg-muted transition-all">
                <Eye size={16} />
                View Resume
              </Button>
            </div>
          </a>
          <a href={downloadHref} download className="no-underline">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <Button className="relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all font-semibold">
                <Download size={16} />
                Download My Resume
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
