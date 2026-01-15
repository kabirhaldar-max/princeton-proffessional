"use client"

import { motion } from "framer-motion"
import { Zap, Headphones, BookOpen, Users, Award, Globe2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description: "24/7 access to all materials with flexible scheduling designed for busy professionals.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry leaders with proven track records in their respective fields.",
  },
  {
    icon: Award,
    title: "Recognized Credentials",
    description: "Earn globally acknowledged certifications that elevate your professional profile.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "Deep-dive into structured curriculum with practical exercises and real projects.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Access expert help whenever needed through our responsive support channels.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "Connect with professionals worldwide and build lasting career relationships.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">Why Choose Us</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-secondary mb-6">
            Built for
            <br />
            <span className="text-gradient-primary">Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to accelerate your career growth in one comprehensive platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bento-card p-8 bg-card"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
