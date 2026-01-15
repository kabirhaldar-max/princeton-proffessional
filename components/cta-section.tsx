"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 p-12 lg:p-16 overflow-hidden shadow-editorial"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </div>

          {/* Decorative accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="relative z-10 text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                Limited Time Offer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-secondary"
            >
              Ready to Transform
              <br />
              Your <span className="text-gradient-primary">Career?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Join 50,000+ professionals who have elevated their careers with Princeton Professional. Start learning
              today with instant access to all courses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link href={`/workshops`}>
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold rounded-lg shadow-editorial"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              </Link>
              <Link href={`/enroll`}>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-secondary/30 bg-transparent hover:bg-secondary/10 text-secondary px-10 py-7 text-lg font-semibold rounded-lg"
              >
                Schedule a Demo
              </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-border/30"
            >
              {["30-Day Money Back Guarantee", "Lifetime Course Access", "24/7 Expert Support"].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
