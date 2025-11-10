"use client"

import { Button } from "@/components/ui/button"
import { LogoWhite } from "@/components/logo-white"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToNewsletter = () => {
    document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header_video_miauzly1-xvg0o7ckOcr8koHryQ3MBc75WvPq2w.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="absolute top-6 left-6 md:top-9 md:left-9 z-20 h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
        <LogoWhite />
      </div>

      <div className="absolute top-6 right-6 md:top-9 md:right-9 z-20">
        <LanguageToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-block rounded-full bg-[#4982A6] px-4 py-2 mb-6">
              <span className="text-sm text-white">{t.hero.badge}</span>
            </div>

            <h1 className="md:text-6xl lg:text-7xl leading-none text-white mb-6 text-left text-5xl tracking-normal font-normal leading-3">
              {t.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">{t.hero.description}</p>

            <div className="space-y-4">
              <Button
                onClick={scrollToNewsletter}
                className="bg-[#F2A81D] hover:bg-[#E09815] text-white rounded-full px-12 py-6 transition-all"
              >
                {t.hero.cta}
              </Button>

              <p className="text-sm text-gray-300 max-w-md">{t.hero.waitlist}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
