"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import { LogoWhite } from "@/components/logo-white"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function DatenschutzPage() {
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
          <span>{t.privacy.backLink}</span>
        </Link>

        <h1 className="text-4xl md:text-5xl mb-8 font-sans">{t.privacy.title}</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.responsible.title}</h2>
            {t.privacy.sections.responsible.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-2" : ""}>
                {index === 2 ? (
                  <>
                    E-Mail:{" "}
                    <a href="mailto:hello@miauzly.ch" className="text-[#4982A6] hover:underline">
                      hello@miauzly.ch
                    </a>
                  </>
                ) : index === 1 ? (
                  <strong>{text}</strong>
                ) : (
                  text
                )}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.collection.title}</h2>
            {t.privacy.sections.collection.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {text}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.purpose.title}</h2>
            {t.privacy.sections.purpose.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {text}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.hosting.title}</h2>
            {t.privacy.sections.hosting.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {text}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.storage.title}</h2>
            {t.privacy.sections.storage.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {index === 1 ? (
                  <>
                    Sie können sich jederzeit per E-Mail an{" "}
                    <a href="mailto:hello@miauzly.ch" className="text-[#4982A6] hover:underline">
                      hello@miauzly.ch
                    </a>{" "}
                    abmelden oder Ihre Daten löschen lassen.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.rights.title}</h2>
            {t.privacy.sections.rights.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {index === 1 ? (
                  <>
                    Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie uns eine E-Mail an{" "}
                    <a href="mailto:hello@miauzly.ch" className="text-[#4982A6] hover:underline">
                      hello@miauzly.ch
                    </a>{" "}
                    senden.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.security.title}</h2>
            <p>{t.privacy.sections.security.content[0]}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl mb-4 font-sans">{t.privacy.sections.changes.title}</h2>
            {t.privacy.sections.changes.content.map((text, index) => (
              <p key={index} className={index > 0 ? "mt-4" : ""}>
                {index === 1 ? <strong>{text}</strong> : text}
              </p>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
