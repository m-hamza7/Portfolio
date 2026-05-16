import { Code2, Database, ShieldCheck, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Software Engineering",
      icon: Code2,
      skills: ["HTML5/CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design", "REST APIs"],
    },
    {
      title: "Quality Assurance",
      icon: ShieldCheck,
      skills: ["Manual Testing", "Regression Testing", "Bug Reporting", "Test Case Design", "Cross-Browser Checks"],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: ["Python (Flask)", "RESTful APIs", "MySQL/SQL", "CRUD Development", "Authentication"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [ "Playwright","Postman", "Jira","Git/GitHub","MS Dynamics 365", "Power Platform"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and practices I've learned through projects and coursework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Programming Languages */}
        <div className="mt-8 p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "C", "C++ (OOP)", "JavaScript", "SQL", "Assembly (8086)"].map((lang, i) => (
              <span key={i} className="skill-tag">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
