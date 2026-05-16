import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "100+ Web Pages & Mini Sites",
      description:
        "Built multiple responsive web pages and mini sites with focus on fast performance, clean UI, and working well across different devices and browsers.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Conversion Optimization"],
      featured: true,
    },
    {
      title: "CleanAI - AI-Powered Waste Classification",
      description:
        "A waste-sorting system using object detection (YOLO). Built the frontend with a polished landing page and interactive prototype to demonstrate how the system works.",
      tech: ["Python", "YOLO", "Flask", "React", "Machine Learning"],
      liveLink: "https://cleanai-project.vercel.app/",
      github: "https://github.com/m-hamza7",
      featured: true,
    },
    {
      title: "Atomic Chess - AI-Based Game",
      description:
        "Interactive web-based chess game with custom rules, move validation, and AI opponent. Built with React focusing on clean code and smooth gameplay.",
      tech: ["React", "JavaScript", "AI Logic", "Game Development"],
      github: "https://github.com/m-hamza7/Atomic-Chess",
    },
    {
      title: "Online Blood Donation System",
      description:
        "A web app for managing blood donation records including donors, hospitals, and appointments. Built with role-based access, user authentication, and focus on reliable data management.",
      tech: ["Flask", "Python", "MySQL", "Authentication", "UI/UX"],
      github: "https://github.com/m-hamza7/Online-Blood-Donation-System",
    },

    {
      title: "miniC-Compiler",
      description:
        "A compiler front-end for the MiniC language built with Python and Flask. The app demonstrates compiler phases with interactive visualizations and proper error handling.",
      tech: ["Python","PLY","Flask", "UI/UX"],
      github: "https://github.com/m-hamza7/miniC-compiler",
    },
    {
      title: "Library Management System",
      description:
        "Modular library system featuring book inventory, member records, and borrowing/return workflows using OOP principles and file handling in C++.",
      tech: ["C++", "OOP", "Data Structures", "File Handling"],
      github: "#",
    },
    {
      title: "Regex-Based Search Engine",
      description:
        "Lightweight text search tool using regular expressions to match patterns across documents with efficient parsing and filtering algorithms.",
      tech: ["Python", "Regex", "Text Processing", "Algorithms"],
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built to learn full-stack development, problem-solving, and writing quality code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 bg-background border border-border rounded-lg hover:border-accent/50 transition-all duration-300 ${project.featured ? "md:col-span-2" : ""}`}
            >
              <div className="mb-4">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-3">
                    ⭐ Featured
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-border hover:bg-muted bg-transparent">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-border hover:bg-muted bg-transparent">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
