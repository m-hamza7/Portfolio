import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Globe2,
  BrainCircuit,
  Swords,
  Droplets,
  Cpu,
  LibraryBig,
  Search,
  Layers3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Description } from "@radix-ui/react-toast"

const floatingOrbs = [
  { className: "top-20 left-10 w-72 h-72 bg-primary/20", delay: "0s" },
  { className: "bottom-24 right-10 w-80 h-80 bg-accent/20", delay: "1.5s" },
  { className: "top-1/2 right-1/4 w-40 h-40 bg-fuchsia-500/20", delay: "3s" },
]

const getProjectIcon = (title: string) => {
  if (title.includes("Web Pages")) return Globe2
  if (title.includes("CleanAI")) return BrainCircuit
  if (title.includes("Atomic Chess")) return Swords
  if (title.includes("Blood Donation")) return Droplets
  if (title.includes("miniC")) return Cpu
  if (title.includes("Library")) return LibraryBig
  if (title.includes("Search")) return Search
  return Layers3
}

export default function Projects() {
  const projects = [
    {
      title: "100+ Web Pages & Mini Sites",
      description:
        "Built multiple responsive web pages and mini sites with focus on fast performance, clean UI, and working well across different devices and browsers.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Conversion Optimization"],
      featured: true,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "CleanAI - AI-Powered Waste Classification",
      description:
        "A waste-sorting system using object detection (YOLO). Built the frontend with a polished landing page and interactive prototype to demonstrate how the system works.",
      tech: ["Python", "YOLO", "Flask", "React", "Machine Learning"],
      liveLink: "https://cleanai-project.vercel.app/",
      github: "https://github.com/m-hamza7",
      featured: true,
      gradient: "from-green-600 to-emerald-600",
    },


    {
      title: 'Playwright E2E Test Automation for Blood Donation System',
      description: "Built a Playwright-based SQA test suite for a Flask blood donation application, covering 40 end-to-end scenarios across positive and negative flows such as login, registration, search, donor, hospital, and admin workflows, with Allure reporting and screenshot capture for structured test execution.",
      tech: ['Playwright', 'JavaScript', 'Allure Reporting', 'E2E Testing', 'Test Automation'],
      github: 'https://github.com/m-hamza7/Playwright-E2E-Test-Automation',
      featured: true,
      gradient: 'from-red-600 to-pink-600', 
    },
    {
      title: "Atomic Chess - AI-Based Game",
      description:
        "Interactive web-based chess game with custom rules, move validation, and AI opponent. Built with React focusing on clean code and smooth gameplay.",
      tech: ["React", "JavaScript", "AI Logic", "Game Development"],
      github: "https://github.com/m-hamza7/Atomic-Chess",
      gradient: "from-purple-600 to-pink-600",
    },
    {
        title: "Online Blood Donation System",
        description:
          "A web app for managing blood donation records including donors, hospitals, and appointments. Built with role-based access, user authentication, and focus on reliable data management.",
        tech: ["Flask", "Python", "MySQL", "Authentication", "UI/UX"],
        github: "https://github.com/m-hamza7/Online-Blood-Donation-System",
        gradient: "from-red-600 to-pink-600",
    },
    {
        title: "miniC-Compiler",
        description:
          "A compiler front-end for the MiniC language built with Python and Flask. The app demonstrates compiler phases with interactive visualizations and proper error handling.",
        tech: ["Python", "PLY", "Flask", "UI/UX"],
        github: "https://github.com/m-hamza7/miniC-compiler",
        gradient: "from-orange-600 to-yellow-600",
    },
    {
        title: "Library Management System",
        description:
          "Modular library system featuring book inventory, member records, and borrowing/return workflows using OOP principles and file handling in C++.",
        tech: ["C++", "OOP", "Data Structures", "File Handling"],
        github: "#",
        gradient: "from-indigo-600 to-blue-600",
    },
    {
        title: "Regex-Based Search Engine",
        description:
          "Lightweight text search tool using regular expressions to match patterns across documents with efficient parsing and filtering algorithms.",
        tech: ["Python", "Regex", "Text Processing", "Algorithms"],
        github: "#",
        gradient: "from-violet-600 to-purple-600",
    },
    ]

  return (
    <section id="projects" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.08),transparent_28%)]" />
        {floatingOrbs.map((orb, index) => (
          <div
            key={index}
            className={`absolute rounded-full blur-3xl animate-pulse ${orb.className}`}
            style={{ animation: `float ${10 + index * 2}s ease-in-out infinite ${orb.delay}` }}
          />
        ))}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built to learn full-stack development, problem-solving, and writing quality code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative card-hover ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-px bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} />
              
              <div className="relative p-6 md:p-8 bg-card border border-border rounded-xl backdrop-blur-sm overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                <div className="mb-4 flex items-start justify-between">
                  <div className="space-y-3">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-accent mb-3 border border-accent/30">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Featured
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg shadow-black/10`}>
                        {(() => {
                          const Icon = getProjectIcon(project.title)
                          return <Icon size={20} />
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
                          {project.title}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={24} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-tag text-xs"
                      style={{
                        animation: `slideInUp 0.4s ease-out ${i * 0.05}s both`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="group/btn">
                      <Button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl group-hover/btn:shadow-primary/50 transition-all">
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/btn">
                      <Button variant="outline" className="border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
