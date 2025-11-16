"use client"

import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { ForWhom } from "@/components/for-whom"
import { WhyMiauzly } from "@/components/why-miauzly"
import { SneakPreview } from "@/components/sneak-preview"
import { AboutUs } from "@/components/about-us"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { PasswordGate } from "@/components/password-gate"

export default function Page() {
  return (
    <PasswordGate>
      <div className="min-h-screen bg-white">
        <Hero />
        <ForWhom />
        <WhyMiauzly />
        <HowItWorks />
        <SneakPreview />
        <AboutUs />
        <Newsletter />
        <Footer />
      </div>
    </PasswordGate>
  )
}
