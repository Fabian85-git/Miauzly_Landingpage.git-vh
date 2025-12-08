"use client"

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
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-110 contrast-110">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header_video_miauzly3-ac3WV7WfnnQ45gPDrOwEfvoNIP2ddK.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      <div className="absolute top-6 left-6 md:top-9 md:left-9 z-20 h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
        <LogoWhite />
      </div>

      <div className="absolute top-6 right-6 md:top-9 md:right-9 z-20">
        <LanguageToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 pt-40 pb-16 md:pt-52 md:pb-24 lg:pt-56 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* <div className="inline-block rounded-full bg-[#4982A6] px-4 py-2 mb-6">
              <span className="text-sm text-white">{t.hero.badge}</span>
            </div> */}

            <h1 className="md:text-6xl lg:text-7xl leading-none text-white mb-6 text-left text-5xl tracking-normal font-normal leading-3">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-xl text-gray-200 mb-8 max-w-2xl">{t.hero.description}</p>

            <div className="flex flex-col items-start gap-4 w-full md:w-auto">
              <button
                onClick={scrollToNewsletter}
                className="w-full md:w-auto bg-brand-yellow hover:bg-brand-yellow-hover text-gray-900 rounded-full px-10 py-6 transition-all font-medium cursor-pointer inline-flex items-center justify-center text-lg"
              >
                {t.hero.cta}
              </button>

              <p className="text-gray-300 max-w-md text-base">{t.hero.waitlist}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
