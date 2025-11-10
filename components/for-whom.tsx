"use client"

import { Heart, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ForWhom() {
  const { t } = useLanguage()

  const icons = [<Heart key="heart" className="w-8 h-8" />, <Users key="users" className="w-8 h-8" />]

  const emojis = ["🏠", "🐾"]
  const colors = ["#F2A81D", "#4982A6"]

  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-4">{t.forWhom.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.forWhom.audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 transition-all border-2 border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${colors[index]}15` }}
                >
                  {emojis[index]}
                </div>
                <h3 className="text-[#2D2D2D]">{audience.title}</h3>
              </div>

              <ul className="space-y-4">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: colors[index] }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#2D2D2D] flex-1">{benefit}</p>
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
