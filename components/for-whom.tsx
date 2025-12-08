"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function ForWhom() {
  const { t } = useLanguage()

  const icons = [
    <Image
      key="holding"
      src="/images/holding2.svg"
      alt="Holding cat"
      width={200}
      height={200}
      className="h-[200px] w-[200px]"
    />,
    <Image
      key="sitting"
      src="/images/sitting2.svg"
      alt="Sitting cat"
      width={200}
      height={200}
      className="h-[200px] w-[200px]"
    />,
  ]

  const emojis = ["🏠", "🐾"]
  const colors = ["#0062F0", "#FFA2CD"]

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.forWhom.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.forWhom.audiences.map((audience, index) => (
            <div key={index} className="rounded-3xl p-8 transition-all" style={{ backgroundColor: colors[index] }}>
              <div className="flex flex-col gap-4 mb-6 items-start">
                {icons[index]}
                <h3 className="text-white font-bold text-center text-2xl">{audience.title}</h3>
              </div>

              <ul className="space-y-4">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white">
                      <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white flex-1 text-xl">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
