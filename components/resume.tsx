"use client"

import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  // keep download href pointed at the public PDF
  const downloadHref = "/Muhammad_Hamza_resume.pdf"
  const viewHref = "/resume/view"

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resumé
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my resume to see detailed experience, projects, and skills.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a href={downloadHref} download className="no-underline">
            <Button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download size={16} />
              Download My Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
