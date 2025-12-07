"use client"

import { Hero } from "@/components/hero"
import { ForWhom } from "@/components/for-whom"
import { WhyMiauzly } from "@/components/why-miauzly"
import { SneakPreview } from "@/components/sneak-preview"
import { AboutUs } from "@/components/about-us"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ForWhom />
      <WhyMiauzly />
      {/* <HowItWorks /> */}
      <SneakPreview />
      <AboutUs />
      <Newsletter />
      <Footer />
    </div>
  )
}
