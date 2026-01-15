"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Large Image with Overlay Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-editorial">
              <img
                src="/images/about1.png"
                alt="Princeton Professional Students"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

              {/* Floating Stat Cards */}
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="glass-dark p-6 rounded-xl border border-secondary/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-serif font-bold text-primary">94%</div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">Career Advancement</p>
                      <p className="text-xs text-muted-foreground">Within 6 months of completion</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="glass-dark p-6 rounded-xl border border-secondary/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-serif font-bold text-accent">4.9</div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">Average Rating</p>
                      <p className="text-xs text-muted-foreground">From 12,000+ verified reviews</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  Our Philosophy
                </span>
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-secondary">
                Education
                <br />
                <span className="text-gradient-primary">Without Limits</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Princeton Professional, we believe world-class education should be accessible to ambitious learners
                  everywhere. Our platform combines expert instruction with cutting-edge technology to deliver
                  transformative learning experiences.
                </p>
                <p>
                  Whether you're advancing in your current field or pivoting to a new career, our comprehensive programs
                  provide the knowledge, skills, and credentials you need to succeed in today's competitive landscape.
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Industry-leading expert instructors with proven track records",
                "Flexible learning paths designed for working professionals",
                "Globally recognized certifications valued by top employers",
                "Lifetime access to course materials and community",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href={`/persona`}>
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-lg shadow-editorial"
            >
              Discover Our Approach
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
