import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
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
              
              <div className="relative p-6 md:p-8 bg-card border border-border rounded-xl backdrop-blur-sm">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-accent mb-3 border border-accent/30">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Featured
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
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
