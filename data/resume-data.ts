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
    title: "Computer Science Student | Interested in Software Engineering & QA",
    email: "muhmd.hamza0@gmail.com",
    location: "Karachi, Sindh, Pakistan",
    linkedin: "https://www.linkedin.com/in/m-hamza7",
    github: "https://github.com/m-hamza7",
    website: "https://muhmd-hamza-portfolio.vercel.app/",
    photo: "/images/profile.png",
    yearsOfExperience: "Pursuing degree in Computer Science at FAST NUCES",
    teamLeadExperience: "Learning full-stack web development with focus on quality",
  },
  summary: [
    "Passionate about building responsive web applications with a focus on quality and user experience.",
    "Interested in both software engineering and quality assurance—learning full-stack development, testing practices, and building reliable applications.",
  ],
  skills: {
    languages: ["Python", "C", "C++ (OOP)", "JavaScript", "Assembly (8086)"],
    architecture: ["Responsive UI Development", "React.js", "HTML5 / CSS3", "REST APIs", "Flask (Python)"],
    cloud: ["Server-Side Routing", "CRUD Development", "Authentication & Authorization", "Deployment Validation"],
    data: ["MySQL / SQL", "File Handling (C/C++)", "Dataset Labeling & Preprocessing", "Test Data Preparation"],
    quality: [
      "Version Control (Git/GitHub)",
      "UML Modeling",
      "SDLC Understanding",
      "Debugging & Optimization",
      "Manual Testing",
      "Test Case Design",
      "Bug Identification",
      "Cross-Browser Testing",
    ],
  },
  experience: [],
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
    "Manual Testing",
    "Regression Testing",
    "Bug Reporting",
    "Test Case Design",
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
      title: "High-Converting Landing Pages Suite",
      role: "Developer",
      period: "2023 - 2025",
      description:
        "Built 100+ lightweight, fast-loading web pages and mini-sites focused on fast performance and clarity. Applied responsive design and validation across devices to ensure quality.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Google Analytics", "GTM"],
      link: "https://muhmd-hamza-portfolio.vercel.app/",
    },
    {
      title: "Conversion Optimizer Dashboard",
      role: "Developer",
      period: "2024",
      description:
        "Built a dashboard to track page performance and visualize data. Backend APIs created with Flask and MySQL with focus on reliable data flow.",
      technologies: ["Flask", "MySQL", "React", "Chart.js", "REST APIs"],
      link: null,
    },
    {
      title: "LeadCapture Microservice",
      role: "Developer",
      period: "2022 - 2023",
      description:
        "Built a microservice for validating and managing data with focus on reliability and proper error handling.",
      technologies: ["Python", "Flask", "MySQL", "Docker", "NGINX"],
      link: null,
    },
    {
      title: "Personal Portfolio Website",
      role: "Designer & Developer",
      period: "2025",
      description:
        "This portfolio site showcases projects and skills. Built with Next.js to highlight my interests in full-stack development and quality-focused practices.",
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
