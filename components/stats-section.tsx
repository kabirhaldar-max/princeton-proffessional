"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe2, TrendingUp, Zap, BookOpen } from "lucide-react"

export function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-secondary mb-6">
            The Numbers
            <br />
            <span className="text-gradient-primary">Tell Our Story</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A global community of elite professionals advancing their careers through world-class education.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Large Featured Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 lg:row-span-2 bento-card p-8 lg:p-12 bg-gradient-to-br from-primary/20 via-card to-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-serif font-bold text-secondary leading-none mb-4">
                    50K+
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-2">Active Learners</div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                    Professionals from Fortune 500 companies and leading startups trust Princeton Professional for
                    career advancement
                  </p>
                </div>
              </div>
              <div className="h-2 w-32 bg-gradient-to-r from-primary via-accent to-transparent rounded-full mt-8" />
            </div>
          </motion.div>

          {/* Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card p-8 bg-gradient-to-br from-card to-card/50 group"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 border border-accent/30">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-secondary leading-none mb-3">200+</div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">Expert Courses</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-card p-8 bg-gradient-to-br from-card to-card/50 group"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/30">
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-secondary leading-none mb-3">150+</div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Medium Feature Card with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bento-card overflow-hidden bg-card relative group h-64"
          >
            <img
              src="/modern-classroom-technology-learning.jpg"
              alt="Learning environment"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 cinematic-overlay" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                    Live Learning
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary">Interactive Workshops Every Week</h3>
                <p className="text-sm text-muted-foreground">Real-time collaboration with industry experts</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bento-card p-8 bg-gradient-to-br from-accent/10 to-card group"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 border border-accent/30">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-secondary leading-none mb-3">94%</div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Stats Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bento-card p-8 bg-gradient-to-br from-primary/10 to-card group"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/30">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-5xl font-serif font-bold text-secondary leading-none mb-3">12K+</div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wider">Resources</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
