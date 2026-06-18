"use client"

import { Brain, Code, Database, Zap, Cpu, Package, Github, CheckCircle, Circle } from "lucide-react"

const phases = [
  {
    id: 1,
    title: "Build the Foundations",
    description: "Python fundamentals, mathematics, and problem-solving",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    topics: ["Python Basics", "Data Structures", "OOP", "Linear Algebra", "Probability & Statistics"],
    status: "completed",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Hands-on data analysis, feature engineering, and ML algorithms",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Classification", "Regression"],
    status: "in-progress",
  },
  {
    id: 3,
    title: "Deep Learning",
    description: "Neural networks, CNNs, RNNs, and Transformers",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    topics: ["Neural Networks", "CNNs", "RNNs & LSTMs", "Transformers", "PyTorch", "TensorFlow"],
    status: "upcoming",
  },
  {
    id: 4,
    title: "Generative AI & LLMs",
    description: "Large Language Models, RAG, and prompt engineering",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    topics: ["LLMs", "Prompt Engineering", "RAG", "Fine-tuning", "Hugging Face", "LangChain"],
    status: "upcoming",
  },
  {
    id: 5,
    title: "Software Engineering Skills",
    description: "Production-ready development practices and tools",
    icon: Cpu,
    color: "from-indigo-500 to-blue-500",
    topics: ["Git & GitHub", "REST APIs", "Docker", "Databases", "Cloud Basics"],
    status: "upcoming",
  },
  {
    id: 6,
    title: "MLOps & Deployment",
    description: "Model deployment, monitoring, and production pipelines",
    icon: Package,
    color: "from-teal-500 to-green-500",
    topics: ["Model Deployment", "CI/CD", "Docker & Kubernetes", "Vector Databases", "Monitoring"],
    status: "upcoming",
  },
]

const getStatusIcon = (status: string) => {
  if (status === "completed") return <CheckCircle className="text-green-500" size={20} />
  if (status === "in-progress") return <Zap className="text-yellow-500" size={20} />
  return <Circle className="text-gray-400" size={20} />
}

const getStatusBadge = (status: string) => {
  if (status === "completed")
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30">
        <CheckCircle size={14} />
        Completed
      </span>
    )
  if (status === "in-progress")
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30">
        <Zap size={14} />
        In Progress
      </span>
    )
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-500/20 text-gray-600 dark:text-gray-400 border border-gray-500/30">
      <Circle size={14} />
      Upcoming
    </span>
  )
}

export default function LearningJourney() {
  return (
    <section id="learning" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 slide-in-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold uppercase tracking-widest text-accent mb-6">
            <Brain size={16} />
            AI Engineering Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-accent">Learning Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            A comprehensive journey from Python fundamentals to production-ready AI systems
          </p>
          <p className="text-sm text-accent">
            Currently: <strong>Data Science Basics Complete</strong> → Starting Machine Learning Phase
          </p>
        </div>

        
        <div className="mb-12 slide-in-up" style={{ animation: "slideInUp 0.6s ease-out 0.2s both" }}>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <a
              href="https://github.com/m-hamza7/AI-Engineering-Learning-DUMP"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 bg-card border border-border rounded-lg backdrop-blur-sm flex items-center justify-between hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Github className="text-accent" size={24} />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">AI Engineering Repository</h3>
                  <p className="text-sm text-muted-foreground">All project code, notebooks, and learning dumps</p>
                </div>
              </div>
              <div className="text-2xl">→</div>
            </a>
          </div>
        </div>

        {/* Learning Phases Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <div
                key={phase.id}
                className="group relative"
                style={{
                  animation: `slideInUp 0.6s ease-out ${(index + 1) * 0.1}s both`,
                }}
              >
                {/* Gradient border on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${phase.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur group-hover:blur-lg`} />

                <div className="relative p-6 bg-card border border-border rounded-xl backdrop-blur-sm h-full hover:border-accent/50 transition-colors">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">{getStatusBadge(phase.status)}</div>

                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4 pr-32">
                    <div className={`p-3 bg-gradient-to-br ${phase.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="skill-tag text-xs"
                          style={{
                            animation: `slideInUp 0.4s ease-out ${i * 0.05}s both`,
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline indicator */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Phase {phase.id} of 6</span>
                    {getStatusIcon(phase.status)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Data Science Repository Structure */}
        <div className="mt-16 slide-in-up" style={{ animation: "slideInUp 0.6s ease-out 0.8s both" }}>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative p-8 bg-card border border-border rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Database className="text-accent" />
                Data Science Foundations Repository
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks", "Statistics"].map((folder, i) => (
                  <div key={i} className="p-4 bg-background rounded-lg border border-border/50 hover:border-accent/50 transition-colors text-center group/item">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Database size={20} className="text-white" />
                    </div>
                    <p className="text-sm font-semibold group-hover/item:text-accent transition-colors">{folder}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center slide-in-up" style={{ animation: "slideInUp 0.6s ease-out 0.9s both" }}>
          <p className="text-muted-foreground mb-6">
            Actively building projects and sharing learning materials on{" "}
            <span className="font-semibold text-foreground">GitHub</span>
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 text-sm font-semibold text-accent">
            <Zap size={16} />
            Continuously learning and shipping
          </div>
        </div>
      </div>
    </section>
  )
}
