"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function AboutUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.aboutUs.title}</h2>
        </div>

        <div className="bg-[#FF8204] rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6">
              <Image
                src="/images/rubi-ramiro.png"
                alt="Rubi & Ramiro"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-white text-xl leading-relaxed">
              {t.aboutUs.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
