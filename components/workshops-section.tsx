"use client"

import { Button } from "@/components/ui/button"
import { Brain, Sparkles, TrendingUp, ArrowRight, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const workshops = [
  {
    icon: Brain,
    title: "Confidence & Personal Growth",
    description: "Build unshakeable confidence through evidence-based techniques and personalized coaching sessions.",
    duration: "6 weeks",
    students: "500+",
    image: "/images/ws1.png",
    slug: "confidence-personal-growth",
    price: "INR 25,000",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "AI Productivity Mastery",
    description: "Harness AI tools to automate workflows and boost productivity with cutting-edge strategies.",
    duration: "4 weeks",
    students: "520+",
    image: "/images/ws2.png",
    slug: "ai-productivity-mastery",
    price: "INR 60,000",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Adaptive Leadership",
    description: "Master the art of leading through change with adaptive leadership frameworks.",
    duration: "8 weeks",
    students: "380+",
    image: "/images/ws3.png",
    slug: "adaptive-leadership",
    price: "INR 20,000",
    featured: false,
  },
]

export function WorkshopsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                  Featured Programs
                </span>
              </div>
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-secondary mb-6">
                Transform Your
                <br />
                <span className="text-gradient-primary">Career Path</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expertly designed workshops that combine theory with real-world application.
              </p>
            </div>
            <Link href={`/workshops`}>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-secondary/30 bg-transparent hover:bg-secondary/10 text-secondary px-8 py-6 text-base font-semibold rounded-lg self-start lg:self-end"
            >
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:row-span-2 bento-card overflow-hidden bg-card group relative"
          >
            <div className="relative h-80 lg:h-full overflow-hidden">
              <img
                src={workshops[0].image || "/placeholder.svg"}
                alt={workshops[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 cinematic-overlay" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/90 border border-primary rounded backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 backdrop-blur-sm">
                    <Brain className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-secondary leading-tight">
                    {workshops[0].title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{workshops[0].description}</p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{workshops[0].duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-accent" />
                      <span>{workshops[0].students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/20">
                    <div>
                      <p className="text-xs text-muted-foreground/80 uppercase tracking-wider mb-1">Starting at</p>
                      <p className="text-2xl font-serif font-bold text-secondary">{workshops[0].price}</p>
                    </div>
                    <Link href={`/enroll`}>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-editorial">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Regular Cards */}
          {workshops.slice(1).map((workshop, index) => {
            const Icon = workshop.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bento-card overflow-hidden bg-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {workshop.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{workshop.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-accent" />
                      <span>{workshop.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground/80 uppercase tracking-wider mb-1">From</p>
                      <p className="text-lg font-serif font-bold text-secondary">{workshop.price}</p>
                    </div>
                    <Link href={`/enroll`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary rounded-lg group bg-transparent"
                      >
                        Enroll Now
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
