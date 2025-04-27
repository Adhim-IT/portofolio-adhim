"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView } from "framer-motion"
import { Mail, MessageSquare, Send, CheckCircle, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulasi pengiriman formulir
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset pesan sukses setelah 5 detik
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
    <section ref={ref} id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
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
              "radial-gradient(circle at 20% 70%, var(--color-primary) 0%, transparent 40%), radial-gradient(circle at 80% 30%, var(--color-primary) 0%, transparent 40%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
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
            <MessageSquare className="h-6 w-6 relative z-10" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <span className="relative">
              Hubungi Saya
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: isInView ? "100%" : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] text-lg">
            Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="h-full bg-card/80 backdrop-blur-sm border-opacity-50 overflow-hidden">
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
                <CardDescription>Berikut adalah cara Anda dapat menghubungi saya.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">alamsyahnugraha90@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-sm text-muted-foreground">+62 857-9976-5680</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Lokasi</h3>
                    <p className="text-sm text-muted-foreground">Banyumas, Jawa Tengah, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Media Sosial</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>GitHub: @Adhim-IT</p>
                      <p>LinkedIn: /in/alamsyah-adhim</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-sm">
                    "Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kerja sama, atau hanya untuk
                    menyapa!"
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="bg-card/80 backdrop-blur-sm border-opacity-50 overflow-hidden">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Isi formulir di bawah ini dan saya akan segera menghubungi Anda.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Pesan Anda"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Mengirim...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Pesan Terkirim!
                      </span>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center gap-2">
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          Kirim Pesan
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
