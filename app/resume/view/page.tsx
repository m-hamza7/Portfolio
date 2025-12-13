import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, User } from "lucide-react"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import resumeData from "@/data/resume-data"

export const metadata = {
  title: "Resume",
  description: `Professional experience, skills, and qualifications of ${resumeData.personalInfo.name}, ${resumeData.personalInfo.title}.`,
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple header with nav buttons */}
      <header className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">Hamza</div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium tracking-wide hover:text-accent">ABOUT</Link>
            <Link href="/#skills" className="text-sm font-medium tracking-wide hover:text-accent">SKILLS</Link>
            <Link href="/#projects" className="text-sm font-medium tracking-wide hover:text-accent">PROJECTS</Link>
            <Link href="/#contact" className="text-sm font-medium tracking-wide hover:text-accent">CONTACT</Link>
            <Link href="/resume/view" className="text-sm font-medium tracking-wide hover:text-accent">RESUME</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Left column */}
          <div className="space-y-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-4xl font-bold">Resume</h1>
                <p className="text-xl text-muted-foreground">My professional experience and qualifications</p>
              </div>

              <div>
                <ResumeDownloadButton />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Summary</h2>
              <p className="text-muted-foreground">
                {resumeData.summary && resumeData.summary.length > 0
                  ? resumeData.summary.join(" ")
                  : `${resumeData.personalInfo.yearsOfExperience} — ${resumeData.personalInfo.title}`}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Work Experience</h2>

              {resumeData.experience.map((job, index) => (
                <Card key={index} className="bg-card border border-border rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Skills</h2>
              <Card className="bg-card border border-border rounded-lg">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold">Languages & Frameworks</h3>
                    <p className="text-muted-foreground">{resumeData.skills.languages.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Architecture & Patterns</h3>
                    <p className="text-muted-foreground">{resumeData.skills.architecture.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tools</h3>
                    <p className="text-muted-foreground">{resumeData.skills.cloud.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Data & Messaging</h3>
                    <p className="text-muted-foreground">{resumeData.skills.data.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Quality</h3>
                    <p className="text-muted-foreground">{resumeData.skills.quality.join(", ")}</p>
                  </div>

                  <div>


                  </div>
                </CardContent>
              </Card>
            </div>

            {resumeData.publications && resumeData.publications.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Publications</h2>
                {resumeData.publications.map((publication, index) => (
                  <Card key={index} className="bg-card border border-border rounded-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{publication.title}</h3>
                      <p className="text-muted-foreground">{publication.year}</p>
                      <p className="mt-2">{publication.description}</p>
                      {publication.link && (
                        <Link href={publication.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Read More
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {resumeData.languages && resumeData.languages.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Languages</h2>
                <Card className="bg-card border border-border rounded-lg">
                  <CardContent className="p-6 space-y-4">
                    {resumeData.languages.map((lang, index) => (
                      <div key={index}>
                        <h3 className="font-semibold">{lang.name}</h3>
                        <p className="text-muted-foreground">
                          {lang.level}
                          {lang.certificate && ` (${lang.certificate})`}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right column (sticky) */}
          <aside className="space-y-6">
            <div className="sticky top-20">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="rounded overflow-hidden mb-4">
                  <Image
                    src={resumeData.personalInfo.photo || "/images/profile.png"}
                    alt={resumeData.personalInfo.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-auto rounded"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium">{resumeData.personalInfo.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{resumeData.personalInfo.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{resumeData.personalInfo.location}</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Link href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      LinkedIn
                    </Link>

                    {resumeData.personalInfo.github && (
                      <Link href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">
                        GitHub
                      </Link>
                    )}

                    <Link href={resumeData.personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">
                      Website
                    </Link>
                  </div>

                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="w-full">Get in Touch</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
