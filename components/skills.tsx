import { Code2, Database, ShieldCheck, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Software Engineering",
      icon: Code2,
      skills: ["HTML5/CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "REST APIs"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Quality Assurance",
      icon: ShieldCheck,
      skills: ["Manual Testing", "Regression Testing", "Bug Reporting", "Test Case Design", "Cross-Browser Checks"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: ["Python (Flask)", "RESTful APIs", "MySQL/SQL", "CRUD Development", "Authentication"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Playwright", "Postman", "Jira", "Git/GitHub", "MS Dynamics 365"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-accent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and practices I've learned through projects and coursework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group relative card-hover"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur group-hover:blur-lg`} />
                
                <div className="relative p-8 bg-card border border-border rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="skill-tag cursor-pointer"
                        style={{
                          animation: `slideInUp 0.4s ease-out ${i * 0.05}s both`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Programming Languages Section */}
        <div className="relative slide-in-up group" style={{ animation: "slideInUp 0.6s ease-out 0.4s both" }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
          <div className="relative p-8 bg-card border border-border rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"></span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "C", "C++ (OOP)", "JavaScript", "SQL", "Assembly (8086)"].map((lang, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer text-sm font-medium"
                  style={{
                    animation: `slideInUp 0.4s ease-out ${i * 0.05}s both`,
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
