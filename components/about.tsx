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
              I'm a passionate full-stack developer with a strong foundation in computer science. My expertise spans
              from designing high-converting PPC landing pages to building complex web applications with React, Python,
              and modern web technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently, I'm pursuing my degree in Computer Science at FAST NUCES while freelancing on impactful
              projects. My approach combines clean code, user-centric design, and performance optimization to deliver
              exceptional digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm particularly interested in machine learning applications, with hands-on experience in model training,
              dataset preprocessing, and building intelligent systems like CleanAI, my AI-powered waste classification
              project.
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
              <h3 className="text-lg font-semibold text-accent mb-2">💼 Experience</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>PPC Landing Page Developer</strong>
              </p>
              <p className="text-sm text-muted-foreground">Freelance Projects | 100+ Completed</p>
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
