"use client"

import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#2D2D2D] text-white px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl">miauzly.ch</h3>
            </div>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.impressum}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  {t.footer.links.datenschutz}
                </Link>
              </li>
              <li>
                <a href="mailto:hello@miauzly.ch" className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                  hello@miauzly.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm opacity-60">{t.footer.social}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/miauzlycats"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@miauzlycats"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4ECDC4] flex items-center justify-center transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          <p className="text-gray-400 text-sm">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
