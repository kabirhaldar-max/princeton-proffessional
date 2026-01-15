"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Landmark } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Heritage" },
    { href: "/workshops", label: "Curriculum" },
    { href: "/persona", label: "Princeton Persona" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" className="h-20" />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Princeton Professional
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Academic Excellence</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="header-nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                />
              )}
            </Link>
          ))}
          <Link href="/enroll">
            <Button className="rounded-none bg-primary px-8 font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
              Apply Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background lg:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-bold uppercase tracking-wider text-muted-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/enroll" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-none bg-primary py-6 font-bold uppercase tracking-widest text-primary-foreground">
                  Apply Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
