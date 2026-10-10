import { CheckCircle } from "lucide-react"
import { journeyMilestones } from "@/data/journey-data"

function StatusBadge({ status }: { status: "completed" | "current" }) {
  if (status === "current") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 pulse-dot" />
        Current
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
      <CheckCircle size={12} className="text-primary" />
      Completed
    </span>
  )
}

export default function ProfessionalJourney() {
  return (
    <section id="journey" className="relative overflow-hidden py-20 px-4 bg-background">
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animation: "pulse 4s ease-in-out infinite 2s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-4">Career path</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-accent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From my CS degree at FAST NUCES to quality engineering at TRAFiX LLC — key milestones in education and
            work.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-primary/20"
            aria-hidden
          />

          <div className="space-y-10">
            {journeyMilestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={milestone.id}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-start"
                  style={{ animation: `slideInUp 0.6s ease-out ${index * 0.12}s both` }}
                >
                  <div
                    className={`hidden md:block ${isEven ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:pl-12 md:order-2"}`}
                  >
                    {isEven && (
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-primary">{milestone.period}</p>
                        <p className="text-sm text-muted-foreground">{milestone.location}</p>
                      </div>
                    )}
                  </div>

                  <div
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${milestone.accent} shadow-lg z-10`}
                  >
                    <Icon className="text-white" size={22} />
                  </div>

                  <div
                    className={`pl-16 md:pl-0 ${isEven ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12 md:text-right md:order-1"}`}
                  >
                    <div className="group relative">
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${milestone.accent} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}
                      />
                      <div className="relative p-6 bg-card border border-border rounded-xl backdrop-blur-sm">
                        <div
                          className={`flex flex-wrap items-start gap-3 mb-3 ${isEven ? "" : "md:flex-row-reverse md:justify-start"}`}
                        >
                          <StatusBadge status={milestone.status} />
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {milestone.kind === "education" ? "Education" : "Experience"}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                        <p className="text-primary font-medium mb-2">{milestone.organization}</p>
                        <p className="text-sm text-muted-foreground md:hidden mb-3">
                          {milestone.period} · {milestone.location}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">{milestone.description}</p>
                        <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                          {milestone.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
