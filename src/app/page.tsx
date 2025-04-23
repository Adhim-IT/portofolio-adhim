import Hero from "@/components/hero"
import { GitHubActivity } from "@/components/github-activity"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GitHubActivity />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
