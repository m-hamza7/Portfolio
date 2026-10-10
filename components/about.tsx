import { Briefcase, GraduationCap, Lightbulb, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 px-4 bg-card">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <div className="absolute -top-1/3 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/3 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
        <div className="absolute top-12 right-12 w-24 h-24 rounded-full border border-primary/20 float-animate" />
        <div className="absolute bottom-20 left-16 w-16 h-16 rounded-full border border-accent/20 float-animate" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-accent">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Jr. SQA Engineer at TRAFiX LLC and a Computer Science graduate from FAST NUCES. I enjoy building
              applications and making sure they work well for users through careful testing and attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Software engineering and quality assurance go hand in hand for me—whether I'm writing features in personal
              projects or validating releases at work, I focus on clarity, reliability, and collaboration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I joined TRAFiX LLC in September 2026 to grow as a quality engineer and contribute to products teams can
              ship with confidence. Explore my{" "}
              <a href="#journey" className="text-primary hover:underline font-medium">
                professional journey
              </a>{" "}
              for the full timeline.
            </p>
          </div>

          <div className="space-y-4">
            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.1s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-950 to-cyan-500 text-white shadow-lg">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-2">Education</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Bachelor of Science in Computer Science</strong>
                </p>
                <p className="text-sm text-muted-foreground">FAST NUCES | 2022 – 2026</p>
              </div>
            </div>

            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.2s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-950 via-cyan-800 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-950 to-cyan-600 text-white shadow-lg">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mb-2">Current Role</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Jr. SQA Engineer</strong>
                </p>
                <p className="text-sm text-muted-foreground">TRAFiX LLC · Started September 2026</p>
              </div>
            </div>

            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.25s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-950 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 to-cyan-500 text-white shadow-lg">
                  <Lightbulb size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Software Quality Assurance Engineering</strong>
                </p>
                <p className="text-sm text-muted-foreground">Test design, automation-friendly QA, and full-stack projects</p>
              </div>
            </div>

            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.3s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-700 to-blue-950 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-950 text-white shadow-lg">
                  <MapPin size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Karachi, Sindh, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
