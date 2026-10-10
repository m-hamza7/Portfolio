import type { LucideIcon } from "lucide-react"
import { Briefcase, GraduationCap } from "lucide-react"

export type JourneyMilestone = {
  id: string
  kind: "education" | "professional"
  title: string
  organization: string
  period: string
  location: string
  description: string
  highlights: string[]
  status: "completed" | "current"
  icon: LucideIcon
  accent: string
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "edu-fast",
    kind: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "FAST NUCES",
    period: "2022 – 2026",
    location: "Karachi, Pakistan",
    description:
      "Built a strong foundation in software engineering, algorithms, and systems while exploring web development, databases, and quality assurance through coursework and projects.",
    highlights: ["Software Engineering & QA focus", "Full-stack and systems projects", "Graduation: 2026"],
    status: "completed",
    icon: GraduationCap,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "work-trafix",
    kind: "professional",
    title: "Jr. SQA Engineer",
    organization: "TRAFiX LLC",
    period: "September 2026 – Present",
    location: "Karachi, Pakistan",
    description:
      "Contributing to product quality through structured testing, clear defect reporting, and close collaboration with engineering teams on reliable releases.",
    highlights: [
      "Manual & exploratory testing",
      "Test case design & execution",
      "Regression & release validation",
      "Cross-functional QA collaboration",
    ],
    status: "current",
    icon: Briefcase,
    accent: "from-blue-950 to-cyan-500",
  },
]
