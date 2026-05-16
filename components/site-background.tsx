"use client"

import { Code2, Layers3, Palette, Rocket, Sparkles, Star, Target, Workflow } from "lucide-react"

const floatingIcons = [
  { Icon: Sparkles, className: "top-20 left-[6%] text-primary/25", size: 20, delay: "0s", duration: 11 },
  { Icon: Code2, className: "top-36 right-[8%] text-accent/25", size: 22, delay: "1.2s", duration: 13 },
  { Icon: Rocket, className: "top-1/3 left-[18%] text-fuchsia-400/25", size: 24, delay: "2.1s", duration: 15 },
  { Icon: Target, className: "top-[52%] right-[16%] text-emerald-400/25", size: 21, delay: "0.6s", duration: 12 },
  { Icon: Palette, className: "bottom-28 left-[12%] text-orange-400/25", size: 22, delay: "1.8s", duration: 14 },
  { Icon: Workflow, className: "bottom-36 right-[10%] text-cyan-300/25", size: 23, delay: "2.7s", duration: 16 },
  { Icon: Layers3, className: "top-[68%] left-[28%] text-primary/20", size: 24, delay: "3.2s", duration: 17 },
  { Icon: Star, className: "top-[16%] right-[28%] text-yellow-300/25", size: 18, delay: "4s", duration: 10 },
]

export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="animated-bg" />
      <div className="particles" />
      <div className="geometric-bg" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />

      {floatingIcons.map(({ Icon, className, size, delay, duration }, index) => (
        <div
          key={index}
          className={`absolute ${className} float-animate opacity-70`}
          style={{ animationDuration: `${duration}s`, animationDelay: delay }}
        >
          <div className="rounded-full border border-white/10 bg-black/10 p-3 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20">
            <Icon size={size} strokeWidth={1.8} />
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  )
}
