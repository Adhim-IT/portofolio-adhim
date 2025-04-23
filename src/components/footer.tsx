import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              <span>Adhim</span>
              <span className="text-primary">Portfolio</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Website portfolio modern yang menampilkan proyek, keahlian, dan kontribusi GitHub saya. Dibangun dengan
              Next.js, Tailwind CSS, dan Framer Motion.
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Adhim-IT" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:adhim@example.com">
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
                <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Keahlian
                </Link>
              </li>
              <li>
                <Link href="/#github" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alamsyah Adhim Nugraha. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
