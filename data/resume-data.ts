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

export type Education = {
  degree: string
  institution: string
  period: string
  location: string
  details?: string
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
  education: Education[]
  hardSkills: string[]
  softSkills: string[]
  languages: Language[]
  publications: Publication[]
  projects: Project[]
}

const resumeData: ResumeData = {
  personalInfo: {
    name: "Muhammad Hamza",
    title: "Jr. SQA Engineer | TRAFiX LLC",
    email: "muhmd.hamza0@gmail.com",
    location: "Karachi, Sindh, Pakistan",
    linkedin: "https://www.linkedin.com/in/m-hamza7",
    github: "https://github.com/m-hamza7",
    website: "https://muhmd-hamza-portfolio.vercel.app/",
    photo: "/images/profile.png",
    yearsOfExperience: "Jr. SQA Engineer at TRAFiX LLC (since September 2026)",
    teamLeadExperience: "B.S. Computer Science, FAST NUCES (2026)",
  },
  summary: [
    "Jr. SQA Engineer at TRAFiX LLC, focused on delivering reliable software through thoughtful test design, execution, and clear communication with development teams.",
    "Computer Science graduate from FAST NUCES with hands-on experience in web development, automation-friendly testing, and building quality into products from requirements through release.",
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
  experience: [
    {
      title: "Jr. SQA Engineer",
      company: "TRAFiX LLC",
      period: "September 2026 – Present",
      location: "Karachi, Pakistan",
      responsibilities: [
        "Design, execute, and maintain manual and exploratory test cases for web and product workflows.",
        "Log, track, and verify defects while partnering with developers on fixes and regression checks.",
        "Support release validation through structured regression testing and smoke checks before deployment.",
        "Document test results and contribute to improving QA processes and coverage over time.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "National University of Computer and Emerging Sciences (FAST NUCES)",
      period: "2022 – 2026",
      location: "Karachi, Pakistan",
      details: "Coursework and projects spanning software engineering, databases, web development, and software quality assurance.",
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
        "This portfolio site showcases projects, experience, and skills. Built with Next.js to reflect my work in software quality and full-stack development.",
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
