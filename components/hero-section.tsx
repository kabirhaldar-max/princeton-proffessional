"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Cinematic background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sophisticated-academic-library-dark-cinematic.jpg"
          alt="Princeton Professional Heritage"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Bold Editorial Typography */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  Est. 2024 — Elite Education
                </span>
              </div>

              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tighter text-secondary mb-8">
                Where
                <br />
                <span className="text-gradient-primary">Ambition</span>
                <br />
                Meets
                <br />
                Excellence
              </h1>

              <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-xl mb-10">
                Princeton Professional delivers transformative education for global leaders. Join 50,000+ professionals
                advancing their careers through expert-led programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/workshops`}>
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-lg shadow-editorial"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                </Link>
                <Link href={`/about`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-secondary/30 bg-transparent hover:bg-secondary/10 text-secondary px-8 py-6 text-base font-semibold rounded-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Know Us
                </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Featured Stat Cards (Bento Preview) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {/* Large Feature Card */}
            <div className="col-span-2 bento-card p-8 bg-gradient-to-br from-card to-card/50">
              <div className="space-y-3">
                <div className="text-5xl sm:text-6xl font-serif font-bold text-secondary">12,000+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Elite Alumni Network
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>

            {/* Small Stat Card 1 */}
            <div className="bento-card p-6 bg-gradient-to-br from-primary/20 to-transparent border-primary/30">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-primary">94%</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Career Success
                </div>
              </div>
            </div>

            {/* Small Stat Card 2 */}
            <div className="bento-card p-6 bg-gradient-to-br from-accent/20 to-transparent border-accent/30">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-accent">45</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Specializations
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border/30"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Accredited by Leading Institutions
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              150+ Countries Worldwide
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">24/7 Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
