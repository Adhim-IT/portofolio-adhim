"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Github, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-effect backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Adhim</span>
              <span className="text-xl font-bold text-primary">Portfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Proyek
            </Link>
            <Link href="/#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Keahlian
            </Link>
            <Link href="/#github" className="text-sm font-medium transition-colors hover:text-primary">
              GitHub
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Kontak
            </Link>
            <ThemeToggle />
            <Button size="sm" className="gap-2" asChild>
              <a href="https://github.com/Adhim-IT" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-b">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/#projects"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Proyek
            </Link>
            <Link href="/#skills" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Keahlian
            </Link>
            <Link href="/#github" className="block py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              GitHub
            </Link>
            <Link
              href="/#contact"
              className="block py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>
            <Button size="sm" className="gap-2 w-full" asChild>
              <a href="https://github.com/Adhim-IT" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
