"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { LogoWhite } from "@/components/logo-white"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function ImpressumPage() {
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/95 border-b border-gray-800">
        <div className="relative mx-auto max-w-7xl px-4 py-4 min-h-[90px] md:min-h-[150px]">
          {/* Logo - same position as landing page */}
          <Link
            href="/"
            className="absolute top-6 left-6 md:top-9 md:left-9 h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
          >
            <LogoWhite />
          </Link>

          {/* Language Toggle - same position as landing page */}
          <div className="absolute top-6 right-6 md:top-9 md:right-9">
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 mx-auto max-w-4xl px-4 py-12 font-sans">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4982A6] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.imprint.backLink}</span>
        </Link>

        <h1 className="text-4xl md:text-5xl mb-8 font-sans">{t.imprint.title}</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.imprint.sections.responsible.title}</h2>
            {t.imprint.sections.responsible.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-2" : ""}>
                {index === 0 ? (
                  <strong>{text}</strong>
                ) : index === 3 ? (
                  <>
                    E-Mail:{" "}
                    <a href="mailto:hello@miauzly.ch" className="text-[#4982A6] hover:underline">
                      hello@miauzly.ch
                    </a>
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.imprint.sections.disclaimer.title}</h2>
            {t.imprint.sections.disclaimer.content.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </section>

          <section>
            <p className="font-semibold">{t.imprint.sections.lastUpdate.content}</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
