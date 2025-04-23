"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code2, Database, Globe, Layers, Palette, Server } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      id: 1,
      title: "Pengembangan Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      title: "Pengembangan Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB"],
    },
    {
      id: 3,
      title: "Desain UI/UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Desain Responsif", "Wireframing", "Prototyping"],
    },
    {
      id: 4,
      title: "DevOps & Deployment",
      icon: Globe,
      skills: ["Git", "GitHub Actions", "Docker", "Vercel", "AWS"],
    },
    {
      id: 5,
      title: "Manajemen Database",
      icon: Database,
      skills: ["SQL", "NoSQL", "Pemodelan Data", "Migrasi", "ORM"],
    },
    {
      id: 6,
      title: "Arsitektur",
      icon: Layers,
      skills: ["Microservices", "REST API", "GraphQL", "Serverless", "Desain Sistem"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div id="skills-section" className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block p-2 bg-muted rounded-full mb-4">
            <Code2 className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Keahlian & Spesialisasi</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Berikut adalah beberapa teknologi dan keahlian yang saya kuasai.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-muted">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-medium">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
