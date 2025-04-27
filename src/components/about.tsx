"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, var(--color-primary) 0%, transparent 40%), radial-gradient(circle at 70% 60%, var(--color-primary) 0%, transparent 40%)",
            backgroundSize: "100% 100%",
          }}
        />
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
            <User className="h-6 w-6 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="relative">
              Tentang Saya
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Mengenal lebih dekat siapa saya dan apa yang saya lakukan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0  z-10" />
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: isInView ? 1 : 1.2 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full h-full"
              >
                <img
                  src="https://res.cloudinary.com/dtrfxupze/image/upload/v1745759096/foto_adhim_seeits.jpg"
                  alt="Alamsyah Adhim Nugraha"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl z-20" />
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-5 -right-5 md:bottom-10 md:right-0 bg-card p-4 rounded-lg shadow-lg z-30"
            >
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-5 -left-5 md:top-10 md:left-0 bg-card p-4 rounded-lg shadow-lg z-30"
            >
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">4+</p>
                <p className="text-sm text-muted-foreground">Proyek Selesai</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-opacity-50">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Web Developer & Chatbot Developer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Saya adalah seorang Web Developer dan Chatbot Developer dengan pengalaman 2 tahun dalam membangun
                      solusi digital. Saat ini menempuh pendidikan di SMK Telkom Purwokerto jurusan Pengembangan
                      Perangkat Lunak dan Gim (PPLG).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <h4 className="font-medium mb-2">Informasi Pribadi</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="font-medium min-w-24">Nama:</span>
                          <span className="text-muted-foreground">Alamsyah Adhim Nugraha</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium min-w-24">Lokasi:</span>
                          <span className="text-muted-foreground">Banyumas, Jawa Tengah</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium min-w-24">Email:</span>
                          <span className="text-muted-foreground">alamsyahnugraha90@gmail.com</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium min-w-24">Telepon:</span>
                          <span className="text-muted-foreground">+62 857-9976-5680</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Minat</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-muted-foreground">Web Development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-muted-foreground">Chatbot & AI</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="gap-2 relative overflow-hidden group">
                      <a href="#" download>
                        <span className="relative z-10 flex items-center gap-2">
                          Download CV
                          <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="gap-2 relative overflow-hidden group">
                      <Link href="#projects">
                        <span className="relative z-10 flex items-center gap-2">
                          Lihat Proyek
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
