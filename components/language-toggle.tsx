"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => setLanguage("de")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "de" ? "bg-white text-[#2D2D2D]" : "bg-transparent text-white hover:bg-white/20"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === "en" ? "bg-white text-[#2D2D2D]" : "bg-transparent text-white hover:bg-white/20"
        }`}
      >
        EN
      </button>
    </div>
  )
}
