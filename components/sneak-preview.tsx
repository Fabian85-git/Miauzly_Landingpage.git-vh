"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

export function SneakPreview() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setSelectedIndex(index)
          }
        })
      },
      { root: container, threshold: 0.5 },
    )

    const slides = container.querySelectorAll("[data-index]")
    slides.forEach((slide) => observer.observe(slide))

    return () => observer.disconnect()
  }, [])

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current
    if (!container) return
    const slides = container.querySelectorAll("[data-index]")
    const slide = slides[index] as HTMLElement
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }, [])

  const mockups = [
    {
      src: "/images/1-home-preview.jpg",
      alt: "Miauzly App - Home",
      label: t.sneakPreview.mockups[0],
    },
    {
      src: "/images/3-profil-besitzer-preview.jpg",
      alt: "Miauzly App - Besitzer Profil",
      label: t.sneakPreview.mockups[1],
    },
    {
      src: "/images/4-termine-preview.jpg",
      alt: "Miauzly App - Termine",
      label: t.sneakPreview.mockups[2],
    },
    {
      src: "/images/5-marktplatz-preview.jpg",
      alt: "Miauzly App - Marktplatz",
      label: t.sneakPreview.mockups[3],
    },
  ]

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.sneakPreview.title}</h2>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-8">
          <div
            ref={scrollRef}
            className="overflow-x-auto snap-x snap-mandatory flex scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockups.map((mockup, index) => (
              <div key={index} data-index={index} className="flex-shrink-0 w-full snap-center px-4">
                <div className="flex flex-col items-center">
                  <div className="bg-[#2D2D2D] rounded-[2rem] p-2 w-full max-w-[280px] mx-auto">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden">
                      <Image
                        src={mockup.src || "/placeholder.svg"}
                        alt={mockup.alt}
                        width={280}
                        height={560}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#6B6B6B]">{mockup.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {mockups.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-brand-blue" : "bg-gray-300"
                }`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block mb-8">
          <div className="overflow-x-auto">
            <div className="flex gap-8 pb-4">
              {mockups.map((mockup, index) => (
                <div key={index} className="flex flex-col items-center flex-shrink-0">
                  <div className="bg-[#2D2D2D] rounded-[2rem] p-2 w-[280px]">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden">
                      <Image
                        src={mockup.src || "/placeholder.svg"}
                        alt={mockup.alt}
                        width={280}
                        height={560}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#6B6B6B]">{mockup.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-[#6B6B6B]">
            {t.sneakPreview.description}
            <br />
            {t.sneakPreview.cta}
          </p>
        </div>
      </div>
    </section>
  )
}
