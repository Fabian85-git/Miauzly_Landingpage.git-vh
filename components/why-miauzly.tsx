"use client"
import { useLanguage } from "@/contexts/language-context"

export function WhyMiauzly() {
  const { t } = useLanguage()

  const emojis = ["🐱", "🤝", "🏡", "💡", "🇨🇭"]

  return (
    <section className="px-4 py-16 md:py-24 bg-[rgba(255,173,8,1)]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#2D2D2D] mb-6">{t.whyMiauzly.title}</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-[#2D2D2D]">
            {t.whyMiauzly.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyMiauzly.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 transition-all border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF5E6] to-[#E8F3F8] flex items-center justify-center text-2xl flex-shrink-0">
                  {emojis[index]}
                </div>
                <div>
                  <h3 className="mb-2 text-[#2D2D2D]">{feature.title}</h3>
                  <p className="text-[#6B6B6B]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
