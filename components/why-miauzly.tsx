"use client"
import { useLanguage } from "@/contexts/language-context"
import { Cat, Handshake, BadgeCheckIcon, Lightbulb, MapPinIcon } from "lucide-react"

export function WhyMiauzly() {
  const { t } = useLanguage()

  const icons = [
    <Cat key="cat" className="w-7 h-7 text-background" />,
    <Handshake key="handshake" className="w-7 h-7 text-background" />,
    <BadgeCheckIcon key="home" className="w-7 h-7 text-background" />,
    <Lightbulb key="lightbulb" className="w-7 h-7 text-background" />,
    <MapPinIcon key="mappin" className="w-7 h-7 text-background" />,
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-[#FFF5E6] text-[rgba(254,118,7,1)] bg-[rgba(255,191,29,1)]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-[#2D2D2D] mb-6">{t.whyMiauzly.title}</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-[#2D2D2D] text-xl">
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#01A4FE] to-[#01A4FE] flex items-center justify-center flex-shrink-0 text-card bg-card">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="mb-2 text-[#2D2D2D] font-bold text-xl">{feature.title}</h3>
                  <p className="text-[#6B6B6B] text-xl">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
