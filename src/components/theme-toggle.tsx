"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)

  // Pastikan komponen sudah di-mount untuk menghindari perbedaan rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setAnimating(true)
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Reset animasi setelah selesai
    setTimeout(() => {
      setAnimating(false)
    }, 1000)
  }

  if (!mounted) return null

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full relative overflow-hidden"
        aria-label="Ubah tema"
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}

        {/* Animasi menyebar */}
        {animating && (
          <span
            className={cn(
              "absolute inset-0 rounded-full transform scale-0 animate-theme-ripple",
              theme === "dark" ? "bg-white" : "bg-[#111827]",
            )}
          />
        )}

        <span className="sr-only">Ubah tema</span>
      </Button>
    </div>
  )
}
