"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowUpRight, Code, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
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

    const element = document.getElementById("projects-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      description: "Website portfolio modern dibangun dengan Next.js dan Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "React", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Platform E-commerce",
      description: "Platform e-commerce full-stack dengan integrasi pembayaran.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Prisma", "Stripe", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi manajemen tugas kolaboratif dengan pembaruan real-time.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Dashboard Cuaca",
      description: "Dashboard cuaca yang menampilkan data cuaca saat ini dan perkiraan.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["JavaScript", "API", "CSS"],
      demoUrl: "#",
      githubUrl: "#",
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
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div id="projects-section" className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block p-2 bg-muted rounded-full mb-4">
            <Code className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Proyek Unggulan</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Lihat beberapa proyek terbaru saya. Setiap proyek adalah karya pengembangan yang unik.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={item} className="group">
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.githubUrl}>
                      <Github className="mr-2 h-4 w-4" />
                      Kode
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demoUrl}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects" className="flex items-center gap-2">
              Lihat Semua Proyek
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
