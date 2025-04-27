"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "CEO, Tech Innovations",
      content:
        "Adhim adalah pengembang yang sangat berbakat. Dia tidak hanya memiliki keahlian teknis yang luar biasa, tetapi juga kemampuan komunikasi yang sangat baik.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Product Manager, Digital Solutions",
      content:
        "Bekerja dengan Adhim adalah pengalaman yang menyenangkan. Dia selalu memberikan solusi kreatif untuk setiap masalah dan sangat memperhatikan detail.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Dian Permata",
      role: "UI/UX Designer, Creative Agency",
      content:
        "Adhim memiliki pemahaman yang mendalam tentang UI/UX dan selalu mengimplementasikan desain dengan sempurna. Kolaborasi dengannya sangat efektif.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Rudi Hartono",
      role: "CTO, Startup Indonesia",
      content:
        "Kode yang ditulis Adhim selalu bersih, terstruktur, dan mudah dipelihara. Dia adalah aset berharga untuk tim pengembangan manapun.",
      avatar: "/placeholder.svg?height=40&width=40",
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
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
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
            <MessageSquare className="h-6 w-6 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="relative">
              Testimoni Klien
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Apa yang dikatakan klien dan rekan kerja tentang saya.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-muted-foreground/10" />
                  <p className="mb-6 relative z-10">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
