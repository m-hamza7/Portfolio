export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-accent bg-clip-text text-transparent">Me</span>
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
            <div className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="text-lg font-semibold text-accent mb-2">📚 Education</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Bachelor of Science in Computer Science</strong>
              </p>
              <p className="text-sm text-muted-foreground">FAST NUCES | 2022-2026</p>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="text-lg font-semibold text-accent mb-2">⚡ Interests</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Software Engineering & QA</strong>
              </p>
              <p className="text-sm text-muted-foreground">Building and testing web applications</p>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors">
              <h3 className="text-lg font-semibold text-accent mb-2">📍 Location</h3>
              <p className="text-sm text-muted-foreground">Karachi, Sindh, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
