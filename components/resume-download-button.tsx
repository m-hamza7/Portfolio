"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ResumeDownloadButton() {
  const handleOpenPdf = () => {
    window.open("/api/resume-pdf", "_blank")
  }

  return (
    <div className="group relative inline-flex">
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur transition-opacity duration-300 group-hover:opacity-100" />
      <Button
        onClick={handleOpenPdf}
        className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/95 to-accent/95 px-6 py-2.5 font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
          <Download className="h-4 w-4" />
        </span>
        Open PDF
      </Button>
    </div>
  )
}
