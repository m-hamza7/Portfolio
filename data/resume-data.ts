export type WorkExperience = {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export type Language = {
  name: string
  level: string
  certificate?: string
}

export type Publication = {
  title: string
  description: string
  year: string
  link?: string
}

export type Project = {
  title: string
  role?: string
  period?: string
  description: string
  technologies: string[]
  link?: string | null
  repo?: string | null
}

export type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    location: string
    linkedin: string
    github: string | null
    website: string
    photo?: string
    yearsOfExperience: string
    teamLeadExperience: string
  }
  summary: string[]
  skills: {
    languages: string[]
    architecture: string[]
    cloud: string[]
    data: string[]
    quality: string[]
  }
  experience: WorkExperience[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
  projects: Project[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Muhammad Hamza",
    title: "PPC Landing Page Developer & Full-Stack Engineer",
    email: "muhmd.hamza0@gmail.com",
    location: "Karachi, Sindh, Pakistan",
    linkedin: "https://www.linkedin.com/in/m-hamza7",
    github: "https://github.com/m-hamza7",
    website: "https://muhmd-hamza-portfolio.vercel.app/",
    photo: "/images/profile.png",
    yearsOfExperience: "1+ years of development experience",
    teamLeadExperience: "Specialized in PPC landing pages and full-stack development",
  },
  summary: [
    "Designed and developed 100+ high-converting PPC landing pages and mini-websites for clients, focusing on fast performance, enhanced UI/UX, clear CTAs, and optimized user flows to maximize ad ROI.",
  ],
  skills: {
    languages: ["Python", "C", "C++ (OOP)", "JavaScript", "Assembly (8086)"],
    architecture: ["Responsive UI Development", "Landing Page (PPC-focused)", "HTML5 / CSS3", "React.js", "REST APIs"],
    cloud: ["Flask (Python)", "Server-Side Routing", "CRUD Development", "Authentication & Authorization"],
    data: ["MySQL / SQL", "File Handling (C/C++)", "Dataset Labeling & Preprocessing"],
    quality: ["Version Control (Git/GitHub)", "UML Modeling", "SDLC Understanding", "Debugging & Optimization"],
  },
  experience: [
    {
      title: "PPC Landing Page Developer",
      company: "Freelance Projects",
      period: "2025 - Present",
      location: "Remote, Pakistan",
      responsibilities: [
        "Designed and developed 100+ high-converting PPC landing pages and mini-websites for clients",
        "Focused on fast performance, enhanced UI/UX, and clear CTAs to maximize ad ROI",
        "Optimized user flows and conversion funnels for better campaign performance",
        "Implemented responsive designs ensuring compatibility across all devices",
      ],
    },
  ],
  hardSkills: [
    "Python",
    "C",
    "C++ (OOP)",
    "JavaScript",
    "Assembly (8086)",
    "HTML5 / CSS3",
    "React.js",
    "Flask",
    "MySQL / SQL",
    "Git/GitHub",
    "RESTful APIs",
    "CRUD Development",
    "Authentication & Authorization",
  ],
  softSkills: [
    "Problem Solving",
    "Client Communication",
    "UI/UX Design",
    "Performance Optimization",
    "Adaptability",
    "Attention to Detail",
  ],
  projects: [
    {
      title: "PPC Landing Pages Suite",
      role: "Lead Developer",
      period: "2023 - 2025",
      description:
        "Built 100+ lightweight, fast-loading PPC landing pages and mini-sites optimized for conversion. Implemented A/B testing, event tracking, and pixel integrations to improve campaign ROI.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Google Analytics", "GTM"],
      link: "https://muhmd-hamza-portfolio.vercel.app/",
    },
    {
      title: "Conversion Optimizer Dashboard",
      role: "Full-Stack Developer",
      period: "2024",
      description:
        "Internal dashboard to track landing page performance, run A/B experiments, and visualize conversion funnels. Backend APIs built with Flask and MySQL.",
      technologies: ["Flask", "MySQL", "React", "Chart.js", "REST APIs"],
      link: null,
    },
    {
      title: "LeadCapture Microservice",
      role: "Backend Developer",
      period: "2022 - 2023",
      description:
        "Microservice for validating, storing, and forwarding leads to CRMs and advertising platforms. Designed for reliability and easy integration with landing pages.",
      technologies: ["Python", "Flask", "MySQL", "Docker", "NGINX"],
      link: null,
    },
    {
      title: "Personal Portfolio Website",
      role: "Designer & Developer",
      period: "2025",
      description:
        "This portfolio site showcasing projects, resume, and contact forms. Built with Next.js, themed for accessibility and polished visuals, and deployed on Vercel.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      link: "https://muhmd-hamza-portfolio.vercel.app/",
    },
  ],
  languages: [
    {
      name: "English",
      level: "Fluent",
    },
    {
      name: "Urdu",
      level: "Native",
    },
  ],
  publications: [],
}

export default resumeData
