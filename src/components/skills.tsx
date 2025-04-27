"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Code2, Database, Globe, Layers, Server, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "C#", "Python", "RESTful API", "GraphQL"],
      color: "from-emerald-500 to-green-400",
    },
    {
      id: 3,
      title: "Database",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Oracle", "Redis", "SQL", "NoSQL"],
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 4,
      title: "Mobile Development",
      icon: Globe,
      skills: ["Flutter", "Dart", "React Native", "Progressive Web Apps", "Responsive Design"],
      color: "from-orange-500 to-amber-400",
    },
    {
      id: 5,
      title: "Chatbot Development",
      icon: MessageSquare,
      skills: ["OpenAI Integration", "Groq AI", "NLP", "Chatbot Flows", "Conversational UI", "AI Prompt Engineering"],
      color: "from-red-500 to-rose-400",
    },
    {
      id: 6,
      title: "Soft Skills",
      icon: Layers,
      skills: ["Komunikasi", "Kerja Tim", "Pemecahan Masalah", "Manajemen Waktu", "Adaptasi", "Kreativitas"],
      color: "from-indigo-500 to-violet-400",
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
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
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="20" fill="url(#radialGradient)" />
          <circle cx="80" cy="60" r="30" fill="url(#radialGradient)" />
          <circle cx="40" cy="80" r="25" fill="url(#radialGradient)" />
        </svg>
      </div>

      <div ref={ref} id="skills-section" className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: isInView ? 1 : 0, rotate: isInView ? 0 : -180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="inline-block p-3 bg-muted rounded-full mb-4 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-sm"
            />
            <Code2 className="h-6 w-6 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="relative">
              Keahlian & Spesialisasi
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Berikut adalah beberapa teknologi dan keahlian yang saya kuasai.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}
                    >
                      <category.icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="text-lg font-medium">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`py-1.5 transition-all duration-300 hover:bg-gradient-to-r ${category.color} hover:text-white`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
