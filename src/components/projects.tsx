"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowUpRight, Code, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: "TeenCode",
      description: "Platform pembelajaran coding interaktif untuk remaja dengan tutorial dan tantangan pemrograman.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React.js", "Node.js", "Express", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "MathEdu",
      description: "Aplikasi pembelajaran matematika dengan visualisasi interaktif dan latihan soal adaptif.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "A-Market",
      description: "Platform e-commerce dengan fitur pembayaran terintegrasi dan manajemen inventaris.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      demoUrl: "#",
      githubUrl: "#",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      title: "Chat App",
      description: "Aplikasi chat real-time dengan fitur chatbot AI terintegrasi untuk respons otomatis.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "Socket.io", "OpenAI"],
      demoUrl: "#",
      githubUrl: "#",
      color: "from-amber-500 to-orange-600",
    },
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [60, 0, 0, 60])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              filter: "blur(80px)",
            }}
          />
        ))}
      </div>

      <motion.div ref={containerRef} style={{ opacity, y }} className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="inline-block p-3 bg-muted rounded-full mb-4 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-sm"
            />
            <Code className="h-6 w-6 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="relative">
              Proyek Unggulan
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Lihat beberapa proyek terbaru saya. Setiap proyek adalah karya pengembangan yang unik.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative"
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-xl relative z-10 bg-card/80 backdrop-blur-sm border-opacity-50">
                <div className="relative overflow-hidden aspect-video">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeIndex === index ? 0.3 : 0.1,
                      scale: activeIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: activeIndex === index ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="transition-all duration-300 hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="ghost" size="sm" className="group/btn">
                    <Link href={project.githubUrl}>
                      <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                      Kode
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="relative overflow-hidden group/btn">
                    <Link href={project.demoUrl}>
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                        Demo
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}
                      />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Button asChild variant="outline" size="lg" className="group relative overflow-hidden">
            <Link href="/projects" className="flex items-center gap-2">
              <span className="relative z-10">
                Lihat Semua Proyek
                <ArrowUpRight className="h-4 w-4 inline ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
