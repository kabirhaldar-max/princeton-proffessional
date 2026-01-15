"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Landmark, Mail, MapPin, Phone, ArrowRight } from "lucide-react"

export function Footer() {

  const ft_links = [
    {
      title: "Heritage",
      url: "/about"
    },
    {
      title: "Curriculum",
      url: "/workshops"
    },
        {
      title: "Persona",
      url: "/persona"
    },
  ]

  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" className="h-20" />
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Princeton Professional
              </span>
            </Link>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Princeton Professional stands at the intersection of tradition and innovation, providing elite educational
              resources for the next generation of global leaders.
            </p>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Executive Insights</h4>
              <form className="flex max-w-md gap-2">
                <Input
                  placeholder="Professional Email"
                  className="rounded-none border-t-0 border-x-0 border-b-2 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
                <Button variant="ghost" className="px-2 hover:text-primary">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Institutional Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Institution</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              {ft_links.map((item) => (
                <li key={item.title}>
                  <Link href={item.url} className="transition-colors hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                Princeton, NJ 08544, USA
              </li>
              {/* <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                +1 (609) 555-0100
              </li> */}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                connect@princetonprofessional.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-10 md:flex-row">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Princeton Professional. Excellence in Perpetuity.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:text-primary">
              Academic Registry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
