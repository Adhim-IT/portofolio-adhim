"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("/#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Smooth scroll to element
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      })

      // Update URL without reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <footer className="border-t py-12 md:py-16 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              <span>Adhim</span>
              <span className="text-primary">Portfolio</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Website portfolio modern yang menampilkan proyek, keahlian, dan pengalaman saya. Dibangun dengan Next.js,
              Tailwind CSS, dan Framer Motion.
            </p>
            <div className="flex gap-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://github.com/Adhim-IT" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="https://www.linkedin.com/in/alamsyah-nugraha/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href="mailto:alamsyahnugraha90@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Tautan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "/#about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  onClick={(e) => handleNavClick(e, "/#projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  onClick={(e) => handleNavClick(e, "/#skills")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Keahlian
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  onClick={(e) => handleNavClick(e, "/#experience")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pengalaman
                </Link>
              </li>
              <li>
                <Link
                  href="/#github"
                  onClick={(e) => handleNavClick(e, "/#github")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Sumber Daya</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sertifikasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portofolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alamsyah Adhim Nugraha. Hak Cipta Dilindungi.</p>
        </div>

        {/* Scroll to top button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  )
}
