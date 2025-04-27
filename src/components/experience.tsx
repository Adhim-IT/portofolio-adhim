"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const experiences = [
    {
      id: 1,
      title: "Chatbot Developer (Magang)",
      company: "BOTIKA",
      period: "Juni 2024 - November 2024",
      description:
        "Membantu merancang alur chatbot, menguji performa, dan mengembangkan respon menggunakan teknologi AI dan NLP. Berkolaborasi dengan tim lintas divisi untuk memastikan chatbot berjalan optimal sesuai kebutuhan pengguna.",
      type: "work",
      location: "Sleman, DI Yogyakarta (Remote)",
    },
    {
      id: 2,
      title: "Juara 2 Web Design",
      company: "INVOFEST 2024",
      period: "2024",
      description:
        "Meraih juara kedua dalam kompetisi desain web tingkat nasional dengan mengembangkan website inovatif dan responsif.",
      type: "award",
    },
    {
      id: 3,
      title: "Juara 2 Web Development",
      company: "UNIPRO STAGE IX",
      period: "2024",
      description:
        "Berhasil meraih posisi kedua dalam kompetisi pengembangan web dengan menerapkan teknologi modern dan praktik terbaik dalam industri.",
      type: "award",
    },
    {
      id: 4,
      title: "Pengembangan Perangkat Lunak dan Gim (PPLG)",
      company: "SMK Telkom Purwokerto",
      period: "2022 - Sekarang",
      description:
        "Menempuh pendidikan di jurusan Pengembangan Perangkat Lunak dan Gim dengan fokus pada pemrograman web, mobile, dan pengembangan aplikasi.",
      type: "education",
    },
  ]

  const certifications = [
    {
      id: 1,
      title: "Oracle Database Foundations",
      issuer: "Oracle",
      date: "Desember 2024",
    },
    {
      id: 2,
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "Maret 2025 - Maret 2028",
    },
    {
      id: 3,
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      date: "Desember 2024",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div ref={ref} className="container px-4 md:px-6 mx-auto relative z-10">
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
            <Briefcase className="h-6 w-6 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="relative">
              Pengalaman & Pendidikan
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Perjalanan karir, pendidikan, dan pencapaian yang telah saya tempuh.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative max-w-3xl mx-auto mb-16"
        >
          {/* Timeline line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={item} className="relative mb-12 last:mb-0 ml-14">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4, type: "spring" }}
                className={`absolute -left-14 w-10 h-10 rounded-full flex items-center justify-center z-10
                  ${
                    exp.type === "education"
                      ? "bg-gradient-to-br from-purple-500 to-pink-500"
                      : exp.type === "award"
                        ? "bg-gradient-to-br from-amber-500 to-orange-500"
                        : "bg-gradient-to-br from-blue-500 to-cyan-500"
                  }`}
              >
                {exp.type === "education" ? (
                  <GraduationCap className="h-5 w-5 text-white" />
                ) : exp.type === "award" ? (
                  <Award className="h-5 w-5 text-white" />
                ) : (
                  <Briefcase className="h-5 w-5 text-white" />
                )}
              </motion.div>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Sertifikasi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10 mt-1">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
