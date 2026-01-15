import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPageHero } from "@/components/about-page-hero"
import { MissionSection } from "@/components/mission-section"
import { PromisesSection } from "@/components/promises-section"
import { TeamSection } from "@/components/team-section"
import { CultureSection } from "@/components/culture-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Princeton Professional",
  description:
    "Learn about Princeton Professional's mission to empower individuals through elite learning and personalized growth.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutPageHero />
        <MissionSection />
        <PromisesSection />
        <TeamSection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  )
}
