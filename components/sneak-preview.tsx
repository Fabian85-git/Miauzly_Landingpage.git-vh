"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function SneakPreview() {
  const { t } = useLanguage()

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-4">{t.sneakPreview.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Mockup 1: Cat Owner List */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2D2D2D] rounded-[2rem] p-2 shadow-2xl w-full max-w-[280px]">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/images/app-list-catowner.png"
                  alt="Miauzly App - Katzenhalter Liste"
                  width={280}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B6B6B]">{t.sneakPreview.mockups[0]}</p>
          </div>

          {/* Mockup 2: Sitter Profile */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2D2D2D] rounded-[2rem] p-2 shadow-2xl w-full max-w-[280px]">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/images/app-profile-sitter.png"
                  alt="Miauzly App - Sitter Profil"
                  width={280}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B6B6B]">{t.sneakPreview.mockups[1]}</p>
          </div>

          {/* Mockup 3: Forum */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2D2D2D] rounded-[2rem] p-2 shadow-2xl w-full max-w-[280px]">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/images/app-forum.png"
                  alt="Miauzly App - Forum"
                  width={280}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-[#6B6B6B]">{t.sneakPreview.mockups[2]}</p>
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
