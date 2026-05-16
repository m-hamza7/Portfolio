import { GraduationCap, Lightbulb, MapPin, Sparkles } from "lucide-react"

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
              I'm a Computer Science student at FAST NUCES with a passion for building web applications and
              understanding software quality. I love learning through projects and enjoy writing clean code that works
              well for users.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm particularly interested in software engineering and quality assurance—two fields that complement each
              other. Through my projects, I'm learning how to build features thoughtfully and test them thoroughly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm looking for internship or entry-level opportunities where I can grow my skills, contribute to real
              projects, and learn from experienced developers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.1s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">Education</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Bachelor of Science in Computer Science</strong>
                </p>
                <p className="text-sm text-muted-foreground">FAST NUCES | 2022-2026</p>
              </div>
            </div>

            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.2s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500 via-pink-600 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
                  <Lightbulb size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Interests</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Software Engineering & QA</strong>
                </p>
                <p className="text-sm text-muted-foreground">Building and testing web applications</p>
              </div>
            </div>

            <div className="group relative p-6 bg-background rounded-lg backdrop-blur-sm" style={{ animation: "slideInUp 0.6s ease-out 0.3s both" }}>
              {/* Gradient border effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" style={{ zIndex: -1 }} />
              <div className="relative bg-background rounded-lg">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-600 text-white shadow-lg">
                  <MapPin size={20} />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Karachi, Sindh, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
