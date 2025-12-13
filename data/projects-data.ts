export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github: string
  demo: string | null
}

const projects: Project[] = [
  {
    id: 1,
    title: "Atomic Chess (Chess variant)",
    description:
      "Interactive web-based version of Atomic Chess with custom game rules, move validation, and explosion mechanics. Built with React featuring clean state management, smooth animations, and basic AI logic for automated opponent moves.",
    image: null,
    tags: ["React", "JavaScript", "AI Game Logic"],
    github: "https://github.com/m-hamza7/Atomic-Chess",
    demo: null,
  },
  {
    id: 2,
    title: "Online Blood Donation Management System",
    description:
      "Complete web-based MIS for managing donors, hospitals, appointments, and blood inventories. Features role-based access, CRUD operations, secure authentication, and clean UI templates built with Flask and MySQL.",
    image: null,
    tags: ["Flask", "Python", "MySQL", "Web Development"],
    github: "https://github.com/m-hamza7/Online-Blood-Donation-System",
    demo: null,
  },
  {
    id: 3,
    title: "CleanAI - AI-Powered Waste Classification",
    description:
      "Intelligent waste-sorting system using deep-learning-based object detection (YOLO). Built a polished landing page showcasing project overview, features, and demo flow. Currently training and refining the detection model for improved accuracy.",
    image: null,
    tags: ["Python", "YOLO", "Flask", "Machine Learning"],
    github: "https://github.com/m-hamza7",
    demo: "https://cleanai-project.vercel.app/",
  },
  {
    id: 4,
    title: "Hangman Game — Assembly Language (8086)",
    description:
      "Fully interactive Hangman game built using low-level assembly instructions with user input handling, string manipulation, and game-state logic.",
    image: null,
    tags: ["Assembly", "8086", "Game Development"],
    github: "https://github.com/m-hamza7/HANGMAN-IN-ASSEMBLY_LANGUAGE",
    demo: null,
  },
  {
    id: 5,
    title: "Library Management System",
    description:
      "Modular library system featuring book inventory, member records, and borrowing/return workflows. Implemented using C++ with object-oriented principles and advanced data structures.",
    image: null,
    tags: ["C++", "OOP", "Data Structures"],
    github: "https://github.com/m-hamza7",
    demo: null,
  },
  {
    id: 6,
    title: "Regex-Based Search Engine",
    description:
      "Lightweight text search tool implemented in Python using regular expressions for pattern matching across documents with efficient parsing and filtering.",
    image: null,
    tags: ["Python", "Regex", "Search"],
    github: "https://github.com/m-hamza7",
    demo: null,
  },
]

export const featuredProjects = [projects[0], projects[1], projects[2]]

export default {
  projects,
  featuredProjects,
}
