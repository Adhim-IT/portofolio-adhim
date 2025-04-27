import Hero from "@/components/hero"
import About from "@/components/about"
import { GitHubActivity } from "@/components/github-activity"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GitHubActivity />
      <Contact />
    </main>
  )
}
